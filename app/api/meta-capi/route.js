const defaultPixelId = "1086217957223175";
const defaultGraphVersion = "v26.0";

function readCookie(cookieHeader, name) {
  return cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.slice(name.length + 1);
}

function readClientIp(headers) {
  const forwardedFor = headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return headers.get("cf-connecting-ip") || headers.get("x-real-ip") || "";
}

export async function POST(request) {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID || defaultPixelId;
  const graphVersion = process.env.META_GRAPH_API_VERSION || defaultGraphVersion;

  if (!accessToken) {
    return Response.json(
      { ok: false, error: "Missing META_CAPI_ACCESS_TOKEN" },
      { status: 500 },
    );
  }

  let body = {};

  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const cookieHeader = request.headers.get("cookie") || "";
  const fbp = readCookie(cookieHeader, "_fbp");
  const fbc =
    readCookie(cookieHeader, "_fbc") ||
    (body.fbclid ? `fb.1.${Date.now()}.${body.fbclid}` : undefined);

  const userData = {
    client_ip_address: readClientIp(request.headers),
    client_user_agent: request.headers.get("user-agent") || "",
    ...(fbp ? { fbp } : {}),
    ...(fbc ? { fbc } : {}),
  };

  const payload = {
    data: [
      {
        event_name: body.eventName || "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.eventId,
        event_source_url: body.eventSourceUrl,
        action_source: "website",
        user_data: userData,
      },
    ],
  };

  const response = await fetch(
    `https://graph.facebook.com/${graphVersion}/${pixelId}/events`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        access_token: accessToken,
      }),
    },
  );

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    return Response.json(
      { ok: false, error: "Meta CAPI request failed", result },
      { status: response.status },
    );
  }

  return Response.json({ ok: true, result });
}
