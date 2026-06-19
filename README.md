# WellnessLiving JS SDK

Auto-generated JavaScript SDK for the WellnessLiving API.

Built automatically from the OpenAPI specification published at
https://github.com/wellnessliving/openapi

## Versions

| Channel   | SDK file                             | OpenAPI spec                                                                                   |
|-----------|--------------------------------------|------------------------------------------------------------------------------------------------|
| `stable/` | [stable/wl-sdk.js](stable/wl-sdk.js) | [stable/openapi.yaml](https://github.com/wellnessliving/openapi/blob/main/stable/openapi.yaml) |
| `dev/`    | [dev/wl-sdk.js](dev/wl-sdk.js)       | [dev/openapi.yaml](https://github.com/wellnessliving/openapi/blob/main/dev/openapi.yaml)       |

## Usage

### Browser (script tag)

```html
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-sdk-js-v2@main/stable/wl-sdk.js"></script>
<script>
  var client = new WlSdk({
    token: 'YOUR_JWT_TOKEN',
    // baseUrl: 'https://demo.wellnessliving.com'  // for Australia data center
  });

  client.coreRequestExample()
    .then(function(data) { console.log(data); })
    .catch(function(err) { console.error(err.status, err.response); });
</script>
```

### CommonJS (Node.js)

```js
var WlSdk = require('./stable/wl-sdk.js');

var client = new WlSdk({ token: 'YOUR_JWT_TOKEN' });
client.wlBusinessInformation({ k_business: '1000' }).then(console.log);
```

### AMD (RequireJS)

```js
define(['stable/wl-sdk'], function(WlSdk) {
  var client = new WlSdk({ token: 'YOUR_JWT_TOKEN' });
});
```

## Constructor options

| Option    | Type     | Default                              | Description                                                      |
|-----------|----------|--------------------------------------|------------------------------------------------------------------|
| `token`   | `string` | `null`                               | JWT Bearer token for authentication.                             |
| `baseUrl` | `string` | `https://staging.wellnessliving.com` | API server. Use `https://demo.wellnessliving.com` for Australia. |
| `timeout` | `number` | `30000`                              | Request timeout in milliseconds.                                 |

## Error handling

On a non-2xx response the returned `Promise` rejects with an `Error` that has two extra properties:

```js
client.someMethod({ ... }).catch(function(err) {
  console.log(err.status);    // HTTP status code, e.g. 401
  console.log(err.response);  // parsed JSON body from the API
});
```

## Rebuilding locally

```bash
npm install
npm run generate          # regenerates both stable/ and dev/
npm run generate:stable   # only stable
npm run generate:dev      # only dev
```

## Automatic builds

A GitHub Actions workflow (`.github/workflows/build.yml`) runs every day at 08:00 UTC and
commits updated SDK files if the upstream OpenAPI spec has changed.

The workflow also triggers on any push to `scripts/` or `package.json`.

## Links

- [API Documentation](https://wellnessliving.github.io/openapi/)
- [OpenAPI Repository](https://github.com/wellnessliving/openapi)
- [WellnessLiving](https://www.wellnessliving.com)
