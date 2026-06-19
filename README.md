# WellnessLiving JS/TS SDK

Auto-generated JavaScript and TypeScript SDK for the WellnessLiving API,
built from the OpenAPI spec at https://github.com/wellnessliving/openapi.

## Channels

Each channel matches a WellnessLiving environment. Install the one you are testing against:

| Channel       | Branch    | WL environment       | Install command                                           |
|---------------|-----------|----------------------|-----------------------------------------------------------|
| Production    | `main`    | Production servers   | `npm install github:wellnessliving/wl-openapi-js`         |
| Stable        | `stable`  | Stable / staging     | `npm install github:wellnessliving/wl-openapi-js#stable`  |
| Dev           | `dev`     | Dev / trunk          | `npm install github:wellnessliving/wl-openapi-js#dev`     |

No GitHub token or `.npmrc` setup required — the repository is public.

## File formats

Each channel produces four files:

| File             | Format                  | Use case                                  |
|------------------|-------------------------|-------------------------------------------|
| `wl-sdk.js`      | Browser UMD             | `<script>` tag, CDN, no bundler needed    |
| `wl-sdk.esm.js`  | ES Module               | Bundlers (Vite, webpack, Rollup)          |
| `wl-sdk.cjs.js`  | CommonJS                | Node.js `require()`                       |
| `wl-sdk.d.ts`    | TypeScript declarations | IDE autocompletion for all three above    |

---

## Option A: Browser `<script>` tag (UMD)

No install required — load directly from CDN.

```html
<!-- Stable channel -->
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-openapi-js@stable/wl-sdk.js"></script>

<!-- Dev channel -->
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-openapi-js@dev/wl-sdk.js"></script>

<script>
  var client = new WlSdk({ token: 'YOUR_JWT_TOKEN' });

  client.wlBusinessData({ k_business: '1000' })
    .then(function(data) { console.log(data); })
    .catch(function(err) { console.error(err.status, err.message); });
</script>
```

The UMD build exposes a flat method API: one method per API endpoint.
Method names are derived from the URL path in camelCase:
`/Wl/Business/Data.json` → `client.wlBusinessData(params)`.

---

## Option B: npm (ESM / CJS + TypeScript)

Install the channel matching your WellnessLiving environment:

```bash
# Stable (most common)
npm install github:wellnessliving/wl-openapi-js#stable

# Dev / trunk
npm install github:wellnessliving/wl-openapi-js#dev

# Production
npm install github:wellnessliving/wl-openapi-js
```

The import is always the same regardless of channel:

```typescript
import WlClient, { WlApiError } from '@wellnessliving/sdk';

const client = new WlClient({ token: 'YOUR_JWT_TOKEN' });

// URL: /Wl/Business/Data.json
const data = await client.wl.business.data({ k_business: '1000' });

// URL: /Thoth/WlPay/Account/Charge.json
const charge = await client.thoth.wlPay.account.charge({ ... });
```

Switching environments = change the `package.json` dependency to the other branch and run `npm install`.

### Error handling

```typescript
try {
  const result = await client.wl.business.data({ k_business: '1000' });
} catch (e) {
  if (e instanceof WlApiError) {
    console.error(e.status);    // HTTP status code, e.g. 401
    console.error(e.errors);    // WlApiErrorDetail[] from the API response body
  }
}
```

### Pinning to a specific version

```bash
npm install github:wellnessliving/wl-openapi-js#stable-v1.1.20260619090040
```

### Constructor options

| Option    | Type     | Default                              | Description                                                                     |
|-----------|----------|--------------------------------------|---------------------------------------------------------------------------------|
| `token`   | `string` | `null`                               | JWT Bearer token for authentication.                                            |
| `baseUrl` | `string` | `https://staging.wellnessliving.com` | API server. Use `https://demo.wellnessliving.com` for the Australia datacenter. |
| `timeout` | `number` | `30000`                              | Request timeout in milliseconds.                                                |

---

## Rebuilding locally

```bash
npm install

# Regenerate browser UMD (stable + dev)
npm run generate

# Regenerate TypeScript source and compile to ESM + CJS + .d.ts
npm run compile

# Do both at once
npm run build
```

Individual channels:

```bash
npm run generate:stable   # stable/wl-sdk.js
npm run generate:dev      # dev/wl-sdk.js
npm run compile:stable    # stable/wl-sdk.esm.js, .cjs.js, .d.ts
npm run compile:dev       # dev/wl-sdk.esm.js, .cjs.js, .d.ts
```

---

## Automatic builds

A GitHub Actions workflow (`.github/workflows/build.yml`) rebuilds and commits
all files whenever the upstream OpenAPI spec changes, and also runs daily at 08:00 UTC.

Each build:
1. Downloads the latest `stable/openapi.yaml` and `dev/openapi.yaml`
2. Generates `stable/wl-sdk.js` and `dev/wl-sdk.js` (browser UMD)
3. Generates TypeScript source and compiles to `*.esm.js`, `*.cjs.js`, `*.d.ts`
4. Updates root files on `main` (production or stable fallback)
5. Pushes flat distribution files to `stable` and `dev` branches
6. Creates a GitHub Release with all files as assets

See [docs/notify-setup.md](docs/notify-setup.md) for cross-repo trigger setup.

---

## Links

- [API Documentation](https://wellnessliving.github.io/openapi/)
- [OpenAPI Repository](https://github.com/wellnessliving/openapi)
- [WellnessLiving](https://www.wellnessliving.com)
