# Setting up automatic SDK rebuild on spec change

When `stable/openapi.yaml` or `dev/openapi.yaml` is updated in the
[wellnessliving/openapi](https://github.com/wellnessliving/openapi) repository,
the SDK is rebuilt automatically via a `repository_dispatch` event.

## What gets built

Each rebuild produces files for both `stable/` and `dev/` channels:

| File              | Format                            | Use case                       |
|-------------------|-----------------------------------|--------------------------------|
| `wl-sdk.js`       | Browser UMD (single file)         | `<script>` tag, CDN            |
| `wl-sdk.esm.js`   | ES Module (typed, tree-shakeable) | Bundlers (Vite, webpack, etc.) |
| `wl-sdk.cjs.js`   | CommonJS (typed)                  | Node.js `require()`            |
| `wl-sdk.d.ts`     | TypeScript declarations           | IDE autocompletion             |

## How it works

```
openapi repo                        wl-sdk-js-v2 repo
─────────────────────────────────   ──────────────────────────────────
push to stable/openapi.yaml    -->  repository_dispatch: openapi-updated
                                -->  node scripts/generate.js   (browser UMD)
                                -->  node scripts/generate-ts.js (TypeScript source)
                                -->  node scripts/compile.js    (ESM + CJS + d.ts)
                                -->  git commit stable/ dev/
                                -->  git push
                                -->  gh release create vX.X.XXXXXXXX
                                -->  npm publish @wellnessliving/sdk
```

## Step 1 - Create a Personal Access Token

1. Go to **GitHub -> Settings -> Developer settings -> Personal access tokens -> Fine-grained tokens**.
2. Click **Generate new token**.
3. Set:
   - **Token name**: `wl-sdk-js-v2 dispatch`
   - **Expiration**: choose a suitable period (or "No expiration")
   - **Resource owner**: `wellnessliving`
   - **Repository access**: only `wl-sdk-js-v2`
   - **Permissions**:
     - **Actions** - Read and write
     - **Contents** - Read and write
4. Click **Generate token** and copy the value - it will not be shown again.

## Step 2 - Add the token as a secret in the openapi repo

1. Open **github.com/wellnessliving/openapi -> Settings -> Secrets and variables -> Actions**.
2. Click **New repository secret**.
3. Set:
   - **Name**: `SDK_DISPATCH_TOKEN`
   - **Value**: paste the token from Step 1.
4. Click **Add secret**.

## Step 3 - Add the notify workflow to the openapi repo

Create the file `.github/workflows/notify-sdk.yml` in the
`wellnessliving/openapi` repository with the following content:

```yaml
name: Notify SDK repo

on:
  push:
    branches: [main]
    paths:
      - 'stable/openapi.yaml'
      - 'dev/openapi.yaml'

jobs:
  dispatch:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger SDK rebuild
        uses: peter-evans/repository-dispatch@v3
        with:
          token: ${{ secrets.SDK_DISPATCH_TOKEN }}
          repository: wellnessliving/wl-sdk-js-v2
          event-type: openapi-updated
```

## Step 4 - Verify

Push any change to `stable/openapi.yaml` in the openapi repo.
After a few seconds, a new workflow run should appear in
**github.com/wellnessliving/wl-sdk-js-v2 -> Actions**.

Once the run completes, check:

- **Commits** - a new commit `chore: regenerate SDK from OpenAPI spec` should appear on `main`.
- **Releases** - a new release tagged `vX.X.XXXXXXXX` should appear under
  **github.com/wellnessliving/wl-sdk-js-v2 -> Releases**, with 8 attached files
  (stable and dev variants of `.js`, `.esm.js`, `.cjs.js`, `.d.ts`).
- **Packages** - `@wellnessliving/sdk` should appear under
  **github.com/wellnessliving -> Packages**.

If the spec version did not change (same tag already exists), the release and publish steps are
skipped and only the commit is made.

## GitHub Release details

**Tag format:** `v{stable spec version}`, e.g. `v1.1.20260619090040`.

**Assets attached to each release:**

| File                   | Description                            |
|------------------------|----------------------------------------|
| `wl-sdk-stable.js`     | Browser UMD from `stable/openapi.yaml` |
| `wl-sdk-dev.js`        | Browser UMD from `dev/openapi.yaml`    |
| `wl-sdk-stable.esm.js` | ES Module from `stable/openapi.yaml`   |
| `wl-sdk-dev.esm.js`    | ES Module from `dev/openapi.yaml`      |
| `wl-sdk-stable.cjs.js` | CommonJS from `stable/openapi.yaml`    |
| `wl-sdk-dev.cjs.js`    | CommonJS from `dev/openapi.yaml`       |
| `wl-sdk-stable.d.ts`   | TypeScript declarations (stable)       |
| `wl-sdk-dev.d.ts`      | TypeScript declarations (dev)          |

**CDN links (jsDelivr) - browser UMD:**

```html
<!-- Pinned to a specific release -->
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-sdk-js-v2@v1.1.20260619090040/stable/wl-sdk.js"></script>

<!-- Latest on main branch -->
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-sdk-js-v2@main/stable/wl-sdk.js"></script>
```

## npm package (GitHub Packages)

The package is published as `@wellnessliving/sdk` to GitHub Packages on each build.

**Install:**

```bash
# Add to .npmrc:
@wellnessliving:registry=https://npm.pkg.github.com

# Then install:
npm install @wellnessliving/sdk
```

**TypeScript usage:**

```typescript
import WlClient, { WlApiError } from '@wellnessliving/sdk';

const client = new WlClient({ token: 'your-jwt-token' });

try {
  const result = await client.wl.business.data({ k_business: '123' });
  console.log(result);
} catch (e) {
  if (e instanceof WlApiError) {
    console.error('API error', e.status, e.errors);
  }
}
```

**Dev channel (latest spec including unreleased features):**

```typescript
import WlClient from '@wellnessliving/sdk/dev';
```

**Version:** matches the OpenAPI spec version, e.g. `1.1.20260619090040`.

## Token expiry

If the token has an expiration date, set a calendar reminder to rotate it before
it expires. An expired token causes the dispatch step to fail silently - the daily
schedule fallback (`cron: '0 8 * * *'` in `build.yml`) will keep the SDK
updating in the meantime.
