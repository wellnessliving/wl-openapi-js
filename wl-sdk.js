/*!
 * WellnessLiving JavaScript SDK (stable)
 * Spec version: 1.1.20260622104501
 * Build date:   2026-06-22
 * Endpoints:    456
 *
 * Auto-generated from:
 * https://github.com/wellnessliving/openapi/blob/main/stable/openapi.yaml
 *
 * Usage (browser via script tag):
 *   <script src="wl-sdk.js"></script>
 *   <script>
 *     var client = new WlSdk({ token: 'YOUR_JWT_TOKEN' });
 *     client.coreRequestExample().then(function(data) { console.log(data); });
 *   </script>
 *
 * Usage (CommonJS / Node.js):
 *   var WlSdk = require('./wl-sdk.js');
 *   var client = new WlSdk({ token: 'YOUR_JWT_TOKEN' });
 *
 * Usage (AMD / RequireJS):
 *   define(['wl-sdk'], function(WlSdk) { ... });
 */
(function(global, factory)
{
  if (typeof exports === 'object' && typeof module !== 'undefined')
  {
    module.exports = factory();
  }
  else if (typeof define === 'function' && define.amd)
  {
    define(factory);
  }
  else
  {
    (typeof globalThis !== 'undefined' ? globalThis : global || self).WlSdk = factory();
  }
})(this, function()
{
  'use strict';

  /**
   * WellnessLiving API client.
   *
   * @param {Object} options Configuration options.
   * @param {string} [options.token] JWT Bearer token for authentication.
   * @param {string} [options.baseUrl] API server base URL.
   *  Default: 'https://staging.wellnessliving.com' (US data center).
   *  Use 'https://demo.wellnessliving.com' for the Australia data center.
   * @param {number} [options.timeout] Request timeout in milliseconds. Default: 30000.
   * @constructor
   */
  function WlClient(options)
  {
    if (!options || typeof options !== 'object')
    {
      throw new TypeError('WlSdk: options must be a plain object');
    }

    /** @type {string|null} JWT Bearer token for authentication. */
    this.token = options.token || null;

    /** @type {string} API server base URL (no trailing slash). */
    this.baseUrl = options.baseUrl || 'https://staging.wellnessliving.com';
    if (this.baseUrl.charAt(this.baseUrl.length - 1) === '/')
    {
      this.baseUrl = this.baseUrl.slice(0, -1);
    }

    /** @type {number} Request timeout in milliseconds. */
    this.timeout = (options.timeout > 0) ? Number(options.timeout) : 30000;
  }

  /**
   * Sends an HTTP request to the API.
   *
   * GET and HEAD requests encode params as a query string.
   * All other methods encode params as application/x-www-form-urlencoded body.
   *
   * @param {string} path Endpoint path (e.g., '/Core/Request/Example.json').
   * @param {Object} params Query parameters (GET) or form fields (POST/PUT/etc.).
   * @param {string} method HTTP method: 'GET', 'POST', 'PUT', 'DELETE', etc.
   * @returns {Promise<Object>} Parsed JSON response data.
   */
  WlClient.prototype.request = function(path, params, method)
  {
    var self = this;
    var httpMethod = (method || 'GET').toUpperCase();
    var url = self.baseUrl + path;
    var headers = {};

    if (self.token)
    {
      headers['Authorization'] = 'Bearer ' + self.token;
    }

    var fetchOptions = {
      method: httpMethod,
      headers: headers,
    };

    if (httpMethod === 'GET' || httpMethod === 'HEAD')
    {
      var parts = [];
      if (params && typeof params === 'object')
      {
        Object.keys(params).forEach(function(key)
        {
          var val = params[key];
          if (Array.isArray(val))
          {
            val.forEach(function(item)
            {
              if (item !== null && item !== undefined)
              {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(item)));
              }
            });
          }
          else if (val !== null && val !== undefined)
          {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(val)));
          }
        });
      }
      if (parts.length > 0)
      {
        url = url + '?' + parts.join('&');
      }
    }
    else
    {
      var formData = new URLSearchParams();
      if (params && typeof params === 'object')
      {
        Object.keys(params).forEach(function(key)
        {
          var val = params[key];
          if (Array.isArray(val))
          {
            val.forEach(function(item)
            {
              if (item !== null && item !== undefined)
              {
                formData.append(key, String(item));
              }
            });
          }
          else if (val !== null && val !== undefined)
          {
            formData.append(key, String(val));
          }
        });
      }
      fetchOptions.body = formData;
    }

    var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var timerId = null;

    if (controller)
    {
      fetchOptions.signal = controller.signal;
      timerId = setTimeout(function()
      {
        controller.abort();
      }, self.timeout);
    }

    function cleanup()
    {
      if (timerId !== null)
      {
        clearTimeout(timerId);
        timerId = null;
      }
    }

    return fetch(url, fetchOptions).then(
      function(response)
      {
        cleanup();
        return response.json().then(function(data)
        {
          if (!response.ok)
          {
            var err = new Error('WlSdk: ' + httpMethod + ' ' + path + ' returned HTTP ' + response.status);
            err.status = response.status;
            err.response = data;
            throw err;
          }
          return data;
        });
      },
      function(err)
      {
        cleanup();
        throw err;
      }
    );
  };

  /**
   * SDK channel: 'stable' or 'dev'.
   * @type {string}
   */
  WlClient.CHANNEL = 'stable';

  /**
   * OpenAPI spec version this SDK was generated from.
   * @type {string}
   */
  WlClient.SPEC_VERSION = '1.1.20260622104501';

  // ---------------------------------------------------------------------------
  // Generated API methods (456 total)
  // ---------------------------------------------------------------------------

  /**
   * Gets list of class sessions based on search criteria.
   *
   * Returns sessions matching the given geographic area, date range, and optional filters for business,
   * location, staff, experience type, home tour type, price, and location rating.
   * Only sessions within their current booking window are included in the result.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_business List of business keys to search by.
   * @param {number[]} params.a_experience_type List of experience types to search by. Each value is one of [ClassSessionExperienceTypeEnum](#/co...
   * @param {number[]} params.a_home_tour List of home tour activity types to search by. Each value is from [RsHomeTourSid](#/components/sc...
   * @param {string[]} params.a_location List of location keys to search by.
   * @param {number[]|string[]} params.a_location_rating List of location ratings to search by. Values are integers from 1 to 5, or `null`/`0` for unrated...
   * @param {string[]} params.a_staff_uid List of staff user keys to search by. Each value is a user key (uid) of a staff member.
   * @param {?string} [params.dl_begin] Start date of the session search date range in MySQL format (`Y-m-d`). Required.
   * @param {?string} [params.dl_end] End date of the session search date range in MySQL format (`Y-m-d`). Required.
   * @param {?number} [params.f_latitude] Latitude coordinate for search. Required.
   * @param {?number} [params.f_longitude] Longitude coordinate for search. Required.
   * @param {?number} [params.f_radius] Search radius in kilometers. Required.
   * @param {?string} [params.m_price_max] Maximum price to search by (inclusive). Decimal string in dollars (e.g. `"100.00"`).
   * @param {?string} [params.m_price_min] Minimum price to search by (inclusive). Decimal string in dollars (e.g. `"0.00"`).
   * @returns {Promise<Object>} Response data.
   *  `a_class_session` {Object} List of found class sessions.
   */
  WlClient.prototype.thothExplorerSearchClassSessionClassSessionSearch = function(params)
  {
    return this.request('/Thoth/ExplorerSearch/ClassSession/ClassSessionSearch.json', params || {}, 'GET');
  };

  /**
   * Returns contents of a report as a table.
   *
   * If the report is not yet generated, it gets generated.
   * If the report is being generated now, partial content may be returned.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `a_dynamic` {*[][]|Object[]} A list of dynamic fields in this report.
   *  `a_field` {string[]} A list of fields in this report.
   *  `a_row` {string[][]} Report data.
   *  `a_stale` {number[]} A list of stale rows.
   *  `a_warning` {string[]} Warning list of the report.
   *  `dtu_complete` {string} Date and time when this report has completed generation.
   *  `dtu_queue` {string} Date and time when this report was put on generation queue.
   *  `dtu_start` {string} Date and time when generation of this report has started.
   *  `i_cas_change` {number} A CAS (compare-and-swap) number that allows to track changes in the report st...
   *  `id_report_status` {number} Lists statuses of reports from point of view of its generation.
   *  `s_report` {string} Key of this report.
   *  `text_error` {string} Text of an error message that occurred during generation of the report.
   */
  WlClient.prototype.thothReportCoreGeneratorQuery = function(params)
  {
    return this.request('/Thoth/ReportCore/Generator/Query.json', params || {}, 'POST');
  };

  /**
   * Retrieves information about accounts of given user in given business.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_owner If `true`, information for the account's owner is returned. Clients can be configured to pay for ...
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.uid The key of the user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_account` {Object} A list of the user's accounts.
   *  `a_account_nx` {*[][]} A list of accounts that is not created for this user yet.
   *  `is_debtor` {boolean} Determines whether the user is a debtor. If `true` - the owner of this accoun...
   */
  WlClient.prototype.thothWlPayAccountAccount = function(params)
  {
    return this.request('/Thoth/WlPay/Account/Account.json', params || {}, 'GET');
  };

  /**
   * Returns information about payment environment.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to retrieve payment information for.
   * @param {string} params.k_currency The key of the currency to retrieve payment information for.
   * @param {string} params.k_location The key of the location to retrieve payment information for.
   * @param {?string} [params.uid_owner] The user ID to retrieve payment information for. Primary key in the PassportLoginSql table.
   * @returns {Promise<Object>} Response data.
   *  `a_card_system` {number[]} A list of supported bank card systems.
   *  `a_method_staff` {number[]} A list of payment methods enabled for staff members. The ID is one of [RsPayM...
   *  `a_method_support` {Object[]} A list of all payment methods that can be used within this business.
   *  `a_mobile_config` {?*[]} The configuration array that's sent to mobile card reader plugin.
   *  `a_pay_processor` {?Object[]} Represents information about payment processors.
   *  `dl_now` {string} Current local date in current location [EnvironmentApi](/Thoth/WlPay/Form/Env...
   *  `f_surcharge` {?string} Surcharge amount for payment with card represented as a percent of transactio...
   *  `f_surcharge_ach` {?string} Surcharge amount for payment with ACH represented as a percent of transaction...
   *  `id_locale` {?number} A list of locales.
   *  `is_save_optional` {boolean} `true` if clients can choose whether their banking and credit card informatio...
   *  `is_save_source` {boolean} Determines whether newly added payment sources should be saved. This will be ...
   *  `is_tip` {boolean} Whether tips are accepted.
   *  `m_surcharge` {?string} Surcharge amount for payment with card represented as a fixed amount.
   *  `m_surcharge_ach` {?string} Surcharge amount for payment with ACH represented as a fixed amount.
   */
  WlClient.prototype.thothWlPayFormEnvironmentUser = function(params)
  {
    return this.request('/Thoth/WlPay/Form/EnvironmentUser.json', params || {}, 'GET');
  };

  /**
   * Returns information about payment environment.
   * @deprecated Use {@link \Thoth\WlPay\Form\EnvironmentUserApi} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to retrieve payment information for.
   * @param {string} params.k_currency The key of the currency to retrieve payment information for.
   * @param {string} params.k_location The key of the location to retrieve payment information for.
   * @param {?string} [params.uid_owner] The user ID to retrieve payment information for. Primary key in the PassportLoginSql table.
   * @returns {Promise<Object>} Response data.
   *  `a_card_system` {number[]} A list of supported bank card systems.
   *  `a_method_staff` {number[]} A list of payment methods enabled for staff members. The ID is one of [RsPayM...
   *  `a_method_support` {Object[]} A list of all payment methods that can be used within this business.
   *  `a_mobile_config` {?*[]} The configuration array that's sent to mobile card reader plugin.
   *  `a_pay_processor` {?Object[]} Represents information about payment processors.
   *  `dl_now` {string} Current local date in current location [EnvironmentApi](/Thoth/WlPay/Form/Env...
   *  `f_surcharge` {?string} Surcharge amount for payment with card represented as a percent of transactio...
   *  `f_surcharge_ach` {?string} Surcharge amount for payment with ACH represented as a percent of transaction...
   *  `id_locale` {?number} A list of locales.
   *  `is_save_optional` {boolean} `true` if clients can choose whether their banking and credit card informatio...
   *  `is_save_source` {boolean} Determines whether newly added payment sources should be saved. This will be ...
   *  `is_tip` {boolean} Whether tips are accepted.
   *  `m_surcharge` {?string} Surcharge amount for payment with card represented as a fixed amount.
   *  `m_surcharge_ach` {?string} Surcharge amount for payment with ACH represented as a fixed amount.
   */
  WlClient.prototype.thothWlPayFormEnvironment = function(params)
  {
    return this.request('/Thoth/WlPay/Form/Environment.json', params || {}, 'GET');
  };

  /**
   * Returns list of active payment methods data.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_active Whether only active payment methods should be returned.
   * @param {string} params.k_business The business key.
   * @param {boolean} params.show_manual Whether payment method [RsPayMethodSid::ACCOUNT_MANUAL](#/components/schemas/RsPayMethodSid) shou...
   * @param {string} params.uid The key of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_pay_method` {Object[]} A list of payment methods:
   */
  WlClient.prototype.thothWlPayMethodList = function(params)
  {
    return this.request('/Thoth/WlPay/Method/List.json', params || {}, 'GET');
  };

  /**
   * Returns information about payment owner.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] Business key.
   * @param {string} params.uid Key of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `id_pay_owner` {number} A list of money owners from which account money can be transferred.
   *  `k_pay_owner` {string} The payment owner key. This is used for financial transactions.
   *  `k_pay_owner_money` {string} Key of the money owner.
   */
  WlClient.prototype.thothWlPayOwnerOwner = function(params)
  {
    return this.request('/Thoth/WlPay/Owner/Owner.json', params || {}, 'GET');
  };

  /**
   * Gets user's payment addresses information.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_pay_owner The ID of the payment owner type.
   * @param {string} params.k_business Business key, where the payment is performed.
   * @param {string} params.k_id The primary key of a payment owner.
   * @returns {Promise<Object>} Response data.
   *  `a_pay_address` {*[]} The payee's address information.
   */
  WlClient.prototype.thothWlPayAddressAddress = function(params)
  {
    return this.request('/Thoth/WlPay/Address/Address.json', params || {}, 'GET');
  };

  /**
   * Returns default payment address data that is retrieved from user profile.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key number used internally by WellnessLiving.
   * @param {string} params.uid The key of the user whose data should be retrieved.
   * @returns {Promise<Object>} Response data.
   *  `k_geo_country` {?string} The country key.
   *  `k_geo_region` {?string} The region ID.
   *  `s_city` {?string} The name of the city in the address.
   *  `s_name` {?string} The client name as listed in their address.
   *  `s_phone` {?string} The client phone number.
   *  `s_postal` {?string} The client postal or zip code.
   *  `s_street1` {?string} The first line of the client address.
   *  `s_street2` {?string} The second line of the client address.
   */
  WlClient.prototype.thothWlPayAddressProfile = function(params)
  {
    return this.request('/Thoth/WlPay/Address/Profile.json', params || {}, 'GET');
  };

  /**
   * Returns the example result for debugging.
   *
   * A diagnostic endpoint used to verify that a given API connection is working correctly. Increments
   * the input argument by one (confirming round-trip data flow), records a debug log entry with the
   * current session and authentication context, and returns the log key so the caller can inspect it.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_argument Example argument.
   * @returns {Promise<Object>} Response data.
   *  `i_result` {number} Example result.
   *  `s_log` {string} Key of the log record written by the API controller.
   */
  WlClient.prototype.coreRequestExample = function(params)
  {
    return this.request('/Core/Request/Example.json', params || {}, 'GET');
  };

  /**
   * Returns a list of cities to show in combobox list.
   *
   * Powers city autocomplete dropdowns in address forms. Returns up to 100 cities whose names start with
   * the given fragment, each labelled as "City, Region, Country". Pass a locale to restrict results to a
   * single country, or omit it to search worldwide.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} params.id_locale The locale ID used as a filter. The locale is generally a country.
   * @param {string} params.s_value The city name (or a fragment of the city name) used for the search.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} A list of items to show in the combobox list.
   */
  WlClient.prototype.coreGeoCombobox = function(params)
  {
    return this.request('/Core/Geo/Combobox.json', params || {}, 'GET');
  };

  /**
   * Saves the user CAPTCHA token for the current session.
   *
   * Accepts the CAPTCHA version, the action name, and the user token obtained from the Google reCAPTCHA widget,
   * and stores them in the session so that subsequent API requests requiring CAPTCHA verification can use them.
   * @deprecated Use {@link \Core\Google\Captcha\GoogleCaptchaApi} instead of this.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.coreGoogleGoogleCaptcha = function(params)
  {
    return this.request('/Core/Google/GoogleCaptcha.json', params || {}, 'PUT');
  };

  /**
   * Checks whether a listener can subscribe to specified channel.
  Subscribes in a case of positive result.
   *
   * Called by the WebSocket client immediately after a connection is established, to register interest in
   * a specific channel (identified by CID and key fields). If the current user is not permitted to receive
   * events on that channel, the subscription is rejected. On success, any messages already queued for the
   * channel are returned so the client does not miss events that arrived before the subscription was set up.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `a_message_broadcast` {Object|Object|Object|Object[]} All messages in queue. Key is a message key. Value is message data.
   */
  WlClient.prototype.coreWebSocketSubscribe = function(params)
  {
    return this.request('/Core/WebSocket/Subscribe.json', params || {}, 'POST');
  };

  /**
   * Returns the list of all items for the given Sid class.
   *
   * Populates enumeration dropdowns and lookup tables on the frontend.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.s_class_name Name of the Sid class to get list from.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object} List of items. Keys are IDs, values are arrays with additional information:
   */
  WlClient.prototype.coreSidCoreSid = function(params)
  {
    return this.request('/Core/Sid/CoreSid.json', params || {}, 'GET');
  };

  /**
   * Checks if a CAPTCHA is required for the given captcha type.
   *
   * Used before rendering a form that may include a CAPTCHA widget. The caller supplies the captcha type
   * (identified by CID) and any constructor arguments it needs; the response tells the frontend whether to
   * show the challenge at all and which reCAPTCHA version is active.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object|Object|Object|Object} params.a_arguments Arguments for creating CAPTCHA object.
   * @param {number} params.cid_captcha The CID of the CAPTCHA.
   * @returns {Promise<Object>} Response data.
   *  `is_enable_v3` {boolean} `true` if enabled V3 captcha enabled.
   *  `is_require` {boolean} This will be `true` if a CAPTCHA is required. Otherwise, this will be `false`.
   */
  WlClient.prototype.coreCaptchaCaptchaRequire = function(params)
  {
    return this.request('/Core/Captcha/CaptchaRequire.json', params || {}, 'GET');
  };

  /**
   * Removes the association between a website client and a Microsoft account.
   *
   * Accepts the user's UID, verifies that the caller is the account owner, and unlinks the Microsoft
   * account from the user's profile.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.uid The client for whom the Microsoft account will be unlinked.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.socialMicrosoftLoginDelete = function(params)
  {
    return this.request('/Social/Microsoft/Login.json', params || {}, 'DELETE');
  };

  /**
   * Collects data for the Microsoft login button.
   *
   * Called when rendering the "Sign in with Microsoft" button. Generates the OAuth 2.0 authorization URL
   * the button must link to. When a UID is provided, also reports whether that user already has a Microsoft
   * account linked, so the frontend can show "Link" or "Unlink" instead of the default sign-in label.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.uid The client for whom the Microsoft account will be unlinked.
   * @param {string} params.url_redirect The Redirect URI for external applications.
   * @returns {Promise<Object>} Response data.
   *  `is_exists` {boolean} If `true`, the user has a bound Microsoft account. Otherwise, this will be `f...
   *  `url_login` {string} The Microsoft OAuth 2.0 authorization link.
   */
  WlClient.prototype.socialMicrosoftLoginGet = function(params)
  {
    return this.request('/Social/Microsoft/Login.json', params || {}, 'GET');
  };

  /**
   * Signs a user in with Microsoft.
   *
   * Accepts the Microsoft authorization code, an optional state parameter for CSRF verification, and
   * an optional redirect URI. Validates the state, exchanges the code for user identity, and signs the
   * user in or creates a new account.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_external If authorization is performed in a third-party application, set this flag in case of authorizatio...
   * @param {string} params.url_redirect The Redirect URI for external applications.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.socialMicrosoftLoginPost = function(params)
  {
    return this.request('/Social/Microsoft/Login.json', params || {}, 'POST');
  };

  /**
   * Cancels session for the client.
   *
   * Cancels the specified appointment or class period for the given user. Staff and admin users
   * may cancel on behalf of any client; regular clients may only cancel their own bookings if
   * the visit is still in a cancellable state. Clears cached schedule data after a successful
   * class period cancellation.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date The date of the session in UTC.
   * @param {boolean} params.is_backend This will be `true` if the API is being used from the back end. Otherwise, this will be `false`.
   * @param {boolean} params.is_late_cancel `true` is late cancel, `false` reservation is not late cancel.
   * @param {?string} [params.k_appointment] The appointment key.
   * @param {string} params.k_business Key of the business within which the action is performed.
   * @param {?string} [params.k_class_period] The class period key.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlScheduleCancelGet = function(params)
  {
    return this.request('/Wl/Schedule/Cancel.json', params || {}, 'GET');
  };

  /**
   * Cancels session for the client.
  This method is an alias for partners using the API or SDK.
   *
   * Identical in behavior to `get()`; exists as a POST alias for partner
   * integrations that cannot issue GET requests.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date The date of the session in UTC.
   * @param {boolean} params.is_backend This will be `true` if the API is being used from the back end. Otherwise, this will be `false`.
   * @param {boolean} params.is_late_cancel `true` is late cancel, `false` reservation is not late cancel.
   * @param {?string} [params.k_appointment] The appointment key.
   * @param {string} params.k_business Key of the business within which the action is performed.
   * @param {?string} [params.k_class_period] The class period key.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlScheduleCancelPost = function(params)
  {
    return this.request('/Wl/Schedule/Cancel.json', params || {}, 'POST');
  };

  /**
   * Finds the nearest class session that can be booked by the current user.
   *
   * Looks no further than `PERIOD_LIMIT` seconds ahead from the start date.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_class Class keys to filter.
   * @param {number[]} params.a_day IDs of week days from [ADateWeekSid](#/components/schemas/ADateWeekSid) class.
   * @param {string[]} params.a_event Event keys to filter.
   * @param {string[]} params.a_location Location keys to filter.
   * @param {string[]} params.a_staff Staff member keys to filter.
   * @param {Object} params.a_time Time interval:
   * @param {string} params.dtu_start The date/time to start from in UTC.
   * @param {number} params.id_class_tab "Book now" tab ID. One of [TabSid](#/components/schemas/Wl.Classes.Tab.TabSid) constants.
   * @param {boolean} params.is_class `true` to include classes; `false` to exclude.
   * @param {boolean} params.is_event `true` to include events; `false` to exclude.
   * @param {boolean} params.is_virtual `true` to include only virtual classes;
   * @param {string} params.k_business Business key.
   * @param {string} params.k_timezone Timezone key.
   * @returns {Promise<Object>} Response data.
   *  `dl_next_available` {?string} Nearest session date available for booking in user's or business timezone.
   */
  WlClient.prototype.wlScheduleScheduleAvailableDate = function(params)
  {
    return this.request('/Wl/Schedule/ScheduleAvailableDate.json', params || {}, 'GET');
  };

  /**
   * Gets visit status.
   *
   * Returns full details for the specified visit, including date, duration, staff, location,
   * virtual service join URL, assigned resources, downloadable calendar data, and whether
   * the visit can still be cancelled. Handles class, appointment, and gym visit types. Used
   * to render the visit detail view and action buttons in the client portal.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {?string} [params.k_timezone] The time zone key.
   * @param {string} params.k_visit The visit key.
   * @returns {Promise<Object>} Response data.
   *  `a_cancel` {Object} Information about whether the given user can cancel an online booking and what
   *  `a_resource` {?string[]} An array of service resources.
   *  `a_resource_alias` {?Object[]} An array of service resources.
   *  `a_staff` {string[]} The list of keys of staff members that conduct the class.
   *  `a_uid_staff` {string[]} The list of user IDs of staff members that conduct the class.
   *  `dt_date` {string} The visit date and time in UTC and in MySQL format.
   *  `dtl_date` {string} The visit date in the location's time zone and in MySQL format.
   *  `i_duration` {number} The service duration (in minutes).
   *  `i_wait_spot` {number} The client's place in a waiting list.
   *  `id_mode` {number} The source of a visit.
   *  `id_visit` {number} Possible states of the visit: book, attended, cancelled, etc.
   *  `is_event` {boolean} Determines whether the visit is from an event.
   *  `is_request` {boolean} Whether this visit is requested and requires staff confirmation.
   *  `k_class` {string} The class key.
   *  `k_class_period` {string} The class period key.
   *  `k_location` {string} The key of the location where visit provides.
   *  `k_service` {?string} The service key.
   *  `k_staff` {?string} The key of the staff providing the appointment.
   *  `s_calendar_file_content` {string} The .ics file for adding the service to a phone calendar.
   *  `text_abbr_timezone` {string} The text abbreviation of the time zone.
   *  `...` {*}
   */
  WlClient.prototype.wlVisitVisitStatusGet = function(params)
  {
    return this.request('/Wl/Visit/VisitStatus.json', params || {}, 'GET');
  };

  /**
   * Changes visit status.
   *
   * Applies a status transition to the specified visit (for example, check-in, no-show, or
   * cancellation). Supports optimistic concurrency via an expected-from status, optional
   * late-cancel fee charging, and client notification flags. Requires backend access or
   * appropriate staff privileges.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_charge_fee The staff decision to charge (or not charge) a penalty when a client meets late cancel/no-show re...
   * @param {string} params.k_business The business key.
   * @param {?string} [params.k_mail_pattern_live] The email pattern key.
   * @param {string} params.k_visit The visit key.
   * @param {string} params.text_reason The reason the visit was canceled.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVisitVisitStatusPost = function(params)
  {
    return this.request('/Wl/Visit/VisitStatus.json', params || {}, 'POST');
  };

  /**
   * Gets location lists for a bulk of businesses.
   *
   * Accepts a JSON-encoded list of business keys, a JSON-encoded list of location keys, or both, and returns
   * short-form location data alongside full location detail objects. Optionally filters results to only
   * locations that have a specific directory integration enabled.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_directory The ID of the directory if locations should be filtered by enabling directory integration.
   * @param {string} params.s_business A list of businesses. Business primary keys are serialized with JSON.
   * @param {string} params.s_location A list of locations. Location primary keys are serialized with JSON.
   * @returns {Promise<Object>} Response data.
   *  `a_location` {Object} Short-form information about locations.
   *  `a_location_full` {Object[]} A list of models with full information about each location.
   */
  WlClient.prototype.wlLocationListBulk = function(params)
  {
    return this.request('/Wl/Location/ListBulk.json', params || {}, 'GET');
  };

  /**
   * Creates new location or edits the existing location.
   *
   * When `k_location` is omitted, creates a new location requiring `k_city`,
   *  `text_address`, and `text_title`.
   * When `k_location` is provided, updates only the supplied fields of the existing location.
   *  Returns the key of the created or updated location.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `k_location` {?string} The key of the location.
   */
  WlClient.prototype.wlLocationLocation = function(params)
  {
    return this.request('/Wl/Location/Location.json', params || {}, 'POST');
  };

  /**
   * Retrieves a list of locations for the given business.
   *
   * Accepts a single business key, a JSON-encoded list of business keys, or an array of business keys, and
   * returns location details including coordinates, address, timezone, directories, and logo URLs. For
   * franchisor businesses, automatically expands to include all franchisee locations.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_business A list of business keys.
   * @param {string} params.k_business The business key used internally by WellnessLiving.
   * @param {string} params.s_business The primary keys of the selected businesses.
   * @param {boolean} params.show_remove Determines whether removed locations should be returned.
   * @returns {Promise<Object>} Response data.
   *  `a_location` {Object[]} Information about the business's location(s). If you've specified multiple bu...
   */
  WlClient.prototype.wlLocationList = function(params)
  {
    return this.request('/Wl/Location/List.json', params || {}, 'GET');
  };

  /**
   * Creates a new client profile with the provided personal details in the specified business.
   *
   * Creates or retrieves a user account by email or phone, saves personal details such as name,
   *  address, phones, birthday, gender, and vaccination status, registers the user in the
   *  business, and optionally adds them to the lead report and sets intents.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `uid` {string} The key of the user.
   */
  WlClient.prototype.wlProfileProfileCreate = function(params)
  {
    return this.request('/Wl/Profile/ProfileCreate.json', params || {}, 'POST');
  };

  /**
   * Returns the list of events matching the specified filter parameters.
   *
   * Used to display the event schedule on business and location pages. Supports filtering by location,
   * date range, staff, and booking status. Results are cached per business and user context; the cache
   * is invalidated automatically when events are modified.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_class_filter] List of class keys applied by filter.
   * @param {?number[]} [params.a_day] List of day the week applied by filter [ADateWeekSid](#/components/schemas/ADateWeekSid).
   * @param {?string[]} [params.a_enrollment_block_filter] List of enrollment blocks keys applied by filter.
   * @param {?string[]} [params.a_location] List of location keys applied by filter.
   * @param {?string[]} [params.a_staff] List of staff keys applied by filter.
   * @param {?number[]} [params.a_time] List of time day applied by filter [RsScheduleTimeSid](#/components/schemas/RsScheduleTimeSid).
   * @param {?string[]} [params.a_virtual] List of IDs to include/exclude virtual events.
   * @param {?string} [params.dl_end] The end date of the range from which a list of events should be retrieved.
   * @param {?string} [params.dl_start] The start date of the range from which a list of events should be retrieved.
   * @param {number} params.id_flag Defines how the event availability flag filter should be applied.
   * @param {boolean} params.is_backend Determines whether the endpoint is used for backend mode.
   * @param {boolean} params.is_ignore_requirement `true` to show even event restricted by booking policies; `false` to show available events only.
   * @param {boolean} params.is_tab_all Determines whether you need to retrieve a list of event sessions regardless of the tab specified ...
   * @param {?string} [params.k_business] The event business key to retrieve a list of all event sessions in business.
   * @param {?string} [params.k_class] The event class key to retrieve a list of all event sessions of a specific class.
   * @param {string} params.k_class_tab The class tab key to retrieve a list of event sessions from a specific tab only.
   * @param {?string} [params.k_location] The event location key to retrieve a list of all event sessions in a specific location.
   * @param {string} params.k_skin The skin key if an event list is used for widget mode.
   * @param {string} params.text_search Search string to filter events by name.
   * @param {?string} [params.uid] The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_enrollment_block_list` {string[]} List of available enrollment blocks matching the requested parameters.
   *  `a_event_list` {Object[]} A list of events corresponding to requested parameters.
   */
  WlClient.prototype.wlEventEventListGet = function(params)
  {
    return this.request('/Wl/Event/EventList.json', params || {}, 'GET');
  };

  /**
   * Resets the event list cache for the specified business and user.
   *
   * Call this after modifying event data to force the next request to rebuild the schedule from the
   * database. Can also conditionally reset without parameters if the caller determines a reset is needed.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] The event business key to retrieve a list of all event sessions in business.
   * @param {?string} [params.uid] The user key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlEventEventListPut = function(params)
  {
    return this.request('/Wl/Event/EventList.json', params || {}, 'PUT');
  };

  /**
   * Cancels book of event `k_class`.
   *
   * Used when a client wants to drop out of a multi-session event entirely. Cancels all remaining
   * upcoming sessions at once, including any waitlisted spots, without requiring the client to cancel
   * each session individually.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlEventEventCancelWhole = function(params)
  {
    return this.request('/Wl/Event/EventCancelWhole.json', params || {}, 'POST');
  };

  /**
   * Returns detailed information about the specified business, including locale, franchise status, services, tips, social URLs, and logo.
   *
   * Used to bootstrap client-facing pages and widgets that need to know the full business profile: which
   * services are enabled, tip and progress log settings, franchise relationship, social media links, and
   * deep links to the schedule, catalog, and sign-up pages. Accepts either a business key or a location
   * request token for widget contexts where the key is not available.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_logo_height The maximum height of the business image (in pixels).
   * @param {number} params.i_logo_width The maximum width of the business image (in pixels).
   * @param {string} params.k_business The business key.
   * @param {string} params.text_token The authorization token.
   * @returns {Promise<Object>} Response data.
   *  `a_service_list` {number[]} A list of all business services and their availability data.
   *  `a_tip_predefine` {number[]} The list of predefined tips in percentages.
   *  `id_category` {number} A list of client booking flow types.
   *  `id_claim_status` {number} Business status for managing claim request behavior.
   *  `id_currency` {number} A list of currencies.
   *  `id_locale` {?number} A list of locales.
   *  `id_rank_type` {?number} Types of the possible ranks in different business.
   *  `id_region` {number} List of available data center regions.
   *  `is_apply_surcharge` {boolean} Determines whether surcharges to client payments are enabled in the business.
   *  `is_franchise` {boolean} `true` if business is a franchisor or franchisee.
   *  `is_location_multiple` {boolean} Determines whether the business has multiple locations (including inactive lo...
   *  `is_profile_timezone` {boolean} `true` - clients of the business can select a custom time zone in their profile.
   *  `is_progress_client` {boolean} If `true`, clients can enter the progress log. Otherwise, this will be `false`.
   *  `is_progress_verify` {boolean} If `true`, verification of the progress log by a staff member is required. Ot...
   *  `is_quiz_available` {boolean} Determines whether quizzes are available in the business.
   *  `is_test` {boolean} Determines if the business operates in testing mode.
   *  `is_tip` {boolean} If `true`, tips are available in the business. Otherwise, this will be `false`.
   *  `is_tip_deny` {boolean} If `true`, the business has the "No tip" option displayed. Otherwise, this wi...
   *  `is_tip_sign` {boolean} If `true`, the client must sign after selecting the tip. Otherwise, this will...
   *  `k_business_franchisor` {string} The franchisor business key. This will be empty if this business is the franc...
   *  `...` {*}
   */
  WlClient.prototype.wlBusinessData = function(params)
  {
    return this.request('/Wl/Business/Data.json', params || {}, 'GET');
  };

  /**
   * Creates new business.
   *
   * Used during the self-onboarding flow when a new client signs up for WellnessLiving. Creates the business
   * with its default integrations, optional first location, default service categories, and an optional owner
   * staff account - all in a single transaction. Rate-limited per IP and globally to prevent abuse.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `k_business` {string} The key of the business.
   *  `k_location` {?string} The key of the location for update or after creating.
   *  `uid` {?string} The UID of the created staff member or `null` if no staff member should be cr...
   *  `url_password_change` {?string} Url for password change page.
   */
  WlClient.prototype.wlBusinessBusinessPost = function(params)
  {
    return this.request('/Wl/Business/Business.json', params || {}, 'POST');
  };

  /**
   * Claims business.
   *
   * Used when a prospective client claims an existing unclaimed business record during onboarding.
   * Activates trial features, updates the location contact details, and optionally creates an owner
   * staff account. The business must not already be claimed and the location must belong to it.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `k_business` {string} The key of the business.
   *  `k_location` {?string} The key of the location for update or after creating.
   *  `uid` {?string} The UID of the created staff member or `null` if no staff member should be cr...
   *  `url_password_change` {?string} Url for password change page.
   */
  WlClient.prototype.wlBusinessBusinessPut = function(params)
  {
    return this.request('/Wl/Business/Business.json', params || {}, 'PUT');
  };

  /**
   * Gets information about businesses where given user is a staff member.
   *
   * Used during staff login to determine which businesses the user can access. Accepts identity via UID
   * or any supported social login identifier, then returns the matching list of businesses to display
   * on the business selection screen. In backend mode, franchisee locations and IP access restrictions
   * are also evaluated.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend This will be `true` if the API is being used from the backend. Otherwise, this will be `false`.
   * @param {string} params.s_facebook_id The staff member's Facebook ID. This won't be empty if the staff member is logging in with Facebook.
   * @param {string} params.s_microsoft_id The staff member's Microsoft key.
   * @param {string} params.text_authorization_apple The staff member's Apple authorization code. This won't be empty if the staff member is logging i...
   * @param {string} params.text_google_plus The Google Plus user ID. This won't be empty if the staff member is logging in with Google.
   * @param {string} params.text_mail The staff member's email to determine their UID. This won't be empty if the staff member is loggi...
   * @param {string} params.uid User key. Empty if user is not logged in, but their authorization data is known.
   * @returns {Promise<Object>} Response data.
   *  `a_business` {string[]} The businesses the staff member belongs to.
   *  `a_business_data` {Object[]} The list of accessible businesses with their corresponding data. Each value i...
   *  `uid_mail` {string} The staff member key, determined by their email. This will be empty if the UI...
   */
  WlClient.prototype.wlBusinessBusinessAccess = function(params)
  {
    return this.request('/Wl/Business/BusinessAccess.json', params || {}, 'GET');
  };

  /**
   * Gets data of required report.
   *
   * Loads the specified report for the given business, applying filter, sort, and pagination parameters,
   * and returns the report rows and totals.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_page The page of results to show, starting at zero. The API will return 256 results per page.
   * @param {number} params.id_report The report ID.
   * @param {number} params.id_report_group The report group ID.
   * @param {?number} [params.id_report_page] The report page ID. One of the [RsReportPageSid](#/components/schemas/RsReportPageSid) constants.
   * @param {number} params.id_report_view The report view ID. One of the [RsReportChartViewSid](#/components/schemas/RsReportChartViewSid) ...
   * @param {string} params.k_business The key of business for which the report must be generated.
   * @param {string} params.s_filter Filter settings in encoded format.
   * @param {string} params.s_sort The field to use for sorting report data.
   * @returns {Promise<Object>} Response data.
   *  `a_data` {*[]} The report contents.
   *  `a_total` {*[]} The report total.
   */
  WlClient.prototype.wlReportData = function(params)
  {
    return this.request('/Wl/Report/Data.json', params || {}, 'GET');
  };

  /**
   * Checks access to given report.
   *
   * Accepts either `id_report` (first-generation reports) or `cid_report` (second-generation reports), but not both,
   * and returns `has_access` indicating whether the current user may view the report in the given business.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.cid_report Report CID.
   * @param {number} params.id_report Report ID.
   * @param {string} params.k_business ID of business for which access must be checked.
   * @returns {Promise<Object>} Response data.
   *  `has_access` {boolean} `true` - access is granted; `false` - access is denied.
   */
  WlClient.prototype.wlReportAccess = function(params)
  {
    return this.request('/Wl/Report/Access.json', params || {}, 'GET');
  };

  /**
   * Gets data of required report collection.
   *
   * Loads all reports belonging to the specified report page collection for the given business, applying shared
   * filter, sort, group, and view parameters, and returns the data for each report keyed by report ID.
   *
   * @param {Object} [params] Request parameters.
   * @param {number[]} params.a_page The page of results to show for each report in collection, starting at zero (set by default). The...
   * @param {number} params.id_report_group The report group ID. One of the [RsReportGroupSid](#/components/schemas/RsReportGroupSid) constan...
   * @param {?number} params.id_report_page The report page ID. One of the [RsReportPageSid](#/components/schemas/RsReportPageSid) constants.
   * @param {number} params.id_report_view The report view ID. One of the [RsReportChartViewSid](#/components/schemas/RsReportChartViewSid) ...
   * @param {string} params.k_business The key of business for which the report collection must be generated.
   * @param {string} params.s_filter Filter settings in encoded format.
   * @param {string} params.s_sort The field to use for sorting report data.
   * @returns {Promise<Object>} Response data.
   *  `a_data` {*[][]} List of the reports contents. Key is the report id from [RsReportSid](#/compo...
   */
  WlClient.prototype.wlReportPageData = function(params)
  {
    return this.request('/Wl/Report/PageData.json', params || {}, 'GET');
  };

  /**
   * Returns a list of client debts for the specified business within the given date range.
   *
   * Used by the Collections module to display outstanding debts to the collector. Requires an active
   * Collections subscription and either the business privilege or emulation access. The default date range
   * covers the previous month relative to the business timezone.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dl_end] Date before which debts should be returned.
   * @param {?string} [params.dl_start] Date since which debts should be returned.
   * @param {boolean} params.is_request_debt Defines whether new debts should be returned or only previously sent debts.
   * @param {boolean} params.is_test Defines whether debts for test or real business should be returned.
   * @param {?string} [params.k_business] The business key for which debts should be returned.
   * @returns {Promise<Object>} Response data.
   *  `a_debt` {Object[]} A list of debts for the given business added within the previous month.
   */
  WlClient.prototype.wlCollectorDebtList = function(params)
  {
    return this.request('/Wl/Collector/DebtList.json', params || {}, 'GET');
  };

  /**
   * Registers a debt payment made outside WellnessLiving and applies a credit to the client's account balance.
   *
   * Used by collectors to record cash or external payments against outstanding debts. The specified
   * amount is credited to the client's account and the debt status is updated accordingly.
   * Requires an active Collections subscription and the business privilege or emulation access.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_currency The currency of the payment.
   * @param {string} params.k_business The key of the business from which the debt originates.
   * @param {string} params.uid The key of the user with the debt.
   * @returns {Promise<Object>} Response data.
   *  `k_pay_transaction` {string} The transaction key generated to register the payment.
   */
  WlClient.prototype.wlCollectorDebtPay = function(params)
  {
    return this.request('/Wl/Collector/DebtPay.json', params || {}, 'POST');
  };

  /**
   * Returns a list of debt payment transactions for the specified business within the given date range.
   *
   * Used by the Collections module to audit payments made against debts. The default date range
   * covers the previous day relative to the business timezone. Requires an active Collections
   * subscription and either the business privilege or emulation access.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dl_end] If set, this is the end of the date window. Only debt payments added before or on this date will ...
   * @param {?string} [params.dl_start] If set, this is the start of the date window. Only debt payments added on or after this date will...
   * @param {boolean} params.is_test If `true`, debt payments from test businesses will be returned. Otherwise, this will be `false` i...
   * @param {?string} [params.k_business] The business key for which debt payments should be returned.
   * @returns {Promise<Object>} Response data.
   *  `a_transaction` {Object[]} A list of debt payments for a given business added within the previous day.
   */
  WlClient.prototype.wlCollectorDebtTransaction = function(params)
  {
    return this.request('/Wl/Collector/DebtTransaction.json', params || {}, 'GET');
  };

  /**
   * Returns a list of announcements for the given business and location.
   *
   * Retrieves published announcements visible to the current user, optionally filtered to a single location.
   *  In backend mode the caller can also sort the results by column and direction, and the chosen sort
   *  preference is persisted per user so the backend grid remembers
   *  it across requests. Access is validated against announcement editor permissions for the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} [params.id_order] Order ID for list of announcements.
   * @param {?number} [params.id_sort_field] Sort field ID for list of announcements.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business Business key.
   * @param {?string} [params.k_location] Location key for which need show announcement.
   * @param {string} params.text_search The filter phrase to filter announcements by name.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} List of announcements. Each element has the following keys:
   *  `id_order` {?number} List of possible sort order.
   *  `id_sort_field` {?number} List of fields by which you can sort.
   */
  WlClient.prototype.wlAnnouncementAnnouncementList = function(params)
  {
    return this.request('/Wl/Announcement/AnnouncementList.json', params || {}, 'GET');
  };

  /**
   * Gets information necessary to display "Lead capture" widget.
   *
   * Returns the list of profile fields configured for the widget, skin styling data, captcha URL if required,
   * and whether a free promotion can be applied when a new lead is created.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of business to which the new user must be captured.
   * @param {string} params.k_skin The key of the widget skin. If left empty, then the default skin is used.
   * @returns {Promise<Object>} Response data.
   *  `a_field_list` {Object[]} A list of profile fields in the business. Every element has the following keys:
   *  `a_skin` {Object} The skin configuration:
   *  `can_use_free_purchase` {?boolean} Whether it is possible to give free promotion when adding a user (only if fre...
   *  `url_captcha` {string} The URL to load the image with a captcha test.
   */
  WlClient.prototype.wlLeadLeadGet = function(params)
  {
    return this.request('/Wl/Lead/Lead.json', params || {}, 'GET');
  };

  /**
   * Saves new user via "Lead capture".
   *
   * Creates a new user account from the submitted lead capture form data, optionally signs in the new user,
   * and associates the lead with a lead source. Returns an error code in `text_sign_in_error` if sign-in was
   * requested but could not be completed.
   *
   * @param {Object} [params] Request parameters.
   * @param {?boolean} [params.can_use_free_purchase] Whether it is possible to give free promotion when adding a user (only if free promotion is confi...
   * @param {boolean} params.is_backend This will be `true` if the API is being used from the backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The key of business to which the new user must be captured.
   * @param {string} params.k_skin The key of the widget skin. If left empty, then the default skin is used.
   * @returns {Promise<Object>} Response data.
   *  `k_lead_source` {?string} Key of the lead source.
   *  `text_sign_in_error` {string} An error code if the lead is not signed in after creation.
   *  `uid` {string} The key of the new user.
   */
  WlClient.prototype.wlLeadLeadPost = function(params)
  {
    return this.request('/Wl/Lead/Lead.json', params || {}, 'POST');
  };

  /**
   * Returns promotion list of the specified business.
   *
   * Returns all active promotions for the given business, with optional inclusion of Enterprise Location promotions
   * when the business is a franchisor and `is_franchise` is set to `true`.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_franchise Determines whether to return promotions created by Enterprise Locations (for Enterprise Cloud bus...
   * @param {string} params.k_business The business key used to get the promotions.
   * @returns {Promise<Object>} Response data.
   *  `a_promotion` {Object[]} A list of promotions.
   */
  WlClient.prototype.wlPromotionPromotionList = function(params)
  {
    return this.request('/Wl/Promotion/PromotionList.json', params || {}, 'GET');
  };

  /**
   * Soft-deletes the specified promotion if it has no associated sales.
   *
   * Validates staff privileges and checks that the promotion has not been sold before marking it as removed.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business.
   * @param {string} params.k_promotion The key of the promotion.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPromotionPromotionDelete = function(params)
  {
    return this.request('/Wl/Promotion/Promotion.json', params || {}, 'DELETE');
  };

  /**
   * Returns promotion by the specified business and promotion keys.
   *
   * Returns full promotion details including access restrictions, image, pricing, duration, tags,
   * locations, and guest pass settings if applicable.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business.
   * @param {string} params.k_promotion The key of the promotion.
   * @returns {Promise<Object>} Response data.
   *  `a_promotion` {Object[]} Promotion information.
   *  `o_guest_settings` {Object|*[]|null} Guest passes settings for promotion. This will be `null` if there are no gues...
   */
  WlClient.prototype.wlPromotionPromotionGet = function(params)
  {
    return this.request('/Wl/Promotion/Promotion.json', params || {}, 'GET');
  };

  /**
   * Saves promotion data.
   *
   * Accepts the full promotion configuration including title, description, access rules, duration, tags, and guest
   * pass settings, then validates and persists the changes.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business.
   * @param {string} params.k_promotion The key of the promotion.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPromotionPromotionPost = function(params)
  {
    return this.request('/Wl/Promotion/Promotion.json', params || {}, 'POST');
  };

  /**
   * Retrieves information about user.
   *
   * Returns name, gender, photo URL, email, and staff details for the specified user within the given business.
   * Public staff information is returned even without profile access; full client details require access to the
   * user's profile.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_photo_height The height of the requested photo.
   * @param {number} params.i_photo_width The width of the requested photo.
   * @param {string} params.k_business The key of the business. Users can be in multiple businesses.
   * @param {?string} [params.uid] The key of the user.
   * @returns {Promise<Object>} Response data.
   *  `can_postcard` {boolean} Whether this user can send postcards.
   *  `can_send_message` {boolean} Whether this user can send SMS. If `true` - user can send SMS, otherwise - `f...
   *  `id_gender` {number} String identifiers for gender.
   *  `is_photo_empty` {boolean} Whether photo is uploaded.
   *  `k_staff` {string} The user's staff key for the specified business.
   *  `s_first_name` {string} The first name of the user.
   *  `s_last_name` {string} The surname of the user.
   *  `text_mail_client` {string} The client`s mailing address.
   *  `text_mail_staff` {string} The staff member's mailing address.
   *  `text_name_first_staff` {string} The staff member's first name.
   *  `text_name_full_client` {string} The user's login name. This is returned in cases when neither the first name ...
   *  `text_name_full_staff` {string} The staff member's full name.
   *  `text_name_last_staff` {string} The staff member's last name.
   *  `uid` {?string} The key of the user.
   *  `uid_staff` {?string} The user's UID as a staff member for the specified business.
   *  `url_photo` {string} The URL where the user photo can be retrieved.
   */
  WlClient.prototype.wlLoginLoginGet = function(params)
  {
    return this.request('/Wl/Login/Login.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about a list of users.
  This is done via "post" method because only "post" allows large requests.
   *
   * Accepts a JSON-encoded array of user keys, validates each one, resolves staff and client roles, and returns
   * name, gender, photo URL, email, and staff details for every user in the list, respecting per-user profile access
   * rules.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_photo_height The height of the requested photo.
   * @param {number} params.i_photo_width The width of the requested photo.
   * @param {string} params.k_business The key of the business. Users can be in multiple businesses.
   * @returns {Promise<Object>} Response data.
   *  `a_login` {Object[]} List of information about users:
   */
  WlClient.prototype.wlLoginLoginPost = function(params)
  {
    return this.request('/Wl/Login/Login.json', params || {}, 'POST');
  };

  /**
   * Deletes the quiz with the given key.
   *
   * Permanently removes the quiz and all associated elements.
   * @deprecated Use {@link \Wl\Quiz\QuizElement72Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {string} params.k_quiz_login Quiz login key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlQuizQuizElementDelete = function(params)
  {
    return this.request('/Wl/Quiz/QuizElement.json', params || {}, 'DELETE');
  };

  /**
   * Returns quiz element data including settings, elements, and access information for the given quiz.
   *
   * Loads the quiz configuration, element list, and access log for the specified business and user context,
   * applying franchise and privilege checks before returning the result.
   * @deprecated Use {@link \Wl\Quiz\QuizElement72Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.can_anonymous Checks whether unauthorized user should be permitted to operate with form and make a response.
   * @param {boolean} params.is_builder `true` for request quiz from form builder page, `false` otherwise.
   * @param {boolean} params.is_simple Whether quiz response received by kiosk or direct mode link.
   * @param {number} params.json_purchase_item List of purchase items for which this form is loaded in JSON format.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {string} params.k_quiz_login Quiz login key.
   * @param {string} params.uid_client UID of the client for which quiz requested.
   * @returns {Promise<Object>} Response data.
   *  `a_access_log` {Object[]} Access log data.
   *  `a_element` {Object|Object|Object|Object[]} List of quiz elements.
   *  `a_setting` {Object} Quiz settings.
   *  `can_amend` {boolean} Whether user has privileges to amend form.
   *  `i_responses` {number} Number of responses for specific quiz.
   *  `is_active` {boolean} Quiz active status.
   *  `is_imported` {boolean} `true` if quiz is imported, `false` otherwise.
   *  `is_prevent_franchisee` {boolean} Whether form can be edited by franchisee.
   *  `k_business_type` {?string} Business type key. Used only for forms in the system business.
   *  `show_numbering` {boolean} Whether to show numbering of the form elements that supports numbering.
   *  `text_title` {string} Quiz form title.
   *  `url_quiz` {string} Direct URL to quiz.
   *  `url_quiz_kiosk` {string} Kiosk direct URL to quiz.
   */
  WlClient.prototype.wlQuizQuizElementGet = function(params)
  {
    return this.request('/Wl/Quiz/QuizElement.json', params || {}, 'GET');
  };

  /**
   * Creates or updates a quiz with the given elements and settings.
   *
   * When no quiz key is provided, a new quiz is created; when a key is given, the existing quiz
   * is updated in place. Element list and configuration are saved in a single transaction.
   * @deprecated Use {@link \Wl\Quiz\QuizElement72Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.can_anonymous Checks whether unauthorized user should be permitted to operate with form and make a response.
   * @param {boolean} params.is_simple Whether quiz response received by kiosk or direct mode link.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {string} params.k_quiz_login Quiz login key.
   * @returns {Promise<Object>} Response data.
   *  `k_quiz` {string} Quiz key.
   */
  WlClient.prototype.wlQuizQuizElementPost = function(params)
  {
    return this.request('/Wl/Quiz/QuizElement.json', params || {}, 'POST');
  };

  /**
   * Updates the active status of the given quiz.
   *
   * Toggles whether the quiz is available for respondents to fill out. Inactive quizzes are hidden
   * from the booking and profile flows but their existing responses are preserved.
   * @deprecated Use {@link \Wl\Quiz\QuizElement72Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {string} params.k_quiz_login Quiz login key.
   * @returns {Promise<Object>} Response data.
   *  `a_setting` {Object} Quiz settings.
   *  `url_quiz` {string} Direct URL to quiz.
   *  `url_quiz_kiosk` {string} Kiosk direct URL to quiz.
   */
  WlClient.prototype.wlQuizQuizElementPut = function(params)
  {
    return this.request('/Wl/Quiz/QuizElement.json', params || {}, 'PUT');
  };

  /**
   * Deletes the quiz with the given key.
   *
   * Permanently removes the quiz and all associated elements.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {string} params.k_quiz_login Quiz login key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlQuizQuizElement72Delete = function(params)
  {
    return this.request('/Wl/Quiz/QuizElement72.json', params || {}, 'DELETE');
  };

  /**
   * Returns quiz element data including settings, elements, and access information for the given quiz.
   *
   * Loads the quiz configuration, element list, and access log for the specified business and user context,
   * applying franchise and privilege checks before returning the result.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.can_anonymous Checks whether unauthorized user should be permitted to operate with form and make a response.
   * @param {boolean} params.is_builder `true` for request quiz from form builder page, `false` otherwise.
   * @param {boolean} params.is_simple Whether quiz response received by kiosk or direct mode link.
   * @param {number} params.json_purchase_item List of purchase items for which this form is loaded in JSON format.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {string} params.k_quiz_login Quiz login key.
   * @param {string} params.uid_client UID of the client for which quiz requested.
   * @returns {Promise<Object>} Response data.
   *  `a_access_log` {Object[]} Access log data.
   *  `a_element` {Object|Object|Object|Object[]} List of quiz elements.
   *  `a_setting` {Object} Quiz settings.
   *  `can_amend` {boolean} Whether user has privileges to amend form.
   *  `i_responses` {number} Number of responses for specific quiz.
   *  `is_active` {boolean} Quiz active status.
   *  `is_imported` {boolean} `true` if quiz is imported, `false` otherwise.
   *  `is_prevent_franchisee` {boolean} Whether form can be edited by franchisee.
   *  `k_business_type` {?string} Business type key. Used only for forms in the system business.
   *  `show_numbering` {boolean} Whether to show numbering of the form elements that supports numbering.
   *  `text_title` {string} Quiz form title.
   *  `url_quiz` {string} Direct URL to quiz.
   *  `url_quiz_kiosk` {string} Kiosk direct URL to quiz.
   */
  WlClient.prototype.wlQuizQuizElement72Get = function(params)
  {
    return this.request('/Wl/Quiz/QuizElement72.json', params || {}, 'GET');
  };

  /**
   * Creates or updates a quiz with the given elements and settings.
   *
   * When no quiz key is provided, a new quiz is created; when a key is given, the existing quiz
   * is updated in place. Element list and configuration are saved in a single transaction.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.can_anonymous Checks whether unauthorized user should be permitted to operate with form and make a response.
   * @param {boolean} params.is_simple Whether quiz response received by kiosk or direct mode link.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {string} params.k_quiz_login Quiz login key.
   * @returns {Promise<Object>} Response data.
   *  `k_quiz` {string} Quiz key.
   */
  WlClient.prototype.wlQuizQuizElement72Post = function(params)
  {
    return this.request('/Wl/Quiz/QuizElement72.json', params || {}, 'POST');
  };

  /**
   * Updates the active status of the given quiz.
   *
   * Toggles whether the quiz is available for respondents to fill out. Inactive quizzes are hidden
   * from the booking and profile flows but their existing responses are preserved.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {string} params.k_quiz_login Quiz login key.
   * @returns {Promise<Object>} Response data.
   *  `a_setting` {Object} Quiz settings.
   *  `url_quiz` {string} Direct URL to quiz.
   *  `url_quiz_kiosk` {string} Kiosk direct URL to quiz.
   */
  WlClient.prototype.wlQuizQuizElement72Put = function(params)
  {
    return this.request('/Wl/Quiz/QuizElement72.json', params || {}, 'PUT');
  };

  /**
   * Deletes the specified video.
   *
   * Permanently removes the video, its localized CMS records, and all category associations
   * from the business library. Also deletes the video file and thumbnail from storage.
   * Requires backend access with the video library management privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video The video key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVideoVideoElementDelete = function(params)
  {
    return this.request('/Wl/Video/VideoElement.json', params || {}, 'DELETE');
  };

  /**
   * Returns the data for the specified video.
   *
   * Returns detailed information about a single video, including title, description, duration,
   * categories, tags, difficulty level, assigned staff, virtual session settings, and playback
   * progress for the current user. In frontend mode, access is restricted to videos the current
   * user is allowed to watch based on their membership and login type.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video The video key.
   * @returns {Promise<Object>} Response data.
   *  `a_location` {string[]} The keys of the locations where this video is available.
   *  `a_staff` {string[]} The keys of the user staff members who are on the video.
   *  `a_staff_info` {Object} A list of staff members associated with the video. Every item has the followi...
   *  `a_staff_uid` {string[]} The user IDs of the staff members who are on the video (authoritative list fo...
   *  `a_video_category` {string[]} The video category keys where this video can be found.
   *  `a_video_tag` {string[]} The video tag keys.
   *  `dtl_publish` {?string} The date and time when the video was published.
   *  `dtl_unpublish` {?string} The date and time when the video was unpublished.
   *  `dtl_upload` {string} The date when the video was uploaded.
   *  `html_embed` {string} The video embed code.
   *  `i_calorie` {number} The count of burned calories associated with the video.
   *  `i_current_percent` {number} The current time as a percentage of the video duration at which the user is a...
   *  `i_current_time` {number} The current time in seconds at which the user is at in the video.
   *  `i_duration` {number} The video duration in seconds.
   *  `i_watch` {number} The number of video views.
   *  `id_embed_source` {?number} List of embed video sources.
   *  `id_location_select` {number} A list of two answers for any question: Yes or No.
   *  `id_source` {number} List of video types.
   *  `is_calorie` {boolean} If `true`, the calorie count will be displayed on the video.
   *  `is_converted` {boolean} If `true`, the video is converted.
   *  `...` {*}
   */
  WlClient.prototype.wlVideoVideoElementGet = function(params)
  {
    return this.request('/Wl/Video/VideoElement.json', params || {}, 'GET');
  };

  /**
   * Creates or updates a video for the specified business.
   *
   * Saves a video record with its title, description, categories, tags, difficulty level,
   * staff assignments, and access settings. When no video key is provided, a new record is
   * created; otherwise the existing record is updated. Requires backend access with the
   * video library management privilege and an active video subscription.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {boolean} params.is_converted If `true`, the video is converted.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video The video key.
   * @returns {Promise<Object>} Response data.
   *  `k_video` {string} The video key.
   */
  WlClient.prototype.wlVideoVideoElementPost = function(params)
  {
    return this.request('/Wl/Video/VideoElement.json', params || {}, 'POST');
  };

  /**
   * Validates video embed code.
   *
   * Checks that the provided embed snippet conforms to the supported embed code format. Throws
   * if the snippet is malformed or uses an unsupported source. Call this before saving to give
   * the user an immediate validation error without persisting the video record.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `id_embed_source` {?number} List of embed video sources.
   *  `json_setup` {string} Video.js media player initialization parameters in JSON format.
   */
  WlClient.prototype.wlVideoVideoElementPut = function(params)
  {
    return this.request('/Wl/Video/VideoElement.json', params || {}, 'PUT');
  };

  /**
   * Returns the list of videos for the specified business.
   *
   * Returns videos for the business video library with optional filtering by category, tag,
   * difficulty level, staff, location, calorie range, and duration. Supports sorting and
   * pagination for large libraries. In frontend mode, results are restricted to videos the
   * current user is allowed to watch based on their membership and login type.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_calorie The calorie range ascribed to the video to use for the search.
   * @param {Object[]} params.a_duration The duration range ascribed to the video to use for the search.
   * @param {string[]} params.a_level A list of levels to show videos for. A level can refer to the difficulty ascribed to the video.
   * @param {string[]} params.a_location A list of locations to show videos from.
   * @param {number[]} params.a_source A list of video sources.
   * @param {string[]} params.a_staff A list of staff members who appear in videos.
   * @param {string[]} params.a_staff_uid A list of staff members who appear in videos.
   * @param {string[]} params.a_video_category A list of video categories to show videos from.
   * @param {string[]} params.a_video_tag A list of video tags to show videos for.
   * @param {?number} [params.i_page] Page to return.
   * @param {?number} [params.id_order] Sort order ID. One of [SortOrderSid](#/components/schemas/Core.Sid.SortOrderSid) constants. `null...
   * @param {?number} [params.id_sort] The sorting type.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.text_search The filter phrase to filter videos by name.
   * @param {?string} [params.uid] UID of the client who request list of videos.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} A list of videos.
   *  `a_page` {Object} Pagination data.
   *  `id_embed_source` {?number} List of embed video sources.
   *  `id_order` {?number} List of possible sort order.
   *  `id_sort` {?number} List of video catalog sorting types.
   *  `json_setup` {string} Video.js media player initialization parameters in JSON format.
   */
  WlClient.prototype.wlVideoVideoListGet = function(params)
  {
    return this.request('/Wl/Video/VideoList.json', params || {}, 'GET');
  };

  /**
   * Updates the custom sort order of videos for the specified business.
   *
   * Reorders the video library according to the provided list. Only takes effect when the
   * library is configured to use the custom sort order. Requires backend access with the
   * video library management privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `id_embed_source` {?number} List of embed video sources.
   *  `json_setup` {string} Video.js media player initialization parameters in JSON format.
   */
  WlClient.prototype.wlVideoVideoListPut = function(params)
  {
    return this.request('/Wl/Video/VideoList.json', params || {}, 'PUT');
  };

  /**
   * Notifies messengers with new information.
   *
   * Accepts a channel key and a data payload, then dispatches a notification to the Fitbuilder messenger channel
   * associated with that key. Requires the `notify` API privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_channel Messenger channel key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlFitbuilderMessage = function(params)
  {
    return this.request('/Wl/Fitbuilder/Message.json', params || {}, 'POST');
  };

  /**
   * Sends email.
   *
   * Validates the recipient address, business email, subject, and HTML content, then saves the email pattern
   * and dispatches the message to the specified recipient. Rate limiting is applied per hour and per minute.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMailSendMail = function(params)
  {
    return this.request('/Wl/Mail/SendMail.json', params || {}, 'POST');
  };

  /**
   * Update or create staff.
   *
   * Creates a new staff member or updates an existing one in the business. When creating,
   * a new user account is provisioned if no matching email exists. When updating, the target
   * staff member must already belong to the business. Role, location, contact details,
   * employment dates, and custom profile fields can all be set in a single call.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_staff] The key of the staff member resolved and used internally by this API.
   * @returns {Promise<Object>} Response data.
   *  `k_staff` {?string} The key of the staff member resolved and used internally by this API.
   */
  WlClient.prototype.wlStaffStaffElement = function(params)
  {
    return this.request('/Wl/Staff/StaffElement.json', params || {}, 'POST');
  };

  /**
   * Deletes the existing widget.
   *
   * Permanently removes a widget skin and its foreign ID mapping from the business. Used
   * by external integrators to clean up a widget that is no longer needed.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_skin Skin type, one of [RsSkinSid](#/components/schemas/RsSkinSid) constants.
   * @param {string} params.k_business Key of the business.
   * @param {string} params.s_foreign_id Foreign skin key.
   * @returns {Promise<Object>} Response data.
   *  `k_skin` {string} Skin key.
   */
  WlClient.prototype.wlSkinSkinForeignDelete = function(params)
  {
    return this.request('/Wl/Skin/SkinForeign.json', params || {}, 'DELETE');
  };

  /**
   * Creates a new widget.
   *
   * Creates a new widget skin for the business and links it to an external identifier provided
   * by the integrator. The foreign ID must be unique within the business; attempting to create
   * a duplicate triggers an error directing the caller to use PUT instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_skin Skin type, one of [RsSkinSid](#/components/schemas/RsSkinSid) constants.
   * @param {string} params.k_business Key of the business.
   * @param {string} params.s_foreign_id Foreign skin key.
   * @returns {Promise<Object>} Response data.
   *  `k_skin` {string} Skin key.
   */
  WlClient.prototype.wlSkinSkinForeignPost = function(params)
  {
    return this.request('/Wl/Skin/SkinForeign.json', params || {}, 'POST');
  };

  /**
   * Updates the existing widget.
   *
   * Updates the configuration of an existing widget skin identified by the business and
   * external foreign ID. Throws an error if no matching foreign ID is found, directing
   * the caller to use POST instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_skin Skin type, one of [RsSkinSid](#/components/schemas/RsSkinSid) constants.
   * @param {string} params.k_business Key of the business.
   * @param {string} params.s_foreign_id Foreign skin key.
   * @returns {Promise<Object>} Response data.
   *  `k_skin` {string} Skin key.
   */
  WlClient.prototype.wlSkinSkinForeignPut = function(params)
  {
    return this.request('/Wl/Skin/SkinForeign.json', params || {}, 'PUT');
  };

  /**
   * Returns tags of the specified business.
   *
   * Returns all client tags configured for the business in display order, along with flags
   * indicating whether the business has configured a penalty fee for failed automatic payments
   * and whether surcharges are enabled. Used to populate tag pickers and client profile forms.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key of the tags.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} The tag list.
   *  `has_fee` {boolean} Whether a business did set up a penalty fee for failed automatic payments.
   *  `has_surcharge` {boolean} Whether a business did set up surcharges.
   */
  WlClient.prototype.wlTagTagListGet = function(params)
  {
    return this.request('/Wl/Tag/TagList.json', params || {}, 'GET');
  };

  /**
   * Saves the list of tags.
  Can be used to create new tags or update existing ones.
   *
   * Persists the given set of client tags for the business. Tags without a key are created;
   * tags with an existing key are updated with the new title. Requires backend access.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key of the tags.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} The tag list.
   */
  WlClient.prototype.wlTagTagListPost = function(params)
  {
    return this.request('/Wl/Tag/TagList.json', params || {}, 'POST');
  };

  /**
   * Returns the title for the specified tax.
   *
   * Returns the human-readable display name for the given tax record. Throws if the tax
   * key is invalid or if the tax has been marked as removed.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_tax The tax key to get information for.
   * @returns {Promise<Object>} Response data.
   *  `text_tax` {string} The tax title.
   */
  WlClient.prototype.wlTaxTax = function(params)
  {
    return this.request('/Wl/Tax/Tax.json', params || {}, 'GET');
  };

  /**
   * Returns taxes of the specified business.
   *
   * Returns all active taxes configured for the business, including each tax's title, rate,
   * and type. Used to populate tax pickers when creating products, promotions, or invoices.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business for which to get a list of taxes.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} A list of taxes.
   */
  WlClient.prototype.wlTaxTaxList = function(params)
  {
    return this.request('/Wl/Tax/TaxList.json', params || {}, 'GET');
  };

  /**
   * Submits user's review.
   *
   * Validates the captcha, saves the review rating and text for the specified location, and returns reward score
   * information if the business awards points for leaving a review.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `i_score` {number} Reward score for leaving a review.
   *  `i_score_facebook` {number} Reward score for sharing a review on Facebook.
   *  `i_score_twitter` {number} Reward score for sharing a review on Twitter.
   *  `is_score` {boolean} If a reward score for leaving a review exists.
   *  `is_score_facebook` {boolean} If a reward score for sharing a review on Facebook exists.
   *  `is_score_twitter` {boolean} If a reward score for sharing a review on Twitter exists.
   *  `is_share_points` {boolean} If a reward score for sharing exists.
   *  `is_share_points_none` {boolean} If a reward score does not exist for leaving a review or sharing the review.
   *  `k_login_activity` {string} The key of the review writing activity. This will be empty if the review was ...
   *  `k_review` {string} Review key.
   *  `uid` {string} The UID of client who leaves review.
   *  `url_share` {string} The sharing url of the review.
   */
  WlClient.prototype.wlReviewReview = function(params)
  {
    return this.request('/Wl/Review/Review.json', params || {}, 'POST');
  };

  /**
   * Updates the featured status of the given review for the business.
   *
   * If featuring the review, unfeatures the currently featured review for the business location and marks the
   * specified review as featured; if unfeaturing, clears the featured flag on the given review.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlReviewReviewFeature = function(params)
  {
    return this.request('/Wl/Review/ReviewFeature.json', params || {}, 'POST');
  };

  /**
   * Saves the reply text and optional status update for the given review.
   *
   * Validates edit access for the current user, persists the reply text and optional review status change,
   * and records the replying staff or admin user.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlReviewReviewReply = function(params)
  {
    return this.request('/Wl/Review/ReviewReply.json', params || {}, 'POST');
  };

  /**
   * Gets belts list of a business.
   *
   * Returns all belts for the specified business, optionally filtered by belt category keys, including each belt's
   * title and its parent category title.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_rank_category Rank category keys. Used to filter belts by belt categories.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `a_rank_list` {Object[]} A list of belts, keys, and information. Each element is an array with the fol...
   */
  WlClient.prototype.wlRankRank = function(params)
  {
    return this.request('/Wl/Rank/Rank.json', params || {}, 'GET');
  };

  /**
   * Returns information about holiday day of business/locations.
   *
   * For the specified business and date, returns whether that date is a business-wide closed day, the closed day
   * title if applicable, and a map of location keys to their closed day titles for any locations also closed on
   * that date.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dl_work The date working hours are required for.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_location_holiday` {string[]} A list of the location's closed day titles by location keys on the date `dl_w...
   *  `is_business_holiday` {boolean} `true` if the business has a closed day on the date `dl_work`, `false` if oth...
   *  `text_business_title` {string} The message used for the business's closed day on the date `dl_work`.
   */
  WlClient.prototype.wlHolidayHoliday = function(params)
  {
    return this.request('/Wl/Holiday/Holiday.json', params || {}, 'GET');
  };

  /**
   * Returns all holiday records for all locations of the specified business.
   *
   * Retrieves the complete list of holidays across all date ranges for every location belonging to the given
   * business, including both business-level and location-level closed days.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_business_holidays` {Object[]} An array consisting of the business's closed day data for all locations by ho...
   */
  WlClient.prototype.wlHolidayBulkBusinessHoliday = function(params)
  {
    return this.request('/Wl/Holiday/BulkBusinessHoliday.json', params || {}, 'GET');
  };

  /**
   * Allows the user account to be filled with a specified payment, or to perform the reset change manually.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_pay_account_charge The account charge mode.
   * @param {boolean} params.is_staff If `true`, the account is filled by a staff member in the backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The ID of the business the user account belongs to.
   * @param {string} params.k_pay_account The ID of the user account to refill.
   * @param {string} params.uid The ID of the user whose account is being refilled.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.thothWlPayAccountChargeCharge = function(params)
  {
    return this.request('/Thoth/WlPay/Account/Charge/Charge.json', params || {}, 'POST');
  };

  /**
   * Gets the daily transaction data.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dl_date_end The end date in local time to retrieve transactions for.
   * @param {string} params.dl_date_start The end date in local time to retrieve transactions for.
   * @param {number} params.i_page The page of the report, starting from 0.
   * @param {boolean} params.is_refresh Determines whether the report should be refreshed.
   * @param {string} params.k_business The key of the business for which report should be generated.
   * @returns {Promise<Object>} Response data.
   *  `a_field` {string[]} A list of fields in the report.
   *  `a_row` {*[]} The report data.
   *  `a_warning` {string[]} The warning list of the report.
   *  `dtu_complete` {?string} The date and time if the report has completed generation. Otherwise, this wil...
   *  `dtu_queue` {?string} The date and time if this report has been put in the generation queue. Otherw...
   *  `dtu_start` {?string} The date and time if generation of this report has started. Otherwise, this w...
   *  `id_report_status` {number} Lists statuses of reports from point of view of its generation.
   *  `is_more` {boolean} Determines whether to show more rows in the report.
   *  `is_report_complete` {boolean} Determines whether the report is complete.
   */
  WlClient.prototype.thothWlPayTransactionReportTransactionAllPayment = function(params)
  {
    return this.request('/Thoth/WlPay/Transaction/Report/TransactionAllPayment.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about user's bank cards.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business ID of current business.
   * @param {string} params.k_location Location to show information for.
   * @param {string} params.uid ID of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_bank_card` {Object} A list of bank cards.
   *  `a_list` {*[]} List of bank cards.
   *  `can_add` {boolean} Whether new card can be added.
   */
  WlClient.prototype.thothWlPayBankCardList = function(params)
  {
    return this.request('/Thoth/WlPay/Bank/Card/List.json', params || {}, 'GET');
  };

  /**
   * Returns information about the image.
   *
   * Used to initialize an image upload widget for an existing entity. Returns thumbnail and full-size URLs,
   * upload endpoint, dimension constraints, and whether deletion is allowed, so the frontend can render the
   * current image and offer upload or delete actions.
   *
   * @param {Object} [params] Request parameters.
   * @param {*[]} params.a_config Allows to give custom parameters which can be required for different types of images.
   * @param {boolean} params.is_temporary If `true`, the temporary image will be retrieved. Otherwise, this will be `false`.
   * @param {string} params.k_id The image ID set in `s_class`.
   * @param {string} params.s_class The name of the class that manages this image.
   * @returns {Promise<Object>} Response data.
   *  `a_text_empty` {?Object} Information about the text for an empty image upload.
   *  `html_image_hint` {string} An HTML string to use for the image recommendation.
   *  `i_height_max` {?number} The maximum height of image.
   *  `i_height_min` {?number} The minimum height of image.
   *  `i_thumbnail_height` {?number} The height of the thumbnail image.
   *  `i_thumbnail_width` {?number} The width of the thumbnail image.
   *  `i_width_max` {?number} The maximum width of the image.
   *  `i_width_min` {?number} The minimum width of the image.
   *  `is_circular` {?boolean} If `true`, the image is treated as circular. Otherwise, this will be `false`.
   *  `is_delete_allow` {?boolean} If `true`, image deletion is permitted. Otherwise, this will be `false`.
   *  `s_code` {?string} The link protection code.
   *  `s_link` {?string} The image link.
   *  `url_empty` {?string} The image URL that should be displayed in cases where no image is uploaded.
   *  `url_thumbnail` {?string} The thumbnail URL of the image.
   *  `url_upload` {?string} The script URL where new image should be uploaded from.
   *  `url_view` {?string} The URL of the full image.
   */
  WlClient.prototype.coreDriveImageUploadImageUploadGet = function(params)
  {
    return this.request('/Core/Drive/ImageUpload/ImageUpload.json', params || {}, 'GET');
  };

  /**
   * Loads image information for a list of IDs.
  The POST method is used instead of the GET method because the maximum permitted URI length is restricted.
   *
   * Bulk variant of the GET method for pages that must display many images at once. Accepts a JSON-encoded
   * list of entity IDs and returns the same metadata as the single-item GET, loading all images in one
   * round-trip to avoid N+1 requests.
   *
   * @param {Object} [params] Request parameters.
   * @param {*[]} params.a_config Allows to give custom parameters which can be required for different types of images.
   * @param {string} params.s_class The name of the class that manages this image.
   * @returns {Promise<Object>} Response data.
   *  `a_image` {Object[]} Image information for every ID.
   */
  WlClient.prototype.coreDriveImageUploadImageUploadPost = function(params)
  {
    return this.request('/Core/Drive/ImageUpload/ImageUpload.json', params || {}, 'POST');
  };

  /**
   * Updates the image.
   *
   * Applies a command (such as delete or replace) to a previously uploaded image, then returns the
   * refreshed image metadata so the frontend can update the widget state without a separate GET call.
   *
   * @param {Object} [params] Request parameters.
   * @param {*[]} params.a_config Allows to give custom parameters which can be required for different types of images.
   * @param {boolean} params.is_temporary If `true`, the temporary image will be retrieved. Otherwise, this will be `false`.
   * @param {string} params.k_id The image ID set in `s_class`.
   * @param {string} params.s_class The name of the class that manages this image.
   * @returns {Promise<Object>} Response data.
   *  `a_text_empty` {?Object} Information about the text for an empty image upload.
   *  `html_image_hint` {string} An HTML string to use for the image recommendation.
   *  `i_height_max` {?number} The maximum height of image.
   *  `i_height_min` {?number} The minimum height of image.
   *  `i_thumbnail_height` {?number} The height of the thumbnail image.
   *  `i_thumbnail_width` {?number} The width of the thumbnail image.
   *  `i_width_max` {?number} The maximum width of the image.
   *  `i_width_min` {?number} The minimum width of the image.
   *  `is_circular` {?boolean} If `true`, the image is treated as circular. Otherwise, this will be `false`.
   *  `is_delete_allow` {?boolean} If `true`, image deletion is permitted. Otherwise, this will be `false`.
   *  `s_code` {?string} The link protection code.
   *  `s_link` {?string} The image link.
   *  `url_empty` {?string} The image URL that should be displayed in cases where no image is uploaded.
   *  `url_thumbnail` {?string} The thumbnail URL of the image.
   *  `url_upload` {?string} The script URL where new image should be uploaded from.
   *  `url_view` {?string} The URL of the full image.
   */
  WlClient.prototype.coreDriveImageUploadImageUploadPut = function(params)
  {
    return this.request('/Core/Drive/ImageUpload/ImageUpload.json', params || {}, 'PUT');
  };

  /**
   * Saves new uploaded image.
   *
   * First step of the two-step image upload flow. Stores the uploaded file in temporary drive storage and
   * returns preview URLs and dimension metadata so the user can review or crop the image before it is
   * permanently saved. Call [ImageUploadApi](/Core/Drive/ImageUpload/ImageUpload.json) to commit the temporary image to the entity.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_id The key of the image within `s_class`.
   * @param {string} params.s_class The name of the class that manages this image.
   * @returns {Promise<Object>} Response data.
   *  `has_crop` {boolean} If `true`, a crop is used. Otherwise, this will be `false` if a crop isn't us...
   *  `i_height` {number} The actual height of the thumbnail image.
   *  `i_height_src` {number} The height of the original image.
   *  `i_rotate` {number} The angle of the image rotation compared to the original.
   *  `i_width` {number} The actual width of the thumbnail image.
   *  `i_width_src` {number} The width of the original image.
   *  `id_type_src` {number} List of image types.
   *  `is_resize` {boolean} If `true`, the thumbnail is a resized variant of the original image.
   *  `url_thumbnail` {string} The URL to the resized and rotated image in file storage.
   *  `url_view` {string} The URL to the original image in file storage.
   */
  WlClient.prototype.coreDriveImageUploadImageUploadTemporary = function(params)
  {
    return this.request('/Core/Drive/ImageUpload/ImageUploadTemporary.json', params || {}, 'POST');
  };

  /**
   * Gets a secret key for signing.
   *
   * Accepts a CSRF code, a session key, and the client origin URL, validates the session key against
   * the current application, and returns a secret key that the client uses to sign subsequent CORS requests.
   * This endpoint must not be called directly from a browser.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.s_csrf The CSRF code from the client side.
   * @param {string} params.s_key_session The session key.
   * @param {string} params.url_domain Alias of `url_origin`.
   * @param {string} params.url_origin Origin for client requests.
   * @returns {Promise<Object>} Response data.
   *  `s_key_secret` {string} The secret key for the request signing.
   */
  WlClient.prototype.coreRequestApiKeySecret = function(params)
  {
    return this.request('/Core/Request/Api/KeySecret.json', params || {}, 'GET');
  };

  /**
   * Gets new pin code.
   *
   * First step of push-notification-based security token generation. Issues a short-lived PIN code
   * linked to a push recipient, which is then sent to the user's device. The client must present
   * this PIN before its expiry to receive the final security token.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.text_push The ID to use to send a security code via a push notification.
   * @returns {Promise<Object>} Response data.
   *  `dtu_expire` {string} The expiration date/time of the PIN code.
   *  `text_pin` {string} The PIN code.
   */
  WlClient.prototype.coreRequestTokenTokenPin = function(params)
  {
    return this.request('/Core/Request/Token/TokenPin.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about countries and regions.
   *
   * Populates country and region dropdowns in address forms. Returns one or all countries together with
   * their subordinate regions (states, provinces, territories). Pass a locale to get only the country
   * relevant to a given market, or set `$is_locale_all` to retrieve the full list for multi-country UIs.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} params.id_locale The locale ID to find regions for. One of the [LocaleSid](#/components/schemas/Core.Locale.Locale...
   * @param {boolean} params.is_locale_all Determines whether to get regions for all locales.
   * @returns {Promise<Object>} Response data.
   *  `a_region` {Object[]} A list of regions grouped by their country.
   */
  WlClient.prototype.coreGeoRegionRegion = function(params)
  {
    return this.request('/Core/Geo/Region/Region.json', params || {}, 'GET');
  };

  /**
   * Saves the user CAPTCHA token for the current session.
   *
   * Accepts the CAPTCHA version, the action name, and the user token obtained from the Google reCAPTCHA widget,
   * and stores them in the session so that subsequent API requests requiring CAPTCHA verification can use them.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.coreGoogleCaptchaGoogleCaptcha = function(params)
  {
    return this.request('/Core/Google/Captcha/GoogleCaptcha.json', params || {}, 'PUT');
  };

  /**
   * Returns the overridden score for the reCAPTCHA v3.
   *
   * Returns the current session-level score override value that was set via the PUT method.
   * Requires reCAPTCHA v3 to be enabled; throws an exception otherwise.
   *
   * @param {Object} [params] Request parameters.
   * @returns {Promise<Object>} Response data.
   *  `f_score` {?number} Overridden score value for V3 captcha.
   */
  WlClient.prototype.coreGoogleCaptchaCaptchaScoreGet = function(params)
  {
    return this.request('/Core/Google/Captcha/CaptchaScore.json', params || {}, 'GET');
  };

  /**
   * Validates the reCAPTCHA v3 token.
   *
   * Accepts a reCAPTCHA v3 user token, sends it to Google for verification, and returns a response ID
   * indicating the outcome. Note that each token can only be validated once; a new token must be generated
   * for subsequent requests.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.text_token The user token CAPTCHA from [CaptchaVersionSid::V3](#/components/schemas/Core.Google.Captcha.Capt...
   * @returns {Promise<Object>} Response data.
   *  `id_response` {number} List of responses for Google Captcha token.
   */
  WlClient.prototype.coreGoogleCaptchaCaptchaScorePost = function(params)
  {
    return this.request('/Core/Google/Captcha/CaptchaScore.json', params || {}, 'POST');
  };

  /**
   * Overrides the score for the reCAPTCHA v3.
   *
   * Sets a custom score value in the range 0.0-1.0 to override the actual reCAPTCHA v3 score for the
   * current session. Pass `null` to clear the override and restore the default behavior. Requires the
   * score override feature to be enabled.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.coreGoogleCaptchaCaptchaScorePut = function(params)
  {
    return this.request('/Core/Google/Captcha/CaptchaScore.json', params || {}, 'PUT');
  };

  /**
   * Returns information about user that is currently signed in.
   *
   * Used to bootstrap the login widget: determines whether a session is active and provides the URLs needed
   * to redirect an unauthenticated visitor to the password reset or registration flows without hard-coding
   * those URLs on the frontend.
   *
   * @param {Object} [params] Request parameters.
   * @returns {Promise<Object>} Response data.
   *  `uid` {?string} The current user key.
   *  `url_password_change` {string} A URL that a user can visit to reset their password.
   *  `url_register` {string} The URL to the registration page.
   */
  WlClient.prototype.corePassportLoginInfo = function(params)
  {
    return this.request('/Core/Passport/Login/Info.json', params || {}, 'GET');
  };

  /**
   * Saves for user new password.
   *
   * Accepts the login, email, verification code (from the reset password link), and the new password,
   * validates each against the stored state, and updates the user's password. If the user is not already
   * signed in, a new session is started for them.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.text_code The verification code, which can be obtained from the "reset password" email link. This is a requ...
   * @param {string} params.text_login The user's login, which can be obtained from the "reset password" email link. This is a required ...
   * @param {string} params.text_mail The user's email address, which can be obtained from the "reset password" email link. This is a r...
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.corePassportChangePasswordChangePasswordApply = function(params)
  {
    return this.request('/Core/Passport/ChangePassword/ChangePasswordApply.json', params || {}, 'POST');
  };

  /**
   * Sends to user "password recovery" mail.
   *
   * Accepts the user's email address and an optional custom reset-page URL, validates the input,
   * optionally checks a CAPTCHA, and sends a password reset email containing a link the user can follow
   * to set a new password using [ChangePasswordApplyApi](/Core/Passport/ChangePassword/ChangePasswordApply.json).
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `text_error` {string} The error code. This will be an empty string if the email has been sent succe...
   */
  WlClient.prototype.corePassportChangePasswordChangePasswordBegin = function(params)
  {
    return this.request('/Core/Passport/ChangePassword/ChangePasswordBegin.json', params || {}, 'POST');
  };

  /**
   * Removes the association between a website client and the Apple account.
  Invalidates the tokens and associated client authorizations.
   *
   * Requires the user to be signed in. Accepts the application ID, retrieves the Apple sign-in certificate
   * for that application, and unlinks the Apple account from the current user.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.socialAppleLoginAppleLoginDelete = function(params)
  {
    return this.request('/Social/Apple/Login/AppleLogin.json', params || {}, 'DELETE');
  };

  /**
   * Signs user in with Apple.
   *
   * Accepts the application ID, the Apple authorization code, and optional first and last name values.
   * If the user is already signed in, binds the Apple account to their existing account; otherwise,
   * signs them in or creates a new account using the Apple identity.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.socialAppleLoginAppleLoginPost = function(params)
  {
    return this.request('/Social/Apple/Login/AppleLogin.json', params || {}, 'POST');
  };

  /**
   * Authorizes user with facebook.
   *
   * Accepts a Facebook access token and an optional application ID. If the user is already signed in,
   * links the Facebook account to their existing account; otherwise, signs them in or creates a new account
   * using the Facebook identity and the configured Facebook credentials.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.socialFacebookLoginLogin = function(params)
  {
    return this.request('/Social/Facebook/Login/Login.json', params || {}, 'POST');
  };

  /**
   * Authorizes user with Google.
   *
   * Accepts a Google server authorization code and an optional application ID, loads the configured Google
   * credential for the application, and completes the OAuth 2.0 flow to sign the user in or create a new account.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.socialGooglePlusLogin = function(params)
  {
    return this.request('/Social/Google/Plus/Login.json', params || {}, 'POST');
  };

  /**
   * This method is a modified Get method `get()`.
  The difference is as follows:
   *
   * - Some data for filtering is now transmitted by the post method.
   * Because the addition of the filters creates a scenario where we can easily reach the maximum URL length of GET
   * requests and the browser refuse to send the request (situations with long class ID, event ID or staff ID lists).
   * 
   *  - Added generation of a separate 'Quick filter'.
   * This generation is enabled using the flag `show_quick_filter`.
   * ...
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `a_calendar` {string[]} Keys are dates of the days inside requested date range, when there is at leas...
   *  `a_quick` {Object} Information about classes/events for quick filter.
   *  `a_session` {Object[]} A list of classes sessions starting with the date [ClassListApi](/Wl/Schedule...
   *  `is_timezone_different` {boolean} If `true`, the list of sessions contains sessions from different time zones. ...
   *  `is_virtual_service` {boolean} If `true`, there exists at least one virtual service by a specified
   */
  WlClient.prototype.wlScheduleClassListClassList68 = function(params)
  {
    return this.request('/Wl/Schedule/ClassList/ClassList68.json', params || {}, 'POST');
  };

  /**
   * Retrieves a list of classes and class information for the given business and date range.
   *
   * Returns upcoming class sessions for a business, with optional filtering by location,
   * day of week, time of day, staff member, and virtual or in-person mode. The result includes
   * per-session details such as staff, capacity, booking counts, and virtual locations, as well as
   * a calendar map indicating which dates have at least one scheduled session.
   * @deprecated Use {@link \Wl\Schedule\ClassList\ClassList68Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_class The list of classes keys to filter.
   * @param {number[]} params.a_day Class filter by day of the week.
   * @param {string[]} params.a_location The list of location keys to filter results.
   * @param {Object[]} params.a_time Class filter by time of day.
   * @param {string} params.dt_date The list start date in UTC and in MySQL format.
   * @param {string} params.dt_end The list end date in UTC and in MySQL format.
   * @param {boolean} params.is_response_short `true` means to not generate `a_session` result.
   * @param {boolean} params.is_tab_all If `true`, sessions from every class tab are returned. If `false`, use the
   * @param {?boolean} [params.is_virtual] Class filter by type.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_class_tab The category tab key.
   * @param {string} params.s_staff The list of staff members to filter.
   * @param {string} params.s_staff_uid The list of staff user keys to filter.
   * @param {boolean} params.show_cancel If `true`, canceled sessions will be returned. If `false`, canceled sessions won't be returned.
   * @param {boolean} params.show_class If `true`, classes will be included in the response. `false` - otherwise.
   * @param {boolean} params.show_event If `true`, events are also returned. If `false`, only classes are returned.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_calendar` {string[]} Keys are dates of the days inside requested date range, when there is at leas...
   *  `a_session` {Object[]} A list of classes sessions starting with the date `dt_date`
   *  `is_timezone_different` {boolean} If `true`, the list of sessions contains sessions from different time zones. ...
   *  `is_virtual_service` {boolean} If `true`, there exists at least one virtual service by a specified
   */
  WlClient.prototype.wlScheduleClassListClassList = function(params)
  {
    return this.request('/Wl/Schedule/ClassList/ClassList.json', params || {}, 'GET');
  };

  /**
   * Gets information about tabs for page "Book now".
   *
   * Returns the set of service booking tabs configured by the business, filtered for the
   * specified location and user. Used to populate the tab strip on the "Book Now" page or
   * embedded widget. Tabs may represent classes, appointments, events, or other bookable services.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_widget Whether we are inside the widget or not.
   * @param {string} params.k_business The key of the current business.
   * @param {string} params.k_location The key of the current location.
   * @param {string} params.uid The key of the current user.
   * @returns {Promise<Object>} Response data.
   *  `a_tab` {Object[]} An array containing information about tabs to present to the user.
   */
  WlClient.prototype.wlScheduleTabTab = function(params)
  {
    return this.request('/Wl/Schedule/Tab/Tab.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about class.
   *
   * Returns detailed information about one or more class sessions, including staff, location,
   * assigned assets, virtual location links, visit counts, and booking availability. Supports
   * single-session mode for one class period or multi-session mode for batch lookups.
   *
   * @param {Object} [params] Request parameters.
   * @param {?Object[]} [params.a_session_request] A list of sessions to get information for. Every element has the following keys:
   * @param {string} params.dt_date The date/time of the session.
   * @param {?string} [params.k_business] Key of the business in which the action is performed.
   * @param {string} params.k_class_period The class period key.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_asset` {?Object[]} Asset list data.
   *  `a_class` {?Object} Detailed information about the class.
   *  `a_location` {?Object} Location data.
   *  `a_session_result` {Object[]} A list of sessions with information, received in a multiple session mode.
   *  `a_staff` {?Object[]} Staff member list data.
   *  `a_virtual_location` {string[]} List of other locations where virtual class can be booked.
   *  `a_visits_required` {Object[]} A list of classes and events that clients should visit before this one.
   */
  WlClient.prototype.wlScheduleClassViewClassViewGet = function(params)
  {
    return this.request('/Wl/Schedule/ClassView/ClassView.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about classes.
   *
   * A POST-method alternative to `get()` for multi-session batch lookups
   * where the session list is too long to encode in a GET query string. The session list is
   * provided as a JSON-encoded string in the request body.
   *
   * @param {Object} [params] Request parameters.
   * @param {?Object[]} [params.a_session_request] A list of sessions to get information for. Every element has the following keys:
   * @param {string} params.dt_date The date/time of the session.
   * @param {?string} [params.k_business] Key of the business in which the action is performed.
   * @param {string} params.k_class_period The class period key.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_asset` {?Object[]} Asset list data.
   *  `a_class` {?Object} Detailed information about the class.
   *  `a_location` {?Object} Location data.
   *  `a_session_result` {Object[]} A list of sessions with information, received in a multiple session mode.
   *  `a_staff` {?Object[]} Staff member list data.
   *  `a_virtual_location` {string[]} List of other locations where virtual class can be booked.
   */
  WlClient.prototype.wlScheduleClassViewClassViewPost = function(params)
  {
    return this.request('/Wl/Schedule/ClassView/ClassView.json', params || {}, 'POST');
  };

  /**
   * Retrieves information about one element of schedule.
   *
   * Returns full details for a single visit, including staff, location, timing, assigned assets,
   * virtual join URL, and class-specific or appointment-specific information. Used to render the
   * visit detail page in the client's schedule view.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business to which the visit belongs.
   * @param {string} params.k_visit Visit key.
   * @returns {Promise<Object>} Response data.
   *  `a_appointment_visit_info` {Object} Additional visit information about this appointment. Empty array if it's not ...
   *  `a_asset` {Object[]} List of assets: .
   *  `a_class_info` {?Object} Class data:
   *  `a_resource_image` {?Object} Resource image data.
   *  `a_staff` {Object[]} A list of staff members involved in the visit.
   *  `dt_cancel` {string} The latest date and time for when the visit can be canceled without penalty.
   *  `dt_date_global` {string} The date and time of the visit in UTC.
   *  `dt_date_local` {string} The date and time of the visit in the local time zone.
   *  `dtl_location` {string} Session date/time in timezone of the location where it takes place.
   *  `html_description` {string} The description of the service.
   *  `html_special` {string} The special instructions for the service.
   *  `i_capacity` {?number} Capacity of the service.
   *  `i_duration` {number} The scheduled duration of the visit.
   *  `i_wait_spot` {number} Estimated place of reservation on the waiting list.
   *  `id_note` {?number} A list of types of visit note.
   *  `id_virtual_provider` {?number} List of possible value of virtual integrations.
   *  `id_visit` {number} Possible states of the visit: book, attended, cancelled, etc.
   *  `is_checkin` {boolean} If `true`, then this visit is ready to be checked in. If `false`, then this v...
   *  `is_enable_client_cancel` {boolean} This will be `true` if clients can cancel the session. Otherwise, this will b...
   *  `is_event` {boolean} If `true`, then this visit is a part of a larger event. If `false`, then this...
   *  `...` {*}
   */
  WlClient.prototype.wlSchedulePagePageElement = function(params)
  {
    return this.request('/Wl/Schedule/Page/PageElement.json', params || {}, 'GET');
  };

  /**
   * Retrieves items of schedule for the client.
   *
   * Returns the client's upcoming or past visits for a given business, ordered by date. Supports
   * optional date range boundaries to retrieve visits within a specific window. Used to populate
   * the schedule history and upcoming bookings pages in the client portal.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dtu_end] If the date is set, a list of services before this date will be returned.
   * @param {?string} [params.dtu_start] If the date is set, a list of services after this date will be returned.
   * @param {boolean} params.is_past If `true`, then all the client previous visits will be retrieved.
   * @param {string} params.k_business The business key.
   * @param {?string} [params.uid] The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_visit` {Object[]} Elements of user's schedule. Every element has next keys:
   */
  WlClient.prototype.wlSchedulePagePageList = function(params)
  {
    return this.request('/Wl/Schedule/Page/PageList.json', params || {}, 'GET');
  };

  /**
   * Return data about appointment's add-ons.
   *
   * Returns the current list of add-ons attached to the specified appointment along with the full
   *  catalog of available add-ons for the service. The caller must have view access to the appointment.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to get add-ons for. Not empty only when getting add-ons for new appointment
   * @param {string} params.k_appointment The appointment key.
   * @param {string} params.k_business The business key. This will be an empty string if not set yet.
   * @param {string} params.k_location Location key.
   * @param {string} params.k_service Service key.
   * @returns {Promise<Object>} Response data.
   *  `a_addon_data` {Object} Data to show appointment add-ons:
   */
  WlClient.prototype.wlAppointmentEditAddonUpdateGet = function(params)
  {
    return this.request('/Wl/Appointment/Edit/AddonUpdate.json', params || {}, 'GET');
  };

  /**
   * Replaces the add-ons for the appointment with the provided list, optionally updating the appointment duration.
   *
   * Removes all existing add-ons from the appointment and attaches the provided set in their place.
   *  When add-ons with a duration are included, the appointment end time is recalculated accordingly.
   *  The operation runs inside a database transaction to ensure consistency.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_appointment The appointment key.
   * @param {string} params.k_business The business key. This will be an empty string if not set yet.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlAppointmentEditAddonUpdatePut = function(params)
  {
    return this.request('/Wl/Appointment/Edit/AddonUpdate.json', params || {}, 'PUT');
  };

  /**
   * Gets information about appointment.
   *
   * Returns detailed information about the specified appointment, including service details, staff member,
   *  date and time in the location's timezone, booking status, client information, and any associated
   *  assets or add-ons. Access is validated against the current user's permissions.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_appointment Class identifier to get information for.
   * @returns {Promise<Object>} Response data.
   *  `a_next` {Object} Next appointment data, or empty array if there are no appointments in the fut...
   *  `a_previous` {Object} Previous appointment data, or empty array if there are no appointments in the...
   *  `a_question` {Object[]} List of questions and answers:
   *  `a_resource` {Object[]} List of assets used by this appointment. Each element contains:
   *  `a_shop_product_option` {Object[]} List of appointment add-ons. Every element has next keys:
   *  `dt_date_local` {string} Date/time of appointment in location timezone.
   *  `i_duration` {?number} Appointment duration (in minutes).
   *  `i_index` {?number} Index of booked asset.
   *  `id_appointment_pay` {number} The possible payment types an appointment can have.
   *  `k_location` {string} Location key.
   *  `k_login_promotion` {?string} Purchased promotion which provides this appointment.
   *  `k_resource` {?string} Asset key.
   *  `k_resource_type` {?string} Asset category key.
   *  `k_service` {?string} Service key.
   *  `k_service_category` {?string} Service category key.
   *  `k_session_pass` {?string} Purchased drop-in which provides this appointment.
   *  `k_staff` {string} Staff member who conducts this appointment.
   *  `text_title` {string} Title of the appointment.
   *  `uid_appointment` {string} User for whom this appointment was booked.
   *  `uid_staff` {?string} Staff member who conducts this appointment.
   */
  WlClient.prototype.wlAppointmentInfoInfo = function(params)
  {
    return this.request('/Wl/Appointment/Info/Info.json', params || {}, 'GET');
  };

  /**
   * Gets list of client's last booked services.
   *
   * Returns the most recently booked unique services for the given client at the given business,
   *  filtered by service type (appointment or bookable asset). Duplicate services are collapsed so
   *  only the most recent booking per service is included, up to `MAX_SERVICE_COUNT`.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_visit Count of last booked services to return. Default value is 5.
   * @param {number} params.id_service Type of service to return. One of [ServiceSid](#/components/schemas/Wl.Service.ServiceSid) consta...
   * @param {string} params.k_business The key of the business.
   * @param {string} params.uid The key of the user.
   * @returns {Promise<Object>} Response data.
   *  `a_service_last` {string[]} List of last booked services.
   */
  WlClient.prototype.wlAppointmentRecentRecentService = function(params)
  {
    return this.request('/Wl/Appointment/Recent/RecentService.json', params || {}, 'GET');
  };

  /**
   * Processes the group booking: validates input, collects payment, books sessions, and sends confirmation emails.
   *
   * Accepts a list of clients with their purchase items, resources, sessions, and quiz responses, then validates
   * capacity and eligibility, processes payment for all clients at once, creates booking records, and dispatches
   * confirmation emails. Returns visit keys, activity keys, and purchase activity key upon success.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @returns {Promise<Object>} Response data.
   *  `a_book_error` {Object[]} List of errors that occurred during booking.
   *  `a_login_activity_book` {string[]} Primary keys of users' activity that correspond to bookings made.
   *  `a_visit` {string[]} Primary keys of bookings made.
   *  `k_login_activity_purchase` {?string} The key of the user's activity corresponding to the purchase made.
   */
  WlClient.prototype.wlBookProcessProcessGroup = function(params)
  {
    return this.request('/Wl/Book/Process/ProcessGroup.json', params || {}, 'POST');
  };

  /**
   * Returns the ordered list of booking wizard steps for the given session and client.
   *
   * Evaluates the session, user profile, payment requirements, asset selection, and subscription state to build
   * an ordered list of steps the client must complete to finish the booking. The first step in the list is marked
   * as current, and additional flags about event type, wait-list availability, and payment options are returned.
   * @deprecated Use {@link \Wl\Book\Process\Process54Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_family_relation_login_allow` {?number[]} Relationships who clients are allowed to book for.
   *  `a_path` {Object[]} All the steps to be performed to make a booking. Every element has the next k...
   *  `id_pay_require` {number} List of possible modes to require amount while booking a class.
   *  `is_age_require` {boolean} `true` if this class has age restriction and requires user to specify age. `f...
   *  `is_card_authorize` {boolean} Determines if the client must authorize the credit card.
   *  `is_event` {boolean} If `true`, the session being booked is an event. Otherwise, this will be `fal...
   *  `is_family_relation_book` {boolean} Determines whether clients are allowed to book for their relationships withou...
   *  `is_free` {boolean} Determines whether the class/event is free (price).
   *  `is_have_ach` {boolean} `true` if the client has an ach account, `false` otherwise.
   *  `is_have_credit_card` {boolean} If `true`, the client has a credit card. Otherwise, this will be `false`.
   *  `is_session` {boolean} `true` - the client can select several sessions per booking.
   *  `is_wait` {boolean} If `true`, the user can be placed on a wait list. Otherwise, this will be `fa...
   *  `is_wait_list_unpaid` {boolean} If `true`, the user can be placed on a wait list without payment, `false` oth...
   *  `k_location` {string} The key of the location where the session is booked.
   */
  WlClient.prototype.wlBookProcessProcess = function(params)
  {
    return this.request('/Wl/Book/Process/Process.json', params || {}, 'GET');
  };

  /**
   * Returns the ordered list of booking wizard steps, including the quiz step when required.
   *
   * Delegates to the parent implementation and then appends the quiz (or document) step when the class or event
   * requires it, adds the detail step for Client Web App flows, and re-sorts the path into the correct wizard order.
   * @deprecated Use {@link \Wl\Book\Process\Process59Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_family_relation_login_allow` {?number[]} Relationships who clients are allowed to book for.
   *  `a_path` {Object[]} All the steps to be performed to make a booking. Every element has the next k...
   *  `id_pay_require` {number} List of possible modes to require amount while booking a class.
   *  `is_age_require` {boolean} `true` if this class has age restriction and requires user to specify age. `f...
   *  `is_card_authorize` {boolean} Determines if the client must authorize the credit card.
   *  `is_event` {boolean} If `true`, the session being booked is an event. Otherwise, this will be `fal...
   *  `is_family_relation_book` {boolean} Determines whether clients are allowed to book for their relationships withou...
   *  `is_free` {boolean} Determines whether the class/event is free (price).
   *  `is_have_ach` {boolean} `true` if the client has an ach account, `false` otherwise.
   *  `is_have_credit_card` {boolean} If `true`, the client has a credit card. Otherwise, this will be `false`.
   *  `is_session` {boolean} `true` - the client can select several sessions per booking.
   *  `is_wait` {boolean} If `true`, the user can be placed on a wait list. Otherwise, this will be `fa...
   *  `is_wait_list_unpaid` {boolean} If `true`, the user can be placed on a wait list without payment, `false` oth...
   *  `k_location` {string} The key of the location where the session is booked.
   */
  WlClient.prototype.wlBookProcessProcess54 = function(params)
  {
    return this.request('/Wl/Book/Process/Process54.json', params || {}, 'GET');
  };

  /**
   * Returns the booking wizard steps, adjusting the path when the service is already booked for a family member.
   *
   * Delegates to the parent implementation and then, when family-relation booking is enabled and the service is
   * already booked for the selected relative, trims the wizard path down to only the relation and detail steps.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_family_relation_login_allow` {?number[]} Relationships who clients are allowed to book for.
   *  `a_path` {Object[]} All the steps to be performed to make a booking. Every element has the next k...
   *  `id_pay_require` {number} List of possible modes to require amount while booking a class.
   *  `is_age_require` {boolean} `true` if this class has age restriction and requires user to specify age. `f...
   *  `is_card_authorize` {boolean} Determines if the client must authorize the credit card.
   *  `is_event` {boolean} If `true`, the session being booked is an event. Otherwise, this will be `fal...
   *  `is_family_relation_book` {boolean} Determines whether clients are allowed to book for their relationships withou...
   *  `is_free` {boolean} Determines whether the class/event is free (price).
   *  `is_have_ach` {boolean} `true` if the client has an ach account, `false` otherwise.
   *  `is_have_credit_card` {boolean} If `true`, the client has a credit card. Otherwise, this will be `false`.
   *  `is_session` {boolean} `true` - the client can select several sessions per booking.
   *  `is_wait` {boolean} If `true`, the user can be placed on a wait list. Otherwise, this will be `fa...
   *  `is_wait_list_unpaid` {boolean} If `true`, the user can be placed on a wait list without payment, `false` oth...
   *  `k_location` {string} The key of the location where the session is booked.
   */
  WlClient.prototype.wlBookProcessProcess59 = function(params)
  {
    return this.request('/Wl/Book/Process/Process59.json', params || {}, 'GET');
  };

  /**
   * Returns information about whether the given user can cancel the booking and the expected consequences.
   *
   * Accepts a business key and a visit key, validates access, and performs a dry-run cancellation to determine
   * whether the visit can be cancelled online, whether a late-cancel penalty applies, and whether the purchase
   * option credit would be refunded.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business within which the action is performed.
   * @param {string} params.k_visit Visit key.
   * @returns {Promise<Object>} Response data.
   *  `a_penalty` {?Object} Penalty data.
   *  `can_cancel` {boolean} `true` if the booking can be canceled online by the specified user, `false` o...
   *  `is_flag` {boolean} `true` if the client's account will be flagged instead of charging a monetary...
   *  `is_late` {boolean} `true` if the cancellation would be considered a late cancel, `false` otherwise.
   *  `is_refund` {boolean} `true` if the visit credit (from the purchase option used to book) will be re...
   */
  WlClient.prototype.wlBookCancelCancelCan = function(params)
  {
    return this.request('/Wl/Book/Cancel/CancelCan.json', params || {}, 'GET');
  };

  /**
   * Checks if user `uid` is flagged in location `k_location` or
  each of users `a_uid` is flagged in location `k_location`.
   *
   * Accepts either a single user key (`uid`) or an array of user keys (`a_uid`) and returns the flag status
   * for each, including whether the flagged user is restricted from booking or purchasing at the location.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_uid] User keys.
   * @param {string} params.k_location The location key.
   * @param {?string} [params.uid] The user's key.
   * @returns {Promise<Object>} Response data.
   *  `a_flag` {Object} Array with structure:
   *  `a_restrictions_multiple` {?Object} Array, where keys are UIDs to be checked and values are same as `a_restrictio...
   *  `a_restrictions_single` {?Object} `null` if user is not flagged in the location.
   *  `is_flag` {boolean} `true` if the user is flagged and can make purchases, but cannot make new res...
   */
  WlClient.prototype.wlLocationFlagFlag = function(params)
  {
    return this.request('/Wl/Location/Flag/Flag.json', params || {}, 'GET');
  };

  /**
   * Saves working hours of the location.
   *
   * Accepts a list of day-and-time-range entries representing the weekly schedule and replaces all existing
   * working hours for the location. Days not present in the list are treated as non-working days.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLocationWorkTimeLocationWorkTime = function(params)
  {
    return this.request('/Wl/Location/WorkTime/LocationWorkTime.json', params || {}, 'POST');
  };

  /**
   * Returns detailed information about the specified location.
   *
   * Returns the full profile of a location, including address, coordinates, timezone, contact information,
   * business hours, logo, slide images, amenities, social media links, and a description.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_logo_height Maximum location image height.
   * @param {number} params.i_logo_width Maximum location image width.
   * @param {string} params.k_location The location key.
   * @returns {Promise<Object>} Response data.
   *  `a_age` {number[]} A list of ages that are permitted for visiting this location.
   *  `a_amenities` {number[]} A list of facilities that are available in this location.
   *  `a_level` {string[]} A list of levels that are suitable for visiting this location.
   *  `a_logo` {Object} Information about the location logo used in WellnessLiving:
   *  `a_slide` {Object} A list of the location images.
   *  `a_work` {Object} The hours of operation for the location.
   *  `f_latitude` {number} The latitude coordinate of the location.
   *  `f_longitude` {number} The longitude coordinate of the location.
   *  `html_description_full` {string} The full description of the location.
   *  `html_description_preview` {string} A shorter description of the location. A preview of `html_description_full`.
   *  `id_industry` {number} List of different types for landing pages based on business types.
   *  `is_phone` {boolean} `true` if to display phone number on location page. `false` otherwise.
   *  `is_top_choice` {boolean} `true` if WellnessLiving identifies this is a top choice location, `false` ot...
   *  `k_business` {string} The key of the business this location belongs to.
   *  `k_business_type` {string} The key of the business type this location belongs to.
   *  `k_timezone` {string} The timezone.
   *  `s_address` {string} The physical address of the location.
   *  `s_map` {string} A string that can be used in navigator programs.
   *  `s_phone` {string} The phone number for the location.
   *  `s_timezone` {string} The system name of the time zone.
   *  `...` {*}
   */
  WlClient.prototype.wlLocationViewView = function(params)
  {
    return this.request('/Wl/Location/View/View.json', params || {}, 'GET');
  };

  /**
   * Returns the list of all items for the given Sid class.
   *
   * Populates enumeration dropdowns and lookup tables on the frontend.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.s_class_name Name of the Sid class to get list from.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object} List of items. Keys are IDs, values are arrays with additional information:
   */
  WlClient.prototype.wlLocationFacilityFacilitySid = function(params)
  {
    return this.request('/Wl/Location/Facility/FacilitySid.json', params || {}, 'GET');
  };

  /**
   * Returns current user profile information.
   *
   * Returns the profile field definitions and current values for the specified user, or an empty
   *  structure when creating a new account. Used to populate the profile edit form with the
   *  correct fields, validation rules, and inheritance options for the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} [params.id_register_source] Registration source ID.
   * @param {boolean} params.is_staff Indicates whether to display the form as a user or as a staff member.
   * @param {string} params.k_business The key of the business you're editing.
   * @param {string} params.uid The key of the user to edit.
   * @returns {Promise<Object>} Response data.
   *  `a_error_list` {?Object[]} List of validation errors. `null` if no error occurred.
   *  `a_phone_inherit` {Object} An array contained with information about phone inheritance.
   *  `a_structure` {Object[]} The values and structure of all fields. Array keys are field IDs (`k_field`).
   *  `can_password_change` {boolean} Whether current user can change password of the given user or not.
   *  `is_a2p` {boolean} `true` if the A2P 10DLC registration feature is enabled for this business, `f...
   *  `is_address_inherit` {?boolean} Whether the address be inherited.
   *  `is_short` {boolean} Indicates whether to display the full profile edit form or the short version.
   *  `k_lead_source` {?string} Key of the lead source.
   *  `s_class` {?string} Exception class name.
   *  `s_code` {?string} Code of the error.
   *  `text_message` {?string} Error message.
   *  `uid_inherit_address` {?string} UID of the user, whose address was inherited by the existing client we want t...
   */
  WlClient.prototype.wlProfileEditEditGet = function(params)
  {
    return this.request('/Wl/Profile/Edit/Edit.json', params || {}, 'GET');
  };

  /**
   * Creates a new user.
   *
   * Registers a new user in the business using the submitted profile field values, enforces
   *  IP-based registration rate limiting, and handles family relations and phone or address
   *  inheritance. Returns the identifier of the newly created account.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} [params.id_mode] ID of source mode. One of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {?number} [params.id_register_source] Registration source ID.
   * @param {?boolean} [params.is_address_inherit] Whether the address be inherited.
   * @param {boolean} params.is_short Indicates whether to display the full profile edit form or the short version.
   * @param {boolean} params.is_staff Indicates whether to display the form as a user or as a staff member.
   * @param {string} params.k_business The key of the business you're editing.
   * @param {?string} [params.k_lead_source] Key of the lead source.
   * @param {string} params.text_business_uid_key Compound key delimited with a colon. First part is the business key where the selected client exi...
   * @param {string} params.uid The key of the user to edit.
   * @param {string} params.uid_existed The UID of an existing user in another business to add to the current business.
   * @param {?string} [params.uid_inherit_address] UID of the user, whose address was inherited by the existing client we want to add.
   * @param {string} params.uid_relative_key UID of the user, whose email was inherited by the existing client we want to add.
   * @returns {Promise<Object>} Response data.
   *  `a_error_list` {?Object[]} List of validation errors. `null` if no error occurred.
   *  `s_class` {?string} Exception class name.
   *  `s_code` {?string} Code of the error.
   *  `s_status` {?string} Status of the request.
   *  `text_message` {?string} Error message.
   *  `uid` {string} The key of the user to edit.
   */
  WlClient.prototype.wlProfileEditEditPost = function(params)
  {
    return this.request('/Wl/Profile/Edit/Edit.json', params || {}, 'POST');
  };

  /**
   * Updates values of profile fields.
   *
   * Saves the updated profile field values for the existing user, propagates phone and address
   *  inheritance changes, triggers relevant notifications, and re-indexes the user for search.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} [params.id_register_source] Registration source ID.
   * @param {?boolean} [params.is_address_inherit] Whether the address be inherited.
   * @param {boolean} params.is_staff Indicates whether to display the form as a user or as a staff member.
   * @param {string} params.k_business The key of the business you're editing.
   * @param {?string} [params.k_lead_source] Key of the lead source.
   * @param {string} params.uid The key of the user to edit.
   * @param {?string} [params.uid_inherit_address] UID of the user, whose address was inherited by the existing client we want to add.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlProfileEditEditPut = function(params)
  {
    return this.request('/Wl/Profile/Edit/Edit.json', params || {}, 'PUT');
  };

  /**
   * Creates a new user.
   *
   * Creates a new user account with the given email, first name, and last name in the specified
   *  business, registers the user as a member, and returns the `uid` of the created or existing
   *  user.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `uid` {string} The key of the user added.
   */
  WlClient.prototype.wlProfileEditCreate = function(params)
  {
    return this.request('/Wl/Profile/Edit/Create.json', params || {}, 'POST');
  };

  /**
   * Returns current user profile information.
   *
   * Returns the profile field definitions and current values for the specified user, or an empty
   *  structure when creating a new account. Used to populate the profile edit form with the
   *  correct fields, validation rules, and inheritance options for the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} [params.id_register_source] Registration source ID.
   * @param {boolean} params.is_staff Indicates whether to display the form as a user or as a staff member.
   * @param {string} params.k_business The key of the business you're editing.
   * @param {string} params.text_token The security token.
   * @param {string} params.uid The key of the user to edit.
   * @returns {Promise<Object>} Response data.
   *  `a_error_list` {?Object[]} List of validation errors. `null` if no error occurred.
   *  `a_phone_inherit` {Object} An array contained with information about phone inheritance.
   *  `a_structure` {Object[]} The values and structure of all fields. Array keys are field IDs (`k_field`).
   *  `can_password_change` {boolean} Whether current user can change password of the given user or not.
   *  `is_a2p` {boolean} `true` if the A2P 10DLC registration feature is enabled for this business, `f...
   *  `is_address_inherit` {?boolean} Whether the address be inherited.
   *  `is_short` {boolean} Indicates whether to display the full profile edit form or the short version.
   *  `k_lead_source` {?string} Key of the lead source.
   *  `s_class` {?string} Exception class name.
   *  `s_code` {?string} Code of the error.
   *  `text_message` {?string} Error message.
   *  `uid_inherit_address` {?string} UID of the user, whose address was inherited by the existing client we want t...
   */
  WlClient.prototype.wlProfileEditEditByTokenGet = function(params)
  {
    return this.request('/Wl/Profile/Edit/EditByToken.json', params || {}, 'GET');
  };

  /**
   * Creates a new user.
   *
   * Registers a new user in the business using the submitted profile field values, enforces
   *  IP-based registration rate limiting, and handles family relations and phone or address
   *  inheritance. Returns the identifier of the newly created account.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} [params.id_mode] ID of source mode. One of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {?number} [params.id_register_source] Registration source ID.
   * @param {?boolean} [params.is_address_inherit] Whether the address be inherited.
   * @param {boolean} params.is_short Indicates whether to display the full profile edit form or the short version.
   * @param {boolean} params.is_staff Indicates whether to display the form as a user or as a staff member.
   * @param {string} params.k_business The key of the business you're editing.
   * @param {?string} [params.k_lead_source] Key of the lead source.
   * @param {string} params.text_business_uid_key Compound key delimited with a colon. First part is the business key where the selected client exi...
   * @param {string} params.uid The key of the user to edit.
   * @param {string} params.uid_existed The UID of an existing user in another business to add to the current business.
   * @param {?string} [params.uid_inherit_address] UID of the user, whose address was inherited by the existing client we want to add.
   * @param {string} params.uid_relative_key UID of the user, whose email was inherited by the existing client we want to add.
   * @returns {Promise<Object>} Response data.
   *  `a_error_list` {?Object[]} List of validation errors. `null` if no error occurred.
   *  `s_class` {?string} Exception class name.
   *  `s_code` {?string} Code of the error.
   *  `s_status` {?string} Status of the request.
   *  `text_message` {?string} Error message.
   *  `uid` {string} The key of the user to edit.
   */
  WlClient.prototype.wlProfileEditEditByTokenPost = function(params)
  {
    return this.request('/Wl/Profile/Edit/EditByToken.json', params || {}, 'POST');
  };

  /**
   * Updates values of profile fields.
   *
   * Saves the updated profile field values for the existing user, propagates phone and address
   *  inheritance changes, triggers relevant notifications, and re-indexes the user for search.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} [params.id_register_source] Registration source ID.
   * @param {?boolean} [params.is_address_inherit] Whether the address be inherited.
   * @param {boolean} params.is_staff Indicates whether to display the form as a user or as a staff member.
   * @param {string} params.k_business The key of the business you're editing.
   * @param {?string} [params.k_lead_source] Key of the lead source.
   * @param {string} params.uid The key of the user to edit.
   * @param {?string} [params.uid_inherit_address] UID of the user, whose address was inherited by the existing client we want to add.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlProfileEditEditByTokenPut = function(params)
  {
    return this.request('/Wl/Profile/Edit/EditByToken.json', params || {}, 'PUT');
  };

  /**
   * Saves new password for user.
   *
   * Changes the user's password after verifying the current one, enforcing complexity and
   *  length rules, and sends a password-change notification email. The old password check can
   *  be skipped by staff with the appropriate access level.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlProfileEditEditPassword = function(params)
  {
    return this.request('/Wl/Profile/Edit/EditPassword.json', params || {}, 'POST');
  };

  /**
   * Returns the list of file attachments for the specified client in the given business.
   *
   * Returns all file attachments uploaded to the client's profile. In backend mode the result
   *  also includes private attachments that are hidden from the client-facing view, with
   *  additional metadata such as source, description, and a delete permission flag.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business Business key.
   * @param {string} params.text_search The filter phrase to filter attach by name.
   * @param {string} params.uid Business key.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} List of client attachments.
   */
  WlClient.prototype.wlProfileAttachAttachList = function(params)
  {
    return this.request('/Wl/Profile/Attach/AttachList.json', params || {}, 'GET');
  };

  /**
   * Deletes the attachment.
   *
   * Permanently removes the specified attachment from the client profile and logs the deletion
   *  action in the business audit trail.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_attach Attachment key.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlProfileAttachAttachElementDelete = function(params)
  {
    return this.request('/Wl/Profile/Attach/AttachElement.json', params || {}, 'DELETE');
  };

  /**
   * Gets the data for the attachment editing form.
   *
   * Returns attachment metadata including filename, description, filesize, file type, creation
   *  and edit timestamps, download URL, preview URL, and a flag indicating whether the current
   *  user has permission to delete the attachment.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_attach Attachment key.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `dtu_create` {string} Date and time of the creation.
   *  `dtu_edit` {string} Date and time of the last edit.
   *  `s_show_delete` {string} Flag for showing a delete button.
   *  `text_description` {?string} Attachment description.
   *  `text_filename` {?string} Attachment file name.
   *  `text_filesize` {string} Attachment file size.
   *  `text_filetype` {string} Attachment file type.
   *  `url_file` {string} URL to get attachment file.
   *  `url_preview` {?string} URL to get preview attachment data.
   */
  WlClient.prototype.wlProfileAttachAttachElementGet = function(params)
  {
    return this.request('/Wl/Profile/Attach/AttachElement.json', params || {}, 'GET');
  };

  /**
   * In case the attachment key is not specified, it adds a new attachment.
  In case the attachment key is specified, edits the attachment.
   *
   * When `k_attach` is empty, uploads a new file to the client profile; when set, updates the
   *  attachment metadata, file content, or visibility flag depending on the provided fields.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_attach Attachment key.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `k_attach` {string} Attachment key.
   */
  WlClient.prototype.wlProfileAttachAttachElementPost = function(params)
  {
    return this.request('/Wl/Profile/Attach/AttachElement.json', params || {}, 'POST');
  };

  /**
   * Retrieves information about 1 purchase item.
   *
   * Loads the full details of a single purchase item for display on the client profile, including
   *  pricing, discounts, taxes, refunds, and current status. The item can be identified by
   *  purchase item key, redemption code, or login promotion key.
   * @deprecated Use {@link \Wl\Profile\PurchaseList\PurchaseListElementApi} instead. It provides the same functionality and more.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] The business key. Currently used only with `k_session_pass` variable.
   * @param {string} params.k_code The key of the redemption code used to obtain some goods.
   * @param {string} params.k_enrollment_book The key of an entirely booked event.
   * @param {string} params.k_login_product The key of a purchased product.
   * @param {string} params.k_login_promotion The key of the user's promotion.
   * @param {string} params.k_purchase_item The key of the purchased item. This should be specified only for ordinary purchases, not for thos...
   * @param {string} params.k_session_pass The key of the make-up session used to attend an event.
   * @returns {Promise<Object>} Response data.
   *  `a_component` {Object[]} List of components (not empty if this purchase element is a package). Every e...
   *  `a_logo` {Object} An array containing information about the image of the purchased item. Every ...
   *  `a_restrict` {Object[]} This field is used only for promotions. It contains restrictions that will
   *  `a_tax` {Object[]} The list of taxes paid for the purchased item. Every element has the followin...
   *  `can_renew` {boolean} This is `true` only if the purchased item is a promotion and the user can con...
   *  `dl_purchase` {string} Local date of purchase in MySQL format.
   *  `dl_start` {string} The start date of the promotion. This is used only if the purchased item is a...
   *  `dt_end` {string} The expiration date of the promotion. This is used only if the purchased item...
   *  `dt_hold_end` {string} The end date of the promotion hold. This is used only for promotions on hold.
   *  `dt_hold_start` {string} The start date of the promotion hold. This is used only for promotions on hold.
   *  `dt_purchase` {string} The purchase date of the purchased item. This is given in GMT in MySQL format.
   *  `dt_send` {string} The date for when the email regarding the gift card should be sent (or was se...
   *  `f_discount_login_type_percent` {number} The percentage value of the discount for the client type. This is empty if th...
   *  `html_description` {string} The description of the purchased item.
   *  `i_book` {number} The number of sessions remaining for a promotion. This is used only for promo...
   *  `i_buy` {number} The number of purchased items bought at the time of purchase.
   *  `i_discount_count` {number} The percentage value of the discount given by a reward prize. This field will...
   *  `i_duration` {number} This field is only added for promotions. Duration of promotion. Measurement u...
   *  `i_left` {number} The number of bookings remaining in this promotion. This value is used only f...
   *  `i_limit` {number} The number of visits which can be made with this promotion. This is used only...
   *  `...` {*}
   */
  WlClient.prototype.wlProfilePurchasePurchaseElement = function(params)
  {
    return this.request('/Wl/Profile/Purchase/PurchaseElement.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of user's purchase items to show in user profile.
   *
   * Returns the complete purchase history for the client in the given business, covering all
   *  item types such as memberships, redemption codes, enrollments, products, appointments, and
   *  gift cards. Package components are resolved and included inline beside their parent item.
   * @deprecated Use {@link \Wl\Profile\PurchaseList\PurchaseListApi} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of a business to show information for.
   * @param {string} params.uid The key of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_purchase` {Object[]} A list of purchased items. Every element contains a sub-array with the follow...
   */
  WlClient.prototype.wlProfilePurchasePurchaseList = function(params)
  {
    return this.request('/Wl/Profile/Purchase/PurchaseList.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of user's purchase items to show in user profile.
   *
   * Returns the complete purchase history for the client in the given business, covering all
   *  item types such as memberships, redemption codes, enrollments, products, appointments, and
   *  gift cards. Package components are resolved and included inline beside their parent item.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of a business to show information for.
   * @param {string} params.uid The key of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_purchase` {Object[]} A list of purchased items. Every element contains a sub-array with the follow...
   */
  WlClient.prototype.wlProfilePurchaseListPurchaseList = function(params)
  {
    return this.request('/Wl/Profile/PurchaseList/PurchaseList.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about 1 purchase item.
   *
   * Loads the full details of a single purchase item for display on the client profile, including
   *  pricing, discounts, taxes, refunds, and current status. The item can be identified by
   *  purchase item key, redemption code, or login promotion key.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_image_height Image Height in pixels. Please specify this value if you need purchase image to be returned in sp...
   * @param {number} params.i_image_width Image Width in pixels. Please specify this value if you need purchase image to be returned in spe...
   * @param {?string} [params.k_business] The business key. Used with `k_session_pass` variable and
   * @param {string} params.k_code The ID of the redemption code used to obtain the item. This should be specified only for items ob...
   * @param {string} params.k_enrollment_book The key of an entirely booked event. This must be specified if the purchased item is a whole event
   * @param {string} params.k_login_product The key of a purchased product. This must be specified if the purchased item is a product and par...
   * @param {string} params.k_login_promotion The key of the user's promotion. This should only be specified for promotions given without a pur...
   * @param {string} params.k_purchase_item The key of the purchased item. This should be specified only for ordinary purchases
   * @param {string} params.k_session_pass The ID of the makeup session used to attend an event.
   * @returns {Promise<Object>} Response data.
   *  `a_component` {Object|Object[]} A list of components. This won't be empty if this purchase element is a packa...
   *  `a_logo` {?Object} An array containing information about the image of the purchased item. Every ...
   *  `a_restrict` {Object[]} This field is used only for promotions. It contains restrictions that will ap...
   *  `a_tax` {Object[]} The list of taxes paid for the purchased item. Every element has the followin...
   *  `can_renew` {boolean} This is `true` only if the purchased item is a promotion and the user can con...
   *  `dl_cancel` {string} The cancellation date of the promotion. Only available if the item is a promo...
   *  `dl_end` {string} The expiration date of the promotion. Only available if the item is a promotion.
   *  `dl_purchase` {string} The local date of the purchase in MySQL format.
   *  `dl_send` {string} The local date in MySQL format when mail about purchasing was sent (or will b...
   *  `dl_start` {string} The start date of the promotion. Only available if the item is a promotion.
   *  `dt_cancel` {string} The local date of cancellation in MySQL format. Only available if the item is...
   *  `dt_hold_end` {string} The end date of the promotion hold. This is used only for promotions on hold.
   *  `dt_hold_start` {string} The start date of the promotion hold. Only available if the item is a promoti...
   *  `dt_purchase` {string} The purchase date of the purchased item. This is given in UTC in MySQL format.
   *  `dt_redeem` {string} The date in MySQL format when gift card was redeemed. Only available if the i...
   *  `f_discount_login_type_percent` {number} The percentage value of the discount for the client type. This will be empty ...
   *  `html_description` {string} The description of the purchased item.
   *  `i_book` {number} The number of sessions remaining for a promotion. This value is used only for...
   *  `i_book_duration` {number} Displays the number of minutes of sessions that were booked by this promotion...
   *  `i_buy` {number} The number of purchased items bought at the time of purchase.
   *  `...` {*}
   */
  WlClient.prototype.wlProfilePurchaseListPurchaseListElement = function(params)
  {
    return this.request('/Wl/Profile/PurchaseList/PurchaseListElement.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of notices to show in user's profile.
   *
   * Returns `a_alert` (system alerts including unconfirmed contracts) and `a_warning` (login notes
   *  and flags with author and editor information) for the specified user in the given business.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The key of the business.
   * @param {string} params.uid The key of the user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_alert` {Object[]} A list of alerts. Every element is an array with the following keys:
   *  `a_warning` {Object[]} A list of warnings. Every element is an array with the following keys:
   */
  WlClient.prototype.wlProfileAlertAlert = function(params)
  {
    return this.request('/Wl/Profile/Alert/Alert.json', params || {}, 'GET');
  };

  /**
   * Deletes existing note.
   *
   * Permanently removes the login note specified by `k_login_note` from the business, requiring
   *  backend access for the current user.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of current business.
   * @param {string} params.k_login_note Login note key to edit or get info for.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlProfileAlertAlertEditDelete = function(params)
  {
    return this.request('/Wl/Profile/Alert/AlertEdit.json', params || {}, 'DELETE');
  };

  /**
   * Retrieves login note data.
   *
   * Loads a single login note for editing, including its text, access type, flag settings,
   *  booking and purchase restrictions, and location flags. Used to populate the edit form before
   *  saving changes.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of current business.
   * @param {string} params.k_login_note Login note key to edit or get info for.
   * @param {string} params.uid Key of a user to show information or post a note for.
   * @returns {Promise<Object>} Response data.
   *  `a_login_note_data` {Object} Login note information.
   */
  WlClient.prototype.wlProfileAlertAlertEditGet = function(params)
  {
    return this.request('/Wl/Profile/Alert/AlertEdit.json', params || {}, 'GET');
  };

  /**
   * Creates new text note or updates the existing one.
   *
   * Creates or updates a login note on the client's profile, setting its text, access
   *  restrictions, booking and purchase flags, and the locations where the note applies. Used by
   *  staff to attach internal notes or warnings that appear on check-in and booking flows.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of current business.
   * @param {string} params.k_login_note Login note key to edit or get info for.
   * @param {string} params.uid Key of a user to show information or post a note for.
   * @returns {Promise<Object>} Response data.
   *  `k_login_note` {string} Login note key to edit or get info for.
   */
  WlClient.prototype.wlProfileAlertAlertEditPost = function(params)
  {
    return this.request('/Wl/Profile/Alert/AlertEdit.json', params || {}, 'POST');
  };

  /**
   * Returns online waiver information for the specified user and business.
   *
   * Returns the rendered online waiver text for the business along with the client's current
   *  agreement status. Used to display the waiver page and show whether the client has already
   *  signed, including their signature image and the confirmation timestamp.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the current business.
   * @param {string} params.uid The key of the user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `dt_agree` {?string} The date/time of the waiver confirmation.
   *  `html_contract` {string} The text of the online waiver.
   *  `i_minor_age` {number} Age of minor which documents can be signed by parent or legal guardian.
   *  `ip_agree` {?string} The IP address from which the confirmation was carried out.
   *  `is_agree` {boolean} Flag of successful saving agreement.
   *  `s_name` {string} The user's name.
   *  `url_signature` {string|boolean} The URL to the image with the client's signature.
   */
  WlClient.prototype.wlProfileTermTerm = function(params)
  {
    return this.request('/Wl/Profile/Term/Term.json', params || {}, 'GET');
  };

  /**
   * Returns a list of visits that overlap with the specified service, class, resource, or time data.
   *
   * Checks whether the specified user has any existing bookings that overlap with a given time
   *  range or service. Used before scheduling to detect conflicts and prompt staff or the client
   *  with a warning.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dtu_date] Date of a selected service.
   * @param {number} params.i_duration Duration of a service.
   * @param {boolean} params.is_appointment Whether an asset is booking. Needed in case when a client is allowed to select a date and time, then
   * @param {string} params.k_business Primary key of the business to add the user into.
   * @param {string} params.k_class_period Class period key.
   * @param {string} params.k_location Location key.
   * @param {string} params.k_resource Asset key.
   * @param {string} params.k_service Service key.
   * @param {string} params.k_timezone Key of timezone.
   * @param {string} params.uid UID of a user.
   * @returns {Promise<Object>} Response data.
   *  `a_visit_list` {Object[]} List of visits that overlap with the specified data.
   */
  WlClient.prototype.wlProfileAttendanceAttendanceOverlap = function(params)
  {
    return this.request('/Wl/Profile/Attendance/AttendanceOverlap.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of user settings and other additional information for the settings page.
   *
   * Returns the user's current notification preferences for the business, covering account
   *  activity, news, and schedule reminders across email and SMS channels, along with the
   *  user's current language setting.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.uid The key of the user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `is_account_management_email` {boolean} Determines whether email notifications related to purchases, contracts, and o...
   *  `is_account_management_sms` {boolean} Determines whether SMS notifications related to purchases, contracts, and oth...
   *  `is_news_and_updates_email` {boolean} Determines whether email notifications related to news and updates from the b...
   *  `is_news_and_updates_sms` {boolean} Whether sms notifications related to news and updates from the business regar...
   *  `is_schedule_and_reminders_email` {boolean} Determines whether email notifications related to the services a client has b...
   *  `is_schedule_and_reminders_sms` {boolean} Determines whether SMS notifications related to the services a client has boo...
   *  `text_language` {string} SID of language code.
   */
  WlClient.prototype.wlProfileSettingSettingGet = function(params)
  {
    return this.request('/Wl/Profile/Setting/Setting.json', params || {}, 'GET');
  };

  /**
   * Saves the user's notification settings for the specified business.
   *
   * Saves the user's notification preferences for the business, updating email and SMS opt-in
   *  settings for account activity, news, and schedule reminders.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.uid The key of the user to show information for.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlProfileSettingSettingPost = function(params)
  {
    return this.request('/Wl/Profile/Setting/Setting.json', params || {}, 'POST');
  };

  /**
   * Retrieves information about activity item.
   *
   * Loads a single activity record by `k_login_activity`, validates access via profile privileges,
   *  and returns the activity message, icon, type, reward and credit scores, activity dates in UTC
   *  and local time, spend amount, and a share URL.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_login_activity The key of the activity item represented by this endpoint.
   * @returns {Promise<Object>} Response data.
   *  `a_credit_score` {string[]} Messages with description what did user do to get account credits as reward p...
   *  `a_reward_score` {string[]} Messages with description what did user do to get points.
   *  `can_profile` {boolean} Verifies that current user can view the specified profile.
   *  `dt_date_gmt` {string} The date of the activity in GMT.
   *  `dt_date_local` {string} The date of the activity in the client's time zone.
   *  `html_message` {string} Description of the action, who and what did.
   *  `i_credit_score` {number} Total amount of account credits user got for `k_login_activity`.
   *  `i_score` {number} The total amount of rewards points the client received for the activity.
   *  `i_spend` {number} The rewards points used to redeem a prize.
   *  `id_icon` {?number} List of available design icons.
   *  `id_type` {number} Manages identifiers of user activity.
   *  `k_id` {string} Object ID, for example, class period ID for books and visits.
   *  `s_message` {string} The description of the activity. This should include the nature of the activi...
   *  `url_link` {string} Link to share activity with social networks.
   */
  WlClient.prototype.wlProfileActivityElement = function(params)
  {
    return this.request('/Wl/Profile/Activity/Element.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of activity items to show in user profile.
   *
   * Returns the client's activity history for the specified business, filtered by an optional
   *  date range. Requires profile-view access and respects activity-type visibility rules for the
   *  requesting user.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dl_end Ending date of the date range. Optional.
   * @param {string} params.dl_start Starting date of the date range. Optional.
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.uid The key of the client to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_activity` {string[]} An array listing client activities, where each activity is provided as an ID ...
   */
  WlClient.prototype.wlProfileActivityList = function(params)
  {
    return this.request('/Wl/Profile/Activity/List.json', params || {}, 'GET');
  };

  /**
   * Returns contract information for the specified purchase option.
   *
   * Renders the contract text for the specified purchase option, applying any applicable
   *  discounts, and returns the content needed to display the contract acceptance modal to the
   *  client.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_start The start date of the contract.
   * @param {number} params.f_manual_discount The percentage discount for the item.
   * @param {number} params.id_purchase_item The type of purchase item. This is one of the [RsPurchaseItemSid](#/components/schemas/RsPurchase...
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.k_id The key of the purchase item in the database.
   * @param {string} params.k_location The key of the selected location.
   * @param {string} params.k_purchase_item The key of the selected purchase item.
   * @param {string} params.m_discount_flat Amount of a flat manual discount.
   * @param {string} params.m_price_custom The custom price of the item.
   * @param {string} params.s_discount_code The discount code used for the item.
   * @param {string} params.uid The key of the current user.
   * @returns {Promise<Object>} Response data.
   *  `html_contract` {string} The text of the contract.
   *  `i_minor_age` {number} Age of minor which documents can be signed by parent or legal guardian.
   *  `text_title` {string} Title of purchase option.
   */
  WlClient.prototype.wlProfileContractContractGet = function(params)
  {
    return this.request('/Wl/Profile/Contract/Contract.json', params || {}, 'GET');
  };

  /**
   * Completes a sale of a Purchase Option requiring a contract by submitting the signed contract.
   *
   * Accepts an encoded client signature and agreement flag, decodes the signature, and records
   *  the signed contract for the specified purchase item.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.k_purchase_item The key of the selected purchase item.
   * @param {string} params.uid The key of the current user.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlProfileContractContractPost = function(params)
  {
    return this.request('/Wl/Profile/Contract/Contract.json', params || {}, 'POST');
  };

  /**
   * Gets a list of classes which take place in the specified location.
   *
   * Used to build the booking page for a location, displaying all classes that clients can sign up for.
   * Returns the full class details needed for display: schedules, assigned staff, booking links, pricing,
   * and category tabs.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_image_height The image height in pixels. Specify this value if you need the image to be returned in a specific...
   * @param {number} params.i_image_width The image width in pixels. Specify this value if you need the image to be returned in a specific ...
   * @param {string} params.k_location The location key.
   * @returns {Promise<Object>} Response data.
   *  `a_class` {Object[]} The class list. Every element has the following structure:
   */
  WlClient.prototype.wlClassesClassListBookList = function(params)
  {
    return this.request('/Wl/Classes/ClassList/BookList.json', params || {}, 'GET');
  };

  /**
   * Returns list of classes and events in the business.
   *
   * Used by import and integration tools to enumerate all classes and events offered by a business.
   * In franchise mode, classes from all franchisee locations are included. Results are sorted by title
   * and start date.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_class_tab] List of tabs keys.
   * @param {number} [params.id_class_tab] ID of book now tab. One of [TabSid](#/components/schemas/Wl.Classes.Tab.TabSid) constants.
   * @param {boolean} params.is_enrollment_block_all Whether all events should be returned from same enrollment block.
   * @param {boolean} params.is_enrollment_block_empty Whether to include events without sessions.
   * @param {boolean} params.is_event_include Whether to include events in the result.
   * @param {boolean} params.is_franchise Whether to return franchisee-created classes (if business is franchisor).
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `a_class` {Object[]} List of classes and events.
   */
  WlClient.prototype.wlClassesClassListList = function(params)
  {
    return this.request('/Wl/Classes/ClassList/List.json', params || {}, 'GET');
  };

  /**
   * Returns class information including schedules, images, and booking settings for the specified business.
   *
   * Used by import tools to read the full class catalog for a business. Returns a map of all classes
   * (or a single class) with the information needed to replicate class data in an external system:
   * schedules, images, booking constraints, and descriptions.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_image_height The image height in pixels. Specify this value if you need the image to be returned in a specific...
   * @param {number} params.i_image_width The image width in pixels. Specify this value if you need the image to be returned in a specific ...
   * @param {string} params.k_business The business key.
   * @param {string} params.k_class The class key used to get information for a specific class.
   * @param {boolean} params.show_cancelled Defines if canceled schedules should be included in the result.
   * @returns {Promise<Object>} Response data.
   *  `a_class_list` {Object[]} Displays information about the class schedule(s). Each element has the next s...
   */
  WlClient.prototype.wlClassesClassViewElement = function(params)
  {
    return this.request('/Wl/Classes/ClassView/Element.json', params || {}, 'GET');
  };

  /**
   * Returns list of promotions that can be used to pay for the class / event.
   *
   * Used in the booking flow to show clients which of their existing passes or memberships cover the
   * selected class. Also returns the default promotion to pre-select so the client does not have to
   * choose manually when there is an obvious match.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_event Determines whether the class is an event or not.
   * @param {boolean} params.is_login_type_ignore `true` - the login type or group restrictions are ignored and all pricing options will be returne...
   * @param {boolean} params.is_related_only `true` - promotions should only be returned if they're related to the given class or event.
   * @param {string} params.k_business The business key.
   * @param {?string} [params.k_class] The class key.
   * @returns {Promise<Object>} Response data.
   *  `a_promotion` {Object[]} Promotion data with the following structure:.
   *  `k_promotion_default` {?string} The default promotion key.
   */
  WlClient.prototype.wlClassesPromotionClassPromotion = function(params)
  {
    return this.request('/Wl/Classes/Promotion/ClassPromotion.json', params || {}, 'GET');
  };

  /**
   * Returns the partner URL for the specified business.
   *
   * Used to display or share the business's unique Partner Program landing page link. Partner URLs are
   * public information, so no access check is performed.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `url_partner` {string} Link to the landing campaign
   */
  WlClient.prototype.wlBusinessPartnerPartnerCodeGet = function(params)
  {
    return this.request('/Wl/Business/Partner/PartnerCode.json', params || {}, 'GET');
  };

  /**
   * Updates partner url for a business that takes part in the partner program.
   *
   * Allows a Partner Program member to set a memorable custom vanity code for their referral landing page.
   * The code must be unique across all businesses and contain only letters, digits, and underscores.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessPartnerPartnerCodePost = function(params)
  {
    return this.request('/Wl/Business/Partner/PartnerCode.json', params || {}, 'POST');
  };

  /**
   * Returns partner settings for the business identified by the given partner code.
   *
   * Used when rendering the Partner Program landing page. Resolves the partner code to a business and
   * returns the business key and the home tour type so the landing page can show the appropriate demo
   * tour. A daily failed-request limit per IP prevents brute-force enumeration of partner codes.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.text_code The unique code that a business can provide other businesses to tell them about system.
   * @returns {Promise<Object>} Response data.
   *  `id_business_tour` {number} List of different types for landing pages based on business types.
   *  `k_business` {string} The business key.
   *  `text_name_first` {string} The first name of the business representative.
   *  `text_name_last` {string} The last name of the business representative.
   *  `text_position` {string} The job title of the business representative.
   *  `text_review` {string} The text of the review about the WellnessLiving system.
   *  `url_photo` {?string} A link to the photo of the business representative.
   */
  WlClient.prototype.wlBusinessPartnerPartnerSettings = function(params)
  {
    return this.request('/Wl/Business/Partner/PartnerSettings.json', params || {}, 'GET');
  };

  /**
   * Generates list of active business keys for the same region as the requesting user (proper permissions required).
   *
   * Used internally by WellnessLiving operations tools to enumerate all customer businesses in the current region.
   * Returns only active, non-test businesses; set `is_prospects` to also include prospect businesses that have not
   * yet churned. Requires the `rs.business.view` privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_prospects `true` returns WellnessLiving customers.
   * @param {boolean} params.is_published Specifies if only businesses having published locations should be returned.
   * @returns {Promise<Object>} Response data.
   *  `a_business_keys` {string[]} A list of business keys.
   */
  WlClient.prototype.wlBusinessAccountBusinessAccount = function(params)
  {
    return this.request('/Wl/Business/Account/BusinessAccount.json', params || {}, 'GET');
  };

  /**
   * Checks if the email or phone number has already been used for a trial account or not.
   *
   * Called during the self-onboarding flow before creating a new business to detect duplicate registrations
   * early. Checks across all data center regions. Rate-limited per IP to prevent abuse.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.text_mail The email address of the location.
   * @param {string} params.text_phone The phone number of the business, staff and location.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessClaimBusinessClaimGet = function(params)
  {
    return this.request('/Wl/Business/Claim/BusinessClaim.json', params || {}, 'GET');
  };

  /**
   * Completes the verification process of the trial business.
   *
   * Used by WellnessLiving staff to confirm a new trial business after reviewing the signup. Marks the
   * business as verified by the approving user. Returns the location microsite URL so the staff member
   * can share it with the new client.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `url_microsite` {?string} Location microsite URL.
   */
  WlClient.prototype.wlBusinessClaimBusinessClaimPost = function(params)
  {
    return this.request('/Wl/Business/Claim/BusinessClaim.json', params || {}, 'POST');
  };

  /**
   * Saves the Self-Setup wizard form data in the business claim log.
   *
   * Called at the end of the Self-Setup wizard to store the wizard input for internal auditing. Can only
   * be called once per business after it has been claimed.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessClaimBusinessClaimPut = function(params)
  {
    return this.request('/Wl/Business/Claim/BusinessClaim.json', params || {}, 'PUT');
  };

  /**
   * API method to get business design data.
   *
   * Used to render the client-facing schedule and booking widget with the business's custom branding.
   * Returns the color theme, header layout, logo style, capacity display preferences, and analytics
   * tracking IDs (Google Analytics, Google Tag Manager, Facebook Pixel). Pass no business key to get
   * the system default design.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key to get design data.
   * @returns {Promise<Object>} Response data.
   *  `a_data` {Object} Design data for a business.
   */
  WlClient.prototype.wlBusinessDesignBusinessDesign = function(params)
  {
    return this.request('/Wl/Business/Design/BusinessDesign.json', params || {}, 'GET');
  };

  /**
   * Saves a new business lead referral record submitted through the Partner Program.
   *
   * Used when a Partner Program member refers a new prospective client to WellnessLiving. Stores the
   * lead's contact details linked to the referring partner so that sales can follow up and attribute
   * the conversion to the correct partner.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessLeadBusinessLead = function(params)
  {
    return this.request('/Wl/Business/Lead/BusinessLead.json', params || {}, 'POST');
  };

  /**
   * Deletes business phone number from the system.
   *
   * Used by WellnessLiving admins to decommission a business's SMS messaging service. After deletion,
   * the business can no longer receive inbound SMS notifications. Admin privileges are required.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] Business key.
   * @param {?string} [params.text_phone] Business phone number(in locale format).
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessPhonePhoneDelete = function(params)
  {
    return this.request('/Wl/Business/Phone/Phone.json', params || {}, 'DELETE');
  };

  /**
   * Returns phone number(in locale format) of the business, if phone number does not exist returns empty line.
   *
   * Used in the SMS settings UI to display the currently registered business phone number and its input
   * mask. The locale is derived from the business's office country so the number is formatted correctly
   * for that region.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] Business key.
   * @returns {Promise<Object>} Response data.
   *  `id_locale` {?number} A list of locales.
   *  `text_phone` {?string} Business phone number(in locale format).
   *  `text_phone_mask` {string} Business phone number mask.
   */
  WlClient.prototype.wlBusinessPhonePhoneGet = function(params)
  {
    return this.request('/Wl/Business/Phone/Phone.json', params || {}, 'GET');
  };

  /**
   * Registers business phone number in system.
   *
   * Used when a business enables SMS messaging for the first time or replaces an existing number.
   * Provisions a messaging service with the SMS provider so the business can receive inbound client
   * messages. If the same number is already registered for this business, the call is a no-op.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] Business key.
   * @param {?string} [params.text_phone] Business phone number(in locale format).
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessPhonePhonePost = function(params)
  {
    return this.request('/Wl/Business/Phone/Phone.json', params || {}, 'POST');
  };

  /**
   * Searches for businesses by name and email address and returns matching business keys.
   *
   * Used to locate a specific business for a given client, for example during a password reset or
   * membership lookup. Returns only businesses where the email belongs to a registered member, so
   * a match confirms the client actually has an account at that business.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_customer If `true`, the return only active customers, `false` - all business.
   * @param {string} params.text_mail User email to search business keys.
   * @param {string} params.text_name Given business name to search by.
   * @returns {Promise<Object>} Response data.
   *  `a_result` {string[]} Array with business keys that contain given name in their title.
   */
  WlClient.prototype.wlBusinessSearchBusinessSearchUser = function(params)
  {
    return this.request('/Wl/Business/Search/BusinessSearchUser.json', params || {}, 'GET');
  };

  /**
   * Searches for businesses by name and returns matching business keys.
   *
   * Used in internal tools and admin pages to find a business by name or key when only partial information
   * is known. Protected by a captcha to prevent automated enumeration. In strict mode, the title must
   * match exactly; otherwise partial word matches are returned sorted by relevance.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_customer If `true`, the return only active customers, `false` - all business.
   * @param {boolean} params.is_strict If `true`, returns only active customer businesses, if `false`, returns all businesses.
   * @param {string} params.text_name Given business name to search by.
   * @returns {Promise<Object>} Response data.
   *  `a_result` {string[]} Array with business keys that contain given name in their title.
   */
  WlClient.prototype.wlBusinessSearchBusinessSearch = function(params)
  {
    return this.request('/Wl/Business/Search/BusinessSearch.json', params || {}, 'GET');
  };

  /**
   * Gets information about a business config.
   *
   * Used by the booking widget and checkout flow to know the rules governing client interactions: which
   * family member relations are allowed, whether clients or staff must select a location at checkout,
   * what cancellation penalties apply, and whether white-label mode is active.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_business_policy` {Object} All business policies connected to clients and bookings.
   *  `a_penalty` {Object} A list of business penalties.
   *  `is_location_client_select` {boolean} Whether client must select a location at checkout.
   *  `is_location_select` {boolean} Determines whether staff members should select a location at checkout.
   *  `is_white_label` {boolean} Determines whether the business has white label setting enabled in the admin ...
   */
  WlClient.prototype.wlBusinessConfigBusinessConfig = function(params)
  {
    return this.request('/Wl/Business/Config/BusinessConfig.json', params || {}, 'GET');
  };

  /**
   * Returns the Amazon region ID for each of the requested business keys.
   *
   * Used to determine which data center stores the data for a given set of businesses. Knowing the region
   * is required before routing API calls across data centers. Returns `0` for businesses whose region
   * is not set. All requested business keys must exist.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_business List of business key.
   * @returns {Promise<Object>} Response data.
   *  `a_business_region` {number[]} List of region IDs for `a_business`.
   */
  WlClient.prototype.wlBusinessAmazonRegionAmazonRegion = function(params)
  {
    return this.request('/Wl/Business/AmazonRegion/AmazonRegion.json', params || {}, 'GET');
  };

  /**
   * Grants or denies access to business location for a partner.
   *
   * Allows a franchisor staff member to temporarily let another user into a franchisee location. Requires
   * the "Manage Franchise Location" privilege. Granted access expires after 24 hours; revoking schedules
   * removal within 15 minutes.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_grant Determines whether the user will be granted access or if access will be revoked.
   * @param {string} params.k_location The key of the franchisee location to enter.
   * @param {string} params.uid The key of the user who will be granted access.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessAuthorizePartnerAuthorizePartner = function(params)
  {
    return this.request('/Wl/Business/AuthorizePartner/AuthorizePartner.json', params || {}, 'GET');
  };

  /**
   * Performs checks and generates a list of businesses according to a given configuration.
   *
   * Populates the business-select dropdown widget shown in the backend. Used wherever staff need to
   * switch between businesses they have access to. The returned structure drives the widget directly
   * and includes selection state, visibility flags, and display configuration.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_config Configuration data used to determine the list of businesses returned. This array has the followin...
   * @param {string} params.k_business Business in which a list of business is requested.
   * @param {string} params.uid User who is requesting the list of businesses.
   * @returns {Promise<Object>} Response data.
   *  `a_select` {Object} Business list with additional parameters for a business select HTML component.
   */
  WlClient.prototype.wlBusinessSelectBusinessSelect = function(params)
  {
    return this.request('/Wl/Business/Select/BusinessSelect.json', params || {}, 'GET');
  };

  /**
   * Returns the list of available business types with their categories and images.
   *
   * Used during the new business signup flow so the prospective client can select the type of business
   * they are opening (e.g., yoga studio, gym, spa). The list drives both the type picker UI and the
   * selection of the appropriate demo tour to show on the marketing site.
   *
   * @param {Object} [params] Request parameters.
   * @returns {Promise<Object>} Response data.
   *  `a_business_type` {Object[]} A list of business types. Each element has the next structure:
   */
  WlClient.prototype.wlBusinessTypeBusinessTypeList = function(params)
  {
    return this.request('/Wl/Business/Type/BusinessTypeList.json', params || {}, 'GET');
  };

  /**
   * Returns the business waiver text rendered as HTML with user-specific variables substituted.
   *
   * Used to display the waiver agreement to a client before they complete a purchase or check in.
   * Renders the waiver template with the client's name filled in. If the business has no waiver
   * configured, `has_waiver` is `false` and the waiver modal should not be shown.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business ID of business to get waiver for.
   * @param {string} params.text_fullname Full username.
   * @param {string} params.uid User key for which the waiver is shown.
   * @returns {Promise<Object>} Response data.
   *  `has_waiver` {boolean} Does the business have a waiver or not?
   *  `html_waiver` {string} Text of the current waiver with the substituted variables.
   */
  WlClient.prototype.wlBusinessWaiverWaiver = function(params)
  {
    return this.request('/Wl/Business/Waiver/Waiver.json', params || {}, 'GET');
  };

  /**
   * Gets list of Lead Sources.
   *
   * Returns all lead sources configured for the specified business, including system-defined and custom sources,
   * with sort order, title, associated skin, and flags indicating whether each source is currently in use.
   * This is public endpoint, which is available for non-signed-in users. But if the user is not signed in,
   * the list will be filtered to contain only those sources that are available for the user and with limited information.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `a_lead_source` {Object[]} List of Lead Sources.
   */
  WlClient.prototype.wlLeadSourceLeadSourceList = function(params)
  {
    return this.request('/Wl/Lead/Source/LeadSourceList.json', params || {}, 'GET');
  };

  /**
   * Deletes custom source lead.
   *
   * Removes the specified custom lead source from the business. If a replacement lead source key is provided,
   * all users currently assigned to the deleted source are reassigned to it before deletion.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_lead_source_replace Key of the lead source.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLeadSourceLeadSourceElementDelete = function(params)
  {
    return this.request('/Wl/Lead/Source/LeadSourceElement.json', params || {}, 'DELETE');
  };

  /**
   * Creates or edits a custom source lead.
   *
   * Accepts a list of lead source records and applies bulk create or update operations: new entries without a
   * key are inserted, and existing entries are updated with a new sort order or title.
   * @deprecated Use {@link \Wl\Lead\LeadPageApi::post()} instead. Will be removed after WL-89292 done.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLeadSourceLeadSourceElementPost = function(params)
  {
    return this.request('/Wl/Lead/Source/LeadSourceElement.json', params || {}, 'POST');
  };

  /**
   * Adds one lead source.
   *
   * Creates a single new custom lead source with the given title for the specified business, assigns it the
   * next available sort position, and returns the generated lead source key.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `k_lead_source` {string} Key of the lead source.
   */
  WlClient.prototype.wlLeadSourceLeadSourceElementPut = function(params)
  {
    return this.request('/Wl/Lead/Source/LeadSourceElement.json', params || {}, 'PUT');
  };

  /**
   * Gets a list of packages/passes/memberships.
   *
   * Returns introductory promotion offers available at the specified location, optionally filtered by program type,
   * including pricing, duration, visit limits, and access information for each item.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_image_height Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.i_image_width Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.id_program_type The program type ID, which will be one of the [RsProgramTypeSid](#/components/schemas/RsProgramTy...
   * @param {string} params.k_location The location key.
   * @returns {Promise<Object>} Response data.
   *  `a_promotion` {Object[]} A list of introductory promotion offers available at the location.
   */
  WlClient.prototype.wlPromotionIndexPromotionIndex = function(params)
  {
    return this.request('/Wl/Promotion/Index/PromotionIndex.json', params || {}, 'GET');
  };

  /**
   * Checks if specified user exists in specified business.
   *
   * Accepts a business key and an email address, validates both, and returns `true` if a user with that email is an
   * active member of the business. Requests are rate-limited per IP unless the caller has the required privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business for which the email address search is being performed.
   * @param {string} params.text_mail The email address to check for.
   * @returns {Promise<Object>} Response data.
   *  `is_exists` {boolean} If `true`, the user with the specified email address exists in specified busi...
   *  `uid_use` {?string} Key of the user who using email within the business.
   */
  WlClient.prototype.wlLoginMailMailUse = function(params)
  {
    return this.request('/Wl/Login/Mail/MailUse.json', params || {}, 'GET');
  };

  /**
   * Deletes specified promotion payment pause.
   *
   * Validates access and then permanently removes the hold period identified by `k_promotion_pay_pause`,
   * also cancelling any associated expiry reminder notification task.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] Key of business to which currently handled pause period or login promotion belongs.
   * @param {?string} [params.k_login_promotion] The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur...
   * @param {?string} [params.k_promotion_pay_pause] The promotion payment hold key. If this key is used, it will edit an existing hold.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPromotionPromotionPayPauseDelete = function(params)
  {
    return this.request('/Wl/Login/Promotion/PromotionPayPause.json', params || {}, 'DELETE');
  };

  /**
   * Returns promotion payment pause data: all hold periods when `is_list` is `true`,
   the specified hold period when `k_promotion_pay_pause` is provided, or the currently
   active hold period otherwise.
   *
   * Also returns notification settings (email, push, SMS flags and email pattern key) and the date the last
   * notification was sent for the hold period, if a hold notification template is configured for the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dt_end] The end date of the current hold, in the local time zone.
   * @param {?string} [params.dt_start] The start date of the current hold, in the local time zone.
   * @param {boolean} params.is_list Whether need to get all pause periods for the login promotion.
   * @param {?string} [params.k_business] Key of business to which currently handled pause period or login promotion belongs.
   * @param {?string} [params.k_login_promotion] The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur...
   * @param {?string} [params.k_promotion_pay_pause] The promotion payment hold key. If this key is used, it will edit an existing hold.
   * @returns {Promise<Object>} Response data.
   *  `a_pay_pause_list` {?Object[]} List of all promotion payment pause periods. Each element has next structure:
   *  `dt_end` {?string} The end date of the current hold, in the local time zone.
   *  `dt_start` {?string} The start date of the current hold, in the local time zone.
   *  `dtu_date_notification` {?string} The date when the email notification was sent.
   *  `is_mail` {boolean} Whether or not to send email notification.
   *  `is_push` {boolean} Whether or not to send push notification.
   *  `is_sms` {boolean} Whether or not to send SMS notification.
   *  `k_login_promotion` {?string} The Purchase Option key. If this key is used, a new hold will be created. The...
   *  `k_mail_pattern` {?string} Key of the email pattern.
   *  `k_promotion_pay_pause` {?string} The promotion payment hold key. If this key is used, it will edit an existing...
   *  `text_note` {?string} Additional notes for the promotion payment pause period.
   */
  WlClient.prototype.wlLoginPromotionPromotionPayPauseGet = function(params)
  {
    return this.request('/Wl/Login/Promotion/PromotionPayPause.json', params || {}, 'GET');
  };

  /**
   * Adds or updates a payment pause period for promotion.
   *
   * Creates a new hold period for the purchased promotion if no `k_promotion_pay_pause` is provided, or updates
   * an existing one. Optionally schedules or sends a hold notification via email, push, or SMS based on the
   * provided flags and the business notification template.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dt_end] The end date of the current hold, in the local time zone.
   * @param {?string} [params.dt_start] The start date of the current hold, in the local time zone.
   * @param {?string} [params.k_business] Key of business to which currently handled pause period or login promotion belongs.
   * @param {?string} [params.k_login_promotion] The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur...
   * @param {?string} [params.k_promotion_pay_pause] The promotion payment hold key. If this key is used, it will edit an existing hold.
   * @returns {Promise<Object>} Response data.
   *  `k_promotion_pay_pause` {?string} The promotion payment hold key. If this key is used, it will edit an existing...
   */
  WlClient.prototype.wlLoginPromotionPromotionPayPausePost = function(params)
  {
    return this.request('/Wl/Login/Promotion/PromotionPayPause.json', params || {}, 'POST');
  };

  /**
   * Updates a promotion payment pause period.
   *
   * Requires an existing `k_promotion_pay_pause` key and delegates to `post()` to apply
   * the updated start date, end date, note, and notification settings. Returns an error if no existing hold key is
   * provided.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dt_end] The end date of the current hold, in the local time zone.
   * @param {?string} [params.dt_start] The start date of the current hold, in the local time zone.
   * @param {?string} [params.k_business] Key of business to which currently handled pause period or login promotion belongs.
   * @param {?string} [params.k_promotion_pay_pause] The promotion payment hold key. If this key is used, it will edit an existing hold.
   * @returns {Promise<Object>} Response data.
   *  `k_promotion_pay_pause` {?string} The promotion payment hold key. If this key is used, it will edit an existing...
   */
  WlClient.prototype.wlLoginPromotionPromotionPayPausePut = function(params)
  {
    return this.request('/Wl/Login/Promotion/PromotionPayPause.json', params || {}, 'PUT');
  };

  /**
   * Checks whether anything prevents the user from using the business and returns any blocking conditions found.
   *
   * Returns flags indicating whether the user has an outstanding waiver, an unconfirmed contract, pending
   * registration quizzes, a required credit card on file, and lists of missing required profile fields for
   * booking and registration.
   * @deprecated Use instead {@link \Wl\Login\Member\MemberValidate63Api}.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   *  `a_empty_fields_booking` {string[]} List of fields if the user has empty profile fields, which are required for b...
   *  `a_empty_fields_registration` {string[]} List of fields if the user has empty profile fields, which are required for r...
   *  `has_credit_card` {boolean} `true` If the user has credit cards on profile, otherwise `false`.
   *  `has_outstanding_contract` {boolean} `true` if the user has an outstanding contract, otherwise `false`.
   *  `has_outstanding_waiver` {boolean} `true` If the user has an outstanding waiver for the business, otherwise `fal...
   *  `has_pending_quizzes` {boolean} `true` If the user has pending registration quizzes to complete, otherwise `f...
   *  `is_booking_require_card` {boolean} `true` If the user has to provide credit card details before booking, otherwi...
   *  `is_register_require_card` {boolean} `true` If the user has to provide credit card details to finish their registr...
   *  `k_location` {?string} Home user`s location.
   */
  WlClient.prototype.wlLoginMemberMemberValidate = function(params)
  {
    return this.request('/Wl/Login/Member/MemberValidate.json', params || {}, 'GET');
  };

  /**
   * Returns the list of businesses where the specified user is an active member.
   *
   * Accepts a user key and returns all active businesses where that user has a membership, including franchise
   * relationship flags, business title, and whether the user is allowed to sign in to each business. Forwards the
   * request to other data centers in multi-region deployments and merges the results.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   *  `a_business` {Object[]} A list of businesses where the client is present. Every element is an array w...
   */
  WlClient.prototype.wlLoginMemberMemberGet = function(params)
  {
    return this.request('/Wl/Login/Member/Member.json', params || {}, 'GET');
  };

  /**
   * Adds a user into a business.
   *
   * Validates that the current user has profile access, then registers the specified user as a member of the given
   * business without sending a registration email.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginMemberMemberPost = function(params)
  {
    return this.request('/Wl/Login/Member/Member.json', params || {}, 'POST');
  };

  /**
   * Gets client ID for a specific client in a business.
   *
   * Validates the business key and user key, checks profile access, and returns the member ID string assigned to
   * the client in the specified business. Returns an empty string if the user has no member ID set.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   *  `s_member` {string} The user's ID to get/set.
   */
  WlClient.prototype.wlLoginMemberLoginMemberGet = function(params)
  {
    return this.request('/Wl/Login/Member/LoginMember.json', params || {}, 'GET');
  };

  /**
   * Updates client ID for a specific client in a business.
   *
   * Validates and saves the new member ID for the given client in the specified business, reindexes the user for
   * search, and returns the date the user originally became a member.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.s_member The user's ID to get/set.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   *  `dt_member` {string} The date when client became a member.
   */
  WlClient.prototype.wlLoginMemberLoginMemberPost = function(params)
  {
    return this.request('/Wl/Login/Member/LoginMember.json', params || {}, 'POST');
  };

  /**
   * Checks whether anything prevents the user from using the business and returns details about missing required fields.
   *
   * Extends the base validation by additionally returning separate lists of missing profile fields grouped by their
   * required context: booking and purchase, self-registration, or general requirement.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   *  `a_empty_fields_booking` {Object[]} List of fields if the user has empty profile fields, which are required for b...
   *  `a_empty_fields_registration` {Object[]} List of fields if the user has empty profile fields, which are required for r...
   *  `a_empty_fields_required` {Object[]} List of profile fields that are required but empty for this user.
   *  `has_credit_card` {boolean} `true` If the user has credit cards on profile, otherwise `false`.
   *  `has_outstanding_contract` {boolean} `true` if the user has an outstanding contract, otherwise `false`.
   *  `has_outstanding_waiver` {boolean} `true` If the user has an outstanding waiver for the business, otherwise `fal...
   *  `has_pending_quizzes` {boolean} `true` If the user has pending registration quizzes to complete, otherwise `f...
   *  `is_booking_require_card` {boolean} `true` If the user has to provide credit card details before booking, otherwi...
   *  `is_register_require_card` {boolean} `true` If the user has to provide credit card details to finish their registr...
   *  `k_location` {?string} Home user`s location.
   */
  WlClient.prototype.wlLoginMemberMemberValidate63 = function(params)
  {
    return this.request('/Wl/Login/Member/MemberValidate63.json', params || {}, 'GET');
  };

  /**
   * Returns a paginated list of active member user keys for the specified business.
   *
   * Accepts a business key, an optional page size, and an optional last-seen user key for cursor-based pagination,
   * then returns an ordered array of user keys for all active members of that business.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_page_size The maximum number of members to return in the list.
   * @param {string} params.k_business The key of the business to get a list of members for.
   * @param {string} params.uid_last The last member UID from the previous page.
   * @returns {Promise<Object>} Response data.
   *  `a_uid` {string[]} List of UIDs for all active clients that belong to the business.
   */
  WlClient.prototype.wlLoginMemberLoginMemberListAll = function(params)
  {
    return this.request('/Wl/Login/Member/LoginMemberListAll.json', params || {}, 'GET');
  };

  /**
   * Checks required profile fields and, if complete, registers the existing user in the specified business.
   *
   * Validates the user's profile for any missing required fields and, if all fields are complete, adds the user as
   * a member of the business. Returns a status code and a list of any fields that still need to be filled in.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `a_error_list` {Object} The list of fields with missing information.
   *  `s_code` {string} The result code of the request.
   *  `text_message` {string} The result message of the request.
   */
  WlClient.prototype.wlLoginAddMailUseOk = function(params)
  {
    return this.request('/Wl/Login/Add/MailUseOk.json', params || {}, 'POST');
  };

  /**
   * Returns the attendance list for a class period or appointment session.
   *
   * Accepts either a class period key with a local date or an appointment key, validates access and date, and returns
   * the active list, wait list, and confirmed list of attending clients, along with session capacity, wait list limit,
   * and per-client details such as purchase option, visit status, wearables, and quiz responses.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_local The local date of the class or event session.
   * @param {boolean} params.is_purchase_info_return If `true`, then return the purchase used to pay for session.
   * @param {string} params.k_appointment The appointment key. Not used if requesting information for a class or event session.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_class_period The class period key. Not used if requesting information for an appointment.
   * @returns {Promise<Object>} Response data.
   *  `a_list_active` {Object[]} The list of clients in the active attendance list who haven't confirmed or ca...
   *  `a_list_confirm` {Object[]} The list of clients who have confirmed their attendance.
   *  `a_list_wait` {Object[]} The list of clients who are on the wait list.
   *  `i_capacity` {number} The maximum capacity of the class or event session.
   *  `i_client` {number} Count client on the attendance.
   *  `i_wait_list_limit` {number} The maximum number of clients on wait list of the class or event session.
   *  `is_wait_list_limit` {boolean} `true` to use class/event specific wait list limit, `false` to use the limit ...
   *  `k_location` {string} The Location key.
   */
  WlClient.prototype.wlLoginAttendanceAttendanceList = function(params)
  {
    return this.request('/Wl/Login/Attendance/AttendanceList.json', params || {}, 'GET');
  };

  /**
   * Returns detailed information about a single class period, appointment, or asset session.
   *
   * Accepts either a class period key with a local date or an appointment key, validates access, and returns
   * scheduling details including title, start and end times, location, staff, assets, service type, and
   * default purchase option information.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_local Start date of the class in MySQL format in local time.
   * @param {string} params.k_appointment ID of appointment to get information for.
   * @param {string} params.k_business ID of business to get information for.
   * @param {string} params.k_class_period ID of class period to get information for.
   * @returns {Promise<Object>} Response data.
   *  `a_appointment_visit_info` {Object} Additional visit information about this appointment. Empty array if it's not ...
   *  `a_logo` {Object} Service logo information:
   *  `a_purchase_option_default` {Object} Default purchase option information.
   *  `a_resource` {string[]} Assets which are bound to this session.
   *  `a_resource_layout` {Object[]} Asset layouts of session:
   *  `a_staff` {Object[]} List of staff members who provide service:
   *  `dt_confirm` {string} Confirmation date+time of appointment in MySQL format. If client never confir...
   *  `dt_date_global` {string} Start date of the session in MySQL format in GMT.
   *  `dtl_end` {string} End date and time of the session in MySQL format in local timezone.
   *  `dtu_end` {string} End date and time of the session in MySQL format in GMT.
   *  `dtu_wait_promote` {string} Date and time in UTC when the visit is promoted from wait list to active list.
   *  `has_note` {boolean} Whether notes added to visit.
   *  `i_duration` {number} Duration of the session in minutes.
   *  `id_note` {?number} A list of types of visit note.
   *  `id_service` {number} Identifiers for services types.
   *  `is_start_virtual_service` {boolean} Whether this service be carried out in Zoom.
   *  `k_class` {string} Class identifier. Not empty if service is class or event reservation.
   *  `k_location` {string} Location identifier.
   *  `k_resource` {string} Resource identifier. Not empty if service is asset reservation.
   *  `k_service` {string} Service identifier. Not empty if service is appointment reservation.
   *  `...` {*}
   */
  WlClient.prototype.wlLoginAttendanceAttendanceInfo = function(params)
  {
    return this.request('/Wl/Login/Attendance/AttendanceInfo.json', params || {}, 'GET');
  };

  /**
   * Returns the attendance list for a class period or appointment session.
   *
   * Accepts either a class period key with a local date or an appointment key, validates access and date, and returns
   * the active list, wait list, and confirmed list of attending clients, along with session capacity, wait list limit,
   * and per-client details such as purchase option, visit status, wearables, and quiz responses.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_local The local date of the class or event session.
   * @param {boolean} params.is_purchase_info_return If `true`, then return the purchase used to pay for session.
   * @param {string} params.k_appointment The appointment key. Not used if requesting information for a class or event session.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_class_period The class period key. Not used if requesting information for an appointment.
   * @param {string} params.text_token The security token.
   * @returns {Promise<Object>} Response data.
   *  `a_list_active` {Object[]} The list of clients in the active attendance list who haven't confirmed or ca...
   *  `a_list_confirm` {Object[]} The list of clients who have confirmed their attendance.
   *  `a_list_wait` {Object[]} The list of clients who are on the wait list.
   *  `i_capacity` {number} The maximum capacity of the class or event session.
   *  `i_client` {number} Count client on the attendance.
   *  `i_wait_list_limit` {number} The maximum number of clients on wait list of the class or event session.
   *  `is_wait_list_limit` {boolean} `true` to use class/event specific wait list limit, `false` to use the limit ...
   *  `k_location` {string} The Location key.
   */
  WlClient.prototype.wlLoginAttendanceAttendanceListByToken = function(params)
  {
    return this.request('/Wl/Login/Attendance/AttendanceListByToken.json', params || {}, 'GET');
  };

  /**
   * Returns detailed information about a single class period, appointment, or asset session.
   *
   * Accepts either a class period key with a local date or an appointment key, validates access, and returns
   * scheduling details including title, start and end times, location, staff, assets, service type, and
   * default purchase option information.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_local Start date of the class in MySQL format in local time.
   * @param {string} params.k_appointment ID of appointment to get information for.
   * @param {string} params.k_business ID of business to get information for.
   * @param {string} params.k_class_period ID of class period to get information for.
   * @param {string} params.text_token The security token.
   * @returns {Promise<Object>} Response data.
   *  `a_appointment_visit_info` {Object} Additional visit information about this appointment. Empty array if it's not ...
   *  `a_logo` {Object} Service logo information:
   *  `a_purchase_option_default` {Object} Default purchase option information.
   *  `a_resource` {string[]} Assets which are bound to this session.
   *  `a_resource_layout` {Object[]} Asset layouts of session:
   *  `a_staff` {Object[]} List of staff members who provide service:
   *  `dt_confirm` {string} Confirmation date+time of appointment in MySQL format. If client never confir...
   *  `dt_date_global` {string} Start date of the session in MySQL format in GMT.
   *  `dtl_end` {string} End date and time of the session in MySQL format in local timezone.
   *  `dtu_end` {string} End date and time of the session in MySQL format in GMT.
   *  `dtu_wait_promote` {string} Date and time in UTC when the visit is promoted from wait list to active list.
   *  `has_note` {boolean} Whether notes added to visit.
   *  `i_duration` {number} Duration of the session in minutes.
   *  `id_note` {?number} A list of types of visit note.
   *  `id_service` {number} Identifiers for services types.
   *  `is_start_virtual_service` {boolean} Whether this service be carried out in Zoom.
   *  `k_class` {string} Class identifier. Not empty if service is class or event reservation.
   *  `k_location` {string} Location identifier.
   *  `k_resource` {string} Resource identifier. Not empty if service is asset reservation.
   *  `k_service` {string} Service identifier. Not empty if service is appointment reservation.
   *  `...` {*}
   */
  WlClient.prototype.wlLoginAttendanceAttendanceInfoByToken = function(params)
  {
    return this.request('/Wl/Login/Attendance/AttendanceInfoByToken.json', params || {}, 'GET');
  };

  /**
   * Finds a user by their email or phone within the specified business.
   *
   * Accepts exactly one of `text_mail` or `text_phone`, validates the value, and returns the user key if a matching
   * active member of the business is found. Returns an error if the user is not found or if multiple users share
   * the given phone number.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business to search user in.
   * @param {string} params.text_mail Email to search.
   * @param {string} params.text_phone Phone to search.
   * @returns {Promise<Object>} Response data.
   *  `uid` {string} User's primary key.
   */
  WlClient.prototype.wlLoginSearchConcerto = function(params)
  {
    return this.request('/Wl/Login/Search/Concerto.json', params || {}, 'GET');
  };

  /**
   * Gets a login types list of a business.
   *
   * Returns all client types configured for the specified business, each with its key, title, client type ID, and
   * a deprecated membership flag. If `is_franchisor` is `true`, returns the combined login types of all franchisees
   * under the franchisor business.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_franchisor If `true`, this `k_business` is a franchisor, and login types of all franchisees should be returned.
   * @param {string} params.k_business The business key used internally by WellnessLiving.
   * @returns {Promise<Object>} Response data.
   *  `a_login_type_list` {Object[]} A list of login types, keys, and information. Each element is an array with t...
   */
  WlClient.prototype.wlLoginTypeLoginType = function(params)
  {
    return this.request('/Wl/Login/Type/LoginType.json', params || {}, 'GET');
  };

  /**
   * Saves the auto-renew setting for a purchased promotion.
   *
   * Validates the purchased promotion, checks profile access, and sets the auto-renew flag to the value of
   * `is_renew`. Returns an error if the promotion does not support auto-renewal or if the client is a debtor.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_login_promotion The key of the purchased promotion.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPermissionPermission = function(params)
  {
    return this.request('/Wl/Login/Permission/Permission.json', params || {}, 'POST');
  };

  /**
   * Returns text of business liability release if business has liability release and if user did not agree to this liability release.
   *
   * Accepts the business key and the user key, validates both, and returns the rendered HTML of the liability release
   * contract if one is configured and the user has not yet agreed to it. If the user has already agreed, the response
   * will have an empty `html_contract` field.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of business.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   *  `html_contract` {string} Formatted text of business liability release. Not empty if the business has a...
   */
  WlClient.prototype.wlLoginAgreeAgreeGet = function(params)
  {
    return this.request('/Wl/Login/Agree/Agree.json', params || {}, 'GET');
  };

  /**
   * Saves the user's agreement to the online waiver.
   *
   * Accepts the user's base64-encoded signature image and an optional electronic-signature consent flag, validates
   * both, records the agreement date and signature in the database, and sends a waiver confirmation notification.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of business.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginAgreeAgreePost = function(params)
  {
    return this.request('/Wl/Login/Agree/Agree.json', params || {}, 'POST');
  };

  /**
   * Retrieves the key and balance of a gift card by its code for the specified business.
   *
   * Validates the gift card code against the specified business, enforces a per-IP rate limit, and checks that the
   * card is active, not already redeemed, not expired, and in the correct currency before returning its key and
   * remaining balance.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.s_code The gift card.
   * @returns {Promise<Object>} Response data.
   *  `k_login_coupon` {string} The gift card reference number for this specific user. WellnessLiving uses th...
   *  `m_amount` {string} The gift card amount.
   */
  WlClient.prototype.wlLoginCouponCoupon = function(params)
  {
    return this.request('/Wl/Login/Coupon/Coupon.json', params || {}, 'GET');
  };

  /**
   * Returns information about products purchased by client.
   *
   * Accepts filters for business, user, location, payment method, product option, price range, and date range,
   * then returns a paginated list of product purchases with quantity, unit price, total amount, product name, and
   * purchase location.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dtu_end Maximal date and time of purchase in UTC. Empty string means no filter by maximal date.
   * @param {string} params.dtu_start Minimal date and time of purchase in UTC. Empty string means no filter by minimal date.
   * @param {number} params.i_page Number of the page to get.
   * @param {number} params.i_page_size Page size.
   * @param {number} params.id_pay_method ID of the payment method. One of the [RsPayMethodSid](#/components/schemas/RsPayMethodSid) consta...
   * @param {string} params.k_business Business key.
   * @param {string} params.k_location Location key. Empty string means no filter by location.
   * @param {string} params.k_shop_product_option Product option key. Empty string means no filter by product option.
   * @param {string} params.m_price_max Maximum price of the product. 0 means no filter by maximum price.
   * @param {string} params.m_price_min Minimum price of the product.
   * @param {string} params.uid User key. Empty string means return products purchased by walk-in.
   * @returns {Promise<Object>} Response data.
   *  `a_login_product` {Object} List of purchased products:
   */
  WlClient.prototype.wlLoginProductProduct = function(params)
  {
    return this.request('/Wl/Login/Product/Product.json', params || {}, 'GET');
  };

  /**
   * Deletes the specified quiz response or list of responses for the given business.
   *
   * Validates access privileges and removes the specified response records, updating any related search indexes
   * and activity logs.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_quiz_response_key Quiz response key list.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {?string} [params.k_quiz_response] Quiz response key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlQuizResponseResponse65Delete = function(params)
  {
    return this.request('/Wl/Quiz/Response/Response65.json', params || {}, 'DELETE');
  };

  /**
   * Returns quiz response data including element answers, dates, and access information.
   *
   * Loads the response for the specified quiz and user, resolving answers, formatted dates, and access flags such as
   * amendment availability and PDF generation support.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.can_anonymous Checks whether unauthorized user should be permitted to operate with form and make a response.
   * @param {boolean} params.is_answer `true` for load answers for response, `false` otherwise.
   * @param {boolean} params.is_backend
   * @param {boolean} params.is_simple Whether quiz response received by kiosk or direct mode link.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {?string} [params.k_quiz_response] Quiz response key.
   * @returns {Promise<Object>} Response data.
   *  `a_access_log` {Object[]} Access log data.
   *  `a_element` {Object|Object|Object|Object[]} List of quiz questions with responses.
   *  `a_service_info` {Object} Information about service if response connected to visit.
   *  `can_amend` {boolean} Whether response can be amended by current user.
   *  `dtu_response` {string} Date when response was submitted.
   *  `id_source` {number} List of sources where quiz response can be generated.
   *  `id_status` {number} List of response statuses.
   *  `show_numbering` {boolean} Whether to show numbering of the form elements that supports numbering.
   *  `text_add_date` {string} Date when response added.
   *  `text_amend_date` {string} Date when response amended.
   *  `text_amend_user` {string} Name of the user who amend the response.
   *  `text_complete_date` {string} Date when response completed.
   *  `text_complete_user` {string} Name of the user who complete the response.
   *  `text_response_by` {string} Name of the user who owned the response.
   *  `text_title` {?string} Title of the filled form.
   */
  WlClient.prototype.wlQuizResponseResponse65Get = function(params)
  {
    return this.request('/Wl/Quiz/Response/Response65.json', params || {}, 'GET');
  };

  /**
   * Saves a quiz response with the given element answers.
   *
   * Validates the submitted answers and persists the response record in a transaction. If
   * [QuizResponseApi](/Core/Quiz/QuizResponse.json) is set, only validation runs and no record is created.
   * Pass [QuizResponseApi](/Core/Quiz/QuizResponse.json) to bypass validation for pre-confirmed responses.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.can_anonymous Checks whether unauthorized user should be permitted to operate with form and make a response.
   * @param {boolean} params.is_backend
   * @param {boolean} params.is_simple Whether quiz response received by kiosk or direct mode link.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {?string} [params.k_quiz_response] Quiz response key.
   * @returns {Promise<Object>} Response data.
   *  `k_quiz_response` {?string} Quiz response key.
   */
  WlClient.prototype.wlQuizResponseResponse65Post = function(params)
  {
    return this.request('/Wl/Quiz/Response/Response65.json', params || {}, 'POST');
  };

  /**
   * Validates, updates and reindex response information for associated user.
   *
   * Used to amend an already-submitted response, for example when a business allows clients to
   * edit their quiz answers after submission. Re-links the response to its owner and triggers
   * downstream reindexing so search and reporting stay consistent.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_quiz_response_key Quiz response key list.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {?string} [params.k_quiz_response] Quiz response key.
   * @param {?string} [params.uid_link] User's key for the response association.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlQuizResponseResponse65Put = function(params)
  {
    return this.request('/Wl/Quiz/Response/Response65.json', params || {}, 'PUT');
  };

  /**
   * Deletes the specified quiz response or list of responses for the given business.
   *
   * Validates access privileges and removes the specified response records, updating any related search indexes
   * and activity logs.
   * @deprecated Use {@link \Wl\Quiz\Response\Response65Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_quiz_response_key Quiz response key list.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {?string} [params.k_quiz_response] Quiz response key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlQuizResponseResponseDelete = function(params)
  {
    return this.request('/Wl/Quiz/Response/Response.json', params || {}, 'DELETE');
  };

  /**
   * Returns quiz response data including element answers, dates, and access information.
   *
   * Loads the response for the specified quiz and user, resolving answers, formatted dates, and access flags such as
   * amendment availability and PDF generation support.
   * @deprecated Use {@link \Wl\Quiz\Response\Response65Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.can_anonymous Checks whether unauthorized user should be permitted to operate with form and make a response.
   * @param {boolean} params.is_answer `true` for load answers for response, `false` otherwise.
   * @param {boolean} params.is_simple Whether quiz response received by kiosk or direct mode link.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {?string} [params.k_quiz_response] Quiz response key.
   * @returns {Promise<Object>} Response data.
   *  `a_access_log` {Object[]} Access log data.
   *  `a_element` {Object|Object|Object|Object[]} List of quiz questions with responses.
   *  `a_service_info` {Object} Information about service if response connected to visit.
   *  `can_amend` {boolean} Whether response can be amended by current user.
   *  `dtu_response` {string} Date when response was submitted.
   *  `id_source` {number} List of sources where quiz response can be generated.
   *  `id_status` {number} List of response statuses.
   *  `show_numbering` {boolean} Whether to show numbering of the form elements that supports numbering.
   *  `text_add_date` {string} Date when response added.
   *  `text_amend_date` {string} Date when response amended.
   *  `text_amend_user` {string} Name of the user who amend the response.
   *  `text_complete_date` {string} Date when response completed.
   *  `text_complete_user` {string} Name of the user who complete the response.
   *  `text_response_by` {string} Name of the user who owned the response.
   *  `text_title` {?string} Title of the filled form.
   */
  WlClient.prototype.wlQuizResponseResponseGet = function(params)
  {
    return this.request('/Wl/Quiz/Response/Response.json', params || {}, 'GET');
  };

  /**
   * Saves a quiz response with the given element answers.
   *
   * Validates the submitted answers and persists the response record in a transaction. If
   * [QuizResponseApi](/Core/Quiz/QuizResponse.json) is set, only validation runs and no record is created.
   * Pass [QuizResponseApi](/Core/Quiz/QuizResponse.json) to bypass validation for pre-confirmed responses.
   * @deprecated Use {@link \Wl\Quiz\Response\Response65Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.can_anonymous Checks whether unauthorized user should be permitted to operate with form and make a response.
   * @param {boolean} params.is_simple Whether quiz response received by kiosk or direct mode link.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {?string} [params.k_quiz_response] Quiz response key.
   * @returns {Promise<Object>} Response data.
   *  `k_quiz_response` {?string} Quiz response key.
   */
  WlClient.prototype.wlQuizResponseResponsePost = function(params)
  {
    return this.request('/Wl/Quiz/Response/Response.json', params || {}, 'POST');
  };

  /**
   * Validates, updates and reindex response information for associated user.
   *
   * Used to amend an already-submitted response, for example when a business allows clients to
   * edit their quiz answers after submission. Re-links the response to its owner and triggers
   * downstream reindexing so search and reporting stay consistent.
   * @deprecated Use {@link \Wl\Quiz\Response\Response65Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_quiz_response_key Quiz response key list.
   * @param {string} params.k_business Business key within which quiz is managed.
   * @param {string} params.k_quiz Quiz key.
   * @param {?string} [params.k_quiz_response] Quiz response key.
   * @param {?string} [params.uid_link] User's key for the response association.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlQuizResponseResponsePut = function(params)
  {
    return this.request('/Wl/Quiz/Response/Response.json', params || {}, 'PUT');
  };

  /**
   * Retrieves an information about current sale item.
   *
   * Used to render the detail view of a single store item (promotion, product, event, or coupon) in the
   * client-facing catalog. Returns everything needed to display the item: price, taxes, images,
   * description, booking restrictions, and available purchase options.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_discount_code Information about the discount code:
   * @param {Object[]} params.a_sale_id_group The list of items grouped by sale categories on the store page.
   * @param {?string} [params.dl_client_prorate] The client prorate date.
   * @param {number} params.i_image_height The image height in pixels. Specify this value if you need the image to be returned in a specific...
   * @param {number} params.i_image_width The image width in pixels. Specify this value if you need the image to be returned in a specific ...
   * @param {number} params.i_promotion_image_height The promotion image height in pixels. Specify this value if you need the image to be returned in ...
   * @param {number} params.i_promotion_image_width The promotion image width in pixels. Specify this value if you need the image to be returned in a...
   * @param {number} params.id_sale The ID of item category.
   * @param {boolean} params.is_backend Determines whether the API is called in the backend mode.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_id The item key.
   * @param {string} params.k_location The location key.
   * @param {?string} [params.k_shop_product_option] The product option key.
   * @param {?string} [params.text_item] A list of goods to get information for. Every element must contain the next keys:
   * @param {string} params.uid_customer The UID of a customer (user) for whom the purchase is made. This is used in the backend to calcul...
   * @returns {Promise<Object>} Response data.
   *  `a_age_restriction` {Object} The age restriction configuration.
   *  `a_data` {Object} Additional information specific for the item.
   *  `a_image` {Object} Image information:
   *  `a_image_list` {Object[]} List of images.
   *  `a_installment_template` {Object[]} A list of installment plans. Each element has the following next keys:
   *  `a_item` {Object[]} The list of information pertaining to the specified item.
   *  `a_tax` {Object[]} A list of the item's taxes.
   *  `f_price` {?string} The price of the sale item.
   *  `f_price_include` {?string} The price of the sale item, including tax.
   *  `f_price_retail_product` {string} The retail price of the product. This will be empty if this isn't a product.
   *  `f_price_total_enrollment` {string} Full price of event. This will be empty if this isn't an event.
   *  `f_tax` {?string} The tax amount.
   *  `html_description` {?string} The sale item description.
   *  `html_special` {?string} Special instructions for the sale item.
   *  `id_purchase_item` {number} A list of purchase types.
   *  `id_purchase_option_view` {number} A list of Purchase Option view types.
   *  `id_sale` {number} List of sale categories on the store page.
   *  `is_contract` {boolean} If `true`, the item requires a contract. Otherwise, this will be `false`.
   *  `k_id` {string} The item key.
   *  `k_shop_product_option` {?string} The product option key.
   *  `...` {*}
   */
  WlClient.prototype.wlCatalogCatalogListElement = function(params)
  {
    return this.request('/Wl/Catalog/CatalogList/Element.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of all sale items.
   *
   * Used to render the full client-facing store catalog for a business. Returns all purchasable items -
   * promotions, products, events, and coupons - merged across the business's categories. The separate
   * de-duplicated list and category list support both the flat and category-tabbed views.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_direct_link Arguments from direct purchase link, which can give additional access to products, which are avai...
   * @param {boolean} params.is_credit_card_check `true` to consider the requirement to have a credit card for booking
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location The key of a location. If `0`, all products in the business are retrieved.
   * @param {string} params.uid The key of user.
   * @returns {Promise<Object>} Response data.
   *  `a_product` {Object[]} The list of all sale items (de-duplicated). Each element has the following keys:
   *  `a_product_duplicate` {Object} The list of products to show with duplicates.
   */
  WlClient.prototype.wlCatalogCatalogListList = function(params)
  {
    return this.request('/Wl/Catalog/CatalogList/List.json', params || {}, 'GET');
  };

  /**
   * Gets store products by shop category.
   *
   * Used to populate a specific product category tab in the client-facing store. Supports pagination so
   * large categories can be loaded incrementally. Returns the products together with the sort order
   * configured for the category and a cache key for client-side caching.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_filter Additional data to filter products.
   * @param {number} params.i_last The currently shown element.
   * @param {string} params.k_business The business key to get products for.
   * @param {string} params.k_shop_category The selected shop category.
   * @param {string} params.s_cache_key The cache key used to get products.
   * @returns {Promise<Object>} Response data.
   *  `a_category_sort` {Object[]} Categories with sort settings. Keys refer to shop category keys. Values refer...
   *  `a_product` {Object} The list of products. Each element has the following keys:
   *  `i_last` {number} The currently shown element.
   *  `is_load_more` {boolean} Determines whether more products can be loaded.
   *  `s_cache_key` {string} The cache key used to get products.
   */
  WlClient.prototype.wlCatalogCatalogListCatalogProduct = function(params)
  {
    return this.request('/Wl/Catalog/CatalogList/CatalogProduct.json', params || {}, 'GET');
  };

  /**
   * Allows to pay items for the client.
   *
   * The checkout endpoint that finalizes a purchase in the client-facing store. Charges the client's
   * selected payment method, applies any discounts and tips, and creates the purchase record. Returns
   * the resulting purchase key so the frontend can redirect to the confirmation page.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_commission The staff commission earned for this purchase. If this isn't empty, it has the next fields:
   * @param {number} params.id_mode The WellnessLiving mode type (required). One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSi...
   * @param {boolean} params.is_guest Determines if the payment owner is an anonymous user (optional).
   * @param {boolean} params.is_staff Specify this if operations are performed by the staff member (optional).
   * @param {string} params.k_business The business key (required).
   * @param {string} params.k_location The location key (required).
   * @param {string} params.uid The user's key (required).
   * @returns {Promise<Object>} Response data.
   *  `k_login_activity` {?string} The key of login activity.
   *  `k_purchase` {string} The purchase key created during payment.
   */
  WlClient.prototype.wlCatalogPaymentPayment = function(params)
  {
    return this.request('/Wl/Catalog/Payment/Payment.json', params || {}, 'POST');
  };

  /**
   * Gets purchase cost data.
   *
   * Used in the client-facing checkout flow to show a live price summary before the client submits
   * payment. Calculates the full breakdown - subtotal, taxes, applied discounts, reward redemptions,
   * and tips - so the client can review the total before confirming.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_item The list of items in the cart.
   * @param {boolean} params.is_auto_apply_prize Whether selected login prize should be auto applied to first applicable item.
   * @param {string} params.k_location The location key.
   * @param {string} params.k_login_prize The login prize key.
   * @param {?string} [params.text_discount_code] The discount code.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_discount_item` {string[]} The list of discounts for each item.
   *  `a_item` {Object[]} The list of items in the cart.
   *  `a_prize_propose` {Object[]} List of prizes that can be redeemed and applied to items in the cart.
   *  `a_reward_item` {Object[]} List of cart items to which the selected prize can be applied
   *  `a_reward_propose` {Object[]} List of login prizes that can be applied to items in the cart.
   *  `a_tax_list` {string[]} Values derived for individual tax rates.
   *  `i_score` {?number} Amount of client's reward points.
   *  `m_discount` {?string} The full discount of the cart.
   *  `m_discount_total` {string} The total discount amount.
   *  `m_subtotal` {?string} The total amount in the catalog cart without tax.
   *  `m_tax` {?string} The tax amount.
   *  `m_tip_purchase` {?string} The amount of appointment tips.
   *  `m_total` {?string} The total amount in the catalog cart.
   */
  WlClient.prototype.wlCatalogCartCart = function(params)
  {
    return this.request('/Wl/Catalog/Cart/Cart.json', params || {}, 'GET');
  };

  /**
   * Checks limit quantity and whether a promotion can be added to the cart.
   *
   * Used in the checkout flow to prevent a client from purchasing more passes than the promotion allows.
   * Returns the limit, how many the client has already bought, and how many are currently in the cart so
   * the UI can display a clear message if the limit would be exceeded.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_item The cart items list with the next structure:
   * @param {string} params.k_business The business in which the purchase will be made.
   * @param {string} params.k_promotion The promotion key to add to the cart.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `i_purchase_already` {?number} The quantity if promotions have already been purchased by the current user.
   *  `i_purchase_current` {?number} The current quantity of a promotion with the quantity limit in the cart.
   *  `i_quantity_limit` {?number} The quantity limit of the promotion.
   *  `is_limit_exceeded` {?boolean} Determines whether the limit quantity has been exceeded.
   */
  WlClient.prototype.wlCatalogCartLimitQuantity = function(params)
  {
    return this.request('/Wl/Catalog/Cart/LimitQuantity.json', params || {}, 'GET');
  };

  /**
   * Records the start of a video watch session for the current user.
   *
   * Creates a new watch record for the user and video, verifying that the user has access to
   * the video under their current membership. Returns the watch key that the client must use
   * for subsequent progress updates via `put()`. Admin users are silently
   * skipped - no record is created for them.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `k_video_watch` {string} The video watch key.
   */
  WlClient.prototype.wlVideoWatchWatchPost = function(params)
  {
    return this.request('/Wl/Video/Watch/Watch.json', params || {}, 'POST');
  };

  /**
   * Updates the watch progress (current position and total watched time) for an existing watch record.
   *
   * Advances the stored playback position and accumulated watch time for the given watch record.
   * The total watched time can only increase; updates that report a smaller value than what is
   * already stored are silently ignored to handle out-of-order requests.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVideoWatchWatchPut = function(params)
  {
    return this.request('/Wl/Video/Watch/Watch.json', params || {}, 'PUT');
  };

  /**
   * Deletes the specified video category.
   *
   * Permanently removes the video category and its localized CMS records. Cannot be deleted
   * if the category is currently configured as the cloud recording destination for the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video_category The category key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVideoCategoryCategoryElementDelete = function(params)
  {
    return this.request('/Wl/Video/Category/CategoryElement.json', params || {}, 'DELETE');
  };

  /**
   * Returns the data for the specified video category.
   *
   * Returns the title, sort order, access restriction flags (by login type and member group),
   * and whether this category is designated as the cloud recording destination for the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video_category The category key.
   * @returns {Promise<Object>} Response data.
   *  `a_login_type` {string[]} A list of client and member types who can access videos from the category.
   *  `a_member_group` {string[]} A list of member groups who can access videos from the category.
   *  `i_order` {number} The category's placement in the business's list of categories.
   *  `is_cloud_recording` {boolean} This will be `true` if the video category is for cloud session recordings. Ot...
   *  `is_login_type` {boolean} This will be `true` if some client or member types can grant access to the vi...
   *  `is_member_group` {boolean} This will be `true` if some member groups can grant access to the video categ...
   *  `k_video_category` {string} The category key.
   *  `text_title` {string} The category name.
   */
  WlClient.prototype.wlVideoCategoryCategoryElementGet = function(params)
  {
    return this.request('/Wl/Video/Category/CategoryElement.json', params || {}, 'GET');
  };

  /**
   * Creates or updates a video category.
   *
   * Saves the category title and access restriction settings. When no category key is supplied,
   * a new category is created; when an existing key is supplied, that category is updated.
   * Requires backend access with the video library management privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video_category The category key.
   * @returns {Promise<Object>} Response data.
   *  `k_video_category` {string} The category key.
   */
  WlClient.prototype.wlVideoCategoryCategoryElementPut = function(params)
  {
    return this.request('/Wl/Video/Category/CategoryElement.json', params || {}, 'PUT');
  };

  /**
   * Returns the list of video categories for the business.
   *
   * Returns all video categories for the business with their titles, video counts, and cloud
   * recording assignment. In frontend mode, only categories accessible to the current user are
   * included. Results can be filtered by name and optionally limited to non-empty categories.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {boolean} params.is_skip_empty_group If `true`, groups that are missing videos won't be displayed. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.text_filter The filter phrase used to filter categories by name.
   * @returns {Promise<Object>} Response data.
   *  `a_video_category` {Object[]} The business video library categories as found in `k_business`.
   */
  WlClient.prototype.wlVideoCategoryCategoryListGet = function(params)
  {
    return this.request('/Wl/Video/Category/CategoryList.json', params || {}, 'GET');
  };

  /**
   * Updates the order of video categories.
   *
   * Reorders the video library categories for the business according to the provided list.
   * Requires backend access with the video library management privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVideoCategoryCategoryListPut = function(params)
  {
    return this.request('/Wl/Video/Category/CategoryList.json', params || {}, 'PUT');
  };

  /**
   * Deletes the specified video level.
   *
   * Permanently removes the video level and unassigns it from all videos. If any videos are
   * currently assigned to this level, a confirmation flag must be set; otherwise the API throws
   * a confirmation-required error so the caller can prompt the user before proceeding.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_delete_confirm If `true`, confirmation is required to delete videos. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video_level The video level key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVideoLevelLevelDelete = function(params)
  {
    return this.request('/Wl/Video/Level/Level.json', params || {}, 'DELETE');
  };

  /**
   * Creates a new video level.
   *
   * Creates a difficulty level entry for the business video library. The new level is appended
   * at the end of the current sort order and can be reordered afterwards using
   * `put()`. Requires backend access with the video library management privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video_level The video level key.
   * @returns {Promise<Object>} Response data.
   *  `k_video_level` {string} The video level key.
   */
  WlClient.prototype.wlVideoLevelLevelPost = function(params)
  {
    return this.request('/Wl/Video/Level/Level.json', params || {}, 'POST');
  };

  /**
   * Updates the specified video level.
   *
   * Renames an existing difficulty level in the business video library. Requires backend access
   * with the video library management privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video_level The video level key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVideoLevelLevelPut = function(params)
  {
    return this.request('/Wl/Video/Level/Level.json', params || {}, 'PUT');
  };

  /**
   * Returns the list of video levels for the business.
   *
   * Returns all difficulty levels configured for the business video library, sorted by their
   * current display order. Used to populate level pickers when creating or editing videos.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_level_list` {Object[]} A list of video levels with the following structure:
   */
  WlClient.prototype.wlVideoLevelLevelListGet = function(params)
  {
    return this.request('/Wl/Video/Level/LevelList.json', params || {}, 'GET');
  };

  /**
   * Updates the order of video levels.
   *
   * Reorders the difficulty levels for the business video library according to the provided list.
   * Requires backend access with the video library management privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVideoLevelLevelListPut = function(params)
  {
    return this.request('/Wl/Video/Level/LevelList.json', params || {}, 'PUT');
  };

  /**
   * Deletes the specified video tag.
   *
   * Permanently removes the video tag from the business library. If any videos are currently
   * assigned to this tag, a confirmation flag must be set; otherwise the API throws a
   * confirmation-required error so the caller can prompt the user before proceeding.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_delete_confirm If `true`, confirmation is required to delete videos. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video_tag The video tag key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVideoTagTagDelete = function(params)
  {
    return this.request('/Wl/Video/Tag/Tag.json', params || {}, 'DELETE');
  };

  /**
   * Creates a new video tag.
   *
   * Adds a new content tag to the business video library for use when categorizing videos.
   * Requires backend access and an active video subscription with at least the basic plan.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video_tag The video tag key.
   * @returns {Promise<Object>} Response data.
   *  `k_video_tag` {string} The video tag key.
   */
  WlClient.prototype.wlVideoTagTagPost = function(params)
  {
    return this.request('/Wl/Video/Tag/Tag.json', params || {}, 'POST');
  };

  /**
   * Updates the specified video tag.
   *
   * Renames an existing content tag in the business video library. Requires backend access
   * and an active video subscription with at least the basic plan.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_video_tag The video tag key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlVideoTagTagPut = function(params)
  {
    return this.request('/Wl/Video/Tag/Tag.json', params || {}, 'PUT');
  };

  /**
   * Returns the list of video tags for the business.
   *
   * Returns all content tags configured for the business video library. Used to populate
   * tag pickers when creating or editing videos. Requires an active video subscription.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_tag_list` {Object[]} A list of video tags with the following structure:
   */
  WlClient.prototype.wlVideoTagTagList = function(params)
  {
    return this.request('/Wl/Video/Tag/TagList.json', params || {}, 'GET');
  };

  /**
   * Performs Google authorization within the context of the specified business.
   *
   * Validates that the given business is active, sets it as the current frontend context, and then
   * delegates to the parent Google login flow to authenticate the user.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlGoogleLoginGoogleLogin = function(params)
  {
    return this.request('/Wl/Google/Login/GoogleLogin.json', params || {}, 'POST');
  };

  /**
   * Marks the visit as not attended via the Attendance Kiosk.
   *
   * Validates the Attendance Kiosk secret and updates the specified visit record to reflect that the client did
   * not attend the session.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlReceptionRosterAttendanceListNotAttend = function(params)
  {
    return this.request('/Wl/Reception/Roster/AttendanceListNotAttend.json', params || {}, 'POST');
  };

  /**
   * Books a class for the client and marks the visit as attended via the Attendance Kiosk.
   *
   * Validates the Attendance Kiosk secret, books the specified class period for the client, and immediately marks
   * the resulting visit as attended.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dtu_date The UTC datetime for the class in MySQL format.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_class_period The class period key.
   * @param {string} params.s_secret The secret for authenticating the attendance kiosk.
   * @param {string} params.uid The client's user key.
   * @returns {Promise<Object>} Response data.
   *  `k_visit` {string} The visit key.
   *  `text_message` {string} The status message displayed on a successful check-in.
   */
  WlClient.prototype.wlReceptionRosterAttendanceListAttend = function(params)
  {
    return this.request('/Wl/Reception/Roster/AttendanceListAttend.json', params || {}, 'POST');
  };

  /**
   * Books a class for the client via the Attendance Kiosk and returns whether the client was placed on the class list or waitlist.
   *
   * Validates the Attendance Kiosk secret and books the client into the specified class period, returning a flag
   * indicating whether the client was placed on the class list or the waitlist.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `is_wait` {boolean} `true` if the client is on the waitlist for the class, `false` if they are on...
   *  `text_message` {string} The status message displayed on a successful booking.
   */
  WlClient.prototype.wlReceptionRosterAttendanceListBook = function(params)
  {
    return this.request('/Wl/Reception/Roster/AttendanceListBook.json', params || {}, 'POST');
  };

  /**
   * Gets the secret string for Attendance Kiosk requests.
   *
   * Requires backend access and validates that the specified location belongs to the given business, then returns
   * the secret token used to authenticate Attendance Kiosk API requests.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business.
   * @param {string} params.k_location Key of the location.
   * @returns {Promise<Object>} Response data.
   *  `s_secret` {string} Secret string.
   */
  WlClient.prototype.wlReceptionRosterAttendanceSecret = function(params)
  {
    return this.request('/Wl/Reception/Roster/AttendanceSecret.json', params || {}, 'GET');
  };

  /**
   * Returns the schedule and HTML for the Self Check-In Web App for the given user.
   *
   * Returns the rendered schedule HTML, a structured list of upcoming sessions, and a map of service type
   * HTML classes for the authenticated user at the given location.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key, where the Self Check-In Web App is started.
   * @param {string} params.k_location The location key, where the Self Check-In Web App is started.
   * @param {string} params.s_secret The key of the Self Check-In Web App.
   * @param {string} params.uid The key of the user to show the schedule for.
   * @returns {Promise<Object>} Response data.
   *  `a_class` {Object} A list of sessions to display with the following fields:
   *  `a_schedule_class_all` {number[]} All types of services that appear in the schedule.
   *  `html_schedule` {string} The schedule to be shown in the Self Check-In Web App for the selected user.
   */
  WlClient.prototype.wlReceptionApplicationReceptionScheduleGet = function(params)
  {
    return this.request('/Wl/Reception/Application/ReceptionSchedule.json', params || {}, 'GET');
  };

  /**
   * Performs check-in for the given user and returns the confirmation HTML and data.
   *
   * Books or checks the user into the specified class period or appointment, then returns confirmation HTML
   * and structured data including payment info, assigned assets, and visit counts.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key, where the Self Check-In Web App is started.
   * @param {string} params.k_location The location key, where the Self Check-In Web App is started.
   * @param {string} params.s_secret The key of the Self Check-In Web App.
   * @param {string} params.uid The key of the user to show the schedule for.
   * @returns {Promise<Object>} Response data.
   *  `a_confirmation_data` {Object} Data for the confirmation screen with the following fields:
   *  `html_confirmation` {string} The confirmation template to be shown in the Self Check-In Web App for the se...
   *  `k_visit` {string} The visit key, which was added or checked in.
   */
  WlClient.prototype.wlReceptionApplicationReceptionSchedulePost = function(params)
  {
    return this.request('/Wl/Reception/Application/ReceptionSchedule.json', params || {}, 'POST');
  };

  /**
   * Returns member information and notification items for the Self Check-In Web App.
   *
   * Returns the user's profile data along with any notification items (such as expiring memberships, required waivers,
   * or outstanding balances) that should be displayed during the self check-in flow.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_uid] Primary keys of users whose information must be returned.
   * @param {?string[]} [params.a_uid_date] List of dates for load additional information about users.
   * @param {string} params.dt_date Date of the session, if we show it on the appointment info window or on the attendance list.
   * @param {boolean} params.is_backend `true` - if API is being used from backend, `false` - otherwise.
   * @param {boolean} params.is_full If you need to return additional information set to `true` or `false` if not.
   * @param {string} params.k_business The business ID required to access client information.
   * @param {string} params.k_location The location where the Self Check-In Web App is running.
   * @param {string} params.k_visit ID of the visit, if we show icons on the attendance list and information that depends on visit is...
   * @param {string} params.s_secret Key of the Check In application.
   * @param {string} params.s_show A list of icons with additional information about the business member.
   * @param {string} params.uid ID of a user to retrieve member information for.
   * @returns {Promise<Object>} Response data.
   *  `a_info` {?Object} Additional member data or `null` if any data can be shown.
   *  `a_items` {Object[]} The options presented in the web app.
   *  `a_result_list` {?Object} List of users data.
   *  `a_visit_last` {Object} Information about last visit of the user.
   *  `a_visit_next` {Object} Information about next visit of the user.
   *  `i_lifetime_visit` {number} Count attend visits for one client.
   *  `is_traveller` {?boolean} If `true`, the client is a traveler. Otherwise, this will be `false`.
   *  `m_lifetime_value` {string} The member's lifetime value.
   *  `s_member` {?string} The member ID.
   *  `text_first_name` {string} First user's name.
   *  `text_fullname` {string} Full user's name.
   *  `url_barcode` {string} URL to barcode image.
   *  `url_email` {string} URL to email.
   */
  WlClient.prototype.wlReceptionApplicationMemberInfo = function(params)
  {
    return this.request('/Wl/Reception/Application/MemberInfo.json', params || {}, 'GET');
  };

  /**
   * Performs authorization based on the given authorization value and business settings.
   *
   * Looks up clients by member ID, email address, or phone number and returns matching user records for selection
   * in the Self Check-In Web App.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business, where Check In application is started.
   * @param {string} params.k_location Key of the location, where Check In application is started.
   * @param {string} params.s_secret Key of the Check In application.
   * @returns {Promise<Object>} Response data.
   *  `a_select` {Object[]} List of the users, which can be authorized.
   *  `uid` {string} Key of the authorized user.
   */
  WlClient.prototype.wlReceptionApplicationReceptionAuthorize = function(params)
  {
    return this.request('/Wl/Reception/Application/ReceptionAuthorize.json', params || {}, 'POST');
  };

  /**
   * Returns information about settings for Check In Web Application.
   *
   * This method does not require any access checks, because this is public information.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business, where application is run.
   * @param {string} params.k_location Key of the location, where application is run.
   * @returns {Promise<Object>} Response data.
   *  `a_reception_logo` {Object[]} Array of image information for Self Check-In logo.
   *  `hide_profile_images` {boolean} `true` - client profile images will be hidden after the client signs in on th...
   *  `i_book_open` {number} Number of minutes for the client check-in window after session has started.
   *  `i_confirm_delay` {number} Delay in seconds on Check-in Confirmation Screen before redirect to Login scr...
   *  `i_schedule_delay` {number} Delay in seconds on Schedule Screen before redirect to Login screen.
   *  `id_failed_sound` {number} List of sounds used for check ins.
   *  `id_success_sound` {number} List of sounds used for check ins.
   *  `is_attend_free` {boolean} `true` - allow client to check-in unpaid;
   *  `is_auto_check_in` {boolean} If only one service available with the look ahead window the client will:
   *  `is_book_open` {boolean} `true` - allow clients to check-in to sessions in progress;
   *  `is_book_optional` {boolean} `true` - allow client check-in without booking prior;
   *  `is_client_id` {boolean} `true` - enable check-in by client id;
   *  `is_mail` {boolean} `true` - enable check-in by email;
   *  `is_password` {boolean} `true` - require password while check-in;
   *  `is_phone` {boolean} `true` - enable check-in by phone;
   *  `is_reconcile_auto` {boolean} `true` - automatically reconcile unpaid visits upon check in;
   *  `show_business_name` {boolean} `true` - show business name on client self check-in page;
   *  `show_confirm_screen` {boolean} `true` - show confirm screen after client self check-in;
   *  `text_business_name` {string} Name of the business to display on the client self check-in page.
   */
  WlClient.prototype.wlReceptionDesignReceptionDesign = function(params)
  {
    return this.request('/Wl/Reception/Design/ReceptionDesign.json', params || {}, 'GET');
  };

  /**
   * Gets purchase information.
   *
   * Returns full receipt data for the specified purchase, including business details, customer information,
   * itemized purchase items, payment methods, pricing summary, and print URLs.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_url_public Whether `url_print` and `url_print_receipt` require authentication.
   * @param {?string} [params.k_purchase] The key of the purchase.
   * @returns {Promise<Object>} Response data.
   *  `a_account_rest` {Object} Information about the account balance for a user's account after payment for ...
   *  `a_business` {Object} Information about the business.
   *  `a_card` {Object} Payment transaction information. Every element has the following keys:
   *  `a_customer` {Object} Information about the customer.
   *  `a_pay_method` {Object} A list of payment methods for the current purchase. Every element has the fol...
   *  `a_price` {Object} Complete information about price information for the purchase.
   *  `a_purchase_item` {Object[]} A list of purchase items. Every element has the following keys:
   *  `dtl_purchase` {string} The local date of the purchase in MySQL format.
   *  `has_signature` {boolean} Determines whether the payment contained a signature.
   *  `html_receipt` {string} HTML representation of the purchase receipt.
   *  `text_purchase_id` {string} The normalized purchase ID.
   *  `text_receipt` {string} The receipt text set in the store settings.
   *  `url_print` {string} The URL for printing on a normal printer.
   *  `url_print_receipt` {string} The URL for printing on a receipt printer.
   */
  WlClient.prototype.wlPurchaseReceiptPurchaseReceipt = function(params)
  {
    return this.request('/Wl/Purchase/Receipt/PurchaseReceipt.json', params || {}, 'GET');
  };

  /**
   * Sends mail message with list of purchased items for specified purchase.
   *
   * Validates the caller's access to the purchase and sends a receipt email to the appropriate recipient
   * (staff member or client), recording the action in the mail history log.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPurchaseMailPurchaseMail = function(params)
  {
    return this.request('/Wl/Purchase/Mail/PurchaseMail.json', params || {}, 'POST');
  };

  /**
   * Records the purchase share action and returns the social network sharing URL.
   *
   * Validates that the caller owns the purchase, prevents duplicate share actions, saves the share record,
   * and returns the social network URL for sharing.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `url_share` {string} The URL to the sharing page.
   */
  WlClient.prototype.wlPurchaseSharePurchaseShare = function(params)
  {
    return this.request('/Wl/Purchase/Share/PurchaseShare.json', params || {}, 'POST');
  };

  /**
   * Returns a list of active insurance programs for the specified promotion.
   *
   * Requires backend access and an active Wellness Program feature for the business. Returns all available
   * insurance programs with pricing, organization name, partner name, and a link to the insurance detail page.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the franchisee business.
   * @param {string} params.k_promotion The key of the promotion.
   * @returns {Promise<Object>} Response data.
   *  `a_wellness_program` {Object[]} A List of active programs.
   */
  WlClient.prototype.wlInsuranceCatalogProgramList = function(params)
  {
    return this.request('/Wl/Insurance/Catalog/ProgramList.json', params || {}, 'GET');
  };

  /**
   * Returns list of appointment type in the business.
   *
   * Gets key of the business and returns all available appointment types with their names and categories.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_franchise Whether to return franchisee-created appointment types (if business is franchisor).
   * @param {string} params.k_business Business key, primary key.
   * @returns {Promise<Object>} Response data.
   *  `a_service` {Object[]} Appointment types list:
   */
  WlClient.prototype.wlServiceServiceListList = function(params)
  {
    return this.request('/Wl/Service/ServiceList/List.json', params || {}, 'GET');
  };

  /**
   * Gets the phone number associated with a specific business.
   *
   * Returns the dedicated sender phone number configured for the business's 2-Way SMS feature.
   * Requires the `wl.business.phone` API privilege. Returns `null` or an empty value if the
   * business has not configured a 2-Way SMS number.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business.
   * @returns {Promise<Object>} Response data.
   *  `text_phone_sender` {?string} Phone number of the business, which is added as sender for 2-Way SMS feature.
   */
  WlClient.prototype.wlSmsPhoneBusinessPhone = function(params)
  {
    return this.request('/Wl/Sms/Phone/BusinessPhone.json', params || {}, 'GET');
  };

  /**
   * Sends an AI agent link action email (booking or purchase) to the specified user.
   *
   * Triggers the email that the AI agent sends when a client clicks a booking or purchase link
   *  generated by the AI agent chat. Requires the business to have an active AI agent subscription;
   *  the action type determines which notification template is used and which service or purchase
   *  item is referenced in the email body.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_purchase_item Purchase item ID. Required if `text_action` is 'purchase'.
   * @param {number} params.id_service Service ID. Required if `text_action` is 'booking'.
   * @param {string} params.k_business Business key. Required.
   * @param {string} params.k_id Unique identifier for the link.
   * @param {string} params.text_action Action type. Must be 'purchase' or 'booking'.
   * @param {string} params.uid User ID. Required.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlAiAgentLinkSendMail = function(params)
  {
    return this.request('/Wl/AiAgent/Link/SendMail.json', params || {}, 'POST');
  };

  /**
   * Returns the list of privileges for the current user in the given business.
   *
   * Returns the complete access profile of the signed-in user for the given business: staff
   * privileges by ID, named admin privileges, and a flag indicating super-admin status. Can
   * only be called for the currently authenticated user, not on behalf of another user.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of business to get privileges for.
   * @param {string} params.uid User key to get privileges for.
   * @returns {Promise<Object>} Response data.
   *  `a_privilege_passport` {string[]} List of privileges, if user is administrator.
   *  `a_privilege_staff` {number[]} List of privileges, if the given user is a staff member in the give business.
   *  `is_admin` {boolean} Whether this user is a super-administrator because he is a studio staff member.
   */
  WlClient.prototype.wlStaffPrivilegePrivilegeList = function(params)
  {
    return this.request('/Wl/Staff/Privilege/PrivilegeList.json', params || {}, 'GET');
  };

  /**
   * Returns the list of staff members for the given business.
   *
   * Returns all active (or optionally inactive) staff members for the business, including
   * their name, role, assigned services, contact details, and location assignments. Can be
   * filtered to only staff who have a specific privilege, and whether access-level checks
   * should be applied when building the result.
   *
   * @param {Object} [params] Request parameters.
   * @param {number[]} params.a_privilege A list of privileges to filter staff members by.
   * @param {boolean} params.is_check_staff_access Determines that only staff members which the current user has access to should be retrieved.
   * @param {boolean} params.is_staff_inactive Whether inactive and removed staff members are available.
   * @param {string} params.k_business The key of the business to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_staff` {Object[]} Information about staff members.
   */
  WlClient.prototype.wlStaffStaffListStaffList = function(params)
  {
    return this.request('/Wl/Staff/StaffList/StaffList.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about staff.
   *
   * This method can accept or one staff key `k_staff` or staff list
   * `a_staff_list` but not both (exception would be thrown).
   * @deprecated Use {@link \Wl\Staff\StaffView\StaffView74Api}
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_staff_list] A list of staff keys.
   * @param {?string[]} [params.a_uid_staff_list] A list of staff user IDs.
   * @param {number} params.i_image_height Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.i_image_width Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.k_staff The staff member key.
   * @param {string} params.uid_staff The staff member user ID.
   * @returns {Promise<Object>} Response data.
   *  `a_class_day` {Object[]} An array containing information about the classes this staff member is running.
   *  `a_result_list` {Object[]} An array listing the class sessions the staff member provides at each location.
   *  `a_staff` {Object} An array containing information about the staff member.
   */
  WlClient.prototype.wlStaffStaffViewStaffView = function(params)
  {
    return this.request('/Wl/Staff/StaffView/StaffView.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about staff.
   *
   * This method can accept or one staff key [StaffViewApi](/Wl/Staff/StaffView/StaffView.json) or staff list
   * [StaffViewApi](/Wl/Staff/StaffView/StaffView.json) but not both (exception would be thrown).
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_uid_staff_list] A list of staff user IDs.
   * @param {number} params.i_image_height Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.i_image_width Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.uid_staff The staff member user ID.
   * @returns {Promise<Object>} Response data.
   *  `a_class_day` {Object[]} An array containing information about the classes this staff member is running.
   *  `a_result_list` {Object[]} An array listing the class sessions the staff member provides at each location.
   *  `a_staff` {Object} An array containing information about the staff member.
   */
  WlClient.prototype.wlStaffStaffViewStaffView74 = function(params)
  {
    return this.request('/Wl/Staff/StaffView/StaffView74.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of available reward actions.
   *
   * Returns all reward actions visible to the specified user in the given business, optionally filtered by category,
   * including the score value and request status for each action.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of current business.
   * @param {string} params.k_reward_action_category Key of reward action category.
   * @param {string} params.uid Key of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_reward_action` {Object[]} A list reward actions. Every element has next keys:
   */
  WlClient.prototype.wlRewardActionAction = function(params)
  {
    return this.request('/Wl/Reward/Action/Action.json', params || {}, 'GET');
  };

  /**
   * Updates configuration fields for the specified reward action.
   *
   * Accepts changes to fields such as auto-renewal flag, point cap, point value, and linked promotions, and
   * persists only the provided fields while logging the changes.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlRewardActionActionWrite = function(params)
  {
    return this.request('/Wl/Reward/Action/ActionWrite.json', params || {}, 'POST');
  };

  /**
   * Retrieves information about reward action item.
   *
   * Returns the point value, score type, description, and whether the user has already submitted a points request
   * for the specified reward action.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business to show information for.
   * @param {string} params.k_reward_action Reward action to show information for.
   * @param {string} params.uid User to retrieve information about.
   * @returns {Promise<Object>} Response data.
   *  `i_score` {number} Points amount that will be added to user account after successful accomplishm...
   *  `id_reward_score` {?number} Types of reward actions.
   *  `is_request` {boolean} `true` if user has requested points for action accomplishment, `false` otherw...
   *  `s_description` {string} User friendly reward action description.
   */
  WlClient.prototype.wlRewardActionElementGet = function(params)
  {
    return this.request('/Wl/Reward/Action/Element.json', params || {}, 'GET');
  };

  /**
   * Requests points earning.
   *
   * Submits a custom reward points request for the specified action on behalf of the given user and records
   * the pending approval request.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business to show information for.
   * @param {string} params.k_reward_action Reward action to show information for.
   * @param {string} params.uid User to retrieve information about.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlRewardActionElementPost = function(params)
  {
    return this.request('/Wl/Reward/Action/Element.json', params || {}, 'POST');
  };

  /**
   * Retrieves information about reward actions.
   *
   * Returns all reward action records of the specified score type for the business, including the point value
   * configured for each action.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} params.id_reward_score ID of type of reward action. One of [RsRewardScoreSid](#/components/schemas/RsRewardScoreSid) con...
   * @param {string} params.k_business Key of a business to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_reward_action` {Object[]} Information about reward actions. Every element has next keys:
   */
  WlClient.prototype.wlRewardActionActionType = function(params)
  {
    return this.request('/Wl/Reward/Action/ActionType.json', params || {}, 'GET');
  };

  /**
   * Returns the total reward points for the specified activity list or user.
   *
   * If `a_login_activity` is provided, returns the total points earned across those activities; otherwise returns
   * the current point balance for the specified user in the given business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_login_activity List of login activity keys for which points should be added or returned.
   * @returns {Promise<Object>} Response data.
   *  `i_score` {number} Depending on arguments specified during API request might be:
   */
  WlClient.prototype.wlRewardScoreScoreGet = function(params)
  {
    return this.request('/Wl/Reward/Score/Score.json', params || {}, 'GET');
  };

  /**
   * Gives user reward points for sharing of certain activity into Facebook.
   *
   * Validates the activity list, determines the appropriate reward score type per activity category, and schedules
   * reward point additions for each shareable activity.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_login_activity List of login activity keys for which points should be added or returned.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlRewardScoreScorePost = function(params)
  {
    return this.request('/Wl/Reward/Score/Score.json', params || {}, 'POST');
  };

  /**
   * Manually adjusts the reward points balance for the specified user.
   *
   * Requires the reward point reset privilege, creates a manual activity log entry, and applies the signed point
   * adjustment to the user's reward balance within a transaction.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlRewardScoreScorePut = function(params)
  {
    return this.request('/Wl/Reward/Score/Score.json', params || {}, 'PUT');
  };

  /**
   * Retrieves information about reward board item.
   *
   * In single-user mode returns the user's score, name, and avatar on the specified board; in multi-user mode
   * accepts a list of UIDs and returns an array of score, name, and avatar entries for all of them.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_uid] List of users to get information for.
   * @param {string} params.k_business Business to show information for.
   * @param {string} params.k_reward_board Reward board to show information for.
   * @param {string} params.uid User to retrieve information about.
   * @returns {Promise<Object>} Response data.
   *  `a_reward` {?Object[]} List of reward board elements. `null` if not loaded.
   *  `i_score` {number} Score in points.
   *  `s_name` {string} User name.
   *  `url_logo` {string} User logo.
   */
  WlClient.prototype.wlRewardBoardElement = function(params)
  {
    return this.request('/Wl/Reward/Board/Element.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of reward board items to show.
   *
   * Returns an ordered list of user IDs ranked by points for the specified reward board, up to the configured
   * maximum number of entries.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business ID of a business to show information for.
   * @param {string} params.k_reward_board ID of reward board to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_uid` {number[]} A list of UID items.
   */
  WlClient.prototype.wlRewardBoardList = function(params)
  {
    return this.request('/Wl/Reward/Board/List.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about redeemable prize item.
   *
   * Returns the point cost and description for the specified redeemable prize in the given business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business to show information for.
   * @param {string} params.k_reward_prize Key of redeemable prize.
   * @param {string} params.uid User to retrieve information about.
   * @returns {Promise<Object>} Response data.
   *  `i_score` {number} Prize price in wellnessliving points.
   *  `s_description` {string} User friendly prize description.
   */
  WlClient.prototype.wlRewardPrizeElementGet = function(params)
  {
    return this.request('/Wl/Reward/Prize/Element.json', params || {}, 'GET');
  };

  /**
   * Redeems selected prize.
   *
   * Deducts the required points from the user's reward balance and records the redemption, returning the key
   * of the created login prize record.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business to show information for.
   * @param {string} params.k_reward_prize Key of redeemable prize.
   * @param {string} params.uid User to retrieve information about.
   * @returns {Promise<Object>} Response data.
   *  `k_login_prize` {string} Key of login prize.
   */
  WlClient.prototype.wlRewardPrizeElementPost = function(params)
  {
    return this.request('/Wl/Reward/Prize/Element.json', params || {}, 'POST');
  };

  /**
   * Retrieves a list of redeemable prizes.
   *
   * Returns all active redeemable prizes for the specified business, ordered by point cost, including the prize key
   * and required score for each item.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of current business.
   * @returns {Promise<Object>} Response data.
   *  `a_prize` {string[]} Array of prize keys.
   *  `a_score` {number[]} Array of prize scores.
   */
  WlClient.prototype.wlRewardPrizePrize = function(params)
  {
    return this.request('/Wl/Reward/Prize/Prize.json', params || {}, 'GET');
  };

  /**
   * Schedules or immediately sends a notification to clients of the specified business or location.
   *
   * Validates the business, optional location, and notification ID, then either dispatches the notification
   * immediately or schedules it at the UTC date and time provided in `$dtu_send` (must be within 7 days).
   * Optionally restricts recipients to specific UIDs via `$s_uid`. Requires the `rs.profile` privilege.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlNotificationSendNotificationSend = function(params)
  {
    return this.request('/Wl/Notification/Send/NotificationSend.json', params || {}, 'POST');
  };

  /**
   * Returns configuration information about the specified notification for the given business.
   *
   * Validates the business key and notification ID, then returns the notification configuration including
   * mail template settings and channel availability for the given business. Requires the `rs.profile` privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_notification ID of the notification. See [RsMailSid](#/components/schemas/RsMailSid).
   * @param {string} params.k_business Key of the business where information about notification should be retrieved.
   * @returns {Promise<Object>} Response data.
   *  `a_info` {*[]} Information about mail.
   */
  WlClient.prototype.wlNotificationSendNotificationInfo = function(params)
  {
    return this.request('/Wl/Notification/Send/NotificationInfo.json', params || {}, 'GET');
  };

  /**
   * Sends an OTP code to the specified phone number for verification.
   *
   * Checks that the rate limit for OTP generation has not been exceeded, generates a new code, and dispatches
   * it to the given phone number via SMS. Requires a special privilege to use this endpoint.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.text_phone Phone number to be validated.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlNotificationOtpPhoneOtpGet = function(params)
  {
    return this.request('/Wl/Notification/Otp/PhoneOtp.json', params || {}, 'GET');
  };

  /**
   * Verifies the OTP code submitted by the user for the specified phone number.
   *
   * Checks that the submitted `$s_otp_code` matches the code previously generated for `$text_phone` and has
   * not expired. Returns a validation error if the code is absent, incorrect, or expired.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.text_phone Phone number to be validated.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlNotificationOtpPhoneOtpPost = function(params)
  {
    return this.request('/Wl/Notification/Otp/PhoneOtp.json', params || {}, 'POST');
  };

  /**
   * Returns the current user's login information and password reset URL for the specified business.
   *
   * Validates the business key, applies any business-specific redemption settings, then delegates to the parent
   * implementation to return the current user ID and password reset URL.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `uid` {?string} The current user key.
   *  `url_password_change` {string} A URL that a user can visit to reset their password.
   *  `url_register` {string} The URL to the registration page.
   */
  WlClient.prototype.wlPassportLoginInfo = function(params)
  {
    return this.request('/Wl/Passport/Login/Info.json', params || {}, 'GET');
  };

  /**
   * Reset customisation form of client application.
   *
   * Resets the Achieve app customization skin to default values for the given business.
   * If billing is required for the reset, a confirmation flag must be provided, and a
   * customization fee may be scheduled.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_billing_confirm Whether customization billing is confirmed.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `s_link` {string} Name of the link to default application skin.
   */
  WlClient.prototype.wlSkinApplicationSkinDelete = function(params)
  {
    return this.request('/Wl/Skin/Application/Skin.json', params || {}, 'DELETE');
  };

  /**
   * Returns the application customisation skin data for the given business.
   *
   * Returns the full set of White Label Achieve app customization settings (colors, logos, fonts,
   * and other branding options) for the given business, along with a flag indicating whether
   * the business account has an active paid customization subscription.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_skin` {*[]} Skin information.
   *  `has_pay` {boolean} Determines current business account contains amount for the application custo...
   *  `s_link` {string} Name of the link to default application skin.
   */
  WlClient.prototype.wlSkinApplicationSkinGet = function(params)
  {
    return this.request('/Wl/Skin/Application/Skin.json', params || {}, 'GET');
  };

  /**
   * Returns widget skins grouped by widget type for the given business.
   *
   * Returns all configured widget skins for the business, organized by widget type. Used to
   * populate the widget management list so administrators can select and edit existing skins.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `a_widget_skin` {Object[]} List of Widget skins grouped by widget type.
   */
  WlClient.prototype.wlSkinWidgetSkinWidgetList = function(params)
  {
    return this.request('/Wl/Skin/Widget/SkinWidgetList.json', params || {}, 'GET');
  };

  /**
   * Returns information about specified member.
   *
   * Supports both single-user and batch modes: when `$a_uid` is provided, returns a keyed list of user data in
   * `$a_result_list`; otherwise returns data for the single user identified by `$uid`. When `$is_full` is `true`,
   * additional profile details, group membership, visit history, and lifetime value are included.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_uid] Primary keys of users whose information must be returned.
   * @param {?string[]} [params.a_uid_date] List of dates for load additional information about users.
   * @param {string} params.dt_date Date of the session, if we show it on the appointment info window or on the attendance list.
   * @param {boolean} params.is_backend `true` - if API is being used from backend, `false` - otherwise.
   * @param {boolean} params.is_full If you need to return additional information set to `true` or `false` if not.
   * @param {string} params.k_business The business ID required to access client information.
   * @param {string} params.k_visit ID of the visit, if we show icons on the attendance list and information that depends on visit is...
   * @param {string} params.s_show A list of icons with additional information about the business member.
   * @param {string} params.uid ID of a user to retrieve member information for.
   * @returns {Promise<Object>} Response data.
   *  `a_info` {?Object} Additional member data or `null` if any data can be shown.
   *  `a_result_list` {?Object} List of users data.
   *  `a_visit_last` {Object} Information about last visit of the user.
   *  `a_visit_next` {Object} Information about next visit of the user.
   *  `i_lifetime_visit` {number} Count attend visits for one client.
   *  `is_traveller` {?boolean} If `true`, the client is a traveler. Otherwise, this will be `false`.
   *  `m_lifetime_value` {string} The member's lifetime value.
   *  `s_member` {?string} The member ID.
   *  `text_first_name` {string} First user's name.
   *  `text_fullname` {string} Full user's name.
   *  `url_barcode` {string} URL to barcode image.
   *  `url_email` {string} URL to email.
   */
  WlClient.prototype.wlMemberInfoInfo = function(params)
  {
    return this.request('/Wl/Member/Info/Info.json', params || {}, 'GET');
  };

  /**
   * Returns active clients holding at least one active Purchase Option from the specified list.
   *
   * Accepts a comma-separated list of Purchase Option keys, validates them against the business, and returns
   * all active clients who hold at least one non-expired, non-limited Purchase Option from that list.
   * Clients to which the currently signed-in user has no profile access are excluded from the result.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business for which to get a list of clients.
   * @param {string} params.s_promotion_keys The comma-separated list of the Purchase Option keys.
   * @returns {Promise<Object>} Response data.
   *  `a_clients` {Object[]} The list of active clients with the given Purchase Options.
   */
  WlClient.prototype.wlMemberPurchaseMemberByPromotion = function(params)
  {
    return this.request('/Wl/Member/Purchase/MemberByPromotion.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about user.
   *
   * Returns profile data for a WellnessLiving user, including name, email, phone, photo, gender,
   * login type, custom profile fields, member groups, and calendar integration status. Supports
   * single-user mode and batch mode for loading multiple profiles in one request.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_user_list A list of user keys.
   * @param {string} params.k_business The key of the business.
   * @param {boolean} params.not_cached `true` to ignore cache and load information from the database directly.
   * @param {string} params.uid The key of the user.
   * @returns {Promise<Object>} Response data.
   *  `a_custom_field` {Object[]} List of the custom user fields. Each value is:
   *  `a_member_group` {string[]} List of member groups that the user belongs to.
   *  `a_photo` {Object} Information about the user's photo. The information returned has the followin...
   *  `a_result_list` {Object[]} List of user's data.
   *  `can_introductory` {boolean} Whether the user can purchase introductory offers.
   *  `dt_add` {string} The date the user was added, given in UTC time.
   *  `dt_birth` {string} The user's birthday. This will be `null` if the birthday isn't set yet.
   *  `has_discount` {?boolean} Whether client's login type has a discount.
   *  `id_gender` {number} String identifiers for gender.
   *  `is_calendar_google` {boolean} This will be `true` if the user has Google Calendar linked to their account; ...
   *  `is_calendar_microsoft` {boolean} This will be `true` if the user has Microsoft Calendar linked to their accoun...
   *  `is_customer_new` {boolean} This will be `true` if the user has never made purchases or reservations in t...
   *  `is_traveller` {boolean} This will be `true` if the user is a traveler. A traveler is someone whose ho...
   *  `k_city` {?string} City key.
   *  `k_login_type` {string} The key of the login type. The login type describes the user's client type in...
   *  `s_first_name` {string} The user's first name.
   *  `s_last_name` {string} The user's last name.
   *  `s_mail` {string} The user's email address.
   *  `s_member` {string} The user's member ID in the business. Also referred to as the client ID in th...
   *  `s_phone` {string} The user's phone number.
   *  `...` {*}
   */
  WlClient.prototype.wlUserInfoUserInfo = function(params)
  {
    return this.request('/Wl/User/Info/UserInfo.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about the user belongs to certain integrations.
   *
   * Returns which third-party booking integrations (Classpass, Gympass, Reserve With Google)
   * the user is currently connected to within the given business context. Returns `null`
   * when the user has no active integration memberships.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business.
   * @param {string} params.uid Key of the user.
   * @returns {Promise<Object>} Response data.
   *  `a_integration` {?Object} Information about the integrations the user is connected to. The information ...
   */
  WlClient.prototype.wlUserInfoUserIntegration = function(params)
  {
    return this.request('/Wl/User/Info/UserIntegration.json', params || {}, 'GET');
  };

  /**
   * Searches for a referrer by the given search string and returns their profile information.
   *
   * Searches for a matching client by member ID, email address, phone number, or encrypted user
   * key, and returns their name, email, phone, and photo. Returns empty or `null` fields when
   * no matching client is found. Search is rate-limited for guest and client callers.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the current business.
   * @param {string} params.s_search The string to be used for searching for a referrer.
   * @returns {Promise<Object>} Response data.
   *  `a_photo` {Object} Information about the referrer's photo. The information returned has the foll...
   *  `s_email` {string} The email address of the referrer.
   *  `s_member` {string} The business client ID of the referrer.
   *  `s_name_first` {string} The first name of the referrer.
   *  `s_name_last` {string} The last name of the referrer.
   *  `s_phone` {string} The phone number of the referrer.
   *  `text_name_public` {?string} Composes name of the referrer for public usage.
   *  `uid_referrer` {string} The referrer's user key.
   */
  WlClient.prototype.wlUserReferrerReferrer = function(params)
  {
    return this.request('/Wl/User/Referrer/Referrer.json', params || {}, 'GET');
  };

  /**
   * Returns discount codes of the specified business.
   *
   * Used in the backend discount management UI to show the full list of discount codes for a business
   * so the staff member can select one to view or edit.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key of the discount codes.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} Discount codes list.
   */
  WlClient.prototype.wlDiscountCodeDiscountCode = function(params)
  {
    return this.request('/Wl/Discount/Code/DiscountCode.json', params || {}, 'GET');
  };

  /**
   * Returns the list of shop categories available for the given business.
   *
   * Returns all store categories that the current user is allowed to access, including their
   * titles, descriptions, and display order. Guest and client users see only public categories;
   * staff and admin users may see additional categories based on their access level.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to get shop categories for.
   * @returns {Promise<Object>} Response data.
   *  `a_shop_category` {Object} An array containing information about all store categories.
   */
  WlClient.prototype.wlShopCategoryCategoryGet = function(params)
  {
    return this.request('/Wl/Shop/Category/Category.json', params || {}, 'GET');
  };

  /**
   * Creates new shop category.
   *
   * Creates a new product category in the business store with the given title. Requires
   * backend access with the appropriate store management privilege.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to get shop categories for.
   * @returns {Promise<Object>} Response data.
   *  `k_shop_category` {string} Key of the created shop category.
   */
  WlClient.prototype.wlShopCategoryCategoryPost = function(params)
  {
    return this.request('/Wl/Shop/Category/Category.json', params || {}, 'POST');
  };

  /**
   * Returns information about the specified asset layout, including assets and custom shapes.
   *
   * Returns the full layout configuration including the asset list with positions and images, custom shapes with
   * coordinates and colors, and display settings such as grid dimensions and number visibility.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_resource_layout The key of the layout.
   * @returns {Promise<Object>} Response data.
   *  `a_resource` {Object[]} The list of assets. Every element contains the following keys:
   *  `a_shape_custom` {Object[]} A list of custom shapes. Every element is an array with the following keys:
   *  `a_shape_icon` {Object[]} A list of shapes and icons. Every element is an array with the following keys:
   *  `i_grid` {number} The grid size.
   *  `is_grid` {boolean} This will be `true` if snap to grid is enabled. Otherwise, this will be `false`.
   *  `k_resource_type` {string} The key of the asset category.
   *  `s_color_active` {string} The color for active assets. Hex encoding with prefix `#`.
   *  `show_name` {boolean} This will be `true` if asset names are displayed. Otherwise, this will be `fa...
   *  `show_number` {boolean} This will be `true` if asset numbers are displayed. Otherwise, this will be `...
   */
  WlClient.prototype.wlResourceLayoutLayout = function(params)
  {
    return this.request('/Wl/Resource/Layout/Layout.json', params || {}, 'GET');
  };

  /**
   * Returns assets list in the business.
   *
   * Returns all assets if `$id_category` is not specified or only certain category assets. Includes
   *   main information about assets.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_category Type of the resource.
   * @param {boolean} params.is_franchise Whether to return franchisee-created resources (if business is franchisor).
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `a_resource` {Object[]} Resources list:
   */
  WlClient.prototype.wlResourceResourceListList = function(params)
  {
    return this.request('/Wl/Resource/ResourceList/List.json', params || {}, 'GET');
  };

  /**
   * Deletes family relation between 2 users.
   *
   * Removes the relationship between the user identified by `uid` and the user identified by `uid_delete`
   * within the given business, then returns the updated list of relationships for `uid`.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_flow ID of the user behavior flow.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The key of the user whose relationships are being assessed.
   * @param {string} params.uid_delete The key of the related user who `uid` must be removed.
   * @returns {Promise<Object>} Response data.
   *  `a_relation` {Object[]} Information about the user's relationships. Every element has the following f...
   */
  WlClient.prototype.wlFamilyRelationRelationDelete = function(params)
  {
    return this.request('/Wl/Family/Relation/Relation.json', params || {}, 'DELETE');
  };

  /**
   * Gets relative list.
   *
   * Returns the list of all family relationships for the specified user within the given business, including
   * relationship type, reverse relationship type, name, and photo information for each related user.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_flow ID of the user behavior flow.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The key of the user whose relationships are being assessed.
   * @returns {Promise<Object>} Response data.
   *  `a_relation` {Object[]} Information about the user's relationships. Every element has the following f...
   */
  WlClient.prototype.wlFamilyRelationRelationGet = function(params)
  {
    return this.request('/Wl/Family/Relation/Relation.json', params || {}, 'GET');
  };

  /**
   * Adds to user `uid`
  relative `a_new`.
   *
   * Creates a bidirectional family relationship between the user identified by `uid` and the user specified in
   * `a_new`, then returns the updated list of relationships for `uid`.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_flow ID of the user behavior flow.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The key of the user whose relationships are being assessed.
   * @returns {Promise<Object>} Response data.
   *  `a_relation` {Object[]} Information about the user's relationships. Every element has the following f...
   */
  WlClient.prototype.wlFamilyRelationRelationPost = function(params)
  {
    return this.request('/Wl/Family/Relation/Relation.json', params || {}, 'POST');
  };

  /**
   * Gets relationships list.
   *
   * Returns all relationship types enabled for the given business, or all system-defined relationship types if no
   * business key is provided.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_business_relationships` {number[]} The relationship types in the business.
   */
  WlClient.prototype.wlFamilyRelationFamilyRelation = function(params)
  {
    return this.request('/Wl/Family/Relation/FamilyRelation.json', params || {}, 'GET');
  };

  /**
   * Deletes family relation between 2 users.
   *
   * Removes the relationship between the user identified by `uid` and the user identified by `uid_delete`
   * within the given business, then returns the updated list of relationships for `uid`.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_flow ID of the user behavior flow.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The key of the user whose relationships are being assessed.
   * @param {string} params.uid_delete The key of the related user who [RelationApi](/Wl/Family/Relation/Relation.json) must be removed.
   * @returns {Promise<Object>} Response data.
   *  `a_relation` {Object[]} Information about the user's relationships. Every element has the following f...
   */
  WlClient.prototype.wlFamilyRelationRelation72Delete = function(params)
  {
    return this.request('/Wl/Family/Relation/Relation72.json', params || {}, 'DELETE');
  };

  /**
   * Gets relative list.
   *
   * Returns the list of all family relationships for the specified user within the given business, including
   * relationship type, reverse relationship type, name, and photo information for each related user.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_flow ID of the user behavior flow.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The key of the user whose relationships are being assessed.
   * @returns {Promise<Object>} Response data.
   *  `a_relation` {Object[]} Information about the user's relationships. Every element has the following f...
   */
  WlClient.prototype.wlFamilyRelationRelation72Get = function(params)
  {
    return this.request('/Wl/Family/Relation/Relation72.json', params || {}, 'GET');
  };

  /**
   * Adds to user [RelationApi](/Wl/Family/Relation/Relation.json)
  relative [RelationApi](/Wl/Family/Relation/Relation.json).
   *
   * Creates a bidirectional family relationship between the user identified by `uid` and the user specified in
   * `a_new`, then returns the updated list of relationships for `uid`.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_flow ID of the user behavior flow.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The key of the user whose relationships are being assessed.
   * @returns {Promise<Object>} Response data.
   *  `a_relation` {Object[]} Information about the user's relationships. Every element has the following f...
   */
  WlClient.prototype.wlFamilyRelationRelation72Post = function(params)
  {
    return this.request('/Wl/Family/Relation/Relation72.json', params || {}, 'POST');
  };

  /**
   * Returns or changes the Autymate enrollment status for the specified business.
  Autymate specifically requested this method be a get.
   *
   * Authenticates the request using the business GUID, then either reads or updates the enrollment status
   * depending on the mode and the supplied `id_status` value. When activating enrollment, also provisions a
   * Professional subscription for the business if one is not already active.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_mode The mode of the request.
   * @param {number} params.id_status The new status of the enrollment. If `0`, the current status is returned.
   * @param {string} params.k_business The key of the business.
   * @param {string} params.s_guid The randomly generated 32 character string used to authenticate Autymate requests for the business.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `id_status` {number} List of statuses of an Autymate enrollment notification.
   */
  WlClient.prototype.wlIntegrationAutymateAutymateActivate = function(params)
  {
    return this.request('/Wl/Integration/Autymate/AutymateActivate.json', params || {}, 'GET');
  };

  /**
   * Gets the daily transaction data.
   *
   * Authenticates the request using the business GUID, runs the All Transactions report for the specified date,
   * and returns paginated rows augmented with Autymate-specific columns such as tax details, location address,
   * batch number, and payment method information.
   *
   * @param {Object} [params] Request parameters.
   * @param {number[]} params.a_pay_method_remove List of payment methods to filter out in the report.
   * @param {string} params.dl_date The date in local time to retrieve transactions for.
   * @param {number} params.i_page The page of the report, starting from 0.
   * @param {boolean} params.is_refresh Determines whether this report should be refreshed.
   * @param {string} params.k_business The key of the business for which the report must be generated.
   * @param {string} params.s_guid The randomly generated 32 character string used to authenticate requests.
   * @returns {Promise<Object>} Response data.
   *  `a_field` {string[]} The list of fields in this report.
   *  `a_row` {string[][]} The report data.
   *  `a_warning` {string[]} The warning list of the report, if applicable.
   *  `dtu_complete` {?string} The date and time when this report has completed generation.
   *  `dtu_queue` {?string} The date and time when this report was put in the generation queue.
   *  `dtu_start` {?string} The date and time when generation of this report was started.
   *  `id_report_status` {number} Lists statuses of reports from point of view of its generation.
   *  `is_more` {boolean} If `true` then there are more report rows to get. Otherwise, `false` if all r...
   *  `is_report_complete` {boolean} Determines whether this report is complete. If this report is accessed on the...
   */
  WlClient.prototype.wlIntegrationAutymateReport = function(params)
  {
    return this.request('/Wl/Integration/Autymate/Report.json', params || {}, 'GET');
  };

  /**
   * Gets status of the user in business for given list of identifiers.
   *
   * Accepts a list of SAML identifier strings and returns a map of each identifier to a boolean indicating
   * whether the corresponding user is active in their associated business. Requests with too many invalid
   * identifiers are rate-limited with a penalty block mechanism.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `a_result` {boolean[]} The key of the SAML identifier.
   */
  WlClient.prototype.wlIntegrationSamlSamlUserDeactivation = function(params)
  {
    return this.request('/Wl/Integration/Saml/SamlUserDeactivation.json', params || {}, 'POST');
  };

  /**
   * Returns country, region, state, city and location lists of the franchisor.
  This method returns all the information from the parent
  `get()` and the Curves territory ID.
   *
   * Extends the parent location list with the Curves-specific territory ID (`k_territory_id`) for each
   * franchisee location by joining against the Curves franchisee integration table.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_business_franchise_location Determines which locations should be returned.
   * @param {boolean} params.is_include_churn Determines whether to include churned/removed locations.
   * @param {boolean} params.is_include_non_api Determines whether to include locations marked to not be displayed on franchisor website.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_city_list` {Object[]} The city list. Each element has next structure:
   *  `a_country_list` {Object[]} The country list. Each element has next structure:
   *  `a_location_list` {Object[]} The location list. Each element has the next structure:
   *  `a_region_list` {Object[]} The region list. Each element has the next structure:
   *  `a_state_list` {Object[]} The state list. Each element has the next structure:
   */
  WlClient.prototype.wlIntegrationCurvesCurvesFranchiseLocation = function(params)
  {
    return this.request('/Wl/Integration/Curves/CurvesFranchiseLocation.json', params || {}, 'GET');
  };

  /**
   * Checks if the user can physically access the location.
   *
   * There are 3 scenarios where a user can be given access.
   * Scenario 1 - If a valid member ID used, for instance from a bar code scanner, then the user may have access.
   * Scenario 2 - If a valid uid is used and the user is a staff member, then the user may have access.
   * Scenario 3 - If a valid uid is used and the client has a session or gym access at this location, then the user may have access.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_location The location key.
   * @param {string} params.s_member The member ID.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `can_access` {boolean} Whether the specified user can access the location.
   */
  WlClient.prototype.wlIntegrationDragonFlyAccess = function(params)
  {
    return this.request('/Wl/Integration/DragonFly/Access.json', params || {}, 'GET');
  };

  /**
   * Gets list of coupons.
   *
   * Used to populate the gift card picker in the store and booking flows. Returns all gift card types
   * offered by the business. In franchise mode, gift cards from all franchise locations are included.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_franchise Whether to return franchisee-created coupons (if business is franchisor).
   * @param {boolean} params.is_frontend `true` to get only gift cards available for current user; `false` to get all gift cards.
   * @param {boolean} params.is_inactive_include A flag to include disabled items in the query result
   * @param {string} params.k_business The business key to retrieve a list of all the gift cards in a business.
   * @returns {Promise<Object>} Response data.
   *  `a_coupon` {Object[]} A list of gift cards. Every element has the following keys:
   */
  WlClient.prototype.wlCouponCouponListList = function(params)
  {
    return this.request('/Wl/Coupon/CouponList/List.json', params || {}, 'GET');
  };

  /**
   * Removes the association between a website client and a Microsoft account.
   *
   * Accepts the user's UID, verifies that the caller is the account owner, and unlinks the Microsoft
   * account from the user's profile.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.uid The client for whom the Microsoft account will be unlinked.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMicrosoftLoginMicrosoftLoginDelete = function(params)
  {
    return this.request('/Wl/Microsoft/Login/MicrosoftLogin.json', params || {}, 'DELETE');
  };

  /**
   * Collects data for the Microsoft login button.
   *
   * Called when rendering the "Sign in with Microsoft" button. Generates the OAuth 2.0 authorization URL
   * the button must link to. When a UID is provided, also reports whether that user already has a Microsoft
   * account linked, so the frontend can show "Link" or "Unlink" instead of the default sign-in label.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.uid The client for whom the Microsoft account will be unlinked.
   * @param {string} params.url_redirect The Redirect URI for external applications.
   * @returns {Promise<Object>} Response data.
   *  `is_exists` {boolean} If `true`, the user has a bound Microsoft account. Otherwise, this will be `f...
   *  `url_login` {string} The Microsoft OAuth 2.0 authorization link.
   */
  WlClient.prototype.wlMicrosoftLoginMicrosoftLoginGet = function(params)
  {
    return this.request('/Wl/Microsoft/Login/MicrosoftLogin.json', params || {}, 'GET');
  };

  /**
   * Authenticates a user via Microsoft OAuth for the specified business.
   *
   * Validates the business key, sets it as the current frontend business context, and then delegates to the
   * parent Microsoft OAuth flow to complete sign-in.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_external If authorization is performed in a third-party application, set this flag in case of authorizatio...
   * @param {string} params.url_redirect The Redirect URI for external applications.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMicrosoftLoginMicrosoftLoginPost = function(params)
  {
    return this.request('/Wl/Microsoft/Login/MicrosoftLogin.json', params || {}, 'POST');
  };

  /**
   * Returns list of search tags.
  This is public information and method does not require any level of privileges.
   *
   * Returns the complete list of system-wide search tags used for filtering businesses and
   * services in directory searches. No authentication or input parameters are required.
   *
   * @param {Object} [params] Request parameters.
   * @returns {Promise<Object>} Response data.
   *  `a_search_tag` {Object[]} A list of all the search tags.
   */
  WlClient.prototype.wlSearchTagSearchTagList = function(params)
  {
    return this.request('/Wl/Search/Tag/SearchTagList.json', params || {}, 'GET');
  };

  /**
   * Deletes a review.
   *
   * Checks that the caller has the required permission, removes the review, and recomputes the best reviews
   * for the associated business location.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_review The review key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlReviewReviewListReviewElementDelete = function(params)
  {
    return this.request('/Wl/Review/ReviewList/ReviewElement.json', params || {}, 'DELETE');
  };

  /**
   * Retrieves information about review item.
   *
   * Returns the review rating, text, date, author information, reply, and featured status for the specified review.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to which the review belongs.
   * @param {string} params.k_review The review key.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_review` {Object} Review data:
   */
  WlClient.prototype.wlReviewReviewListReviewElementGet = function(params)
  {
    return this.request('/Wl/Review/ReviewList/ReviewElement.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of reviews.
   *
   * Returns reviews for the specified location, or all reviews for the business if no location is given, with support
   * for filtering by user, ordering, and pagination.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} [params.i_page] If not specified, this request will return all review keys. If specified, this request will retur...
   * @param {?number} [params.id_order] The order in which the review should be arranged. One of the [ReviewOrderSid](#/components/schema...
   * @param {string} params.k_business Business key. If not specified, location key needs to be specified.
   * @param {string} params.k_location The key of the location to show reviews for. If not specified, business key should be specified.
   * @param {string} params.uid The user's key. WellnessLiving allows staff to check low-rated reviews before posting them. Staff...
   * @returns {Promise<Object>} Response data.
   *  `a_review` {Object[]} List of reviews. If passed `i_page` then the result will be full, otherwise i...
   */
  WlClient.prototype.wlReviewReviewListReviewList = function(params)
  {
    return this.request('/Wl/Review/ReviewList/ReviewList.json', params || {}, 'GET');
  };

  /**
   * Records a gym visit for the specified client at the given date and time.
   *
   * Validates access and input, creates a visit record for the client at the specified location, optionally
   * applies a membership promotion if payment is required, and returns the catalog URL if no promotion was
   * found and payment was requested.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location The location key.
   * @param {string} params.uid The key of the user making the gym visit.
   * @returns {Promise<Object>} Response data.
   *  `url_catalog` {string} Url to the business catalog with items that can be used to pay for the visit.
   */
  WlClient.prototype.wlGymVisitVisitAdd = function(params)
  {
    return this.request('/Wl/Gym/Visit/VisitAdd.json', params || {}, 'POST');
  };

  /**
   * Saves the share post data and returns the secret key for the shared object.
   *
   * Records that the user has shared the specified objects (purchases, bookings, locations, or
   * reviews) to a social network, and returns a secret token that can be appended to the
   * destination URL to deep-link directly to the shared items.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `s_secret` {string} Secret key for access shared object.
   */
  WlClient.prototype.wlSocialShareSocialShare = function(params)
  {
    return this.request('/Wl/Social/Share/SocialShare.json', params || {}, 'POST');
  };

  /**
   * Performs Facebook authorization within the context of the specified business.
   *
   * Validates that the given business is active, sets it as the current frontend context, and then
   * delegates to the parent Facebook login flow to authenticate the user.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlFacebookLoginFacebookLogin = function(params)
  {
    return this.request('/Wl/Facebook/Login/FacebookLogin.json', params || {}, 'POST');
  };

  /**
   * Deletes saved card.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key number used internally by WellnessLiving.
   * @param {string} params.k_pay_bank Pay bank key to delete.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.thothWlPayBankCardAddAddDelete = function(params)
  {
    return this.request('/Thoth/WlPay/Bank/Card/Add/Add.json', params || {}, 'DELETE');
  };

  /**
   * Gets code of bank card widget.
   * @deprecated Make card widget in client side using `RsPayBankCardEditWidget` class.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key number used internally by WellnessLiving.
   * @param {string} params.k_location The location key.
   * @param {string} params.k_pay_owner The payment owner ID. This is different from the user ID. It can be found with
   * @returns {Promise<Object>} Response data.
   *  `html_widget` {string} The HTML form containing the fields required to add a card.
   */
  WlClient.prototype.thothWlPayBankCardAddAddGet = function(params)
  {
    return this.request('/Thoth/WlPay/Bank/Card/Add/Add.json', params || {}, 'GET');
  };

  /**
   * Saves new bank card.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key number used internally by WellnessLiving.
   * @param {string} params.k_location The location key.
   * @param {string} params.k_pay_owner The payment owner ID. This is different from the user ID. It can be found with
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.thothWlPayBankCardAddAddPost = function(params)
  {
    return this.request('/Thoth/WlPay/Bank/Card/Add/Add.json', params || {}, 'POST');
  };

  /**
   * Restricts access to API for all sites, which are given in the list.
   *
   * Accepts a list of origin URLs (with optional API domain overrides), validates each URL, and removes
   * the matching entries from the allowed origins for the current application, then clears the origin cache.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.coreRequestApiApplicationOriginDelete = function(params)
  {
    return this.request('/Core/Request/Api/Application/Origin.json', params || {}, 'DELETE');
  };

  /**
   * Gets list of all sites, where usage of the API is allowed for the current application.
   *
   * Returns the list of allowed CORS origins for the current API application, where each key is an
   * origin URL and each value is an optional API domain used to proxy requests from that origin.
   *
   * @param {Object} [params] Request parameters.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {?string[]} A list of origins.
   */
  WlClient.prototype.coreRequestApiApplicationOriginGet = function(params)
  {
    return this.request('/Core/Request/Api/Application/Origin.json', params || {}, 'GET');
  };

  /**
   * Allows access to API for all sites, which are given in the list.
   *
   * Accepts a list of origin URLs (with optional API domain overrides), validates each URL and domain,
   * inserts or updates the entries in the allowed origins for the current application, then clears the origin cache.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.coreRequestApiApplicationOriginPut = function(params)
  {
    return this.request('/Core/Request/Api/Application/Origin.json', params || {}, 'PUT');
  };

  /**
   * Signs the user in using their login and hashed password.
   *
   * Accepts the user login, a password hash derived using the notepad obtained from [NotepadApi](/Core/Passport/Login/Enter/Notepad.json),
   * and an optional remember preference. Validates credentials, enforces CAPTCHA when too many failed
   * attempts have occurred, starts a session for the user, and returns a redirect URL if applicable.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `url_redirect` {string} An optional URL for redirection after the user has signed in to the web appli...
   */
  WlClient.prototype.corePassportLoginEnterEnter = function(params)
  {
    return this.request('/Core/Passport/Login/Enter/Enter.json', params || {}, 'POST');
  };

  /**
   * Generates notepad for user sign in form.
   *
   * Generates a cryptographic nonce (one-time random string) and stores it in the session so that the
   * client can hash the user's password with it before sending it to [EnterApi](/Core/Passport/Login/Enter/Enter.json). This prevents
   * replay attacks and avoids transmitting passwords in plain text.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.s_login] User login.
   * @param {string} params.s_type The session type to store the notepad in.
   * @returns {Promise<Object>} Response data.
   *  `id_region` {number} List of available data center regions.
   *  `s_hash` {string} The hash type.
   *  `s_notepad` {string} The notepad value, which is used to hash the user's password.
   */
  WlClient.prototype.corePassportLoginEnterNotepad = function(params)
  {
    return this.request('/Core/Passport/Login/Enter/Notepad.json', params || {}, 'GET');
  };

  /**
   * Validates the new user's data and sends a confirmation email to complete registration.
   *
   * Accepts the new user's name, email, and password, validates each field, stores the pending registration,
   * and sends a confirmation email with a link to complete registration via [RegisterConfirmApi](/Core/Passport/Login/Register/RegisterConfirm.json).
   * An optional application ID and custom confirmation URL may be provided.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `json_confirm_config` {string} JSON configuration for confirmation email.
   *  `url_confirm` {string} The URL to the confirmation page. This link is used in a confirmation email.
   */
  WlClient.prototype.corePassportLoginRegisterRegister = function(params)
  {
    return this.request('/Core/Passport/Login/Register/Register.json', params || {}, 'POST');
  };

  /**
   * Confirms email of a new user and completes registration.
   *
   * Accepts the email, login, and verification code obtained from the confirmation link sent by [RegisterApi](/Core/Passport/Login/Register/Register.json),
   * validates them against the pending registration record, creates the user account, and returns the new user's UID.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.text_code The unique registration code.
   * @param {string} params.text_login The user's login.
   * @param {string} params.text_mail The user's email.
   * @returns {Promise<Object>} Response data.
   *  `uid` {string} The key of the new registered user.
   */
  WlClient.prototype.corePassportLoginRegisterRegisterConfirm = function(params)
  {
    return this.request('/Core/Passport/Login/Register/RegisterConfirm.json', params || {}, 'POST');
  };

  /**
   * Signs user out.
   *
   * Requires the user to be signed in, fires a before-logout event allowing listeners to intercept or
   * handle the logout, then clears the current session. Throws an error if the user is authenticated
   * via SAML SSO, as API-based logout is not supported in that case.
   *
   * @param {Object} [params] Request parameters.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.corePassportLoginSignOutSignOut = function(params)
  {
    return this.request('/Core/Passport/Login/SignOut/SignOut.json', params || {}, 'POST');
  };

  /**
   * Returns a jwt token that can be used to log user.
   *
   * Requires the user to be signed in. Generates a signed JWT token tied to the current authorization
   * header and user ID that can be passed to other services to authenticate the user without sharing session cookies.
   *
   * @param {Object} [params] Request parameters.
   * @returns {Promise<Object>} Response data.
   *  `s_token` {string} Jwt token that allows to authenticate user.
   */
  WlClient.prototype.corePassportEnterJwtJwtToken = function(params)
  {
    return this.request('/Core/Passport/Enter/Jwt/JwtToken.json', params || {}, 'GET');
  };

  /**
   * Checks if email address exists.
   *
   * Used in registration and "forgot password" flows to give immediate feedback before the user submits
   * the full form. Returns `true` if a user account with the given email already exists, so the frontend
   * can prompt to sign in instead of registering.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.text_email The email address.
   * @returns {Promise<Object>} Response data.
   *  `is_exist` {boolean} Determines whether the email address exists.
   */
  WlClient.prototype.corePassportUserEmailEmailExist = function(params)
  {
    return this.request('/Core/Passport/User/Email/EmailExist.json', params || {}, 'GET');
  };

  /**
   * Gets schedule of business `k_business` for day
  `dt_date`.
   *
   * Returns all classes and appointments scheduled for the given business on the specified date,
   * sorted chronologically. Supports both single-day and date-range modes, and includes full
   * session details such as staff, visit counts, assets, and class images.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_config Configuration options for schedule.
   * @param {string} params.dl_end The end date of the range from which the list of schedule sessions should be retrieved.
   * @param {string} params.dl_start The start date of the range from which the list of scheduled sessions should be retrieved.
   * @param {string} params.dt_date The date of the sessions in Coordinated Universal Time (UTC) and MySQL format.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `a_schedule` {Object[]} The sessions present on the business schedule. These are sorted chronological...
   *  `is_virtual_service` {boolean} `true` - If the business has at least one virtual service, `false` - otherwise.
   */
  WlClient.prototype.wlScheduleScheduleListStaffAppScheduleList = function(params)
  {
    return this.request('/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json', params || {}, 'GET');
  };

  /**
   * Gets schedule of business [ScheduleListApi](/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json) for day
  [ScheduleListApi](/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json).
   *
   * Returns all classes and appointments scheduled for the given business on the specified date,
   * sorted chronologically. Supports both single-day and date-range modes, and includes full
   * session details such as staff, visit counts, assets, and class images.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_config Configuration options for schedule.
   * @param {string} params.dl_end The end date of the range from which the list of schedule sessions should be retrieved.
   * @param {string} params.dl_start The start date of the range from which the list of scheduled sessions should be retrieved.
   * @param {string} params.dt_date The date of the sessions in Coordinated Universal Time (UTC) and MySQL format.
   * @param {string} params.k_business Business key.
   * @param {string} params.text_token The security token.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `a_schedule` {Object[]} The sessions present on the business schedule. These are sorted chronological...
   *  `is_virtual_service` {boolean} `true` - If the business has at least one virtual service, `false` - otherwise.
   */
  WlClient.prototype.wlScheduleScheduleListStaffAppScheduleListByToken = function(params)
  {
    return this.request('/Wl/Schedule/ScheduleList/StaffApp/ScheduleListByToken.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about services in the current service category.
   *
   * Returns all services available for booking at the given location, optionally filtered by service
   *  category, book now tab, and client. Each service entry includes title, description, image, pricing,
   *  duration, staff availability, and age restriction details. Supports both frontend and backend modes.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_class_tab The class tab key to use to filter services. If empty, this can be found on the standard book tab.
   * @param {string[]} params.a_staff List of staff members to filter a result.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {?number} [params.i_height] Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {?number} [params.i_width] Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {boolean} params.is_backend `true` - return all active services for a certain location ignoring user age and other restrictions.
   * @param {boolean} params.is_tab_all `true` - search in all tabs.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.k_service_category The key of a service category to show information for.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_service` {Object} A list of services with information about them.
   *  `is_multiple_booking` {boolean} Whether services allow multiple appointment booking.
   *  `k_location` {string} Location to show available appointment booking schedule.
   */
  WlClient.prototype.wlAppointmentBookServiceServiceList52 = function(params)
  {
    return this.request('/Wl/Appointment/Book/Service/ServiceList52.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of information about service categories on the appointment booking page.
   *
   * Returns all service categories available at the given location, optionally filtered by book now tab.
   *  Each category includes its title and the list of available services. Supports both frontend and
   *  backend modes; in backend mode access is verified against the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {boolean} params.is_backend `true` - return all service categories for a certain location.
   * @param {boolean} params.is_flag_ignore Whether a flagged client is allowed to retrieve categories.
   * @param {boolean} params.is_tab_all `true` - search in all tabs.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_class_tab The class tab key used to filter services.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_category` {Object} A list of information about service categories.
   *  `is_client_flag` {boolean} `true` - if client has a flag, `false` - otherwise.
   *  `k_location` {string} Location to show available appointment booking schedule.
   */
  WlClient.prototype.wlAppointmentBookServiceCategory = function(params)
  {
    return this.request('/Wl/Appointment/Book/Service/Category.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about services in the current service category.
   *
   * Returns all services available for booking at the given location, optionally filtered by service
   *  category, book now tab, and client. Each service entry includes title, description, image, pricing,
   *  duration, staff availability, and age restriction details. Supports both frontend and backend modes.
   * @deprecated New version {@link \Wl\Appointment\Book\Service\ServiceList52Api} should be used instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_class_tab The class tab key to use to filter services. If empty, this can be found on the standard book tab.
   * @param {string[]} params.a_staff List of staff members to filter a result.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {?number} [params.i_height] Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {?number} [params.i_width] Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {boolean} params.is_backend `true` - return all active services for a certain location ignoring user age and other restrictions.
   * @param {boolean} params.is_tab_all `true` - search in all tabs.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_class_tab The class tab key to filter services. If empty or `0`, this can be found on the standard book now...
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.k_service_category The key of a service category to show information for.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_service` {Object} A list of services with information about them.
   *  `is_multiple_booking` {boolean} Whether services allow multiple appointment booking.
   *  `k_location` {string} Location to show available appointment booking schedule.
   */
  WlClient.prototype.wlAppointmentBookServiceServiceList = function(params)
  {
    return this.request('/Wl/Appointment/Book/Service/ServiceList.json', params || {}, 'GET');
  };

  /**
   * Checks whether a service can be booked by the given client at the given date, throwing an exception if booking is restricted.
   *
   * Validates the client's age against the service's age restrictions and checks the booking date
   *  against the service's booking window. Returns without data on success; throws exception with a descriptive message when booking is not allowed.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date Date of booking in MySQL format.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location The location key.
   * @param {string} params.k_service The service key.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlAppointmentBookServiceServiceCheck = function(params)
  {
    return this.request('/Wl/Appointment/Book/Service/ServiceCheck.json', params || {}, 'GET');
  };

  /**
   * Completes the appointment booking for one or more providers, optionally creating a new client.
   *
   * Accepts booking details for one or more providers in `a_book_data`,
   *  processes payment using the selected Purchase Option, creates appointment records, and sends
   *  booking confirmation notifications. A new client account can be created by supplying user
   *  details in `a_user` when no UID is provided.
   *
   * @param {Object} [params] Request parameters.
   * @param {number[]} params.a_pay The payment type for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/RsApp...
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {Object} params.a_user Data to create new users.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_appointment The appointment key.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_appointment` {Object[]} The booked appointments. Every element has the key:
   *  `a_login_activity_visit` {string[]} The activity IDs of bookings that have been made.
   *  `a_visit` {string[]} The visit IDs.
   *  `a_visit_provider` {string[][]} Keys of booked visits.
   */
  WlClient.prototype.wlAppointmentBookFinishFinishMultiple = function(params)
  {
    return this.request('/Wl/Appointment/Book/Finish/FinishMultiple.json', params || {}, 'POST');
  };

  /**
   * Loads data to prepare client side to complete booking.
   *
   * Returns notification settings (email, push, SMS) for the appointment creation confirmation
   *  so the client side can display the appropriate notification options before finalizing the booking.
   * @deprecated Use {@link \Wl\Appointment\Book\Finish\Finish47Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_notification` {Object} Information for sending an appointment notification.
   *  `k_location` {string} Location to show available appointment booking schedule.
   */
  WlClient.prototype.wlAppointmentBookFinishFinishGet = function(params)
  {
    return this.request('/Wl/Appointment/Book/Finish/Finish.json', params || {}, 'GET');
  };

  /**
   * Completes the appointment booking and processes payment for the client.
   *
   * Delegates to `post()` to handle a single appointment booking, mapping
   *  the legacy single-provider request fields to the multi-provider format. Creates an appointment
   *  record, applies the selected Purchase Option, and sends the booking confirmation notification.
   * @deprecated Use {@link \Wl\Appointment\Book\Finish\Finish47Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_book_data All data from the provider model `Wl_Appointment_Book_ProviderModel`:
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {Object} params.a_user Data to create new user.
   * @param {number} params.id_pay The payment type ID for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/Rs...
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_appointment The appointment key.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {?string} [params.k_timezone] Key of timezone.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_appointment` {Object[]} The keys of the booked appointments.
   *  `a_login_activity_visit` {string[]} The activity keys of the bookings that were made.
   *  `a_visit` {string[]} The keys of visits.
   *  `a_visit_payment` {Object[]} Values are arrays with next keys:
   */
  WlClient.prototype.wlAppointmentBookFinishFinishPost = function(params)
  {
    return this.request('/Wl/Appointment/Book/Finish/Finish.json', params || {}, 'POST');
  };

  /**
   * Loads data to prepare client side to complete booking.
   *
   * Returns notification settings (email, push, SMS) for the appointment creation confirmation
   *  so the client side can display the appropriate notification options before finalizing the booking.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_notification` {Object} Information for sending an appointment notification.
   *  `k_location` {string} Location to show available appointment booking schedule.
   */
  WlClient.prototype.wlAppointmentBookFinishFinish47Get = function(params)
  {
    return this.request('/Wl/Appointment/Book/Finish/Finish47.json', params || {}, 'GET');
  };

  /**
   * Completes the appointment booking and logs variable counts for diagnostic purposes.
   *
   * Delegates to the parent `post()` implementation after logging the total variable counts
   *  from GET, POST, and the booking data array. The logging is temporary and intended to diagnose
   *  "Too many variables" errors in production.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {Object} params.a_user Data to create new user.
   * @param {number} params.id_pay The payment type ID for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/Rs...
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_appointment The appointment key.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {?string} [params.k_timezone] Key of timezone.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_appointment` {Object[]} The keys of the booked appointments.
   *  `a_login_activity_visit` {string[]} The activity keys of the bookings that were made.
   *  `a_visit` {string[]} The keys of visits.
   *  `a_visit_payment` {Object[]} Values are arrays with next keys:
   */
  WlClient.prototype.wlAppointmentBookFinishFinish47Post = function(params)
  {
    return this.request('/Wl/Appointment/Book/Finish/Finish47.json', params || {}, 'POST');
  };

  /**
   * Retrieves a list of information about available purchase options.
   *
   * Returns all Purchase Options (memberships, packages, passes) the given client can use to pay for
   *  the specified appointment at the given location, including pricing details and eligibility status.
   *  Also returns options that can be purchased on the spot during booking.
   * @deprecated Use {@link \Wl\Appointment\Book\Purchase\Purchase72Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_service List of selected services without current `k_service`.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {string} params.dt_date The date to use to check for expiration of Purchase Options.
   * @param {number} params.i_duration The asset booking duration.
   * @param {?number} [params.i_height] Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {?number} [params.i_width] Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` - get all Purchase Options suitable for appointment.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {?string} [params.k_login_promotion] The Purchase Option ID used to pay for the appointment.
   * @param {string} params.k_resource The resource key.
   * @param {string} params.k_service The service key used to select available Purchase Options.
   * @param {?string} [params.k_timezone] The timezone key for `dt_date`.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_login_prize` {Object} Data about the login prize which can be used to pay for service.
   *  `a_login_promotion` {Object[]} A list of the client's login promotions that can be applied to a given service.
   *  `a_purchase` {Object[]} An array with information about available Purchase Options.
   *  `a_reward_prize` {Object} List of redeemable prizes which can be used to pay for service.
   *  `a_session_pass` {Object} Session pass information in a case if user books same appointment second time...
   *  `is_single_default` {boolean} Indicates if drop-in rate should be the default purchase option.
   *  `k_location` {string} Location to show available appointment booking schedule.
   *  `k_login_promotion` {?string} The Purchase Option ID used to pay for the appointment.
   *  `k_promotion_default` {string} Default promotion key.
   *  `text_login_promotion` {string} Login promotion title suitable to pay for the services.
   */
  WlClient.prototype.wlAppointmentBookPurchasePurchase = function(params)
  {
    return this.request('/Wl/Appointment/Book/Purchase/Purchase.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of information about available purchase options.
   *
   * Extends `get()` to also support rescheduling an existing appointment by
   *  accepting an optional appointment key. When a key is provided, the existing appointment is
   *  validated and its current Purchase Option usage is taken into account when calculating
   *  eligibility for available options.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_service List of selected services without current [PurchaseApi](/Wl/Appointment/Book/Purchase/Purchase.js...
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {string} params.dt_date The date to use to check for expiration of Purchase Options.
   * @param {number} params.i_duration The asset booking duration.
   * @param {?number} [params.i_height] Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {?number} [params.i_width] Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` - get all Purchase Options suitable for appointment.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {?string} [params.k_appointment] Appointment key.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {?string} [params.k_login_promotion] The Purchase Option ID used to pay for the appointment.
   * @param {string} params.k_resource The resource key.
   * @param {string} params.k_service The service key used to select available Purchase Options.
   * @param {?string} [params.k_timezone] The timezone key for [PurchaseApi](/Wl/Appointment/Book/Purchase/Purchase.json).
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_login_prize` {Object} Data about the login prize which can be used to pay for service.
   *  `a_login_promotion` {Object[]} A list of the client's login promotions that can be applied to a given service.
   *  `a_purchase` {Object[]} An array with information about available Purchase Options.
   *  `a_reward_prize` {Object} List of redeemable prizes which can be used to pay for service.
   *  `a_session_pass` {Object} Session pass information in a case if user books same appointment second time...
   *  `is_single_default` {boolean} Indicates if drop-in rate should be the default purchase option.
   *  `k_location` {string} Location to show available appointment booking schedule.
   *  `k_login_promotion` {?string} The Purchase Option ID used to pay for the appointment.
   *  `k_promotion_default` {string} Default promotion key.
   *  `text_login_promotion` {string} Login promotion title suitable to pay for the services.
   */
  WlClient.prototype.wlAppointmentBookPurchasePurchase72 = function(params)
  {
    return this.request('/Wl/Appointment/Book/Purchase/Purchase72.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of available appointment booking schedule.
   *
   * Returns available time slots for the specified service, location, staff member, and date range.
   *  Each slot includes the start time, duration, available capacity, and staff information. Supports
   *  both frontend and backend modes, as well as asset bookings and back-to-back scheduling.
   * @deprecated Use {@link \Wl\Appointment\Book\Schedule\DayTime73Api}
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {string} params.dt_date The date to show the available appointment booking schedule.
   * @param {number} params.i_duration The duration of the asset booking or custom appointment duration in minutes. Zero in case of serv...
   * @param {number} params.i_index An index of the selected asset. `0` for booking of service or if asset is not on layout.
   * @param {number} params.id_gender_staff The ID of the staff member's gender.
   * @param {boolean} params.is_back_to_back Determines whether multiple appointments are booked in back-to-back mode.
   * @param {boolean} params.is_staff `true` if the request is made by staff member; in this case booking policy restrictions are ignored.
   * @param {boolean} params.is_tab_all `true` - search in all tabs.
   * @param {boolean} params.is_unavailable `true` - return service categories that have no staff members able to conduct them.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {?string} [params.k_class_tab] Current booking tab.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.k_resource The resource key to show which days are available for booking.
   * @param {string} params.k_service The service key used for showing the available appointment booking schedule.
   * @param {string} params.k_staff The staff member key used for showing the available appointment booking schedule.
   * @param {?string} [params.k_timezone] Key of timezone.
   * @param {string} params.s_appointment The staff key to show what days are available for booking.
   * @param {string} params.s_product A list of service add-ons keys(encoded as JSON string).
   * @param {string} params.uid The user key.
   * @param {string} params.uid_staff The staff user key used for showing the available appointment booking schedule.
   * @returns {Promise<Object>} Response data.
   *  `a_time` {Object} An array with a schedule of available appointment booking times.
   *  `dt_date` {string} The date to show the available appointment booking schedule.
   *  `i_capacity` {?number} Maximum number of clients that can simultaneously book this service.
   *  `i_capacity_waitlist` {?number} Maximum number of clients that can be placed on the waitlist for this service.
   *  `is_waitlist` {boolean} Whether list of available times contains slots with only waitlist booking ava...
   *  `k_location` {string} Location to show available appointment booking schedule.
   */
  WlClient.prototype.wlAppointmentBookScheduleDayTime = function(params)
  {
    return this.request('/Wl/Appointment/Book/Schedule/DayTime.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list with all calendar days in specified period with available and unavailable appointment booking schedule.
   *
   * Returns each day in the requested month marked as available or unavailable for booking the given
   *  service at the given location. Availability is determined by the business schedule, holidays,
   *  and staff availability for the selected date range.
   * @deprecated Use {@link \Wl\Appointment\Book\Schedule\Calendar73Api}
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {string} params.dt_date The date to show the available appointment booking schedule.
   * @param {number} params.i_duration The duration of the asset booking or custom appointment duration in minutes. Zero in case of serv...
   * @param {number} params.i_index An index of the selected asset. `0` for booking of service or if asset is not on layout.
   * @param {number} params.id_gender_staff The ID of the staff member's gender.
   * @param {boolean} params.is_back_to_back Determines whether multiple appointments are booked in back-to-back mode.
   * @param {boolean} params.is_month_view If calendar should be displayed in month view mode.
   * @param {boolean} params.is_staff `true` if the request is made by staff member; in this case booking policy restrictions are ignored.
   * @param {boolean} params.is_tab_all `true` - search in all tabs.
   * @param {boolean} params.is_unavailable `true` - return service categories that have no staff members able to conduct them.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {?string} [params.k_class_tab] Current booking tab.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.k_resource The resource key to show which days are available for booking.
   * @param {string} params.k_service The service key used for showing the available appointment booking schedule.
   * @param {string} params.k_staff The staff member key used for showing the available appointment booking schedule.
   * @param {?string} [params.k_timezone] Key of timezone.
   * @param {string} params.s_appointment The staff key to show what days are available for booking.
   * @param {string} params.s_product A list of service add-ons keys(encoded as JSON string).
   * @param {string} params.uid The user key.
   * @param {string} params.uid_staff The staff user key used for showing the available appointment booking schedule.
   * @returns {Promise<Object>} Response data.
   *  `a_date` {Object[]} A list with all calendar days in the specified month with
   *  `a_time` {Object} An array with a schedule of available appointment booking times.
   *  `a_timezone_data` {Object} Information about timezone.
   *  `a_week_name` {Object} Array with short week day's names (2 letters, i.e. 'Fr') for calendar month v...
   *  `can_backwards` {boolean} Whether previous calendar period can be shown (start of shown period later th...
   *  `dt_date` {string} The date to show the available appointment booking schedule.
   *  `i_capacity` {?number} Maximum number of clients that can simultaneously book this service.
   *  `i_capacity_waitlist` {?number} Maximum number of clients that can be placed on the waitlist for this service.
   *  `i_week_end` {number} A class for the days of the week.
   *  `i_week_start` {number} A class for the days of the week.
   *  `is_waitlist` {boolean} Whether list of available times contains slots with only waitlist booking ava...
   *  `k_location` {string} Location to show available appointment booking schedule.
   */
  WlClient.prototype.wlAppointmentBookScheduleCalendar = function(params)
  {
    return this.request('/Wl/Appointment/Book/Schedule/Calendar.json', params || {}, 'GET');
  };

  /**
   * Finds and returns the next available date for appointment booking starting from the given date.
   *
   * Searches forward from the specified start date until it finds a day with at least one available
   *  time slot for the given service, location, and optional staff member. Returns the first available
   *  date so the client side can pre-select it in the booking calendar. This request may take longer
   *  than usual on production and uses an extended execution time limit.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {string} params.dt_date Start date to search next available date in MySQL format. If empty, the search will start from th...
   * @param {number} params.i_duration The duration of the asset booking or custom appointment duration in minutes. Zero in case of serv...
   * @param {number} params.i_index An index of the selected asset. `0` for booking of service or if asset is not on layout.
   * @param {number} params.id_gender_staff The ID of the staff member's gender.
   * @param {boolean} params.is_back_to_back Determines whether multiple appointments are booked in back-to-back mode.
   * @param {boolean} params.is_staff `true` if the request is made by staff member; in this case booking policy restrictions are ignored.
   * @param {boolean} params.is_tab_all `true` - search in all tabs.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {?string} [params.k_class_tab] Current booking tab.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.k_resource The resource key to show which days are available for booking.
   * @param {string} params.k_service The service key used for showing the available appointment booking schedule.
   * @param {?string} [params.k_timezone] Key of timezone.
   * @param {string} params.s_appointment The staff key to show what days are available for booking.
   * @param {string} params.s_product A list of service add-ons keys(encoded as JSON string).
   * @param {string} params.uid The user key.
   * @param {string} params.uid_staff The staff user key used for showing the available appointment booking schedule.
   * @returns {Promise<Object>} Response data.
   *  `dt_date` {string} Start date to search next available date in MySQL format. If empty, the searc...
   *  `dt_next` {string} Next available date in MySQL format.
   *  `i_capacity` {?number} Maximum number of clients that can simultaneously book this service.
   *  `i_capacity_waitlist` {?number} Maximum number of clients that can be placed on the waitlist for this service.
   *  `is_waitlist` {boolean} Whether list of available times contains slots with only waitlist booking ava...
   *  `k_location` {string} Location to show available appointment booking schedule.
   */
  WlClient.prototype.wlAppointmentBookScheduleNextAvailableDay = function(params)
  {
    return this.request('/Wl/Appointment/Book/Schedule/NextAvailableDay.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about assets in the current asset category.
   *
   * Returns the list of bookable assets at the given location, optionally filtered by category and book now tab.
   *  When a date and time are provided, only assets available at that time are included and busy asset slots
   *  are returned in `a_asset_busy`. Supports both frontend and backend modes.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dtl_date The selected date and time of the asset booking. It is used in cases when the business booking po...
   * @param {number} params.i_image_height Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.i_image_width Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.id_mode Mode type, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend This is `true` if asset categories are loaded for back-end mode. Otherwise, this will be `false` ...
   * @param {boolean} params.is_tab_all `true` - search in all tabs.
   * @param {string} params.k_appointment Key of the appointment, if we reschedule existing appointment.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_class_tab The class tab key used to filter assets.
   * @param {string} params.k_location The location key.
   * @param {string} params.k_resource_category The asset category key to show information for.
   * @param {string} params.k_timezone Timezone of date and time of asset booking.
   * @param {?string} [params.uid] Client to get information for.
   * @returns {Promise<Object>} Response data.
   *  `a_asset` {Object[]} A list of information about assets:
   *  `a_asset_busy` {string|boolean[][]} A list of reserved assets.
   *  `k_resource_layout` {string} The asset layout key.
   */
  WlClient.prototype.wlAppointmentBookAssetAssetList = function(params)
  {
    return this.request('/Wl/Appointment/Book/Asset/AssetList.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of information about asset categories for the appointment booking page.
   *
   * Returns all asset categories available at the given location, optionally filtered by book now tab.
   *  Each category includes its title and a flag indicating whether all its assets are hidden in
   *  the White Label mobile application. Supports both frontend and backend modes.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, asset categories are loaded for backend mode. Otherwise, this will be `false` if asset...
   * @param {boolean} params.is_tab_all `true` - search in all tabs.
   * @param {string} params.k_class_tab The class tab key to use for filtering services.
   * @param {string} params.k_location The key of the location to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_category` {Object[]} A list of information about asset categories.
   */
  WlClient.prototype.wlAppointmentBookAssetCategory = function(params)
  {
    return this.request('/Wl/Appointment/Book/Asset/Category.json', params || {}, 'GET');
  };

  /**
   * Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals.
   *
   * Returns the full breakdown of amounts owed for the booking, including available Purchase Options,
   *  applicable discount codes, surcharge amounts, and the final total. Intended to be called before
   *  submitting payment so the client side can display a pricing summary to the user.
   * @deprecated Use {@link \Wl\Appointment\Book\Payment\PaymentPostApi} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_book_data Information detailing an appointment booking:
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {number} params.id_mode The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid).
   * @param {number} params.id_purchase_item The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid).
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {?string} [params.k_business] The business key. Currently used only with `k_session_pass` variable.
   * @param {string} params.k_id The item key. Depends on `id_purchase_item` property.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.k_login_promotion The login promotion key.
   * @param {string} params.k_session_pass Session pass key.
   * @param {string} params.m_variable_price Variable price. Is set only during booking an appointment with variable type of the price
   * @param {string} params.s_unique_key Service unique key.
   * @param {string} params.text_coupon_code Gift card code.
   * @param {string} params.text_discount_code The discount code to be applied to the purchase.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_promotion_data` {Object[]} Information about selected Purchase Options.
   *  `a_purchase` {Object[]} Information about selected purchase items.
   *  `k_location` {string} Location to show available appointment booking schedule.
   *  `m_coupon` {string} Gift card amount.
   *  `m_discount` {string} Discount amount.
   *  `m_surcharge` {string} Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper).
   *  `m_surcharge_ach` {string} Surcharge amount calculated for money transfers from account: ACH, Direct Entry.
   *  `m_tax` {string} The tax of service.
   *  `m_total` {string} The total cost of the purchase.
   */
  WlClient.prototype.wlAppointmentBookPaymentPaymentGet = function(params)
  {
    return this.request('/Wl/Appointment/Book/Payment/Payment.json', params || {}, 'GET');
  };

  /**
   * Allows to pay an appointment or appointment purchase option for the client.
   *
   * Accepts payment method and booking data, charges the client for the appointment or the selected
   *  Purchase Option, and records the transaction. Requires the client to be authenticated and the
   *  booking data to include a valid service or asset key.
   * @deprecated Use {@link \Wl\Appointment\Book\Payment\PaymentPostApi} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_book_data Information detailing an appointment booking:
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {number} params.id_mode The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid).
   * @param {number} params.id_purchase_item The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid).
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_id The item key. Depends on `id_purchase_item` property.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.text_coupon_code Gift card code.
   * @param {string} params.text_discount_code The discount code to be applied to the purchase.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_purchase_item` {?string[]} The purchase item keys from the database.
   *  `id_pay` {number} The possible payment types an appointment can have.
   *  `k_login_activity_purchase` {string} The key of activity of the purchase made.
   *  `k_login_prize` {string} Login prize key. In case when appointment paid by reward prize, there is the ...
   */
  WlClient.prototype.wlAppointmentBookPaymentPaymentPost = function(params)
  {
    return this.request('/Wl/Appointment/Book/Payment/Payment.json', params || {}, 'POST');
  };

  /**
   * Calculates pricing information for a batch of appointment bookings, including taxes, discounts, surcharges, and per-provider totals.
   *
   * Returns the full pricing breakdown for all providers specified in the booking data, including
   *  available Purchase Options, applicable discount codes, surcharge amounts, and the final total
   *  for each provider. Intended to be called before submitting payment so the client side can
   *  display a pricing summary.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_book_data The booking process information:
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {number} params.id_mode The ID of the source mode. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.text_coupon_code The gift card code.
   * @param {string} params.text_discount_code The discount code.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_promotion_data` {Object} Information about the selected login promotion.
   *  `a_purchase` {Object} Fields refer to strings in the format `id_purchase_item-k_id`. Values refer t...
   *  `a_total` {string[]} The list of amounts to pay for appointments from the batch, with taxes and wi...
   *  `k_location` {string} Location to show available appointment booking schedule.
   *  `m_coupon` {string} The gift card amount.
   *  `m_discount` {string} The discount amount.
   *  `m_surcharge` {string} Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper).
   *  `m_surcharge_ach` {string} Surcharge amount calculated for money transfers from account: ACH, Direct Entry.
   *  `m_tax` {string} The amount of tax to pay.
   *  `m_total` {string} The price of the service, with taxes and without surcharges.
   */
  WlClient.prototype.wlAppointmentBookPaymentPaymentMultipleGet = function(params)
  {
    return this.request('/Wl/Appointment/Book/Payment/PaymentMultiple.json', params || {}, 'GET');
  };

  /**
   * Allows to pay an appointment or appointment purchase option for the client.
   *
   * Accepts payment method and multi-provider booking data, charges the client for all appointments
   *  or selected Purchase Options in the batch, and records the transactions. Requires the client
   *  to be authenticated and each provider entry to include a valid service or asset key with date.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {number} params.id_mode The ID of the source mode. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.text_coupon_code The gift card code.
   * @param {string} params.text_discount_code The discount code.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_login_prize` {string[]} The list of redeemed prizes.
   *  `a_pay` {number[]} The payment type for the appointment. One of the [RsAppointmentPaySid](#/comp...
   *  `a_purchase_item` {?string[][]} The keys of purchased items.
   *  `k_login_activity_purchase` {string} Key of the activity for the purchase made. This will be empty if no purchase ...
   */
  WlClient.prototype.wlAppointmentBookPaymentPaymentMultiplePost = function(params)
  {
    return this.request('/Wl/Appointment/Book/Payment/PaymentMultiple.json', params || {}, 'POST');
  };

  /**
   * Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals.
   *
   * Returns the full breakdown of amounts owed for the booking, including available Purchase Options,
   *  applicable discount codes, surcharge amounts, and the final total. Intended to be called before
   *  submitting payment so the client side can display a pricing summary to the user.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {number} params.id_mode The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid).
   * @param {number} params.id_purchase_item The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid).
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {?string} [params.k_business] The business key. Currently used only with [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json...
   * @param {string} params.k_id The item key. Depends on [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json) property.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.k_login_promotion The login promotion key.
   * @param {string} params.k_session_pass Session pass key.
   * @param {string} params.m_variable_price Variable price. Is set only during booking an appointment with variable type of the price
   * @param {string} params.s_unique_key Service unique key.
   * @param {string} params.text_coupon_code Gift card code.
   * @param {string} params.text_discount_code The discount code to be applied to the purchase.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_promotion_data` {Object[]} Information about selected Purchase Options.
   *  `a_purchase` {Object[]} Information about selected purchase items.
   *  `k_location` {string} Location to show available appointment booking schedule.
   *  `m_coupon` {string} Gift card amount.
   *  `m_discount` {string} Discount amount.
   *  `m_surcharge` {string} Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper).
   *  `m_surcharge_ach` {string} Surcharge amount calculated for money transfers from account: ACH, Direct Entry.
   *  `m_tax` {string} The tax of service.
   *  `m_total` {string} The total cost of the purchase.
   */
  WlClient.prototype.wlAppointmentBookPaymentPaymentPostGet = function(params)
  {
    return this.request('/Wl/Appointment/Book/Payment/PaymentPost.json', params || {}, 'GET');
  };

  /**
   * Allows to pay an appointment or appointment purchase option for the client.
   *
   * Accepts payment method and booking data, charges the client for the appointment or the selected
   *  Purchase Option, and records the transaction. Requires the client to be authenticated and the
   *  booking data to include a valid service or asset key.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {number} params.id_mode The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid).
   * @param {number} params.id_purchase_item The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid).
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_id The item key. Depends on [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json) property.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.text_coupon_code Gift card code.
   * @param {string} params.text_discount_code The discount code to be applied to the purchase.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_purchase_item` {?string[]} The purchase item keys from the database.
   *  `id_pay` {number} The possible payment types an appointment can have.
   *  `k_login_activity_purchase` {string} The key of activity of the purchase made.
   *  `k_login_prize` {string} Login prize key. In case when appointment paid by reward prize, there is the ...
   */
  WlClient.prototype.wlAppointmentBookPaymentPaymentPostPost = function(params)
  {
    return this.request('/Wl/Appointment/Book/Payment/PaymentPost.json', params || {}, 'POST');
  };

  /**
   * Retrieves questions for the current service.
   *
   * Returns the list of intake questions defined for the specified service that the client must
   *  answer before completing an appointment booking. Each question includes its text, a stable
   *  hash key for matching answers, and input size metadata.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_service The service key used for retrieving questions.
   * @returns {Promise<Object>} Response data.
   *  `a_question` {Object[]} A list of questions for the service. Each element contains:
   */
  WlClient.prototype.wlAppointmentBookQuestionQuestion = function(params)
  {
    return this.request('/Wl/Appointment/Book/Question/Question.json', params || {}, 'GET');
  };

  /**
   * Retrieves an information about staff members for the current service.
   *
   * Returns the list of staff members who can perform the specified service at the given location
   *  on the specified date and time. Each entry includes the staff member's name, image, gender,
   *  and availability. An 'any staff' option is included when the service allows random staff assignment.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date The date/time of the appointment selected by user, in the location's time zone.
   * @param {?number} [params.i_duration_custom] Custom appointment duration in minutes.
   * @param {number} params.id_role User role by whom this api called.
   * @param {boolean} params.is_unavailable `true` - returns service categories that have no staff members available to conduct them.
   * @param {string} params.k_appointment_ignore Key of appointment which must be ignored when searches available staff.
   * @param {string} params.k_location The key of the location.
   * @param {string} params.k_service The key of a service for which to show information.
   * @param {?string} [params.k_timezone] User's timezone.
   * @param {?string} [params.uid] The user key for whom the service is booking.
   * @returns {Promise<Object>} Response data.
   *  `a_staff` {Object[]} A list of staff members with information about them.
   *  `can_book_unavailable_staff` {boolean} Can staff booked unavailable staff.
   *  `has_gender` {boolean} Determines whether to select the staff member's gender for the appointment.
   *  `has_staff` {boolean} Determines whether to select staff member(s) for the appointment.
   *  `is_gender_different` {boolean} Determines if the staff list has male and female members.
   */
  WlClient.prototype.wlAppointmentBookStaffList = function(params)
  {
    return this.request('/Wl/Appointment/Book/Staff/List.json', params || {}, 'GET');
  };

  /**
   * Retrieves list of available service add-ons.
   *
   * Returns active add-on products for the specified service and location, filtered by the given
   *  client's login type when a UID is provided. Products with a purchase restriction that does not
   *  match the client type are excluded from the result.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_location The key of a location where appointment is going to be booked.
   * @param {string} params.k_service The key of a service to show information for.
   * @param {?string} [params.uid] The key of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_product` {Object[]} A list service add-ons.
   */
  WlClient.prototype.wlAppointmentBookProductProduct62 = function(params)
  {
    return this.request('/Wl/Appointment/Book/Product/Product62.json', params || {}, 'GET');
  };

  /**
   * Retrieves list of available service add-ons.
   *
   * Returns all active add-on products available for the specified service, including title, image,
   *  price, and quantity information. Results are not filtered by client type; use [Product62Api](/Wl/Appointment/Book/Product/Product62.json)
   *  when filtering by client login type is required.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_service The key of a service to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_product` {Object[]} A list service add-ons.
   */
  WlClient.prototype.wlAppointmentBookProductProduct = function(params)
  {
    return this.request('/Wl/Appointment/Book/Product/Product.json', params || {}, 'GET');
  };

  /**
   * Returns available purchase options, existing client promotions, session passes, and prizes for the specified session.
   *
   * Loads all purchase options that can be used to book the specified class period for the given user, including
   * existing login promotions with remaining session counts, new purchasable options, reward prizes, and login prizes.
   * Returns pricing, image, program category, and availability data for each option.
   * @deprecated Use {@link \Wl\Book\Process\Purchase\Purchase56Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_login_promotion_group A list of existing purchase options that were selected for previous clients (group).
   * @param {string[]} params.a_session The list of sessions being booked.
   * @param {string[]} params.a_session_wait_list_unpaid The selected sessions on the wait list that are unpaid.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.i_image_height The image height in pixels. Specify this value if you need image to be returned in specific size.
   * @param {number} params.i_image_width The image width in pixels. Specify this value if you need image to be returned in specific size.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_card_authorize Determines if the client must authorize the credit card.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {?string} [params.k_business] The business key.
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_login_prize` {Object} Data about the login prize which can be used to pay for service.
   *  `a_login_promotion` {Object[]} A list of the client's login promotions that can be applied to a given service.
   *  `a_purchase` {Object[]} A list of Purchase Options that are available for the session(s) being booked...
   *  `a_reward_prize` {Object[]} List of redeemable prizes which can be used to pay for service.
   *  `a_session_pass` {Object[]} The list of session passes that might be used in booking process.
   *  `is_single_default` {boolean} Indicates if the drop-in rate should be the default promotion.
   *  `k_promotion_default` {string} The default Purchase Option key.
   */
  WlClient.prototype.wlBookProcessPurchasePurchase = function(params)
  {
    return this.request('/Wl/Book/Process/Purchase/Purchase.json', params || {}, 'GET');
  };

  /**
   * Returns the pricing breakdown (totals, taxes, and discounts) for the given list of purchase items.
   *
   * Validates each item in `a_purchase_item` (type, key, installment eligibility, and prize applicability),
   * applies discount codes, login-type discounts, and installment adjustments, then accumulates price, subtotal,
   * discount, tax, and cost totals across all items and returns them as result fields.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_purchase_item A list of purchase items. Each item is an associative array with the following keys:
   * @param {?string} [params.dtu_date] Date/time of session is booking.
   * @param {string} params.k_class_period The key of the session to check for booking availability.
   * @param {string} params.k_location The key of the location in which the purchase is made.
   * @param {string} params.text_discount_code The discount code.
   * @param {string} params.uid The key of the current user.
   * @returns {Promise<Object>} Response data.
   *  `a_tax` {string[]} A list of taxes for the given purchase options.
   *  `m_cost` {string} The total cost of the given purchase options.
   *  `m_discount` {string} The amount of the whole discount for the given purchase options.
   *  `m_discount_code` {string} The discount amount provided by a discount code for the given purchase options.
   *  `m_discount_login` {string} The discount amount for the client type for the given purchase options.
   *  `m_price` {string} The price of the given purchase options (with or without taxes, depending on ...
   *  `m_subtotal` {string} The amount of subtotal for the given purchase options.
   *  `m_tax` {string} The amount of taxes for the given purchase options.
   */
  WlClient.prototype.wlBookProcessPurchasePurchaseElementGroup = function(params)
  {
    return this.request('/Wl/Book/Process/Purchase/PurchaseElementGroup.json', params || {}, 'GET');
  };

  /**
   * Returns available purchase options for the specified session, decoding JSON-encoded group promotion and session inputs.
   *
   * Deserializes the JSON-encoded group login-promotion list and session selection, then delegates to the parent
   * to return the purchase options available for the current client and session.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_login_promotion_group A list of existing purchase options that were selected for previous clients (group).
   * @param {string[]} params.a_session The list of sessions being booked.
   * @param {string[]} params.a_session_wait_list_unpaid The selected sessions on the wait list that are unpaid.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.i_image_height The image height in pixels. Specify this value if you need image to be returned in specific size.
   * @param {number} params.i_image_width The image width in pixels. Specify this value if you need image to be returned in specific size.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_card_authorize Determines if the client must authorize the credit card.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.json_login_promotion_group A list of existing purchase options that were selected for previous clients (group).
   * @param {string} params.json_session The selected sessions.
   * @param {?string} [params.k_business] The business key.
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_login_prize` {Object} Data about the login prize which can be used to pay for service.
   *  `a_login_promotion` {Object[]} A list of the client's login promotions that can be applied to a given service.
   *  `a_purchase` {Object[]} A list of Purchase Options that are available for the session(s) being booked...
   *  `a_reward_prize` {Object[]} List of redeemable prizes which can be used to pay for service.
   *  `a_session_pass` {Object[]} The list of session passes that might be used in booking process.
   *  `is_single_default` {boolean} Indicates if the drop-in rate should be the default promotion.
   *  `k_promotion_default` {string} The default Purchase Option key.
   */
  WlClient.prototype.wlBookProcessPurchasePurchase56 = function(params)
  {
    return this.request('/Wl/Book/Process/Purchase/Purchase56.json', params || {}, 'GET');
  };

  /**
   * Builds a single-item purchase list from the scalar input fields and delegates to the parent for price calculation.
   *
   * Constructs a one-element `a_purchase_item` array from the individual scalar GET fields (purchase item type,
   * item key, session count, prize keys, and installment template), then delegates to
   * `get()` to compute the price breakdown for that item.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dtu_date] Date/time of session is booking.
   * @param {number} params.i_session The number of sessions which are booked simultaneously.
   * @param {number} params.id_purchase_item The ID of the purchase item type. One of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemS...
   * @param {string} params.k_class_period The key of the session to check for booking availability.
   * @param {string} params.k_id The key of the purchase item in the database.
   * @param {string} params.k_location The key of the location in which the purchase is made.
   * @param {string} params.k_login_prize The key of the user's prize.
   * @param {?string} [params.k_pay_installment_template] Installment template key.
   * @param {string} params.k_reward_prize The key of the reward prize.
   * @param {string} params.text_discount_code The discount code.
   * @param {string} params.uid The key of the current user.
   * @returns {Promise<Object>} Response data.
   *  `a_tax` {string[]} A list of taxes for the given purchase options.
   *  `m_cost` {string} The total cost of the given purchase options.
   *  `m_discount` {string} The amount of the whole discount for the given purchase options.
   *  `m_discount_code` {string} The discount amount provided by a discount code for the given purchase options.
   *  `m_discount_login` {string} The discount amount for the client type for the given purchase options.
   *  `m_price` {string} The price of the given purchase options (with or without taxes, depending on ...
   *  `m_subtotal` {string} The amount of subtotal for the given purchase options.
   *  `m_tax` {string} The amount of taxes for the given purchase options.
   */
  WlClient.prototype.wlBookProcessPurchasePurchaseElement = function(params)
  {
    return this.request('/Wl/Book/Process/Purchase/PurchaseElement.json', params || {}, 'GET');
  };

  /**
   * Returns the pricing breakdown for a list of purchase items, applying applicable discounts and taxes.
   *
   * Validates the business, location, and user, then for each item in `a_purchase_item_request` computes the price,
   * applicable discount code reduction, login-type discount, and taxes, and returns per-item cost, discount,
   * price, tax, and subtotal amounts in `a_purchase_item_result`.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_purchase_item_request A list of purchase items to get information for. Every element has the next keys:
   * @param {string} params.k_business The key of the business in which the purchase is made.
   * @param {?string} [params.k_location] The key of the location in which the purchase is made.
   * @param {string} params.text_discount_code The discount code.
   * @param {string} params.uid The key of the user making the purchase.
   * @returns {Promise<Object>} Response data.
   *  `a_purchase_item_result` {Object[]} Detailed information about the amounts for the purchase item list.
   */
  WlClient.prototype.wlBookProcessPurchasePurchaseElementList = function(params)
  {
    return this.request('/Wl/Book/Process/Purchase/PurchaseElementList.json', params || {}, 'GET');
  };

  /**
   * Checks if user can book specified session.
   *
   * Validates the date, business, class period, and user, verifies the session is not already booked, then
   * runs the full booking eligibility check (credit card, waiver, age, overlap, outstanding balance) and throws
   * a descriptive user-facing error if any requirement is not met.
   *
   * @param {Object} [params] Request parameters.
   * @param {number[]} params.a_check_ignore List of check that must be skipped.
   * @param {string} params.dtu_date The date/time of the session to check for booking availability.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_business The business where `uid_from` creates the new relative.
   * @param {string} params.k_class_period The key of the session to check for booking availability.
   * @param {string} params.uid_from The user who's adding the new relative.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBookProcessRelationRelationGet = function(params)
  {
    return this.request('/Wl/Book/Process/Relation/Relation.json', params || {}, 'GET');
  };

  /**
   * Added new relative.
   *
   * Creates a new family member profile for the specified business and links it as a relative of `uid_from`,
   * applying birthday validation, email-inheritance rules, and payment responsibility settings. Returns the UID
   * of the newly created user in `uid_create`.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business where `uid_from` creates the new relative.
   * @param {string} params.uid_from The user who's adding the new relative.
   * @returns {Promise<Object>} Response data.
   *  `uid_create` {string} The newly added relative.
   */
  WlClient.prototype.wlBookProcessRelationRelationPost = function(params)
  {
    return this.request('/Wl/Book/Process/Relation/Relation.json', params || {}, 'POST');
  };

  /**
   * Returns the list of available assets for the booking session, grouped by asset category.
   *
   * Loads all asset categories and their items available for the given class period or selected sessions,
   * strips shared resources that clients should not choose individually, attaches image data and occupancy
   * information, and returns the result as `a_resource_all`.
   * @deprecated Use {@link \Wl\Book\Process\Resource\Resource54Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_session The selected sessions.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_resource_all` {Object[]} A list of asset categories which are available for specified session. Every e...
   */
  WlClient.prototype.wlBookProcessResourceResourceGet = function(params)
  {
    return this.request('/Wl/Book/Process/Resource/Resource.json', params || {}, 'GET');
  };

  /**
   * Saves the asset selection for the booking and attempts to book the session if no further steps are required.
   *
   * Validates and stores the selected assets and session data in the booking process context, then, when no quiz
   * step is needed and payment is not required, attempts to complete the booking immediately. Returns visit keys,
   * activity keys, and a flag indicating whether further wizard steps are needed.
   * @deprecated Use {@link \Wl\Book\Process\Resource\Resource54Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_session The selected sessions.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_login_activity` {string[]} The keys of a user's activity.
   *  `a_visit` {string[]} The keys of the bookings that have been made.
   *  `is_next` {boolean} `true` - the next steps of the booking wizard are required (for example, to p...
   */
  WlClient.prototype.wlBookProcessResourceResourcePost = function(params)
  {
    return this.request('/Wl/Book/Process/Resource/Resource.json', params || {}, 'POST');
  };

  /**
   * Returns available assets for the booking, decoding the JSON-encoded session input before delegating to the parent.
   *
   * Deserializes the JSON-encoded session selection into `a_session` and then delegates to
   * `get()` to return the available asset categories and items for the booking.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_session The selected sessions.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.json_session Selected sessions.
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_resource_all` {Object[]} A list of asset categories which are available for specified session. Every e...
   */
  WlClient.prototype.wlBookProcessResourceResource54Get = function(params)
  {
    return this.request('/Wl/Book/Process/Resource/Resource54.json', params || {}, 'GET');
  };

  /**
   * Processes the asset selection step of the booking wizard, decoding the JSON-encoded session input before delegating to the parent.
   *
   * Deserializes the JSON-encoded session selection into `a_session` and then delegates to
   * `post()` to save the selected assets and advance the booking wizard.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_session The selected sessions.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.json_session Selected sessions.
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_login_activity` {string[]} The keys of a user's activity.
   *  `a_visit` {string[]} The keys of the bookings that have been made.
   *  `is_next` {boolean} `true` - the next steps of the booking wizard are required (for example, to p...
   */
  WlClient.prototype.wlBookProcessResourceResource54Post = function(params)
  {
    return this.request('/Wl/Book/Process/Resource/Resource54.json', params || {}, 'POST');
  };

  /**
   * Processes purchases and books sessions on the "Pay/Billing info" step of the booking wizard.
   *
   * Accepts the selected purchase items, payment form, optional discount code, and installment template, then
   * collects payment, applies discounts and prizes, and creates the booking records. Returns visit keys, activity
   * keys, and purchase activity key upon success.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_login_activity_book` {string[]} Keys of the user's activity which correspond to bookings made.
   *  `a_visit` {string[]} The keys of bookings made.
   *  `a_visit_payment` {Object[]} Values are arrays with next keys:
   *  `k_login_activity_purchase` {string} The keys of the user's activity corresponding to the purchase made. This won'...
   */
  WlClient.prototype.wlBookProcessPaymentPayment = function(params)
  {
    return this.request('/Wl/Book/Process/Payment/Payment.json', params || {}, 'POST');
  };

  /**
   * Processes the "Purchase Options" step of the booking wizard, validates selections, and books the session when possible.
   *
   * Stores the selected purchase option (existing login promotion or new purchasable item) and session data in
   * the booking process context, validates availability and eligibility, and attempts to complete the booking
   * immediately when no payment or quiz step is needed. Returns visit keys, activity keys, and a flag indicating
   * whether further wizard steps are required.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_login_activity` {string[]} The keys for the user's activities. This will be populated upon completion of...
   *  `a_visit` {string[]} The keys of the bookings that have been made.
   *  `a_visit_payment` {Object[]} Values are arrays with next keys:
   *  `is_next` {boolean} If `true`, the next steps of the booking wizard are required to purchase an i...
   */
  WlClient.prototype.wlBookProcessStoreStore = function(params)
  {
    return this.request('/Wl/Book/Process/Store/Store.json', params || {}, 'POST');
  };

  /**
   * Validates and distributes selected purchase options across all clients in the booking group.
   *
   * For each client in the group, validates session selection, resource requirements, recurring booking
   * configuration, and purchase item eligibility. When all clients pass validation, attempts to assign or share
   * promotions across the group and returns per-client distribution results with any error details in
   * `a_purchase_item_distribute`.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @returns {Promise<Object>} Response data.
   *  `a_purchase_item_distribute` {Object[]} A list of distributed new shared purchase items which are selected by a group...
   */
  WlClient.prototype.wlBookProcessStoreStoreGroup = function(params)
  {
    return this.request('/Wl/Book/Process/Store/StoreGroup.json', params || {}, 'POST');
  };

  /**
   * Returns class session details and booking information for the "Class and Location" step of the booking wizard.
   *
   * Loads session data, staff, location, contract, capacity, wait-list state, pricing, special instructions, and
   * recurring booking availability for the given class period and date. For events it also returns the list of
   * individually selectable sessions together with their free-session eligibility.
   * @deprecated Use {@link \Wl\Book\Process\Info\Info54Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_class_capacity `true` if class capacity should be shown,
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_day_available` {?number[]} Week days available for recurring booking. Constants of [ADateWeekSid](#/comp...
   *  `a_session_all` {Object[]} A list of all class sessions that can be booked together. Every element has t...
   *  `a_session_free` {Object[]} List of sessions that can be paid without new purchases.
   *  `a_staff` {Object[]} The staff member conducting the session. Every element has the next structure:
   *  `dl_end` {string} Date when this class session occurrences stop.
   *  `dt_date_local` {string} The date/time of the session the user is booking in MySQL format in the locat...
   *  `hide_price` {boolean} `true` if price for the individual session should be hidden, if client has ap...
   *  `html_contract` {string} The text of the contract to which the user must agree before book this session.
   *  `html_duration` {string} Class duration in human-readable format.
   *  `html_special` {string} The special instructions for the class.
   *  `html_special_preview` {string} Special instructions preview for class.
   *  `i_available` {?number} Number of available spots.
   *  `i_book` {?number} Number of booked spots.
   *  `i_duration` {number} The duration of the session in minutes.
   *  `i_wait` {number} Total number of clients on the wait list.
   *  `i_wait_limit` {?number} Total capacity the wait list.
   *  `i_wait_spot` {number} Estimated place of reservation on the waiting list.
   *  `is_book_repeat_client` {boolean} `true` if recurring booking is available, `false` otherwise.
   *  `is_book_repeat_no_end_date` {boolean} `true` if the setting for frequency during class recurring booking will be `n...
   *  `is_event_session` {boolean} Can client chooses several session per booking.
   *  `...` {*}
   */
  WlClient.prototype.wlBookProcessInfoInfoGet = function(params)
  {
    return this.request('/Wl/Book/Process/Info/Info.json', params || {}, 'GET');
  };

  /**
   * Processes the "Class and Location" step of the booking wizard, optionally recording the waiver agreement and booking the session.
   *
   * Accepts the selected sessions, asset assignments, recurring configuration, and waiver signature, then attempts
   * to book the session immediately when no further payment or resource steps are needed. Returns booking keys,
   * activity keys, and flags indicating whether additional wizard steps are required.
   * @deprecated Use {@link \Wl\Book\Process\Info\Info54Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_login_activity` {string[]} The keys of users' activity.
   *  `a_visit` {string[]} The keys of the bookings made.
   *  `a_visit_payment` {Object[]} Values are arrays with next keys:
   *  `is_card_authorize` {boolean} If client must authorize credit card.
   *  `is_force_book` {boolean} Can the class/event be booked immediately or not.
   *  `is_next` {boolean} `true` - next steps of the wizard are needed (for example, to purchase someth...
   */
  WlClient.prototype.wlBookProcessInfoInfoPost = function(params)
  {
    return this.request('/Wl/Book/Process/Info/Info.json', params || {}, 'POST');
  };

  /**
   * Returns class and location booking information, enriched with localized date and time for each session.
   *
   * Delegates to the parent implementation and then appends a localized `html_date_time` string to each
   * available session using the business locale and either the client's profile timezone or the location timezone.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_class_capacity `true` if class capacity should be shown,
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_day_available` {?number[]} Week days available for recurring booking. Constants of [ADateWeekSid](#/comp...
   *  `a_session_all` {Object[]} A list of all class sessions that can be booked together. Every element has t...
   *  `a_session_free` {Object[]} List of sessions that can be paid without new purchases.
   *  `a_staff` {Object[]} The staff member conducting the session. Every element has the next structure:
   *  `dl_end` {string} Date when this class session occurrences stop.
   *  `dt_date_local` {string} The date/time of the session the user is booking in MySQL format in the locat...
   *  `hide_price` {boolean} `true` if price for the individual session should be hidden, if client has ap...
   *  `html_contract` {string} The text of the contract to which the user must agree before book this session.
   *  `html_duration` {string} Class duration in human-readable format.
   *  `html_special` {string} The special instructions for the class.
   *  `html_special_preview` {string} Special instructions preview for class.
   *  `i_available` {?number} Number of available spots.
   *  `i_book` {?number} Number of booked spots.
   *  `i_duration` {number} The duration of the session in minutes.
   *  `i_wait` {number} Total number of clients on the wait list.
   *  `i_wait_limit` {?number} Total capacity the wait list.
   *  `i_wait_spot` {number} Estimated place of reservation on the waiting list.
   *  `is_book_repeat_client` {boolean} `true` if recurring booking is available, `false` otherwise.
   *  `is_book_repeat_no_end_date` {boolean} `true` if the setting for frequency during class recurring booking will be `n...
   *  `is_event_session` {boolean} Can client chooses several session per booking.
   *  `...` {*}
   */
  WlClient.prototype.wlBookProcessInfoInfo54Get = function(params)
  {
    return this.request('/Wl/Book/Process/Info/Info54.json', params || {}, 'GET');
  };

  /**
   * Processes the "Class and Location" step of the booking wizard, optionally recording the waiver agreement and booking the session.
   *
   * Accepts the selected sessions, asset assignments, recurring configuration, and waiver signature, then attempts
   * to book the session immediately when no further payment or resource steps are needed. Returns booking keys,
   * activity keys, and flags indicating whether additional wizard steps are required.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_login_activity` {string[]} The keys of users' activity.
   *  `a_visit` {string[]} The keys of the bookings made.
   *  `a_visit_payment` {Object[]} Values are arrays with next keys:
   *  `is_card_authorize` {boolean} If client must authorize credit card.
   *  `is_force_book` {boolean} Can the class/event be booked immediately or not.
   *  `is_next` {boolean} `true` - next steps of the wizard are needed (for example, to purchase someth...
   */
  WlClient.prototype.wlBookProcessInfoInfo54Post = function(params)
  {
    return this.request('/Wl/Book/Process/Info/Info54.json', params || {}, 'POST');
  };

  /**
   * Checks whether the user can complete booking wizard without additional steps.
   *
   * Copies the GET session selection into the POST field and delegates to `post()`.
   * Prefer the POST variant when the session list may be large, as the query string has length limitations.
   * @deprecated Use {@link post()} instead. GET method fails if user is booking more than 50 sessions due to
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_session_select A list of sessions of an event that can be booked together.
   * @param {string} params.dt_date_gmt The date and time of the session that the user is booking, returned in MySQL format and in GMT.
   * @param {?string} [params.k_business] Key of the business in which the booking is performed.
   * @param {string} params.k_class_period The class period ID that the user started to book.
   * @param {string} params.s_id The unique booking process key.
   * @param {string} params.uid The key of a user who is making the booking.
   * @returns {Promise<Object>} Response data.
   *  `can_complete` {boolean} Determines whether users can complete the booking process from the info step.
   *  `hide_price` {boolean} `true` if price for the individual session should be hidden, if client has ap...
   */
  WlClient.prototype.wlBookProcessInfoInfoCanCompleteGet = function(params)
  {
    return this.request('/Wl/Book/Process/Info/InfoCanComplete.json', params || {}, 'GET');
  };

  /**
   * Checks whether the user can complete booking wizard without additional steps.
   *
   * Performs a dry-run booking attempt for the given class period, date, and session selection to determine
   * whether the client can finalize the booking directly from the info step without proceeding to the payment
   * or purchase-option steps.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt The date and time of the session that the user is booking, returned in MySQL format and in GMT.
   * @param {?string} [params.k_business] Key of the business in which the booking is performed.
   * @param {string} params.k_class_period The class period ID that the user started to book.
   * @param {string} params.s_id The unique booking process key.
   * @param {string} params.uid The key of a user who is making the booking.
   * @returns {Promise<Object>} Response data.
   *  `can_complete` {boolean} Determines whether users can complete the booking process from the info step.
   */
  WlClient.prototype.wlBookProcessInfoInfoCanCompletePost = function(params)
  {
    return this.request('/Wl/Book/Process/Info/InfoCanComplete.json', params || {}, 'POST');
  };

  /**
   * Defines list of required quizzes.
   *
   * Merges the quizzes required by the booking itself with quizzes tied to the selected purchase options,
   * filters out internal (staff-only) quizzes for non-backend requests, and returns the unified list in `a_quiz`.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_purchase_item The list of purchase items. Each element has the format `[id_purchase_item]::[k_id]`, where:
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_quiz` {Object[]} The list of quizzes. Each element has the next structure:
   */
  WlClient.prototype.wlBookProcessQuizQuizGet = function(params)
  {
    return this.request('/Wl/Book/Process/Quiz/Quiz.json', params || {}, 'GET');
  };

  /**
   * Finished booking process and save quiz responses (if quiz step is the last in booking wizard).
   *
   * Validates session selection and asset requirements, stores quiz responses in the booking process context,
   * and attempts to complete the booking without payment when no payment step is needed. Returns visit keys,
   * activity keys, and a flag indicating whether additional wizard steps are still required.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_login_activity` {string[]} The user's activity keys.
   *  `a_visit` {string[]} The keys the bookings that have been made.
   *  `is_next` {boolean} If `true`, the next steps of the booking wizard are required for the purchase...
   */
  WlClient.prototype.wlBookProcessQuizQuizPost = function(params)
  {
    return this.request('/Wl/Book/Process/Quiz/Quiz.json', params || {}, 'POST');
  };

  /**
   * Returns the list of visits to be created for the given recurring booking settings.
   *
   * Accepts the class period, date, user, recurrence configuration (interval, end condition, and days of week),
   * and returns a list of individual visit slots with availability and alert information for each occurrence,
   * together with the computed date range and visit count.
   *
   * @param {Object} [params] Request parameters.
   * @param {number[]} params.a_day List of days of the week to create visits. Each value is a [ADateWeekSid](#/components/schemas/AD...
   * @param {string[]} params.a_visit_ignore List of visits to be ignored. Each value is a string consisting of a class period key
   * @param {string} params.dt_date Date and time of the class, when recurring booking was called, in UTC timezone.
   * @param {string} params.dt_from Date to start recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#/...
   * @param {string} params.dt_to Date to finish recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#...
   * @param {number} params.i_count Count of the visits to be created. Not empty only when `id_repeat_end` == [RsRepeatEndSid::COUNT]...
   * @param {number} params.i_duration Count of days\weeks\months between recurring bookings.
   * @param {number} params.id_duration Recurring booking interval, one of [ADurationSid](#/components/schemas/ADurationSid) constants.
   * @param {number} params.id_mode WellnessLiving mode, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {number} params.id_repeat_end Type of repeating, one of [RsRepeatEndSid](#/components/schemas/RsRepeatEndSid) constants.
   * @param {boolean} params.is_cancel `true` when cancelling booking, `false` otherwise.
   * @param {boolean} params.is_new_user `true` if current user is not created yet, `false` otherwise.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_class_period Class period key.
   * @param {string} params.s_uid Encoded list of user keys, who will attend visits.
   * @param {string} params.uid Key of user, who will attend visits.
   * @param {string} params.uid_actor Key of user, who perform booking.
   * @returns {Promise<Object>} Response data.
   *  `a_visit` {Object[]} List of visits to be created for the given settings:
   *  `dt_from` {string} Date to start recurring booking. Not empty only when `id_repeat_end` == [RsRe...
   *  `dt_to` {string} Date to finish recurring booking. Not empty only when `id_repeat_end` == [RsR...
   *  `i_count` {number} Possible ways to stop repeatable events.
   *  `text_date_from` {string} Start date of repeatable period in human-readable format.
   *  `text_date_to` {string} End date of repeatable period in human-readable format.
   */
  WlClient.prototype.wlBookProcessFrequencyRepeat = function(params)
  {
    return this.request('/Wl/Book/Process/Frequency/Repeat.json', params || {}, 'GET');
  };

  /**
   * Returns the list of visits to be created for the given recurring booking settings.
   *
   * Accepts the class period, date, user, recurrence configuration (interval, end condition, and days of week),
   * and returns a list of individual visit slots with availability and alert information for each occurrence,
   * together with the computed date range and visit count.
   *
   * @param {Object} [params] Request parameters.
   * @param {number[]} params.a_day List of days of the week to create visits. Each value is a [ADateWeekSid](#/components/schemas/AD...
   * @param {string[]} params.a_visit_ignore List of visits to be ignored. Each value is a string consisting of a class period key
   * @param {string} params.dt_date Date and time of the class, when recurring booking was called, in UTC timezone.
   * @param {string} params.dt_from Date to start recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repea...
   * @param {string} params.dt_to Date to finish recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repe...
   * @param {number} params.i_count Count of the visits to be created. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Rep...
   * @param {number} params.i_duration Count of days\weeks\months between recurring bookings.
   * @param {number} params.id_duration Recurring booking interval, one of [ADurationSid](#/components/schemas/ADurationSid) constants.
   * @param {number} params.id_mode WellnessLiving mode, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {number} params.id_repeat_end Type of repeating, one of [RsRepeatEndSid](#/components/schemas/RsRepeatEndSid) constants.
   * @param {boolean} params.is_cancel `true` when cancelling booking, `false` otherwise.
   * @param {boolean} params.is_include_parallel `true` to also include sessions running in parallel at the same time and location
   * @param {boolean} params.is_new_user `true` if current user is not created yet, `false` otherwise.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_class_period Class period key.
   * @param {string} params.s_uid Encoded list of user keys, who will attend visits.
   * @param {string} params.uid Key of user, who will attend visits.
   * @param {string} params.uid_actor Key of user, who perform booking.
   * @returns {Promise<Object>} Response data.
   *  `a_visit` {Object[]} List of visits to be created for the given settings:
   *  `dt_from` {string} Date to start recurring booking. Not empty only when [RepeatApi](/Wl/Book/Pro...
   *  `dt_to` {string} Date to finish recurring booking. Not empty only when [RepeatApi](/Wl/Book/Pr...
   *  `i_count` {number} Possible ways to stop repeatable events.
   *  `text_date_from` {string} Start date of repeatable period in human-readable format.
   *  `text_date_to` {string} End date of repeatable period in human-readable format.
   */
  WlClient.prototype.wlBookProcessFrequencyRepeatParallel = function(params)
  {
    return this.request('/Wl/Book/Process/Frequency/RepeatParallel.json', params || {}, 'GET');
  };

  /**
   * Check if user exists.
   *
   * Looks up a guest by email within the specified business and service context. Returns the user key if an
   * existing member is found whose email, birthday (when required), and location eligibility all pass validation.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dl_birthday Guest's birthday in MySQL format. Empty if service not restricted by age.
   * @param {number} params.id_service Type of the service to book.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_id Key of service to book.
   * @param {string} params.k_location Location key.
   * @param {string} params.text_first_name Guest's first name.
   * @param {string} params.text_last_name Guest's last name.
   * @param {string} params.text_mail Guest's email.
   * @returns {Promise<Object>} Response data.
   *  `uid` {string} UID of found or created user.
   */
  WlClient.prototype.wlBookProcessGuestGuestProfileGet = function(params)
  {
    return this.request('/Wl/Book/Process/Guest/GuestProfile.json', params || {}, 'GET');
  };

  /**
   * Creates new user.
   *
   * Creates a new guest profile (or reuses an existing non-member account) for the specified business and service,
   * applying birthday and virtual-account rules, and returns the UID of the created or matched user.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dl_birthday Guest's birthday in MySQL format. Empty if service not restricted by age.
   * @param {number} params.id_service Type of the service to book.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_id Key of service to book.
   * @param {string} params.text_first_name Guest's first name.
   * @param {string} params.text_last_name Guest's last name.
   * @param {string} params.text_mail Guest's email.
   * @returns {Promise<Object>} Response data.
   *  `uid` {string} UID of found or created user.
   */
  WlClient.prototype.wlBookProcessGuestGuestProfilePost = function(params)
  {
    return this.request('/Wl/Book/Process/Guest/GuestProfile.json', params || {}, 'POST');
  };

  /**
   * Checks if specified email address is busy.
   *
   * Looks up whether the given email is already registered and returns user info, membership
   *  status, staff flags, and password status if found; guest requests are subject to a per-IP
   *  rate limit.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key where the check must be performed.
   * @param {string} params.text_mail The email address to be checked.
   * @param {string} params.uid_want The key of user whose email will be edited.
   * @returns {Promise<Object>} Response data.
   *  `a_business_member_key` {string[]} List of business keys where a user is already a member.
   *  `a_user` {Object} Information about the user who occupies the specified email.
   *  `is_added` {boolean} Shows, whether client was registered in the business: `true` if user was adde...
   *  `is_current_member` {boolean} If `true`, user is already a member of current business, `false` - otherwise.
   *  `is_limit` {boolean} If `true`, then the number of requests has exceeded the rate limit. Otherwise...
   *  `is_password_set` {boolean} If `true`, user, who has the specified email, has password set, `false` - oth...
   *  `is_staff` {boolean} If `true`, user, who has the specified email, is staff in current business, `...
   *  `is_staff_any_business` {boolean} If `true`, user, who has the specified email, is staff in any business, `fals...
   *  `is_use` {boolean} If `true`, then the specified email is in use. Otherwise, this will be `false`.
   *  `uid_result` {string} The key of user who has the specified email.
   */
  WlClient.prototype.wlProfileEditEmailEditEmail67Get = function(params)
  {
    return this.request('/Wl/Profile/Edit/Email/EditEmail67.json', params || {}, 'GET');
  };

  /**
   * Adds user to business.
   *
   * Registers the found user as a member of the specified business. If required profile fields
   *  are missing, grants temporary access until the profile is completed. Sends a welcome
   *  notification once the user is fully registered.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key where the check must be performed.
   * @param {string} params.uid_want The key of user whose email will be edited.
   * @returns {Promise<Object>} Response data.
   *  `is_added` {boolean} Shows, whether client was registered in the business: `true` if user was adde...
   */
  WlClient.prototype.wlProfileEditEmailEditEmail67Post = function(params)
  {
    return this.request('/Wl/Profile/Edit/Email/EditEmail67.json', params || {}, 'POST');
  };

  /**
   * Checks if specified email address is busy.
   *
   * Looks up whether the given email is already registered and returns user info, membership
   *  status, staff flags, and password status if found; guest requests are subject to a per-IP
   *  rate limit.
   * @deprecated Use {@link \Wl\Profile\Edit\Email\EditEmail67Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key where the check must be performed.
   * @param {string} params.text_mail The email address to be checked.
   * @param {string} params.uid_want The key of user whose email will be edited.
   * @returns {Promise<Object>} Response data.
   *  `a_business_member_key` {string[]} List of business keys where a user is already a member.
   *  `a_user` {Object} Information about the user who occupies the specified email.
   *  `is_added` {boolean} Shows, whether client was registered in the business: `true` if user was adde...
   *  `is_current_member` {boolean} If `true`, user is already a member of current business, `false` - otherwise.
   *  `is_limit` {boolean} If `true`, then the number of requests has exceeded the rate limit. Otherwise...
   *  `is_password_set` {boolean} If `true`, user, who has the specified email, has password set, `false` - oth...
   *  `is_staff` {boolean} If `true`, user, who has the specified email, is staff in current business, `...
   *  `is_staff_any_business` {boolean} If `true`, user, who has the specified email, is staff in any business, `fals...
   *  `is_use` {boolean} If `true`, then the specified email is in use. Otherwise, this will be `false`.
   *  `uid_result` {string} The key of user who has the specified email.
   */
  WlClient.prototype.wlProfileEditEmailEditEmailGet = function(params)
  {
    return this.request('/Wl/Profile/Edit/Email/EditEmail.json', params || {}, 'GET');
  };

  /**
   * Adds user to business.
   *
   * Registers the found user as a member of the specified business. If required profile fields
   *  are missing, grants temporary access until the profile is completed. Sends a welcome
   *  notification once the user is fully registered.
   * @deprecated Use {@link \Wl\Profile\Edit\Email\EditEmail67Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key where the check must be performed.
   * @param {string} params.uid_want The key of user whose email will be edited.
   * @returns {Promise<Object>} Response data.
   *  `is_added` {boolean} Shows, whether client was registered in the business: `true` if user was adde...
   */
  WlClient.prototype.wlProfileEditEmailEditEmailPost = function(params)
  {
    return this.request('/Wl/Profile/Edit/Email/EditEmail.json', params || {}, 'POST');
  };

  /**
   * Returns the lists of completed and pending quiz responses for the specified user and business.
   *
   * Returns the client's completed, draft, and pending form responses for the business, sorted
   *  newest first. Also provides permission flags that control which actions the current user may
   *  perform on each response.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.hide_completed Defines whether completed forms should not be included in result list of forms.
   * @param {boolean} params.hide_optional Defines whether optional uncompleted forms should not be included in result list of forms.
   * @param {boolean} params.is_backend This will be `true` if the API is being used from the backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.uid The key of the user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_quiz_login` {Object[]} The list of uncompleted quiz responses. Each element has the next structure:
   *  `a_quiz_response` {Object[]} The list of completed quiz responses. Each element has the next structure:
   *  `can_amend` {boolean} Whether response can be amended by current user.
   *  `can_fill` {boolean} Whether response can be filled by current user.
   *  `can_remove` {boolean} Whether response can be removed by current user.
   *  `can_view` {boolean} Whether response can be viewed by current user.
   */
  WlClient.prototype.wlProfileFormResponseResponseList = function(params)
  {
    return this.request('/Wl/Profile/Form/Response/ResponseList.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about event item.
   *
   * Used to render the event detail page or event card in the booking flow. Returns everything needed
   * to display the event to a prospective client: schedule, pricing, booking availability, assigned staff
   * with photos, and available installment payment options.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dl_book_available_end] The last available date for booking.
   * @param {?string} [params.dl_book_available_start] The first available date for booking.
   * @param {?string} [params.dtu_session] Datetime of the session.
   * @param {number} params.i_image_height Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.i_image_width Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.i_staff_image_height Staff image height in pixels. Please specify this value if you need image to be returned in speci...
   * @param {number} params.i_staff_image_width Staff image width in pixels. Please specify this value if you need image to be returned in specif...
   * @param {boolean} params.is_schedule_group `true` if schedule should be grouped by location time and staff,
   * @param {?string} [params.k_business] Key of a business to which the requested event(s) belong.
   * @param {?string} [params.k_class_period] Key of a class period to show information for.
   * @param {string} params.k_event The event key.
   * @param {string} params.s_event A list of event keys serialized with JSON.
   * @param {boolean} params.show_unpublished `true` to show schedule, which is not published yet.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_age_restrictions` {Object} Displays information about age restrictions for this event.
   *  `a_book_available` {Object[]} Retrieves information about an event item.
   *  `a_business_policy` {Object} Business policies connected to clients and bookings.
   *  `a_class_logo` {Object} The logo of event.
   *  `a_class_tab` {string[]} The list of keys from class tab.
   *  `a_event` {Object[]} Information for a large number of events.
   *  `a_installment_template` {Object[]} A list of installment plans. Each element has the following next keys:
   *  `a_schedule` {Object[]} A list of event sessions. Every element has the following next keys:
   *  `a_shop_category` {string[]} IDs of online store category.
   *  `a_staff_logo` {Object} Photos of staff members. Keys are the keys of staff members. The values are t...
   *  `a_timezone_info` {Object[]} Timezone information for all timezones used in the event schedule.
   *  `a_visits_required` {Object[]} A list of classes and events that clients should attend before this one.
   *  `dt_book_date` {?string} That date that should be used to go to the booking wizard.
   *  `dt_early` {?string} The early registration date of the event.
   *  `dt_end` {string} The end date of the event.
   *  `dt_start` {string} The start date of the event.
   *  `hide_application` {boolean} Whether event will be hidden in the White Label mobile application.
   *  `html_description` {?string} The description of the event.
   *  `html_special` {string} Special instruction for the event.
   *  `i_capacity` {?number} Class capacity.
   *  `...` {*}
   */
  WlClient.prototype.wlEventBookEventViewElement = function(params)
  {
    return this.request('/Wl/Event/Book/EventView/Element.json', params || {}, 'GET');
  };

  /**
   * Retrieves a list of events.
   *
   * Used to populate the events tab on the client-facing booking page. Returns all events offered in
   * the business (or filtered to a specific tab), together with availability flags so the UI can
   * show which events still have open spots.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_status Defines how the event availability flag filter should be applied.
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.k_class_tab The key of the category tab.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   *  `a_event` {string[]} A list of event identifiers.
   *  `a_event_available` {boolean[]} Event availability map.
   *  `is_virtual_service` {boolean} `true` if exist at least one virtual event
   */
  WlClient.prototype.wlEventBookEventListList = function(params)
  {
    return this.request('/Wl/Event/Book/EventList/List.json', params || {}, 'GET');
  };

  /**
   * Gets data for step in wizard.
   *
   * Used by the class modification wizard (edit, cancel, reschedule) to load the data for a specific
   * wizard step. Each step has a different data shape driven by `id_step`; the response feeds directly
   * into the step's form.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_end The end date, returned in MySQL format and the local time.
   * @param {string} params.dt_start The start date, returned in MySQL format and the local time.
   * @param {number} params.id_class_modify_action The class modify step type. One of the [RsClassModifyActionSid](#/components/schemas/RsClassModif...
   * @param {number} params.id_class_modify_mode The modify mode type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModifyModeSid...
   * @param {number} params.id_step The class modify action type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModif...
   * @param {?boolean} [params.is_back] The step direction.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_class_period The class period key.
   * @param {string} params.s_id The unique hash string.
   * @returns {Promise<Object>} Response data.
   *  `a_get` {*[]} Step information, depending on the steps.
   */
  WlClient.prototype.wlClassesPeriodModifyModifyGet = function(params)
  {
    return this.request('/Wl/Classes/Period/Modify/Modify.json', params || {}, 'GET');
  };

  /**
   * Makes step in wizard.
   *
   * Used by the class modification wizard to submit a completed step and advance to the next. The wizard
   * tracks state server-side; this call validates the step input, persists it, and returns the next step
   * the UI should render.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_end The end date, returned in MySQL format and the local time.
   * @param {string} params.dt_start The start date, returned in MySQL format and the local time.
   * @param {number} params.id_class_modify_action The class modify step type. One of the [RsClassModifyActionSid](#/components/schemas/RsClassModif...
   * @param {number} params.id_class_modify_mode The modify mode type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModifyModeSid...
   * @param {number} params.id_mode The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {number} params.id_step The class modify action type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModif...
   * @param {?boolean} [params.is_back] The step direction.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_class_period The class period key.
   * @param {string} params.s_id The unique hash string.
   * @returns {Promise<Object>} Response data.
   *  `id_step` {number} The list of possible modify mode for class modify wizard.
   *  `is_back` {?boolean} The step direction.
   *  `k_class` {?string} The class ID.
   *  `s_id` {string} The unique hash string.
   */
  WlClient.prototype.wlClassesPeriodModifyModifyPost = function(params)
  {
    return this.request('/Wl/Classes/Period/Modify/Modify.json', params || {}, 'POST');
  };

  /**
   * Gets information about subscription.
   *
   * Used in the backend settings UI to read the current state of a business subscription (e.g., Achieve or
   * another product). Returns whether the subscription is active, the current plan tier, and the business
   * locale. Requires backend access to the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.cid_subscription CID of the subscription information of which is requested.
   * @param {string} params.k_business Business key for which subscription information is requested.
   * @returns {Promise<Object>} Response data.
   *  `id_locale` {?number} A list of locales.
   *  `id_plan` {number|number|number|number} Currently active plan ID for requested subscription.
   *  `is_active` {boolean} Whether subscription is active.
   */
  WlClient.prototype.wlBusinessAccountSubscriptionSubscriptionInfo = function(params)
  {
    return this.request('/Wl/Business/Account/Subscription/SubscriptionInfo.json', params || {}, 'GET');
  };

  /**
   * Grants or denies access to business location for staff member.
   *
   * Used to respond to a support access request: a business owner accepts or rejects temporary entry for
   * a WellnessLiving support agent. Requires the Manage Business permission. Granting access triggers an
   * email notification and expires after 24 hours; the result is broadcast in real time to the requesting
   * staff member.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_grant Determines whether the user will be granted access or if access will be revoked.
   * @param {string} params.k_location The key of the location to access.
   * @param {string} params.uid The key of the user who will be granted access.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessAuthorizeSupportResponseResponse = function(params)
  {
    return this.request('/Wl/Business/AuthorizeSupport/Response/Response.json', params || {}, 'GET');
  };

  /**
   * Returns country, region, state, city and location lists of the franchisor.
   *
   * Used on the franchisor's website location finder to display all franchisee locations on a map or
   * list, grouped by country, state, and city. Results can be filtered to only locations assigned to a
   * specific franchise region or to exclude churned locations. Results are cached for 3 minutes.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_business_franchise_location Determines which locations should be returned.
   * @param {boolean} params.is_include_churn Determines whether to include churned/removed locations.
   * @param {boolean} params.is_include_non_api Determines whether to include locations marked to not be displayed on franchisor website.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_city_list` {Object[]} The city list. Each element has next structure:
   *  `a_country_list` {Object[]} The country list. Each element has next structure:
   *  `a_location_list` {Object[]} The location list. Each element has the next structure:
   *  `a_region_list` {Object[]} The region list. Each element has the next structure:
   *  `a_state_list` {Object[]} The state list. Each element has the next structure:
   */
  WlClient.prototype.wlBusinessFranchiseLocationBusinessFranchiseLocation = function(params)
  {
    return this.request('/Wl/Business/Franchise/Location/BusinessFranchiseLocation.json', params || {}, 'GET');
  };

  /**
   * Returns the reward program configuration for the specified business.
   *
   * Used in the backend settings editor to show the current enabled or disabled state of the reward
   * program before the staff member makes a change. Always reads live data, bypassing the cache.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `is_disabled_reward_program` {boolean} `true` Reward program is disabled, `false` - otherwise.
   */
  WlClient.prototype.wlBusinessRewardConfigRewardConfigGet = function(params)
  {
    return this.request('/Wl/Business/Reward/Config/RewardConfig.json', params || {}, 'GET');
  };

  /**
   * Updates the reward program enabled or disabled state for the specified business.
   *
   * Used in the backend settings editor when a staff member turns the reward program on or off. The
   * change is recorded in the reward audit log.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessRewardConfigRewardConfigPost = function(params)
  {
    return this.request('/Wl/Business/Reward/Config/RewardConfig.json', params || {}, 'POST');
  };

  /**
   * Retrieves information about if user is subscribed on specified business or not.
   *
   * Used to pre-populate the notification preferences toggle in a client's profile page. Shows whether
   * the client has opted in to email and SMS communications from the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key used for users to subscribe, unsubscribe, and receive information about the stat...
   * @param {string} params.uid The key of the user whose subscription status needs to be checked or switched to subscribed/unsub...
   * @returns {Promise<Object>} Response data.
   *  `is_subscribe` {?boolean} Information about the user`s subscription.
   *  `is_subscribe_sms` {?boolean} Information about the user`s subscription.
   */
  WlClient.prototype.wlBusinessUserSubscribeSubscribeGet = function(params)
  {
    return this.request('/Wl/Business/User/Subscribe/Subscribe.json', params || {}, 'GET');
  };

  /**
   * Subscribes or unsubscribes user on specified business.
   *
   * Called when a client changes their notification preferences. Controls whether the business can
   * contact the client by email and by SMS.
   *
   * @param {Object} [params] Request parameters.
   * @param {?boolean} [params.is_subscribe] Information about the user`s subscription.
   * @param {?boolean} [params.is_subscribe_sms] Information about the user`s subscription.
   * @param {string} params.k_business The business key used for users to subscribe, unsubscribe, and receive information about the stat...
   * @param {string} params.uid The key of the user whose subscription status needs to be checked or switched to subscribed/unsub...
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlBusinessUserSubscribeSubscribePut = function(params)
  {
    return this.request('/Wl/Business/User/Subscribe/Subscribe.json', params || {}, 'PUT');
  };

  /**
   * Removes conversion and reset the after expiration setting to previous state.
   *
   * Validates access, removes the scheduled conversion record for the given purchased promotion, restores the
   * previous auto-renew state, and reschedules the payment if the promotion is a membership type.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_login_promotion The login promotion key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPromotionConvertConvertDelete = function(params)
  {
    return this.request('/Wl/Login/Promotion/Convert/Convert.json', params || {}, 'DELETE');
  };

  /**
   * Returns the current conversion configuration and the list of promotions available to convert to.
   *
   * Returns the current conversion type, scheduled date, target promotion, hold period dates, next payment date,
   * expiration date, and the list of promotions available as conversion targets for the given purchased promotion.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_login_promotion The login promotion key.
   * @returns {Promise<Object>} Response data.
   *  `a_promotion` {Object[]} Promotion data containing the following structure:.
   *  `dl_convert_max` {string} The last date on what conversion can be scheduled.
   *  `dl_convert_min` {string} The first date on what conversion can be scheduled.
   *  `dl_hold_end` {string} Local date, when hold ends, if PO is on hold right now.
   *  `dl_hold_start` {string} Local date, when hold starts, if PO is on hold right now.
   *  `id_convert` {number} List of options to convert promotion.
   *  `id_convert_when` {?number} Different types of conversion behavior: when and how it should be converted.
   *  `is_edit` {boolean} Determines whether the conversion request is new or editing an existing conve...
   *  `is_renew` {boolean} `true` if PO is going to be renewed and not converted.
   *  `s_date_convert` {string} The existing conversion date, returned as a string for the datepicker.
   *  `s_date_now` {string} The current date, returned as a string.
   *  `s_title` {string} The Purchase Option title.
   *  `text_date_expire` {string} Expiration date in string user-friendly format.
   *  `text_date_payment` {string} Next payment date in string user-friendly format.
   *  `text_note` {?string} The note for the promotion conversion.
   */
  WlClient.prototype.wlLoginPromotionConvertConvertGet = function(params)
  {
    return this.request('/Wl/Login/Promotion/Convert/Convert.json', params || {}, 'GET');
  };

  /**
   * Creates or updates conversion form data for the login promotion.
  Performs all necessary checks and apply changes.
   *
   * Validates access, the target promotion key, conversion type, conversion timing, and the optional scheduled date,
   * then saves the conversion settings. Returns an error if the user is a debtor.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dl_convert The conversion date, in the local time zone.
   * @param {number} params.id_convert The conversion ID. One of the [PromotionConvertSid](#/components/schemas/Wl.Promotion.Convert.Pro...
   * @param {?number} [params.id_convert_when] When conversion should be done. One of the [ConvertWhenSid](#/components/schemas/Wl.Login.Promoti...
   * @param {string} params.k_business The business key.
   * @param {string} params.k_login_promotion The login promotion key.
   * @param {string} params.k_promotion_to The promotion key the given promotion will be converted to.
   * @param {?string} [params.text_note] The note for the promotion conversion.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPromotionConvertConvertPost = function(params)
  {
    return this.request('/Wl/Login/Promotion/Convert/Convert.json', params || {}, 'POST');
  };

  /**
   * Retrieves guest passes for a specific client.
   *
   * Returns all guest passes assigned to the given user, optionally filtered by class and location.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {?string} [params.k_class] Class key to filter guest passes by.
   * @param {?string} [params.k_location] Location key to filter guest passes by.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} List of client's guest passes.
   */
  WlClient.prototype.wlLoginPromotionGuestPassGuestPassList = function(params)
  {
    return this.request('/Wl/Login/Promotion/GuestPass/GuestPassList.json', params || {}, 'GET');
  };

  /**
   * Retrieves guest pass information for a client's membership.
   *
   * Returns the guest pass configuration and remaining usage count for the specified login promotion.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_login_promotion Login promotion key.
   * @returns {Promise<Object>} Response data.
   *  `a_guest_pass` {Object} Guest pass information.
   */
  WlClient.prototype.wlLoginPromotionGuestPassGuestPassGet = function(params)
  {
    return this.request('/Wl/Login/Promotion/GuestPass/GuestPass.json', params || {}, 'GET');
  };

  /**
   * Updates the guest pass remaining usages for a client's membership.
   *
   * Adjusts the remaining guest pass count to the specified value and logs the change. Requires
   *  staff-level edit access for the login promotion.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_login_promotion Login promotion key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPromotionGuestPassGuestPassPut = function(params)
  {
    return this.request('/Wl/Login/Promotion/GuestPass/GuestPass.json', params || {}, 'PUT');
  };

  /**
   * Returns the member's barcode and its expiry time for the specified business and user.
   *
   * If the business uses dynamic barcodes, generates or refreshes a time-limited barcode and returns its value,
   * expiry countdown, and an image URL. If the business uses static barcodes, returns the member's static ID
   * with a zero expiry.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_refresh `true` if a new dynamic ID should be generated.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User unique identifier.
   * @returns {Promise<Object>} Response data.
   *  `i_expire` {number} Number of seconds left until the dynamic ID expires.
   *  `text_barcode` {string} Barcode of the member.
   *  `url_barcode` {string} URL of the barcode image.
   */
  WlClient.prototype.wlLoginMemberDynamicIdDynamicId = function(params)
  {
    return this.request('/Wl/Login/Member/DynamicId/DynamicId.json', params || {}, 'GET');
  };

  /**
   * Gets information about ability of user to pay for given session in any ways.
   *
   * Returns available Purchase Options and session passes that can be used to pay for the specified class session,
   * along with the session price, the client's account balance, and whether the session is free.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_global The start date and time of the class in GMT and MySQL format.
   * @param {string} params.k_business Key of the business in which the request must be processed.
   * @param {string} params.k_class_period The class period key.
   * @param {string} params.uid_client The client user key.
   * @returns {Promise<Object>} Response data.
   *  `a_login_promotion` {Object[]} Any of the client memberships that can be used to pay for the session.
   *  `a_session_pass` {Object[]} Any user's session passes that can be used to pay for the session.
   *  `is_free` {boolean} If `true`, the session is free with no methods of payment. If `false`, the se...
   *  `k_login_promotion` {string} The key of the user's promotion to be used for booking.
   *  `k_session_pass` {string} The key of a session pass that can be used for a single session payment.
   *  `m_account` {string} Account balance.
   *  `m_price` {?string} The price of the session, including any taxes and discounts.
   *  `m_rest` {?string} The user's account balance if they were charged the `m_price` amount.
   */
  WlClient.prototype.wlLoginAttendanceAddAddGet = function(params)
  {
    return this.request('/Wl/Login/Attendance/Add/Add.json', params || {}, 'GET');
  };

  /**
   * Adds client to attendance list.
   *
   * Books the specified client into the given class session using the chosen payment option (debit, Purchase Option,
   * session pass, or unpaid), and returns the resulting visit key, visit status, and a store URL if payment is still
   * required.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_global The start date and time of the class in GMT and MySQL format.
   * @param {boolean} params.is_event_single Defines whether only single session can be booked for block event.
   * @param {string} params.k_business Key of the business in which the request must be processed.
   * @param {string} params.k_class_period The class period key.
   * @param {string} params.uid_client The client user key.
   * @returns {Promise<Object>} Response data.
   *  `id_visit` {number} Possible states of the visit: book, attended, cancelled, etc.
   *  `is_paid` {boolean} If `true`, the visit was automatically paid for in any available way during t...
   *  `k_visit` {string} The key of the booked visit. This will be set on success.
   *  `url_store` {string} The URL link to the store to allow for the payment of the visit.
   */
  WlClient.prototype.wlLoginAttendanceAddAddPost = function(params)
  {
    return this.request('/Wl/Login/Attendance/Add/Add.json', params || {}, 'POST');
  };

  /**
   * Performs access checks and returns a list of users, depending on the search query.
   *
   * When a search string is provided, returns clients whose name or email matches the query within the specified
   * business. When the search string is empty, returns recently viewed clients. Each result includes the client's
   * name, email, phone, member ID, and user key.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_franchisee_search_wide `true` - search among whole franchise; `false` - search in specified business only.
   * @param {string} params.k_business The business key number used internally by WellnessLiving.
   * @param {string} params.text_search The search string. Clients can be matched by name or email.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} A list of users matching the search string.
   *  `can_add` {boolean} If `true`, then this user can add other users via the Add Client page.
   */
  WlClient.prototype.wlLoginSearchStaffAppList = function(params)
  {
    return this.request('/Wl/Login/Search/StaffApp/List.json', params || {}, 'GET');
  };

  /**
   * Calculates amount of cart.
   *
   * Used in the staff app checkout flow to show a live price summary before the staff member processes
   * a client's payment. Returns the full breakdown so the staff member can confirm the total with
   * the client before charging.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_item The list of cart items with the next structure:
   * @param {number} params.f_discount_percent The discount as a percentage.
   * @param {boolean} params.is_check_cart_item If `true`, every item is checked at the cart. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location The business location key.
   * @param {string} params.m_discount_flat The manual discount amount in dollars, excluding tax.
   * @param {string} params.m_tip The amount of tips.
   * @param {?string} [params.text_discount_code] The discount code.
   * @param {string} params.uid_current The key of the current user.
   * @param {string} params.uid_customer The key of the user who performed the purchase.
   * @returns {Promise<Object>} Response data.
   *  `a_discount_code` {Object} A list of available discount codes with the next structure:
   *  `is_commission` {boolean} Determines whether the business applied a commission at checkout.
   *  `is_discount_code_mode_select` {boolean} Determines, how staff sees discount codes in Store.
   *  `is_receipt_note` {boolean} Determines whether to display custom receipt notes at checkout.
   *  `m_discount` {string} The discount amount in dollars, excluding tax.
   *  `m_discount_total` {string} The discount amount applied to the cart's total amount, including taxes.
   *  `m_subtotal` {string} The subtotal amount.
   *  `m_tax` {string} The amount of tax.
   *  `m_tip_purchase` {string} The amount of appointment tips.
   *  `m_total` {string} The cart's total amount.
   *  `text_error_code` {?string} The discount code's error code.
   *  `text_error_message` {?string} The discount code's error message.
   *  `text_receipt_note` {string} The custom receipt note's text.
   */
  WlClient.prototype.wlCatalogStaffAppCatalogCartCatalogCart = function(params)
  {
    return this.request('/Wl/Catalog/StaffApp/CatalogCart/CatalogCart.json', params || {}, 'GET');
  };

  /**
   * Returns all sale items available in the business for staff, optionally filtered by location and visit.
   *
   * Used in the staff app to populate the add-item picker during checkout. Returns the products and
   * services the staff member is allowed to sell at the current location. When a visit key is provided,
   * the list is filtered to items that are relevant to that visit.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to get categories for.
   * @param {string} params.k_location The location key.
   * @param {string} params.k_visit The visit key to pay for.
   * @returns {Promise<Object>} Response data.
   *  `a_shop_product` {Object[]} Products in the online store category.
   *  `can_add` {boolean} If `true`, the current user is able to add the purchased item to the account.
   */
  WlClient.prototype.wlCatalogStaffAppCatalogListCatalogList = function(params)
  {
    return this.request('/Wl/Catalog/StaffApp/CatalogList/CatalogList.json', params || {}, 'GET');
  };

  /**
   * Calculates price information about sale item.
   *
   * Used in the staff app checkout to show the real-time price of a single line item as the staff
   * member configures it (adjusting quantity, custom price, or proration). Returns the full tax
   * breakdown so the staff member sees exactly what the client will be charged.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_config Configuration information about the item, which can specify prorated amounts.
   * @param {Object} params.a_tax Contains information about edited taxes.
   * @param {number} params.i_quantity The quantity of items.
   * @param {number} params.id_sale The ID of the sale category. One of the [RsSaleSid](#/components/schemas/RsSaleSid) constants.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_id The key of the sale item.
   * @param {string} params.k_shop_product_option The product option key.
   * @param {string} params.m_price The custom price of the sale item.
   * @param {string} params.uid The ID of the user who performed the actions.
   * @returns {Promise<Object>} Response data.
   *  `a_tax_data` {Object} Contains information about calculated taxes.
   *  `m_prorate` {string} The prorated amount.
   *  `m_subtotal` {string} The amount of the sale item, excluding taxes.
   *  `m_tax` {string} The calculated amount of tax.
   *  `m_total` {string} The calculated amount of the sale item, including taxes.
   */
  WlClient.prototype.wlCatalogStaffAppCatalogViewCatalogView = function(params)
  {
    return this.request('/Wl/Catalog/StaffApp/CatalogView/CatalogView.json', params || {}, 'GET');
  };

  /**
   * Returns configuration for the Attendance Kiosk.
   *
   * Returns kiosk display settings including custom image, logo, direction mode, background color,
   * and business name for the specified business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business.
   * @returns {Promise<Object>} Response data.
   *  `a_image` {Object} Image data for image which will be displayed in attendance web app page.
   *  `hide_profile_images` {boolean} Whether to hide client profile images.
   *  `i_attendance_direct_delay` {number} Number of seconds of inactivity before automatic redirect.
   *  `i_book_open` {number} Number of minutes for the client check-in window after session has started.
   *  `i_book_quick_app` {number} Units of time for the look ahead window for attendance app.
   *  `i_confirm_delay` {number} Delay in seconds on attendance web app confirmation screen before redirect to...
   *  `id_attendance_direct` {number} List of places to redirect user from attendance list after inactivity.
   *  `id_book_quick_app` {number} A class for managing time intervals.
   *  `is_attend_free` {boolean} `true` if clients are allowed to check-in unpaid, `false` otherwise.
   *  `is_book_open` {boolean} Whether to allow sign-ins to classes in progress.
   *  `is_book_optional` {boolean} `true` if clients are allowed to check-in without booking prior,
   *  `is_book_quick_app` {boolean} `true` if clients are allowed to sign in before session is started.,
   *  `show_business_name` {boolean} `true` - show business name on attendance web app; `false` - do not show.
   *  `show_confirm_screen` {boolean} `true` - show confirm screen on attendance web app;
   *  `text_business_name` {string} Name of the business to display in the attendance web app.
   */
  WlClient.prototype.wlReceptionRosterDesignReceptionRosterDesign = function(params)
  {
    return this.request('/Wl/Reception/Roster/Design/ReceptionRosterDesign.json', params || {}, 'GET');
  };

  /**
   * Returns the list of required partner fields for the specified wellness program.
   *
   * Returns enrollment fields defined by the insurance partner along with reimbursement account fields if the
   * program requires reimbursement. Each field includes validation rules, display labels, and configuration
   * options for rendering the enrollment form.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business in which the enrollment is performed.
   * @param {string} params.k_wellness_program "Wellness Program" key.
   * @returns {Promise<Object>} Response data.
   *  `a_field_list` {Object} The partner field list:
   */
  WlClient.prototype.wlInsuranceEnrollmentFieldEnrollmentFieldListGet = function(params)
  {
    return this.request('/Wl/Insurance/Enrollment/Field/EnrollmentFieldList.json', params || {}, 'GET');
  };

  /**
   * Validates the list of fields filled in by the user for enrollment.
   *
   * Accepts the values submitted by the user for the wellness program enrollment form and validates them
   * against the partner's field rules before passing them to the payment API.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business in which the enrollment is performed.
   * @param {string} params.k_wellness_program "Wellness Program" key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlInsuranceEnrollmentFieldEnrollmentFieldListPost = function(params)
  {
    return this.request('/Wl/Insurance/Enrollment/Field/EnrollmentFieldList.json', params || {}, 'POST');
  };

  /**
   * Retrieves all reward action categories for business specified in
  `k_business`.
   *
   * Returns the list of reward action categories including category type ID, database key, and title for the
   * given business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business ID of a business to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_category` {Object}
   */
  WlClient.prototype.wlRewardActionCategoryListCategoryList = function(params)
  {
    return this.request('/Wl/Reward/Action/CategoryList/CategoryList.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about current score in wellnessliving points.
   *
   * Returns the user's current reward point balance, their rank in the first available leaderboard, and the
   * leaderboard title for the specified business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business ID of a business to show information for.
   * @param {string} params.uid UID to retrieve information about.
   * @returns {Promise<Object>} Response data.
   *  `i_board_rank` {number} Current user's rank in the first leaderboard.
   *  `i_score` {number} Current score in wellnessliving points.
   *  `s_board_title` {string} Title of the first leaderboard.
   */
  WlClient.prototype.wlRewardScoreCurrentCurrent = function(params)
  {
    return this.request('/Wl/Reward/Score/Current/Current.json', params || {}, 'GET');
  };

  /**
   * Retrieves all reward boards for business specified in `k_business`.
   *
   * Returns the list of reward boards available to the given user in the business, including board key and title,
   * filtered to exclude boards the user is not eligible to view.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business to show information for.
   * @param {string} params.uid User to retrieve information about.
   * @returns {Promise<Object>} Response data.
   *  `a_reward_board` {?Object[]} A list of reward boards. `null` if not loaded.
   */
  WlClient.prototype.wlRewardBoardBoardListList = function(params)
  {
    return this.request('/Wl/Reward/Board/BoardList/List.json', params || {}, 'GET');
  };

  /**
   * Sends an OTP code to the user's email or phone number to initiate authorization.
   *
   * Checks the OTP rate limit, generates a new code for the given user, and dispatches it via email, SMS, or
   * both depending on `$is_mail` and `$is_phone`. The user must not be already signed in and must not be an admin.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_mail Whether OTP code will be sending to user via email.
   * @param {boolean} params.is_phone Whether OTP code will be sending to user via email.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPassportLoginEnterPassportOtpGet = function(params)
  {
    return this.request('/Wl/Passport/Login/Enter/PassportOtp.json', params || {}, 'GET');
  };

  /**
   * Verifies the submitted OTP code and establishes an authorized session for the user.
   *
   * Validates the OTP code for the given user, signs in the session, fires the post-login event,
   * completes business registration if applicable, and returns the redirect URL for the business frontend.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `url_redirect` {string} Redirect url after successful authorization.
   */
  WlClient.prototype.wlPassportLoginEnterPassportOtpPost = function(params)
  {
    return this.request('/Wl/Passport/Login/Enter/PassportOtp.json', params || {}, 'POST');
  };

  /**
   * Sends an OTP code to the user's email or phone number to initiate authorization.
   *
   * Checks the OTP rate limit, generates a new code for the given user, and dispatches it via email, SMS, or
   * both depending on `$is_mail` and `$is_phone`. The user must not be already signed in and must not be an admin.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.text_mail Email address OTP code will be sent to.
   * @param {string} params.text_phone Phone number OTP code will be sent to.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPassportLoginRegisterRegisterOtpGet = function(params)
  {
    return this.request('/Wl/Passport/Login/Register/RegisterOtp.json', params || {}, 'GET');
  };

  /**
   * Verifies the submitted OTP code and establishes an authorized session for the user.
   *
   * Validates the OTP code for the given user, signs in the session, fires the post-login event,
   * completes business registration if applicable, and returns the redirect URL for the business frontend.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `i_attempt_left` {number} Number of attempts left to submit the correct otp code.
   *  `s_jwt_token` {string} JWT token generated after successful otp validation.
   *  `uid` {string} Key of the user, which was signed in after successful otp verification.
   *  `url_redirect` {string} Redirect url after successful authorization.
   */
  WlClient.prototype.wlPassportLoginRegisterRegisterOtpPost = function(params)
  {
    return this.request('/Wl/Passport/Login/Register/RegisterOtp.json', params || {}, 'POST');
  };

  /**
   * Creates or updates the integration credentials for the given business application.
   *
   * If a record already exists for `k_business`, it is updated
   * in place. Otherwise, a new record is created and linked to the business.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `k_spa_application` {string} Key of the created or updated application.
   */
  WlClient.prototype.wlSkinApplicationConnectApplicationConnect = function(params)
  {
    return this.request('/Wl/Skin/Application/Connect/ApplicationConnect.json', params || {}, 'POST');
  };

  /**
   * Gets application resources.
   *
   * Returns image resource groups, version information, and Google OAuth credentials for one or
   * all White Label mobile applications. Called by the build pipeline to gather the data needed to
   * generate application source bundles. Pass a business key to restrict results to a single app.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_application` {Object[]} The application data. Key is the business key.
   */
  WlClient.prototype.wlSkinApplicationResourceApplicationResource = function(params)
  {
    return this.request('/Wl/Skin/Application/Resource/ApplicationResource.json', params || {}, 'GET');
  };

  /**
   * Saves text metadata for the given business application.
   *
   * Persists all text fields of the Client App Materials form (store listing copy, contact details,
   * privacy policy URL, etc.) for the specified business. File assets such as icons and screenshots
   * are submitted separately via [ApplicationResourceUploadApi](/Wl/Skin/Application/Resource/ApplicationResourceUpload.json). Requires the App Build
   * Automation edit privilege.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlSkinApplicationResourceApplicationResourceMaterial = function(params)
  {
    return this.request('/Wl/Skin/Application/Resource/ApplicationResourceMaterial.json', params || {}, 'POST');
  };

  /**
   * Uploads image and file assets for the given business application.
   *
   * Each image must be submitted as `a_image_upload[{key}]`, where `{key}` is the image ID.
   * The `google-services.json` file must be submitted as `google_services_json`.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlSkinApplicationResourceApplicationResourceUpload = function(params)
  {
    return this.request('/Wl/Skin/Application/Resource/ApplicationResourceUpload.json', params || {}, 'POST');
  };

  /**
   * Returns data for group edit form.
   *
   * Gets full information about a client group.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_member_group Member group key.
   * @param {string} params.k_search_template Key of existing template.
   * @param {string} params.s_search_group Unique string identifying the name of the search group.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `id_conversion_type` {?number} Lead conversion type.
   *  `id_member_group_shape` {number} Shapes of client group icons.
   *  `is_brivo_active` {boolean} Whether Facility Access enabled for group.
   *  `is_brivo_invitation_active` {boolean} Whether Brivo invitation feature enabled for the group.
   *  `is_icon` {boolean} `true` to enable group icon. `false` to disable.
   *  `is_update` {boolean} Whether auto-update enabled for group.
   *  `k_search_template` {string} Key of existing template.
   *  `s_color_background` {string} Hexadecimal color of icon background.
   *  `s_color_foreground` {string} Hexadecimal color of icon foreground.
   *  `s_icon` {string} Characters on icon.
   *  `text_title` {string} Title for a client group.
   */
  WlClient.prototype.wlMemberGroupEditEditGet = function(params)
  {
    return this.request('/Wl/Member/Group/Edit/Edit.json', params || {}, 'GET');
  };

  /**
   * Adds or changes a client group.
   *
   * Use to update existing client group or create a new one.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_member_group Member group key.
   * @param {string} params.k_search_template Key of existing template.
   * @param {string} params.s_search_group Unique string identifying the name of the search group.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `k_member_group` {string} Member group key.
   *  `k_search_template` {string} Key of existing template.
   *  `text_warning` {?string} Additional warning message if there were some minor issues with request.
   */
  WlClient.prototype.wlMemberGroupEditEditPost = function(params)
  {
    return this.request('/Wl/Member/Group/Edit/Edit.json', params || {}, 'POST');
  };

  /**
   * Adds or edit client group Query.
   *
   * Use to update existing client group search query or create a new one. Member group should be already created.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_member_group Member group key.
   * @param {string} params.k_search_template Key of existing template.
   * @param {string} params.s_search_group Unique string identifying the name of the search group.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `text_warning` {?string} Additional warning message if there were some minor issues with request.
   */
  WlClient.prototype.wlMemberGroupEditEditPut = function(params)
  {
    return this.request('/Wl/Member/Group/Edit/Edit.json', params || {}, 'PUT');
  };

  /**
   * Deletes the user from the group.
   *
   * Removes the specified user from the given member group within the business after verifying access rights
   * and that the group key is valid.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] Key of the business.
   * @param {string} params.uid_user UID of a user.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMemberGroupUserUserGroupDelete = function(params)
  {
    return this.request('/Wl/Member/Group/User/UserGroup.json', params || {}, 'DELETE');
  };

  /**
   * Gets information about all groups to which the specified user belongs.
   *
   * Returns the list of member group keys for the given user within the specified business, populating
   * `$a_group_info` with those keys after access validation.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] Key of the business.
   * @param {string} params.uid_user UID of a user.
   * @returns {Promise<Object>} Response data.
   *  `a_group_info` {string[]} All groups to which the specified user belongs.
   *  `is_quick_group` {boolean} Whether the user is in the quick group or not.
   */
  WlClient.prototype.wlMemberGroupUserUserGroupGet = function(params)
  {
    return this.request('/Wl/Member/Group/User/UserGroup.json', params || {}, 'GET');
  };

  /**
   * Adds a user to a group.
   *
   * Assigns the specified user to the given member group within the business after verifying access rights
   * and that the group key is valid.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] Key of the business.
   * @param {string} params.uid_user UID of a user.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMemberGroupUserUserGroupPost = function(params)
  {
    return this.request('/Wl/Member/Group/User/UserGroup.json', params || {}, 'POST');
  };

  /**
   * Removes groups.
   *
   * Deletes specified groups and associated search templates.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMemberGroupGroupListListDelete = function(params)
  {
    return this.request('/Wl/Member/Group/GroupList/List.json', params || {}, 'DELETE');
  };

  /**
   * Returns all member groups list in the business if `$a_member_group_select` is empty,
  otherwise filters result according to `$a_member_group_select`.
   *
   * If `is_return_members` is `true` includes in the result list of members of each groups.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_member_group_select] List of groups for filtering groups of business.
   * @param {boolean} params.is_churn_risk Whether include "Isaac Churn Risk" group.
   * @param {boolean} params.is_return_members Whether include a list of members of groups.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   *  `a_member_group` {Object[]} Member groups list:
   */
  WlClient.prototype.wlMemberGroupGroupListListGet = function(params)
  {
    return this.request('/Wl/Member/Group/GroupList/List.json', params || {}, 'GET');
  };

  /**
   * Updates the order of groups in a list.
   *
   * Saves the display order of member groups for the business using the positions supplied in
   * `$a_member_group_order`, verifying that all specified group keys belong to the business before writing.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMemberGroupGroupListListPut = function(params)
  {
    return this.request('/Wl/Member/Group/GroupList/List.json', params || {}, 'PUT');
  };

  /**
   * Changes states of field.
   *
   * Updates one or more state flags (`is_active`, `is_public`, `is_require`, `is_require_staff`) for the specified
   * progress field and returns the new values. At least one flag must be provided; the field must be active to
   * change its required state.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_field Field key.
   * @returns {Promise<Object>} Response data.
   *  `id_field` {number} List of progress log fields.
   *  `is_active` {?boolean} Whether field is active and should be displayed on page.
   *  `is_public` {?boolean} Whether this field is public. If this field is set to `false`, this field is ...
   *  `is_require` {?boolean} Whether field value is required for clients.
   *  `is_require_staff` {?boolean} Whether field value is required for staffs.
   *  `text_title` {?string} Field title.
   */
  WlClient.prototype.wlMemberProgressFieldState = function(params)
  {
    return this.request('/Wl/Member/Progress/Field/State.json', params || {}, 'PUT');
  };

  /**
   * Verifies client's progress log data.
   *
   * Marks all unverified progress log entries for the specified user and date as verified by the currently
   * signed-in staff member, then triggers a search index reindex for the user.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date Local date without time of the progress log.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMemberProgressLogVerify = function(params)
  {
    return this.request('/Wl/Member/Progress/Log/Verify.json', params || {}, 'PUT');
  };

  /**
   * Gets information about discount.
   *
   * Used to load the discount code editor form. Returns the full configuration of an existing discount
   * code so the staff member can review or modify it: value, date range, usage limit, which items it
   * applies to, client type restrictions, and whether it is currently active.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_discount_code Key of the discount code. Empty, if this is creation of a new code.
   * @returns {Promise<Object>} Response data.
   *  `a_component` {Object[]} List of components that are affected by this discount code.
   *  `a_login_type` {string[]} List of client types.
   *  `a_member_group` {string[]} List of client groups.
   *  `dl_end` {?string} Expiration date. `null` if discount code is never expires.
   *  `dl_start` {string} Activation date.
   *  `f_value` {string} Value of the percentage or fixed discount.
   *  `i_duration` {number} Count of calendar periods from `id_duration` before expiration.
   *  `i_limit` {number} Maximum count of usage. Zero means unlimited usage.
   *  `id_duration` {number} A class for managing time intervals.
   *  `id_duration_type` {number} Class to process string identifiers for duration types
   *  `is_active` {boolean} `true` means discount code is active.
   *  `is_auto_renew` {boolean} `true` means membership will auto-renew at discounted rate.
   *  `is_coupon` {boolean} `true` means discount code can reduce price of the gift cards.
   *  `is_first_payment` {boolean} `true` means discount code can be applied to first membership payment only.
   *  `is_login_type` {boolean} `true` means that only selected client types or groups can use this discount ...
   *  `is_online` {boolean} `true` if clients can use this discount code in online store,
   *  `is_percent` {boolean} `true` means discount value is percent from the purchase amount.
   *  `is_purchase_all` {boolean} `true` means discount can be applied to all products and purchase options.
   *  `s_component` {string} List of product and purchase options that are effected with this discount code.
   *  `text_code` {string} Discount code that can be used during purchase.
   *  `...` {*}
   */
  WlClient.prototype.wlDiscountCodeEditDiscountCodeEditGet = function(params)
  {
    return this.request('/Wl/Discount/Code/Edit/DiscountCodeEdit.json', params || {}, 'GET');
  };

  /**
   * Saves information about discount code or create new.
   *
   * Used to create a new discount code or update an existing one from the backend editor. Pass no
   * discount code key to create; pass an existing key to update. Returns the key of the saved code.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_discount_code Key of the discount code. Empty, if this is creation of a new code.
   * @returns {Promise<Object>} Response data.
   *  `k_discount_code` {string} Key of the discount code. Empty, if this is creation of a new code.
   */
  WlClient.prototype.wlDiscountCodeEditDiscountCodeEditPost = function(params)
  {
    return this.request('/Wl/Discount/Code/Edit/DiscountCodeEdit.json', params || {}, 'POST');
  };

  /**
   * Duplicates an existing discount code.
   *
   * Used in the backend when a staff member wants to create a similar discount code without re-entering
   * all settings manually. Creates an exact copy with a new unique code string.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_discount_code Key of the discount code. Empty, if this is creation of a new code.
   * @returns {Promise<Object>} Response data.
   *  `k_discount_code` {string} Key of the discount code. Empty, if this is creation of a new code.
   */
  WlClient.prototype.wlDiscountCodeEditDiscountCodeEditPut = function(params)
  {
    return this.request('/Wl/Discount/Code/Edit/DiscountCodeEdit.json', params || {}, 'PUT');
  };

  /**
   * Deletes the specified credential for the application.
   *
   * Accepts a credential CID identifying the credential type (such as Google or Facebook), resolves
   * the corresponding credential for the current application, and removes it from the database.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.cid_credential The CID of the credential.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.coreRequestApiApplicationCredentialCredentialDelete = function(params)
  {
    return this.request('/Core/Request/Api/Application/Credential/Credential.json', params || {}, 'DELETE');
  };

  /**
   * Returns the credential data for the application.
   *
   * Accepts a credential CID identifying the credential type, loads the credential stored for the current
   * application, and returns it as a JSON-encoded object containing only public fields.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.cid_credential The CID of the credential.
   * @returns {Promise<Object>} Response data.
   *  `json_credential` {string} An array with the credential.
   */
  WlClient.prototype.coreRequestApiApplicationCredentialCredentialGet = function(params)
  {
    return this.request('/Core/Request/Api/Application/Credential/Credential.json', params || {}, 'GET');
  };

  /**
   * Saves the credential for the application.
   *
   * Accepts a credential CID and a JSON-encoded object with credential fields, validates the data,
   * and stores or replaces the credential for the current application.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.cid_credential The CID of the credential.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.coreRequestApiApplicationCredentialCredentialPut = function(params)
  {
    return this.request('/Core/Request/Api/Application/Credential/Credential.json', params || {}, 'PUT');
  };

  /**
   * Retrieves assets required for a service booking at the given date and time, including availability and busy status.
   *
   * Returns the asset categories and individual assets linked to the service at the given location.
   *  Each asset includes its availability flag for the requested time slot. The response also includes
   *  `a_resource_busy` with currently reserved asset slots and a flag indicating
   *  whether the current user is allowed to book unavailable assets.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_start The appointment booking date selected by the user.
   * @param {number} params.id_mode Mode type, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants.
   * @param {boolean} params.is_backend If `true`, back-end mode is selected.
   * @param {boolean} params.is_grid_any Whether to show both grid layouts and custom layouts.
   * @param {boolean} params.is_show_unavailable_assets Whether unavailable assets should be included.
   * @param {?string} [params.k_appointment_ignore] The appointment booking key to ignore when `a_resource_busy` is derived.
   * @param {string} params.k_location The selected location key.
   * @param {string} params.k_service The selected service's key.
   * @param {string} params.k_timezone Timezone of date and time of service start.
   * @param {string} params.uid User to get information for.
   * @returns {Promise<Object>} Response data.
   *  `a_resource_busy` {string[][]} A list of reserved assets.
   *  `a_resource_type` {Object} A list of assets required for the service booking.
   *  `can_book_unavailable_assets` {boolean} Can the staff members book reserved assets.
   */
  WlClient.prototype.wlAppointmentBookAssetServiceService = function(params)
  {
    return this.request('/Wl/Appointment/Book/Asset/Service/Service.json', params || {}, 'GET');
  };

  /**
   * Retrieves lifetime visit totals.
   *
   * Returns aggregated lifetime attendance statistics for the specified user in the given
   *  business. Used to display summary visit counts and related metrics on the client profile
   *  schedule page.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_total` {Object[]} Report totals.
   */
  WlClient.prototype.wlProfileAttendanceScheduleFrontendLifetimeTotals = function(params)
  {
    return this.request('/Wl/Profile/Attendance/Schedule/Frontend/LifetimeTotals.json', params || {}, 'GET');
  };

  /**
   * Returns the Achieve subscription plan flags (free and white-label) for the given business.
   *
   * Used to determine which features and branding options are available in the Achieve mobile app for a
   * business. For franchisees, the franchisor's subscription is used. Call this before rendering any
   * Achieve-specific UI that depends on the plan tier.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key to check Achieve app subscription plan.
   * @returns {Promise<Object>} Response data.
   *  `is_free` {boolean} If Achieve app has free subscription plan is `true`, otherwise (white label, ...
   *  `is_white_label` {boolean} If Achieve app has white label subscription plan is `true`, otherwise (free, ...
   */
  WlClient.prototype.wlBusinessAccountSubscriptionAchieveAchieveSubscription = function(params)
  {
    return this.request('/Wl/Business/Account/Subscription/Achieve/AchieveSubscription.json', params || {}, 'GET');
  };

  /**
   * Claims the guest pass invitation for the current user and accepts it.
   *
   * Validates the invitation secret, verifies the current user is the intended recipient,
   *  and marks the invitation as accepted.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPromotionGuestPassClaimClaim = function(params)
  {
    return this.request('/Wl/Login/Promotion/GuestPass/Claim/Claim.json', params || {}, 'POST');
  };

  /**
   * Revokes a guest pass invitation.
   *
   * Marks the invitation as rejected and sends an expiry notification to the guest.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.s_secret Secret of the invitation.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPromotionGuestPassInviteInviteDelete = function(params)
  {
    return this.request('/Wl/Login/Promotion/GuestPass/Invite/Invite.json', params || {}, 'DELETE');
  };

  /**
   * Sends a reminder notification for a guest pass invitation.
   *
   * Resends the invitation notification to the guest using the reminder email or SMS template.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.s_secret Secret of the invitation.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPromotionGuestPassInviteInvitePut = function(params)
  {
    return this.request('/Wl/Login/Promotion/GuestPass/Invite/Invite.json', params || {}, 'PUT');
  };

  /**
   * Returns a list of guest pass invitations for the given membership or user.
   *
   * Supports filtering by host membership, guest user, host user, date range, and whether expired
   *  or revoked invitations are included.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dl_end] End of the guest pass activity period.
   * @param {?string} [params.dl_start] Start of the guest pass activity period.
   * @param {boolean} params.is_include_expire Whether to include invitations that have already expired or were revoked.
   * @param {string} params.k_business Key of the business within which guest pass invitations are managed.
   * @param {?string} [params.k_login_promotion] Key of the login promotion which provides the guest pass invitation.
   * @param {?string} [params.uid_guest] Key of the invited user.
   * @param {?string} [params.uid_host] Key of the host user who sent the invitation.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} List of guest pass invitations suitable for the specific request parameters.
   */
  WlClient.prototype.wlLoginPromotionGuestPassInviteInviteListGet = function(params)
  {
    return this.request('/Wl/Login/Promotion/GuestPass/Invite/InviteList.json', params || {}, 'GET');
  };

  /**
   * Sends a guest pass invitation to a user.
   *
   * Creates a new invitation for the specified guest pass and sends a notification.
   * The guest can be identified by user key or by contact details when no account exists.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business within which guest pass invitations are managed.
   * @param {?string} [params.k_login_promotion] Key of the login promotion which provides the guest pass invitation.
   * @param {?string} [params.uid_guest] Key of the invited user.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPromotionGuestPassInviteInviteListPost = function(params)
  {
    return this.request('/Wl/Login/Promotion/GuestPass/Invite/InviteList.json', params || {}, 'POST');
  };

  /**
   * Applies the guest pass of the specified login promotion to the attendee's visit.
   *
   * If the visit is already paid (with a regular session pass or an existing guest pass),
   * the previous payment is unwound before the new guest pass is applied.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlLoginPromotionGuestPassApplyApply = function(params)
  {
    return this.request('/Wl/Login/Promotion/GuestPass/Apply/Apply.json', params || {}, 'POST');
  };

  /**
   * Gets custom pattern data.
   *
   * Loads the saved notification template for the given business and mail type together with the
   *  default template, the reply-to business contact data and the list of variables available for
   *  substitution. When a list is requested, also loads all custom templates for the mail form.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_mail ID of the notification. One of [RsMailSid](#/components/schemas/RsMailSid) constants. `0` for emp...
   * @param {boolean} params.is_custom_list Whether to get a list of custom template data. `true` - to get a list, `false` - otherwise.
   * @param {?string} [params.k_business] Business key.
   * @param {string} params.k_mail_pattern Mail pattern key.
   * @param {string} params.sid_mail_form SID of the mail form. String representation of one from [RsMailFormSid](#/components/schemas/RsMa...
   * @returns {Promise<Object>} Response data.
   *  `a_business_data` {Object} Business data.
   *  `a_help_data` {?Object} Help data for variables.
   *  `a_pattern_load` {Object} Mail pattern data to load.
   *  `a_pattern_load_default` {Object} Default mail pattern data to load.
   *  `json_pattern_list_load` {string} List of mail patterns data to load.
   *  `text_phone_formatted` {string} Business sender phone formatted.
   */
  WlClient.prototype.wlMailPatternAutomatedMarketingCustomTemplatePatternGet = function(params)
  {
    return this.request('/Wl/Mail/Pattern/AutomatedMarketing/CustomTemplate/Pattern.json', params || {}, 'GET');
  };

  /**
   * Saves custom pattern.
   *
   * Validates and stores the submitted notification template (email, push or SMS) for the given
   *  business. A system template edited under a business is copied into that business instead of
   *  modifying the original. The saved mail pattern key is returned in
   *  `k_mail_pattern`.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_mail ID of the notification. One of [RsMailSid](#/components/schemas/RsMailSid) constants. `0` for emp...
   * @param {?string} [params.k_business] Business key.
   * @param {string} params.k_mail_pattern Mail pattern key.
   * @returns {Promise<Object>} Response data.
   *  `k_mail_pattern` {string} Mail pattern key.
   */
  WlClient.prototype.wlMailPatternAutomatedMarketingCustomTemplatePatternPost = function(params)
  {
    return this.request('/Wl/Mail/Pattern/AutomatedMarketing/CustomTemplate/Pattern.json', params || {}, 'POST');
  };

  /**
   * Returns field data.
   *
   * Loads the configuration of the specified progress field for the given business, including its type,
   * measurement unit, visibility settings, and title, and populates the result properties accordingly.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_field Field key.
   * @returns {Promise<Object>} Response data.
   *  `a_measurement` {number[]} A list of field measurement. See [MeasurementSid](#/components/schemas/Wl.Mem...
   *  `a_type` {number[]} A list of field type. See [TypeSid](#/components/schemas/Wl.Member.Progress.F...
   *  `id_field` {number} List of progress log fields.
   *  `id_measurement_unit` {number} Possible measurement units of the progress fields values.
   *  `id_type` {number} Possible types of the progress fields values.
   *  `is_active` {boolean} Whether field is active and should be displayed on page.
   *  `is_public` {boolean} Whether this field is public. If this field is set to `false`, this field is ...
   *  `is_require` {boolean} Whether field value is required for clients.
   *  `is_require_staff` {boolean} Whether field value is required for staffs.
   *  `text_title` {?string} Field title.
   */
  WlClient.prototype.wlMemberProgressFieldEditFieldGet = function(params)
  {
    return this.request('/Wl/Member/Progress/Field/Edit/Field.json', params || {}, 'GET');
  };

  /**
   * Saves field data.
   *
   * Updates the configuration of the specified progress field, validating measurement unit, type, and title
   * constraints before persisting the changes. Logs the change when the field data is modified.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_field Field key.
   * @returns {Promise<Object>} Response data.
   *  `text_title` {?string} Field title.
   */
  WlClient.prototype.wlMemberProgressFieldEditFieldPost = function(params)
  {
    return this.request('/Wl/Member/Progress/Field/Edit/Field.json', params || {}, 'POST');
  };

  /**
   * Returns progress log data.
   *
   * Loads field values recorded for the specified user on the given date (defaulting to the business's current
   * local date), and also returns the last date the user entered progress data and whether the viewer is staff.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date Progress log local date.
   * @param {string} params.k_business Business key.
   * @param {?string} [params.uid] User key.
   * @returns {Promise<Object>} Response data.
   *  `a_field_list` {Object[]} Field log data.
   *  `dt_last` {?string} Last local date when the user entered progress values. `null` if the user had...
   *  `is_staff` {boolean} How we want to see this page. As a staff or as a user.
   */
  WlClient.prototype.wlMemberProgressLogEditLogGet = function(params)
  {
    return this.request('/Wl/Member/Progress/Log/Edit/Log.json', params || {}, 'GET');
  };

  /**
   * Saves progress fields log.
   *
   * Validates and persists the field values for the specified user and date, enforcing access
   * rules (clients cannot edit verified entries), and logs the change when data is modified.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date Progress log local date.
   * @param {string} params.k_business Business key.
   * @param {?string} [params.uid] User key.
   * @returns {Promise<Object>} Response data.
   *  `a_field_list` {Object[]} Field log data.
   */
  WlClient.prototype.wlMemberProgressLogEditLogPost = function(params)
  {
    return this.request('/Wl/Member/Progress/Log/Edit/Log.json', params || {}, 'POST');
  };

  /**
   * Deletes progress image.
   *
   * Removes the progress picture for the specified user and date from storage and deletes the corresponding
   * progress log record from the database, then logs the change.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dt_date] Local date of the progress picture.
   * @param {?string} [params.k_business] Business key.
   * @param {?string} [params.uid] User key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMemberProgressLogImageImageDelete = function(params)
  {
    return this.request('/Wl/Member/Progress/Log/Image/Image.json', params || {}, 'DELETE');
  };

  /**
   * Returns progress picture data.
   *
   * Loads the progress picture for the specified user and date, returning image storage data, thumbnail
   * dimensions, the upload URL, and a direct link to the image.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dt_date] Local date of the progress picture.
   * @param {?string} [params.k_business] Business key.
   * @param {?string} [params.uid] User key.
   * @returns {Promise<Object>} Response data.
   *  `a_image` {Object} Image data:
   */
  WlClient.prototype.wlMemberProgressLogImageImageGet = function(params)
  {
    return this.request('/Wl/Member/Progress/Log/Image/Image.json', params || {}, 'GET');
  };

  /**
   * Saves progress picture.
   *
   * Applies the image command from `$s_command` to the progress picture for the specified user and date,
   * persists the result in storage, and writes or updates the corresponding progress log record in the database.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dt_date] Local date of the progress picture.
   * @param {?string} [params.k_business] Business key.
   * @param {?string} [params.uid] User key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlMemberProgressLogImageImagePost = function(params)
  {
    return this.request('/Wl/Member/Progress/Log/Image/Image.json', params || {}, 'POST');
  };

  /**
   * Returns list of dates where client logged his progress.
   *
   * Retrieves all distinct dates on which the given user recorded progress entries for the business, excluding
   * the most recent date (since it cannot be compared with itself). Returns an empty array when fewer than two
   * entries exist.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of business to get information for.
   * @param {string} params.uid User key to search dates for.
   * @returns {Promise<Object>} Response data.
   *  `a_date` {string[]} List of local dates of the progress log.
   */
  WlClient.prototype.wlMemberProgressLogCompareCompare = function(params)
  {
    return this.request('/Wl/Member/Progress/Log/Compare/Compare.json', params || {}, 'GET');
  };

  /**
   * Returns progress goal log data.
   *
   * Loads the current goal values for all configured progress fields for the specified user and business,
   * and also returns whether the current viewer is a staff member.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {?string} [params.uid] User key.
   * @returns {Promise<Object>} Response data.
   *  `a_field_list` {Object[]} Field log data.
   *  `is_staff` {boolean} How we want to see this page. As a staff or as a user.
   */
  WlClient.prototype.wlMemberProgressGoalEditGoalGet = function(params)
  {
    return this.request('/Wl/Member/Progress/Goal/Edit/Goal.json', params || {}, 'GET');
  };

  /**
   * Saves progress goal fields log.
   *
   * Validates and persists the goal values provided in `$a_field_goal` for the specified user and business,
   * then returns the updated field list in `$a_field_list`.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {?string} [params.uid] User key.
   * @returns {Promise<Object>} Response data.
   *  `a_field_list` {Object[]} Field log data.
   */
  WlClient.prototype.wlMemberProgressGoalEditGoalPost = function(params)
  {
    return this.request('/Wl/Member/Progress/Goal/Edit/Goal.json', params || {}, 'POST');
  };

  /**
   * Returns information about product options.
  Works in two modes: review and search.
  In review mode, the method returns products with changed inventory quantities and notes.
  In search mode, the method returns one product and its options (the result of searching by product barcode).
   *
   * Returns product option details including the current inventory quantity, last change date,
   * and notes. In barcode search mode, returns matching products; in review mode, returns only
   * options whose inventory or notes have been modified via the pending quantity or note maps.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_note The list of notes for product options in the store.
   * @param {number[]} params.a_quantity The list of product option quantities in the store.
   * @param {string} params.k_business The current business.
   * @param {string} params.text_barcode The product barcode, used for the search.
   * @returns {Promise<Object>} Response data.
   *  `a_product_option` {Object[]} Information about product options for review or search.
   *  `text_user_name` {string} The current username.
   */
  WlClient.prototype.wlShopProductOptionInventoryCountInventoryCountGet = function(params)
  {
    return this.request('/Wl/Shop/Product/Option/Inventory/Count/InventoryCount.json', params || {}, 'GET');
  };

  /**
   * Saves changes of product inventory quantities and notes.
   *
   * Persists updated inventory counts and per-option notes for the specified product options.
   * Requires backend access with the store management privilege. Creates an inventory
   * transaction record for audit trail purposes.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_note The list of notes for product options in the store.
   * @param {number[]} params.a_quantity The list of product option quantities in the store.
   * @param {string} params.k_business The current business.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlShopProductOptionInventoryCountInventoryCountPost = function(params)
  {
    return this.request('/Wl/Shop/Product/Option/Inventory/Count/InventoryCount.json', params || {}, 'POST');
  };

  return WlClient;
});
