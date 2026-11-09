const CANONICAL_HOST = "tawalacafe.co.ke";

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();
  const shouldUseHttps = host === CANONICAL_HOST && url.protocol !== "https:";
  const shouldUseApex = host === `www.${CANONICAL_HOST}`;

  if (shouldUseHttps || shouldUseApex) {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  const response = await next();
  if (!host.endsWith(".pages.dev")) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex, nofollow");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
