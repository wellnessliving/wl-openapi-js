# WellnessLiving JS/TS SDK

Auto-generated JavaScript and TypeScript SDK for the WellnessLiving API, built from the
[OpenAPI specification](https://github.com/wellnessliving/openapi).

Each API endpoint is available as a camelCase method on the client object derived from the URL path.

## Channels

| Channel      | Spec                      | Branch   | Description                                    |
|--------------|---------------------------|----------|------------------------------------------------|
| `production` | `production/openapi.yaml` | `main`   | Dedicated production API channel.              |
| `stable`     | `stable/openapi.yaml`     | `stable` | Follows the live WellnessLiving platform.      |
| `dev`        | `dev/openapi.yaml`        | `dev`    | Latest features; may include breaking changes. |

## Structure

All three branches share the same flat layout at the root. The `main` branch additionally
contains the generator under `scripts/`.

```
wl-sdk.js       - browser UMD build
wl-sdk.esm.js   - ES Module build (bundlers: Vite, webpack, Rollup)
wl-sdk.cjs.js   - CommonJS build (Node.js require())
wl-sdk.d.ts     - TypeScript declarations
package.json    - package metadata pointing to the above files
scripts/        - SDK generator (main branch only, not part of the package)
```

## Requirements

- Node.js 18 or later (for ESM / CJS builds)
- Any modern browser (for the UMD build)

## Installation

Each channel is installed directly from its git branch. No registry or authentication required.

| Channel    | Branch   | When to use                               |
|------------|----------|-------------------------------------------|
| production | `main`   | Production API - default for live apps    |
| stable     | `stable` | Tracks the live platform                  |
| dev        | `dev`    | Feature development - latest endpoints    |

```bash
# Deploy to production environment
npm install github:wellnessliving/wl-openapi-js

# Stabilizing / QA - switch to stable
npm install github:wellnessliving/wl-openapi-js#stable

# Development - use dev channel
npm install github:wellnessliving/wl-openapi-js#dev
```

The import path is always the same regardless of channel - switching requires no code changes,
only an `npm install` command.

### Browser (CDN)

No install required - load directly via jsDelivr:

```html
<!-- Stable channel -->
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-openapi-js@stable/wl-sdk.js"></script>

<!-- Dev channel -->
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-openapi-js@dev/wl-sdk.js"></script>
```

## Usage

```typescript
import WlClient, { WlApiError } from '@wellnessliving/sdk';

const client = new WlClient({ token: 'YOUR_JWT_TOKEN' });

// URL: /Wl/Business/Data.json
const data = await client.wlBusinessData({ k_business: '1000' });
```

Method names are derived from the URL path in camelCase:
`/Wl/Business/Data.json` -> `client.wlBusinessData(params)`.

For the UMD build the client is exposed as the global `WlSdk`:

```html
<script>
  var client = new WlSdk({ token: 'YOUR_JWT_TOKEN' });

  client.wlBusinessData({ k_business: '1000' })
    .then(function(data) { console.log(data); });
</script>
```

### Constructor options

| Option    | Type            | Default                              | Description                                                                         |
|-----------|-----------------|--------------------------------------|-------------------------------------------------------------------------------------|
| `token`   | `string\|null`  | `null`                               | JWT Bearer token for authentication.                                                |
| `baseUrl` | `string`        | `https://staging.wellnessliving.com` | API server base URL. Use `https://demo.wellnessliving.com` for the Australia data center. |
| `timeout` | `number`        | `30000`                              | Request timeout in milliseconds.                                                    |

### Error handling

On a non-2xx HTTP response a `WlApiError` is thrown. It exposes:

- `.status` - HTTP status code.
- `.errors` - `WlApiErrorDetail[]` from the API response body.

```typescript
import WlClient, { WlApiError } from '@wellnessliving/sdk';

const client = new WlClient({ token: 'YOUR_JWT_TOKEN' });

try {
  const data = await client.wlBusinessData({ k_business: '1000' });
} catch (e) {
  if (e instanceof WlApiError) {
    console.error('HTTP ' + e.status);
    console.error(e.errors);
  }
}
```

### Pinning a specific version

Each channel release tags the spec version (e.g. `stable-1.1.20260619090040`).
To pin:

```bash
npm install github:wellnessliving/wl-openapi-js#stable-1.1.20260619090040
```

## Regenerating the SDK locally

```bash
npm install
npm run generate        # regenerate all channels
npm run generate:stable # regenerate stable only
npm run generate:dev    # regenerate dev only
npm run compile         # compile TypeScript to ESM + CJS + d.ts
npm run build           # generate + compile
```

## Automation

GitHub Actions checks for upstream spec changes daily at 08:00 UTC. When a channel's
spec version changes, it commits the updated files and creates a separate GitHub Release
for that channel:

| Channel    | Tag format           | Release type   |
|------------|----------------------|----------------|[build.yml](../wl-sdk-php-v2/.github/workflows/build.yml)
| production | `production-VERSION` | Latest release |
| stable     | `stable-VERSION`     | Pre-release    |
| dev        | `dev-VERSION`        | Release        |

Each release contains only the zip for its channel (`wl-openapi-js.zip`).
Channels that did not change in a given run do not produce a new release.

## Automation setup

To trigger automatic rebuilds when the OpenAPI spec changes, see
[docs/notify-setup.md](docs/notify-setup.md).

## Resources

- [API documentation](https://developers.wellnessliving.com)
- [OpenAPI specification repository](https://github.com/wellnessliving/openapi)
- [WellnessLiving](https://www.wellnessliving.com)