/*!
 * WellnessLiving JavaScript SDK (dev)
 * Spec version: 1.1.20260716161957
 * Build date:   2026-07-16
 * Endpoints:    507
 *
 * Auto-generated from:
 * https://github.com/wellnessliving/openapi/blob/main/dev/openapi.yaml
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
  WlClient.CHANNEL = 'dev';

  /**
   * OpenAPI spec version this SDK was generated from.
   * @type {string}
   */
  WlClient.SPEC_VERSION = '1.1.20260716161957';

  // ---------------------------------------------------------------------------
  // Generated API methods (507 total)
  // ---------------------------------------------------------------------------

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
   * @param {number} params.id_locale The locale ID used as a filter. The locale is generally a country. See {@link WlClient.CoreLocaleLocaleSid}.
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
   * 
   * Site keys for initialize Google reCAPTCHA:
   * * Version 2 (invisible):
   *   * Demo/Staging - `6Ldqwe0gAAAAANve1TEPFb_Yxgb9wsoIfrNL6-2Z`
   * ...
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
   * Checks if user with specified email already registered for specified business.
   *
   * Looks up an existing account by the given email address. If no account with that email exists,
   *  the user is reported as neither a member nor a lead. If an account exists, the response reports
   *  whether that user is already a member of the specified business, and whether that user is already
   *  registered as a lead for the specified business.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `is_lead` {boolean} `true` if user with specified email is lead of a specified business, `false` ...
   *  `is_member` {boolean} `true` if user with specified email is a member of a specified business, `fal...
   */
  WlClient.prototype.wlLeadLeadCheck = function(params)
  {
    return this.request('/Wl/Lead/LeadCheck.json', params || {}, 'POST');
  };

  /**
   * Gets data of required report.
   *
   * Loads the specified report for the given business, applying filter, sort, and pagination parameters,
   * and returns the report rows and totals.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.i_page The page of results to show, starting at zero. The API will return 256 results per page.
   * @param {number} params.id_report The report ID. See {@link WlClient.RsReportSid}.
   * @param {number} params.id_report_group The report group ID. See {@link WlClient.RsReportGroupSid}.
   * @param {?number} [params.id_report_page] The report page ID. One of the {@link WlClient.RsReportPageSid} constants.
   * @param {number} params.id_report_view The report view ID. One of the {@link WlClient.RsReportChartViewSid} constants.
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
   * Accepts either {@link WlClient#wlReportAccess} (first-generation reports) or {@link WlClient#wlReportAccess} (second-generation reports), but not both,
   * and returns `has_access` indicating whether the current user may view the report in the given business.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.cid_report Report CID.
   * @param {number} params.id_report Report ID. See {@link WlClient.RsReportSid}.
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
   * @param {number} params.id_report_group The report group ID. One of the {@link WlClient.RsReportGroupSid} constants that describes the time
   * @param {?number} params.id_report_page The report page ID. One of the {@link WlClient.RsReportPageSid} constants.
   * @param {number} params.id_report_view The report view ID. One of the {@link WlClient.RsReportChartViewSid} constants.
   * @param {string} params.k_business The key of business for which the report collection must be generated.
   * @param {string} params.s_filter Filter settings in encoded format.
   * @param {string} params.s_sort The field to use for sorting report data.
   * @returns {Promise<Object>} Response data.
   *  `a_data` {*[][]} List of the reports contents. Key is the report id from {@link WlClient.RsRep...
   */
  WlClient.prototype.wlReportPageData = function(params)
  {
    return this.request('/Wl/Report/PageData.json', params || {}, 'GET');
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
   *  `id_category` {number} A list of client booking flow types. See {@link WlClient.RsBusinessCategorySid}.
   *  `id_claim_status` {number} Business status for managing claim request behavior. See {@link WlClient.WlBusinessClaimBusinessClaimStatusSid}.
   *  `id_currency` {number} A list of currencies. See {@link WlClient.CoreLocaleCurrencySid}.
   *  `id_locale` {number} A list of locales. See {@link WlClient.CoreLocaleLocaleSid}.
   *  `id_rank_type` {?number} Types of the possible ranks in different business. See {@link WlClient.RsRankTypeSid}.
   *  `id_region` {number} List of available data center regions. See {@link WlClient.CoreAmazonRegionAmazonRegionSid}.
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
   *  `id_gender` {number} String identifiers for gender. See {@link WlClient.AGenderSid}.
   *  `is_photo_empty` {boolean} Whether photo is uploaded.
   *  `k_staff` {?string} The user's staff key for the specified business.
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
   * @param {number[]} params.a_day IDs of week days from {@link WlClient.ADateWeekSid} class.
   * @param {string[]} params.a_event Event keys to filter.
   * @param {string[]} params.a_location Location keys to filter.
   * @param {string[]} params.a_staff Staff member keys to filter.
   * @param {Object} params.a_time Time interval:
   * @param {string} params.dtu_start The date/time to start from in UTC.
   * @param {number} params.id_class_tab "Book now" tab ID. One of {@link WlClient.WlClassesTabTabSid} constants.
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
   * Returns the list of events matching the specified filter parameters.
   *
   * Used to display the event schedule on business and location pages. Supports filtering by location,
   * date range, staff, and booking status. Results are cached per business and user context; the cache
   * is invalidated automatically when events are modified.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_class_filter] List of class keys applied by filter.
   * @param {?number[]} [params.a_day] List of day the week applied by filter {@link WlClient.ADateWeekSid}.
   * @param {?string[]} [params.a_enrollment_block_filter] List of enrollment blocks keys applied by filter.
   * @param {?string[]} [params.a_location] List of location keys applied by filter.
   * @param {?string[]} [params.a_staff] List of staff keys applied by filter.
   * @param {?number[]} [params.a_time] List of time day applied by filter {@link WlClient.RsScheduleTimeSid}.
   * @param {?string[]} [params.a_virtual] List of IDs to include/exclude virtual events.
   * @param {?string} [params.dl_end] The end date of the range from which a list of events should be retrieved.
   * @param {?string} [params.dl_start] The start date of the range from which a list of events should be retrieved.
   * @param {number} params.id_flag Defines how the event availability flag filter should be applied. See {@link WlClient.AFlagSid}.
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
   * Cancels book of event {@link WlClient#wlEventEventCancelWhole}.
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
   *  `id_mode` {number} The source of a visit. See {@link WlClient.WlModeModeSid}.
   *  `id_visit` {number} Possible states of the visit: book, attended, cancelled, etc. See {@link WlClient.WlVisitVisitSid}.
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
   * Returns the total visit count for the user at the business.
   *
   * Sums the number of attended visits with the historical visit count carried over for the user, so
   *  that visits recorded before the account existed in the system are also counted.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `i_visit_total` {number} Total number of visits.
   */
  WlClient.prototype.wlVisitVisitTotalCount = function(params)
  {
    return this.request('/Wl/Visit/VisitTotalCount.json', params || {}, 'GET');
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
   *  `id_embed_source` {?number} List of embed video sources. See {@link WlClient.WlVideoVideoEmbedSourceSid}.
   *  `id_location_select` {number} A list of two answers for any question: Yes or No. See {@link WlClient.CoreSidYesNoSid}.
   *  `id_source` {number} List of video types. See {@link WlClient.WlVideoVideoSourceSid}.
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
   *  `id_embed_source` {?number} List of embed video sources. See {@link WlClient.WlVideoVideoEmbedSourceSid}.
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
   * @param {?number} [params.id_order] Sort order ID. One of {@link WlClient.CoreSidSortOrderSid} constants. `null` or 0 if order is und...
   * @param {?number} [params.id_sort] The sorting type. See {@link WlClient.WlVideoCatalogFilterSortFilterSortSid}.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The business key.
   * @param {string} params.text_search The filter phrase to filter videos by name.
   * @param {?string} [params.uid] UID of the client who request list of videos.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} A list of videos.
   *  `a_page` {Object} Pagination data.
   *  `id_embed_source` {?number} List of embed video sources. See {@link WlClient.WlVideoVideoEmbedSourceSid}.
   *  `id_order` {?number} List of possible sort order. See {@link WlClient.CoreSidSortOrderSid}.
   *  `id_sort` {?number} List of video catalog sorting types. See {@link WlClient.WlVideoCatalogFilterSortFilterSortSid}.
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
   *  `id_embed_source` {?number} List of embed video sources. See {@link WlClient.WlVideoVideoEmbedSourceSid}.
   *  `json_setup` {string} Video.js media player initialization parameters in JSON format.
   */
  WlClient.prototype.wlVideoVideoListPut = function(params)
  {
    return this.request('/Wl/Video/VideoList.json', params || {}, 'PUT');
  };

  /**
   * Gets location lists for a bulk of businesses.
   *
   * Accepts a JSON-encoded list of business keys, a JSON-encoded list of location keys, or both, and returns
   * short-form location data alongside full location detail objects. Optionally filters results to only
   * locations that have a specific directory integration enabled.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_directory The ID of the directory if locations should be filtered by enabling directory integration. See {@link WlClient.RsProjectSid}.
   * @param {string} params.s_business A list of businesses. Business primary keys are serialized with JSON.
   * @param {string} params.s_location A list of locations. Location primary keys are serialized with JSON.
   * @returns {Promise<Object>} Response data.
   *  `a_location` {Object} Short-form information about locations.
   *  `a_location_full` {Object} A list of models with full information about each location.
   */
  WlClient.prototype.wlLocationListBulk = function(params)
  {
    return this.request('/Wl/Location/ListBulk.json', params || {}, 'GET');
  };

  /**
   * Creates new location or edits the existing location.
   *
   * When {@link WlClient#wlLocationLocation} is omitted, creates a new location requiring {@link WlClient#wlLocationLocation},
   *  {@link WlClient#wlLocationLocation}, and {@link WlClient#wlLocationLocation}.
   * When {@link WlClient#wlLocationLocation} is provided, updates only the supplied fields of the existing location.
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
   *  `a_location` {Object} Information about the business's location(s). If you've specified multiple bu...
   */
  WlClient.prototype.wlLocationList = function(params)
  {
    return this.request('/Wl/Location/List.json', params || {}, 'GET');
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
   * @param {?number} [params.id_order] Order ID for list of announcements. See {@link WlClient.CoreSidSortOrderSid}.
   * @param {?number} [params.id_sort_field] Sort field ID for list of announcements. See {@link WlClient.WlAnnouncementSortFieldSid}.
   * @param {boolean} params.is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
   * @param {string} params.k_business Business key.
   * @param {?string} [params.k_location] Location key for which need show announcement.
   * @param {string} params.text_search The filter phrase to filter announcements by name.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} List of announcements. Each element has the following keys:
   *  `id_order` {?number} List of possible sort order. See {@link WlClient.CoreSidSortOrderSid}.
   *  `id_sort_field` {?number} List of fields by which you can sort. See {@link WlClient.WlAnnouncementSortFieldSid}.
   */
  WlClient.prototype.wlAnnouncementAnnouncementList = function(params)
  {
    return this.request('/Wl/Announcement/AnnouncementList.json', params || {}, 'GET');
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
   * @param {number} params.id_currency The currency of the payment. See {@link WlClient.CoreLocaleCurrencySid}.
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
   *  `a_location_holiday` {string[]} A list of the location's closed day titles by location keys on the date {@lin...
   *  `is_business_holiday` {boolean} `true` if the business has a closed day on the date {@link WlClient#wlHoliday...
   *  `text_business_title` {string} The message used for the business's closed day on the date {@link WlClient#wl...
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
   * Returns current session environment.
   *
   * Determines the current business, location, and user for the session, taking into account the
   *  application type, franchise settings, and multi-datacenter routing, and returns the resulting
   *  environment data used to bootstrap the client application.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.s_application_id Application ID.
   * @returns {Promise<Object>} Response data.
   *  `a_business` {?string[]} List of businesses which are available in given application.
   *  `a_business_franchise_all` {?string[]} List of businesses keys, which are connected to franchise.
   *  `a_business_franchisee` {?string[]} List of business franchisee keys.
   *  `a_payment_alert` {?Object} Payment alert data. `null` if user is not logged or none businesses are avail...
   *  `a_splash_screen` {?Object} Settings of splash screen customization for business:
   *  `dtl_now` {string} Local date with time now in current location {@link WlClient#wlSessionEnviron...
   *  `has_form_quiz` {boolean} Whether exists form to confirm during registration process.
   *  `has_home` {boolean} `true` if the "home" page is turned on for the current business; `false` othe...
   *  `has_merchant` {boolean} Whether the merchant is configured for the client's home location or for busi...
   *  `id_currency` {number} A list of currency codes. See {@link WlClient.RsCurrencySid}.
   *  `id_locale` {number} A list of locales. See {@link WlClient.CoreLocaleLocaleSid}.
   *  `id_place` {number} The list of available modes. See {@link WlClient.RsPlaceSid}.
   *  `id_plan_achieve` {number} List of possible plans for AchieveSubscription subscription. See {@link WlClient.WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid}.
   *  `id_plan_base` {number} List of possible plans for BaseSubscription subscription. See {@link WlClient.WlBusinessAccountSubscriptionBaseBaseSubscriptionSid}.
   *  `id_plan_marketing` {number} List of possible plans for MarketingSuiteSubscription subscription. See {@link WlClient.WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid}.
   *  `id_travel_mode` {?number} Contains travel modes. See {@link WlClient.WlBusinessFranchiseTravelTravelModeSid}.
   *  `is_aiagent_chat` {boolean} Whether AI agent chat (CAASI) is available for current business.
   *  `is_application_custom` {boolean} Determines current business has custom application. If `true` application has...
   *  `is_billing_required` {boolean} `true` if user must be redirected to billing page to enter credit card; `fals...
   *  `is_booking_appointment_authorize` {boolean} `true` if clients must sign in to book an appointment; `false` otherwise.
   *  `...` {*}
   */
  WlClient.prototype.wlSessionEnvironmentGet = function(params)
  {
    return this.request('/Wl/Session/Environment.json', params || {}, 'GET');
  };

  /**
   * Saves current location of business for current user.
   *
   * Switches the current business and location for the session, forwarding the request to another
   *  data center when the target business is hosted elsewhere.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.s_application_id Application ID.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlSessionEnvironmentPut = function(params)
  {
    return this.request('/Wl/Session/Environment.json', params || {}, 'PUT');
  };

  /**
   * Gets skin data.
   *
   * Returns the skin settings and the main widget page URL for the given skin key.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_skin Skin key.
   * @returns {Promise<Object>} Response data.
   *  `a_skin` {*[]} Skin data.
   *  `id_skin` {number} A list of skin types. See {@link WlClient.RsSkinSid}.
   *  `url_skin` {string} URL to the main page of the widget.
   */
  WlClient.prototype.wlSkinSkinGet = function(params)
  {
    return this.request('/Wl/Skin/Skin.json', params || {}, 'GET');
  };

  /**
   * Saves the specified skin fields.
   *
   * Applies the given field values to the skin data and logs the change when any field value has
   *  actually changed.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_skin Skin key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlSkinSkinPost = function(params)
  {
    return this.request('/Wl/Skin/Skin.json', params || {}, 'POST');
  };

  /**
   * Deletes the existing widget.
   *
   * Permanently removes a widget skin and its foreign ID mapping from the business. Used
   * by external integrators to clean up a widget that is no longer needed.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_skin Skin type, one of {@link WlClient.RsSkinSid} constants.
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
   * @param {number} params.id_skin Skin type, one of {@link WlClient.RsSkinSid} constants.
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
   * @param {number} params.id_skin Skin type, one of {@link WlClient.RsSkinSid} constants.
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
   * Retrieves information about currencies.
   *
   * Queries all active (non-removed) currencies from the database and returns them as an associative array
   *  keyed by currency key, with each entry containing the currency sign, its display position, and the
   *  international currency code.
   *
   * @param {Object} [params] Request parameters.
   * @returns {Promise<Object>} Response data.
   *  `a_currency` {Object[]} Keys - currency keys. Values - information about currency:
   */
  WlClient.prototype.wlCurrencyCurrency = function(params)
  {
    return this.request('/Wl/Currency/Currency.json', params || {}, 'GET');
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
   * Returns information about the image.
   *
   * Used to initialize an image upload widget for an existing entity. Returns thumbnail and full-size URLs,
   * upload endpoint, dimension constraints, and whether deletion is allowed, so the frontend can render the
   * current image and offer upload or delete actions.
   *
   * @param {Object} [params] Request parameters.
   * @param {*[]} params.a_config Allows to give custom parameters which can be required for different types of images.
   * @param {boolean} params.is_temporary If `true`, the temporary image will be retrieved. Otherwise, this will be `false`.
   * @param {string} params.k_id The image ID set in {@link WlClient#coreDriveImageUploadImageUploadGet}.
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
  WlClient.prototype.wlDriveProductImageUploadGet = function(params)
  {
    return this.request('/Wl/Drive/ProductImageUpload.json', params || {}, 'GET');
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
  WlClient.prototype.wlDriveProductImageUploadPost = function(params)
  {
    return this.request('/Wl/Drive/ProductImageUpload.json', params || {}, 'POST');
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
   * @param {string} params.k_id The image ID set in {@link WlClient#coreDriveImageUploadImageUploadGet}.
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
  WlClient.prototype.wlDriveProductImageUploadPut = function(params)
  {
    return this.request('/Wl/Drive/ProductImageUpload.json', params || {}, 'PUT');
  };

  /**
   * Gets list of class sessions based on search criteria.
   *
   * Returns sessions matching the given geographic area, date range, and optional filters for business,
   * location, staff, experience type, home tour type, price, and location rating.
   * Only sessions within their current booking window are included in the result.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_business List of business keys to search by.
   * @param {number[]} params.a_experience_type List of experience types to search by. Each value is one of {@link WlClient.ThothExplorerSearchCl...
   * @param {?number[]} params.a_home_tour List of home tour activity types to search by. Each value is from {@link WlClient.RsHomeTourSid}.
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
   * Finalizes the `Nuvei` transaction after successful payer authentication.
   *
   * Validates the payer authentication session and encrypted card token, then updates the payment
   *  transaction created by {@link WlClient#thothPayProcessorNuveiNuveiOpenOrder} with the gateway transaction ID and card data.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.thothPayProcessorNuveiNuveiTransactionOnAuthSuccess = function(params)
  {
    return this.request('/Thoth/PayProcessor/Nuvei/NuveiTransactionOnAuthSuccess.json', params || {}, 'POST');
  };

  /**
   * Updates the amount of a previously opened `Nuvei` order.
   *
   * Validates the payer authentication session, then requests `Nuvei` to update the amount of the order
   *  opened by {@link WlClient#thothPayProcessorNuveiNuveiOpenOrder} and adjusts the payment transaction accordingly.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `text_message` {?string} Error message.
   */
  WlClient.prototype.thothPayProcessorNuveiNuveiUpdateOrder = function(params)
  {
    return this.request('/Thoth/PayProcessor/Nuvei/NuveiUpdateOrder.json', params || {}, 'POST');
  };

  /**
   * Opens a `Nuvei` order for the payment transaction.
   *
   * Authenticates the merchant credentials, starts a payment transaction, and requests `Nuvei` to open
   *  an order for the requested amount, returning the order and session identifiers needed to continue
   *  the payer authentication flow.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `k_pay_transaction` {?string} Key of payment transaction that was created.
   *  `s_nuvei_order` {?string} The order ID provided by Nuvei.
   *  `s_nuvei_session` {?string} The session identifier to be used by the request that processes the newly ope...
   *  `text_message` {?string} Error message.
   */
  WlClient.prototype.thothPayProcessorNuveiNuveiOpenOrder = function(params)
  {
    return this.request('/Thoth/PayProcessor/Nuvei/NuveiOpenOrder.json', params || {}, 'POST');
  };

  /**
   * Cancels the `Nuvei` transaction.
   *
   * Voids the payer authentication session opened by {@link WlClient#thothPayProcessorNuveiNuveiOpenOrder} and schedules the
   *  underlying payment transaction to be voided.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.thothPayProcessorNuveiNuveiTransactionCancel = function(params)
  {
    return this.request('/Thoth/PayProcessor/Nuvei/NuveiTransactionCancel.json', params || {}, 'POST');
  };

  /**
   * Gets the `Stripe` public key for a merchant.
   *
   * Returns the publishable key configured for the business merchant, so it can be used by the
   *  frontend to initialize `Stripe` payment elements.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `s_public` {?string} Merchant public key.
   */
  WlClient.prototype.wlPayProcessorStripeComStripeComKey = function(params)
  {
    return this.request('/Wl/Pay/Processor/StripeCom/StripeComKey.json', params || {}, 'POST');
  };

  /**
   * Updates a `Stripe` Payment Intent.
   *
   * Adjusts the amount and surcharge of the Payment Intent created for the Stripe Payment Element
   *  form when the cart contents change, keeping the underlying payment transaction in sync.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} params.id_pay_actor ID of the actor. One of {@link WlClient.RsPayActorSid} constants.
   * @param {string} params.k_business Key of the business to update Payment Intent for.
   * @param {string} params.k_business_merchant Key of the business merchant to update Payment Intent for.
   * @param {string} params.k_pay_transaction Key of the payment transaction to update.
   * @param {string} params.s_payment_intent Payment intent ID to update.
   * @param {?string} [params.uid_purchase] Payment owner user key.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPayProcessorStripeComPaymentIntentUpdate = function(params)
  {
    return this.request('/Wl/Pay/Processor/StripeCom/PaymentIntentUpdate.json', params || {}, 'POST');
  };

  /**
   * Initializes a `Stripe` payment.
   *
   * Starts a payment transaction and creates a not-captured Payment Intent at `stripe.com`, returning
   *  its status and client secret to continue the payment flow on the frontend.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `id_status` {number} Statuses of payment intents. See {@link WlClient.ThothPayProcessorStripeComPaymentIntentStatusSid}.
   *  `k_pay_transaction` {?string} Key of payment transaction that was created.
   *  `s_client_secret` {string} Payment Intent client secret key.
   *  `s_payment_intent` {string} Payment intent ID.
   *  `text_message` {?string} Error message.
   */
  WlClient.prototype.wlPayProcessorStripeComStripeComPayInit = function(params)
  {
    return this.request('/Wl/Pay/Processor/StripeCom/StripeComPayInit.json', params || {}, 'POST');
  };

  /**
   * Cancels a `Stripe` Payment Intent.
   *
   * Verifies that the Payment Intent belongs to the current payer authentication session, then
   *  refunds the associated payment transaction to release the reserved amount.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPayProcessorStripeComStripeComPaymentIntentCancel = function(params)
  {
    return this.request('/Wl/Pay/Processor/StripeCom/StripeComPaymentIntentCancel.json', params || {}, 'POST');
  };

  /**
   * Checks `CyberSource` Payer Authentication enrollment.
   *
   * Verifies whether the payer must complete additional authentication steps for the transaction
   *  started by CsPaSetupApi, returning a JWT and interaction URL when a challenge is required.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `s_jwt` {?string} JSON Web Token to include into the request to the second frame.
   *  `url_interact` {?string} URL for frontend interaction.
   */
  WlClient.prototype.wlPayProcessorCyberSourceCsPaEnrollment = function(params)
  {
    return this.request('/Wl/Pay/Processor/CyberSource/CsPaEnrollment.json', params || {}, 'POST');
  };

  /**
   * Validates the `CyberSource` Payer Authentication result.
   *
   * Retrieves the authentication result for the transaction validated by CsPaEnrollmentApi
   *  and confirms whether the payer authentication succeeded, allowing the merchant to proceed with
   *  processing the payment.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPayProcessorCyberSourceCsPaValidate = function(params)
  {
    return this.request('/Wl/Pay/Processor/CyberSource/CsPaValidate.json', params || {}, 'POST');
  };

  /**
   * Generates a capture context for `CyberSource` Flex Microform.
   *
   * Returns a capture context and key ID that the client uses to encrypt the card number before
   *  sending it in the follow-on Tokenize Card request.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `s_client_library_integrity` {?string} Microform Integration JavaScript library integrity property value.
   *  `s_key` {?string} Contents of the key.
   *  `s_key_id` {?string} ID of the key.
   *  `url_client_library` {?string} Microform Integration JavaScript library url.
   */
  WlClient.prototype.wlPayProcessorCyberSourceCsCaptureContext = function(params)
  {
    return this.request('/Wl/Pay/Processor/CyberSource/CsCaptureContext.json', params || {}, 'POST');
  };

  /**
   * Starts `CyberSource` Payer Authentication setup.
   *
   * Validates the payment request and card data, starts a payment transaction, and requests
   *  `CyberSource` to set up payer authentication, returning the JWT and device collection URL
   *  needed to continue the flow.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `k_pay_transaction` {string} Key of payment transaction that was created.
   *  `s_jwt` {string} JWT token, as returned by Cyber Source.
   *  `s_reference` {string} Reference ID, as returned by Cyber Source.
   *  `url_collection` {string} Device collection URL, as returned by Cyber Source.
   */
  WlClient.prototype.wlPayProcessorCyberSourceCsPaSetup = function(params)
  {
    return this.request('/Wl/Pay/Processor/CyberSource/CsPaSetup.json', params || {}, 'POST');
  };

  /**
   * Returns contents of a report as a table.
   *
   * If the report is not yet generated, it gets generated.
   * If the report is being generated now, partial content may be returned.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `a_dynamic` {Object[]} A list of dynamic fields in this report.
   *  `a_field` {string[]} A list of fields in this report.
   *  `a_row` {string[][]} Report data.
   *  `a_stale` {number[]} A list of stale rows.
   *  `a_warning` {string[]} Warning list of the report.
   *  `dtu_complete` {string} Date and time when this report has completed generation.
   *  `dtu_queue` {string} Date and time when this report was put on generation queue.
   *  `dtu_start` {string} Date and time when generation of this report has started.
   *  `i_cas_change` {number} A CAS (compare-and-swap) number that allows to track changes in the report st...
   *  `id_report_status` {number} Lists statuses of reports from point of view of its generation. See {@link WlClient.ThothReportCoreGeneratorReportGeneratorStatusSid}.
   *  `s_report` {string} Key of this report.
   *  `text_error` {string} Text of an error message that occurred during generation of the report.
   */
  WlClient.prototype.wlReportGeneratorQuery = function(params)
  {
    return this.request('/Wl/Report/Generator/Query.json', params || {}, 'POST');
  };

  /**
   * Returns information about payment environment.
   *
   * Called before rendering a payment form to determine which payment methods and card types are available
   * for a given business and location, what surcharges apply, and how the form should behave (tip prompt,
   * optional card save). This endpoint is deprecated; use EnvironmentUserApi
   *  for new integrations.
   * @deprecated Use {@link \Thoth\WlPay\Form\EnvironmentUserApi} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to retrieve payment information for.
   * @param {string} params.k_currency The key of the currency to retrieve payment information for.
   * @param {string} params.k_location The key of the location to retrieve payment information for.
   * @param {?string} [params.uid_owner] The user ID to retrieve payment information for.
   * @returns {Promise<Object>} Response data.
   *  `a_card_system` {?number[]} A list of supported bank card systems.
   *  `a_method_staff` {?number[]} A list of payment methods enabled for staff members.
   *  `a_method_support` {Object[]} A list of all payment methods that can be used within this business.
   *  `a_mobile_config` {?*[]} The configuration array that's sent to mobile card reader plugin.
   *  `a_pay_processor` {?Object[]} Represents information about payment processors.
   *  `dl_now` {string} Current local date in current location EnvironmentApi::$k_location
   *  `f_surcharge` {?string} Surcharge amount for payment with card represented as a percent of transactio...
   *  `f_surcharge_ach` {?string} Surcharge amount for payment with ACH represented as a percent of transaction...
   *  `id_locale` {number} A list of locales. See {@link WlClient.CoreLocaleLocaleSid}.
   *  `is_save_optional` {boolean} `true` if clients can choose whether their banking and credit card informatio...
   *  `is_save_source` {boolean} Determines whether newly added payment sources should be saved. This will be ...
   *  `is_tip` {boolean} Whether tips are accepted.
   *  `m_surcharge` {?string} Surcharge amount for payment with card represented as a fixed amount.
   *  `m_surcharge_ach` {?string} Surcharge amount for payment with ACH represented as a fixed amount.
   */
  WlClient.prototype.wlPayFormEnvironment = function(params)
  {
    return this.request('/Wl/Pay/Form/Environment.json', params || {}, 'GET');
  };

  /**
   * Returns information about payment environment.
   *
   * Called before rendering a payment form to determine which payment methods and card types are available
   * for a given business and location, what surcharges apply, and how the form should behave (tip prompt,
   * optional card save). This endpoint is deprecated; use EnvironmentUserApi
   *  for new integrations.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The key of the business to retrieve payment information for.
   * @param {string} params.k_currency The key of the currency to retrieve payment information for.
   * @param {string} params.k_location The key of the location to retrieve payment information for.
   * @param {?string} [params.uid_owner] The user ID to retrieve payment information for.
   * @returns {Promise<Object>} Response data.
   *  `a_card_system` {?number[]} A list of supported bank card systems.
   *  `a_method_staff` {?number[]} A list of payment methods enabled for staff members.
   *  `a_method_support` {Object[]} A list of all payment methods that can be used within this business.
   *  `a_mobile_config` {?*[]} The configuration array that's sent to mobile card reader plugin.
   *  `a_pay_processor` {?Object[]} Represents information about payment processors.
   *  `dl_now` {string} Current local date in current location EnvironmentApi::$k_location
   *  `f_surcharge` {?string} Surcharge amount for payment with card represented as a percent of transactio...
   *  `f_surcharge_ach` {?string} Surcharge amount for payment with ACH represented as a percent of transaction...
   *  `id_locale` {number} A list of locales. See {@link WlClient.CoreLocaleLocaleSid}.
   *  `is_save_optional` {boolean} `true` if clients can choose whether their banking and credit card informatio...
   *  `is_save_source` {boolean} Determines whether newly added payment sources should be saved. This will be ...
   *  `is_tip` {boolean} Whether tips are accepted.
   *  `m_surcharge` {?string} Surcharge amount for payment with card represented as a fixed amount.
   *  `m_surcharge_ach` {?string} Surcharge amount for payment with ACH represented as a fixed amount.
   */
  WlClient.prototype.wlPayFormEnvironmentUser = function(params)
  {
    return this.request('/Wl/Pay/Form/EnvironmentUser.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about accounts of given user in given business.
   *
   * Returns the list of existing accounts and accounts not yet created for the user within the specified business,
   * including balance, currency, and payment method details.
   * When AccountApi::$is_owner is `true`, resolves the money owner and includes the debtor status.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_owner If `true`, information for the account's owner is returned. Clients can be configured to pay for ...
   * @param {string} params.k_business The key of the business to show information for.
   * @param {string} params.uid The key of the user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_account` {Object} A list of the user's accounts.
   *  `a_account_nx` {Object[]} A list of accounts that have not been created for this user yet.
   *  `is_debtor` {boolean} Determines whether the user is a debtor. If `true` - the owner of this accoun...
   */
  WlClient.prototype.wlPayAccountAccount = function(params)
  {
    return this.request('/Wl/Pay/Account/Account.json', params || {}, 'GET');
  };

  /**
   * Returns information about payment owner.
   *
   * Must be called before initiating any payment on behalf of a user, to determine the correct payment
   * owner keys to pass to the payment form. Also indicates whether a family-account relationship exists
   * (for example, a parent paying for a child), which affects how the payment form is pre-populated.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.k_business] Business key.
   * @param {string} params.uid Key of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `id_pay_owner` {number} A list of money owners from which account money can be transferred. See {@link WlClient.RsPayOwnerSid}.
   *  `is_pay_self_only` {boolean} Is client pay only for self. If parent pays for child this flag will be `fals...
   *  `k_pay_owner` {string} The payment owner key. This is used for financial transactions.
   *  `k_pay_owner_money` {string} Key of the money owner.
   */
  WlClient.prototype.wlPayOwnerOwner = function(params)
  {
    return this.request('/Wl/Pay/Owner/Owner.json', params || {}, 'GET');
  };

  /**
   * Returns list of active payment methods data.
   *
   * Returns the system-level payment methods enabled for the business combined with any custom payment methods
   * configured for the business and accessible to the given user based on their role. When `$is_active` is
   * `false`, inactive custom methods are included as well.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_active Whether only active payment methods should be returned.
   * @param {string} params.k_business The business key.
   * @param {boolean} params.show_manual Whether payment method {@link WlClient.RsPayMethodSid} should be included in response.
   * @param {string} params.uid The key of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_pay_method` {Object[]} A list of payment methods:
   */
  WlClient.prototype.wlPayMethodList = function(params)
  {
    return this.request('/Wl/Pay/Method/List.json', params || {}, 'GET');
  };

  /**
   * Gets user's payment addresses information.
   *
   * Returns the list of saved payment addresses for the specified owner type and key, including address fields,
   * country and region details, and the currently selected address. Returns `null` if the current user cannot
   * edit bank accounts for the owner.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_pay_owner The ID of the payment owner type. See {@link WlClient.RsPayOwnerSid}.
   * @param {string} params.k_business Business key, where the payment is performed.
   * @param {string} params.k_id The primary key of a payment owner.
   * @returns {Promise<Object>} Response data.
   *  `a_pay_address` {?Object[]} The payee's address information.
   */
  WlClient.prototype.wlPayAddressAddress = function(params)
  {
    return this.request('/Wl/Pay/Address/Address.json', params || {}, 'GET');
  };

  /**
   * Returns default payment address data that is retrieved from user profile.
   *
   * Loads the user's profile for the given business and returns address fields (name, phone, street, city,
   * postal code, country, region) to pre-populate a payment address form.
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
  WlClient.prototype.wlPayAddressProfile = function(params)
  {
    return this.request('/Wl/Pay/Address/Profile.json', params || {}, 'GET');
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
   * @param {string} params.url_domain Alias of {@link WlClient#coreRequestApiKeySecret}.
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
   * to set a new password using {@link WlClient#corePassportChangePasswordChangePasswordApply}.
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
   * Returns information about the image.
   *
   * Used to initialize an image upload widget for an existing entity. Returns thumbnail and full-size URLs,
   * upload endpoint, dimension constraints, and whether deletion is allowed, so the frontend can render the
   * current image and offer upload or delete actions.
   *
   * @param {Object} [params] Request parameters.
   * @param {*[]} params.a_config Allows to give custom parameters which can be required for different types of images.
   * @param {boolean} params.is_temporary If `true`, the temporary image will be retrieved. Otherwise, this will be `false`.
   * @param {string} params.k_id The image ID set in {@link WlClient#coreDriveImageUploadImageUploadGet}.
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
   * @param {string} params.k_id The image ID set in {@link WlClient#coreDriveImageUploadImageUploadGet}.
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
   * permanently saved. Call {@link WlClient#coreDriveImageUploadImageUploadGet} to commit the temporary image to the entity.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_id The key of the image within {@link WlClient#coreDriveImageUploadImageUploadTemporary}.
   * @param {string} params.s_class The name of the class that manages this image.
   * @returns {Promise<Object>} Response data.
   *  `has_crop` {boolean} If `true`, a crop is used. Otherwise, this will be `false` if a crop isn't us...
   *  `i_height` {number} The actual height of the thumbnail image.
   *  `i_height_src` {number} The height of the original image.
   *  `i_rotate` {number} The angle of the image rotation compared to the original.
   *  `i_width` {number} The actual width of the thumbnail image.
   *  `i_width_src` {number} The width of the original image.
   *  `id_type_src` {number} List of image types. See {@link WlClient.CoreDriveDriveTypeSid}.
   *  `is_resize` {boolean} If `true`, the thumbnail is a resized variant of the original image.
   *  `url_thumbnail` {string} The URL to the resized and rotated image in file storage.
   *  `url_view` {string} The URL to the original image in file storage.
   */
  WlClient.prototype.coreDriveImageUploadImageUploadTemporary = function(params)
  {
    return this.request('/Core/Drive/ImageUpload/ImageUploadTemporary.json', params || {}, 'POST');
  };

  /**
   * Flushes all application caches.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.s_action Name of the action to perform within this endpoint.
   * @param {string} params.s_token Request authentication token.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.coreTestingAutomationCacheFlush = function(params)
  {
    return this.request('/Core/Testing/Automation/CacheFlush.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about countries and regions.
   *
   * Populates country and region dropdowns in address forms. Returns one or all countries together with
   * their subordinate regions (states, provinces, territories). Pass a locale to get only the country
   * relevant to a given market, or set `$is_locale_all` to retrieve the full list for multi-country UIs.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_locale The locale ID to find regions for. One of the {@link WlClient.CoreLocaleLocaleSid} constants.
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
   * Site keys for initialize Google reCAPTCHA:
   * * Version 2 (invisible):
   *   * Demo/Staging - `6Ldqwe0gAAAAANve1TEPFb_Yxgb9wsoIfrNL6-2Z`
   * ...
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
   * @param {string} params.text_token The user token CAPTCHA from {@link WlClient.CoreGoogleCaptchaCaptchaVersionSid} captcha.
   * @returns {Promise<Object>} Response data.
   *  `id_response` {number} List of responses for Google Captcha token. See {@link WlClient.CoreGoogleCaptchaCaptchaResponseSid}.
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
   * Gets information of application.
   *
   * Returns which sign-in methods (Apple, Facebook, Google, Microsoft, TJX) are enabled for the
   * application, along with the social sign-in and registration restrictions and the
   * corresponding authorization links.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.s_application Unique ID of application.
   * @returns {Promise<Object>} Response data.
   *  `is_apple` {boolean} `true` - enable for this application sign in with Apple; `false` - disable.
   *  `is_facebook` {boolean} `true` - enable for this application sign in with Facebook; `false` - disable.
   *  `is_facebook_android` {boolean} `true` - enable for this application sign in with Facebook for Android; `fals...
   *  `is_google` {boolean} `true` - enable for this application sign in with Google; `false` - disable.
   *  `is_microsoft` {boolean} `true` - enable for this application sign in with Microsoft; `false` - disable.
   *  `is_register_deny` {boolean} `true` - registration of new user is denied in application; `false` - registr...
   *  `is_social` {boolean} `true` if sign in via social networks is allowed; `false` otherwise.
   *  `is_tjx` {boolean} `true` if sign in via TJX Azure is allowed; `false` otherwise.
   *  `text_tjx_button_name` {string} Tjx button name.
   *  `url_facebook` {string} Facebook authorization link.
   *  `url_tjx` {string} Tjx link.
   */
  WlClient.prototype.coreSpaApplicationSpaApplication = function(params)
  {
    return this.request('/Core/Spa/Application/SpaApplication.json', params || {}, 'GET');
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
   *  `id_business_tour` {?number} List of different types for landing pages based on business types. See {@link WlClient.RsHomeTourSid}.
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
   *  `id_locale` {number} A list of locales. See {@link WlClient.CoreLocaleLocaleSid}.
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
   * Returns the Amazon region ID for each of the requested business keys.
   *
   * Used to determine which data center stores the data for a given set of businesses. Knowing the region
   * is required before routing API calls across data centers. Returns `0` for businesses whose region
   * is not set. All requested business keys must exist.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_business List of business key.
   * @returns {Promise<Object>} Response data.
   *  `a_business_region` {number[]} List of region IDs for {@link WlClient#wlBusinessAmazonRegionAmazonRegion}.
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
   *  `id_note` {number} A list of types of visit note. See {@link WlClient.WlVisitNoteSidNoteSid}.
   *  `id_service` {number} Identifiers for services types. See {@link WlClient.RsServiceSid}.
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
   *  `id_note` {number} A list of types of visit note. See {@link WlClient.WlVisitNoteSidNoteSid}.
   *  `id_service` {number} Identifiers for services types. See {@link WlClient.RsServiceSid}.
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
   * Returns promotion payment pause data: all hold periods when {@link WlClient#wlLoginPromotionPromotionPayPauseGet} is `true`,
   the specified hold period when {@link WlClient#wlLoginPromotionPromotionPayPauseGet} is provided, or the currently
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
   * @param {?number} params.id_pay_method ID of the payment method. One of the {@link WlClient.RsPayMethodSid} constants. Zero means no fil...
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
   *  `id_failed_sound` {number} List of sounds used for check ins. See {@link WlClient.WlReceptionDesignCheckInSoundSid}.
   *  `id_success_sound` {number} List of sounds used for check ins. See {@link WlClient.WlReceptionDesignCheckInSoundSid}.
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
   * @param {number} params.id_notification ID of the notification. See {@link WlClient.RsMailSid}.
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
   * This method is a modified Get method `get()`.
  The difference is as follows:
   *
   * - Some data for filtering is now transmitted by the post method.
   * Because the addition of the filters creates a scenario where we can easily reach the maximum URL length of GET
   * requests and the browser refuse to send the request (situations with long class ID, event ID or staff ID lists).
   * 
   *  - Added generation of a separate 'Quick filter'.
   * This generation is enabled using the flag {@link WlClient#wlScheduleClassListClassList68}.
   * ...
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `a_calendar` {Object} Keys are dates of the days inside requested date range, when there is at leas...
   *  `a_quick` {Object} Information about classes/events for quick filter.
   *  `a_session` {Object[]} A list of classes sessions starting with the date {@link WlClient#wlScheduleC...
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
   * @param {boolean} params.is_response_short `true` means to not generate {@link WlClient#wlScheduleClassListClassList} result.
   * @param {boolean} params.is_tab_all If `true`, sessions from every class tab are returned. If `false`, use the
   * @param {?boolean} [params.is_virtual] Class filter by type.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_class_tab The category tab key.
   * @param {?string} [params.k_timezone] Key of timezone.
   * @param {string} params.s_staff The list of staff members to filter.
   * @param {string} params.s_staff_uid The list of staff user keys to filter.
   * @param {boolean} params.show_cancel If `true`, canceled sessions will be returned. If `false`, canceled sessions won't be returned.
   * @param {boolean} params.show_class If `true`, classes will be included in the response. `false` - otherwise.
   * @param {boolean} params.show_event If `true`, events are also returned. If `false`, only classes are returned.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_calendar` {Object} Keys are dates of the days inside requested date range, when there is at leas...
   *  `a_session` {Object[]} A list of classes sessions starting with the date {@link WlClient#wlScheduleC...
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
   *  `id_note` {number} A list of types of visit note. See {@link WlClient.WlVisitNoteSidNoteSid}.
   *  `id_virtual_provider` {?number} List of possible value of virtual integrations. See {@link WlClient.WlVirtualVirtualProviderSid}.
   *  `id_visit` {number} Possible states of the visit: book, attended, cancelled, etc. See {@link WlClient.WlVisitVisitSid}.
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
   * Processes the group booking: validates input, collects payment, books sessions, and sends confirmation emails.
   *
   * Accepts a list of clients with their purchase items, resources, sessions, and quiz responses, then validates
   * capacity and eligibility, processes payment for all clients at once, creates booking records, and dispatches
   * confirmation emails. Returns visit keys, activity keys, and purchase activity key upon success.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_date_gmt Date/time to which session is booked.
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @returns {Promise<Object>} Response data.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_family_relation_login_allow` {?number[]} Relationships who clients are allowed to book for.
   *  `a_path` {Object[]} All the steps to be performed to make a booking. Every element has the next k...
   *  `id_pay_require` {number} List of possible modes to require amount while booking a class. See {@link WlClient.WlClassesRequirePaySid}.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_family_relation_login_allow` {?number[]} Relationships who clients are allowed to book for.
   *  `a_path` {Object[]} All the steps to be performed to make a booking. Every element has the next k...
   *  `id_pay_require` {number} List of possible modes to require amount while booking a class. See {@link WlClient.WlClassesRequirePaySid}.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_family_relation_login_allow` {?number[]} Relationships who clients are allowed to book for.
   *  `a_path` {Object[]} All the steps to be performed to make a booking. Every element has the next k...
   *  `id_pay_require` {number} List of possible modes to require amount while booking a class. See {@link WlClient.WlClassesRequirePaySid}.
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
   * Returns list of classes and events in the business.
   *
   * Used by import and integration tools to enumerate all classes and events offered by a business.
   * In franchise mode, classes from all franchisee locations are included. Results are sorted by title
   * and start date.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string[]} [params.a_class_tab] List of tabs keys.
   * @param {number} [params.id_class_tab] ID of book now tab. One of {@link WlClient.WlClassesTabTabSid} constants.
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
   * Gets information about class.
   *
   * Returns the class title, service logo, and whether the class is actually an event, based on the
   *  given business and class keys.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business in which the class resides.
   * @param {string} params.k_class Class identifier to get information for.
   * @returns {Promise<Object>} Response data.
   *  `a_logo` {Object} Service logo information:
   *  `is_event` {boolean} `true` means event, `false` means class.
   *  `text_title` {string} Title of the class.
   */
  WlClient.prototype.wlClassesInfoInfo = function(params)
  {
    return this.request('/Wl/Classes/Info/Info.json', params || {}, 'GET');
  };

  /**
   * Gets the list of promotions and products available at the location.
   *
   * Validates access to the business, then loads promotions with their prices and products expanded into
   *  their options, keeping only the items available at the requested location.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location The location key to filter available items by.
   * @returns {Promise<Object>} Response data.
   *  `a_product` {Object[]} The list of products available at the location. Each element has the followin...
   *  `a_promotion` {Object[]} The list of promotions available at the location. Each element has the follow...
   */
  WlClient.prototype.wlBillingBulkPurchaseItemListGet = function(params)
  {
    return this.request('/Wl/Billing/Bulk/PurchaseItemList.json', params || {}, 'GET');
  };

  /**
   * Prepares the bulk billing review: the per-client totals and the list of clients that will be billed.
   *
   * Validates access to the business, calculates the per-client subtotal, tax and total for the selected purchase
   *  items, and collects each client contact data and payment method label. The list of clients skipped due to
   *  restrictions is returned separately and is empty for now.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_location The location key to filter available items by.
   * @returns {Promise<Object>} Response data.
   *  `a_client_bill` {Object[]} The list of clients that will be billed. Each element has the following struc...
   *  `a_client_ignore` {*[][]} The list of clients that will be skipped due to restrictions. Each element ha...
   *  `m_batch` {string} The total amount charged across every client that will be billed (per-client ...
   *  `m_subtotal` {string} The subtotal per client (sum of the selected purchase item prices, excluding ...
   *  `m_tax` {string} The tax amount per client. Always `0` when {@link WlClient#wlBillingBulkPurch...
   *  `m_total` {string} The total per client (subtotal plus tax).
   */
  WlClient.prototype.wlBillingBulkPurchaseItemListPost = function(params)
  {
    return this.request('/Wl/Billing/Bulk/PurchaseItemList.json', params || {}, 'POST');
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
   * @param {?string} [params.k_business] The business key. Currently used only with {@link WlClient#wlProfilePurchasePurchaseElement} vari...
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
   * Returns current user profile information.
   *
   * Returns the profile field definitions and current values for the specified user, or an empty
   *  structure when creating a new account. Used to populate the profile edit form with the
   *  correct fields, validation rules, and inheritance options for the business.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} [params.id_register_source] Registration source ID. See {@link WlClient.WlProfileRegisterSourceSid}.
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
   * @param {number} [params.id_mode] ID of source mode. One of {@link WlClient.WlModeModeSid} constants.
   * @param {?number} [params.id_register_source] Registration source ID. See {@link WlClient.WlProfileRegisterSourceSid}.
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
   * @param {?number} [params.id_register_source] Registration source ID. See {@link WlClient.WlProfileRegisterSourceSid}.
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
   * @param {?number} [params.id_register_source] Registration source ID. See {@link WlClient.WlProfileRegisterSourceSid}.
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
   * @param {number} [params.id_mode] ID of source mode. One of {@link WlClient.WlModeModeSid} constants.
   * @param {?number} [params.id_register_source] Registration source ID. See {@link WlClient.WlProfileRegisterSourceSid}.
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
   * @param {?number} [params.id_register_source] Registration source ID. See {@link WlClient.WlProfileRegisterSourceSid}.
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
   *  `i_credit_score` {number} Total amount of account credits user got for {@link WlClient#wlProfileActivit...
   *  `i_score` {number} The total amount of rewards points the client received for the activity.
   *  `i_spend` {number} The rewards points used to redeem a prize.
   *  `id_icon` {?number} List of available design icons. See {@link WlClient.WlDesignIconSid}.
   *  `id_type` {number} Manages identifiers of user activity. See {@link WlClient.RsLoginActivityTypeSid}.
   *  `k_id` {string} Object ID, for example, class period ID for books and visits.
   *  `s_message` {string} The description of the activity. This should include the nature of the activi...
   *  `url_link` {string} Link to share activity with social networks.
   */
  WlClient.prototype.wlProfileActivityElement = function(params)
  {
    return this.request('/Wl/Profile/Activity/Element.json', params || {}, 'GET');
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
   * @param {?string} [params.k_business] The business key. Used with {@link WlClient#wlProfilePurchaseListPurchaseListElement} variable and
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
   * When {@link WlClient#wlProfileAttachAttachElementGet} is empty, uploads a new file to the client profile; when set, updates the
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
   * Gets a list of timezones with currently selected user's timezone and the business policy adjustment whether
   clients are allowed to adjust timezone.
   *
   * Includes the timezone abbreviation, UTC shift, and display order for each entry, and falls back to
   *  the business-configured guest timezone when no member is signed in.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business, in which user selected timezone.
   * @returns {Promise<Object>} Response data.
   *  `a_timezone` {Object[]} List of timezones. Keys - timezone keys;
   *  `is_profile_timezone` {boolean} Whether clients are allowed to adjust timezone.
   *  `k_timezone_select` {string} Key of the timezone which is currently selected.
   */
  WlClient.prototype.wlProfileTimezoneProfileTimezoneGet = function(params)
  {
    return this.request('/Wl/Profile/Timezone/ProfileTimezone.json', params || {}, 'GET');
  };

  /**
   * Updates selected timezone for the site visitor in the given business.
   *
   * Validates the requested timezone against the business timezone deprecation policy, then saves it
   *  either to the member's profile field or, for a guest, to the guest-scoped timezone selection.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of the business, in which user selected timezone.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlProfileTimezoneProfileTimezonePut = function(params)
  {
    return this.request('/Wl/Profile/Timezone/ProfileTimezone.json', params || {}, 'PUT');
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
   * Returns contract information for the specified purchase option.
   *
   * Renders the contract text for the specified purchase option, applying any applicable
   *  discounts, and returns the content needed to display the contract acceptance modal to the
   *  client.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_start The start date of the contract.
   * @param {number} params.f_manual_discount The percentage discount for the item.
   * @param {number} params.id_purchase_item The type of purchase item. This is one of the {@link WlClient.RsPurchaseItemSid} constants.
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
   *  `a_privilege_passport` {Object} List of privileges, if user is administrator.
   *  `a_privilege_staff` {number[]} List of privileges, if the given user is a staff member in the give business.
   *  `is_admin` {boolean} Whether this user is a super-administrator because he is a studio staff member.
   */
  WlClient.prototype.wlStaffPrivilegePrivilegeList = function(params)
  {
    return this.request('/Wl/Staff/Privilege/PrivilegeList.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about staff.
   *
   * This method can accept or one staff key {@link WlClient#wlStaffStaffViewStaffView} or staff list
   * {@link WlClient#wlStaffStaffViewStaffView} but not both (exception would be thrown).
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
   * This method can accept or one staff key {@link WlClient#wlStaffStaffViewStaffView} or staff list
   * {@link WlClient#wlStaffStaffViewStaffView} but not both (exception would be thrown).
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
   *  `id_appointment_pay` {number} The possible payment types an appointment can have. See {@link WlClient.RsAppointmentPaySid}.
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
   * @param {number} params.id_service Type of service to return. One of {@link WlClient.WlServiceServiceSid} constants.
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
   *  `a_video_category` {Object[]} The business video library categories as found in {@link WlClient#wlVideoCate...
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
   * Gets purchase information.
   *
   * Returns full receipt data for the specified purchase, including business details, customer information,
   * itemized purchase items, payment methods, pricing summary, and print URLs.
   *
   * @param {Object} [params] Request parameters.
   * @param {boolean} params.is_url_public Whether {@link WlClient#wlPurchaseReceiptPurchaseReceipt} and {@link WlClient#wlPurchaseReceiptPu...
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
   * Checks if user {@link WlClient#wlLocationFlagFlag} is flagged in location {@link WlClient#wlLocationFlagFlag} or
  each of users {@link WlClient#wlLocationFlagFlag} is flagged in location {@link WlClient#wlLocationFlagFlag}.
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
   *  `a_restrictions_multiple` {?Object} Array, where keys are UIDs to be checked and values are same as {@link WlClie...
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
   * Retrieves information about location rate.
   *
   * Returns the average rating and review count for the location, along with whether rating is
   *  enabled for the business type the location belongs to.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_location ID of a location to show rate for.
   * @returns {Promise<Object>} Response data.
   *  `f_rate` {number} Location rate.
   *  `i_review` {number} Review count.
   *  `is_rate` {boolean} Determines that the rate type exists in the current business type.
   */
  WlClient.prototype.wlLocationLocationRateLocationRate = function(params)
  {
    return this.request('/Wl/Location/LocationRate/LocationRate.json', params || {}, 'GET');
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
   *  `html_description_preview` {string} A shorter description of the location. A preview of {@link WlClient#wlLocatio...
   *  `id_industry` {?number} List of different types for landing pages based on business types. See {@link WlClient.RsHomeTourSid}.
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
  WlClient.prototype.wlServiceServiceListList75 = function(params)
  {
    return this.request('/Wl/Service/ServiceList/List75.json', params || {}, 'GET');
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
   * @param {number} params.id_category Type of the resource. See {@link WlClient.WlResourceResourceCategoryEnum}.
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
   * Allows to pay items for the client.
   *
   * The checkout endpoint that finalizes a purchase in the client-facing store. Charges the client's
   * selected payment method, applies any discounts and tips, and creates the purchase record. Returns
   * the resulting purchase key so the frontend can redirect to the confirmation page.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_commission The staff commission earned for this purchase. If this isn't empty, it has the next fields:
   * @param {number} params.id_mode The WellnessLiving mode type (required). One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {?number} params.id_sale The ID of item category. See {@link WlClient.RsSaleSid}.
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
   *  `id_purchase_item` {number} A list of purchase types. See {@link WlClient.RsPurchaseItemSid}.
   *  `id_purchase_option_view` {number} A list of Purchase Option view types. See {@link WlClient.WlCatalogPurchaseOptionViewSid}.
   *  `id_sale` {?number} List of sale categories on the store page. See {@link WlClient.RsSaleSid}.
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
   * Gets quizzes for the selected purchase options.
   *
   * Resolves the quizzes required or available for the services behind the given purchase items,
   *  taking into account quizzes already completed by the specified user, and returns them so the
   *  client can collect answers before booking is finished.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_purchase_item List of purchase items. Each element has format `[id_purchase_item]::[k_id]`, where
   * @param {string} params.k_business Key of a business.
   * @param {?string} [params.uid] Key of a user who is making a purchase.
   * @returns {Promise<Object>} Response data.
   *  `a_quiz` {Object} List of quizzes. Each element has next structure:
   */
  WlClient.prototype.wlCatalogQuizQuiz = function(params)
  {
    return this.request('/Wl/Catalog/Quiz/Quiz.json', params || {}, 'GET');
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
   * @param {number} params.id_program_type The program type ID, which will be one of the {@link WlClient.RsProgramTypeSid} constants.
   * @param {string} params.k_location The location key.
   * @returns {Promise<Object>} Response data.
   *  `a_promotion` {Object[]} A list of introductory promotion offers available at the location.
   */
  WlClient.prototype.wlPromotionIndexPromotionIndex = function(params)
  {
    return this.request('/Wl/Promotion/Index/PromotionIndex.json', params || {}, 'GET');
  };

  /**
   * Deletes the specified quiz response or list of responses for the given business.
   *
   * Validates access privileges and removes the specified response records, updating any related search indexes
   * and activity logs.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_quiz_response_key Quiz response key list.
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   *  `id_source` {number} List of sources where quiz response can be generated. See {@link WlClient.WlQuizResponseSourceSid}.
   *  `id_status` {number} List of response statuses. See {@link WlClient.CoreQuizResponseResponseStatusSid}.
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
   * QuizResponseApi::$is_validate_only is set, only validation runs and no record is created.
   * Pass QuizResponseApi::$is_skip to bypass validation for pre-confirmed responses.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   *  `id_source` {number} List of sources where quiz response can be generated. See {@link WlClient.WlQuizResponseSourceSid}.
   *  `id_status` {number} List of response statuses. See {@link WlClient.CoreQuizResponseResponseStatusSid}.
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
   * QuizResponseApi::$is_validate_only is set, only validation runs and no record is created.
   * Pass QuizResponseApi::$is_skip to bypass validation for pre-confirmed responses.
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
   *  `id_reward_score` {?number} Types of reward actions. See {@link WlClient.RsRewardScoreSid}.
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
   * @param {?number} params.id_reward_score ID of type of reward action. One of {@link WlClient.RsRewardScoreSid} constants.
   * @param {string} params.k_business Key of a business to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_reward_action` {Object[]} Information about reward actions. Every element has next keys:
   */
  WlClient.prototype.wlRewardActionActionType = function(params)
  {
    return this.request('/Wl/Reward/Action/ActionType.json', params || {}, 'GET');
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
   * Returns referral count, total referral points, and shareable referral link for the given user.
   *
   * Computes result fields for the referrer identified:
   *  - number of invited referrals;
   *  - reward points earned for referral registrations;
   *  - the shareable invite link with the referrer's encrypted user key.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.uid User key of the referrer whose statistics are being requested.
   * @returns {Promise<Object>} Response data.
   *  `i_point` {?number} Types of reward actions. See {@link WlClient.RsRewardScoreSid}.
   *  `i_referral` {number} Number of invited referrals.
   *  `url_referral` {string} Shareable invite link for the referrer.
   */
  WlClient.prototype.wlUserReferrerReferralInfo = function(params)
  {
    return this.request('/Wl/User/Referrer/ReferralInfo.json', params || {}, 'GET');
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
   *  `id_gender` {number} String identifiers for gender. See {@link WlClient.AGenderSid}.
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
   * Returns or changes the Autymate enrollment status for the specified business.
  Autymate specifically requested this method be a get.
   *
   * Authenticates the request using the business GUID, then either reads or updates the enrollment status
   * depending on the mode and the supplied `id_status` value. When activating enrollment, also provisions a
   * Professional subscription for the business if one is not already active.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_mode The mode of the request. See {@link WlClient.WlIntegrationAutymateAutymateAccessModeSid}.
   * @param {number} params.id_status The new status of the enrollment. If `0`, the current status is returned. See {@link WlClient.WlIntegrationAutymateAutymateStatusSid}.
   * @param {string} params.k_business The key of the business.
   * @param {string} params.s_guid The randomly generated 32 character string used to authenticate Autymate requests for the business.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `id_status` {number} List of statuses of an Autymate enrollment notification. See {@link WlClient.WlIntegrationAutymateAutymateStatusSid}.
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
   * @param {?number[]} params.a_pay_method_remove List of payment methods to filter out in the report.
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
   *  `id_report_status` {number} Lists statuses of reports from point of view of its generation. See {@link WlClient.WlReportGeneratorReportGeneratorStatusSid}.
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
   * @param {number} params.id_business_franchise_location Determines which locations should be returned. See {@link WlClient.WlBusinessFranchiseLocationBusinessFranchiseLocationSid}.
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
   * Sends an AI agent link action email (booking or purchase) to the specified user.
   *
   * Triggers the email that the AI agent sends when a client clicks a booking or purchase link
   *  generated by the AI agent chat. Requires the business to have an active AI agent subscription;
   *  the action type determines which notification template is used and which service or purchase
   *  item is referenced in the email body.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_purchase_item Purchase item ID. Required if {@link WlClient#wlAiAgentLinkSendMail} is 'purchase'. See {@link WlClient.RsPurchaseItemSid}.
   * @param {number} params.id_service Service ID. Required if {@link WlClient#wlAiAgentLinkSendMail} is 'booking'. See {@link WlClient.RsServiceSid}.
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
   * Returns discount codes of the specified business.
   *
   * Used in the backend discount management UI to show the full list of discount codes for a business
   * so the staff member can select one to view or edit.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key of the discount codes.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} Discount codes list. Each element has the following structure:
   */
  WlClient.prototype.wlDiscountCodeDiscountCode = function(params)
  {
    return this.request('/Wl/Discount/Code/DiscountCode.json', params || {}, 'GET');
  };

  /**
   * Deletes family relation between 2 users.
   *
   * Removes the relationship between the user identified by `uid` and the user identified by `uid_delete`
   * within the given business, then returns the updated list of relationships for `uid`.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_flow ID of the user behavior flow. See {@link WlClient.WlUserTrackingFlowSid}.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The key of the user whose relationships are being assessed.
   * @param {string} params.uid_delete The key of the related user who {@link WlClient#wlFamilyRelationRelationGet} must be removed.
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
   * @param {number} params.id_flow ID of the user behavior flow. See {@link WlClient.WlUserTrackingFlowSid}.
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
   * Adds to user {@link WlClient#wlFamilyRelationRelationGet}
  relative {@link WlClient#wlFamilyRelationRelationGet}.
   *
   * Creates a bidirectional family relationship between the user identified by `uid` and the user specified in
   * `a_new`, then returns the updated list of relationships for `uid`.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_flow ID of the user behavior flow. See {@link WlClient.WlUserTrackingFlowSid}.
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
   * @param {number} params.id_flow ID of the user behavior flow. See {@link WlClient.WlUserTrackingFlowSid}.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The key of the user whose relationships are being assessed.
   * @param {string} params.uid_delete The key of the related user who {@link WlClient#wlFamilyRelationRelationGet} must be removed.
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
   * @param {number} params.id_flow ID of the user behavior flow. See {@link WlClient.WlUserTrackingFlowSid}.
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
   * Adds to user {@link WlClient#wlFamilyRelationRelationGet}
  relative {@link WlClient#wlFamilyRelationRelationGet}.
   *
   * Creates a bidirectional family relationship between the user identified by `uid` and the user specified in
   * `a_new`, then returns the updated list of relationships for `uid`.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_flow ID of the user behavior flow. See {@link WlClient.WlUserTrackingFlowSid}.
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
   * @param {?number} [params.id_order] The order in which the review should be arranged. One of the {@link WlClient.WlReviewReviewListRe... See {@link WlClient.WlReviewReviewListReviewOrderSid}.
   * @param {string} params.k_business Business key. If not specified, location key needs to be specified.
   * @param {string} params.k_location The key of the location to show reviews for. If not specified, business key should be specified.
   * @param {string} params.uid The user's key. WellnessLiving allows staff to check low-rated reviews before posting them. Staff...
   * @returns {Promise<Object>} Response data.
   *  `a_review` {Object[]} List of reviews. If passed {@link WlClient#wlReviewReviewListReviewList} then...
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
   * Accepts a Widget analytics event.
   *
   * Validates the event envelope and payload, stores the event, and schedules asynchronous processing.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   *  `is_accepted` {boolean} Whether the event was durably accepted for asynchronous processing.
   */
  WlClient.prototype.wlWidgetAnalyticsWidgetAnalyticsEvent = function(params)
  {
    return this.request('/Wl/Widget/Analytics/WidgetAnalyticsEvent.json', params || {}, 'POST');
  };

  /**
   * Returns list of enrollments for the tuition.
   *
   * Get a full list of users who purchased the tuition. For each enrollment, returns the list of events
   * and the users have been enrolled in.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object} params.a_filter Filters.
   * @param {string} params.k_business Business key.
   * @param {string} params.s_tuition_id Key of the tuition in tuition microservice.
   * @returns {Promise<Object>} Response data.
   *  `a_enrollment` {Object[]} List of tuition enrollments.
   */
  WlClient.prototype.wlTuitionEnrollmentTuitionEnrollmentList = function(params)
  {
    return this.request('/Wl/Tuition/Enrollment/TuitionEnrollmentList.json', params || {}, 'GET');
  };

  /**
   * Allows canceling certain event enrollments within tuition.
   *
   * Send all users and events, which should be canceled to reduce tuition payment, cancel visits, and deactivate even pass.
   *
   * @param {Object} [params] Request body fields.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlTuitionEnrollmentTuitionEnrollmentCancel = function(params)
  {
    return this.request('/Wl/Tuition/Enrollment/TuitionEnrollmentCancel.json', params || {}, 'PUT');
  };

  /**
   * Returns summary of clients and events enrolled for the given tuitions.
   *
   * For each requested tuition, returns the number of unique clients enrolled in at least one not cancelled
   * event, the number of unique events with at least one not cancelled enrollment, and the total number of
   * not cancelled event enrollments.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_tuition_id Keys of the tuitions in the tuition microservice to get summary for.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `a_summary` {Object[]} Summary of clients and events enrolled, per tuition.
   */
  WlClient.prototype.wlTuitionEnrollmentTuitionClientsSummary = function(params)
  {
    return this.request('/Wl/Tuition/Enrollment/TuitionClientsSummary.json', params || {}, 'GET');
  };

  /**
   * Refills the user account balance by the specified payment amount or adjusts it manually.
   *
   * Accepts the payment amount, account key or user-and-business identifiers, charge mode, and payment form
   * data. Processes the payment through the configured payment environment and returns the purchase key
   * when a new purchase is created (for the automatic charge mode).
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_pay_account_charge The account charge mode. See {@link WlClient.RsPayAccountChargeSid}.
   * @param {boolean} params.is_staff If `true`, the account is filled by a staff member in the backend. Otherwise, this will be `false`.
   * @param {string} params.k_business The ID of the business the user account belongs to.
   * @param {string} params.k_pay_account The ID of the user account to refill.
   * @param {string} params.uid The ID of the user whose account is being refilled.
   * @returns {Promise<Object>} Response data.
   *  `k_purchase` {string} The ID of the purchase that was created during payment.
   */
  WlClient.prototype.wlPayAccountChargeCharge = function(params)
  {
    return this.request('/Wl/Pay/Account/Charge/Charge.json', params || {}, 'POST');
  };

  /**
   * Retrieves information about user's bank cards.
   *
   * Returns the list of saved payment cards for the specified user and business, including card number fragment,
   * expiry date, card system, holder name, and default status. Also returns whether new cards can be added.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business ID of current business.
   * @param {string} params.k_location Location to show information for.
   * @param {string} params.uid ID of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_bank_card` {Object} A list of bank cards.
   *  `a_list` {Object[]} List of bank cards.
   *  `can_add` {boolean} Whether new card can be added.
   *  `can_remove_self` {boolean} Whether the client is allowed to remove their own saved credit cards.
   */
  WlClient.prototype.wlPayBankCardList = function(params)
  {
    return this.request('/Wl/Pay/Bank/Card/List.json', params || {}, 'GET');
  };

  /**
   * Retrieves information about user's ACH accounts.
   *
   * Validates the user, business, and location, then retrieves all saved ACH accounts for the resolved merchant.
   *  Also reports whether the current owner is allowed to add a new ACH account.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business ID of current business.
   * @param {string} params.k_location Location to show information for.
   * @param {string} params.uid ID of a user to show information for.
   * @returns {Promise<Object>} Response data.
   *  `a_list` {Object[]} List of ACH accounts:
   *  `can_add` {boolean} Whether new ACH account can be added.
   */
  WlClient.prototype.wlPayBankAchList = function(params)
  {
    return this.request('/Wl/Pay/Bank/Ach/List.json', params || {}, 'GET');
  };

  /**
   * Returns All Transactions Report data for the specified date range.
   *
   * Provides access to the All Transactions Report used for revenue reconciliation and export. The report
   * is generated asynchronously and cached; check `$id_report_status` to determine whether generation is
   * still in progress. Set `$is_refresh` to request regeneration and use `$i_page` to paginate through
   * up to `LIMIT` rows per request.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dl_date_end The end date in local time to retrieve transactions for.
   * @param {string} params.dl_date_start The end date in local time to retrieve transactions for.
   * @param {number} params.i_page The page of the report, starting from 0.
   * @param {boolean} params.is_refresh Determines whether the report should be refreshed.
   * @param {string} params.k_business The key of the business for which report should be generated.
   * @returns {Promise<Object>} Response data.
   *  `a_field` {string[]} A list of fields in the report.
   *  `a_row` {Object[]} The report data.
   *  `a_warning` {string[]} The warning list of the report.
   *  `dtu_complete` {?string} The date and time if the report has completed generation. Otherwise, this wil...
   *  `dtu_queue` {?string} The date and time if this report has been put in the generation queue. Otherw...
   *  `dtu_start` {?string} The date and time if generation of this report has started. Otherwise, this w...
   *  `id_report_status` {number} Lists statuses of reports from point of view of its generation. See {@link WlClient.WlReportGeneratorReportGeneratorStatusSid}.
   *  `is_more` {boolean} Determines whether to show more rows in the report.
   *  `is_report_complete` {boolean} Determines whether the report is complete.
   */
  WlClient.prototype.wlPayTransactionReportTransactionAllPayment = function(params)
  {
    return this.request('/Wl/Pay/Transaction/Report/TransactionAllPayment.json', params || {}, 'GET');
  };

  /**
   * Gets data for "edit payment address" widget.
   *
   * Returns the list of geographic regions and phone number format masks configured for the given business locale.
   *  When no business key is provided, system-level defaults are returned.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @returns {Promise<Object>} Response data.
   *  `a_geo` {Object[]} List of countries with their regions, keyed by country geo key. Each element:
   *  `html_phone_mask` {string} Mask for phone entering (ready for output to the page).
   *  `text_phone_mask` {string} Mask for phone entering.
   */
  WlClient.prototype.wlPayAddressWidgetWidgetEdit = function(params)
  {
    return this.request('/Wl/Pay/Address/Widget/WidgetEdit.json', params || {}, 'GET');
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
   * Accepts the user login, a password hash derived using the notepad obtained from {@link WlClient#corePassportLoginEnterNotepad},
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
   * client can hash the user's password with it before sending it to {@link WlClient#corePassportLoginEnterEnter}. This prevents
   * replay attacks and avoids transmitting passwords in plain text.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.s_login] User login.
   * @param {string} params.s_type The session type to store the notepad in.
   * @returns {Promise<Object>} Response data.
   *  `id_region` {number} List of available data center regions. See {@link WlClient.CoreAmazonRegionAmazonRegionSid}.
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
   * and sends a confirmation email with a link to complete registration via {@link WlClient#corePassportLoginRegisterRegisterConfirm}.
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
   * Accepts the email, login, and verification code obtained from the confirmation link sent by {@link WlClient#corePassportLoginRegisterRegister},
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
   *  `id_conversion_type` {?number} Lead conversion type. See {@link WlClient.WlLeadConversionLeadConversionTypeSid}.
   *  `id_member_group_shape` {number} Shapes of client group icons. See {@link WlClient.WlMemberGroupShapeSid}.
   *  `is_brivo_active` {boolean} Whether Facility Access enabled for group.
   *  `is_brivo_checkin_active` {boolean} Whether automatic check-in on Brivo access granted is enabled for the group.
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
   *  `id_field` {number} List of progress log fields. See {@link WlClient.WlMemberProgressFieldProgressFieldSid}.
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
   *  `id_locale` {number} A list of locales. See {@link WlClient.CoreLocaleLocaleSid}.
   *  `id_plan` {number|number|number|number} Currently active plan ID for requested subscription.
   *  `is_active` {boolean} Whether subscription is active.
   */
  WlClient.prototype.wlBusinessAccountSubscriptionSubscriptionInfo = function(params)
  {
    return this.request('/Wl/Business/Account/Subscription/SubscriptionInfo.json', params || {}, 'GET');
  };

  /**
   * Returns config option values for specified business.
   *
   * Loads every registered business configuration option for the given business and returns its
   *  current value, keyed by the config option class CID.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Key of business.
   * @returns {Promise<Object>} Response data.
   *  `a_option` {Object} List of config option values.
   */
  WlClient.prototype.wlBusinessConfigOptionBusinessConfigOption = function(params)
  {
    return this.request('/Wl/Business/Config/Option/BusinessConfigOption.json', params || {}, 'GET');
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
   * @param {number} params.id_business_franchise_location Determines which locations should be returned. See {@link WlClient.WlBusinessFranchiseLocationBusinessFranchiseLocationSid}.
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
   *  `m_rest` {?string} The user's account balance if they were charged the {@link WlClient#wlLoginAt...
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
   *  `id_visit` {number} Possible states of the visit: book, attended, cancelled, etc. See {@link WlClient.WlVisitVisitSid}.
   *  `is_paid` {boolean} If `true`, the visit was automatically paid for in any available way during t...
   *  `k_visit` {string} The key of the booked visit. This will be set on success.
   *  `url_store` {string} The URL link to the store to allow for the payment of the visit.
   */
  WlClient.prototype.wlLoginAttendanceAddAddPost = function(params)
  {
    return this.request('/Wl/Login/Attendance/Add/Add.json', params || {}, 'POST');
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
   *  `id_convert` {number} List of options to convert promotion. See {@link WlClient.WlPromotionConvertPromotionConvertSid}.
   *  `id_convert_when` {?number} Different types of conversion behavior: when and how it should be converted. See {@link WlClient.WlLoginPromotionConvertConvertWhenSid}.
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
   * @param {number} params.id_convert The conversion ID. One of the {@link WlClient.WlPromotionConvertPromotionConvertSid} constants.
   * @param {?number} [params.id_convert_when] When conversion should be done. One of the {@link WlClient.WlLoginPromotionConvertConvertWhenSid}...
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
   * Retrieves guest passes for a specific client.
   *
   * Returns all guest passes assigned to the given user, optionally filtered by class and location.
   *
   * @param {Object} [params] Request parameters.
   * @param {?string} [params.dl_date] Local calendar date for which guest pass availability should be calculated.
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
   *  `id_attendance_direct` {number} List of places to redirect user from attendance list after inactivity. See {@link WlClient.WlReceptionRosterDirectSid}.
   *  `id_book_quick_app` {number} A class for managing time intervals. See {@link WlClient.ADurationSid}.
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
   * Gets schedule of business {@link WlClient#wlScheduleScheduleListStaffAppScheduleList} for day
  {@link WlClient#wlScheduleScheduleListStaffAppScheduleList}.
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
   * Gets schedule of business {@link WlClient#wlScheduleScheduleListStaffAppScheduleList} for day
  {@link WlClient#wlScheduleScheduleListStaffAppScheduleList}.
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
   * Check if user exists.
   *
   * Looks up a guest by email within the specified business and service context. Returns the user key if an
   * existing member is found whose email, birthday (when required), and location eligibility all pass validation.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dl_birthday Guest's birthday in MySQL format. Empty if service not restricted by age.
   * @param {number} params.id_service Type of the service to book. See {@link WlClient.WlServiceServiceSid}.
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
   * @param {number} params.id_service Type of the service to book. See {@link WlClient.WlServiceServiceSid}.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {Object} params.a_config Additional configuration for the purchase item.
   * @param {?string} [params.dtu_date] Date/time of session is booking.
   * @param {number} params.i_session The number of sessions which are booked simultaneously. See {@link WlClient.RsPurchaseItemSid}.
   * @param {number} params.id_purchase_item The ID of the purchase item type. One of {@link WlClient.RsPurchaseItemSid}.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_class_capacity `true` if class capacity should be shown,
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_day_available` {?number[]} Week days available for recurring booking. Constants of {@link WlClient.ADate...
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_backend `true` if action is performed as a staff member; `false` otherwise.
   * @param {boolean} params.is_credit_card_check Checking whether the client has a credit card (if configured in the business) will be skipped if ...
   * @param {string} params.k_class_period Key of session which is booked.
   * @param {boolean} params.show_class_capacity `true` if class capacity should be shown,
   * @param {boolean} params.show_relation `true` to show "book for" option in booking wizard. `false` for default behavior.
   * @param {string} params.uid The client key for which the booking is being made.
   * @returns {Promise<Object>} Response data.
   *  `a_day_available` {?number[]} Week days available for recurring booking. Constants of {@link WlClient.ADate...
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number[]} params.a_day List of days of the week to create visits. Each value is a {@link WlClient.ADateWeekSid} constant.
   * @param {string[]} params.a_visit_ignore List of visits to be ignored. Each value is a string consisting of a class period key
   * @param {string} params.dt_date Date and time of the class, when recurring booking was called, in UTC timezone.
   * @param {string} params.dt_from Date to start recurring booking. Not empty only when {@link WlClient#wlBookProcessFrequencyRepeat...
   * @param {string} params.dt_to Date to finish recurring booking. Not empty only when {@link WlClient#wlBookProcessFrequencyRepea...
   * @param {number} params.i_count Count of the visits to be created. Not empty only when {@link WlClient#wlBookProcessFrequencyRepe... See {@link WlClient.RsRepeatEndSid}.
   * @param {number} params.i_duration Count of days\weeks\months between recurring bookings.
   * @param {number} params.id_duration Recurring booking interval, one of {@link WlClient.ADurationSid} constants.
   * @param {number} params.id_mode WellnessLiving mode, one of {@link WlClient.WlModeModeSid} constants.
   * @param {number} params.id_repeat_end Type of repeating, one of {@link WlClient.RsRepeatEndSid} constants.
   * @param {boolean} params.is_cancel `true` when cancelling booking, `false` otherwise.
   * @param {boolean} params.is_new_user `true` if current user is not created yet, `false` otherwise.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_class_period Class period key.
   * @param {string} params.s_uid Encoded list of user keys, who will attend visits.
   * @param {string} params.uid Key of user, who will attend visits.
   * @param {string} params.uid_actor Key of user, who perform booking.
   * @returns {Promise<Object>} Response data.
   *  `a_visit` {Object[]} List of visits to be created for the given settings:
   *  `dt_from` {string} Date to start recurring booking. Not empty only when {@link WlClient#wlBookPr...
   *  `dt_to` {string} Date to finish recurring booking. Not empty only when {@link WlClient#wlBookP...
   *  `i_count` {number} Possible ways to stop repeatable events. See {@link WlClient.RsRepeatEndSid}.
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
   * @param {number[]} params.a_day List of days of the week to create visits. Each value is a {@link WlClient.ADateWeekSid} constant.
   * @param {string[]} params.a_visit_ignore List of visits to be ignored. Each value is a string consisting of a class period key
   * @param {string} params.dt_date Date and time of the class, when recurring booking was called, in UTC timezone.
   * @param {string} params.dt_from Date to start recurring booking. Not empty only when {@link WlClient#wlBookProcessFrequencyRepeat...
   * @param {string} params.dt_to Date to finish recurring booking. Not empty only when {@link WlClient#wlBookProcessFrequencyRepea...
   * @param {number} params.i_count Count of the visits to be created. Not empty only when {@link WlClient#wlBookProcessFrequencyRepe... See {@link WlClient.RsRepeatEndSid}.
   * @param {number} params.i_duration Count of days\weeks\months between recurring bookings.
   * @param {number} params.id_duration Recurring booking interval, one of {@link WlClient.ADurationSid} constants.
   * @param {number} params.id_mode WellnessLiving mode, one of {@link WlClient.WlModeModeSid} constants.
   * @param {number} params.id_repeat_end Type of repeating, one of {@link WlClient.RsRepeatEndSid} constants.
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
   *  `dt_from` {string} Date to start recurring booking. Not empty only when {@link WlClient#wlBookPr...
   *  `dt_to` {string} Date to finish recurring booking. Not empty only when {@link WlClient#wlBookP...
   *  `i_count` {number} Possible ways to stop repeatable events. See {@link WlClient.RsRepeatEndSid}.
   *  `text_date_from` {string} Start date of repeatable period in human-readable format.
   *  `text_date_to` {string} End date of repeatable period in human-readable format.
   */
  WlClient.prototype.wlBookProcessFrequencyRepeatParallel = function(params)
  {
    return this.request('/Wl/Book/Process/Frequency/RepeatParallel.json', params || {}, 'GET');
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
   * @param {number} params.id_class_modify_action The class modify step type. One of the {@link WlClient.RsClassModifyActionSid} constants.
   * @param {number} params.id_class_modify_mode The modify mode type. One of the {@link WlClient.RsClassModifyModeSid} constants.
   * @param {number} params.id_step The class modify action type. One of the {@link WlClient.RsClassModifyModeSid} constants.
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
   * @param {number} params.id_class_modify_action The class modify step type. One of the {@link WlClient.RsClassModifyActionSid} constants.
   * @param {number} params.id_class_modify_mode The modify mode type. One of the {@link WlClient.RsClassModifyModeSid} constants.
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {number} params.id_step The class modify action type. One of the {@link WlClient.RsClassModifyModeSid} constants.
   * @param {?boolean} [params.is_back] The step direction.
   * @param {string} params.k_business The business key.
   * @param {string} params.k_class_period The class period key.
   * @param {string} params.s_id The unique hash string.
   * @returns {Promise<Object>} Response data.
   *  `id_step` {number} The list of possible modify mode for class modify wizard. See {@link WlClient.RsClassModifyModeSid}.
   *  `is_back` {?boolean} The step direction.
   *  `k_class` {?string} The class ID.
   *  `s_id` {string} The unique hash string.
   */
  WlClient.prototype.wlClassesPeriodModifyModifyPost = function(params)
  {
    return this.request('/Wl/Classes/Period/Modify/Modify.json', params || {}, 'POST');
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
   * @param {number} params.id_status Defines how the event availability flag filter should be applied. See {@link WlClient.AFlagSid}.
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
   * Retrieves information about user specified in {@link WlClient#wlProfileAccountSelectSelectGet}
  and his relationship with sub accounts.
   *
   * Returns all user's relatives and type of relationship, which are allowed to sign in with.
   * So, you can use this list to sign in user as hist relative, but this is not the best way to get full family.
   * Business can set that parent can sign in as his child, but child cannot sign in as his parent. So, this method
   * will return children for parent, but will not return parents for child.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business to retrieve relationship information.
   * @param {string} params.uid UID to retrieve relationship information.
   * @returns {Promise<Object>} Response data.
   *  `a_user` {Object} Array with information about current user and his relationship with sub accou...
   */
  WlClient.prototype.wlProfileAccountSelectSelectGet = function(params)
  {
    return this.request('/Wl/Profile/Account/Select/Select.json', params || {}, 'GET');
  };

  /**
   * Signs in user specified in {@link WlClient#wlProfileAccountSelectSelectGet}.
   *
   * Returns an error if you try to sign in user not according to the business permissions.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business to retrieve relationship information.
   * @param {string} params.uid UID to retrieve relationship information.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlProfileAccountSelectSelectPost = function(params)
  {
    return this.request('/Wl/Profile/Account/Select/Select.json', params || {}, 'POST');
  };

  /**
   * Loads unpaid appointments data for the multiple payment panel.
   *
   * Loads unpaid appointments together with their addons, applicable purchase options, and
   *  purchase options already owned by the client. Appointments are loaded either for a client
   *  and their relatives on a specific day, or for an explicit list of appointments specified in
   *  {@link WlClient#wlProfileAttendanceSchedulePaymentMultipleGet}.
   *
   * @param {Object} [params] Request parameters.
   * @param {string[]} params.a_appointment List of appointment keys for which to load unpaid data.
   * @param {?string} [params.dtl_date] Local date and time for which visit is booked in MySQL format.
   * @param {boolean} params.is_simple When set to `true` it's mean that need load full information about unpaid visits:
   * @param {string} params.k_business The business key.
   * @param {?string} [params.k_location] The location key.
   * @param {string} params.k_visit Last booked visit key.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   *  `a_client` {Object} Clients' data.
   *  `a_staff_list` {Object|Object} List of available staff members for tips.
   *  `i_unpaid_number` {number} Total number of unpaid appointments.
   *  `is_tip` {boolean} Whether tips are accepted.
   */
  WlClient.prototype.wlProfileAttendanceSchedulePaymentMultipleGet = function(params)
  {
    return this.request('/Wl/Profile/Attendance/Schedule/PaymentMultiple.json', params || {}, 'GET');
  };

  /**
   * Applies existing purchase options for appointments pay and generates a link for payment in the store.
   *
   * Applies purchase options and session passes already owned by the client to the selected
   *  visits. Redirects to the store cart or checkout page so the client can complete payment for
   *  any remaining unpaid addons or newly purchased purchase options.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_visit_pay Visits payment data.
   * @param {boolean} params.is_checkout Determines for which store page the redirection url should be generated.
   * @param {string} params.k_business The business key.
   * @param {string} params.uid The user's key.
   * @returns {Promise<Object>} Response data.
   *  `url_redirect` {string} Url for redirect after applying existing purchase options.
   */
  WlClient.prototype.wlProfileAttendanceSchedulePaymentMultiplePost = function(params)
  {
    return this.request('/Wl/Profile/Attendance/Schedule/PaymentMultiple.json', params || {}, 'POST');
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
   * Gets list of contracts.
   *
   * Returns every contract the user has subscribed to or is required to agree to for the given
   *  business, including the agreement date, signature link, and contract text.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business to get information for.
   * @param {string} params.uid User to get information for.
   * @returns {Promise<Object>} Response data.
   *  `a_contract` {Object[]} List of contacts. Every element has next keys:
   */
  WlClient.prototype.wlProfileContractContractAllContractAll = function(params)
  {
    return this.request('/Wl/Profile/Contract/ContractAll/ContractAll.json', params || {}, 'GET');
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
   * @param {number} params.id_gender_staff The ID of the staff member's gender. See {@link WlClient.AGenderSid}.
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
   * @param {number} params.id_gender_staff The ID of the staff member's gender. See {@link WlClient.AGenderSid}.
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
   *  `i_week_end` {number} A class for the days of the week. See {@link WlClient.ADateWeekSid}.
   *  `i_week_start` {number} A class for the days of the week. See {@link WlClient.ADateWeekSid}.
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
   * @param {number} params.id_gender_staff The ID of the staff member's gender. See {@link WlClient.AGenderSid}.
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
   * Completes the appointment booking for one or more providers, optionally creating a new client.
   *
   * Accepts booking details for one or more providers in {@link WlClient#wlAppointmentBookFinishFinishMultiple},
   *  processes payment using the selected Purchase Option, creates appointment records, and sends
   *  booking confirmation notifications. A new client account can be created by supplying user
   *  details in {@link WlClient#wlAppointmentBookFinishFinishMultiple} when no UID is provided.
   *
   * @param {Object} [params] Request parameters.
   * @param {number[]} params.a_pay The payment type ID for each provider.
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
   * @param {number} params.id_pay The payment type ID for the service. See {@link WlClient.RsAppointmentPaySid}.
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
   * @param {number} params.id_pay The payment type ID for the service. See {@link WlClient.RsAppointmentPaySid}.
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
   * @param {number} params.id_mode The key of source mode. A constant of {@link WlClient.WlModeModeSid}.
   * @param {number} params.id_purchase_item The purchase item ID. A constant of {@link WlClient.RsPurchaseItemSid}.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {?string} [params.k_business] The business key. Currently used only with {@link WlClient#wlAppointmentBookPaymentPaymentGet} va...
   * @param {string} params.k_id The item key. Depends on {@link WlClient#wlAppointmentBookPaymentPaymentGet} property.
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
   * @param {number} params.id_mode The key of source mode. A constant of {@link WlClient.WlModeModeSid}.
   * @param {number} params.id_purchase_item The purchase item ID. A constant of {@link WlClient.RsPurchaseItemSid}.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_id The item key. Depends on {@link WlClient#wlAppointmentBookPaymentPaymentGet} property.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.text_coupon_code Gift card code.
   * @param {string} params.text_discount_code The discount code to be applied to the purchase.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_purchase_item` {?string[]} The purchase item keys from the database.
   *  `id_pay` {number} The possible payment types an appointment can have. See {@link WlClient.RsAppointmentPaySid}.
   *  `k_login_activity_purchase` {string} The key of activity of the purchase made.
   *  `k_login_prize` {string} Login prize key. In case when appointment paid by reward prize, there is the ...
   */
  WlClient.prototype.wlAppointmentBookPaymentPaymentPost = function(params)
  {
    return this.request('/Wl/Appointment/Book/Payment/Payment.json', params || {}, 'POST');
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
   * @param {number} params.id_mode The key of source mode. A constant of {@link WlClient.WlModeModeSid}.
   * @param {number} params.id_purchase_item The purchase item ID. A constant of {@link WlClient.RsPurchaseItemSid}.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {?string} [params.k_business] The business key. Currently used only with {@link WlClient#wlAppointmentBookPaymentPaymentGet} va...
   * @param {string} params.k_id The item key. Depends on {@link WlClient#wlAppointmentBookPaymentPaymentGet} property.
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
   * @param {number} params.id_mode The key of source mode. A constant of {@link WlClient.WlModeModeSid}.
   * @param {number} params.id_purchase_item The purchase item ID. A constant of {@link WlClient.RsPurchaseItemSid}.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_id The item key. Depends on {@link WlClient#wlAppointmentBookPaymentPaymentGet} property.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.text_coupon_code Gift card code.
   * @param {string} params.text_discount_code The discount code to be applied to the purchase.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_purchase_item` {?string[]} The purchase item keys from the database.
   *  `id_pay` {number} The possible payment types an appointment can have. See {@link WlClient.RsAppointmentPaySid}.
   *  `k_login_activity_purchase` {string} The key of activity of the purchase made.
   *  `k_login_prize` {string} Login prize key. In case when appointment paid by reward prize, there is the ...
   */
  WlClient.prototype.wlAppointmentBookPaymentPaymentPostPost = function(params)
  {
    return this.request('/Wl/Appointment/Book/Payment/PaymentPost.json', params || {}, 'POST');
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
   * @param {number} params.id_mode The ID of the source mode. One of the {@link WlClient.WlModeModeSid} constants.
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
   * @param {number} params.id_mode The ID of the source mode. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {string} params.text_coupon_code The gift card code.
   * @param {string} params.text_discount_code The discount code.
   * @param {string} params.uid The user key.
   * @returns {Promise<Object>} Response data.
   *  `a_login_prize` {string[]} The list of redeemed prizes.
   *  `a_pay` {number[]} The payment type for the appointment. One of the {@link WlClient.RsAppointmen...
   *  `a_purchase_item` {?string[][]} The keys of purchased items.
   *  `k_login_activity_purchase` {string} Key of the activity for the purchase made. This will be empty if no purchase ...
   */
  WlClient.prototype.wlAppointmentBookPaymentPaymentMultiplePost = function(params)
  {
    return this.request('/Wl/Appointment/Book/Payment/PaymentMultiple.json', params || {}, 'POST');
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
   * @param {number} params.id_role User role by whom this api called. See {@link WlClient.WlLoginLoginRoleSid}.
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
   * Retrieves a list of information about available purchase options.
   *
   * Returns all Purchase Options (memberships, packages, passes) the given client can use to pay for
   *  the specified appointment at the given location, including pricing details and eligibility status.
   *  Also returns options that can be purchased on the spot during booking.
   * @deprecated Use {@link \Wl\Appointment\Book\Purchase\Purchase72Api} instead.
   *
   * @param {Object} [params] Request parameters.
   * @param {Object[]} params.a_service List of selected services without current {@link WlClient#wlAppointmentBookPurchasePurchase}.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {string} params.dt_date The date to use to check for expiration of Purchase Options.
   * @param {number} params.i_duration The asset booking duration.
   * @param {?number} [params.i_height] Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {?number} [params.i_width] Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_backend `true` - get all Purchase Options suitable for appointment.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {?string} [params.k_login_promotion] The Purchase Option ID used to pay for the appointment.
   * @param {string} params.k_resource The resource key.
   * @param {string} params.k_service The service key used to select available Purchase Options.
   * @param {?string} [params.k_timezone] The timezone key for {@link WlClient#wlAppointmentBookPurchasePurchase}.
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
   * @param {Object[]} params.a_service List of selected services without current {@link WlClient#wlAppointmentBookPurchasePurchase}.
   * @param {string[]} params.a_uid List of user keys to book appointments.
   * @param {string} params.dt_date The date to use to check for expiration of Purchase Options.
   * @param {number} params.i_duration The asset booking duration.
   * @param {?number} [params.i_height] Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {?number} [params.i_width] Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.id_mode The mode type. One of the {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_backend `true` - get all Purchase Options suitable for appointment.
   * @param {boolean} params.is_walk_in If `true`, the client is a walk-in. Otherwise, this will be `false`.
   * @param {?string} [params.k_appointment] Appointment key.
   * @param {string} params.k_location Location to show available appointment booking schedule.
   * @param {?string} [params.k_login_promotion] The Purchase Option ID used to pay for the appointment.
   * @param {string} params.k_resource The resource key.
   * @param {string} params.k_service The service key used to select available Purchase Options.
   * @param {?string} [params.k_timezone] The timezone key for {@link WlClient#wlAppointmentBookPurchasePurchase}.
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
   * Retrieves list of available service add-ons.
   *
   * Returns all active add-on products available for the specified service, including title, image,
   *  price, and quantity information. Results are not filtered by client type; use {@link WlClient#wlAppointmentBookProductProduct62}
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
   * Retrieves information about assets in the current asset category.
   *
   * Returns the list of bookable assets at the given location, optionally filtered by category and book now tab.
   *  When a date and time are provided, only assets available at that time are included and busy asset slots
   *  are returned in {@link WlClient#wlAppointmentBookAssetAssetList}. Supports both frontend and backend modes.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dtl_date The selected date and time of the asset booking. It is used in cases when the business booking po...
   * @param {number} params.i_image_height Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.i_image_width Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * @param {number} params.id_mode Mode type, one of {@link WlClient.WlModeModeSid} constants.
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
   *  `a_asset_busy` {Object} A list of reserved assets.
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
   * Sends an OTP code to the user's email or phone number to initiate authorization.
   *
   * Checks the OTP rate limit, generates a new code for the given user, and dispatches it according to the
   * chosen delivery strategy. The user must not be already signed in and must not be an admin.
   * 
   * There are two ways to specify the delivery channel:
   * 
   * **1. Broadcast strategy** (default)
   * ...
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} [params.id_delivery_strategy] Type of delivery strategy from {@link WlClient.WlPassportLoginEnterOtpDeliveryStrategyEnum}.
   * @param {boolean} params.is_mail Whether OTP code will be sending to user via email.
   * @param {boolean} params.is_phone Whether OTP code will be sending to user via email.
   * @param {string} params.k_business Business key.
   * @param {string} params.text_delivery_priority Priority of delivery.
   * @param {string} params.uid User key.
   * @returns {Promise<Object>} Response data.
   *  `text_delivery_selected` {string} Delivery channel that was selected based on the given priorities and user data.
   *  `text_phone_masked` {string} Phone number masked with `*` symbols in case if we have priority sending and ...
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
   *  `i_attempt_left` {number} Number of attempts left to submit the correct otp code.
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
   *  `a_item` {Object[]} The list of cart items with the next structure:
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
   * @param {?number} params.id_sale The ID of the sale category. One of the {@link WlClient.RsSaleSid} constants.
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
   * Retrieves all reward action categories for business specified in
  {@link WlClient#wlRewardActionCategoryListCategoryList}.
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
   * Retrieves all reward boards for business specified in {@link WlClient#wlRewardBoardBoardListList}.
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
   * are submitted separately via {@link WlClient#wlSkinApplicationResourceApplicationResourceUpload}. Requires the App Build
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
   *  `id_duration` {number} A class for managing time intervals. See {@link WlClient.ADurationSid}.
   *  `id_duration_type` {number} Class to process string identifiers for duration types See {@link WlClient.RsDurationTypeSid}.
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
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.cid_page Report page CID.
   * @param {number} params.cid_report Page CID.
   * @param {string} params.k_business Business primary key in RsBusinessSql table.
   * @param {?string} [params.k_report_query] SQL query primary key. Primary key in ReportQuerySql.
   * @param {?string} [params.k_report_save] Primary key of a saved report in RsReportSaveSql table.
   * @param {string} params.s_report Report CID list to that page customization form must be converted. String separated with `,`.
   * @param {string} params.uid_actor Current user's primary key in PassportLoginAr table.
   * @returns {Promise<Object>} Response data.
   *  `a_customization_form` {*[]} Customization form data.
   */
  WlClient.prototype.thothReportCoreQueryEngineReportCustomizationReportQueryCustomizationFormGet = function(params)
  {
    return this.request('/Thoth/ReportCore/QueryEngine/Report/Customization/ReportQueryCustomizationForm.json', params || {}, 'GET');
  };

  /**
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.cid_page Report page CID.
   * @param {number} params.cid_report Page CID.
   * @param {string} params.k_business Business primary key in RsBusinessSql table.
   * @param {?string} [params.k_report_query] SQL query primary key. Primary key in ReportQuerySql.
   * @param {?string} [params.k_report_save] Primary key of a saved report in RsReportSaveSql table.
   * @param {string} params.uid_actor Current user's primary key in PassportLoginAr table.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.thothReportCoreQueryEngineReportCustomizationReportQueryCustomizationFormPost = function(params)
  {
    return this.request('/Thoth/ReportCore/QueryEngine/Report/Customization/ReportQueryCustomizationForm.json', params || {}, 'POST');
  };

  /**
   * Deletes saved card.
   *
   * Removes the payment card identified by `$k_pay_bank` from the specified business, permanently deleting
   * the stored card record.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key number used internally by WellnessLiving.
   * @param {string} params.k_pay_bank Pay bank key to delete.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPayBankCardAddAddDelete = function(params)
  {
    return this.request('/Wl/Pay/Bank/Card/Add/Add.json', params || {}, 'DELETE');
  };

  /**
   * Gets code of bank card widget.
   *
   * Returns an HTML snippet containing the card entry form rendered by the server-side widget for the given
   * payment owner. This method is deprecated; prefer building the card widget on the client side.
   * @deprecated Make card widget in client side using `RsPayBankCardEditWidget` class.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key number used internally by WellnessLiving.
   * @param {string} params.k_location The location key.
   * @param {string} params.k_pay_owner The payment owner ID. This is different from the user ID. It can be found with
   * @returns {Promise<Object>} Response data.
   *  `html_widget` {string} The HTML form containing the fields required to add a card.
   */
  WlClient.prototype.wlPayBankCardAddAddGet = function(params)
  {
    return this.request('/Wl/Pay/Bank/Card/Add/Add.json', params || {}, 'GET');
  };

  /**
   * Saves new bank card.
   *
   * Validates the payment owner and business, then saves the new card details provided in `$a_card_detail`
   * and optionally sets the card as the default recurring payment source.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business The business key number used internally by WellnessLiving.
   * @param {string} params.k_location The location key.
   * @param {string} params.k_pay_owner The payment owner ID. This is different from the user ID. It can be found with
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPayBankCardAddAddPost = function(params)
  {
    return this.request('/Wl/Pay/Bank/Card/Add/Add.json', params || {}, 'POST');
  };

  /**
   * Gets a list of saved bank cards.
   *
   * Validates the payment method, currency, business, location, and pay owner type, then loads the configured
   *  merchant and returns the list of saved cards available to the given owner. For business owners, a system-wide
   *  merchant must be configured; for users, a business-specific merchant is required.
   *
   * @param {Object} [params] Request parameters.
   * @param {?number} params.id_pay_method Payment method. See {@link WlClient.RsPayMethodSid}.
   * @param {number} params.id_pay_mode Payment mode. See {@link WlClient.RsPayModeSid}.
   * @param {number} params.id_pay_owner Payment owner kind. See {@link WlClient.RsPayOwnerSid}.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_currency Currency key.
   * @param {string} params.k_id Payment owner.
   * @param {string} params.k_location Location key.
   * @returns {Promise<Object>} Response data.
   *  `a_pay_card` {Object} List of saved bank cards.
   */
  WlClient.prototype.wlPayBankCardWidgetWidgetSelect = function(params)
  {
    return this.request('/Wl/Pay/Bank/Card/Widget/WidgetSelect.json', params || {}, 'GET');
  };

  /**
   * Deletes saved ACH.
   *
   * Removes the ACH bank account identified by `k_pay_bank` from the pay owner's saved payment methods
   *  for the given business.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_pay_bank Pay bank key to delete.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlPayBankAchAddAddDelete = function(params)
  {
    return this.request('/Wl/Pay/Bank/Ach/Add/Add.json', params || {}, 'DELETE');
  };

  /**
   * Gets widget for ACH account add.
   *
   * Validates the locale, business, and pay owner, then determines whether to use Direct Entry (Australia and New
   *  Zealand) or ACH as the payment method. Returns the rendered widget HTML and the processor ID for the
   *  resolved merchant.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} [params.id_locale] Locale ID. See {@link WlClient.CoreLocaleLocaleSid}.
   * @param {boolean} params.is_new Determines if the set of configs of the new payment form design is used.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_location Location key.
   * @param {string} params.k_pay_owner Pay owner key.
   * @returns {Promise<Object>} Response data.
   *  `html_widget` {string} The HTML form containing the fields required to add a card.
   *  `id_pay_processor` {number} A list of payment gateways or processors. See {@link WlClient.ThothPayProcessorPayProcessorSid}.
   */
  WlClient.prototype.wlPayBankAchAddAddGet = function(params)
  {
    return this.request('/Wl/Pay/Bank/Ach/Add/Add.json', params || {}, 'GET');
  };

  /**
   * Saves new ACH pay method.
   *
   * Processes the submitted ACH widget data, saves the bank account under the given pay owner and business,
   *  and optionally marks it as the default payment method. Returns the saved account details including billing
   *  address information.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_location Location key.
   * @param {string} params.k_pay_owner Pay owner key.
   * @returns {Promise<Object>} Response data.
   *  `a_pay_bank` {Object} ACH account information:
   */
  WlClient.prototype.wlPayBankAchAddAddPost = function(params)
  {
    return this.request('/Wl/Pay/Bank/Ach/Add/Add.json', params || {}, 'POST');
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
   * Returns field data.
   *
   * Loads the configuration of the specified progress field for the given business, including its type,
   * measurement unit, visibility settings, and title, and populates the result properties accordingly.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.k_business Business key.
   * @param {string} params.k_field Field key.
   * @returns {Promise<Object>} Response data.
   *  `a_measurement` {number[]} A list of field measurement. See {@link WlClient.WlMemberProgressFieldMeasure...
   *  `a_type` {number[]} A list of field type. See {@link WlClient.WlMemberProgressFieldTypeSid}.
   *  `id_field` {number} List of progress log fields. See {@link WlClient.WlMemberProgressFieldProgressFieldSid}.
   *  `id_measurement_unit` {number} Possible measurement units of the progress fields values. See {@link WlClient.WlMemberProgressFieldMeasurementSid}.
   *  `id_type` {number} Possible types of the progress fields values. See {@link WlClient.WlMemberProgressFieldTypeSid}.
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
   * Gets custom pattern data.
   *
   * Loads the saved notification template for the given business and mail type together with the
   *  default template, the reply-to business contact data and the list of variables available for
   *  substitution. When a list is requested, also loads all custom templates for the mail form.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_mail ID of the notification. One of {@link WlClient.RsMailSid} constants. `0` for empty template.
   * @param {boolean} params.is_custom_list Whether to get a list of custom template data. `true` - to get a list, `false` - otherwise.
   * @param {?string} [params.k_business] Business key.
   * @param {string} params.k_mail_pattern Mail pattern key.
   * @param {?string} [params.k_service] Key of the service being booked.
   * @param {string} params.sid_mail_form SID of the mail form. String representation of one from RsMailFormSid class constants.
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
   *  {@link WlClient#wlMailPatternAutomatedMarketingCustomTemplatePatternGet}.
   *
   * @param {Object} [params] Request parameters.
   * @param {number} params.id_mail ID of the notification. One of {@link WlClient.RsMailSid} constants. `0` for empty template.
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
   * Retrieves assets required for a service booking at the given date and time, including availability and busy status.
   *
   * Returns the asset categories and individual assets linked to the service at the given location.
   *  Each asset includes its availability flag for the requested time slot. The response also includes
   *  {@link WlClient#wlAppointmentBookAssetServiceService} with currently reserved asset slots and a flag indicating
   *  whether the current user is allowed to book unavailable assets.
   *
   * @param {Object} [params] Request parameters.
   * @param {string} params.dt_start The appointment booking date selected by the user.
   * @param {number} params.id_mode Mode type, one of {@link WlClient.WlModeModeSid} constants.
   * @param {boolean} params.is_backend If `true`, back-end mode is selected.
   * @param {boolean} params.is_grid_any Whether to show both grid layouts and custom layouts.
   * @param {boolean} params.is_show_unavailable_assets Whether unavailable assets should be included.
   * @param {?string} [params.k_appointment_ignore] The appointment booking key to ignore when {@link WlClient#wlAppointmentBookAssetServiceService} ...
   * @param {string} params.k_location The selected location key.
   * @param {string} params.k_service The selected service's key.
   * @param {string} params.k_timezone Timezone of date and time of service start.
   * @param {string} params.uid User to get information for.
   * @returns {Promise<Object>} Response data.
   *  `a_resource_busy` {Object} A list of reserved assets.
   *  `a_resource_type` {Object} A list of assets required for the service booking.
   *  `can_book_unavailable_assets` {boolean} Can the staff members book reserved assets.
   */
  WlClient.prototype.wlAppointmentBookAssetServiceService = function(params)
  {
    return this.request('/Wl/Appointment/Book/Asset/Service/Service.json', params || {}, 'GET');
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
   * @param {Object} params.a_note The list of notes for product options in the store.
   * @param {Object} params.a_quantity The list of product option quantities in the store.
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
   * @param {Object} params.a_note The list of notes for product options in the store.
   * @param {Object} params.a_quantity The list of product option quantities in the store.
   * @param {string} params.k_business The current business.
   * @returns {Promise<Object>} Response data.
   */
  WlClient.prototype.wlShopProductOptionInventoryCountInventoryCountPost = function(params)
  {
    return this.request('/Wl/Shop/Product/Option/Inventory/Count/InventoryCount.json', params || {}, 'POST');
  };

  // ---------------------------------------------------------------------------
  // Enum constants (201 total)
  // ---------------------------------------------------------------------------

  /**
   * A list of locales.
   *
   * @enum {number}
   */
  WlClient.CoreLocaleLocaleSid = Object.freeze({
    /** Australia */
    AUSTRALIA: 4,
    /** Bahamas */
    BAHAMAS: 20,
    /** Bermuda */
    BERMUDA: 19,
    /** Canada */
    CANADA: 2,
    /** Cayman Islands */
    CAYMAN: 5,
    /** Cyprus */
    CYPRUS: 13,
    /** Egypt */
    EGYPT: 8,
    /** Republic of Ireland */
    IRELAND: 18,
    /** Kuwait */
    KUWAIT: 14,
    /** Republic of Mauritius */
    MAURITIUS: 16,
    /** A special locale that can be used for testing or a business situated in an unknown region */
    NEVERLAND: 9,
    /** New Zealand */
    NEW_ZEALAND: 10,
    /** Philippines */
    PHILIPPINES: 12,
    /** Saudi Arabia */
    SAUDI_ARABIA: 15,
    /** Senegal */
    SENEGAL: 17,
    /** Singapore */
    SINGAPORE: 21,
    /** South Africa */
    SOUTH_AFRICA: 6,
    /** United Arab Emirates */
    UAE: 11,
    /** United Kingdom */
    UK: 3,
    /** United States of America */
    USA: 1,
  });

  /**
   * List of Google reCaptcha versions.
   *
   * @enum {number}
   */
  WlClient.CoreGoogleCaptchaCaptchaVersionSid = Object.freeze({
    /** Version 2 (invisible) */
    V2: 1,
    /** Version 3 */
    V3: 2,
  });

  /**
   * A list of task statuses.
   *
   * @enum {number}
   */
  WlClient.WlTaskTaskStatusSid = Object.freeze({
    /** Task is not started */
    BACKLOG: 1,
    /** Task completed */
    COMPLETE: 3,
    /** Task in progress */
    PROGRESS: 2,
  });

  /**
   * Class to work with gender string identifiers.
   *
   * @enum {number}
   */
  WlClient.WlGenderGenderSid = Object.freeze({
    /** Female gender */
    FEMALE: 2,
    /** Male gender */
    MALE: 1,
    /** Gender is undefined in cases where the user preferred not to identify their gender */
    UNDEFINED: 3,
  });

  /**
   * Lists statuses of reports from point of view of its generation.
   *
   * @enum {number}
   */
  WlClient.ThothReportCoreGeneratorReportGeneratorStatusSid = Object.freeze({
    /** Report is in an inconsistent state */
    ABORTED: 6,
    /** Current operation is being aborted now */
    ABORTING: 5,
    /** This report is being deleted now */
    DELETING: 4,
    /** This report is being generated now */
    GENERATING: 2,
    /** Generation of this report is queued */
    QUEUED: 1,
    /** Generation of this report is now completed */
    READY: 3,
  });

  /**
   * A list of reports.
   *
   * @enum {number}
   */
  WlClient.RsReportSid = Object.freeze({
    /** Report with list of canceled appointments */
    APPOINTMENT_CANCEL: 163,
    /** Report with list of requested appointments */
    APPOINTMENT_REQUEST: 54,
    /** Report with list of requested appointments */
    APPOINTMENT_REQUEST_SHORT: 55,
    /** Booking metric */
    BOOK_METRIC_CHART: 204,
    /** Report about revenue for application */
    BUSINESS_ACCOUNT_APPLICATION: 117,
    /** Report with the list of 'Annual Application Fees' transactions */
    BUSINESS_ACCOUNT_APPLICATION_ANNUAL: 135,
    /** Report about first paid application subscription */
    BUSINESS_ACCOUNT_APPLICATION_NEW: 221,
    /** Report with the list of customers lost during the period */
    BUSINESS_ACCOUNT_CHURN: 81,
    /** Gift card usages */
    BUSINESS_ACCOUNT_COUPON: 237,
    /** The number of WellnessLiving customers */
    BUSINESS_ACCOUNT_CUSTOMER: 84,
    /** The number of WellnessLiving customers during the selected period */
    BUSINESS_ACCOUNT_CUSTOMER_BEGIN: 85,
    /** The list of all locations from WellnessLiving customers during the selected period including */
    BUSINESS_ACCOUNT_CUSTOMER_LOCATION: 244,
    /** Report with the list of customers that has failed payments */
    BUSINESS_ACCOUNT_DEBT: 105,
    /** Report with list of changes to business account settings */
    BUSINESS_ACCOUNT_LOG: 248,
    /** Report with list of changes to business account settings */
    BUSINESS_ACCOUNT_LOG_ALL: 267,
    /** Report with the list of all payments from businesses to Wellnessliving Inc */
    BUSINESS_ACCOUNT_REVENUE: 227,
    /** Report with the list of all subscription payments */
    BUSINESS_ACCOUNT_REVENUE_SUBSCRIPTION: 222,
    /** Report with taxes of all payments from businesses */
    BUSINESS_ACCOUNT_REVENUE_TAX: 236,
    /** Report with list of previous payments for business account */
    BUSINESS_ACCOUNT_SCHEDULE_PREVIOUS: 251,
    /** Report with list of future payments for business account */
    BUSINESS_ACCOUNT_SCHEDULE_UPCOMING: 252,
    /** Skipped customers (who skipped business subscription payment) */
    BUSINESS_ACCOUNT_SKIP: 98,
    /** Report with business subscription information */
    BUSINESS_ACCOUNT_SUBSCRIPTION: 254,
    /** Report with business subscription information for churned businesses */
    BUSINESS_ACCOUNT_SUBSCRIPTION_CHURN: 256,
    /** Report with the list of 'Annual merchant processing fees' and 'Annual PCI fees' transactions */
    BUSINESS_ACCOUNT_TRANSACTION_ANNUAL: 100,
    /** Report with the list of bonus transactions */
    BUSINESS_ACCOUNT_TRANSACTION_BONUS: 88,
    /** Report with the list of 'Direct Connect Bonuses' transactions */
    BUSINESS_ACCOUNT_TRANSACTION_BONUS_DIRECT: 114,
    /** Report with the list of failed transactions */
    BUSINESS_ACCOUNT_TRANSACTION_FAIL: 87,
    /** Report with the list of 'Optimal Merchant' transactions */
    BUSINESS_ACCOUNT_TRANSACTION_MERCHANT_REVENUE: 95,
    /** Report with the list of 'NMI' transactions */
    BUSINESS_ACCOUNT_TRANSACTION_NMI: 89,
    /** Report with the list of all businesses */
    BUSINESS_ALL: 107,
    /** Achieve clients metric */
    BUSINESS_APPLICATION_METRIC_CHART: 208,
    /** Report with the list of 'MP Approval Fee' transactions */
    BUSINESS_CHARGE_APPROVAL: 90,
    /** Report with the list of 'Credit Card Import Fees' transactions */
    BUSINESS_CHARGE_CCIMPORT: 91,
    /** Report with the list of 'Early Termination' transactions */
    BUSINESS_CHARGE_EARLY: 104,
    /** Report with the list of 'Hardware' transactions */
    BUSINESS_CHARGE_HARDWARE: 92,
    /** Report with the list of 'OTHER' transactions */
    BUSINESS_CHARGE_OTHER: 96,
    /** Report with the list of 'Set Up Fees' transactions */
    BUSINESS_CHARGE_SETUP: 93,
    /** Report with list of customers' churn status history */
    BUSINESS_CUSTOMER_STATUS_HISTORY: 226,
    /** Report with list of customers' statuses */
    BUSINESS_CUSTOMER_STATUS_LOCATION: 225,
    /** List of franchisee business hours */
    BUSINESS_FRANCHISE_HOURS: 247,
    /** List of franchisee locations */
    BUSINESS_FRANCHISE_LOCATION: 141,
    /** List of franchise region */
    BUSINESS_FRANCHISE_REGION_LIST: 142,
    /** Saba files report */
    BUSINESS_FRANCHISE_REPORT_CURVES_SABA: 219,
    /** Report with list of customer leads */
    BUSINESS_LEAD: 125,
    /** The number of unique merchant accounts that have processed more than $100 from the beginning */
    BUSINESS_MERCHANT_PROCESS: 82,
    /** The number of unique merchant accounts that processed greater than $100 for the first time during the selected period */
    BUSINESS_MERCHANT_PROCESS_BEGIN: 83,
    /** Report with list of business having active Sms subscription */
    BUSINESS_MESSAGE: 260,
    /** WellnessLiving Key Metrics */
    BUSINESS_METRIC: 94,
    /** Report with amount that should be paid to partners for their referrals */
    BUSINESS_PARTNER_PAY: 126,
    /** Report with list of all referrals of the given business */
    BUSINESS_PARTNER_REFERRAL_DETAIL: 128,
    /** Report with list of all businesses which gave us at least one new customer */
    BUSINESS_PARTNER_REFERRAL_SUMMARY: 129,
    /** Report which allows to view list of classes that starts or ends within specific date range */
    CLASSES_SCHEDULE: 127,
    /** Class capacity utilization metric */
    CLASSES_UTILIZATION_CHART: 205,
    /** History of a contacts with clients */
    CONTACT_MEMBER_HISTORY: 110,
    /** History of a contacts for one certain client */
    CONTACT_MEMBER_HISTORY_USER: 152,
    /** Event capacity utilization metric */
    EVENT_UTILIZATION_CHART: 215,
    /** List of all relatives in the business */
    FAMILY_ALL: 134,
    /** Franchise membership transfer history report */
    FRANCHISE_TRANSFER_MEMBERSHIP_HISTORY_LIST: 159,
    /** Franchise membership requested transfers report */
    FRANCHISE_TRANSFER_MEMBERSHIP_REQUESTED_LIST: 160,
    /** Report to view list of locations with gympass integration status */
    GYMPASS_LOCATION: 266,
    /** List of all link that import could not process correctly even after max count of attempts */
    IMPORT_MIGRATION_COMPANY_URL_FAIL: 121,
    /** A list of imported visits */
    IMPORT_MIGRATION_COMPANY_VISIT_LIST: 220,
    /** "Wellness Program" report on user profile */
    INSURANCE_PROFILE_PROGRAM: 181,
    /** Detail wellness program report on user profile */
    INSURANCE_PROFILE_PROGRAM_DETAIL: 184,
    /** List of clients, which got reimbursement */
    INSURANCE_REIMBURSEMENT_DETAIL: 183,
    /** List of clients, which got reimbursement */
    INSURANCE_REIMBURSEMENT_FRANCHISE_DETAIL: 217,
    /** Total amounts of reimbursement by partner */
    INSURANCE_REIMBURSEMENT_FRANCHISE_SUMMARY: 218,
    /** List of partner, which support reimbursement export and import */
    INSURANCE_REIMBURSEMENT_REBATE_FILE: 233,
    /** Total amounts of reimbursement by partner */
    INSURANCE_REIMBURSEMENT_SUMMARY: 182,
    /** Isaac control report */
    ISAAC_CONTROL: 241,
    /** Franchise leads from lead capture forms. Chart representation */
    LEAD_FRANCHISE_REPORT_CHART: 173,
    /** Franchise leads from lead capture forms. Table representation */
    LEAD_FRANCHISE_REPORT_LIST: 167,
    /** Franchise leads from lead capture forms. Year-by-year chart representation */
    LEAD_FRANCHISE_REPORT_YOY: 176,
    /** Leads from lead capture forms */
    LEAD_LIST: 42,
    /** New leads metric */
    LEAD_NEWEST_METRIC_CHART: 200,
    /** New leads YOY metric */
    LEAD_NEWEST_METRIC_YOY: 203,
    /** Leads from lead capture forms */
    LEAD_REPORT_CHART: 166,
    /** List of market locations */
    LOCATION_MARKET: 35,
    /** Log report of staff activity */
    LOG: 136,
    /** List of clients with information about account state */
    LOGIN_ACCOUNT: 43,
    /** List of clients with upcoming birthdays within a specified date range */
    LOGIN_BIRTHDAY: 75,
    /** For the past 4 years, shows the number of clients whose */
    LOGIN_CLIENT_NEWEST_METRIC_CHART: 199,
    /** List of all Gift Cards purchased */
    LOGIN_COUPON: 76,
    /** Detail franchise client report table */
    LOGIN_FRANCHISE_DETAIL_LIST: 156,
    /** Franchise client status report table */
    LOGIN_FRANCHISE_STATUS_LIST: 162,
    /** Login list */
    LOGIN_LIST: 22,
    /** Login list all */
    LOGIN_LIST_ALL: 33,
    /** Report with conversions of Login Types */
    LOGIN_MEMBER_TYPE_HISTORY: 122,
    /** Report "Client Data" */
    LOGIN_PROFILE: 72,
    /** Report about client's ranks */
    LOGIN_RANK: 40,
    /** List of clients that are at churn risk according to isaac prediction */
    LOGIN_RISK: 261,
    /** Report with client's attendance history */
    LOGIN_VISIT: 52,
    /** Count of sent mail and sms per business */
    MAIL_BUSINESS_LIST: 46,
    /** Mail campaign details list report */
    MAIL_CAMPAIGN_DETAIL: 37,
    /** Mail campaign history list report */
    MAIL_CAMPAIGN_LIST: 36,
    /** Mail history list report */
    MAIL_HISTORY_LIST: 38,
    /** Member progress body fat report in chart view */
    MEMBER_PROGRESS_LOG_BODY_FAT: 149,
    /** Member progress report collection for charts */
    MEMBER_PROGRESS_LOG_CHART: 146,
    /** Report with list of progress log per client */
    MEMBER_PROGRESS_LOG_CLIENT: 150,
    /** Member progress main report in table view */
    MEMBER_PROGRESS_LOG_LIST: 147,
    /** Member progress report collection for table */
    MEMBER_PROGRESS_LOG_TABLE: 145,
    /** Member progress weight report in chart view */
    MEMBER_PROGRESS_LOG_WEIGHT: 148,
    /** List of clients' credit cards with expiration date */
    PAY_BANK_CARD_EXPIRE: 44,
    /** Total Sum Processed by all Businesses */
    PAY_METHOD_BUSINESS: 235,
    /** Total Sum Processed from all Businesses to wellnessliving */
    PAY_METHOD_SYSTEM: 78,
    /** Processing per Business with Login Date */
    PAY_METHOD_SYSTEM_LOGIN: 242,
    /** A report to track history of refunds */
    PAY_REFUND: 45,
    /** A list of payment transactions that are in the NMI batches */
    PAY_TRANSACTION_BATCH: 77,
    /** List of Cash Outs */
    PAY_TRANSACTION_CASH: 113,
    /** If the report is opened in backend it shows a list of transactions for the current business */
    PAY_TRANSACTION_LIST: 34,
    /** If the report is opened in backend it shows a list of transactions for the current business */
    PAY_TRANSACTION_SUM: 119,
    /** Revenue Report for WellnessLiving Accounting */
    PAY_TRANSACTION_SYSTEM_ALL: 79,
    /** If the report is opened in backend it shows a list of system transactions for the current business */
    PAY_TRANSACTION_SYSTEM_LIST: 62,
    /** Revenue Report for WellnessLiving Accounting */
    PAY_TRANSACTION_SYSTEM_REFUND: 106,
    /** Sum of all transactions from businesses to system merchants */
    PAY_TRANSACTION_SYSTEM_SUMMARY: 143,
    /** If the report is opened in backend it shows a list of transactions for the one given user in the current business */
    PAY_TRANSACTION_USER: 120,
    /** This report is available for user in client app */
    PAY_TRANSACTION_USER_CLIENT: 253,
    /** Postcard history list report */
    POSTCARD_HISTORY: 103,
    /** Attendance history report in frontend */
    PROFILE_ATTENDANCE_SCHEDULE_FRONTEND_HISTORY: 180,
    /** Upcoming schedule report in frontend */
    PROFILE_ATTENDANCE_SCHEDULE_FRONTEND_UPCOMING: 179,
    /** Attendance history report */
    PROFILE_ATTENDANCE_SCHEDULE_HISTORY: 178,
    /** Attendance history report for given login promotion */
    PROFILE_ATTENDANCE_SCHEDULE_LOGIN_PROMOTION_HISTORY: 262,
    /** Upcoming schedule report for given login promotion */
    PROFILE_ATTENDANCE_SCHEDULE_LOGIN_PROMOTION_UPCOMING: 263,
    /** Upcoming schedule report */
    PROFILE_ATTENDANCE_SCHEDULE_UPCOMING: 177,
    /** Contract list report in client profile */
    PROFILE_CONTRACT_LIST: 255,
    /** Report to view list of responses for specific user in client profile */
    PROFILE_FORM_RESPONSE: 265,
    /** Gift Card report in client profile */
    PROFILE_PURCHASE_REPORT_COUPON: 193,
    /** Session Pass report in client profile */
    PROFILE_PURCHASE_REPORT_EVENT: 192,
    /** Groupon report in client profile */
    PROFILE_PURCHASE_REPORT_GROUPON: 213,
    /** Membership report in client profile */
    PROFILE_PURCHASE_REPORT_MEMBERSHIP: 188,
    /** Package report in client profile */
    PROFILE_PURCHASE_REPORT_PACKAGE: 189,
    /** Duration Pass report in client profile */
    PROFILE_PURCHASE_REPORT_SESSION_DURATION: 190,
    /** Session Pass report in client profile */
    PROFILE_PURCHASE_REPORT_SESSION_PASS: 191,
    /** Single Session report in client profile */
    PROFILE_PURCHASE_REPORT_SESSION_SINGLE: 194,
    /** Intro offers metric */
    PROMOTION_INTRODUCTORY_METRIC_CHART: 206,
    /** Shows list of memberships with negative balances */
    PROMOTION_MEMBERSHIP_NEGATIVE: 130,
    /** Shows list of pricing options from that were imported mindbody and converted into memberships */
    PROMOTION_PASS_MEMBERSHIP: 108,
    /** A list of payment transactions including scheduled transaction (recurrent payments for memberships and renewals of */
    PURCHASE_AUTO_LIST: 60,
    /** Report with list of sales per client */
    PURCHASE_CLIENT_SUMMARY: 115,
    /** Summary franchise memberships report (chart view) */
    PURCHASE_FRANCHISE_MEMBERSHIP_CHART: 175,
    /** Summary franchise memberships report */
    PURCHASE_FRANCHISE_MEMBERSHIP_DETAIL: 257,
    /** Summary franchise memberships report */
    PURCHASE_FRANCHISE_MEMBERSHIP_LIST: 174,
    /** Purchases that have been bought divided by payment methods */
    PURCHASE_ITEM_ACCRUAL_CASH: 123,
    /** Purchases that have been bought divided by time */
    PURCHASE_ITEM_ACCRUAL_CASH_CHART: 171,
    /** Special quick purchases report for migration */
    PURCHASE_ITEM_ACCRUAL_MIGRATION: 132,
    /** Summaries of the sales divided by days, months or years */
    PURCHASE_ITEM_ACCRUAL_SUMMARY: 133,
    /** Purchase item count */
    PURCHASE_ITEM_COUNT: 27,
    /** Purchase item count product */
    PURCHASE_ITEM_COUNT_PRODUCT: 50,
    /** Purchase item count revenue */
    PURCHASE_ITEM_COUNT_REVENUE: 51,
    /** Purchase item list */
    PURCHASE_ITEM_LIST: 26,
    /** All sales report */
    PURCHASE_ITEM_LIST_PRODUCT: 48,
    /** Sales With Revenue Categories report */
    PURCHASE_ITEM_LIST_REVENUE: 49,
    /** List of sale for the one user */
    PURCHASE_ITEM_LIST_USER: 118,
    /** List of memberships in chart format */
    PURCHASE_MEMBERSHIP_CHART: 165,
    /** List of memberships */
    PURCHASE_MEMBERSHIP_LIST: 71,
    /** Lost members metric */
    PURCHASE_MEMBERSHIP_METRIC_CHART: 198,
    /** Recurring revenue metric */
    PURCHASE_MEMBERSHIP_RECURRING_METRIC_CHART: 202,
    /** All sales metric */
    PURCHASE_METRIC_CHART: 195,
    /** All sales YOY metric */
    PURCHASE_METRIC_YOY: 201,
    /** Report with list of sales grouped by purchase options. Products and drop-ins are not included */
    PURCHASE_OPTION_SUMMARY: 109,
    /** Purchase tag count */
    PURCHASE_TAG_COUNT: 30,
    /** Purchase tag list */
    PURCHASE_TAG_LIST: 31,
    /** Report taxes of business in list format */
    PURCHASE_TAX_COUNT: 29,
    /** Report taxes of business in chart format */
    PURCHASE_TAX_LIST: 28,
    /** List of sales with non zero tips */
    PURCHASE_TIP: 99,
    /** Tips summary by staff */
    PURCHASE_TIP_SUM: 101,
    /** Report to view list of responses for specific quiz */
    QUIZ_RESPONSE: 264,
    /** Report with list of generated reports */
    REPORT_BACKGROUND_GENERATE: 246,
    /** Report with list of customers reviews. Available only in business backend and contains reviews on this business */
    REVIEW_LIST: 47,
    /** Report with list of customers reviews. Available out of the backend and contains reviews on all businesses */
    REVIEW_ROOT: 53,
    /** Report client's reward points */
    REWARD_BOARD: 56,
    /** Schedule prospect count */
    SCHEDULE_PROSPECT_COUNT: 9,
    /** Daily Tracker */
    SCHEDULE_PROSPECT_LIST: 10,
    /** Report about daily booking activity special for dashboard */
    SCHEDULE_PROSPECT_LIST_TODAY: 39,
    /** Schedule wait list */
    SCHEDULE_WAIT_LIST: 11,
    /** Products, Purchase Options and Packages with Barcode */
    SHOP_BARCODE: 102,
    /** Inventory On Hand */
    SHOP_PRODUCT: 80,
    /** Physical Inventory Count */
    SHOP_PRODUCT_OPTION_INVENTORY_COUNT: 243,
    /** SMS history report */
    SMS_HISTORY: 116,
    /** Social sharing details */
    SOCIAL_SHARE_DETAILS_LIST: 212,
    /** All social sharing */
    SOCIAL_SHARE_METRIC_CHART: 197,
    /** Social sharing summary by user */
    SOCIAL_SHARE_SUMMARY_LIST: 214,
    /** Chart version of {@link WlClient.RsReportSid} report */
    STAFF_PAY_COUNT: 24,
    /** Report that contains detail information about staff payments for each option */
    STAFF_PAY_DETAIL: 25,
    /** Report that contains general information about payments for each staff */
    STAFF_PAY_LIST: 23,
    /** Staff retention report collection */
    STAFF_RETENTION: 137,
    /** Staff Member New Clients Retention report */
    STAFF_RETENTION_CLIENT_NEW: 138,
    /** Staff Member Repeat Clients Retention report */
    STAFF_RETENTION_CLIENT_REPEAT: 139,
    /** Staff Member Client Retention Summary report */
    STAFF_RETENTION_CLIENT_SUMMARY: 140,
    /** Report that contains detailed information about staff clock-in and clock-out, total load, hourly pay rates, average */
    STAFF_TIME_DETAIL: 111,
    /** Report that contains summary information about staff clock-in and clock-out, total load, hourly pay rates, average */
    STAFF_TIME_SUMMARY: 112,
    /** Staff task manager */
    TASK_MANAGER: 86,
    /** Report that contains regional taxes */
    TAX_REGION: 234,
    /** Report with potential client duplicates */
    USER_DUPLICATE: 185,
    /** Report with all businesses, which has videos and count of videos and total size of the videos */
    VIDEO_BUSINESS_ALL: 239,
    /** Report with all businesses, which has videos and count of videos and total size of the videos */
    VIDEO_BUSINESS_UPLOAD: 240,
    /** Report with all business videos and basic information about these videos */
    VIDEO_DETAIL: 238,
    /** Report with all business videos and detail information about these videos */
    VIDEO_SUMMARY: 250,
    /** Report with all views of videos and information about a viewers */
    VIDEO_VIEW_DETAIL: 249,
    /** Report with list of canceled appointments */
    VIRTUAL_ZOOM_USER_HISTORY: 245,
    /** Controls visit appointment report in chart format */
    VISIT_APPOINTMENT_COUNT: 70,
    /** Appointment details analysis report */
    VISIT_APPOINTMENT_DETAIL: 66,
    /** Appointment details analysis report */
    VISIT_APPOINTMENT_LIST: 65,
    /** List of visits in attended state */
    VISIT_ATTEND_LIST: 64,
    /** List of visits in attended state */
    VISIT_ATTEND_LIST_LEGACY: 268,
    /** Visit book count */
    VISIT_BOOK_COUNT: 4,
    /** Visit book list */
    VISIT_BOOK_LIST: 6,
    /** Visit class average count */
    VISIT_CLASS_AVERAGE_COUNT: 20,
    /** Visit class average list */
    VISIT_CLASS_AVERAGE_LIST: 18,
    /** Visit class buy */
    VISIT_CLASS_BUY: 32,
    /** Controls list report for attendance. With information about usage purchase option */
    VISIT_CLASS_BUY_DETAIL: 61,
    /** Controls visit class report in chart format */
    VISIT_CLASS_COUNT: 16,
    /** Class analysis report */
    VISIT_CLASS_DETAIL: 59,
    /** Simplified variation of report {@link WlClient.RsReportSid} */
    VISIT_CLASS_LIST: 14,
    /** Report with list of duplicated visits */
    VISIT_DUPLICATE: 131,
    /** Controls visit event report in chart format */
    VISIT_EVENT_COUNT: 69,
    /** Event details analysis report */
    VISIT_EVENT_DETAIL: 68,
    /** Event analysis report */
    VISIT_EVENT_LIST: 67,
    /** Old first visits report */
    VISIT_FIRST_COUNT: 3,
    /** Old first visits report */
    VISIT_FIRST_LIST: 2,
    /** Filterable first visit list report, allowing to see first visits to certain criteria (locations/events/etc.) */
    VISIT_FIRST_SCOPED_COUNT: 224,
    /** Filterable first visit list report, allowing to see first visits to certain criteria (locations/events/etc.) */
    VISIT_FIRST_SCOPED_LIST: 223,
    /** Detail franchise cross-location visits table for franchisee */
    VISIT_FRANCHISE_LOCATION_CROSS_DETAIL_FRANCHISEE: 186,
    /** Detail franchise cross-location visits table */
    VISIT_FRANCHISE_LOCATION_CROSS_DETAIL_LIST: 157,
    /** Summary franchise cross-location visits chart */
    VISIT_FRANCHISE_LOCATION_CROSS_SUMMARY_CHART: 164,
    /** Summary franchise cross-location visits table for franchisee */
    VISIT_FRANCHISE_LOCATION_CROSS_SUMMARY_FRANCHISEE: 187,
    /** Summary franchise cross-location visits table */
    VISIT_FRANCHISE_LOCATION_CROSS_SUMMARY_LIST: 158,
    /** Expired passes report in chart format */
    VISIT_LAST_COUNT: 8,
    /** Expired passes report in list format */
    VISIT_LAST_LIST: 7,
    /** Detail cross-location visits table. For regular businesses */
    VISIT_LOCATION_CROSS_DETAIL_LIST: 168,
    /** Summary cross-location visits chart. For regular businesses */
    VISIT_LOCATION_CROSS_SUMMARY_CHART: 170,
    /** Summary cross-location visits table. For regular businesses */
    VISIT_LOCATION_CROSS_SUMMARY_LIST: 169,
    /** Visit login list */
    VISIT_LOGIN_LIST: 12,
    /** Visits Remaining */
    VISIT_REMAIN_LIST: 63,
    /** Visits Remaining */
    VISIT_REMAIN_LIST_TEMP: 144,
    /** Detailed revenue by service */
    VISIT_REVENUE_DETAIL: 58,
    /** Service revenue analysis */
    VISIT_REVENUE_LIST: 57,
    /** Risky clients */
    VISIT_RISK: 41,
    /** Event capacity utilization metric */
    VISIT_RISK_ISAAC: 216,
    /** Visit staff average count */
    VISIT_STAFF_AVERAGE_COUNT: 19,
    /** Visit staff average list */
    VISIT_STAFF_AVERAGE_LIST: 17,
    /** Visit staff count */
    VISIT_STAFF_COUNT: 15,
    /** Visit staff list */
    VISIT_STAFF_LIST: 13,
    /** Detail list of unpaid visits */
    VISIT_UNPAID_DETAIL: 74,
    /** List of unpaid visits */
    VISIT_UNPAID_LIST: 73,
    /** Monthly coaching sessions YOY report for Curves business */
    VISIT_WORKOUT_APPOINTMENT_LIST: 210,
    /** Monthly coaching sessions YOY report for Curves business */
    VISIT_WORKOUT_APPOINTMENT_YOY: 211,
    /** Workout list report for Curves business */
    VISIT_WORKOUT_GYM_LIST: 209,
    /** Workout YOY report for Curves business */
    VISIT_WORKOUT_GYM_YOY: 207,
    /** Report with list of businesses connected to FitLIVE */
    ZOOM_SYSTEM_BUSINESS: 258,
    /** Report with list of businesses connected to FitLIVE */
    ZOOM_SYSTEM_COUNT: 259,
  });

  /**
   * Statuses of domain verification.
   *
   * @enum {number}
   */
  WlClient.WlMailDomainDomainVerifyStatusSid = Object.freeze({
    /** Domain is not verified */
    FAIL: 2,
    /** Domain verification is pending */
    PENDING: 1,
    /** Domain is verified */
    SUCCESS: 3,
  });

  /**
   * Statuses of mail verification. Based on statuses that returns Amazon SES API.
   *
   * @enum {number}
   */
  WlClient.WlMailVerifyMailVerifyStatusSid = Object.freeze({
    /** Email is not verified */
    FAIL: 4,
    /** Verification request is not running */
    NONE: 1,
    /** Email is verified */
    VERIFY: 3,
    /** Verification in progress */
    WAIT_FOR_VERIFY: 2,
  });

  /**
   * A class for a list of card systems.
   *
   * @enum {number}
   */
  WlClient.ACardSystemSid = Object.freeze({
    /** American Express */
    AMERICAN_EXPRESS: 1,
    /** Bank of Montreal (BMO) */
    BMO: 2,
    /** Canadian Imperial Bank of Commerce (CIBC) */
    CIBC: 3,
    /** Diners Club International */
    DINNER_CLUB: 4,
    /** Discover */
    DISCOVER: 5,
    /** HSBC Bank Canada */
    HSBC_CANADA: 6,
    /** Japan Credit Bureau (JCB) */
    JCB: 7,
    /** Mastercard */
    MASTERCARD: 8,
    /** Royal Bank of Canada */
    ROYAL_BANK: 9,
    /** Scotiabank */
    SCOTIBANK: 10,
    /** TD Canada Trust */
    TD_CANADA: 11,
    /** The card system can't be determined */
    UNDEFINED: 13,
    /** Union Pay */
    UNION_PAY: 14,
    /** Visa */
    VISA: 12,
  });

  /**
   * An exception that is thrown in a case of a payment error.
   *
   * @enum {number}
   */
  WlClient.RsPayException = Object.freeze({
    /** Invalid ABA number chosen */
    ABAN_EMPTY: 58,
    /** Invalid ABA number chosen */
    ABAN_INVALID: 57,
    /** User Authentication Failed */
    ACCESS_AUTHENTICATE: 160,
    /** Authentication token is not valid */
    ACCESS_TOKEN_INVALID: 181,
    /** Account payment entry method is empty */
    ACCOUNT_ENTRY_EMPTY: 63,
    /** Account holder type is empty */
    ACCOUNT_HOLDER_EMPTY: 64,
    /** Account name is empty */
    ACCOUNT_NAME_EMPTY: 59,
    /** Account name is too long */
    ACCOUNT_NAME_LONG: 60,
    /** Account number is empty */
    ACCOUNT_NUMBER_EMPTY: 61,
    /** Account number invalid */
    ACCOUNT_NUMBER_INVALID: 67,
    /** Account number is too long */
    ACCOUNT_NUMBER_LONG: 62,
    /** Account number is too short */
    ACCOUNT_NUMBER_SHORT: 66,
    /** Account owner is empty */
    ACCOUNT_OWNER_EMPTY: 69,
    /** Account name is too long */
    ACCOUNT_OWNER_LONG: 70,
    /** Account owner name does not equal billing name */
    ACCOUNT_OWNER_DOES_NOT_MATCH: 182,
    /** Account type is empty */
    ACCOUNT_TYPE_EMPTY: 65,
    /** ACH: Account Closed */
    ACH_E02: 198,
    /** ACH: No Account / Unable to Locate Account */
    ACH_E03: 199,
    /** ACH: Invalid Account Number */
    ACH_E04: 200,
    /** ACH: Unauthorized Debit to Consumer Account Using Corporate SEC Code */
    ACH_E05: 201,
    /** ACH: Authorization Revoked by Customer */
    ACH_E07: 202,
    /** ACH: Payment Stopped */
    ACH_E08: 203,
    /** ACH: Customer Advises Originator Not Known / Not Authorized */
    ACH_E10: 204,
    /** ACH: Customer Advises Entry Not in Accordance with Authorization */
    ACH_E11: 205,
    /** ACH: RDFI Not Qualified to Participate */
    ACH_E13: 206,
    /** ACH: Representative Payee Deceased or Unable to Continue */
    ACH_E14: 207,
    /** ACH: Beneficiary or Account Holder Deceased */
    ACH_E15: 208,
    /** ACH: Account Frozen */
    ACH_E16: 209,
    /** ACH: Invalid Account Number under Questionable Circumstances */
    ACH_E17: 210,
    /** ACH: Non-Transaction Account */
    ACH_E20: 211,
    /** ACH: Corporate Customer Advises Not Authorized */
    ACH_E29: 212,
    /** ACH: Invalid Image */
    ACH_E92: 213,
    /** ACH: Non-Negotiable */
    ACH_E93: 214,
    /** ACH: Breach of Warranty */
    ACH_E95: 215,
    /** ACH: Counterfeit / Forgery */
    ACH_E96: 216,
    /** ACH: Refer to Maker */
    ACH_E97: 217,
    /** Insufficient funds */
    ACH_R01: 124,
    /** Bank account closed */
    ACH_R02: 125,
    /** No bank account/unable to locate account */
    ACH_R03: 126,
    /** Invalid bank account number */
    ACH_R04: 127,
    /** Unauthorized Debit to Consumer Account Using Corporate SEC Code */
    ACH_R05: 128,
    /** Returned per ODFI request */
    ACH_R06: 129,
    /** Authorization revoked by customer */
    ACH_R07: 130,
    /** Payment stopped */
    ACH_R08: 131,
    /** Uncollected funds */
    ACH_R09: 132,
    /** Customer advises not authorized */
    ACH_R10: 133,
    /** Check truncation entry return */
    ACH_R11: 134,
    /** Branch sold to another RDFI */
    ACH_R12: 135,
    /** RDFI not qualified to participate */
    ACH_R13: 136,
    /** Representative payee deceased or unable to continue in that capacity */
    ACH_R14: 137,
    /** Beneficiary or bank account holder */
    ACH_R15: 138,
    /** Bank account frozen */
    ACH_R16: 139,
    /** File record edit criteria */
    ACH_R17: 140,
    /** Improper effective entry date */
    ACH_R18: 141,
    /** Amount field error */
    ACH_R19: 142,
    /** Non-payment bank account */
    ACH_R20: 143,
    /** Invalid company ID number */
    ACH_R21: 144,
    /** Invalid individual ID number */
    ACH_R22: 145,
    /** Credit entry refused by receiver */
    ACH_R23: 146,
    /** Duplicate entry */
    ACH_R24: 147,
    /** Addenda error */
    ACH_R25: 148,
    /** Mandatory field error */
    ACH_R26: 149,
    /** Trace number error */
    ACH_R27: 150,
    /** Transit routing number check digit error */
    ACH_R28: 151,
    /** Corporate customer advises not authorized */
    ACH_R29: 152,
    /** RDFI not participant in check truncation program */
    ACH_R30: 153,
    /** Permissible return entry (CCD and CTX only) */
    ACH_R31: 154,
    /** RDFI non-settlement */
    ACH_R32: 155,
    /** Return of XCK entry */
    ACH_R33: 156,
    /** Limited participation RDFI */
    ACH_R34: 157,
    /** Return of improper debit entry */
    ACH_R35: 158,
    /** ACH: Return of Improper Credit Entry */
    ACH_R36: 218,
    /** ACH: Source Document Presented for Payment */
    ACH_R37: 219,
    /** ACH: Stop Payment on Source Document */
    ACH_R38: 220,
    /** ACH: Improper Source Document */
    ACH_R39: 221,
    /** ACH: Return of ENR Entry by Federal Government Agency */
    ACH_R40: 222,
    /** ACH: Invalid Transaction Code */
    ACH_R41: 223,
    /** ACH: Routing Number / Check Digit Error */
    ACH_R42: 224,
    /** ACH: Invalid DFI Account Number */
    ACH_R43: 225,
    /** ACH: Invalid Individual ID Number / Identification */
    ACH_R44: 226,
    /** ACH: Invalid Individual Name / Company Name */
    ACH_R45: 227,
    /** ACH: Invalid Representative Payee Indicator */
    ACH_R46: 228,
    /** ACH: Duplicate Enrollment */
    ACH_R47: 229,
    /** ACH: State Law Affecting RCK Acceptance */
    ACH_R50: 230,
    /** ACH: Item is Ineligible, Notice Not Provided, etc */
    ACH_R51: 231,
    /** ACH: Stop Payment on Item (Adjustment Entries) */
    ACH_R52: 232,
    /** ACH: Item and ACH Entry Presented for Payment */
    ACH_R53: 233,
    /** ACH: Misrouted Return */
    ACH_R61: 234,
    /** ACH: Incorrect Trace Number */
    ACH_R62: 235,
    /** ACH: Incorrect Dollar Amount */
    ACH_R63: 236,
    /** ACH: Incorrect Individual Identification */
    ACH_R64: 237,
    /** ACH: Incorrect Transaction Code */
    ACH_R65: 238,
    /** ACH: Incorrect Company Identification */
    ACH_R66: 239,
    /** ACH: Duplicate Return */
    ACH_R67: 240,
    /** ACH: Untimely Return */
    ACH_R68: 241,
    /** ACH: Multiple Errors */
    ACH_R69: 242,
    /** ACH: Permissible Return Entry Not Accepted */
    ACH_R70: 243,
    /** ACH: Misrouted Dishonored Return */
    ACH_R71: 244,
    /** ACH: Untimely Dishonored Return */
    ACH_R72: 245,
    /** ACH: Timely Original Return */
    ACH_R73: 246,
    /** ACH: Corrected Return */
    ACH_R74: 247,
    /** ACH: Return Not a Duplicate */
    ACH_R75: 248,
    /** ACH: No Errors Found */
    ACH_R76: 249,
    /** ACH: IAT Entry Coding Error */
    ACH_R80: 250,
    /** ACH: Non-Participant in IAT Program */
    ACH_R81: 251,
    /** ACH: Invalid Foreign Receiving DFI Identification */
    ACH_R82: 252,
    /** ACH: Foreign Receiving DFI Unable to Settle */
    ACH_R83: 253,
    /** ACH: Entry Not Processed by Gateway */
    ACH_R84: 254,
    /** ACH: Incorrectly Coded Outbound International Payment */
    ACH_R85: 255,
    /** ACH check type or account type is invalid */
    ACH_ACCOUNT_TYPE: 185,
    /** ACH payment method is not supported by processor */
    ACH_SUPPORT: 105,
    /** ACH error: uncollected */
    ACH_UNCOLLECTED: 123,
    /** Invalid payment address chosen */
    ADDRESS_INVALID: 39,
    /** Chosen payment address does not exist */
    ADDRESS_NX: 40,
    /** Disagreement with the Payment Agreement */
    AGREEMENT_DISAGREE: 176,
    /** Sum of amounts for all individual payment sources does not equal the total expected amount */
    AMOUNT_CONSOLIDATE: 35,
    /** Total package price can't be divided equally between package items without loosing cents */
    AMOUNT_CONSOLIDATE_PACKAGE: 191,
    /** Amount was unexpectedly changed during the purchase process */
    AMOUNT_CHANGE: 179,
    /** Amount is invalid */
    AMOUNT_INVALID: 34,
    /** Total price of cart greater than `1000000000.00` */
    AMOUNT_TOTAL: 75,
    /** Amount equals zero */
    AMOUNT_ZERO: 32,
    /** AVS verification failed. Postal code or address are invalid */
    AVS: 14,
    /** Invalid bank account ID */
    BANK_ACCOUNT_INVALID: 79,
    /** Bank account ID does not exist */
    BANK_ACCOUNT_NX: 80,
    /** Bank state branch is empty */
    BSB_EMPTY: 77,
    /** Bank state branch is invalid */
    BSB_INVALID: 78,
    /** This business is a lost customer */
    BUSINESS_CHURN: 173,
    /** Client must call issuer for further information */
    CALL: 17,
    /** Card data is valid, but you can not pay with it (e.g. hold placed on card) */
    CARD_DECLINE: 5,
    /** Invalid payment card chosen */
    CARD_INVALID: 42,
    /** Card over limit */
    CARD_LIMIT: 73,
    /** Payment card nickname is empty */
    CARD_NAME_EMPTY: 46,
    /** Payment card nickname is too long */
    CARD_NAME_LONG: 47,
    /** The customer’s bank has declined the transaction as the credit card number has failed a security check, or the */
    CARD_NOT_HONOR: 71,
    /** Insufficient funds available */
    CARD_NSF: 72,
    /** Chosen payment card does not exist */
    CARD_NX: 43,
    /** User has chosen payment card but he had no such rights */
    CARD_SELECT: 44,
    /** No such card issuer */
    CARD_ISSUER_INVALID: 184,
    /** Card unsupported */
    CARD_UNSUPPORTED: 190,
    /** Element which should be paid with this payment has been canceled and payment should be blocked */
    CANCELED: 177,
    /** Comment for payment method too long */
    COMMENT_LONG: 99,
    /** Can't connect to payment gateway */
    CONNECT: 8,
    /** Unsupported country */
    COUNTRY_UNSUPPORTED: 164,
    /** Gift card belongs to a foreign business */
    COUPON_BUSINESS: 55,
    /** Invalid payment card chosen */
    COUPON_CURRENCY: 54,
    /** Coupon is inactive */
    COUPON_INACTIVE: 97,
    /** Coupon code is invalid (invalid length, or invalid characters encountered) */
    COUPON_INVALID: 51,
    /** Invalid payment card chosen */
    COUPON_NX: 52,
    /** Coupon is redeemed already */
    COUPON_REDEEM: 53,
    /** Card credentials (number, csc, month, year) change ability is disabled. E.g. payment processor may not support */
    CREDENTIAL_SUPPORT: 76,
    /** Invalid card security code (CSC) */
    CSC_EMPTY: 21,
    /** Invalid card security code (CSC) */
    CSC_INVALID: 2,
    /** Card is expired */
    DATE_EXPIRE: 24,
    /** Card is inactive */
    DATE_INACTIVE: 163,
    /** Invalid Expiration Date */
    DATE_INVALID: 183,
    /** Month is invalid */
    DATE_MONTH: 22,
    /** Multiple usage of this payment method is not allowed */
    DATE_YEAR: 23,
    /** Duplicate transaction. Transaction data that is selected for comparison is payment gateway-specific */
    DUPLICATE: 1,
    /** Error, caused by one of the following cases: */
    FRAUD: 168,
    /** Terminal that should be used for payment is not found */
    HARDWARE_NOT_FOUND: 196,
    /** Informational field is not filled in */
    INFO_EMPTY: 9,
    /** Informational field is too long */
    INFO_LONG: 41,
    /** Minimum payment amount is less then `1` */
    INSTALLMENT_AMOUNT_MIN: 93,
    /** Installment plan: Number of payment is invalid */
    INSTALLMENT_COUNT_FORMAT: 85,
    /** Installment plan: Number of payment is too large */
    INSTALLMENT_COUNT_MAX: 87,
    /** Installment plan: Number of payment is too small (less then 2) */
    INSTALLMENT_COUNT_MIN: 86,
    /** Installment date is not specified */
    INSTALLMENT_DATE_EMPTY: 81,
    /** Installment date format is invalid */
    INSTALLMENT_DATE_FORMAT: 82,
    /** Installment date is too deep in the future */
    INSTALLMENT_DATE_FUTURE: 84,
    /** Installment date is in the past (minimum is today) */
    INSTALLMENT_DATE_PAST: 83,
    /** Installment plan: Duration of a period is not allowed */
    INSTALLMENT_DURATION_DISABLE: 91,
    /** Installment plan: Maximum total duration of installment plan is 100 years */
    INSTALLMENT_DURATION_MAX: 92,
    /** Installment plan: Duration of a period does not exist */
    INSTALLMENT_DURATION_NX: 90,
    /** Installment plan: Number of periods between two consecutive payments is invalid */
    INSTALLMENT_PERIOD_FORMAT: 88,
    /** Installment plan: Number of periods between two consecutive payments is too large */
    INSTALLMENT_PERIOD_MAX: 89,
    /** Template of installment plans: template is not selected */
    INSTALLMENT_TEMPLATE_EMPTY: 95,
    /** Template of installment plans: ID of the template does not exist */
    INSTALLMENT_TEMPLATE_NX: 94,
    /** Internal errors that occurred in the browser (for example, some form data arrived to servers such that user should */
    INTERNAL_BROWSER: 33,
    /** Security throttling error */
    INTERNAL_HIT: 192,
    /** Internal merchant error */
    INTERNAL_MERCHANT: 186,
    /** Some strange service error (e.g. invalid merchant data passed, data format) */
    INTERNAL_SERVER: 6,
    /** Payer email is required for payment, but empty */
    MAIL_EMPTY: 175,
    /** The associated merchant account has been closed */
    MERCHANT_ACCOUNT_CLOSED: 189,
    /** Invalid merchant data */
    MERCHANT_INVALID: 7,
    /** Transaction was rejected by gateway */
    MERCHANT_REJECT: 74,
    /** Merchant has invalid settings and does not return customer vault */
    MERCHANT_SETTINGS_VAULT: 166,
    /** User has no access to the specified payment method */
    METHOD_ACCESS: 18,
    /** This method does not support authorization request */
    METHOD_AUTHORIZE: 96,
    /** This payment method can not be used with this business */
    METHOD_BUSINESS: 19,
    /** Multiple usage of this payment method is not allowed */
    METHOD_MULTIPLE: 20,
    /** Cardholder name is not typed in */
    NAME_EMPTY: 25,
    /** Customer name is invalid (contains invalid characters) */
    NAME_INVALID: 106,
    /** Cardholder name is too long */
    NAME_LONG: 26,
    /** Validation Rejection */
    NMI_PAYSAFE_900: 159,
    /** Not sufficient funds (debits only) */
    NMI_PAYSAFE_901: 110,
    /** Payment stopped/recalled */
    NMI_PAYSAFE_903: 111,
    /** Post dated/stale dated */
    NMI_PAYSAFE_904: 112,
    /** Account closed */
    NMI_PAYSAFE_905: 113,
    /** Account transferred */
    NMI_PAYSAFE_906: 114,
    /** No chequing privileges */
    NMI_PAYSAFE_907: 115,
    /** Funds not cleared */
    NMI_PAYSAFE_908: 116,
    /** Payor/payee deceased */
    NMI_PAYSAFE_910: 117,
    /** Account frozen */
    NMI_PAYSAFE_911: 118,
    /** Invalid/incorrect account number */
    NMI_PAYSAFE_912: 119,
    /** Incorrect payor/payee name */
    NMI_PAYSAFE_914: 120,
    /** Refused by payor/payee */
    NMI_PAYSAFE_915: 121,
    /** No Return Agreement */
    NMI_PAYSAFE_998: 122,
    /** Card number is not typed in */
    NUMBER_EMPTY: 27,
    /** Card number is invalid */
    NUMBER_INVALID: 30,
    /** Card number is too long */
    NUMBER_LONG: 28,
    /** Card number is too long */
    NUMBER_SHORT: 29,
    /** Some parameters client has provided are invalid */
    PARAMETER: 4,
    /** Payment form is in passive mode */
    PASSIVE: 165,
    /** Error during authentication of the payer */
    PAYER_AUTHENTICATION: 167,
    /** There is other process currently running to update payment. Failed to wait until it ends */
    PAYMENT_UPDATE_LOCK: 174,
    /** Phone number is not specified on user account */
    PHONE_EMPTY: 107,
    /** Phone number is invalid */
    PHONE_INVALID: 178,
    /** Phone number is too long */
    PHONE_LONG: 108,
    /** Transaction error returned by processor */
    PROCESSOR_ERROR: 98,
    /** Internal error at processor side has occurred */
    PROCESSOR_INTERNAL: 109,
    /** Refund operation is applied too early */
    REFUND_EARLY: 50,
    /** Amount about to refund is larger then the current rest of the transaction */
    REFUND_REST: 49,
    /** Transaction can not be refunded because it is in an invalid status */
    REFUND_STATUS: 48,
    /** Invalid region chosen */
    REGION_INVALID: 37,
    /** Chosen region does not exist */
    REGION_NX: 38,
    /** Can not repeat purchase transaction. Reference data is expired and invalid now */
    REPEAT_INVALID: 15,
    /** Error during request to service. In case we have not even got response */
    REQUEST: 12,
    /** Too many requests */
    REQUEST_THROTTLE: 172,
    /** Temporary service error. Repeat request */
    RETRY: 3,
    /** Payment is blocked due security reasons (because payment amount is too large) */
    SECURITY_LARGE: 103,
    /** Only for test, when there is an error in the test that we cannot influence, for example: “server is not available” */
    SKIP_IN_TESTS: 188,
    /** Stripe data is empty */
    STRIPE_EMPTY: 31,
    /** Invalid data on magnetic stripe. Maybe some part does not exist */
    STRIPE_INVALID: 16,
    /** This recurrent payment token belongs to a different account of this merchant */
    TOKEN_ACCOUNT: 161,
    /** Payment token belongs to a different merchant processor */
    TOKEN_PROCESSOR: 162,
    /** Transaction does not exist. E.g. we want to make refund using nonexistent reference number */
    TRANSACTION_NX: 13,
    /** Transaction is in unexpected status. For example, authorization process started but takes long time. While waiting */
    UNEXPECTED_TRANSACTION_STATUS: 187,
    /** If the user who pays through the account is a debtor */
    USER_DEBTOR: 194,
    /** If access denied to an anonymous user */
    USER_GUEST: 56,
    /** Error specific for payment processors that stores payer entity */
    USER_NOT_FOUND: 197,
    /** Some unpredicted error happened during void on processor side */
    VOID_ERROR: 193,
    /** Operation Void is not possible, it's too late to do it */
    VOID_LATE: 180,
    /** Void operation can be done only for a total transaction amount and cannot be partial */
    VOID_PARTIAL: 100,
    /** Void operation is restricted by rules of the system */
    VOID_RESTRICT: 102,
    /** Void operation is not supported by the merchant processor */
    VOID_SUPPORT: 101,
    /** Timeout waiting for settlement */
    WAIT_TIMEOUT: 104,
    /** Incorrect payment card type specified */
    TENDER_TYPE_INVALID: 195,
  });

  /**
   * Paragon ticket status.
   *
   * @enum {number}
   */
  WlClient.ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid = Object.freeze({
    /** Ticket was canceled */
    CANCELLED: 1,
    /** Ticket was completed */
    COMPLETE: 2,
    /** Ticket in error state */
    ERROR: 3,
    /** Ticket is processed */
    INPROCESS: 4,
    /** Ticket is opened */
    OPEN: 6,
    /** Ticket was reversed */
    REVERSED: 7,
  });

  /**
   * An enum of credit card types.
   *
   * @enum {number}
   */
  WlClient.WlPayBankCardCardTypeEnum = Object.freeze({
    /** Credit Card */
    CREDIT: 1,
    /** Debit Card */
    DEBIT: 2,
  });

  /**
   * CS Response code class.
   *
   * @enum {number}
   */
  WlClient.ThothPayProcessorNuveiCodeCSResponseSid = Object.freeze({
    /** Service has been successfully provided */
    APPROVED: 1,
    /** Transaction cannot be cancelled */
    CANNOT_CANCEL: 2,
    /** Service is declined */
    DECLINED: 3,
    /** Device is busy */
    DEVICE_BUSY: 4,
    /** Duplicate transmission */
    DUPLICATE_TRANSMISSION: 5,
    /** Invalid identification data for the sender */
    INITIATING_PARTY: 6,
    /** Invalid envelope of the message */
    INVALID_MESSAGE: 7,
    /** Type of message the recipient receives is unknown or unsupported */
    MESSAGE_TYPE: 8,
    /** NO Ticket/Emtpy */
    NO_TICKET: 9,
    /** Invalid message: At least one of the data element or data structure is not present, */
    PARSING_ERROR: 10,
    /** Version of the protocol couldn't be supported by the recipient */
    PROTOCOL_VERSION: 11,
    /** Invalid identification data for the receiver */
    RECIPIENT_PARTY: 12,
    /** Ticket is locked */
    TICKET_LOCKED: 13,
    /** Timeout error */
    TIMEOUT_ERROR: 14,
    /** Transaction has been cancelled */
    TRANSACTION_CANCELLED: 16,
    /** There is an unfinish transactions */
    TRANSACTION_IN_PROCESS: 15,
    /** Transaction has been cancelled */
    TRANSACTION_NOT_FOUND: 17,
    /** Transaction with unadjusted tip */
    UN_ADJUSTED_TIP: 20,
    /** Not possible to process the message, for instance the security module is unavailable, */
    UNABLE_TO_PROCESS: 18,
    /** No relationship between register and terminal */
    UNMAPPED: 19,
  });

  /**
   * Possible states of the visit: book, attended, cancelled, etc.
   *
   * @enum {number}
   */
  WlClient.WlVisitVisitSid = Object.freeze({
    /** Client has attended the session */
    ATTEND: 3,
    /** Active reservation means that user is going to attend the session */
    BOOK: 1,
    /** Client has cancelled the reservation in time and without penalty */
    CANCEL: 6,
    /** Client has cancelled his reservation too late */
    PENALTY: 4,
    /** This state means that visit is registered, but it is unknown is it {@link WlClient.WlVisitVisitSid} */
    PENDING: 7,
    /** Visit was removed */
    REMOVE: 8,
    /** Client has missed the session without cancellation */
    TRUANCY: 5,
    /** Reservation in a wait list means that user is going to attend the session if someone will cancel his reservation */
    WAIT: 2,
  });

  /**
   * List of all custom imports that are supported by system.
   *
   * @enum {number}
   */
  WlClient.WlImportCustomCustomSid = Object.freeze({
    /** Creates recurring appointments with no end date */
    APPOINTMENT_RECURRING: 8,
    /** Custom import which allows to import client account balance */
    CLIENT_ACCOUNT_BALANCE: 10,
    /** Custom import which allows to import client note */
    CLIENT_NOTE: 5,
    /** Custom import which allows to import client purchase refund */
    CLIENT_PURCHASE_REFUND: 11,
    /** Custom import which allows to import client relationship */
    CLIENT_RELATIONSHIP: 12,
    /** Custom import which allows to import contact block information */
    CLIENTS: 20,
    /** Custom import which allows to import contact log information */
    CONTACT: 1,
    /** Custom import which allows to import curves staff-manager custom fields */
    CURVE_EXT_MANAGER: 15,
    /** Custom import which allows to import curves franchisee custom fields */
    CURVE_EXT_ORGANIZATION: 13,
    /** Custom import which allows to import curves staff-owner custom fields */
    CURVE_EXT_OWNER: 14,
    /** Custom import which allows to import curves franchisee */
    CURVE_FRANCHISE: 7,
    /** Custom import which allows to import curves client historical visits */
    CURVE_HISTORICAL_VISIT: 16,
    /** Custom import which allows to import curves members */
    CURVE_MEMBER: 4,
    /** Custom import which allows to start import for the list of franchisees */
    CURVE_START: 9,
    /** Creates sold gift cards for clients */
    LOGIN_COUPON: 17,
    /** Custom import which allows to import purchase members */
    PURCHASE_MEMBER: 6,
    /** Allows to remove list of purchases from specific file */
    PURCHASE_REMOVE: 18,
    /** Custom import which allows to import forms */
    QUIZ: 19,
    /** Custom import which allows to import refund dates to update transactions */
    REFUND: 2,
    /** Custom import which allows to import client reward balance */
    REWARD: 3,
  });

  /**
   * List of general fields in user's profile.
   *
   * @enum {number}
   */
  WlClient.RsFieldGeneralSid = Object.freeze({
    /** Set of fields to choose address */
    ADDRESS: 9,
    /** Set of fields to choose birthday date */
    BIRTHDAY: 7,
    /** Gender field */
    GENDER: 8,
    /** Image */
    IMAGE: 13,
    /** Home location */
    LOCATION: 10,
    /** Block with login information (email and password) */
    LOGIN: 3,
    /** Member ID */
    MEMBER: 11,
    /** First name */
    NAME_FIRST: 2,
    /** Last name */
    NAME_LAST: 1,
    /** Cell phone number */
    PHONE_CELL: 4,
    /** Home phone number */
    PHONE_HOME: 5,
    /** Work phone number + ext */
    PHONE_WORK: 6,
    /** Referred by */
    REFERRER: 12,
    /** Client status (client/member types). System default client/member types see SystemSid */
    STATUS: 14,
    /** Timezone field */
    TIMEZONE: 15,
    /** Vaccination status. See {@link WlClient.WlLoginMemberVaccinationStatusVaccinationStatusSid} */
    VACCINATION_STATUS: 16,
  });

  /**
   * Possible types of the custom fields: text, checkbox, radio buttons, etc.
   *
   * @enum {number}
   */
  WlClient.RsFieldTypeSid = Object.freeze({
    /** Checkbox field. The `s_value` for this type of field can be 1 if checkbox is checked and 0 otherwise */
    CHECKBOX: 2,
    /** General field. Has its own format */
    GENERAL: 5,
    /** Radio buttons */
    RADIO: 4,
    /** Drop-down menu */
    SELECT: 3,
    /** One line text field */
    TEXT: 1,
  });

  /**
   * Describes reports grouping dates ranges.
   *
   * @enum {number}
   */
  WlClient.RsReportGroupSid = Object.freeze({
    /** Step 1 day */
    DAY: 1,
    /** Step 1 hour */
    HOUR: 5,
    /** Step 1 month */
    MONTH: 3,
    /** Step 1 week */
    WEEK: 2,
    /** Step 1 year */
    YEAR: 4,
  });

  /**
   * Set of pages for dashboard.
   *
   * @enum {number}
   */
  WlClient.RsReportPageSid = Object.freeze({
    /** List of requested appointments */
    APPOINTMENT_REQUEST: 4,
    /** Collection with following reports: */
    BUSINESS_CUSTOMER_STATUS: 12,
    /** Collection with list of searches and "All clients" report */
    LOGIN_CLIENT_ALL: 7,
    /** Collection with list of progress log charts */
    MEMBER_PROGRESS_LOG_CHART: 8,
    /** Collection with list of progress log table */
    MEMBER_PROGRESS_LOG_TABLE: 9,
    /** Collection with {@link WlClient.RsReportSid} */
    PROFILE_ATTENDANCE_SCHEDULE: 10,
    /** Collection with following reports: */
    PROFILE_PURCHASE: 11,
    /** Leaderboard to display in backend */
    REWARD_BOARD: 5,
    /** Current schedule */
    SCHEDULE_PROSPECT: 3,
    /** Set of staff retention list reports */
    STAFF_RETENTION: 6,
    /** Set of attendance reports */
    VISIT: 2,
  });

  /**
   * Describes charts types (bar, line, area) and chart modes.
   *
   * @enum {number}
   */
  WlClient.RsReportChartViewSid = Object.freeze({
    /** Area chart */
    AREA: 2,
    /** Column chart */
    COLUMN: 1,
    /** Donut chart */
    DONUT: 5,
    /** Line chart */
    LINE: 3,
    /** Year-by-year comparisons in the column chart */
    YEAR_COLUMN: 4,
  });

  /**
   * A list of services.
   *
   * @enum {number}
   */
  WlClient.WlServiceServiceSid = Object.freeze({
    /** Appointment */
    APPOINTMENT: 1,
    /** Belts */
    BELT: 6,
    /** Bookable asset */
    BOOKABLE_ASSET: 4,
    /** Class */
    CLASSES: 2,
    /** Event */
    EVENT: 3,
    /** Gym visits */
    GYM: 5,
  });

  /**
   * A list of client booking flow types.
   *
   * @enum {number}
   */
  WlClient.RsBusinessCategorySid = Object.freeze({
    /** Musician schools */
    EDUCATION: 6,
    /** Traditional medicine */
    HEALTH: 3,
    /** Spa saloons */
    RECREATION: 2,
    /** Yoga and Fitness studios and gyms */
    SPORT: 1,
  });

  /**
   * Business status for managing claim request behavior.
   *
   * @enum {number}
   */
  WlClient.WlBusinessClaimBusinessClaimStatusSid = Object.freeze({
    /** Business HAD a contract with WL, but decided not to continue it, i.e. it is a churned business, or a business */
    CHURN: 4,
    /** Business has a contract with WL, be it a trial (with all fields updated and actual), or a subscription */
    CUSTOMER: 3,
    /** Business is not a WL client and never was, i.e. it is a true prospect business */
    PROSPECT: 1,
    /** Business claiming process started, the contact information was verified, the trial has started, but company */
    UNVERIFY: 2,
  });

  /**
   * A list of currencies.
   *
   * @enum {number}
   */
  WlClient.CoreLocaleCurrencySid = Object.freeze({
    /** United Arab Emirates dirham */
    AED: 11,
    /** Australian dollar */
    AUD: 6,
    /** Bermudian Dollar */
    BMD: 18,
    /** Bahamian dollar */
    BSD: 19,
    /** Canadian dollar */
    CAD: 4,
    /** Egypt Pound */
    EGP: 8,
    /** Euro */
    EUR: 13,
    /** British pound */
    GBP: 3,
    /** Kuwaiti dinar */
    KWD: 14,
    /** Cayman Islands dollar */
    KYD: 5,
    /** Mauritian Rupee */
    MUR: 16,
    /** New Zealand Dollar */
    NZD: 10,
    /** Philippines Pesco */
    PHP: 12,
    /** Saudi Riyal */
    SAR: 15,
    /** Singapore dollar */
    SGD: 20,
    /** Unknown code */
    UNKNOWN: 2,
    /** US dollars */
    USD: 1,
    /** West African CFA franc */
    XOF: 17,
    /** South African rand */
    ZAR: 7,
  });

  /**
   * Types of the possible ranks in different business.
   *
   * @enum {number}
   */
  WlClient.RsRankTypeSid = Object.freeze({
    /** Belts for Martial Arts */
    BELT: 1,
  });

  /**
   * List of available data center regions.
   *
   * @enum {number}
   */
  WlClient.CoreAmazonRegionAmazonRegionSid = Object.freeze({
    /** Sydney, Australia */
    AP_SOUTHEAST_2: 2,
    /** North Virginia, USA */
    US_EAST_1: 1,
  });

  /**
   * String identifiers for gender.
   *
   * @enum {number}
   */
  WlClient.AGenderSid = Object.freeze({
    /** Female gender */
    FEMALE: 2,
    /** Male gender */
    MALE: 1,
    /** Gender is undefined in cases where the user preferred not to identify their gender */
    UNDEFINED: 3,
  });

  /**
   * A class for the days of the week.
   *
   * @enum {number}
   */
  WlClient.ADateWeekSid = Object.freeze({
    /** Friday */
    FRIDAY: 5,
    /** Monday */
    MONDAY: 1,
    /** Saturday */
    SATURDAY: 6,
    /** Sunday */
    SUNDAY: 7,
    /** Thursday */
    THURSDAY: 4,
    /** Tuesday */
    TUESDAY: 2,
    /** Wednesday */
    WEDNESDAY: 3,
  });

  /**
   * List of class tab objects.
   *
   * @enum {number}
   */
  WlClient.WlClassesTabTabSid = Object.freeze({
    /** Enrolments */
    ENROLLMENT: 2,
    /** Bookable Assets */
    RESOURCE: 4,
    /** Appointments */
    SERVICE: 3,
    /** Classes */
    TRAINING: 1,
  });

  /**
   * List of image types.
   *
   * @enum {number}
   */
  WlClient.CoreDriveDriveTypeSid = Object.freeze({
    /** Bmp image */
    BMP: 4,
    /** Gif image */
    GIF: 1,
    /** Jpeg image */
    JPEG: 2,
    /** Png image */
    PNG: 3,
  });

  /**
   * Day time periods.
   *
   * @enum {number}
   */
  WlClient.RsScheduleTimeSid = Object.freeze({
    /** Afternoon */
    AFTERNOON: 2,
    /** Evening */
    EVENING: 3,
    /** Morning */
    MORNING: 1,
  });

  /**
   * A class for filter states for flagged fields.
   *
   * @enum {number}
   */
  WlClient.AFlagSid = Object.freeze({
    /** All records */
    ALL: 1,
    /** Records with the flag turned off */
    OFF: 2,
    /** Records with the flag turned on */
    ON: 3,
  });

  /**
   * List of intents of the user in the business.
   *
   * @enum {number}
   */
  WlClient.WlLoginMemberIntentsMemberIntentsSid = Object.freeze({
    /** Customer asks about payment methods, financing, invoices, payment issues, or billing to insurance */
    BILLING_INQUIRY: 1,
    /** Customer clearly expresses intent to schedule a new class, appointment, event, or asset */
    BOOKING: 2,
    /** Customer explicitly asks to cancel an existing booking with no intent to reschedule */
    BOOKING_CANCELLATION: 3,
    /** Customer explicitly asks to change the date, time, or provider for an existing booking */
    BOOKING_RESCHEDULE: 4,
    /** Customer requests operational or logistical details about the business (address, hours, contacts) */
    BUSINESS_INFORMATION: 5,
    /** Customer asks whether a specific instructor, staff member, or service is available */
    CHECK_AVAILABILITY: 6,
    /** Customer asks general wellness or fitness questions not tied to appointments, pricing, or availability */
    GENERAL_INQUIRY: 7,
    /** Customer wants to leave a voicemail, voice note, or message for staff */
    LEAVE_MESSAGE: 8,
    /** Customer requests cost or pricing details for services */
    PRICING_INQUIRY: 9,
    /** Customer asks about packages, session passes, or membership options */
    PURCHASE_OPTIONS_INQUIRY: 10,
    /** Customer mentions they were referred by someone */
    REFERRAL: 11,
    /** Customer expresses interest in a service without asking about pricing or availability specifically */
    SERVICE_INQUIRY: 12,
    /** Customer requests to speak with a staff member, receive a callback, or staff follow-up is needed */
    STAFF_ASSISTANCE_REQUEST: 13,
    /** Customer insists on immediate live transfer to a staff member */
    TRANSFER_CALL_TO_STAFF: 14,
    /** Customer asks about their already scheduled or upcoming appointments */
    VIEW_BOOKINGS: 15,
    /** Customer asks about their purchased memberships, session passes, or packages */
    VIEW_CLIENT_PO_DETAILS: 16,
  });

  /**
   * The source of a visit.
   *
   * @enum {number}
   */
  WlClient.WlModeModeSid = Object.freeze({
    /** Action made via Api Endpoint. Default for leads created via API, unless overridden */
    API: 28,
    /** Registered through `Azure` */
    AZURE: 21,
    /** Visit has been checked-in by Brivo Door Access */
    BRIVO_DOOR_ACCESS: 31,
    /** Visit has been created by `CENTRED` */
    CENTRED: 23,
    /** Visit has been created by `ClassPass` */
    CLASSPASS_BOOKING: 8,
    /** Debt paid via collections */
    COLLECTIONS: 22,
    /** Debt paid via collections */
    COLLECTIONS_FUTURE: 26,
    /** Action from Concerto */
    CONCERTO: 27,
    /** Action made via email */
    EMAIL: 18,
    /** Indicating that the source is Facebook */
    FACEBOOK: 20,
    /** Action from Go High Level */
    GO_HIGH_LEVEL: 30,
    /** Indicating that the source is Google */
    GOOGLE: 19,
    /** Visit has been created by Google Booking Service */
    GOOGLE_BOOKING: 7,
    /** Visit has been created by `GymPass` */
    GYMPASS_BOOKING: 14,
    /** Visit was created during import */
    IMPORT: 5,
    /** Action made via microsite */
    MICROSITE: 12,
    /** Indicating that the source is Microsoft */
    MICROSOFT: 24,
    /** Client booked session on My Presence Site */
    MY_PRESENCE_SITE: 13,
    /** Action made via SMS */
    SMS: 17,
    /** Staff booked session from spa backend */
    SPA_BACKEND: 4,
    /** Client booked session from spa frontend */
    SPA_FRONTEND: 3,
    /** Created by system */
    SYSTEM: 10,
    /** Means that we did not define mode */
    UNDEFINED: 6,
    /** Client booked session from Attendance Web App */
    WEB_APP_ATTENDANCE: 16,
    /** Client checked-in for the session through Check-In Web App */
    WEB_APP_CHECK_IN: 15,
    /** Staff booked session for client from website backend */
    WEB_BACKEND: 2,
    /** Client booked session from website frontend */
    WEB_FRONTEND: 1,
    /** Action made via widget (purchase, book etc) */
    WIDGET: 11,
    /** Action from Zapier */
    ZAPIER: 25,
  });

  /**
   * List of member vaccination statuses.
   *
   * @enum {number}
   */
  WlClient.WlLoginMemberVaccinationStatusVaccinationStatusSid = Object.freeze({
    /** Fully Vaccinated */
    FULL: 3,
    /** Unvaccinated */
    NONE: 1,
    /** Partially Vaccinated */
    PARTIAL: 2,
    /** Unknown */
    UNKNOWN: 4,
  });

  /**
   * String identifiers for rs.privilege.role.
   *
   * @enum {number}
   */
  WlClient.RsPrivilegeRoleSid = Object.freeze({
    /** Staff role business owner */
    BUSINESS_OWNER: 1,
    /** Staff role front desk */
    FRONT_DESK: 4,
    /** Staff role instructor */
    INSTRUCTOR: 3,
    /** Staff role location owner */
    LOCATION_OWNER: 2,
  });

  /**
   * List of embed video sources.
   *
   * @enum {number}
   */
  WlClient.WlVideoVideoEmbedSourceSid = Object.freeze({
    /** Les Mills */
    LES_MILLS: 4,
    /** Vimeo */
    VIMEO: 2,
    /** Wistia */
    WISTIA: 3,
    /** YouTube */
    YOUTUBE: 1,
  });

  /**
   * A list of two answers for any question: Yes or No.
   *
   * @enum {number}
   */
  WlClient.CoreSidYesNoSid = Object.freeze({
    /** The answer is "no" */
    NO: 2,
    /** The answer is "yes" */
    YES: 1,
  });

  /**
   * List of video types.
   *
   * @enum {number}
   */
  WlClient.WlVideoVideoSourceSid = Object.freeze({
    /** Embedded video */
    EMBED: 2,
    /** Uploaded video */
    UPLOAD: 1,
  });

  /**
   * List of possible sort order.
   *
   * @enum {number}
   */
  WlClient.CoreSidSortOrderSid = Object.freeze({
    /** Ascending order */
    ASC: 2,
    /** Descending order */
    DESC: 1,
  });

  /**
   * List of video catalog sorting types.
   *
   * @enum {number}
   */
  WlClient.WlVideoCatalogFilterSortFilterSortSid = Object.freeze({
    /** Sort alphabetically */
    ALPHABET: 1,
    /** Sort by custom */
    CUSTOM: 4,
    /** Sort by most recently added */
    RECENT: 2,
    /** Sorted by number of views */
    VIEW: 3,
  });

  /**
   * List of different types for landing pages based on business types.
   *
   * @enum {number}
   */
  WlClient.RsHomeTourSid = Object.freeze({
    /** Barbershops */
    BARBERSHOP: 26,
    /** Boot camps */
    BOOTCAMP: 24,
    /** Boxing studios */
    BOXING: 25,
    /** Special industry free landing page with only contact us form */
    BUSINESS_MANAGEMENT: 21,
    /** Health clubs */
    CLUB: 10,
    /** Affiliate Gym */
    CROSSFIT: 9,
    /** Dance studios */
    DANCE: 11,
    /** Dental studios */
    DENTAL: 14,
    /** Fitness gyms */
    FITNESS: 6,
    /** Functional fitness also known as functional training or functional movement */
    FUNCTIONAL_FITNESS: 29,
    /** Fitness gyms */
    GYM: 22,
    /** Health clubs */
    HEALTH_CLUB: 23,
    /** Health and beauty salons at one place */
    INTEGRATIVE_HEALTH_CENTER: 30,
    /** Martial arts */
    MARTIAL_ART: 8,
    /** Massage salons */
    MASSAGE: 4,
    /** Massage salons */
    MEDICAL_SPA: 28,
    /** Alternative medical offices */
    MEDICINE_ALTERNATIVE: 15,
    /** Hospitals and private doctors */
    MEDICINE_TRADITIONAL: 13,
    /** Music schools */
    MUSIC: 19,
    /** Personal trainings */
    PERSONAL_TRAINING: 5,
    /** Pilates */
    PILATES: 7,
    /** Play cafes */
    PLAY_CAFE: 32,
    /** Pole dancing studios */
    POLE_DANCING: 18,
    /** Salons */
    SALON: 3,
    /** Spa salons */
    SPA: 2,
    /** Spinning */
    SPINNING: 17,
    /** Swim schools */
    SWIM_SCHOOL: 33,
    /** Tattoo salons */
    TATTOO: 31,
    /** Tours and events */
    TOUR: 12,
    /** Wellness Centers */
    WELLNESS_CENTER: 20,
    /** Yoga */
    YOGA: 1,
    /** Zumba */
    ZUMBA: 27,
  });

  /**
   * List of different directories, which can use wellnessliving as a source of data.
   *
   * @enum {number}
   */
  WlClient.RsProjectSid = Object.freeze({
    /** WellnessLiving Explorer */
    WELLNESSLIVING: 4,
  });

  /**
   * List of announcement statuses.
   *
   * @enum {number}
   */
  WlClient.WlAnnouncementAnnouncementStatusEnum = Object.freeze({
    /** Announcement does not have publish/unpublish dates */
    DRAFT: 1,
    /** Announcement currently is published */
    PUBLISH: 2,
    /** Announcement scheduled for publishing */
    SCHEDULE: 3,
    /** Announcement previously will be published, but now not published */
    UNPUBLISH: 4,
  });

  /**
   * List of fields by which you can sort.
   *
   * @enum {number}
   */
  WlClient.WlAnnouncementSortFieldSid = Object.freeze({
    /** Created by field */
    CREATED_BY: 1,
    /** Created date field */
    CREATED_DATE: 2,
    /** Description field */
    DESCRIPTION: 3,
    /** Image field */
    IMAGE: 4,
    /** Location field */
    LOCATION: 5,
    /** Publish date field */
    PUBLISH_DATE: 6,
    /** Status field */
    STATUS: 7,
    /** Title field */
    TITLE: 8,
    /** Unpublish date field */
    UNPUBLISH_DATE: 9,
  });

  /**
   * A list of payment methods.
   *
   * @enum {number}
   */
  WlClient.RsPayMethodSid = Object.freeze({
    /** Payment with personal user account (rs.pay.account) */
    ACCOUNT: 7,
    /** ACH system (USA-specific direct banking transactions) */
    ACH: 9,
    /** Payment with cash */
    CASH: 4,
    /** Payment with a cheque */
    CHEQUE: 5,
    /** Payment with a coupon */
    COUPON: 8,
    /** Direct Entry system (australian-specific direct banking transactions) */
    DIRECT_ENTRY: 10,
    /** Online payment. Card not present */
    ECOMMERCE: 2,
    /** Payment with an external terminal */
    EXTERNAL: 6,
    /** Special method to be used for migration process */
    IMPORT_ACCRUAL: 11,
    /** Payment method at a Points of sale */
    POS: 1,
  });

  /**
   * Program types.
   *
   * @enum {number}
   */
  WlClient.RsProgramSid = Object.freeze({
    /** Special Membership that does not allow client to visit anything but fill client's account after purchase */
    ACCOUNT_MEMBERSHIP: 21,
    /** Special Time-Based pass that does not allow client to visit anything but fill client's account after purchase */
    ACCOUNT_PASS: 20,
    /** Class Guest pass */
    CLASS_GUEST: 25,
    /** Class Pass */
    CLASS_LIMIT: 1,
    /** Class Membership */
    CLASS_MEMBERSHIP: 5,
    /** Class Time-Based pass */
    CLASS_PASS: 6,
    /** WellnessLiving Promotion */
    CLASS_PROSPECT: 4,
    /** Daily Deal Integration: not for sale, only redemption codes */
    DEAL: 7,
    /** Enrollment */
    ENROLLMENT: 14,
    /** "Wellness Program" membership */
    INSURANCE_MEMBERSHIP: 22,
    /** Package */
    PACKAGE: 3,
    /** Resource Duration Pass */
    RESOURCE_DURATION: 19,
    /** Resource Limit Pass */
    RESOURCE_LIMIT: 15,
    /** Resource Membership */
    RESOURCE_MEMBERSHIP: 16,
    /** Resource Time-Based pass */
    RESOURCE_PASS: 17,
    /** Appointment Duration Pass */
    SERVICE_DURATION: 18,
    /** Appointment session pass */
    SERVICE_LIMIT: 11,
    /** Appointment membership */
    SERVICE_MEMBERSHIP: 12,
    /** Appointment Time-Based pass */
    SERVICE_PASS: 13,
    /** Video Membership */
    VIDEO_MEMBERSHIP: 23,
    /** Gym Guest pass */
    VISIT_GUEST: 24,
    /** Gym Pass */
    VISIT_LIMIT: 8,
    /** Gym Membership */
    VISIT_MEMBERSHIP: 9,
    /** Gym Time-Based pass */
    VISIT_PASS: 10,
  });

  /**
   * Program types.
   *
   * @enum {number}
   */
  WlClient.RsProgramTypeSid = Object.freeze({
    /** Duration Pass */
    DURATION: 7,
    /** Guest passes */
    GUEST: 8,
    /** Class pass */
    LIMIT: 1,
    /** This promotion is a membership */
    MEMBERSHIP: 3,
    /** Type for programs that are not presented in {@link WlClient.RsProgramSid} */
    OTHER: 6,
    /** Packages and Daily deals */
    PACKAGE: 4,
    /** Unlimited pass. Day/week/month pass */
    PASS: 2,
    /** Special WellnessLiving promote passes that allow to visit specific classes to get acquainted with the business */
    PROSPECT: 5,
  });

  /**
   * A class for managing time intervals.
   *
   * @enum {number}
   */
  WlClient.ADurationSid = Object.freeze({
    /** Days */
    DAY: 4,
    /** Hours */
    HOUR: 3,
    /** Minutes */
    MINUTE: 2,
    /** Months */
    MONTH: 5,
    /** Seconds */
    SECOND: 1,
    /** Weeks (7 days) */
    WEEK: 7,
    /** Two weeks (14 days) */
    WEEK2: 9,
    /** Foursome of weeks (28 days) */
    WEEK4: 8,
    /** Years */
    YEAR: 6,
  });

  /**
   * Class to process string identifiers for duration types
   *
   * @enum {number}
   */
  WlClient.RsDurationTypeSid = Object.freeze({
    /** Specific date. Example, 2013-12-24 */
    DATE: 2,
    /** No ending date */
    ETERNAL: 3,
    /** Examples: 12 days, 2 months, 2 hours etc */
    PERIOD: 1,
  });

  /**
   * Purchase restrictions.
   *
   * @enum {number}
   */
  WlClient.WlPromotionPurchaseRestrictionSid = Object.freeze({
    /** Purchase option available for all clients */
    ALL: 1,
    /** Purchase option introductory offer, available for new clients only */
    INTRODUCTORY: 2,
    /** Purchase option available for clients with special login type or member group */
    TYPE: 3,
  });

  /**
   * The status of form actions.
   *
   * @enum {number}
   */
  WlClient.WlQuizActivityActivitySid = Object.freeze({
    /** Form was added to the profile */
    ADD: 1,
    /** Form was saved as a draft */
    DRAFT: 2,
    /** Form was edited */
    EDIT: 3,
    /** Form was exported to CSV file */
    EXPORT_CSV: 4,
    /** Form was exported to PDF file */
    EXPORT_PDF: 5,
    /** Form was printed */
    PRINTING: 6,
    /** Form was submitted */
    SUBMIT: 7,
    /** Form was viewed */
    VIEW: 8,
  });

  /**
   * List of quiz frequency types.
   *
   * @enum {number}
   */
  WlClient.WlQuizQuizFrequencySid = Object.freeze({
    /** Client will be asked to complete the quiz every time they book a service or purchase item */
    EVERY: 1,
    /** Client will be asked to complete the quiz the first time they book a service or purchase item */
    FIRST: 2,
    /** Client will be asked to complete the quiz only one time when they book a service or purchase item */
    ONCE: 3,
  });

  /**
   * A list of purchase types.
   *
   * @enum {number}
   */
  WlClient.RsPurchaseItemSid = Object.freeze({
    /** Personal user's account refill */
    ACCOUNT: 7,
    /** Business account payment */
    ACCOUNT_BUSINESS: 11,
    /** Single appointment reservation */
    APPOINTMENT: 8,
    /** Single appointment reservation with deposit */
    APPOINTMENT_DEPOSIT: 18,
    /** Tips for the appointment */
    APPOINTMENT_TIP: 22,
    /** Expense that comes along with the payment business. It contains information about additional services which are */
    BUSINESS_EXPENSE: 16,
    /** A skipped purchase for the business account */
    BUSINESS_SKIP: 17,
    /** Business subscription payment */
    BUSINESS_SUBSCRIPTION: 23,
    /** Single classes */
    CLASS_PERIOD: 2,
    /** Collectors payments */
    COLLECTOR_DEBT: 24,
    /** Arbitrary money withdrawal with comment */
    COMMENT: 13,
    /** Gift Cards */
    COUPON: 10,
    /** Events and enrollments. Client can not book only one class, he needs to book the whole enrollment */
    ENROLLMENT: 4,
    /** Enrollment reservation with a deposit */
    ENROLLMENT_DEPOSIT: 19,
    /** Enrollment reservation with a discount */
    ENROLLMENT_DISCOUNT: 21,
    /** Payment by an installment plan */
    INSTALLMENT: 14,
    /** Recurrent payments */
    MEMBERSHIP: 3,
    /** Products */
    PRODUCT: 9,
    /** Promotions */
    PROMOTION: 1,
    /** Early cancellation fee for a memberships */
    PROMOTION_CANCEL_FEE: 25,
    /** A purchase to renew a promotion */
    PROMOTION_RENEW: 12,
    /** A purchase to book an asset */
    RESOURCE: 15,
    /** A purchase to book a deposit asset */
    RESOURCE_DEPOSIT: 20,
    /** Purchase item for appointments */
    SERVICE: 6,
    /** Tuition purchase item */
    TUITION: 26,
    /** Tuition fee purchase item */
    TUITION_FEE: 27,
  });

  /**
   * A list of currency codes.
   *
   * @enum {number}
   */
  WlClient.RsCurrencySid = Object.freeze({
    /** United Arab Emirates dirham */
    AED: 11,
    /** Australian dollar */
    AUD: 6,
    /** Bermudian Dollar */
    BMD: 18,
    /** Bahamian dollar */
    BSD: 19,
    /** Canadian dollar */
    CAD: 4,
    /** Egypt Pound */
    EGP: 8,
    /** Euro */
    EUR: 13,
    /** British pound */
    GBP: 3,
    /** Kuwaiti dinar */
    KWD: 14,
    /** Cayman Islands dollar */
    KYD: 5,
    /** Mauritian Rupee */
    MUR: 16,
    /** New Zealand Dollar */
    NZD: 10,
    /** Philippines Pesco */
    PHP: 12,
    /** Saudi Riyal */
    SAR: 15,
    /** Singapore dollar */
    SGD: 20,
    /** Unknown code */
    UNKNOWN: 2,
    /** US dollars */
    USD: 1,
    /** West African CFA franc */
    XOF: 17,
    /** South African rand */
    ZAR: 7,
  });

  /**
   * The list of available modes.
   *
   * @enum {number}
   */
  WlClient.RsPlaceSid = Object.freeze({
    /** Backend mode */
    BACKEND: 2,
    /** The script is executed in the background (like an asynchronous task, regular task or a cron method) */
    BACKGROUND: 5,
    /** Directory pages */
    DIRECTORY: 3,
    /** Default frontend mode. All pages not in backend mode except microsite and directory pages */
    FRONTEND: 1,
    /** Microsite pages */
    MICROSITE: 4,
  });

  /**
   * List of possible plans for AchieveSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid = Object.freeze({
    /** Basic */
    FREE: 1,
    /** Premium */
    PREMIUM: 2,
    /** White Label (Legacy) */
    WHITE: 3,
    /** White Label */
    WHITE0125: 7,
    /** White Label (Business Max) */
    WHITE_MAX: 4,
    /** White Label (Legacy) */
    WHITE_PLUS: 6,
    /** White Label (Business Pro) */
    WHITE_PRO: 5,
  });

  /**
   * List of possible plans for BaseSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionBaseBaseSubscriptionSid = Object.freeze({
    /** Advanced */
    ADVANCED: 4,
    /** Basic */
    BASIC: 3,
    /** Business(Legacy) */
    BUSINESS: 7,
    /** Business */
    BUSINESS_2405: 11,
    /** Business(Legacy) */
    BUSINESS_LIGHT: 8,
    /** Business Max */
    BUSINESS_MAX: 9,
    /** Business Pro */
    BUSINESS_PRO: 10,
    /** Enterprise */
    ENTERPRISE: 6,
    /** None */
    FREE: 1,
    /** Business Partner */
    PARTNER: 2,
    /** Platform Access */
    PLATFORM_ACCESS: 15,
    /** Professional */
    PROFESSIONAL: 5,
    /** Starter */
    STARTER: 12,
    /** Starter */
    STARTER_2502: 13,
    /** Trial */
    TRIAL: 14,
  });

  /**
   * List of possible plans for MarketingSuiteSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid = Object.freeze({
    /** Pro */
    BASIC: 2,
    /** Standard (Business) */
    BASIC_BUSINESS: 4,
    /** Standard (Legacy) */
    BASIC_OLD: 3,
    /** Base */
    FREE: 1,
    /** Ultimate */
    PRO: 5,
  });

  /**
   * Contains travel modes.
   *
   * @enum {number}
   */
  WlClient.WlBusinessFranchiseTravelTravelModeSid = Object.freeze({
    /** Curves travel mode */
    CURVES: 1,
    /** Flexible travel mode */
    FLEXIBLE: 2,
  });

  /**
   * A list of skin types.
   *
   * @enum {number}
   */
  WlClient.RsSkinSid = Object.freeze({
    /** Ai Agent web-chat */
    AI_AGENT: 19,
    /** Application skin */
    APPLICATION: 13,
    /** Appointment booking wizard */
    APPOINTMENT: 7,
    /** Online store widget */
    CATALOG_FOREIGN: 21,
    /** Event enrollment wizard widget */
    ENROLLMENT: 8,
    /** Fitbuilder widget */
    FITBUILDER: 17,
    /** Skin for lead tracking form */
    LEAD: 9,
    /** Skin for lead tracking form from microservice */
    LEAD_FOREIGN: 20,
    /** Mobile schedule version */
    MOBILE_SCHEDULE: 10,
    /** Asset booking wizard */
    RESOURCE: 16,
    /** Review list widget */
    REVIEW_LIST: 4,
    /** General schedule design appearance */
    SCHEDULE_DESIGN: 15,
    /** Foreign schedule widget on react language */
    SCHEDULE_FOREIGN: 18,
    /** Schedule list widget */
    SCHEDULE_LIST: 1,
    /** Standard version of schedule */
    SCHEDULE_STANDARD: 14,
    /** Staff widget */
    STAFF: 12,
    /** Online store widget */
    STORE: 11,
  });

  /**
   * Review status identifiers.
   *
   * @enum {number}
   */
  WlClient.RsReviewStatusSid = Object.freeze({
    /** Admin */
    ADMIN: 1,
    /** Hidden */
    HIDDEN: 4,
    /** Publish */
    PUBLISH: 3,
  });

  /**
   * Experience types for class sessions to differentiate virtual and in-person sessions.
   *
   * @enum {number}
   */
  WlClient.ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum = Object.freeze({
    /** In-person session at a physical location */
    IN_PERSON: 1,
    /** Virtual session conducted through a virtual provider */
    VIRTUAL: 2,
  });

  /**
   * Payment actors (staff member, user or business owner).
   *
   * @enum {number}
   */
  WlClient.RsPayActorSid = Object.freeze({
    /** Business owner */
    BUSINESS: 3,
    /** Staff member */
    STAFF: 1,
    /** User */
    USER: 2,
  });

  /**
   * Statuses of payment intents.
   *
   * @enum {number}
   */
  WlClient.ThothPayProcessorStripeComPaymentIntentStatusSid = Object.freeze({
    /** You may cancel a Payment Intent at any point before it is processing or succeeded. This invalidates the */
    CANCELED: 7,
    /** Once required actions are handled, the Payment Intent moves to processing. While for some payment methods */
    PROCESSING: 4,
    /** If the payment requires additional actions, such as authenticating with 3D Secure , the Payment Intent has a status */
    REQUIRES_ACTION: 3,
    /** Requires capture */
    REQUIRES_CAPTURE: 6,
    /** After the customer provides their payment information, the Payment Intent is ready to be confirmed */
    REQUIRES_CONFIRMATION: 2,
    /** When the Payment Intent is created, it has a status of `requires_payment_method` until a payment method is */
    REQUIRES_PAYMENT_METHOD: 1,
    /** A Payment Intent with a status of succeeded means that the payment flow it is driving is complete */
    SUCCEEDED: 5,
  });

  /**
   * An enum of credit card types.
   *
   * @enum {number}
   */
  WlClient.ThothWlPayBankCardCardTypeEnum = Object.freeze({
    /** Credit Card */
    CREDIT: 1,
    /** Debit Card */
    DEBIT: 2,
  });

  /**
   * A list of payment gateways or processors.
   *
   * @enum {number}
   */
  WlClient.ThothPayProcessorPayProcessorSid = Object.freeze({
    /** Payment gateway for `cybersource.com` */
    CYBER_SOURCE: 11,
    /** Payment gateway for Direct Connect */
    DIRECT_CONNECT: 9,
    /** Payment gateway for Lucy */
    LUCY: 2,
    /** Payment gateway for Netbanx */
    NETBANX: 1,
    /** Payment gateway for NMI */
    NMI: 6,
    /** Payment gateway for Nuvei */
    NUVEI: 12,
    /** Payment gateway for Paychoice */
    PAYCHOICE: 7,
    /** Payment gateway for `stripe.com` */
    STRIPE_COM: 10,
  });

  /**
   * A list of money owners from which account money can be transferred.
   *
   * @enum {number}
   */
  WlClient.RsPayOwnerSid = Object.freeze({
    /** Anonymous user (Walk-In) */
    ANONYMOUS: 3,
    /** Business */
    BUSINESS: 2,
    /** System user */
    USER: 1,
  });

  /**
   * List of responses for Google Captcha token.
   *
   * @enum {number}
   */
  WlClient.CoreGoogleCaptchaCaptchaResponseSid = Object.freeze({
    /** Token can be verified due to error from Google Captcha */
    ERROR: 5,
    /** Token is invalid or expired */
    INVALID: 1,
    /** Token is valid, but v2 captcha require */
    REQUIRE_V2: 2,
    /** Token is valid */
    VALID: 3,
    /** Token is valid but score is risky */
    VALID_BLOCK: 4,
  });

  /**
   * Defines if client has "Late cancel" or "No shows" sessions.
   *
   * @enum {number}
   */
  WlClient.WlBusinessPolicyBlameSid = Object.freeze({
    /** If client has "Late cancel" and "No shows" sessions */
    BOTH: 1,
    /** If client has "Late cancel" sessions */
    LATE_CANCEL: 2,
    /** If client has "No shows" sessions */
    NO_SHOWS: 3,
  });

  /**
   * Client's charge if he has "Late cancel" or "No shows" sessions.
   *
   * @enum {number}
   */
  WlClient.WlBusinessPolicyChargeSid = Object.freeze({
    /** The client should be to pay a penalty */
    CHARGE: 1,
    /** Mark account as has "Late cancel" and "No shows" sessions */
    FLAG_ACCOUNT: 2,
  });

  /**
   * List of layouts for client's header.
   *
   * @enum {number}
   */
  WlClient.RsPageFrontendHeaderLayoutSid = Object.freeze({
    /** Logo is under the main menu */
    BOTTOM: 4,
    /** Logo is in the left corner */
    LEFT: 1,
    /** Logo is in the right corner */
    RIGHT: 2,
    /** Logo is above the main menu */
    TOP: 3,
  });

  /**
   * A position of logo.
   *
   * @enum {number}
   */
  WlClient.RsBusinessDesignLogoPositionSid = Object.freeze({
    /** Logo located in the center */
    CENTER: 2,
    /** Logo located on the left side */
    LEFT: 1,
    /** Logo located on the right side */
    RIGHT: 3,
  });

  /**
   * A style of logo.
   *
   * @enum {number}
   */
  WlClient.RsBusinessDesignLogoStyleSid = Object.freeze({
    /** Logo is invisible */
    HIDE: 1,
    /** Logo is a rectangle */
    RECTANGLE: 4,
    /** Logo is a round */
    ROUND: 3,
    /** Logo is a square */
    SQUARE: 2,
  });

  /**
   * List of progress log fields.
   *
   * @enum {number}
   */
  WlClient.WlMemberProgressFieldProgressFieldSid = Object.freeze({
    /** Abdomen field */
    ABDOMEN: 6,
    /** Arms field */
    ARMS: 3,
    /** Blood pressure field */
    BLOOD_PRESSURE: 2,
    /** Body fat field */
    BODY_FAT: 11,
    /** Bust field */
    BUST: 4,
    /** Height of the client */
    HEIGHT: 9,
    /** Client hips size */
    HIPS: 7,
    /** Long term goals */
    LONG_TERM_GOALS: 14,
    /** Pre workout heart rate */
    PRE_WORKOUT_HEART_RATE: 1,
    /** Progress picture */
    PROGRESS_PICTURE: 12,
    /** Short term goals */
    SHORT_TERM_GOALS: 13,
    /** THIGHS */
    THIGHS: 8,
    /** Waist */
    WAIST: 5,
    /** Client weight */
    WEIGHT: 10,
  });

  /**
   * Possible measurement units of the progress fields values.
   *
   * @enum {number}
   */
  WlClient.WlMemberProgressFieldMeasurementSid = Object.freeze({
    /** Value in beats per minutes */
    BEATS_PER_MINUTE: 7,
    /** Value in centimeters */
    CENTIMETRES: 1,
    /** Value in feet */
    FEET: 3,
    /** Value in feet and inches */
    FEET_AND_INCHES: 11,
    /** Value in grams */
    GRAMS: 9,
    /** Value in inches */
    INCHES: 4,
    /** Value in kilograms */
    KILOGRAMS: 5,
    /** Value in metres */
    METRES: 2,
    /** Value in metres and centimetres */
    METRES_AND_CENTIMETRES: 12,
    /** Value in mmHG */
    MMHG: 8,
    /** Value in percentages */
    PERCENTAGES: 10,
    /** Value in pounds */
    POUNDS: 6,
  });

  /**
   * Possible types of the progress fields values.
   *
   * @enum {number}
   */
  WlClient.WlMemberProgressFieldTypeSid = Object.freeze({
    /** Value is decimal */
    DECIMAL: 2,
    /** Value is image */
    IMAGE: 5,
    /** Value is percentage */
    PERCENTAGE: 3,
    /** Value is string */
    STRING: 4,
    /** Value is whole number */
    WHOLE_NUMBER: 1,
  });

  /**
   * List of response statuses.
   *
   * @enum {number}
   */
  WlClient.CoreQuizResponseResponseStatusSid = Object.freeze({
    /** Response is active */
    ACTIVE: 1,
    /** Response is active and has amendments */
    ACTIVE_AMEND: 5,
    /** Response in draft mode */
    DRAFT: 2,
    /** Response in inactive */
    INACTIVE: 3,
    /** Response in inactive and in draft mode */
    INACTIVE_DRAFT: 4,
  });

  /**
   * List of sensor types.
   *
   * @enum {number}
   */
  WlClient.WlProfileSensorSensorTypesSid = Object.freeze({
    /** Heart rate sensor */
    HEART_RATE: 1,
  });

  /**
   * List foreign sites that can pay for visits.
   *
   * @enum {number}
   */
  WlClient.WlVisitPassProspectSid = Object.freeze({
    /** Class Pass */
    CLASSPASS: 1,
    /** Gym Pass */
    GYMPASS: 2,
  });

  /**
   * List of sale categories on the store page.
   *
   * @enum {number}
   */
  WlClient.RsSaleSid = Object.freeze({
    /** Single appointment reservation */
    APPOINTMENT: 8,
    /** Single appointment deposit reservation */
    APPOINTMENT_DEPOSIT: 11,
    /** Tips for the appointment */
    APPOINTMENT_TIP: 12,
    /** Single class visit */
    CLASS_PERIOD: 6,
    /** Gift card */
    COUPON: 7,
    /** Enrollments. Classes where flag event is `true` */
    ENROLLMENT: 3,
    /** Promotions with program {@link WlClient.RsProgramSid} */
    PACKAGE: 5,
    /** Products: water, t-shirts, etc */
    PRODUCT: 4,
    /** Promotions with program category {@link WlClient.RsProgramCategorySid} and {@link WlClient.RsProgramCategorySid} */
    PROMOTION_CLASS: 1,
    /** Promotions with program category {@link WlClient.RsProgramCategorySid} */
    PROMOTION_RESOURCE: 9,
    /** Promotions with program category {@link WlClient.RsProgramCategorySid} and {@link WlClient.RsProgramCategorySid} */
    PROMOTION_SERVICE: 2,
    /** Promotions with program category {@link WlClient.RsProgramCategorySid} */
    PROMOTION_VIDEO: 13,
    /** Products: water, t-shirts, etc. That is available for quick buy */
    QUICK_BUY: 10,
    /** Tuition */
    TUITION: 14,
    /** Tuition fees */
    TUITION_FEE: 15,
  });

  /**
   * A list of types of visit note.
   *
   * @enum {number}
   */
  WlClient.WlVisitNoteSidNoteSid = Object.freeze({
    /** The usual quick accompanying note for the customer visit */
    QUICK: 2,
    /** Accompanying medical note for the customer visit */
    SOAP: 1,
  });

  /**
   * Identifiers for services types.
   *
   * @enum {number}
   */
  WlClient.RsServiceSid = Object.freeze({
    /** Appointments */
    APPOINTMENT: 1,
    /** Classes */
    CLASSES: 2,
    /** Enrolments */
    ENROLLMENT: 3,
    /** Resources */
    RESOURCE: 5,
    /** Visits */
    VISIT: 4,
  });

  /**
   * A list of client type IDs.
   *
   * @enum {number}
   */
  WlClient.WlLoginTypeClientTypeSid = Object.freeze({
    /** Record contains type of member */
    MEMBER: 3,
    /** Record is SystemSid::PROSPECT */
    NOTHING: 1,
    /** Record contains type of client */
    PASSHOLDER: 2,
  });

  /**
   * Define colors of notice messages.
   *
   * @enum {number}
   */
  WlClient.WlReceptionApplicationMemberInfoColorSid = Object.freeze({
    /** Default for neutral, informative messages. Displayed in blue */
    BLUE: 1,
    /** Positive messages. Displayed in green */
    GREEN: 2,
    /** Mild negative messages to warn the user. Displayed in orange */
    ORANGE: 3,
    /** Negative messages with strong importance or urgency. Displayed in red */
    RED: 4,
  });

  /**
   * Define types of icons for notice messages.
   *
   * @enum {number}
   */
  WlClient.WlReceptionApplicationMemberInfoIconSid = Object.freeze({
    /** Icon of an award ribbon. For celebration of an occasion (e.g. a client's first visit) */
    AWARD: 1,
    /** Icon of a birthday cake. For birthday messages */
    CAKE: 2,
    /** Icon of a signed contract */
    CONTRACT: 3,
    /** Icon of a document with a slash. For the unsigned waiver message */
    DOCUMENT_SLASH: 4,
    /** Icon of dollar sign. For messages relating to personal balance and amounts due */
    DOLLAR: 5,
    /** Icon of a dumbbell. For messages relating to visits */
    DUMBBELL: 6,
    /** Icon of a form */
    FORM: 7,
    /** Icon of an "i". Used for general informative messages */
    INFO: 8,
    /** Icon of an "x". For messages communicating some important or urgent issue for the user */
    PROBLEM: 9,
    /** Icon of an exclamation mark. For messages communicating a mild issue or cautioning the user */
    WARNING: 10,
  });

  /**
   * List of sounds used for check ins.
   *
   * @enum {number}
   */
  WlClient.WlReceptionDesignCheckInSoundSid = Object.freeze({
    /** Error sound 1 to be played when self check in fails */
    ERROR_SOUND_1: 1,
    /** Error sound 2 to be played when self check in fails */
    ERROR_SOUND_2: 2,
    /** Error sound 3 to be played when self check in fails */
    ERROR_SOUND_3: 3,
    /** Success sound 1 to be played when self check in succeeds */
    SUCCESS_SOUND_1: 4,
    /** Success sound 2 to be played when self check in succeeds */
    SUCCESS_SOUND_2: 5,
    /** Success sound 3 to be played when self check in succeeds */
    SUCCESS_SOUND_3: 6,
  });

  /**
   * Mail types.
   *
   * @enum {number}
   */
  WlClient.RsMailSid = Object.freeze({
    /** Sent by CASSI phone agent, when client requests a booking url */
    AI_LINK_BOOK: 206,
    /** Sent by CASSI phone agent, when client requests a purchase url */
    AI_LINK_PURCHASE: 207,
    /** Appointment approved by staff */
    APPOINTMENT_APPROVE_STAFF: 71,
    /** Sent when the AI Agent successfully books an appointment */
    APPOINTMENT_BOOKED_AI: 198,
    /** Appointment Cancelled by Client - Early */
    APPOINTMENT_CANCEL_EARLY_USER: 33,
    /** Appointment Cancelled by Client - Late */
    APPOINTMENT_CANCEL_LATE_USER: 35,
    /** Appointment Cancelled Notification - Staff */
    APPOINTMENT_CANCEL_STAFF: 32,
    /** Sends to the client when appointment has been cancelled by staff */
    APPOINTMENT_CANCEL_STAFF_USER: 80,
    /** Sends to the clients when appointment information has been changed */
    APPOINTMENT_CHANGE_GENERAL_CLIENT: 114,
    /** Sends to the staff members when appointment information has been changed */
    APPOINTMENT_CHANGE_GENERAL_STAFF: 113,
    /** Appointment Change Notification - Staff */
    APPOINTMENT_CHANGE_STAFF: 36,
    /** Appointment Change Notification - Client */
    APPOINTMENT_CHANGE_USER: 37,
    /** New Appointment Notification - Staff */
    APPOINTMENT_CREATE_STAFF: 31,
    /** Appointment Confirmation */
    APPOINTMENT_CREATE_USER: 30,
    /** Multiple Appointment Confirmation (Client) */
    APPOINTMENT_CREATE_USER_MULTIPLE: 211,
    /** Notification to a customer about an appointment that has been canceled because not paid */
    APPOINTMENT_PAY_CANCEL: 189,
    /** Notification to a customer about mandatory payment for an appointment */
    APPOINTMENT_PAY_PAY: 188,
    /** Sends one email to a client when several sessions of one or several appointments or single session of recurring */
    APPOINTMENT_REPEAT_CANCEL_CLIENT: 103,
    /** Sends one email to staff when several sessions of one or several appointments or single session of recurring */
    APPOINTMENT_REPEAT_CANCEL_STAFF: 105,
    /** Sends one email to a client when several sessions of one or several appointments or single session of recurring */
    APPOINTMENT_REPEAT_CANCEL_USER: 131,
    /** Sent to staff when the AI Agent receives an appointment request */
    APPOINTMENT_REQUEST_AI: 200,
    /** Requested appointment has been denied */
    APPOINTMENT_REQUEST_DENY: 88,
    /** Appointment has been requested */
    APPOINTMENT_REQUEST_STAFF: 89,
    /** Appointment has been requested */
    APPOINTMENT_REQUEST_USER: 90,
    /** Appointment Wait List Cancellation */
    APPOINTMENT_WAIT_REMOVE: 195,
    /** Sent to staff when the AI Agent logs a billing or payment query */
    BILLING_RELATED_QUERY: 204,
    /** Class Booking Confirmation */
    BOOK_ADD_CLASS: 1,
    /** Class Booking Notification - Staff */
    BOOK_ADD_STAFF: 47,
    /** Sent if a client cancels a booking (used in automations) */
    BOOK_CANCEL: 210,
    /** Class Booking (Reservation) Cancelled by Staff */
    BOOK_CANCEL_ADMIN_CLASS: 23,
    /** Enrollment Booking Cancelled by Staff */
    BOOK_CANCEL_ADMIN_ENROLLMENT: 57,
    /** Enrollment Session Cancellation Notification */
    BOOK_CANCEL_ENROLLMENT_SESSION: 128,
    /** Class Cancelled by Client - Early */
    BOOK_CANCEL_FREE_CLASS: 3,
    /** Enrollment Cancelled by Client - Early */
    BOOK_CANCEL_FREE_ENROLLMENT: 58,
    /** Class Cancelled By Client - Late */
    BOOK_CANCEL_PENALTY_CLASS: 4,
    /** Enrollment Cancelled By Client - Late */
    BOOK_CANCEL_PENALTY_ENROLLMENT: 59,
    /** Class Booking Cancellation Notification - Staff */
    BOOK_CANCEL_STAFF: 48,
    /** Enrollment Booking Confirmation */
    BOOK_ENROLLMENT: 69,
    /** Enrollment Booking Cancellation Notification - Staff */
    BOOK_ENROLLMENT_CANCEL_STAFF: 92,
    /** Enrollment Booking Notification - Staff */
    BOOK_ENROLLMENT_STAFF: 91,
    /** Thanks for your interest */
    BOOK_FIRST: 73,
    /** Appointment Wait List Promotion (Client Confirmation Required) */
    BOOK_PROMOTE_CONFIRM_APPOINTMENT: 169,
    /** Waitlist Promotion (Client Confirmation Required) */
    BOOK_PROMOTE_CONFIRM_CLASS: 53,
    /** Waitlist Promotion (Client Confirmation Required) */
    BOOK_PROMOTE_CONFIRM_ENROLLMENT: 60,
    /** Appointment Wait List Promotion (Confirmation not Required) */
    BOOK_PROMOTE_DIRECT_APPOINTMENT: 168,
    /** Waitlist Promotion (Client Confirmation Not Required) */
    BOOK_PROMOTE_DIRECT_CLASS: 8,
    /** Waitlist Promotion (Client Confirmation Not Required) */
    BOOK_PROMOTE_DIRECT_ENROLLMENT: 61,
    /** Class Reminder */
    BOOK_REMIND_CLASS: 25,
    /** Enrollment Reminder */
    BOOK_REMIND_ENROLLMENT: 62,
    /** Appointment Reminder - Staff */
    BOOK_REMIND_SERVICE_STAFF: 27,
    /** Appointment Reminder */
    BOOK_REMIND_SERVICE_USER: 26,
    /** Class Booking Confirmation */
    BOOK_REPEAT_ADD: 101,
    /** Class Booking Cancelled */
    BOOK_REPEAT_CANCEL: 102,
    /** Recurrent Class Reservation Wait List */
    BOOK_REPEAT_WAIT: 166,
    /** Class Review Request */
    BOOK_VISIT: 39,
    /** Appointment Reservation Wait List */
    BOOK_WAIT_APPOINTMENT: 165,
    /** Class Reservation Wait List */
    BOOK_WAIT_CLASS: 2,
    /** Enrollment Reservation Wait List */
    BOOK_WAIT_ENROLLMENT: 63,
    /** Sent when a business account or location is churned */
    BUSINESS_ACCOUNT_CHURN: 154,
    /** Sent to business owner if payment for account failed */
    BUSINESS_ACCOUNT_PAY_FAIL: 82,
    /** Sent to business owners as notification in one day before payment for account */
    BUSINESS_ACCOUNT_PAY_NOTIFY: 83,
    /** Sent to business owner on successful payment for account */
    BUSINESS_ACCOUNT_PAY_OK: 81,
    /** Sent when the monthly postcard limit is exceeded */
    BUSINESS_ACCOUNT_POSTCARD_LIMIT: 155,
    /** Sent when subscription price has been overridden and is less than the configured notification threshold */
    BUSINESS_ACCOUNT_SUBSCRIPTION_DISCOUNT: 158,
    /** Sent when subscription price has been overridden twice or more */
    BUSINESS_ACCOUNT_SUBSCRIPTION_OVERRIDE: 151,
    /** Sent when a subscription payment is marked as paid */
    BUSINESS_ACCOUNT_SUBSCRIPTION_PAYMENT: 156,
    /** Sent when subscription skip payment setting has been changed */
    BUSINESS_ACCOUNT_SUBSCRIPTION_SKIP: 134,
    /** Sent when a new subscription has been added, and the business is paying for fewer locations than they have */
    BUSINESS_ACCOUNT_SUBSCRIPTION_UNDERPAYING: 152,
    /** Sent when a user signs up for the virtual service */
    BUSINESS_ACCOUNT_VIRTUAL_SIGNUP: 157,
    /** Sent when a business adds more licenses to their `FitLIVE` subscription */
    BUSINESS_ACCOUNT_VIRTUAL_UPGRADE: 175,
    /** Sends to client after the first-level onboarding, providing them with login information */
    BUSINESS_CREATE: 192,
    /** Email sales@wellnessliving.com when user changes Message Center plan */
    BUSINESS_MESSAGE_SUBSCRIBE: 164,
    /** Email to the marketing to remind to upload the 'Partner Program 30-Day Notification Banner' to all businesses accounts */
    BUSINESS_PARTNER_BANNER: 179,
    /** Email to the marketing to remind to upload the 'Partner Program 30-Day Notification Banner' to business account */
    BUSINESS_PARTNER_BANNER_CUSTOMER: 180,
    /** Email to the admins that business staff member wants to take a part in the partner program */
    BUSINESS_PARTNER_ENROLL: 119,
    /** Email to the staff members of the partner business when a new lead comes in through his partnership */
    BUSINESS_PARTNER_REFERRAL_MAIL_NEW: 143,
    /** Email to the admins when a referral reaches a certain period of paid subscription about sending a check to partner business */
    BUSINESS_PARTNER_REFERRAL_MAIL_REACH_ADMIN_PARTNER: 145,
    /** Email to the admins when a referral reaches a certain period of paid subscription about sending a check to referral business */
    BUSINESS_PARTNER_REFERRAL_MAIL_REACH_ADMIN_REFERRAL: 148,
    /** Email to the staff members of the partner business when a referral reaches a certain period of paid subscription */
    BUSINESS_PARTNER_REFERRAL_MAIL_REACH_PARTNER: 146,
    /** Email to the staff members of the referred business when they reaches a certain period of paid subscription */
    BUSINESS_PARTNER_REFERRAL_MAIL_REACH_REFERRAL: 147,
    /** Email to the staff members of the partner business when a referral has been subscribed */
    BUSINESS_PARTNER_REFERRAL_MAIL_SUBSCRIBE: 144,
    /** Business registered its business phone number */
    BUSINESS_PHONE: 139,
    /** Sent when send/receive SMS in Two-Way SMS chat */
    BUSINESS_SMS_CHAT: 141,
    /** Sent to staff when the AI Agent captures a cancellation request */
    CANCELLATION_REQUEST_AI: 202,
    /** Sent to staff when CAASI receives a request for booking */
    CLASS_BOOK_AI: 201,
    /** Alerts staff that the AI Agent has completed a class booking for a client */
    CLASS_BOOKED_AI: 199,
    /** Class Type Modified Has Changed */
    CLASS_EDIT_CLASS: 24,
    /** Enrollment Type Modified Has Changed */
    CLASS_EDIT_ENROLLMENT: 64,
    /** Class cancelled by staff */
    CLASS_PERIOD_CANCEL_CLASS: 16,
    /** Enrollment cancelled by staff */
    CLASS_PERIOD_CANCEL_ENROLLMENT: 66,
    /** Class Schedule Details Changed Modified */
    CLASS_PERIOD_CHANGE_CLASS: 17,
    /** Enrollment Schedule Details Changed Modified */
    CLASS_PERIOD_CHANGE_ENROLLMENT: 65,
    /** Class Cancellation Notification - Staff */
    CLASSES_CANCEL_STAFF: 135,
    /** Class Schedule Details Changed */
    CLASSES_PERIOD_CHANGE_CLASSES_STAFF: 100,
    /** Email to the business members with information about newly added class schedule */
    CLASSES_PROMOTE: 109,
    /** A reminder for the staff about an upcoming recurrent class */
    CLASSES_STAFF_RECURRENT: 124,
    /** A notification to the staff about a cancellation of a recurrent class */
    CLASSES_STAFF_RECURRENT_CANCEL: 125,
    /** Staff member that conducts the class is changed (a new staff member is added, or an existing staff member is substituted) */
    CLASSES_STAFF_SUBSTITUTION: 110,
    /** Send to the staff a remind about an upcoming class session */
    CLASSES_STAFF_SUBSTITUTION_REMIND: 117,
    /** Sent to the client after a video uploaded to an attendance list is published */
    CLASSES_VIDEO_PUBLISH: 161,
    /** Send a copy of contract */
    CONTRACT_COPY: 98,
    /** Sent after purchase of coupon */
    COUPON_PURCHASE: 84,
    /** Enrollment Session(s) Booking Confirmation */
    EVENT_BOOK_SESSION_CLIENT: 129,
    /** Enrollment Session(s) Booking Notification - Staff */
    EVENT_BOOK_SESSION_STAFF: 130,
    /** Email to the business members with information about newly added event schedule */
    EVENT_PROMOTE: 160,
    /** Sent to the client after a video uploaded to an attendance list is published */
    EVENT_VIDEO_PUBLISH: 162,
    /** Staff sent feedback with some comment */
    FEEDBACK_DIALOG: 133,
    /** New Comment on Logged Result */
    FITBUILDER_MAIL_COMMENT: 182,
    /** New Likes on Comment */
    FITBUILDER_MAIL_LIKE: 183,
    /** Thumbs up on Logged Result */
    FITBUILDER_MAIL_THUMB: 184,
    /** Workout of the day */
    FITBUILDER_MAIL_WORKOUT: 185,
    /** Guest Pass invitation expired */
    GUEST_PASS_EXPIRED: 218,
    /** Guest Pass invitation sent */
    GUEST_PASS_INVITATION: 217,
    /** Guest Pass invitation reminder */
    GUEST_PASS_REMINDER: 219,
    /** For staff members to send emails to support using the help popup */
    HELP_POPUP_EMAIL: 150,
    /** Sent when a business enrolls in Autymate */
    INTEGRATION_AUTYMATE_ENROLLMENT: 176,
    /** Sent when a business subscribes to collections */
    INTEGRATION_COLLECTION_ALDOUS: 178,
    /** Email, which is sent when a customer has connected a paid Zoom account */
    INTEGRATION_ZOOM_CONFIRMATION: 138,
    /** Request a demo from landing page */
    LANDING_CONTACT: 97,
    /** Sent to staff member informing them that a new client has entered their information into the Lead Capture Widget */
    LEAD_ADDED_STAFF: 163,
    /** Sent to the client after they fill out a Lead Capture Form on the website of a business */
    LEAD_CAPTURE: 87,
    /** Sent to staff when CAASI captures a new lead from a conversation, */
    LEAD_CAPTURE_AI: 197,
    /** Sent to client on annual anniversary of the Member Since date */
    LOGIN_ANNIVERSARY: 96,
    /** Attendance List */
    LOGIN_ATTENDANCE: 42,
    /** Sent when user long time did not visit location, and it not has active promotion */
    LOGIN_BACK: 79,
    /** Email to send on the day, when client has birthday */
    LOGIN_BIRTHDAY: 49,
    /** Clients Payment Card expires this month */
    LOGIN_CARD_EXPIRE: 51,
    /** Email address confirmation */
    LOGIN_MAIL_CONFIRM: 123,
    /** Custom Client Email #1 */
    LOGIN_MESSAGE: 22,
    /** Client no show */
    LOGIN_PENALTY_APPOINTMENT: 72,
    /** Client no show */
    LOGIN_PENALTY_CLASS: 15,
    /** Client no show */
    LOGIN_PENALTY_ENROLLMENT: 67,
    /** Billed to Account. Sent to the client when any purchase was billed to their account balance */
    LOGIN_PURCHASE_ACCOUNT: 159,
    /** Sent to a client when they haven't visited in a set number of days, */
    LOGIN_RETENTION: 50,
    /** Sent to the client when a new account statement becomes available */
    LOGIN_STATEMENT_NEW: 213,
    /** Sent to all new users after they create an account for the first time */
    LOGIN_WELCOME: 9,
    /** Client added to a member group */
    MEMBER_GROUP_USER_ADD: 214,
    /** Client removed from a member group */
    MEMBER_GROUP_USER_REMOVE: 215,
    /** Sent to staff when the AI Agent logs a membership or purchase query */
    MEMBERSHIP_QUERY: 203,
    /** Sent OTP code by sms or email to validate phone number or email address */
    NOTIFICATION_OTP: 191,
    /** Sent OTP code by sms and email for the user sign in */
    PASSPORT_LOGIN_ENTER: 187,
    /** Notification about email address is changed due to merge */
    PASSPORT_LOGIN_MERGE: 205,
    /** E-mail with a list of user's payment account transactions for last `62` days */
    PAY_ACCOUNT_INVOICE: 85,
    /** Automatic payment success */
    PAY_AUTOMATIC_SUCCESS: 116,
    /** Transaction failed */
    PAY_TRANSACTION_FAIL: 181,
    /** Request a custom website subscription */
    PRESENCE_ACTIVATE: 137,
    /** Sent after purchase of product */
    PRODUCT_PURCHASE: 127,
    /** Email to inform user that they email is changed */
    PROFILE_MAIL_CHANGE: 93,
    /** Email to confirm new email address after it was changed */
    PROFILE_MAIL_CONFIRM: 86,
    /** Mail to inform the user that their password has been changed */
    PROFILE_PASSWORD_CHANGE: 111,
    /** Mail containing reset password link to allow the user to change their password */
    PROFILE_PASSWORD_RESET: 142,
    /** Few Pass Visits Remaining */
    PROMOTION_LOW: 43,
    /** Sent when membership is canceled */
    PROMOTION_MEMBERSHIP_CANCEL: 153,
    /** Sent to staff when membership is canceled */
    PROMOTION_MEMBERSHIP_CANCEL_STAFF: 193,
    /** Sent when membership expires */
    PROMOTION_MEMBERSHIP_EXPIRE: 77,
    /** Membership Payment - Billed to Account */
    PROMOTION_MEMBERSHIP_PAY_ACCOUNT: 106,
    /** Automatic Payment Failed */
    PROMOTION_MEMBERSHIP_PAY_FAIL: 55,
    /** Membership Payment Confirmation */
    PROMOTION_MEMBERSHIP_PAY_OK: 56,
    /** Sent to the customer after their membership is renewed */
    PROMOTION_MEMBERSHIP_REACTIVATE: 75,
    /** Sent before certain count of days before membership renews */
    PROMOTION_MEMBERSHIP_RENEW: 78,
    /** Sent after purchase of promotion */
    PROMOTION_PURCHASE: 76,
    /** Receipt sent after purchase of promotion */
    PROMOTION_RECEIPT: 136,
    /** Sent after a client attended a visit using a purchase option (used in automations) */
    PROMOTION_USED: 212,
    /** Sent to the customer when a promotion is paused */
    PURCHASE_HOLD: 194,
    /** Sends to the clients when purchase option hold expiring soon */
    PURCHASE_HOLD_EXPIRING: 186,
    /** Purchase Receipt */
    PURCHASE_PAYMENT: 52,
    /** Purchase Receipt */
    PURCHASE_PAYMENT_ACCOUNT: 107,
    /** Purchase Receipt */
    PURCHASE_PAYMENT_POS: 115,
    /** Sent to Business Owner when the re-order level has been reached for some product */
    PURCHASE_PRODUCT_INVENTORY: 95,
    /** Thanks for purchasing an introductory offer */
    PURCHASE_PROMOTION_INTRODUCTORY: 74,
    /** Send refund receipt */
    PURCHASE_REFUND: 108,
    /** Quiz form submission - Client */
    QUIZ_FORM_SUBMITTION: 172,
    /** Email to wellnessliving team when user changes Quiz Subscription plan */
    QUIZ_INDEX: 174,
    /** Quiz submitted - Staff */
    QUIZ_NOTIFICATION: 171,
    /** Quiz submitted - Staff */
    QUIZ_NOTIFICATION_REMIND: 173,
    /** Email to wellnessliving team when businesses perform actions which is exporting data */
    REPORT_EXPORT: 177,
    /** New Customer Review - Staff */
    REVIEW_ADD: 38,
    /** Owner Replied to Review */
    REVIEW_REPLY: 45,
    /** Client left a review */
    REVIEW_USER_LEFT: 216,
    /** Event redeems a reward (points or prizes) for client */
    REWARD_PRIZE_CLIENT: 120,
    /** Event redeems a reward (points or prizes) for staff */
    REWARD_PRIZE_STAFF: 121,
    /** Sale Has Been Made */
    SALE_STAFF: 126,
    /** Sent after booking a service (used in automations) */
    SERVICE_BOOK: 208,
    /** Event when finished push certification for ios devices */
    SKIN_APPLICATION_CONNECT: 122,
    /** Notifies staff when CAASI captures a client request for a staff connect, */
    STAFF_CALLBACK_REQUEST: 196,
    /** Sends when task assigned to staff */
    TASK_ASSIGN: 104,
    /** Send a copy of waiver */
    TERM_COPY: 99,
    /** Global email campaigns allows to send email to all clients, business owners, admins, etc */
    USER_CAMPAIGN: 112,
    /** Request a video subscription */
    VIDEO_SUBSCRIPTION_UPGRADE: 140,
    /** Sent after visit the service */
    VISIT_CAMPAIGN: 94,
    /** Sent if a client does not show up to a service reserved by (used in automations) */
    VISIT_NOSHOW: 209,
    /** Visit receipt */
    VISIT_RECEIPT_RECEIPT: 190,
    /** Email, which is sent when a Zoom license is lack */
    ZOOM_LICENSE_LACK: 149,
  });

  /**
   * List of resource categories.
   *
   * @enum {number}
   */
  WlClient.WlResourceResourceCategoryEnum = Object.freeze({
    /** Asset resource category */
    ASSET: 1,
    /** Off-site location resource category */
    LOCATION: 2,
  });

  /**
   * Reasons why the client can't book this class.
   *
   * @enum {number}
   */
  WlClient.WlScheduleClassViewDenyReasonSid = Object.freeze({
    /** User is trying to book on behalf of another client, but does not have permission to do so */
    ACCESS_DENIED: 1,
    /** Manual restriction to book business, location or a certain class */
    ACCESS_LIMITED: 2,
    /** The business can not take one more client because of business subscription limitations */
    ACCOUNT_LIMIT: 3,
    /** Class is not available for certain age */
    AGE_RESTRICTION: 4,
    /** Liability Release needs to be agreed */
    AGREE_NX: 5,
    /** Client has unpaid fees */
    BALANCE_NEGATIVE: 22,
    /** It's too early to book a class */
    BOOK_EARLY: 7,
    /** It's too late to book a class */
    BOOK_LATE: 8,
    /** User's visit overlaps with another visit */
    BOOK_OVERLAP: 25,
    /** User's pricing options do not allow booking another visit within a certain period because of pricing option limitations */
    BOOK_RESTRICT: 9,
    /** Client is already booked for this session */
    BOOKED_ALREADY: 6,
    /** Business is inactive */
    BUSINESS_INACTIVE: 10,
    /** Class is canceled */
    CLASS_CANCELED: 11,
    /** Class is finished */
    CLASS_FINISHED: 26,
    /** Class is full */
    CLASS_FULL: 14,
    /** Class does not exist anymore */
    CLASS_NOT_AVAILABLE_ANYMORE: 15,
    /** Client is flagged at location */
    CLIENT_FLAGGED: 12,
    /** Credit card is required for booking services */
    CREDIT_CARD_REQUIRE: 13,
    /** Business is closed */
    HOLIDAY: 16,
    /** Login is required */
    LOGIN_REQUIRED: 17,
    /** Online booking is disabled for the class */
    NOT_BOOKABLE: 18,
    /** Online booking is disabled for this type of client */
    NOT_BOOKABLE_BY_TYPE: 24,
    /** Required personal details missing */
    USER_INFO_MISSING: 19,
    /** Visit to another class is required first */
    VISIT_BEFORE: 20,
    /** The wait list is full */
    WAIT_LIST_LIMIT_MAX: 21,
    /** Client has unsigned waiver */
    WAIVER_NX: 23,
  });

  /**
   * List of possible value of virtual integrations.
   *
   * @enum {number}
   */
  WlClient.WlVirtualVirtualProviderSid = Object.freeze({
    /** Virtual integration non implemented */
    NON_INTEGRATED: 2,
    /** Virtual Zoom service integration */
    ZOOM: 1,
  });

  /**
   * Possible ways to stop repeatable events.
   *
   * @enum {number}
   */
  WlClient.RsRepeatEndSid = Object.freeze({
    /** Stop after a certain number of repeats */
    COUNT: 2,
    /** Stop after a certain date. Including this date */
    DATE: 3,
    /** Eternal appointments. Such appointments are scheduled for one year */
    ETERNAL: 1,
  });

  /**
   * Relation type between two relatives.
   *
   * @enum {number}
   */
  WlClient.RsFamilyRelationSid = Object.freeze({
    /** Care participant */
    CARE_PARTICIPANT: 12,
    /** Care recipient */
    CARE_RECEIVER: 9,
    /** Care provider */
    CAREGIVER: 8,
    /** Case load */
    CASE_LOAD: 16,
    /** Case Manager */
    CASE_MANAGER: 15,
    /** Child of the parent */
    CHILD: 5,
    /** Dependent */
    DEPENDENT: 10,
    /** Friend */
    FRIEND: 2,
    /** Guardian */
    GUARDIAN: 7,
    /** Not specified custom relationship */
    OTHER: 6,
    /** Parent of the child */
    PARENT: 3,
    /** Sibling. A brother or sister */
    SIBLING: 4,
    /** Spouse. A husband or wife */
    SPOUSE: 1,
    /** Student */
    STUDENT: 14,
    /** Teacher */
    TEACHER: 13,
    /** Therapist */
    THERAPIST: 11,
  });

  /**
   * Class/Event booking process sid class.
   *
   * @enum {number}
   */
  WlClient.WlBookProcessProcessSpaSid = Object.freeze({
    /** Step "Class details" */
    DETAIL: 10,
    /** Step "Documents" */
    DOCUMENT: 8,
    /** Step "Frequency" */
    FREQUENCY: 9,
    /** Information about the class */
    INFO: 2,
    /** Installment selection */
    INSTALLMENT: 4,
    /** Sign in, Sign up, fill in all necessary account data */
    PASSPORT: 1,
    /** Card data and the booking confirmation */
    PAYMENT: 5,
    /** Quizzes attached to the class */
    QUIZ: 7,
    /** Booking for */
    RELATION: 12,
    /** Selection of assets */
    RESOURCE: 6,
    /** Session selection step for a session event */
    SESSION: 11,
    /** A list of possible Purchase Options to be bought */
    STORE: 3,
  });

  /**
   * List of possible modes to require amount while booking a class.
   *
   * @enum {number}
   */
  WlClient.WlClassesRequirePaySid = Object.freeze({
    /** Clients can pay online or pay when they visit */
    ADVANCE: 3,
    /** Client should leave a deposit before booking an event */
    DEPOSIT: 4,
    /** Client must purchase online */
    ONLINE: 1,
    /** Clients can only pay when they visit. Online payment is not available */
    VISIT: 2,
  });

  /**
   * A list of bookable types.
   *
   * @enum {number}
   */
  WlClient.WlServiceBookableSid = Object.freeze({
    /** All users can book */
    ALL: 1,
    /** Only special client groups can book */
    CUSTOM: 3,
    /** Nobody can book */
    NONE: 2,
  });

  /**
   * Promotion or package date start rule.
   *
   * @enum {number}
   */
  WlClient.RsActivationSid = Object.freeze({
    /** Number of a day of the month or of the week */
    DAY: 7,
    /** Custom date */
    FIXED: 3,
    /** The first day of month */
    MONTH_FIRST: 4,
    /** The 15th day of the month */
    MONTH_HALF: 6,
    /** The last day of the month */
    MONTH_LAST: 5,
    /** Date of the sale */
    SALE: 1,
    /** Date of the first visit */
    VISIT: 2,
  });

  /**
   * String identifiers for tax type.
   *
   * @enum {number}
   */
  WlClient.RsCommissionTypeSid = Object.freeze({
    /** Fixed type */
    FLAT: 1,
    /** Percent type */
    PERCENT: 2,
  });

  /**
   * List of sources from where the user registers.
   *
   * @enum {number}
   */
  WlClient.WlProfileRegisterSourceSid = Object.freeze({
    /** Source when a user registers during purchase or booking */
    BOOKING_AND_PURCHASE: 1,
    /** Source when a user registers on self-registration web app, self-registration web app URL, etc */
    SELF: 2,
    /** This is a service value, which means to not choose any specific source */
    UNSET_VALUE: 3,
  });

  /**
   * List of available design icons.
   *
   * @enum {number}
   */
  WlClient.WlDesignIconSid = Object.freeze({
    /** Signs that session or pass is an appointment connected */
    APPOINTMENT: 4,
    /** Signs that session or pass is an asset connected */
    ASSET: 7,
    /** Signs that session or pass is a class or event connected */
    CLASSES: 5,
    /** Cycle icon. Used, for example, to show transferred status of the promotion */
    CYCLE: 3,
    /** Early cancel activity list icon */
    EARLY_CANCELED: 8,
    /** Signs that session or pass is a gym visit connected */
    GYM_VISIT: 6,
    /** Late cancel activity list icon */
    LATE_CANCELED: 9,
    /** Piece of paper with the curved end for different text notes */
    NOTE: 2,
    /** No show at visit activity list icon */
    NO_SHOW: 10,
    /** Paper with medical symbolic for medical notes */
    SOAP: 1,
    /** Clock activity list icon in SPA application */
    SPA_CLOCK: 11,
  });

  /**
   * Manages identifiers of user activity.
   *
   * @enum {number}
   */
  WlClient.RsLoginActivityTypeSid = Object.freeze({
    /** Client books an appointment */
    APPOINTMENT_BOOK: 27,
    /** Client booked an appointment and shared on Facebook */
    APPOINTMENT_BOOK_FACEBOOK: 47,
    /** Client booked an appointment and shared on Twitter */
    APPOINTMENT_BOOK_TWITTER: 48,
    /** Client cancels an appointment */
    APPOINTMENT_CANCEL: 28,
    /** Client attends an appointment */
    APPOINTMENT_VISIT: 23,
    /** Client books an appointment to wait list */
    APPOINTMENT_WAIT: 52,
    /** Client booked an asset and shared on Facebook */
    ASSET_BOOK_FACEBOOK: 49,
    /** Client booked an asset and shared on Twitter */
    ASSET_BOOK_TWITTER: 50,
    /** Client's birthday */
    BIRTHDAY: 1,
    /** Client booked a class */
    CLASS_BOOK: 2,
    /** Client booked a class and shared on Facebook */
    CLASS_BOOK_FACEBOOK: 43,
    /** Client booked a class and shared on Twitter */
    CLASS_BOOK_TWITTER: 44,
    /** Client cancelled a class */
    CLASS_CANCEL: 3,
    /** Client attends a class */
    CLASS_VISIT: 15,
    /** Client booked a class */
    CLASS_WAIT: 54,
    /** Gift card transferred */
    COUPON_TRANSFER: 51,
    /** Staff approved a custom reward for a client */
    CUSTOM_REWARD: 31,
    /** Client booked an enrollment */
    ENROLLMENT_BOOK: 17,
    /** Client booked an enrollment and shared on Facebook */
    ENROLLMENT_BOOK_FACEBOOK: 45,
    /** Client booked an enrollment and shared on Twitter */
    ENROLLMENT_BOOK_TWITTER: 46,
    /** Client cancels an enrollment */
    ENROLLMENT_CANCEL: 18,
    /** Client attends an enrollment */
    ENROLLMENT_VISIT: 16,
    /** Client booked an enrollment */
    ENROLLMENT_WAIT: 53,
    /** Client connected his Facebook account */
    FACEBOOK_CONNECT: 12,
    /** Client disconnected his Facebook account */
    FACEBOOK_DISCONNECT: 19,
    /** Client added a class to favorites */
    FAVORITE_ADD_CLASS: 4,
    /** Client added a location to favorites */
    FAVORITE_ADD_LOCATION: 5,
    /** Client added a staff member to favorites */
    FAVORITE_ADD_STAFF: 6,
    /** Client removed a class from favorites */
    FAVORITE_REMOVE_CLASS: 7,
    /** Client removed a location from favorites */
    FAVORITE_REMOVE_LOCATION: 8,
    /** Client removed a staff member from favorites */
    FAVORITE_REMOVE_STAFF: 9,
    /** Client added a friend */
    FRIEND_ADD: 10,
    /** Client made a gym visit */
    GYM_VISIT: 32,
    /** Client sent an invite */
    INVITE_SEND: 14,
    /** The user shared location item into Facebook */
    LOCATION_SHARE_FACEBOOK: 39,
    /** The user shared location item into Twitter */
    LOCATION_SHARE_TWITTER: 40,
    /** The user spend money */
    PAY: 22,
    /** Client has bought prize */
    PRIZE: 24,
    /** Promotion transferred */
    PROMOTION_TRANSFER: 34,
    /** Customer bought the product */
    PURCHASE_PRODUCT: 30,
    /** Customer bought the promotion */
    PURCHASE_PROMOTION: 29,
    /** The user shared purchase item into Facebook */
    PURCHASE_SHARE_FACEBOOK: 25,
    /** The user shared purchase item into Twitter */
    PURCHASE_SHARE_TWITTER: 26,
    /** Referral made a purchase */
    REFER_PURCHASE: 38,
    /** A referrer is set for the user */
    REFER_REGISTER: 37,
    /** The user has logged in */
    REGISTRATION: 21,
    /** Client wrote a review */
    REVIEW: 11,
    /** The user shared purchase item into Facebook */
    REVIEW_SHARE_FACEBOOK: 41,
    /** The user shared purchase item into Twitter */
    REVIEW_SHARE_TWITTER: 42,
    /** Reward points were changed manually */
    REWARD_MANUAL: 55,
    /** All-time earned reward points have been reset */
    REWARD_RESET: 36,
    /** Current available reward points have been reset */
    REWARD_RESET_AVAILABLE: 56,
    /** Client attended several visits */
    SUMMARY_VISIT: 35,
    /** Client connected his Twitter account */
    TWITTER_CONNECT: 13,
    /** Client disconnected his Twitter account */
    TWITTER_DISCONNECT: 20,
  });

  /**
   * Sources of system notes.
   *
   * @enum {number}
   */
  WlClient.RsProfileNoteSid = Object.freeze({
    /** A list of clients with not redeemed invitations */
    DOORACCESS_BRIVO_INVITATION_BRIVOINVITATIONPROFILE: 5,
    /** A list of accounts with invalid progress log */
    MEMBER_PROGRESS_LOG_PROFILE: 3,
    /** A list of accounts with not verified progress log */
    MEMBER_PROGRESS_LOG_VERIFICATION: 4,
    /** A list of accounts with negative balance */
    PAY_ACCOUNT: 1,
    /** A list of accounts with unsigned waivers */
    PROFILE_PAGE_OVERVIEW_ALERT_AGREE: 8,
    /** A list of accounts with upcoming birthdays */
    PROFILE_PAGE_OVERVIEW_ALERT_BIRTHDAY: 6,
    /** A list of accounts with unsigned contracts */
    PROFILE_PAGE_OVERVIEW_ALERT_CONTRACT: 9,
    /** A list of accounts with expired or soon expiring credit cards */
    PROFILE_PAGE_OVERVIEW_ALERT_CREDITCARD: 7,
    /** A list of accounts with a milestone visit */
    PROFILE_PAGE_OVERVIEW_ALERT_MILESTONEVISIT: 12,
    /** A list of accounts with uncompleted quizzes */
    PROFILE_PAGE_OVERVIEW_ALERT_QUIZ: 10,
    /** A list of accounts at risk of churn */
    PROFILE_PAGE_OVERVIEW_ALERT_RISK: 11,
    /** A list of due membership payments */
    PROMOTION_PAY: 2,
  });

  /**
   * Class for access type to login note.
   *
   * @enum {number}
   */
  WlClient.RsLoginNoteAccessSid = Object.freeze({
    /** Login note can view all staff and client */
    CLIENT: 1,
    /** Login note can view only staff which create this note */
    ME: 2,
    /** Login note can view only all staff */
    STAFF: 3,
  });

  /**
   * List of modes to change user's "flag" status within a location
   *
   * @enum {number}
   */
  WlClient.RsLoginNoteFlagSid = Object.freeze({
    /** Add flag record */
    ADD: 1,
    /** Remove flag record */
    REMOVE: 2,
  });

  /**
   * Different sources of flags, which are not set manually by the staff member. Such flags have own logic.
   *
   * @enum {number}
   */
  WlClient.WlLocationFlagFlagSourceEnum = Object.freeze({
    /** Flag is set because user is sent to collections. This means user has debt and cannot make new purchases */
    COLLECTIONS: 1,
  });

  /**
   * List of file extensions.
   *
   * @enum {number}
   */
  WlClient.WlProfileAttachAttachPreviewSid = Object.freeze({
    /** Image file */
    IMAGE: 1,
    /** Pdf file */
    PDF: 2,
  });

  /**
   * Wellnessliving-wide privileges.
   *
   * @enum {number}
   */
  WlClient.WlPrivilegePrivilegeSid = Object.freeze({
    /** Allows user to view, create or edit knowledge base entries, or conversational flows used by the AI Agent */
    AI_AGENT_KNOWLEDGE_BASE: 225,
    /** Allows user to view reporting and analytics data related to AI Agent performance or usage */
    AI_AGENT_REPORTS: 226,
    /** Allows user to modify configuration or conversational flows used by the AI Agents */
    AI_AGENT_SETTINGS: 227,
    /** Allows user to create, update, or cancel AI Agent subscription plans */
    AI_AGENT_SUBSCRIPTIONS: 228,
    /** View banner alert message on dashboard */
    ALERT_MESSAGE: 142,
    /** Book appointments for clients with negative account balances */
    APPOINTMENT_BOOK_NEGATIVE: 209,
    /** Unpaid appointment booking */
    APPOINTMENT_BOOK_UNPAID: 167,
    /** Book appointments for clients with an unsigned waiver */
    APPOINTMENT_BOOK_UNSIGNED: 203,
    /** Edit appointment at my location */
    APPOINTMENT_EDIT: 50,
    /** Change/View all appointment */
    APPOINTMENT_FOREIGN: 49,
    /** Edit appointment schedule */
    APPOINTMENT_PERIOD: 51,
    /** View appointment */
    APPOINTMENT_VIEW: 52,
    /** Ability to book clients outside their current paid period */
    BOOK_OUTSIDE_PAID_PERIOD: 141,
    /** Ability to book clients over capacity during or after the services have been scheduled */
    BOOK_OVER_CAPACITY: 154,
    /** Ability to book assets which are booked for another service or set as unavailable */
    BOOK_UNAVAILABLE_ASSETS: 138,
    /** Ability to schedule staff members who are booked for another service or set as unavailable */
    BOOK_UNAVAILABLE_STAFF: 137,
    /** Ability to book clients into recurring services even if they do not have an applicable Purchase Option to cover all visits */
    BOOK_UNPAID_RECURRING_APPOINTMENT: 231,
    /** Ability to book clients into recurring services even if they do not have an applicable Purchase Option to cover all visits */
    BOOK_UNPAID_RECURRING_CLASS: 232,
    /** Unpaid asset recurring booking */
    BOOK_UNPAID_RECURRING_RESOURCE: 233,
    /** Manage business */
    BUSINESS_EDIT: 1,
    /** Change business email settings */
    BUSINESS_EMAIL: 117,
    /** Change business policies */
    BUSINESS_POLICY: 120,
    /** Change available services in business */
    BUSINESS_SERVICE: 118,
    /** Change services privileges apply */
    BUSINESS_SERVICE_APPLY: 145,
    /** Change services privileges apply (third button requires second privilege) */
    BUSINESS_SERVICE_APPLY_CUSTOM: 165,
    /** Change Design Settings */
    BUSINESS_SKIN: 19,
    /** Change business SMS settings */
    BUSINESS_SMS: 169,
    /** Change business URLs */
    BUSINESS_URL: 119,
    /** Change business online waiver */
    BUSINESS_WAIVER: 121,
    /** Perform Cash Out */
    CASH_OUT: 82,
    /** Edit deposits while perform Cash Out */
    CASH_OUT_DEPOSIT: 83,
    /** Perform editing of Cash Out */
    CASH_OUT_EDIT: 84,
    /** Manage clients' Credit Cards */
    CC_MANAGE: 35,
    /** Manage clients' Credit Cards manually */
    CC_MANAGE_MANUAL: 208,
    /** Edit class schedule */
    CLASS_ATTENDANCE: 48,
    /** Book classes for clients with negative account balances */
    CLASS_BOOK_NEGATIVE: 210,
    /** Add clients to the attendance list of a service, even if they do not have an applicable purchase option */
    CLASS_BOOK_UNPAID: 79,
    /** Book classes for clients with an unsigned waiver */
    CLASS_BOOK_UNSIGNED: 201,
    /** Edit classes at my location */
    CLASS_EDIT: 3,
    /** Allows overriding certain class fields (capacity, price, etc.) when schedule is added */
    CLASS_EDIT_SESSIONS: 238,
    /** Change/View all classes */
    CLASS_FOREIGN: 17,
    /** Lock search bar on class attendance list */
    CLASS_LOCK_SEARCH: 152,
    /** Edit class schedule */
    CLASS_PERIOD: 5,
    /** Allows a staff member to see other staff members' class sessions on the schedule in read-only mode */
    CLASS_SCHEDULE_VIEW: 246,
    /** Add and view client's contact logs */
    CONTACT_LOG_MANAGE: 135,
    /** Add, remove, and edit gift cards */
    COUPON: 31,
    /** Delete shared dashboard */
    DASHBOARD_DELETE: 131,
    /** Edit shared dashboard */
    DASHBOARD_EDIT: 130,
    /** Share dashboard */
    DASHBOARD_SHARE: 129,
    /** Add, remove and edit discount codes */
    DISCOUNT_CODE: 76,
    /** Configure Constant Contact settings */
    EML_CONSTANT_CONTACT: 123,
    /** Configure MailChimp settings */
    EML_MAILCHIMP: 122,
    /** Edit class schedule */
    ENROLLMENT_ATTENDANCE: 55,
    /** Book events for clients with negative account balances */
    ENROLLMENT_BOOK_NEGATIVE: 211,
    /** Add clients to the attendance list of a service, even if they do not have an applicable purchase option */
    ENROLLMENT_BOOK_UNPAID: 80,
    /** Book events for clients with an unsigned waiver */
    ENROLLMENT_BOOK_UNSIGNED: 202,
    /** Edit classes at my location */
    ENROLLMENT_EDIT: 54,
    /** Allows overriding certain event fields (capacity, price, etc.) when schedule is added */
    ENROLLMENT_EDIT_SESSIONS: 239,
    /** Change/View all classes */
    ENROLLMENT_FOREIGN: 53,
    /** Lock search bar on enrollment attendance list */
    ENROLLMENT_LOCK_SEARCH: 153,
    /** Manage Enterprise Cloud Fees */
    ENTERPRISE_CLOUD_FEES: 207,
    /** Allows to manage leaderboard in the `FitBuilder` addon */
    FITBUILDER_LEADERBOARD: 190,
    /** Allows to subscribe to `FitBuilder` subscription addon */
    FITBUILDER_SUBSCRIPTION: 189,
    /** Allows to assign workouts from the `FitBuilder` addon to different services */
    FITBUILDER_WORKOUT_ASSIGN: 188,
    /** Allows to add, edit and remove workouts in the `FitBuilder` addon */
    FITBUILDER_WORKOUT_MANAGE: 187,
    /** Allow Staff members to view/complete forms for clients from any location */
    FORM_ALL: 177,
    /** Amend apply to privilege */
    FORM_AMEND_ACCESS: 198,
    /** Allow staff members to make modifications to completed forms on the client profile */
    FORM_AMEND_COMPLETED: 194,
    /** Allow staff members to make modifications to completed forms on the client profile for all clients */
    FORM_AMEND_COMPLETED_ALL: 195,
    /** Allow staff members to make modifications to completed forms on the client profile for clients at staff location */
    FORM_AMEND_COMPLETED_LOCATION: 196,
    /** Allow staff members to make modifications to completed forms on the client profile for self clients */
    FORM_AMEND_COMPLETED_MY_CLIENTS: 197,
    /** Allow staff members to fill in forms for clients */
    FORM_COMPLETE: 178,
    /** Allow staff members to add, edit and delete forms */
    FORM_MANAGE: 160,
    /** Allow Staff members to view/complete forms for clients that belong to them through service offerings */
    FORM_MY_CLIENTS: 175,
    /** Allow Staff members to view/complete forms for clients that belong to the location that they are selected to work at */
    FORM_MY_LOCATION: 176,
    /** Allow staff members to delete forms from the client’s profile */
    FORM_RESPONSE_DELETE: 199,
    /** Allow staff members to view form responses */
    FORM_VIEW_RESPONSE: 161,
    /** Add holidays */
    HOLIDAY: 7,
    /** Allows to import clients from a CSV file */
    IMPORT_CLIENT: 215,
    /** Set up and modify Autymate integration */
    INTEGRATION_AUTYMATE: 163,
    /** Set up and modify Brivo integration */
    INTEGRATION_BRIVO: 179,
    /** Enroll into and manage the WellnessLiving Achieve App. These settings are located under Setup > Achieve Client App */
    INTERFACE_ACHIEVE_APP: 87,
    /** Modify the look and functionality business’s widgets. These settings are located within Setup > Widgets */
    INTERFACE_WIDGET_EDIT: 39,
    /** View the look and functionality business’s widgets. These settings are located within Setup > Widgets */
    INTERFACE_WIDGET_VIEW: 110,
    /** Permission to Receive or Adjust quantity from the Inventory On Hand Report */
    INVENTORY_UPDATE: 157,
    /** Manage my locations except General information */
    LOCATION_EDIT: 9,
    /** Manage tab Location -> General */
    LOCATION_EDIT_GENERAL: 126,
    /** Manage all locations */
    LOCATION_FOREIGN: 8,
    /** Manage franchise locations */
    LOCATION_FRANCHISE: 109,
    /** Logs view */
    LOG_VIEW: 101,
    /** Add client notes and warnings */
    LOGIN_NOTE: 11,
    /** Flag clients */
    LOGIN_NOTE_RESTRICT: 12,
    /** View service add-ons */
    LOGIN_PRODUCT_VIEW: 206,
    /** Access to send mails and sms to clients */
    MAIL_SEND: 75,
    /** Manage announcements */
    MANAGE_ANNOUNCEMENT: 200,
    /** Only the staff roles with this permission provided are able to edit/add/delete the business billing information */
    MANAGE_BILLING_INFORMATION: 134,
    /** View, manage, and analyze CAASI-led conversations */
    MANAGE_CAASI_CONVERSATION: 229,
    /** Manage hardware readers */
    MANAGE_READERS: 181,
    /** Enable, disable, and edit daily deals */
    MARKETING_DD: 43,
    /** Settings pertaining to all automated marketing to clients */
    MARKETING_EMAIL: 42,
    /** Allows to subscribe to email marketing subscription plans and manage existing subscriptions */
    MARKETING_SUBSCRIPTION: 237,
    /** Enabling this permission for a role will enable making and receiving calls in Message Center */
    MESSAGES_CALLS: 173,
    /** Enabling this permission for a role will enable the role to use the ‘Assign to’ field and assign a conversation to a staff member */
    MESSAGES_CONVERSATIONS: 174,
    /** Enabling this permission for a role will grant access to the inbox tab including viewing and sending messages in the Message Center */
    MESSAGES_MANAGE: 170,
    /** Enabling this permission for a role will grant access to the Settings tab including modifying phone number(s) for the business */
    MESSAGES_SETTINGS: 171,
    /** Enabling this permission for a role will grant access and changes to the Subscription Plans tab */
    MESSAGES_SUBSCRIPTION: 172,
    /** Receive new appointment booking / request notification */
    NOTIFICATION_APPOINTMENT_BOOK: 60,
    /** Receive Appointment Booked (AI Agent) notification */
    NOTIFICATION_APPOINTMENT_BOOKED_AI: 218,
    /** Receive appointment cancellation notification */
    NOTIFICATION_APPOINTMENT_CANCEL: 61,
    /** Receive appointment change notification */
    NOTIFICATION_APPOINTMENT_CHANGE: 59,
    /** Receive Appointment Requested (AI Agent) notification */
    NOTIFICATION_APPOINTMENT_REQUEST_AI: 220,
    /** Receive Billing Related Query notification */
    NOTIFICATION_BILLING_RELATED_QUERY: 224,
    /** Receive Cancellation Requested (AI Agent) notification */
    NOTIFICATION_CANCELLATION_REQUEST_AI: 222,
    /** Receive class attendance list */
    NOTIFICATION_CLASS_ATTENDANCE: 56,
    /** Receive client class booking notification */
    NOTIFICATION_CLASS_BOOK: 57,
    /** Receive Class Booking Requested (AI Agent) notification */
    NOTIFICATION_CLASS_BOOK_AI: 221,
    /** Receive Class Booked (AI Agent) notification */
    NOTIFICATION_CLASS_BOOKED_AI: 219,
    /** Receive client class cancellation notification */
    NOTIFICATION_CLASS_CANCEL: 58,
    /** Receive event attendance list */
    NOTIFICATION_EVENT_ATTENDANCE: 62,
    /** Receive client event booking notification */
    NOTIFICATION_EVENT_BOOK: 63,
    /** Receive client event cancellation notification */
    NOTIFICATION_EVENT_CANCEL: 64,
    /** Permissions apply to all appointment schedules */
    NOTIFICATION_FOREIGN: 65,
    /** Receive new lead capture widget notification */
    NOTIFICATION_LEAD_CAPTURE: 159,
    /** Receive Lead Capture (AI Agent) notification */
    NOTIFICATION_LEAD_CAPTURE_AI: 217,
    /** Staff with this role will receive the membership cancel mails */
    NOTIFICATION_MEMBERSHIP_CANCEL: 214,
    /** Receive Membership or Purchase Options Query notification */
    NOTIFICATION_MEMBERSHIP_QUERY: 223,
    /** Staff with this role will receive emails about reward prizes */
    NOTIFICATION_PRIZE_REDEMPTION: 90,
    /** Staff with this role will receive the inventory mails */
    NOTIFICATION_PRODUCT_INVENTORY: 77,
    /** Receive new quiz notification form staff */
    NOTIFICATION_QUIZ: 162,
    /** Staff with this role will receive customer review notifications */
    NOTIFICATION_REVIEW: 66,
    /** Staff with this role will receive the sale receipts mails */
    NOTIFICATION_SALE_STAFF: 136,
    /** Receive Staff Callback Request notification */
    NOTIFICATION_STAFF_CALLBACK_REQUEST: 216,
    /** Override late cancel and no show fees */
    OVERRIDE_FEE: 164,
    /** Manage partner program */
    PARTNER_PROGRAM_MANAGE: 94,
    /** Access to Payment Processing */
    PAYMENT_PROCESSING: 166,
    /** Allows the staff member to initiate bulk billing of multiple clients in one batch */
    PERFORM_BULK_BILLING: 245,
    /** Permission to perform Physical Inventory Count */
    PHYSICAL_INVENTORY_COUNT: 156,
    /** Staff member with this role will be able to send postcards */
    POSTCARD_SEND: 88,
    /** Delete shared power searches */
    POWER_SEARCH_DELETE: 106,
    /** Edit shared power searches */
    POWER_SEARCH_EDIT: 105,
    /** Share power searches with other staff members */
    POWER_SEARCH_SHARE: 107,
    /** Ability to request subscription plan for custom website */
    PRESENCE: 149,
    /** Edit products but not product name and description */
    PRODUCT_DESCRIPTION_EDIT: 113,
    /** Add, remove, and edit products in the online store */
    PRODUCT_MANAGE: 34,
    /** Manage all clients */
    PROFILE_ALL: 24,
    /** This permission allows users to delete client profiles */
    PROFILE_DELETE: 230,
    /** This permission allows users to view client details throughout the interface */
    PROFILE_DETAIL: 67,
    /** Manage profile client groups (only create, delete and rename a group) */
    PROFILE_GROUP_MANAGE: 69,
    /** Manage client group members (only members, not a group itself) */
    PROFILE_GROUP_MEMBER_MANAGE: 191,
    /** Merge client profiles */
    PROFILE_MERGE: 213,
    /** Manage clients from my location */
    PROFILE_MY_LOCATION: 86,
    /** View client’s upcoming and past schedule */
    PROFILE_SCHEDULE: 205,
    /** Manage profile client type */
    PROFILE_TYPE_EDIT: 68,
    /** Manage all clients */
    PROFILE_VIEW: 13,
    /** Manage progress log */
    PROGRESS_LOG_MANAGE: 102,
    /** Edit progress log in profile */
    PROGRESS_LOG_PROFILE: 104,
    /** Add, remove, and edit purchase options and packages for services */
    PROMOTION_MANAGE: 25,
    /** Allows to edit only base information about purchase option */
    PROMOTION_MANAGE_BASE: 127,
    /** Access to edit client purchases (passes and memberships) */
    PURCHASE_EDIT: 93,
    /** Access to view client purchases (passes and memberships) */
    PURCHASE_VIEW: 92,
    /** Allow to see alerts */
    RECEIVE_ALERT: 193,
    /** Access to view reports for all staff */
    REPORT_ALL: 71,
    /** Reports attendance */
    REPORT_ATTENDANCE: 27,
    /** Reports client */
    REPORT_CLIENT: 26,
    /** Reports with cash closeout information */
    REPORT_CLOSEOUT: 85,
    /** Export and print button in reports */
    REPORT_EXPORT_PRINT: 186,
    /** Reports with franchise information */
    REPORT_FRANCHISE: 108,
    /** Wellness Programs reports */
    REPORT_INSURANCE: 115,
    /** Ability to generate, export and import insurance reimbursement files */
    REPORT_INSURANCE_FILE: 155,
    /** Reports emails */
    REPORT_MAIL: 30,
    /** Reports sales */
    REPORT_SALE: 29,
    /** Ability to view purchase report for specific user */
    REPORT_SALE_USER: 125,
    /** Reports staff */
    REPORT_STAFF: 28,
    /** Manage assets */
    RESOURCE: 37,
    /** Book assets for clients with negative account balances */
    RESOURCE_BOOK_NEGATIVE: 212,
    /** Unpaid asset booking */
    RESOURCE_BOOK_UNPAID: 168,
    /** Book assets for clients with an unsigned waiver */
    RESOURCE_BOOK_UNSIGNED: 204,
    /** Mark client reviews as inappropriate and respond to customer comments */
    REVIEW_FLAG: 18,
    /** Create contests on the leaderboard */
    REWARD_LEADERBOARD: 44,
    /** Rules related to point accumulation */
    REWARD_POINT_MANAGE: 46,
    /** Clear the total accumulated points for all clients */
    REWARD_POINT_RESET: 45,
    /** Define prizes and the number of points that are required to redeem */
    REWARD_PRIZE: 47,
    /** Enable SABA single sign on and create SABA accounts */
    SABA: 116,
    /** View canceled classes from the schedule */
    SCHEDULE_CANCELED_CLASS: 139,
    /** View canceled classes from the schedule */
    SCHEDULE_CANCELED_ENROLLMENT: 140,
    /** Scheduling and editing future sessions of the appointments */
    SCHEDULE_FUTURE_APPOINTMENT: 95,
    /** Scheduling sessions of the assets */
    SCHEDULE_FUTURE_ASSETS: 128,
    /** Scheduling and editing future sessions of the classes */
    SCHEDULE_FUTURE_CLASS: 96,
    /** Scheduling and editing future sessions of the events */
    SCHEDULE_FUTURE_EVENT: 99,
    /** Scheduling and editing past sessions of the appointments */
    SCHEDULE_PAST_APPOINTMENT: 97,
    /** Scheduling and editing past sessions of the classes */
    SCHEDULE_PAST_CLASS: 98,
    /** Scheduling and editing past sessions of the events */
    SCHEDULE_PAST_EVENT: 100,
    /** View a summary of projected and earned service revenue generated from scheduled and completed sessions */
    SCHEDULE_SUMMARY_REVENUE_SERVICE: 234,
    /** View a summary of projected pay from upcoming sessions and earned pay from completed sessions, based on the staff’s schedule */
    SCHEDULE_SUMMARY_REVENUE_STAFF: 235,
    /** Allows sign service agreement */
    SERVICE_AGREEMENT_SIGN: 133,
    /** View, modify and delete shop categories */
    SHOP_CATEGORY: 78,
    /** Modify the clock-in and clock-out times for staff members */
    STAFF_CLOCK: 32,
    /** Add, remove, and edit staff profiles */
    STAFF_EDIT: 14,
    /** Edit own staff profile */
    STAFF_EDIT_OWN: 150,
    /** Modify pay rates for products and Purchase Options */
    STAFF_MODIFY_RATES_PRODUCT: 184,
    /** Modify pay rates for services */
    STAFF_MODIFY_RATES_SERVICE: 183,
    /** Modify the clock-in and clock-out times for your own staff profile */
    STAFF_MY_CLOCK: 192,
    /** Add, remove, and edit staff pay rates */
    STAFF_PAY_ALL: 20,
    /** Change staff role on the staff edit page */
    STAFF_ROLE_CHANGE: 72,
    /** Edit staff role on the staff role page */
    STAFF_ROLE_EDIT: 124,
    /** Create/Edit/Remove staff working hours */
    STAFF_WORKING_HOURS: 144,
    /** Allow staff to override staff commission at the point of sale */
    STORE_COMMISSION_OVERRIDE: 185,
    /** Temporarily modify the price of products and services at the point of sale */
    STORE_PRICE: 41,
    /** Access to the point of sale store to facilitate the sale of products and services */
    STORE_SELL: 40,
    /** Access to view and edit store settings */
    STORE_SETTINGS_EDIT: 143,
    /** Add, remove, and edit supplier profiles */
    SUPPLIER_MANAGE: 114,
    /** Access to add tasks */
    TASK_ADD: 111,
    /** Access to view all tasks for all members */
    TASK_ALL: 70,
    /** Access to edit tasks */
    TASK_EDIT: 112,
    /** Access to transaction details */
    TRANSACTION_DETAIL: 81,
    /** Access to edit transaction */
    TRANSACTION_EDIT: 89,
    /** Access to refund transaction */
    TRANSACTION_REFUND: 91,
    /** Access to enroll clients in tuition plans via the enrollment wizard */
    TUITION_ENROLL: 242,
    /** Add, remove, and edit tuition plans, their settings, and assigned instances */
    TUITION_MANAGE: 243,
    /** Cancel a client's tuition plan from the Clients tab, stopping all future installments and optionally revoking remaining session access */
    TUITION_PAYMENT_CANCEL: 244,
    /** Access to view the tuition plan list and plan details */
    TUITION_VIEW: 241,
    /** Access to view and change list of video categories */
    VIDEO_CATEGORY: 146,
    /** Access to view and change videos in the business video library */
    VIDEO_SETUP: 147,
    /** View the Balance History & Statements tab and generate or email account statements on */
    VIEW_BALANCE_HISTORY_STATEMENTS: 240,
    /** Set up and modify FitLIVE integration */
    VIRTUAL_SETUP: 158,
    /** Access to edit, delete visit notes */
    VISIT_NOTE_EDIT: 74,
    /** Access to view visit notes */
    VISIT_NOTE_VIEW: 73,
    /** Access to WellnessLiving Academy */
    WELLNESSLIVING_ACADEMY: 151,
    /** Allow access to manage integration with Zapier */
    ZAPIER: 180,
  });

  /**
   * The possible payment types an appointment can have.
   *
   * @enum {number}
   */
  WlClient.RsAppointmentPaySid = Object.freeze({
    /** A deposit was paid */
    DEPOSIT: 2,
    /** Appointment is free and does not require payment */
    FREE: 4,
    /** The full price was paid */
    FULL: 3,
    /** Nothing was paid */
    NONE: 1,
  });

  /**
   * List sources of the view video.
   *
   * @enum {number}
   */
  WlClient.WlVideoWatchWatchSourceSid = Object.freeze({
    /** Video watched from application */
    APP: 1,
    /** Video watched from direct URL */
    DIRECT_URL: 2,
    /** Video watched from frontend */
    FRONTEND: 3,
    /** Source of watched is undefined */
    UNDEFINED: 4,
  });

  /**
   * A list of supported social networks.
   *
   * @enum {number}
   */
  WlClient.ASocialSid = Object.freeze({
    /** Facebook social network */
    FACEBOOK: 1,
    /** Google Plus social network */
    GOOGLE: 2,
    /** Twitter social network */
    TWITTER: 3,
  });

  /**
   * List of ages, which are suitable for visiting this location.
   *
   * @enum {number}
   */
  WlClient.RsAgeSid = Object.freeze({
    /** An Adaptive / Inclusive Programs */
    ADAPTIVE: 5,
    /** An adult */
    ADULT: 2,
    /** A kid */
    KID: 1,
    /** Natal */
    NATAL: 4,
    /** Senior */
    SENIOR: 3,
  });

  /**
   * Type of facilities available at a location.
   *
   * @enum {number}
   */
  WlClient.RsFacilitySid = Object.freeze({
    /** The location has accessible parking */
    ACCESSIBLE_PARKING: 18,
    /** The location allows app check-in */
    APP_CHECK_IN: 22,
    /** The location has aquatic wheelchair access */
    AQUATIC_WHEELCHAIR_ACCESS: 24,
    /** This location has Asian owned */
    ASIAN_OWNED: 23,
    /** This location has barre equipment */
    BARRE_EQUIPMENT: 25,
    /** This location has basketball courts */
    BASKETBALL_COURTS: 8,
    /** This location has bike racks */
    BIKE_RACKS: 26,
    /** This location is black owned */
    BLACK_OWNED: 27,
    /** This location has boxing rings or heavy bags */
    BOXING_RINGS_HEAVY_BAGS: 28,
    /** This location has cardio machines */
    CARDIO_MACHINES: 29,
    /** This location has change rooms */
    CHANGE_ROOM: 1,
    /** This location has childcare services */
    CHILDCARE: 14,
    /** This location has classrooms */
    CLASSROOMS: 30,
    /** This location has climbing bouldering wall */
    CLIMBING_BOULDERING_WALL: 31,
    /** This location has climbing walls */
    CLIMBING_WALLS: 32,
    /** This location is close to public transit */
    CLOSE_PUBLIC_TRANSIT: 33,
    /** This location has cold plunge */
    COLD_PLUNGE: 34,
    /** This location has couples treatment rooms */
    COUPLES_TREATMENT_ROOMS: 35,
    /** This location has cryotherapy */
    CRYOTHERAPY: 36,
    /** This location has diaper changing stations */
    DIAPER_CHANGING_STATIONS: 37,
    /** This location is disability owned */
    DISABILITY_OWNED: 38,
    /** This location has eco-friendly practices */
    ECO_FRIENDLY_PRACTICES: 39,
    /** This location has elevator ramps */
    ELEVATOR_RAMPS: 40,
    /** This location has equestrian facilities */
    EQUESTRIAN_FACILITIES: 41,
    /** This location has equipment rentals */
    EQUIPMENT_RENTALS: 19,
    /** This location is ESA friendly */
    ESA_FRIENDLY: 42,
    /** This location has EV charging stations */
    EV_CHARGING_STATIONS: 43,
    /** This location is family friendly */
    FAMILY_FRIENDLY: 44,
    /** This location is family owned */
    FAMILY_OWNED: 45,
    /** This location has family restroom */
    FAMILY_RESTROOM: 46,
    /** This location has food drink */
    FOOD_DRINK: 20,
    /** This location has free weights area */
    FREE_WEIGHTS_AREA: 47,
    /** This location has gender neutral restroom */
    GENDER_NEUTRAL_RESTROOM: 48,
    /** This location has group fitness studio */
    GROUP_FITNESS_STUDIO: 49,
    /** This location has hair styling stations */
    HAIR_STYLING_STATIONS: 50,
    /** This location has hot tub */
    HOT_TUB: 51,
    /** This location has hydrotherapy */
    HYDROTHERAPY: 52,
    /** This location has ice skating rinks */
    ICE_SKATING_RINKS: 53,
    /** This location is indigenous owned */
    INDIGENOUS_OWNED: 54,
    /** This location has indoor turf field */
    INDOOR_TURF_FIELD: 55,
    /** This location has a juice bar */
    JUICE_BAR: 15,
    /** This location has lactation room */
    LACTATION_ROOM: 56,
    /** This location has laser treatments */
    LASER_TREATMENTS: 58,
    /** This location is Latinx owned */
    LATINX_OWNED: 57,
    /** This location is LEED certified building */
    LEED_CERTIFIED_BUILDING: 59,
    /** This location is LGBTQ friendly */
    LGBTQ_FRIENDLY: 60,
    /** This location is LGBTQ owned */
    LGBTQ_OWNED: 61,
    /** This location has lockers available for clients */
    LOCKERS: 2,
    /** This location has manicure/pedicure stations */
    MANICURE_PEDICURE_STATIONS: 62,
    /** This location has massage tables/chairs */
    MASSAGE_TABLES_CHAIRS: 63,
    /** This location has meditation/quiet room */
    MEDITATION_QUIET_ROOM: 64,
    /** This location has music practice rooms */
    MUSIC_PRACTICE_ROOMS: 65,
    /** This location is neurodiverse friendly */
    NEURODIVERSE_FRIENDLY: 66,
    /** This location has ninja/parkour structures */
    NINJA_PARKOUR_STRUCTURES: 67,
    /** This location has site parking for clients */
    ON_SITE_PARKING: 16,
    /** This location has outdoor sports field */
    OUTDOOR_SPORTS_FIELD: 68,
    /** This location has outdoor training space */
    OUTDOOR_TRAINING_SPACE: 69,
    /** This location has parking nearby for clients */
    PARKING_NEARBY: 17,
    /** This location is pet friendly */
    PET_FRIENDLY: 70,
    /** This location has pickleball courts */
    PICKLEBALL_COURTS: 72,
    /** This location has pilates reformers */
    PILATES_REFORMERS: 71,
    /** This location has pole/aerial equipment */
    POLE_AERIAL_EQUIPMENT: 73,
    /** This location has pool lift */
    POOL_LIFT: 74,
    /** This location has private treatment rooms */
    PRIVATE_TREATMENT_ROOMS: 75,
    /** This location has a pro-shop */
    PRO_SHOP: 12,
    /** This location has racquetball courts */
    RACQUETBALL_COURTS: 7,
    /** This location has rehab equipment */
    REHAB_EQUIPMENT: 76,
    /** This location has running track */
    RUNNING_TRACK: 77,
    /** This location is safe space certified */
    SAFE_SPACE_CERTIFIED: 78,
    /** This location has saunas */
    SAUNA: 10,
    /** This location is senior friendly */
    SENIOR_FRIENDLY: 79,
    /** This location has showers */
    SHOWERS: 4,
    /** This location has smart fitness equipment */
    SMART_FITNESS_EQUIPMENT: 80,
    /** This location has a spa */
    SPA: 9,
    /** This location has spin bikes */
    SPIN_BIKES: 81,
    /** This location has squash courts */
    SQUASH_COURTS: 6,
    /** This location has steam room */
    STEAM_ROOM: 82,
    /** This location has strength machines */
    STRENGTH_MACHINES: 83,
    /** This location has a swimming pool */
    SWIMMING_POOL: 11,
    /** This location has tanning beds */
    TANNING_BEDS: 84,
    /** This location has tattoo equipment */
    TATTOO_EQUIPMENT: 85,
    /** This location provides towel service */
    TOWEL_SERVICE: 5,
    /** This location is trauma informed */
    TRAUMA_INFORMED: 86,
    /** This location has turf/functional training */
    TURF_FUNCTIONAL_TRAINING: 87,
    /** This location is veteran owned */
    VETERAN_OWNED: 89,
    /** This location offers virtual/hybrid classes */
    VIRTUAL_HYBRID_CLASSES: 88,
    /** This location has washrooms for clients */
    WASHROOMS: 3,
    /** This location has wheelchair accessible entrance */
    WHEELCHAIR_ACCESSIBLE_ENTRANCE: 90,
    /** This location has wheelchair accessible restroom */
    WHEELCHAIR_ACCESSIBLE_RESTROOM: 91,
    /** This location has a woman's only area */
    WOMAN_ONLY_AREA: 13,
    /** This location is women owned */
    WOMEN_OWNED: 92,
    /** This location has zero depth entry pool */
    ZERO_DEPTH_ENTRY_POOL: 93,
  });

  /**
   * Types of the shapes.
   *
   * @enum {number}
   */
  WlClient.WlResourceLayoutShapeLayoutShapeSid = Object.freeze({
    /** Circles */
    CIRCLE: 2,
    /** Pies */
    PIE: 3,
    /** Rectangles and squares */
    RECTANGLE: 1,
  });

  /**
   * Predefined icons for assets.
   *
   * @enum {number}
   */
  WlClient.WlResourceImageImageIconSid = Object.freeze({
    /** Training bench */
    BENCH: 1,
    /** Exercise bike */
    BIKE_1: 2,
    /** Exercise bike */
    BIKE_2: 3,
    /** Exercise bike */
    BIKE_3: 4,
    /** Exercise bike */
    BIKE_4: 5,
    /** Exercise bike */
    BIKE_5: 6,
    /** Exercise bike */
    BIKE_6: 7,
    /** Boot */
    BOOT: 8,
    /** Door */
    DOOR: 9,
    /** Fan */
    FAN_1: 10,
    /** Fan */
    FAN_2: 11,
    /** Man */
    MAN: 12,
    /** Mat */
    MAT: 13,
    /** Mirror */
    MIRROR: 14,
    /** Orbitrack */
    ORBITRACK_1: 15,
    /** Orbitrack */
    ORBITRACK_2: 16,
    /** Orbitrack */
    ORBITRACK_3: 17,
    /** Orbitrack */
    ORBITRACK_4: 18,
    /** Orbitrack */
    ORBITRACK_5: 19,
    /** Orbitrack */
    ORBITRACK_6: 20,
    /** Boxing punch */
    PUNCH_1: 21,
    /** Boxing punch */
    PUNCH_2: 22,
    /** Rectangle */
    RECTANGLE: 23,
    /** Loudspeaker */
    SPEAKER: 24,
    /** Treadmill */
    TREADMILL_1: 25,
    /** Treadmill */
    TREADMILL_2: 26,
    /** TV */
    TV: 27,
    /** Twines */
    TWINE: 28,
    /** Weight */
    WEIGHT: 29,
  });

  /**
   * Coupon date start rule.
   *
   * @enum {number}
   */
  WlClient.WlCouponEditActivationSid = Object.freeze({
    /** Number of a day of the month or of the week */
    DAY: 7,
    /** Custom date */
    FIXED: 3,
    /** Date of the sale */
    SALE: 1,
  });

  /**
   * Class to process string identifiers for duration types
   *
   * @enum {number}
   */
  WlClient.WlCouponEditDurationTypeSid = Object.freeze({
    /** Specific date. Example, 2013-12-24 */
    DATE: 2,
    /** No ending date */
    ETERNAL: 3,
    /** Examples: 12 days, 2 months, 2 hours etc */
    PERIOD: 1,
  });

  /**
   * Types of taxes.
   *
   * @enum {number}
   */
  WlClient.RsTaxSid = Object.freeze({
    /** Tax is accounted based on percents */
    PERCENT: 2,
  });

  /**
   * A list of Purchase Option view types.
   *
   * @enum {number}
   */
  WlClient.WlCatalogPurchaseOptionViewSid = Object.freeze({
    /** A single appointment reservation */
    APPOINTMENT: 1,
    /** A single class reservation */
    CLASS_PERIOD: 2,
    /** A gift card */
    COUPON: 3,
    /** Enrollments. Classes where flag event is `true` */
    ENROLLMENT: 4,
    /** Promotions with programs: */
    MEMBERSHIP: 8,
    /** Promotions with program {@link WlClient.RsProgramSid} */
    PACKAGE: 5,
    /** Products (such as water, t-shirts, etc.) */
    PRODUCT: 6,
    /** Session passes */
    PROMOTION: 7,
    /** Products available for quick buy */
    QUICK_BUY: 9,
  });

  /**
   * List of Setup -> Store configuration -> Categories and Layout sort options.
   *
   * @enum {number}
   */
  WlClient.WlShopCategoryShopCategorySortSid = Object.freeze({
    /** Custom sort */
    CUSTOM: 2,
    /** Sort by date */
    DATE: 3,
    /** Sort by price */
    PRICE: 4,
    /** Sort by name/title */
    NAME: 1,
  });

  /**
   * Attendance Restriction cycle type.
   *
   * @enum {number}
   */
  WlClient.WlPromotionEditLimitCycleSid = Object.freeze({
    /** Attendance Restriction is applied at the start of the calendar cycle */
    CALENDAR: 1,
    /** Attendance Restriction is applied at the start of the payment cycle */
    PAYMENT: 2,
  });

  /**
   * Program type categories.
   *
   * @enum {number}
   */
  WlClient.RsProgramCategorySid = Object.freeze({
    /** Purchase options to fill user's account: */
    ACCOUNT: 7,
    /** Purchase options to pay for classes, events and enrollments: */
    CLASSES: 1,
    /** Special "Wellness Program" purchase option */
    INSURANCE: 8,
    /** Packages and daily deals */
    OTHER: 5,
    /** Resource category */
    RESOURCE: 6,
    /** Purchase options to pay for appointments: */
    SERVICE: 3,
    /** Purchase options to pay for videos:<ui> */
    VIDEO: 9,
    /** Purchase options to pay for gym visits: */
    VISIT: 2,
  });

  /**
   * List of sources where quiz response can be generated.
   *
   * @enum {number}
   */
  WlClient.WlQuizResponseSourceSid = Object.freeze({
    /** Quiz response received during booking process */
    BOOKING: 2,
    /** Quiz response was imported */
    IMPORT: 6,
    /** Quiz response received by kiosk mode link */
    KIOSK: 7,
    /** Quiz response received by direct link */
    LINK: 1,
    /** Quiz response received by direct link */
    MANUAL: 5,
    /** Quiz response received during purchase process */
    PURCHASE: 4,
    /** Quiz response received during registration process */
    REGISTRATION: 3,
  });

  /**
   * List of quick purchase item types.
   *
   * @enum {number}
   */
  WlClient.WlCatalogQuickPurchaseTypeSid = Object.freeze({
    /** Classes */
    CLASSES: 224,
    /** Resource */
    RESOURCE: 681,
    /** Service */
    SERVICE: 690,
  });

  /**
   * List of default categories of the rewards.
   *
   * @enum {number}
   */
  WlClient.RsRewardActionCategorySid = Object.freeze({
    /** Booking and visiting rewards */
    ATTENDANCE: 1,
    /** Rewards for spending money */
    PURCHASE: 2,
    /** Rewards for referrals */
    REFER: 7,
    /** Rewards for reviewing a business */
    REVIEW: 3,
    /** Social networks rewards */
    SOCIAL: 4,
    /** Rewards for significant user events */
    USER: 5,
  });

  /**
   * Types of reward actions.
   *
   * @enum {number}
   */
  WlClient.RsRewardScoreSid = Object.freeze({
    /** Customer Birthday earns X points */
    BIRTHDAY: 16,
    /** Book a class online */
    BOOK: 14,
    /** Book a class and share on Facebook */
    BOOK_FACEBOOK: 2,
    /** Book a class and share on Twitter */
    BOOK_TWITTER: 3,
    /** Custom action */
    CUSTOM: 26,
    /** Connect profile to Facebook */
    LOGIN_FACEBOOK: 7,
    /** Each Dollar spent earns customers X points */
    PAY: 15,
    /** The reward for the purchase of some product */
    PURCHASE_PRODUCT: 28,
    /** The reward for the purchase of some promotion */
    PURCHASE_PROMOTION: 27,
    /** Share to facebook purchased item */
    PURCHASE_SHARE_FACEBOOK: 22,
    /** Share to twitter purchased item */
    PURCHASE_SHARE_TWITTER: 23,
    /** Referral purchase */
    REFER_PURCHASE: 30,
    /** Referral registration */
    REFER_REGISTER: 31,
    /** User registration */
    REGISTRATION: 20,
    /** Record to reset all-time earned user points. This points will be always negative */
    RESET: 25,
    /** Record to reset current available user points. This points will be always negative */
    RESET_AVAILABLE: 32,
    /** Write a review on microsite */
    REVIEW: 11,
    /** Write a review on microsite and share on Facebook */
    REVIEW_FACEBOOK: 9,
    /** Write a review on microsite and share on Twitter */
    REVIEW_TWITTER: 10,
    /** Visit classes on the same location */
    VISIT: 12,
    /** Attending a specific appointment earns customers X points */
    VISIT_APPOINTMENT: 29,
    /** Attending a specific class earns customers X points */
    VISIT_CLASS: 18,
    /** Attending a specific Workshop/Enrollment/Event earns customers X points */
    VISIT_ENROLLMENT: 19,
  });

  /**
   * List of statuses of an Autymate enrollment notification.
   *
   * @enum {number}
   */
  WlClient.WlIntegrationAutymateAutymateStatusSid = Object.freeze({
    /** Autymation enrollment is active */
    ACTIVE: 1,
    /** Autymation enrollment is no longer active */
    INACTIVE: 2,
  });

  /**
   * List of modes used to access Autymate.
   *
   * @enum {number}
   */
  WlClient.WlIntegrationAutymateAutymateAccessModeSid = Object.freeze({
    /** Access Autymate to create an initial enrollment */
    ENROLL: 1,
    /** Access Autymate to view the dashboard */
    VIEW: 2,
  });

  /**
   * Lists statuses of reports from point of view of its generation.
   *
   * @enum {number}
   */
  WlClient.WlReportGeneratorReportGeneratorStatusSid = Object.freeze({
    /** Report is in an inconsistent state */
    ABORTED: 6,
    /** Current operation is being aborted now */
    ABORTING: 5,
    /** This report is being deleted now */
    DELETING: 4,
    /** This report is being generated now */
    GENERATING: 2,
    /** Generation of this report is queued */
    QUEUED: 1,
    /** Generation of this report is now completed */
    READY: 3,
  });

  /**
   * Types of the location.
   *
   * @enum {number}
   */
  WlClient.WlBusinessFranchiseLocationBusinessFranchiseLocationSid = Object.freeze({
    /** All locations */
    ALL: 1,
    /** Locations without the region */
    REGION_NO: 2,
    /** Location with the region */
    REGION_YES: 3,
  });

  /**
   * List of possible types of Gift Cards.
   *
   * @enum {number}
   */
  WlClient.WlCouponTypeSid = Object.freeze({
    /** Amount Gift Card */
    AMOUNT: 2,
    /** Product Gift Card */
    COMPONENT: 1,
    /** Quick Gift Card */
    QUICK: 3,
  });

  /**
   * Different user flows that can be tracked.
   *
   * @enum {number}
   */
  WlClient.WlUserTrackingFlowSid = Object.freeze({
    /** Appointment booking flow */
    BOOK_APPOINTMENT: 1,
    /** Class booking flow */
    BOOK_CLASS: 2,
    /** Event booking flow */
    BOOK_EVENT: 3,
  });

  /**
   * List of possible order for gets review.
   *
   * @enum {number}
   */
  WlClient.WlReviewReviewListReviewOrderSid = Object.freeze({
    /** Ascending sort review by date */
    LATEST: 1,
    /** Ascending sort review by date */
    NEGATIVE: 3,
    /** Descending sort review by date */
    OLDEST: 4,
    /** Descending sort review by date */
    POSITIVE: 2,
  });

  /**
   * A list of types object for share post to social network.
   *
   * @enum {number}
   */
  WlClient.WlSocialShareShareObjectSid = Object.freeze({
    /** Book */
    BOOK: 4,
    /** Location */
    LOCATION: 3,
    /** Purchase */
    PURCHASE: 1,
    /** Review */
    REVIEW: 2,
  });

  /**
   * Widget analytics checkout types.
   *
   * @enum {number}
   */
  WlClient.WlWidgetAnalyticsWidgetAnalyticsCheckoutTypeSid = Object.freeze({
    /** Any checkout type */
    ANY: 1,
    /** Booking checkout type */
    BOOKING: 3,
    /** Store purchase checkout type */
    STORE_PURCHASE: 2,
  });

  /**
   * List of page transaction type.
   *
   * @enum {number}
   */
  WlClient.RsPayAccountChargeSid = Object.freeze({
    /** Account charging using payment form */
    AUTO: 1,
    /** Manual account charge by admin */
    CREDIT: 3,
    /** Manual account withdrawal by admin */
    DEBIT: 2,
  });

  /**
   * A list of account holder types which can be chosen.
   *
   * @enum {number}
   */
  WlClient.RsPayBankAchHolderSid = Object.freeze({
    /** Account holder is a business */
    BUSINESS: 2,
    /** Account holder is a person */
    PERSONAL: 1,
  });

  /**
   * A list of account types which can be chosen.
   *
   * @enum {number}
   */
  WlClient.RsPayBankAchTypeSid = Object.freeze({
    /** Checking account */
    CHECKING: 1,
    /** Savings account */
    SAVINGS: 2,
  });

  /**
   * Lead conversion type.
   *
   * @enum {number}
   */
  WlClient.WlLeadConversionLeadConversionTypeSid = Object.freeze({
    /** Consider leads as 'Lost' or no longer interested */
    LOST: 1,
    /** Consider leads as successfully 'Won' */
    WON: 2,
  });

  /**
   * Shapes of client group icons.
   *
   * @enum {number}
   */
  WlClient.WlMemberGroupShapeSid = Object.freeze({
    /** Circle */
    CIRCLE: 1,
    /** Hexagon */
    HEXAGON: 2,
    /** Oval */
    OVAL: 3,
    /** Pentagon */
    PENTAGON: 4,
    /** Rectangle */
    RECTANGLE: 5,
    /** Square */
    SQUARE: 6,
    /** Star */
    STAR: 7,
  });

  /**
   * Search operation constants.
   *
   * @enum {number}
   */
  WlClient.WlSearchSearchOperationSid = Object.freeze({
    /** Contains */
    CONTAIN: 1,
    /** Custom */
    CUSTOM: 27,
    /** On */
    DATE: 2,
    /** After */
    DATE_AFTER: 3,
    /** Before */
    DATE_BEFORE: 4,
    /** In specific range */
    DATE_RANGE: 5,
    /** Ends with */
    END_WITH: 6,
    /** = */
    EQUAL: 13,
    /** > */
    GREATER_THAN: 17,
    /** >= */
    GREATER_THAN_OR_EQUAL: 18,
    /** In the last */
    IN_LAST: 23,
    /** In a specific range */
    IN_SPECIFIC_RANGE: 24,
    /** Is */
    IS: 7,
    /** Is checked */
    IS_CHECKED: 30,
    /** Is empty */
    IS_EMPTY: 11,
    /** Isn`t */
    IS_NOT: 8,
    /** Is unchecked */
    IS_UNCHECKED: 31,
    /** Last month */
    LAST_MONTH: 29,
    /** Last week */
    LAST_WEEK: 28,
    /** < */
    LESS_THAN: 15,
    /** <= */
    LESS_THAN_OR_EQUAL: 16,
    /** No */
    NO: 19,
    /** Doesn`t contain */
    NOT_CONTAIN: 9,
    /** Is not empty */
    NOT_EMPTY: 12,
    /** =/= */
    NOT_EQUAL: 14,
    /** Starts with */
    START_WITH: 10,
    /** This month */
    THIS_MONTH: 26,
    /** This week */
    THIS_WEEK: 25,
    /** Today */
    TODAY: 21,
    /** Yes */
    YES: 20,
    /** Yesterday */
    YESTERDAY: 22,
  });

  /**
   * A list of share options.
   *
   * @enum {number}
   */
  WlClient.WlShareShareSid = Object.freeze({
    /** Item is available for all staffs in a business */
    EVERYONE: 2,
    /** Item is available for current user */
    ONLY_ME: 1,
    /** Item is available for selected staff roles */
    SELECTED_STAFF_ROLE: 3,
  });

  /**
   * List of possible plans for SmsSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionSmsSmsSubscriptionSid = Object.freeze({
    /** 1000 Messages */
    CENTER_1000: 5,
    /** 10000 Messages */
    CENTER_10000: 8,
    /** 2500 Messages */
    CENTER_2500: 6,
    /** 25000 Messages */
    CENTER_25000: 9,
    /** 500 Messages */
    CENTER_500: 4,
    /** 5000 Messages */
    CENTER_5000: 7,
    /** Message Center Custom */
    CENTER_CUSTOM: 10,
    /** Enterprise */
    ENTERPRISE: 11,
    /** None */
    FREE: 1,
    /** Message Center Professional */
    PREMIUM: 3,
  });

  /**
   * List of possible plans for CollectionsSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Integration Requested */
    INTEGRATION_REQUESTED: 3,
    /** Professional */
    PROFESSIONAL: 2,
  });

  /**
   * List of possible plans for ZapierSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionZapierZapierSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
  });

  /**
   * List of possible plans for FitliveSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid = Object.freeze({
    /** Advanced */
    ADVANCED: 5,
    /** Basic */
    BASIC: 4,
    /** None */
    FREE: 1,
    /** Professional */
    LICENCED: 2,
    /** Suspended */
    SUSPENDED: 3,
  });

  /**
   * List of possible plans for AiAgentSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid = Object.freeze({
    /** Chat Agent */
    CHAT_AGENT: 4,
    /** Dental Phone Agent */
    DENTAL_PHONE_AGENT: 5,
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
    /** Assistant */
    STANDARD: 3,
  });

  /**
   * List of possible plans for DoorSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionDoorDoorSubscriptionSid = Object.freeze({
    /** Brivo */
    BASE: 2,
    /** None */
    FREE: 1,
    /** Passport */
    PASSPORT: 3,
  });

  /**
   * List of possible plans for FitbuilderSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
  });

  /**
   * List of possible plans for QuizSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionQuizQuizSubscriptionSid = Object.freeze({
    /** Business */
    BUSINESS: 3,
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
    /** Starter */
    STARTER: 4,
  });

  /**
   * List of possible plans for ZoomSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionZoomZoomSubscriptionSid = Object.freeze({
    /** Basic */
    BASIC: 2,
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 3,
  });

  /**
   * List of possible plans for FinanceSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
  });

  /**
   * List of possible plans for FitvidSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid = Object.freeze({
    /** Basic */
    BASIC: 2,
    /** Enterprise */
    ENTERPRISE: 3,
    /** None */
    FREE: 1,
    /** Premium */
    PREMIUM: 4,
  });

  /**
   * List of possible plans for FitzoneSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
  });

  /**
   * List of possible plans for PostcardSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid = Object.freeze({
    /** Basic */
    BASIC: 3,
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
  });

  /**
   * List of possible plans for ReviewSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionReviewReviewSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
  });

  /**
   * List of possible plans for RewardSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionRewardRewardSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
  });

  /**
   * List of possible plans for WebsiteSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid = Object.freeze({
    /** Basic */
    BASIC: 2,
    /** Basic */
    BASIC_LARGE: 6,
    /** Enterprise */
    ENTERPRISE: 4,
    /** None */
    FREE: 1,
    /** Premium */
    PREMIUM: 3,
    /** Premium (Business Max) */
    PREMIUM_MAX: 7,
    /** Professional */
    PROFESSIONAL: 5,
  });

  /**
   * List of possible plans for AssetSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionAssetAssetSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Professional */
    PROFESSIONAL: 2,
  });

  /**
   * List of possible plans for ApiSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionApiApiSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Premium */
    PREMIUM: 2,
  });

  /**
   * List of possible plans for GoHighLevelSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid = Object.freeze({
    /** Standard */
    BASIC: 2,
    /** Free */
    FREE: 1,
  });

  /**
   * List of possible plans for EmailSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionEmailEmailSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Standard */
    STANDARD: 2,
  });

  /**
   * List of possible plans for ConstantContactSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Standard */
    STANDARD: 2,
  });

  /**
   * List of possible plans for MailchimpSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid = Object.freeze({
    /** None */
    FREE: 1,
    /** Standard */
    STANDARD: 2,
  });

  /**
   * List of possible plans for BusinessCoachSubscription subscription.
   *
   * @enum {number}
   */
  WlClient.WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid = Object.freeze({
    /** Business Success Coaching */
    BUSINESS_SUCCESS_COACHING: 2,
    /** No subscription */
    FREE: 1,
  });

  /**
   * List of options to add client to attendance list.
   *
   * @enum {number}
   */
  WlClient.WlLoginAttendanceAddOptionSid = Object.freeze({
    /** Add client to attendance list and charge his account */
    DEBIT: 2,
    /** Add client to attendance list and pay now */
    PAY: 3,
    /** Add client to attendance list without payment */
    UNPAID: 1,
  });

  /**
   * List of options to convert promotion.
   *
   * @enum {number}
   */
  WlClient.WlPromotionConvertPromotionConvertSid = Object.freeze({
    /** Promotion conversion downgraded */
    DOWNGRADE: 1,
    /** Type of the promotion conversion */
    EQUAL_VALUE: 2,
    /** Promotion conversion upgraded */
    UPGRADE: 3,
  });

  /**
   * Different types of conversion behavior: when and how it should be converted.
   *
   * @enum {number}
   */
  WlClient.WlLoginPromotionConvertConvertWhenSid = Object.freeze({
    /** Purchase Option converts one day after the scheduled expiration date and the client is charged for the new purchase option */
    EXPIRATION_PAID: 1,
    /** Purchase Option converts now and the client is not charged for the new Purchase Option */
    NOW_FREE: 2,
    /** Purchase Option converts now and the client is changed for the new Purchase Option */
    NOW_PAID: 3,
    /** Purchase Option converts on the specified date and the client is charged for the new Purchase Option */
    SCHEDULE_PAID: 4,
  });

  /**
   * Guest Pass reset type.
   *
   * @enum {number}
   */
  WlClient.WlPromotionGuestPassGuestPassResetTypeSid = Object.freeze({
    /** Limits reset on promotion billing day */
    BILLING: 1,
    /** Limits reset on promotion renewal day */
    RENEWAL: 2,
  });

  /**
   * List of places to redirect user from attendance list after inactivity.
   *
   * @enum {number}
   */
  WlClient.WlReceptionRosterDirectSid = Object.freeze({
    /** Redirect user to recently viewed class */
    RECENT: 1,
    /** Redirect user to upcoming schedule */
    SCHEDULE: 2,
  });

  /**
   * Appointment display option.
   *
   * @enum {number}
   */
  WlClient.WlScheduleDesignOptionSid = Object.freeze({
    /** Appointment name in header */
    APPOINTMENT_NAME: 1,
    /** Client name in header */
    CLIENT_NAME: 3,
    /** Staff name in header */
    STAFF_NAME: 2,
  });

  /**
   * List of checks that are performed before session book.
   *
   * @enum {number}
   */
  WlClient.WlBookProcessProcessCheckSid = Object.freeze({
    /** Check that a client has a credit card */
    CARD: 1,
    /** Check a client has no unsigned waiver */
    WAIVER: 2,
  });

  /**
   * The list of possible actions for class modify wizard.
   *
   * @enum {number}
   */
  WlClient.RsClassModifyActionSid = Object.freeze({
    /** Cancel class schedule */
    CANCEL: 2,
    /** Change class schedule */
    EDIT: 1,
    /** Restore cancelled schedule */
    RESTORE: 3,
  });

  /**
   * The list of possible modify mode for class modify wizard.
   *
   * @enum {number}
   */
  WlClient.RsClassModifyModeSid = Object.freeze({
    /** Edit class schedule */
    FULL: 1,
    /** Edit instructor in class schedule */
    INSTRUCTOR: 2,
    /** Asset working hours */
    RESOURCE_PERIOD: 4,
    /** Staff working hours */
    STAFF_PERIOD: 3,
  });

  /**
   * A list of client booking flow types.
   *
   * @enum {number}
   */
  WlClient.WlServiceServiceBookFlowSid = Object.freeze({
    /** Client selects the date and time and then the staff member */
    DATE_STAFF_ORDER: 2,
    /** Client selects their preferred booking order should be staff member / calendar */
    PREFER_ORDER: 3,
    /** Client selects the staff member and then the date and time */
    STAFF_DATE_ORDER: 1,
  });

  /**
   * A list of client booking flow types.
   *
   * @enum {number}
   */
  WlClient.RsServiceRequireSid = Object.freeze({
    /** Some part of the price is required. Type of the deposit can be flat or percentage */
    ADVANCE: 4,
    /** Full payment is required */
    FULL: 2,
    /** Nothing is required */
    NOTHING: 1,
    /** Clients can book, but online purchase is not available */
    OFFLINE: 6,
    /** Credit card authorisation without payment is required */
    ZERO: 5,
  });

  /**
   * List of possible ways to solve a conflict.
   *
   * @enum {number}
   */
  WlClient.RsAppointmentEditConflictSid = Object.freeze({
    /** Create an event with other staff, date or time */
    EDIT: 3,
    /** Ignore this conflict and create event as it is */
    IGNORE: 1,
    /** Do not create conflicted event */
    SKIP: 2,
  });

  /**
   * List of user roles in a system.
   *
   * @enum {number}
   */
  WlClient.WlLoginLoginRoleSid = Object.freeze({
    /** Admin role */
    ADMIN: 1,
    /** Client role */
    CLIENT: 2,
    /** Guest role. User that is not logged in */
    GUEST: 3,
    /** Staff member role */
    STAFF: 4,
  });

  /**
   * A list of service price types.
   *
   * @enum {number}
   */
  WlClient.RsServicePriceSid = Object.freeze({
    /** Fixed price */
    FIXED: 1,
    /** No need to pay */
    FREE: 2,
    /** Hide price */
    HIDE: 4,
    /** Various price */
    VARIES: 3,
  });

  /**
   * List of different OTP code delivery strategies.
   *
   * @enum {number}
   */
  WlClient.WlPassportLoginEnterOtpDeliveryStrategyEnum = Object.freeze({
    /** OTP code is sent to all given communication channels (sms, emails, etc.) */
    BROADCAST: 1,
    /** OTP code is sent to the first communication channel that is available, according to the given list of priorities */
    PRIORITY: 2,
  });

  /**
   * Purchase restrictions.
   *
   * @enum {number}
   */
  WlClient.WlShopProductPurchaseRestrictionSid = Object.freeze({
    /** Purchase option available for all clients */
    ALL: 1,
    /** Purchase option introductory offer, available for new clients only */
    INTRODUCTORY: 2,
    /** Purchase option available for clients with special login type or member group */
    TYPE: 3,
  });

  /**
   * Mobile applications categories which will be displayed in select tag.
   *
   * @enum {number}
   */
  WlClient.WlSkinApplicationResourceApplicationCategorySid = Object.freeze({
    /** Mobile applications with content related to the sphere of cosmetology and appearance */
    BEAUTY: 1,
    /** Mobile applications with content related to the sphere of Business and finance */
    BUSINESS: 2,
    /** Mobile applications with content related to the sphere education */
    EDUCATION: 3,
    /** Mobile applications with content related to the sphere entertainment */
    ENTERTAINMENT: 4,
    /** Mobile applications with content related with various events */
    EVENTS: 5,
    /** Mobile applications with content related to the sphere health, sport and fitness */
    HEALTH_AND_FITNESS: 6,
    /** Mobile applications with content related to the life style */
    LIFESTYLE: 7,
    /** Mobile applications with content related to the sphere health, and medical services */
    MEDICAL: 8,
    /** Mobile applications with content related with various social events */
    SOCIAL: 9,
    /** Mobile applications with content related with various sports events */
    SPORTS: 10,
    /** Mobile applications with content for performing certain tasks */
    TOOLS: 11,
    /** Mobile applications with content related to the sphere of travel and geography */
    TRAVEL_AND_LOCAL: 12,
  });

  /**
   * Enum for application update types used in Google Play and Apple Store releases.
   *
   * @enum {number}
   */
  WlClient.WlSkinApplicationUpgradeAppUpdateTypeEnum = Object.freeze({
    /** Patch update (1) - for small bug fixes or improvements */
    PATCH: 1,
    /** Minor update (2) - for backward-compatible feature additions */
    MINOR: 2,
    /** Major update (3) - for incompatible API changes or major new features */
    MAJOR: 3,
  });

  /**
   * A list of card types.
   *
   * @enum {number}
   */
  WlClient.WlCardCardSystemSid = Object.freeze({
    /** American Express */
    AMERICAN_EXPRESS: 1,
    /** Bank of Montreal (BMO) */
    BMO: 2,
    /** Canadian Imperial Bank of Commerce (CIBC) */
    CIBC: 3,
    /** Diners Club International */
    DINNER_CLUB: 4,
    /** Discover */
    DISCOVER: 5,
    /** HSBC Bank Canada */
    HSBC_CANADA: 6,
    /** Japan Credit Bureau (JCB) */
    JCB: 7,
    /** Mastercard */
    MASTERCARD: 8,
    /** Royal Bank of Canada */
    ROYAL_BANK: 9,
    /** Scotiabank */
    SCOTIBANK: 10,
    /** TD Canada Trust */
    TD_CANADA: 11,
    /** The card system can't be determined */
    UNDEFINED: 13,
    /** Union Pay */
    UNION_PAY: 14,
    /** Visa */
    VISA: 12,
  });

  /**
   * A list of modes in which payment form can be shown.
   *
   * @enum {number}
   */
  WlClient.RsPayModeSid = Object.freeze({
    /** The form is show in the mobile device */
    MOBILE: 2,
    /** A form is shown in a simple mode */
    SIMPLE: 3,
    /** A form is shown in the web browser */
    WEB: 1,
  });

  /**
   * A list of bank account types.
   *
   * @enum {number}
   */
  WlClient.RsPayBankSid = Object.freeze({
    /** Bank account for ACH direct bank transactions. USA-specific system */
    ACH: 2,
    /** A credit card */
    CARD: 1,
    /** Bank account for Direct Entry direct bank transactions.  Australian-specific system */
    DIRECT_ENTRY: 3,
  });

  /**
   * A list of SEC codes which can be chosen.
   *
   * @enum {number}
   */
  WlClient.RsPayBankAchSecSid = Object.freeze({
    /** Corporate bank account */
    CCD: 4,
    /** Prearranged Payment & Deposit */
    PPD: 2,
    /** Telephone Initiated Entry */
    TEL: 3,
    /** Web Initiated Entry */
    WEB: 1,
  });

  /**
   * Lifecycle state of a guest pass invitation.
   *
   * @enum {number}
   */
  WlClient.WlLoginPromotionGuestPassInviteInviteStatusEnum = Object.freeze({
    /** Guest attended the visit booked with the guest pass */
    ATTEND: 9,
    /** Guest booked the visit booked with the guest pass */
    BOOK: 8,
    /** Guest cancelled the visit early (without penalty). Pass is returned to the host's */
    EARLY_CANCELLED: 10,
    /** Guest attended the visit booked with the guest pass */
    CHECKED_IN: 3,
    /** Guest accepted the invitation but did not attend within the pass expiration */
    GUEST_PASS_EXPIRED: 6,
    /** Guest claimed the invitation but the linked visit (if any) has not been */
    INVITE_ACCEPTED: 2,
    /** Invitation expired before the guest claimed it. Pass returns to the host's */
    INVITE_EXPIRED: 7,
    /** Invitation has been sent but the guest has not claimed it yet. Pass is held */
    INVITE_SENT: 1,
    /** Guest cancelled the visit too late and was penalised. Pass is consumed and */
    LATE_CANCELLED: 5,
    /** Guest accepted the invitation but did not show up for the visit. Pass is */
    NO_SHOW: 4,
    /** Guest has a visit linked to the guest pass, but its outcome (attended, no-show, */
    PENDING: 12,
    /** Guest is on the waitlist for the class session booked with the guest pass */
    WAITLISTED: 11,
  });

  return WlClient;
});
