import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

interface Env {
  __STATIC_CONTENT: KVNamespace;
  ENVIRONMENT: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      // Handle static assets from KV
      return await getAssetFromKV(
        {
          request,
          waitUntil: () => {},
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: ASSET_MANIFEST,
        }
      );
    } catch (error) {
      // If asset not found, return index.html for SPA routing
      if (request.method === 'GET') {
        try {
          return await getAssetFromKV(
            {
              request: new Request(`${new URL(request.url).origin}/index.html`, request),
              waitUntil: () => {},
            },
            {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: ASSET_MANIFEST,
            }
          );
        } catch (e) {
          return new Response('Not Found', { status: 404 });
        }
      }

      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
