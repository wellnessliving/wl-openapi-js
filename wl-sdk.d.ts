export interface WlClientOptions {
    /** JWT Bearer token for authentication. */
    token?: string;
    /** API server base URL. Default: 'https://staging.wellnessliving.com' (US). */
    baseUrl?: string;
    /** Request timeout in milliseconds. Default: 30000. */
    timeout?: number;
}
export interface WlApiErrorDetail {
    /** HTML-escaped error message. */
    html_message: string;
    /** Error code, or null if not applicable. */
    id: number | null;
    /** Field name associated with this error, if any. */
    s_field: string;
}
export declare class WlApiError extends Error {
    readonly status: number;
    readonly errors: WlApiErrorDetail[];
    constructor(status: number, body: unknown);
}
export interface ThothExplorerSearchClassSessionClassSessionSearchParams {
    /** List of business keys to search by. */
    a_business: Array<string>;
    /** List of experience types to search by. Each value is one of [ClassSessionExperienceTypeEnum](#/co... */
    a_experience_type: Array<number>;
    /** List of home tour activity types to search by. Each value is from [RsHomeTourSid](#/components/sc... */
    a_home_tour: Array<number>;
    /** List of location keys to search by. */
    a_location: Array<string>;
    /** List of location ratings to search by. Values are integers from 1 to 5, or `null`/`0` for unrated... */
    a_location_rating: Array<number> | Array<string>;
    /** List of staff user keys to search by. Each value is a user key (uid) of a staff member. */
    a_staff_uid: Array<string>;
    /** Start date of the session search date range in MySQL format (`Y-m-d`). Required. */
    dl_begin?: string | null;
    /** End date of the session search date range in MySQL format (`Y-m-d`). Required. */
    dl_end?: string | null;
    /** Latitude coordinate for search. Required. */
    f_latitude?: number | null;
    /** Longitude coordinate for search. Required. */
    f_longitude?: number | null;
    /** Search radius in kilometers. Required. */
    f_radius?: number | null;
    /** Maximum price to search by (inclusive). Decimal string in dollars (e.g. `&quot;100.00&quot;`). */
    m_price_max?: string | null;
    /** Minimum price to search by (inclusive). Decimal string in dollars (e.g. `&quot;0.00&quot;`). */
    m_price_min?: string | null;
}
export interface ThothExplorerSearchClassSessionClassSessionSearchResponse {
    a_class_session: Array<{
        /** Date and time when booking for this session starts in UTC. `null` if there is no "too early" limi... */
        dtu_book_begin: string | null;
        /** Date and time when booking for this session ends in UTC. `null` if there is no "too late" limitat... */
        dtu_book_end: string | null;
        /** Date and time of the session in UTC. */
        dtu_session: string;
        /** Class key. */
        k_class: string;
        /** Class period key. */
        k_class_period: string;
        /** Class session key. */
        k_class_period_session: string;
    }>;
}
export type ThothReportCoreGeneratorQueryParams = Record<string, unknown>;
export interface ThothReportCoreGeneratorQueryResponse {
    /** A list of dynamic fields in this report. */
    a_dynamic: Array<Array<unknown>> | Array<{
        a_cell: Array<Record<string, unknown>>;
        a_customization_element: Array<Array<unknown>>;
        a_type: Array<unknown>;
        is_dynamic: boolean;
        is_export?: boolean | null;
        is_hide_by_default: boolean;
        is_hide_if_empty: boolean;
        is_null: boolean;
        is_order?: boolean | null;
        is_show: boolean;
        is_store: boolean;
        s_cast?: string | null;
        s_class?: string | Record<string, unknown> | null;
        s_class_css: string;
        s_format?: string | null;
        s_name: string;
        s_sort: string;
        s_type: string;
        text_title?: string | null;
        text_title_export?: string | null;
        text_title_info?: string | null;
    }>;
    /** A list of fields in this report. */
    a_field: Array<string>;
    /** Report data. */
    a_row: Array<Array<string>>;
    /** A list of stale rows. */
    a_stale: Array<number>;
    /** Warning list of the report. */
    a_warning: Array<string>;
    /** Date and time when this report has completed generation. */
    dtu_complete: string;
    /** Date and time when this report was put on generation queue. */
    dtu_queue: string;
    /** Date and time when generation of this report has started. */
    dtu_start: string;
    /** A CAS (compare-and-swap) number that allows to track changes in the report storage. */
    i_cas_change: number;
    /** Lists statuses of reports from point of view of its generation. */
    id_report_status: number;
    /** Key of this report. */
    s_report: string;
    /** Text of an error message that occurred during generation of the report. */
    text_error: string;
}
export interface ThothWlPayAccountAccountParams {
    /** If `true`, information for the account's owner is returned. Clients can be configured to pay for ... */
    is_owner: boolean;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface ThothWlPayAccountAccountResponse {
    a_account: Array<{
        /** A list of currencies. */
        id_currency: number;
        /** Key of account currency. Primary key in RsCurrencySql table. */
        k_currency: string;
        /** ID of payment account. Primary key in RsPayAccountSql table. `null` if this is a user account bas... */
        k_pay_account: string | null;
        /** ID of custom payment method. `null` if this is a user account based on system payment method. Pri... */
        k_pay_method: string | null;
        /** Account balance. */
        m_rest: string;
        /** Name of a custom payment method. `null` if this is a user account based on system payment method. */
        s_method: string | null;
    }>;
    /** A list of accounts that is not created for this user yet. */
    a_account_nx: Array<Array<unknown>>;
    /** Determines whether the user is a debtor. If `true` - the owner of this account is a debtor. */
    is_debtor: boolean;
}
export interface ThothWlPayFormEnvironmentUserParams {
    /** The key of the business to retrieve payment information for. */
    k_business: string;
    /** The key of the currency to retrieve payment information for. */
    k_currency: string;
    /** The key of the location to retrieve payment information for. */
    k_location: string;
    /** The user ID to retrieve payment information for. Primary key in the PassportLoginSql table. */
    uid_owner?: string | null;
}
export interface ThothWlPayFormEnvironmentUserResponse {
    /** A list of supported bank card systems. */
    a_card_system: Array<number>;
    /** A list of payment methods enabled for staff members. The ID is one of [RsPayMethodSid](#/componen... */
    a_method_staff: Array<number>;
    a_method_support: Array<{
        /** A list of payment methods. */
        id_pay_method: number;
        /** Determines whether this method is available for clients. This field is only returned for custom p... */
        is_client?: boolean;
        /** The key of the custom payment method. */
        k_pay_method: string | null;
        /** The name of payment method. This field is only returned for custom payment methods. */
        s_method?: string;
    }>;
    /** The configuration array that's sent to mobile card reader plugin. */
    a_mobile_config: Array<unknown> | null;
    a_pay_processor: Array<{
        /** Public keys configured for this payment processor. */
        a_public_keys: Array<unknown> | null;
        /** Public info configured for this payment processor. */
        a_public_info: Array<unknown> | null;
        /** Whether `save payment method` option should be hidden. `true` if hidden, `false` - otherwise. */
        hide_save_source: boolean;
        /** A list of payment gateways or processors. */
        id_pay_processor: number;
        /** `true` if 3DS should be performed, `false` if 3DS should not be performed. `null` if this is not ... */
        is_enabled_3ds: boolean | null;
        /** `true` if the merchant is in a test mode, `false` otherwise. */
        is_test: boolean | null;
        /** Key of the business merchant. Primary key in RsBusinessMerchantSql. */
        k_business_merchant: string;
    }> | null;
    /** Current local date in current location [EnvironmentApi](/Thoth/WlPay/Form/Environment.json) */
    dl_now: string;
    /** Surcharge amount for payment with card represented as a percent of transaction amount. */
    f_surcharge: string | null;
    /** Surcharge amount for payment with ACH represented as a percent of transaction amount. */
    f_surcharge_ach: string | null;
    /** A list of locales. */
    id_locale: number | null;
    /** `true` if clients can choose whether their banking and credit card information is saved at checkout, */
    is_save_optional: boolean;
    /** Determines whether newly added payment sources should be saved. This will be `true` if payment so... */
    is_save_source: boolean;
    /** Whether tips are accepted. */
    is_tip: boolean;
    /** Surcharge amount for payment with card represented as a fixed amount. */
    m_surcharge: string | null;
    /** Surcharge amount for payment with ACH represented as a fixed amount. */
    m_surcharge_ach: string | null;
}
export interface ThothWlPayFormEnvironmentParams {
    /** The key of the business to retrieve payment information for. */
    k_business: string;
    /** The key of the currency to retrieve payment information for. */
    k_currency: string;
    /** The key of the location to retrieve payment information for. */
    k_location: string;
    /** The user ID to retrieve payment information for. Primary key in the PassportLoginSql table. */
    uid_owner?: string | null;
}
export interface ThothWlPayFormEnvironmentResponse {
    /** A list of supported bank card systems. */
    a_card_system: Array<number>;
    /** A list of payment methods enabled for staff members. The ID is one of [RsPayMethodSid](#/componen... */
    a_method_staff: Array<number>;
    a_method_support: Array<{
        /** A list of payment methods. */
        id_pay_method: number;
        /** Determines whether this method is available for clients. This field is only returned for custom p... */
        is_client?: boolean;
        /** The key of the custom payment method. */
        k_pay_method: string | null;
        /** The name of payment method. This field is only returned for custom payment methods. */
        s_method?: string;
    }>;
    /** The configuration array that's sent to mobile card reader plugin. */
    a_mobile_config: Array<unknown> | null;
    a_pay_processor: Array<{
        /** Public keys configured for this payment processor. */
        a_public_keys: Array<unknown> | null;
        /** Public info configured for this payment processor. */
        a_public_info: Array<unknown> | null;
        /** Whether `save payment method` option should be hidden. `true` if hidden, `false` - otherwise. */
        hide_save_source: boolean;
        /** A list of payment gateways or processors. */
        id_pay_processor: number;
        /** `true` if 3DS should be performed, `false` if 3DS should not be performed. `null` if this is not ... */
        is_enabled_3ds: boolean | null;
        /** `true` if the merchant is in a test mode, `false` otherwise. */
        is_test: boolean | null;
        /** Key of the business merchant. Primary key in RsBusinessMerchantSql. */
        k_business_merchant: string;
    }> | null;
    /** Current local date in current location [EnvironmentApi](/Thoth/WlPay/Form/Environment.json) */
    dl_now: string;
    /** Surcharge amount for payment with card represented as a percent of transaction amount. */
    f_surcharge: string | null;
    /** Surcharge amount for payment with ACH represented as a percent of transaction amount. */
    f_surcharge_ach: string | null;
    /** A list of locales. */
    id_locale: number | null;
    /** `true` if clients can choose whether their banking and credit card information is saved at checkout, */
    is_save_optional: boolean;
    /** Determines whether newly added payment sources should be saved. This will be `true` if payment so... */
    is_save_source: boolean;
    /** Whether tips are accepted. */
    is_tip: boolean;
    /** Surcharge amount for payment with card represented as a fixed amount. */
    m_surcharge: string | null;
    /** Surcharge amount for payment with ACH represented as a fixed amount. */
    m_surcharge_ach: string | null;
}
export interface ThothWlPayMethodListParams {
    /** Whether only active payment methods should be returned. */
    is_active: boolean;
    /** The business key. */
    k_business: string;
    /** Whether payment method [RsPayMethodSid::ACCOUNT_MANUAL](#/components/schemas/RsPayMethodSid) shou... */
    show_manual: boolean;
    /** The key of a user to show information for. */
    uid: string;
}
export interface ThothWlPayMethodListResponse {
    a_pay_method: Array<{
        /** A list of payment methods. */
        id_pay_method: number;
        /** Payment method key. Primary key int the MethodSql table. */
        k_pay_method: string | null;
        /** The payment method name. */
        s_title: string;
    }>;
}
export interface ThothWlPayOwnerOwnerParams {
    /** Key of a user to show information for. */
    uid: string;
    /** Business key. */
    k_business?: string | null;
}
export interface ThothWlPayOwnerOwnerResponse {
    /** A list of money owners from which account money can be transferred. */
    id_pay_owner: number;
    /** The payment owner key. This is used for financial transactions. */
    k_pay_owner: string;
    /** Key of the money owner. */
    k_pay_owner_money: string;
}
export interface ThothWlPayAddressAddressParams {
    /** The ID of the payment owner type. */
    id_pay_owner: number;
    /** Business key, where the payment is performed. */
    k_business: string;
    /** The primary key of a payment owner. */
    k_id: string;
}
export interface ThothWlPayAddressAddressResponse {
    /** The payee's address information. */
    a_pay_address: Array<unknown>;
}
export interface ThothWlPayAddressProfileParams {
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** The key of the user whose data should be retrieved. */
    uid: string;
}
export interface ThothWlPayAddressProfileResponse {
    /** The country key. */
    k_geo_country: string | null;
    /** The region ID. */
    k_geo_region: string | null;
    /** The name of the city in the address. */
    s_city: string | null;
    /** The client name as listed in their address. */
    s_name: string | null;
    /** The client phone number. */
    s_phone: string | null;
    /** The client postal or zip code. */
    s_postal: string | null;
    /** The first line of the client address. */
    s_street1: string | null;
    /** The second line of the client address. */
    s_street2: string | null;
}
export interface CoreRequestExampleParams {
    /** Example argument. */
    i_argument: number;
}
export interface CoreRequestExampleResponse {
    /** Example result. */
    i_result: number;
    /** Key of the log record written by the API controller. */
    s_log: string;
}
export interface CoreGeoComboboxParams {
    /** The locale ID used as a filter. The locale is generally a country. */
    id_locale: number | null;
    /** The city name (or a fragment of the city name) used for the search. */
    s_value: string;
}
export interface CoreGeoComboboxResponse {
    a_list: Array<{
        /** The human-readable name of the city, including the state/province and country. */
        s_value: string;
        /** The `k_city` value for the city. */
        s_key: string;
    }>;
}
export type CoreGoogleGoogleCaptchaParams = Record<string, unknown>;
export type CoreGoogleGoogleCaptchaResponse = Record<string, unknown>;
export type CoreWebSocketSubscribeParams = Record<string, unknown>;
export interface CoreWebSocketSubscribeResponse {
    a_message_broadcast: Array<{
        /** A CAS (compare-and-swap) number that allows to track changes in the report storage. */
        i_cas_change: number;
        /** Lists statuses of reports from point of view of its generation. */
        id_report_status: number;
    } | {
        /** Key of a book/visit. */
        k_visit: string;
    } | {
        /** New information for messenger. */
        a_data: Record<string, unknown>;
    } | {
        /** Business key. */
        k_business: string | null;
    } | {
        /** Url link to redirect to join virtual meeting. */
        url_redirect: string;
    } | {
        /** Number of overdue tasks. */
        i_overdue: number;
        /** A list of task statuses. */
        id_task_status: number;
        /** Key of the changed task. */
        k_task: string;
    } | {
        /** The count with unread alert for the user. */
        i_unread_alert: number;
        /** Whether message is active. This is needed to avoid showing previous messages on page reload. */
        is_active: boolean;
        /** Whether this is an alert for an SMS message */
        is_message: boolean;
        /** Whether the user should hear a sound when a notification is sent. */
        is_sound: boolean;
        /** Key of the alert that was just sent. */
        k_alert: string | null;
    } | {
        /** A class for a list of card systems. */
        id_card_system: number;
        /** Transaction exception ID. */
        id_pay_exception: number | null;
        /** Paragon ticket status. */
        id_ticket_status: number | null;
        /** Amount of tips entered by customer on terminal. */
        m_tip: string;
        /** Cardholder name. */
        s_card_holder: string | null;
        /** Card expiration date. */
        s_expire: string | null;
        /** Last four digits of the card number. */
        s_last4: string | null;
        /** Text message to notify the client. */
        text_message: string | null;
    } | {
        /** New title of the business. */
        text_title: string;
    } | {
        /** End of change interval. */
        dt_end_local: string;
        /** Start of change interval. */
        dt_start_local: string;
        /** New "Book now" tab primary key in [TabSid](#/components/schemas/Wl.Classes.Tab.TabSid) table. */
        k_class_tab_new: string | null;
        /** Old "Book now" tab primary key in [TabSid](#/components/schemas/Wl.Classes.Tab.TabSid) table. */
        k_class_tab_old: string | null;
    } | {
        /** Session end date/time. */
        dtl_end: string;
        /** Session start date/time. */
        dtl_start: string;
        /** Key of the changed appointment. */
        k_appointment: string | null;
        /** Key of the changed class session. */
        k_class_period: string | null;
    } | {
        /** Whether message is active. This is needed to avoid showing previous messages on page reload. */
        is_active: boolean;
        /** Whether booking is in progress. */
        is_booking_in_progress: boolean | null;
    } | {
        /** New data of changes schedule item: */
        a_visit: Record<string, unknown>;
    } | Record<string, unknown> | {
        /** Number of successfully processed items. */
        i_complete: number;
        /** Number of failed items. */
        i_fail: number;
        /** Number of items left to process. */
        i_left: number;
        /** Key of the import being processing. */
        k_import: string;
        /** Url link to download log file with import progress. */
        url_log: string;
    } | {
        /** The text of the error. */
        html_error_message: string;
        /** The unique key of the sent SMS. */
        s_key: string;
        /** The time in UNIX format when socket message was sent. */
        tl_send: number;
    } | {
        /** Duration of the generation of the report in seconds. */
        i_generation: number;
        /** A list of reports. */
        id_report: number;
        /** Whether need to display a message about report generation, regardless of the generation time. */
        is_need_show: boolean;
        /** Report accumulation. */
        k_report_accumulation: string;
        /** Title of the report that was generated. */
        text_report: string;
    } | {
        /** List of email domain tokens: */
        a_domain_token: Record<string, unknown>;
        /** Statuses of domain verification. */
        id_domain_status: number;
        /** CSS class for the icon representing the email domain status. */
        text_domain_status_icon: string;
    } | {
        /** Statuses of mail verification. Based on statuses that returns Amazon SES API. */
        id_mail_verify_status: number;
        /** Email address to check. */
        text_email: string;
    } | {
        /** Key of the client type. */
        k_login_type: string | null;
        /** Key of the user. */
        uid: string;
    } | {
        /** A class for a list of card systems. */
        id_card_system: number;
        /** An enum of credit card types. */
        id_card_type: number | null;
        /** Transaction exception ID. */
        id_pay_exception: number | null;
        /** CS Response code class. */
        id_payment_status: number | null;
        /** Tip amount entered by the customer at the terminal. */
        m_tip: string | null;
        /** Last four digits of the card number. */
        s_last4: string | null;
        /** Cardholder name. */
        text_card_holder: string | null;
        /** Text message to notify the client. */
        text_message: string | null;
    } | {
        /** The count with unread SMS in the business. */
        i_unread_sms: number;
    } | {
        /** `true` if the request has been already processed (question window must not be shown); */
        is_close: boolean;
        /** Location key. */
        k_location: string;
        /** Name of the user requesting access. */
        text_full_name: string;
        /** Location title. */
        text_location: string;
        /** Key of user who request access to location. */
        uid_request: string;
    } | {
        /** `true` - access is granted; `false` - denied. */
        is_grant: boolean;
        /** Full name of user-receiver of response. */
        text_full_name: string;
        /** The time in seconds with fractional part in UNIX format when socket message was sent. */
        tu_send: number;
    } | {
        /** `true` if a new assess request has been sent (question window must be not closed); */
        is_inactive: boolean;
    } | {
        /** List of users for which address verification failed. */
        a_invalid: Record<string, unknown>;
        /** List of users for which address verification succeed. */
        a_valid: Record<string, unknown>;
    } | {
        /** An array with information about dialog: */
        a_info: Record<string, unknown>;
        /** The time in UNIX format when socket message was sent. */
        tl_send: number;
    } | {
        /** An array with information about SMS: */
        a_info: Record<string, unknown>;
        /** The unique key of sent SMS from 2-way SMS chat. The key need to update SMS information in the cha... */
        s_key: string;
    } | {
        /** Accumulation process progress. */
        f_progress: number;
    }>;
}
export interface CoreSidCoreSidParams {
    /** Name of the Sid class to get list from. */
    s_class_name: string;
}
export interface CoreSidCoreSidResponse {
    a_list: Array<{
        /** String ID. */
        sid: number;
        /** Title of the ID. */
        text_title: string;
    }>;
}
export interface CoreCaptchaCaptchaRequireParams {
    /** Arguments for creating CAPTCHA object. */
    a_arguments: Array<{
        /** Business key. `null` if system business. */
        k_business: string | null;
    } | {
        /** Business key. `null` if is system business. */
        k_business: string | null;
    } | Record<string, unknown> | {
        /** Flag to determine is it a search action or no. If search action is `true` it increments */
        is_search: boolean;
    }>;
    /** The CID of the CAPTCHA. */
    cid_captcha: number;
}
export interface CoreCaptchaCaptchaRequireResponse {
    /** `true` if enabled V3 captcha enabled. */
    is_enable_v3: boolean;
    /** This will be `true` if a CAPTCHA is required. Otherwise, this will be `false`. */
    is_require: boolean;
}
export interface SocialMicrosoftLoginDeleteParams {
    /** The client for whom the Microsoft account will be unlinked. */
    uid: string;
}
export type SocialMicrosoftLoginDeleteResponse = Record<string, unknown>;
export interface SocialMicrosoftLoginGetParams {
    /** The client for whom the Microsoft account will be unlinked. */
    uid: string;
    /** The Redirect URI for external applications. */
    url_redirect: string;
}
export interface SocialMicrosoftLoginGetResponse {
    /** If `true`, the user has a bound Microsoft account. Otherwise, this will be `false`. */
    is_exists: boolean;
    /** The Microsoft OAuth 2.0 authorization link. */
    url_login: string;
}
export interface SocialMicrosoftLoginPostParams {
    /** If authorization is performed in a third-party application, set this flag in case of authorizatio... */
    is_external: boolean;
    /** The Redirect URI for external applications. */
    url_redirect: string;
}
export type SocialMicrosoftLoginPostResponse = Record<string, unknown>;
export interface WlScheduleCancelGetParams {
    /** The date of the session in UTC. */
    dt_date: string;
    /** This will be `true` if the API is being used from the back end. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** `true` is late cancel, `false` reservation is not late cancel. */
    is_late_cancel: boolean;
    /** Key of the business within which the action is performed. */
    k_business: string;
    /** The user key. */
    uid: string;
    /** The appointment key. */
    k_appointment?: string | null;
    /** The class period key. */
    k_class_period?: string | null;
}
export type WlScheduleCancelGetResponse = Record<string, unknown>;
export interface WlScheduleCancelPostParams {
    /** The date of the session in UTC. */
    dt_date: string;
    /** This will be `true` if the API is being used from the back end. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** `true` is late cancel, `false` reservation is not late cancel. */
    is_late_cancel: boolean;
    /** Key of the business within which the action is performed. */
    k_business: string;
    /** The user key. */
    uid: string;
    /** The appointment key. */
    k_appointment?: string | null;
    /** The class period key. */
    k_class_period?: string | null;
}
export type WlScheduleCancelPostResponse = Record<string, unknown>;
export interface WlScheduleScheduleAvailableDateParams {
    /** Class keys to filter. */
    a_class: Array<string>;
    /** IDs of week days from [ADateWeekSid](#/components/schemas/ADateWeekSid) class. */
    a_day: Array<number>;
    /** Event keys to filter. */
    a_event: Array<string>;
    /** Location keys to filter. */
    a_location: Array<string>;
    /** Staff member keys to filter. */
    a_staff: Array<string>;
    /** Time interval: */
    a_time: Array<{
        /** End time. */
        tl_end: string;
        /** Start time. */
        tl_start: string;
    }>;
    /** The date/time to start from in UTC. */
    dtu_start: string;
    /** "Book now" tab ID. One of [TabSid](#/components/schemas/Wl.Classes.Tab.TabSid) constants. */
    id_class_tab: number;
    /** `true` to include classes; `false` to exclude. */
    is_class: boolean;
    /** `true` to include events; `false` to exclude. */
    is_event: boolean;
    /** `true` to include only virtual classes; */
    is_virtual: boolean;
    /** Business key. */
    k_business: string;
    /** Timezone key. */
    k_timezone: string;
}
export interface WlScheduleScheduleAvailableDateResponse {
    /** Nearest session date available for booking in user's or business timezone. */
    dl_next_available: string | null;
}
export interface WlVisitVisitStatusGetParams {
    /** The business key. */
    k_business: string;
    /** The visit key. */
    k_visit: string;
    /** The time zone key. */
    k_timezone?: string | null;
}
export interface WlVisitVisitStatusGetResponse {
    a_cancel: Array<{
        /** `null` if penalty must be not applied. */
        a_penalty: {
            /** `true` in a case of flat penalty type; `false` in a case of percentage penalty type. */
            is_flat: boolean;
            /** Currency . */
            k_currency: string;
            /** Penalty amount. */
            m_amount: string;
        } | null;
        /** `true` if the booking can be canceled online by the specified user, `false` otherwise. */
        can_cancel: boolean;
        /** `true` if the client's account will be flagged instead of charging a monetary fee, `false` otherw... */
        is_flag: boolean;
        /** `true` if the cancellation would be considered a late cancel, `false` otherwise. */
        is_late: boolean;
        /** `true` if the visit credit (from the purchase option used to book) will be returned */
        is_refund: boolean;
    }>;
    /** An array of service resources. */
    a_resource: Array<string> | null;
    a_resource_alias: Array<{
        /** Resource . */
        k_resource: string;
        /** Resource type . */
        k_resource_type: string;
        /** Index of the resource on the layout. */
        i_index: number;
        /** Quantity of the resource on the layout. */
        i_quantity: number;
        /** Resource's custom name (alias) on the layout. */
        text_alias: string;
        /** Resource's title. */
        text_title: string;
    }> | null;
    /** The list of keys of staff members that conduct the class. */
    a_staff: Array<string>;
    /** The list of user IDs of staff members that conduct the class. */
    a_uid_staff: Array<string>;
    /** The visit date and time in UTC and in MySQL format. */
    dt_date: string;
    /** The visit date in the location's time zone and in MySQL format. */
    dtl_date: string;
    /** The service duration (in minutes). */
    i_duration: number;
    /** The client's place in a waiting list. */
    i_wait_spot: number;
    /** The source of a visit. */
    id_mode: number;
    /** Possible states of the visit: book, attended, cancelled, etc. */
    id_visit: number;
    /** Determines whether the visit is from an event. */
    is_event: boolean;
    /** Whether this visit is requested and requires staff confirmation. */
    is_request: boolean;
    /** The class key. */
    k_class: string;
    /** The class period key. */
    k_class_period: string;
    /** The key of the location where visit provides. */
    k_location: string;
    /** The service key. */
    k_service: string | null;
    /** The key of the staff providing the appointment. */
    k_staff: string | null;
    /** The .ics file for adding the service to a phone calendar. */
    s_calendar_file_content: string;
    /** The text abbreviation of the time zone. */
    text_abbr_timezone: string;
    /** The full address of the location for the visit (not the name of the location). */
    text_location: string;
    /** The full name of the staff member who conducts this visit. */
    text_staff: string;
    /** The service title. */
    text_title: string;
    /** User key who made a visit. */
    uid: string | null;
    /** The ID of the user who is the staff providing the appointment. */
    uid_staff: string | null;
    /** The direct link to start class/event booking on the WellnessLiving website. */
    url_book_referral: string | null;
    /** The shortened direct link to start class/event booking on the WellnessLiving website. */
    url_book_referral_short: string | null;
    /** URL of virtual service. Empty if the visit is not virtual. */
    url_virtual_service: string;
}
export interface WlVisitVisitStatusPostParams {
    /** The staff decision to charge (or not charge) a penalty when a client meets late cancel/no-show re... */
    is_charge_fee: boolean;
    /** The business key. */
    k_business: string;
    /** The visit key. */
    k_visit: string;
    /** The reason the visit was canceled. */
    text_reason: string;
    /** The email pattern key. */
    k_mail_pattern_live?: string | null;
}
export type WlVisitVisitStatusPostResponse = Record<string, unknown>;
export interface WlLocationListBulkParams {
    /** The ID of the directory if locations should be filtered by enabling directory integration. */
    id_directory: number;
    /** A list of businesses. Business primary keys are serialized with JSON. */
    s_business: string;
    /** A list of locations. Location primary keys are serialized with JSON. */
    s_location: string;
}
export interface WlLocationListBulkResponse {
    a_location: Array<{
        /** The latitude coordinate. */
        f_latitude: number;
        /** The longitude coordinate. */
        f_longitude: number;
        /** The location rate. */
        f_rate: number;
        /** The order number. */
        i_order: number;
        /** The business's primary key. */
        k_business: string;
        /** The location's primary key. */
        k_location: string;
        /** The location title. */
        s_title: string;
        /** The full location address. */
        text_address: string;
        /** The location logo. */
        url_logo?: string;
    }>;
    a_location_full: Array<{
        /** A list of ages that are permitted for visiting this location. */
        a_age: Array<number>;
        /** A list of facilities that are available in this location. */
        a_amenities: Array<number>;
        /** A list of levels that are suitable for visiting this location. */
        a_level: Array<string>;
        /** Information about the location logo used in WellnessLiving: */
        a_logo: {
            /** The image height. */
            i_height: number;
            /** The image width. */
            i_width: number;
            /** The URL to the image. */
            s_url: string;
        };
        /** A list of the location images. */
        a_slide: {
            /** Height. */
            i_height: number;
            /** Width. */
            i_width: number;
            /** URL to image preview. */
            url_preview: string;
            /** URL to full image. */
            url_slide: string;
        };
        /** The hours of operation for the location. */
        a_work: {
            /** The time of day end in MySQL format. */
            s_end: string;
            /** The time of day start in MySQL format. */
            s_start: string;
        };
        /** The date when the location actuality was last checked. `null` if the location has never been chec... */
        dtu_check?: string | null;
        /** The date when the location was created. */
        dtu_create: string;
        /** The latitude coordinate of the location. */
        f_latitude: number;
        /** The longitude coordinate of the location. */
        f_longitude: number;
        /** The full description of the location. */
        html_description_full: string;
        /** A shorter description of the location. A preview of [ViewApi](/Wl/Location/View/View.json). */
        html_description_preview: string;
        /** Maximum location image height. */
        i_logo_height: number;
        /** Maximum location image width. */
        i_logo_width: number;
        /** List of different types for landing pages based on business types. */
        id_industry?: number;
        /** `true` if to display phone number on location page. `false` otherwise. */
        is_phone: boolean;
        /** `true` if WellnessLiving identifies this is a top choice location, `false` otherwise. */
        is_top_choice: boolean;
        /** The key of the business this location belongs to. */
        k_business: string;
        /** The key of the business type this location belongs to. */
        k_business_type: string;
        /** The location key. */
        k_location: string;
        /** The timezone. */
        k_timezone: string;
        /** The physical address of the location. */
        s_address: string;
        /** A string that can be used in navigator programs. */
        s_map: string;
        /** The phone number for the location. */
        s_phone: string;
        /** The system name of the time zone. */
        s_timezone: string;
        /** The title of the location. */
        s_title: string;
        /** The address of the location. */
        text_address_individual: string;
        /** The special system name, which can be used in custom location links. */
        text_alias: string;
        /** The name of the business type. */
        text_business_type: string;
        /** The city name of the location. */
        text_city: string;
        /** The country name of the location. */
        text_country: string;
        /** The name of the industry of the business. */
        text_industry: string;
        /** The email address. */
        text_mail: string;
        /** Postal code of the location. */
        text_postal: string;
        /** The region name of the location. */
        text_region: string;
        /** Region 2 or 3 letters abbreviation of the location. Can be empty, if abbreviation for region is n... */
        text_region_code: string;
        /** The Facebook URL of the location. */
        url_facebook: string;
        /** The Instagram URL of the location. */
        url_instagram: string;
        /** The Linked In URL of the location. */
        url_linkedin: string;
        /** The URL of the location in Google Maps. */
        url_map: string;
        /** The URL to the location entry in the WellnessLiving Explorer listing. */
        url_microsite: string;
        /** The website URL of the location. */
        url_site: string;
        /** The URL of the location's Twitter account. */
        url_twitter: string;
        /** The URL to the business's Client Web App. */
        url_web: string;
        /** The YouTube URL of the location. */
        url_youtube: string;
    }>;
}
export type WlLocationLocationParams = Record<string, unknown>;
export interface WlLocationLocationResponse {
    /** The key of the location. */
    k_location: string | null;
}
export interface WlLocationListParams {
    /** A list of business keys. */
    a_business: Array<string>;
    /** The business key used internally by WellnessLiving. */
    k_business: string;
    /** The primary keys of the selected businesses. */
    s_business: string;
    /** Determines whether removed locations should be returned. */
    show_remove: boolean;
}
export interface WlLocationListResponse {
    a_location: Array<{
        /** List of directories from [RsProjectSid](#/components/schemas/RsProjectSid), where location is pub... */
        a_directories: Array<number>;
        /** Information about location timezone: */
        a_timezone: {
            /** Timezone key. */
            k_timezone: string;
            /** User-friendly short timezone abbreviation, for example 'EST' or 'PST'. */
            text_abbr: string;
            /** Full timezone name, for example 'America/New_York'. */
            text_name: string;
        };
        /** The location latitude. */
        f_latitude: number;
        /** The location longitude. */
        f_longitude: number;
        /** Timezone shift in hours. */
        i_shift: number;
        /** The business key. */
        k_business: string;
        /** Country key. */
        k_country: string;
        /** The location key. */
        k_location: string;
        /** Region key. */
        k_region: string;
        /** The location email address. */
        s_mail: string;
        /** The location phone number. */
        s_phone: string;
        /** The location title. */
        s_title: string;
        /** The location's full address. */
        text_address: string;
        /** The location logo's URL. This will only be set if the location has a logo and contains small thum... */
        url_logo?: string;
        /** The location logo's URL. This will only be set if the location has a logo and contains full uploa... */
        url_logo_source?: string;
    }>;
}
export type WlProfileProfileCreateParams = Record<string, unknown>;
export interface WlProfileProfileCreateResponse {
    /** The key of the user. */
    uid: string;
}
export interface WlEventEventListGetParams {
    /** Defines how the event availability flag filter should be applied. */
    id_flag: number;
    /** Determines whether the endpoint is used for backend mode. */
    is_backend: boolean;
    /** `true` to show even event restricted by booking policies; `false` to show available events only. */
    is_ignore_requirement: boolean;
    /** Determines whether you need to retrieve a list of event sessions regardless of the tab specified ... */
    is_tab_all: boolean;
    /** The class tab key to retrieve a list of event sessions from a specific tab only. */
    k_class_tab: string;
    /** The skin key if an event list is used for widget mode. */
    k_skin: string;
    /** Search string to filter events by name. */
    text_search: string;
    /** List of class keys applied by filter. */
    a_class_filter?: Array<string> | null;
    /** List of day the week applied by filter [ADateWeekSid](#/components/schemas/ADateWeekSid). */
    a_day?: Array<number> | null;
    /** List of enrollment blocks keys applied by filter. */
    a_enrollment_block_filter?: Array<string> | null;
    /** List of location keys applied by filter. */
    a_location?: Array<string> | null;
    /** List of staff keys applied by filter. */
    a_staff?: Array<string> | null;
    /** List of time day applied by filter [RsScheduleTimeSid](#/components/schemas/RsScheduleTimeSid). */
    a_time?: Array<number> | null;
    /** List of IDs to include/exclude virtual events. */
    a_virtual?: Array<string> | null;
    /** The end date of the range from which a list of events should be retrieved. */
    dl_end?: string | null;
    /** The start date of the range from which a list of events should be retrieved. */
    dl_start?: string | null;
    /** The event business key to retrieve a list of all event sessions in business. */
    k_business?: string | null;
    /** The event class key to retrieve a list of all event sessions of a specific class. */
    k_class?: string | null;
    /** The event location key to retrieve a list of all event sessions in a specific location. */
    k_location?: string | null;
    /** The user key. */
    uid?: string | null;
}
export interface WlEventEventListGetResponse {
    /** List of available enrollment blocks matching the requested parameters. */
    a_enrollment_block_list: Array<string>;
    /** A list of events corresponding to requested parameters. */
    a_event_list: Array<{
        a_age_restriction: Array<Record<string, unknown>>;
        a_class_tab: Array<string>;
        a_logo: Array<Record<string, unknown>>;
        a_schedule: Array<Record<string, unknown>>;
        a_search_tag: Array<Record<string, unknown>>;
        can_book: boolean;
        can_cancel: boolean;
        dl_early: string;
        dl_end: string;
        dl_session: string;
        dl_start: string;
        dtu_session: string;
        html_reason: string;
        i_session_all: number;
        i_session_future: number;
        i_session_past: number;
        id_reason: number;
        is_age_restrict: boolean;
        is_age_restrict_only: boolean;
        is_available?: boolean | null;
        is_block: boolean;
        is_book_for_guest: boolean;
        is_bookable: boolean;
        is_booked: boolean;
        is_closed: boolean;
        is_full: boolean;
        is_online: boolean;
        is_online_private: boolean;
        is_open: boolean;
        is_promotion_only: boolean;
        is_prorate: boolean;
        is_single_buy: boolean;
        is_virtual: boolean;
        k_class: string;
        k_class_period: string;
        k_enrollment_block: string;
        k_location: string;
        m_price_max: string;
        m_price_min: string;
        m_price_total: string;
        m_price_total_early: string;
        sid_reason: string;
        text_age_restrict: boolean;
        text_title: string;
        url_book?: string | null;
        xml_description: string;
    }>;
}
export interface WlEventEventListPutParams {
    /** The event business key to retrieve a list of all event sessions in business. */
    k_business?: string | null;
    /** The user key. */
    uid?: string | null;
}
export type WlEventEventListPutResponse = Record<string, unknown>;
export type WlEventEventCancelWholeParams = Record<string, unknown>;
export type WlEventEventCancelWholeResponse = Record<string, unknown>;
export interface WlBusinessDataParams {
    /** The maximum height of the business image (in pixels). */
    i_logo_height: number;
    /** The maximum width of the business image (in pixels). */
    i_logo_width: number;
    /** The business key. */
    k_business: string;
    /** The authorization token. */
    text_token: string;
}
export interface WlBusinessDataResponse {
    /** A list of all business services and their availability data. */
    a_service_list: Array<number>;
    /** The list of predefined tips in percentages. */
    a_tip_predefine: Array<number>;
    /** A list of client booking flow types. */
    id_category: number;
    /** Business status for managing claim request behavior. */
    id_claim_status: number;
    /** A list of currencies. */
    id_currency: number;
    /** A list of locales. */
    id_locale: number | null;
    /** Types of the possible ranks in different business. */
    id_rank_type: number | null;
    /** List of available data center regions. */
    id_region: number;
    /** Determines whether surcharges to client payments are enabled in the business. */
    is_apply_surcharge: boolean;
    /** `true` if business is a franchisor or franchisee. */
    is_franchise: boolean;
    /** Determines whether the business has multiple locations (including inactive locations). */
    is_location_multiple: boolean;
    /** `true` - clients of the business can select a custom time zone in their profile. */
    is_profile_timezone: boolean;
    /** If `true`, clients can enter the progress log. Otherwise, this will be `false`. */
    is_progress_client: boolean;
    /** If `true`, verification of the progress log by a staff member is required. Otherwise, this will b... */
    is_progress_verify: boolean;
    /** Determines whether quizzes are available in the business. */
    is_quiz_available: boolean;
    /** Determines if the business operates in testing mode. */
    is_test: boolean;
    /** If `true`, tips are available in the business. Otherwise, this will be `false`. */
    is_tip: boolean;
    /** If `true`, the business has the "No tip" option displayed. Otherwise, this will be `false`. */
    is_tip_deny: boolean;
    /** If `true`, the client must sign after selecting the tip. Otherwise, this will be `false`. */
    is_tip_sign: boolean;
    /** The franchisor business key. This will be empty if this business is the franchisor or not in a fr... */
    k_business_franchisor: string;
    /** The business key obtained by the security token `text_token`. */
    k_business_token: string;
    /** Key of the business type. */
    k_business_type: string;
    /** The currency key of the given business, or the system currency if the business didn't pass. */
    k_currency: string;
    /** The reply-to email address. */
    s_reply_mail: string;
    /** The reply-to business name. */
    s_reply_name: string;
    /** The business address. */
    text_office_address: string;
    /** The business title. */
    text_title: string;
    /** The URL for the online store. */
    url_catalog: string;
    /** The URL for client sign in. */
    url_enter: string;
    /** The Facebook page. */
    url_facebook: string;
    /** The Google+ page. */
    url_google: string;
    /** URL of the home tour page related to the business type. */
    url_home_tour: string;
    /** The Instagram page. */
    url_instagram: string;
    /** The `LinkedIn` profile. */
    url_linkedin: string;
    /** The logo URL. */
    url_logo: string;
    /** The image stub (in cases where the business logo isn't loaded). */
    url_logo_empty: string;
    /** The URL to redeem gift card. */
    url_redeem: string;
    /** The URL for the client review page. */
    url_review: string;
    /** The URL for the client web app (schedule). */
    url_schedule: string;
    /** The URL for client sign up. */
    url_signup: string;
    /** The Twitter page. */
    url_twitter: string;
    /** The business website. */
    url_website: string;
    /** The YouTube website. */
    url_youtube: string;
}
export type WlBusinessBusinessPostParams = Record<string, unknown>;
export interface WlBusinessBusinessPostResponse {
    /** The key of the business. */
    k_business: string;
    /** The key of the location for update or after creating. */
    k_location: string | null;
    /** The UID of the created staff member or `null` if no staff member should be created. */
    uid: string | null;
    /** Url for password change page. */
    url_password_change: string | null;
}
export type WlBusinessBusinessPutParams = Record<string, unknown>;
export interface WlBusinessBusinessPutResponse {
    /** The key of the business. */
    k_business: string;
    /** The key of the location for update or after creating. */
    k_location: string | null;
    /** The UID of the created staff member or `null` if no staff member should be created. */
    uid: string | null;
    /** Url for password change page. */
    url_password_change: string | null;
}
export interface WlBusinessBusinessAccessParams {
    /** This will be `true` if the API is being used from the backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The staff member's Facebook ID. This won't be empty if the staff member is logging in with Facebook. */
    s_facebook_id: string;
    /** The staff member's Microsoft key. */
    s_microsoft_id: string;
    /** The staff member's Apple authorization code. This won't be empty if the staff member is logging i... */
    text_authorization_apple: string;
    /** The Google Plus user ID. This won't be empty if the staff member is logging in with Google. */
    text_google_plus: string;
    /** The staff member's email to determine their UID. This won't be empty if the staff member is loggi... */
    text_mail: string;
    /** User key. Empty if user is not logged in, but their authorization data is known. */
    uid: string;
}
export interface WlBusinessBusinessAccessResponse {
    /** The businesses the staff member belongs to. */
    a_business: Array<string>;
    a_business_data: Array<{
        /** List of available data center regions. */
        id_region: number;
        /** The business key. */
        k_business: string;
        /** The business address. */
        text_office_address: string;
        /** The business title. */
        text_title: string;
        /** The business logo URL. This will be empty if the business hasn't added a logo. */
        url_logo: string;
    }>;
    /** The staff member key, determined by their email. This will be empty if the UID isn't empty. */
    uid_mail: string;
}
export interface WlReportDataParams {
    /** The page of results to show, starting at zero. The API will return 256 results per page. */
    i_page: number;
    /** The report ID. */
    id_report: number;
    /** The report group ID. */
    id_report_group: number;
    /** The report view ID. One of the [RsReportChartViewSid](#/components/schemas/RsReportChartViewSid) ... */
    id_report_view: number;
    /** The key of business for which the report must be generated. */
    k_business: string;
    /** Filter settings in encoded format. */
    s_filter: string;
    /** The field to use for sorting report data. */
    s_sort: string;
    /** The report page ID. One of the [RsReportPageSid](#/components/schemas/RsReportPageSid) constants. */
    id_report_page?: number | null;
}
export interface WlReportDataResponse {
    /** The report contents. */
    a_data: Array<unknown>;
    /** The report total. */
    a_total: Array<unknown>;
}
export interface WlReportAccessParams {
    /** Report CID. */
    cid_report: number;
    /** Report ID. */
    id_report: number;
    /** ID of business for which access must be checked. */
    k_business: string;
}
export interface WlReportAccessResponse {
    /** `true` - access is granted; `false` - access is denied. */
    has_access: boolean;
}
export interface WlReportPageDataParams {
    /** The page of results to show for each report in collection, starting at zero (set by default). The... */
    a_page: Array<number>;
    /** The report group ID. One of the [RsReportGroupSid](#/components/schemas/RsReportGroupSid) constan... */
    id_report_group: number;
    /** The report page ID. One of the [RsReportPageSid](#/components/schemas/RsReportPageSid) constants. */
    id_report_page: number | null;
    /** The report view ID. One of the [RsReportChartViewSid](#/components/schemas/RsReportChartViewSid) ... */
    id_report_view: number;
    /** The key of business for which the report collection must be generated. */
    k_business: string;
    /** Filter settings in encoded format. */
    s_filter: string;
    /** The field to use for sorting report data. */
    s_sort: string;
}
export interface WlReportPageDataResponse {
    /** List of the reports contents. Key is the report id from [RsReportSid](#/components/schemas/RsRepo... */
    a_data: Array<Array<unknown>>;
}
export interface WlCollectorDebtListParams {
    /** Defines whether new debts should be returned or only previously sent debts. */
    is_request_debt: boolean;
    /** Defines whether debts for test or real business should be returned. */
    is_test: boolean;
    /** Date before which debts should be returned. */
    dl_end?: string | null;
    /** Date since which debts should be returned. */
    dl_start?: string | null;
    /** The business key for which debts should be returned. */
    k_business?: string | null;
}
export interface WlCollectorDebtListResponse {
    a_debt: Array<{
        /** The birth date of the debtor client. */
        dl_client_birth: string;
        /** The date and time in UTC from which the debtor client is a member of the business. */
        dtu_client_since: string;
        /** The date and time in UTC of the last payment on the debtor client's account. */
        dtu_due: string;
        /** The date and time in UTC when the client was added to the list of debtors. */
        dtu_add: string;
        /** The date and time in UTC when the debt was fully ceased. */
        dtu_cease: string;
        /** A list of currencies. */
        id_currency: number;
        /** The business key where the debt occurred. */
        k_business: string;
        /** The debt key, which should be used for debt payment. */
        k_collector_debt: string;
        /** The transaction key after which the debt occurred. */
        k_pay_transaction_debt: string;
        /** The last transaction key on account after the debt occurred. */
        k_pay_transaction_last: string;
        /** The initial amount of the debt. */
        m_amount_debt: string;
        /** The amount paid for debt. */
        m_amount_paid: string;
        /** The title of the business. */
        text_business_title: string;
        /** The full name of the debtor client. */
        text_client_name: string;
        /** The address of the debtor client. */
        text_client_address: string;
        /** The email address of the debtor client. */
        text_client_mail: string;
        /** The phone number of the debtor client. */
        text_client_phone: string;
        /** The ZIP code of the debtor client. */
        text_client_zip: string;
        /** The notification message sent when the debt payment is missed. */
        text_skip: string;
        /** The user key of the debt owner. */
        uid: string;
    }>;
}
export interface WlCollectorDebtPayParams {
    /** The currency of the payment. */
    id_currency: number;
    /** The key of the business from which the debt originates. */
    k_business: string;
    /** The key of the user with the debt. */
    uid: string;
}
export interface WlCollectorDebtPayResponse {
    /** The transaction key generated to register the payment. */
    k_pay_transaction: string;
}
export interface WlCollectorDebtTransactionParams {
    /** If `true`, debt payments from test businesses will be returned. Otherwise, this will be `false` i... */
    is_test: boolean;
    /** If set, this is the end of the date window. Only debt payments added before or on this date will ... */
    dl_end?: string | null;
    /** If set, this is the start of the date window. Only debt payments added on or after this date will... */
    dl_start?: string | null;
    /** The business key for which debt payments should be returned. */
    k_business?: string | null;
}
export interface WlCollectorDebtTransactionResponse {
    a_transaction: Array<{
        /** The date and time in UTC of the payment transaction. */
        dtu_pay: string;
        /** The amount of the payment's transaction. */
        m_pay_amount: string;
        /** A list of payment methods. */
        id_pay_method: number;
        /** Defines whether the payment was performed via a third party service. */
        is_pay_collections: boolean;
        /** Defines whether the initial debt to which this related transaction is fully paid. */
        is_debt_paid: boolean;
        /** The full name of the debtor client for whom the payment transaction was performed. */
        text_client_name: string;
        /** The UID of the debtor client for whom the payment transaction was performed. */
        uid: string;
    }>;
}
export interface WlAnnouncementAnnouncementListParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** Business key. */
    k_business: string;
    /** The filter phrase to filter announcements by name. */
    text_search: string;
    /** Order ID for list of announcements. */
    id_order?: number | null;
    /** Sort field ID for list of announcements. */
    id_sort_field?: number | null;
    /** Location key for which need show announcement. */
    k_location?: string | null;
}
export interface WlAnnouncementAnnouncementListResponse {
    a_list: Array<{
        /** Location keys where the announcement is published. */
        a_location: Array<string>;
        /** Creation date in local MySQL format. */
        dtl_create: string;
        /** Local date and time the announcement is published in MySQL format. `null` if not set. */
        dtl_publish: string | null;
        /** Local date and time the announcement is unpublished in MySQL format. `null` if not set. */
        dtl_unpublish: string | null;
        /** Announcement description as HTML. */
        html_description: string;
        /** Announcement description text stripped of HTML tags. */
        html_description_clear: string;
        /** Sort order. `null` if the announcement is not pinned. */
        i_order: number | null;
        /** List of announcement statuses. */
        id_status: number;
        /** `true` if the announcement is pinned, `false` otherwise. */
        is_pin: boolean;
        /** Announcement key. */
        k_announcement: string;
        /** Business key. */
        k_business: string;
        /** Formatted creation date. */
        text_create_date: string;
        /** Formatted publish date. */
        text_publish_date: string;
        /** Formatted publish date with month name but without day of week. */
        text_publish_date_short: string;
        /** Announcement title. */
        text_title: string;
        /** Formatted unpublish date. */
        text_unpublish_date: string;
        /** Key of the user who created the announcement. */
        uid_create: string;
        /** URL of the announcement detail page. */
        url_detail: string;
        /** URL of the announcement image. */
        url_image: string;
        /** Announcement description as XML. */
        xml_description: string;
    }>;
    /** List of possible sort order. */
    id_order: number | null;
    /** List of fields by which you can sort. */
    id_sort_field: number | null;
}
export interface WlLeadLeadGetParams {
    /** The key of business to which the new user must be captured. */
    k_business: string;
    /** The key of the widget skin. If left empty, then the default skin is used. */
    k_skin: string;
}
export interface WlLeadLeadGetResponse {
    a_field_list: Array<{
        /** A list of possible options for an HTML select field. This value is only used if this field is an ... */
        a_item: {
            /** The option ID. */
            s_id: string;
            /** The option title. */
            text_title: string;
        };
        /** List of general fields in user's profile. */
        id_field_general: number;
        /** Possible types of the custom fields: text, checkbox, radio buttons, etc. */
        id_field_type: number;
        /** If `true`, then the field is mandatory. If `false`, then the field isn't mandatory. */
        is_require: boolean;
        /** The field key. */
        k_field: string;
        /** The field title. */
        text_field: string;
    }>;
    a_skin: Array<{
        /** List of compiled CSS style blocks. Each element: */
        a_style: {
            /** Compiled CSS style block string. */
            s_style: string;
            /** Name of the skin value this style block belongs to. */
            s_value_name: string;
        };
        /** Background styling for the widget container: */
        background: {
            /** CSS class names to apply to the element. */
            class: string;
            /** Inline CSS style string to apply to the element. */
            css: string;
        };
        /** Font styling for form fields: */
        'field-font': {
            /** CSS class names to apply to the element. */
            class: string;
            /** Inline CSS style string to apply to the element. */
            css: string;
        };
        /** Header section settings: */
        'header-text': {
            /** CSS class names to apply to the element. */
            class: string;
            /** Inline CSS style string to apply to the element. */
            css: string;
            /** Header text content. */
            text: string;
        };
        /** Visibility settings for information elements: */
        'info-show': {
            /** Map of required element names. Keys are element names, values are `true`. */
            a_require: Array<boolean>;
            /** Map of visible element names. Keys are element names, values are `true`. */
            a_show: Array<boolean>;
            /** `true` if no elements are visible. */
            empty: boolean;
        };
        /** Background styling for the submit button: */
        'submit-background': {
            /** CSS class names to apply to the element. */
            class: string;
            /** Inline CSS style string to apply to the element. */
            css: string;
        };
        /** Font styling for the submit button: */
        'submit-font': {
            /** CSS class names to apply to the element. */
            class: string;
            /** Inline CSS style string to apply to the element. */
            css: string;
        };
        /** Text settings for the submit button: */
        'submit-text': {
            /** CSS class names to apply to the element. */
            class: string;
            /** Inline CSS style string to apply to the element. */
            css: string;
            /** Submit button text content. */
            text: string;
        };
    }>;
    /** Whether it is possible to give free promotion when adding a user (only if free promotion is confi... */
    can_use_free_purchase: boolean | null;
    /** The URL to load the image with a captcha test. */
    url_captcha: string;
}
export interface WlLeadLeadPostParams {
    /** This will be `true` if the API is being used from the backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The key of business to which the new user must be captured. */
    k_business: string;
    /** The key of the widget skin. If left empty, then the default skin is used. */
    k_skin: string;
    /** Whether it is possible to give free promotion when adding a user (only if free promotion is confi... */
    can_use_free_purchase?: boolean | null;
}
export interface WlLeadLeadPostResponse {
    /** Key of the lead source. */
    k_lead_source: string | null;
    /** An error code if the lead is not signed in after creation. */
    text_sign_in_error: string;
    /** The key of the new user. */
    uid: string;
}
export interface WlPromotionPromotionListParams {
    /** Determines whether to return promotions created by Enterprise Locations (for Enterprise Cloud bus... */
    is_franchise: boolean;
    /** The business key used to get the promotions. */
    k_business: string;
}
export interface WlPromotionPromotionListResponse {
    a_promotion: Array<{
        /** Program types. */
        id_program: number;
        /** Program types. */
        id_program_type: number;
        /** Whether the promotion is active. */
        is_active: boolean;
        /** The key of the promotion. */
        k_promotion: string;
        /** The title of the promotion. */
        text_title: string;
    }>;
}
export interface WlPromotionPromotionDeleteParams {
    /** The key of the business. */
    k_business: string;
    /** The key of the promotion. */
    k_promotion: string;
}
export type WlPromotionPromotionDeleteResponse = Record<string, unknown>;
export interface WlPromotionPromotionGetParams {
    /** The key of the business. */
    k_business: string;
    /** The key of the promotion. */
    k_promotion: string;
}
export interface WlPromotionPromotionGetResponse {
    a_promotion: Array<{
        /** Information about services that can be attended with this pass or membership. */
        a_access: {
            /** A list of available classes. */
            a_class: Record<string, unknown>;
            /** A list of available events. */
            a_event: Record<string, unknown>;
            /** A list of available assets. */
            a_resource: Record<string, unknown>;
            /** A list of available appointment types. */
            a_service: Record<string, unknown>;
            /** This will be `true` if any class in the business can be visited with this Purchase Option. */
            is_class_all: boolean;
            /** This will be `true` if any event in the business can be visited with this Purchase Option. */
            is_event_all: boolean;
        };
        /** Information about Purchase Option image. */
        a_image: {
            /** The height of the image. */
            i_height: string;
            /** The width of the image. */
            i_width: string;
            /** The link to the image. */
            'url-thumbnail': string;
        };
        /** A list of locations where this promotion is available. */
        a_location: Array<string>;
        /** A list of login types linked with this promotion. */
        a_login_type: Array<string>;
        /** A list of login types linked with this promotion. */
        a_member_group: Array<string>;
        /** List of selected tags. */
        a_tag: Array<string>;
        /** The local expiration date. This is the last day when the Purchase Option is active. */
        dl_expire: string;
        /** Date when promotion should be terminated. `null` if there is no terminate date. */
        dl_terminate: string;
        /** Approximate revenue per session value. */
        f_revenue_single: string;
        /** The number of periods for the 'Period' duration type. */
        i_duration: number;
        /** The number of visits that the owner can use for the Purchase Option. */
        i_limit: number;
        /** A class for managing time intervals. */
        id_duration: number;
        /** Class to process string identifiers for duration types */
        id_duration_type: number;
        /** Program types. */
        id_program: number;
        /** Purchase restrictions. */
        id_restriction: number;
        /** Whether this promotion is active. */
        is_active: boolean;
        /** Whether this promotion is available for all locations of the business. */
        is_business_wide: boolean;
        /** If `true`, this promotion is for introductory clients. Otherwise, this will be `false`. */
        is_introductory: boolean;
        /** If `true`, this promotion is available for online purchase. Otherwise, this will be `false`. */
        is_online: boolean;
        /** Whether clients who purchase this item excluded from payroll calculations. */
        is_payroll: boolean;
        /** If `true` need to add approximate revenue per session value. */
        is_revenue_single: boolean;
        /** Whether promotion can be used for booking. `null` if there is no termination. */
        is_use: boolean;
        /** The key of the promotion. */
        k_promotion: string;
        /** Primary tag. */
        k_tag_primary: string;
        /** The price. */
        m_price: string;
        /** The description of the Purchase Option. */
        text_description: string;
        /** The title of the Purchase Option. */
        text_title: string;
        /** The direct URL to the promotion purchase page. */
        url_buy: string;
        /** The direct URL to the promotion details page in the online store. */
        url_catalog: string;
    }>;
    /** Guest passes settings for promotion. This will be `null` if there are no guest pass settings for ... */
    o_guest_settings: {
        i_claim_day: number;
        i_limit: number;
        i_limit_duration: number;
        id_limit_duration: number;
        is_checkin: boolean;
        is_limit: boolean;
    } | Array<unknown> | null;
}
export interface WlPromotionPromotionPostParams {
    /** The key of the business. */
    k_business: string;
    /** The key of the promotion. */
    k_promotion: string;
}
export type WlPromotionPromotionPostResponse = Record<string, unknown>;
export interface WlLoginLoginGetParams {
    /** The height of the requested photo. */
    i_photo_height: number;
    /** The width of the requested photo. */
    i_photo_width: number;
    /** The key of the business. Users can be in multiple businesses. */
    k_business: string;
    /** The key of the user. */
    uid?: string | null;
}
export interface WlLoginLoginGetResponse {
    /** Whether this user can send postcards. */
    can_postcard: boolean;
    /** Whether this user can send SMS. If `true` - user can send SMS, otherwise - `false`. */
    can_send_message: boolean;
    /** String identifiers for gender. */
    id_gender: number;
    /** Whether photo is uploaded. */
    is_photo_empty: boolean;
    /** The user's staff key for the specified business. */
    k_staff: string;
    /** The first name of the user. */
    s_first_name: string;
    /** The surname of the user. */
    s_last_name: string;
    /** The client`s mailing address. */
    text_mail_client: string;
    /** The staff member's mailing address. */
    text_mail_staff: string;
    /** The staff member's first name. */
    text_name_first_staff: string;
    /** The user's login name. This is returned in cases when neither the first name nor the last name ha... */
    text_name_full_client: string;
    /** The staff member's full name. */
    text_name_full_staff: string;
    /** The staff member's last name. */
    text_name_last_staff: string;
    /** The key of the user. */
    uid: string | null;
    /** The user's UID as a staff member for the specified business. */
    uid_staff: string | null;
    /** The URL where the user photo can be retrieved. */
    url_photo: string;
}
export interface WlLoginLoginPostParams {
    /** The height of the requested photo. */
    i_photo_height: number;
    /** The width of the requested photo. */
    i_photo_width: number;
    /** The key of the business. Users can be in multiple businesses. */
    k_business: string;
}
export interface WlLoginLoginPostResponse {
    a_login: Array<{
        /** String identifiers for gender. */
        id_gender: number;
        /** User's key as staff member. */
        k_staff: string;
        /** User first name. */
        s_first_name: string;
        /** First letter of user last name. */
        s_last_name: string;
        /** Client`s mail. */
        text_mail_client: string;
        /** Staff's first name. */
        text_name_first_staff: string;
        /** Full client name. User login is returned in a case neither first name, nor last name specified. */
        text_name_full_client: string;
        /** Full staff name. User login is returned in a case neither first name, nor last name specified. An... */
        text_name_full_staff: string;
        /** Staff`s last name. */
        text_name_last_staff: string;
        /** The user's UID as a staff member. */
        uid_staff: string;
        /** User photo URL. */
        url_photo: string;
    }>;
}
export interface WlQuizQuizElementDeleteParams {
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export type WlQuizQuizElementDeleteResponse = Record<string, unknown>;
export interface WlQuizQuizElementGetParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** `true` for request quiz from form builder page, `false` otherwise. */
    is_builder: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** List of purchase items for which this form is loaded in JSON format. */
    json_purchase_item: number;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
    /** UID of the client for which quiz requested. */
    uid_client: string;
}
export interface WlQuizQuizElementGetResponse {
    a_access_log: Array<{
        /** Date and time of the quiz changes. */
        dtu_activity: string;
        /** User's key. */
        uid_actor: string;
        /** The status of form actions. */
        id_activity: number;
        /** Title of the activity */
        text_activity: string;
        /** Date and time of the quiz changes in appropriate format string for further render. */
        text_date: string;
        /** Full name of the user who made an activity. */
        text_actor: string;
        /** Url for view information about the user who made activity (admin, staff, client). */
        url_actor: string;
    }>;
    a_element: Array<{
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Answer array for selected question options. */
        a_answer: Array<number>;
        /** Array for a dropdown question's options. */
        a_list: Array<string>;
        /** Additional string for detail description of the question. */
        html_description: string;
        /** Main html of the input question. */
        html_question: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Answer can have multiple options selected. */
        is_multiple: boolean;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Additional string for detail description of the question. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_question: string;
        /** Additional XML for detail description of the question. */
        xml_description: string;
        /** Main XML of the input question. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional HTML for detail description of the question. */
        html_heading: string;
        /** Main HTML of the input question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Additional string for detail description of the question. */
        text_heading: string;
        /** Main text of the input question. */
        text_subheading: string;
        /** Additional XML for detail description of the question. */
        xml_heading: string;
        /** Main XML of the input question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Whether this element has a duplicate. */
        has_duplicate: boolean;
        /** HTML of the image caption. */
        html_caption: string;
        /** Main HTML of the image heading. */
        html_heading: string;
        /** Additional HTML for detail description of the image (optional). */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Image source key for duplicate. */
        k_id_source: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Command for image save prepare. */
        s_command: string;
        /** Image caption. */
        text_caption: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Markup images files. */
        a_markup_image: Array<unknown>;
        /** Can user upload custom image. */
        can_upload: boolean;
        /** Main HTML of the input question. */
        html_heading: string;
        /** Additional HTML for detail description of the question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** ` true ` if custom markup image is to be deleted `false` otherwise. */
        is_delete_custom_markup_image: boolean;
        is_require: boolean;
        /** Fake id used for image upload. */
        k_id: string;
        /** Image ID of the temporary uploaded custom markup image to be copied as permanent drive link. */
        k_id_custom_markup_image: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Link of the source default markup image to copy to the element. */
        s_link_default_markup_image: string;
        /** Post-Markup image binary text. */
        s_markup_image: string;
        /** Main text of the input question. */
        text_heading: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Additional string for detail description of the question. */
        text_subheading: string;
        /** Custom default image path. */
        url_custom_default_image: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional html for detail description of the question. */
        html_heading: string;
        /** Footer text of signature pad. */
        html_signature_footer: string;
        /** Header text of signature pad. */
        html_signature_header: string;
        /** Main html of the input question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Signature binary text. */
        s_signature: string;
        /** Additional string for detail description of the question. */
        text_heading: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_subheading: string;
        /** Additional XML for detail description of the question. */
        xml_heading: string;
        /** Main XML of the input question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional HTML for detail description of the question. */
        html_description: string;
        /** Main HTML of the input question. */
        html_question: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Answer text for a question. */
        text_answer: string;
        /** Additional string for detail description of the question. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_question: string;
        /** Additional XML for detail description of the question. */
        xml_description: string;
        /** Main XML of the input question. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Sub-question html. */
        html_description: string;
        /** Question html. */
        html_question: string;
        /** Selected rate. */
        i_rate: number;
        /** Rate scale. */
        i_scale: number;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Sub-question text. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Question text. */
        text_question: string;
        /** Sub-question XML. */
        xml_description: string;
        /** Question XML. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Markup images files. */
        a_markup_image: Array<unknown>;
        /** Whether this element has a duplicate. */
        has_duplicate: boolean;
        /** Main HTML of the input question. */
        html_heading: string;
        /** Additional HTML for detail description of the question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Left response image key. */
        k_id_image_left: string;
        /** Right response image key. */
        k_id_image_right: string;
        /** Left image source key for duplicate. */
        k_id_source_left: string;
        /** Right image source key for duplicate. */
        k_id_source_right: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Command for left image save prepare. */
        s_command_left: string;
        /** Command for right image save prepare. */
        s_command_right: string;
        /** Post-Markup image binary text. */
        s_markup_image: string;
        /** Title for left image. */
        text_left_image: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Title for right image. */
        text_right_image: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Main content HTML. */
        html_content: string;
        /** Heading HTML. */
        html_heading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Main content text. */
        text_content: string;
        /** Heading text. */
        text_heading: string;
        /** Main content XML. */
        xml_content: string;
        /** Heading XML. */
        xml_heading: string;
    }>;
    a_setting: Array<{
        /** List of additional email addresses which should receive email notification after quiz is submitted. */
        a_notify_additional: Array<string>;
        /** List of services grouped by service ID. */
        a_service: Array<Array<string>>;
        /** Whether completed forms should be hidden for client in frontend. */
        hide_frontend: boolean;
        /** Number of periods email reminders should be sent for incomplete forms after. Type of a period is ... */
        i_notify_automated: number | string;
        /** List of quiz frequency types. */
        id_book_request_type: number;
        /** A class for managing time intervals. */
        id_notify_automated: number;
        /** List of quiz frequency types. */
        id_purchase_request_type: number;
        /** Whether form support amending responses. */
        is_amend_support: boolean;
        /** Whether quiz is required during/after book service selected in `a_service` list. */
        is_book: boolean;
        /** Whether quiz is required during booking process. */
        is_book_before: boolean;
        /** Whether form can be required for clients. */
        is_internal: boolean;
        /** Whether email notification should be sent to specific email addresses after quiz is submitted. */
        is_notify_additional: boolean;
        /** Whether email reminders should be sent for incomplete forms. */
        is_notify_automated: boolean;
        /** Whether email notification should be sent to client after quiz submitted. */
        is_notify_client: boolean;
        /** Whether email notification should be sent to staff members after quiz is submitted. */
        is_notify_staff: boolean;
        /** Whether form can be edited by franchisee. */
        is_prevent_franchisee: boolean;
        /** Whether form can be viewed by staff member only after confirmation. */
        is_private: boolean;
        /** Whether quiz is required during/after purchase service selected in `a_service` list. */
        is_purchase: boolean;
        /** Whether all services for purchase should be added in `a_service`. */
        is_purchase_all: boolean;
        /** Whether quiz is required during purchase process. */
        is_purchase_before: boolean;
        /** Whether quiz is required after registration process. */
        is_register_after: boolean;
        /** Whether quiz is required during registration process. */
        is_register_before: boolean;
        /** Whether client should be redirected to sign-in page before completing the form. */
        is_require_user: boolean;
        /** Whether all services for booking should be added in `a_service`. */
        is_service_all: boolean;
    }>;
    /** Whether user has privileges to amend form. */
    can_amend: boolean;
    /** Number of responses for specific quiz. */
    i_responses: number;
    /** Quiz active status. */
    is_active: boolean;
    /** `true` if quiz is imported, `false` otherwise. */
    is_imported: boolean;
    /** Whether form can be edited by franchisee. */
    is_prevent_franchisee: boolean;
    /** Business type key. Used only for forms in the system business. */
    k_business_type: string | null;
    /** Whether to show numbering of the form elements that supports numbering. */
    show_numbering: boolean;
    /** Quiz form title. */
    text_title: string;
    /** Direct URL to quiz. */
    url_quiz: string;
    /** Kiosk direct URL to quiz. */
    url_quiz_kiosk: string;
}
export interface WlQuizQuizElementPostParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export interface WlQuizQuizElementPostResponse {
    /** Quiz key. */
    k_quiz: string;
}
export interface WlQuizQuizElementPutParams {
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export interface WlQuizQuizElementPutResponse {
    a_setting: Array<{
        /** List of additional email addresses which should receive email notification after quiz is submitted. */
        a_notify_additional: Array<string>;
        /** List of services grouped by service ID. */
        a_service: Array<Array<string>>;
        /** Whether completed forms should be hidden for client in frontend. */
        hide_frontend: boolean;
        /** Number of periods email reminders should be sent for incomplete forms after. Type of a period is ... */
        i_notify_automated: number | string;
        /** List of quiz frequency types. */
        id_book_request_type: number;
        /** A class for managing time intervals. */
        id_notify_automated: number;
        /** List of quiz frequency types. */
        id_purchase_request_type: number;
        /** Whether form support amending responses. */
        is_amend_support: boolean;
        /** Whether quiz is required during/after book service selected in `a_service` list. */
        is_book: boolean;
        /** Whether quiz is required during booking process. */
        is_book_before: boolean;
        /** Whether form can be required for clients. */
        is_internal: boolean;
        /** Whether email notification should be sent to specific email addresses after quiz is submitted. */
        is_notify_additional: boolean;
        /** Whether email reminders should be sent for incomplete forms. */
        is_notify_automated: boolean;
        /** Whether email notification should be sent to client after quiz submitted. */
        is_notify_client: boolean;
        /** Whether email notification should be sent to staff members after quiz is submitted. */
        is_notify_staff: boolean;
        /** Whether form can be edited by franchisee. */
        is_prevent_franchisee: boolean;
        /** Whether form can be viewed by staff member only after confirmation. */
        is_private: boolean;
        /** Whether quiz is required during/after purchase service selected in `a_service` list. */
        is_purchase: boolean;
        /** Whether all services for purchase should be added in `a_service`. */
        is_purchase_all: boolean;
        /** Whether quiz is required during purchase process. */
        is_purchase_before: boolean;
        /** Whether quiz is required after registration process. */
        is_register_after: boolean;
        /** Whether quiz is required during registration process. */
        is_register_before: boolean;
        /** Whether client should be redirected to sign-in page before completing the form. */
        is_require_user: boolean;
        /** Whether all services for booking should be added in `a_service`. */
        is_service_all: boolean;
    }>;
    /** Direct URL to quiz. */
    url_quiz: string;
    /** Kiosk direct URL to quiz. */
    url_quiz_kiosk: string;
}
export interface WlQuizQuizElement72DeleteParams {
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export type WlQuizQuizElement72DeleteResponse = Record<string, unknown>;
export interface WlQuizQuizElement72GetParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** `true` for request quiz from form builder page, `false` otherwise. */
    is_builder: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** List of purchase items for which this form is loaded in JSON format. */
    json_purchase_item: number;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
    /** UID of the client for which quiz requested. */
    uid_client: string;
}
export interface WlQuizQuizElement72GetResponse {
    a_access_log: Array<{
        /** Date and time of the quiz changes. */
        dtu_activity: string;
        /** User's key. */
        uid_actor: string;
        /** The status of form actions. */
        id_activity: number;
        /** Title of the activity */
        text_activity: string;
        /** Date and time of the quiz changes in appropriate format string for further render. */
        text_date: string;
        /** Full name of the user who made an activity. */
        text_actor: string;
        /** Url for view information about the user who made activity (admin, staff, client). */
        url_actor: string;
    }>;
    a_element: Array<{
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Answer array for selected question options. */
        a_answer: Array<number>;
        /** Array for a dropdown question's options. */
        a_list: Array<string>;
        /** Additional string for detail description of the question. */
        html_description: string;
        /** Main html of the input question. */
        html_question: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Answer can have multiple options selected. */
        is_multiple: boolean;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Additional string for detail description of the question. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_question: string;
        /** Additional XML for detail description of the question. */
        xml_description: string;
        /** Main XML of the input question. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional HTML for detail description of the question. */
        html_heading: string;
        /** Main HTML of the input question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Additional string for detail description of the question. */
        text_heading: string;
        /** Main text of the input question. */
        text_subheading: string;
        /** Additional XML for detail description of the question. */
        xml_heading: string;
        /** Main XML of the input question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Whether this element has a duplicate. */
        has_duplicate: boolean;
        /** HTML of the image caption. */
        html_caption: string;
        /** Main HTML of the image heading. */
        html_heading: string;
        /** Additional HTML for detail description of the image (optional). */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Image source key for duplicate. */
        k_id_source: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Command for image save prepare. */
        s_command: string;
        /** Image caption. */
        text_caption: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Markup images files. */
        a_markup_image: Array<unknown>;
        /** Can user upload custom image. */
        can_upload: boolean;
        /** Main HTML of the input question. */
        html_heading: string;
        /** Additional HTML for detail description of the question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** ` true ` if custom markup image is to be deleted `false` otherwise. */
        is_delete_custom_markup_image: boolean;
        is_require: boolean;
        /** Fake id used for image upload. */
        k_id: string;
        /** Image ID of the temporary uploaded custom markup image to be copied as permanent drive link. */
        k_id_custom_markup_image: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Link of the source default markup image to copy to the element. */
        s_link_default_markup_image: string;
        /** Post-Markup image binary text. */
        s_markup_image: string;
        /** Main text of the input question. */
        text_heading: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Additional string for detail description of the question. */
        text_subheading: string;
        /** Custom default image path. */
        url_custom_default_image: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional html for detail description of the question. */
        html_heading: string;
        /** Footer text of signature pad. */
        html_signature_footer: string;
        /** Header text of signature pad. */
        html_signature_header: string;
        /** Main html of the input question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Signature binary text. */
        s_signature: string;
        /** Additional string for detail description of the question. */
        text_heading: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_subheading: string;
        /** Additional XML for detail description of the question. */
        xml_heading: string;
        /** Main XML of the input question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional HTML for detail description of the question. */
        html_description: string;
        /** Main HTML of the input question. */
        html_question: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Answer text for a question. */
        text_answer: string;
        /** Additional string for detail description of the question. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_question: string;
        /** Additional XML for detail description of the question. */
        xml_description: string;
        /** Main XML of the input question. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Sub-question html. */
        html_description: string;
        /** Question html. */
        html_question: string;
        /** Selected rate. */
        i_rate: number;
        /** Rate scale. */
        i_scale: number;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Sub-question text. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Question text. */
        text_question: string;
        /** Sub-question XML. */
        xml_description: string;
        /** Question XML. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Markup images files. */
        a_markup_image: Array<unknown>;
        /** Whether this element has a duplicate. */
        has_duplicate: boolean;
        /** Main HTML of the input question. */
        html_heading: string;
        /** Additional HTML for detail description of the question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Left response image key. */
        k_id_image_left: string;
        /** Right response image key. */
        k_id_image_right: string;
        /** Left image source key for duplicate. */
        k_id_source_left: string;
        /** Right image source key for duplicate. */
        k_id_source_right: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Command for left image save prepare. */
        s_command_left: string;
        /** Command for right image save prepare. */
        s_command_right: string;
        /** Post-Markup image binary text. */
        s_markup_image: string;
        /** Title for left image. */
        text_left_image: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Title for right image. */
        text_right_image: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Main content HTML. */
        html_content: string;
        /** Heading HTML. */
        html_heading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Main content text. */
        text_content: string;
        /** Heading text. */
        text_heading: string;
        /** Main content XML. */
        xml_content: string;
        /** Heading XML. */
        xml_heading: string;
    }>;
    a_setting: Array<{
        /** List of additional email addresses which should receive email notification after quiz is submitted. */
        a_notify_additional: Array<string>;
        /** List of services grouped by service ID. */
        a_service: Array<Array<string>>;
        /** Whether completed forms should be hidden for client in frontend. */
        hide_frontend: boolean;
        /** Number of periods email reminders should be sent for incomplete forms after. Type of a period is ... */
        i_notify_automated: number | string;
        /** List of quiz frequency types. */
        id_book_request_type: number;
        /** A class for managing time intervals. */
        id_notify_automated: number;
        /** List of quiz frequency types. */
        id_purchase_request_type: number;
        /** Whether form support amending responses. */
        is_amend_support: boolean;
        /** Whether quiz is required during/after book service selected in `a_service` list. */
        is_book: boolean;
        /** Whether quiz is required during booking process. */
        is_book_before: boolean;
        /** Whether form can be required for clients. */
        is_internal: boolean;
        /** Whether email notification should be sent to specific email addresses after quiz is submitted. */
        is_notify_additional: boolean;
        /** Whether email reminders should be sent for incomplete forms. */
        is_notify_automated: boolean;
        /** Whether email notification should be sent to client after quiz submitted. */
        is_notify_client: boolean;
        /** Whether email notification should be sent to staff members after quiz is submitted. */
        is_notify_staff: boolean;
        /** Whether form can be edited by franchisee. */
        is_prevent_franchisee: boolean;
        /** Whether form can be viewed by staff member only after confirmation. */
        is_private: boolean;
        /** Whether quiz is required during/after purchase service selected in `a_service` list. */
        is_purchase: boolean;
        /** Whether all services for purchase should be added in `a_service`. */
        is_purchase_all: boolean;
        /** Whether quiz is required during purchase process. */
        is_purchase_before: boolean;
        /** Whether quiz is required after registration process. */
        is_register_after: boolean;
        /** Whether quiz is required during registration process. */
        is_register_before: boolean;
        /** Whether client should be redirected to sign-in page before completing the form. */
        is_require_user: boolean;
        /** Whether all services for booking should be added in `a_service`. */
        is_service_all: boolean;
    }>;
    /** Whether user has privileges to amend form. */
    can_amend: boolean;
    /** Number of responses for specific quiz. */
    i_responses: number;
    /** Quiz active status. */
    is_active: boolean;
    /** `true` if quiz is imported, `false` otherwise. */
    is_imported: boolean;
    /** Whether form can be edited by franchisee. */
    is_prevent_franchisee: boolean;
    /** Business type key. Used only for forms in the system business. */
    k_business_type: string | null;
    /** Whether to show numbering of the form elements that supports numbering. */
    show_numbering: boolean;
    /** Quiz form title. */
    text_title: string;
    /** Direct URL to quiz. */
    url_quiz: string;
    /** Kiosk direct URL to quiz. */
    url_quiz_kiosk: string;
}
export interface WlQuizQuizElement72PostParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export interface WlQuizQuizElement72PostResponse {
    /** Quiz key. */
    k_quiz: string;
}
export interface WlQuizQuizElement72PutParams {
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz login key. */
    k_quiz_login: string;
}
export interface WlQuizQuizElement72PutResponse {
    a_setting: Array<{
        /** List of additional email addresses which should receive email notification after quiz is submitted. */
        a_notify_additional: Array<string>;
        /** List of services grouped by service ID. */
        a_service: Array<Array<string>>;
        /** Whether completed forms should be hidden for client in frontend. */
        hide_frontend: boolean;
        /** Number of periods email reminders should be sent for incomplete forms after. Type of a period is ... */
        i_notify_automated: number | string;
        /** List of quiz frequency types. */
        id_book_request_type: number;
        /** A class for managing time intervals. */
        id_notify_automated: number;
        /** List of quiz frequency types. */
        id_purchase_request_type: number;
        /** Whether form support amending responses. */
        is_amend_support: boolean;
        /** Whether quiz is required during/after book service selected in `a_service` list. */
        is_book: boolean;
        /** Whether quiz is required during booking process. */
        is_book_before: boolean;
        /** Whether form can be required for clients. */
        is_internal: boolean;
        /** Whether email notification should be sent to specific email addresses after quiz is submitted. */
        is_notify_additional: boolean;
        /** Whether email reminders should be sent for incomplete forms. */
        is_notify_automated: boolean;
        /** Whether email notification should be sent to client after quiz submitted. */
        is_notify_client: boolean;
        /** Whether email notification should be sent to staff members after quiz is submitted. */
        is_notify_staff: boolean;
        /** Whether form can be edited by franchisee. */
        is_prevent_franchisee: boolean;
        /** Whether form can be viewed by staff member only after confirmation. */
        is_private: boolean;
        /** Whether quiz is required during/after purchase service selected in `a_service` list. */
        is_purchase: boolean;
        /** Whether all services for purchase should be added in `a_service`. */
        is_purchase_all: boolean;
        /** Whether quiz is required during purchase process. */
        is_purchase_before: boolean;
        /** Whether quiz is required after registration process. */
        is_register_after: boolean;
        /** Whether quiz is required during registration process. */
        is_register_before: boolean;
        /** Whether client should be redirected to sign-in page before completing the form. */
        is_require_user: boolean;
        /** Whether all services for booking should be added in `a_service`. */
        is_service_all: boolean;
    }>;
    /** Direct URL to quiz. */
    url_quiz: string;
    /** Kiosk direct URL to quiz. */
    url_quiz_kiosk: string;
}
export interface WlVideoVideoElementDeleteParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
    /** The video key. */
    k_video: string;
}
export type WlVideoVideoElementDeleteResponse = Record<string, unknown>;
export interface WlVideoVideoElementGetParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
    /** The video key. */
    k_video: string;
}
export interface WlVideoVideoElementGetResponse {
    /** The keys of the locations where this video is available. */
    a_location: Array<string>;
    /** The keys of the user staff members who are on the video. */
    a_staff: Array<string>;
    a_staff_info: Array<{
        /** <b>Deprecated</b> The staff member key. */
        k_staff: string;
        /** The staff member's full name. */
        text_name: string;
        /** The staff user ID. */
        uid_staff: string;
    }>;
    /** The user IDs of the staff members who are on the video (authoritative list for who is assigned to... */
    a_staff_uid: Array<string>;
    /** The video category keys where this video can be found. */
    a_video_category: Array<string>;
    /** The video tag keys. */
    a_video_tag: Array<string>;
    /** The date and time when the video was published. */
    dtl_publish: string | null;
    /** The date and time when the video was unpublished. */
    dtl_unpublish: string | null;
    /** The date when the video was uploaded. */
    dtl_upload: string;
    /** The video embed code. */
    html_embed: string;
    /** The count of burned calories associated with the video. */
    i_calorie: number;
    /** The current time as a percentage of the video duration at which the user is at in the video. */
    i_current_percent: number;
    /** The current time in seconds at which the user is at in the video. */
    i_current_time: number;
    /** The video duration in seconds. */
    i_duration: number;
    /** The number of video views. */
    i_watch: number;
    /** List of embed video sources. */
    id_embed_source: number | null;
    /** A list of two answers for any question: Yes or No. */
    id_location_select: number;
    /** List of video types. */
    id_source: number;
    /** If `true`, the calorie count will be displayed on the video. */
    is_calorie: boolean;
    /** If `true`, the video is converted. */
    is_converted: boolean;
    /** If `true`, the video is published. Otherwise, this will be `false`. */
    is_published: boolean;
    /** If `true`, the video level for the video is enabled. */
    is_video_level: boolean;
    /** Video.js media player initialization parameters in JSON format. */
    json_setup: string;
    /** The binary string video key. */
    k_video_binary: string;
    /** The video category primary key. */
    k_video_category_primary: string;
    /** The video level key. */
    k_video_level: string;
    /** The string representation of the video's key. */
    s_preview_video_key: string | null;
    /** If `false`, the calorie count for videos is hidden. Otherwise, this will be `true`. */
    show_calorie: boolean;
    /** If `false`, video levels are hidden. Otherwise, this will be `true`. */
    show_level: boolean;
    /** If `false`, the number of views for videos is hidden. Otherwise, this will be `true`. */
    show_view: boolean;
    /** The video level name. */
    text_level_title: string;
    /** The video name. */
    text_title: string;
    /** The URL of the video thumbnail. */
    url_thumbnail: string;
    /** The URL of the video file. */
    url_video: string | null;
    /** The direct URL of the video. */
    url_video_direct: string;
    /** The direct URL of the video for iframe. */
    url_video_frame: string;
    /** The video description. */
    xml_description: string;
}
export interface WlVideoVideoElementPostParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** If `true`, the video is converted. */
    is_converted: boolean;
    /** The business key. */
    k_business: string;
    /** The video key. */
    k_video: string;
}
export interface WlVideoVideoElementPostResponse {
    /** The video key. */
    k_video: string;
}
export type WlVideoVideoElementPutParams = Record<string, unknown>;
export interface WlVideoVideoElementPutResponse {
    /** List of embed video sources. */
    id_embed_source: number | null;
    /** Video.js media player initialization parameters in JSON format. */
    json_setup: string;
}
export interface WlVideoVideoListGetParams {
    /** The calorie range ascribed to the video to use for the search. */
    a_calorie: Array<{
        /** The minimum number of calories. */
        i_from?: number;
        /** The maximum number of calories. */
        i_to?: number;
    }>;
    /** The duration range ascribed to the video to use for the search. */
    a_duration: Array<{
        /** The minimum duration. */
        i_from?: number;
        /** The maximum duration. */
        i_to?: number;
    }>;
    /** A list of levels to show videos for. A level can refer to the difficulty ascribed to the video. */
    a_level: Array<string>;
    /** A list of locations to show videos from. */
    a_location: Array<string>;
    /** A list of video sources. */
    a_source: Array<number>;
    /** A list of staff members who appear in videos. */
    a_staff: Array<string>;
    /** A list of staff members who appear in videos. */
    a_staff_uid: Array<string>;
    /** A list of video categories to show videos from. */
    a_video_category: Array<string>;
    /** A list of video tags to show videos for. */
    a_video_tag: Array<string>;
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
    /** The filter phrase to filter videos by name. */
    text_search: string;
    /** Page to return. */
    i_page?: number | null;
    /** Sort order ID. One of [SortOrderSid](#/components/schemas/Core.Sid.SortOrderSid) constants. `null... */
    id_order?: number | null;
    /** The sorting type. */
    id_sort?: number | null;
    /** UID of the client who request list of videos. */
    uid?: string | null;
}
export interface WlVideoVideoListGetResponse {
    a_list: Array<{
        /** List of staff members associated with the video. */
        a_staff: {
            /** UID of the staff. */
            uid_staff: string;
            /** Full name of the staff. */
            text_name: string;
            /** Staff key. Only for legacy apps. */
            k_staff: string;
        };
        /** List of video categories. */
        a_video_category: {
            /** Video category key. */
            k_video_category: string;
            /** Category name. */
            text_title: string;
        };
        /** List of video tags. */
        a_video_tag: {
            /** Video tag key. */
            k_video_tag: string;
            /** Tag name. */
            text_title: string;
        };
        /** Date and time when the video becomes published, in the business time zone. `null` if not set. */
        dtl_publish: string | null;
        /** Date and time when the video becomes unpublished, in the business time zone. `null` if not set. */
        dtl_unpublish: string | null;
        /** Date and time when the video was uploaded, in the business time zone. */
        dtl_upload: string;
        /** HTML description of the video parsed from `xml_description`. */
        html_description: string;
        /** Number of calories burned during the video session. */
        i_calorie: number;
        /** Percentage of the video watched by the current user. */
        i_current_percent: number;
        /** Current watch position in seconds for the current user. */
        i_current_time: number;
        /** Video duration in seconds. */
        i_duration: number;
        /** Total number of views. */
        i_watch: number;
        /** List of video types. */
        id_source: number;
        /** `true` if calorie information is enabled for this video; `false` otherwise. */
        is_calorie: boolean;
        /** `true` if the video has been converted to HLS format; `false` otherwise. */
        is_converted: boolean;
        /** `true` if the video is currently published; `false` otherwise. */
        is_published: boolean;
        /** `true` if a difficulty level is assigned to this video; `false` otherwise. */
        is_video_level: boolean;
        /** Business key. */
        k_business: string;
        /** Video key. */
        k_video: string;
        /** Binary video key. */
        k_video_binary: string;
        /** Video level key. `null` if no level assigned. */
        k_video_level: string | null;
        /** `true` if calorie count should be displayed; `false` otherwise. */
        show_calorie: boolean;
        /** `true` if difficulty level should be displayed; `false` otherwise. */
        show_level: boolean;
        /** `true` if view count should be displayed; `false` otherwise. */
        show_view: boolean;
        /** Difficulty level title. */
        text_level_title: string;
        /** Video title. */
        text_title: string;
        /** URL of the video thumbnail image. */
        url_thumbnail: string | null;
        /** URL of the video file (HLS stream). `null` if not available. */
        url_video: string | null;
    }>;
    a_page: Array<{
        /** `true` for the "next page" navigation entry. Only present on the next-page entry. */
        'is-next'?: boolean;
        /** `true` for the "previous page" navigation entry. Only present on the previous-page entry. */
        'is-previous'?: boolean;
        /** `true` if this entry represents the current page. Only present on the selected page entry. */
        'is-selected'?: boolean;
        /** Page number. `0` represents a skipped range (ellipsis) between non-adjacent pages. */
        page: number;
        /** `true` if this entry represents a skipped page range (ellipsis). Only present on skip entries. */
        skip?: boolean;
    }>;
    /** List of embed video sources. */
    id_embed_source: number | null;
    /** List of possible sort order. */
    id_order: number | null;
    /** List of video catalog sorting types. */
    id_sort: number | null;
    /** Video.js media player initialization parameters in JSON format. */
    json_setup: string;
}
export interface WlVideoVideoListPutParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
}
export interface WlVideoVideoListPutResponse {
    /** List of embed video sources. */
    id_embed_source: number | null;
    /** Video.js media player initialization parameters in JSON format. */
    json_setup: string;
}
export interface WlFitbuilderMessageParams {
    /** Messenger channel key. */
    k_channel: string;
}
export type WlFitbuilderMessageResponse = Record<string, unknown>;
export interface WlMailSendMailParams {
    /** The business key. */
    k_business: string;
}
export type WlMailSendMailResponse = Record<string, unknown>;
export interface WlStaffStaffElementParams {
    /** The key of the staff member resolved and used internally by this API. */
    k_staff?: string | null;
}
export interface WlStaffStaffElementResponse {
    /** The key of the staff member resolved and used internally by this API. */
    k_staff: string | null;
}
export interface WlSkinSkinForeignDeleteParams {
    /** Skin type, one of [RsSkinSid](#/components/schemas/RsSkinSid) constants. */
    id_skin: number;
    /** Key of the business. */
    k_business: string;
    /** Foreign skin key. */
    s_foreign_id: string;
}
export interface WlSkinSkinForeignDeleteResponse {
    /** Skin key. */
    k_skin: string;
}
export interface WlSkinSkinForeignPostParams {
    /** Skin type, one of [RsSkinSid](#/components/schemas/RsSkinSid) constants. */
    id_skin: number;
    /** Key of the business. */
    k_business: string;
    /** Foreign skin key. */
    s_foreign_id: string;
}
export interface WlSkinSkinForeignPostResponse {
    /** Skin key. */
    k_skin: string;
}
export interface WlSkinSkinForeignPutParams {
    /** Skin type, one of [RsSkinSid](#/components/schemas/RsSkinSid) constants. */
    id_skin: number;
    /** Key of the business. */
    k_business: string;
    /** Foreign skin key. */
    s_foreign_id: string;
}
export interface WlSkinSkinForeignPutResponse {
    /** Skin key. */
    k_skin: string;
}
export interface WlTagTagListGetParams {
    /** The business key of the tags. */
    k_business: string;
}
export interface WlTagTagListGetResponse {
    a_list: Array<{
        /** The sort order of the tag. */
        i_sort: number;
        /** The tag key. */
        k_tag: string;
        /** The tag title. */
        text_title: string;
    }>;
    /** Whether a business did set up a penalty fee for failed automatic payments. */
    has_fee: boolean;
    /** Whether a business did set up surcharges. */
    has_surcharge: boolean;
}
export interface WlTagTagListPostParams {
    /** The business key of the tags. */
    k_business: string;
}
export interface WlTagTagListPostResponse {
    a_list: Array<{
        /** The sort order of the tag. */
        i_sort: number;
        /** The tag key. */
        k_tag: string;
        /** The tag title. */
        text_title: string;
    }>;
}
export interface WlTaxTaxParams {
    /** The tax key to get information for. */
    k_tax: string;
}
export interface WlTaxTaxResponse {
    /** The tax title. */
    text_tax: string;
}
export interface WlTaxTaxListParams {
    /** The key of the business for which to get a list of taxes. */
    k_business: string;
}
export interface WlTaxTaxListResponse {
    a_list: Array<{
        /** The amount of the tax. */
        f_value: number;
        /** The tax key. */
        k_tax: string;
        /** The name of the tax. */
        text_title: string;
    }>;
}
export type WlReviewReviewParams = Record<string, unknown>;
export interface WlReviewReviewResponse {
    /** Reward score for leaving a review. */
    i_score: number;
    /** Reward score for sharing a review on Facebook. */
    i_score_facebook: number;
    /** Reward score for sharing a review on Twitter. */
    i_score_twitter: number;
    /** If a reward score for leaving a review exists. */
    is_score: boolean;
    /** If a reward score for sharing a review on Facebook exists. */
    is_score_facebook: boolean;
    /** If a reward score for sharing a review on Twitter exists. */
    is_score_twitter: boolean;
    /** If a reward score for sharing exists. */
    is_share_points: boolean;
    /** If a reward score does not exist for leaving a review or sharing the review. */
    is_share_points_none: boolean;
    /** The key of the review writing activity. This will be empty if the review was saved but not publis... */
    k_login_activity: string;
    /** Review key. */
    k_review: string;
    /** The UID of client who leaves review. */
    uid: string;
    /** The sharing url of the review. */
    url_share: string;
}
export type WlReviewReviewFeatureParams = Record<string, unknown>;
export type WlReviewReviewFeatureResponse = Record<string, unknown>;
export type WlReviewReviewReplyParams = Record<string, unknown>;
export type WlReviewReviewReplyResponse = Record<string, unknown>;
export interface WlRankRankParams {
    /** Rank category keys. Used to filter belts by belt categories. */
    a_rank_category: Array<string>;
    /** Business key. */
    k_business: string;
}
export interface WlRankRankResponse {
    a_rank_list: Array<{
        /** A belt key. */
        k_rank: string;
        /** A belt category key. */
        k_rank_category: string;
        /** Belt title. */
        text_rank: string;
        /** Belt category title. */
        text_rank_category: string;
    }>;
}
export interface WlHolidayHolidayParams {
    /** The date working hours are required for. */
    dl_work: string;
    /** The business key. */
    k_business: string;
}
export interface WlHolidayHolidayResponse {
    /** A list of the location's closed day titles by location keys on the date `dl_work`. */
    a_location_holiday: Array<string>;
    /** `true` if the business has a closed day on the date `dl_work`, `false` if otherwise. */
    is_business_holiday: boolean;
    /** The message used for the business's closed day on the date `dl_work`. */
    text_business_title: string;
}
export interface WlHolidayBulkBusinessHolidayParams {
    /** The business key. */
    k_business: string;
}
export interface WlHolidayBulkBusinessHolidayResponse {
    a_business_holidays: Array<{
        /** List of effected classes, keys are class keys. */
        a_class: Array<boolean>;
        /** List of effected classes, keys are class keys. */
        a_class_only: Array<boolean>;
        /** List of effected events, keys are class keys. */
        a_event_only: Array<boolean>;
        /** Date of the end of the holiday. */
        dt_end: string;
        /** Date of the start of the holiday. */
        dt_start: string;
        /** `1` if all classes are selected to cancel, `0` - otherwise. */
        is_class_all: number;
        /** `1` if all events are selected to cancel, `0` - otherwise. */
        is_event_all: number;
        /** `1` if all services are selected to cancel, `0` - otherwise. */
        is_service_all: number;
        /** Business key. */
        k_business: string;
        /** Holiday key. */
        k_holiday: string;
        /** Location key. */
        k_location: string;
        /** The market key. */
        k_market: string;
        /** Name of the holiday. */
        s_title: string;
    }>;
}
export interface ThothWlPayAccountChargeChargeParams {
    /** The account charge mode. */
    id_pay_account_charge: number;
    /** If `true`, the account is filled by a staff member in the backend. Otherwise, this will be `false`. */
    is_staff: boolean;
    /** The ID of the business the user account belongs to. */
    k_business: string;
    /** The ID of the user account to refill. */
    k_pay_account: string;
    /** The ID of the user whose account is being refilled. */
    uid: string;
}
export type ThothWlPayAccountChargeChargeResponse = Record<string, unknown>;
export interface ThothWlPayTransactionReportTransactionAllPaymentParams {
    /** The end date in local time to retrieve transactions for. */
    dl_date_end: string;
    /** The end date in local time to retrieve transactions for. */
    dl_date_start: string;
    /** The page of the report, starting from 0. */
    i_page: number;
    /** Determines whether the report should be refreshed. */
    is_refresh: boolean;
    /** The key of the business for which report should be generated. */
    k_business: string;
}
export interface ThothWlPayTransactionReportTransactionAllPaymentResponse {
    /** A list of fields in the report. */
    a_field: Array<string>;
    /** The report data. */
    a_row: Array<unknown>;
    /** The warning list of the report. */
    a_warning: Array<string>;
    /** The date and time if the report has completed generation. Otherwise, this will be `null`. */
    dtu_complete: string | null;
    /** The date and time if this report has been put in the generation queue. Otherwise, this will be `n... */
    dtu_queue: string | null;
    /** The date and time if generation of this report has started. Otherwise, this will be `null`. */
    dtu_start: string | null;
    /** Lists statuses of reports from point of view of its generation. */
    id_report_status: number;
    /** Determines whether to show more rows in the report. */
    is_more: boolean;
    /** Determines whether the report is complete. */
    is_report_complete: boolean;
}
export interface ThothWlPayBankCardListParams {
    /** ID of current business. */
    k_business: string;
    /** Location to show information for. */
    k_location: string;
    /** ID of a user to show information for. */
    uid: string;
}
export interface ThothWlPayBankCardListResponse {
    a_bank_card: Array<{
        /** The month when the payment card expires, represented by a number (1=January and 12=December). */
        i_month: number;
        /** The last two digits of the year when the payment card expires. */
        i_year: number;
        /** A class for a list of card systems. */
        id_card_system: number;
        /** If `true`, then this card is the user default card. */
        is_default: boolean;
        /** The payment address ID. This refers to a physical address associated with a payment card. */
        k_pay_address: string;
        /** The payment method ID. Each payment card for each user will have its own ID. */
        k_pay_bank: string;
        /** The payment card descriptor. This is typically the company name and the last 4 digits of the card */
        text_name_card: string;
        /** The name of the card owner as it appears on the card. */
        text_name_holder: string;
        /** A portion of the payment card number, used to identify the card. */
        text_number: string;
    }>;
    /** List of bank cards. */
    a_list: Array<unknown>;
    /** Whether new card can be added. */
    can_add: boolean;
}
export interface CoreDriveImageUploadImageUploadGetParams {
    /** Allows to give custom parameters which can be required for different types of images. */
    a_config: Array<unknown>;
    /** If `true`, the temporary image will be retrieved. Otherwise, this will be `false`. */
    is_temporary: boolean;
    /** The image ID set in `s_class`. */
    k_id: string;
    /** The name of the class that manages this image. */
    s_class: string;
}
export interface CoreDriveImageUploadImageUploadGetResponse {
    a_text_empty: Array<{
        /** Class to change view of the upload form. */
        s_class: string;
        /** Text to replacing. */
        s_text: string;
    }> | null;
    /** An HTML string to use for the image recommendation. */
    html_image_hint: string;
    /** The maximum height of image. */
    i_height_max: number | null;
    /** The minimum height of image. */
    i_height_min: number | null;
    /** The height of the thumbnail image. */
    i_thumbnail_height: number | null;
    /** The width of the thumbnail image. */
    i_thumbnail_width: number | null;
    /** The maximum width of the image. */
    i_width_max: number | null;
    /** The minimum width of the image. */
    i_width_min: number | null;
    /** If `true`, the image is treated as circular. Otherwise, this will be `false`. */
    is_circular: boolean | null;
    /** If `true`, image deletion is permitted. Otherwise, this will be `false`. */
    is_delete_allow: boolean | null;
    /** The link protection code. */
    s_code: string | null;
    /** The image link. */
    s_link: string | null;
    /** The image URL that should be displayed in cases where no image is uploaded. */
    url_empty: string | null;
    /** The thumbnail URL of the image. */
    url_thumbnail: string | null;
    /** The script URL where new image should be uploaded from. */
    url_upload: string | null;
    /** The URL of the full image. */
    url_view: string | null;
}
export interface CoreDriveImageUploadImageUploadPostParams {
    /** Allows to give custom parameters which can be required for different types of images. */
    a_config: Array<unknown>;
    /** The name of the class that manages this image. */
    s_class: string;
}
export interface CoreDriveImageUploadImageUploadPostResponse {
    a_image: Array<{
        /** Information about the text on the empty upload image. */
        a_text_empty: {
            /** Class to change view of the upload form. */
            s_class: string;
            /** Text to replacing. */
            s_text: string;
        };
        /** The maximum height of the image. */
        i_height_max: number;
        /** The minimum height of the image. */
        i_height_min: number;
        /** The height of the thumbnail image. */
        i_thumbnail_height: number;
        /** The width of thumbnail image. */
        i_thumbnail_width: number;
        /** The maximum width of image. */
        i_width_max: number;
        /** The minimum width of image. */
        i_width_min: number;
        /** `true` if image is treated as circular; `false` otherwise. */
        is_circular: boolean;
        /** `true` if image deleting is allowed; `false` otherwise. */
        is_delete_allow: boolean;
        /** The image link. */
        s_link: string;
        /** The URL of the image that should be shown in a case image is not uploaded. */
        url_empty: string;
        /** The URL of thumbnail of the image. `null` if image is not uploaded. */
        url_thumbnail: string | null;
        /** The URL the script where new image should be uploaded. */
        url_upload: string;
        /** The URL of the full image. `null` if image is not uploaded. */
        url_view: string | null;
    }>;
}
export interface CoreDriveImageUploadImageUploadPutParams {
    /** Allows to give custom parameters which can be required for different types of images. */
    a_config: Array<unknown>;
    /** If `true`, the temporary image will be retrieved. Otherwise, this will be `false`. */
    is_temporary: boolean;
    /** The image ID set in `s_class`. */
    k_id: string;
    /** The name of the class that manages this image. */
    s_class: string;
}
export interface CoreDriveImageUploadImageUploadPutResponse {
    a_text_empty: Array<{
        /** Class to change view of the upload form. */
        s_class: string;
        /** Text to replacing. */
        s_text: string;
    }> | null;
    /** An HTML string to use for the image recommendation. */
    html_image_hint: string;
    /** The maximum height of image. */
    i_height_max: number | null;
    /** The minimum height of image. */
    i_height_min: number | null;
    /** The height of the thumbnail image. */
    i_thumbnail_height: number | null;
    /** The width of the thumbnail image. */
    i_thumbnail_width: number | null;
    /** The maximum width of the image. */
    i_width_max: number | null;
    /** The minimum width of the image. */
    i_width_min: number | null;
    /** If `true`, the image is treated as circular. Otherwise, this will be `false`. */
    is_circular: boolean | null;
    /** If `true`, image deletion is permitted. Otherwise, this will be `false`. */
    is_delete_allow: boolean | null;
    /** The link protection code. */
    s_code: string | null;
    /** The image link. */
    s_link: string | null;
    /** The image URL that should be displayed in cases where no image is uploaded. */
    url_empty: string | null;
    /** The thumbnail URL of the image. */
    url_thumbnail: string | null;
    /** The script URL where new image should be uploaded from. */
    url_upload: string | null;
    /** The URL of the full image. */
    url_view: string | null;
}
export interface CoreDriveImageUploadImageUploadTemporaryParams {
    /** The key of the image within `s_class`. */
    k_id: string;
    /** The name of the class that manages this image. */
    s_class: string;
}
export interface CoreDriveImageUploadImageUploadTemporaryResponse {
    /** If `true`, a crop is used. Otherwise, this will be `false` if a crop isn't used (the image is sav... */
    has_crop: boolean;
    /** The actual height of the thumbnail image. */
    i_height: number;
    /** The height of the original image. */
    i_height_src: number;
    /** The angle of the image rotation compared to the original. */
    i_rotate: number;
    /** The actual width of the thumbnail image. */
    i_width: number;
    /** The width of the original image. */
    i_width_src: number;
    /** List of image types. */
    id_type_src: number;
    /** If `true`, the thumbnail is a resized variant of the original image. */
    is_resize: boolean;
    /** The URL to the resized and rotated image in file storage. */
    url_thumbnail: string;
    /** The URL to the original image in file storage. */
    url_view: string;
}
export interface CoreRequestApiKeySecretParams {
    /** The CSRF code from the client side. */
    s_csrf: string;
    /** The session key. */
    s_key_session: string;
    /** Alias of `url_origin`. */
    url_domain: string;
    /** Origin for client requests. */
    url_origin: string;
}
export interface CoreRequestApiKeySecretResponse {
    /** The secret key for the request signing. */
    s_key_secret: string;
}
export interface CoreRequestTokenTokenPinParams {
    /** The ID to use to send a security code via a push notification. */
    text_push: string;
}
export interface CoreRequestTokenTokenPinResponse {
    /** The expiration date/time of the PIN code. */
    dtu_expire: string;
    /** The PIN code. */
    text_pin: string;
}
export interface CoreGeoRegionRegionParams {
    /** The locale ID to find regions for. One of the [LocaleSid](#/components/schemas/Core.Locale.Locale... */
    id_locale: number | null;
    /** Determines whether to get regions for all locales. */
    is_locale_all: boolean;
}
export interface CoreGeoRegionRegionResponse {
    a_region: Array<{
        /** A list of regions in the country. Every element has the next keys: */
        a_region: {
            /** The region key. */
            k_geo: string;
            /** The name of the region. */
            s_title: string;
        };
        /** A list of locales. */
        id_locale: number | null;
        /** The country key. */
        k_geo_country: string;
        /** The country abbreviation. */
        s_abbr: string;
        /** The name of the country. */
        s_title: string;
    }>;
}
export type CoreGoogleCaptchaGoogleCaptchaParams = Record<string, unknown>;
export type CoreGoogleCaptchaGoogleCaptchaResponse = Record<string, unknown>;
export type CoreGoogleCaptchaCaptchaScoreGetParams = Record<string, unknown>;
export interface CoreGoogleCaptchaCaptchaScoreGetResponse {
    /** Overridden score value for V3 captcha. */
    f_score: number | null;
}
export interface CoreGoogleCaptchaCaptchaScorePostParams {
    /** The user token CAPTCHA from [CaptchaVersionSid::V3](#/components/schemas/Core.Google.Captcha.Capt... */
    text_token: string;
}
export interface CoreGoogleCaptchaCaptchaScorePostResponse {
    /** List of responses for Google Captcha token. */
    id_response: number;
}
export type CoreGoogleCaptchaCaptchaScorePutParams = Record<string, unknown>;
export type CoreGoogleCaptchaCaptchaScorePutResponse = Record<string, unknown>;
export type CorePassportLoginInfoParams = Record<string, unknown>;
export interface CorePassportLoginInfoResponse {
    /** The current user key. */
    uid: string | null;
    /** A URL that a user can visit to reset their password. */
    url_password_change: string;
    /** The URL to the registration page. */
    url_register: string;
}
export interface CorePassportChangePasswordChangePasswordApplyParams {
    /** The verification code, which can be obtained from the "reset password" email link. This is a requ... */
    text_code: string;
    /** The user's login, which can be obtained from the "reset password" email link. This is a required ... */
    text_login: string;
    /** The user's email address, which can be obtained from the "reset password" email link. This is a r... */
    text_mail: string;
}
export type CorePassportChangePasswordChangePasswordApplyResponse = Record<string, unknown>;
export type CorePassportChangePasswordChangePasswordBeginParams = Record<string, unknown>;
export interface CorePassportChangePasswordChangePasswordBeginResponse {
    /** The error code. This will be an empty string if the email has been sent successfully. */
    text_error: string;
}
export type SocialAppleLoginAppleLoginDeleteParams = Record<string, unknown>;
export type SocialAppleLoginAppleLoginDeleteResponse = Record<string, unknown>;
export type SocialAppleLoginAppleLoginPostParams = Record<string, unknown>;
export type SocialAppleLoginAppleLoginPostResponse = Record<string, unknown>;
export type SocialFacebookLoginLoginParams = Record<string, unknown>;
export type SocialFacebookLoginLoginResponse = Record<string, unknown>;
export type SocialGooglePlusLoginParams = Record<string, unknown>;
export type SocialGooglePlusLoginResponse = Record<string, unknown>;
export type WlScheduleClassListClassList68Params = Record<string, unknown>;
export interface WlScheduleClassListClassList68Response {
    /** Keys are dates of the days inside requested date range, when there is at least one class in the b... */
    a_calendar: Array<string>;
    a_quick: Array<{
        /** Type of class ("class" || "event") */
        text_type: string;
        /** Class/event key. */
        k_class: string;
        /** Class/event title. */
        s_class: string;
        /** Total sessions found. */
        i_class: number;
    }>;
    a_session: Array<{
        /** Keys of class tab. */
        a_class_tab: Array<string>;
        /** The class image. Empty array if there is no image. */
        a_image: Array<string>;
        /** Tags associated with an individual class. */
        a_search_tag: Array<string>;
        /** The list of staff keys for the staff member conducting the session. */
        a_staff: Array<string>;
        /** The list of staff user keys for the staff member conducting the session. */
        a_staff_uid: Array<string>;
        /** The list of virtual locations keys. Each value is a location key. */
        a_virtual_location: Array<string>;
        /** The date/time of the session start in UTC. */
        dt_date: string;
        /** The time of the session start in the local time zone. */
        dt_time: string;
        /** The date/time of session start in the location's time zone. */
        dtl_date: string;
        /** Specifies whether the class will be hidden in the White Label Achieve Client App. If `true`, it m... */
        hide_application: boolean;
        /** The class description. */
        html_description: string;
        /** Count of visits on this class. */
        i_book: number;
        /** The capacity of the service. 'null' indicates that the capacity is not set. */
        i_capacity: number | null;
        /** The day of the week when session is occurred. Constant from [ADateWeekSid](#/components/schemas/A... */
        i_day: number;
        /** The duration of the session in minutes. */
        i_duration: number;
        /** Number of clients in wait list. */
        i_wait: number;
        /** Allow clients to book on behalf of a guest. */
        is_book_for_guest: boolean;
        /** If `true`, this class period was canceled. Otherwise, this will be `false`. */
        is_cancel: boolean;
        /** If `true`, this is an event. Otherwise, this will be `false`. */
        is_event: boolean;
        /** If `true`, this class is virtual. Otherwise, this will be `false`. */
        is_virtual: boolean;
        /** This will be `true` if user is only on the wait-list. Otherwise, this will be `false`. */
        is_wait_list_enabled: boolean;
        /** The class key. */
        k_class: string;
        /** The class period key. */
        k_class_period: string;
        /** The key of the session's location. */
        k_location: string;
        /** Off-site location asset key. Empty if off-site location is not assigned to this class. */
        k_resource_location: string;
        /** The title of the session. */
        s_title: string;
        /** The direct link to start booking on the WellnessLiving website. */
        url_book: string;
    }>;
    /** If `true`, the list of sessions contains sessions from different time zones. Otherwise, this will... */
    is_timezone_different: boolean;
    /** If `true`, there exists at least one virtual service by a specified */
    is_virtual_service: boolean;
}
export interface WlScheduleClassListClassListParams {
    /** The list of classes keys to filter. */
    a_class: Array<string>;
    /** Class filter by day of the week. */
    a_day: Array<number>;
    /** The list of location keys to filter results. */
    a_location: Array<string>;
    /** Class filter by time of day. */
    a_time: Array<{
        /** Time when the session starts. Example: value `'06:00'`. */
        tl_start: string;
        /** Time when the session ends. Example: value `'14:00'`. */
        tl_end: string;
    }>;
    /** The list start date in UTC and in MySQL format. */
    dt_date: string;
    /** The list end date in UTC and in MySQL format. */
    dt_end: string;
    /** `true` means to not generate `a_session` result. */
    is_response_short: boolean;
    /** If `true`, sessions from every class tab are returned. If `false`, use the */
    is_tab_all: boolean;
    /** The business key. */
    k_business: string;
    /** The category tab key. */
    k_class_tab: string;
    /** The list of staff members to filter. */
    s_staff: string;
    /** The list of staff user keys to filter. */
    s_staff_uid: string;
    /** If `true`, canceled sessions will be returned. If `false`, canceled sessions won't be returned. */
    show_cancel: boolean;
    /** If `true`, classes will be included in the response. `false` - otherwise. */
    show_class: boolean;
    /** If `true`, events are also returned. If `false`, only classes are returned. */
    show_event: boolean;
    /** The user key. */
    uid: string;
    /** Class filter by type. */
    is_virtual?: boolean | null;
}
export interface WlScheduleClassListClassListResponse {
    /** Keys are dates of the days inside requested date range, when there is at least one class in the b... */
    a_calendar: Array<string>;
    a_session: Array<{
        /** Keys of class tab. */
        a_class_tab: Array<string>;
        /** The class image. Empty array if there is no image. */
        a_image: Array<string>;
        /** Tags associated with an individual class. */
        a_search_tag: Array<string>;
        /** The list of staff keys for the staff member conducting the session. */
        a_staff: Array<string>;
        /** The list of staff user keys for the staff member conducting the session. */
        a_staff_uid: Array<string>;
        /** The list of virtual locations keys. Each value is a location key. */
        a_virtual_location: Array<string>;
        /** The date/time of the session start in UTC. */
        dt_date: string;
        /** The time of the session start in the local time zone. */
        dt_time: string;
        /** The date/time of session start in the location's time zone. */
        dtl_date: string;
        /** Specifies whether the class will be hidden in the White Label Achieve Client App. If `true`, it m... */
        hide_application: boolean;
        /** The class description. */
        html_description: string;
        /** Count of visits on this class. */
        i_book: number;
        /** The capacity of the service. 'null' indicates that the capacity is not set. */
        i_capacity: number | null;
        /** The day of the week when session is occurred. Constant from [ADateWeekSid](#/components/schemas/A... */
        i_day: number;
        /** The duration of the session in minutes. */
        i_duration: number;
        /** Number of clients in wait list. */
        i_wait: number;
        /** Allow clients to book on behalf of a guest. */
        is_book_for_guest: boolean;
        /** If `true`, this class period was canceled. Otherwise, this will be `false`. */
        is_cancel: boolean;
        /** If `true`, this is an event. Otherwise, this will be `false`. */
        is_event: boolean;
        /** If `true`, this class is virtual. Otherwise, this will be `false`. */
        is_virtual: boolean;
        /** This will be `true` if user is only on the wait-list. Otherwise, this will be `false`. */
        is_wait_list_enabled: boolean;
        /** The class key. */
        k_class: string;
        /** The class period key. */
        k_class_period: string;
        /** The key of the session's location. */
        k_location: string;
        /** The title of the session. */
        s_title: string;
        /** The direct link to start booking on the WellnessLiving website. */
        url_book: string;
    }>;
    /** If `true`, the list of sessions contains sessions from different time zones. Otherwise, this will... */
    is_timezone_different: boolean;
    /** If `true`, there exists at least one virtual service by a specified */
    is_virtual_service: boolean;
}
export interface WlScheduleTabTabParams {
    /** Whether we are inside the widget or not. */
    is_widget: boolean;
    /** The key of the current business. */
    k_business: string;
    /** The key of the current location. */
    k_location: string;
    /** The key of the current user. */
    uid: string;
}
export interface WlScheduleTabTabResponse {
    a_tab: Array<{
        /** List of class tab objects. */
        id_class_tab_object: number;
        /** List of class tab objects. */
        id_class_tab_system: number;
        /** The class tab key. This will be `null` if it's a system tab. */
        k_class_tab: string | null;
        /** A unique identifier in the list. */
        k_id: string;
        /** The tab title. */
        s_title: string;
    }>;
}
export interface WlScheduleClassViewClassViewGetParams {
    /** The date/time of the session. */
    dt_date: string;
    /** The class period key. */
    k_class_period: string;
    /** The user key. */
    uid: string;
    /** A list of sessions to get information for. Every element has the following keys: */
    a_session_request?: Array<{
        /** The date/time of the session in UTC. */
        dt_date: string;
        /** The session key. */
        k_class_period: string;
    }> | null;
    /** Key of the business in which the action is performed. */
    k_business?: string | null;
}
export interface WlScheduleClassViewClassViewGetResponse {
    a_asset: Array<{
        /** Number of sessions. */
        i_count: number;
        /** Asset index. */
        i_index: number;
        /** Type of the asset: Asset or Off-Site Location. */
        id_category: string;
        /** City of the asset, if this is Off-Site Location. */
        k_city: string;
        /** Resource key. */
        k_resource: string;
        /** Address of the asset, if this is Off-Site Location. */
        text_address: string;
        /** Additional address guidance, if this is Off-Site Location. */
        text_guide: string;
        /** Asset index with '#' prefix. */
        text_index: string;
        /** Postal code of the asset, if this is Off-Site Location. */
        text_postal: string;
        /** Asset title that consists of the asset title itself concatenated with its index (in case of multi... */
        text_name: string;
    }> | null;
    a_class: Array<{
        /** Keys are class key. */
        a_class_tab: Array<string>;
        /** Class image data: */
        a_image: {
            /** Image height. */
            i_height: number;
            /** Image width. */
            i_width: number;
            /** Whether current image is empty. */
            is_empty: boolean;
            /** Url link to image. */
            s_url: string;
        };
        /** List of search tags. */
        a_search_tag: {
            /** Search tag key. */
            k_search_tag: string;
            /** Search tag name. */
            text_title: string;
        };
        /** List of tags. */
        a_tag: Array<number>;
        /** Whether current client can book class. */
        can_book: boolean;
        /** Session date/time in UTC. */
        dt_date_global: string;
        /** Start date in local time. */
        dt_date_local: string;
        /** Reason why client can not book class. Not empty only if `can_book` is `false`. */
        html_deny_reason: string;
        /** Class description. */
        html_description: string;
        /** Special instructions. */
        html_special: string;
        /** Timezone title. */
        text_timezone: string;
        /** Age from that class is allowed. `null` if information is not available. */
        i_age_from: number | null;
        /** Age to that class is allowed. `null` if information is not available. */
        i_age_to: number | null;
        /** A total number of booked visits in the class, including all lists: active and waitlist. */
        i_book: number;
        /** A total number of booked active visits in the class. */
        i_book_active: number;
        /** Class capacity. */
        i_capacity: number;
        /** Class duration. In number of minutes. */
        i_duration: number;
        /** Limit of wait list. `null` if limit is not set. */
        i_wait_limit: number | null;
        /** Reasons why the client can't book this class. */
        id_deny_reason: number;
        /** Whether current class was booked by current client. */
        is_book: boolean;
        /** Allow clients to book on behalf of a guest. */
        is_book_for_guest: boolean;
        /** `true` if class period was cancelled; `false` otherwise. */
        is_cancel: boolean;
        /** `true` if it is event; `false` if it is class. */
        is_event: boolean;
        /** `true` if this class can be paid with promotion only; `false` otherwise. */
        is_promotion_only: boolean;
        /** `true` if class is virtual, `false` otherwise. */
        is_virtual: boolean;
        /** `true` if user can take place in wait list only; `false` otherwise. */
        is_wait_list: boolean;
        /** `true` if wait list is enabled for class; `false` otherwise. */
        is_wait_list_enabled: boolean;
        /** Off-site location asset key. Empty if off-site location is not assigned to this class. */
        k_resource_location: string;
        /** Session price. */
        m_price: string;
        /** Class duration. In human readable format. */
        s_duration: string;
        /** Class name. */
        s_title: string;
        /** Class room. */
        text_room: string;
    }> | null;
    a_location: Array<{
        /** Location latitude. */
        f_latitude: number;
        /** Location longitude. */
        f_longitude: number;
        /** Location rating. From 1 to 5. */
        f_rate: number;
        /** Location key. */
        k_location: string;
        /** Location address. */
        s_address: string;
        /** Query to search location on "Google maps". */
        s_map: string;
        /** Location phone. */
        s_phone: string;
        /** Location name. */
        s_title: string;
    }> | null;
    a_session_result: Array<{
        /** Array of asset. */
        a_asset: {
            /** Number of sessions. */
            i_count: number;
            /** Asset index. */
            i_index: number;
            /** Type of the asset: Asset or Off-Site Location. */
            id_category: string;
            /** City of the asset, if this is Off-Site Location. */
            k_city: string;
            /** Resource key. */
            k_resource: string;
            /** Address of the asset, if this is Off-Site Location. */
            text_address: string;
            /** Additional address guidance, if this is Off-Site Location. */
            text_guide: string;
            /** Asset index with '#' prefix. */
            text_index: string;
            /** Postal code of the asset, if this is Off-Site Location. */
            text_postal: string;
            /** Asset title that consists of the asset title itself concatenated with its index (in case of multi... */
            text_name: string;
        };
        /** Class information. */
        a_class: {
            /** Keys are class key. */
            a_class_tab: Array<string>;
            /** Class image data: */
            a_image: Record<string, unknown>;
            /** List of search tags. */
            a_search_tag: Record<string, unknown>;
            /** List of tags. */
            a_tag: Array<number>;
            /** Whether current client can book class. */
            can_book: boolean;
            /** Session date/time in UTC. */
            dt_date_global: string;
            /** Start date in local time. */
            dt_date_local: string;
            /** Reason why client can not book class. Not empty only if `can_book` is `false`. */
            html_deny_reason: string;
            /** Class description. */
            html_description: string;
            /** Special instructions. */
            html_special: string;
            /** Timezone title. */
            text_timezone: string;
            /** Age from that class is allowed. `null` if information is not available. */
            i_age_from: number | null;
            /** Age to that class is allowed. `null` if information is not available. */
            i_age_to: number | null;
            /** A total number of booked visits in the class, including all lists: active and waitlist. */
            i_book: number;
            /** A total number of booked active visits in the class. */
            i_book_active: number;
            /** Class capacity. */
            i_capacity: number;
            /** Class duration. In number of minutes. */
            i_duration: number;
            /** Limit of wait list. `null` if limit is not set. */
            i_wait_limit: number | null;
            /** Reasons why the client can't book this class. */
            id_deny_reason: number;
            /** Whether current class was booked by current client. */
            is_book: boolean;
            /** Allow clients to book on behalf of a guest. */
            is_book_for_guest: boolean;
            /** `true` if class period was cancelled; `false` otherwise. */
            is_cancel: boolean;
            /** `true` if it is event; `false` if it is class. */
            is_event: boolean;
            /** `true` if this class can be paid with promotion only; `false` otherwise. */
            is_promotion_only: boolean;
            /** `true` if class is virtual, `false` otherwise. */
            is_virtual: boolean;
            /** `true` if user can take place in wait list only; `false` otherwise. */
            is_wait_list: boolean;
            /** `true` if wait list is enabled for class; `false` otherwise. */
            is_wait_list_enabled: boolean;
            /** Off-site location asset key. Empty if off-site location is not assigned to this class. */
            k_resource_location: string;
            /** Session price. */
            m_price: string;
            /** Class duration. In human readable format. */
            s_duration: string;
            /** Class name. */
            s_title: string;
            /** Class room. */
            text_room: string;
        };
        /** Location info. */
        a_location: {
            /** Location latitude. */
            f_latitude: number;
            /** Location longitude. */
            f_longitude: number;
            /** Location rating. From 1 to 5. */
            f_rate: number;
            /** Location key. */
            k_location: string;
            /** Location address. */
            s_address: string;
            /** Query to search location on "Google maps". */
            s_map: string;
            /** Location phone. */
            s_phone: string;
            /** Location name. */
            s_title: string;
        };
        /** Staff list. */
        a_staff: {
            /** Information about staff photo: */
            a_logo: Record<string, unknown>;
            /** Whether staff or pay rate changed due quick substitution. */
            is_quick_substitute: boolean;
            /** Whether or not this staff member is a substitute. */
            is_substitute: boolean;
            /** Deprecated use `uid_staff` instead. */
            k_staff: string;
            /** Staff user key. */
            uid_staff: string;
            /** 1st letter of surname of staff member. */
            s_family: string;
            /** Staff name. */
            s_name: string;
        };
        /** List of other locations where virtual class can be booked. */
        a_virtual_location: Array<string>;
        /** List of classes and events, which client should visit before this one. */
        a_visits_required: {
            /** Number of visits. */
            i_count: number;
            /** `true` if this is an event, `false` if this is a class. */
            is_event: boolean;
            /** Key of the class or event. */
            k_class: string;
            /** Name of the class or event. */
            text_title: string;
        };
    }>;
    a_staff: Array<{
        /** Information about staff photo: */
        a_logo: {
            /** Class to work with gender string identifiers. */
            id_gender: number;
            /** `true` - staff has photo; `false` - has no photo. */
            is_empty: boolean;
            /** URL to staff photo. */
            s_url: string;
        };
        /** Whether staff or pay rate changed due quick substitution. */
        is_quick_substitute: boolean;
        /** Whether or not this staff member is a substitute. */
        is_substitute: boolean;
        /** Deprecated use `uid_staff` instead. */
        k_staff: string;
        /** Staff user key. */
        uid_staff: string;
        /** 1st letter of surname of staff member. */
        s_family: string;
        /** Staff name. */
        s_name: string;
    }> | null;
    /** List of other locations where virtual class can be booked. */
    a_virtual_location: Array<string>;
    a_visits_required: Array<{
        /** Number of visits. */
        i_count: number;
        /** `true` if this is an event, `false` if this is a class. */
        is_event: boolean;
        /** Key of the class or event. */
        k_class: string;
        /** Name of the class or event. */
        text_title: string;
    }>;
}
export interface WlScheduleClassViewClassViewPostParams {
    /** The date/time of the session. */
    dt_date: string;
    /** The class period key. */
    k_class_period: string;
    /** The user key. */
    uid: string;
    /** A list of sessions to get information for. Every element has the following keys: */
    a_session_request?: Array<{
        /** The date/time of the session in UTC. */
        dt_date: string;
        /** The session key. */
        k_class_period: string;
    }> | null;
    /** Key of the business in which the action is performed. */
    k_business?: string | null;
}
export interface WlScheduleClassViewClassViewPostResponse {
    a_asset: Array<{
        /** Number of sessions. */
        i_count: number;
        /** Asset index. */
        i_index: number;
        /** Type of the asset: Asset or Off-Site Location. */
        id_category: string;
        /** City of the asset, if this is Off-Site Location. */
        k_city: string;
        /** Resource key. */
        k_resource: string;
        /** Address of the asset, if this is Off-Site Location. */
        text_address: string;
        /** Additional address guidance, if this is Off-Site Location. */
        text_guide: string;
        /** Asset index with '#' prefix. */
        text_index: string;
        /** Postal code of the asset, if this is Off-Site Location. */
        text_postal: string;
        /** Asset title that consists of the asset title itself concatenated with its index (in case of multi... */
        text_name: string;
    }> | null;
    a_class: Array<{
        /** Keys are class key. */
        a_class_tab: Array<string>;
        /** Class image data: */
        a_image: {
            /** Image height. */
            i_height: number;
            /** Image width. */
            i_width: number;
            /** Whether current image is empty. */
            is_empty: boolean;
            /** Url link to image. */
            s_url: string;
        };
        /** List of search tags. */
        a_search_tag: {
            /** Search tag key. */
            k_search_tag: string;
            /** Search tag name. */
            text_title: string;
        };
        /** List of tags. */
        a_tag: Array<number>;
        /** Whether current client can book class. */
        can_book: boolean;
        /** Session date/time in UTC. */
        dt_date_global: string;
        /** Start date in local time. */
        dt_date_local: string;
        /** Reason why client can not book class. Not empty only if `can_book` is `false`. */
        html_deny_reason: string;
        /** Class description. */
        html_description: string;
        /** Special instructions. */
        html_special: string;
        /** Timezone title. */
        text_timezone: string;
        /** Age from that class is allowed. `null` if information is not available. */
        i_age_from: number | null;
        /** Age to that class is allowed. `null` if information is not available. */
        i_age_to: number | null;
        /** A total number of booked visits in the class, including all lists: active and waitlist. */
        i_book: number;
        /** A total number of booked active visits in the class. */
        i_book_active: number;
        /** Class capacity. */
        i_capacity: number;
        /** Class duration. In number of minutes. */
        i_duration: number;
        /** Limit of wait list. `null` if limit is not set. */
        i_wait_limit: number | null;
        /** Reasons why the client can't book this class. */
        id_deny_reason: number;
        /** Whether current class was booked by current client. */
        is_book: boolean;
        /** Allow clients to book on behalf of a guest. */
        is_book_for_guest: boolean;
        /** `true` if class period was cancelled; `false` otherwise. */
        is_cancel: boolean;
        /** `true` if it is event; `false` if it is class. */
        is_event: boolean;
        /** `true` if this class can be paid with promotion only; `false` otherwise. */
        is_promotion_only: boolean;
        /** `true` if class is virtual, `false` otherwise. */
        is_virtual: boolean;
        /** `true` if user can take place in wait list only; `false` otherwise. */
        is_wait_list: boolean;
        /** `true` if wait list is enabled for class; `false` otherwise. */
        is_wait_list_enabled: boolean;
        /** Off-site location asset key. Empty if off-site location is not assigned to this class. */
        k_resource_location: string;
        /** Session price. */
        m_price: string;
        /** Class duration. In human readable format. */
        s_duration: string;
        /** Class name. */
        s_title: string;
        /** Class room. */
        text_room: string;
    }> | null;
    a_location: Array<{
        /** Location latitude. */
        f_latitude: number;
        /** Location longitude. */
        f_longitude: number;
        /** Location rating. From 1 to 5. */
        f_rate: number;
        /** Location key. */
        k_location: string;
        /** Location address. */
        s_address: string;
        /** Query to search location on "Google maps". */
        s_map: string;
        /** Location phone. */
        s_phone: string;
        /** Location name. */
        s_title: string;
    }> | null;
    a_session_result: Array<{
        /** Array of asset. */
        a_asset: {
            /** Number of sessions. */
            i_count: number;
            /** Asset index. */
            i_index: number;
            /** Type of the asset: Asset or Off-Site Location. */
            id_category: string;
            /** City of the asset, if this is Off-Site Location. */
            k_city: string;
            /** Resource key. */
            k_resource: string;
            /** Address of the asset, if this is Off-Site Location. */
            text_address: string;
            /** Additional address guidance, if this is Off-Site Location. */
            text_guide: string;
            /** Asset index with '#' prefix. */
            text_index: string;
            /** Postal code of the asset, if this is Off-Site Location. */
            text_postal: string;
            /** Asset title that consists of the asset title itself concatenated with its index (in case of multi... */
            text_name: string;
        };
        /** Class information. */
        a_class: {
            /** Keys are class key. */
            a_class_tab: Array<string>;
            /** Class image data: */
            a_image: Record<string, unknown>;
            /** List of search tags. */
            a_search_tag: Record<string, unknown>;
            /** List of tags. */
            a_tag: Array<number>;
            /** Whether current client can book class. */
            can_book: boolean;
            /** Session date/time in UTC. */
            dt_date_global: string;
            /** Start date in local time. */
            dt_date_local: string;
            /** Reason why client can not book class. Not empty only if `can_book` is `false`. */
            html_deny_reason: string;
            /** Class description. */
            html_description: string;
            /** Special instructions. */
            html_special: string;
            /** Timezone title. */
            text_timezone: string;
            /** Age from that class is allowed. `null` if information is not available. */
            i_age_from: number | null;
            /** Age to that class is allowed. `null` if information is not available. */
            i_age_to: number | null;
            /** A total number of booked visits in the class, including all lists: active and waitlist. */
            i_book: number;
            /** A total number of booked active visits in the class. */
            i_book_active: number;
            /** Class capacity. */
            i_capacity: number;
            /** Class duration. In number of minutes. */
            i_duration: number;
            /** Limit of wait list. `null` if limit is not set. */
            i_wait_limit: number | null;
            /** Reasons why the client can't book this class. */
            id_deny_reason: number;
            /** Whether current class was booked by current client. */
            is_book: boolean;
            /** Allow clients to book on behalf of a guest. */
            is_book_for_guest: boolean;
            /** `true` if class period was cancelled; `false` otherwise. */
            is_cancel: boolean;
            /** `true` if it is event; `false` if it is class. */
            is_event: boolean;
            /** `true` if this class can be paid with promotion only; `false` otherwise. */
            is_promotion_only: boolean;
            /** `true` if class is virtual, `false` otherwise. */
            is_virtual: boolean;
            /** `true` if user can take place in wait list only; `false` otherwise. */
            is_wait_list: boolean;
            /** `true` if wait list is enabled for class; `false` otherwise. */
            is_wait_list_enabled: boolean;
            /** Off-site location asset key. Empty if off-site location is not assigned to this class. */
            k_resource_location: string;
            /** Session price. */
            m_price: string;
            /** Class duration. In human readable format. */
            s_duration: string;
            /** Class name. */
            s_title: string;
            /** Class room. */
            text_room: string;
        };
        /** Location info. */
        a_location: {
            /** Location latitude. */
            f_latitude: number;
            /** Location longitude. */
            f_longitude: number;
            /** Location rating. From 1 to 5. */
            f_rate: number;
            /** Location key. */
            k_location: string;
            /** Location address. */
            s_address: string;
            /** Query to search location on "Google maps". */
            s_map: string;
            /** Location phone. */
            s_phone: string;
            /** Location name. */
            s_title: string;
        };
        /** Staff list. */
        a_staff: {
            /** Information about staff photo: */
            a_logo: Record<string, unknown>;
            /** Whether staff or pay rate changed due quick substitution. */
            is_quick_substitute: boolean;
            /** Whether or not this staff member is a substitute. */
            is_substitute: boolean;
            /** Deprecated use `uid_staff` instead. */
            k_staff: string;
            /** Staff user key. */
            uid_staff: string;
            /** 1st letter of surname of staff member. */
            s_family: string;
            /** Staff name. */
            s_name: string;
        };
        /** List of other locations where virtual class can be booked. */
        a_virtual_location: Array<string>;
        /** List of classes and events, which client should visit before this one. */
        a_visits_required: {
            /** Number of visits. */
            i_count: number;
            /** `true` if this is an event, `false` if this is a class. */
            is_event: boolean;
            /** Key of the class or event. */
            k_class: string;
            /** Name of the class or event. */
            text_title: string;
        };
    }>;
    a_staff: Array<{
        /** Information about staff photo: */
        a_logo: {
            /** Class to work with gender string identifiers. */
            id_gender: number;
            /** `true` - staff has photo; `false` - has no photo. */
            is_empty: boolean;
            /** URL to staff photo. */
            s_url: string;
        };
        /** Whether staff or pay rate changed due quick substitution. */
        is_quick_substitute: boolean;
        /** Whether or not this staff member is a substitute. */
        is_substitute: boolean;
        /** Deprecated use `uid_staff` instead. */
        k_staff: string;
        /** Staff user key. */
        uid_staff: string;
        /** 1st letter of surname of staff member. */
        s_family: string;
        /** Staff name. */
        s_name: string;
    }> | null;
    /** List of other locations where virtual class can be booked. */
    a_virtual_location: Array<string>;
}
export interface WlSchedulePagePageElementParams {
    /** Key of the business to which the visit belongs. */
    k_business: string;
    /** Visit key. */
    k_visit: string;
}
export interface WlSchedulePagePageElementResponse {
    a_appointment_visit_info: Array<{
        /** Possible states of the visit: book, attended, cancelled, etc. */
        id_visit: number;
        /** `true` means that appointment was requested and confirmed by the staff. */
        is_confirmed: boolean;
        /** `true` means that appointment was requested and denied by the staff. */
        is_deny: boolean;
        /** `true` means that the client will receive a notification, if appointment will be confirmed by the... */
        is_notify_request_accept: boolean;
        /** `true` means that the client will receive a notification, if appointment will be denied by the st... */
        is_notify_request_deny: boolean;
        /** `true` means that appointment was requested, but not confirmed by the staff. */
        is_request: boolean;
    }>;
    a_asset: Array<{
        /** Asset title that consists of the asset title itself concatenated with its index (in case of multi... */
        s_name: string;
        /** Number of sessions. */
        i_count: string;
    }>;
    a_class_info: Array<{
        /** A total number of booked visits in the class, including all lists: active and waitlist. */
        i_book_active: number;
        /** Class capacity. */
        i_capacity: number;
        /** A total number of booked visits in the waitlist. */
        i_wait: number;
    }> | null;
    a_resource_image: Array<{
        /** Image data. */
        a_image: {
            /** Actual height of thumbnail image. */
            i_height: number;
            /** Height of original image. */
            i_height_src: number;
            /** Angle on which image was rotated compared to the original. */
            i_rotate: number;
            /** Actual width of thumbnail image. */
            i_width: number;
            /** Width of original image. */
            i_width_src: number;
            /** Whether thumbnail is a resized variant of original image. If `false`, `url-thumbnail` */
            'is-resize': boolean;
            /** URL to original image in file storage. */
            'url-view': string;
            /** URL to resized and rotated image in file storage. If the original is larger than */
            'url-thumbnail': string;
        };
        /** Angle of shape rotation. Is set only if `sid_image` equals to `shape`. */
        i_angle?: number;
        /** Height of image. */
        i_height: number;
        /** Width of image. */
        i_width: number;
        /** Whether is empty. */
        is_empty: boolean;
        /** Resource key. */
        k_resource: string;
        /** Image kind. String representation of one of [ImageSid](#/components/schemas/Wl.Resource.Image.Ima... */
        sid_image: string;
        /** Icon name.String representation of one of [ImageIconSid](#/components/schemas/Wl.Resource.Image.I... */
        sid_image_icon: string;
        /** Shape name. String representation of one of [ImageShapeSid](#/components/schemas/Wl.Resource.Imag... */
        sid_image_shape: string;
        /** Path to image. */
        url: string;
    }> | null;
    a_staff: Array<{
        /** The staff member key. */
        k_staff: string;
        /** The surname of the staff member. */
        s_family: string;
        /** The first name of the staff member. */
        s_name: string;
    }>;
    /** The latest date and time for when the visit can be canceled without penalty. */
    dt_cancel: string;
    /** The date and time of the visit in UTC. */
    dt_date_global: string;
    /** The date and time of the visit in the local time zone. */
    dt_date_local: string;
    /** Session date/time in timezone of the location where it takes place. */
    dtl_location: string;
    /** The description of the service. */
    html_description: string;
    /** The special instructions for the service. */
    html_special: string;
    /** Capacity of the service. */
    i_capacity: number | null;
    /** The scheduled duration of the visit. */
    i_duration: number;
    /** Estimated place of reservation on the waiting list. */
    i_wait_spot: number;
    /** A list of types of visit note. */
    id_note: number | null;
    /** List of possible value of virtual integrations. */
    id_virtual_provider: number | null;
    /** Possible states of the visit: book, attended, cancelled, etc. */
    id_visit: number;
    /** If `true`, then this visit is ready to be checked in. If `false`, then this visit can't be checke... */
    is_checkin: boolean;
    /** This will be `true` if clients can cancel the session. Otherwise, this will be `false`. */
    is_enable_client_cancel: boolean;
    /** If `true`, then this visit is a part of a larger event. If `false`, then this visit is an individ... */
    is_event: boolean;
    /** `true` - service is in progress; `false` - otherwise. */
    is_in_progress: boolean;
    /** `true` - service is virtual; `false` - otherwise. */
    is_virtual: boolean;
    /** The appointment key. */
    k_appointment: string | null;
    /** The class key. This will be set only if the visit is a class or an event. */
    k_class: string | null;
    /** The class period key. This will be set only if the visit is a class or an event. */
    k_class_period: string | null;
    /** The location key. */
    k_location: string;
    /** Resource key. */
    k_resource: string | null;
    /** Session key. */
    k_service: string | null;
    /** The name of class or service. */
    s_title: string;
    /** Location title. */
    text_location: string;
    /** Room where session takes place. */
    text_room: string;
    /** Timezone abbreviation. */
    text_timezone: string;
    /** The user key. */
    uid: string;
    /** URL of the image representing the service or resource. */
    url_image: string;
    /** Url to wait page is the beginning of an online service. */
    url_virtual_join: string;
}
export interface WlSchedulePagePageListParams {
    /** If `true`, then all the client previous visits will be retrieved. */
    is_past: boolean;
    /** The business key. */
    k_business: string;
    /** If the date is set, a list of services before this date will be returned. */
    dtu_end?: string | null;
    /** If the date is set, a list of services after this date will be returned. */
    dtu_start?: string | null;
    /** The user key. */
    uid?: string | null;
}
export interface WlSchedulePagePageListResponse {
    a_visit: Array<{
        /** Date and time of the visit in UTC. */
        dtu_date: string;
        /** Key of the business in which this visit was made. */
        k_business: string;
        /** Key of a book/visit. */
        k_visit: string;
        /** Possible states of the visit: book, attended, cancelled, etc. */
        id_visit: number;
    }>;
}
export interface WlAppointmentEditAddonUpdateGetParams {
    /** List of user keys to get add-ons for. Not empty only when getting add-ons for new appointment */
    a_uid: Array<string>;
    /** The appointment key. */
    k_appointment: string;
    /** The business key. This will be an empty string if not set yet. */
    k_business: string;
    /** Location key. */
    k_location: string;
    /** Service key. */
    k_service: string;
}
export interface WlAppointmentEditAddonUpdateGetResponse {
    a_addon_data: Array<{
        /** Data about appointment add-ons. */
        a_addon: {
            /** Formatted HTML price of the addon. */
            html_amount: string;
            /** HTML-escaped duration text. */
            html_duration: string;
            /** HTML-escaped addon title. */
            html_title: string;
            /** Pre-purchased units the client has; at least 0. */
            i_count_banked: number;
            /** Paid units in the current appointment. */
            i_count_paid: number;
            /** Unpaid units in the current appointment. */
            i_count_unpaid: number;
            /** Used units in the current appointment. */
            i_count_use: number;
            /** Total product count for this appointment: `i_count_paid` plus `i_count_unpaid`. */
            i_product: number;
            /** `true` when the addon has no products or is not active. */
            is_disable: boolean;
        };
        /** Add-ons available for purchase: zero quantity, zero usage quantity, and zero banked quantity. */
        a_addon_buy: {
            /** Formatted HTML price of the addon. */
            html_amount: string;
            /** HTML-escaped duration text. */
            html_duration: string;
            /** HTML-escaped addon title. */
            html_title: string;
            /** Pre-purchased units the client has; at least 0. */
            i_count_banked: number;
            /** Paid units in the current appointment. */
            i_count_paid: number;
            /** Unpaid units in the current appointment. */
            i_count_unpaid: number;
            /** Used units in the current appointment. */
            i_count_use: number;
            /** Total product count for this appointment: `i_count_paid` plus `i_count_unpaid`. */
            i_product: number;
            /** `true` when the addon has no products or is not active. */
            is_disable: boolean;
        };
        /** Add-ons already owned but not selected: zero quantity, zero usage quantity, non-zero banked quant... */
        a_addon_own: {
            /** Formatted HTML price of the addon. */
            html_amount: string;
            /** HTML-escaped duration text. */
            html_duration: string;
            /** HTML-escaped addon title. */
            html_title: string;
            /** Pre-purchased units the client has; at least 0. */
            i_count_banked: number;
            /** Paid units in the current appointment. */
            i_count_paid: number;
            /** Unpaid units in the current appointment. */
            i_count_unpaid: number;
            /** Used units in the current appointment. */
            i_count_use: number;
            /** Total product count for this appointment: `i_count_paid` plus `i_count_unpaid`. */
            i_product: number;
            /** `true` when the addon has no products or is not active. */
            is_disable: boolean;
        };
        /** Add-ons selected for this appointment: non-zero quantity or non-zero usage quantity. */
        a_addon_select: {
            /** Formatted HTML price of the addon. */
            html_amount: string;
            /** HTML-escaped duration text. */
            html_duration: string;
            /** HTML-escaped addon title. */
            html_title: string;
            /** Pre-purchased units the client has; at least 0. */
            i_count_banked: number;
            /** Paid units in the current appointment. */
            i_count_paid: number;
            /** Unpaid units in the current appointment. */
            i_count_unpaid: number;
            /** Used units in the current appointment. */
            i_count_use: number;
            /** Total product count for this appointment: `i_count_paid` plus `i_count_unpaid`. */
            i_product: number;
            /** `true` when the addon has no products or is not active. */
            is_disable: boolean;
        };
        /** Whether at least one of appointment add-ons is bankable. */
        is_addon_banking: boolean;
        /** Whether all appointment add-ons have non-zero quantity or non-zero usage quantity. */
        is_all_addon_selected: boolean;
        /** Determines whether the add-on search field needs to be shown. */
        is_search: boolean;
    }>;
}
export interface WlAppointmentEditAddonUpdatePutParams {
    /** The appointment key. */
    k_appointment: string;
    /** The business key. This will be an empty string if not set yet. */
    k_business: string;
}
export type WlAppointmentEditAddonUpdatePutResponse = Record<string, unknown>;
export interface WlAppointmentInfoInfoParams {
    /** Class identifier to get information for. */
    k_appointment: string;
}
export interface WlAppointmentInfoInfoResponse {
    a_next: Array<{
        /** Start date and time of the next appointment in local time in MySQL format. */
        dt_date_local: string;
        /** `true` if visit has a note, `false` otherwise. */
        has_note: boolean;
        /** Duration of the next appointment in minutes. */
        i_duration: number;
        /** `true` if employees (staff) can view this appointment, `false` otherwise. */
        can_view: boolean;
        /** Next appointment key. */
        k_appointment: string;
        /** Visit key of next appointment. */
        k_visit: string;
        /** Title of next appointment. */
        text_appointment_title: string;
        /** Full staff name or empty if no staff assigned. */
        text_staff_name: string;
    }>;
    a_previous: Array<{
        /** Start date and time of the previous appointment in local time in MySQL format. */
        dt_date_local: string;
        /** `true` if visit has a note, `false` otherwise. */
        has_note: boolean;
        /** Duration of the previous appointment in minutes. */
        i_duration: number;
        /** `true` if employees (staff) can view this appointment, `false` otherwise. */
        can_view: boolean;
        /** Previous appointment key. */
        k_appointment: string;
        /** Visit key of previous appointment. */
        k_visit: string;
        /** Title of previous appointment. */
        text_appointment_title: string;
        /** Full staff name or empty if no staff assigned. */
        text_staff_name: string;
    }>;
    a_question: Array<{
        /** Size of rows for answer. */
        i_size: number;
        /** `true` if `i_size` greater than 1, `false` otherwise. Can be empty if answer is loaded. */
        is_multiple: boolean;
        /** Answer for `s_question`. */
        s_answer: string;
        /** Answer key. */
        s_key: string;
        /** Question. */
        s_question: string;
    }>;
    a_resource: Array<{
        /** Background color of the asset as an integer (RGB). */
        i_color_background: number;
        /** Border color of the asset as an integer (RGB). */
        i_color_border: number;
        /** Index of the booked asset slot. */
        i_index: number;
        /** `true` if the asset was removed from the booking, `false` otherwise. */
        is_remove: boolean;
        /** Asset key. */
        k_resource: string;
        /** Asset category key. */
        k_resource_type: string;
        /** Asset name. */
        s_resource: string;
        /** Asset category name. */
        s_resource_type: string;
        /** Display alias for the asset slot, if configured. */
        text_resource_alias: string;
    }>;
    a_shop_product_option: Array<{
        /** List of purchased product keys. Empty if no products were purchased. Each element: */
        a_login_product: {
            /** Purchased product key. */
            k_login_product: string;
        };
        /** Deprecated, always `null`. */
        k_login_product: string;
        /** Primary key of add-on. */
        k_shop_product: string;
        /** Add-on option. */
        k_shop_product_option: string;
        /** Price that it adds to an appointment. */
        m_amount: string;
    }>;
    /** Date/time of appointment in location timezone. */
    dt_date_local: string;
    /** Appointment duration (in minutes). */
    i_duration: number | null;
    /** Index of booked asset. */
    i_index: number | null;
    /** The possible payment types an appointment can have. */
    id_appointment_pay: number;
    /** Location key. */
    k_location: string;
    /** Purchased promotion which provides this appointment. */
    k_login_promotion: string | null;
    /** Asset key. */
    k_resource: string | null;
    /** Asset category key. */
    k_resource_type: string | null;
    /** Service key. */
    k_service: string | null;
    /** Service category key. */
    k_service_category: string | null;
    /** Purchased drop-in which provides this appointment. */
    k_session_pass: string | null;
    /** Staff member who conducts this appointment. */
    k_staff: string;
    /** Title of the appointment. */
    text_title: string;
    /** User for whom this appointment was booked. */
    uid_appointment: string;
    /** Staff member who conducts this appointment. */
    uid_staff: string | null;
}
export interface WlAppointmentRecentRecentServiceParams {
    /** Count of last booked services to return. Default value is 5. */
    i_visit: number;
    /** Type of service to return. One of [ServiceSid](#/components/schemas/Wl.Service.ServiceSid) consta... */
    id_service: number;
    /** The key of the business. */
    k_business: string;
    /** The key of the user. */
    uid: string;
}
export interface WlAppointmentRecentRecentServiceResponse {
    /** List of last booked services. */
    a_service_last: Array<string>;
}
export interface WlBookProcessProcessGroupParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
}
export interface WlBookProcessProcessGroupResponse {
    a_book_error: Array<{
        /** Error code identifying the type of error that occurred. */
        text_code: string;
        /** Human-readable error message describing the booking failure. */
        text_message: string;
    }>;
    /** Primary keys of users' activity that correspond to bookings made. */
    a_login_activity_book: Array<string>;
    /** Primary keys of bookings made. */
    a_visit: Array<string>;
    /** The key of the user's activity corresponding to the purchase made. */
    k_login_activity_purchase: string | null;
}
export interface WlBookProcessProcessParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessProcessResponse {
    /** Relationships who clients are allowed to book for. */
    a_family_relation_login_allow: Array<number> | null;
    a_path: Array<{
        /** Class/Event booking process sid class. */
        id_book_process: number;
        /** `true` - this item is current. */
        is_current?: boolean;
    }>;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require: number;
    /** `true` if this class has age restriction and requires user to specify age. `false` otherwise. */
    is_age_require: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** If `true`, the session being booked is an event. Otherwise, this will be `false`. */
    is_event: boolean;
    /** Determines whether clients are allowed to book for their relationships without switching profiles. */
    is_family_relation_book: boolean;
    /** Determines whether the class/event is free (price). */
    is_free: boolean;
    /** `true` if the client has an ach account, `false` otherwise. */
    is_have_ach: boolean;
    /** If `true`, the client has a credit card. Otherwise, this will be `false`. */
    is_have_credit_card: boolean;
    /** `true` - the client can select several sessions per booking. */
    is_session: boolean;
    /** If `true`, the user can be placed on a wait list. Otherwise, this will be `false`. */
    is_wait: boolean;
    /** If `true`, the user can be placed on a wait list without payment, `false` otherwise. */
    is_wait_list_unpaid: boolean;
    /** The key of the location where the session is booked. */
    k_location: string;
}
export interface WlBookProcessProcess54Params {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessProcess54Response {
    /** Relationships who clients are allowed to book for. */
    a_family_relation_login_allow: Array<number> | null;
    a_path: Array<{
        /** Class/Event booking process sid class. */
        id_book_process: number;
        /** `true` - this item is current. */
        is_current?: boolean;
    }>;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require: number;
    /** `true` if this class has age restriction and requires user to specify age. `false` otherwise. */
    is_age_require: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** If `true`, the session being booked is an event. Otherwise, this will be `false`. */
    is_event: boolean;
    /** Determines whether clients are allowed to book for their relationships without switching profiles. */
    is_family_relation_book: boolean;
    /** Determines whether the class/event is free (price). */
    is_free: boolean;
    /** `true` if the client has an ach account, `false` otherwise. */
    is_have_ach: boolean;
    /** If `true`, the client has a credit card. Otherwise, this will be `false`. */
    is_have_credit_card: boolean;
    /** `true` - the client can select several sessions per booking. */
    is_session: boolean;
    /** If `true`, the user can be placed on a wait list. Otherwise, this will be `false`. */
    is_wait: boolean;
    /** If `true`, the user can be placed on a wait list without payment, `false` otherwise. */
    is_wait_list_unpaid: boolean;
    /** The key of the location where the session is booked. */
    k_location: string;
}
export interface WlBookProcessProcess59Params {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessProcess59Response {
    /** Relationships who clients are allowed to book for. */
    a_family_relation_login_allow: Array<number> | null;
    a_path: Array<{
        /** Class/Event booking process sid class. */
        id_book_process: number;
        /** `true` - this item is current. */
        is_current?: boolean;
    }>;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require: number;
    /** `true` if this class has age restriction and requires user to specify age. `false` otherwise. */
    is_age_require: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** If `true`, the session being booked is an event. Otherwise, this will be `false`. */
    is_event: boolean;
    /** Determines whether clients are allowed to book for their relationships without switching profiles. */
    is_family_relation_book: boolean;
    /** Determines whether the class/event is free (price). */
    is_free: boolean;
    /** `true` if the client has an ach account, `false` otherwise. */
    is_have_ach: boolean;
    /** If `true`, the client has a credit card. Otherwise, this will be `false`. */
    is_have_credit_card: boolean;
    /** `true` - the client can select several sessions per booking. */
    is_session: boolean;
    /** If `true`, the user can be placed on a wait list. Otherwise, this will be `false`. */
    is_wait: boolean;
    /** If `true`, the user can be placed on a wait list without payment, `false` otherwise. */
    is_wait_list_unpaid: boolean;
    /** The key of the location where the session is booked. */
    k_location: string;
}
export interface WlBookCancelCancelCanParams {
    /** Key of the business within which the action is performed. */
    k_business: string;
    /** Visit key. */
    k_visit: string;
}
export interface WlBookCancelCancelCanResponse {
    a_penalty: Array<{
        /** `true` in a case of flat penalty type; `false` in a case of percentage penalty type. */
        is_flat: boolean;
        /** Currency key. */
        k_currency: string;
        /** Penalty amount. */
        m_amount: string;
    }> | null;
    /** `true` if the booking can be canceled online by the specified user, `false` otherwise. */
    can_cancel: boolean;
    /** `true` if the client's account will be flagged instead of charging a monetary fee, `false` otherw... */
    is_flag: boolean;
    /** `true` if the cancellation would be considered a late cancel, `false` otherwise. */
    is_late: boolean;
    /** `true` if the visit credit (from the purchase option used to book) will be returned */
    is_refund: boolean;
}
export interface WlLocationFlagFlagParams {
    /** The location key. */
    k_location: string;
    /** User keys. */
    a_uid?: Array<string> | null;
    /** The user's key. */
    uid?: string | null;
}
export interface WlLocationFlagFlagResponse {
    a_flag: Array<{
        /** Key is passport login ID. */
        uid: string;
        /** Value: `true` if user is flagged; `false` otherwise. */
        is_flag: boolean;
    }>;
    a_restrictions_multiple: Array<{
        /** `true` if the user cannot make new reservations. */
        is_book: boolean;
        /** `true` if the user cannot make new purchases. */
        is_purchase: boolean;
    }> | null;
    a_restrictions_single: Array<{
        /** `true` if client cannot make new reservations. */
        is_book: boolean;
        /** `true` if client cannot make new purchases. */
        is_purchase: boolean;
    }> | null;
    /** `true` if the user is flagged and can make purchases, but cannot make new reservations, `false` i... */
    is_flag: boolean;
}
export type WlLocationWorkTimeLocationWorkTimeParams = Record<string, unknown>;
export type WlLocationWorkTimeLocationWorkTimeResponse = Record<string, unknown>;
export interface WlLocationViewViewParams {
    /** Maximum location image height. */
    i_logo_height: number;
    /** Maximum location image width. */
    i_logo_width: number;
    /** The location key. */
    k_location: string;
}
export interface WlLocationViewViewResponse {
    /** A list of ages that are permitted for visiting this location. */
    a_age: Array<number>;
    /** A list of facilities that are available in this location. */
    a_amenities: Array<number>;
    /** A list of levels that are suitable for visiting this location. */
    a_level: Array<string>;
    a_logo: Array<{
        /** The image height. */
        i_height: number;
        /** The image width. */
        i_width: number;
        /** The URL to the image. */
        s_url: string;
    }>;
    a_slide: Array<{
        /** Height. */
        i_height: number;
        /** Width. */
        i_width: number;
        /** URL to image preview. */
        url_preview: string;
        /** URL to full image. */
        url_slide: string;
    }>;
    a_work: Array<{
        /** The time of day end in MySQL format. */
        s_end: string;
        /** The time of day start in MySQL format. */
        s_start: string;
    }>;
    /** The latitude coordinate of the location. */
    f_latitude: number;
    /** The longitude coordinate of the location. */
    f_longitude: number;
    /** The full description of the location. */
    html_description_full: string;
    /** A shorter description of the location. A preview of `html_description_full`. */
    html_description_preview: string;
    /** List of different types for landing pages based on business types. */
    id_industry: number;
    /** `true` if to display phone number on location page. `false` otherwise. */
    is_phone: boolean;
    /** `true` if WellnessLiving identifies this is a top choice location, `false` otherwise. */
    is_top_choice: boolean;
    /** The key of the business this location belongs to. */
    k_business: string;
    /** The key of the business type this location belongs to. */
    k_business_type: string;
    /** The timezone. */
    k_timezone: string;
    /** The physical address of the location. */
    s_address: string;
    /** A string that can be used in navigator programs. */
    s_map: string;
    /** The phone number for the location. */
    s_phone: string;
    /** The system name of the time zone. */
    s_timezone: string;
    /** The title of the location. */
    s_title: string;
    /** The address of the location. */
    text_address_individual: string;
    /** The special system name, which can be used in custom location links. */
    text_alias: string;
    /** The name of the business type. */
    text_business_type: string;
    /** The city name of the location. */
    text_city: string;
    /** The country name of the location. */
    text_country: string;
    /** The name of the industry of the business. */
    text_industry: string;
    /** The email address. */
    text_mail: string;
    /** Postal code of the location. */
    text_postal: string;
    /** The region name of the location. */
    text_region: string;
    /** Region 2 or 3 letters abbreviation of the location. Can be empty, if abbreviation for region is n... */
    text_region_code: string;
    /** The Facebook URL of the location. */
    url_facebook: string;
    /** The Instagram URL of the location. */
    url_instagram: string;
    /** The Linked In URL of the location. */
    url_linkedin: string;
    /** The URL of the location in Google Maps. */
    url_map: string;
    /** The URL to the location entry in the WellnessLiving Explorer listing. */
    url_microsite: string;
    /** The website URL of the location. */
    url_site: string;
    /** The URL of the location's Twitter account. */
    url_twitter: string;
    /** The URL to the business's Client Web App. */
    url_web: string;
    /** The YouTube URL of the location. */
    url_youtube: string;
}
export interface WlLocationFacilityFacilitySidParams {
    /** Name of the Sid class to get list from. */
    s_class_name: string;
}
export interface WlLocationFacilityFacilitySidResponse {
    a_list: Array<{
        /** String ID. */
        sid: number;
        /** Title of the ID. */
        text_title: string;
    }>;
}
export interface WlProfileEditEditGetParams {
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** The key of the user to edit. */
    uid: string;
    /** Registration source ID. */
    id_register_source?: number | null;
}
export interface WlProfileEditEditGetResponse {
    a_error_list: Array<{
        /** Error code identifying the type of validation failure. */
        code: string;
        /** Field identifier that caused the error. */
        field: string;
        /** Human-readable error message. */
        message: string;
    }> | null;
    a_phone_inherit: Array<{
        /** Indicates weather to inherit phone numbers from relative or not. `1` if phone inheritance is need... */
        is_phone_inherit?: boolean;
        /** Relative's name. */
        text_relative?: string;
        /** User key of relative. */
        uid_relative: string;
    }>;
    a_structure: Array<{
        /** List of general fields in user's profile. */
        id_field_general?: number;
        /** Indicates whether the value of this field is required. This will be `1` if required or `0` if the... */
        is_require: boolean;
        /** Possible types of the custom fields: text, checkbox, radio buttons, etc. */
        id_field_type: number;
        /** The field ID (`k_field`). A copy of the key of this array element. */
        k_field: string;
        /** The title of the field. */
        s_title: string;
        /** The value of the field. This value is defined by individual fields. */
        x_value: string;
    }>;
    /** Whether current user can change password of the given user or not. */
    can_password_change: boolean;
    /** `true` if the A2P 10DLC registration feature is enabled for this business, `false` otherwise. */
    is_a2p: boolean;
    /** Whether the address be inherited. */
    is_address_inherit: boolean | null;
    /** Indicates whether to display the full profile edit form or the short version. */
    is_short: boolean;
    /** Key of the lead source. */
    k_lead_source: string | null;
    /** Exception class name. */
    s_class: string | null;
    /** Code of the error. */
    s_code: string | null;
    /** Error message. */
    text_message: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address: string | null;
}
export interface WlProfileEditEditPostParams {
    /** Indicates whether to display the full profile edit form or the short version. */
    is_short: boolean;
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** Compound key delimited with a colon. First part is the business key where the selected client exi... */
    text_business_uid_key: string;
    /** The key of the user to edit. */
    uid: string;
    /** The UID of an existing user in another business to add to the current business. */
    uid_existed: string;
    /** UID of the user, whose email was inherited by the existing client we want to add. */
    uid_relative_key: string;
    /** ID of source mode. One of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode?: number;
    /** Registration source ID. */
    id_register_source?: number | null;
    /** Whether the address be inherited. */
    is_address_inherit?: boolean | null;
    /** Key of the lead source. */
    k_lead_source?: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address?: string | null;
}
export interface WlProfileEditEditPostResponse {
    a_error_list: Array<{
        /** Error code identifying the type of validation failure. */
        code: string;
        /** Field identifier that caused the error. */
        field: string;
        /** Human-readable error message. */
        message: string;
    }> | null;
    /** Exception class name. */
    s_class: string | null;
    /** Code of the error. */
    s_code: string | null;
    /** Status of the request. */
    s_status: string | null;
    /** Error message. */
    text_message: string | null;
    /** The key of the user to edit. */
    uid: string;
}
export interface WlProfileEditEditPutParams {
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** The key of the user to edit. */
    uid: string;
    /** Registration source ID. */
    id_register_source?: number | null;
    /** Whether the address be inherited. */
    is_address_inherit?: boolean | null;
    /** Key of the lead source. */
    k_lead_source?: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address?: string | null;
}
export type WlProfileEditEditPutResponse = Record<string, unknown>;
export type WlProfileEditCreateParams = Record<string, unknown>;
export interface WlProfileEditCreateResponse {
    /** The key of the user added. */
    uid: string;
}
export interface WlProfileEditEditByTokenGetParams {
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** The security token. */
    text_token: string;
    /** The key of the user to edit. */
    uid: string;
    /** Registration source ID. */
    id_register_source?: number | null;
}
export interface WlProfileEditEditByTokenGetResponse {
    a_error_list: Array<{
        /** Error code identifying the type of validation failure. */
        code: string;
        /** Field identifier that caused the error. */
        field: string;
        /** Human-readable error message. */
        message: string;
    }> | null;
    a_phone_inherit: Array<{
        /** Indicates weather to inherit phone numbers from relative or not. `1` if phone inheritance is need... */
        is_phone_inherit?: boolean;
        /** Relative's name. */
        text_relative?: string;
        /** User key of relative. */
        uid_relative: string;
    }>;
    a_structure: Array<{
        /** List of general fields in user's profile. */
        id_field_general?: number;
        /** Indicates whether the value of this field is required. This will be `1` if required or `0` if the... */
        is_require: boolean;
        /** Possible types of the custom fields: text, checkbox, radio buttons, etc. */
        id_field_type: number;
        /** The field ID (`k_field`). A copy of the key of this array element. */
        k_field: string;
        /** The title of the field. */
        s_title: string;
        /** The value of the field. This value is defined by individual fields. */
        x_value: string;
    }>;
    /** Whether current user can change password of the given user or not. */
    can_password_change: boolean;
    /** `true` if the A2P 10DLC registration feature is enabled for this business, `false` otherwise. */
    is_a2p: boolean;
    /** Whether the address be inherited. */
    is_address_inherit: boolean | null;
    /** Indicates whether to display the full profile edit form or the short version. */
    is_short: boolean;
    /** Key of the lead source. */
    k_lead_source: string | null;
    /** Exception class name. */
    s_class: string | null;
    /** Code of the error. */
    s_code: string | null;
    /** Error message. */
    text_message: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address: string | null;
}
export interface WlProfileEditEditByTokenPostParams {
    /** Indicates whether to display the full profile edit form or the short version. */
    is_short: boolean;
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** Compound key delimited with a colon. First part is the business key where the selected client exi... */
    text_business_uid_key: string;
    /** The key of the user to edit. */
    uid: string;
    /** The UID of an existing user in another business to add to the current business. */
    uid_existed: string;
    /** UID of the user, whose email was inherited by the existing client we want to add. */
    uid_relative_key: string;
    /** ID of source mode. One of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode?: number;
    /** Registration source ID. */
    id_register_source?: number | null;
    /** Whether the address be inherited. */
    is_address_inherit?: boolean | null;
    /** Key of the lead source. */
    k_lead_source?: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address?: string | null;
}
export interface WlProfileEditEditByTokenPostResponse {
    a_error_list: Array<{
        /** Error code identifying the type of validation failure. */
        code: string;
        /** Field identifier that caused the error. */
        field: string;
        /** Human-readable error message. */
        message: string;
    }> | null;
    /** Exception class name. */
    s_class: string | null;
    /** Code of the error. */
    s_code: string | null;
    /** Status of the request. */
    s_status: string | null;
    /** Error message. */
    text_message: string | null;
    /** The key of the user to edit. */
    uid: string;
}
export interface WlProfileEditEditByTokenPutParams {
    /** Indicates whether to display the form as a user or as a staff member. */
    is_staff: boolean;
    /** The key of the business you're editing. */
    k_business: string;
    /** The key of the user to edit. */
    uid: string;
    /** Registration source ID. */
    id_register_source?: number | null;
    /** Whether the address be inherited. */
    is_address_inherit?: boolean | null;
    /** Key of the lead source. */
    k_lead_source?: string | null;
    /** UID of the user, whose address was inherited by the existing client we want to add. */
    uid_inherit_address?: string | null;
}
export type WlProfileEditEditByTokenPutResponse = Record<string, unknown>;
export type WlProfileEditEditPasswordParams = Record<string, unknown>;
export type WlProfileEditEditPasswordResponse = Record<string, unknown>;
export interface WlProfileAttachAttachListParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** Business key. */
    k_business: string;
    /** The filter phrase to filter attach by name. */
    text_search: string;
    /** Business key. */
    uid: string;
}
export interface WlProfileAttachAttachListResponse {
    a_list: Array<{
        /** Date and time of creation in UTC MySQL format. */
        dtu_create: string;
        /** Date and time of the last edit in UTC MySQL format. */
        dtu_edit: string;
        /** Image height in pixels. `null` if not an image or dimensions are unavailable. */
        i_height: number | null;
        /** Flag indicating whether to show the delete button. `'1'` to show, `'0'` to hide. */
        i_show_delete: number;
        /** Image width in pixels. `null` if not an image or dimensions are unavailable. */
        i_width: number | null;
        /** List of file extensions. */
        id_preview: number;
        /** `true` if the attachment is private (not visible to the client); `false` otherwise. */
        is_private: boolean;
        /** Attachment key. */
        k_attach: string;
        /** Business key. */
        k_business: string;
        /** Quiz response key. `null` if the attachment is not from a quiz response. */
        k_quiz_response: string | null;
        /** Attachment description. `null` if no description. Only present in backend mode. */
        text_description: string | null;
        /** Attachment file name. */
        text_filename: string;
        /** Human-readable file size (for example, "1.2 MB"). */
        text_filesize: string;
        /** File extension in lowercase (for example, "pdf", "jpg"). */
        text_filetype: string;
        /** Source description (for example, quiz title or "Uploaded by staff"). */
        text_source: string;
        /** Name of the user who uploaded the attachment. Empty string if unknown. */
        text_uploaded_by: string;
        /** Formatted upload date in the business locale. */
        text_uploaded_date: string;
        /** URL to download the attachment file. */
        url_file: string;
        /** URL to a preview image (50x50). `null` if preview is not available for this file type. */
        url_preview: string | null;
    }>;
}
export interface WlProfileAttachAttachElementDeleteParams {
    /** Attachment key. */
    k_attach: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export type WlProfileAttachAttachElementDeleteResponse = Record<string, unknown>;
export interface WlProfileAttachAttachElementGetParams {
    /** Attachment key. */
    k_attach: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export interface WlProfileAttachAttachElementGetResponse {
    /** Date and time of the creation. */
    dtu_create: string;
    /** Date and time of the last edit. */
    dtu_edit: string;
    /** Flag for showing a delete button. */
    s_show_delete: string;
    /** Attachment description. */
    text_description: string | null;
    /** Attachment file name. */
    text_filename: string | null;
    /** Attachment file size. */
    text_filesize: string;
    /** Attachment file type. */
    text_filetype: string;
    /** URL to get attachment file. */
    url_file: string;
    /** URL to get preview attachment data. */
    url_preview: string | null;
}
export interface WlProfileAttachAttachElementPostParams {
    /** Attachment key. */
    k_attach: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export interface WlProfileAttachAttachElementPostResponse {
    /** Attachment key. */
    k_attach: string;
}
export interface WlProfilePurchasePurchaseElementParams {
    /** The key of the redemption code used to obtain some goods. */
    k_code: string;
    /** The key of an entirely booked event. */
    k_enrollment_book: string;
    /** The key of a purchased product. */
    k_login_product: string;
    /** The key of the user's promotion. */
    k_login_promotion: string;
    /** The key of the purchased item. This should be specified only for ordinary purchases, not for thos... */
    k_purchase_item: string;
    /** The key of the make-up session used to attend an event. */
    k_session_pass: string;
    /** The business key. Currently used only with `k_session_pass` variable. */
    k_business?: string | null;
}
export interface WlProfilePurchasePurchaseElementResponse {
    a_component: Array<{
        /** Key of enrollment book. */
        k_enrollment_book?: string;
        /** Key of product. */
        k_login_product?: string;
        /** Key of promotion. */
        k_login_promotion?: string;
        /** Session key. */
        k_session_pass?: string;
    }>;
    a_logo: Array<{
        /** The height of the image. */
        i_height: number;
        /** The width of the image. */
        i_width: number;
        /** If `true`, then the purchased item doesn't have image. If `false`, then the item has an image. */
        is_empty: boolean;
        /** The URL for the image. */
        s_url: string;
    }>;
    a_restrict: Array<{
        /** The number of sessions that may be booked during this period. */
        i_limit: number;
        /** The number of sessions that remain available. */
        i_remain: number;
        /** The name of the period type. */
        s_date: string;
    }>;
    a_tax: Array<{
        /** The amount of tax. */
        f_tax_discount: string;
        /** The name of the tax. */
        s_tax: string;
    }>;
    /** This is `true` only if the purchased item is a promotion and the user can control the renewal of ... */
    can_renew: boolean;
    /** Local date of purchase in MySQL format. */
    dl_purchase: string;
    /** The start date of the promotion. This is used only if the purchased item is a promotion. */
    dl_start: string;
    /** The expiration date of the promotion. This is used only if the purchased item is a promotion. */
    dt_end: string;
    /** The end date of the promotion hold. This is used only for promotions on hold. */
    dt_hold_end: string;
    /** The start date of the promotion hold. This is used only for promotions on hold. */
    dt_hold_start: string;
    /** The purchase date of the purchased item. This is given in GMT in MySQL format. */
    dt_purchase: string;
    /** The date for when the email regarding the gift card should be sent (or was sent) to the receiver. */
    dt_send: string;
    /** The percentage value of the discount for the client type. This is empty if this discount wasn't a... */
    f_discount_login_type_percent: number;
    /** The description of the purchased item. */
    html_description: string;
    /** The number of sessions remaining for a promotion. This is used only for promotions. */
    i_book: number;
    /** The number of purchased items bought at the time of purchase. */
    i_buy: number;
    /** The percentage value of the discount given by a reward prize. This field will be `0` if a discoun... */
    i_discount_count: number;
    /** This field is only added for promotions. Duration of promotion. Measurement unit is `id_duration`. */
    i_duration: number;
    /** The number of bookings remaining in this promotion. This value is used only for non-sequential pr... */
    i_left: number;
    /** The number of visits which can be made with this promotion. This is used only for promotions. */
    i_limit: number;
    /** The duration of the regular payments interval. This is used only for “membership” type promoti */
    i_payment_period: number;
    /** The number of remaining bookings for the promotion. This is used only for promotions. */
    i_remain: number;
    /** The number of minutes remaining for the promotion. */
    i_remain_duration: number;
    /** Not `0` only for promotions. How many times promotion was updated. */
    i_renew: number;
    /** This is used only for promotions. This is the number of visits that were attended for the promotion. */
    i_use: number;
    /** Promotion or package date start rule. */
    id_activation: number;
    /** String identifiers for tax type. */
    id_discount_commission_type: number;
    /** Class to process string identifiers for duration types */
    id_duration: number;
    /** Program types. */
    id_program_type: number;
    /** A list of purchase types. */
    id_purchase_item: number;
    /** List of sale categories on the store page. */
    id_sale: number;
    /** If `true`, then the purchase item is active. If `false`, then the purchase item isn't active. */
    is_active: boolean;
    /** If `true`, then the purchased item is a component of another purchase item, as is the case of a p... */
    is_component: boolean;
    /** If `true`, then this promotion will be converted to a different promotion after it expires. It `f... */
    is_convert: boolean;
    /** This is `true` only if the purchased item is an expired promotion. Otherwise, this will be `false`. */
    is_expire: boolean;
    /** This is `true` only if the purchased item is a promotion placed on hold. */
    is_hold: boolean;
    /** If `true`, then the usage of this purchased item is disabled. If `false`, then the usage of this ... */
    is_limit: boolean;
    /** If `true`, then the discount was applied for the member type. If `false`, then the discount was a... */
    is_login_type_member: boolean | null;
    /** If `true`, then the gift card email notification will be sent to the receiver. This is `true` onl... */
    is_mail: boolean;
    /** If `true`, then the gift card email notification has been sent. This can only be `true` if the pu... */
    is_past: boolean;
    /** This is `true` if the gift card has been redeemed. This can only be true if the purchased item is... */
    is_redeem: boolean;
    /** This is `true` if the promotion is auto-renewable. This can only be true if the purchased item is... */
    is_renew: boolean;
    /** This is `true` if the promotion has been transferred. This can only be `true` if the purchased it... */
    is_transfer: boolean;
    /** The key of the redemption code. This won't be `0` if the purchased item is obtained via a redempt... */
    k_code_result: string;
    /** The key of the currency used to make the purchase. */
    k_currency: string;
    /** The key of the purchased promotion. This won't be `0` only for promotions. */
    k_login_promotion_result: string;
    /** The key of the whole purchase which includes the given purchased item. */
    k_purchase_result: string;
    /** The cost of the purchased item. */
    m_cost_item: string;
    /** The total cost of the purchase, including taxes and fees. */
    m_cost_total: string;
    /** The amount of the discount given via a reward prize. This will be empty if the discount wasn't ap... */
    m_discount_amount: string;
    /** The amount of the discount for the client type. This will be empty if the discount wasn't applied. */
    m_discount_login_type_amount: string;
    /** Amount of manual discount. Empty if this discount was not applied. */
    m_discount_manual: string;
    /** The amount to pay for each payment period. This is used only for promotions with the "membership"... */
    m_period_price: string;
    /** Source price of item. */
    m_price: string;
    /** The amount refunded. This will be `0` if there are no refunds. */
    m_refund: string;
    /** The redemption code. This is used only if the purchase is bought using a redemption code. */
    s_code: string;
    /** The code to redeem gift card. This won't be empty only for gift cards. */
    s_gift_code: string;
    /** Name of gift recipient. This won't be empty only for gift cards. */
    s_gift_recipient: string;
    /** The name of the staff member who disabled the usage of the purchased item. */
    s_limit_actor: string;
    /** The email address the gift card was sent to. This is used only for gift cards. */
    s_mail: string;
    /** The text of the message sent to the gift card recipient. This is used only for gift cards. */
    s_message: string;
    /** The name of the user who paid for this purchase. */
    s_payer: string;
    /** The title of the converted promotion. This is used only for promotions which must be converted to */
    s_promotion_convert: string;
    /** The purchase ID number as it appears on the receipt. */
    s_purchase: string;
    /** The name of the user who paid for this purchase. */
    s_recipient: string;
    /** The name of the sender. This is used only for gift cards. */
    s_sender: string;
    /** The name of the purchased item. */
    s_title: string;
    /** The string ID of the purchased item. This ID may be used to change the view of the purchased item. */
    sid_value: string;
    /** The key of the user who paid for this purchase. */
    uid_payer: string;
    /** The key of the user who paid for this purchase. */
    uid_recipient: string;
}
export interface WlProfilePurchasePurchaseListParams {
    /** The key of a business to show information for. */
    k_business: string;
    /** The key of a user to show information for. */
    uid: string;
}
export interface WlProfilePurchasePurchaseListResponse {
    a_purchase: Array<{
        /** The value of `a_purchase['is_active']`. For packages, this also contains the values of `a_purchas... */
        a_active: Array<boolean>;
        /** The value of `a_purchase['id_sale']`. For packages, this also contains the values of `a_purchase[... */
        a_sale: Array<number>;
        /** The date that the purchase was added. */
        dt_add: string;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** If `true`, then the purchase item is active. Otherwise, this will be `false`. */
        is_active: boolean;
        /** If `true`, then the purchase item is a package component. Otherwise, this will be `false`. */
        is_component?: boolean;
        /** If `true`, then the purchase item is a package, `false` otherwise. */
        is_package: boolean;
        /** Appointment key. */
        k_appointment: string;
        /** The redemption code key that was used to make a purchase. */
        k_code: string;
        /** The key of an event that requires clients to book every session at once. */
        k_enrollment_book?: string;
        /** The key of the purchase type referring to different types of keys depending on the value of `id_s... */
        k_id: string;
        /** The key of the purchased product. */
        k_login_product?: string;
        /** The key of the user's existing purchase options. */
        k_login_promotion: string;
        /** The key of a purchase where no special case rules are in effect. */
        k_purchase: string;
        /** The key of a purchase item where no special case rules are in effect. */
        k_purchase_item: string;
        /** Service key. */
        k_service: string;
        /** In certain cases a session can be canceled and makeup sessions can be granted to a client in lieu of */
        k_session_pass?: string;
        /** The name of the purchase item. */
        s_title: string;
        /** The ID of the purchase owner. */
        uid: string;
    }>;
}
export interface WlProfilePurchaseListPurchaseListParams {
    /** The key of a business to show information for. */
    k_business: string;
    /** The key of a user to show information for. */
    uid: string;
}
export interface WlProfilePurchaseListPurchaseListResponse {
    a_purchase: Array<{
        /** The value of `a_purchase['is_active']`. For packages, this also contains the values of `a_purchas... */
        a_active: Array<boolean>;
        /** The value of `a_purchase['id_sale']`. For packages, this also contains the values of `a_purchase[... */
        a_sale: Array<number>;
        /** The date that the purchase was added. */
        dt_add: string;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** If `true`, then the purchase item is active. Otherwise, this will be `false`. */
        is_active: boolean;
        /** If `true`, then the purchase item is a package component. Otherwise, this will be `false`. */
        is_component?: boolean;
        /** If `true`, then the purchase item is a package, `false` otherwise. */
        is_package: boolean;
        /** Appointment key. */
        k_appointment: string;
        /** The redemption code key that was used to make a purchase. */
        k_code: string;
        /** The key of an event that requires clients to book every session at once. */
        k_enrollment_book?: string;
        /** The key of the purchase type referring to different types of keys depending on the value of `id_s... */
        k_id: string;
        /** The key of the purchased product. */
        k_login_product?: string;
        /** The key of the user's existing purchase options. */
        k_login_promotion: string;
        /** The key of a purchase where no special case rules are in effect. */
        k_purchase: string;
        /** The key of a purchase item where no special case rules are in effect. */
        k_purchase_item: string;
        /** Service key. */
        k_service: string;
        /** In certain cases a session can be canceled and makeup sessions can be granted to a client in lieu of */
        k_session_pass?: string;
        /** The name of the purchase item. */
        s_title: string;
        /** The ID of the purchase owner. */
        uid: string;
    }>;
}
export interface WlProfilePurchaseListPurchaseListElementParams {
    /** Image Height in pixels. Please specify this value if you need purchase image to be returned in sp... */
    i_image_height: number;
    /** Image Width in pixels. Please specify this value if you need purchase image to be returned in spe... */
    i_image_width: number;
    /** The ID of the redemption code used to obtain the item. This should be specified only for items ob... */
    k_code: string;
    /** The key of an entirely booked event. This must be specified if the purchased item is a whole event */
    k_enrollment_book: string;
    /** The key of a purchased product. This must be specified if the purchased item is a product and par... */
    k_login_product: string;
    /** The key of the user's promotion. This should only be specified for promotions given without a pur... */
    k_login_promotion: string;
    /** The key of the purchased item. This should be specified only for ordinary purchases */
    k_purchase_item: string;
    /** The ID of the makeup session used to attend an event. */
    k_session_pass: string;
    /** The business key. Used with `k_session_pass` variable and */
    k_business?: string | null;
}
export interface WlProfilePurchaseListPurchaseListElementResponse {
    a_component: Array<{
        /** The booking enrollment key. */
        k_enrollment_book?: string;
        /** The key referencing the product a user purchased. */
        k_login_product?: string;
        /** The key of a user's Purchase Option. */
        k_login_promotion?: string;
        /** The key of a user's session pass. */
        k_session_pass?: string;
    } | {
        /** A list of purchase types. */
        id_purchase_item: number;
        /** ID of the item. Will be different for different [RsPurchaseItemSid](#/components/schemas/RsPurcha... */
        k_id: string;
        /** Title of the coupon component. */
        text_title: string;
    }>;
    a_logo: Array<{
        /** The height of the image. */
        i_height: number;
        /** The width of the image. */
        i_width: number;
        /** If `true`, then the purchased item doesn't have an image. If `false`, then the item has an image. */
        is_empty: boolean;
    }> | null;
    a_restrict: Array<{
        /** The number of sessions that may be booked during this period. */
        i_limit: number;
        /** The number of sessions that remain available. */
        i_remain: number;
        /** The name of the period type. */
        text_date: string;
    }>;
    a_tax: Array<{
        /** The amount of tax. */
        f_tax_discount: string;
        /** The name of the tax. */
        s_tax: string;
    }>;
    /** This is `true` only if the purchased item is a promotion and the user can control the renewal of ... */
    can_renew: boolean;
    /** The cancellation date of the promotion. Only available if the item is a promotion and has been ca... */
    dl_cancel: string;
    /** The expiration date of the promotion. Only available if the item is a promotion. */
    dl_end: string;
    /** The local date of the purchase in MySQL format. */
    dl_purchase: string;
    /** The local date in MySQL format when mail about purchasing was sent (or will be sent) to the user. */
    dl_send: string;
    /** The start date of the promotion. Only available if the item is a promotion. */
    dl_start: string;
    /** The local date of cancellation in MySQL format. Only available if the item is a membership. */
    dt_cancel: string;
    /** The end date of the promotion hold. This is used only for promotions on hold. */
    dt_hold_end: string;
    /** The start date of the promotion hold. Only available if the item is a promotion and on hold. */
    dt_hold_start: string;
    /** The purchase date of the purchased item. This is given in UTC in MySQL format. */
    dt_purchase: string;
    /** The date in MySQL format when gift card was redeemed. Only available if the item is a gift card. */
    dt_redeem: string;
    /** The percentage value of the discount for the client type. This will be empty if a discount wasn't... */
    f_discount_login_type_percent: number;
    /** The description of the purchased item. */
    html_description: string;
    /** The number of sessions remaining for a promotion. This value is used only for promotions. This va... */
    i_book: number;
    /** Displays the number of minutes of sessions that were booked by this promotion. This isn't `0` onl... */
    i_book_duration: number;
    /** The number of purchased items bought at the time of purchase. */
    i_buy: number;
    /** The number of days notice before the client is able to set cancel date. */
    i_client_cancel_notice_days: number;
    /** The percentage value of the discount given by a reward prize. This will be `0` if a discount wasn... */
    i_discount_count: number;
    /** The duration of the promotion. The measurement unit is `id_duration`. This field is only added fo... */
    i_duration: number;
    /** The number of bookings left with this promotion. This value is used only for non-sequential promo... */
    i_left: number;
    /** The number of visits that can be made with this promotion. This value is used only for promotions. */
    i_limit: number;
    /** The interval duration of the regular payments. This value is used only for membership-type promot... */
    i_payment_period: number;
    /** The number of remaining bookings for the promotion. This is used only for promotions. */
    i_remain: number;
    /** The number of minutes remaining for the promotion. */
    i_remain_duration: number;
    /** Displays how many times promotion was updated. This isn't `0` only for promotions. */
    i_renew: number;
    /** The number of visits that were attended for the promotion. This is used only for promotions. */
    i_use: number;
    /** The number of minutes the user has already used with this purchase of this promotion. This isn't ... */
    i_use_duration: number;
    /** Promotion or package date start rule. */
    id_activation: number;
    /** String identifiers for tax type. */
    id_discount_commission_type: number;
    /** Class to process string identifiers for duration types */
    id_duration: number;
    /** Program types. */
    id_program_type: number;
    /** A list of purchase types. */
    id_purchase_item: number;
    /** List of sale categories on the store page. */
    id_sale: number;
    /** If `true`, then the purchase item is active. If `false`, then the purchase item isn't active. */
    is_active: boolean;
    /** Whether the purchase item is asset. */
    is_asset: boolean;
    /** If `true`, then a promotion is pending cancellation. Otherwise, this will be `false`. */
    is_cancel_pending: boolean;
    /** If `true`, then a promotion can be canceled by a client. Otherwise, this will be `false`. */
    is_client_cancel_allow: boolean;
    /** If `true`, then the purchased item is a component of another purchase item, as is the case of a p... */
    is_component: boolean;
    /** If `true`, then this promotion will be converted to a different promotion after it expires. If `f... */
    is_convert: boolean;
    /** `true` if the purchase item is an event; `false` otherwise. */
    is_event: boolean;
    /** This is `true` only if the purchased item is a promotion that has expired. Otherwise, this will b... */
    is_expire: boolean;
    /** This is `true` only if the purchased item is a promotion and has been placed on hold. */
    is_hold: boolean;
    /** If `true`, then the usage of this purchased item is disabled. */
    is_limit: boolean;
    /** If `true`, then the discount was applied for the member type. */
    is_login_type_member: boolean | null;
    /** If `true`, then the gift card email notification will be sent to the receiver. This is `true` onl... */
    is_mail: boolean;
    /** If `true`, then the gift card email notification has been sent. This can only be `true` if the pu... */
    is_past: boolean;
    /** This is `true` if the gift card has been redeemed. */
    is_redeem: boolean;
    /** This is `true` if the promotion is auto-renewable. This can only be `true` if the purchased item ... */
    is_renew: boolean;
    /** This is `true` if the promotion has been transferred. This can only be true if the purchased item... */
    is_transfer: boolean;
    /** The key of the redemption code. This value will not be `0` if the purchased item is obtained via ... */
    k_code_result: string;
    /** The key of the currency used to make the purchase. */
    k_currency: string;
    /** The key of the item. This can correspond to one of many values depending on `id_sale`. */
    k_id: string;
    /** The key of the purchased promotion. This won't be `0` only for promotions. */
    k_login_promotion_result: string;
    /** The key of the whole purchase, including the given purchased item. */
    k_purchase_result: string;
    /** The cost of the purchased item. */
    m_cost_item: string;
    /** The total cost of the purchase, including taxes and fees. */
    m_cost_total: string;
    /** The amount of the discount via prize. This will be empty if this discount wasn't applied. */
    m_discount_amount: string;
    /** The amount of the discount for the client type. This value will be empty if the discount wasn't a... */
    m_discount_login_type_amount: string;
    /** The amount of the manual discount. This will be empty if this discount wasn't applied. */
    m_discount_manual: string;
    /** The amount to pay for each payment period. This is used only for promotions with the membership p... */
    m_period_price: string;
    /** The source price of item. */
    m_price: string;
    /** The amount refunded. This will be `0` if there are no refunds. */
    m_refund: string;
    /** Cancellation fee amount. */
    m_terminate_fee: string | null;
    /** The redemption code. This value is used only if the purchase is bought via a redemption code. */
    s_code: string;
    /** The code to redeem the gift card. This isn't empty only for gift cards. */
    s_gift_code: string;
    /** The name of gift recipient. This isn't empty only for gift cards. */
    s_gift_recipient: string;
    /** The name of the staff member who disabled the usage of the purchased item. */
    s_limit_actor: string;
    /** The email address to which the gift card was sent. This is used only for gift cards. */
    s_mail: string;
    /** The test of the message sent to the gift card recipient. This is used only for gift cards. */
    s_message: string;
    /** The name of the user who paid for this purchase. */
    s_payer: string;
    /** The title of the converted promotion. This value is used only for promotions that must be convert... */
    s_promotion_convert: string;
    /** The purchase ID number as it appears on the receipt. This value will also include the leading 0s ... */
    s_purchase: string;
    /** The name of the user who paid for this purchase. */
    s_recipient: string;
    /** The name of the sender. This value is used only for gift cards. */
    s_sender: string;
    /** The name of the purchased item. */
    s_title: string;
    /** The string ID of the purchased item. This ID may be used to change the view of the purchased item. */
    sid_value: string;
    /** Expire conditions for the purchased item (only for promotion). */
    text_expire: string;
    /** Text describing guest passes available for the purchased promotion. */
    text_guest_pass: string;
    /** The key of the user who paid for this purchase. */
    uid_payer: string | null;
    /** The key of the user who paid for this purchase. */
    uid_recipient: string;
}
export interface WlProfileAlertAlertParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The key of the business. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface WlProfileAlertAlertResponse {
    a_alert: Array<{
        /** The date and time in MySQL format in local time when the alert was last modified. */
        dt_date: string | null;
        /** This will be `true` if the alert was added today. Otherwise, this will be `false`. */
        is_today: boolean;
        /** Sources of system notes. */
        id_profile_note: number;
        /** The key of the client's account. */
        k_pay_account?: string;
        /** The key of the purchase item. */
        k_purchase_item?: string;
        /** The alert's text. */
        s_text: string;
    }>;
    a_warning: Array<{
        /** The list of location keys where this note is flagged. */
        a_location_flag: Array<string>;
        /** The date and time in MySQL format in local time when the warning was created. */
        dt_create: boolean;
        /** The date and time in MySQL format in local time when the warning was last modified. */
        dt_date: boolean;
        /** `true` means that client is restricted to make bookings, `false` - otherwise. */
        is_book_restricted: boolean;
        /** This will be `true` if the client is flagged. Otherwise, this will be `false`. */
        is_flag: boolean;
        /** `true` means that client is restricted to make purchases. Otherwise, this will be `false`. */
        is_purchase_restricted: boolean;
        /** This will be `true` if the warning was added today. Otherwise, this will be `false`. */
        is_today: boolean;
        /** The text of the warning. */
        s_text: string;
        /** Staff name, who created a note. */
        text_author: string;
        /** Staff name, who edited a note last time. */
        text_editor: string;
    }>;
}
export interface WlProfileAlertAlertEditDeleteParams {
    /** Key of current business. */
    k_business: string;
    /** Login note key to edit or get info for. */
    k_login_note: string;
}
export type WlProfileAlertAlertEditDeleteResponse = Record<string, unknown>;
export interface WlProfileAlertAlertEditGetParams {
    /** Key of current business. */
    k_business: string;
    /** Login note key to edit or get info for. */
    k_login_note: string;
    /** Key of a user to show information or post a note for. */
    uid: string;
}
export interface WlProfileAlertAlertEditGetResponse {
    a_login_note_data: Array<{
        /** List of locations the note applies to. Each element: */
        a_location: {
            /** HTML-escaped location title. */
            html_title: string;
            /** `true` if this location is selected for the flag; `false` otherwise. */
            is_select: boolean;
            /** Location key. */
            k_id: string;
            /** Location title. */
            text_title: string;
        };
        /** `true` if the current user can flag the client; `false` otherwise. */
        can_flag: boolean;
        /** Class for access type to login note. */
        id_login_note_access: number;
        /** List of modes to change user's "flag" status within a location */
        id_login_note_flag: number;
        /** Different sources of flags, which are not set manually by the staff member. Such flags have own l... */
        id_source: number | null;
        /** `true` if the note was created by an automated process; `false` if created manually. */
        is_automated: boolean;
        /** `true` if the flagged client is allowed to book; `false` otherwise. */
        is_book: boolean;
        /** `true` if the client is currently flagged; `false` otherwise. */
        is_flag: boolean;
        /** `true` if a flag icon should be displayed; `false` otherwise. */
        is_icon: boolean;
        /** `true` if the business has multiple locations; `false` otherwise. */
        is_location_multiple: boolean;
        /** `true` if the flagged client is allowed to make purchases; `false` otherwise. */
        is_purchase: boolean;
        /** `true` if the note is marked for removal; `false` otherwise. */
        is_remove: boolean;
        /** Business key. */
        k_business: string;
        /** Login note key. */
        k_login_note: string;
        /** Note text content. */
        s_text: string;
        /** Description of the flag source for display. */
        text_flag_description: string;
        /** Text explaining how to disable the automated flag. Empty string if the flag is manual. */
        text_flag_disable: string;
        /** User key of the flagged client. */
        uid: string;
        /** URL to submit the login note edit form. */
        url_action: string;
    }>;
}
export interface WlProfileAlertAlertEditPostParams {
    /** Key of current business. */
    k_business: string;
    /** Login note key to edit or get info for. */
    k_login_note: string;
    /** Key of a user to show information or post a note for. */
    uid: string;
}
export interface WlProfileAlertAlertEditPostResponse {
    /** Login note key to edit or get info for. */
    k_login_note: string;
}
export interface WlProfileTermTermParams {
    /** The key of the current business. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface WlProfileTermTermResponse {
    /** The date/time of the waiver confirmation. */
    dt_agree: string | null;
    /** The text of the online waiver. */
    html_contract: string;
    /** Age of minor which documents can be signed by parent or legal guardian. */
    i_minor_age: number;
    /** The IP address from which the confirmation was carried out. */
    ip_agree: string | null;
    /** Flag of successful saving agreement. */
    is_agree: boolean;
    /** The user's name. */
    s_name: string;
    /** The URL to the image with the client's signature. */
    url_signature: string | boolean;
}
export interface WlProfileAttendanceAttendanceOverlapParams {
    /** Duration of a service. */
    i_duration: number;
    /** Whether an asset is booking. Needed in case when a client is allowed to select a date and time, then */
    is_appointment: boolean;
    /** Primary key of the business to add the user into. */
    k_business: string;
    /** Class period key. */
    k_class_period: string;
    /** Location key. */
    k_location: string;
    /** Asset key. */
    k_resource: string;
    /** Service key. */
    k_service: string;
    /** Key of timezone. */
    k_timezone: string;
    /** UID of a user. */
    uid: string;
    /** Date of a selected service. */
    dtu_date?: string | null;
}
export interface WlProfileAttendanceAttendanceOverlapResponse {
    a_visit_list: Array<{
        /** Date and time of the visit. */
        dtu_date: string;
        /** Duration of a service. */
        i_duration?: string;
        /** End datetime of the visit in unix format. */
        i_end: string;
        /** Local end datetime of the visit in unix format. */
        i_end_local?: string;
        /** Start datetime of the visit in unix format. */
        i_start: string;
        /** Local start datetime of the visit in unix format. */
        i_start_local?: string;
        /** Appointment key. */
        k_appointment: string;
        /** Business key. */
        k_business: string;
        /** Class period key. */
        k_class_period: string;
        /** Enrollment book key. */
        k_enrollment_book: string;
        /** Location key. */
        k_location: string;
        /** Title of a service */
        text_title: string;
    }>;
}
export interface WlProfileSettingSettingGetParams {
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface WlProfileSettingSettingGetResponse {
    /** Determines whether email notifications related to purchases, contracts, and other activity in a c... */
    is_account_management_email: boolean;
    /** Determines whether SMS notifications related to purchases, contracts, and other activity in a cli... */
    is_account_management_sms: boolean;
    /** Determines whether email notifications related to news and updates from the business regarding th... */
    is_news_and_updates_email: boolean;
    /** Whether sms notifications related to news and updates from the business regarding their services,... */
    is_news_and_updates_sms: boolean;
    /** Determines whether email notifications related to the services a client has booked are enabled. */
    is_schedule_and_reminders_email: boolean;
    /** Determines whether SMS notifications related to the services a client has booked are enabled. */
    is_schedule_and_reminders_sms: boolean;
    /** SID of language code. */
    text_language: string;
}
export interface WlProfileSettingSettingPostParams {
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export type WlProfileSettingSettingPostResponse = Record<string, unknown>;
export interface WlProfileActivityElementParams {
    /** The key of the activity item represented by this endpoint. */
    k_login_activity: string;
}
export interface WlProfileActivityElementResponse {
    /** Messages with description what did user do to get account credits as reward points. */
    a_credit_score: Array<string>;
    /** Messages with description what did user do to get points. */
    a_reward_score: Array<string>;
    /** Verifies that current user can view the specified profile. */
    can_profile: boolean;
    /** The date of the activity in GMT. */
    dt_date_gmt: string;
    /** The date of the activity in the client's time zone. */
    dt_date_local: string;
    /** Description of the action, who and what did. */
    html_message: string;
    /** Total amount of account credits user got for `k_login_activity`. */
    i_credit_score: number;
    /** The total amount of rewards points the client received for the activity. */
    i_score: number;
    /** The rewards points used to redeem a prize. */
    i_spend: number;
    /** List of available design icons. */
    id_icon: number | null;
    /** Manages identifiers of user activity. */
    id_type: number;
    /** Object ID, for example, class period ID for books and visits. */
    k_id: string;
    /** The description of the activity. This should include the nature of the activity and the people in... */
    s_message: string;
    /** Link to share activity with social networks. */
    url_link: string;
}
export interface WlProfileActivityListParams {
    /** Ending date of the date range. Optional. */
    dl_end: string;
    /** Starting date of the date range. Optional. */
    dl_start: string;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the client to show information for. */
    uid: string;
}
export interface WlProfileActivityListResponse {
    /** An array listing client activities, where each activity is provided as an ID number. */
    a_activity: Array<string>;
}
export interface WlProfileContractContractGetParams {
    /** The start date of the contract. */
    dt_start: string;
    /** The percentage discount for the item. */
    f_manual_discount: number;
    /** The type of purchase item. This is one of the [RsPurchaseItemSid](#/components/schemas/RsPurchase... */
    id_purchase_item: number;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the purchase item in the database. */
    k_id: string;
    /** The key of the selected location. */
    k_location: string;
    /** The key of the selected purchase item. */
    k_purchase_item: string;
    /** Amount of a flat manual discount. */
    m_discount_flat: string;
    /** The custom price of the item. */
    m_price_custom: string;
    /** The discount code used for the item. */
    s_discount_code: string;
    /** The key of the current user. */
    uid: string;
}
export interface WlProfileContractContractGetResponse {
    /** The text of the contract. */
    html_contract: string;
    /** Age of minor which documents can be signed by parent or legal guardian. */
    i_minor_age: number;
    /** Title of purchase option. */
    text_title: string;
}
export interface WlProfileContractContractPostParams {
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the selected purchase item. */
    k_purchase_item: string;
    /** The key of the current user. */
    uid: string;
}
export type WlProfileContractContractPostResponse = Record<string, unknown>;
export interface WlClassesClassListBookListParams {
    /** The image height in pixels. Specify this value if you need the image to be returned in a specific... */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need the image to be returned in a specific ... */
    i_image_width: number;
    /** The location key. */
    k_location: string;
}
export interface WlClassesClassListBookListResponse {
    a_class: Array<{
        /** The list of class tab keys for the class. */
        a_class_tab: Array<string>;
        /** List of login types for current class. */
        a_login_type: Array<string>;
        /** List of member groups for current class. */
        a_member_group: Array<string>;
        /** The list of URL to book this class. */
        a_url_book: Array<string>;
        /** The book date of an event in UTC date/time format. Can be empty string if user cannot book the ev... */
        dtu_book_date: string;
        /** Class capacity. */
        i_capacity: number;
        /** A list of bookable types. */
        id_bookable: number;
        /** This will be `true` if the class is active. Otherwise, this will be `false`. */
        is_active: boolean;
        /** This will be `true` for events. Otherwise, this will be `false` for classes. */
        is_event: boolean;
        /** `true` means to show class only for clients who can book online, */
        is_online_private: boolean;
        /** The class key. */
        k_class: string;
        /** The enrollment block key. */
        k_enrollment_block: string;
        /** The total price for an event. */
        m_price_total: string;
        /** The class description. */
        text_description: string;
        /** The class name. */
        text_title: string;
    }>;
}
export interface WlClassesClassListListParams {
    /** Whether all events should be returned from same enrollment block. */
    is_enrollment_block_all: boolean;
    /** Whether to include events without sessions. */
    is_enrollment_block_empty: boolean;
    /** Whether to include events in the result. */
    is_event_include: boolean;
    /** Whether to return franchisee-created classes (if business is franchisor). */
    is_franchise: boolean;
    /** Business key. */
    k_business: string;
    /** List of tabs keys. */
    a_class_tab?: Array<string> | null;
    /** ID of book now tab. One of [TabSid](#/components/schemas/Wl.Classes.Tab.TabSid) constants. */
    id_class_tab?: number;
}
export interface WlClassesClassListListResponse {
    a_class: Array<{
        /** List of class book now tabs, where this class is presented. Each element is */
        a_class_tab: Array<string>;
        /** List of event book now tabs, where this event is presented. Each element is */
        a_event_tab: Array<string>;
        /** The ending date of the class/event. */
        dl_end: string;
        /** The starting date of the class/event. */
        dl_start: string;
        /** Whether class/event is active. */
        is_active: boolean;
        /** Define if current element is event.`true` - event, `false` - class. */
        is_event: boolean;
        /** Whether class/event is removed. */
        is_remove: boolean;
        /** Class/event identifier. */
        k_class: string;
        /** Event Block ID. */
        k_enrollment_block: string;
        /** Class/event name. */
        text_title: string;
    }>;
}
export interface WlClassesClassViewElementParams {
    /** The image height in pixels. Specify this value if you need the image to be returned in a specific... */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need the image to be returned in a specific ... */
    i_image_width: number;
    /** The business key. */
    k_business: string;
    /** The class key used to get information for a specific class. */
    k_class: string;
    /** Defines if canceled schedules should be included in the result. */
    show_cancelled: boolean;
}
export interface WlClassesClassViewElementResponse {
    a_class_list: Array<{
        /** A list of class schedules. Each element has the next structure: */
        a_schedule: {
            /** Schedule repeat options: */
            a_repeat: Record<string, unknown>;
            /** A list of staff member keys that provide sessions for this schedule. */
            a_staff_key: Array<string>;
            /** A list of staff member keys UID that provide sessions for this schedule. */
            a_uid_staff_key: Array<string>;
            /** The end date of the schedule in the location's time zone. */
            dl_end: string;
            /** The start date of the schedule in location's time zone. */
            dl_start: string;
            /** The day of the week, where the class schedule exists, starting with 1 for Monday and ending with ... */
            i_day: number;
            /** The duration of the schedule sessions in minutes. */
            i_duration: number;
            /** Defines whether the schedule canceled or not. */
            is_cancel: boolean;
            /** The location key of the schedule. */
            k_location: string;
            /** The price of a single session of the schedule. */
            m_price: string;
            /** The room of the class period. */
            text_room: string;
            /** The time of the session in the following format: `[start_time] - [end_time]` in the locale's time... */
            text_time: string;
        };
        /** Class-specific business policies overriding the business defaults. */
        a_config: {
            /** List of allowed relation types specific to a given business. */
            a_family_relation: Array<string>;
            /** List of allowed relation types specific to a given business. */
            a_family_relation_login_allow: Array<number>;
        } | null;
        /** Tags for quick search. */
        a_search_tag: {
            /** Search tag key. */
            k_search_tag: string;
            /** Name of the tag. */
            text_title: string;
        };
        /** Information about visits that should be reviewed prior to visiting this class/event. */
        a_visits_required: {
            /** Number of visits. */
            i_count: number;
            /** `true` if this is an event, `false` if this is a class. */
            is_event: boolean;
            /** Key of the class or event. */
            k_class: string;
            /** Name of the class or event. */
            text_title: string;
        };
        /** This field will be `true` if the image used for the class is an image uploaded in the class setup. */
        has_own_image: boolean | null;
        /** The browser-safe description. */
        html_description: string;
        /** Special instructions safe to be inserted to a browser. */
        html_special_instruction: string;
        /** The minimum age restriction. */
        i_age_from: number;
        /** The maximum age restriction. */
        i_age_to: number;
        /** Determines whether age restriction exist and should be taken into account prior to booking this c... */
        is_age_public: boolean;
        /** Determines whether clients can book the class or event online. */
        is_bookable: boolean;
        /** `true` - show classes only for clients who can book online. */
        is_online_private: boolean;
        /** Determines whether clients of the business can see a list of applicable Purchase Options. */
        is_promotion_client: boolean;
        /** Determines whether the item can be booked only using promotions. */
        is_promotion_only: boolean;
        /** Determines whether staff members of the business can see a list of applicable Purchase Options. */
        is_promotion_staff: boolean;
        /** Determines whether the item can be paid with Drop In or not. */
        is_single_buy: boolean;
        /** Determines whether the item is virtual. */
        is_virtual: boolean;
        /** Determines whether the item is an event or class instance. */
        is_event: boolean;
        /** The class key. */
        k_class: string;
        /** Promotion key of the default promotion to use when paying for the class. */
        k_promotion_default: string;
        /** Drop In price, if the class allows payment for one visit. */
        m_price: string;
        /** This will be `true` if special instructions can be public. */
        show_special_instructions: boolean;
        /** The item description. */
        xml_description: string;
        /** The item's special instructions. */
        xml_special_instruction: string;
        /** The URL link to the item image. */
        url_image: string;
    }>;
}
export interface WlClassesPromotionClassPromotionParams {
    /** Determines whether the class is an event or not. */
    is_event: boolean;
    /** `true` - the login type or group restrictions are ignored and all pricing options will be returne... */
    is_login_type_ignore: boolean;
    /** `true` - promotions should only be returned if they're related to the given class or event. */
    is_related_only: boolean;
    /** The business key. */
    k_business: string;
    /** The class key. */
    k_class?: string | null;
}
export interface WlClassesPromotionClassPromotionResponse {
    a_promotion: Array<{
        /** The promotion key. */
        k_promotion: string;
        /** The title of the promotion. */
        text_title: string;
        /** Program types. */
        id_program: number;
        /** `true` if the promotion is related to the class or event, `false` otherwise. */
        is_select: boolean;
    }>;
    /** The default promotion key. */
    k_promotion_default: string | null;
}
export interface WlBusinessPartnerPartnerCodeGetParams {
    /** Business key. */
    k_business: string;
}
export interface WlBusinessPartnerPartnerCodeGetResponse {
    /** Link to the landing campaign */
    url_partner: string;
}
export interface WlBusinessPartnerPartnerCodePostParams {
    /** Business key. */
    k_business: string;
}
export type WlBusinessPartnerPartnerCodePostResponse = Record<string, unknown>;
export interface WlBusinessPartnerPartnerSettingsParams {
    /** The unique code that a business can provide other businesses to tell them about system. */
    text_code: string;
}
export interface WlBusinessPartnerPartnerSettingsResponse {
    /** List of different types for landing pages based on business types. */
    id_business_tour: number;
    /** The business key. */
    k_business: string;
    /** The first name of the business representative. */
    text_name_first: string;
    /** The last name of the business representative. */
    text_name_last: string;
    /** The job title of the business representative. */
    text_position: string;
    /** The text of the review about the WellnessLiving system. */
    text_review: string;
    /** A link to the photo of the business representative. */
    url_photo: string | null;
}
export interface WlBusinessAccountBusinessAccountParams {
    /** `true` returns WellnessLiving customers. */
    is_prospects: boolean;
    /** Specifies if only businesses having published locations should be returned. */
    is_published: boolean;
}
export interface WlBusinessAccountBusinessAccountResponse {
    /** A list of business keys. */
    a_business_keys: Array<string>;
}
export interface WlBusinessClaimBusinessClaimGetParams {
    /** The email address of the location. */
    text_mail: string;
    /** The phone number of the business, staff and location. */
    text_phone: string;
}
export type WlBusinessClaimBusinessClaimGetResponse = Record<string, unknown>;
export type WlBusinessClaimBusinessClaimPostParams = Record<string, unknown>;
export interface WlBusinessClaimBusinessClaimPostResponse {
    /** Location microsite URL. */
    url_microsite: string | null;
}
export type WlBusinessClaimBusinessClaimPutParams = Record<string, unknown>;
export type WlBusinessClaimBusinessClaimPutResponse = Record<string, unknown>;
export interface WlBusinessDesignBusinessDesignParams {
    /** Business key to get design data. */
    k_business: string;
}
export interface WlBusinessDesignBusinessDesignResponse {
    a_data: Array<{
        /** Clients only see today's and upcoming sessions. */
        hide_past_days: boolean;
        /** List of layouts for client's header. */
        id_layout: number;
        /** A position of logo. */
        id_logo_position: number;
        /** A style of logo. */
        id_logo_style: number;
        /** If `true` clients can check-in using the Client Web App and Achieve Web App. */
        is_attend_self: boolean;
        /** If `true` the capacity and number of clients signed up to the appointment will be shown. */
        is_appointment_capacity: boolean;
        /** If `true` the capacity and number of clients signed up to the class will be shown. */
        is_class_capacity: boolean;
        /** If `true`, the quick class filter will be shown. */
        is_class_quick: boolean;
        /** `true` to display only available spots (e.g., "3 spots left"); */
        is_class_spot_only: boolean;
        /** If `true`, the business name will be shown. */
        is_show_name: boolean;
        /** Background color of frontend. */
        s_color_background: string;
        /** Header color of frontend menu. */
        s_color_header: string;
        /** Border color of frontend menu. */
        s_color_menu_border: string;
        /** Menu element color */
        s_color_menu_element: string;
        /** Hover colour of front end menu. */
        s_color_menu_hover: string;
        /** Background hover color of front end menu. */
        s_color_menu_hover_background: string;
        /** Press colour of front end menu. */
        s_color_menu_press: string;
        /** Submenu colour of front end menu. */
        s_color_submenu: string;
        /** Submenu element color of front end menu. */
        s_color_submenu_element: string;
        /** Hover color of submenu of front end menu */
        s_color_submenu_hover: string;
        /** Press color of submenu in front end menu. */
        s_color_submenu_press: string;
        /** Facebook Pixel ID. Used for Facebook analytics tracking. Empty string if tracking is disabled. */
        s_fb_pixel_id: string;
        /** Google Analytics Tracking ID. Used for Google Analytics tracking. Empty string if tracking is dis... */
        s_ga_tracking_id: string;
        /** Google Tag Manager Container ID. Used for Google Analytics tracking. Empty string if tracking is ... */
        s_gtm_container_id: string;
        /** Path to the background image. */
        s_url_background: string;
    }>;
}
export type WlBusinessLeadBusinessLeadParams = Record<string, unknown>;
export type WlBusinessLeadBusinessLeadResponse = Record<string, unknown>;
export interface WlBusinessPhonePhoneDeleteParams {
    /** Business key. */
    k_business?: string | null;
    /** Business phone number(in locale format). */
    text_phone?: string | null;
}
export type WlBusinessPhonePhoneDeleteResponse = Record<string, unknown>;
export interface WlBusinessPhonePhoneGetParams {
    /** Business key. */
    k_business?: string | null;
}
export interface WlBusinessPhonePhoneGetResponse {
    /** A list of locales. */
    id_locale: number | null;
    /** Business phone number(in locale format). */
    text_phone: string | null;
    /** Business phone number mask. */
    text_phone_mask: string;
}
export interface WlBusinessPhonePhonePostParams {
    /** Business key. */
    k_business?: string | null;
    /** Business phone number(in locale format). */
    text_phone?: string | null;
}
export type WlBusinessPhonePhonePostResponse = Record<string, unknown>;
export interface WlBusinessSearchBusinessSearchUserParams {
    /** If `true`, the return only active customers, `false` - all business. */
    is_customer: boolean;
    /** User email to search business keys. */
    text_mail: string;
    /** Given business name to search by. */
    text_name: string;
}
export interface WlBusinessSearchBusinessSearchUserResponse {
    /** Array with business keys that contain given name in their title. */
    a_result: Array<string>;
}
export interface WlBusinessSearchBusinessSearchParams {
    /** If `true`, the return only active customers, `false` - all business. */
    is_customer: boolean;
    /** If `true`, returns only active customer businesses, if `false`, returns all businesses. */
    is_strict: boolean;
    /** Given business name to search by. */
    text_name: string;
}
export interface WlBusinessSearchBusinessSearchResponse {
    /** Array with business keys that contain given name in their title. */
    a_result: Array<string>;
}
export interface WlBusinessConfigBusinessConfigParams {
    /** The business key. */
    k_business: string;
}
export interface WlBusinessConfigBusinessConfigResponse {
    a_business_policy: Array<{
        /** List of not allowed decline reasons to payment reattempt. Each element is one of [PayExceptionSid... */
        a_payment_reattempt_not_decline_reason: Array<number>;
        /** Keys are list of IDs from [ServiceSid](#/components/schemas/Wl.Service.ServiceSid), and values ar... */
        a_wait_service: number;
        /** Minimum hours|days|months before class should be booked. */
        i_book_before: number;
        /** Maximum hours|days|months after class can be booked. */
        i_book_future: number;
        /** Minimum hours|days|months before class should be canceled without penalty. */
        i_cancel: number;
        /** Minimum hours|days|months before class should be promoted from wait list. */
        i_promote: number;
        /** Minimum hours|days|months the notifications which are sent for client confirmation required shoul... */
        i_promote_fastest_response: number;
        /** Minimum hours|days|months the notifications which are sent for client confirmation must confirm t... */
        i_promote_require_confirm: number;
        /** Number of failed auto-payments reattempts. */
        i_reattempt_count: number;
        /** A class for managing time intervals. */
        id_book_before: number;
        /** A class for managing time intervals. */
        id_book_future: number;
        /** A class for managing time intervals. */
        id_cancel: number;
        /** A class for managing time intervals. */
        id_promote: number;
        /** A class for managing time intervals. */
        id_promote_fastest_response: number;
        /** A class for managing time intervals. */
        id_promote_require_confirm: number;
        /** if `true` - clients with purchase options are only allowed */
        is_book_inside_active_pay_period: boolean;
        /** 1 if a client's automatic payment fails, their account should not be */
        is_disable_promotion: number;
        /** Whether to charge penalty after final auto-payment attempt. */
        is_enable_payment_penalty: boolean;
        /** Whether to reattempt failed auto-payments. */
        is_enable_payment_reattempt: boolean;
        /** Whether to restrict which IP addresses staff can login from. */
        is_enable_staff_ip_restriction: boolean;
        /** 1 if booking for a client with negative balance is disabled, 0 - otherwise. Default 0. */
        is_prevent_booking: number;
        /** If true, client can not choose provider while appointment wizard. */
        is_staff_restrict: boolean;
        /** Enable\disable wait list. */
        is_wait: boolean;
        /** Currency from rs.currency table. */
        k_currency: string;
        /** Timezone from get.timezone table. */
        k_timezone: string;
        /** Penalty amount to charge after final auto-payment attempt. */
        m_payment_penalty: string;
        /** Custom Url of a business */
        url_custom: string;
        /** List of allowed relation types specific to a given business. */
        a_family_relation: Array<string>;
        /** List of allowed relation types specific to a given business. */
        a_family_relation_login_allow: Array<number>;
    }>;
    a_penalty: Array<{
        /** List of class period keys. */
        a_class_period: Array<string>;
        /** List of client type keys. */
        a_login_type?: Array<string>;
        /** List of resources keys. */
        a_resource?: Array<string>;
        /** List of services keys. */
        a_service: Array<string>;
        /** Number of blamed visits. */
        i_blame: number;
        /** Count of days/weeks/months. */
        i_cancel_period: number;
        /** Count of applied penalty. */
        i_charge_measure: number;
        /** Defines if client has "Late cancel" or "No shows" sessions. */
        id_blame: number;
        /** A class for managing time intervals. */
        id_cancel_period: number;
        /** Client's charge if he has "Late cancel" or "No shows" sessions. */
        id_charge: number;
        /** Charge measure type. `0` for percent, `1` for money amount. */
        id_charge_measure: number;
        /** `1` if all classes are selected, `0` - otherwise. */
        is_appointment_all: boolean;
        /** `1` if all classes are selected, `0` - otherwise. */
        is_class_all: boolean;
        /** `true` if promotion penalties is enable, `false` otherwise. */
        is_enable_cancel_charge: boolean;
        /** `1` if all events are selected, `0` - otherwise. */
        is_event_all: boolean;
        /** `1` if all login types are selected, `0` - otherwise. */
        is_login_type_all: boolean;
        /** `1` if all resources are selected, `0` - otherwise. */
        is_resource_all: boolean;
        /** `1` if all services are selected, `0` - otherwise. */
        is_service_all: boolean;
    }>;
    /** Whether client must select a location at checkout. */
    is_location_client_select: boolean;
    /** Determines whether staff members should select a location at checkout. */
    is_location_select: boolean;
    /** Determines whether the business has white label setting enabled in the admin settings. */
    is_white_label: boolean;
}
export interface WlBusinessAmazonRegionAmazonRegionParams {
    /** List of business key. */
    a_business: Array<string>;
}
export interface WlBusinessAmazonRegionAmazonRegionResponse {
    /** List of region IDs for `a_business`. */
    a_business_region: Array<number>;
}
export interface WlBusinessAuthorizePartnerAuthorizePartnerParams {
    /** Determines whether the user will be granted access or if access will be revoked. */
    is_grant: boolean;
    /** The key of the franchisee location to enter. */
    k_location: string;
    /** The key of the user who will be granted access. */
    uid: string;
}
export type WlBusinessAuthorizePartnerAuthorizePartnerResponse = Record<string, unknown>;
export interface WlBusinessSelectBusinessSelectParams {
    /** Configuration data used to determine the list of businesses returned. This array has the followin... */
    a_config: Array<{
        /** This will be `true` if we are checking for businesses where the user is a staff member. */
        is_role: boolean;
        /** The business key. */
        k_business?: string;
    }>;
    /** Business in which a list of business is requested. */
    k_business: string;
    /** User who is requesting the list of businesses. */
    uid: string;
}
export interface WlBusinessSelectBusinessSelectResponse {
    a_select: Array<{
        /** List of businesses the user can access. It is an array, each value is an array with the following... */
        a_business: {
            /** The key of the business. */
            k_business: string;
            /** The name of the business. */
            s_title: string;
            /** This will be true for the current business. */
            selected: boolean;
        };
        /** This will be `true` if one of the listed businesses is selected. */
        is_select: boolean;
        /** Information for the widget, the name of the key in the list. This should always be `k_business`. */
        name: string;
        /** Information for the widget, what the widget will do on selection. */
        onchange: string;
        /** Information for the widget, the widget instance ID. */
        s_id: string;
        /** Information for the widget, any additional CSS to apply. */
        s_style: string;
    }>;
}
export type WlBusinessTypeBusinessTypeListParams = Record<string, unknown>;
export interface WlBusinessTypeBusinessTypeListResponse {
    a_business_type: Array<{
        /** Images list for business types. Each element has the next structure: */
        a_image_list: {
            /** Actual height of thumbnail image. */
            i_height: number;
            /** Height of original image. */
            i_height_src: number;
            /** Angle on which image was rotated compared to the original. */
            i_rotate: number;
            /** Actual width of thumbnail image. */
            i_width: number;
            /** Width of original image. */
            i_width_src: number;
            /** Whether thumbnail is a resized variant of original image. */
            is_resize: boolean;
            /** Url to resized and rotated image in file storage. */
            url_thumbnail: string;
            /** Url to original image in file storage. */
            url_view: string;
        };
        /** A list of client booking flow types. */
        id_business_category: number;
        /** List of different types for landing pages based on business types. */
        id_tour: number;
        /** The key of business type. */
        k_business_type: string;
        /** The title of the business category. */
        text_category: string;
        /** The description of the business category. */
        text_category_description: string;
        /** The icon of the business category. */
        text_category_icon: string;
        /** System name of the business type. */
        text_file: string;
        /** The title of business type. */
        text_title: string;
    }>;
}
export interface WlBusinessWaiverWaiverParams {
    /** ID of business to get waiver for. */
    k_business: string;
    /** Full username. */
    text_fullname: string;
    /** User key for which the waiver is shown. */
    uid: string;
}
export interface WlBusinessWaiverWaiverResponse {
    /** Does the business have a waiver or not? */
    has_waiver: boolean;
    /** Text of the current waiver with the substituted variables. */
    html_waiver: string;
}
export interface WlLeadSourceLeadSourceListParams {
    /** Business key. */
    k_business: string;
}
export interface WlLeadSourceLeadSourceListResponse {
    a_lead_source: Array<{
        /** Sorting order. Only used in the Lead Source widget option. `null` is a temporary value that exist... */
        i_sort: number | null;
        /** The source of a visit. */
        id_lead_source: number;
        /** `true` if this skin will be used for "Add Lead" form or `false` otherwise. */
        is_add_lead: boolean;
        /** Determines whether Lead Source is being used. */
        is_use: boolean;
        /** Key of the lead source. */
        k_lead_source: string;
        /** Key of the lead skin. */
        k_skin: string;
        /** Name of the Lead Source. */
        text_title: string;
    }>;
}
export interface WlLeadSourceLeadSourceElementDeleteParams {
    /** Key of the lead source. */
    k_lead_source_replace: string;
}
export type WlLeadSourceLeadSourceElementDeleteResponse = Record<string, unknown>;
export type WlLeadSourceLeadSourceElementPostParams = Record<string, unknown>;
export type WlLeadSourceLeadSourceElementPostResponse = Record<string, unknown>;
export type WlLeadSourceLeadSourceElementPutParams = Record<string, unknown>;
export interface WlLeadSourceLeadSourceElementPutResponse {
    /** Key of the lead source. */
    k_lead_source: string;
}
export interface WlPromotionIndexPromotionIndexParams {
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The program type ID, which will be one of the [RsProgramTypeSid](#/components/schemas/RsProgramTy... */
    id_program_type: number;
    /** The location key. */
    k_location: string;
}
export interface WlPromotionIndexPromotionIndexResponse {
    a_promotion: Array<{
        /** Information about services that can be attended with this pass or membership. */
        a_access: {
            /** A list of available classes. */
            a_class: Record<string, unknown>;
            /** A list of available events. */
            a_event: Record<string, unknown>;
            /** A list of available assets. */
            a_resource: Record<string, unknown>;
            /** A list of available appointment types. */
            a_service: Record<string, unknown>;
            /** If `true`, any class in the business can be visited with this Purchase Option. If `false`, only s... */
            is_class_all: boolean;
            /** If `true`, if any event in the business can be visited with this Purchase Option. If `false`, if ... */
            is_event_all: boolean;
        };
        /** A list of components included in the Purchase Option if this Purchase Option is a package. */
        a_component: {
            /** A list of purchase types. */
            id_purchase_item: number;
            /** The primary key of the component in the related table. This depends on the type of the component. */
            k_id: string;
            /** The quantity. If empty, it means the quantity is 1. */
            i_quantity: number;
            /** The name of the component. */
            text_title: string;
        };
        /** This will be an empty array if the Purchase Option doesn't have image. */
        a_image: {
            /** The height of the image. */
            i_height: string;
            /** The width of the image. */
            i_width: string;
            /** The link to the image. */
            'url-thumbnail': string;
        };
        /** Attendance restrictions, if available. If unavailable, this will be an empty array. Every element... */
        a_visit_limit: {
            /** The quantity of sessions every `i_period`. */
            i_limit: number;
            /** The duration of the time period. This depends on a key of `a_visit_limit` array. */
            i_period: number;
            /** The limit number of rollover sessions. */
            i_roll_over_cap: number;
            /** The duration of the time period after which rolled over session will expire. */
            i_roll_over_expire: number;
            /** A class for managing time intervals. */
            id_roll_over_expire: number;
            /** Attendance Restriction cycle type. */
            id_limit_cycle: number;
            /** Determines whether to reconcile unpaid sessions on restrictions reset. */
            is_reconcile_visit: boolean;
            /** Determines if the rolled over session is expired. */
            is_roll_over_expire: boolean;
            /** Determines whether to rollover sessions upon auto-renew. */
            is_roll_over_renew: boolean;
            /** Determines Whether to rollover sessions. */
            is_rollup: boolean;
            /** Determines whether to convert remaining visits. */
            is_visit_conversion: boolean;
        };
        /** The local expiration date. This is the last day of the Purchase Option's active status. */
        dl_expire: string;
        /** The number of periods for the "Period" duration type. */
        i_duration: number;
        /** The number of visits that the owner of the Purchase Option can use. */
        i_limit: number;
        /** The maximum number of minutes or hours depending on `id_limit_duration` that the current promotio... */
        i_limit_duration: number;
        /** A class for managing time intervals. */
        id_limit_duration: number;
        /** A class for managing time intervals. */
        id_duration: number;
        /** Class to process string identifiers for duration types */
        id_duration_type: number;
        /** Program types. */
        id_program: number;
        /** Program type categories. */
        id_program_category: number;
        /** Program types. */
        id_program_type: number;
        /** If `true`, the pricing option can be sold only by direct link. This means it shouldn't be shown i... */
        is_direct_buy_only: boolean;
        /** If `true`, this promotion is for introductory clients. Otherwise, this will be `false`. */
        is_introductory: boolean;
        /** If `true` this promotion is available for online purchase. Otherwise, this will be `false`. */
        is_online: boolean;
        /** The promotion key. */
        k_promotion: string;
        /** The price. */
        m_price: string;
        /** The description. */
        text_description: string;
        /** The localized promotion program name corresponding to the value of `id_program`. */
        text_program: number;
        /** The title. */
        text_title: string;
        /** The direct URL to the promotion purchase page. */
        url_buy: string;
    }>;
}
export interface WlLoginMailMailUseParams {
    /** The business for which the email address search is being performed. */
    k_business: string;
    /** The email address to check for. */
    text_mail: string;
}
export interface WlLoginMailMailUseResponse {
    /** If `true`, the user with the specified email address exists in specified business. Otherwise, thi... */
    is_exists: boolean;
    /** Key of the user who using email within the business. */
    uid_use: string | null;
}
export interface WlLoginPromotionPromotionPayPauseDeleteParams {
    /** Key of business to which currently handled pause period or login promotion belongs. */
    k_business?: string | null;
    /** The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur... */
    k_login_promotion?: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause?: string | null;
}
export type WlLoginPromotionPromotionPayPauseDeleteResponse = Record<string, unknown>;
export interface WlLoginPromotionPromotionPayPauseGetParams {
    /** Whether need to get all pause periods for the login promotion. */
    is_list: boolean;
    /** The end date of the current hold, in the local time zone. */
    dt_end?: string | null;
    /** The start date of the current hold, in the local time zone. */
    dt_start?: string | null;
    /** Key of business to which currently handled pause period or login promotion belongs. */
    k_business?: string | null;
    /** The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur... */
    k_login_promotion?: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause?: string | null;
}
export interface WlLoginPromotionPromotionPayPauseGetResponse {
    a_pay_pause_list: Array<{
        /** Date when this hold period was created. `null` for old records. */
        dl_create: string | null;
        /** Ending date of the pause (inclusively - this date is paused). */
        dl_end: string;
        /** Starting date of the pause (inclusively - this date is paused). */
        dl_start: string;
        /** Duration of the hold in days. `null` if the hold is ongoing. */
        i_hold_day: number | null;
        /** Whether the hold is in past. */
        is_past: boolean;
        /** Key of the hold period. */
        k_promotion_pay_pause: string;
        /** Additional notes. */
        text_note: string | null;
        /** Full name of a user that has created hold period. `null` for old records. */
        text_user_create: string | null;
        /** Key of a user that has created hold period. `null` for old records. */
        uid_create: string | null;
    }> | null;
    /** The end date of the current hold, in the local time zone. */
    dt_end: string | null;
    /** The start date of the current hold, in the local time zone. */
    dt_start: string | null;
    /** The date when the email notification was sent. */
    dtu_date_notification: string | null;
    /** Whether or not to send email notification. */
    is_mail: boolean;
    /** Whether or not to send push notification. */
    is_push: boolean;
    /** Whether or not to send SMS notification. */
    is_sms: boolean;
    /** The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur... */
    k_login_promotion: string | null;
    /** Key of the email pattern. */
    k_mail_pattern: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause: string | null;
    /** Additional notes for the promotion payment pause period. */
    text_note: string | null;
}
export interface WlLoginPromotionPromotionPayPausePostParams {
    /** The end date of the current hold, in the local time zone. */
    dt_end?: string | null;
    /** The start date of the current hold, in the local time zone. */
    dt_start?: string | null;
    /** Key of business to which currently handled pause period or login promotion belongs. */
    k_business?: string | null;
    /** The Purchase Option key. If this key is used, a new hold will be created. The endpoint will retur... */
    k_login_promotion?: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause?: string | null;
}
export interface WlLoginPromotionPromotionPayPausePostResponse {
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause: string | null;
}
export interface WlLoginPromotionPromotionPayPausePutParams {
    /** The end date of the current hold, in the local time zone. */
    dt_end?: string | null;
    /** The start date of the current hold, in the local time zone. */
    dt_start?: string | null;
    /** Key of business to which currently handled pause period or login promotion belongs. */
    k_business?: string | null;
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause?: string | null;
}
export interface WlLoginPromotionPromotionPayPausePutResponse {
    /** The promotion payment hold key. If this key is used, it will edit an existing hold. */
    k_promotion_pay_pause: string | null;
}
export interface WlLoginMemberMemberValidateParams {
    /** Key of the business. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberMemberValidateResponse {
    /** List of fields if the user has empty profile fields, which are required for booking. */
    a_empty_fields_booking: Array<string>;
    /** List of fields if the user has empty profile fields, which are required for registration. */
    a_empty_fields_registration: Array<string>;
    /** `true` If the user has credit cards on profile, otherwise `false`. */
    has_credit_card: boolean;
    /** `true` if the user has an outstanding contract, otherwise `false`. */
    has_outstanding_contract: boolean;
    /** `true` If the user has an outstanding waiver for the business, otherwise `false`. */
    has_outstanding_waiver: boolean;
    /** `true` If the user has pending registration quizzes to complete, otherwise `false`. */
    has_pending_quizzes: boolean;
    /** `true` If the user has to provide credit card details before booking, otherwise `false`. */
    is_booking_require_card: boolean;
    /** `true` If the user has to provide credit card details to finish their registration, otherwise `fa... */
    is_register_require_card: boolean;
    /** Home user`s location. */
    k_location: string | null;
}
export interface WlLoginMemberMemberGetParams {
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberMemberGetResponse {
    a_business: Array<{
        /** `true` if the user is allowed to sign in into this business; `false` otherwise. */
        can_enter: boolean;
        /** If `true`, then the business is a franchisee. Otherwise, this will be `false`. */
        is_franchisee: boolean;
        /** If `true`, then the business is a franchisor. Otherwise, this will be `false`. */
        is_franchisor: boolean;
        /** The business key. */
        k_business: string;
        /** The business key of the Enterprise Headquarters account (if applicable). */
        k_business_franchisor: string;
        /** The title of the business. */
        text_title: string;
    }>;
}
export interface WlLoginMemberMemberPostParams {
    /** The user's key. */
    uid: string;
}
export type WlLoginMemberMemberPostResponse = Record<string, unknown>;
export interface WlLoginMemberLoginMemberGetParams {
    /** The business key. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberLoginMemberGetResponse {
    /** The user's ID to get/set. */
    s_member: string;
}
export interface WlLoginMemberLoginMemberPostParams {
    /** The business key. */
    k_business: string;
    /** The user's ID to get/set. */
    s_member: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberLoginMemberPostResponse {
    /** The date when client became a member. */
    dt_member: string;
}
export interface WlLoginMemberMemberValidate63Params {
    /** Key of the business. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginMemberMemberValidate63Response {
    a_empty_fields_booking: Array<{
        /** List of general fields in user's profile. */
        id_field_general: number;
        /** Profile field key. */
        k_field: string;
        /** Human-readable field title describing what value is missing. */
        text_field_title: string;
    }>;
    a_empty_fields_registration: Array<{
        /** List of general fields in user's profile. */
        id_field_general: number;
        /** Profile field key. */
        k_field: string;
        /** Human-readable field title describing what value is missing. */
        text_field_title: string;
    }>;
    a_empty_fields_required: Array<{
        /** List of general fields in user's profile. */
        id_field_general: number;
        /** Profile field key. */
        k_field: string;
        /** Human-readable field title describing what value is missing. */
        text_field_title: string;
    }>;
    /** `true` If the user has credit cards on profile, otherwise `false`. */
    has_credit_card: boolean;
    /** `true` if the user has an outstanding contract, otherwise `false`. */
    has_outstanding_contract: boolean;
    /** `true` If the user has an outstanding waiver for the business, otherwise `false`. */
    has_outstanding_waiver: boolean;
    /** `true` If the user has pending registration quizzes to complete, otherwise `false`. */
    has_pending_quizzes: boolean;
    /** `true` If the user has to provide credit card details before booking, otherwise `false`. */
    is_booking_require_card: boolean;
    /** `true` If the user has to provide credit card details to finish their registration, otherwise `fa... */
    is_register_require_card: boolean;
    /** Home user`s location. */
    k_location: string | null;
}
export interface WlLoginMemberLoginMemberListAllParams {
    /** The maximum number of members to return in the list. */
    i_page_size: number;
    /** The key of the business to get a list of members for. */
    k_business: string;
    /** The last member UID from the previous page. */
    uid_last: string;
}
export interface WlLoginMemberLoginMemberListAllResponse {
    /** List of UIDs for all active clients that belong to the business. */
    a_uid: Array<string>;
}
export type WlLoginAddMailUseOkParams = Record<string, unknown>;
export interface WlLoginAddMailUseOkResponse {
    a_error_list: Array<{
        /** The error message. */
        html_message: string;
        /** The name of the field missing information. */
        s_field: string;
    }>;
    /** The result code of the request. */
    s_code: string;
    /** The result message of the request. */
    text_message: string;
}
export interface WlLoginAttendanceAttendanceListParams {
    /** The local date of the class or event session. */
    dt_date_local: string;
    /** If `true`, then return the purchase used to pay for session. */
    is_purchase_info_return: boolean;
    /** The appointment key. Not used if requesting information for a class or event session. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** The class period key. Not used if requesting information for an appointment. */
    k_class_period: string;
}
export interface WlLoginAttendanceAttendanceListResponse {
    a_list_active: Array<{
        /** Information about member. */
        a_info: {
            /** List of icons with additional information about business member. */
            a_icon: Record<string, unknown>;
            /** Information about users vaccination status. */
            a_vaccination_status: Record<string, unknown>;
            /** List of client's notes. Every element has keys: */
            a_note: Record<string, unknown>;
            /** Amount the client owns to the business. */
            html_credit: string;
            /** User`s login notes.&lt;/dd&gt; */
            html_note: string;
            /** `true` if for user exists not completed tasks. */
            is_task_active: boolean;
            /** `true` if for user exists urgent tasks. */
            is_task_urgent: boolean;
            /** `true` if client has not agreed with online waiver. */
            is_waiver: boolean;
            /** Currency of business `$k_business`. */
            k_currency: string;
            /** User's account balance. */
            m_credit: string;
            /** Display user balance or not. */
            show_amount: boolean;
            /** User's address. */
            text_address: string;
            /** Users age. Appears only on the day of birth. */
            text_age: string;
            /** User's email. */
            text_mail: string;
            /** User's cell phone. */
            text_phone: string;
            /** Users first name. */
            text_firstname: string;
            /** Link to the page with client's attendance. */
            text_visit_credit: string;
            /** Link to the page with information about client's account balance. */
            url_attendance: string;
            /** Link to user's billing page. */
            url_billing: string;
            /** Link to user's contract page */
            url_contract: string;
            /** Link to user's forms page. */
            url_form: string;
            /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
            url_overview: string;
            /** Link to user's profile. */
            url_profile: string;
            /** Link to user's waiver page. */
            url_waiver: string;
        };
        /** Information about the user's photo. The information returned has the following structure: */
        a_photo: {
            /** The height of the photo. */
            i_height: number;
            /** The width of the photo. */
            i_width: number;
            /** This will be `true` if a photo hasn't been set yet. */
            is_empty: boolean;
            /** The URL of the photo. */
            s_url: string;
        };
        /** Information about a user's current progress. By default, this information isn't sent. */
        a_progress: {
            /** List of progress log fields. */
            id_field: number;
            /** Possible measurement units of the progress fields values. */
            id_measurement_unit: number;
            /** Possible types of the progress fields values. */
            id_type: number;
            /** Field key. */
            k_field: string;
            /** Progress field log value. */
            x_value: string;
            /** Translated field name. */
            text_name: string;
        };
        /** Quiz information that concerns current visit. */
        a_quiz: {
            /** List of response statuses. */
            id_status: number;
            /** Whether it's hidden. `true` quiz is hidden, `false` otherwise. */
            is_hide: boolean;
            /** Whether it's required. `true` quiz is required, `false` otherwise. */
            is_require: boolean;
            /** Quiz key. */
            k_quiz: string;
            /** Quiz login key. */
            k_quiz_login: string;
            /** Quiz response key. */
            k_quiz_response: string;
            /** Quiz title. */
            text_title: string;
        };
        /** A list of information for any associated resources for this visit. Each element: */
        a_resource: {
            /** Index of the resource among multiple assets. `0` if the resource was booked from the wait list. */
            i_index: number;
            /** Resource key. */
            k_resource: string;
            /** Resource layout alias. */
            text_alias: string;
            /** Resource title. */
            text_title: string;
        };
        /** The date and time when the client transitioned from the wait list to the active list, in human-re... */
        a_wait_confirm: {
            /** The formatted date string (for example, "Monday, Nov 08, 2021"). */
            s_day: string;
            /** The formatted time string (for example, "10:00 AM"). */
            s_time: string;
        };
        /** A list of information pertaining to the client's wearables. */
        a_wearable: {
            /** List of sensor types. */
            id_type: number;
            /** `true` if the device has been removed. */
            is_remove: boolean;
            /** Sensor identifier. Also used as the array key. */
            s_sensor: string;
            /** Device name. */
            text_name: string;
            /** User key. */
            uid: string;
        };
        /** If `true`, the current user can access this client profile. */
        can_profile: boolean;
        /** The date the session was booked, in UTC. */
        dt_book: string;
        /** The date of the session, in UTC. */
        dt_date: string;
        /** The date the Purchase Option that was used will expire, in UTC. */
        dt_expire: string;
        /** The date the client checked in for the visit, in UTC. */
        dt_register: string;
        /** The client age. */
        html_age: string;
        /** The name of the person who booked this visit. */
        html_book_by: string;
        /** The name of the icon to show under gender in the class attendance list. */
        html_gender_class: string;
        /** The client's member ID, if set. */
        html_member: string;
        /** When and where this visit was booked, along with who booked it. */
        html_tooltip_book_by: string;
        /** The default place in the list to show this client. This is a deprecated copy of the `i_order` field. */
        i: number;
        /** The number of visits left on this Purchase Option. This will be `NULL` if there's no limit. */
        i_left: number;
        /** The default place in the list to show this client. */
        i_order: number;
        /** The total visits available from this Purchase Option. */
        i_total: number;
        /** Number of purchase option usages that was returned to user. */
        i_visit_return?: number;
        /** String identifiers for gender. */
        id_gender: number;
        /** List foreign sites that can pay for visits. */
        id_pass_prospect: number;
        /** Program types. */
        id_program: number;
        /** Possible states of the visit: book, attended, cancelled, etc. */
        id_visit: number;
        /** This will be `true` if the client has attended the visit. */
        is_attend: boolean;
        /** This will be `true` if the Purchase Option used is a duration pass. */
        is_duration_pass: boolean;
        /** This will be `true` if the client has paid a deposit for the visit. */
        is_deposit: boolean;
        /** This will be `true` if the client has canceled the visit early, incurring no penalty. */
        is_early: boolean;
        /** This will be `true` if the visit is free. */
        is_free: boolean;
        /** This will be `true` if details on this visit should be hidden from staff members. */
        is_hidden: boolean;
        /** This will be `true` if this visit was cancelled late and a penalty is applied. */
        is_penalty: boolean;
        /** This will be `true` if this was the first visit for the Purchase Option used. */
        is_promotion_first: boolean;
        /** This will be `true` if this was the latest visit for the Purchase Option used. */
        is_promotion_last: boolean;
        /** This will be `true` if the Purchase Option used has no usage limits. */
        is_unlimited: boolean;
        /** This will be `true` if this visit is still considered valid. */
        is_visit: boolean;
        /** This will be `true` if the visit is on the waiting list. */
        is_wait: boolean;
        /** This will be `true` if the visit is awaiting confirmation. */
        is_wait_confirm: boolean;
        /** This will be `true` if the visit has priority on the wait list. */
        is_wait_priority: boolean;
        /** The key of the location. */
        k_location: string;
        /** The key of the client's Purchase Option. */
        k_login_promotion: string;
        /** The key of the visit. */
        k_visit: string;
        /** The purchase used to pay for the session. Instance of [PurchaseListElementApi](/Wl/Profile/Purcha... */
        o_purchase_item: string | null;
        /** The expiry information for the Purchase Option. This field is deprecated, use the text_ version i... */
        s_expire: string;
        /** The client's first name. This field is deprecated, use the text_ version instead. */
        s_firstname: string;
        /** The client's last name. This field is deprecated, use the text_ version instead. */
        s_lastname: string;
        /** Any notes tied to the client. This field is deprecated, use the text_ version instead. */
        s_note: string;
        /** The description of the type of Purchase Option. This field is deprecated, use the text_ version i... */
        s_promotion: string;
        /** The expiry information for the Purchase Option. */
        text_expire: string;
        /** The client first name. */
        text_firstname: string;
        /** The client last name. */
        text_lastname: string;
        /** Any notes tied to the client. */
        text_note: string;
        /** Title of purchase option usages of that was returned to user. */
        text_promotion_return?: string;
        /** The description of the type of Purchase Option. */
        text_promotion: string;
        /** The Purchase Option restriction description. It can be empty string when the Purchase Option has ... */
        text_restrict_title: string;
        /** The class visit status. */
        text_visit_status_class: string;
        /** The icon to use for the class visit status. */
        text_visit_status_icon: string;
        /** The wearable device ID. */
        text_wearable: string;
        /** The client user key. */
        uid: string;
        /** The key of the user who made the booking. */
        uid_book: string;
        /** The URL that can be used to cancel the visit. */
        'url-cancel': string;
        /** The URL that can be used by an admin to cancel the visit. */
        'url-cancel-admin': string;
        /** The URL that for the user's page. */
        'url-login-view': string;
        /** The URL to a page for sending an email to the client. */
        'url-mail': string;
        /** The URL that for the client's profile. */
        'url-profile': string;
    }>;
    a_list_confirm: Array<{
        /** Information about member. */
        a_info: {
            /** List of icons with additional information about business member. */
            a_icon: Record<string, unknown>;
            /** Information about users vaccination status. */
            a_vaccination_status: Record<string, unknown>;
            /** List of client's notes. Every element has keys: */
            a_note: Record<string, unknown>;
            /** Amount the client owns to the business. */
            html_credit: string;
            /** User`s login notes.&lt;/dd&gt; */
            html_note: string;
            /** `true` if for user exists not completed tasks. */
            is_task_active: boolean;
            /** `true` if for user exists urgent tasks. */
            is_task_urgent: boolean;
            /** `true` if client has not agreed with online waiver. */
            is_waiver: boolean;
            /** Currency of business `$k_business`. */
            k_currency: string;
            /** User's account balance. */
            m_credit: string;
            /** Display user balance or not. */
            show_amount: boolean;
            /** User's address. */
            text_address: string;
            /** Users age. Appears only on the day of birth. */
            text_age: string;
            /** User's email. */
            text_mail: string;
            /** User's cell phone. */
            text_phone: string;
            /** Users first name. */
            text_firstname: string;
            /** Link to the page with client's attendance. */
            text_visit_credit: string;
            /** Link to the page with information about client's account balance. */
            url_attendance: string;
            /** Link to user's billing page. */
            url_billing: string;
            /** Link to user's contract page */
            url_contract: string;
            /** Link to user's forms page. */
            url_form: string;
            /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
            url_overview: string;
            /** Link to user's profile. */
            url_profile: string;
            /** Link to user's waiver page. */
            url_waiver: string;
        };
        /** Information about the user's photo. The information returned has the following structure: */
        a_photo: {
            /** The height of the photo. */
            i_height: number;
            /** The width of the photo. */
            i_width: number;
            /** This will be `true` if a photo hasn't been set yet. */
            is_empty: boolean;
            /** The URL of the photo. */
            s_url: string;
        };
        /** Information about a user's current progress. By default, this information isn't sent. */
        a_progress: {
            /** List of progress log fields. */
            id_field: number;
            /** Possible measurement units of the progress fields values. */
            id_measurement_unit: number;
            /** Possible types of the progress fields values. */
            id_type: number;
            /** Field key. */
            k_field: string;
            /** Progress field log value. */
            x_value: string;
            /** Translated field name. */
            text_name: string;
        };
        /** Quiz information that concerns current visit. */
        a_quiz: {
            /** List of response statuses. */
            id_status: number;
            /** Whether it's hidden. `true` quiz is hidden, `false` otherwise. */
            is_hide: boolean;
            /** Whether it's required. `true` quiz is required, `false` otherwise. */
            is_require: boolean;
            /** Quiz key. */
            k_quiz: string;
            /** Quiz login key. */
            k_quiz_login: string;
            /** Quiz response key. */
            k_quiz_response: string;
            /** Quiz title. */
            text_title: string;
        };
        /** A list of information for any associated resources for this visit. Each element: */
        a_resource: {
            /** Index of the resource among multiple assets. `0` if the resource was booked from the wait list. */
            i_index: number;
            /** Resource key. */
            k_resource: string;
            /** Resource layout alias. */
            text_alias: string;
            /** Resource title. */
            text_title: string;
        };
        /** The date and time when the client transitioned from the wait list to the active list, in human-re... */
        a_wait_confirm: {
            /** The formatted date string (for example, "Monday, Nov 08, 2021"). */
            s_day: string;
            /** The formatted time string (for example, "10:00 AM"). */
            s_time: string;
        };
        /** A list of information pertaining to the client's wearables. */
        a_wearable: {
            /** List of sensor types. */
            id_type: number;
            /** `true` if the device has been removed. */
            is_remove: boolean;
            /** Sensor identifier. Also used as the array key. */
            s_sensor: string;
            /** Device name. */
            text_name: string;
            /** User key. */
            uid: string;
        };
        /** If `true`, the current user can access this client profile. */
        can_profile: boolean;
        /** The date the session was booked, in UTC. */
        dt_book: string;
        /** The date of the session, in UTC. */
        dt_date: string;
        /** The date the Purchase Option that was used will expire, in UTC. */
        dt_expire: string;
        /** The date the client checked in for the visit, in UTC. */
        dt_register: string;
        /** The client age. */
        html_age: string;
        /** The name of the person who booked this visit. */
        html_book_by: string;
        /** The name of the icon to show under gender in the class attendance list. */
        html_gender_class: string;
        /** The client's member ID, if set. */
        html_member: string;
        /** When and where this visit was booked, along with who booked it. */
        html_tooltip_book_by: string;
        /** The default place in the list to show this client. This is a deprecated copy of the `i_order` field. */
        i: number;
        /** The number of visits left on this Purchase Option. This will be `NULL` if there's no limit. */
        i_left: number;
        /** The default place in the list to show this client. */
        i_order: number;
        /** The total visits available from this Purchase Option. */
        i_total: number;
        /** Number of purchase option usages that was returned to user. */
        i_visit_return?: number;
        /** String identifiers for gender. */
        id_gender: number;
        /** List foreign sites that can pay for visits. */
        id_pass_prospect: number;
        /** Program types. */
        id_program: number;
        /** Possible states of the visit: book, attended, cancelled, etc. */
        id_visit: number;
        /** This will be `true` if the client has attended the visit. */
        is_attend: boolean;
        /** This will be `true` if the Purchase Option used is a duration pass. */
        is_duration_pass: boolean;
        /** This will be `true` if the client has paid a deposit for the visit. */
        is_deposit: boolean;
        /** This will be `true` if the client has canceled the visit early, incurring no penalty. */
        is_early: boolean;
        /** This will be `true` if the visit is free. */
        is_free: boolean;
        /** This will be `true` if details on this visit should be hidden from staff members. */
        is_hidden: boolean;
        /** This will be `true` if this visit was cancelled late and a penalty is applied. */
        is_penalty: boolean;
        /** This will be `true` if this was the first visit for the Purchase Option used. */
        is_promotion_first: boolean;
        /** This will be `true` if this was the latest visit for the Purchase Option used. */
        is_promotion_last: boolean;
        /** This will be `true` if the Purchase Option used has no usage limits. */
        is_unlimited: boolean;
        /** This will be `true` if this visit is still considered valid. */
        is_visit: boolean;
        /** This will be `true` if the visit is on the waiting list. */
        is_wait: boolean;
        /** This will be `true` if the visit is awaiting confirmation. */
        is_wait_confirm: boolean;
        /** This will be `true` if the visit has priority on the wait list. */
        is_wait_priority: boolean;
        /** The key of the location. */
        k_location: string;
        /** The key of the client's Purchase Option. */
        k_login_promotion: string;
        /** The key of the visit. */
        k_visit: string;
        /** The purchase used to pay for the session. Instance of [PurchaseListElementApi](/Wl/Profile/Purcha... */
        o_purchase_item: string | null;
        /** The expiry information for the Purchase Option. This field is deprecated, use the text_ version i... */
        s_expire: string;
        /** The client's first name. This field is deprecated, use the text_ version instead. */
        s_firstname: string;
        /** The client's last name. This field is deprecated, use the text_ version instead. */
        s_lastname: string;
        /** Any notes tied to the client. This field is deprecated, use the text_ version instead. */
        s_note: string;
        /** The description of the type of Purchase Option. This field is deprecated, use the text_ version i... */
        s_promotion: string;
        /** The expiry information for the Purchase Option. */
        text_expire: string;
        /** The client first name. */
        text_firstname: string;
        /** The client last name. */
        text_lastname: string;
        /** Any notes tied to the client. */
        text_note: string;
        /** Title of purchase option usages of that was returned to user. */
        text_promotion_return?: string;
        /** The description of the type of Purchase Option. */
        text_promotion: string;
        /** The Purchase Option restriction description. It can be empty string when the Purchase Option has ... */
        text_restrict_title: string;
        /** The class visit status. */
        text_visit_status_class: string;
        /** The icon to use for the class visit status. */
        text_visit_status_icon: string;
        /** The wearable device ID. */
        text_wearable: string;
        /** The client user key. */
        uid: string;
        /** The key of the user who made the booking. */
        uid_book: string;
        /** The URL that can be used to cancel the visit. */
        'url-cancel': string;
        /** The URL that can be used by an admin to cancel the visit. */
        'url-cancel-admin': string;
        /** The URL that for the user's page. */
        'url-login-view': string;
        /** The URL to a page for sending an email to the client. */
        'url-mail': string;
        /** The URL that for the client's profile. */
        'url-profile': string;
    }>;
    a_list_wait: Array<{
        /** Information about member. */
        a_info: {
            /** List of icons with additional information about business member. */
            a_icon: Record<string, unknown>;
            /** Information about users vaccination status. */
            a_vaccination_status: Record<string, unknown>;
            /** List of client's notes. Every element has keys: */
            a_note: Record<string, unknown>;
            /** Amount the client owns to the business. */
            html_credit: string;
            /** User`s login notes.&lt;/dd&gt; */
            html_note: string;
            /** `true` if for user exists not completed tasks. */
            is_task_active: boolean;
            /** `true` if for user exists urgent tasks. */
            is_task_urgent: boolean;
            /** `true` if client has not agreed with online waiver. */
            is_waiver: boolean;
            /** Currency of business `$k_business`. */
            k_currency: string;
            /** User's account balance. */
            m_credit: string;
            /** Display user balance or not. */
            show_amount: boolean;
            /** User's address. */
            text_address: string;
            /** Users age. Appears only on the day of birth. */
            text_age: string;
            /** User's email. */
            text_mail: string;
            /** User's cell phone. */
            text_phone: string;
            /** Users first name. */
            text_firstname: string;
            /** Link to the page with client's attendance. */
            text_visit_credit: string;
            /** Link to the page with information about client's account balance. */
            url_attendance: string;
            /** Link to user's billing page. */
            url_billing: string;
            /** Link to user's contract page */
            url_contract: string;
            /** Link to user's forms page. */
            url_form: string;
            /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
            url_overview: string;
            /** Link to user's profile. */
            url_profile: string;
            /** Link to user's waiver page. */
            url_waiver: string;
        };
        /** Information about the user's photo. The information returned has the following structure: */
        a_photo: {
            /** The height of the photo. */
            i_height: number;
            /** The width of the photo. */
            i_width: number;
            /** This will be `true` if a photo hasn't been set yet. */
            is_empty: boolean;
            /** The URL of the photo. */
            s_url: string;
        };
        /** Information about a user's current progress. By default, this information isn't sent. */
        a_progress: {
            /** List of progress log fields. */
            id_field: number;
            /** Possible measurement units of the progress fields values. */
            id_measurement_unit: number;
            /** Possible types of the progress fields values. */
            id_type: number;
            /** Field key. */
            k_field: string;
            /** Progress field log value. */
            x_value: string;
            /** Translated field name. */
            text_name: string;
        };
        /** Quiz information that concerns current visit. */
        a_quiz: {
            /** List of response statuses. */
            id_status: number;
            /** Whether it's hidden. `true` quiz is hidden, `false` otherwise. */
            is_hide: boolean;
            /** Whether it's required. `true` quiz is required, `false` otherwise. */
            is_require: boolean;
            /** Quiz key. */
            k_quiz: string;
            /** Quiz login key. */
            k_quiz_login: string;
            /** Quiz response key. */
            k_quiz_response: string;
            /** Quiz title. */
            text_title: string;
        };
        /** A list of information for any associated resources for this visit. Each element: */
        a_resource: {
            /** Index of the resource among multiple assets. `0` if the resource was booked from the wait list. */
            i_index: number;
            /** Resource key. */
            k_resource: string;
            /** Resource layout alias. */
            text_alias: string;
            /** Resource title. */
            text_title: string;
        };
        /** The date and time when the client transitioned from the wait list to the active list, in human-re... */
        a_wait_confirm: {
            /** The formatted date string (for example, "Monday, Nov 08, 2021"). */
            s_day: string;
            /** The formatted time string (for example, "10:00 AM"). */
            s_time: string;
        };
        /** A list of information pertaining to the client's wearables. */
        a_wearable: {
            /** List of sensor types. */
            id_type: number;
            /** `true` if the device has been removed. */
            is_remove: boolean;
            /** Sensor identifier. Also used as the array key. */
            s_sensor: string;
            /** Device name. */
            text_name: string;
            /** User key. */
            uid: string;
        };
        /** If `true`, the current user can access this client profile. */
        can_profile: boolean;
        /** The date the session was booked, in UTC. */
        dt_book: string;
        /** The date of the session, in UTC. */
        dt_date: string;
        /** The date the Purchase Option that was used will expire, in UTC. */
        dt_expire: string;
        /** The date the client checked in for the visit, in UTC. */
        dt_register: string;
        /** The client age. */
        html_age: string;
        /** The name of the person who booked this visit. */
        html_book_by: string;
        /** The name of the icon to show under gender in the class attendance list. */
        html_gender_class: string;
        /** The client's member ID, if set. */
        html_member: string;
        /** When and where this visit was booked, along with who booked it. */
        html_tooltip_book_by: string;
        /** The default place in the list to show this client. This is a deprecated copy of the `i_order` field. */
        i: number;
        /** The number of visits left on this Purchase Option. This will be `NULL` if there's no limit. */
        i_left: number;
        /** The default place in the list to show this client. */
        i_order: number;
        /** The total visits available from this Purchase Option. */
        i_total: number;
        /** Number of purchase option usages that was returned to user. */
        i_visit_return?: number;
        /** String identifiers for gender. */
        id_gender: number;
        /** List foreign sites that can pay for visits. */
        id_pass_prospect: number;
        /** Program types. */
        id_program: number;
        /** Possible states of the visit: book, attended, cancelled, etc. */
        id_visit: number;
        /** This will be `true` if the client has attended the visit. */
        is_attend: boolean;
        /** This will be `true` if the Purchase Option used is a duration pass. */
        is_duration_pass: boolean;
        /** This will be `true` if the client has paid a deposit for the visit. */
        is_deposit: boolean;
        /** This will be `true` if the client has canceled the visit early, incurring no penalty. */
        is_early: boolean;
        /** This will be `true` if the visit is free. */
        is_free: boolean;
        /** This will be `true` if details on this visit should be hidden from staff members. */
        is_hidden: boolean;
        /** This will be `true` if this visit was cancelled late and a penalty is applied. */
        is_penalty: boolean;
        /** This will be `true` if this was the first visit for the Purchase Option used. */
        is_promotion_first: boolean;
        /** This will be `true` if this was the latest visit for the Purchase Option used. */
        is_promotion_last: boolean;
        /** This will be `true` if the Purchase Option used has no usage limits. */
        is_unlimited: boolean;
        /** This will be `true` if this visit is still considered valid. */
        is_visit: boolean;
        /** This will be `true` if the visit is on the waiting list. */
        is_wait: boolean;
        /** This will be `true` if the visit is awaiting confirmation. */
        is_wait_confirm: boolean;
        /** This will be `true` if the visit has priority on the wait list. */
        is_wait_priority: boolean;
        /** The key of the location. */
        k_location: string;
        /** The key of the client's Purchase Option. */
        k_login_promotion: string;
        /** The key of the visit. */
        k_visit: string;
        /** The purchase used to pay for the session. Instance of [PurchaseListElementApi](/Wl/Profile/Purcha... */
        o_purchase_item: string | null;
        /** The expiry information for the Purchase Option. This field is deprecated, use the text_ version i... */
        s_expire: string;
        /** The client's first name. This field is deprecated, use the text_ version instead. */
        s_firstname: string;
        /** The client's last name. This field is deprecated, use the text_ version instead. */
        s_lastname: string;
        /** Any notes tied to the client. This field is deprecated, use the text_ version instead. */
        s_note: string;
        /** The description of the type of Purchase Option. This field is deprecated, use the text_ version i... */
        s_promotion: string;
        /** The expiry information for the Purchase Option. */
        text_expire: string;
        /** The client first name. */
        text_firstname: string;
        /** The client last name. */
        text_lastname: string;
        /** Any notes tied to the client. */
        text_note: string;
        /** Title of purchase option usages of that was returned to user. */
        text_promotion_return?: string;
        /** The description of the type of Purchase Option. */
        text_promotion: string;
        /** The Purchase Option restriction description. It can be empty string when the Purchase Option has ... */
        text_restrict_title: string;
        /** The class visit status. */
        text_visit_status_class: string;
        /** The icon to use for the class visit status. */
        text_visit_status_icon: string;
        /** The wearable device ID. */
        text_wearable: string;
        /** The client user key. */
        uid: string;
        /** The key of the user who made the booking. */
        uid_book: string;
        /** The URL that can be used to cancel the visit. */
        'url-cancel': string;
        /** The URL that can be used by an admin to cancel the visit. */
        'url-cancel-admin': string;
        /** The URL that for the user's page. */
        'url-login-view': string;
        /** The URL to a page for sending an email to the client. */
        'url-mail': string;
        /** The URL that for the client's profile. */
        'url-profile': string;
    }>;
    /** The maximum capacity of the class or event session. */
    i_capacity: number;
    /** Count client on the attendance. */
    i_client: number;
    /** The maximum number of clients on wait list of the class or event session. */
    i_wait_list_limit: number;
    /** `true` to use class/event specific wait list limit, `false` to use the limit from default policies. */
    is_wait_list_limit: boolean;
    /** The Location key. */
    k_location: string;
}
export interface WlLoginAttendanceAttendanceInfoParams {
    /** Start date of the class in MySQL format in local time. */
    dt_date_local: string;
    /** ID of appointment to get information for. */
    k_appointment: string;
    /** ID of business to get information for. */
    k_business: string;
    /** ID of class period to get information for. */
    k_class_period: string;
}
export interface WlLoginAttendanceAttendanceInfoResponse {
    a_appointment_visit_info: Array<{
        /** `true` means that appointment was requested and denied by the staff. */
        is_deny: boolean;
        /** `true` means that the client will receive a notification, if appointment will be confirmed by the... */
        is_notify_request_accept: boolean;
        /** `true` means that the client will receive a notification, if appointment will be denied by the st... */
        is_notify_request_deny: boolean;
        /** `true` means that appointment was requested, but not confirmed by the staff. */
        is_request: boolean;
    }>;
    a_logo: Array<{
        /** Whether service image is empty. */
        is_empty: boolean;
        /** Url link to image. */
        s_url: string;
    }>;
    a_purchase_option_default: Array<{
        /** List of sale categories on the store page. */
        id_sale: number;
        /** The default Purchase Option key. */
        k_id: string | null;
        /** If the default Purchase Option is set to "Drop-in rate" then the value will be `true`, `false` ot... */
        is_single_default: boolean;
    }>;
    /** Assets which are bound to this session. */
    a_resource: Array<string>;
    a_resource_layout: Array<{
        /** List of clients who occupy assets of class. */
        a_client: {
            /** User's name. */
            text_client: string;
            /** User's primary key. */
            uid: string;
        };
        /** Key of asset. */
        a_resource_available: Array<string>;
        /** Key of layout. */
        k_resource_layout: string;
        /** Title of asset category. */
        text_resource_type: string;
    }>;
    a_staff: Array<{
        /** Data of staff member's photo. Empty if staff has no photo. Otherwise contains next keys: */
        a_logo: {
            /** Height in pixels. */
            i_height: number;
            /** Width in pixels. */
            i_width: number;
            /** Image URL. */
            url_logo: string;
        };
        /** deprecated Legacy staff key. Returned only for applications from allow-list. */
        k_staff: string;
        /** Staff user key. */
        uid_staff: string;
        /** Staff member's first name. */
        html_firstname: string;
        /** Staff member's last name. */
        html_lastname: string;
    }>;
    /** Confirmation date+time of appointment in MySQL format. If client never confirmed, will be zero da... */
    dt_confirm: string;
    /** Start date of the session in MySQL format in GMT. */
    dt_date_global: string;
    /** End date and time of the session in MySQL format in local timezone. */
    dtl_end: string;
    /** End date and time of the session in MySQL format in GMT. */
    dtu_end: string;
    /** Date and time in UTC when the visit is promoted from wait list to active list. */
    dtu_wait_promote: string;
    /** Whether notes added to visit. */
    has_note: boolean;
    /** Duration of the session in minutes. */
    i_duration: number;
    /** A list of types of visit note. */
    id_note: number | null;
    /** Identifiers for services types. */
    id_service: number;
    /** Whether this service be carried out in Zoom. */
    is_start_virtual_service: boolean;
    /** Class identifier. Not empty if service is class or event reservation. */
    k_class: string;
    /** Location identifier. */
    k_location: string;
    /** Resource identifier. Not empty if service is asset reservation. */
    k_resource: string;
    /** Service identifier. Not empty if service is appointment reservation. */
    k_service: string;
    /** Location name. */
    text_location: string;
    /** Time when service starts in format `8:00AM`. */
    text_time_end: string;
    /** Start time of the session in format '9:30AM'. */
    text_time_start: string;
    /** Title of the appointment. */
    text_title: string;
    /** URL that leads directly to the class/event booking page in the Client Web App. */
    url_booking: string;
}
export interface WlLoginAttendanceAttendanceListByTokenParams {
    /** The local date of the class or event session. */
    dt_date_local: string;
    /** If `true`, then return the purchase used to pay for session. */
    is_purchase_info_return: boolean;
    /** The appointment key. Not used if requesting information for a class or event session. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** The class period key. Not used if requesting information for an appointment. */
    k_class_period: string;
    /** The security token. */
    text_token: string;
}
export interface WlLoginAttendanceAttendanceListByTokenResponse {
    a_list_active: Array<{
        /** Information about member. */
        a_info: {
            /** List of icons with additional information about business member. */
            a_icon: Record<string, unknown>;
            /** Information about users vaccination status. */
            a_vaccination_status: Record<string, unknown>;
            /** List of client's notes. Every element has keys: */
            a_note: Record<string, unknown>;
            /** Amount the client owns to the business. */
            html_credit: string;
            /** User`s login notes.&lt;/dd&gt; */
            html_note: string;
            /** `true` if for user exists not completed tasks. */
            is_task_active: boolean;
            /** `true` if for user exists urgent tasks. */
            is_task_urgent: boolean;
            /** `true` if client has not agreed with online waiver. */
            is_waiver: boolean;
            /** Currency of business `$k_business`. */
            k_currency: string;
            /** User's account balance. */
            m_credit: string;
            /** Display user balance or not. */
            show_amount: boolean;
            /** User's address. */
            text_address: string;
            /** Users age. Appears only on the day of birth. */
            text_age: string;
            /** User's email. */
            text_mail: string;
            /** User's cell phone. */
            text_phone: string;
            /** Users first name. */
            text_firstname: string;
            /** Link to the page with client's attendance. */
            text_visit_credit: string;
            /** Link to the page with information about client's account balance. */
            url_attendance: string;
            /** Link to user's billing page. */
            url_billing: string;
            /** Link to user's contract page */
            url_contract: string;
            /** Link to user's forms page. */
            url_form: string;
            /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
            url_overview: string;
            /** Link to user's profile. */
            url_profile: string;
            /** Link to user's waiver page. */
            url_waiver: string;
        };
        /** Information about the user's photo. The information returned has the following structure: */
        a_photo: {
            /** The height of the photo. */
            i_height: number;
            /** The width of the photo. */
            i_width: number;
            /** This will be `true` if a photo hasn't been set yet. */
            is_empty: boolean;
            /** The URL of the photo. */
            s_url: string;
        };
        /** Information about a user's current progress. By default, this information isn't sent. */
        a_progress: {
            /** List of progress log fields. */
            id_field: number;
            /** Possible measurement units of the progress fields values. */
            id_measurement_unit: number;
            /** Possible types of the progress fields values. */
            id_type: number;
            /** Field key. */
            k_field: string;
            /** Progress field log value. */
            x_value: string;
            /** Translated field name. */
            text_name: string;
        };
        /** Quiz information that concerns current visit. */
        a_quiz: {
            /** List of response statuses. */
            id_status: number;
            /** Whether it's hidden. `true` quiz is hidden, `false` otherwise. */
            is_hide: boolean;
            /** Whether it's required. `true` quiz is required, `false` otherwise. */
            is_require: boolean;
            /** Quiz key. */
            k_quiz: string;
            /** Quiz login key. */
            k_quiz_login: string;
            /** Quiz response key. */
            k_quiz_response: string;
            /** Quiz title. */
            text_title: string;
        };
        /** A list of information for any associated resources for this visit. Each element: */
        a_resource: {
            /** Index of the resource among multiple assets. `0` if the resource was booked from the wait list. */
            i_index: number;
            /** Resource key. */
            k_resource: string;
            /** Resource layout alias. */
            text_alias: string;
            /** Resource title. */
            text_title: string;
        };
        /** The date and time when the client transitioned from the wait list to the active list, in human-re... */
        a_wait_confirm: {
            /** The formatted date string (for example, "Monday, Nov 08, 2021"). */
            s_day: string;
            /** The formatted time string (for example, "10:00 AM"). */
            s_time: string;
        };
        /** A list of information pertaining to the client's wearables. */
        a_wearable: {
            /** List of sensor types. */
            id_type: number;
            /** `true` if the device has been removed. */
            is_remove: boolean;
            /** Sensor identifier. Also used as the array key. */
            s_sensor: string;
            /** Device name. */
            text_name: string;
            /** User key. */
            uid: string;
        };
        /** If `true`, the current user can access this client profile. */
        can_profile: boolean;
        /** The date the session was booked, in UTC. */
        dt_book: string;
        /** The date of the session, in UTC. */
        dt_date: string;
        /** The date the Purchase Option that was used will expire, in UTC. */
        dt_expire: string;
        /** The date the client checked in for the visit, in UTC. */
        dt_register: string;
        /** The client age. */
        html_age: string;
        /** The name of the person who booked this visit. */
        html_book_by: string;
        /** The name of the icon to show under gender in the class attendance list. */
        html_gender_class: string;
        /** The client's member ID, if set. */
        html_member: string;
        /** When and where this visit was booked, along with who booked it. */
        html_tooltip_book_by: string;
        /** The default place in the list to show this client. This is a deprecated copy of the `i_order` field. */
        i: number;
        /** The number of visits left on this Purchase Option. This will be `NULL` if there's no limit. */
        i_left: number;
        /** The default place in the list to show this client. */
        i_order: number;
        /** The total visits available from this Purchase Option. */
        i_total: number;
        /** Number of purchase option usages that was returned to user. */
        i_visit_return?: number;
        /** String identifiers for gender. */
        id_gender: number;
        /** List foreign sites that can pay for visits. */
        id_pass_prospect: number;
        /** Program types. */
        id_program: number;
        /** Possible states of the visit: book, attended, cancelled, etc. */
        id_visit: number;
        /** This will be `true` if the client has attended the visit. */
        is_attend: boolean;
        /** This will be `true` if the Purchase Option used is a duration pass. */
        is_duration_pass: boolean;
        /** This will be `true` if the client has paid a deposit for the visit. */
        is_deposit: boolean;
        /** This will be `true` if the client has canceled the visit early, incurring no penalty. */
        is_early: boolean;
        /** This will be `true` if the visit is free. */
        is_free: boolean;
        /** This will be `true` if details on this visit should be hidden from staff members. */
        is_hidden: boolean;
        /** This will be `true` if this visit was cancelled late and a penalty is applied. */
        is_penalty: boolean;
        /** This will be `true` if this was the first visit for the Purchase Option used. */
        is_promotion_first: boolean;
        /** This will be `true` if this was the latest visit for the Purchase Option used. */
        is_promotion_last: boolean;
        /** This will be `true` if the Purchase Option used has no usage limits. */
        is_unlimited: boolean;
        /** This will be `true` if this visit is still considered valid. */
        is_visit: boolean;
        /** This will be `true` if the visit is on the waiting list. */
        is_wait: boolean;
        /** This will be `true` if the visit is awaiting confirmation. */
        is_wait_confirm: boolean;
        /** This will be `true` if the visit has priority on the wait list. */
        is_wait_priority: boolean;
        /** The key of the location. */
        k_location: string;
        /** The key of the client's Purchase Option. */
        k_login_promotion: string;
        /** The key of the visit. */
        k_visit: string;
        /** The purchase used to pay for the session. Instance of [PurchaseListElementApi](/Wl/Profile/Purcha... */
        o_purchase_item: string | null;
        /** The expiry information for the Purchase Option. This field is deprecated, use the text_ version i... */
        s_expire: string;
        /** The client's first name. This field is deprecated, use the text_ version instead. */
        s_firstname: string;
        /** The client's last name. This field is deprecated, use the text_ version instead. */
        s_lastname: string;
        /** Any notes tied to the client. This field is deprecated, use the text_ version instead. */
        s_note: string;
        /** The description of the type of Purchase Option. This field is deprecated, use the text_ version i... */
        s_promotion: string;
        /** The expiry information for the Purchase Option. */
        text_expire: string;
        /** The client first name. */
        text_firstname: string;
        /** The client last name. */
        text_lastname: string;
        /** Any notes tied to the client. */
        text_note: string;
        /** Title of purchase option usages of that was returned to user. */
        text_promotion_return?: string;
        /** The description of the type of Purchase Option. */
        text_promotion: string;
        /** The Purchase Option restriction description. It can be empty string when the Purchase Option has ... */
        text_restrict_title: string;
        /** The class visit status. */
        text_visit_status_class: string;
        /** The icon to use for the class visit status. */
        text_visit_status_icon: string;
        /** The wearable device ID. */
        text_wearable: string;
        /** The client user key. */
        uid: string;
        /** The key of the user who made the booking. */
        uid_book: string;
        /** The URL that can be used to cancel the visit. */
        'url-cancel': string;
        /** The URL that can be used by an admin to cancel the visit. */
        'url-cancel-admin': string;
        /** The URL that for the user's page. */
        'url-login-view': string;
        /** The URL to a page for sending an email to the client. */
        'url-mail': string;
        /** The URL that for the client's profile. */
        'url-profile': string;
    }>;
    a_list_confirm: Array<{
        /** Information about member. */
        a_info: {
            /** List of icons with additional information about business member. */
            a_icon: Record<string, unknown>;
            /** Information about users vaccination status. */
            a_vaccination_status: Record<string, unknown>;
            /** List of client's notes. Every element has keys: */
            a_note: Record<string, unknown>;
            /** Amount the client owns to the business. */
            html_credit: string;
            /** User`s login notes.&lt;/dd&gt; */
            html_note: string;
            /** `true` if for user exists not completed tasks. */
            is_task_active: boolean;
            /** `true` if for user exists urgent tasks. */
            is_task_urgent: boolean;
            /** `true` if client has not agreed with online waiver. */
            is_waiver: boolean;
            /** Currency of business `$k_business`. */
            k_currency: string;
            /** User's account balance. */
            m_credit: string;
            /** Display user balance or not. */
            show_amount: boolean;
            /** User's address. */
            text_address: string;
            /** Users age. Appears only on the day of birth. */
            text_age: string;
            /** User's email. */
            text_mail: string;
            /** User's cell phone. */
            text_phone: string;
            /** Users first name. */
            text_firstname: string;
            /** Link to the page with client's attendance. */
            text_visit_credit: string;
            /** Link to the page with information about client's account balance. */
            url_attendance: string;
            /** Link to user's billing page. */
            url_billing: string;
            /** Link to user's contract page */
            url_contract: string;
            /** Link to user's forms page. */
            url_form: string;
            /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
            url_overview: string;
            /** Link to user's profile. */
            url_profile: string;
            /** Link to user's waiver page. */
            url_waiver: string;
        };
        /** Information about the user's photo. The information returned has the following structure: */
        a_photo: {
            /** The height of the photo. */
            i_height: number;
            /** The width of the photo. */
            i_width: number;
            /** This will be `true` if a photo hasn't been set yet. */
            is_empty: boolean;
            /** The URL of the photo. */
            s_url: string;
        };
        /** Information about a user's current progress. By default, this information isn't sent. */
        a_progress: {
            /** List of progress log fields. */
            id_field: number;
            /** Possible measurement units of the progress fields values. */
            id_measurement_unit: number;
            /** Possible types of the progress fields values. */
            id_type: number;
            /** Field key. */
            k_field: string;
            /** Progress field log value. */
            x_value: string;
            /** Translated field name. */
            text_name: string;
        };
        /** Quiz information that concerns current visit. */
        a_quiz: {
            /** List of response statuses. */
            id_status: number;
            /** Whether it's hidden. `true` quiz is hidden, `false` otherwise. */
            is_hide: boolean;
            /** Whether it's required. `true` quiz is required, `false` otherwise. */
            is_require: boolean;
            /** Quiz key. */
            k_quiz: string;
            /** Quiz login key. */
            k_quiz_login: string;
            /** Quiz response key. */
            k_quiz_response: string;
            /** Quiz title. */
            text_title: string;
        };
        /** A list of information for any associated resources for this visit. Each element: */
        a_resource: {
            /** Index of the resource among multiple assets. `0` if the resource was booked from the wait list. */
            i_index: number;
            /** Resource key. */
            k_resource: string;
            /** Resource layout alias. */
            text_alias: string;
            /** Resource title. */
            text_title: string;
        };
        /** The date and time when the client transitioned from the wait list to the active list, in human-re... */
        a_wait_confirm: {
            /** The formatted date string (for example, "Monday, Nov 08, 2021"). */
            s_day: string;
            /** The formatted time string (for example, "10:00 AM"). */
            s_time: string;
        };
        /** A list of information pertaining to the client's wearables. */
        a_wearable: {
            /** List of sensor types. */
            id_type: number;
            /** `true` if the device has been removed. */
            is_remove: boolean;
            /** Sensor identifier. Also used as the array key. */
            s_sensor: string;
            /** Device name. */
            text_name: string;
            /** User key. */
            uid: string;
        };
        /** If `true`, the current user can access this client profile. */
        can_profile: boolean;
        /** The date the session was booked, in UTC. */
        dt_book: string;
        /** The date of the session, in UTC. */
        dt_date: string;
        /** The date the Purchase Option that was used will expire, in UTC. */
        dt_expire: string;
        /** The date the client checked in for the visit, in UTC. */
        dt_register: string;
        /** The client age. */
        html_age: string;
        /** The name of the person who booked this visit. */
        html_book_by: string;
        /** The name of the icon to show under gender in the class attendance list. */
        html_gender_class: string;
        /** The client's member ID, if set. */
        html_member: string;
        /** When and where this visit was booked, along with who booked it. */
        html_tooltip_book_by: string;
        /** The default place in the list to show this client. This is a deprecated copy of the `i_order` field. */
        i: number;
        /** The number of visits left on this Purchase Option. This will be `NULL` if there's no limit. */
        i_left: number;
        /** The default place in the list to show this client. */
        i_order: number;
        /** The total visits available from this Purchase Option. */
        i_total: number;
        /** Number of purchase option usages that was returned to user. */
        i_visit_return?: number;
        /** String identifiers for gender. */
        id_gender: number;
        /** List foreign sites that can pay for visits. */
        id_pass_prospect: number;
        /** Program types. */
        id_program: number;
        /** Possible states of the visit: book, attended, cancelled, etc. */
        id_visit: number;
        /** This will be `true` if the client has attended the visit. */
        is_attend: boolean;
        /** This will be `true` if the Purchase Option used is a duration pass. */
        is_duration_pass: boolean;
        /** This will be `true` if the client has paid a deposit for the visit. */
        is_deposit: boolean;
        /** This will be `true` if the client has canceled the visit early, incurring no penalty. */
        is_early: boolean;
        /** This will be `true` if the visit is free. */
        is_free: boolean;
        /** This will be `true` if details on this visit should be hidden from staff members. */
        is_hidden: boolean;
        /** This will be `true` if this visit was cancelled late and a penalty is applied. */
        is_penalty: boolean;
        /** This will be `true` if this was the first visit for the Purchase Option used. */
        is_promotion_first: boolean;
        /** This will be `true` if this was the latest visit for the Purchase Option used. */
        is_promotion_last: boolean;
        /** This will be `true` if the Purchase Option used has no usage limits. */
        is_unlimited: boolean;
        /** This will be `true` if this visit is still considered valid. */
        is_visit: boolean;
        /** This will be `true` if the visit is on the waiting list. */
        is_wait: boolean;
        /** This will be `true` if the visit is awaiting confirmation. */
        is_wait_confirm: boolean;
        /** This will be `true` if the visit has priority on the wait list. */
        is_wait_priority: boolean;
        /** The key of the location. */
        k_location: string;
        /** The key of the client's Purchase Option. */
        k_login_promotion: string;
        /** The key of the visit. */
        k_visit: string;
        /** The purchase used to pay for the session. Instance of [PurchaseListElementApi](/Wl/Profile/Purcha... */
        o_purchase_item: string | null;
        /** The expiry information for the Purchase Option. This field is deprecated, use the text_ version i... */
        s_expire: string;
        /** The client's first name. This field is deprecated, use the text_ version instead. */
        s_firstname: string;
        /** The client's last name. This field is deprecated, use the text_ version instead. */
        s_lastname: string;
        /** Any notes tied to the client. This field is deprecated, use the text_ version instead. */
        s_note: string;
        /** The description of the type of Purchase Option. This field is deprecated, use the text_ version i... */
        s_promotion: string;
        /** The expiry information for the Purchase Option. */
        text_expire: string;
        /** The client first name. */
        text_firstname: string;
        /** The client last name. */
        text_lastname: string;
        /** Any notes tied to the client. */
        text_note: string;
        /** Title of purchase option usages of that was returned to user. */
        text_promotion_return?: string;
        /** The description of the type of Purchase Option. */
        text_promotion: string;
        /** The Purchase Option restriction description. It can be empty string when the Purchase Option has ... */
        text_restrict_title: string;
        /** The class visit status. */
        text_visit_status_class: string;
        /** The icon to use for the class visit status. */
        text_visit_status_icon: string;
        /** The wearable device ID. */
        text_wearable: string;
        /** The client user key. */
        uid: string;
        /** The key of the user who made the booking. */
        uid_book: string;
        /** The URL that can be used to cancel the visit. */
        'url-cancel': string;
        /** The URL that can be used by an admin to cancel the visit. */
        'url-cancel-admin': string;
        /** The URL that for the user's page. */
        'url-login-view': string;
        /** The URL to a page for sending an email to the client. */
        'url-mail': string;
        /** The URL that for the client's profile. */
        'url-profile': string;
    }>;
    a_list_wait: Array<{
        /** Information about member. */
        a_info: {
            /** List of icons with additional information about business member. */
            a_icon: Record<string, unknown>;
            /** Information about users vaccination status. */
            a_vaccination_status: Record<string, unknown>;
            /** List of client's notes. Every element has keys: */
            a_note: Record<string, unknown>;
            /** Amount the client owns to the business. */
            html_credit: string;
            /** User`s login notes.&lt;/dd&gt; */
            html_note: string;
            /** `true` if for user exists not completed tasks. */
            is_task_active: boolean;
            /** `true` if for user exists urgent tasks. */
            is_task_urgent: boolean;
            /** `true` if client has not agreed with online waiver. */
            is_waiver: boolean;
            /** Currency of business `$k_business`. */
            k_currency: string;
            /** User's account balance. */
            m_credit: string;
            /** Display user balance or not. */
            show_amount: boolean;
            /** User's address. */
            text_address: string;
            /** Users age. Appears only on the day of birth. */
            text_age: string;
            /** User's email. */
            text_mail: string;
            /** User's cell phone. */
            text_phone: string;
            /** Users first name. */
            text_firstname: string;
            /** Link to the page with client's attendance. */
            text_visit_credit: string;
            /** Link to the page with information about client's account balance. */
            url_attendance: string;
            /** Link to user's billing page. */
            url_billing: string;
            /** Link to user's contract page */
            url_contract: string;
            /** Link to user's forms page. */
            url_form: string;
            /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
            url_overview: string;
            /** Link to user's profile. */
            url_profile: string;
            /** Link to user's waiver page. */
            url_waiver: string;
        };
        /** Information about the user's photo. The information returned has the following structure: */
        a_photo: {
            /** The height of the photo. */
            i_height: number;
            /** The width of the photo. */
            i_width: number;
            /** This will be `true` if a photo hasn't been set yet. */
            is_empty: boolean;
            /** The URL of the photo. */
            s_url: string;
        };
        /** Information about a user's current progress. By default, this information isn't sent. */
        a_progress: {
            /** List of progress log fields. */
            id_field: number;
            /** Possible measurement units of the progress fields values. */
            id_measurement_unit: number;
            /** Possible types of the progress fields values. */
            id_type: number;
            /** Field key. */
            k_field: string;
            /** Progress field log value. */
            x_value: string;
            /** Translated field name. */
            text_name: string;
        };
        /** Quiz information that concerns current visit. */
        a_quiz: {
            /** List of response statuses. */
            id_status: number;
            /** Whether it's hidden. `true` quiz is hidden, `false` otherwise. */
            is_hide: boolean;
            /** Whether it's required. `true` quiz is required, `false` otherwise. */
            is_require: boolean;
            /** Quiz key. */
            k_quiz: string;
            /** Quiz login key. */
            k_quiz_login: string;
            /** Quiz response key. */
            k_quiz_response: string;
            /** Quiz title. */
            text_title: string;
        };
        /** A list of information for any associated resources for this visit. Each element: */
        a_resource: {
            /** Index of the resource among multiple assets. `0` if the resource was booked from the wait list. */
            i_index: number;
            /** Resource key. */
            k_resource: string;
            /** Resource layout alias. */
            text_alias: string;
            /** Resource title. */
            text_title: string;
        };
        /** The date and time when the client transitioned from the wait list to the active list, in human-re... */
        a_wait_confirm: {
            /** The formatted date string (for example, "Monday, Nov 08, 2021"). */
            s_day: string;
            /** The formatted time string (for example, "10:00 AM"). */
            s_time: string;
        };
        /** A list of information pertaining to the client's wearables. */
        a_wearable: {
            /** List of sensor types. */
            id_type: number;
            /** `true` if the device has been removed. */
            is_remove: boolean;
            /** Sensor identifier. Also used as the array key. */
            s_sensor: string;
            /** Device name. */
            text_name: string;
            /** User key. */
            uid: string;
        };
        /** If `true`, the current user can access this client profile. */
        can_profile: boolean;
        /** The date the session was booked, in UTC. */
        dt_book: string;
        /** The date of the session, in UTC. */
        dt_date: string;
        /** The date the Purchase Option that was used will expire, in UTC. */
        dt_expire: string;
        /** The date the client checked in for the visit, in UTC. */
        dt_register: string;
        /** The client age. */
        html_age: string;
        /** The name of the person who booked this visit. */
        html_book_by: string;
        /** The name of the icon to show under gender in the class attendance list. */
        html_gender_class: string;
        /** The client's member ID, if set. */
        html_member: string;
        /** When and where this visit was booked, along with who booked it. */
        html_tooltip_book_by: string;
        /** The default place in the list to show this client. This is a deprecated copy of the `i_order` field. */
        i: number;
        /** The number of visits left on this Purchase Option. This will be `NULL` if there's no limit. */
        i_left: number;
        /** The default place in the list to show this client. */
        i_order: number;
        /** The total visits available from this Purchase Option. */
        i_total: number;
        /** Number of purchase option usages that was returned to user. */
        i_visit_return?: number;
        /** String identifiers for gender. */
        id_gender: number;
        /** List foreign sites that can pay for visits. */
        id_pass_prospect: number;
        /** Program types. */
        id_program: number;
        /** Possible states of the visit: book, attended, cancelled, etc. */
        id_visit: number;
        /** This will be `true` if the client has attended the visit. */
        is_attend: boolean;
        /** This will be `true` if the Purchase Option used is a duration pass. */
        is_duration_pass: boolean;
        /** This will be `true` if the client has paid a deposit for the visit. */
        is_deposit: boolean;
        /** This will be `true` if the client has canceled the visit early, incurring no penalty. */
        is_early: boolean;
        /** This will be `true` if the visit is free. */
        is_free: boolean;
        /** This will be `true` if details on this visit should be hidden from staff members. */
        is_hidden: boolean;
        /** This will be `true` if this visit was cancelled late and a penalty is applied. */
        is_penalty: boolean;
        /** This will be `true` if this was the first visit for the Purchase Option used. */
        is_promotion_first: boolean;
        /** This will be `true` if this was the latest visit for the Purchase Option used. */
        is_promotion_last: boolean;
        /** This will be `true` if the Purchase Option used has no usage limits. */
        is_unlimited: boolean;
        /** This will be `true` if this visit is still considered valid. */
        is_visit: boolean;
        /** This will be `true` if the visit is on the waiting list. */
        is_wait: boolean;
        /** This will be `true` if the visit is awaiting confirmation. */
        is_wait_confirm: boolean;
        /** This will be `true` if the visit has priority on the wait list. */
        is_wait_priority: boolean;
        /** The key of the location. */
        k_location: string;
        /** The key of the client's Purchase Option. */
        k_login_promotion: string;
        /** The key of the visit. */
        k_visit: string;
        /** The purchase used to pay for the session. Instance of [PurchaseListElementApi](/Wl/Profile/Purcha... */
        o_purchase_item: string | null;
        /** The expiry information for the Purchase Option. This field is deprecated, use the text_ version i... */
        s_expire: string;
        /** The client's first name. This field is deprecated, use the text_ version instead. */
        s_firstname: string;
        /** The client's last name. This field is deprecated, use the text_ version instead. */
        s_lastname: string;
        /** Any notes tied to the client. This field is deprecated, use the text_ version instead. */
        s_note: string;
        /** The description of the type of Purchase Option. This field is deprecated, use the text_ version i... */
        s_promotion: string;
        /** The expiry information for the Purchase Option. */
        text_expire: string;
        /** The client first name. */
        text_firstname: string;
        /** The client last name. */
        text_lastname: string;
        /** Any notes tied to the client. */
        text_note: string;
        /** Title of purchase option usages of that was returned to user. */
        text_promotion_return?: string;
        /** The description of the type of Purchase Option. */
        text_promotion: string;
        /** The Purchase Option restriction description. It can be empty string when the Purchase Option has ... */
        text_restrict_title: string;
        /** The class visit status. */
        text_visit_status_class: string;
        /** The icon to use for the class visit status. */
        text_visit_status_icon: string;
        /** The wearable device ID. */
        text_wearable: string;
        /** The client user key. */
        uid: string;
        /** The key of the user who made the booking. */
        uid_book: string;
        /** The URL that can be used to cancel the visit. */
        'url-cancel': string;
        /** The URL that can be used by an admin to cancel the visit. */
        'url-cancel-admin': string;
        /** The URL that for the user's page. */
        'url-login-view': string;
        /** The URL to a page for sending an email to the client. */
        'url-mail': string;
        /** The URL that for the client's profile. */
        'url-profile': string;
    }>;
    /** The maximum capacity of the class or event session. */
    i_capacity: number;
    /** Count client on the attendance. */
    i_client: number;
    /** The maximum number of clients on wait list of the class or event session. */
    i_wait_list_limit: number;
    /** `true` to use class/event specific wait list limit, `false` to use the limit from default policies. */
    is_wait_list_limit: boolean;
    /** The Location key. */
    k_location: string;
}
export interface WlLoginAttendanceAttendanceInfoByTokenParams {
    /** Start date of the class in MySQL format in local time. */
    dt_date_local: string;
    /** ID of appointment to get information for. */
    k_appointment: string;
    /** ID of business to get information for. */
    k_business: string;
    /** ID of class period to get information for. */
    k_class_period: string;
    /** The security token. */
    text_token: string;
}
export interface WlLoginAttendanceAttendanceInfoByTokenResponse {
    a_appointment_visit_info: Array<{
        /** `true` means that appointment was requested and denied by the staff. */
        is_deny: boolean;
        /** `true` means that the client will receive a notification, if appointment will be confirmed by the... */
        is_notify_request_accept: boolean;
        /** `true` means that the client will receive a notification, if appointment will be denied by the st... */
        is_notify_request_deny: boolean;
        /** `true` means that appointment was requested, but not confirmed by the staff. */
        is_request: boolean;
    }>;
    a_logo: Array<{
        /** Whether service image is empty. */
        is_empty: boolean;
        /** Url link to image. */
        s_url: string;
    }>;
    a_purchase_option_default: Array<{
        /** List of sale categories on the store page. */
        id_sale: number;
        /** The default Purchase Option key. */
        k_id: string | null;
        /** If the default Purchase Option is set to "Drop-in rate" then the value will be `true`, `false` ot... */
        is_single_default: boolean;
    }>;
    /** Assets which are bound to this session. */
    a_resource: Array<string>;
    a_resource_layout: Array<{
        /** List of clients who occupy assets of class. */
        a_client: {
            /** User's name. */
            text_client: string;
            /** User's primary key. */
            uid: string;
        };
        /** Key of asset. */
        a_resource_available: Array<string>;
        /** Key of layout. */
        k_resource_layout: string;
        /** Title of asset category. */
        text_resource_type: string;
    }>;
    a_staff: Array<{
        /** Data of staff member's photo. Empty if staff has no photo. Otherwise contains next keys: */
        a_logo: {
            /** Height in pixels. */
            i_height: number;
            /** Width in pixels. */
            i_width: number;
            /** Image URL. */
            url_logo: string;
        };
        /** deprecated Legacy staff key. Returned only for applications from allow-list. */
        k_staff: string;
        /** Staff user key. */
        uid_staff: string;
        /** Staff member's first name. */
        html_firstname: string;
        /** Staff member's last name. */
        html_lastname: string;
    }>;
    /** Confirmation date+time of appointment in MySQL format. If client never confirmed, will be zero da... */
    dt_confirm: string;
    /** Start date of the session in MySQL format in GMT. */
    dt_date_global: string;
    /** End date and time of the session in MySQL format in local timezone. */
    dtl_end: string;
    /** End date and time of the session in MySQL format in GMT. */
    dtu_end: string;
    /** Date and time in UTC when the visit is promoted from wait list to active list. */
    dtu_wait_promote: string;
    /** Whether notes added to visit. */
    has_note: boolean;
    /** Duration of the session in minutes. */
    i_duration: number;
    /** A list of types of visit note. */
    id_note: number | null;
    /** Identifiers for services types. */
    id_service: number;
    /** Whether this service be carried out in Zoom. */
    is_start_virtual_service: boolean;
    /** Class identifier. Not empty if service is class or event reservation. */
    k_class: string;
    /** Location identifier. */
    k_location: string;
    /** Resource identifier. Not empty if service is asset reservation. */
    k_resource: string;
    /** Service identifier. Not empty if service is appointment reservation. */
    k_service: string;
    /** Location name. */
    text_location: string;
    /** Time when service starts in format `8:00AM`. */
    text_time_end: string;
    /** Start time of the session in format '9:30AM'. */
    text_time_start: string;
    /** Title of the appointment. */
    text_title: string;
    /** URL that leads directly to the class/event booking page in the Client Web App. */
    url_booking: string;
}
export interface WlLoginSearchConcertoParams {
    /** Business to search user in. */
    k_business: string;
    /** Email to search. */
    text_mail: string;
    /** Phone to search. */
    text_phone: string;
}
export interface WlLoginSearchConcertoResponse {
    /** User's primary key. */
    uid: string;
}
export interface WlLoginTypeLoginTypeParams {
    /** If `true`, this `k_business` is a franchisor, and login types of all franchisees should be returned. */
    is_franchisor: boolean;
    /** The business key used internally by WellnessLiving. */
    k_business: string;
}
export interface WlLoginTypeLoginTypeResponse {
    a_login_type_list: Array<{
        /** A list of client type IDs. */
        id_client_type: number;
        /** Deprecated Use `id_client_type` instead. */
        is_member: boolean;
        /** The login type key. */
        k_login_type: string;
        /** The name of the login type. */
        s_title: string;
        /** Same as `s_title` offset. */
        text_title: string;
    }>;
}
export interface WlLoginPermissionPermissionParams {
    /** The key of the purchased promotion. */
    k_login_promotion: string;
}
export type WlLoginPermissionPermissionResponse = Record<string, unknown>;
export interface WlLoginAgreeAgreeGetParams {
    /** The key of business. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export interface WlLoginAgreeAgreeGetResponse {
    /** Formatted text of business liability release. Not empty if the business has a liability release a... */
    html_contract: string;
}
export interface WlLoginAgreeAgreePostParams {
    /** The key of business. */
    k_business: string;
    /** The user's key. */
    uid: string;
}
export type WlLoginAgreeAgreePostResponse = Record<string, unknown>;
export interface WlLoginCouponCouponParams {
    /** The business key. */
    k_business: string;
    /** The gift card. */
    s_code: string;
}
export interface WlLoginCouponCouponResponse {
    /** The gift card reference number for this specific user. WellnessLiving uses this reference number ... */
    k_login_coupon: string;
    /** The gift card amount. */
    m_amount: string;
}
export interface WlLoginProductProductParams {
    /** Maximal date and time of purchase in UTC. Empty string means no filter by maximal date. */
    dtu_end: string;
    /** Minimal date and time of purchase in UTC. Empty string means no filter by minimal date. */
    dtu_start: string;
    /** Number of the page to get. */
    i_page: number;
    /** Page size. */
    i_page_size: number;
    /** ID of the payment method. One of the [RsPayMethodSid](#/components/schemas/RsPayMethodSid) consta... */
    id_pay_method: number;
    /** Business key. */
    k_business: string;
    /** Location key. Empty string means no filter by location. */
    k_location: string;
    /** Product option key. Empty string means no filter by product option. */
    k_shop_product_option: string;
    /** Maximum price of the product. 0 means no filter by maximum price. */
    m_price_max: string;
    /** Minimum price of the product. */
    m_price_min: string;
    /** User key. Empty string means return products purchased by walk-in. */
    uid: string;
}
export interface WlLoginProductProductResponse {
    a_login_product: Array<{
        /** Date and time of purchase in UTC. */
        dtu_purchase: string;
        /** Quantity of the product purchased. */
        i_quantity: number;
        /** Key of product. */
        k_shop_product_option: string;
        /** Price per unit of the product. */
        m_price: string;
        /** Total amount paid for the product. */
        m_total_amount: string;
        /** Location where the purchase was made. */
        text_location: string;
        /** Name of the purchased product. */
        text_product: string;
    }>;
}
export interface WlQuizResponseResponse65DeleteParams {
    /** Quiz response key list. */
    a_quiz_response_key: Array<string>;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export type WlQuizResponseResponse65DeleteResponse = Record<string, unknown>;
export interface WlQuizResponseResponse65GetParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** `true` for load answers for response, `false` otherwise. */
    is_answer: boolean;
    is_backend: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export interface WlQuizResponseResponse65GetResponse {
    a_access_log: Array<{
        /** Date and time of the quiz changes. */
        dtu_activity: string;
        /** User's key. */
        uid_actor: string;
        /** The status of form actions. */
        id_activity: number;
        /** Title of the activity */
        text_activity: string;
        /** Date and time of the quiz changes in appropriate format string for further render. */
        text_date: string;
        /** Full name of the user who made an activity. */
        text_actor: string;
        /** Url for view information about the user who made activity (admin, staff, client). */
        url_actor: string;
    }>;
    a_element: Array<{
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Answer array for selected question options. */
        a_answer: Array<number>;
        /** Array for a dropdown question's options. */
        a_list: Array<string>;
        /** Additional string for detail description of the question. */
        html_description: string;
        /** Main html of the input question. */
        html_question: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Answer can have multiple options selected. */
        is_multiple: boolean;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Additional string for detail description of the question. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_question: string;
        /** Additional XML for detail description of the question. */
        xml_description: string;
        /** Main XML of the input question. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional HTML for detail description of the question. */
        html_heading: string;
        /** Main HTML of the input question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Additional string for detail description of the question. */
        text_heading: string;
        /** Main text of the input question. */
        text_subheading: string;
        /** Additional XML for detail description of the question. */
        xml_heading: string;
        /** Main XML of the input question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Whether this element has a duplicate. */
        has_duplicate: boolean;
        /** HTML of the image caption. */
        html_caption: string;
        /** Main HTML of the image heading. */
        html_heading: string;
        /** Additional HTML for detail description of the image (optional). */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Image source key for duplicate. */
        k_id_source: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Command for image save prepare. */
        s_command: string;
        /** Image caption. */
        text_caption: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Markup images files. */
        a_markup_image: Array<unknown>;
        /** Can user upload custom image. */
        can_upload: boolean;
        /** Main HTML of the input question. */
        html_heading: string;
        /** Additional HTML for detail description of the question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** ` true ` if custom markup image is to be deleted `false` otherwise. */
        is_delete_custom_markup_image: boolean;
        is_require: boolean;
        /** Fake id used for image upload. */
        k_id: string;
        /** Image ID of the temporary uploaded custom markup image to be copied as permanent drive link. */
        k_id_custom_markup_image: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Link of the source default markup image to copy to the element. */
        s_link_default_markup_image: string;
        /** Post-Markup image binary text. */
        s_markup_image: string;
        /** Main text of the input question. */
        text_heading: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Additional string for detail description of the question. */
        text_subheading: string;
        /** Custom default image path. */
        url_custom_default_image: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional html for detail description of the question. */
        html_heading: string;
        /** Footer text of signature pad. */
        html_signature_footer: string;
        /** Header text of signature pad. */
        html_signature_header: string;
        /** Main html of the input question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Signature binary text. */
        s_signature: string;
        /** Additional string for detail description of the question. */
        text_heading: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_subheading: string;
        /** Additional XML for detail description of the question. */
        xml_heading: string;
        /** Main XML of the input question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional HTML for detail description of the question. */
        html_description: string;
        /** Main HTML of the input question. */
        html_question: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Answer text for a question. */
        text_answer: string;
        /** Additional string for detail description of the question. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_question: string;
        /** Additional XML for detail description of the question. */
        xml_description: string;
        /** Main XML of the input question. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Sub-question html. */
        html_description: string;
        /** Question html. */
        html_question: string;
        /** Selected rate. */
        i_rate: number;
        /** Rate scale. */
        i_scale: number;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Sub-question text. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Question text. */
        text_question: string;
        /** Sub-question XML. */
        xml_description: string;
        /** Question XML. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Markup images files. */
        a_markup_image: Array<unknown>;
        /** Whether this element has a duplicate. */
        has_duplicate: boolean;
        /** Main HTML of the input question. */
        html_heading: string;
        /** Additional HTML for detail description of the question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Left response image key. */
        k_id_image_left: string;
        /** Right response image key. */
        k_id_image_right: string;
        /** Left image source key for duplicate. */
        k_id_source_left: string;
        /** Right image source key for duplicate. */
        k_id_source_right: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Command for left image save prepare. */
        s_command_left: string;
        /** Command for right image save prepare. */
        s_command_right: string;
        /** Post-Markup image binary text. */
        s_markup_image: string;
        /** Title for left image. */
        text_left_image: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Title for right image. */
        text_right_image: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Main content HTML. */
        html_content: string;
        /** Heading HTML. */
        html_heading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Main content text. */
        text_content: string;
        /** Heading text. */
        text_heading: string;
        /** Main content XML. */
        xml_content: string;
        /** Heading XML. */
        xml_heading: string;
    }>;
    a_service_info: Array<{
        /** Formatted visit date and time in the location's time zone. */
        text_date: string;
        /** Location title. */
        text_location: string;
        /** Service title. */
        text_service: string;
        /** Comma-separated list of full names of staff members conducting the visit. */
        text_staff_member: string;
    }>;
    /** Whether response can be amended by current user. */
    can_amend: boolean;
    /** Date when response was submitted. */
    dtu_response: string;
    /** List of sources where quiz response can be generated. */
    id_source: number;
    /** List of response statuses. */
    id_status: number;
    /** Whether to show numbering of the form elements that supports numbering. */
    show_numbering: boolean;
    /** Date when response added. */
    text_add_date: string;
    /** Date when response amended. */
    text_amend_date: string;
    /** Name of the user who amend the response. */
    text_amend_user: string;
    /** Date when response completed. */
    text_complete_date: string;
    /** Name of the user who complete the response. */
    text_complete_user: string;
    /** Name of the user who owned the response. */
    text_response_by: string;
    /** Title of the filled form. */
    text_title: string | null;
}
export interface WlQuizResponseResponse65PostParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    is_backend: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export interface WlQuizResponseResponse65PostResponse {
    /** Quiz response key. */
    k_quiz_response: string | null;
}
export interface WlQuizResponseResponse65PutParams {
    /** Quiz response key list. */
    a_quiz_response_key: Array<string>;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
    /** User's key for the response association. */
    uid_link?: string | null;
}
export type WlQuizResponseResponse65PutResponse = Record<string, unknown>;
export interface WlQuizResponseResponseDeleteParams {
    /** Quiz response key list. */
    a_quiz_response_key: Array<string>;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export type WlQuizResponseResponseDeleteResponse = Record<string, unknown>;
export interface WlQuizResponseResponseGetParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** `true` for load answers for response, `false` otherwise. */
    is_answer: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export interface WlQuizResponseResponseGetResponse {
    a_access_log: Array<{
        /** Date and time of the quiz changes. */
        dtu_activity: string;
        /** User's key. */
        uid_actor: string;
        /** The status of form actions. */
        id_activity: number;
        /** Title of the activity */
        text_activity: string;
        /** Date and time of the quiz changes in appropriate format string for further render. */
        text_date: string;
        /** Full name of the user who made an activity. */
        text_actor: string;
        /** Url for view information about the user who made activity (admin, staff, client). */
        url_actor: string;
    }>;
    a_element: Array<{
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Answer array for selected question options. */
        a_answer: Array<number>;
        /** Array for a dropdown question's options. */
        a_list: Array<string>;
        /** Additional string for detail description of the question. */
        html_description: string;
        /** Main html of the input question. */
        html_question: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Answer can have multiple options selected. */
        is_multiple: boolean;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Additional string for detail description of the question. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_question: string;
        /** Additional XML for detail description of the question. */
        xml_description: string;
        /** Main XML of the input question. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional HTML for detail description of the question. */
        html_heading: string;
        /** Main HTML of the input question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Additional string for detail description of the question. */
        text_heading: string;
        /** Main text of the input question. */
        text_subheading: string;
        /** Additional XML for detail description of the question. */
        xml_heading: string;
        /** Main XML of the input question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Whether this element has a duplicate. */
        has_duplicate: boolean;
        /** HTML of the image caption. */
        html_caption: string;
        /** Main HTML of the image heading. */
        html_heading: string;
        /** Additional HTML for detail description of the image (optional). */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Image source key for duplicate. */
        k_id_source: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Command for image save prepare. */
        s_command: string;
        /** Image caption. */
        text_caption: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Markup images files. */
        a_markup_image: Array<unknown>;
        /** Can user upload custom image. */
        can_upload: boolean;
        /** Main HTML of the input question. */
        html_heading: string;
        /** Additional HTML for detail description of the question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** ` true ` if custom markup image is to be deleted `false` otherwise. */
        is_delete_custom_markup_image: boolean;
        is_require: boolean;
        /** Fake id used for image upload. */
        k_id: string;
        /** Image ID of the temporary uploaded custom markup image to be copied as permanent drive link. */
        k_id_custom_markup_image: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Link of the source default markup image to copy to the element. */
        s_link_default_markup_image: string;
        /** Post-Markup image binary text. */
        s_markup_image: string;
        /** Main text of the input question. */
        text_heading: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Additional string for detail description of the question. */
        text_subheading: string;
        /** Custom default image path. */
        url_custom_default_image: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional html for detail description of the question. */
        html_heading: string;
        /** Footer text of signature pad. */
        html_signature_footer: string;
        /** Header text of signature pad. */
        html_signature_header: string;
        /** Main html of the input question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Signature binary text. */
        s_signature: string;
        /** Additional string for detail description of the question. */
        text_heading: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_subheading: string;
        /** Additional XML for detail description of the question. */
        xml_heading: string;
        /** Main XML of the input question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Additional HTML for detail description of the question. */
        html_description: string;
        /** Main HTML of the input question. */
        html_question: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Answer text for a question. */
        text_answer: string;
        /** Additional string for detail description of the question. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Main text of the input question. */
        text_question: string;
        /** Additional XML for detail description of the question. */
        xml_description: string;
        /** Main XML of the input question. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Sub-question html. */
        html_description: string;
        /** Question html. */
        html_question: string;
        /** Selected rate. */
        i_rate: number;
        /** Rate scale. */
        i_scale: number;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Sub-question text. */
        text_description: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Question text. */
        text_question: string;
        /** Sub-question XML. */
        xml_description: string;
        /** Question XML. */
        xml_question: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Markup images files. */
        a_markup_image: Array<unknown>;
        /** Whether this element has a duplicate. */
        has_duplicate: boolean;
        /** Main HTML of the input question. */
        html_heading: string;
        /** Additional HTML for detail description of the question. */
        html_subheading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        is_require: boolean;
        /** Left response image key. */
        k_id_image_left: string;
        /** Right response image key. */
        k_id_image_right: string;
        /** Left image source key for duplicate. */
        k_id_source_left: string;
        /** Right image source key for duplicate. */
        k_id_source_right: string;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Command for left image save prepare. */
        s_command_left: string;
        /** Command for right image save prepare. */
        s_command_right: string;
        /** Post-Markup image binary text. */
        s_markup_image: string;
        /** Title for left image. */
        text_left_image: string;
        /** Additional note for response. */
        text_note: string | null;
        /** Title for right image. */
        text_right_image: string;
        /** Main XML of the input question. */
        xml_heading: string;
        /** Additional XML for detail description of the question. */
        xml_subheading: string;
    } | {
        /** List of amendments. */
        a_amendment: Record<string, unknown>;
        /** Main content HTML. */
        html_content: string;
        /** Heading HTML. */
        html_heading: string;
        /** Element ID. One of [ElementSid](#/components/schemas/Core.Quiz.Element.ElementSid) constants. */
        id_element: number;
        /** Whether element is required or not. */
        is_require: boolean;
        /** Quiz element key. */
        k_quiz_element?: string | null;
        /** Old quiz element key. */
        k_quiz_element_old: string | null;
        /** Main content text. */
        text_content: string;
        /** Heading text. */
        text_heading: string;
        /** Main content XML. */
        xml_content: string;
        /** Heading XML. */
        xml_heading: string;
    }>;
    a_service_info: Array<{
        /** Formatted visit date and time in the location's time zone. */
        text_date: string;
        /** Location title. */
        text_location: string;
        /** Service title. */
        text_service: string;
        /** Comma-separated list of full names of staff members conducting the visit. */
        text_staff_member: string;
    }>;
    /** Whether response can be amended by current user. */
    can_amend: boolean;
    /** Date when response was submitted. */
    dtu_response: string;
    /** List of sources where quiz response can be generated. */
    id_source: number;
    /** List of response statuses. */
    id_status: number;
    /** Whether to show numbering of the form elements that supports numbering. */
    show_numbering: boolean;
    /** Date when response added. */
    text_add_date: string;
    /** Date when response amended. */
    text_amend_date: string;
    /** Name of the user who amend the response. */
    text_amend_user: string;
    /** Date when response completed. */
    text_complete_date: string;
    /** Name of the user who complete the response. */
    text_complete_user: string;
    /** Name of the user who owned the response. */
    text_response_by: string;
    /** Title of the filled form. */
    text_title: string | null;
}
export interface WlQuizResponseResponsePostParams {
    /** Checks whether unauthorized user should be permitted to operate with form and make a response. */
    can_anonymous: boolean;
    /** Whether quiz response received by kiosk or direct mode link. */
    is_simple: boolean;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
}
export interface WlQuizResponseResponsePostResponse {
    /** Quiz response key. */
    k_quiz_response: string | null;
}
export interface WlQuizResponseResponsePutParams {
    /** Quiz response key list. */
    a_quiz_response_key: Array<string>;
    /** Business key within which quiz is managed. */
    k_business: string;
    /** Quiz key. */
    k_quiz: string;
    /** Quiz response key. */
    k_quiz_response?: string | null;
    /** User's key for the response association. */
    uid_link?: string | null;
}
export type WlQuizResponseResponsePutResponse = Record<string, unknown>;
export interface WlCatalogCatalogListElementParams {
    /** Information about the discount code: */
    a_discount_code: Array<{
        /** The fixed amount of the discount. */
        f_amount: string;
        /** The percentage amount of the discount. */
        f_percent: number;
        /** Limitation. */
        i_limit: number;
        /** The discount code key. */
        k_discount_code: string;
        /** The discount code value. */
        s_discount_code: string;
    }>;
    /** The list of items grouped by sale categories on the store page. */
    a_sale_id_group: Array<{
        /** List of sale categories on the store page. */
        id_sale: number;
        /** The primary key of item. */
        k_id: string;
        /** The product option or `0` for any other cases. */
        k_shop_product_option: string;
    }>;
    /** The image height in pixels. Specify this value if you need the image to be returned in a specific... */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need the image to be returned in a specific ... */
    i_image_width: number;
    /** The promotion image height in pixels. Specify this value if you need the image to be returned in ... */
    i_promotion_image_height: number;
    /** The promotion image width in pixels. Specify this value if you need the image to be returned in a... */
    i_promotion_image_width: number;
    /** The ID of item category. */
    id_sale: number;
    /** Determines whether the API is called in the backend mode. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
    /** The item key. */
    k_id: string;
    /** The location key. */
    k_location: string;
    /** The UID of a customer (user) for whom the purchase is made. This is used in the backend to calcul... */
    uid_customer: string;
    /** The client prorate date. */
    dl_client_prorate?: string | null;
    /** The product option key. */
    k_shop_product_option?: string | null;
    /** A list of goods to get information for. Every element must contain the next keys: */
    text_item?: string | null;
}
export interface WlCatalogCatalogListElementResponse {
    a_age_restriction: Array<{
        /** The minimum age permitted for the event. This will be `null` if a minimum age isn't set or availa... */
        i_age_from: number | null;
        /** The maximum age permitted for the event. This will be `null` if a maximum age isn't set or availa... */
        i_age_to: number | null;
        /** If `true`, age restrictions are public and available. Otherwise, this will be `false` if they're ... */
        is_age_public: boolean;
    }>;
    a_data: Array<{
        /** Access to services for a purchase option. */
        a_service_access: Array<number>;
        /** This applies only for promotions. */
        is_renew_public: boolean;
        /** This applies only for coupons. Coupon components information. Each element will contain the follo... */
        a_component: {
            /** Program types. */
            id_program: number;
            /** A list of purchase types. */
            id_purchase_item: number;
            /** List of sale categories on the store page. */
            id_sale: number;
            /** The identifier of the item. */
            k_id: string;
            /** The title of the item. */
            text_title: string;
        };
        /** This applies to enrollment/event items. Staff list for class periods. Each element contains: */
        a_staff: {
            /** @deprecated Legacy staff key.  Deprecated, use `uid_staff`. */
            k_staff: string;
            /** Staff user key. */
            uid_staff: string;
            /** Staff last name. */
            text_family: string;
            /** Staff display name. */
            text_staff: string;
        };
        /** Date of expiration of coupon, local date in MySQL format. */
        dl_expire: string;
        /** Current date, local date in MySQL format. */
        dl_now: string;
        /** Date to activate the coupon on, local date in MySQL format. */
        dl_start: string;
        /** Number of periods the coupon is active. Type of a period is specified by `id_duration`. */
        i_duration: number;
        /** Coupon date start rule. */
        id_activation: number;
        /** A class for managing time intervals. */
        id_duration: number;
        /** Class to process string identifiers for duration types */
        id_duration_type: number;
    }>;
    a_image: Array<{
        /** The height in pixels. */
        i_height: number;
        /** The width in pixels. */
        i_width: number;
        /** `true` - the item has no image (in this case, ignore the other keys of this array). */
        is_empty: boolean;
        /** The image URL. */
        s_url: string;
    }>;
    a_image_list: Array<{
        /** The height in pixels. */
        i_height: number;
        /** The width in pixels. */
        i_width: number;
        /** `true` - item has no image (in this case ignore other keys of this array). */
        is_empty: boolean;
        /** The image URL. */
        s_url: string;
    }>;
    a_installment_template: Array<{
        /** The number of payments. */
        i_count: number;
        /** A class for managing time intervals. */
        id_duration: number;
        /** The number of periods specified by `id_period` between individual payments. */
        i_period: number;
        /** The payment currency Key. */
        k_currency: string;
        /** The key of the installment plan template. */
        k_pay_installment_template: string;
        /** The amount of the installment plan. */
        m_amount: string;
        /** The title of the installment plan. */
        s_duration: string;
    }>;
    a_item: Array<{
        /** Contains additional data for the sale item. */
        a_data: {
            /** Whether to display individual prices for each item in the package. */
            is_price_breakdown: boolean;
        };
        /** Contains information about one image connected to a sale item. */
        a_image: {
            a_image: Record<string, unknown>;
            /** Height of the variant image. */
            i_height: number;
            /** Width of the variant image. */
            i_width: number;
            /** `true` if the image file does not exist, `false` - otherwise. */
            is_empty: boolean;
            /** Link to the variant file. */
            s_url: string;
        };
        /** Contains information about taxes. */
        a_tax: {
            /** The calculated tax amount applied by this rule. */
            f_tax: number;
            /** The tax amount after applying all discounts. */
            f_tax_discount: string;
            /** The tax amount after applying the client type discount only. */
            f_tax_discount_login: string;
            /** The tax rate. Its meaning depends on `id_tax`. */
            f_value: number;
            /** Types of taxes. */
            id_tax: number;
            /** The tax key. */
            k_tax: string;
            /** The tax name. */
            s_tax: string;
        };
        /** A list of Purchase Option view types. */
        id_purchase_option_view: number;
        /** The discount code amount. */
        m_discount_code: string;
        /** The discount amount for the client type. */
        m_discount_login: string;
        /** Additional information about the sale item. For example, information about 'introductory offer'. */
        s_comment: string;
        /** The price of the sale item in a human-readable format. */
        s_price: string;
        /** The category title of the sale item. */
        s_sale: string;
        /** The title of the sale item. */
        s_title: string;
    }>;
    a_tax: Array<{
        /** The calculated tax amount applied by this rule. */
        f_tax: number;
        /** The tax amount after applying all discounts. */
        f_tax_discount: string;
        /** The tax amount after applying the client type discount only. */
        f_tax_discount_login: string;
        /** The tax rate. Its meaning depends on `id_tax`. */
        f_value: number;
        /** Types of taxes. */
        id_tax: number;
        /** The tax key. */
        k_tax: string;
        /** The tax name. */
        s_tax: string;
    }>;
    /** The price of the sale item. */
    f_price: string | null;
    /** The price of the sale item, including tax. */
    f_price_include: string | null;
    /** The retail price of the product. This will be empty if this isn't a product. */
    f_price_retail_product: string;
    /** Full price of event. This will be empty if this isn't an event. */
    f_price_total_enrollment: string;
    /** The tax amount. */
    f_tax: string | null;
    /** The sale item description. */
    html_description: string | null;
    /** Special instructions for the sale item. */
    html_special: string | null;
    /** A list of purchase types. */
    id_purchase_item: number;
    /** A list of Purchase Option view types. */
    id_purchase_option_view: number;
    /** List of sale categories on the store page. */
    id_sale: number;
    /** If `true`, the item requires a contract. Otherwise, this will be `false`. */
    is_contract: boolean;
    /** The item key. */
    k_id: string;
    /** The product option key. */
    k_shop_product_option: string | null;
    /** The discount amount for a discount code. */
    m_discount_code: string;
    /** The discount amount for a user's type. */
    m_discount_login: string;
    /** The price on the price tag. */
    m_price: string;
    /** The price, including taxes. */
    m_price_include: string;
    /** The tax amount. */
    m_tax: string;
    /** Additional comment(s). */
    s_comment: string;
    /** The price of the sale item in a human-readable format. */
    s_price: string | null;
    /** The category title of the sale item. */
    s_sale: string | null;
    /** The sale item title. */
    s_title: string | null;
    /** The price on the price tag, with the currency sign. */
    text_price: string;
    /** The title of the item category. */
    text_sale: string;
    /** The item title. */
    text_title: string;
    /** A detailed description. */
    xml_description: string | null;
    /** Special instructions. */
    xml_special: string | null;
}
export interface WlCatalogCatalogListListParams {
    /** Arguments from direct purchase link, which can give additional access to products, which are avai... */
    a_direct_link: Array<{
        /** List of sale categories on the store page. */
        id_sale: number;
        /** `true` if `k_id` value is product key, `false` if `k_id` value is product option key. */
        is_product: boolean;
        /** Key of item. */
        k_id: string;
    }>;
    /** `true` to consider the requirement to have a credit card for booking */
    is_credit_card_check: boolean;
    /** The business key. */
    k_business: string;
    /** The key of a location. If `0`, all products in the business are retrieved. */
    k_location: string;
    /** The key of user. */
    uid: string;
}
export interface WlCatalogCatalogListListResponse {
    a_product: Array<{
        /** The list of location keys where the sale item is available. */
        a_location: Array<string>;
        /** Shop category keys the item belongs to. */
        a_shop_category: Array<string>;
        /** UTC creation date of the item in MySQL format. */
        dtu_create: string;
        /** The item price. */
        f_price: string;
        /** `true` if the item should be hidden from the application, `false` otherwise. */
        hide_application: boolean;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** `true` if the item was accessed via a direct purchase link, `false` otherwise. */
        is_direct: boolean;
        /** `true` if the item is an introductory offer, `false` otherwise. */
        is_introductory: boolean;
        /** The item key. */
        k_id: string;
        /** The primary shop category key for this item entry. */
        k_shop_category: string;
        /** The unique string key identifying the item (product key combined with its DB SID). */
        s_key: string;
        /** The item title. */
        s_title: string;
        /** Direct URL to the catalog view page for this item. */
        url_catalog: string;
    }>;
    a_product_duplicate: Array<{
        /** The list of location keys where the sale item is available. */
        a_location: Array<string>;
        /** Shop category keys the item belongs to. */
        a_shop_category: Array<string>;
        /** UTC creation date of the item in MySQL format. */
        dtu_create: string;
        /** The item price. */
        f_price: string;
        /** `true` if the item should be hidden from the application, `false` otherwise. */
        hide_application: boolean;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** `true` if the item was accessed via a direct purchase link, `false` otherwise. */
        is_direct: boolean;
        /** `true` if the item is an introductory offer, `false` otherwise. */
        is_introductory: boolean;
        /** The item key. */
        k_id: string;
        /** The primary shop category key for this item entry. */
        k_shop_category: string;
        /** The unique string key identifying the item (product key combined with its DB SID). */
        s_key: string;
        /** The item title. */
        s_title: string;
        /** Direct URL to the catalog view page for this item. */
        url_catalog: string;
    }>;
}
export interface WlCatalogCatalogListCatalogProductParams {
    /** Additional data to filter products. */
    a_filter: Array<{
        /** Additional data for cases where the catalog list is in Quick Buy mode. Contains: */
        a_quick_config?: {
            /** The visit key used to filter quick-buy items. */
            k_visit?: string;
        };
        /** The list of special categories for the catalogue. */
        a_sale_id?: Array<number>;
        /** Shop category keys to filter by. */
        a_shop_category?: Array<string>;
        /** The last shown product index for pagination. */
        i_last: number;
        /** List of possible sort order. */
        id_order: number | null;
        /** List of Setup -&gt; Store configuration -&gt; Categories and Layout sort options. */
        id_sort: number;
        /** The business key. */
        k_business: string;
        /** The location key. */
        k_location?: string;
        /** A title fragment to filter products by name. */
        s_title?: string;
        /** The user key. */
        uid?: string;
    }>;
    /** The currently shown element. */
    i_last: number;
    /** The business key to get products for. */
    k_business: string;
    /** The selected shop category. */
    k_shop_category: string;
    /** The cache key used to get products. */
    s_cache_key: string;
}
export interface WlCatalogCatalogListCatalogProductResponse {
    a_category_sort: Array<{
        /** The order of the products by category if [ShopCategorySortSid::CUSTOM](#/components/schemas/Wl.Sh... */
        a_order: Array<number>;
        /** List of possible sort order. */
        id_order: number | null;
        /** List of Setup -&gt; Store configuration -&gt; Categories and Layout sort options. */
        id_sort: number;
    }>;
    a_product: Array<{
        /** HTML-escaped formatted price of the product. */
        html_price: string;
        /** HTML-escaped formatted early-bird price of the product. Present only when an early price applies. */
        html_price_early?: string;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** The product key. */
        k_id: string;
        /** The shop category key. */
        k_shop_category?: string;
        /** The product title. */
        s_title: string;
        /** Direct link to the catalog view page for this product. */
        url_catalog: string;
    }>;
    /** The currently shown element. */
    i_last: number;
    /** Determines whether more products can be loaded. */
    is_load_more: boolean;
    /** The cache key used to get products. */
    s_cache_key: string;
}
export interface WlCatalogPaymentPaymentParams {
    /** The staff commission earned for this purchase. If this isn't empty, it has the next fields: */
    a_commission: Array<{
        /** The staff user ID. */
        uid_staff: string;
        /** <b>Deprecated!</b> */
        k_staff: string;
        /** The payment schema key. */
        k_staff_pay: string;
    }>;
    /** The WellnessLiving mode type (required). One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSi... */
    id_mode: number;
    /** Determines if the payment owner is an anonymous user (optional). */
    is_guest: boolean;
    /** Specify this if operations are performed by the staff member (optional). */
    is_staff: boolean;
    /** The business key (required). */
    k_business: string;
    /** The location key (required). */
    k_location: string;
    /** The user's key (required). */
    uid: string;
}
export interface WlCatalogPaymentPaymentResponse {
    /** The key of login activity. */
    k_login_activity: string | null;
    /** The purchase key created during payment. */
    k_purchase: string;
}
export interface WlCatalogCartCartParams {
    /** The list of items in the cart. */
    a_item: Array<{
        /** The client prorate date. This will be `null` in cases where the client prorate date hasn't passed. */
        dl_client_prorate: string;
        /** The quantity of sale items. */
        i_quantity: number;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** The sale item key. */
        k_id: string;
        /** Key of login prize used on item. */
        k_login_prize?: string | null;
        /** Note: */
        k_shop_product_option?: string;
    }>;
    /** Whether selected login prize should be auto applied to first applicable item. */
    is_auto_apply_prize: boolean;
    /** The location key. */
    k_location: string;
    /** The login prize key. */
    k_login_prize: string;
    /** The user key. */
    uid: string;
    /** The discount code. */
    text_discount_code?: string | null;
}
export interface WlCatalogCartCartResponse {
    /** The list of discounts for each item. */
    a_discount_item: Array<string>;
    a_item: Array<{
        /** The client prorate date. This will be `null` in cases where the client prorate date hasn't passed. */
        dl_client_prorate: string;
        /** The quantity of sale items. */
        i_quantity: number;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** The sale item key. */
        k_id: string;
        /** Key of login prize used on item. */
        k_login_prize?: string | null;
        /** Note: */
        k_shop_product_option?: string;
    }>;
    a_prize_propose: Array<{
        /** Amount of points needed to redeem the prize. */
        i_score: number;
        /** Reward prize key. */
        k_reward_prize: string;
        /** Reward prize discount, e.g. '$10.00 off', '10% off'. */
        text_discount: string;
        /** Reward prize title, e.g. 'on any item', 'on Water bottle', 'on any Appointment Pass or Membership... */
        text_title: string;
    }>;
    a_reward_item: Array<{
        /** The quantity of sale items. */
        i_quantity: number;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** Whether selected login prize discount applied to item. */
        is_login_prize_used: boolean;
        /** The sale item key. */
        k_id: string;
        /** The shop product option. If `null`, the sale item has no options. */
        k_shop_product_option: string;
    }>;
    a_reward_propose: Array<{
        /** Login prize key. */
        k_login_prize: string;
        /** Reward prize discount, e.g. '$10.00 off', '10% off'. */
        text_discount: string;
        /** Applied login prize discount title, e.g. '10% discount'. */
        text_discount_applied: string;
        /** Purpose login prize discount title, e.g. 'Apply 10% off'. */
        text_discount_purpose: string;
        /** Reward prize title, e.g. 'on any item', 'on Water bottle', 'on any Appointment Pass or Membership... */
        text_title: string;
    }>;
    /** Values derived for individual tax rates. */
    a_tax_list: Array<string>;
    /** Amount of client's reward points. */
    i_score: number | null;
    /** The full discount of the cart. */
    m_discount: string | null;
    /** The total discount amount. */
    m_discount_total: string;
    /** The total amount in the catalog cart without tax. */
    m_subtotal: string | null;
    /** The tax amount. */
    m_tax: string | null;
    /** The amount of appointment tips. */
    m_tip_purchase: string | null;
    /** The total amount in the catalog cart. */
    m_total: string | null;
}
export interface WlCatalogCartLimitQuantityParams {
    /** The cart items list with the next structure: */
    a_item: Array<{
        /** The quantity of sale items. */
        i_quantity: number;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** The sale item ID. */
        k_id: string;
        /** The shop product option. `null` if the sale item has no options. */
        k_shop_product_option: string;
    }>;
    /** The business in which the purchase will be made. */
    k_business: string;
    /** The promotion key to add to the cart. */
    k_promotion: string;
    /** The user key. */
    uid: string;
}
export interface WlCatalogCartLimitQuantityResponse {
    /** The quantity if promotions have already been purchased by the current user. */
    i_purchase_already: number | null;
    /** The current quantity of a promotion with the quantity limit in the cart. */
    i_purchase_current: number | null;
    /** The quantity limit of the promotion. */
    i_quantity_limit: number | null;
    /** Determines whether the limit quantity has been exceeded. */
    is_limit_exceeded: boolean | null;
}
export type WlVideoWatchWatchPostParams = Record<string, unknown>;
export interface WlVideoWatchWatchPostResponse {
    /** The video watch key. */
    k_video_watch: string;
}
export type WlVideoWatchWatchPutParams = Record<string, unknown>;
export type WlVideoWatchWatchPutResponse = Record<string, unknown>;
export interface WlVideoCategoryCategoryElementDeleteParams {
    /** The business key. */
    k_business: string;
    /** The category key. */
    k_video_category: string;
}
export type WlVideoCategoryCategoryElementDeleteResponse = Record<string, unknown>;
export interface WlVideoCategoryCategoryElementGetParams {
    /** The business key. */
    k_business: string;
    /** The category key. */
    k_video_category: string;
}
export interface WlVideoCategoryCategoryElementGetResponse {
    /** A list of client and member types who can access videos from the category. */
    a_login_type: Array<string>;
    /** A list of member groups who can access videos from the category. */
    a_member_group: Array<string>;
    /** The category's placement in the business's list of categories. */
    i_order: number;
    /** This will be `true` if the video category is for cloud session recordings. Otherwise, this will b... */
    is_cloud_recording: boolean;
    /** This will be `true` if some client or member types can grant access to the video category. Otherw... */
    is_login_type: boolean;
    /** This will be `true` if some member groups can grant access to the video category. */
    is_member_group: boolean;
    /** The category key. */
    k_video_category: string;
    /** The category name. */
    text_title: string;
}
export interface WlVideoCategoryCategoryElementPutParams {
    /** The business key. */
    k_business: string;
    /** The category key. */
    k_video_category: string;
}
export interface WlVideoCategoryCategoryElementPutResponse {
    /** The category key. */
    k_video_category: string;
}
export interface WlVideoCategoryCategoryListGetParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** If `true`, groups that are missing videos won't be displayed. Otherwise, this will be `false`. */
    is_skip_empty_group: boolean;
    /** The business key. */
    k_business: string;
    /** The filter phrase used to filter categories by name. */
    text_filter: string;
}
export interface WlVideoCategoryCategoryListGetResponse {
    a_video_category: Array<{
        /** Determines whether the video category can be deleted. */
        can_delete: boolean;
        /** The number of videos. */
        i_video: number;
        /** The key of the video category. */
        k_video_category: string;
        /** The string key of the video category. */
        k_video_category_full: string;
        /** The title of the category. */
        text_title: string;
    }>;
}
export interface WlVideoCategoryCategoryListPutParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key. */
    k_business: string;
}
export type WlVideoCategoryCategoryListPutResponse = Record<string, unknown>;
export interface WlVideoLevelLevelDeleteParams {
    /** If `true`, confirmation is required to delete videos. Otherwise, this will be `false`. */
    is_delete_confirm: boolean;
    /** The business key. */
    k_business: string;
    /** The video level key. */
    k_video_level: string;
}
export type WlVideoLevelLevelDeleteResponse = Record<string, unknown>;
export interface WlVideoLevelLevelPostParams {
    /** The business key. */
    k_business: string;
    /** The video level key. */
    k_video_level: string;
}
export interface WlVideoLevelLevelPostResponse {
    /** The video level key. */
    k_video_level: string;
}
export interface WlVideoLevelLevelPutParams {
    /** The business key. */
    k_business: string;
    /** The video level key. */
    k_video_level: string;
}
export type WlVideoLevelLevelPutResponse = Record<string, unknown>;
export interface WlVideoLevelLevelListGetParams {
    /** The business key. */
    k_business: string;
}
export interface WlVideoLevelLevelListGetResponse {
    a_level_list: Array<{
        /** The video level key. */
        k_video_level: string;
        /** The video level title. */
        text_title: string;
    }>;
}
export interface WlVideoLevelLevelListPutParams {
    /** The business key. */
    k_business: string;
}
export type WlVideoLevelLevelListPutResponse = Record<string, unknown>;
export interface WlVideoTagTagDeleteParams {
    /** If `true`, confirmation is required to delete videos. Otherwise, this will be `false`. */
    is_delete_confirm: boolean;
    /** The business key. */
    k_business: string;
    /** The video tag key. */
    k_video_tag: string;
}
export type WlVideoTagTagDeleteResponse = Record<string, unknown>;
export interface WlVideoTagTagPostParams {
    /** The business key. */
    k_business: string;
    /** The video tag key. */
    k_video_tag: string;
}
export interface WlVideoTagTagPostResponse {
    /** The video tag key. */
    k_video_tag: string;
}
export interface WlVideoTagTagPutParams {
    /** The business key. */
    k_business: string;
    /** The video tag key. */
    k_video_tag: string;
}
export type WlVideoTagTagPutResponse = Record<string, unknown>;
export interface WlVideoTagTagListParams {
    /** The business key. */
    k_business: string;
}
export interface WlVideoTagTagListResponse {
    a_tag_list: Array<{
        /** The video tag key. */
        k_video_tag: string;
        /** The video tag title. */
        text_title: string;
    }>;
}
export type WlGoogleLoginGoogleLoginParams = Record<string, unknown>;
export type WlGoogleLoginGoogleLoginResponse = Record<string, unknown>;
export type WlReceptionRosterAttendanceListNotAttendParams = Record<string, unknown>;
export type WlReceptionRosterAttendanceListNotAttendResponse = Record<string, unknown>;
export interface WlReceptionRosterAttendanceListAttendParams {
    /** The UTC datetime for the class in MySQL format. */
    dtu_date: string;
    /** The business key. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The secret for authenticating the attendance kiosk. */
    s_secret: string;
    /** The client's user key. */
    uid: string;
}
export interface WlReceptionRosterAttendanceListAttendResponse {
    /** The visit key. */
    k_visit: string;
    /** The status message displayed on a successful check-in. */
    text_message: string;
}
export type WlReceptionRosterAttendanceListBookParams = Record<string, unknown>;
export interface WlReceptionRosterAttendanceListBookResponse {
    /** `true` if the client is on the waitlist for the class, `false` if they are on the class list. */
    is_wait: boolean;
    /** The status message displayed on a successful booking. */
    text_message: string;
}
export interface WlReceptionRosterAttendanceSecretParams {
    /** Key of the business. */
    k_business: string;
    /** Key of the location. */
    k_location: string;
}
export interface WlReceptionRosterAttendanceSecretResponse {
    /** Secret string. */
    s_secret: string;
}
export interface WlReceptionApplicationReceptionScheduleGetParams {
    /** The business key, where the Self Check-In Web App is started. */
    k_business: string;
    /** The location key, where the Self Check-In Web App is started. */
    k_location: string;
    /** The key of the Self Check-In Web App. */
    s_secret: string;
    /** The key of the user to show the schedule for. */
    uid: string;
}
export interface WlReceptionApplicationReceptionScheduleGetResponse {
    a_class: Array<{
        /** A list of shared resources containing: */
        a_resources_shared: {
            /** The resource key. */
            k_resource: string;
            /** The resource title. */
            s_title: string;
        };
        /** A list of staff members instructing the service, containing: */
        a_staff_all: {
            /** The staff member's full name. */
            s_name_full: string;
        };
        /** The session date. */
        dtu_date: string;
        /** The name of the HTML class that JavaScript uses to display the icon, depending on the service type. */
        html_class_js: string;
        /** The session duration in minutes. */
        i_duration: number;
        /** A list of services. */
        id_service: number;
        /** If `true`, the session can be checked in automatically. Otherwise, this will be `false`. */
        is_auto: boolean;
        /** If `true`, the client should be notified that the visit is booked. Otherwise, this will be `false`. */
        is_book: boolean;
        /** If `true`, the client should be notified that they're on the wait list. Otherwise, this will be `... */
        is_wait: boolean;
        /** The appointment key. If `null`, this isn't an appointment. */
        k_appointment: string | null;
        /** The class period key. If `null`, this isn't a class or event. */
        k_class_period: string | null;
        /** The visit key if the session has been checked in. Otherwise, this will be `null`. */
        k_visit: string | null;
        /** The service name. */
        s_class: string;
        /** The session duration, formatted by the business configuration. */
        s_duration: string;
        /** The time the session takes place. */
        s_time: string;
    }>;
    /** All types of services that appear in the schedule. */
    a_schedule_class_all: Array<number>;
    /** The schedule to be shown in the Self Check-In Web App for the selected user. */
    html_schedule: string;
}
export interface WlReceptionApplicationReceptionSchedulePostParams {
    /** The business key, where the Self Check-In Web App is started. */
    k_business: string;
    /** The location key, where the Self Check-In Web App is started. */
    k_location: string;
    /** The key of the Self Check-In Web App. */
    s_secret: string;
    /** The key of the user to show the schedule for. */
    uid: string;
}
export interface WlReceptionApplicationReceptionSchedulePostResponse {
    a_confirmation_data: Array<{
        /** Data for the promotion payment informational card. Each element contains: */
        a_payment: {
            /** Calendar restrictions. A duration pass will only have elements if a restriction has been met. Thi... */
            a_restrict: Record<string, unknown>;
            /** If `true`, the promotion was renewed in the past. Otherwise, this will be `false`. */
            has_visit_past: boolean;
            /** If `true`, additional info should be excluded. Otherwise, this will be `false`. */
            hide_visit_additional_info: boolean;
            /** The count of upcoming uses of the promotion. */
            i_book: number;
            /** Number of minutes used for upcoming visits. */
            i_book_duration: number;
            /** The promotion's visit count limit. */
            i_limit: number;
            /** The remaining count of visits. */
            i_remain: number;
            /** Number of minutes left in this promotion. */
            i_remain_duration: number;
            /** Count of held uses in the pass. */
            i_use: number;
            /** Number of minutes used for past visits by this promotion. */
            i_use_duration: number;
            /** The count of attended sessions before the last renewal. */
            i_visit_past: number;
            /** Program types. */
            id_program_type: number;
            /** If `true`, the promotion has a usage limit and no remaining visits. Otherwise, this will be `false`. */
            is_last_use: boolean;
            /** If `true`, the promotion is a package. Otherwise, this will be `false`. */
            is_package: boolean;
            /** If `true`, there's more than one calendar restriction on the pass. Otherwise, this will be `false`. */
            is_restrict_multiply: boolean;
            /** The login promotion key. */
            k_login_promotion: string;
            /** The formatted remaining duration on the promotion. */
            s_remain_measure: string;
            /** If `true`, there's a rollover on the pass with calendar restrictions. Otherwise, this will be `fa... */
            show_remain: boolean;
            /** The promotion's program type SID. */
            sid_program_type: string;
        };
        /** The list of assets reserved individually at the time of booking containing: */
        a_resources_not_shared: {
            /** The busy resource index. */
            i_index: number;
            /** The resource name. */
            s_title: string;
        };
        /** The promotion renewal date in local time. */
        dl_renew: string;
        /** The total workouts attended. */
        i_visits: number;
        /** The short format of the promotion expiration date. */
        s_expire: string;
        /** The payment method used to book (free, unpaid, single buy, or promotion name). */
        s_payment: string;
        /** The short format of the promotion renewal date. */
        s_renew: string;
        /** Determines whether to show the client's total workouts attended on the confirmation screen. */
        show_visits: string;
    }>;
    /** The confirmation template to be shown in the Self Check-In Web App for the selected user. */
    html_confirmation: string;
    /** The visit key, which was added or checked in. */
    k_visit: string;
}
export interface WlReceptionApplicationMemberInfoParams {
    /** Date of the session, if we show it on the appointment info window or on the attendance list. */
    dt_date: string;
    /** `true` - if API is being used from backend, `false` - otherwise. */
    is_backend: boolean;
    /** If you need to return additional information set to `true` or `false` if not. */
    is_full: boolean;
    /** The business ID required to access client information. */
    k_business: string;
    /** The location where the Self Check-In Web App is running. */
    k_location: string;
    /** ID of the visit, if we show icons on the attendance list and information that depends on visit is... */
    k_visit: string;
    /** Key of the Check In application. */
    s_secret: string;
    /** A list of icons with additional information about the business member. */
    s_show: string;
    /** ID of a user to retrieve member information for. */
    uid: string;
    /** Primary keys of users whose information must be returned. */
    a_uid?: Array<string> | null;
    /** List of dates for load additional information about users. */
    a_uid_date?: Array<string> | null;
}
export interface WlReceptionApplicationMemberInfoResponse {
    a_info: Array<{
        /** List of icons with additional information about business member. */
        a_icon: {
            /** Color of background. */
            s_color_background: string;
            /** Color of letter. */
            s_color_foreground: string;
            /** Icon letter. */
            s_letter: string;
            /** Symbol from font of shapes. */
            s_shape: string;
            /** Title. */
            s_title: string;
            /** SID of the icon type shape. Constant from [ShapeSid](#/components/schemas/Wl.Login.Type.ShapeSid). */
            sid_shape: string;
        };
        /** Information about users vaccination status. */
        a_vaccination_status: {
            /** Vaccination status sid. Result from [VaccinationStatusSid::idSid()](#/components/schemas/Wl.Login... */
            sid_vaccination_status: string;
            /** Vaccination status. */
            text_vaccination_status: string;
        };
        /** List of client's notes. Every element has keys: */
        a_note: {
            /** HTML text ready to be pasted in browser. */
            html_note: string;
            /** `true` if this note has a flag; `false` otherwise. */
            is_flag: boolean;
        };
        /** Amount the client owns to the business. */
        html_credit: string;
        /** User`s login notes.&lt;/dd&gt; */
        html_note: string;
        /** `true` if for user exists not completed tasks. */
        is_task_active: boolean;
        /** `true` if for user exists urgent tasks. */
        is_task_urgent: boolean;
        /** `true` if client has not agreed with online waiver. */
        is_waiver: boolean;
        /** Currency of business `$k_business`. */
        k_currency: string;
        /** User's account balance. */
        m_credit: string;
        /** Display user balance or not. */
        show_amount: boolean;
        /** User's address. */
        text_address: string;
        /** Users age. Appears only on the day of birth. */
        text_age: string;
        /** User's email. */
        text_mail: string;
        /** User's cell phone. */
        text_phone: string;
        /** Users first name. */
        text_firstname: string;
        /** Link to the page with client's attendance. */
        text_visit_credit: string;
        /** Link to the page with information about client's account balance. */
        url_attendance: string;
        /** Link to user's billing page. */
        url_billing: string;
        /** Link to user's contract page */
        url_contract: string;
        /** Link to user's forms page. */
        url_form: string;
        /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
        url_overview: string;
        /** Link to user's profile. */
        url_profile: string;
        /** Link to user's waiver page. */
        url_waiver: string;
    }> | null;
    a_items: Array<{
        /** Define colors of notice messages. */
        id_color: number;
        /** Define types of icons for notice messages. */
        id_icon: number;
        /** Name of the class for styles. */
        text_class: string;
        /** Plain message for info box. */
        text_message: string;
        /** Message for info box. */
        html_message: string;
    }>;
    a_result_list: Array<{
        /** Additional user's information. */
        a_info: {
            /** List of icons with additional information about business member. */
            a_icon: Record<string, unknown>;
            /** Information about users vaccination status. */
            a_vaccination_status: Record<string, unknown>;
            /** List of client's notes. Every element has keys: */
            a_note: Record<string, unknown>;
            /** Amount the client owns to the business. */
            html_credit: string;
            /** User`s login notes.&lt;/dd&gt; */
            html_note: string;
            /** `true` if for user exists not completed tasks. */
            is_task_active: boolean;
            /** `true` if for user exists urgent tasks. */
            is_task_urgent: boolean;
            /** `true` if client has not agreed with online waiver. */
            is_waiver: boolean;
            /** Currency of business `$k_business`. */
            k_currency: string;
            /** User's account balance. */
            m_credit: string;
            /** Display user balance or not. */
            show_amount: boolean;
            /** User's address. */
            text_address: string;
            /** Users age. Appears only on the day of birth. */
            text_age: string;
            /** User's email. */
            text_mail: string;
            /** User's cell phone. */
            text_phone: string;
            /** Users first name. */
            text_firstname: string;
            /** Link to the page with client's attendance. */
            text_visit_credit: string;
            /** Link to the page with information about client's account balance. */
            url_attendance: string;
            /** Link to user's billing page. */
            url_billing: string;
            /** Link to user's contract page */
            url_contract: string;
            /** Link to user's forms page. */
            url_form: string;
            /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
            url_overview: string;
            /** Link to user's profile. */
            url_profile: string;
            /** Link to user's waiver page. */
            url_waiver: string;
        };
        /** `true` - user is traveller; `false` - not traveller. */
        is_traveller: boolean;
        /** User's member number. */
        s_member: string;
        /** User's first name. */
        text_first_name: string;
        /** User's name. */
        text_fullname: string;
        /** Link to barcode image to scan member number. */
        url_barcode: string;
    }> | null;
    a_visit_last: Array<{
        /** Datetime visit in UTC. */
        dtu_visit: string;
        /** Appointment key. */
        k_appointment: string | null;
        /** Class period key. */
        k_class_period: string | null;
        /** Location key. */
        k_location: string;
    }>;
    a_visit_next: Array<{
        /** Datetime visit in UTC. */
        dtu_visit: string;
        /** Appointment key. */
        k_appointment: string | null;
        /** Class period key. */
        k_class_period: string | null;
        /** Location key. */
        k_location: string;
    }>;
    /** Count attend visits for one client. */
    i_lifetime_visit: number;
    /** If `true`, the client is a traveler. Otherwise, this will be `false`. */
    is_traveller: boolean | null;
    /** The member's lifetime value. */
    m_lifetime_value: string;
    /** The member ID. */
    s_member: string | null;
    /** First user's name. */
    text_first_name: string;
    /** Full user's name. */
    text_fullname: string;
    /** URL to barcode image. */
    url_barcode: string;
    /** URL to email. */
    url_email: string;
}
export interface WlReceptionApplicationReceptionAuthorizeParams {
    /** Key of the business, where Check In application is started. */
    k_business: string;
    /** Key of the location, where Check In application is started. */
    k_location: string;
    /** Key of the Check In application. */
    s_secret: string;
}
export interface WlReceptionApplicationReceptionAuthorizeResponse {
    a_select: Array<{
        /** First name of the user. */
        text_name_first: string;
        /** Last name of the user. */
        text_name_last: string;
        /** Key of the user. */
        uid: string;
        /** Link to the profile image. */
        url_image: string;
    }>;
    /** Key of the authorized user. */
    uid: string;
}
export interface WlReceptionDesignReceptionDesignParams {
    /** Key of the business, where application is run. */
    k_business: string;
    /** Key of the location, where application is run. */
    k_location: string;
}
export interface WlReceptionDesignReceptionDesignResponse {
    a_reception_logo: Array<{
        /** url for full image. */
        url_view: string;
        /** url for thumbnail version of image. */
        url_thumbnail: string;
    }>;
    /** `true` - client profile images will be hidden after the client signs in on the Check-in Kiosk; */
    hide_profile_images: boolean;
    /** Number of minutes for the client check-in window after session has started. */
    i_book_open: number;
    /** Delay in seconds on Check-in Confirmation Screen before redirect to Login screen. */
    i_confirm_delay: number;
    /** Delay in seconds on Schedule Screen before redirect to Login screen. */
    i_schedule_delay: number;
    /** List of sounds used for check ins. */
    id_failed_sound: number;
    /** List of sounds used for check ins. */
    id_success_sound: number;
    /** `true` - allow client to check-in unpaid; */
    is_attend_free: boolean;
    /** If only one service available with the look ahead window the client will: */
    is_auto_check_in: boolean;
    /** `true` - allow clients to check-in to sessions in progress; */
    is_book_open: boolean;
    /** `true` - allow client check-in without booking prior; */
    is_book_optional: boolean;
    /** `true` - enable check-in by client id; */
    is_client_id: boolean;
    /** `true` - enable check-in by email; */
    is_mail: boolean;
    /** `true` - require password while check-in; */
    is_password: boolean;
    /** `true` - enable check-in by phone; */
    is_phone: boolean;
    /** `true` - automatically reconcile unpaid visits upon check in; */
    is_reconcile_auto: boolean;
    /** `true` - show business name on client self check-in page; */
    show_business_name: boolean;
    /** `true` - show confirm screen after client self check-in; */
    show_confirm_screen: boolean;
    /** Name of the business to display on the client self check-in page. */
    text_business_name: string;
}
export interface WlPurchaseReceiptPurchaseReceiptParams {
    /** Whether `url_print` and `url_print_receipt` require authentication. */
    is_url_public: boolean;
    /** The key of the purchase. */
    k_purchase?: string | null;
}
export interface WlPurchaseReceiptPurchaseReceiptResponse {
    a_account_rest: Array<{
        /** The account balance on the user's account. */
        m_amount: string;
        /** The currency of the amount. */
        text_currency: string;
        /** The payment method title. */
        text_method: string;
    }>;
    a_business: Array<{
        /** The business logo. */
        a_logo: {
            /** The image height. */
            i_height: number;
            /** The image width. */
            i_width: number;
            /** This will be `true` if the image is empty. Otherwise, this will be `false`. */
            is_empty: boolean;
            /** The URL of the image. */
            text_url: string;
        };
        /** The business's address. */
        text_address: string;
        /** The business's email address. */
        text_mail: string;
        /** The business's phone number. */
        text_phone: string;
        /** The business name. */
        text_title: string;
    }>;
    a_card: Array<{
        /** The card or account number. */
        text_card_number: string;
        /** The card system name from [ACardSystemSid](#/components/schemas/ACardSystemSid). */
        text_card_system: string;
        /** The payment account title. This will be 'Account number' for ACH, 'Card' for all other cases. */
        text_title: string;
    }>;
    a_customer: Array<{
        /** The customer's address. */
        text_address: string;
        /** The customer's email address. */
        text_mail: string;
        /** The customer's name. */
        text_name: string;
        /** The customer's phone number. */
        text_phone: string;
    }>;
    a_pay_method: Array<{
        /** The amount of the payment. */
        m_amount: string;
        /** The currency of the amount. */
        text_currency: string;
        /** The payment method title. */
        text_pay_method: string;
    }>;
    a_price: Array<{
        /** The discount amount. */
        m_discount: string;
        /** The discount amount for a discount code. */
        m_discount_code: string;
        /** The subtotal amount (the sum of the prices). */
        m_sum: string;
        /** The amount of taxes. */
        m_tax: string;
        /** The amount of tips. */
        m_tip: string;
        /** The total amount. */
        m_total: string;
        /** The currency of the purchase. */
        text_currency: string;
        /** The discount code applied to the purchase. */
        text_discount_code: string;
    }>;
    a_purchase_item: Array<{
        /** The purchase item logo. */
        a_logo: {
            /** The image height. */
            i_height: number;
            /** The image width. */
            i_width: number;
            /** Determines whether the image is empty. */
            is_empty: boolean;
            /** he URL of the image. */
            text_url: string;
        };
        /** List of visit keys. Only available if the purchase item is a class period, */
        a_visit?: Array<string>;
        /** The number of items in the purchase. */
        i_count: number;
        /** Program types. */
        id_program: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** The identifier of the item. */
        k_id: string;
        /** The key of the purchase item. */
        k_purchase_item: string;
        /** Product key. */
        k_shop_product?: string;
        /** The price of the single item. */
        m_price: string;
        /** The price of all items. */
        m_price_total: string;
        /** The type of the item (for example, a pass or membership). */
        text_category: string;
        /** The currency of the price. */
        text_currency: string;
        /** Additional information about the purchase item. */
        text_info: string;
        /** The name of the purchase item. */
        text_title: string;
        /** The description of the purchase item. */
        text_description: string;
        /** The URL to print. Only available if the purchase item is a coupon (gift card). */
        url_print?: string;
    }>;
    /** The local date of the purchase in MySQL format. */
    dtl_purchase: string;
    /** Determines whether the payment contained a signature. */
    has_signature: boolean;
    /** HTML representation of the purchase receipt. */
    html_receipt: string;
    /** The normalized purchase ID. */
    text_purchase_id: string;
    /** The receipt text set in the store settings. */
    text_receipt: string;
    /** The URL for printing on a normal printer. */
    url_print: string;
    /** The URL for printing on a receipt printer. */
    url_print_receipt: string;
}
export type WlPurchaseMailPurchaseMailParams = Record<string, unknown>;
export type WlPurchaseMailPurchaseMailResponse = Record<string, unknown>;
export type WlPurchaseSharePurchaseShareParams = Record<string, unknown>;
export interface WlPurchaseSharePurchaseShareResponse {
    /** The URL to the sharing page. */
    url_share: string;
}
export interface WlInsuranceCatalogProgramListParams {
    /** The key of the franchisee business. */
    k_business: string;
    /** The key of the promotion. */
    k_promotion: string;
}
export interface WlInsuranceCatalogProgramListResponse {
    a_wellness_program: Array<{
        /** The insurance key. */
        k_wellness_program: string;
        /** The Purchase Option price. */
        m_price: string;
        /** The insurance organization name. */
        text_insurance_organization: string;
        /** The insurance partner name. */
        text_partner: string;
        /** The insurance name. */
        text_program: string;
        /** The insurance organization URL. */
        url_insurance_detail: string;
    }>;
}
export interface WlServiceServiceListListParams {
    /** Whether to return franchisee-created appointment types (if business is franchisor). */
    is_franchise: boolean;
    /** Business key, primary key. */
    k_business: string;
}
export interface WlServiceServiceListListResponse {
    a_service: Array<{
        /** Whether service will be hidden in the White Label mobile application. */
        hide_application: boolean;
        /** Appointment type identifier, primary key. */
        k_service: string;
        /** Appointment type category identifier, primary key. */
        k_service_category: string;
        /** Appointment type category name. */
        text_category: string;
        /** Appointment type name. */
        text_service: string;
    }>;
}
export interface WlSmsPhoneBusinessPhoneParams {
    /** Key of the business. */
    k_business: string;
}
export interface WlSmsPhoneBusinessPhoneResponse {
    /** Phone number of the business, which is added as sender for 2-Way SMS feature. */
    text_phone_sender: string | null;
}
export interface WlAiAgentLinkSendMailParams {
    /** Purchase item ID. Required if `text_action` is 'purchase'. */
    id_purchase_item: number;
    /** Service ID. Required if `text_action` is 'booking'. */
    id_service: number;
    /** Business key. Required. */
    k_business: string;
    /** Unique identifier for the link. */
    k_id: string;
    /** Action type. Must be 'purchase' or 'booking'. */
    text_action: string;
    /** User ID. Required. */
    uid: string;
}
export type WlAiAgentLinkSendMailResponse = Record<string, unknown>;
export interface WlStaffPrivilegePrivilegeListParams {
    /** Key of business to get privileges for. */
    k_business: string;
    /** User key to get privileges for. */
    uid: string;
}
export interface WlStaffPrivilegePrivilegeListResponse {
    /** List of privileges, if user is administrator. */
    a_privilege_passport: Array<string>;
    /** List of privileges, if the given user is a staff member in the give business. */
    a_privilege_staff: Array<number>;
    /** Whether this user is a super-administrator because he is a studio staff member. */
    is_admin: boolean;
}
export interface WlStaffStaffListStaffListParams {
    /** A list of privileges to filter staff members by. */
    a_privilege: Array<number>;
    /** Determines that only staff members which the current user has access to should be retrieved. */
    is_check_staff_access: boolean;
    /** Whether inactive and removed staff members are available. */
    is_staff_inactive: boolean;
    /** The key of the business to show information for. */
    k_business: string;
}
export interface WlStaffStaffListStaffListResponse {
    a_staff: Array<{
        /** A list of internal pay rate keys applicable to the staff member. */
        a_pay_rate: Array<string>;
        /** A list of all services, provided by the staff member. */
        a_staff_service: {
            /** Service key. */
            k_service: string;
            /** Staff pay key for this service. */
            k_staff_pay: string;
        };
        /** Staff name. */
        html_name: string;
        /** Order for sorting. */
        i_order: number;
        /** Whether this staff provides appointments service. */
        is_appointment: boolean;
        /** Whether this staff provides class service. */
        is_class: boolean;
        /** Whether this staff provides events service. */
        is_event: boolean;
        /** The staff key. */
        k_staff: string;
        /** The staff member first name. If there are rights, the full first name, if not, then depending on ... */
        s_name: string;
        /** The staff member position in the organization. */
        s_position: string;
        /** The first letter of the staff member surname. If there are rights, the full surname, if not, then... */
        s_surname: string;
        /** The entire surname of the staff member. This will be `null` if private staff member information i... */
        s_surname_full: string | null;
        /** The full name of the staff member. */
        text_name_full: string;
        /** The user key. */
        uid: string;
        /** The staff member user key. */
        uid_staff: string;
        /** Url link to user photo, or empty string, if photo is not loaded. */
        url_image: string;
    }>;
}
export interface WlStaffStaffViewStaffViewParams {
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The key of the business to show information for. */
    k_business: string;
    /** The staff member key. */
    k_staff: string;
    /** The staff member user ID. */
    uid_staff: string;
    /** A list of staff keys. */
    a_staff_list?: Array<string> | null;
    /** A list of staff user IDs. */
    a_uid_staff_list?: Array<string> | null;
}
export interface WlStaffStaffViewStaffViewResponse {
    a_class_day: Array<{
        /** A list of sessions in the day: */
        a_class_period: {
            /** The session start time in MySQL format. */
            dt_time: string;
            /** The session duration in seconds. */
            i_duration: number;
            /** The class name. */
            s_title: string;
            /** Direct book URL of this class. */
            url_book: string;
        };
        /** The day of week. One of [ADateWeekSid](#/components/schemas/ADateWeekSid) constants. */
        i_day: number;
    }>;
    a_result_list: Array<{
        /** Contains a schedule of classes per day. */
        a_class_day: {
            /** A list of sessions in the day: */
            a_class_period: Record<string, unknown>;
            /** The day of week. One of [ADateWeekSid](#/components/schemas/ADateWeekSid) constants. */
            i_day: number;
        };
        /** Staff information. */
        a_staff: {
            /** A list of locations keys where staff works. */
            a_location_work: Array<string>;
            /** Staff's photo. */
            a_photo: Record<string, unknown>;
            /** A description of the staff member. This description can include HTML tags. */
            html_biography: string;
            /** The first name of the staff. */
            html_first: string;
            /** The last name of the staff. */
            html_last: string;
            /** Name of the current staff location. */
            html_location_title: string;
            /** String identifiers for gender. */
            id_gender: number;
            /** `true` in case when staff provides classes/events in home location, `false` otherwise. */
            is_classes_events: boolean;
            /** Whether staff member should be published on business pages. */
            is_publish_business_page: boolean;
            /** `true` in case when for schedule exists for staff, `false` otherwise. */
            is_schedule_enabled: boolean;
            /** Staff's current location. */
            k_location: string;
            /** Staff key.  <b>Deprecated</b>, use `uid_staff` instead. */
            k_staff: string;
            /** A description of the staff member. This description can include HTML tags. */
            s_biography: string;
            /** The staff member surname. If there are rights, the full surname, if not, then depending on the bu... */
            s_family: string;
            /** The staff member first name. If there are rights, the full first name, if not, then depending on ... */
            s_name: string;
            /** The staff member position in the organization. */
            s_position: string;
            /** Name of the staff role. */
            text_business_role: string;
            /** Full name of the staff according to business settings. */
            text_full_name: string;
            /** The user ID. Each staff member in WellnessLiving can also access the system as a client of their ... */
            uid: string;
            /** The staff user ID. */
            uid_staff: string;
            /** URL to the schedule with this staff. */
            url_schedule: string;
        };
    }>;
    a_staff: Array<{
        /** A list of locations keys where staff works. */
        a_location_work: Array<string>;
        /** Staff's photo. */
        a_photo: {
            /** Image data. */
            a_image: Record<string, unknown>;
            /** Height of image. */
            i_height: number;
            /** Width of image. */
            i_width: number;
            /** Class to work with gender string identifiers. */
            id_gender: number;
            /** Whether is empty. */
            is_empty: boolean;
            /** Staff key. */
            k_staff: string;
            /** Path to image. */
            s_url: string;
            /** Staff name. */
            text_name: string;
            /** User key. */
            uid: string;
        };
        /** A description of the staff member. This description can include HTML tags. */
        html_biography: string;
        /** The first name of the staff. */
        html_first: string;
        /** The last name of the staff. */
        html_last: string;
        /** Name of the current staff location. */
        html_location_title: string;
        /** String identifiers for gender. */
        id_gender: number;
        /** `true` in case when staff provides classes/events in home location, `false` otherwise. */
        is_classes_events: boolean;
        /** Whether staff member should be published on business pages. */
        is_publish_business_page: boolean;
        /** `true` in case when for schedule exists for staff, `false` otherwise. */
        is_schedule_enabled: boolean;
        /** Staff's current location. */
        k_location: string;
        /** Staff key.  <b>Deprecated</b>, use `uid_staff` instead. */
        k_staff: string;
        /** A description of the staff member. This description can include HTML tags. */
        s_biography: string;
        /** The staff member surname. If there are rights, the full surname, if not, then depending on the bu... */
        s_family: string;
        /** The staff member first name. If there are rights, the full first name, if not, then depending on ... */
        s_name: string;
        /** The staff member position in the organization. */
        s_position: string;
        /** Name of the staff role. */
        text_business_role: string;
        /** Full name of the staff according to business settings. */
        text_full_name: string;
        /** The user ID. Each staff member in WellnessLiving can also access the system as a client of their ... */
        uid: string;
        /** The staff user ID. */
        uid_staff: string;
        /** URL to the schedule with this staff. */
        url_schedule: string;
    }>;
}
export interface WlStaffStaffViewStaffView74Params {
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The key of the business to show information for. */
    k_business: string;
    /** The staff member user ID. */
    uid_staff: string;
    /** A list of staff user IDs. */
    a_uid_staff_list?: Array<string> | null;
}
export interface WlStaffStaffViewStaffView74Response {
    a_class_day: Array<{
        /** A list of sessions in the day: */
        a_class_period: {
            /** The session start time in MySQL format. */
            dt_time: string;
            /** The session duration in seconds. */
            i_duration: number;
            /** The class name. */
            s_title: string;
            /** Direct book URL of this class. */
            url_book: string;
        };
        /** The day of week. One of [ADateWeekSid](#/components/schemas/ADateWeekSid) constants. */
        i_day: number;
    }>;
    a_result_list: Array<{
        /** Contains a schedule of classes per day. */
        a_class_day: {
            /** A list of sessions in the day: */
            a_class_period: Record<string, unknown>;
            /** The day of week. One of [ADateWeekSid](#/components/schemas/ADateWeekSid) constants. */
            i_day: number;
        };
        /** Staff information. */
        a_staff: {
            /** A list of locations keys where staff works. */
            a_location_work: Array<string>;
            /** Staff's photo. */
            a_photo: Record<string, unknown>;
            /** A description of the staff member. This description can include HTML tags. */
            html_biography: string;
            /** The first name of the staff. */
            html_first: string;
            /** The last name of the staff. */
            html_last: string;
            /** Name of the current staff location. */
            html_location_title: string;
            /** String identifiers for gender. */
            id_gender: number;
            /** `true` in case when staff provides classes/events in home location, `false` otherwise. */
            is_classes_events: boolean;
            /** Whether staff member should be published on business pages. */
            is_publish_business_page: boolean;
            /** `true` in case when for schedule exists for staff, `false` otherwise. */
            is_schedule_enabled: boolean;
            /** Staff's current location. */
            k_location: string;
            /** Staff key.  <b>Deprecated</b>, use `uid_staff` instead. */
            k_staff: string;
            /** A description of the staff member. This description can include HTML tags. */
            s_biography: string;
            /** The staff member surname. If there are rights, the full surname, if not, then depending on the bu... */
            s_family: string;
            /** The staff member first name. If there are rights, the full first name, if not, then depending on ... */
            s_name: string;
            /** The staff member position in the organization. */
            s_position: string;
            /** Name of the staff role. */
            text_business_role: string;
            /** Full name of the staff according to business settings. */
            text_full_name: string;
            /** The user ID. Each staff member in WellnessLiving can also access the system as a client of their ... */
            uid: string;
            /** The staff user ID. */
            uid_staff: string;
            /** URL to the schedule with this staff. */
            url_schedule: string;
        };
    }>;
    a_staff: Array<{
        /** A list of locations keys where staff works. */
        a_location_work: Array<string>;
        /** Staff's photo. */
        a_photo: {
            /** Image data. */
            a_image: Record<string, unknown>;
            /** Height of image. */
            i_height: number;
            /** Width of image. */
            i_width: number;
            /** Class to work with gender string identifiers. */
            id_gender: number;
            /** Whether is empty. */
            is_empty: boolean;
            /** Staff key. */
            k_staff: string;
            /** Path to image. */
            s_url: string;
            /** Staff name. */
            text_name: string;
            /** User key. */
            uid: string;
        };
        /** A description of the staff member. This description can include HTML tags. */
        html_biography: string;
        /** The first name of the staff. */
        html_first: string;
        /** The last name of the staff. */
        html_last: string;
        /** Name of the current staff location. */
        html_location_title: string;
        /** String identifiers for gender. */
        id_gender: number;
        /** `true` in case when staff provides classes/events in home location, `false` otherwise. */
        is_classes_events: boolean;
        /** Whether staff member should be published on business pages. */
        is_publish_business_page: boolean;
        /** `true` in case when for schedule exists for staff, `false` otherwise. */
        is_schedule_enabled: boolean;
        /** Staff's current location. */
        k_location: string;
        /** Staff key.  <b>Deprecated</b>, use `uid_staff` instead. */
        k_staff: string;
        /** A description of the staff member. This description can include HTML tags. */
        s_biography: string;
        /** The staff member surname. If there are rights, the full surname, if not, then depending on the bu... */
        s_family: string;
        /** The staff member first name. If there are rights, the full first name, if not, then depending on ... */
        s_name: string;
        /** The staff member position in the organization. */
        s_position: string;
        /** Name of the staff role. */
        text_business_role: string;
        /** Full name of the staff according to business settings. */
        text_full_name: string;
        /** The user ID. Each staff member in WellnessLiving can also access the system as a client of their ... */
        uid: string;
        /** The staff user ID. */
        uid_staff: string;
        /** URL to the schedule with this staff. */
        url_schedule: string;
    }>;
}
export interface WlRewardActionActionParams {
    /** Key of current business. */
    k_business: string;
    /** Key of reward action category. */
    k_reward_action_category: string;
    /** Key of a user to show information for. */
    uid: string;
}
export interface WlRewardActionActionResponse {
    a_reward_action: Array<{
        /** List of default categories of the rewards. */
        id_reward_action_category: number;
        /** ID of reward action. */
        k_reward_action: string;
        /** ID of reward action category in database. */
        k_reward_action_category: string;
    }>;
}
export type WlRewardActionActionWriteParams = Record<string, unknown>;
export type WlRewardActionActionWriteResponse = Record<string, unknown>;
export interface WlRewardActionElementGetParams {
    /** Business to show information for. */
    k_business: string;
    /** Reward action to show information for. */
    k_reward_action: string;
    /** User to retrieve information about. */
    uid: string;
}
export interface WlRewardActionElementGetResponse {
    /** Points amount that will be added to user account after successful accomplishment of reward action. */
    i_score: number;
    /** Types of reward actions. */
    id_reward_score: number | null;
    /** `true` if user has requested points for action accomplishment, `false` otherwise. */
    is_request: boolean;
    /** User friendly reward action description. */
    s_description: string;
}
export interface WlRewardActionElementPostParams {
    /** Business to show information for. */
    k_business: string;
    /** Reward action to show information for. */
    k_reward_action: string;
    /** User to retrieve information about. */
    uid: string;
}
export type WlRewardActionElementPostResponse = Record<string, unknown>;
export interface WlRewardActionActionTypeParams {
    /** ID of type of reward action. One of [RsRewardScoreSid](#/components/schemas/RsRewardScoreSid) con... */
    id_reward_score: number | null;
    /** Key of a business to show information for. */
    k_business: string;
}
export interface WlRewardActionActionTypeResponse {
    a_reward_action: Array<{
        /** Number of points for this reward action. */
        i_score: number;
    }>;
}
export interface WlRewardScoreScoreGetParams {
    /** List of login activity keys for which points should be added or returned. */
    a_login_activity: Array<string>;
}
export interface WlRewardScoreScoreGetResponse {
    /** Depending on arguments specified during API request might be: */
    i_score: number;
}
export interface WlRewardScoreScorePostParams {
    /** List of login activity keys for which points should be added or returned. */
    a_login_activity: Array<string>;
}
export type WlRewardScoreScorePostResponse = Record<string, unknown>;
export type WlRewardScoreScorePutParams = Record<string, unknown>;
export type WlRewardScoreScorePutResponse = Record<string, unknown>;
export interface WlRewardBoardElementParams {
    /** Business to show information for. */
    k_business: string;
    /** Reward board to show information for. */
    k_reward_board: string;
    /** User to retrieve information about. */
    uid: string;
    /** List of users to get information for. */
    a_uid?: Array<string> | null;
}
export interface WlRewardBoardElementResponse {
    a_reward: Array<{
        /** Score in points. */
        i_score: number;
        /** Reward name. */
        text_name: string;
        /** User key. */
        uid: string;
        /** URL to the user logo image. */
        url_logo: string;
    }> | null;
    /** Score in points. */
    i_score: number;
    /** User name. */
    s_name: string;
    /** User logo. */
    url_logo: string;
}
export interface WlRewardBoardListParams {
    /** ID of a business to show information for. */
    k_business: string;
    /** ID of reward board to show information for. */
    k_reward_board: string;
}
export interface WlRewardBoardListResponse {
    /** A list of UID items. */
    a_uid: Array<number>;
}
export interface WlRewardPrizeElementGetParams {
    /** Business to show information for. */
    k_business: string;
    /** Key of redeemable prize. */
    k_reward_prize: string;
    /** User to retrieve information about. */
    uid: string;
}
export interface WlRewardPrizeElementGetResponse {
    /** Prize price in wellnessliving points. */
    i_score: number;
    /** User friendly prize description. */
    s_description: string;
}
export interface WlRewardPrizeElementPostParams {
    /** Business to show information for. */
    k_business: string;
    /** Key of redeemable prize. */
    k_reward_prize: string;
    /** User to retrieve information about. */
    uid: string;
}
export interface WlRewardPrizeElementPostResponse {
    /** Key of login prize. */
    k_login_prize: string;
}
export interface WlRewardPrizePrizeParams {
    /** Key of current business. */
    k_business: string;
}
export interface WlRewardPrizePrizeResponse {
    /** Array of prize keys. */
    a_prize: Array<string>;
    /** Array of prize scores. */
    a_score: Array<number>;
}
export type WlNotificationSendNotificationSendParams = Record<string, unknown>;
export type WlNotificationSendNotificationSendResponse = Record<string, unknown>;
export interface WlNotificationSendNotificationInfoParams {
    /** ID of the notification. See [RsMailSid](#/components/schemas/RsMailSid). */
    id_notification: number;
    /** Key of the business where information about notification should be retrieved. */
    k_business: string;
}
export interface WlNotificationSendNotificationInfoResponse {
    /** Information about mail. */
    a_info: Array<unknown>;
}
export interface WlNotificationOtpPhoneOtpGetParams {
    /** Phone number to be validated. */
    text_phone: string;
}
export type WlNotificationOtpPhoneOtpGetResponse = Record<string, unknown>;
export interface WlNotificationOtpPhoneOtpPostParams {
    /** Phone number to be validated. */
    text_phone: string;
}
export type WlNotificationOtpPhoneOtpPostResponse = Record<string, unknown>;
export interface WlPassportLoginInfoParams {
    /** Business key. */
    k_business: string;
}
export interface WlPassportLoginInfoResponse {
    /** The current user key. */
    uid: string | null;
    /** A URL that a user can visit to reset their password. */
    url_password_change: string;
    /** The URL to the registration page. */
    url_register: string;
}
export interface WlSkinApplicationSkinDeleteParams {
    /** Whether customization billing is confirmed. */
    is_billing_confirm: boolean;
    /** The business key. */
    k_business: string;
}
export interface WlSkinApplicationSkinDeleteResponse {
    /** Name of the link to default application skin. */
    s_link: string;
}
export interface WlSkinApplicationSkinGetParams {
    /** The business key. */
    k_business: string;
}
export interface WlSkinApplicationSkinGetResponse {
    /** Skin information. */
    a_skin: Array<unknown>;
    /** Determines current business account contains amount for the application customisation. */
    has_pay: boolean;
    /** Name of the link to default application skin. */
    s_link: string;
}
export interface WlSkinWidgetSkinWidgetListParams {
    /** Business key. */
    k_business: string;
}
export interface WlSkinWidgetSkinWidgetListResponse {
    a_widget_skin: Array<{
        /** Skin key. */
        k_skin: string;
        /** Widget name. */
        text_widget_name: string;
    }>;
}
export interface WlMemberInfoInfoParams {
    /** Date of the session, if we show it on the appointment info window or on the attendance list. */
    dt_date: string;
    /** `true` - if API is being used from backend, `false` - otherwise. */
    is_backend: boolean;
    /** If you need to return additional information set to `true` or `false` if not. */
    is_full: boolean;
    /** The business ID required to access client information. */
    k_business: string;
    /** ID of the visit, if we show icons on the attendance list and information that depends on visit is... */
    k_visit: string;
    /** A list of icons with additional information about the business member. */
    s_show: string;
    /** ID of a user to retrieve member information for. */
    uid: string;
    /** Primary keys of users whose information must be returned. */
    a_uid?: Array<string> | null;
    /** List of dates for load additional information about users. */
    a_uid_date?: Array<string> | null;
}
export interface WlMemberInfoInfoResponse {
    a_info: Array<{
        /** List of icons with additional information about business member. */
        a_icon: {
            /** Color of background. */
            s_color_background: string;
            /** Color of letter. */
            s_color_foreground: string;
            /** Icon letter. */
            s_letter: string;
            /** Symbol from font of shapes. */
            s_shape: string;
            /** Title. */
            s_title: string;
            /** SID of the icon type shape. Constant from [ShapeSid](#/components/schemas/Wl.Login.Type.ShapeSid). */
            sid_shape: string;
        };
        /** Information about users vaccination status. */
        a_vaccination_status: {
            /** Vaccination status sid. Result from [VaccinationStatusSid::idSid()](#/components/schemas/Wl.Login... */
            sid_vaccination_status: string;
            /** Vaccination status. */
            text_vaccination_status: string;
        };
        /** List of client's notes. Every element has keys: */
        a_note: {
            /** HTML text ready to be pasted in browser. */
            html_note: string;
            /** `true` if this note has a flag; `false` otherwise. */
            is_flag: boolean;
        };
        /** Amount the client owns to the business. */
        html_credit: string;
        /** User`s login notes.&lt;/dd&gt; */
        html_note: string;
        /** `true` if for user exists not completed tasks. */
        is_task_active: boolean;
        /** `true` if for user exists urgent tasks. */
        is_task_urgent: boolean;
        /** `true` if client has not agreed with online waiver. */
        is_waiver: boolean;
        /** Currency of business `$k_business`. */
        k_currency: string;
        /** User's account balance. */
        m_credit: string;
        /** Display user balance or not. */
        show_amount: boolean;
        /** User's address. */
        text_address: string;
        /** Users age. Appears only on the day of birth. */
        text_age: string;
        /** User's email. */
        text_mail: string;
        /** User's cell phone. */
        text_phone: string;
        /** Users first name. */
        text_firstname: string;
        /** Link to the page with client's attendance. */
        text_visit_credit: string;
        /** Link to the page with information about client's account balance. */
        url_attendance: string;
        /** Link to user's billing page. */
        url_billing: string;
        /** Link to user's contract page */
        url_contract: string;
        /** Link to user's forms page. */
        url_form: string;
        /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
        url_overview: string;
        /** Link to user's profile. */
        url_profile: string;
        /** Link to user's waiver page. */
        url_waiver: string;
    }> | null;
    a_result_list: Array<{
        /** Additional user's information. */
        a_info: {
            /** List of icons with additional information about business member. */
            a_icon: Record<string, unknown>;
            /** Information about users vaccination status. */
            a_vaccination_status: Record<string, unknown>;
            /** List of client's notes. Every element has keys: */
            a_note: Record<string, unknown>;
            /** Amount the client owns to the business. */
            html_credit: string;
            /** User`s login notes.&lt;/dd&gt; */
            html_note: string;
            /** `true` if for user exists not completed tasks. */
            is_task_active: boolean;
            /** `true` if for user exists urgent tasks. */
            is_task_urgent: boolean;
            /** `true` if client has not agreed with online waiver. */
            is_waiver: boolean;
            /** Currency of business `$k_business`. */
            k_currency: string;
            /** User's account balance. */
            m_credit: string;
            /** Display user balance or not. */
            show_amount: boolean;
            /** User's address. */
            text_address: string;
            /** Users age. Appears only on the day of birth. */
            text_age: string;
            /** User's email. */
            text_mail: string;
            /** User's cell phone. */
            text_phone: string;
            /** Users first name. */
            text_firstname: string;
            /** Link to the page with client's attendance. */
            text_visit_credit: string;
            /** Link to the page with information about client's account balance. */
            url_attendance: string;
            /** Link to user's billing page. */
            url_billing: string;
            /** Link to user's contract page */
            url_contract: string;
            /** Link to user's forms page. */
            url_form: string;
            /** Link to the client's overview page. Empty if for user not existing active or urgent tasks. */
            url_overview: string;
            /** Link to user's profile. */
            url_profile: string;
            /** Link to user's waiver page. */
            url_waiver: string;
        };
        /** `true` - user is traveller; `false` - not traveller. */
        is_traveller: boolean;
        /** User's member number. */
        s_member: string;
        /** User's first name. */
        text_first_name: string;
        /** User's name. */
        text_fullname: string;
        /** Link to barcode image to scan member number. */
        url_barcode: string;
    }> | null;
    a_visit_last: Array<{
        /** Datetime visit in UTC. */
        dtu_visit: string;
        /** Appointment key. */
        k_appointment: string | null;
        /** Class period key. */
        k_class_period: string | null;
        /** Location key. */
        k_location: string;
    }>;
    a_visit_next: Array<{
        /** Datetime visit in UTC. */
        dtu_visit: string;
        /** Appointment key. */
        k_appointment: string | null;
        /** Class period key. */
        k_class_period: string | null;
        /** Location key. */
        k_location: string;
    }>;
    /** Count attend visits for one client. */
    i_lifetime_visit: number;
    /** If `true`, the client is a traveler. Otherwise, this will be `false`. */
    is_traveller: boolean | null;
    /** The member's lifetime value. */
    m_lifetime_value: string;
    /** The member ID. */
    s_member: string | null;
    /** First user's name. */
    text_first_name: string;
    /** Full user's name. */
    text_fullname: string;
    /** URL to barcode image. */
    url_barcode: string;
    /** URL to email. */
    url_email: string;
}
export interface WlMemberPurchaseMemberByPromotionParams {
    /** The key of the business for which to get a list of clients. */
    k_business: string;
    /** The comma-separated list of the Purchase Option keys. */
    s_promotion_keys: string;
}
export interface WlMemberPurchaseMemberByPromotionResponse {
    a_clients: Array<{
        /** The list of active Purchase Options. Each element has: */
        a_purchase_options: {
            /** The date in the location time zone when the Purchase Option expires. */
            dl_end: string | null;
            /** The global date and time when the Purchase Option was sold. */
            dtu_purchase: string;
            /** The date in location's time zone when the Purchase Option starts. */
            dl_start: string | null;
            /** The date in location time zone when the Purchase Option will be terminated. */
            dl_terminate: string | null;
            /** The key of the Purchase Option. */
            k_promotion: string;
        };
        /** The key of the client. */
        uid: string;
    }>;
}
export interface WlUserInfoUserInfoParams {
    /** A list of user keys. */
    a_user_list: Array<string>;
    /** The key of the business. */
    k_business: string;
    /** `true` to ignore cache and load information from the database directly. */
    not_cached: boolean;
    /** The key of the user. */
    uid: string;
}
export interface WlUserInfoUserInfoResponse {
    a_custom_field: Array<{
        /** Field key. */
        k_field: string;
        /** Name of the field. Will be `null` for general fields. Their titles are static. */
        text_title: string;
        /** Value of the field. This is the key of the selected item for `select` and `radio` elements. */
        text_value: string;
        /** Title of the selected option for `select` and `radio` elements. Unused for other elements. */
        text_value_title: string;
    }>;
    /** List of member groups that the user belongs to. */
    a_member_group: Array<string>;
    a_photo: Array<{
        /** The height of the photo. */
        i_height: number;
        /** The width of the photo. */
        i_width: number;
        /** The URL of the photo. */
        url_photo: string;
    }>;
    a_result_list: Array<{
        /** List of the custom user fields. Each value is: */
        a_custom_field: {
            /** Field key. */
            k_field: string;
            /** Name of the field. Will be `null` for general fields. Their titles are static. */
            text_title: string;
            /** Value of the field. */
            text_value: string;
        };
        /** List of member groups that the user belongs to. */
        a_member_group: Array<string>;
        /** Information about the user's photo. */
        a_photo: {
            /** The height of the photo. */
            i_height: number;
            /** The width of the photo. */
            i_width: number;
            /** The URL of the photo. */
            url_photo: string;
        };
        /** The date the user was added, given in UTC time. */
        dt_add: string;
        /** The user's birthday. This will be `null` if the birthday isn't set yet. */
        dt_birth: string;
        /** String identifiers for gender. */
        id_gender: number;
        /** This will be `true` if the user has never made purchases or reservations in this business. */
        is_customer_new: boolean;
        /** This will be `true` if the user is a traveler. A traveler is someone whose home location isn't th... */
        is_traveller: boolean;
        /** The key of the business. */
        k_business: string;
        /** The key of the login type. The login type describes the user's client type in this business. */
        k_login_type: string;
        /** The user's first name. */
        s_first_name: string;
        /** The user's last name. */
        s_last_name: string;
        /** The user's email address. */
        s_mail: string;
        /** The user's member ID in the business. Also referred to as the client ID in the client's profile. ... */
        s_member: string;
        /** The user's phone number. */
        s_phone: string;
        /** The user's home phone number. */
        s_phone_home: string;
        /** The user's work phone number. */
        s_phone_work: string;
        /** The key of the user. */
        uid: string;
        /** The URL for the user's photo. */
        url_photo: string;
    }>;
    /** Whether the user can purchase introductory offers. */
    can_introductory: boolean;
    /** The date the user was added, given in UTC time. */
    dt_add: string;
    /** The user's birthday. This will be `null` if the birthday isn't set yet. */
    dt_birth: string;
    /** Whether client's login type has a discount. */
    has_discount: boolean | null;
    /** String identifiers for gender. */
    id_gender: number;
    /** This will be `true` if the user has Google Calendar linked to their account; otherwise, `false`. */
    is_calendar_google: boolean;
    /** This will be `true` if the user has Microsoft Calendar linked to their account; otherwise, `false`. */
    is_calendar_microsoft: boolean;
    /** This will be `true` if the user has never made purchases or reservations in this business. */
    is_customer_new: boolean;
    /** This will be `true` if the user is a traveler. A traveler is someone whose home location isn't th... */
    is_traveller: boolean;
    /** City key. */
    k_city: string | null;
    /** The key of the login type. The login type describes the user's client type in this business. */
    k_login_type: string;
    /** The user's first name. */
    s_first_name: string;
    /** The user's last name. */
    s_last_name: string;
    /** The user's email address. */
    s_mail: string;
    /** The user's member ID in the business. Also referred to as the client ID in the client's profile. ... */
    s_member: string;
    /** The user's phone number. */
    s_phone: string;
    /** The user's home phone number. */
    s_phone_home: string;
    /** The user's work phone number. */
    s_phone_work: string;
    /** Address inside a city. */
    text_address: string | null;
    /** City name. */
    text_city: string | null;
    /** Login type title. */
    text_login_type: string;
    /** Postal code. */
    text_postal: string | null;
    /** The key of the user. */
    uid: string;
    /** The URL for the user's photo. */
    url_photo: string;
}
export interface WlUserInfoUserIntegrationParams {
    /** The key of the business. */
    k_business: string;
    /** Key of the user. */
    uid: string;
}
export interface WlUserInfoUserIntegrationResponse {
    a_integration: Array<{
        /** `true` if user use the Classpass integration, `false` - otherwise. */
        is_classpass: boolean;
        /** `true` if user use the Gympass integration, `false` - otherwise. */
        is_gympass: boolean;
        /** `true` if user use the Reserve With Google integration, `false` - otherwise. */
        is_reserve_with_google: boolean;
    }> | null;
}
export interface WlUserReferrerReferrerParams {
    /** The key of the current business. */
    k_business: string;
    /** The string to be used for searching for a referrer. */
    s_search: string;
}
export interface WlUserReferrerReferrerResponse {
    a_photo: Array<{
        /** The height of the photo. */
        i_height: number;
        /** The width of the photo. */
        i_width: number;
        /** The URL of the photo. */
        url_photo: string;
    }>;
    /** The email address of the referrer. */
    s_email: string;
    /** The business client ID of the referrer. */
    s_member: string;
    /** The first name of the referrer. */
    s_name_first: string;
    /** The last name of the referrer. */
    s_name_last: string;
    /** The phone number of the referrer. */
    s_phone: string;
    /** Composes name of the referrer for public usage. */
    text_name_public: string | null;
    /** The referrer's user key. */
    uid_referrer: string;
}
export interface WlDiscountCodeDiscountCodeParams {
    /** Business key of the discount codes. */
    k_business: string;
}
export interface WlDiscountCodeDiscountCodeResponse {
    a_list: Array<{
        /** Discount code key. */
        k_discount_code: string;
        /** Discount code title. */
        text_discount_code: string;
    }>;
}
export interface WlShopCategoryCategoryGetParams {
    /** The key of the business to get shop categories for. */
    k_business: string;
}
export interface WlShopCategoryCategoryGetResponse {
    a_shop_category: Array<{
        /** Whether category is selected as default. */
        is_default: boolean;
        /** The display order for the category. */
        i_order: number;
        /** The shop category key. */
        k_shop_category: string;
        /** The category description. */
        text_description: string;
        /** The category name. */
        text_title: string;
    }>;
}
export interface WlShopCategoryCategoryPostParams {
    /** The key of the business to get shop categories for. */
    k_business: string;
}
export interface WlShopCategoryCategoryPostResponse {
    /** Key of the created shop category. */
    k_shop_category: string;
}
export interface WlResourceLayoutLayoutParams {
    /** The key of the layout. */
    k_resource_layout: string;
}
export interface WlResourceLayoutLayoutResponse {
    a_resource: Array<{
        /** The asset's appearance information. */
        a_image: {
            /** Image data. */
            a_image: Record<string, unknown>;
            /** Angle of shape rotation. Is set only if `sid_image` equals to `shape`. */
            i_angle?: number;
            /** Height of image. */
            i_height: number;
            /** Width of image. */
            i_width: number;
            /** Whether is empty. */
            is_empty: boolean;
            /** Resource key. */
            k_resource: string;
            /** Image kind. String representation of one of [ImageSid](#/components/schemas/Wl.Resource.Image.Ima... */
            sid_image: string;
            /** Icon name.String representation of one of [ImageIconSid](#/components/schemas/Wl.Resource.Image.I... */
            sid_image_icon: string;
            /** Shape name. String representation of one of [ImageShapeSid](#/components/schemas/Wl.Resource.Imag... */
            sid_image_shape: string;
            /** Path to image. */
            url: string;
        };
        /** The vertical cell number. Not empty if assets are snapped to grid. */
        i_cell_x: number;
        /** The horizontal cell number. Not empty if assets are snapped to grid. */
        i_cell_y: number;
        /** The horizontal offset in pixels. Not empty if assets aren't snapped to grid. */
        i_left: number;
        /** The vertical offset in pixels. Not empty if assets aren't snapped to grid. */
        i_top: number;
        /** Asset number. */
        i_index: number;
        /** The asset key. */
        k_resource: string;
        /** Asset name. */
        s_name: string;
        /** The asset title. */
        s_title: string;
    }>;
    a_shape_custom: Array<{
        /** The height for the shape [LayoutShapeSid::RECTANGLE](#/components/schemas/Wl.Resource.Layout.Shap... */
        f_height: number;
        /** The width for the shape [LayoutShapeSid::RECTANGLE](#/components/schemas/Wl.Resource.Layout.Shape... */
        f_width: number;
        /** The start angle for the shape [LayoutShapeSid::PIE](#/components/schemas/Wl.Resource.Layout.Shape... */
        i_degree_from: number;
        /** The start angle for shape [LayoutShapeSid::PIE](#/components/schemas/Wl.Resource.Layout.Shape.Lay... */
        i_degree_to: number;
        /** The position of the shape by horizontal axis. */
        i_left: number;
        /** The radius for shapes [LayoutShapeSid::PIE](#/components/schemas/Wl.Resource.Layout.Shape.LayoutS... */
        i_radius: number;
        /** The position of the shape by vertical axis. */
        i_top: number;
        /** Types of the shapes. */
        id_resource_layout_shape: number;
        /** The shape key. */
        k_resource_layout_shape: string;
        /** The shape's background color. */
        s_color_background: string;
        /** The shape's foreground color. */
        s_color_foreground: string;
        /** The shape's title. */
        s_text: string;
    }>;
    a_shape_icon: Array<{
        /** The cell number, positioned by the horizontal axis. Empty if grid is turned off. */
        i_cell_x: number;
        /** The cell number, positioned by the vertical axis. Empty if grid is turned off. */
        i_cell_y: number;
        /** The horizontal position in pixels. Empty if grid is turned on. */
        i_left: number;
        /** The vertical position in pixels. Empty if grid is turned on. */
        i_top: number;
        /** Predefined icons for assets. */
        id_shape_icon: number;
    }>;
    /** The grid size. */
    i_grid: number;
    /** This will be `true` if snap to grid is enabled. Otherwise, this will be `false`. */
    is_grid: boolean;
    /** The key of the asset category. */
    k_resource_type: string;
    /** The color for active assets. Hex encoding with prefix `#`. */
    s_color_active: string;
    /** This will be `true` if asset names are displayed. Otherwise, this will be `false`. */
    show_name: boolean;
    /** This will be `true` if asset numbers are displayed. Otherwise, this will be `false`. */
    show_number: boolean;
}
export interface WlResourceResourceListListParams {
    /** Type of the resource. */
    id_category: number;
    /** Whether to return franchisee-created resources (if business is franchisor). */
    is_franchise: boolean;
    /** Business key, primary key in RsBusinessSql. */
    k_business: string;
}
export interface WlResourceResourceListListResponse {
    a_resource: Array<{
        /** Whether resource will be hidden in the White Label mobile application. */
        hide_application: boolean;
        /** Whether resource is active. */
        is_active: boolean;
        /** Whether resource is bookable. */
        is_book: boolean;
        /** Key of the city for off-site locations.}. */
        k_city: string;
        /** Resource key. */
        k_resource: string;
        /** Asset layout key. */
        k_resource_layout: string;
        /** Resource type key. */
        k_resource_type: string;
        /** Street address of the resource for off-site locations. */
        text_address: string;
        /** Additional directions or access tips for reaching an off-site location. */
        text_guide: string;
        /** Postal code of the resource for off-site locations. */
        text_postal: string;
        /** Resource name. */
        text_title: string;
    }>;
}
export interface WlFamilyRelationRelationDeleteParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
    /** The key of the related user who `uid` must be removed. */
    uid_delete: string;
}
export interface WlFamilyRelationRelationDeleteResponse {
    a_relation: Array<{
        /** Relation type between two relatives. */
        id_family_relation: number;
        /** Relation type between two relatives. */
        id_family_relation_reverse: number;
        /** The name of the relation. */
        text_name: string;
        /** The first name of the relation. */
        text_name_first: string;
        /** The key of the related user. */
        uid: string;
    }>;
}
export interface WlFamilyRelationRelationGetParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
}
export interface WlFamilyRelationRelationGetResponse {
    a_relation: Array<{
        /** Relation type between two relatives. */
        id_family_relation: number;
        /** Relation type between two relatives. */
        id_family_relation_reverse: number;
        /** The name of the relation. */
        text_name: string;
        /** The first name of the relation. */
        text_name_first: string;
        /** The key of the related user. */
        uid: string;
    }>;
}
export interface WlFamilyRelationRelationPostParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
}
export interface WlFamilyRelationRelationPostResponse {
    a_relation: Array<{
        /** Relation type between two relatives. */
        id_family_relation: number;
        /** Relation type between two relatives. */
        id_family_relation_reverse: number;
        /** The name of the relation. */
        text_name: string;
        /** The first name of the relation. */
        text_name_first: string;
        /** The key of the related user. */
        uid: string;
    }>;
}
export interface WlFamilyRelationFamilyRelationParams {
    /** The business key. */
    k_business: string;
}
export interface WlFamilyRelationFamilyRelationResponse {
    /** The relationship types in the business. */
    a_business_relationships: Array<number>;
}
export interface WlFamilyRelationRelation72DeleteParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
    /** The key of the related user who [RelationApi](/Wl/Family/Relation/Relation.json) must be removed. */
    uid_delete: string;
}
export interface WlFamilyRelationRelation72DeleteResponse {
    a_relation: Array<{
        /** Relation type between two relatives. */
        id_family_relation: number;
        /** Relation type between two relatives. */
        id_family_relation_reverse: number;
        /** The name of the relation. */
        text_name: string;
        /** The first name of the relation. */
        text_name_first: string;
        /** The key of the related user. */
        uid: string;
    }>;
}
export interface WlFamilyRelationRelation72GetParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
}
export interface WlFamilyRelationRelation72GetResponse {
    a_relation: Array<{
        /** Relation type between two relatives. */
        id_family_relation: number;
        /** Relation type between two relatives. */
        id_family_relation_reverse: number;
        /** The name of the relation. */
        text_name: string;
        /** The first name of the relation. */
        text_name_first: string;
        /** The key of the related user. */
        uid: string;
    }>;
}
export interface WlFamilyRelationRelation72PostParams {
    /** ID of the user behavior flow. */
    id_flow: number;
    /** The business key. */
    k_business: string;
    /** The key of the user whose relationships are being assessed. */
    uid: string;
}
export interface WlFamilyRelationRelation72PostResponse {
    a_relation: Array<{
        /** Relation type between two relatives. */
        id_family_relation: number;
        /** Relation type between two relatives. */
        id_family_relation_reverse: number;
        /** The name of the relation. */
        text_name: string;
        /** The first name of the relation. */
        text_name_first: string;
        /** The key of the related user. */
        uid: string;
    }>;
}
export interface WlIntegrationAutymateAutymateActivateParams {
    /** The mode of the request. */
    id_mode: number;
    /** The new status of the enrollment. If `0`, the current status is returned. */
    id_status: number;
    /** The key of the business. */
    k_business: string;
    /** The randomly generated 32 character string used to authenticate Autymate requests for the business. */
    s_guid: string;
    /** The user key. */
    uid: string;
}
export interface WlIntegrationAutymateAutymateActivateResponse {
    /** List of statuses of an Autymate enrollment notification. */
    id_status: number;
}
export interface WlIntegrationAutymateReportParams {
    /** List of payment methods to filter out in the report. */
    a_pay_method_remove: Array<number>;
    /** The date in local time to retrieve transactions for. */
    dl_date: string;
    /** The page of the report, starting from 0. */
    i_page: number;
    /** Determines whether this report should be refreshed. */
    is_refresh: boolean;
    /** The key of the business for which the report must be generated. */
    k_business: string;
    /** The randomly generated 32 character string used to authenticate requests. */
    s_guid: string;
}
export interface WlIntegrationAutymateReportResponse {
    /** The list of fields in this report. */
    a_field: Array<string>;
    /** The report data. */
    a_row: Array<Array<string>>;
    /** The warning list of the report, if applicable. */
    a_warning: Array<string>;
    /** The date and time when this report has completed generation. */
    dtu_complete: string | null;
    /** The date and time when this report was put in the generation queue. */
    dtu_queue: string | null;
    /** The date and time when generation of this report was started. */
    dtu_start: string | null;
    /** Lists statuses of reports from point of view of its generation. */
    id_report_status: number;
    /** If `true` then there are more report rows to get. Otherwise, `false` if all rows have been sent. */
    is_more: boolean;
    /** Determines whether this report is complete. If this report is accessed on the current day, or is ... */
    is_report_complete: boolean;
}
export type WlIntegrationSamlSamlUserDeactivationParams = Record<string, unknown>;
export interface WlIntegrationSamlSamlUserDeactivationResponse {
    /** The key of the SAML identifier. */
    a_result: Array<boolean>;
}
export interface WlIntegrationCurvesCurvesFranchiseLocationParams {
    /** Determines which locations should be returned. */
    id_business_franchise_location: number;
    /** Determines whether to include churned/removed locations. */
    is_include_churn: boolean;
    /** Determines whether to include locations marked to not be displayed on franchisor website. */
    is_include_non_api: boolean;
    /** The business key. */
    k_business: string;
}
export interface WlIntegrationCurvesCurvesFranchiseLocationResponse {
    a_city_list: Array<{
        /** City key. */
        k_city: string;
        /** Country key. */
        k_country: string;
        /** State key. */
        k_state: string;
        /** City title. */
        text_title: string;
    }>;
    a_country_list: Array<{
        /** Country key. */
        k_country: string;
        /** Country title. */
        text_title: string;
    }>;
    a_location_list: Array<{
        /** A list of currencies. */
        id_currency: number;
        /** City key. */
        k_city: string;
        /** Country key. */
        k_country: string;
        /** Location key. */
        k_location: string;
        /** Franchise region key. */
        k_region: string;
        /** State key. */
        k_state: string;
        /** Location title. */
        text_title: string;
    }>;
    a_region_list: Array<{
        /** Franchise region key. */
        k_region: string;
        /** Franchise region title. */
        text_title: string;
    }>;
    a_state_list: Array<{
        /** Country key. */
        k_country: string;
        /** State key. */
        k_state: string;
        /** State title. */
        text_title: string;
    }>;
}
export interface WlIntegrationDragonFlyAccessParams {
    /** The location key. */
    k_location: string;
    /** The member ID. */
    s_member: string;
    /** The user key. */
    uid: string;
}
export interface WlIntegrationDragonFlyAccessResponse {
    /** Whether the specified user can access the location. */
    can_access: boolean;
}
export interface WlCouponCouponListListParams {
    /** Whether to return franchisee-created coupons (if business is franchisor). */
    is_franchise: boolean;
    /** `true` to get only gift cards available for current user; `false` to get all gift cards. */
    is_frontend: boolean;
    /** A flag to include disabled items in the query result */
    is_inactive_include: boolean;
    /** The business key to retrieve a list of all the gift cards in a business. */
    k_business: string;
}
export interface WlCouponCouponListListResponse {
    a_coupon: Array<{
        /** List of possible types of Gift Cards. */
        id_type: number;
        /** The gift card key. */
        k_coupon: string;
        /** The title of the gift card. */
        text_title: string;
    }>;
}
export interface WlMicrosoftLoginMicrosoftLoginDeleteParams {
    /** The client for whom the Microsoft account will be unlinked. */
    uid: string;
}
export type WlMicrosoftLoginMicrosoftLoginDeleteResponse = Record<string, unknown>;
export interface WlMicrosoftLoginMicrosoftLoginGetParams {
    /** The client for whom the Microsoft account will be unlinked. */
    uid: string;
    /** The Redirect URI for external applications. */
    url_redirect: string;
}
export interface WlMicrosoftLoginMicrosoftLoginGetResponse {
    /** If `true`, the user has a bound Microsoft account. Otherwise, this will be `false`. */
    is_exists: boolean;
    /** The Microsoft OAuth 2.0 authorization link. */
    url_login: string;
}
export interface WlMicrosoftLoginMicrosoftLoginPostParams {
    /** If authorization is performed in a third-party application, set this flag in case of authorizatio... */
    is_external: boolean;
    /** The Redirect URI for external applications. */
    url_redirect: string;
}
export type WlMicrosoftLoginMicrosoftLoginPostResponse = Record<string, unknown>;
export type WlSearchTagSearchTagListParams = Record<string, unknown>;
export interface WlSearchTagSearchTagListResponse {
    a_search_tag: Array<{
        /** A list of client booking flow types. */
        id_business_category: number;
        /** The key of the tag. The primary key in the table of tags. */
        k_search_tag: string;
        /** The name of the tag. */
        text_title: string;
    }>;
}
export interface WlReviewReviewListReviewElementDeleteParams {
    /** The review key. */
    k_review: string;
}
export type WlReviewReviewListReviewElementDeleteResponse = Record<string, unknown>;
export interface WlReviewReviewListReviewElementGetParams {
    /** The key of the business to which the review belongs. */
    k_business: string;
    /** The review key. */
    k_review: string;
    /** The user key. */
    uid: string;
}
export interface WlReviewReviewListReviewElementGetResponse {
    a_review: Array<{
        /** Date when review was added by user. */
        dt_add: string;
        /** Review rate. */
        f_rate: number;
        /** Review status identifiers. */
        id_review_status: number | null;
        /** If `true`, the review is featured. Otherwise, this will be `false`. */
        is_featured: boolean;
        /** `true` if review is verified, `false` otherwise. */
        is_verify: boolean;
        /** Client's first name who added review. */
        text_firstname: string;
        /** Client's last name who added review. */
        text_lastname: string;
        /** Staff reply. Can be empty. */
        text_reply: string;
        /** Review text. */
        text_review: string;
        /** Business name */
        text_business_name: string;
        /** Word "response". */
        text_response: string;
        /** User key. */
        uid: string;
        /** User logo. */
        url_logo: string;
    }>;
}
export interface WlReviewReviewListReviewListParams {
    /** Business key. If not specified, location key needs to be specified. */
    k_business: string;
    /** The key of the location to show reviews for. If not specified, business key should be specified. */
    k_location: string;
    /** The user's key. WellnessLiving allows staff to check low-rated reviews before posting them. Staff... */
    uid: string;
    /** If not specified, this request will return all review keys. If specified, this request will retur... */
    i_page?: number | null;
    /** The order in which the review should be arranged. One of the [ReviewOrderSid](#/components/schema... */
    id_order?: number | null;
}
export interface WlReviewReviewListReviewListResponse {
    a_review: Array<{
        /** `true` if can reply to review, `false` otherwise. */
        can_reply: boolean;
        /** Date when staff reply to review. Can be empty string if no one replied. */
        dl_reply: string;
        /** Date when review added. */
        dt_add: string;
        /** Rate of review. */
        f_rate: number;
        /** `true` if review is featured, `false` otherwise. */
        is_featured: boolean;
        /** `true` if review is verify, `false` otherwise. */
        is_verify: boolean;
        /** The location key for where the review was left/assigned. */
        k_location: string;
        /** Review key. */
        k_review: string;
        /** First name of user who wrote review. */
        s_firstname: string;
        /** Last name of user who wrote review. */
        s_lastname: string;
        /** Reply for review. */
        s_reply: string;
        /** Review text. */
        s_text: string;
        /** City from the profile of the user, who left review. */
        text_city: string;
        /** First name of staff who replied of review. Can be empty string if no one replied. */
        text_reply_first: string;
        /** Last name of staff who replied of review. Can be empty string if no one replied. */
        text_reply_last: string;
        /** Staff role who replied of review. Can be empty string if no one replied. */
        text_role: string;
        /** User key who wrote review. */
        uid: string;
        /** Link to the image of the user who wrote review. */
        url_image: string;
        /** Link to the image of the user who replied of review. Can be empty string if no one replied. */
        url_reply_image: string;
    }>;
}
export interface WlGymVisitVisitAddParams {
    /** The business key. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The key of the user making the gym visit. */
    uid: string;
}
export interface WlGymVisitVisitAddResponse {
    /** Url to the business catalog with items that can be used to pay for the visit. */
    url_catalog: string;
}
export type WlSocialShareSocialShareParams = Record<string, unknown>;
export interface WlSocialShareSocialShareResponse {
    /** Secret key for access shared object. */
    s_secret: string;
}
export type WlFacebookLoginFacebookLoginParams = Record<string, unknown>;
export type WlFacebookLoginFacebookLoginResponse = Record<string, unknown>;
export interface ThothWlPayBankCardAddAddDeleteParams {
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** Pay bank key to delete. */
    k_pay_bank: string;
}
export type ThothWlPayBankCardAddAddDeleteResponse = Record<string, unknown>;
export interface ThothWlPayBankCardAddAddGetParams {
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The payment owner ID. This is different from the user ID. It can be found with */
    k_pay_owner: string;
}
export interface ThothWlPayBankCardAddAddGetResponse {
    /** The HTML form containing the fields required to add a card. */
    html_widget: string;
}
export interface ThothWlPayBankCardAddAddPostParams {
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The payment owner ID. This is different from the user ID. It can be found with */
    k_pay_owner: string;
}
export type ThothWlPayBankCardAddAddPostResponse = Record<string, unknown>;
export type CoreRequestApiApplicationOriginDeleteParams = Record<string, unknown>;
export type CoreRequestApiApplicationOriginDeleteResponse = Record<string, unknown>;
export type CoreRequestApiApplicationOriginGetParams = Record<string, unknown>;
export interface CoreRequestApiApplicationOriginGetResponse {
    /** A list of origins. */
    a_list: Array<string> | null;
}
export type CoreRequestApiApplicationOriginPutParams = Record<string, unknown>;
export type CoreRequestApiApplicationOriginPutResponse = Record<string, unknown>;
export type CorePassportLoginEnterEnterParams = Record<string, unknown>;
export interface CorePassportLoginEnterEnterResponse {
    /** An optional URL for redirection after the user has signed in to the web application. */
    url_redirect: string;
}
export interface CorePassportLoginEnterNotepadParams {
    /** The session type to store the notepad in. */
    s_type: string;
    /** User login. */
    s_login?: string | null;
}
export interface CorePassportLoginEnterNotepadResponse {
    /** List of available data center regions. */
    id_region: number;
    /** The hash type. */
    s_hash: string;
    /** The notepad value, which is used to hash the user's password. */
    s_notepad: string;
}
export type CorePassportLoginRegisterRegisterParams = Record<string, unknown>;
export interface CorePassportLoginRegisterRegisterResponse {
    /** JSON configuration for confirmation email. */
    json_confirm_config: string;
    /** The URL to the confirmation page. This link is used in a confirmation email. */
    url_confirm: string;
}
export interface CorePassportLoginRegisterRegisterConfirmParams {
    /** The unique registration code. */
    text_code: string;
    /** The user's login. */
    text_login: string;
    /** The user's email. */
    text_mail: string;
}
export interface CorePassportLoginRegisterRegisterConfirmResponse {
    /** The key of the new registered user. */
    uid: string;
}
export type CorePassportLoginSignOutSignOutParams = Record<string, unknown>;
export type CorePassportLoginSignOutSignOutResponse = Record<string, unknown>;
export type CorePassportEnterJwtJwtTokenParams = Record<string, unknown>;
export interface CorePassportEnterJwtJwtTokenResponse {
    /** Jwt token that allows to authenticate user. */
    s_token: string;
}
export interface CorePassportUserEmailEmailExistParams {
    /** The email address. */
    text_email: string;
}
export interface CorePassportUserEmailEmailExistResponse {
    /** Determines whether the email address exists. */
    is_exist: boolean;
}
export interface WlScheduleScheduleListStaffAppScheduleListParams {
    /** Configuration options for schedule. */
    a_config: Array<{
        /** If needed to show recurring canceled appointments on schedule. */
        is_appointment_cancel_recurring: boolean;
        /** If needed to show single canceled appointments on schedule. */
        is_appointment_cancel_single: boolean;
        /** If needed to show canceled classes on schedule. */
        is_class_cancel: boolean;
    }>;
    /** The end date of the range from which the list of schedule sessions should be retrieved. */
    dl_end: string;
    /** The start date of the range from which the list of scheduled sessions should be retrieved. */
    dl_start: string;
    /** The date of the sessions in Coordinated Universal Time (UTC) and MySQL format. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export interface WlScheduleScheduleListStaffAppScheduleListResponse {
    a_schedule: Array<{
        /** List of notes. */
        a_note: Array<string>;
        /** List of quizzes. */
        a_quiz: {
            /** List of response statuses. */
            id_status: number;
            /** Whether it's hidden. `true` quiz is hidden, `false` otherwise. */
            is_hide: boolean;
            /** Whether it's required. `true` quiz is required, `false` otherwise. */
            is_require: boolean;
            /** Quiz key, */
            k_quiz: string;
            /** Quiz login key, */
            k_quiz_login: string;
            /** Quiz response key, */
            k_quiz_response: string;
            /** Quiz title. */
            text_title: string;
        } | null;
        /** Additional visit information about this appointment. Empty array if it's a class. */
        a_appointment_visit_info: {
            /** Possible states of the visit: book, attended, cancelled, etc. */
            id_visit: number;
            /** `true` means that appointment was requested and confirmed by the staff. */
            is_confirmed: boolean;
            /** `true` means that appointment was requested and denied by the staff. */
            is_deny: boolean;
            /** `true` means that the client will receive a notification, if appointment will be confirmed by the... */
            is_notify_request_accept: boolean;
            /** `true` means that the client will receive a notification, if appointment will be denied by the st... */
            is_notify_request_deny: boolean;
            /** `true` means that appointment was requested, but not confirmed by the staff. */
            is_request: boolean;
        };
        /** A list of assets involved in the session. */
        a_resource: Array<string>;
        /** List of removed assets involved in the session. */
        a_resource_removed: Array<string>;
        /** A list of staff members who will conduct the session. */
        a_staff: Array<string>;
        /** A list of staff members who will conduct the session. */
        a_uid_staff: Array<string>;
        /** Information about staff members who conduct this session. */
        a_staff_info: {
            /** Staff full name. */
            text_staff: string;
            /** `true` means staff is substituted, `false` simple staff member. */
            is_staff_change: boolean;
            /** Staff key. */
            k_staff: string;
            /** Staff user key. */
            uid_staff: string;
        };
        /** For appointments, this is a list of the names of users who are scheduled to attend the session. */
        a_user: Array<string>;
        /** List of virtual locations. Each value is . */
        a_virtual_location: Array<string>;
        /** The date/time of the session in UTC. */
        dt_date: string;
        /** The date/time when the session was canceled in UTC. Only used for appointments. */
        dt_date_cancel: string;
        /** The date/time of the session in local time. */
        dt_date_local: string;
        /** `true` if has uncompleted quizzes, `false` otherwise. */
        has_quiz_uncompleted: boolean;
        /** The number of addons for the current appointment. */
        i_addon: number;
        /** The number of clients booked into the session. */
        i_book: number;
        /** The maximum capacity of the session. */
        i_capacity: number;
        /** The duration of the session in minutes. */
        i_duration: number;
        /** The padding time after the session in minutes. Only used for appointments. */
        i_padding_after: number;
        /** The padding time before the session in minutes. Only used for appointments. */
        i_padding_before: number;
        /** The start time in minutes after midnight. */
        i_start: number;
        /** Count clients on waitlist. */
        i_wait: number;
        /** Appointment display option. */
        id_option: number;
        /** Identifiers for services types. */
        id_service: number;
        /** For appointments: `true` if user has checked-in; `false` otherwise. */
        is_arrive: boolean;
        /** For appointments: `true` if appointment is paid; `false` otherwise. */
        is_pay: boolean;
        /** For appointments: `true` if appointment is recurring; `false` otherwise. */
        is_repeat: boolean;
        /** The appointment key. */
        k_appointment: string;
        /** Confirmation date for appointment in MySQL format. Will be zero date + time in case appointment */
        dt_confirm: string;
        /** The class key. */
        k_class: string;
        /** The class period key. */
        k_class_period: string;
        /** The location key for where the session takes place. */
        k_location: string;
        /** This is the key of the appointment type, while `k_appointment` is the specific instance. */
        k_service: string;
        /** The name of the session. */
        s_title: string;
        /** `true` when need show quiz icon, `false` otherwise. */
        show_quiz_icon: boolean;
        /** The earliest time the business where the session takes place, opens. In Unix format. */
        t_business_start: number;
        /** The latest time the business where the session takes place, closes. In Unix format. */
        t_business_end: number;
        /** Alert message. */
        text_alert: string;
        /** The background color in hex representation as used on WellnessLiving. */
        text_color_background: string;
        /** The border color in hex representation as used on WellnessLiving. */
        text_color_border: string;
        /** Title for quiz icon. */
        text_quiz_title: string;
        /** `true` - If the business has at least one virtual service, `false` - otherwise. */
        is_virtual_service: boolean;
        /** URL to image. Empty if image not exist. */
        url_image: string;
    }>;
    /** `true` - If the business has at least one virtual service, `false` - otherwise. */
    is_virtual_service: boolean;
}
export interface WlScheduleScheduleListStaffAppScheduleListByTokenParams {
    /** Configuration options for schedule. */
    a_config: Array<{
        /** If needed to show recurring canceled appointments on schedule. */
        is_appointment_cancel_recurring: boolean;
        /** If needed to show single canceled appointments on schedule. */
        is_appointment_cancel_single: boolean;
        /** If needed to show canceled classes on schedule. */
        is_class_cancel: boolean;
    }>;
    /** The end date of the range from which the list of schedule sessions should be retrieved. */
    dl_end: string;
    /** The start date of the range from which the list of scheduled sessions should be retrieved. */
    dl_start: string;
    /** The date of the sessions in Coordinated Universal Time (UTC) and MySQL format. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** The security token. */
    text_token: string;
    /** User key. */
    uid: string;
}
export interface WlScheduleScheduleListStaffAppScheduleListByTokenResponse {
    a_schedule: Array<{
        /** List of notes. */
        a_note: Array<string>;
        /** Additional visit information about this appointment. Empty array if it's a class. */
        a_appointment_visit_info: {
            /** Possible states of the visit: book, attended, cancelled, etc. */
            id_visit: number;
            /** `true` means that appointment was requested and confirmed by the staff. */
            is_confirmed: boolean;
            /** `true` means that appointment was requested and denied by the staff. */
            is_deny: boolean;
            /** `true` means that the client will receive a notification, if appointment will be confirmed by the... */
            is_notify_request_accept: boolean;
            /** `true` means that the client will receive a notification, if appointment will be denied by the st... */
            is_notify_request_deny: boolean;
            /** `true` means that appointment was requested, but not confirmed by the staff. */
            is_request: boolean;
        };
        /** A list of assets involved in the session. */
        a_resource: Array<string>;
        /** A list of staff members who will conduct the session. */
        a_staff: Array<string>;
        /** Information about staff members who conduct this session. The keys are . */
        a_staff_info: {
            /** Staff full name. */
            text_staff: string;
            /** `true` means staff is substituted, `false` simple staff member. */
            is_staff_change: boolean;
            /** Staff key. */
            k_staff: string;
        };
        /** For appointments, this is a list of the names of users who are scheduled to attend the session. */
        a_user: Array<string>;
        /** List of virtual locations. Each value is . */
        a_virtual_location: Array<string>;
        /** The date/time of the session in UTC. */
        dt_date: string;
        /** The date/time when the session was canceled in UTC. Only used for appointments. */
        dt_date_cancel: string;
        /** The date/time of the session in local time. */
        dt_date_local: string;
        /** The number of clients booked into the session. */
        i_book: number;
        /** The maximum capacity of the session. */
        i_capacity: number;
        /** The duration of the session in minutes. */
        i_duration: number;
        /** The padding time after the session in minutes. Only used for appointments. */
        i_padding_after: number;
        /** The padding time before the session in minutes. Only used for appointments. */
        i_padding_before: number;
        /** The start time in minutes after midnight. */
        i_start: number;
        /** Count clients on waitlist. */
        i_wait: number;
        /** Appointment display option. */
        id_option: number;
        /** Identifiers for services types. */
        id_service: number;
        /** For appointments: `true` if user has checked-in; `false` otherwise. */
        is_arrive: boolean;
        /** For appointments: `true` if appointment is paid; `false` otherwise. */
        is_pay: boolean;
        /** For appointments: `true` if appointment is recurring; `false` otherwise. */
        is_repeat: boolean;
        /** The appointment key. */
        k_appointment: string;
        /** Confirmation date for appointment in MySQL format. Will be zero date + time in case appointment */
        dt_confirm: string;
        /** The class key. */
        k_class: string;
        /** The class period key. */
        k_class_period: string;
        /** The location key for where the session takes place. */
        k_location: string;
        /** This is the key of the appointment type, while `k_appointment` is the specific instance. */
        k_service: string;
        /** The name of the session. */
        s_title: string;
        /** Alert message. */
        text_alert: string;
        /** The background color in hex representation as used on WellnessLiving. */
        text_color_background: string;
        /** The border color in hex representation as used on WellnessLiving. */
        text_color_border: string;
        /** `true` - If the business has at least one virtual service, `false` - otherwise. */
        is_virtual_service: boolean;
        /** URL to image. Empty if image not exist. */
        url_image: string;
    }>;
    /** `true` - If the business has at least one virtual service, `false` - otherwise. */
    is_virtual_service: boolean;
}
export interface WlAppointmentBookServiceServiceList52Params {
    /** The class tab key to use to filter services. If empty, this can be found on the standard book tab. */
    a_class_tab: Array<string>;
    /** List of staff members to filter a result. */
    a_staff: Array<string>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** `true` - return all active services for a certain location ignoring user age and other restrictions. */
    is_backend: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The key of a service category to show information for. */
    k_service_category: string;
    /** The user key. */
    uid: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_height?: number | null;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_width?: number | null;
}
export interface WlAppointmentBookServiceServiceList52Response {
    a_service: Array<{
        /** The list of tab keys for the service. */
        a_class_tab: Array<string>;
        /** A list of links to start booking from a direct link. */
        a_direct_link: {
            /** The key of the book now tab. */
            k_class_tab: string;
            /** The booking URL. This will open the booking wizard under the related booking tab. */
            url_tab: string;
        };
        /** Appointment-specific business policy overrides. `null` when the service uses the general business... */
        a_config: {
            /** `true` if this service supports back-to-back booking. */
            is_back_to_back: boolean;
            /** `true` if clients can book this service on a recurring basis. */
            is_book_repeat_client: boolean;
            /** `true` if appointment bookings for this service default to weekly recurring with no end date. */
            is_book_repeat_no_end_date_appointment: boolean;
            /** `true` if multiple bookings are allowed for this service. */
            is_multiple_booking: boolean;
            /** `true` if clients on the wait list do not have to pay upfront. */
            is_wait_list_unpaid: boolean;
        } | null;
        /** Information about the appointment image. An array with the following values: */
        a_image: {
            /** The height of the image. */
            i_height: number;
            /** The width of the image. */
            i_width: number;
            /** This will be `true` if the image is not set. */
            is_empty: boolean;
            /** The service key. */
            k_service: string;
            /** The name of the service. */
            s_service: string;
            /** The URL to the image. */
            s_url: string;
        };
        /** Keys are login type keys. */
        a_login_type_restriction: Array<string>;
        /** Keys are member group keys. */
        a_member_group_restriction: Array<string>;
        /** The amount of deposit required. */
        f_deposit: string;
        /** The maximum offline price. */
        f_offline_max: string;
        /** The minimum offline price. */
        f_offline_min: string;
        /** The online price. */
        f_online: string;
        /** Determines whether the service will be hidden in the White Label mobile application. */
        hide_application: boolean;
        /** The required minimum client age to book an appointment. */
        i_age_from: number;
        /** The required maximum client age to book an appointment. */
        i_age_to: number;
        /** The price type ID. One of [RsServicePriceSid](#/components/schemas/RsServicePriceSid) constants. */
        i_price: number;
        /** The appointment duration in minutes. */
        i_duration: number;
        /** A list of client booking flow types. */
        id_book_flow: number;
        /** A list of client booking flow types. */
        id_service_require: number;
        /** `true` if age restrictions are public. Otherwise, `false` if they should be hidden from clients. */
        is_age_public: boolean;
        /** Determines whether this service can't be booked due to age restrictions. */
        is_age_restricted: boolean;
        /** Determines whether this service supports back-to-back booking. */
        is_back_to_back: boolean;
        /** Whether this appointment can be booked online. */
        is_bookable: boolean;
        /** `true` if clients can book classes and appointments on a recurring basis. Otherwise, this `false`. */
        is_book_repeat_client: boolean;
        /** `true` if appointment bookings default to weekly recurring with no end date, `false` otherwise. */
        is_book_repeat_no_end_date_appointment: boolean;
        /** `true` if `f_deposit` is a percentage. Otherwise, this will be `false` if `f_deposit` is an amoun... */
        is_deposit_percent: boolean;
        /** `true` if clients can select the staff member's gender. Otherwise, this will be `false`. */
        is_gender_select: boolean;
        /** `true` if clients can buy this appointment. Otherwise, this will be `false` if only staff members... */
        is_online_sell: boolean;
        /** `true` if the service requires assets. Otherwise, this will be `false`. */
        is_resource_type: boolean;
        /** `true` if the appointment can be booked without a Purchase Option. Otherwise, this will be `false... */
        is_single_buy: boolean;
        /** `true` if the appointment must be confirmed by a staff member after booking. Otherwise, this will... */
        is_staff_confirm: boolean;
        /** `true` if clients can select a staff member for the appointment. Otherwise, this will be `false` ... */
        is_staff_skip: boolean;
        /** Determines whether the service will ask for questions or not. */
        is_question: boolean;
        /** `true` if the service is virtual. Otherwise, this will be `false`. */
        is_virtual: boolean;
        /** The appointment primary key. */
        k_service: string;
        /** The service category primary key. */
        k_service_category: string;
        /** The appointment duration in a human-readable format. */
        s_duration: string;
        /** The appointment title. */
        s_service: string;
        /** Age restriction header. */
        text_age_restriction: string;
        /** Appointment description (deprecated, use `html_description`). */
        xml_description: string;
        /** Appointment short description (deprecated, use `html_description_short`). */
        xml_description_short: string;
        /** Special instructions (deprecated, use `html_special`). */
        xml_special: string;
    }>;
    /** Whether services allow multiple appointment booking. */
    is_multiple_booking: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookServiceCategoryParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** `true` - return all service categories for a certain location. */
    is_backend: boolean;
    /** Whether a flagged client is allowed to retrieve categories. */
    is_flag_ignore: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The class tab key used to filter services. */
    k_class_tab: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookServiceCategoryResponse {
    a_category: Array<{
        /** `true` - all services are hidden in this category for White Label mobile application. `false` - o... */
        hide_application: boolean;
        /** Sort key for category. Used to sort categories on category list page. */
        i_sort: boolean;
        /** Service category key. */
        k_service_category: string;
        /** Service category title. */
        s_title: string;
    }>;
    /** `true` - if client has a flag, `false` - otherwise. */
    is_client_flag: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookServiceServiceListParams {
    /** The class tab key to use to filter services. If empty, this can be found on the standard book tab. */
    a_class_tab: Array<string>;
    /** List of staff members to filter a result. */
    a_staff: Array<string>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** `true` - return all active services for a certain location ignoring user age and other restrictions. */
    is_backend: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The class tab key to filter services. If empty or `0`, this can be found on the standard book now... */
    k_class_tab: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The key of a service category to show information for. */
    k_service_category: string;
    /** The user key. */
    uid: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_height?: number | null;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_width?: number | null;
}
export interface WlAppointmentBookServiceServiceListResponse {
    a_service: Array<{
        /** The list of tab keys for the service. */
        a_class_tab: Array<string>;
        /** A list of links to start booking from a direct link. */
        a_direct_link: {
            /** The key of the book now tab. */
            k_class_tab: string;
            /** The booking URL. This will open the booking wizard under the related booking tab. */
            url_tab: string;
        };
        /** Appointment-specific business policy overrides. `null` when the service uses the general business... */
        a_config: {
            /** `true` if this service supports back-to-back booking. */
            is_back_to_back: boolean;
            /** `true` if clients can book this service on a recurring basis. */
            is_book_repeat_client: boolean;
            /** `true` if appointment bookings for this service default to weekly recurring with no end date. */
            is_book_repeat_no_end_date_appointment: boolean;
            /** `true` if multiple bookings are allowed for this service. */
            is_multiple_booking: boolean;
            /** `true` if clients on the wait list do not have to pay upfront. */
            is_wait_list_unpaid: boolean;
        } | null;
        /** Information about the appointment image. An array with the following values: */
        a_image: {
            /** The height of the image. */
            i_height: number;
            /** The width of the image. */
            i_width: number;
            /** This will be `true` if the image is not set. */
            is_empty: boolean;
            /** The service key. */
            k_service: string;
            /** The name of the service. */
            s_service: string;
            /** The URL to the image. */
            s_url: string;
        };
        /** Keys are login type keys. */
        a_login_type_restriction: Array<string>;
        /** Keys are member group keys. */
        a_member_group_restriction: Array<string>;
        /** The amount of deposit required. */
        f_deposit: string;
        /** The maximum offline price. */
        f_offline_max: string;
        /** The minimum offline price. */
        f_offline_min: string;
        /** The online price. */
        f_online: string;
        /** Determines whether the service will be hidden in the White Label mobile application. */
        hide_application: boolean;
        /** The required minimum client age to book an appointment. */
        i_age_from: number;
        /** The required maximum client age to book an appointment. */
        i_age_to: number;
        /** The price type ID. One of [RsServicePriceSid](#/components/schemas/RsServicePriceSid) constants. */
        i_price: number;
        /** The appointment duration in minutes. */
        i_duration: number;
        /** A list of client booking flow types. */
        id_book_flow: number;
        /** A list of client booking flow types. */
        id_service_require: number;
        /** `true` if age restrictions are public. Otherwise, `false` if they should be hidden from clients. */
        is_age_public: boolean;
        /** Determines whether this service can't be booked due to age restrictions. */
        is_age_restricted: boolean;
        /** Determines whether this service supports back-to-back booking. */
        is_back_to_back: boolean;
        /** Whether this appointment can be booked online. */
        is_bookable: boolean;
        /** `true` if clients can book classes and appointments on a recurring basis. Otherwise, this `false`. */
        is_book_repeat_client: boolean;
        /** `true` if appointment bookings default to weekly recurring with no end date, `false` otherwise. */
        is_book_repeat_no_end_date_appointment: boolean;
        /** `true` if `f_deposit` is a percentage. Otherwise, this will be `false` if `f_deposit` is an amoun... */
        is_deposit_percent: boolean;
        /** `true` if clients can select the staff member's gender. Otherwise, this will be `false`. */
        is_gender_select: boolean;
        /** `true` if clients can buy this appointment. Otherwise, this will be `false` if only staff members... */
        is_online_sell: boolean;
        /** `true` if the service requires assets. Otherwise, this will be `false`. */
        is_resource_type: boolean;
        /** `true` if the appointment can be booked without a Purchase Option. Otherwise, this will be `false... */
        is_single_buy: boolean;
        /** `true` if the appointment must be confirmed by a staff member after booking. Otherwise, this will... */
        is_staff_confirm: boolean;
        /** `true` if clients can select a staff member for the appointment. Otherwise, this will be `false` ... */
        is_staff_skip: boolean;
        /** Determines whether the service will ask for questions or not. */
        is_question: boolean;
        /** `true` if the service is virtual. Otherwise, this will be `false`. */
        is_virtual: boolean;
        /** The appointment primary key. */
        k_service: string;
        /** The service category primary key. */
        k_service_category: string;
        /** The appointment duration in a human-readable format. */
        s_duration: string;
        /** The appointment title. */
        s_service: string;
        /** Age restriction header. */
        text_age_restriction: string;
        /** Appointment description (deprecated, use `html_description`). */
        xml_description: string;
        /** Appointment short description (deprecated, use `html_description_short`). */
        xml_description_short: string;
        /** Special instructions (deprecated, use `html_special`). */
        xml_special: string;
    }>;
    /** Whether services allow multiple appointment booking. */
    is_multiple_booking: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookServiceServiceCheckParams {
    /** Date of booking in MySQL format. */
    dt_date: string;
    /** The business key. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The service key. */
    k_service: string;
    /** The user key. */
    uid: string;
}
export type WlAppointmentBookServiceServiceCheckResponse = Record<string, unknown>;
export interface WlAppointmentBookFinishFinishMultipleParams {
    /** The payment type for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/RsApp... */
    a_pay: Array<number>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** Data to create new users. */
    a_user: Array<{
        /** The list of notes to add to the new user's profile. */
        a_note: Array<string>;
        /** The new user's email address. */
        text_mail: string;
        /** The new user's first name. */
        text_name_first: string;
        /** The new user's last name. */
        text_name_last: string;
        /** The new user's mobile phone number. */
        text_phone: string;
    }>;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The appointment key. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookFinishFinishMultipleResponse {
    a_appointment: Array<{
        /** The appointment key. */
        k_appointment: string;
    }>;
    /** The activity IDs of bookings that have been made. */
    a_login_activity_visit: Array<string>;
    /** The visit IDs. */
    a_visit: Array<string>;
    /** Keys of booked visits. */
    a_visit_provider: Array<Array<string>>;
}
export interface WlAppointmentBookFinishFinishGetParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookFinishFinishGetResponse {
    a_notification: Array<{
        /** `true` to send mail; `false` to not send. */
        is_mail?: boolean;
        /** `true` to send SMS; `false` to not send. */
        is_sms?: boolean;
        /** `true` to send push notification; `false` to not send. */
        is_push?: boolean;
    }>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookFinishFinishPostParams {
    /** All data from the provider model `Wl_Appointment_Book_ProviderModel`: */
    a_book_data: Array<{
        /** Information about booking conflicts. Keys are bookings dates/times in MySQL format in UTC. Values... */
        a_conflict?: {
            /** New appointment date/time in MySQL in locale timezone. */
            dt_date_local: string;
            /** New asset booking duration. */
            i_duration: number;
            /** New asset index. */
            i_index: number;
            /** List of possible ways to solve a conflict. */
            id_conflict: number;
            /** New asset. */
            k_resource: string;
            /** New staff member.  `null` in a case of asset booking. */
            k_staff: string | null;
        };
        /** Add-ons to the appointment. Specify this for appointment bookings only. */
        a_product?: {
            /** The add-on count */
            i_count: number;
            /** The add-on use count. */
            i_count_use?: number;
            /** The key of add-on. */
            k_shop_product_option: string;
        };
        /** Recurring booking information: */
        a_repeat?: {
            /** The days of week when appointment repeats. One of the [ADateWeekSid](#/components/schemas/ADateWe... */
            a_week?: Array<number>;
            /** The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn'... */
            dl_end?: string;
            /** The number of occurrences after which the appointment's repeat cycle must stop. */
            i_occurrence?: number;
            /** The frequency of the appointment's repeat cycle. */
            i_period: number;
            /** A class for managing time intervals. */
            id_period: number;
            /** `true` if the appointment repeats monthly on the same date. */
            is_month?: boolean;
        };
        /** A list of assets for the appointment booking. */
        a_resource?: {
            /** The asset index on the layout. Specify this only if the asset category has a layout. */
            i_index?: number;
            /** The asset. */
            k_resource: string;
        };
        /** The date/time for the booking in MySQL format in the location's time zone. */
        dt_date: string;
        /** The duration of asset booking in minutes. Specify this for separate asset bookings only. */
        i_duration?: number;
        /** The asset index on the layout. */
        i_index?: number;
        /** List of class tab objects. */
        id_class_tab?: number;
        /** String identifiers for gender. */
        id_gender_staff?: number;
        /** If `true`, appointment waits unpaid. */
        is_wait_list_unpaid?: boolean;
        /** The user's prize. */
        k_login_prize?: string;
        /** The user's pass (for example, a membership or a package). */
        k_login_promotion?: string;
        /** The asset booking. Specify this for separate asset bookings only. */
        k_resource?: string;
        /** The appointment booking. Specify this for appointment bookings only. */
        k_service?: string;
        /** The user's pass. */
        k_session_pass?: string;
        /** The staff member conducting the appointment. */
        k_staff?: string;
        /** The staff member conducting the appointment. */
        k_staff_date?: string;
        /** The amount of selected tips. */
        m_tip_appointment?: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** Data to create new user. */
    a_user: Array<{
        /** List of notes to add to user. */
        a_note: Array<string>;
        /** Mail. */
        text_mail: string;
        /** First name. */
        text_name_first: string;
        /** Last name. */
        text_name_last: string;
        /** Phone. */
        text_phone: string;
    }>;
    /** The payment type ID for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/Rs... */
    id_pay: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The appointment key. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookFinishFinishPostResponse {
    a_appointment: Array<{
        /** The appointment key. */
        k_appointment: string;
    }>;
    /** The activity keys of the bookings that were made. */
    a_login_activity_visit: Array<string>;
    /** The keys of visits. */
    a_visit: Array<string>;
    a_visit_payment: Array<{
        /** `true` if the visit is free; `false` otherwise. */
        is_free: boolean;
        /** Applied user's purchase option. */
        k_login_promotion: string;
        /** Purchase option. */
        k_promotion: string;
        /** Applied session pass. */
        k_session_pass: string;
        /** Purchase option title. */
        text_promotion: string;
    }>;
}
export interface WlAppointmentBookFinishFinish47GetParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookFinishFinish47GetResponse {
    a_notification: Array<{
        /** `true` to send mail; `false` to not send. */
        is_mail?: boolean;
        /** `true` to send SMS; `false` to not send. */
        is_sms?: boolean;
        /** `true` to send push notification; `false` to not send. */
        is_push?: boolean;
    }>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookFinishFinish47PostParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** Data to create new user. */
    a_user: Array<{
        /** List of notes to add to user. */
        a_note: Array<string>;
        /** Mail. */
        text_mail: string;
        /** First name. */
        text_name_first: string;
        /** Last name. */
        text_name_last: string;
        /** Phone. */
        text_phone: string;
    }>;
    /** The payment type ID for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/Rs... */
    id_pay: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The appointment key. */
    k_appointment: string;
    /** The business key. */
    k_business: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The user key. */
    uid: string;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookFinishFinish47PostResponse {
    a_appointment: Array<{
        /** The appointment key. */
        k_appointment: string;
    }>;
    /** The activity keys of the bookings that were made. */
    a_login_activity_visit: Array<string>;
    /** The keys of visits. */
    a_visit: Array<string>;
    a_visit_payment: Array<{
        /** `true` if the visit is free; `false` otherwise. */
        is_free: boolean;
        /** Applied user's purchase option. */
        k_login_promotion: string;
        /** Purchase option. */
        k_promotion: string;
        /** Applied session pass. */
        k_session_pass: string;
        /** Purchase option title. */
        text_promotion: string;
    }>;
}
export interface WlAppointmentBookPurchasePurchaseParams {
    /** List of selected services without current `k_service`. */
    a_service: Array<{
        /** List of purchase options selected for the service. */
        a_purchase: {
            /** A list of purchase types. */
            id_purchase_item: number;
            /** Purchase item key. */
            k_id: string;
            /** Should be `true` if this promotion is selected again, i.e. one that has already been applied to a... */
            is_purchase_previous?: boolean;
        };
        /** Local date/time to check purchase options expiration. */
        dt_date: string;
        /** Login prize key. */
        k_login_prize: string | null;
        /** Login promotion key. */
        k_login_promotion: string | null;
        /** Service key. */
        k_service: string;
        /** The timezone key for `dt_date` field. */
        k_timezone: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The date to use to check for expiration of Purchase Options. */
    dt_date: string;
    /** The asset booking duration. */
    i_duration: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` - get all Purchase Options suitable for appointment. */
    is_backend: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key. */
    k_resource: string;
    /** The service key used to select available Purchase Options. */
    k_service: string;
    /** The user key. */
    uid: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_height?: number | null;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_width?: number | null;
    /** The Purchase Option ID used to pay for the appointment. */
    k_login_promotion?: string | null;
    /** The timezone key for `dt_date`. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookPurchasePurchaseResponse {
    a_login_prize: Array<{
        /** Login prize remaining quantity. */
        i_count: number;
        /** Key of login prize. */
        k_login_prize: string;
        /** User friendly login prize description. */
        text_description: string;
    }>;
    a_login_promotion: Array<{
        /** Information about the Purchase Option. It contains the following information: */
        a_login_promotion_info: {
            /** The count of visits that the Purchase Option allows the client to make. */
            i_limit: number;
            /** The maximum number of minutes that current Purchase Option can be used for. */
            i_limit_duration: number | null;
            /** The count of the remaining visits. */
            i_remain: number;
            /** The number of minutes left in this Purchase Option. */
            i_remain_duration: number | null;
        };
        /** The list of calendar restrictions of the Purchase Option. For example, four per week. */
        a_visit_limit: Array<string>;
        /** Data about the shortest restriction period: */
        a_restrict: {
            /** The limit of visits for the shortest restriction period. */
            i_limit: number;
            /** The number of remaining visits for the shortest restriction period. */
            i_remain: number;
            /** The description of the shortest restriction period. For example "this week" or "for a four-day pe... */
            text_restriction: string;
        };
        /** Data about all restriction periods. Given as an array, where each record has the following struct... */
        a_restrict_data: {
            /** The count of future sessions that are paid with this Purchase Option. */
            i_book: number;
            /** The limit of visits for the restriction period. */
            i_limit: number;
            /** The number of remaining visits for the restriction period. */
            i_remain: number;
            /** The usage count of the Purchase Option. */
            i_use: number;
            /** The count of attended sessions before the last renewal. */
            i_visit_past: number;
            /** The description of restriction period. For example, "this week" or "for a four-day period". */
            text_restriction: string;
        };
        /** The count of visits that the Purchase Option allows the client to make. */
        i_limit: number;
        /** The maximum number of minutes that current Purchase Option can be used for. */
        i_limit_duration: number | null;
        /** Priority of this promotion. Result of [PromotionPrioritySid::priorityGet()](#/components/schemas/... */
        i_promotion_priority: number;
        /** Program types. */
        id_program: number;
        /** `true` if this purchase option is shared from another user. */
        is_share: boolean;
        /** The Purchase Option login key. */
        k_login_promotion: string;
        /** The list of services provided by this Purchase Option. */
        s_class_include: string;
        /** The Purchase Option description. */
        s_description: string;
        /** The Purchase Option duration. */
        s_duration: string;
        /** The Purchase Option name. */
        s_title: string;
        /** If this Purchase Option is a package, then this field contains a list of Purchase Options contain... */
        text_package_item: string;
        /** The user key of the owner of the promotion. */
        uid_owner: string;
    }>;
    a_purchase: Array<{
        /** Information describing the logo of the purchase option. This value can be false if there is no lo... */
        a_image: {
            /** Actual height of thumbnail image. */
            i_height: number;
            /** Height of original image. */
            i_height_src: number;
            /** Angle on which image was rotated compared to the original. */
            i_rotate: number;
            /** Actual width of thumbnail image. */
            i_width: number;
            /** Width of original image. */
            i_width_src: number;
            /** Whether thumbnail is a resized variant of original image. If set to `false` */
            'is-resize': boolean;
            /** Url to original image in file storage. */
            'url-view': string;
            /** Url to resized and rotated image in file storage. If size of original image is larger than specif... */
            'url-thumbnail': string;
        };
        /** The set of calculated values for payment: */
        a_payment: {
            /** The amount of the whole discount of one purchase item. */
            m_discount: string;
            /** The discount amount for the client type of one purchase item. */
            m_discount_login: string;
        };
        /** A list of calendar restrictions of the Purchase Option in a human-readable format, for example: '... */
        a_visit_limit: Array<string>;
        /** Date, when promotion expires. */
        dt_expire: string;
        /** Date, when promotion starts. */
        dt_start: string;
        /** The price of the Purchase Option. */
        f_price: string;
        /** Order number of the purchase option in the list. */
        i: number;
        /** Count of visits that purchase option allows to make. */
        i_limit: number;
        /** Maximum number of minutes that current promotion can be used. */
        i_limit_duration: number | null;
        /** Count of calendar periods (weeks, months, years) between payment for membership. */
        i_payment_period: number;
        /** A class for managing time intervals. */
        id_duration: number;
        /** Program types. */
        id_program: number;
        /** Program types. */
        id_program_type: number;
        /** Program types. */
        id_promotion_price: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** This will be `true` if the Purchase Option is a contract. It will `false` otherwise. */
        is_contract: boolean;
        /** `true` if purchase option has description. */
        is_description: boolean;
        /** `true` if promotion is introductory offer, `false` otherwise. */
        is_introductory: boolean;
        /** This will be `true` if the Purchase Option will auto-renew. It will be `false` otherwise. */
        is_renew: boolean;
        /** Whether Purchase Option is renewable and the "auto-renew" option should be turned on by default. */
        is_renew_check: boolean;
        /** This will be `true` if the Purchase Option has a duration that begins on purchase. It will be `fa... */
        is_start: boolean;
        /** Primary ID of the element in it's table. */
        k_id: string;
        /** Price of single session purchase before online discount. `null` if service does not have online d... */
        m_price_old?: string | null;
        /** Activation settings of the promotion. */
        s_activation: string;
        /** Class for designer to mark purchase options with different icons. */
        s_class: string;
        /** List of services included in the promotion. */
        s_class_include: string;
        /** Description of the purchase option. */
        s_description: string;
        /** Duration of the promotion. */
        s_duration: string;
        /** Period between payments for memberships. */
        s_payment_duration: string;
        /** Category of the program for promotions from [RsProgramCategorySid](#/components/schemas/RsProgram... */
        sid_program_category: string;
        /** Name of the purchase option. */
        s_title: string;
        /** Key of the purchase option in the format [`purchase_item_id`]::[`k_id`] */
        s_value: string;
        /** If this promotion is a package. This field contains list of promotions contained in the package. */
        text_package_item: string;
    }>;
    a_reward_prize: Array<{
        /** Prize price in points. */
        i_score: number;
        /** Key of redeemable prize. */
        k_reward_prize: string;
        /** User friendly prize description. */
        text_description: string;
    }>;
    a_session_pass: Array<{
        /** Number of remaining visits on session pass. */
        i_remain: number;
        /** Session pass key. */
        k_session_pass: string;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** Session pass title. */
        s_title: string;
    }>;
    /** Indicates if drop-in rate should be the default purchase option. */
    is_single_default: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The Purchase Option ID used to pay for the appointment. */
    k_login_promotion: string | null;
    /** Default promotion key. */
    k_promotion_default: string;
    /** Login promotion title suitable to pay for the services. */
    text_login_promotion: string;
}
export interface WlAppointmentBookPurchasePurchase72Params {
    /** List of selected services without current [PurchaseApi](/Wl/Appointment/Book/Purchase/Purchase.js... */
    a_service: Array<{
        /** List of purchase options selected for the service. */
        a_purchase: {
            /** A list of purchase types. */
            id_purchase_item: number;
            /** Purchase item key. */
            k_id: string;
            /** Should be `true` if this promotion is selected again, i.e. one that has already been applied to a... */
            is_purchase_previous?: boolean;
        };
        /** Local date/time to check purchase options expiration. */
        dt_date: string;
        /** Login prize key. */
        k_login_prize: string | null;
        /** Login promotion key. */
        k_login_promotion: string | null;
        /** Service key. */
        k_service: string;
        /** The timezone key for `dt_date` field. */
        k_timezone: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The date to use to check for expiration of Purchase Options. */
    dt_date: string;
    /** The asset booking duration. */
    i_duration: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` - get all Purchase Options suitable for appointment. */
    is_backend: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key. */
    k_resource: string;
    /** The service key used to select available Purchase Options. */
    k_service: string;
    /** The user key. */
    uid: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_height?: number | null;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_width?: number | null;
    /** Appointment key. */
    k_appointment?: string | null;
    /** The Purchase Option ID used to pay for the appointment. */
    k_login_promotion?: string | null;
    /** The timezone key for [PurchaseApi](/Wl/Appointment/Book/Purchase/Purchase.json). */
    k_timezone?: string | null;
}
export interface WlAppointmentBookPurchasePurchase72Response {
    a_login_prize: Array<{
        /** Login prize remaining quantity. */
        i_count: number;
        /** Key of login prize. */
        k_login_prize: string;
        /** User friendly login prize description. */
        text_description: string;
    }>;
    a_login_promotion: Array<{
        /** Information about the Purchase Option. It contains the following information: */
        a_login_promotion_info: {
            /** The count of visits that the Purchase Option allows the client to make. */
            i_limit: number;
            /** The maximum number of minutes that current Purchase Option can be used for. */
            i_limit_duration: number | null;
            /** The count of the remaining visits. */
            i_remain: number;
            /** The number of minutes left in this Purchase Option. */
            i_remain_duration: number | null;
        };
        /** The list of calendar restrictions of the Purchase Option. For example, four per week. */
        a_visit_limit: Array<string>;
        /** Data about the shortest restriction period: */
        a_restrict: {
            /** The limit of visits for the shortest restriction period. */
            i_limit: number;
            /** The number of remaining visits for the shortest restriction period. */
            i_remain: number;
            /** The description of the shortest restriction period. For example "this week" or "for a four-day pe... */
            text_restriction: string;
        };
        /** Data about all restriction periods. Given as an array, where each record has the following struct... */
        a_restrict_data: {
            /** The count of future sessions that are paid with this Purchase Option. */
            i_book: number;
            /** The limit of visits for the restriction period. */
            i_limit: number;
            /** The number of remaining visits for the restriction period. */
            i_remain: number;
            /** The usage count of the Purchase Option. */
            i_use: number;
            /** The count of attended sessions before the last renewal. */
            i_visit_past: number;
            /** The description of restriction period. For example, "this week" or "for a four-day period". */
            text_restriction: string;
        };
        /** The count of visits that the Purchase Option allows the client to make. */
        i_limit: number;
        /** The maximum number of minutes that current Purchase Option can be used for. */
        i_limit_duration: number | null;
        /** Priority of this promotion. Result of [PromotionPrioritySid::priorityGet()](#/components/schemas/... */
        i_promotion_priority: number;
        /** Program types. */
        id_program: number;
        /** `true` if this purchase option is shared from another user. */
        is_share: boolean;
        /** The Purchase Option login key. */
        k_login_promotion: string;
        /** The list of services provided by this Purchase Option. */
        s_class_include: string;
        /** The Purchase Option description. */
        s_description: string;
        /** The Purchase Option duration. */
        s_duration: string;
        /** The Purchase Option name. */
        s_title: string;
        /** If this Purchase Option is a package, then this field contains a list of Purchase Options contain... */
        text_package_item: string;
        /** The user key of the owner of the promotion. */
        uid_owner: string;
    }>;
    a_purchase: Array<{
        /** Information describing the logo of the purchase option. This value can be false if there is no lo... */
        a_image: {
            /** Actual height of thumbnail image. */
            i_height: number;
            /** Height of original image. */
            i_height_src: number;
            /** Angle on which image was rotated compared to the original. */
            i_rotate: number;
            /** Actual width of thumbnail image. */
            i_width: number;
            /** Width of original image. */
            i_width_src: number;
            /** Whether thumbnail is a resized variant of original image. If set to `false` */
            'is-resize': boolean;
            /** Url to original image in file storage. */
            'url-view': string;
            /** Url to resized and rotated image in file storage. If size of original image is larger than specif... */
            'url-thumbnail': string;
        };
        /** The set of calculated values for payment: */
        a_payment: {
            /** The amount of the whole discount of one purchase item. */
            m_discount: string;
            /** The discount amount for the client type of one purchase item. */
            m_discount_login: string;
        };
        /** A list of calendar restrictions of the Purchase Option in a human-readable format, for example: '... */
        a_visit_limit: Array<string>;
        /** Date, when promotion expires. */
        dt_expire: string;
        /** Date, when promotion starts. */
        dt_start: string;
        /** The price of the Purchase Option. */
        f_price: string;
        /** Order number of the purchase option in the list. */
        i: number;
        /** Count of visits that purchase option allows to make. */
        i_limit: number;
        /** Maximum number of minutes that current promotion can be used. */
        i_limit_duration: number | null;
        /** Count of calendar periods (weeks, months, years) between payment for membership. */
        i_payment_period: number;
        /** A class for managing time intervals. */
        id_duration: number;
        /** Program types. */
        id_program: number;
        /** Program types. */
        id_program_type: number;
        /** Program types. */
        id_promotion_price: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** This will be `true` if the Purchase Option is a contract. It will `false` otherwise. */
        is_contract: boolean;
        /** `true` if purchase option has description. */
        is_description: boolean;
        /** `true` if promotion is introductory offer, `false` otherwise. */
        is_introductory: boolean;
        /** This will be `true` if the Purchase Option will auto-renew. It will be `false` otherwise. */
        is_renew: boolean;
        /** Whether Purchase Option is renewable and the "auto-renew" option should be turned on by default. */
        is_renew_check: boolean;
        /** This will be `true` if the Purchase Option has a duration that begins on purchase. It will be `fa... */
        is_start: boolean;
        /** Primary ID of the element in it's table. */
        k_id: string;
        /** Price of single session purchase before online discount. `null` if service does not have online d... */
        m_price_old?: string | null;
        /** Activation settings of the promotion. */
        s_activation: string;
        /** Class for designer to mark purchase options with different icons. */
        s_class: string;
        /** List of services included in the promotion. */
        s_class_include: string;
        /** Description of the purchase option. */
        s_description: string;
        /** Duration of the promotion. */
        s_duration: string;
        /** Period between payments for memberships. */
        s_payment_duration: string;
        /** Category of the program for promotions from [RsProgramCategorySid](#/components/schemas/RsProgram... */
        sid_program_category: string;
        /** Name of the purchase option. */
        s_title: string;
        /** Key of the purchase option in the format [`purchase_item_id`]::[`k_id`] */
        s_value: string;
        /** If this promotion is a package. This field contains list of promotions contained in the package. */
        text_package_item: string;
    }>;
    a_reward_prize: Array<{
        /** Prize price in points. */
        i_score: number;
        /** Key of redeemable prize. */
        k_reward_prize: string;
        /** User friendly prize description. */
        text_description: string;
    }>;
    a_session_pass: Array<{
        /** Number of remaining visits on session pass. */
        i_remain: number;
        /** Session pass key. */
        k_session_pass: string;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** Session pass title. */
        s_title: string;
    }>;
    /** Indicates if drop-in rate should be the default purchase option. */
    is_single_default: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The Purchase Option ID used to pay for the appointment. */
    k_login_promotion: string | null;
    /** Default promotion key. */
    k_promotion_default: string;
    /** Login promotion title suitable to pay for the services. */
    text_login_promotion: string;
}
export interface WlAppointmentBookScheduleDayTimeParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The date to show the available appointment booking schedule. */
    dt_date: string;
    /** The duration of the asset booking or custom appointment duration in minutes. Zero in case of serv... */
    i_duration: number;
    /** An index of the selected asset. `0` for booking of service or if asset is not on layout. */
    i_index: number;
    /** The ID of the staff member's gender. */
    id_gender_staff: number;
    /** Determines whether multiple appointments are booked in back-to-back mode. */
    is_back_to_back: boolean;
    /** `true` if the request is made by staff member; in this case booking policy restrictions are ignored. */
    is_staff: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** `true` - return service categories that have no staff members able to conduct them. */
    is_unavailable: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key to show which days are available for booking. */
    k_resource: string;
    /** The service key used for showing the available appointment booking schedule. */
    k_service: string;
    /** The staff member key used for showing the available appointment booking schedule. */
    k_staff: string;
    /** The staff key to show what days are available for booking. */
    s_appointment: string;
    /** A list of service add-ons keys(encoded as JSON string). */
    s_product: string;
    /** The user key. */
    uid: string;
    /** The staff user key used for showing the available appointment booking schedule. */
    uid_staff: string;
    /** Current booking tab. */
    k_class_tab?: string | null;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookScheduleDayTimeResponse {
    a_time: Array<{
        /** Date of the calendar. */
        dt_date: string;
        /** The count of clients that have already booked this appointment. */
        i_count: number;
        /** Integer representation of appointment schedule time. */
        i_time: number;
        /** The count of clients on the waiting list for this appointment. */
        i_wait: number;
        /** Whether the appointment can be booked only in a wait list. */
        is_waitlist: boolean;
        /** @deprecated If this time is already occupied by any client and staff member (but service capacity... */
        k_staff: string;
        /** If this time is already occupied by any client and staff member (but service capacity is not exha... */
        uid_staff: string;
        /** String representation of appointment schedule time. */
        s_title: string;
    }>;
    /** The date to show the available appointment booking schedule. */
    dt_date: string;
    /** Maximum number of clients that can simultaneously book this service. */
    i_capacity: number | null;
    /** Maximum number of clients that can be placed on the waitlist for this service. */
    i_capacity_waitlist: number | null;
    /** Whether list of available times contains slots with only waitlist booking available. */
    is_waitlist: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookScheduleCalendarParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The date to show the available appointment booking schedule. */
    dt_date: string;
    /** The duration of the asset booking or custom appointment duration in minutes. Zero in case of serv... */
    i_duration: number;
    /** An index of the selected asset. `0` for booking of service or if asset is not on layout. */
    i_index: number;
    /** The ID of the staff member's gender. */
    id_gender_staff: number;
    /** Determines whether multiple appointments are booked in back-to-back mode. */
    is_back_to_back: boolean;
    /** If calendar should be displayed in month view mode. */
    is_month_view: boolean;
    /** `true` if the request is made by staff member; in this case booking policy restrictions are ignored. */
    is_staff: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** `true` - return service categories that have no staff members able to conduct them. */
    is_unavailable: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key to show which days are available for booking. */
    k_resource: string;
    /** The service key used for showing the available appointment booking schedule. */
    k_service: string;
    /** The staff member key used for showing the available appointment booking schedule. */
    k_staff: string;
    /** The staff key to show what days are available for booking. */
    s_appointment: string;
    /** A list of service add-ons keys(encoded as JSON string). */
    s_product: string;
    /** The user key. */
    uid: string;
    /** The staff user key used for showing the available appointment booking schedule. */
    uid_staff: string;
    /** Current booking tab. */
    k_class_tab?: string | null;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookScheduleCalendarResponse {
    a_date: Array<{
        /** Date item of the calendar. */
        dt_date: string;
        /** Number of day in week. */
        i_week: number;
        /** Whether booking is available for this day. */
        is_available: boolean;
        /** Whether date is current. */
        is_current: boolean;
        /** Whether date is out of current month or it's business/location closed date. */
        is_out: boolean;
        /** Whether booking for this day available only in wait list. */
        is_waitlist_only: boolean;
        /** Whether date is last day of the week. */
        is_week_end: boolean;
        /** Whether date is first day of the week. */
        is_week_start: boolean;
        /** String representation of day number with leading zeroes. */
        s_day: string;
        /** String representation of week day (one letter, i.e. "F"). */
        s_week: string;
    }>;
    a_time: Array<{
        /** Date of the calendar. */
        dt_date: string;
        /** The count of clients that have already booked this appointment. */
        i_count: number;
        /** Integer representation of appointment schedule time. */
        i_time: number;
        /** The count of clients on the waiting list for this appointment. */
        i_wait: number;
        /** Whether the appointment can be booked only in a wait list. */
        is_waitlist: boolean;
        /** @deprecated If this time is already occupied by any client and staff member (but service capacity... */
        k_staff: string;
        /** If this time is already occupied by any client and staff member (but service capacity is not exha... */
        uid_staff: string;
        /** String representation of appointment schedule time. */
        s_title: string;
    }>;
    a_timezone_data: Array<{
        /** `null` if business settings doesn't allow client to adjust timezone, otherwise list of timezones: */
        a_timezone: {
            /** Timezone order. */
            i_order: number;
            /** Timezone shift from UTC in hours. */
            i_shift: number;
            /** `true` for selected timezone - from `k_timezone` param or client's default timezone when param no... */
            is_select: boolean;
            /** Timezone key. */
            k_timezone: string;
            /** Timezone name. */
            s_title: string;
            /** Timezone abbreviation. */
            text_abbr: string;
        } | null;
        /** `null` if business settings doesn't allow client to adjust timezone, otherwise timezone input name. */
        name: string | null;
    }>;
    a_week_name: Array<{
        /** Week day, one of the [ADateWeekSid](#/components/schemas/ADateWeekSid) constants. */
        i_day: number;
        /** Short week day's name (2 letters, i.e. 'Fr'). */
        html_week_day: string;
    }>;
    /** Whether previous calendar period can be shown (start of shown period later than current date). */
    can_backwards: boolean;
    /** The date to show the available appointment booking schedule. */
    dt_date: string;
    /** Maximum number of clients that can simultaneously book this service. */
    i_capacity: number | null;
    /** Maximum number of clients that can be placed on the waitlist for this service. */
    i_capacity_waitlist: number | null;
    /** A class for the days of the week. */
    i_week_end: number;
    /** A class for the days of the week. */
    i_week_start: number;
    /** Whether list of available times contains slots with only waitlist booking available. */
    is_waitlist: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookScheduleNextAvailableDayParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** Start date to search next available date in MySQL format. If empty, the search will start from th... */
    dt_date: string;
    /** The duration of the asset booking or custom appointment duration in minutes. Zero in case of serv... */
    i_duration: number;
    /** An index of the selected asset. `0` for booking of service or if asset is not on layout. */
    i_index: number;
    /** The ID of the staff member's gender. */
    id_gender_staff: number;
    /** Determines whether multiple appointments are booked in back-to-back mode. */
    is_back_to_back: boolean;
    /** `true` if the request is made by staff member; in this case booking policy restrictions are ignored. */
    is_staff: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The resource key to show which days are available for booking. */
    k_resource: string;
    /** The service key used for showing the available appointment booking schedule. */
    k_service: string;
    /** The staff key to show what days are available for booking. */
    s_appointment: string;
    /** A list of service add-ons keys(encoded as JSON string). */
    s_product: string;
    /** The user key. */
    uid: string;
    /** The staff user key used for showing the available appointment booking schedule. */
    uid_staff: string;
    /** Current booking tab. */
    k_class_tab?: string | null;
    /** Key of timezone. */
    k_timezone?: string | null;
}
export interface WlAppointmentBookScheduleNextAvailableDayResponse {
    /** Start date to search next available date in MySQL format. If empty, the search will start from th... */
    dt_date: string;
    /** Next available date in MySQL format. */
    dt_next: string;
    /** Maximum number of clients that can simultaneously book this service. */
    i_capacity: number | null;
    /** Maximum number of clients that can be placed on the waitlist for this service. */
    i_capacity_waitlist: number | null;
    /** Whether list of available times contains slots with only waitlist booking available. */
    is_waitlist: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
}
export interface WlAppointmentBookAssetAssetListParams {
    /** The selected date and time of the asset booking. It is used in cases when the business booking po... */
    dtl_date: string;
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** Mode type, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** This is `true` if asset categories are loaded for back-end mode. Otherwise, this will be `false` ... */
    is_backend: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** Key of the appointment, if we reschedule existing appointment. */
    k_appointment: string;
    /** Business key. */
    k_business: string;
    /** The class tab key used to filter assets. */
    k_class_tab: string;
    /** The location key. */
    k_location: string;
    /** The asset category key to show information for. */
    k_resource_category: string;
    /** Timezone of date and time of asset booking. */
    k_timezone: string;
    /** Client to get information for. */
    uid?: string | null;
}
export interface WlAppointmentBookAssetAssetListResponse {
    a_asset: Array<{
        /** Information about age restrictions for this event. */
        a_age_restrictions: {
            /** The minimum age permitted for the event. This will be `null` if a minimum age isn't set or availa... */
            i_age_from: number | null;
            /** The maximum age permitted for the event. This will be `null` if a maximum age isn't set or availa... */
            i_age_to: number | null;
            /** This will be `true` if age restrictions are public and available. Otherwise, this will be `false`... */
            is_age_public: boolean;
        };
        /** The key of service. */
        a_class_tab: Array<string>;
        /** A list of links to create a booking from a direct link (direct booking URL). */
        a_direct_link: {
            /** The key of the book now tab. */
            k_class_tab: string;
            /** The direct booking URL. This will open the booking wizard under the related booking tab. */
            url_tab: string;
        };
        /** Information about the asset logo: */
        a_image: {
            /** The angle of the shape rotation. This is set only if the image is one of the default shapes. */
            i_angle: number;
            /** Determines if the asset logo is empty. */
            is_empty: boolean;
            /** The icon name. String representation of one of the [ImageIconSid](#/components/schemas/Wl.Resourc... */
            sid_image_icon: string;
            /** The shape name. String representation of one of the [ImageShapeSid](#/components/schemas/Wl.Resou... */
            sid_image_shape: string;
            /** The asset logo URL. */
            url: string;
        };
        /** A list of asset periods with the following information: */
        a_period: {
            /** The HTML code used to display the asset duration. */
            html_duration: string;
            /** The HTML code used to display the formatted price. */
            html_price: string;
            /** The asset duration in minutes. */
            i_duration: number;
            /** A list of service price types. */
            id_price: number;
            /** The asset period price. */
            m_price: string;
        };
        /** QUICK Search tag keys. */
        a_search_tag: Array<string>;
        /** Determines whether the asset will be hidden in the White Label mobile apps. */
        hide_application: boolean;
        /** The resource age restriction */
        html_age_restriction: string;
        /** The resource name. */
        html_title: string;
        /** A list of client booking flow types. */
        id_service_require: number;
        /** Determines whether this service can't be booked due to age restrictions. */
        is_age_restricted: boolean;
        /** Quick book tab key. */
        k_class_tab: string;
        /** The resource key. */
        k_resource: string;
        /** The resource category key. */
        k_resource_category: string;
    }>;
    /** A list of reserved assets. */
    a_asset_busy: Array<Array<string | boolean>>;
    /** The asset layout key. */
    k_resource_layout: string;
}
export interface WlAppointmentBookAssetCategoryParams {
    /** If `true`, asset categories are loaded for backend mode. Otherwise, this will be `false` if asset... */
    is_backend: boolean;
    /** `true` - search in all tabs. */
    is_tab_all: boolean;
    /** The class tab key to use for filtering services. */
    k_class_tab: string;
    /** The key of the location to show information for. */
    k_location: string;
}
export interface WlAppointmentBookAssetCategoryResponse {
    a_category: Array<{
        /** `true` - all resources are hidden in this category for White Label mobile application. `false` - ... */
        hide_application: boolean;
        /** Resource type ID. */
        k_resource_type: string;
        /** Title of resource type. */
        html_title: string;
        /** Title of resource type as text. */
        text_title: string;
    }>;
}
export interface WlAppointmentBookPaymentPaymentGetParams {
    /** Information detailing an appointment booking: */
    a_book_data: Array<{
        /** Add-on list. Keys are add-on option keys, values are quantities. */
        a_product: Array<number>;
        /** Client prorate date. Used when the purchased promotion is prorated. */
        dl_client_prorate: string;
        /** List of class tab objects. */
        id_class_tab: number;
        /** `true` if the client wants to pay upon their visit, `false` if paying now. */
        is_pay_later: boolean;
        /** `true` if a previously purchased option is used for this booking. */
        is_purchase_previous: boolean;
        /** `true` if the client is placed on a wait list without paying. */
        is_wait_list_unpaid: boolean;
        /** Asset booking duration in minutes. Used only for asset bookings. */
        i_duration: number;
        /** Login prize key used to pay for the booking. Empty if no prize is used. */
        k_login_prize: string;
        /** Key of an already-purchased promotion used for this booking. Empty if not applicable. */
        k_login_promotion: string;
        /** Asset key. Used only for asset bookings. */
        k_resource: string;
        /** Reward prize key used to redeem a free item. Empty if not applicable. */
        k_reward_prize: string;
        /** Service key. Used only for appointment bookings. */
        k_service: string;
        /** Drop-in key. Used when booking via a drop-in pass. */
        k_session_pass: string;
        /** Tip amount for the appointment. */
        m_tip_appointment: string;
        /** Client signature for a contract. Required when the purchase option has a contract. */
        s_signature: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid). */
    id_mode: number;
    /** The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid). */
    id_purchase_item: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The item key. Depends on `id_purchase_item` property. */
    k_id: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The login promotion key. */
    k_login_promotion: string;
    /** Session pass key. */
    k_session_pass: string;
    /** Variable price. Is set only during booking an appointment with variable type of the price */
    m_variable_price: string;
    /** Service unique key. */
    s_unique_key: string;
    /** Gift card code. */
    text_coupon_code: string;
    /** The discount code to be applied to the purchase. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
    /** The business key. Currently used only with `k_session_pass` variable. */
    k_business?: string | null;
}
export interface WlAppointmentBookPaymentPaymentGetResponse {
    a_promotion_data: Array<{
        /** The limit of total visits. */
        i_limit: number;
        /** The number of remaining visits. */
        i_remain: number;
        /** The expiration date. */
        s_expire: string;
        /** The title of the Purchase Option. */
        s_title: string;
    }>;
    a_purchase: Array<{
        /** Contains information about taxes in the following format. A list of taxes to apply. */
        a_tax: {
            /** The tax rate. */
            m_tax: string;
            /** The name of the tax. */
            text_title: string;
        };
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The value of the discount used for the purchase. */
        k_id: string;
        /** The value of the discount used for the purchase. */
        m_discount: string;
        /** The discount amount for the client type of one purchase item. */
        m_discount_login: string;
        /** The payment for the Purchase Option or single visit without taxes. */
        m_pay: string;
        /** The price of the Purchase Option or single visit. */
        m_price: string;
    }>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** Gift card amount. */
    m_coupon: string;
    /** Discount amount. */
    m_discount: string;
    /** Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper). */
    m_surcharge: string;
    /** Surcharge amount calculated for money transfers from account: ACH, Direct Entry. */
    m_surcharge_ach: string;
    /** The tax of service. */
    m_tax: string;
    /** The total cost of the purchase. */
    m_total: string;
}
export interface WlAppointmentBookPaymentPaymentPostParams {
    /** Information detailing an appointment booking: */
    a_book_data: Array<{
        /** Add-on list. Keys are add-on option keys, values are quantities. */
        a_product: Array<number>;
        /** Client prorate date. Used when the purchased promotion is prorated. */
        dl_client_prorate: string;
        /** List of class tab objects. */
        id_class_tab: number;
        /** `true` if the client wants to pay upon their visit, `false` if paying now. */
        is_pay_later: boolean;
        /** `true` if a previously purchased option is used for this booking. */
        is_purchase_previous: boolean;
        /** `true` if the client is placed on a wait list without paying. */
        is_wait_list_unpaid: boolean;
        /** Asset booking duration in minutes. Used only for asset bookings. */
        i_duration: number;
        /** Login prize key used to pay for the booking. Empty if no prize is used. */
        k_login_prize: string;
        /** Key of an already-purchased promotion used for this booking. Empty if not applicable. */
        k_login_promotion: string;
        /** Asset key. Used only for asset bookings. */
        k_resource: string;
        /** Reward prize key used to redeem a free item. Empty if not applicable. */
        k_reward_prize: string;
        /** Service key. Used only for appointment bookings. */
        k_service: string;
        /** Drop-in key. Used when booking via a drop-in pass. */
        k_session_pass: string;
        /** Tip amount for the appointment. */
        m_tip_appointment: string;
        /** Client signature for a contract. Required when the purchase option has a contract. */
        s_signature: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid). */
    id_mode: number;
    /** The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid). */
    id_purchase_item: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The item key. Depends on `id_purchase_item` property. */
    k_id: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** Gift card code. */
    text_coupon_code: string;
    /** The discount code to be applied to the purchase. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookPaymentPaymentPostResponse {
    /** The purchase item keys from the database. */
    a_purchase_item: Array<string> | null;
    /** The possible payment types an appointment can have. */
    id_pay: number;
    /** The key of activity of the purchase made. */
    k_login_activity_purchase: string;
    /** Login prize key. In case when appointment paid by reward prize, there is the key of redeemed logi... */
    k_login_prize: string;
}
export interface WlAppointmentBookPaymentPaymentMultipleGetParams {
    /** The booking process information: */
    a_book_data: Array<{
        /** The batch of appointments to be booked. Each element has the next values: */
        a_provider: {
            /** The add-on list. Keys are add-on option keys. */
            a_product: Record<string, unknown>;
            /** The asset duration in minutes. This won't be empty for asset bookings. */
            i_duration: number;
            /** A list of purchase types. */
            id_purchase_item: number;
            /** This will be `true` if the customer wants to pay upon their visit. Otherwise, this will be `false` */
            is_pay_later: boolean;
            /** This will be `true` if the Purchase Option that was selected for another appointment from the batch */
            is_purchase_previous: boolean;
            /** This will be `true` if the customer is booked into the wait list and doesn't have to pay. */
            is_wait_list_unpaid: boolean;
            /** The key of the purchase item. */
            k_id: string;
            /** The key of the customer's prize used to pay for the booking. This won't be empty for bookings mad... */
            k_login_prize: string;
            /** The key of the Purchase Option. This won't be empty when using a Purchase Option that's already b... */
            k_login_promotion: string;
            /** The key of the asset booking. */
            k_resource: string;
            /** The key of the appointment booking service. */
            k_service: string;
            /** The signature for the Purchase Option contract. */
            s_signature: string;
            /** User's key. */
            uid?: string;
        };
        /** List of class tab objects. */
        id_class_tab: number;
        /** The tips amount. */
        m_tip_appointment: string;
    }>;
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The ID of the source mode. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The gift card code. */
    text_coupon_code: string;
    /** The discount code. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookPaymentPaymentMultipleGetResponse {
    a_promotion_data: Array<{
        /** The visit count limit of the promotion. */
        i_limit: number;
        /** The count of remaining visits. */
        i_remain: number;
        /** The expiration date. */
        s_expire: string;
        /** The title of the promotion. */
        s_title: string;
    }>;
    a_purchase: Array<{
        /** A list of taxes to apply containing information about taxes. */
        a_tax: {
            /** The tax rate. */
            m_tax: string;
            /** The name of the tax. */
            text_title: string;
        };
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The value of the discount used for the purchase. */
        k_id: string;
        /** The value of the discount used for the purchase. */
        m_discount: string;
        /** The payment for the promotion (or single visit) without taxes. */
        m_pay: string;
        /** The price of the promotion (or single visit). */
        m_price: string;
    }>;
    /** The list of amounts to pay for appointments from the batch, with taxes and without surcharges. */
    a_total: Array<string>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The gift card amount. */
    m_coupon: string;
    /** The discount amount. */
    m_discount: string;
    /** Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper). */
    m_surcharge: string;
    /** Surcharge amount calculated for money transfers from account: ACH, Direct Entry. */
    m_surcharge_ach: string;
    /** The amount of tax to pay. */
    m_tax: string;
    /** The price of the service, with taxes and without surcharges. */
    m_total: string;
}
export interface WlAppointmentBookPaymentPaymentMultiplePostParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The ID of the source mode. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The gift card code. */
    text_coupon_code: string;
    /** The discount code. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookPaymentPaymentMultiplePostResponse {
    /** The list of redeemed prizes. */
    a_login_prize: Array<string>;
    /** The payment type for the appointment. One of the [RsAppointmentPaySid](#/components/schemas/RsApp... */
    a_pay: Array<number>;
    /** The keys of purchased items. */
    a_purchase_item: Array<Array<string>> | null;
    /** Key of the activity for the purchase made. This will be empty if no purchase has been made. */
    k_login_activity_purchase: string;
}
export interface WlAppointmentBookPaymentPaymentPostGetParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid). */
    id_mode: number;
    /** The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid). */
    id_purchase_item: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The item key. Depends on [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json) property. */
    k_id: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** The login promotion key. */
    k_login_promotion: string;
    /** Session pass key. */
    k_session_pass: string;
    /** Variable price. Is set only during booking an appointment with variable type of the price */
    m_variable_price: string;
    /** Service unique key. */
    s_unique_key: string;
    /** Gift card code. */
    text_coupon_code: string;
    /** The discount code to be applied to the purchase. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
    /** The business key. Currently used only with [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json... */
    k_business?: string | null;
}
export interface WlAppointmentBookPaymentPaymentPostGetResponse {
    a_promotion_data: Array<{
        /** The limit of total visits. */
        i_limit: number;
        /** The number of remaining visits. */
        i_remain: number;
        /** The expiration date. */
        s_expire: string;
        /** The title of the Purchase Option. */
        s_title: string;
    }>;
    a_purchase: Array<{
        /** Contains information about taxes in the following format. A list of taxes to apply. */
        a_tax: {
            /** The tax rate. */
            m_tax: string;
            /** The name of the tax. */
            text_title: string;
        };
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The value of the discount used for the purchase. */
        k_id: string;
        /** The value of the discount used for the purchase. */
        m_discount: string;
        /** The discount amount for the client type of one purchase item. */
        m_discount_login: string;
        /** The payment for the Purchase Option or single visit without taxes. */
        m_pay: string;
        /** The price of the Purchase Option or single visit. */
        m_price: string;
    }>;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** Gift card amount. */
    m_coupon: string;
    /** Discount amount. */
    m_discount: string;
    /** Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper). */
    m_surcharge: string;
    /** Surcharge amount calculated for money transfers from account: ACH, Direct Entry. */
    m_surcharge_ach: string;
    /** The tax of service. */
    m_tax: string;
    /** The total cost of the purchase. */
    m_total: string;
}
export interface WlAppointmentBookPaymentPaymentPostPostParams {
    /** List of user keys to book appointments. */
    a_uid: Array<string>;
    /** The key of source mode. A constant of [ModeSid](#/components/schemas/Wl.Mode.ModeSid). */
    id_mode: number;
    /** The purchase item ID. A constant of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemSid). */
    id_purchase_item: number;
    /** If `true`, the client is a walk-in. Otherwise, this will be `false`. */
    is_walk_in: boolean;
    /** The item key. Depends on [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json) property. */
    k_id: string;
    /** Location to show available appointment booking schedule. */
    k_location: string;
    /** Gift card code. */
    text_coupon_code: string;
    /** The discount code to be applied to the purchase. */
    text_discount_code: string;
    /** The user key. */
    uid: string;
}
export interface WlAppointmentBookPaymentPaymentPostPostResponse {
    /** The purchase item keys from the database. */
    a_purchase_item: Array<string> | null;
    /** The possible payment types an appointment can have. */
    id_pay: number;
    /** The key of activity of the purchase made. */
    k_login_activity_purchase: string;
    /** Login prize key. In case when appointment paid by reward prize, there is the key of redeemed logi... */
    k_login_prize: string;
}
export interface WlAppointmentBookQuestionQuestionParams {
    /** The service key used for retrieving questions. */
    k_service: string;
}
export interface WlAppointmentBookQuestionQuestionResponse {
    a_question: Array<{
        /** Number of text rows for the answer input. Values greater than 1 indicate a multi-line answer. */
        i_size: number;
        /** `true` if `i_size` is greater than 1, `false` otherwise. */
        is_multiple: boolean;
        /** SHA1 hash of the question text, used as a unique identifier for the question. */
        s_key: string;
        /** Question text. */
        s_question: string;
    }>;
}
export interface WlAppointmentBookStaffListParams {
    /** The date/time of the appointment selected by user, in the location's time zone. */
    dt_date: string;
    /** User role by whom this api called. */
    id_role: number;
    /** `true` - returns service categories that have no staff members available to conduct them. */
    is_unavailable: boolean;
    /** Key of appointment which must be ignored when searches available staff. */
    k_appointment_ignore: string;
    /** The key of the location. */
    k_location: string;
    /** The key of a service for which to show information. */
    k_service: string;
    /** Custom appointment duration in minutes. */
    i_duration_custom?: number | null;
    /** User's timezone. */
    k_timezone?: string | null;
    /** The user key for whom the service is booking. */
    uid?: string | null;
}
export interface WlAppointmentBookStaffListResponse {
    a_staff: Array<{
        /** String identifiers for gender. */
        id_gender: number;
        /** Whether staff member is available for booking. Note, if staff member reached daily limits, this f... */
        is_available: boolean;
        /** Whether staff member reached daily limits on number or total duration of the appointments for one... */
        is_daily_limit: boolean;
        /** Whether staff member available only for wait list booking. */
        is_wait_list: boolean;
        /** @deprecated Legacy staff key.  Returned only for allow-listed apps. */
        k_staff: string;
        /** Position of the staff member in the business. */
        s_position: string;
        /** Name of the staff member. */
        s_staff: number;
        /** UID of the staff member. */
        uid: string;
        /** Biography of the staff member. */
        xml_biography: string;
    }>;
    /** Can staff booked unavailable staff. */
    can_book_unavailable_staff: boolean;
    /** Determines whether to select the staff member's gender for the appointment. */
    has_gender: boolean;
    /** Determines whether to select staff member(s) for the appointment. */
    has_staff: boolean;
    /** Determines if the staff list has male and female members. */
    is_gender_different: boolean;
}
export interface WlAppointmentBookProductProduct62Params {
    /** The key of a location where appointment is going to be booked. */
    k_location: string;
    /** The key of a service to show information for. */
    k_service: string;
    /** The key of a user to show information for. */
    uid?: string | null;
}
export interface WlAppointmentBookProductProduct62Response {
    a_product: Array<{
        /** Information about first image connected to the product. */
        a_logo: {
            /** Height of the image. */
            i_height: number;
            /** Width of the image. */
            i_width: number;
            /** `true` mean mock instead of real image. */
            is_empty: boolean;
            /** URL on the image. */
            s_url: string;
        };
        /** Description of the product as prepared html code. */
        html_description: string;
        /** Duration that will be added to the appointment with this addon as count of minutes. */
        i_duration: number;
        /** `true` means that the duration information will be displayed for the client. */
        is_client_duration: boolean;
        /** `true` if client can purchase product, `false` if only staff can perform purchase. */
        is_online_sell: boolean;
        /** `true` means that addon increases price of the appointment. */
        is_amount: boolean;
        /** ID of the currency. */
        k_currency: string;
        /** ID of the product. */
        k_shop_product: string;
        /** ID of the product option. */
        k_shop_product_option: string;
        /** Amount that will be added to the appointment price with this addon. */
        m_amount: string;
        /** Description of the product. */
        text_description: string;
        /** Duration that will be added to the appointment with this addon as a formatted string. */
        text_duration: string;
        /** Name of the product. */
        text_title: string;
    }>;
}
export interface WlAppointmentBookProductProductParams {
    /** The key of a service to show information for. */
    k_service: string;
}
export interface WlAppointmentBookProductProductResponse {
    a_product: Array<{
        /** Information about first image connected to the product. */
        a_logo: {
            /** Height of the image. */
            i_height: number;
            /** Width of the image. */
            i_width: number;
            /** `true` mean mock instead of real image. */
            is_empty: boolean;
            /** URL on the image. */
            s_url: string;
        };
        /** Description of the product as prepared html code. */
        html_description: string;
        /** Duration that will be added to the appointment with this addon as count of minutes. */
        i_duration: number;
        /** `true` means that the duration information will be displayed for the client. */
        is_client_duration: boolean;
        /** `true` if client can purchase product, `false` if only staff can perform purchase. */
        is_online_sell: boolean;
        /** `true` means that addon increases price of the appointment. */
        is_amount: boolean;
        /** ID of the currency. */
        k_currency: string;
        /** ID of the product. */
        k_shop_product: string;
        /** ID of the product option. */
        k_shop_product_option: string;
        /** Amount that will be added to the appointment price with this addon. */
        m_amount: string;
        /** Description of the product. */
        text_description: string;
        /** Duration that will be added to the appointment with this addon as a formatted string. */
        text_duration: string;
        /** Name of the product. */
        text_title: string;
    }>;
}
export interface WlBookProcessPurchasePurchaseParams {
    /** A list of existing purchase options that were selected for previous clients (group). */
    a_login_promotion_group: Array<{
        /** Selected purchase option. */
        k_login_promotion: string;
        /** UID of the previous user. */
        uid: string;
    }>;
    /** The list of sessions being booked. */
    a_session: Array<string>;
    /** The selected sessions on the wait list that are unpaid. */
    a_session_wait_list_unpaid: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The image height in pixels. Specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
    /** The business key. */
    k_business?: string | null;
}
export interface WlBookProcessPurchasePurchaseResponse {
    a_login_prize: Array<{
        /** The price, always '0'. */
        f_price: string;
        /** Login prize remaining quantity. */
        i_count: number;
        /** The limit of sessions that can be booked with reward prize. */
        i_limit: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The key of the Purchase Option in the database. The table depends on `id_purchase_item`. */
        k_id: string;
        /** Key of login prize. */
        k_login_prize: string;
        /** The unique identifier. */
        s_value: string;
        /** User-friendly login prize description. */
        text_title: string;
    }>;
    a_login_promotion: Array<{
        /** Information about the Purchase Option with the following information: */
        a_login_promotion_info: {
            /** The number of visits the Purchase Option allows the client to make. */
            i_limit: number;
            /** The maximum number of minutes the Purchase Option can be used for. */
            i_limit_duration: number | null;
            /** The number of the remaining visits the Purchase Option has left. */
            i_remain: number;
            /** The number of minutes left in the Purchase Option. */
            i_remain_duration: number | null;
        };
        /** List of UIDs of users who share this promotion. */
        a_uid_share: Array<string>;
        /** The list of calendar restrictions of the promotion (for example, 4 per week). */
        a_visit_limit: Array<string>;
        /** Data about the shortest restriction period: */
        a_restrict: {
            /** The limit of visits for the shortest restriction period. */
            i_limit: number;
            /** The number of remaining visits for the shortest restriction period. */
            i_remain: number;
            /** The description of the shortest restriction period (for example "this week" or "for a 4 day perio... */
            text_restriction: string;
        };
        /** Data about all restriction periods given as an array, where each record has the following structure: */
        a_restrict_data: {
            /** The number of future sessions paid using this Purchase Option. */
            i_book: number;
            /** The limit of visits for the restriction period. */
            i_limit: number;
            /** The number of remaining visits for the restriction period. */
            i_remain: number;
            /** The Purchase Option's usage count. */
            i_use: number;
            /** The number of attended sessions before the last renewal. */
            i_visit_past: number;
            /** The description of restriction period (for example "this week" or "for a 4 day period"). */
            text_restriction: string;
        };
        /** The number of visits the Purchase Option allows the client to make. */
        i_limit: number;
        /** The maximum number of minutes the Purchase Option can be used for. */
        i_limit_duration: number | null;
        /** Priority of this promotion. Result of [PromotionPrioritySid::priorityGet()](#/components/schemas/... */
        i_promotion_priority: number;
        /** Program types. */
        id_program: number;
        /** If `true`, the promotion converts to another instance upon expiration. Otherwise, this will be `f... */
        is_convert: boolean;
        /** `true` if the promotion is shared with the client, `false` if the client is owner of the promotion. */
        is_shared: boolean;
        /** The login promotion key. */
        k_login_promotion: string;
        /** The list of services provided by this Purchase Option. */
        s_class_include: string;
        /** The Purchase Option description. */
        s_description: string;
        /** The Purchase Option duration. */
        s_duration: string;
        /** This is only set if `is_convert` is `true`. The title to use for the new promotion instance upon ... */
        s_promotion_convert?: string;
        /** The Purchase Option name. */
        s_title: string;
        /** If this promotion is a package, this field will contain a list of Purchase Options contained in t... */
        text_package_item: string;
    }>;
    a_purchase: Array<{
        /** A list of installment plans. Every element has the next keys: */
        a_installment_template: {
            /** The number of payments. */
            i_count: number;
            /** A class for managing time intervals. */
            id_duration: number;
            /** The number of periods specified by `id_period` between individual payments. */
            i_period: number;
            /** The payment currency key. */
            k_currency: string;
            /** The key of the installment plan template. */
            k_pay_installment_template: string;
            /** The amount of the installment plan. */
            m_amount: string;
            /** The title of the installment plan. */
            s_duration: string;
        };
        /** This is only set for Purchase Options. A list of limits on booking by the Purchase Option. Every ... */
        a_visit_limit?: {
            /** The limit description. */
            s_title: string;
        };
        /** The client prorate date. */
        dl_client_prorate: string;
        /** The price. */
        f_price: string;
        /** The price for early bookings. */
        f_price_early?: string;
        /** This is only set for Purchase Options with the 'membership' program type. The measurement unit of... */
        html_payment_period: string;
        /** The description, ready to paste in a browser. */
        html_description: string;
        /** The limit of sessions that can be booked by Purchase Options. */
        i_limit?: number;
        /** This is only set for Purchase Options with the 'membership' program type. The duration of the reg... */
        i_payment_period?: number;
        /** This is only set for purchases of single sessions. The number of sessions booked simultaneously. */
        i_session?: number;
        /** Program type categories. */
        id_program_category?: number;
        /** Program types. */
        id_program_type?: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** If `true`, the Purchase Option requires a contract assignment. Otherwise, this will be `false`. */
        is_contract?: boolean;
        /** If `true`, the Purchase Option converts to another instance upon expiration. Otherwise, this will... */
        is_convert?: boolean;
        /** If `true`, the Purchase Option is renewable. Otherwise, this will be `false`. */
        is_renew?: boolean;
        /** If `true`, the Purchase Option is renewable and the "auto-renew" option is turned on by default. ... */
        is_renew_check?: boolean;
        /** The key of the Purchase Option in the database. The table depends on `id_purchase_item`. */
        k_id: string;
        /** The key of the user's prize that can be used instead a Purchase Option to book the session. */
        k_login_prize?: string;
        /** The key of the reward prize that can be used instead a Purchase Option to book the session. */
        k_reward_prize?: string;
        /** Payment for membership prorate. Not empty only if prorate payment is required. */
        m_prorate?: string;
        /** The contract of the Purchase Option. This is only set if `is_contract` is `true`. */
        s_contract?: string;
        /** This is only set for Purchase Options with the 'membership' program type. The measurement unit of... */
        s_payment_duration?: string;
        /** This is only set if `is_convert` is `true`. The title to use for the new Purchase Option instance... */
        s_promotion_convert?: string;
        /** The title. */
        s_title: string;
        /** The unique identifier. */
        s_value: string;
    }>;
    a_reward_prize: Array<{
        /** The price, always '0'. */
        f_price: string;
        /** The limit of sessions that can be booked with reward prize. */
        i_limit: number;
        /** Prize price in points. */
        i_score: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The key of the Purchase Option in the database. The table depends on `id_purchase_item`. */
        k_id: string;
        /** Key of redeemable prize. */
        k_reward_prize: string;
        /** The unique identifier. */
        s_value: string;
        /** User-friendly prize description. */
        text_title: string;
    }>;
    a_session_pass: Array<{
        /** Number of remaining visits on session pass. */
        i_remain: number;
        /** Session pass key. */
        k_session_pass: string;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** Session pass title. */
        s_title: string;
    }>;
    /** Indicates if the drop-in rate should be the default promotion. */
    is_single_default: boolean;
    /** The default Purchase Option key. */
    k_promotion_default: string;
}
export interface WlBookProcessPurchasePurchaseElementGroupParams {
    /** A list of purchase items. Each item is an associative array with the following keys: */
    a_purchase_item: Array<{
        /** Number of sessions which are booked simultaneously. */
        i_session?: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The key of the purchase item in the database. */
        k_id: string;
        /** The key of the user's prize. */
        k_login_prize?: string;
        /** Installment template key. */
        k_pay_installment_template?: string | null;
        /** The key of the reward prize. */
        k_reward_prize?: string;
        /** The key of the user for whom the purchase item is being bought. */
        uid: string;
    }>;
    /** The key of the session to check for booking availability. */
    k_class_period: string;
    /** The key of the location in which the purchase is made. */
    k_location: string;
    /** The discount code. */
    text_discount_code: string;
    /** The key of the current user. */
    uid: string;
    /** Date/time of session is booking. */
    dtu_date?: string | null;
}
export interface WlBookProcessPurchasePurchaseElementGroupResponse {
    /** A list of taxes for the given purchase options. */
    a_tax: Array<string>;
    /** The total cost of the given purchase options. */
    m_cost: string;
    /** The amount of the whole discount for the given purchase options. */
    m_discount: string;
    /** The discount amount provided by a discount code for the given purchase options. */
    m_discount_code: string;
    /** The discount amount for the client type for the given purchase options. */
    m_discount_login: string;
    /** The price of the given purchase options (with or without taxes, depending on regional standards). */
    m_price: string;
    /** The amount of subtotal for the given purchase options. */
    m_subtotal: string;
    /** The amount of taxes for the given purchase options. */
    m_tax: string;
}
export interface WlBookProcessPurchasePurchase56Params {
    /** A list of existing purchase options that were selected for previous clients (group). */
    a_login_promotion_group: Array<{
        /** Selected purchase option. */
        k_login_promotion: string;
        /** UID of the previous user. */
        uid: string;
    }>;
    /** The list of sessions being booked. */
    a_session: Array<string>;
    /** The selected sessions on the wait list that are unpaid. */
    a_session_wait_list_unpaid: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The image height in pixels. Specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** The image width in pixels. Specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Determines if the client must authorize the credit card. */
    is_card_authorize: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** A list of existing purchase options that were selected for previous clients (group). */
    json_login_promotion_group: string;
    /** The selected sessions. */
    json_session: string;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
    /** The business key. */
    k_business?: string | null;
}
export interface WlBookProcessPurchasePurchase56Response {
    a_login_prize: Array<{
        /** The price, always '0'. */
        f_price: string;
        /** Login prize remaining quantity. */
        i_count: number;
        /** The limit of sessions that can be booked with reward prize. */
        i_limit: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The key of the Purchase Option in the database. The table depends on `id_purchase_item`. */
        k_id: string;
        /** Key of login prize. */
        k_login_prize: string;
        /** The unique identifier. */
        s_value: string;
        /** User-friendly login prize description. */
        text_title: string;
    }>;
    a_login_promotion: Array<{
        /** Information about the Purchase Option with the following information: */
        a_login_promotion_info: {
            /** The number of visits the Purchase Option allows the client to make. */
            i_limit: number;
            /** The maximum number of minutes the Purchase Option can be used for. */
            i_limit_duration: number | null;
            /** The number of the remaining visits the Purchase Option has left. */
            i_remain: number;
            /** The number of minutes left in the Purchase Option. */
            i_remain_duration: number | null;
        };
        /** List of UIDs of users who share this promotion. */
        a_uid_share: Array<string>;
        /** The list of calendar restrictions of the promotion (for example, 4 per week). */
        a_visit_limit: Array<string>;
        /** Data about the shortest restriction period: */
        a_restrict: {
            /** The limit of visits for the shortest restriction period. */
            i_limit: number;
            /** The number of remaining visits for the shortest restriction period. */
            i_remain: number;
            /** The description of the shortest restriction period (for example "this week" or "for a 4 day perio... */
            text_restriction: string;
        };
        /** Data about all restriction periods given as an array, where each record has the following structure: */
        a_restrict_data: {
            /** The number of future sessions paid using this Purchase Option. */
            i_book: number;
            /** The limit of visits for the restriction period. */
            i_limit: number;
            /** The number of remaining visits for the restriction period. */
            i_remain: number;
            /** The Purchase Option's usage count. */
            i_use: number;
            /** The number of attended sessions before the last renewal. */
            i_visit_past: number;
            /** The description of restriction period (for example "this week" or "for a 4 day period"). */
            text_restriction: string;
        };
        /** The number of visits the Purchase Option allows the client to make. */
        i_limit: number;
        /** The maximum number of minutes the Purchase Option can be used for. */
        i_limit_duration: number | null;
        /** Priority of this promotion. Result of [PromotionPrioritySid::priorityGet()](#/components/schemas/... */
        i_promotion_priority: number;
        /** Program types. */
        id_program: number;
        /** If `true`, the promotion converts to another instance upon expiration. Otherwise, this will be `f... */
        is_convert: boolean;
        /** `true` if the promotion is shared with the client, `false` if the client is owner of the promotion. */
        is_shared: boolean;
        /** The login promotion key. */
        k_login_promotion: string;
        /** The list of services provided by this Purchase Option. */
        s_class_include: string;
        /** The Purchase Option description. */
        s_description: string;
        /** The Purchase Option duration. */
        s_duration: string;
        /** This is only set if `is_convert` is `true`. The title to use for the new promotion instance upon ... */
        s_promotion_convert?: string;
        /** The Purchase Option name. */
        s_title: string;
        /** If this promotion is a package, this field will contain a list of Purchase Options contained in t... */
        text_package_item: string;
    }>;
    a_purchase: Array<{
        /** A list of installment plans. Every element has the next keys: */
        a_installment_template: {
            /** The number of payments. */
            i_count: number;
            /** A class for managing time intervals. */
            id_duration: number;
            /** The number of periods specified by `id_period` between individual payments. */
            i_period: number;
            /** The payment currency key. */
            k_currency: string;
            /** The key of the installment plan template. */
            k_pay_installment_template: string;
            /** The amount of the installment plan. */
            m_amount: string;
            /** The title of the installment plan. */
            s_duration: string;
        };
        /** This is only set for Purchase Options. A list of limits on booking by the Purchase Option. Every ... */
        a_visit_limit?: {
            /** The limit description. */
            s_title: string;
        };
        /** The client prorate date. */
        dl_client_prorate: string;
        /** The price. */
        f_price: string;
        /** The price for early bookings. */
        f_price_early?: string;
        /** This is only set for Purchase Options with the 'membership' program type. The measurement unit of... */
        html_payment_period: string;
        /** The description, ready to paste in a browser. */
        html_description: string;
        /** The limit of sessions that can be booked by Purchase Options. */
        i_limit?: number;
        /** This is only set for Purchase Options with the 'membership' program type. The duration of the reg... */
        i_payment_period?: number;
        /** This is only set for purchases of single sessions. The number of sessions booked simultaneously. */
        i_session?: number;
        /** Program type categories. */
        id_program_category?: number;
        /** Program types. */
        id_program_type?: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** If `true`, the Purchase Option requires a contract assignment. Otherwise, this will be `false`. */
        is_contract?: boolean;
        /** If `true`, the Purchase Option converts to another instance upon expiration. Otherwise, this will... */
        is_convert?: boolean;
        /** If `true`, the Purchase Option is renewable. Otherwise, this will be `false`. */
        is_renew?: boolean;
        /** If `true`, the Purchase Option is renewable and the "auto-renew" option is turned on by default. ... */
        is_renew_check?: boolean;
        /** The key of the Purchase Option in the database. The table depends on `id_purchase_item`. */
        k_id: string;
        /** The key of the user's prize that can be used instead a Purchase Option to book the session. */
        k_login_prize?: string;
        /** The key of the reward prize that can be used instead a Purchase Option to book the session. */
        k_reward_prize?: string;
        /** Payment for membership prorate. Not empty only if prorate payment is required. */
        m_prorate?: string;
        /** The contract of the Purchase Option. This is only set if `is_contract` is `true`. */
        s_contract?: string;
        /** This is only set for Purchase Options with the 'membership' program type. The measurement unit of... */
        s_payment_duration?: string;
        /** This is only set if `is_convert` is `true`. The title to use for the new Purchase Option instance... */
        s_promotion_convert?: string;
        /** The title. */
        s_title: string;
        /** The unique identifier. */
        s_value: string;
    }>;
    a_reward_prize: Array<{
        /** The price, always '0'. */
        f_price: string;
        /** The limit of sessions that can be booked with reward prize. */
        i_limit: number;
        /** Prize price in points. */
        i_score: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The key of the Purchase Option in the database. The table depends on `id_purchase_item`. */
        k_id: string;
        /** Key of redeemable prize. */
        k_reward_prize: string;
        /** The unique identifier. */
        s_value: string;
        /** User-friendly prize description. */
        text_title: string;
    }>;
    a_session_pass: Array<{
        /** Number of remaining visits on session pass. */
        i_remain: number;
        /** Session pass key. */
        k_session_pass: string;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** Session pass title. */
        s_title: string;
    }>;
    /** Indicates if the drop-in rate should be the default promotion. */
    is_single_default: boolean;
    /** The default Purchase Option key. */
    k_promotion_default: string;
}
export interface WlBookProcessPurchasePurchaseElementParams {
    /** The number of sessions which are booked simultaneously. */
    i_session: number;
    /** The ID of the purchase item type. One of [RsPurchaseItemSid](#/components/schemas/RsPurchaseItemS... */
    id_purchase_item: number;
    /** The key of the session to check for booking availability. */
    k_class_period: string;
    /** The key of the purchase item in the database. */
    k_id: string;
    /** The key of the location in which the purchase is made. */
    k_location: string;
    /** The key of the user's prize. */
    k_login_prize: string;
    /** The key of the reward prize. */
    k_reward_prize: string;
    /** The discount code. */
    text_discount_code: string;
    /** The key of the current user. */
    uid: string;
    /** Date/time of session is booking. */
    dtu_date?: string | null;
    /** Installment template key. */
    k_pay_installment_template?: string | null;
}
export interface WlBookProcessPurchasePurchaseElementResponse {
    /** A list of taxes for the given purchase options. */
    a_tax: Array<string>;
    /** The total cost of the given purchase options. */
    m_cost: string;
    /** The amount of the whole discount for the given purchase options. */
    m_discount: string;
    /** The discount amount provided by a discount code for the given purchase options. */
    m_discount_code: string;
    /** The discount amount for the client type for the given purchase options. */
    m_discount_login: string;
    /** The price of the given purchase options (with or without taxes, depending on regional standards). */
    m_price: string;
    /** The amount of subtotal for the given purchase options. */
    m_subtotal: string;
    /** The amount of taxes for the given purchase options. */
    m_tax: string;
}
export interface WlBookProcessPurchasePurchaseElementListParams {
    /** A list of purchase items to get information for. Every element has the next keys: */
    a_purchase_item_request: Array<{
        /** The number of sessions booked simultaneously. */
        i_session?: number;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The key of the purchase item in the database. The name of the table in the database depends on `i... */
        k_id: string;
        /** The key of the user's prize. */
        k_login_prize?: string;
    }>;
    /** The key of the business in which the purchase is made. */
    k_business: string;
    /** The discount code. */
    text_discount_code: string;
    /** The key of the user making the purchase. */
    uid: string;
    /** The key of the location in which the purchase is made. */
    k_location?: string | null;
}
export interface WlBookProcessPurchasePurchaseElementListResponse {
    a_purchase_item_result: Array<{
        /** Information about taxes. The key refers to the tax key, and the value refers to the tax amount. */
        a_tax: Array<string>;
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The key of the purchase item in the database. */
        k_id: string;
        /** The cost of the purchase item (with taxes). */
        m_cost: string;
        /** The amount of the whole discount. */
        m_discount: string;
        /** The amount of the discount for the client type. */
        m_discount_login: string;
        /** The price of the purchase item (with or without taxes, depending on regional standards). */
        m_price: string;
        /** The amount of taxes for the purchase item. */
        m_tax: string;
    }>;
}
export interface WlBookProcessRelationRelationGetParams {
    /** List of check that must be skipped. */
    a_check_ignore: Array<number>;
    /** The date/time of the session to check for booking availability. */
    dtu_date: string;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** The business where `uid_from` creates the new relative. */
    k_business: string;
    /** The key of the session to check for booking availability. */
    k_class_period: string;
    /** The user who's adding the new relative. */
    uid_from: string;
}
export type WlBookProcessRelationRelationGetResponse = Record<string, unknown>;
export interface WlBookProcessRelationRelationPostParams {
    /** The business where `uid_from` creates the new relative. */
    k_business: string;
    /** The user who's adding the new relative. */
    uid_from: string;
}
export interface WlBookProcessRelationRelationPostResponse {
    /** The newly added relative. */
    uid_create: string;
}
export interface WlBookProcessResourceResourceGetParams {
    /** The selected sessions. */
    a_session: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessResourceResourceGetResponse {
    a_resource_all: Array<{
        /** A list of clients who have already occupied assets for this session. */
        a_client: Array<Array<boolean>>;
        /** A list of available assets. Every element has next keys: */
        a_resource_list: {
            /** List of resources available for booking sessions. */
            a_class_period: Array<Array<unknown>>;
            /** Asset image data. */
            a_image: Record<string, unknown>;
            /** The asset number. Actual for assets with a quantity more than `1`. */
            i_index: number;
            /** Total number of the asset spots. */
            i_quantity: number;
            /** Number of already used asset units. */
            i_use: number;
            /** City for the off-site location. */
            is_current: boolean;
            /** `true` means that this asset is selected by client, `false` - otherwise. */
            k_city: string;
            /** The key of the asset in database. */
            k_resource: string;
            /** The title of the asset. */
            s_resource: string;
            /** Address for the off-site location. */
            text_address: string;
            /** Additional address tips for the off-site location. */
            text_guide: string;
            /** Postal code for the off-site location. */
            text_postal: string;
        };
        /** `true` - has current resource in the list of available assets; `false` - otherwise. */
        has_current: boolean;
        /** List of resource categories. */
        id_category: number;
        /** `true` - the client selected the resource from the current group; `false` otherwise. */
        is_client_select: boolean;
        /** `true` - has selected resources; `false` - otherwise. */
        is_select: boolean;
        /** `true` resources in this category don't belong to certain users, but to the entire session. */
        is_share: boolean;
        /** The key of the asset layout. */
        k_resource_layout: string;
        /** The key of the asset category. */
        k_resource_type: string;
        /** The title of the asset category. */
        s_resource_type: string;
    }>;
}
export interface WlBookProcessResourceResourcePostParams {
    /** The selected sessions. */
    a_session: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessResourceResourcePostResponse {
    /** The keys of a user's activity. */
    a_login_activity: Array<string>;
    /** The keys of the bookings that have been made. */
    a_visit: Array<string>;
    /** `true` - the next steps of the booking wizard are required (for example, to purchase something to... */
    is_next: boolean;
}
export interface WlBookProcessResourceResource54GetParams {
    /** The selected sessions. */
    a_session: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Selected sessions. */
    json_session: string;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessResourceResource54GetResponse {
    a_resource_all: Array<{
        /** A list of clients who have already occupied assets for this session. */
        a_client: Array<Array<boolean>>;
        /** A list of available assets. Every element has next keys: */
        a_resource_list: {
            /** List of resources available for booking sessions. */
            a_class_period: Array<Array<unknown>>;
            /** Asset image data. */
            a_image: Record<string, unknown>;
            /** The asset number. Actual for assets with a quantity more than `1`. */
            i_index: number;
            /** Total number of the asset spots. */
            i_quantity: number;
            /** Number of already used asset units. */
            i_use: number;
            /** City for the off-site location. */
            is_current: boolean;
            /** `true` means that this asset is selected by client, `false` - otherwise. */
            k_city: string;
            /** The key of the asset in database. */
            k_resource: string;
            /** The title of the asset. */
            s_resource: string;
            /** Address for the off-site location. */
            text_address: string;
            /** Additional address tips for the off-site location. */
            text_guide: string;
            /** Postal code for the off-site location. */
            text_postal: string;
        };
        /** `true` - has current resource in the list of available assets; `false` - otherwise. */
        has_current: boolean;
        /** List of resource categories. */
        id_category: number;
        /** `true` - the client selected the resource from the current group; `false` otherwise. */
        is_client_select: boolean;
        /** `true` - has selected resources; `false` - otherwise. */
        is_select: boolean;
        /** `true` resources in this category don't belong to certain users, but to the entire session. */
        is_share: boolean;
        /** The key of the asset layout. */
        k_resource_layout: string;
        /** The key of the asset category. */
        k_resource_type: string;
        /** The title of the asset category. */
        s_resource_type: string;
    }>;
}
export interface WlBookProcessResourceResource54PostParams {
    /** The selected sessions. */
    a_session: Array<string>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Selected sessions. */
    json_session: string;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessResourceResource54PostResponse {
    /** The keys of a user's activity. */
    a_login_activity: Array<string>;
    /** The keys of the bookings that have been made. */
    a_visit: Array<string>;
    /** `true` - the next steps of the booking wizard are required (for example, to purchase something to... */
    is_next: boolean;
}
export interface WlBookProcessPaymentPaymentParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessPaymentPaymentResponse {
    /** Keys of the user's activity which correspond to bookings made. */
    a_login_activity_book: Array<string>;
    /** The keys of bookings made. */
    a_visit: Array<string>;
    /** The keys of the user's activity corresponding to the purchase made. This won't be empty when the ... */
    k_login_activity_purchase: string;
}
export interface WlBookProcessStoreStoreParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessStoreStoreResponse {
    /** The keys for the user's activities. This will be populated upon completion of the booking process. */
    a_login_activity: Array<string>;
    /** The keys of the bookings that have been made. */
    a_visit: Array<string>;
    /** If `true`, the next steps of the booking wizard are required to purchase an item or book the sele... */
    is_next: boolean;
}
export interface WlBookProcessStoreStoreGroupParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
}
export interface WlBookProcessStoreStoreGroupResponse {
    a_purchase_item_distribute: Array<{
        /** List of UIDs of owners who will share this promotion with this client. */
        a_owner: Array<string>;
        /** The number of sessions that this item can cover. */
        i_session: number;
        /** Login promotion key. */
        k_login_promotion: string | null;
        /** Session pass key. */
        k_session_pass: string | null;
        /** The unique identifier of the purchase item. */
        s_value: string | null;
        /** Error text if the purchase item cannot be applied to the current class or event for this client. */
        text_error: string;
        /** Error code if the purchase item cannot be applied to the current class or event for this client. */
        text_error_code: string;
    }>;
}
export interface WlBookProcessInfoInfoGetParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` if class capacity should be shown, */
    show_class_capacity: boolean;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessInfoInfoGetResponse {
    /** Week days available for recurring booking. Constants of [ADateWeekSid](#/components/schemas/ADate... */
    a_day_available: Array<number> | null;
    a_session_all: Array<{
        /** List of staff names that are leading this session. */
        a_staff: Array<string>;
        /** List of virtual locations. */
        a_virtual_location: Array<string>;
        /** The date/time when session starts in MySQL format and in GMT. */
        dt_date: string;
        /** Total number of clients on the active list. */
        i_active: number;
        /** Total capacity of the active list. */
        i_active_limit: number;
        /** Duration of a service. */
        i_duration: number;
        /** Total number of clients on the wait list. */
        i_wait: number;
        /** Total capacity the wait list. `null` if wail list in unlimited. `0` if wait list is disabled. */
        i_wait_limit: number | null;
        /** `true` if this session should be selected when page is initialized; */
        is_select: boolean;
        /** `true` if client is added to a wait list, `false` - to an active list. */
        is_wait: boolean;
        /** Allow clients to join the wait list unpaid. */
        is_wait_list_unpaid: boolean;
        /** The key of the session. */
        k_class_period: string;
        /** Location key. */
        k_location: string;
        /** Price of the session. */
        m_price: string;
        /** The name of the location where the session occurred. */
        s_location: string;
        /** The date/time when the session starts in human-readable format. */
        s_start: string;
        /** String representation of session duration. */
        text_duration: string;
    }>;
    a_session_free: Array<{
        /** Session date. */
        dt_date: string;
        /** Class period key for the session. */
        k_class_period: string;
    }>;
    a_staff: Array<{
        /** The staff member photo: */
        a_logo: {
            /** The image height. */
            i_height: number;
            /** The image width. */
            i_width: number;
            /** The image URL. */
            s_url: string;
        };
        /** The first letter of staff member surname. */
        s_family: string;
        /** The staff member's name. */
        s_staff: string;
        /** UID of the staff member. */
        uid_staff: string;
        /** Alias of `uid_staff` for backward compatibility. */
        uid: string;
    }>;
    /** Date when this class session occurrences stop. */
    dl_end: string;
    /** The date/time of the session the user is booking in MySQL format in the location's timezone. */
    dt_date_local: string;
    /** `true` if price for the individual session should be hidden, if client has applicable pricing opt... */
    hide_price: boolean;
    /** The text of the contract to which the user must agree before book this session. */
    html_contract: string;
    /** Class duration in human-readable format. */
    html_duration: string;
    /** The special instructions for the class. */
    html_special: string;
    /** Special instructions preview for class. */
    html_special_preview: string;
    /** Number of available spots. */
    i_available: number | null;
    /** Number of booked spots. */
    i_book: number | null;
    /** The duration of the session in minutes. */
    i_duration: number;
    /** Total number of clients on the wait list. */
    i_wait: number;
    /** Total capacity the wait list. */
    i_wait_limit: number | null;
    /** Estimated place of reservation on the waiting list. */
    i_wait_spot: number;
    /** `true` if recurring booking is available, `false` otherwise. */
    is_book_repeat_client: boolean;
    /** `true` if the setting for frequency during class recurring booking will be `never end` by default... */
    is_book_repeat_no_end_date: boolean;
    /** Can client chooses several session per booking. */
    is_event_session: boolean;
    /** `true` if need to display location phone number, `false` otherwise. */
    is_location_phone: boolean;
    /** `true` if event can be paid with pricing option only. */
    is_promotion_only: boolean;
    /** Whether the class can be paid with single session. */
    is_single_buy: boolean;
    /** Whether the full text of the special instructions fits within the preview length or not. */
    is_special_preview: boolean;
    /** `true` if class is virtual, `false` otherwise. */
    is_virtual: boolean;
    /** Class period location key. */
    k_location: string;
    /** Price of the session. */
    m_price: string;
    /** Whole event cost. */
    m_price_total: string;
    /** Event price at an early discount. */
    m_price_total_early: string;
    /** The class title. */
    s_class: string;
    /** The location address. */
    s_location_address: string;
    /** The location title. */
    s_location_title: string;
    /** The time when the session takes place in the location's time zone. In format `hh:mm`. */
    s_time: string;
    /** Location phone number. */
    text_location_phone: string;
    /** Room where session takes place. */
    text_room: string;
    /** Text representation of the list of staffs. */
    text_staff: string;
    /** Timezone abbreviation. */
    text_timezone: string;
}
export interface WlBookProcessInfoInfoPostParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessInfoInfoPostResponse {
    /** The keys of users' activity. */
    a_login_activity: Array<string>;
    /** The keys of the bookings made. */
    a_visit: Array<string>;
    a_visit_payment: Array<{
        /** `true` if the visit is free; `false` otherwise. */
        is_free: boolean;
        /** Applied user's purchase option. */
        k_login_promotion: string;
        /** Purchase option. */
        k_promotion: string;
        /** Applied session pass. */
        k_session_pass: string;
        /** Purchase option title. */
        text_promotion: string;
    }>;
    /** If client must authorize credit card. */
    is_card_authorize: boolean;
    /** Can the class/event be booked immediately or not. */
    is_force_book: boolean;
    /** `true` - next steps of the wizard are needed (for example, to purchase something to book the sele... */
    is_next: boolean;
}
export interface WlBookProcessInfoInfo54GetParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` if class capacity should be shown, */
    show_class_capacity: boolean;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessInfoInfo54GetResponse {
    /** Week days available for recurring booking. Constants of [ADateWeekSid](#/components/schemas/ADate... */
    a_day_available: Array<number> | null;
    a_session_all: Array<{
        /** List of staff names that are leading this session. */
        a_staff: Array<string>;
        /** List of virtual locations. */
        a_virtual_location: Array<string>;
        /** The date/time when session starts in MySQL format and in GMT. */
        dt_date: string;
        /** Total number of clients on the active list. */
        i_active: number;
        /** Total capacity of the active list. */
        i_active_limit: number;
        /** Duration of a service. */
        i_duration: number;
        /** Total number of clients on the wait list. */
        i_wait: number;
        /** Total capacity the wait list. `null` if wail list in unlimited. `0` if wait list is disabled. */
        i_wait_limit: number | null;
        /** `true` if this session should be selected when page is initialized; */
        is_select: boolean;
        /** `true` if client is added to a wait list, `false` - to an active list. */
        is_wait: boolean;
        /** Allow clients to join the wait list unpaid. */
        is_wait_list_unpaid: boolean;
        /** The key of the session. */
        k_class_period: string;
        /** Location key. */
        k_location: string;
        /** Price of the session. */
        m_price: string;
        /** The name of the location where the session occurred. */
        s_location: string;
        /** The date/time when the session starts in human-readable format. */
        s_start: string;
        /** String representation of session duration. */
        text_duration: string;
    }>;
    a_session_free: Array<{
        /** Session date. */
        dt_date: string;
        /** Class period key for the session. */
        k_class_period: string;
    }>;
    a_staff: Array<{
        /** The staff member photo: */
        a_logo: {
            /** The image height. */
            i_height: number;
            /** The image width. */
            i_width: number;
            /** The image URL. */
            s_url: string;
        };
        /** The first letter of staff member surname. */
        s_family: string;
        /** The staff member's name. */
        s_staff: string;
        /** UID of the staff member. */
        uid_staff: string;
        /** Alias of `uid_staff` for backward compatibility. */
        uid: string;
    }>;
    /** Date when this class session occurrences stop. */
    dl_end: string;
    /** The date/time of the session the user is booking in MySQL format in the location's timezone. */
    dt_date_local: string;
    /** `true` if price for the individual session should be hidden, if client has applicable pricing opt... */
    hide_price: boolean;
    /** The text of the contract to which the user must agree before book this session. */
    html_contract: string;
    /** Class duration in human-readable format. */
    html_duration: string;
    /** The special instructions for the class. */
    html_special: string;
    /** Special instructions preview for class. */
    html_special_preview: string;
    /** Number of available spots. */
    i_available: number | null;
    /** Number of booked spots. */
    i_book: number | null;
    /** The duration of the session in minutes. */
    i_duration: number;
    /** Total number of clients on the wait list. */
    i_wait: number;
    /** Total capacity the wait list. */
    i_wait_limit: number | null;
    /** Estimated place of reservation on the waiting list. */
    i_wait_spot: number;
    /** `true` if recurring booking is available, `false` otherwise. */
    is_book_repeat_client: boolean;
    /** `true` if the setting for frequency during class recurring booking will be `never end` by default... */
    is_book_repeat_no_end_date: boolean;
    /** Can client chooses several session per booking. */
    is_event_session: boolean;
    /** `true` if need to display location phone number, `false` otherwise. */
    is_location_phone: boolean;
    /** `true` if event can be paid with pricing option only. */
    is_promotion_only: boolean;
    /** Whether the class can be paid with single session. */
    is_single_buy: boolean;
    /** Whether the full text of the special instructions fits within the preview length or not. */
    is_special_preview: boolean;
    /** `true` if class is virtual, `false` otherwise. */
    is_virtual: boolean;
    /** Class period location key. */
    k_location: string;
    /** Price of the session. */
    m_price: string;
    /** Whole event cost. */
    m_price_total: string;
    /** Event price at an early discount. */
    m_price_total_early: string;
    /** The class title. */
    s_class: string;
    /** The location address. */
    s_location_address: string;
    /** The location title. */
    s_location_title: string;
    /** The time when the session takes place in the location's time zone. In format `hh:mm`. */
    s_time: string;
    /** Location phone number. */
    text_location_phone: string;
    /** Room where session takes place. */
    text_room: string;
    /** Text representation of the list of staffs. */
    text_staff: string;
    /** Timezone abbreviation. */
    text_timezone: string;
}
export interface WlBookProcessInfoInfo54PostParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessInfoInfo54PostResponse {
    /** The keys of users' activity. */
    a_login_activity: Array<string>;
    /** The keys of the bookings made. */
    a_visit: Array<string>;
    a_visit_payment: Array<{
        /** `true` if the visit is free; `false` otherwise. */
        is_free: boolean;
        /** Applied user's purchase option. */
        k_login_promotion: string;
        /** Purchase option. */
        k_promotion: string;
        /** Applied session pass. */
        k_session_pass: string;
        /** Purchase option title. */
        text_promotion: string;
    }>;
    /** If client must authorize credit card. */
    is_card_authorize: boolean;
    /** Can the class/event be booked immediately or not. */
    is_force_book: boolean;
    /** `true` - next steps of the wizard are needed (for example, to purchase something to book the sele... */
    is_next: boolean;
}
export interface WlBookProcessInfoInfoCanCompleteGetParams {
    /** A list of sessions of an event that can be booked together. */
    a_session_select: Array<{
        /** The date and time in MySQL format in GMT when the session starts. */
        dt_date: string;
        /** `true` if this session should be booked, `false` otherwise. */
        is_select: boolean;
        /** The class period key. */
        k_class_period: string;
    }>;
    /** The date and time of the session that the user is booking, returned in MySQL format and in GMT. */
    dt_date_gmt: string;
    /** The class period ID that the user started to book. */
    k_class_period: string;
    /** The unique booking process key. */
    s_id: string;
    /** The key of a user who is making the booking. */
    uid: string;
    /** Key of the business in which the booking is performed. */
    k_business?: string | null;
}
export interface WlBookProcessInfoInfoCanCompleteGetResponse {
    /** Determines whether users can complete the booking process from the info step. */
    can_complete: boolean;
    /** `true` if price for the individual session should be hidden, if client has applicable pricing opt... */
    hide_price: boolean;
}
export interface WlBookProcessInfoInfoCanCompletePostParams {
    /** The date and time of the session that the user is booking, returned in MySQL format and in GMT. */
    dt_date_gmt: string;
    /** The class period ID that the user started to book. */
    k_class_period: string;
    /** The unique booking process key. */
    s_id: string;
    /** The key of a user who is making the booking. */
    uid: string;
    /** Key of the business in which the booking is performed. */
    k_business?: string | null;
}
export interface WlBookProcessInfoInfoCanCompletePostResponse {
    /** Determines whether users can complete the booking process from the info step. */
    can_complete: boolean;
}
export interface WlBookProcessQuizQuizGetParams {
    /** The list of purchase items. Each element has the format `[id_purchase_item]::[k_id]`, where: */
    a_purchase_item: Array<{
        /** A list of purchase types. */
        id_purchase_item: number;
        /** The item key. This depends on `id_purchase_item` of this array. */
        k_id: string;
    }>;
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessQuizQuizGetResponse {
    a_quiz: Array<{
        /** Determines whether the quiz is required. */
        is_require: boolean;
        /** The quiz key. */
        k_quiz: string;
    }>;
}
export interface WlBookProcessQuizQuizPostParams {
    /** Date/time to which session is booked. */
    dt_date_gmt: string;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** `true` if action is performed as a staff member; `false` otherwise. */
    is_backend: boolean;
    /** Checking whether the client has a credit card (if configured in the business) will be skipped if ... */
    is_credit_card_check: boolean;
    /** Key of session which is booked. */
    k_class_period: string;
    /** `true` to show "book for" option in booking wizard. `false` for default behavior. */
    show_relation: boolean;
    /** The client key for which the booking is being made. */
    uid: string;
}
export interface WlBookProcessQuizQuizPostResponse {
    /** The user's activity keys. */
    a_login_activity: Array<string>;
    /** The keys the bookings that have been made. */
    a_visit: Array<string>;
    /** If `true`, the next steps of the booking wizard are required for the purchase or booking. Otherwi... */
    is_next: boolean;
}
export interface WlBookProcessFrequencyRepeatParams {
    /** List of days of the week to create visits. Each value is a [ADateWeekSid](#/components/schemas/AD... */
    a_day: Array<number>;
    /** List of visits to be ignored. Each value is a string consisting of a class period key */
    a_visit_ignore: Array<string>;
    /** Date and time of the class, when recurring booking was called, in UTC timezone. */
    dt_date: string;
    /** Date to start recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#/... */
    dt_from: string;
    /** Date to finish recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#... */
    dt_to: string;
    /** Count of the visits to be created. Not empty only when `id_repeat_end` == [RsRepeatEndSid::COUNT]... */
    i_count: number;
    /** Count of days\weeks\months between recurring bookings. */
    i_duration: number;
    /** Recurring booking interval, one of [ADurationSid](#/components/schemas/ADurationSid) constants. */
    id_duration: number;
    /** WellnessLiving mode, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** Type of repeating, one of [RsRepeatEndSid](#/components/schemas/RsRepeatEndSid) constants. */
    id_repeat_end: number;
    /** `true` when cancelling booking, `false` otherwise. */
    is_cancel: boolean;
    /** `true` if current user is not created yet, `false` otherwise. */
    is_new_user: boolean;
    /** Business key. */
    k_business: string;
    /** Class period key. */
    k_class_period: string;
    /** Encoded list of user keys, who will attend visits. */
    s_uid: string;
    /** Key of user, who will attend visits. */
    uid: string;
    /** Key of user, who perform booking. */
    uid_actor: string;
}
export interface WlBookProcessFrequencyRepeatResponse {
    a_visit: Array<{
        /** Visit date and time in UTC. */
        dt_date: string;
        /** Visit date and time in location's time zone. */
        dt_local: string;
        /** List of names of the staff who provide this class. */
        html_short_name_list: string;
        /** Location's time zone abbreviation. */
        html_timezone: string;
        /** Number of open spots remaining for this session. `0` if the session is full. */
        i_spot: number;
        /** Whether booking is not available for this day. */
        is_disable: boolean;
        /** Whether booking is free for this day. */
        is_free: boolean;
        /** Whether visit is from ignore list. */
        is_ignore: boolean;
        /** `true` if this visit belongs to the originally selected class period's series (parent and its */
        is_selected_series: boolean;
        /** Whether booking can be only to wait list. */
        is_wait: boolean;
        /** Class period key. */
        k_class_period: string;
        /** Staff name if booking available, warning about wait list or disabled booking otherwise. */
        s_alert: string;
        /** Visit date and time in location's time zone in human-readable format. */
        s_date: string;
    }>;
    /** Date to start recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#/... */
    dt_from: string;
    /** Date to finish recurring booking. Not empty only when `id_repeat_end` == [RsRepeatEndSid::DATE](#... */
    dt_to: string;
    /** Possible ways to stop repeatable events. */
    i_count: number;
    /** Start date of repeatable period in human-readable format. */
    text_date_from: string;
    /** End date of repeatable period in human-readable format. */
    text_date_to: string;
}
export interface WlBookProcessFrequencyRepeatParallelParams {
    /** List of days of the week to create visits. Each value is a [ADateWeekSid](#/components/schemas/AD... */
    a_day: Array<number>;
    /** List of visits to be ignored. Each value is a string consisting of a class period key */
    a_visit_ignore: Array<string>;
    /** Date and time of the class, when recurring booking was called, in UTC timezone. */
    dt_date: string;
    /** Date to start recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repea... */
    dt_from: string;
    /** Date to finish recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repe... */
    dt_to: string;
    /** Count of the visits to be created. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Rep... */
    i_count: number;
    /** Count of days\weeks\months between recurring bookings. */
    i_duration: number;
    /** Recurring booking interval, one of [ADurationSid](#/components/schemas/ADurationSid) constants. */
    id_duration: number;
    /** WellnessLiving mode, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** Type of repeating, one of [RsRepeatEndSid](#/components/schemas/RsRepeatEndSid) constants. */
    id_repeat_end: number;
    /** `true` when cancelling booking, `false` otherwise. */
    is_cancel: boolean;
    /** `true` to also include sessions running in parallel at the same time and location */
    is_include_parallel: boolean;
    /** `true` if current user is not created yet, `false` otherwise. */
    is_new_user: boolean;
    /** Business key. */
    k_business: string;
    /** Class period key. */
    k_class_period: string;
    /** Encoded list of user keys, who will attend visits. */
    s_uid: string;
    /** Key of user, who will attend visits. */
    uid: string;
    /** Key of user, who perform booking. */
    uid_actor: string;
}
export interface WlBookProcessFrequencyRepeatParallelResponse {
    a_visit: Array<{
        /** Visit date and time in UTC. */
        dt_date: string;
        /** Visit date and time in location's time zone. */
        dt_local: string;
        /** List of names of the staff who provide this class. */
        html_short_name_list: string;
        /** Location's time zone abbreviation. */
        html_timezone: string;
        /** Number of open spots remaining for this session. `0` if the session is full. */
        i_spot: number;
        /** Whether booking is not available for this day. */
        is_disable: boolean;
        /** Whether booking is free for this day. */
        is_free: boolean;
        /** Whether visit is from ignore list. */
        is_ignore: boolean;
        /** `true` if this visit belongs to the originally selected class period's series (parent and its */
        is_selected_series: boolean;
        /** Whether booking can be only to wait list. */
        is_wait: boolean;
        /** Class period key. */
        k_class_period: string;
        /** Staff name if booking available, warning about wait list or disabled booking otherwise. */
        s_alert: string;
        /** Visit date and time in location's time zone in human-readable format. */
        s_date: string;
    }>;
    /** Date to start recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repea... */
    dt_from: string;
    /** Date to finish recurring booking. Not empty only when [RepeatApi](/Wl/Book/Process/Frequency/Repe... */
    dt_to: string;
    /** Possible ways to stop repeatable events. */
    i_count: number;
    /** Start date of repeatable period in human-readable format. */
    text_date_from: string;
    /** End date of repeatable period in human-readable format. */
    text_date_to: string;
}
export interface WlBookProcessGuestGuestProfileGetParams {
    /** Guest's birthday in MySQL format. Empty if service not restricted by age. */
    dl_birthday: string;
    /** Type of the service to book. */
    id_service: number;
    /** Business key. */
    k_business: string;
    /** Key of service to book. */
    k_id: string;
    /** Location key. */
    k_location: string;
    /** Guest's first name. */
    text_first_name: string;
    /** Guest's last name. */
    text_last_name: string;
    /** Guest's email. */
    text_mail: string;
}
export interface WlBookProcessGuestGuestProfileGetResponse {
    /** UID of found or created user. */
    uid: string;
}
export interface WlBookProcessGuestGuestProfilePostParams {
    /** Guest's birthday in MySQL format. Empty if service not restricted by age. */
    dl_birthday: string;
    /** Type of the service to book. */
    id_service: number;
    /** Business key. */
    k_business: string;
    /** Key of service to book. */
    k_id: string;
    /** Guest's first name. */
    text_first_name: string;
    /** Guest's last name. */
    text_last_name: string;
    /** Guest's email. */
    text_mail: string;
}
export interface WlBookProcessGuestGuestProfilePostResponse {
    /** UID of found or created user. */
    uid: string;
}
export interface WlProfileEditEmailEditEmail67GetParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key where the check must be performed. */
    k_business: string;
    /** The email address to be checked. */
    text_mail: string;
    /** The key of user whose email will be edited. */
    uid_want: string;
}
export interface WlProfileEditEmailEditEmail67GetResponse {
    /** List of business keys where a user is already a member. */
    a_business_member_key: Array<string>;
    a_user: Array<{
        /** First name. */
        text_firstname: string;
        /** Last name. */
        text_lastname: string;
        /** Phone. */
        text_phone: string;
        /** URL to photo. */
        url_photo: string;
    }>;
    /** Shows, whether client was registered in the business: `true` if user was added to the business, */
    is_added: boolean;
    /** If `true`, user is already a member of current business, `false` - otherwise. */
    is_current_member: boolean;
    /** If `true`, then the number of requests has exceeded the rate limit. Otherwise, this will be `false`. */
    is_limit: boolean;
    /** If `true`, user, who has the specified email, has password set, `false` - otherwise. */
    is_password_set: boolean;
    /** If `true`, user, who has the specified email, is staff in current business, `false` - otherwise. */
    is_staff: boolean;
    /** If `true`, user, who has the specified email, is staff in any business, `false` - otherwise. */
    is_staff_any_business: boolean;
    /** If `true`, then the specified email is in use. Otherwise, this will be `false`. */
    is_use: boolean;
    /** The key of user who has the specified email. */
    uid_result: string;
}
export interface WlProfileEditEmailEditEmail67PostParams {
    /** The business key where the check must be performed. */
    k_business: string;
    /** The key of user whose email will be edited. */
    uid_want: string;
}
export interface WlProfileEditEmailEditEmail67PostResponse {
    /** Shows, whether client was registered in the business: `true` if user was added to the business, */
    is_added: boolean;
}
export interface WlProfileEditEmailEditEmailGetParams {
    /** If `true`, the API is being used from backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The business key where the check must be performed. */
    k_business: string;
    /** The email address to be checked. */
    text_mail: string;
    /** The key of user whose email will be edited. */
    uid_want: string;
}
export interface WlProfileEditEmailEditEmailGetResponse {
    /** List of business keys where a user is already a member. */
    a_business_member_key: Array<string>;
    a_user: Array<{
        /** First name. */
        text_firstname: string;
        /** Last name. */
        text_lastname: string;
        /** Phone. */
        text_phone: string;
        /** URL to photo. */
        url_photo: string;
    }>;
    /** Shows, whether client was registered in the business: `true` if user was added to the business, */
    is_added: boolean;
    /** If `true`, user is already a member of current business, `false` - otherwise. */
    is_current_member: boolean;
    /** If `true`, then the number of requests has exceeded the rate limit. Otherwise, this will be `false`. */
    is_limit: boolean;
    /** If `true`, user, who has the specified email, has password set, `false` - otherwise. */
    is_password_set: boolean;
    /** If `true`, user, who has the specified email, is staff in current business, `false` - otherwise. */
    is_staff: boolean;
    /** If `true`, user, who has the specified email, is staff in any business, `false` - otherwise. */
    is_staff_any_business: boolean;
    /** If `true`, then the specified email is in use. Otherwise, this will be `false`. */
    is_use: boolean;
    /** The key of user who has the specified email. */
    uid_result: string;
}
export interface WlProfileEditEmailEditEmailPostParams {
    /** The business key where the check must be performed. */
    k_business: string;
    /** The key of user whose email will be edited. */
    uid_want: string;
}
export interface WlProfileEditEmailEditEmailPostResponse {
    /** Shows, whether client was registered in the business: `true` if user was added to the business, */
    is_added: boolean;
}
export interface WlProfileFormResponseResponseListParams {
    /** Defines whether completed forms should not be included in result list of forms. */
    hide_completed: boolean;
    /** Defines whether optional uncompleted forms should not be included in result list of forms. */
    hide_optional: boolean;
    /** This will be `true` if the API is being used from the backend. Otherwise, this will be `false`. */
    is_backend: boolean;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the user to show information for. */
    uid: string;
}
export interface WlProfileFormResponseResponseListResponse {
    a_quiz_login: Array<{
        /** List of visit keys associated with uncompleted response. */
        a_visit: Array<string>;
        /** The date of the request to fill out a quiz form. */
        dtl_date: string;
        /** List of sources where quiz response can be generated. */
        id_source: number;
        /** Determines whether the form can be viewed by staff member only after confirmation. */
        is_private: boolean;
        /** The quiz key. */
        k_quiz: string;
        /** The key of the request. */
        k_quiz_login: string;
        /** Key of the response. */
        k_quiz_response: string | null;
        /** The quiz title. */
        text_title: string;
    }>;
    a_quiz_response: Array<{
        /** List of visit keys associated with uncompleted response. */
        a_visit: Array<string>;
        /** The date of the request to fill out a quiz form. */
        dtl_date: string;
        /** List of sources where quiz response can be generated. */
        id_source: number;
        /** List of response statuses. */
        id_status: number;
        /** Determines whether the form can be viewed by staff member only after confirmation. */
        is_private: boolean;
        /** The quiz key. */
        k_quiz: string;
        /** The quiz response key. */
        k_quiz_login: string;
        /** Date when response amended. */
        text_amend_date: string | null;
        /** Name of the user who amend the response. */
        text_amend_user: string | null;
        /** The quiz title. */
        text_title: string;
        /** Name of user who complete response or start a draft. */
        text_user: string;
    }>;
    /** Whether response can be amended by current user. */
    can_amend: boolean;
    /** Whether response can be filled by current user. */
    can_fill: boolean;
    /** Whether response can be removed by current user. */
    can_remove: boolean;
    /** Whether response can be viewed by current user. */
    can_view: boolean;
}
export interface WlEventBookEventViewElementParams {
    /** Image height in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_height: number;
    /** Image width in pixels. Please specify this value if you need image to be returned in specific size. */
    i_image_width: number;
    /** Staff image height in pixels. Please specify this value if you need image to be returned in speci... */
    i_staff_image_height: number;
    /** Staff image width in pixels. Please specify this value if you need image to be returned in specif... */
    i_staff_image_width: number;
    /** `true` if schedule should be grouped by location time and staff, */
    is_schedule_group: boolean;
    /** The event key. */
    k_event: string;
    /** A list of event keys serialized with JSON. */
    s_event: string;
    /** `true` to show schedule, which is not published yet. */
    show_unpublished: boolean;
    /** The user key. */
    uid: string;
    /** The last available date for booking. */
    dl_book_available_end?: string | null;
    /** The first available date for booking. */
    dl_book_available_start?: string | null;
    /** Datetime of the session. */
    dtu_session?: string | null;
    /** Key of a business to which the requested event(s) belong. */
    k_business?: string | null;
    /** Key of a class period to show information for. */
    k_class_period?: string | null;
}
export interface WlEventBookEventViewElementResponse {
    a_age_restrictions: Array<{
        /** The minimum age for participation in the event. */
        i_age_from: number | null;
        /** The age limit for participation in the event. */
        i_age_to: number | null;
        /** `true` if age restrictions are public and available, `false` if they're hidden. */
        is_age_public: boolean;
    }>;
    a_book_available: Array<{
        /** Date/time when the session starts. In UTC. */
        dt_date: string;
        /** Class session primary keys. */
        k_class_period: string;
    }>;
    a_business_policy: Array<{
        /** List of not allowed decline reasons to payment reattempt. Each element is one of [PayExceptionSid... */
        a_payment_reattempt_not_decline_reason: Array<number>;
        /** Keys are list of IDs from [ServiceSid](#/components/schemas/Wl.Service.ServiceSid), and values ar... */
        a_wait_service: number;
        /** Minimum hours|days|months before class should be booked. */
        i_book_before: number;
        /** Maximum hours|days|months after class can be booked. */
        i_book_future: number;
        /** Minimum hours|days|months before class should be canceled without penalty. */
        i_cancel: number;
        /** Minimum hours|days|months before class should be promoted from wait list. */
        i_promote: number;
        /** Minimum hours|days|months the notifications which are sent for client confirmation required shoul... */
        i_promote_fastest_response: number;
        /** Minimum hours|days|months the notifications which are sent for client confirmation must confirm t... */
        i_promote_require_confirm: number;
        /** Number of failed auto-payments reattempts. */
        i_reattempt_count: number;
        /** A class for managing time intervals. */
        id_book_before: number;
        /** A class for managing time intervals. */
        id_book_future: number;
        /** A class for managing time intervals. */
        id_cancel: number;
        /** A class for managing time intervals. */
        id_promote: number;
        /** A class for managing time intervals. */
        id_promote_fastest_response: number;
        /** A class for managing time intervals. */
        id_promote_require_confirm: number;
        /** if `true` - clients with purchase options are only allowed */
        is_book_inside_active_pay_period: boolean;
        /** 1 if a client's automatic payment fails, their account should not be */
        is_disable_promotion: number;
        /** Whether to charge penalty after final auto-payment attempt. */
        is_enable_payment_penalty: boolean;
        /** Whether to reattempt failed auto-payments. */
        is_enable_payment_reattempt: boolean;
        /** Whether to restrict which IP addresses staff can login from. */
        is_enable_staff_ip_restriction: boolean;
        /** 1 if booking for a client with negative balance is disabled, 0 - otherwise. Default 0. */
        is_prevent_booking: number;
        /** If true, client can not choose provider while appointment wizard. */
        is_staff_restrict: boolean;
        /** Enable\disable wait list. */
        is_wait: boolean;
        /** Currency from rs.currency table. */
        k_currency: string;
        /** Timezone from get.timezone table. */
        k_timezone: string;
        /** Penalty amount to charge after final auto-payment attempt. */
        m_payment_penalty: string;
        /** Custom Url of a business */
        url_custom: string;
    }>;
    a_class_logo: Array<{
        /** Is returned only if staff has a photo. Image height. */
        i_height?: number;
        /** Is returned only if staff has a photo. Image width. */
        i_width?: number;
        /** String identifiers for gender. */
        id_gender?: number;
        /** Is returned only if staff has a photo. URL to image. */
        url_logo?: string;
    }>;
    /** The list of keys from class tab. */
    a_class_tab: Array<string>;
    a_event: Array<{
        /** List of sessions available for booking. */
        a_book_available: {
            /** Date/time when the session starts. In UTC. */
            dt_date: string;
            /** Class session primary keys. */
            k_class_period: string;
        };
        /** Image of event. See `a_class_logo`. */
        a_class_logo: {
            /** Is returned only if staff has a photo. Image height. */
            i_height?: number;
            /** Is returned only if staff has a photo. Image width. */
            i_width?: number;
            /** String identifiers for gender. */
            id_gender?: number;
            /** Is returned only if staff has a photo. URL to image. */
            url_logo?: string;
        };
        /** Class tab keys. See `a_class_tab`. */
        a_class_tab: Array<string>;
        /** List of installment plans. See `a_installment_template`. */
        a_installment_template: {
            /** The number of payments. */
            i_count: number;
            /** A class for managing time intervals. */
            id_duration: number;
            /** The number of periods specified by `id_period` between individual payments. */
            i_period: number;
            /** The payment currency Key. */
            k_currency: string;
            /** The key of the installment plan template. */
            k_pay_installment_template: string;
            /** The amount of the installment plan. */
            m_amount: string;
            /** The title of the installment plan. */
            s_duration: string;
        };
        /** Schedule of event sessions. See `a_schedule`. */
        a_schedule: {
            /** Days of the week when the session occurs. */
            a_day: Array<boolean>;
            /** Repeat periodicity instructions. */
            a_repeat: Record<string, unknown>;
            /** A list of staff members who conduct the session. Every element has the following next keys: */
            a_staff: Record<string, unknown>;
            /** List of virtual locations. */
            a_virtual_location: Array<string>;
            /** The end date of the session. */
            dt_end: string;
            /** The start date of the session. */
            dt_start: string;
            /** `true` if the location should be hidden in the event details. Hide if the event is virtual or if ... */
            hide_location: boolean;
            /** The class capacity. */
            i_capacity: number;
            /** The duration of the class in seconds. */
            i_duration: number;
            /** This will be `true` if the session is not held in person but offered remotely. It will be `false`... */
            is_virtual: boolean;
            /** The price of the session, if it can be purchased separately. */
            f_price: string;
            /** The key of the class period. */
            k_class_period: string;
            /** The key of the location where the session is held. */
            k_location: string;
            /** The location title. */
            s_location: string;
            /** The time when session occurred. */
            s_time: string;
            /** The name of the timezone in which the session is held. */
            s_timezone: string;
            /** The room of the event. */
            text_room: string;
        };
        /** IDs of online store category. */
        a_shop_category: Array<string>;
        /** Photos of staff. See `a_staff_logo`. */
        a_staff_logo: {
            /** Image height. */
            i_height: number;
            /** Image width. */
            i_width: number;
            /** Key of the user. */
            uid: string;
            /** URL to image. */
            url_logo: string;
        };
        /** Date/time of first event session. */
        dt_book_date: string;
        /** Early date of event purchase. */
        dt_early: string;
        /** End date of the event instance. */
        dt_end: string;
        /** Date of first event session. */
        dt_start: string;
        /** Html End date of the event instance. */
        html_end: string;
        /** Html Date of first event session. */
        html_start: string;
        /** Whether event will be hidden in the White Label mobile application. */
        hide_application: boolean;
        /** Special instruction for event. */
        html_special: string;
        /** Session count in event. */
        i_session: number;
        /** Remaining session count in event. */
        i_session_remain: number;
        /** Whether event availability was checked. */
        is_availability_checked: boolean;
        /** Whether event is booked already */
        is_book: boolean;
        /** `true` if there are no free spots in the event and booking is available only into wait list. */
        is_full: boolean;
        /** `true` if the selected session can be a make up session; `false` otherwise. */
        is_makeup: boolean;
        /** `true` if the event session has already started or ended and is not available to book. */
        is_past: boolean;
        /** `true` `a_business_policy` contains the custom policies from the event; `false` otherwise. */
        is_policy_custom: boolean;
        /** `true` if event is virtual; `false` otherwise. */
        is_virtual: boolean;
        /** Key of first event session. */
        k_book_class_period: string;
        /** Price of the event session. */
        m_price: string;
        /** Price of the full event. */
        m_price_total: string;
        /** Price of the full event, should be used as full price while `dt_early` is actual. */
        m_price_total_early: string;
        /** Reason of booking restriction. For example if exception has been thrown. */
        s_deny_reason: string;
        /** Event title. */
        s_title: string;
        /** Description of event. Ready to put into browser. */
        xml_description: string;
    }>;
    a_installment_template: Array<{
        /** The number of payments. */
        i_count: number;
        /** A class for managing time intervals. */
        id_duration: number;
        /** The number of periods specified by `id_period` between individual payments. */
        i_period: number;
        /** The payment currency Key. */
        k_currency: string;
        /** The key of the installment plan template. */
        k_pay_installment_template: string;
        /** The amount of the installment plan. */
        m_amount: string;
        /** The title of the installment plan. */
        s_duration: string;
    }>;
    a_schedule: Array<{
        /** Days of the week when the session occurs. */
        a_day: Array<boolean>;
        /** Repeat periodicity instructions. */
        a_repeat: {
            /** Count of the periods which specified in `id_repeat`. */
            i_repeat: number;
            /** A class for managing time intervals. */
            id_repeat: number;
        };
        /** A list of staff members who conduct the session. Every element has the following next keys: */
        a_staff: {
            /** @deprecated Legacy staff key. Returned only for applications from allow-list. */
            k_staff: string;
            /** The staff member name. */
            s_name: string;
            /** The first letter of staff member's surname. */
            s_surname: string;
            /** The user key of the staff member. */
            uid_staff: string;
        };
        /** List of virtual locations. */
        a_virtual_location: Array<string>;
        /** The end date of the session. */
        dt_end: string;
        /** The start date of the session. */
        dt_start: string;
        /** `true` if the location should be hidden in the event details. Hide if the event is virtual or if ... */
        hide_location: boolean;
        /** The class capacity. */
        i_capacity: number;
        /** The duration of the class in seconds. */
        i_duration: number;
        /** This will be `true` if the session is not held in person but offered remotely. It will be `false`... */
        is_virtual: boolean;
        /** The price of the session, if it can be purchased separately. */
        f_price: string;
        /** The key of the class period. */
        k_class_period: string;
        /** The key of the location where the session is held. */
        k_location: string;
        /** The location title. */
        s_location: string;
        /** The time when session occurred. */
        s_time: string;
        /** The name of the timezone in which the session is held. */
        s_timezone: string;
        /** The room of the event. */
        text_room: string;
    }>;
    /** IDs of online store category. */
    a_shop_category: Array<string>;
    a_staff_logo: Array<{
        /** Image height. */
        i_height: number;
        /** Image width. */
        i_width: number;
        /** Key of the user. */
        uid: string;
        /** URL to image. */
        url_logo: string;
    }>;
    a_timezone_info: Array<{
        /** UTC offset in hours for this timezone. */
        i_shift: number;
        /** Timezone identifier string (e.g. `America/New_York`). */
        s_file: string;
        /** Timezone abbreviation (e.g. `EST`). `null` if not set. */
        text_abbr: string | null;
    }>;
    a_visits_required: Array<{
        /** The number of visits required. */
        i_count: number;
        /** The number of visits the client has already attended. */
        i_has: number;
        /** `true` if this is an event, `false` if this is a class. */
        is_event: boolean;
        /** The key of the class or event. */
        k_class: string;
        /** The name of the class or event. */
        text_title: string;
    }>;
    /** That date that should be used to go to the booking wizard. */
    dt_book_date: string | null;
    /** The early registration date of the event. */
    dt_early: string | null;
    /** The end date of the event. */
    dt_end: string;
    /** The start date of the event. */
    dt_start: string;
    /** Whether event will be hidden in the White Label mobile application. */
    hide_application: boolean;
    /** The description of the event. */
    html_description: string | null;
    /** Special instruction for the event. */
    html_special: string;
    /** Class capacity. */
    i_capacity: number | null;
    /** The session count. */
    i_session: number;
    /** The remaining session count. */
    i_session_remain: number;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require: number;
    /** List of possible modes to require amount while booking a class. */
    id_pay_require_option: number;
    /** List of possible value of virtual integrations. */
    id_virtual_provider: number | null;
    /** Whether the event is age restricted. */
    is_age_restrict: boolean;
    /** `true` if the event availability was checked; `false` if the event has too many sessions, and cal... */
    is_availability_checked: boolean;
    /** `true` if the event is already booked; `false` if the event isn't booked. */
    is_book: boolean;
    /** `true` If the event is bookable; `false` if the event isn't bookable. */
    is_bookable: boolean;
    /** `true` if there are no free spots in the event; booking is available only into the wait list. */
    is_full: boolean;
    /** `true` if the selected session can be a make up session. */
    is_makeup: boolean;
    /** `true` if the selected session has already started and do not available to book. */
    is_past: boolean;
    /** `true` if the `a_business_policy` contains the custom policies from the event. */
    is_policy_custom: boolean;
    /** `true` if the event can be paid with a Purchase Option only. */
    is_promotion_only: boolean;
    /** `true` if clients, when they book event, which has been started, can pay only for the sessions in... */
    is_prorate: boolean;
    /** Determines whether this event allows paying for a single session. */
    is_single_session_buy: boolean;
    /** `true` if event is virtual; `false` otherwise. */
    is_virtual: boolean;
    /** The ID of the session which should be used to go to the booking wizard. */
    k_book_class_period: string;
    /** The price of a single session of the event. */
    m_price: string;
    /** The price of the all sessions of the event. */
    m_price_total: string;
    /** Price of the full event should be used as full price while `dt_early` is actual. */
    m_price_total_early: string | null;
    /** The reason why the event can't be booked. */
    s_deny_reason: string;
    /** The title of the event. */
    s_title: string | null;
    /** `true` if special instructions can be public, */
    show_special_instructions: boolean;
    /** End date of the event in user-friendly format. */
    text_end: string;
    /** Start date of the event in user-friendly format. */
    text_start: string;
    /** Link to the start of the booking wizard to book the closed session from this event or the entire ... */
    url_book: string | null;
    /** The description of the event. */
    xml_description: string | null;
}
export interface WlEventBookEventListListParams {
    /** Defines how the event availability flag filter should be applied. */
    id_status: number;
    /** The key of the business to show information for. */
    k_business: string;
    /** The key of the category tab. */
    k_class_tab: string;
    /** The user's key. */
    uid: string;
}
export interface WlEventBookEventListListResponse {
    /** A list of event identifiers. */
    a_event: Array<string>;
    /** Event availability map. */
    a_event_available: Array<boolean>;
    /** `true` if exist at least one virtual event */
    is_virtual_service: boolean;
}
export interface WlClassesPeriodModifyModifyGetParams {
    /** The end date, returned in MySQL format and the local time. */
    dt_end: string;
    /** The start date, returned in MySQL format and the local time. */
    dt_start: string;
    /** The class modify step type. One of the [RsClassModifyActionSid](#/components/schemas/RsClassModif... */
    id_class_modify_action: number;
    /** The modify mode type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModifyModeSid... */
    id_class_modify_mode: number;
    /** The class modify action type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModif... */
    id_step: number;
    /** The business key. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The unique hash string. */
    s_id: string;
    /** The step direction. */
    is_back?: boolean | null;
}
export interface WlClassesPeriodModifyModifyGetResponse {
    /** Step information, depending on the steps. */
    a_get: Array<unknown>;
}
export interface WlClassesPeriodModifyModifyPostParams {
    /** The end date, returned in MySQL format and the local time. */
    dt_end: string;
    /** The start date, returned in MySQL format and the local time. */
    dt_start: string;
    /** The class modify step type. One of the [RsClassModifyActionSid](#/components/schemas/RsClassModif... */
    id_class_modify_action: number;
    /** The modify mode type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModifyModeSid... */
    id_class_modify_mode: number;
    /** The mode type. One of the [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** The class modify action type. One of the [RsClassModifyModeSid](#/components/schemas/RsClassModif... */
    id_step: number;
    /** The business key. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The unique hash string. */
    s_id: string;
    /** The step direction. */
    is_back?: boolean | null;
}
export interface WlClassesPeriodModifyModifyPostResponse {
    /** The list of possible modify mode for class modify wizard. */
    id_step: number;
    /** The step direction. */
    is_back: boolean | null;
    /** The class ID. */
    k_class: string | null;
    /** The unique hash string. */
    s_id: string;
}
export interface WlBusinessAccountSubscriptionSubscriptionInfoParams {
    /** CID of the subscription information of which is requested. */
    cid_subscription: number;
    /** Business key for which subscription information is requested. */
    k_business: string;
}
export interface WlBusinessAccountSubscriptionSubscriptionInfoResponse {
    /** A list of locales. */
    id_locale: number | null;
    id_plan: number;
    /** Whether subscription is active. */
    is_active: boolean;
}
export interface WlBusinessAuthorizeSupportResponseResponseParams {
    /** Determines whether the user will be granted access or if access will be revoked. */
    is_grant: boolean;
    /** The key of the location to access. */
    k_location: string;
    /** The key of the user who will be granted access. */
    uid: string;
}
export type WlBusinessAuthorizeSupportResponseResponseResponse = Record<string, unknown>;
export interface WlBusinessFranchiseLocationBusinessFranchiseLocationParams {
    /** Determines which locations should be returned. */
    id_business_franchise_location: number;
    /** Determines whether to include churned/removed locations. */
    is_include_churn: boolean;
    /** Determines whether to include locations marked to not be displayed on franchisor website. */
    is_include_non_api: boolean;
    /** The business key. */
    k_business: string;
}
export interface WlBusinessFranchiseLocationBusinessFranchiseLocationResponse {
    a_city_list: Array<{
        /** City key. */
        k_city: string;
        /** Country key. */
        k_country: string;
        /** State key. */
        k_state: string;
        /** City title. */
        text_title: string;
    }>;
    a_country_list: Array<{
        /** Country key. */
        k_country: string;
        /** Country title. */
        text_title: string;
    }>;
    a_location_list: Array<{
        /** A list of currencies. */
        id_currency: number;
        /** City key. */
        k_city: string;
        /** Country key. */
        k_country: string;
        /** Location key. */
        k_location: string;
        /** Franchise region key. */
        k_region: string;
        /** State key. */
        k_state: string;
        /** Location title. */
        text_title: string;
    }>;
    a_region_list: Array<{
        /** Franchise region key. */
        k_region: string;
        /** Franchise region title. */
        text_title: string;
    }>;
    a_state_list: Array<{
        /** Country key. */
        k_country: string;
        /** State key. */
        k_state: string;
        /** State title. */
        text_title: string;
    }>;
}
export interface WlBusinessRewardConfigRewardConfigGetParams {
    /** Business key. */
    k_business: string;
}
export interface WlBusinessRewardConfigRewardConfigGetResponse {
    /** `true` Reward program is disabled, `false` - otherwise. */
    is_disabled_reward_program: boolean;
}
export interface WlBusinessRewardConfigRewardConfigPostParams {
    /** Business key. */
    k_business: string;
}
export type WlBusinessRewardConfigRewardConfigPostResponse = Record<string, unknown>;
export interface WlBusinessUserSubscribeSubscribeGetParams {
    /** The business key used for users to subscribe, unsubscribe, and receive information about the stat... */
    k_business: string;
    /** The key of the user whose subscription status needs to be checked or switched to subscribed/unsub... */
    uid: string;
}
export interface WlBusinessUserSubscribeSubscribeGetResponse {
    /** Information about the user`s subscription. */
    is_subscribe: boolean | null;
    /** Information about the user`s subscription. */
    is_subscribe_sms: boolean | null;
}
export interface WlBusinessUserSubscribeSubscribePutParams {
    /** The business key used for users to subscribe, unsubscribe, and receive information about the stat... */
    k_business: string;
    /** The key of the user whose subscription status needs to be checked or switched to subscribed/unsub... */
    uid: string;
    /** Information about the user`s subscription. */
    is_subscribe?: boolean | null;
    /** Information about the user`s subscription. */
    is_subscribe_sms?: boolean | null;
}
export type WlBusinessUserSubscribeSubscribePutResponse = Record<string, unknown>;
export interface WlLoginPromotionConvertConvertDeleteParams {
    /** The business key. */
    k_business: string;
    /** The login promotion key. */
    k_login_promotion: string;
}
export type WlLoginPromotionConvertConvertDeleteResponse = Record<string, unknown>;
export interface WlLoginPromotionConvertConvertGetParams {
    /** The business key. */
    k_business: string;
    /** The login promotion key. */
    k_login_promotion: string;
}
export interface WlLoginPromotionConvertConvertGetResponse {
    a_promotion: Array<{
        /** The promotion key. */
        k_promotion: string;
        /** The title of the promotion. */
        text_title: string;
        /** Program types. */
        id_program: number;
        /** If `true`, the promotion is related to the service. Otherwise, this will be `false`. */
        is_select: boolean;
    }>;
    /** The last date on what conversion can be scheduled. */
    dl_convert_max: string;
    /** The first date on what conversion can be scheduled. */
    dl_convert_min: string;
    /** Local date, when hold ends, if PO is on hold right now. */
    dl_hold_end: string;
    /** Local date, when hold starts, if PO is on hold right now. */
    dl_hold_start: string;
    /** List of options to convert promotion. */
    id_convert: number;
    /** Different types of conversion behavior: when and how it should be converted. */
    id_convert_when: number | null;
    /** Determines whether the conversion request is new or editing an existing conversion. */
    is_edit: boolean;
    /** `true` if PO is going to be renewed and not converted. */
    is_renew: boolean;
    /** The existing conversion date, returned as a string for the datepicker. */
    s_date_convert: string;
    /** The current date, returned as a string. */
    s_date_now: string;
    /** The Purchase Option title. */
    s_title: string;
    /** Expiration date in string user-friendly format. */
    text_date_expire: string;
    /** Next payment date in string user-friendly format. */
    text_date_payment: string;
    /** The note for the promotion conversion. */
    text_note: string | null;
}
export interface WlLoginPromotionConvertConvertPostParams {
    /** The conversion date, in the local time zone. */
    dl_convert: string;
    /** The conversion ID. One of the [PromotionConvertSid](#/components/schemas/Wl.Promotion.Convert.Pro... */
    id_convert: number;
    /** The business key. */
    k_business: string;
    /** The login promotion key. */
    k_login_promotion: string;
    /** The promotion key the given promotion will be converted to. */
    k_promotion_to: string;
    /** When conversion should be done. One of the [ConvertWhenSid](#/components/schemas/Wl.Login.Promoti... */
    id_convert_when?: number | null;
    /** The note for the promotion conversion. */
    text_note?: string | null;
}
export type WlLoginPromotionConvertConvertPostResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassGuestPassListParams {
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
    /** Class key to filter guest passes by. */
    k_class?: string | null;
    /** Location key to filter guest passes by. */
    k_location?: string | null;
}
export interface WlLoginPromotionGuestPassGuestPassListResponse {
    a_list: Array<{
        /** Thumbnail image data for the guest promotion. */
        a_image: {
            /** Image height. */
            i_height: number;
            /** Image width. */
            i_width: number;
            /** Thumbnail url. */
            'url-thumbnail': string;
        };
        /** Start and end dates of the current reset period. */
        a_period_dl: {
            /** Period end date in MySQL date format. */
            dl_end: string;
            /** Period start date in MySQL date format. */
            dl_start: string;
        } | null;
        /** Guest pass settings. */
        a_settings: {
            /** Count of days for accept guest invite. */
            i_claim_day: number;
            /** Times that member can invite the same guest. */
            i_limit: number;
            /** The time during which a member can invite a guest `i_limit` times. */
            i_limit_duration: number;
            /** A class for managing time intervals. */
            id_limit_duration: number;
            /** Whether guests can only enter the gym when the inviting member is checked in. */
            is_checkin: boolean;
            /** Whether there are limits for a guest promotion. */
            is_limit: boolean;
        };
        /** `true` if the guest pass is invite-type (the member sends invitations to guests). */
        can_invite: boolean;
        /** `true` if the member can currently send a guest pass (eligible and within quota). */
        can_send: boolean;
        /** Date on which the pass resets or expires, in MySQL date format. */
        dl_reset: string | null;
        /** `true` if the guest pass is service-type (not invite-type). Inverse of `can_invite`. */
        has_service: boolean;
        /** Maximum guest passes that can be sent per day. `null` if there is no daily cap. */
        i_cap_day: number | null;
        /** Total number of guest passes initially granted. `null` if the supply is unlimited. */
        i_limit: number | null;
        /** Numeric length of the reset period (for example `1` for a one-month period). */
        i_period: number | null;
        /** Number of guest passes remaining in the current period. */
        i_remain: number | null;
        /** Number of guest passes remaining today per the daily cap. */
        i_remain_day: number | null;
        /** Number of accepted invitations for this guest pass. */
        i_use: number;
        /** A class for managing time intervals. */
        id_period: number;
        /** Program types. */
        id_program_guest: number;
        /** Guest Pass reset type. */
        id_reset_type_guest: number;
        /** `true` if the pass is close enough to its reset or expiry date that the UI should */
        is_expire_note: boolean;
        /** `true` if the remaining count resets on `dl_reset`; */
        is_reset: boolean;
        /** Business key. */
        k_business: string;
        /** Login promotion key of the host membership. */
        k_login_promotion: string;
        /** Guest promotion key. */
        k_promotion: string;
        /** Comma-separated list of location titles where the promotion is valid. */
        text_location: string;
        /** Full name of the membership owner. */
        text_owner: string;
        /** Human-readable reset period label (e.g. "1 month"). */
        text_period: string;
        /** Human-readable date range of the current period (e.g. "Jan 1 - Jan 31"). */
        text_period_date: string;
        /** Title of the host (granting) promotion. */
        text_promotion_grant: string;
        /** Title of the guest promotion. */
        text_promotion_guest: string;
        /** User key of the membership owner. */
        uid_owner: string;
    }>;
}
export interface WlLoginPromotionGuestPassGuestPassGetParams {
    /** Business key. */
    k_business: string;
    /** Login promotion key. */
    k_login_promotion: string;
}
export interface WlLoginPromotionGuestPassGuestPassGetResponse {
    a_guest_pass: Array<{
        /** Thumbnail image data for the guest promotion. */
        a_image: {
            /** Image height. */
            i_height: number;
            /** Image width. */
            i_width: number;
            /** Thumbnail url. */
            'url-thumbnail': string;
        };
        /** Start and end dates of the current reset period. */
        a_period_dl: {
            /** Period end date in MySQL date format. */
            dl_end: string;
            /** Period start date in MySQL date format. */
            dl_start: string;
        } | null;
        /** Guest pass settings. */
        a_settings: {
            /** Count of days for accept guest invite. */
            i_claim_day: number;
            /** Times that member can invite the same guest. */
            i_limit: number;
            /** The time during which a member can invite a guest `i_limit` times. */
            i_limit_duration: number;
            /** A class for managing time intervals. */
            id_limit_duration: number;
            /** Whether guests can only enter the gym when the inviting member is checked in. */
            is_checkin: boolean;
            /** Whether there are limits for a guest promotion. */
            is_limit: boolean;
        };
        /** `true` if the guest pass is invite-type (the member sends invitations to guests). */
        can_invite: boolean;
        /** `true` if the member can currently send a guest pass (eligible and within quota). */
        can_send: boolean;
        /** Date on which the pass resets or expires, in MySQL date format. */
        dl_reset: string | null;
        /** `true` if the guest pass is service-type (not invite-type). Inverse of `can_invite`. */
        has_service: boolean;
        /** Maximum guest passes that can be sent per day. `null` if there is no daily cap. */
        i_cap_day: number | null;
        /** Total number of guest passes initially granted. `null` if the supply is unlimited. */
        i_limit: number | null;
        /** Numeric length of the reset period (for example `1` for a one-month period). */
        i_period: number | null;
        /** Number of guest passes remaining in the current period. */
        i_remain: number | null;
        /** Number of guest passes remaining today per the daily cap. */
        i_remain_day: number | null;
        /** Number of accepted invitations for this guest pass. */
        i_use: number;
        /** A class for managing time intervals. */
        id_period: number;
        /** Program types. */
        id_program_guest: number;
        /** Guest Pass reset type. */
        id_reset_type_guest: number;
        /** `true` if the pass is close enough to its reset or expiry date that the UI should */
        is_expire_note: boolean;
        /** `true` if the remaining count resets on `dl_reset`; */
        is_reset: boolean;
        /** Business key. */
        k_business: string;
        /** Login promotion key of the host membership. */
        k_login_promotion: string;
        /** Guest promotion key. */
        k_promotion: string;
        /** Comma-separated list of location titles where the promotion is valid. */
        text_location: string;
        /** Full name of the membership owner. */
        text_owner: string;
        /** Human-readable reset period label (e.g. "1 month"). */
        text_period: string;
        /** Human-readable date range of the current period (e.g. "Jan 1 - Jan 31"). */
        text_period_date: string;
        /** Title of the host (granting) promotion. */
        text_promotion_grant: string;
        /** Title of the guest promotion. */
        text_promotion_guest: string;
        /** User key of the membership owner. */
        uid_owner: string;
    }>;
}
export interface WlLoginPromotionGuestPassGuestPassPutParams {
    /** Business key. */
    k_business: string;
    /** Login promotion key. */
    k_login_promotion: string;
}
export type WlLoginPromotionGuestPassGuestPassPutResponse = Record<string, unknown>;
export interface WlLoginMemberDynamicIdDynamicIdParams {
    /** `true` if a new dynamic ID should be generated. */
    is_refresh: boolean;
    /** Business key. */
    k_business: string;
    /** User unique identifier. */
    uid: string;
}
export interface WlLoginMemberDynamicIdDynamicIdResponse {
    /** Number of seconds left until the dynamic ID expires. */
    i_expire: number;
    /** Barcode of the member. */
    text_barcode: string;
    /** URL of the barcode image. */
    url_barcode: string;
}
export interface WlLoginAttendanceAddAddGetParams {
    /** The start date and time of the class in GMT and MySQL format. */
    dt_date_global: string;
    /** Key of the business in which the request must be processed. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The client user key. */
    uid_client: string;
}
export interface WlLoginAttendanceAddAddGetResponse {
    a_login_promotion: Array<{
        /** The login promotion key, available to pay for the session. */
        k_login_promotion: string;
        /** The title of the login promotion. */
        text_title: string;
    }>;
    a_session_pass: Array<{
        /** The session pass key, available to pay for the session. */
        k_session_pass: string;
        /** The title of the session pass. */
        text_title: string;
    }>;
    /** If `true`, the session is free with no methods of payment. If `false`, the session can be paid for. */
    is_free: boolean;
    /** The key of the user's promotion to be used for booking. */
    k_login_promotion: string;
    /** The key of a session pass that can be used for a single session payment. */
    k_session_pass: string;
    /** Account balance. */
    m_account: string;
    /** The price of the session, including any taxes and discounts. */
    m_price: string | null;
    /** The user's account balance if they were charged the `m_price` amount. */
    m_rest: string | null;
}
export interface WlLoginAttendanceAddAddPostParams {
    /** The start date and time of the class in GMT and MySQL format. */
    dt_date_global: string;
    /** Defines whether only single session can be booked for block event. */
    is_event_single: boolean;
    /** Key of the business in which the request must be processed. */
    k_business: string;
    /** The class period key. */
    k_class_period: string;
    /** The client user key. */
    uid_client: string;
}
export interface WlLoginAttendanceAddAddPostResponse {
    /** Possible states of the visit: book, attended, cancelled, etc. */
    id_visit: number;
    /** If `true`, the visit was automatically paid for in any available way during the booking. */
    is_paid: boolean;
    /** The key of the booked visit. This will be set on success. */
    k_visit: string;
    /** The URL link to the store to allow for the payment of the visit. */
    url_store: string;
}
export interface WlLoginSearchStaffAppListParams {
    /** `true` - search among whole franchise; `false` - search in specified business only. */
    is_franchisee_search_wide: boolean;
    /** The business key number used internally by WellnessLiving. */
    k_business: string;
    /** The search string. Clients can be matched by name or email. */
    text_search: string;
}
export interface WlLoginSearchStaffAppListResponse {
    a_list: Array<{
        /** Client's email. */
        text_mail: string;
        /** Client's first name. */
        text_name_first: string;
        /** Client's last name. */
        text_name_last: string;
        /** Client's phone. */
        text_phone: string;
        /** The client name. */
        text_title: string;
        /** The client key. */
        uid: string;
    }>;
    /** If `true`, then this user can add other users via the Add Client page. */
    can_add: boolean;
}
export interface WlCatalogStaffAppCatalogCartCatalogCartParams {
    /** The list of cart items with the next structure: */
    a_item: Array<{
        /** The list of purchase item additional options: */
        a_config?: {
            /** List of tuition components: */
            a_tuition_component?: Record<string, unknown>;
            /** The custom price. */
            f_price?: string;
            /** The prorate date. This should be passed when `is_prorate`=`true`. */
            dt_prorate?: string;
            /** The promotion start date. */
            dt_start?: string;
            /** Determines whether to prorate the first payment. */
            is_prorate?: boolean;
            /** Determines if the client should pay for the first period now. */
            is_prorate_fix?: boolean;
            /** Determines whether the selected option 'pay prorate amount only' should only include the prorate ... */
            is_prorate_only?: boolean;
            /** The custom price of the gift card. */
            m_custom?: string;
            /** The date when the gift card email must be sent. */
            dt_send_local?: string;
            /** If `true`, the gift card will be sent via email. Otherwise, `false` if the gift card will be prin... */
            is_mail: boolean;
            /** The recipient's email. */
            s_mail?: string;
            /** The message. */
            s_message?: string;
            /** The recipient's name. */
            s_recipient: string;
            /** The sender's name. */
            s_sender: string;
            /** The amount of money for the prorate period. This should only be passed in the case of manual entry. */
            m_prorate_custom: string;
            /** The coupon key. */
            k_coupon: string;
            /** The coupon amount key. */
            k_coupon_amount: string;
        };
        /** Information about taxes. If not passed, no custom taxes have been applied to the sale item. */
        a_tax_custom?: {
            /** The tax amount. */
            f_tax: string;
            /** The tax keys. */
            k_tax: string;
        };
        /** The discount percentage, applied to the current item. */
        f_discount_percent?: number;
        /** The quantity of sale items. */
        i_quantity: number;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** The sale item key. */
        k_id: string;
        /** The store product option key. This will be `null` if the sale item has no options. */
        k_shop_product_option: string;
        /** The fixed price discount, applied to the current item. */
        m_discount_fix?: string;
        /** The custom price of the sale item. If not passed, no custom price has been applied to the sale item. */
        m_price_custom?: string;
    }>;
    /** The discount as a percentage. */
    f_discount_percent: number;
    /** If `true`, every item is checked at the cart. Otherwise, this will be `false`. */
    is_check_cart_item: boolean;
    /** The business key. */
    k_business: string;
    /** The business location key. */
    k_location: string;
    /** The manual discount amount in dollars, excluding tax. */
    m_discount_flat: string;
    /** The amount of tips. */
    m_tip: string;
    /** The key of the current user. */
    uid_current: string;
    /** The key of the user who performed the purchase. */
    uid_customer: string;
    /** The discount code. */
    text_discount_code?: string | null;
}
export interface WlCatalogStaffAppCatalogCartCatalogCartResponse {
    a_discount_code: Array<{
        /** `true` if this code is selected currently, `false` otherwise. */
        is_select: boolean;
        /** Discount code key. */
        k_discount_code: string;
        /** Value of the code that can be used to get discount. */
        text_discount_code: string;
        /** Name of the code. */
        text_title: string;
    }>;
    /** Determines whether the business applied a commission at checkout. */
    is_commission: boolean;
    /** Determines, how staff sees discount codes in Store. */
    is_discount_code_mode_select: boolean;
    /** Determines whether to display custom receipt notes at checkout. */
    is_receipt_note: boolean;
    /** The discount amount in dollars, excluding tax. */
    m_discount: string;
    /** The discount amount applied to the cart's total amount, including taxes. */
    m_discount_total: string;
    /** The subtotal amount. */
    m_subtotal: string;
    /** The amount of tax. */
    m_tax: string;
    /** The amount of appointment tips. */
    m_tip_purchase: string;
    /** The cart's total amount. */
    m_total: string;
    /** The discount code's error code. */
    text_error_code: string | null;
    /** The discount code's error message. */
    text_error_message: string | null;
    /** The custom receipt note's text. */
    text_receipt_note: string;
}
export interface WlCatalogStaffAppCatalogListCatalogListParams {
    /** The key of the business to get categories for. */
    k_business: string;
    /** The location key. */
    k_location: string;
    /** The visit key to pay for. */
    k_visit: string;
}
export interface WlCatalogStaffAppCatalogListCatalogListResponse {
    a_shop_product: Array<{
        /** The list of location keys where the current sale item is available. */
        a_location: Array<string>;
        /** The list of login types available to purchase the sale item. */
        a_login_type: Array<string>;
        /** The list of member groups available to purchase the sale item. */
        a_member_group: Array<string>;
        /** A list of online store category keys. */
        a_shop_category: Array<string>;
        /** Program types. */
        id_program?: number;
        /** Purchase restrictions. */
        id_restriction: number;
        /** List of sale categories on the store page. */
        id_sale: number;
        /** Determines whether the sale item can be purchased by the client. */
        is_online_sell: boolean;
        /** This will be `true` if this Purchase Option is suitable to pay for the visit `k_visit`. */
        is_visit: boolean;
        /** The sale item ID. */
        k_id: string;
        /** The category title. */
        text_title: string;
        /** Direct link to catalog view page of this purchase item. */
        url_catalog: string;
    }>;
    /** If `true`, the current user is able to add the purchased item to the account. */
    can_add: boolean;
}
export interface WlCatalogStaffAppCatalogViewCatalogViewParams {
    /** Configuration information about the item, which can specify prorated amounts. */
    a_config: Array<{
        /** The amount to prorate the item by. */
        f_promote: number;
        /** If `true`, this item is prorated. */
        is_prorate: boolean;
        /** The custom prorate amount. */
        m_prorate_custom: string;
    }>;
    /** Contains information about edited taxes. */
    a_tax: Array<{
        /** The tax ID. */
        k_tax: string;
        /** The amount of custom tax. */
        m_tax_custom: string;
    }>;
    /** The quantity of items. */
    i_quantity: number;
    /** The ID of the sale category. One of the [RsSaleSid](#/components/schemas/RsSaleSid) constants. */
    id_sale: number;
    /** The business key. */
    k_business: string;
    /** The key of the sale item. */
    k_id: string;
    /** The product option key. */
    k_shop_product_option: string;
    /** The custom price of the sale item. */
    m_price: string;
    /** The ID of the user who performed the actions. */
    uid: string;
}
export interface WlCatalogStaffAppCatalogViewCatalogViewResponse {
    a_tax_data: Array<{
        /** The calculated tax amount applied by this rule. */
        f_tax: number;
        /** The tax amount after applying all discounts. */
        f_tax_discount: string;
        /** The tax amount after applying the client type discount only. */
        f_tax_discount_login: string;
        /** The tax rate. Its meaning depends on `id_tax`. */
        f_value: number;
        /** Types of taxes. */
        id_tax: number;
        /** The tax key. */
        k_tax: string;
        /** The tax name. */
        s_tax: string;
    }>;
    /** The prorated amount. */
    m_prorate: string;
    /** The amount of the sale item, excluding taxes. */
    m_subtotal: string;
    /** The calculated amount of tax. */
    m_tax: string;
    /** The calculated amount of the sale item, including taxes. */
    m_total: string;
}
export interface WlReceptionRosterDesignReceptionRosterDesignParams {
    /** Key of the business. */
    k_business: string;
}
export interface WlReceptionRosterDesignReceptionRosterDesignResponse {
    a_image: Array<{
        /** Requested image height. */
        i_height: number;
        /** Original image height. */
        i_height_src: number;
        /** Requested image width. */
        i_width: number;
        /** Original image width. */
        i_width_src: number;
        /** List of image types. */
        id_type_src: number;
        /** Whether image was resized to satisfy specified */
        'is-resize': boolean;
        /** Url to requested image. */
        'url-thumbnail': string;
        /** Url to original image. */
        'url-view': string;
    }>;
    /** Whether to hide client profile images. */
    hide_profile_images: boolean;
    /** Number of seconds of inactivity before automatic redirect. */
    i_attendance_direct_delay: number;
    /** Number of minutes for the client check-in window after session has started. */
    i_book_open: number;
    /** Units of time for the look ahead window for attendance app. */
    i_book_quick_app: number;
    /** Delay in seconds on attendance web app confirmation screen before redirect to login screen. */
    i_confirm_delay: number;
    /** List of places to redirect user from attendance list after inactivity. */
    id_attendance_direct: number;
    /** A class for managing time intervals. */
    id_book_quick_app: number;
    /** `true` if clients are allowed to check-in unpaid, `false` otherwise. */
    is_attend_free: boolean;
    /** Whether to allow sign-ins to classes in progress. */
    is_book_open: boolean;
    /** `true` if clients are allowed to check-in without booking prior, */
    is_book_optional: boolean;
    /** `true` if clients are allowed to sign in before session is started., */
    is_book_quick_app: boolean;
    /** `true` - show business name on attendance web app; `false` - do not show. */
    show_business_name: boolean;
    /** `true` - show confirm screen on attendance web app; */
    show_confirm_screen: boolean;
    /** Name of the business to display in the attendance web app. */
    text_business_name: string;
}
export interface WlInsuranceEnrollmentFieldEnrollmentFieldListGetParams {
    /** The key of the business in which the enrollment is performed. */
    k_business: string;
    /** "Wellness Program" key. */
    k_wellness_program: string;
}
export interface WlInsuranceEnrollmentFieldEnrollmentFieldListGetResponse {
    a_field_list: Array<{
        /** The list of reimbursement account fields. */
        a_account: {
            /** Additional configuration for the field. */
            a_config: Array<string>;
            /** Maximum length of the field value. `null` if no limit. */
            i_length: number | null;
            /** `true` if the field is disabled and should not be shown. */
            is_disable: boolean;
            /** `true` if the field is required. */
            is_required: boolean;
            /** The field identifier key. */
            k_field: string;
            /** Regular expression for client-side validation. Empty string if no validation pattern. */
            s_regular: string;
            /** The label text for the field displayed to the user. */
            text_display_name: string;
            /** The error message to display if the field value is invalid. */
            text_error_message: string;
            /** The internal name of the field. */
            text_field_name: string;
        };
        /** The list of partner enrollment fields. Each element: */
        a_field: {
            /** Additional configuration for the field: */
            a_config: Record<string, unknown>;
            /** Maximum length of the field value. `null` if no limit. */
            i_length: number | null;
            /** `true` if the field is disabled and should not be shown. */
            is_disable: boolean;
            /** `true` if the field is required. */
            is_required: boolean;
            /** The field key. */
            k_field: string;
            /** Regular expression for client-side validation. Empty string if no validation pattern. */
            s_regular: string;
            /** The label text for the field displayed to the user. */
            text_display_name: string;
            /** The error message to display if the field value is invalid. */
            text_error_message: string;
            /** The internal name of the field. */
            text_field_name: string;
        };
    }>;
}
export interface WlInsuranceEnrollmentFieldEnrollmentFieldListPostParams {
    /** The key of the business in which the enrollment is performed. */
    k_business: string;
    /** "Wellness Program" key. */
    k_wellness_program: string;
}
export type WlInsuranceEnrollmentFieldEnrollmentFieldListPostResponse = Record<string, unknown>;
export interface WlRewardActionCategoryListCategoryListParams {
    /** ID of a business to show information for. */
    k_business: string;
}
export interface WlRewardActionCategoryListCategoryListResponse {
    a_category: Array<{
        /** List of default categories of the rewards. */
        id_reward_action_category: number;
        /** ID of reward actions category in database. */
        k_reward_action_category: string;
        /** Title of the reward action. */
        s_title: string;
    }>;
}
export interface WlRewardScoreCurrentCurrentParams {
    /** ID of a business to show information for. */
    k_business: string;
    /** UID to retrieve information about. */
    uid: string;
}
export interface WlRewardScoreCurrentCurrentResponse {
    /** Current user's rank in the first leaderboard. */
    i_board_rank: number;
    /** Current score in wellnessliving points. */
    i_score: number;
    /** Title of the first leaderboard. */
    s_board_title: string;
}
export interface WlRewardBoardBoardListListParams {
    /** Business to show information for. */
    k_business: string;
    /** User to retrieve information about. */
    uid: string;
}
export interface WlRewardBoardBoardListListResponse {
    a_reward_board: Array<{
        /** Reward board key. */
        k_reward_board: string;
        /** Board title. */
        s_title: string;
    }> | null;
}
export interface WlPassportLoginEnterPassportOtpGetParams {
    /** Whether OTP code will be sending to user via email. */
    is_mail: boolean;
    /** Whether OTP code will be sending to user via email. */
    is_phone: boolean;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export type WlPassportLoginEnterPassportOtpGetResponse = Record<string, unknown>;
export interface WlPassportLoginEnterPassportOtpPostParams {
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export interface WlPassportLoginEnterPassportOtpPostResponse {
    /** Redirect url after successful authorization. */
    url_redirect: string;
}
export interface WlPassportLoginRegisterRegisterOtpGetParams {
    /** Business key. */
    k_business: string;
    /** Email address OTP code will be sent to. */
    text_mail: string;
    /** Phone number OTP code will be sent to. */
    text_phone: string;
}
export type WlPassportLoginRegisterRegisterOtpGetResponse = Record<string, unknown>;
export interface WlPassportLoginRegisterRegisterOtpPostParams {
    /** Business key. */
    k_business: string;
}
export interface WlPassportLoginRegisterRegisterOtpPostResponse {
    /** Number of attempts left to submit the correct otp code. */
    i_attempt_left: number;
    /** JWT token generated after successful otp validation. */
    s_jwt_token: string;
    /** Key of the user, which was signed in after successful otp verification. */
    uid: string;
    /** Redirect url after successful authorization. */
    url_redirect: string;
}
export type WlSkinApplicationConnectApplicationConnectParams = Record<string, unknown>;
export interface WlSkinApplicationConnectApplicationConnectResponse {
    /** Key of the created or updated application. */
    k_spa_application: string;
}
export interface WlSkinApplicationResourceApplicationResourceParams {
    /** The business key. */
    k_business: string;
}
export interface WlSkinApplicationResourceApplicationResourceResponse {
    a_application: Array<{
        /** List of resource groups for image generation. */
        a_resource: {
            /** Groups of images, such as icons, loading screens or screenshots. One element of this array is an ... */
            a_group: Record<string, unknown>;
            /** Title of the group. */
            text_group: string;
        };
        /** Application version number. */
        i_version: number;
        /** Business key. */
        k_business: string;
        /** Google OAuth client ID for this application. */
        s_google_id: string;
        /** Reverse Google OAuth client ID used for deep linking. */
        s_google_reverse: string;
        /** Android splash screen background color in hex format. */
        s_splash_color_android: string;
        /** Application version name string (for example, '2.0.1'). */
        s_version_name: string;
        /** Short app store description. */
        text_annotation: string;
        /** Full app store description for iOS App Store. */
        text_description: string;
        /** Full app store description for Google Play. */
        text_description_google: string;
        /** Application domain. */
        text_domain: string;
        /** App store search keywords. */
        text_keyword: string;
        /** Application internal name. */
        text_name: string;
        /** Application display title shown in app stores. */
        text_title: string;
    }>;
}
export type WlSkinApplicationResourceApplicationResourceMaterialParams = Record<string, unknown>;
export type WlSkinApplicationResourceApplicationResourceMaterialResponse = Record<string, unknown>;
export type WlSkinApplicationResourceApplicationResourceUploadParams = Record<string, unknown>;
export type WlSkinApplicationResourceApplicationResourceUploadResponse = Record<string, unknown>;
export interface WlMemberGroupEditEditGetParams {
    /** The business key. */
    k_business: string;
    /** Member group primary key in Sql table. */
    k_member_group: string;
    /** Key of existing template. */
    k_search_template: string;
    /** Unique string identifying the name of the search group. */
    s_search_group: string;
    /** User key. */
    uid: string;
}
export interface WlMemberGroupEditEditGetResponse {
    /** Lead conversion type. */
    id_conversion_type: number | null;
    /** Shapes of client group icons. */
    id_member_group_shape: number;
    /** Whether Facility Access enabled for group. */
    is_brivo_active: boolean;
    /** Whether Brivo invitation feature enabled for the group. */
    is_brivo_invitation_active: boolean;
    /** `true` to enable group icon. `false` to disable. */
    is_icon: boolean;
    /** Whether auto-update enabled for group. */
    is_update: boolean;
    /** Key of existing template. */
    k_search_template: string;
    /** Hexadecimal color of icon background. */
    s_color_background: string;
    /** Hexadecimal color of icon foreground. */
    s_color_foreground: string;
    /** Characters on icon. */
    s_icon: string;
    /** Title for a client group. */
    text_title: string;
}
export interface WlMemberGroupEditEditPostParams {
    /** The business key. */
    k_business: string;
    /** Member group primary key in Sql table. */
    k_member_group: string;
    /** Key of existing template. */
    k_search_template: string;
    /** Unique string identifying the name of the search group. */
    s_search_group: string;
    /** User key. */
    uid: string;
}
export interface WlMemberGroupEditEditPostResponse {
    /** Member group primary key in Sql table. */
    k_member_group: string;
    /** Key of existing template. */
    k_search_template: string;
    /** Additional warning message if there were some minor issues with request. */
    text_warning: string | null;
}
export interface WlMemberGroupEditEditPutParams {
    /** The business key. */
    k_business: string;
    /** Member group primary key in Sql table. */
    k_member_group: string;
    /** Key of existing template. */
    k_search_template: string;
    /** Unique string identifying the name of the search group. */
    s_search_group: string;
    /** User key. */
    uid: string;
}
export interface WlMemberGroupEditEditPutResponse {
    /** Additional warning message if there were some minor issues with request. */
    text_warning: string | null;
}
export interface WlMemberGroupUserUserGroupDeleteParams {
    /** UID of a user. */
    uid_user: string;
    /** Key of the business. */
    k_business?: string | null;
}
export type WlMemberGroupUserUserGroupDeleteResponse = Record<string, unknown>;
export interface WlMemberGroupUserUserGroupGetParams {
    /** UID of a user. */
    uid_user: string;
    /** Key of the business. */
    k_business?: string | null;
}
export interface WlMemberGroupUserUserGroupGetResponse {
    /** All groups to which the specified user belongs. */
    a_group_info: Array<string>;
    /** Whether the user is in the quick group or not. */
    is_quick_group: boolean;
}
export interface WlMemberGroupUserUserGroupPostParams {
    /** UID of a user. */
    uid_user: string;
    /** Key of the business. */
    k_business?: string | null;
}
export type WlMemberGroupUserUserGroupPostResponse = Record<string, unknown>;
export interface WlMemberGroupGroupListListDeleteParams {
    /** The business key. */
    k_business: string;
}
export type WlMemberGroupGroupListListDeleteResponse = Record<string, unknown>;
export interface WlMemberGroupGroupListListGetParams {
    /** Whether include "Isaac Churn Risk" group. */
    is_churn_risk: boolean;
    /** Whether include a list of members of groups. */
    is_return_members: boolean;
    /** The business key. */
    k_business: string;
    /** List of groups for filtering groups of business. */
    a_member_group_select?: Array<string> | null;
}
export interface WlMemberGroupGroupListListGetResponse {
    a_member_group: Array<{
        /** The key of the member group. */
        k_member_group: string;
        /** The name of the member group. */
        text_title: string;
    }>;
}
export interface WlMemberGroupGroupListListPutParams {
    /** The business key. */
    k_business: string;
}
export type WlMemberGroupGroupListListPutResponse = Record<string, unknown>;
export interface WlMemberProgressFieldStateParams {
    /** Business key. */
    k_business: string;
    /** Field key. */
    k_field: string;
}
export interface WlMemberProgressFieldStateResponse {
    /** List of progress log fields. */
    id_field: number;
    /** Whether field is active and should be displayed on page. */
    is_active: boolean | null;
    /** Whether this field is public. If this field is set to `false`, this field is not visible to clients. */
    is_public: boolean | null;
    /** Whether field value is required for clients. */
    is_require: boolean | null;
    /** Whether field value is required for staffs. */
    is_require_staff: boolean | null;
    /** Field title. */
    text_title: string | null;
}
export interface WlMemberProgressLogVerifyParams {
    /** Local date without time of the progress log. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid: string;
}
export type WlMemberProgressLogVerifyResponse = Record<string, unknown>;
export interface WlDiscountCodeEditDiscountCodeEditGetParams {
    /** Business key. */
    k_business: string;
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface WlDiscountCodeEditDiscountCodeEditGetResponse {
    a_component: Array<{
        /** A list of purchase types. */
        id_purchase_item: number;
        /** Primary key of the component. */
        k_id: string;
        /** Title of the component. */
        text_title: string;
    }>;
    /** List of client types. */
    a_login_type: Array<string>;
    /** List of client groups. */
    a_member_group: Array<string>;
    /** Expiration date. `null` if discount code is never expires. */
    dl_end: string | null;
    /** Activation date. */
    dl_start: string;
    /** Value of the percentage or fixed discount. */
    f_value: string;
    /** Count of calendar periods from `id_duration` before expiration. */
    i_duration: number;
    /** Maximum count of usage. Zero means unlimited usage. */
    i_limit: number;
    /** A class for managing time intervals. */
    id_duration: number;
    /** Class to process string identifiers for duration types */
    id_duration_type: number;
    /** `true` means discount code is active. */
    is_active: boolean;
    /** `true` means membership will auto-renew at discounted rate. */
    is_auto_renew: boolean;
    /** `true` means discount code can reduce price of the gift cards. */
    is_coupon: boolean;
    /** `true` means discount code can be applied to first membership payment only. */
    is_first_payment: boolean;
    /** `true` means that only selected client types or groups can use this discount code. */
    is_login_type: boolean;
    /** `true` if clients can use this discount code in online store, */
    is_online: boolean;
    /** `true` means discount value is percent from the purchase amount. */
    is_percent: boolean;
    /** `true` means discount can be applied to all products and purchase options. */
    is_purchase_all: boolean;
    /** List of product and purchase options that are effected with this discount code. */
    s_component: string;
    /** Discount code that can be used during purchase. */
    text_code: string;
    /** Description of the discount code. */
    text_description: string;
    /** Name of the discount code. */
    text_title: string;
}
export interface WlDiscountCodeEditDiscountCodeEditPostParams {
    /** Business key. */
    k_business: string;
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface WlDiscountCodeEditDiscountCodeEditPostResponse {
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface WlDiscountCodeEditDiscountCodeEditPutParams {
    /** Business key. */
    k_business: string;
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface WlDiscountCodeEditDiscountCodeEditPutResponse {
    /** Key of the discount code. Empty, if this is creation of a new code. */
    k_discount_code: string;
}
export interface CoreRequestApiApplicationCredentialCredentialDeleteParams {
    /** The CID of the credential. */
    cid_credential: number;
}
export type CoreRequestApiApplicationCredentialCredentialDeleteResponse = Record<string, unknown>;
export interface CoreRequestApiApplicationCredentialCredentialGetParams {
    /** The CID of the credential. */
    cid_credential: number;
}
export interface CoreRequestApiApplicationCredentialCredentialGetResponse {
    /** An array with the credential. */
    json_credential: string;
}
export interface CoreRequestApiApplicationCredentialCredentialPutParams {
    /** The CID of the credential. */
    cid_credential: number;
}
export type CoreRequestApiApplicationCredentialCredentialPutResponse = Record<string, unknown>;
export interface WlAppointmentBookAssetServiceServiceParams {
    /** The appointment booking date selected by the user. */
    dt_start: string;
    /** Mode type, one of [ModeSid](#/components/schemas/Wl.Mode.ModeSid) constants. */
    id_mode: number;
    /** If `true`, back-end mode is selected. */
    is_backend: boolean;
    /** Whether to show both grid layouts and custom layouts. */
    is_grid_any: boolean;
    /** Whether unavailable assets should be included. */
    is_show_unavailable_assets: boolean;
    /** The selected location key. */
    k_location: string;
    /** The selected service's key. */
    k_service: string;
    /** Timezone of date and time of service start. */
    k_timezone: string;
    /** User to get information for. */
    uid: string;
    /** The appointment booking key to ignore when `a_resource_busy` is derived. */
    k_appointment_ignore?: string | null;
}
export interface WlAppointmentBookAssetServiceServiceResponse {
    /** A list of reserved assets. */
    a_resource_busy: Array<Array<string>>;
    a_resource_type: Array<{
        /** A list of resources. Every element has the following keys: */
        a_resource: {
            /** The asset's image data. */
            a_image: Record<string, unknown>;
            /** Asset quantity. */
            i_quantity: number;
            /** Whether this asset has at least one free unit. */
            is_available: boolean;
            /** The asset key. */
            k_resource: string;
            /** The asset title. */
            s_resource: string;
        };
        /** The asset's layout key.  This will be `null` if the asset category has no layout. */
        k_resource_layout: string | null;
        /** The title of asset category. */
        s_resource_type: string;
    }>;
    /** Can the staff members book reserved assets. */
    can_book_unavailable_assets: boolean;
}
export interface WlProfileAttendanceScheduleFrontendLifetimeTotalsParams {
    /** The business key. */
    k_business: string;
    /** The user key. */
    uid: string;
}
export interface WlProfileAttendanceScheduleFrontendLifetimeTotalsResponse {
    a_total: Array<{
        /** Total title. */
        text_title: string;
        /** Total value. */
        s_value: number;
    }>;
}
export interface WlBusinessAccountSubscriptionAchieveAchieveSubscriptionParams {
    /** Business key to check Achieve app subscription plan. */
    k_business: string;
}
export interface WlBusinessAccountSubscriptionAchieveAchieveSubscriptionResponse {
    /** If Achieve app has free subscription plan is `true`, otherwise (white label, professional) - `fal... */
    is_free: boolean;
    /** If Achieve app has white label subscription plan is `true`, otherwise (free, professional) - `fal... */
    is_white_label: boolean;
}
export type WlLoginPromotionGuestPassClaimClaimParams = Record<string, unknown>;
export type WlLoginPromotionGuestPassClaimClaimResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassInviteInviteDeleteParams {
    /** Business key. */
    k_business: string;
    /** Secret of the invitation. */
    s_secret: string;
}
export type WlLoginPromotionGuestPassInviteInviteDeleteResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassInviteInvitePutParams {
    /** Business key. */
    k_business: string;
    /** Secret of the invitation. */
    s_secret: string;
}
export type WlLoginPromotionGuestPassInviteInvitePutResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassInviteInviteListGetParams {
    /** Whether to include invitations that have already expired or were revoked. */
    is_include_expire: boolean;
    /** Key of the business within which guest pass invitations are managed. */
    k_business: string;
    /** End of the guest pass activity period. */
    dl_end?: string | null;
    /** Start of the guest pass activity period. */
    dl_start?: string | null;
    /** Key of the login promotion which provides the guest pass invitation. */
    k_login_promotion?: string | null;
    /** Key of the invited user. */
    uid_guest?: string | null;
    /** Key of the host user who sent the invitation. */
    uid_host?: string | null;
}
export interface WlLoginPromotionGuestPassInviteInviteListGetResponse {
    a_list: Array<{
        /** Guest user identity data. */
        a_guest: {
            /** Guest email address. */
            text_mail: string;
            /** Guest first name. */
            text_name_first: string;
            /** Guest last name. */
            text_name_last: string;
            /** Guest phone number, or `null` if not available. */
            text_phone: string | null;
            /** Guest user key. */
            uid: string | null;
        };
        /** Acceptance date and time in business timezone in MySQL datetime format. */
        dtl_accept: string | null;
        /** Expiry date and time in business timezone in MySQL datetime format. */
        dtl_expire: string | null;
        /** Date and time the invitation was sent, in business timezone in MySQL datetime format. */
        dtl_invite: string;
        /** Redemption date and time in business timezone in MySQL datetime format. */
        dtl_redeem: string | null;
        /** Rejection date and time in business timezone in MySQL datetime format. */
        dtl_reject: string | null;
        /** Visit date and time in MySQL datetime format. */
        dtl_visit: string | null;
        /** Acceptance date and time in UTC in MySQL datetime format. */
        dtu_accept: string | null;
        /** Expiry date and time in UTC in MySQL datetime format. */
        dtu_expire: string | null;
        /** Date and time the invitation was sent, in UTC in MySQL datetime format. */
        dtu_invite: string;
        /** Redemption date and time in UTC in MySQL datetime format. */
        dtu_redeem: string | null;
        /** Rejection date and time in UTC in MySQL datetime format. */
        dtu_reject: string | null;
        /** Lifecycle state of a guest pass invitation. */
        id_status: number;
        /** `true` if the guest may only enter when the inviting member is checked in. */
        is_checkin: boolean | null;
        /** `true` if associated visit in future, `false` otherwise. */
        is_visit_future: boolean;
        /** Login promotion key granted to the guest upon acceptance. */
        k_login_promotion_guest: string | null;
        /** Login promotion key of the host membership. */
        k_login_promotion_host: string;
        /** Guest promotion key. */
        k_promotion: string;
        /** Visit key redeemed with this guest pass. */
        k_visit: string | null;
        /** Secret token used to accept or reject the invitation via a direct link. */
        s_secret: string;
        /** Full name of the host user who sent the invitation. */
        text_host_name: string | null;
        /** Title of the guest promotion. */
        text_promotion_guest: string;
        /** Title of the host promotion. */
        text_promotion_host: string;
        /** Title of the service booked with the guest pass. */
        text_service_title: string | null;
        /** Name of the business timezone used for all `dtl_*` fields (e.g. "America/New_York"). */
        text_timezone: string;
        /** User key of the host who sent the invitation. */
        uid_host: string | null;
        /** URL to the attendance page for the associated class period. */
        url_service: string;
    }>;
}
export interface WlLoginPromotionGuestPassInviteInviteListPostParams {
    /** Key of the business within which guest pass invitations are managed. */
    k_business: string;
    /** Key of the login promotion which provides the guest pass invitation. */
    k_login_promotion?: string | null;
    /** Key of the invited user. */
    uid_guest?: string | null;
}
export type WlLoginPromotionGuestPassInviteInviteListPostResponse = Record<string, unknown>;
export interface WlLoginPromotionGuestPassApplyApplyParams {
    /** Business key. */
    k_business: string;
}
export type WlLoginPromotionGuestPassApplyApplyResponse = Record<string, unknown>;
export interface WlMemberProgressFieldEditFieldGetParams {
    /** Business key. */
    k_business: string;
    /** Field key. */
    k_field: string;
}
export interface WlMemberProgressFieldEditFieldGetResponse {
    /** A list of field measurement. See [MeasurementSid](#/components/schemas/Wl.Member.Progress.Field.M... */
    a_measurement: Array<number>;
    /** A list of field type. See [TypeSid](#/components/schemas/Wl.Member.Progress.Field.TypeSid). */
    a_type: Array<number>;
    /** List of progress log fields. */
    id_field: number;
    /** Possible measurement units of the progress fields values. */
    id_measurement_unit: number;
    /** Possible types of the progress fields values. */
    id_type: number;
    /** Whether field is active and should be displayed on page. */
    is_active: boolean;
    /** Whether this field is public. If this field is set to `false`, this field is not visible to clients. */
    is_public: boolean;
    /** Whether field value is required for clients. */
    is_require: boolean;
    /** Whether field value is required for staffs. */
    is_require_staff: boolean;
    /** Field title. */
    text_title: string | null;
}
export interface WlMemberProgressFieldEditFieldPostParams {
    /** Business key. */
    k_business: string;
    /** Field key. */
    k_field: string;
}
export interface WlMemberProgressFieldEditFieldPostResponse {
    /** Field title. */
    text_title: string | null;
}
export interface WlMemberProgressLogEditLogGetParams {
    /** Progress log local date. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressLogEditLogGetResponse {
    a_field_list: Array<{
        /** List of progress log fields. */
        id_field: number;
        /** Possible measurement units of the progress fields values. */
        id_measurement_unit: number;
        /** Possible types of the progress fields values. */
        id_type: number;
        /** Field key. */
        k_field: string;
        /** Progress field log value. */
        x_value: string;
        /** Translated field name. */
        text_name: string;
    }>;
    /** Last local date when the user entered progress values. `null` if the user had not entered progres... */
    dt_last: string | null;
    /** How we want to see this page. As a staff or as a user. */
    is_staff: boolean;
}
export interface WlMemberProgressLogEditLogPostParams {
    /** Progress log local date. */
    dt_date: string;
    /** Business key. */
    k_business: string;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressLogEditLogPostResponse {
    a_field_list: Array<{
        /** List of progress log fields. */
        id_field: number;
        /** Possible measurement units of the progress fields values. */
        id_measurement_unit: number;
        /** Possible types of the progress fields values. */
        id_type: number;
        /** Field key. */
        k_field: string;
        /** Progress field log value. */
        x_value: string;
        /** Translated field name. */
        text_name: string;
    }>;
}
export interface WlMemberProgressLogImageImageDeleteParams {
    /** Local date of the progress picture. */
    dt_date?: string | null;
    /** Business key. */
    k_business?: string | null;
    /** User key. */
    uid?: string | null;
}
export type WlMemberProgressLogImageImageDeleteResponse = Record<string, unknown>;
export interface WlMemberProgressLogImageImageGetParams {
    /** Local date of the progress picture. */
    dt_date?: string | null;
    /** Business key. */
    k_business?: string | null;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressLogImageImageGetResponse {
    a_image: Array<{
        /** Image storage data. */
        a_image: {
            /** Actual height of thumbnail image. */
            i_height: number;
            /** Height of original image. */
            i_height_src: number;
            /** Angle on which image was rotated compared to the original. */
            i_rotate: number;
            /** Actual width of thumbnail image. */
            i_width: number;
            /** Width of original image. */
            i_width_src: number;
            /** Whether thumbnail is a resized variant of original image. If `false`, `url-thumbnail` */
            'is-resize': boolean;
            /** URL to original image in file storage. */
            'url-view': string;
            /** URL to resized and rotated image in file storage. If the original is larger than */
            'url-thumbnail': string;
        };
        /** Max image size. */
        'i-size': number;
        /** Image thumbnail height. */
        'i-thumbnail-height': number;
        /** Image thumbnail width. */
        'i-thumbnail-width': number;
        /** Image link. */
        s_link: string;
        /** Image upload url. */
        'url-action': string;
    }>;
}
export interface WlMemberProgressLogImageImagePostParams {
    /** Local date of the progress picture. */
    dt_date?: string | null;
    /** Business key. */
    k_business?: string | null;
    /** User key. */
    uid?: string | null;
}
export type WlMemberProgressLogImageImagePostResponse = Record<string, unknown>;
export interface WlMemberProgressLogCompareCompareParams {
    /** Key of business to get information for. */
    k_business: string;
    /** User key to search dates for. */
    uid: string;
}
export interface WlMemberProgressLogCompareCompareResponse {
    /** List of local dates of the progress log. */
    a_date: Array<string>;
}
export interface WlMemberProgressGoalEditGoalGetParams {
    /** Business key. */
    k_business: string;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressGoalEditGoalGetResponse {
    a_field_list: Array<{
        /** List of progress log fields. */
        id_field: number;
        /** Possible measurement units of the progress fields values. */
        id_measurement_unit: number;
        /** Possible types of the progress fields values. */
        id_type: number;
        /** Field key. */
        k_field: string;
        /** Progress field log value. */
        x_value: string;
        /** Translated field name. */
        text_name: string;
    }>;
    /** How we want to see this page. As a staff or as a user. */
    is_staff: boolean;
}
export interface WlMemberProgressGoalEditGoalPostParams {
    /** Business key. */
    k_business: string;
    /** User key. */
    uid?: string | null;
}
export interface WlMemberProgressGoalEditGoalPostResponse {
    a_field_list: Array<{
        /** List of progress log fields. */
        id_field: number;
        /** Possible measurement units of the progress fields values. */
        id_measurement_unit: number;
        /** Possible types of the progress fields values. */
        id_type: number;
        /** Field key. */
        k_field: string;
        /** Progress field log value. */
        x_value: string;
        /** Translated field name. */
        text_name: string;
    }>;
}
export interface WlShopProductOptionInventoryCountInventoryCountGetParams {
    /** The list of notes for product options in the store. */
    a_note: Array<string>;
    /** The list of product option quantities in the store. */
    a_quantity: Array<number>;
    /** The current business. */
    k_business: string;
    /** The product barcode, used for the search. */
    text_barcode: string;
}
export interface WlShopProductOptionInventoryCountInventoryCountGetResponse {
    a_product_option: Array<{
        /** Information about the product option image: */
        a_image: {
            /** The image height. */
            i_height: number;
            /** The image width. */
            i_width: number;
            /** The image URL. */
            url: string;
        };
        /** The date of the last product inventory change. */
        dl_change: string;
        /** The product option quantity. */
        i_count: number;
        /** The location key. */
        k_location: string;
        /** The key of the product option in the store. */
        k_shop_product_option: string;
        /** The key of the product option inventory in the store. */
        k_shop_product_option_inventory: string;
        /** The title of the store category. */
        text_category: string;
        /** The location title. */
        text_location: string;
        /** The product option inventory note. */
        text_note: string;
        /** The product option title. */
        text_option: string;
        /** The product option title. */
        text_product: string;
    }>;
    /** The current username. */
    text_user_name: string;
}
export interface WlShopProductOptionInventoryCountInventoryCountPostParams {
    /** The list of notes for product options in the store. */
    a_note: Array<string>;
    /** The list of product option quantities in the store. */
    a_quantity: Array<number>;
    /** The current business. */
    k_business: string;
}
export type WlShopProductOptionInventoryCountInventoryCountPostResponse = Record<string, unknown>;
export declare class ThothExplorerSearchClassSessionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets list of class sessions based on search criteria. */
    classSessionSearch(params?: ThothExplorerSearchClassSessionClassSessionSearchParams): Promise<ThothExplorerSearchClassSessionClassSessionSearchResponse>;
}
export declare class ThothExplorerSearchNamespace {
    private readonly _client;
    readonly classSession: ThothExplorerSearchClassSessionNamespace;
    constructor(_client: WlClient);
}
export declare class ThothReportCoreGeneratorNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns contents of a report as a table. */
    query(params?: ThothReportCoreGeneratorQueryParams): Promise<ThothReportCoreGeneratorQueryResponse>;
}
export declare class ThothReportCoreNamespace {
    private readonly _client;
    readonly generator: ThothReportCoreGeneratorNamespace;
    constructor(_client: WlClient);
}
export declare class ThothWlPayAccountChargeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Allows the user account to be filled with a specified payment, or to perform the reset change manually. */
    charge(params?: ThothWlPayAccountChargeChargeParams): Promise<ThothWlPayAccountChargeChargeResponse>;
}
export declare class ThothWlPayAccountNamespace {
    private readonly _client;
    readonly charge: ThothWlPayAccountChargeNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about accounts of given user in given business. */
    account(params?: ThothWlPayAccountAccountParams): Promise<ThothWlPayAccountAccountResponse>;
}
export declare class ThothWlPayFormNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about payment environment. */
    environmentUser(params?: ThothWlPayFormEnvironmentUserParams): Promise<ThothWlPayFormEnvironmentUserResponse>;
    /** Returns information about payment environment. */
    /** @deprecated */
    environment(params?: ThothWlPayFormEnvironmentParams): Promise<ThothWlPayFormEnvironmentResponse>;
}
export declare class ThothWlPayMethodNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of active payment methods data. */
    list(params?: ThothWlPayMethodListParams): Promise<ThothWlPayMethodListResponse>;
}
export declare class ThothWlPayOwnerNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about payment owner. */
    owner(params?: ThothWlPayOwnerOwnerParams): Promise<ThothWlPayOwnerOwnerResponse>;
}
export declare class ThothWlPayAddressNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets user's payment addresses information. */
    address(params?: ThothWlPayAddressAddressParams): Promise<ThothWlPayAddressAddressResponse>;
    /** Returns default payment address data that is retrieved from user profile. */
    profile(params?: ThothWlPayAddressProfileParams): Promise<ThothWlPayAddressProfileResponse>;
}
export declare class ThothWlPayTransactionReportNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets the daily transaction data. */
    transactionAllPayment(params?: ThothWlPayTransactionReportTransactionAllPaymentParams): Promise<ThothWlPayTransactionReportTransactionAllPaymentResponse>;
}
export declare class ThothWlPayTransactionNamespace {
    private readonly _client;
    readonly report: ThothWlPayTransactionReportNamespace;
    constructor(_client: WlClient);
}
export declare class ThothWlPayBankCardAddNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes saved card. */
    addDelete(params?: ThothWlPayBankCardAddAddDeleteParams): Promise<ThothWlPayBankCardAddAddDeleteResponse>;
    /** Gets code of bank card widget. */
    /** @deprecated */
    addGet(params?: ThothWlPayBankCardAddAddGetParams): Promise<ThothWlPayBankCardAddAddGetResponse>;
    /** Saves new bank card. */
    addPost(params?: ThothWlPayBankCardAddAddPostParams): Promise<ThothWlPayBankCardAddAddPostResponse>;
}
export declare class ThothWlPayBankCardNamespace {
    private readonly _client;
    readonly add: ThothWlPayBankCardAddNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about user's bank cards. */
    list(params?: ThothWlPayBankCardListParams): Promise<ThothWlPayBankCardListResponse>;
}
export declare class ThothWlPayBankNamespace {
    private readonly _client;
    readonly card: ThothWlPayBankCardNamespace;
    constructor(_client: WlClient);
}
export declare class ThothWlPayNamespace {
    private readonly _client;
    readonly account: ThothWlPayAccountNamespace;
    readonly form: ThothWlPayFormNamespace;
    readonly method: ThothWlPayMethodNamespace;
    readonly owner: ThothWlPayOwnerNamespace;
    readonly address: ThothWlPayAddressNamespace;
    readonly transaction: ThothWlPayTransactionNamespace;
    readonly bank: ThothWlPayBankNamespace;
    constructor(_client: WlClient);
}
export declare class ThothNamespace {
    private readonly _client;
    readonly explorerSearch: ThothExplorerSearchNamespace;
    readonly reportCore: ThothReportCoreNamespace;
    readonly wlPay: ThothWlPayNamespace;
    constructor(_client: WlClient);
}
export declare class CoreRequestApiApplicationCredentialNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified credential for the application. */
    credentialDelete(params?: CoreRequestApiApplicationCredentialCredentialDeleteParams): Promise<CoreRequestApiApplicationCredentialCredentialDeleteResponse>;
    /** Returns the credential data for the application. */
    credentialGet(params?: CoreRequestApiApplicationCredentialCredentialGetParams): Promise<CoreRequestApiApplicationCredentialCredentialGetResponse>;
    /** Saves the credential for the application. */
    credentialPut(params?: CoreRequestApiApplicationCredentialCredentialPutParams): Promise<CoreRequestApiApplicationCredentialCredentialPutResponse>;
}
export declare class CoreRequestApiApplicationNamespace {
    private readonly _client;
    readonly credential: CoreRequestApiApplicationCredentialNamespace;
    constructor(_client: WlClient);
    /** Restricts access to API for all sites, which are given in the list. */
    originDelete(params?: CoreRequestApiApplicationOriginDeleteParams): Promise<CoreRequestApiApplicationOriginDeleteResponse>;
    /** Gets list of all sites, where usage of the API is allowed for the current application. */
    originGet(params?: CoreRequestApiApplicationOriginGetParams): Promise<CoreRequestApiApplicationOriginGetResponse>;
    /** Allows access to API for all sites, which are given in the list. */
    originPut(params?: CoreRequestApiApplicationOriginPutParams): Promise<CoreRequestApiApplicationOriginPutResponse>;
}
export declare class CoreRequestApiNamespace {
    private readonly _client;
    readonly application: CoreRequestApiApplicationNamespace;
    constructor(_client: WlClient);
    /** Gets a secret key for signing. */
    keySecret(params?: CoreRequestApiKeySecretParams): Promise<CoreRequestApiKeySecretResponse>;
}
export declare class CoreRequestTokenNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets new pin code. */
    tokenPin(params?: CoreRequestTokenTokenPinParams): Promise<CoreRequestTokenTokenPinResponse>;
}
export declare class CoreRequestNamespace {
    private readonly _client;
    readonly api: CoreRequestApiNamespace;
    readonly token: CoreRequestTokenNamespace;
    constructor(_client: WlClient);
    /** Returns the example result for debugging. */
    example(params?: CoreRequestExampleParams): Promise<CoreRequestExampleResponse>;
}
export declare class CoreGeoRegionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about countries and regions. */
    region(params?: CoreGeoRegionRegionParams): Promise<CoreGeoRegionRegionResponse>;
}
export declare class CoreGeoNamespace {
    private readonly _client;
    readonly region: CoreGeoRegionNamespace;
    constructor(_client: WlClient);
    /** Returns a list of cities to show in combobox list. */
    combobox(params?: CoreGeoComboboxParams): Promise<CoreGeoComboboxResponse>;
}
export declare class CoreGoogleCaptchaNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves the user CAPTCHA token for the current session. */
    googleCaptcha(params?: CoreGoogleCaptchaGoogleCaptchaParams): Promise<CoreGoogleCaptchaGoogleCaptchaResponse>;
    /** Returns the overridden score for the reCAPTCHA v3. */
    captchaScoreGet(params?: CoreGoogleCaptchaCaptchaScoreGetParams): Promise<CoreGoogleCaptchaCaptchaScoreGetResponse>;
    /** Validates the reCAPTCHA v3 token. */
    captchaScorePost(params?: CoreGoogleCaptchaCaptchaScorePostParams): Promise<CoreGoogleCaptchaCaptchaScorePostResponse>;
    /** Overrides the score for the reCAPTCHA v3. */
    captchaScorePut(params?: CoreGoogleCaptchaCaptchaScorePutParams): Promise<CoreGoogleCaptchaCaptchaScorePutResponse>;
}
export declare class CoreGoogleNamespace {
    private readonly _client;
    readonly captcha: CoreGoogleCaptchaNamespace;
    constructor(_client: WlClient);
    /** Saves the user CAPTCHA token for the current session. */
    /** @deprecated */
    googleCaptcha(params?: CoreGoogleGoogleCaptchaParams): Promise<CoreGoogleGoogleCaptchaResponse>;
}
export declare class CoreWebSocketNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks whether a listener can subscribe to specified channel. Subscribes in a case of positive result. */
    subscribe(params?: CoreWebSocketSubscribeParams): Promise<CoreWebSocketSubscribeResponse>;
}
export declare class CoreSidNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of all items for the given Sid class. */
    coreSid(params?: CoreSidCoreSidParams): Promise<CoreSidCoreSidResponse>;
}
export declare class CoreCaptchaNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if a CAPTCHA is required for the given captcha type. */
    captchaRequire(params?: CoreCaptchaCaptchaRequireParams): Promise<CoreCaptchaCaptchaRequireResponse>;
}
export declare class CoreDriveImageUploadNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about the image. */
    imageUploadGet(params?: CoreDriveImageUploadImageUploadGetParams): Promise<CoreDriveImageUploadImageUploadGetResponse>;
    /** Loads image information for a list of IDs. The POST method is used instead of the GET method because the maximum permitted URI length is restricted. */
    imageUploadPost(params?: CoreDriveImageUploadImageUploadPostParams): Promise<CoreDriveImageUploadImageUploadPostResponse>;
    /** Updates the image. */
    imageUploadPut(params?: CoreDriveImageUploadImageUploadPutParams): Promise<CoreDriveImageUploadImageUploadPutResponse>;
    /** Saves new uploaded image. */
    imageUploadTemporary(params?: CoreDriveImageUploadImageUploadTemporaryParams): Promise<CoreDriveImageUploadImageUploadTemporaryResponse>;
}
export declare class CoreDriveNamespace {
    private readonly _client;
    readonly imageUpload: CoreDriveImageUploadNamespace;
    constructor(_client: WlClient);
}
export declare class CorePassportLoginEnterNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Signs the user in using their login and hashed password. */
    enter(params?: CorePassportLoginEnterEnterParams): Promise<CorePassportLoginEnterEnterResponse>;
    /** Generates notepad for user sign in form. */
    notepad(params?: CorePassportLoginEnterNotepadParams): Promise<CorePassportLoginEnterNotepadResponse>;
}
export declare class CorePassportLoginRegisterNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Validates the new user's data and sends a confirmation email to complete registration. */
    register(params?: CorePassportLoginRegisterRegisterParams): Promise<CorePassportLoginRegisterRegisterResponse>;
    /** Confirms email of a new user and completes registration. */
    registerConfirm(params?: CorePassportLoginRegisterRegisterConfirmParams): Promise<CorePassportLoginRegisterRegisterConfirmResponse>;
}
export declare class CorePassportLoginSignOutNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Signs user out. */
    signOut(params?: CorePassportLoginSignOutSignOutParams): Promise<CorePassportLoginSignOutSignOutResponse>;
}
export declare class CorePassportLoginNamespace {
    private readonly _client;
    readonly enter: CorePassportLoginEnterNamespace;
    readonly register: CorePassportLoginRegisterNamespace;
    readonly signOut: CorePassportLoginSignOutNamespace;
    constructor(_client: WlClient);
    /** Returns information about user that is currently signed in. */
    info(params?: CorePassportLoginInfoParams): Promise<CorePassportLoginInfoResponse>;
}
export declare class CorePassportChangePasswordNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves for user new password. */
    changePasswordApply(params?: CorePassportChangePasswordChangePasswordApplyParams): Promise<CorePassportChangePasswordChangePasswordApplyResponse>;
    /** Sends to user "password recovery" mail. */
    changePasswordBegin(params?: CorePassportChangePasswordChangePasswordBeginParams): Promise<CorePassportChangePasswordChangePasswordBeginResponse>;
}
export declare class CorePassportEnterJwtNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns a jwt token that can be used to log user. */
    jwtToken(params?: CorePassportEnterJwtJwtTokenParams): Promise<CorePassportEnterJwtJwtTokenResponse>;
}
export declare class CorePassportEnterNamespace {
    private readonly _client;
    readonly jwt: CorePassportEnterJwtNamespace;
    constructor(_client: WlClient);
}
export declare class CorePassportUserEmailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if email address exists. */
    emailExist(params?: CorePassportUserEmailEmailExistParams): Promise<CorePassportUserEmailEmailExistResponse>;
}
export declare class CorePassportUserNamespace {
    private readonly _client;
    readonly email: CorePassportUserEmailNamespace;
    constructor(_client: WlClient);
}
export declare class CorePassportNamespace {
    private readonly _client;
    readonly login: CorePassportLoginNamespace;
    readonly changePassword: CorePassportChangePasswordNamespace;
    readonly enter: CorePassportEnterNamespace;
    readonly user: CorePassportUserNamespace;
    constructor(_client: WlClient);
}
export declare class CoreNamespace {
    private readonly _client;
    readonly request: CoreRequestNamespace;
    readonly geo: CoreGeoNamespace;
    readonly google: CoreGoogleNamespace;
    readonly webSocket: CoreWebSocketNamespace;
    readonly sid: CoreSidNamespace;
    readonly captcha: CoreCaptchaNamespace;
    readonly drive: CoreDriveNamespace;
    readonly passport: CorePassportNamespace;
    constructor(_client: WlClient);
}
export declare class SocialMicrosoftNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes the association between a website client and a Microsoft account. */
    loginDelete(params?: SocialMicrosoftLoginDeleteParams): Promise<SocialMicrosoftLoginDeleteResponse>;
    /** Collects data for the Microsoft login button. */
    loginGet(params?: SocialMicrosoftLoginGetParams): Promise<SocialMicrosoftLoginGetResponse>;
    /** Signs a user in with Microsoft. */
    loginPost(params?: SocialMicrosoftLoginPostParams): Promise<SocialMicrosoftLoginPostResponse>;
}
export declare class SocialAppleLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes the association between a website client and the Apple account. Invalidates the tokens and associated client authorizations. */
    appleLoginDelete(params?: SocialAppleLoginAppleLoginDeleteParams): Promise<SocialAppleLoginAppleLoginDeleteResponse>;
    /** Signs user in with Apple. */
    appleLoginPost(params?: SocialAppleLoginAppleLoginPostParams): Promise<SocialAppleLoginAppleLoginPostResponse>;
}
export declare class SocialAppleNamespace {
    private readonly _client;
    readonly login: SocialAppleLoginNamespace;
    constructor(_client: WlClient);
}
export declare class SocialFacebookLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Authorizes user with facebook. */
    login(params?: SocialFacebookLoginLoginParams): Promise<SocialFacebookLoginLoginResponse>;
}
export declare class SocialFacebookNamespace {
    private readonly _client;
    readonly login: SocialFacebookLoginNamespace;
    constructor(_client: WlClient);
}
export declare class SocialGooglePlusNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Authorizes user with Google. */
    login(params?: SocialGooglePlusLoginParams): Promise<SocialGooglePlusLoginResponse>;
}
export declare class SocialGoogleNamespace {
    private readonly _client;
    readonly plus: SocialGooglePlusNamespace;
    constructor(_client: WlClient);
}
export declare class SocialNamespace {
    private readonly _client;
    readonly microsoft: SocialMicrosoftNamespace;
    readonly apple: SocialAppleNamespace;
    readonly facebook: SocialFacebookNamespace;
    readonly google: SocialGoogleNamespace;
    constructor(_client: WlClient);
}
export declare class WlScheduleClassListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** This method is a modified Get method `get()`. The difference is as follows: */
    classList68(params?: WlScheduleClassListClassList68Params): Promise<WlScheduleClassListClassList68Response>;
    /** Retrieves a list of classes and class information for the given business and date range. */
    /** @deprecated */
    classList(params?: WlScheduleClassListClassListParams): Promise<WlScheduleClassListClassListResponse>;
}
export declare class WlScheduleTabNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about tabs for page "Book now". */
    tab(params?: WlScheduleTabTabParams): Promise<WlScheduleTabTabResponse>;
}
export declare class WlScheduleClassViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about class. */
    classViewGet(params?: WlScheduleClassViewClassViewGetParams): Promise<WlScheduleClassViewClassViewGetResponse>;
    /** Retrieves information about classes. */
    classViewPost(params?: WlScheduleClassViewClassViewPostParams): Promise<WlScheduleClassViewClassViewPostResponse>;
}
export declare class WlSchedulePageNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about one element of schedule. */
    pageElement(params?: WlSchedulePagePageElementParams): Promise<WlSchedulePagePageElementResponse>;
    /** Retrieves items of schedule for the client. */
    pageList(params?: WlSchedulePagePageListParams): Promise<WlSchedulePagePageListResponse>;
}
export declare class WlScheduleScheduleListStaffAppNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets schedule of business `k_business` for day `dt_date`. */
    scheduleList(params?: WlScheduleScheduleListStaffAppScheduleListParams): Promise<WlScheduleScheduleListStaffAppScheduleListResponse>;
    /** Gets schedule of business [ScheduleListApi](/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json) for day [ScheduleListApi](/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json). */
    scheduleListByToken(params?: WlScheduleScheduleListStaffAppScheduleListByTokenParams): Promise<WlScheduleScheduleListStaffAppScheduleListByTokenResponse>;
}
export declare class WlScheduleScheduleListNamespace {
    private readonly _client;
    readonly staffApp: WlScheduleScheduleListStaffAppNamespace;
    constructor(_client: WlClient);
}
export declare class WlScheduleNamespace {
    private readonly _client;
    readonly classList: WlScheduleClassListNamespace;
    readonly tab: WlScheduleTabNamespace;
    readonly classView: WlScheduleClassViewNamespace;
    readonly page: WlSchedulePageNamespace;
    readonly scheduleList: WlScheduleScheduleListNamespace;
    constructor(_client: WlClient);
    /** Cancels session for the client. */
    cancelGet(params?: WlScheduleCancelGetParams): Promise<WlScheduleCancelGetResponse>;
    /** Cancels session for the client. This method is an alias for partners using the API or SDK. */
    cancelPost(params?: WlScheduleCancelPostParams): Promise<WlScheduleCancelPostResponse>;
    /** Finds the nearest class session that can be booked by the current user. */
    scheduleAvailableDate(params?: WlScheduleScheduleAvailableDateParams): Promise<WlScheduleScheduleAvailableDateResponse>;
}
export declare class WlVisitNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets visit status. */
    visitStatusGet(params?: WlVisitVisitStatusGetParams): Promise<WlVisitVisitStatusGetResponse>;
    /** Changes visit status. */
    visitStatusPost(params?: WlVisitVisitStatusPostParams): Promise<WlVisitVisitStatusPostResponse>;
}
export declare class WlLocationFlagNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if user `uid` is flagged in location `k_location` or each of users `a_uid` is flagged in location `k_location`. */
    flag(params?: WlLocationFlagFlagParams): Promise<WlLocationFlagFlagResponse>;
}
export declare class WlLocationWorkTimeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves working hours of the location. */
    locationWorkTime(params?: WlLocationWorkTimeLocationWorkTimeParams): Promise<WlLocationWorkTimeLocationWorkTimeResponse>;
}
export declare class WlLocationViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns detailed information about the specified location. */
    view(params?: WlLocationViewViewParams): Promise<WlLocationViewViewResponse>;
}
export declare class WlLocationFacilityNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of all items for the given Sid class. */
    facilitySid(params?: WlLocationFacilityFacilitySidParams): Promise<WlLocationFacilityFacilitySidResponse>;
}
export declare class WlLocationNamespace {
    private readonly _client;
    readonly flag: WlLocationFlagNamespace;
    readonly workTime: WlLocationWorkTimeNamespace;
    readonly view: WlLocationViewNamespace;
    readonly facility: WlLocationFacilityNamespace;
    constructor(_client: WlClient);
    /** Gets location lists for a bulk of businesses. */
    listBulk(params?: WlLocationListBulkParams): Promise<WlLocationListBulkResponse>;
    /** Creates new location or edits the existing location. */
    location(params?: WlLocationLocationParams): Promise<WlLocationLocationResponse>;
    /** Retrieves a list of locations for the given business. */
    list(params?: WlLocationListParams): Promise<WlLocationListResponse>;
}
export declare class WlProfileEditEmailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if specified email address is busy. */
    editEmail67Get(params?: WlProfileEditEmailEditEmail67GetParams): Promise<WlProfileEditEmailEditEmail67GetResponse>;
    /** Adds user to business. */
    editEmail67Post(params?: WlProfileEditEmailEditEmail67PostParams): Promise<WlProfileEditEmailEditEmail67PostResponse>;
    /** Checks if specified email address is busy. */
    /** @deprecated */
    editEmailGet(params?: WlProfileEditEmailEditEmailGetParams): Promise<WlProfileEditEmailEditEmailGetResponse>;
    /** Adds user to business. */
    /** @deprecated */
    editEmailPost(params?: WlProfileEditEmailEditEmailPostParams): Promise<WlProfileEditEmailEditEmailPostResponse>;
}
export declare class WlProfileEditNamespace {
    private readonly _client;
    readonly email: WlProfileEditEmailNamespace;
    constructor(_client: WlClient);
    /** Returns current user profile information. */
    editGet(params?: WlProfileEditEditGetParams): Promise<WlProfileEditEditGetResponse>;
    /** Creates a new user. */
    editPost(params?: WlProfileEditEditPostParams): Promise<WlProfileEditEditPostResponse>;
    /** Updates values of profile fields. */
    editPut(params?: WlProfileEditEditPutParams): Promise<WlProfileEditEditPutResponse>;
    /** Creates a new user. */
    create(params?: WlProfileEditCreateParams): Promise<WlProfileEditCreateResponse>;
    /** Returns current user profile information. */
    editByTokenGet(params?: WlProfileEditEditByTokenGetParams): Promise<WlProfileEditEditByTokenGetResponse>;
    /** Creates a new user. */
    editByTokenPost(params?: WlProfileEditEditByTokenPostParams): Promise<WlProfileEditEditByTokenPostResponse>;
    /** Updates values of profile fields. */
    editByTokenPut(params?: WlProfileEditEditByTokenPutParams): Promise<WlProfileEditEditByTokenPutResponse>;
    /** Saves new password for user. */
    editPassword(params?: WlProfileEditEditPasswordParams): Promise<WlProfileEditEditPasswordResponse>;
}
export declare class WlProfileAttachNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of file attachments for the specified client in the given business. */
    attachList(params?: WlProfileAttachAttachListParams): Promise<WlProfileAttachAttachListResponse>;
    /** Deletes the attachment. */
    attachElementDelete(params?: WlProfileAttachAttachElementDeleteParams): Promise<WlProfileAttachAttachElementDeleteResponse>;
    /** Gets the data for the attachment editing form. */
    attachElementGet(params?: WlProfileAttachAttachElementGetParams): Promise<WlProfileAttachAttachElementGetResponse>;
    /** In case the attachment key is not specified, it adds a new attachment. In case the attachment key is specified, edits the attachment. */
    attachElementPost(params?: WlProfileAttachAttachElementPostParams): Promise<WlProfileAttachAttachElementPostResponse>;
}
export declare class WlProfilePurchaseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about 1 purchase item. */
    /** @deprecated */
    purchaseElement(params?: WlProfilePurchasePurchaseElementParams): Promise<WlProfilePurchasePurchaseElementResponse>;
    /** Retrieves a list of user's purchase items to show in user profile. */
    /** @deprecated */
    purchaseList(params?: WlProfilePurchasePurchaseListParams): Promise<WlProfilePurchasePurchaseListResponse>;
}
export declare class WlProfilePurchaseListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of user's purchase items to show in user profile. */
    purchaseList(params?: WlProfilePurchaseListPurchaseListParams): Promise<WlProfilePurchaseListPurchaseListResponse>;
    /** Retrieves information about 1 purchase item. */
    purchaseListElement(params?: WlProfilePurchaseListPurchaseListElementParams): Promise<WlProfilePurchaseListPurchaseListElementResponse>;
}
export declare class WlProfileAlertNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of notices to show in user's profile. */
    alert(params?: WlProfileAlertAlertParams): Promise<WlProfileAlertAlertResponse>;
    /** Deletes existing note. */
    alertEditDelete(params?: WlProfileAlertAlertEditDeleteParams): Promise<WlProfileAlertAlertEditDeleteResponse>;
    /** Retrieves login note data. */
    alertEditGet(params?: WlProfileAlertAlertEditGetParams): Promise<WlProfileAlertAlertEditGetResponse>;
    /** Creates new text note or updates the existing one. */
    alertEditPost(params?: WlProfileAlertAlertEditPostParams): Promise<WlProfileAlertAlertEditPostResponse>;
}
export declare class WlProfileTermNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns online waiver information for the specified user and business. */
    term(params?: WlProfileTermTermParams): Promise<WlProfileTermTermResponse>;
}
export declare class WlProfileAttendanceScheduleFrontendNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves lifetime visit totals. */
    lifetimeTotals(params?: WlProfileAttendanceScheduleFrontendLifetimeTotalsParams): Promise<WlProfileAttendanceScheduleFrontendLifetimeTotalsResponse>;
}
export declare class WlProfileAttendanceScheduleNamespace {
    private readonly _client;
    readonly frontend: WlProfileAttendanceScheduleFrontendNamespace;
    constructor(_client: WlClient);
}
export declare class WlProfileAttendanceNamespace {
    private readonly _client;
    readonly schedule: WlProfileAttendanceScheduleNamespace;
    constructor(_client: WlClient);
    /** Returns a list of visits that overlap with the specified service, class, resource, or time data. */
    attendanceOverlap(params?: WlProfileAttendanceAttendanceOverlapParams): Promise<WlProfileAttendanceAttendanceOverlapResponse>;
}
export declare class WlProfileSettingNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of user settings and other additional information for the settings page. */
    settingGet(params?: WlProfileSettingSettingGetParams): Promise<WlProfileSettingSettingGetResponse>;
    /** Saves the user's notification settings for the specified business. */
    settingPost(params?: WlProfileSettingSettingPostParams): Promise<WlProfileSettingSettingPostResponse>;
}
export declare class WlProfileActivityNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about activity item. */
    element(params?: WlProfileActivityElementParams): Promise<WlProfileActivityElementResponse>;
    /** Retrieves a list of activity items to show in user profile. */
    list(params?: WlProfileActivityListParams): Promise<WlProfileActivityListResponse>;
}
export declare class WlProfileContractNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns contract information for the specified purchase option. */
    contractGet(params?: WlProfileContractContractGetParams): Promise<WlProfileContractContractGetResponse>;
    /** Completes a sale of a Purchase Option requiring a contract by submitting the signed contract. */
    contractPost(params?: WlProfileContractContractPostParams): Promise<WlProfileContractContractPostResponse>;
}
export declare class WlProfileFormResponseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the lists of completed and pending quiz responses for the specified user and business. */
    responseList(params?: WlProfileFormResponseResponseListParams): Promise<WlProfileFormResponseResponseListResponse>;
}
export declare class WlProfileFormNamespace {
    private readonly _client;
    readonly response: WlProfileFormResponseNamespace;
    constructor(_client: WlClient);
}
export declare class WlProfileNamespace {
    private readonly _client;
    readonly edit: WlProfileEditNamespace;
    readonly attach: WlProfileAttachNamespace;
    readonly purchase: WlProfilePurchaseNamespace;
    readonly purchaseList: WlProfilePurchaseListNamespace;
    readonly alert: WlProfileAlertNamespace;
    readonly term: WlProfileTermNamespace;
    readonly attendance: WlProfileAttendanceNamespace;
    readonly setting: WlProfileSettingNamespace;
    readonly activity: WlProfileActivityNamespace;
    readonly contract: WlProfileContractNamespace;
    readonly form: WlProfileFormNamespace;
    constructor(_client: WlClient);
    /** Creates a new client profile with the provided personal details in the specified business. */
    profileCreate(params?: WlProfileProfileCreateParams): Promise<WlProfileProfileCreateResponse>;
}
export declare class WlEventBookEventViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about event item. */
    element(params?: WlEventBookEventViewElementParams): Promise<WlEventBookEventViewElementResponse>;
}
export declare class WlEventBookEventListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of events. */
    list(params?: WlEventBookEventListListParams): Promise<WlEventBookEventListListResponse>;
}
export declare class WlEventBookNamespace {
    private readonly _client;
    readonly eventView: WlEventBookEventViewNamespace;
    readonly eventList: WlEventBookEventListNamespace;
    constructor(_client: WlClient);
}
export declare class WlEventNamespace {
    private readonly _client;
    readonly book: WlEventBookNamespace;
    constructor(_client: WlClient);
    /** Returns the list of events matching the specified filter parameters. */
    eventListGet(params?: WlEventEventListGetParams): Promise<WlEventEventListGetResponse>;
    /** Resets the event list cache for the specified business and user. */
    eventListPut(params?: WlEventEventListPutParams): Promise<WlEventEventListPutResponse>;
    /** Cancels book of event `k_class`. */
    eventCancelWhole(params?: WlEventEventCancelWholeParams): Promise<WlEventEventCancelWholeResponse>;
}
export declare class WlBusinessPartnerNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the partner URL for the specified business. */
    partnerCodeGet(params?: WlBusinessPartnerPartnerCodeGetParams): Promise<WlBusinessPartnerPartnerCodeGetResponse>;
    /** Updates partner url for a business that takes part in the partner program. */
    partnerCodePost(params?: WlBusinessPartnerPartnerCodePostParams): Promise<WlBusinessPartnerPartnerCodePostResponse>;
    /** Returns partner settings for the business identified by the given partner code. */
    partnerSettings(params?: WlBusinessPartnerPartnerSettingsParams): Promise<WlBusinessPartnerPartnerSettingsResponse>;
}
export declare class WlBusinessAccountSubscriptionAchieveNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the Achieve subscription plan flags (free and white-label) for the given business. */
    achieveSubscription(params?: WlBusinessAccountSubscriptionAchieveAchieveSubscriptionParams): Promise<WlBusinessAccountSubscriptionAchieveAchieveSubscriptionResponse>;
}
export declare class WlBusinessAccountSubscriptionNamespace {
    private readonly _client;
    readonly achieve: WlBusinessAccountSubscriptionAchieveNamespace;
    constructor(_client: WlClient);
    /** Gets information about subscription. */
    subscriptionInfo(params?: WlBusinessAccountSubscriptionSubscriptionInfoParams): Promise<WlBusinessAccountSubscriptionSubscriptionInfoResponse>;
}
export declare class WlBusinessAccountNamespace {
    private readonly _client;
    readonly subscription: WlBusinessAccountSubscriptionNamespace;
    constructor(_client: WlClient);
    /** Generates list of active business keys for the same region as the requesting user (proper permissions required). */
    businessAccount(params?: WlBusinessAccountBusinessAccountParams): Promise<WlBusinessAccountBusinessAccountResponse>;
}
export declare class WlBusinessClaimNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if the email or phone number has already been used for a trial account or not. */
    businessClaimGet(params?: WlBusinessClaimBusinessClaimGetParams): Promise<WlBusinessClaimBusinessClaimGetResponse>;
    /** Completes the verification process of the trial business. */
    businessClaimPost(params?: WlBusinessClaimBusinessClaimPostParams): Promise<WlBusinessClaimBusinessClaimPostResponse>;
    /** Saves the Self-Setup wizard form data in the business claim log. */
    businessClaimPut(params?: WlBusinessClaimBusinessClaimPutParams): Promise<WlBusinessClaimBusinessClaimPutResponse>;
}
export declare class WlBusinessDesignNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** API method to get business design data. */
    businessDesign(params?: WlBusinessDesignBusinessDesignParams): Promise<WlBusinessDesignBusinessDesignResponse>;
}
export declare class WlBusinessLeadNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves a new business lead referral record submitted through the Partner Program. */
    businessLead(params?: WlBusinessLeadBusinessLeadParams): Promise<WlBusinessLeadBusinessLeadResponse>;
}
export declare class WlBusinessPhoneNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes business phone number from the system. */
    phoneDelete(params?: WlBusinessPhonePhoneDeleteParams): Promise<WlBusinessPhonePhoneDeleteResponse>;
    /** Returns phone number(in locale format) of the business, if phone number does not exist returns empty line. */
    phoneGet(params?: WlBusinessPhonePhoneGetParams): Promise<WlBusinessPhonePhoneGetResponse>;
    /** Registers business phone number in system. */
    phonePost(params?: WlBusinessPhonePhonePostParams): Promise<WlBusinessPhonePhonePostResponse>;
}
export declare class WlBusinessSearchNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Searches for businesses by name and email address and returns matching business keys. */
    businessSearchUser(params?: WlBusinessSearchBusinessSearchUserParams): Promise<WlBusinessSearchBusinessSearchUserResponse>;
    /** Searches for businesses by name and returns matching business keys. */
    businessSearch(params?: WlBusinessSearchBusinessSearchParams): Promise<WlBusinessSearchBusinessSearchResponse>;
}
export declare class WlBusinessConfigNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about a business config. */
    businessConfig(params?: WlBusinessConfigBusinessConfigParams): Promise<WlBusinessConfigBusinessConfigResponse>;
}
export declare class WlBusinessAmazonRegionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the Amazon region ID for each of the requested business keys. */
    amazonRegion(params?: WlBusinessAmazonRegionAmazonRegionParams): Promise<WlBusinessAmazonRegionAmazonRegionResponse>;
}
export declare class WlBusinessAuthorizePartnerNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Grants or denies access to business location for a partner. */
    authorizePartner(params?: WlBusinessAuthorizePartnerAuthorizePartnerParams): Promise<WlBusinessAuthorizePartnerAuthorizePartnerResponse>;
}
export declare class WlBusinessSelectNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Performs checks and generates a list of businesses according to a given configuration. */
    businessSelect(params?: WlBusinessSelectBusinessSelectParams): Promise<WlBusinessSelectBusinessSelectResponse>;
}
export declare class WlBusinessTypeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of available business types with their categories and images. */
    businessTypeList(params?: WlBusinessTypeBusinessTypeListParams): Promise<WlBusinessTypeBusinessTypeListResponse>;
}
export declare class WlBusinessWaiverNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the business waiver text rendered as HTML with user-specific variables substituted. */
    waiver(params?: WlBusinessWaiverWaiverParams): Promise<WlBusinessWaiverWaiverResponse>;
}
export declare class WlBusinessAuthorizeSupportResponseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Grants or denies access to business location for staff member. */
    response(params?: WlBusinessAuthorizeSupportResponseResponseParams): Promise<WlBusinessAuthorizeSupportResponseResponseResponse>;
}
export declare class WlBusinessAuthorizeSupportNamespace {
    private readonly _client;
    readonly response: WlBusinessAuthorizeSupportResponseNamespace;
    constructor(_client: WlClient);
}
export declare class WlBusinessFranchiseLocationNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns country, region, state, city and location lists of the franchisor. */
    businessFranchiseLocation(params?: WlBusinessFranchiseLocationBusinessFranchiseLocationParams): Promise<WlBusinessFranchiseLocationBusinessFranchiseLocationResponse>;
}
export declare class WlBusinessFranchiseNamespace {
    private readonly _client;
    readonly location: WlBusinessFranchiseLocationNamespace;
    constructor(_client: WlClient);
}
export declare class WlBusinessRewardConfigNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the reward program configuration for the specified business. */
    rewardConfigGet(params?: WlBusinessRewardConfigRewardConfigGetParams): Promise<WlBusinessRewardConfigRewardConfigGetResponse>;
    /** Updates the reward program enabled or disabled state for the specified business. */
    rewardConfigPost(params?: WlBusinessRewardConfigRewardConfigPostParams): Promise<WlBusinessRewardConfigRewardConfigPostResponse>;
}
export declare class WlBusinessRewardNamespace {
    private readonly _client;
    readonly config: WlBusinessRewardConfigNamespace;
    constructor(_client: WlClient);
}
export declare class WlBusinessUserSubscribeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about if user is subscribed on specified business or not. */
    subscribeGet(params?: WlBusinessUserSubscribeSubscribeGetParams): Promise<WlBusinessUserSubscribeSubscribeGetResponse>;
    /** Subscribes or unsubscribes user on specified business. */
    subscribePut(params?: WlBusinessUserSubscribeSubscribePutParams): Promise<WlBusinessUserSubscribeSubscribePutResponse>;
}
export declare class WlBusinessUserNamespace {
    private readonly _client;
    readonly subscribe: WlBusinessUserSubscribeNamespace;
    constructor(_client: WlClient);
}
export declare class WlBusinessNamespace {
    private readonly _client;
    readonly partner: WlBusinessPartnerNamespace;
    readonly account: WlBusinessAccountNamespace;
    readonly claim: WlBusinessClaimNamespace;
    readonly design: WlBusinessDesignNamespace;
    readonly lead: WlBusinessLeadNamespace;
    readonly phone: WlBusinessPhoneNamespace;
    readonly search: WlBusinessSearchNamespace;
    readonly config: WlBusinessConfigNamespace;
    readonly amazonRegion: WlBusinessAmazonRegionNamespace;
    readonly authorizePartner: WlBusinessAuthorizePartnerNamespace;
    readonly select: WlBusinessSelectNamespace;
    readonly type: WlBusinessTypeNamespace;
    readonly waiver: WlBusinessWaiverNamespace;
    readonly authorizeSupport: WlBusinessAuthorizeSupportNamespace;
    readonly franchise: WlBusinessFranchiseNamespace;
    readonly reward: WlBusinessRewardNamespace;
    readonly user: WlBusinessUserNamespace;
    constructor(_client: WlClient);
    /** Returns detailed information about the specified business, including locale, franchise status, services, tips, social URLs, and logo. */
    data(params?: WlBusinessDataParams): Promise<WlBusinessDataResponse>;
    /** Creates new business. */
    businessPost(params?: WlBusinessBusinessPostParams): Promise<WlBusinessBusinessPostResponse>;
    /** Claims business. */
    businessPut(params?: WlBusinessBusinessPutParams): Promise<WlBusinessBusinessPutResponse>;
    /** Gets information about businesses where given user is a staff member. */
    businessAccess(params?: WlBusinessBusinessAccessParams): Promise<WlBusinessBusinessAccessResponse>;
}
export declare class WlReportNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets data of required report. */
    data(params?: WlReportDataParams): Promise<WlReportDataResponse>;
    /** Checks access to given report. */
    access(params?: WlReportAccessParams): Promise<WlReportAccessResponse>;
    /** Gets data of required report collection. */
    pageData(params?: WlReportPageDataParams): Promise<WlReportPageDataResponse>;
}
export declare class WlCollectorNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns a list of client debts for the specified business within the given date range. */
    debtList(params?: WlCollectorDebtListParams): Promise<WlCollectorDebtListResponse>;
    /** Registers a debt payment made outside WellnessLiving and applies a credit to the client's account balance. */
    debtPay(params?: WlCollectorDebtPayParams): Promise<WlCollectorDebtPayResponse>;
    /** Returns a list of debt payment transactions for the specified business within the given date range. */
    debtTransaction(params?: WlCollectorDebtTransactionParams): Promise<WlCollectorDebtTransactionResponse>;
}
export declare class WlAnnouncementNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns a list of announcements for the given business and location. */
    announcementList(params?: WlAnnouncementAnnouncementListParams): Promise<WlAnnouncementAnnouncementListResponse>;
}
export declare class WlLeadSourceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets list of Lead Sources. */
    leadSourceList(params?: WlLeadSourceLeadSourceListParams): Promise<WlLeadSourceLeadSourceListResponse>;
    /** Deletes custom source lead. */
    leadSourceElementDelete(params?: WlLeadSourceLeadSourceElementDeleteParams): Promise<WlLeadSourceLeadSourceElementDeleteResponse>;
    /** Creates or edits a custom source lead. */
    /** @deprecated */
    leadSourceElementPost(params?: WlLeadSourceLeadSourceElementPostParams): Promise<WlLeadSourceLeadSourceElementPostResponse>;
    /** Adds one lead source. */
    leadSourceElementPut(params?: WlLeadSourceLeadSourceElementPutParams): Promise<WlLeadSourceLeadSourceElementPutResponse>;
}
export declare class WlLeadNamespace {
    private readonly _client;
    readonly source: WlLeadSourceNamespace;
    constructor(_client: WlClient);
    /** Gets information necessary to display "Lead capture" widget. */
    leadGet(params?: WlLeadLeadGetParams): Promise<WlLeadLeadGetResponse>;
    /** Saves new user via "Lead capture". */
    leadPost(params?: WlLeadLeadPostParams): Promise<WlLeadLeadPostResponse>;
}
export declare class WlPromotionIndexNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets a list of packages/passes/memberships. */
    promotionIndex(params?: WlPromotionIndexPromotionIndexParams): Promise<WlPromotionIndexPromotionIndexResponse>;
}
export declare class WlPromotionNamespace {
    private readonly _client;
    readonly index: WlPromotionIndexNamespace;
    constructor(_client: WlClient);
    /** Returns promotion list of the specified business. */
    promotionList(params?: WlPromotionPromotionListParams): Promise<WlPromotionPromotionListResponse>;
    /** Soft-deletes the specified promotion if it has no associated sales. */
    promotionDelete(params?: WlPromotionPromotionDeleteParams): Promise<WlPromotionPromotionDeleteResponse>;
    /** Returns promotion by the specified business and promotion keys. */
    promotionGet(params?: WlPromotionPromotionGetParams): Promise<WlPromotionPromotionGetResponse>;
    /** Saves promotion data. */
    promotionPost(params?: WlPromotionPromotionPostParams): Promise<WlPromotionPromotionPostResponse>;
}
export declare class WlLoginMailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if specified user exists in specified business. */
    mailUse(params?: WlLoginMailMailUseParams): Promise<WlLoginMailMailUseResponse>;
}
export declare class WlLoginPromotionConvertNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes conversion and reset the after expiration setting to previous state. */
    convertDelete(params?: WlLoginPromotionConvertConvertDeleteParams): Promise<WlLoginPromotionConvertConvertDeleteResponse>;
    /** Returns the current conversion configuration and the list of promotions available to convert to. */
    convertGet(params?: WlLoginPromotionConvertConvertGetParams): Promise<WlLoginPromotionConvertConvertGetResponse>;
    /** Creates or updates conversion form data for the login promotion. Performs all necessary checks and apply changes. */
    convertPost(params?: WlLoginPromotionConvertConvertPostParams): Promise<WlLoginPromotionConvertConvertPostResponse>;
}
export declare class WlLoginPromotionGuestPassClaimNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Claims the guest pass invitation for the current user and accepts it. */
    claim(params?: WlLoginPromotionGuestPassClaimClaimParams): Promise<WlLoginPromotionGuestPassClaimClaimResponse>;
}
export declare class WlLoginPromotionGuestPassInviteNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Revokes a guest pass invitation. */
    inviteDelete(params?: WlLoginPromotionGuestPassInviteInviteDeleteParams): Promise<WlLoginPromotionGuestPassInviteInviteDeleteResponse>;
    /** Sends a reminder notification for a guest pass invitation. */
    invitePut(params?: WlLoginPromotionGuestPassInviteInvitePutParams): Promise<WlLoginPromotionGuestPassInviteInvitePutResponse>;
    /** Returns a list of guest pass invitations for the given membership or user. */
    inviteListGet(params?: WlLoginPromotionGuestPassInviteInviteListGetParams): Promise<WlLoginPromotionGuestPassInviteInviteListGetResponse>;
    /** Sends a guest pass invitation to a user. */
    inviteListPost(params?: WlLoginPromotionGuestPassInviteInviteListPostParams): Promise<WlLoginPromotionGuestPassInviteInviteListPostResponse>;
}
export declare class WlLoginPromotionGuestPassApplyNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Applies the guest pass of the specified login promotion to the attendee's visit. */
    apply(params?: WlLoginPromotionGuestPassApplyApplyParams): Promise<WlLoginPromotionGuestPassApplyApplyResponse>;
}
export declare class WlLoginPromotionGuestPassNamespace {
    private readonly _client;
    readonly claim: WlLoginPromotionGuestPassClaimNamespace;
    readonly invite: WlLoginPromotionGuestPassInviteNamespace;
    readonly apply: WlLoginPromotionGuestPassApplyNamespace;
    constructor(_client: WlClient);
    /** Retrieves guest passes for a specific client. */
    guestPassList(params?: WlLoginPromotionGuestPassGuestPassListParams): Promise<WlLoginPromotionGuestPassGuestPassListResponse>;
    /** Retrieves guest pass information for a client's membership. */
    guestPassGet(params?: WlLoginPromotionGuestPassGuestPassGetParams): Promise<WlLoginPromotionGuestPassGuestPassGetResponse>;
    /** Updates the guest pass remaining usages for a client's membership. */
    guestPassPut(params?: WlLoginPromotionGuestPassGuestPassPutParams): Promise<WlLoginPromotionGuestPassGuestPassPutResponse>;
}
export declare class WlLoginPromotionNamespace {
    private readonly _client;
    readonly convert: WlLoginPromotionConvertNamespace;
    readonly guestPass: WlLoginPromotionGuestPassNamespace;
    constructor(_client: WlClient);
    /** Deletes specified promotion payment pause. */
    promotionPayPauseDelete(params?: WlLoginPromotionPromotionPayPauseDeleteParams): Promise<WlLoginPromotionPromotionPayPauseDeleteResponse>;
    /** Returns promotion payment pause data: all hold periods when `is_list` is `true`,  the specified hold period when `k_promotion_pay_pause` is provided, or the currently  active hold period otherwise. */
    promotionPayPauseGet(params?: WlLoginPromotionPromotionPayPauseGetParams): Promise<WlLoginPromotionPromotionPayPauseGetResponse>;
    /** Adds or updates a payment pause period for promotion. */
    promotionPayPausePost(params?: WlLoginPromotionPromotionPayPausePostParams): Promise<WlLoginPromotionPromotionPayPausePostResponse>;
    /** Updates a promotion payment pause period. */
    promotionPayPausePut(params?: WlLoginPromotionPromotionPayPausePutParams): Promise<WlLoginPromotionPromotionPayPausePutResponse>;
}
export declare class WlLoginMemberDynamicIdNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the member's barcode and its expiry time for the specified business and user. */
    dynamicId(params?: WlLoginMemberDynamicIdDynamicIdParams): Promise<WlLoginMemberDynamicIdDynamicIdResponse>;
}
export declare class WlLoginMemberNamespace {
    private readonly _client;
    readonly dynamicId: WlLoginMemberDynamicIdNamespace;
    constructor(_client: WlClient);
    /** Checks whether anything prevents the user from using the business and returns any blocking conditions found. */
    /** @deprecated */
    memberValidate(params?: WlLoginMemberMemberValidateParams): Promise<WlLoginMemberMemberValidateResponse>;
    /** Returns the list of businesses where the specified user is an active member. */
    memberGet(params?: WlLoginMemberMemberGetParams): Promise<WlLoginMemberMemberGetResponse>;
    /** Adds a user into a business. */
    memberPost(params?: WlLoginMemberMemberPostParams): Promise<WlLoginMemberMemberPostResponse>;
    /** Gets client ID for a specific client in a business. */
    loginMemberGet(params?: WlLoginMemberLoginMemberGetParams): Promise<WlLoginMemberLoginMemberGetResponse>;
    /** Updates client ID for a specific client in a business. */
    loginMemberPost(params?: WlLoginMemberLoginMemberPostParams): Promise<WlLoginMemberLoginMemberPostResponse>;
    /** Checks whether anything prevents the user from using the business and returns details about missing required fields. */
    memberValidate63(params?: WlLoginMemberMemberValidate63Params): Promise<WlLoginMemberMemberValidate63Response>;
    /** Returns a paginated list of active member user keys for the specified business. */
    loginMemberListAll(params?: WlLoginMemberLoginMemberListAllParams): Promise<WlLoginMemberLoginMemberListAllResponse>;
}
export declare class WlLoginAddNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks required profile fields and, if complete, registers the existing user in the specified business. */
    mailUseOk(params?: WlLoginAddMailUseOkParams): Promise<WlLoginAddMailUseOkResponse>;
}
export declare class WlLoginAttendanceAddNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about ability of user to pay for given session in any ways. */
    addGet(params?: WlLoginAttendanceAddAddGetParams): Promise<WlLoginAttendanceAddAddGetResponse>;
    /** Adds client to attendance list. */
    addPost(params?: WlLoginAttendanceAddAddPostParams): Promise<WlLoginAttendanceAddAddPostResponse>;
}
export declare class WlLoginAttendanceNamespace {
    private readonly _client;
    readonly add: WlLoginAttendanceAddNamespace;
    constructor(_client: WlClient);
    /** Returns the attendance list for a class period or appointment session. */
    attendanceList(params?: WlLoginAttendanceAttendanceListParams): Promise<WlLoginAttendanceAttendanceListResponse>;
    /** Returns detailed information about a single class period, appointment, or asset session. */
    attendanceInfo(params?: WlLoginAttendanceAttendanceInfoParams): Promise<WlLoginAttendanceAttendanceInfoResponse>;
    /** Returns the attendance list for a class period or appointment session. */
    attendanceListByToken(params?: WlLoginAttendanceAttendanceListByTokenParams): Promise<WlLoginAttendanceAttendanceListByTokenResponse>;
    /** Returns detailed information about a single class period, appointment, or asset session. */
    attendanceInfoByToken(params?: WlLoginAttendanceAttendanceInfoByTokenParams): Promise<WlLoginAttendanceAttendanceInfoByTokenResponse>;
}
export declare class WlLoginSearchStaffAppNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Performs access checks and returns a list of users, depending on the search query. */
    list(params?: WlLoginSearchStaffAppListParams): Promise<WlLoginSearchStaffAppListResponse>;
}
export declare class WlLoginSearchNamespace {
    private readonly _client;
    readonly staffApp: WlLoginSearchStaffAppNamespace;
    constructor(_client: WlClient);
    /** Finds a user by their email or phone within the specified business. */
    concerto(params?: WlLoginSearchConcertoParams): Promise<WlLoginSearchConcertoResponse>;
}
export declare class WlLoginTypeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets a login types list of a business. */
    loginType(params?: WlLoginTypeLoginTypeParams): Promise<WlLoginTypeLoginTypeResponse>;
}
export declare class WlLoginPermissionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves the auto-renew setting for a purchased promotion. */
    permission(params?: WlLoginPermissionPermissionParams): Promise<WlLoginPermissionPermissionResponse>;
}
export declare class WlLoginAgreeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns text of business liability release if business has liability release and if user did not agree to this liability release. */
    agreeGet(params?: WlLoginAgreeAgreeGetParams): Promise<WlLoginAgreeAgreeGetResponse>;
    /** Saves the user's agreement to the online waiver. */
    agreePost(params?: WlLoginAgreeAgreePostParams): Promise<WlLoginAgreeAgreePostResponse>;
}
export declare class WlLoginCouponNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves the key and balance of a gift card by its code for the specified business. */
    coupon(params?: WlLoginCouponCouponParams): Promise<WlLoginCouponCouponResponse>;
}
export declare class WlLoginProductNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about products purchased by client. */
    product(params?: WlLoginProductProductParams): Promise<WlLoginProductProductResponse>;
}
export declare class WlLoginNamespace {
    private readonly _client;
    readonly mail: WlLoginMailNamespace;
    readonly promotion: WlLoginPromotionNamespace;
    readonly member: WlLoginMemberNamespace;
    readonly add: WlLoginAddNamespace;
    readonly attendance: WlLoginAttendanceNamespace;
    readonly search: WlLoginSearchNamespace;
    readonly type: WlLoginTypeNamespace;
    readonly permission: WlLoginPermissionNamespace;
    readonly agree: WlLoginAgreeNamespace;
    readonly coupon: WlLoginCouponNamespace;
    readonly product: WlLoginProductNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about user. */
    loginGet(params?: WlLoginLoginGetParams): Promise<WlLoginLoginGetResponse>;
    /** Retrieves information about a list of users. This is done via "post" method because only "post" allows large requests. */
    loginPost(params?: WlLoginLoginPostParams): Promise<WlLoginLoginPostResponse>;
}
export declare class WlQuizResponseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified quiz response or list of responses for the given business. */
    response65Delete(params?: WlQuizResponseResponse65DeleteParams): Promise<WlQuizResponseResponse65DeleteResponse>;
    /** Returns quiz response data including element answers, dates, and access information. */
    response65Get(params?: WlQuizResponseResponse65GetParams): Promise<WlQuizResponseResponse65GetResponse>;
    /** Saves a quiz response with the given element answers. */
    response65Post(params?: WlQuizResponseResponse65PostParams): Promise<WlQuizResponseResponse65PostResponse>;
    /** Validates, updates and reindex response information for associated user. */
    response65Put(params?: WlQuizResponseResponse65PutParams): Promise<WlQuizResponseResponse65PutResponse>;
    /** Deletes the specified quiz response or list of responses for the given business. */
    /** @deprecated */
    responseDelete(params?: WlQuizResponseResponseDeleteParams): Promise<WlQuizResponseResponseDeleteResponse>;
    /** Returns quiz response data including element answers, dates, and access information. */
    /** @deprecated */
    responseGet(params?: WlQuizResponseResponseGetParams): Promise<WlQuizResponseResponseGetResponse>;
    /** Saves a quiz response with the given element answers. */
    /** @deprecated */
    responsePost(params?: WlQuizResponseResponsePostParams): Promise<WlQuizResponseResponsePostResponse>;
    /** Validates, updates and reindex response information for associated user. */
    /** @deprecated */
    responsePut(params?: WlQuizResponseResponsePutParams): Promise<WlQuizResponseResponsePutResponse>;
}
export declare class WlQuizNamespace {
    private readonly _client;
    readonly response: WlQuizResponseNamespace;
    constructor(_client: WlClient);
    /** Deletes the quiz with the given key. */
    /** @deprecated */
    quizElementDelete(params?: WlQuizQuizElementDeleteParams): Promise<WlQuizQuizElementDeleteResponse>;
    /** Returns quiz element data including settings, elements, and access information for the given quiz. */
    /** @deprecated */
    quizElementGet(params?: WlQuizQuizElementGetParams): Promise<WlQuizQuizElementGetResponse>;
    /** Creates or updates a quiz with the given elements and settings. */
    /** @deprecated */
    quizElementPost(params?: WlQuizQuizElementPostParams): Promise<WlQuizQuizElementPostResponse>;
    /** Updates the active status of the given quiz. */
    /** @deprecated */
    quizElementPut(params?: WlQuizQuizElementPutParams): Promise<WlQuizQuizElementPutResponse>;
    /** Deletes the quiz with the given key. */
    quizElement72Delete(params?: WlQuizQuizElement72DeleteParams): Promise<WlQuizQuizElement72DeleteResponse>;
    /** Returns quiz element data including settings, elements, and access information for the given quiz. */
    quizElement72Get(params?: WlQuizQuizElement72GetParams): Promise<WlQuizQuizElement72GetResponse>;
    /** Creates or updates a quiz with the given elements and settings. */
    quizElement72Post(params?: WlQuizQuizElement72PostParams): Promise<WlQuizQuizElement72PostResponse>;
    /** Updates the active status of the given quiz. */
    quizElement72Put(params?: WlQuizQuizElement72PutParams): Promise<WlQuizQuizElement72PutResponse>;
}
export declare class WlVideoWatchNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Records the start of a video watch session for the current user. */
    watchPost(params?: WlVideoWatchWatchPostParams): Promise<WlVideoWatchWatchPostResponse>;
    /** Updates the watch progress (current position and total watched time) for an existing watch record. */
    watchPut(params?: WlVideoWatchWatchPutParams): Promise<WlVideoWatchWatchPutResponse>;
}
export declare class WlVideoCategoryNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified video category. */
    categoryElementDelete(params?: WlVideoCategoryCategoryElementDeleteParams): Promise<WlVideoCategoryCategoryElementDeleteResponse>;
    /** Returns the data for the specified video category. */
    categoryElementGet(params?: WlVideoCategoryCategoryElementGetParams): Promise<WlVideoCategoryCategoryElementGetResponse>;
    /** Creates or updates a video category. */
    categoryElementPut(params?: WlVideoCategoryCategoryElementPutParams): Promise<WlVideoCategoryCategoryElementPutResponse>;
    /** Returns the list of video categories for the business. */
    categoryListGet(params?: WlVideoCategoryCategoryListGetParams): Promise<WlVideoCategoryCategoryListGetResponse>;
    /** Updates the order of video categories. */
    categoryListPut(params?: WlVideoCategoryCategoryListPutParams): Promise<WlVideoCategoryCategoryListPutResponse>;
}
export declare class WlVideoLevelNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified video level. */
    levelDelete(params?: WlVideoLevelLevelDeleteParams): Promise<WlVideoLevelLevelDeleteResponse>;
    /** Creates a new video level. */
    levelPost(params?: WlVideoLevelLevelPostParams): Promise<WlVideoLevelLevelPostResponse>;
    /** Updates the specified video level. */
    levelPut(params?: WlVideoLevelLevelPutParams): Promise<WlVideoLevelLevelPutResponse>;
    /** Returns the list of video levels for the business. */
    levelListGet(params?: WlVideoLevelLevelListGetParams): Promise<WlVideoLevelLevelListGetResponse>;
    /** Updates the order of video levels. */
    levelListPut(params?: WlVideoLevelLevelListPutParams): Promise<WlVideoLevelLevelListPutResponse>;
}
export declare class WlVideoTagNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the specified video tag. */
    tagDelete(params?: WlVideoTagTagDeleteParams): Promise<WlVideoTagTagDeleteResponse>;
    /** Creates a new video tag. */
    tagPost(params?: WlVideoTagTagPostParams): Promise<WlVideoTagTagPostResponse>;
    /** Updates the specified video tag. */
    tagPut(params?: WlVideoTagTagPutParams): Promise<WlVideoTagTagPutResponse>;
    /** Returns the list of video tags for the business. */
    tagList(params?: WlVideoTagTagListParams): Promise<WlVideoTagTagListResponse>;
}
export declare class WlVideoNamespace {
    private readonly _client;
    readonly watch: WlVideoWatchNamespace;
    readonly category: WlVideoCategoryNamespace;
    readonly level: WlVideoLevelNamespace;
    readonly tag: WlVideoTagNamespace;
    constructor(_client: WlClient);
    /** Deletes the specified video. */
    videoElementDelete(params?: WlVideoVideoElementDeleteParams): Promise<WlVideoVideoElementDeleteResponse>;
    /** Returns the data for the specified video. */
    videoElementGet(params?: WlVideoVideoElementGetParams): Promise<WlVideoVideoElementGetResponse>;
    /** Creates or updates a video for the specified business. */
    videoElementPost(params?: WlVideoVideoElementPostParams): Promise<WlVideoVideoElementPostResponse>;
    /** Validates video embed code. */
    videoElementPut(params?: WlVideoVideoElementPutParams): Promise<WlVideoVideoElementPutResponse>;
    /** Returns the list of videos for the specified business. */
    videoListGet(params?: WlVideoVideoListGetParams): Promise<WlVideoVideoListGetResponse>;
    /** Updates the custom sort order of videos for the specified business. */
    videoListPut(params?: WlVideoVideoListPutParams): Promise<WlVideoVideoListPutResponse>;
}
export declare class WlFitbuilderNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Notifies messengers with new information. */
    message(params?: WlFitbuilderMessageParams): Promise<WlFitbuilderMessageResponse>;
}
export declare class WlMailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends email. */
    sendMail(params?: WlMailSendMailParams): Promise<WlMailSendMailResponse>;
}
export declare class WlStaffPrivilegeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of privileges for the current user in the given business. */
    privilegeList(params?: WlStaffPrivilegePrivilegeListParams): Promise<WlStaffPrivilegePrivilegeListResponse>;
}
export declare class WlStaffStaffListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of staff members for the given business. */
    staffList(params?: WlStaffStaffListStaffListParams): Promise<WlStaffStaffListStaffListResponse>;
}
export declare class WlStaffStaffViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about staff. */
    /** @deprecated */
    staffView(params?: WlStaffStaffViewStaffViewParams): Promise<WlStaffStaffViewStaffViewResponse>;
    /** Retrieves information about staff. */
    staffView74(params?: WlStaffStaffViewStaffView74Params): Promise<WlStaffStaffViewStaffView74Response>;
}
export declare class WlStaffNamespace {
    private readonly _client;
    readonly privilege: WlStaffPrivilegeNamespace;
    readonly staffList: WlStaffStaffListNamespace;
    readonly staffView: WlStaffStaffViewNamespace;
    constructor(_client: WlClient);
    /** Update or create staff. */
    staffElement(params?: WlStaffStaffElementParams): Promise<WlStaffStaffElementResponse>;
}
export declare class WlSkinApplicationConnectNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Creates or updates the integration credentials for the given business application. */
    applicationConnect(params?: WlSkinApplicationConnectApplicationConnectParams): Promise<WlSkinApplicationConnectApplicationConnectResponse>;
}
export declare class WlSkinApplicationResourceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets application resources. */
    applicationResource(params?: WlSkinApplicationResourceApplicationResourceParams): Promise<WlSkinApplicationResourceApplicationResourceResponse>;
    /** Saves text metadata for the given business application. */
    applicationResourceMaterial(params?: WlSkinApplicationResourceApplicationResourceMaterialParams): Promise<WlSkinApplicationResourceApplicationResourceMaterialResponse>;
    /** Uploads image and file assets for the given business application. */
    applicationResourceUpload(params?: WlSkinApplicationResourceApplicationResourceUploadParams): Promise<WlSkinApplicationResourceApplicationResourceUploadResponse>;
}
export declare class WlSkinApplicationNamespace {
    private readonly _client;
    readonly connect: WlSkinApplicationConnectNamespace;
    readonly resource: WlSkinApplicationResourceNamespace;
    constructor(_client: WlClient);
    /** Reset customisation form of client application. */
    skinDelete(params?: WlSkinApplicationSkinDeleteParams): Promise<WlSkinApplicationSkinDeleteResponse>;
    /** Returns the application customisation skin data for the given business. */
    skinGet(params?: WlSkinApplicationSkinGetParams): Promise<WlSkinApplicationSkinGetResponse>;
}
export declare class WlSkinWidgetNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns widget skins grouped by widget type for the given business. */
    skinWidgetList(params?: WlSkinWidgetSkinWidgetListParams): Promise<WlSkinWidgetSkinWidgetListResponse>;
}
export declare class WlSkinNamespace {
    private readonly _client;
    readonly application: WlSkinApplicationNamespace;
    readonly widget: WlSkinWidgetNamespace;
    constructor(_client: WlClient);
    /** Deletes the existing widget. */
    skinForeignDelete(params?: WlSkinSkinForeignDeleteParams): Promise<WlSkinSkinForeignDeleteResponse>;
    /** Creates a new widget. */
    skinForeignPost(params?: WlSkinSkinForeignPostParams): Promise<WlSkinSkinForeignPostResponse>;
    /** Updates the existing widget. */
    skinForeignPut(params?: WlSkinSkinForeignPutParams): Promise<WlSkinSkinForeignPutResponse>;
}
export declare class WlTagNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns tags of the specified business. */
    tagListGet(params?: WlTagTagListGetParams): Promise<WlTagTagListGetResponse>;
    /** Saves the list of tags. Can be used to create new tags or update existing ones. */
    tagListPost(params?: WlTagTagListPostParams): Promise<WlTagTagListPostResponse>;
}
export declare class WlTaxNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the title for the specified tax. */
    tax(params?: WlTaxTaxParams): Promise<WlTaxTaxResponse>;
    /** Returns taxes of the specified business. */
    taxList(params?: WlTaxTaxListParams): Promise<WlTaxTaxListResponse>;
}
export declare class WlReviewReviewListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes a review. */
    reviewElementDelete(params?: WlReviewReviewListReviewElementDeleteParams): Promise<WlReviewReviewListReviewElementDeleteResponse>;
    /** Retrieves information about review item. */
    reviewElementGet(params?: WlReviewReviewListReviewElementGetParams): Promise<WlReviewReviewListReviewElementGetResponse>;
    /** Retrieves a list of reviews. */
    reviewList(params?: WlReviewReviewListReviewListParams): Promise<WlReviewReviewListReviewListResponse>;
}
export declare class WlReviewNamespace {
    private readonly _client;
    readonly reviewList: WlReviewReviewListNamespace;
    constructor(_client: WlClient);
    /** Submits user's review. */
    review(params?: WlReviewReviewParams): Promise<WlReviewReviewResponse>;
    /** Updates the featured status of the given review for the business. */
    reviewFeature(params?: WlReviewReviewFeatureParams): Promise<WlReviewReviewFeatureResponse>;
    /** Saves the reply text and optional status update for the given review. */
    reviewReply(params?: WlReviewReviewReplyParams): Promise<WlReviewReviewReplyResponse>;
}
export declare class WlRankNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets belts list of a business. */
    rank(params?: WlRankRankParams): Promise<WlRankRankResponse>;
}
export declare class WlHolidayNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about holiday day of business/locations. */
    holiday(params?: WlHolidayHolidayParams): Promise<WlHolidayHolidayResponse>;
    /** Returns all holiday records for all locations of the specified business. */
    bulkBusinessHoliday(params?: WlHolidayBulkBusinessHolidayParams): Promise<WlHolidayBulkBusinessHolidayResponse>;
}
export declare class WlAppointmentEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Return data about appointment's add-ons. */
    addonUpdateGet(params?: WlAppointmentEditAddonUpdateGetParams): Promise<WlAppointmentEditAddonUpdateGetResponse>;
    /** Replaces the add-ons for the appointment with the provided list, optionally updating the appointment duration. */
    addonUpdatePut(params?: WlAppointmentEditAddonUpdatePutParams): Promise<WlAppointmentEditAddonUpdatePutResponse>;
}
export declare class WlAppointmentInfoNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about appointment. */
    info(params?: WlAppointmentInfoInfoParams): Promise<WlAppointmentInfoInfoResponse>;
}
export declare class WlAppointmentRecentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets list of client's last booked services. */
    recentService(params?: WlAppointmentRecentRecentServiceParams): Promise<WlAppointmentRecentRecentServiceResponse>;
}
export declare class WlAppointmentBookServiceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about services in the current service category. */
    serviceList52(params?: WlAppointmentBookServiceServiceList52Params): Promise<WlAppointmentBookServiceServiceList52Response>;
    /** Retrieves a list of information about service categories on the appointment booking page. */
    category(params?: WlAppointmentBookServiceCategoryParams): Promise<WlAppointmentBookServiceCategoryResponse>;
    /** Retrieves information about services in the current service category. */
    /** @deprecated */
    serviceList(params?: WlAppointmentBookServiceServiceListParams): Promise<WlAppointmentBookServiceServiceListResponse>;
    /** Checks whether a service can be booked by the given client at the given date, throwing an exception if booking is restricted. */
    serviceCheck(params?: WlAppointmentBookServiceServiceCheckParams): Promise<WlAppointmentBookServiceServiceCheckResponse>;
}
export declare class WlAppointmentBookFinishNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Completes the appointment booking for one or more providers, optionally creating a new client. */
    finishMultiple(params?: WlAppointmentBookFinishFinishMultipleParams): Promise<WlAppointmentBookFinishFinishMultipleResponse>;
    /** Loads data to prepare client side to complete booking. */
    /** @deprecated */
    finishGet(params?: WlAppointmentBookFinishFinishGetParams): Promise<WlAppointmentBookFinishFinishGetResponse>;
    /** Completes the appointment booking and processes payment for the client. */
    /** @deprecated */
    finishPost(params?: WlAppointmentBookFinishFinishPostParams): Promise<WlAppointmentBookFinishFinishPostResponse>;
    /** Loads data to prepare client side to complete booking. */
    finish47Get(params?: WlAppointmentBookFinishFinish47GetParams): Promise<WlAppointmentBookFinishFinish47GetResponse>;
    /** Completes the appointment booking and logs variable counts for diagnostic purposes. */
    finish47Post(params?: WlAppointmentBookFinishFinish47PostParams): Promise<WlAppointmentBookFinishFinish47PostResponse>;
}
export declare class WlAppointmentBookPurchaseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of information about available purchase options. */
    /** @deprecated */
    purchase(params?: WlAppointmentBookPurchasePurchaseParams): Promise<WlAppointmentBookPurchasePurchaseResponse>;
    /** Retrieves a list of information about available purchase options. */
    purchase72(params?: WlAppointmentBookPurchasePurchase72Params): Promise<WlAppointmentBookPurchasePurchase72Response>;
}
export declare class WlAppointmentBookScheduleNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves a list of available appointment booking schedule. */
    /** @deprecated */
    dayTime(params?: WlAppointmentBookScheduleDayTimeParams): Promise<WlAppointmentBookScheduleDayTimeResponse>;
    /** Retrieves a list with all calendar days in specified period with available and unavailable appointment booking schedule. */
    /** @deprecated */
    calendar(params?: WlAppointmentBookScheduleCalendarParams): Promise<WlAppointmentBookScheduleCalendarResponse>;
    /** Finds and returns the next available date for appointment booking starting from the given date. */
    nextAvailableDay(params?: WlAppointmentBookScheduleNextAvailableDayParams): Promise<WlAppointmentBookScheduleNextAvailableDayResponse>;
}
export declare class WlAppointmentBookAssetServiceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves assets required for a service booking at the given date and time, including availability and busy status. */
    service(params?: WlAppointmentBookAssetServiceServiceParams): Promise<WlAppointmentBookAssetServiceServiceResponse>;
}
export declare class WlAppointmentBookAssetNamespace {
    private readonly _client;
    readonly service: WlAppointmentBookAssetServiceNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about assets in the current asset category. */
    assetList(params?: WlAppointmentBookAssetAssetListParams): Promise<WlAppointmentBookAssetAssetListResponse>;
    /** Retrieves a list of information about asset categories for the appointment booking page. */
    category(params?: WlAppointmentBookAssetCategoryParams): Promise<WlAppointmentBookAssetCategoryResponse>;
}
export declare class WlAppointmentBookPaymentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals. */
    /** @deprecated */
    paymentGet(params?: WlAppointmentBookPaymentPaymentGetParams): Promise<WlAppointmentBookPaymentPaymentGetResponse>;
    /** Allows to pay an appointment or appointment purchase option for the client. */
    /** @deprecated */
    paymentPost(params?: WlAppointmentBookPaymentPaymentPostParams): Promise<WlAppointmentBookPaymentPaymentPostResponse>;
    /** Calculates pricing information for a batch of appointment bookings, including taxes, discounts, surcharges, and per-provider totals. */
    paymentMultipleGet(params?: WlAppointmentBookPaymentPaymentMultipleGetParams): Promise<WlAppointmentBookPaymentPaymentMultipleGetResponse>;
    /** Allows to pay an appointment or appointment purchase option for the client. */
    paymentMultiplePost(params?: WlAppointmentBookPaymentPaymentMultiplePostParams): Promise<WlAppointmentBookPaymentPaymentMultiplePostResponse>;
    /** Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals. */
    paymentPostGet(params?: WlAppointmentBookPaymentPaymentPostGetParams): Promise<WlAppointmentBookPaymentPaymentPostGetResponse>;
    /** Allows to pay an appointment or appointment purchase option for the client. */
    paymentPostPost(params?: WlAppointmentBookPaymentPaymentPostPostParams): Promise<WlAppointmentBookPaymentPaymentPostPostResponse>;
}
export declare class WlAppointmentBookQuestionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves questions for the current service. */
    question(params?: WlAppointmentBookQuestionQuestionParams): Promise<WlAppointmentBookQuestionQuestionResponse>;
}
export declare class WlAppointmentBookStaffNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves an information about staff members for the current service. */
    list(params?: WlAppointmentBookStaffListParams): Promise<WlAppointmentBookStaffListResponse>;
}
export declare class WlAppointmentBookProductNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves list of available service add-ons. */
    product62(params?: WlAppointmentBookProductProduct62Params): Promise<WlAppointmentBookProductProduct62Response>;
    /** Retrieves list of available service add-ons. */
    product(params?: WlAppointmentBookProductProductParams): Promise<WlAppointmentBookProductProductResponse>;
}
export declare class WlAppointmentBookNamespace {
    private readonly _client;
    readonly service: WlAppointmentBookServiceNamespace;
    readonly finish: WlAppointmentBookFinishNamespace;
    readonly purchase: WlAppointmentBookPurchaseNamespace;
    readonly schedule: WlAppointmentBookScheduleNamespace;
    readonly asset: WlAppointmentBookAssetNamespace;
    readonly payment: WlAppointmentBookPaymentNamespace;
    readonly question: WlAppointmentBookQuestionNamespace;
    readonly staff: WlAppointmentBookStaffNamespace;
    readonly product: WlAppointmentBookProductNamespace;
    constructor(_client: WlClient);
}
export declare class WlAppointmentNamespace {
    private readonly _client;
    readonly edit: WlAppointmentEditNamespace;
    readonly info: WlAppointmentInfoNamespace;
    readonly recent: WlAppointmentRecentNamespace;
    readonly book: WlAppointmentBookNamespace;
    constructor(_client: WlClient);
}
export declare class WlBookProcessPurchaseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns available purchase options, existing client promotions, session passes, and prizes for the specified session. */
    /** @deprecated */
    purchase(params?: WlBookProcessPurchasePurchaseParams): Promise<WlBookProcessPurchasePurchaseResponse>;
    /** Returns the pricing breakdown (totals, taxes, and discounts) for the given list of purchase items. */
    purchaseElementGroup(params?: WlBookProcessPurchasePurchaseElementGroupParams): Promise<WlBookProcessPurchasePurchaseElementGroupResponse>;
    /** Returns available purchase options for the specified session, decoding JSON-encoded group promotion and session inputs. */
    purchase56(params?: WlBookProcessPurchasePurchase56Params): Promise<WlBookProcessPurchasePurchase56Response>;
    /** Builds a single-item purchase list from the scalar input fields and delegates to the parent for price calculation. */
    purchaseElement(params?: WlBookProcessPurchasePurchaseElementParams): Promise<WlBookProcessPurchasePurchaseElementResponse>;
    /** Returns the pricing breakdown for a list of purchase items, applying applicable discounts and taxes. */
    purchaseElementList(params?: WlBookProcessPurchasePurchaseElementListParams): Promise<WlBookProcessPurchasePurchaseElementListResponse>;
}
export declare class WlBookProcessRelationNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if user can book specified session. */
    relationGet(params?: WlBookProcessRelationRelationGetParams): Promise<WlBookProcessRelationRelationGetResponse>;
    /** Added new relative. */
    relationPost(params?: WlBookProcessRelationRelationPostParams): Promise<WlBookProcessRelationRelationPostResponse>;
}
export declare class WlBookProcessResourceNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of available assets for the booking session, grouped by asset category. */
    /** @deprecated */
    resourceGet(params?: WlBookProcessResourceResourceGetParams): Promise<WlBookProcessResourceResourceGetResponse>;
    /** Saves the asset selection for the booking and attempts to book the session if no further steps are required. */
    /** @deprecated */
    resourcePost(params?: WlBookProcessResourceResourcePostParams): Promise<WlBookProcessResourceResourcePostResponse>;
    /** Returns available assets for the booking, decoding the JSON-encoded session input before delegating to the parent. */
    resource54Get(params?: WlBookProcessResourceResource54GetParams): Promise<WlBookProcessResourceResource54GetResponse>;
    /** Processes the asset selection step of the booking wizard, decoding the JSON-encoded session input before delegating to the parent. */
    resource54Post(params?: WlBookProcessResourceResource54PostParams): Promise<WlBookProcessResourceResource54PostResponse>;
}
export declare class WlBookProcessPaymentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Processes purchases and books sessions on the "Pay/Billing info" step of the booking wizard. */
    payment(params?: WlBookProcessPaymentPaymentParams): Promise<WlBookProcessPaymentPaymentResponse>;
}
export declare class WlBookProcessStoreNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Processes the "Purchase Options" step of the booking wizard, validates selections, and books the session when possible. */
    store(params?: WlBookProcessStoreStoreParams): Promise<WlBookProcessStoreStoreResponse>;
    /** Validates and distributes selected purchase options across all clients in the booking group. */
    storeGroup(params?: WlBookProcessStoreStoreGroupParams): Promise<WlBookProcessStoreStoreGroupResponse>;
}
export declare class WlBookProcessInfoNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns class session details and booking information for the "Class and Location" step of the booking wizard. */
    /** @deprecated */
    infoGet(params?: WlBookProcessInfoInfoGetParams): Promise<WlBookProcessInfoInfoGetResponse>;
    /** Processes the "Class and Location" step of the booking wizard, optionally recording the waiver agreement and booking the session. */
    /** @deprecated */
    infoPost(params?: WlBookProcessInfoInfoPostParams): Promise<WlBookProcessInfoInfoPostResponse>;
    /** Returns class and location booking information, enriched with localized date and time for each session. */
    info54Get(params?: WlBookProcessInfoInfo54GetParams): Promise<WlBookProcessInfoInfo54GetResponse>;
    /** Processes the "Class and Location" step of the booking wizard, optionally recording the waiver agreement and booking the session. */
    info54Post(params?: WlBookProcessInfoInfo54PostParams): Promise<WlBookProcessInfoInfo54PostResponse>;
    /** Checks whether the user can complete booking wizard without additional steps. */
    /** @deprecated */
    infoCanCompleteGet(params?: WlBookProcessInfoInfoCanCompleteGetParams): Promise<WlBookProcessInfoInfoCanCompleteGetResponse>;
    /** Checks whether the user can complete booking wizard without additional steps. */
    infoCanCompletePost(params?: WlBookProcessInfoInfoCanCompletePostParams): Promise<WlBookProcessInfoInfoCanCompletePostResponse>;
}
export declare class WlBookProcessQuizNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Defines list of required quizzes. */
    quizGet(params?: WlBookProcessQuizQuizGetParams): Promise<WlBookProcessQuizQuizGetResponse>;
    /** Finished booking process and save quiz responses (if quiz step is the last in booking wizard). */
    quizPost(params?: WlBookProcessQuizQuizPostParams): Promise<WlBookProcessQuizQuizPostResponse>;
}
export declare class WlBookProcessFrequencyNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of visits to be created for the given recurring booking settings. */
    repeat(params?: WlBookProcessFrequencyRepeatParams): Promise<WlBookProcessFrequencyRepeatResponse>;
    /** Returns the list of visits to be created for the given recurring booking settings. */
    repeatParallel(params?: WlBookProcessFrequencyRepeatParallelParams): Promise<WlBookProcessFrequencyRepeatParallelResponse>;
}
export declare class WlBookProcessGuestNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Check if user exists. */
    guestProfileGet(params?: WlBookProcessGuestGuestProfileGetParams): Promise<WlBookProcessGuestGuestProfileGetResponse>;
    /** Creates new user. */
    guestProfilePost(params?: WlBookProcessGuestGuestProfilePostParams): Promise<WlBookProcessGuestGuestProfilePostResponse>;
}
export declare class WlBookProcessNamespace {
    private readonly _client;
    readonly purchase: WlBookProcessPurchaseNamespace;
    readonly relation: WlBookProcessRelationNamespace;
    readonly resource: WlBookProcessResourceNamespace;
    readonly payment: WlBookProcessPaymentNamespace;
    readonly store: WlBookProcessStoreNamespace;
    readonly info: WlBookProcessInfoNamespace;
    readonly quiz: WlBookProcessQuizNamespace;
    readonly frequency: WlBookProcessFrequencyNamespace;
    readonly guest: WlBookProcessGuestNamespace;
    constructor(_client: WlClient);
    /** Processes the group booking: validates input, collects payment, books sessions, and sends confirmation emails. */
    processGroup(params?: WlBookProcessProcessGroupParams): Promise<WlBookProcessProcessGroupResponse>;
    /** Returns the ordered list of booking wizard steps for the given session and client. */
    /** @deprecated */
    process(params?: WlBookProcessProcessParams): Promise<WlBookProcessProcessResponse>;
    /** Returns the ordered list of booking wizard steps, including the quiz step when required. */
    /** @deprecated */
    process54(params?: WlBookProcessProcess54Params): Promise<WlBookProcessProcess54Response>;
    /** Returns the booking wizard steps, adjusting the path when the service is already booked for a family member. */
    process59(params?: WlBookProcessProcess59Params): Promise<WlBookProcessProcess59Response>;
}
export declare class WlBookCancelNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about whether the given user can cancel the booking and the expected consequences. */
    cancelCan(params?: WlBookCancelCancelCanParams): Promise<WlBookCancelCancelCanResponse>;
}
export declare class WlBookNamespace {
    private readonly _client;
    readonly process: WlBookProcessNamespace;
    readonly cancel: WlBookCancelNamespace;
    constructor(_client: WlClient);
}
export declare class WlClassesClassListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets a list of classes which take place in the specified location. */
    bookList(params?: WlClassesClassListBookListParams): Promise<WlClassesClassListBookListResponse>;
    /** Returns list of classes and events in the business. */
    list(params?: WlClassesClassListListParams): Promise<WlClassesClassListListResponse>;
}
export declare class WlClassesClassViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns class information including schedules, images, and booking settings for the specified business. */
    element(params?: WlClassesClassViewElementParams): Promise<WlClassesClassViewElementResponse>;
}
export declare class WlClassesPromotionNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of promotions that can be used to pay for the class / event. */
    classPromotion(params?: WlClassesPromotionClassPromotionParams): Promise<WlClassesPromotionClassPromotionResponse>;
}
export declare class WlClassesPeriodModifyNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets data for step in wizard. */
    modifyGet(params?: WlClassesPeriodModifyModifyGetParams): Promise<WlClassesPeriodModifyModifyGetResponse>;
    /** Makes step in wizard. */
    modifyPost(params?: WlClassesPeriodModifyModifyPostParams): Promise<WlClassesPeriodModifyModifyPostResponse>;
}
export declare class WlClassesPeriodNamespace {
    private readonly _client;
    readonly modify: WlClassesPeriodModifyNamespace;
    constructor(_client: WlClient);
}
export declare class WlClassesNamespace {
    private readonly _client;
    readonly classList: WlClassesClassListNamespace;
    readonly classView: WlClassesClassViewNamespace;
    readonly promotion: WlClassesPromotionNamespace;
    readonly period: WlClassesPeriodNamespace;
    constructor(_client: WlClient);
}
export declare class WlCatalogCatalogListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves an information about current sale item. */
    element(params?: WlCatalogCatalogListElementParams): Promise<WlCatalogCatalogListElementResponse>;
    /** Retrieves a list of all sale items. */
    list(params?: WlCatalogCatalogListListParams): Promise<WlCatalogCatalogListListResponse>;
    /** Gets store products by shop category. */
    catalogProduct(params?: WlCatalogCatalogListCatalogProductParams): Promise<WlCatalogCatalogListCatalogProductResponse>;
}
export declare class WlCatalogPaymentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Allows to pay items for the client. */
    payment(params?: WlCatalogPaymentPaymentParams): Promise<WlCatalogPaymentPaymentResponse>;
}
export declare class WlCatalogCartNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets purchase cost data. */
    cart(params?: WlCatalogCartCartParams): Promise<WlCatalogCartCartResponse>;
    /** Checks limit quantity and whether a promotion can be added to the cart. */
    limitQuantity(params?: WlCatalogCartLimitQuantityParams): Promise<WlCatalogCartLimitQuantityResponse>;
}
export declare class WlCatalogStaffAppCatalogCartNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Calculates amount of cart. */
    catalogCart(params?: WlCatalogStaffAppCatalogCartCatalogCartParams): Promise<WlCatalogStaffAppCatalogCartCatalogCartResponse>;
}
export declare class WlCatalogStaffAppCatalogListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns all sale items available in the business for staff, optionally filtered by location and visit. */
    catalogList(params?: WlCatalogStaffAppCatalogListCatalogListParams): Promise<WlCatalogStaffAppCatalogListCatalogListResponse>;
}
export declare class WlCatalogStaffAppCatalogViewNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Calculates price information about sale item. */
    catalogView(params?: WlCatalogStaffAppCatalogViewCatalogViewParams): Promise<WlCatalogStaffAppCatalogViewCatalogViewResponse>;
}
export declare class WlCatalogStaffAppNamespace {
    private readonly _client;
    readonly catalogCart: WlCatalogStaffAppCatalogCartNamespace;
    readonly catalogList: WlCatalogStaffAppCatalogListNamespace;
    readonly catalogView: WlCatalogStaffAppCatalogViewNamespace;
    constructor(_client: WlClient);
}
export declare class WlCatalogNamespace {
    private readonly _client;
    readonly catalogList: WlCatalogCatalogListNamespace;
    readonly payment: WlCatalogPaymentNamespace;
    readonly cart: WlCatalogCartNamespace;
    readonly staffApp: WlCatalogStaffAppNamespace;
    constructor(_client: WlClient);
}
export declare class WlGoogleLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Performs Google authorization within the context of the specified business. */
    googleLogin(params?: WlGoogleLoginGoogleLoginParams): Promise<WlGoogleLoginGoogleLoginResponse>;
}
export declare class WlGoogleNamespace {
    private readonly _client;
    readonly login: WlGoogleLoginNamespace;
    constructor(_client: WlClient);
}
export declare class WlReceptionRosterDesignNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns configuration for the Attendance Kiosk. */
    receptionRosterDesign(params?: WlReceptionRosterDesignReceptionRosterDesignParams): Promise<WlReceptionRosterDesignReceptionRosterDesignResponse>;
}
export declare class WlReceptionRosterNamespace {
    private readonly _client;
    readonly design: WlReceptionRosterDesignNamespace;
    constructor(_client: WlClient);
    /** Marks the visit as not attended via the Attendance Kiosk. */
    attendanceListNotAttend(params?: WlReceptionRosterAttendanceListNotAttendParams): Promise<WlReceptionRosterAttendanceListNotAttendResponse>;
    /** Books a class for the client and marks the visit as attended via the Attendance Kiosk. */
    attendanceListAttend(params?: WlReceptionRosterAttendanceListAttendParams): Promise<WlReceptionRosterAttendanceListAttendResponse>;
    /** Books a class for the client via the Attendance Kiosk and returns whether the client was placed on the class list or waitlist. */
    attendanceListBook(params?: WlReceptionRosterAttendanceListBookParams): Promise<WlReceptionRosterAttendanceListBookResponse>;
    /** Gets the secret string for Attendance Kiosk requests. */
    attendanceSecret(params?: WlReceptionRosterAttendanceSecretParams): Promise<WlReceptionRosterAttendanceSecretResponse>;
}
export declare class WlReceptionApplicationNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the schedule and HTML for the Self Check-In Web App for the given user. */
    receptionScheduleGet(params?: WlReceptionApplicationReceptionScheduleGetParams): Promise<WlReceptionApplicationReceptionScheduleGetResponse>;
    /** Performs check-in for the given user and returns the confirmation HTML and data. */
    receptionSchedulePost(params?: WlReceptionApplicationReceptionSchedulePostParams): Promise<WlReceptionApplicationReceptionSchedulePostResponse>;
    /** Returns member information and notification items for the Self Check-In Web App. */
    memberInfo(params?: WlReceptionApplicationMemberInfoParams): Promise<WlReceptionApplicationMemberInfoResponse>;
    /** Performs authorization based on the given authorization value and business settings. */
    receptionAuthorize(params?: WlReceptionApplicationReceptionAuthorizeParams): Promise<WlReceptionApplicationReceptionAuthorizeResponse>;
}
export declare class WlReceptionDesignNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about settings for Check In Web Application. */
    receptionDesign(params?: WlReceptionDesignReceptionDesignParams): Promise<WlReceptionDesignReceptionDesignResponse>;
}
export declare class WlReceptionNamespace {
    private readonly _client;
    readonly roster: WlReceptionRosterNamespace;
    readonly application: WlReceptionApplicationNamespace;
    readonly design: WlReceptionDesignNamespace;
    constructor(_client: WlClient);
}
export declare class WlPurchaseReceiptNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets purchase information. */
    purchaseReceipt(params?: WlPurchaseReceiptPurchaseReceiptParams): Promise<WlPurchaseReceiptPurchaseReceiptResponse>;
}
export declare class WlPurchaseMailNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends mail message with list of purchased items for specified purchase. */
    purchaseMail(params?: WlPurchaseMailPurchaseMailParams): Promise<WlPurchaseMailPurchaseMailResponse>;
}
export declare class WlPurchaseShareNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Records the purchase share action and returns the social network sharing URL. */
    purchaseShare(params?: WlPurchaseSharePurchaseShareParams): Promise<WlPurchaseSharePurchaseShareResponse>;
}
export declare class WlPurchaseNamespace {
    private readonly _client;
    readonly receipt: WlPurchaseReceiptNamespace;
    readonly mail: WlPurchaseMailNamespace;
    readonly share: WlPurchaseShareNamespace;
    constructor(_client: WlClient);
}
export declare class WlInsuranceCatalogNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns a list of active insurance programs for the specified promotion. */
    programList(params?: WlInsuranceCatalogProgramListParams): Promise<WlInsuranceCatalogProgramListResponse>;
}
export declare class WlInsuranceEnrollmentFieldNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of required partner fields for the specified wellness program. */
    enrollmentFieldListGet(params?: WlInsuranceEnrollmentFieldEnrollmentFieldListGetParams): Promise<WlInsuranceEnrollmentFieldEnrollmentFieldListGetResponse>;
    /** Validates the list of fields filled in by the user for enrollment. */
    enrollmentFieldListPost(params?: WlInsuranceEnrollmentFieldEnrollmentFieldListPostParams): Promise<WlInsuranceEnrollmentFieldEnrollmentFieldListPostResponse>;
}
export declare class WlInsuranceEnrollmentNamespace {
    private readonly _client;
    readonly field: WlInsuranceEnrollmentFieldNamespace;
    constructor(_client: WlClient);
}
export declare class WlInsuranceNamespace {
    private readonly _client;
    readonly catalog: WlInsuranceCatalogNamespace;
    readonly enrollment: WlInsuranceEnrollmentNamespace;
    constructor(_client: WlClient);
}
export declare class WlServiceServiceListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of appointment type in the business. */
    list(params?: WlServiceServiceListListParams): Promise<WlServiceServiceListListResponse>;
}
export declare class WlServiceNamespace {
    private readonly _client;
    readonly serviceList: WlServiceServiceListNamespace;
    constructor(_client: WlClient);
}
export declare class WlSmsPhoneNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets the phone number associated with a specific business. */
    businessPhone(params?: WlSmsPhoneBusinessPhoneParams): Promise<WlSmsPhoneBusinessPhoneResponse>;
}
export declare class WlSmsNamespace {
    private readonly _client;
    readonly phone: WlSmsPhoneNamespace;
    constructor(_client: WlClient);
}
export declare class WlAiAgentLinkNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends an AI agent link action email (booking or purchase) to the specified user. */
    sendMail(params?: WlAiAgentLinkSendMailParams): Promise<WlAiAgentLinkSendMailResponse>;
}
export declare class WlAiAgentNamespace {
    private readonly _client;
    readonly link: WlAiAgentLinkNamespace;
    constructor(_client: WlClient);
}
export declare class WlRewardActionCategoryListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves all reward action categories for business specified in `k_business`. */
    categoryList(params?: WlRewardActionCategoryListCategoryListParams): Promise<WlRewardActionCategoryListCategoryListResponse>;
}
export declare class WlRewardActionNamespace {
    private readonly _client;
    readonly categoryList: WlRewardActionCategoryListNamespace;
    constructor(_client: WlClient);
    /** Retrieves a list of available reward actions. */
    action(params?: WlRewardActionActionParams): Promise<WlRewardActionActionResponse>;
    /** Updates configuration fields for the specified reward action. */
    actionWrite(params?: WlRewardActionActionWriteParams): Promise<WlRewardActionActionWriteResponse>;
    /** Retrieves information about reward action item. */
    elementGet(params?: WlRewardActionElementGetParams): Promise<WlRewardActionElementGetResponse>;
    /** Requests points earning. */
    elementPost(params?: WlRewardActionElementPostParams): Promise<WlRewardActionElementPostResponse>;
    /** Retrieves information about reward actions. */
    actionType(params?: WlRewardActionActionTypeParams): Promise<WlRewardActionActionTypeResponse>;
}
export declare class WlRewardScoreCurrentNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about current score in wellnessliving points. */
    current(params?: WlRewardScoreCurrentCurrentParams): Promise<WlRewardScoreCurrentCurrentResponse>;
}
export declare class WlRewardScoreNamespace {
    private readonly _client;
    readonly current: WlRewardScoreCurrentNamespace;
    constructor(_client: WlClient);
    /** Returns the total reward points for the specified activity list or user. */
    scoreGet(params?: WlRewardScoreScoreGetParams): Promise<WlRewardScoreScoreGetResponse>;
    /** Gives user reward points for sharing of certain activity into Facebook. */
    scorePost(params?: WlRewardScoreScorePostParams): Promise<WlRewardScoreScorePostResponse>;
    /** Manually adjusts the reward points balance for the specified user. */
    scorePut(params?: WlRewardScoreScorePutParams): Promise<WlRewardScoreScorePutResponse>;
}
export declare class WlRewardBoardBoardListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves all reward boards for business specified in `k_business`. */
    list(params?: WlRewardBoardBoardListListParams): Promise<WlRewardBoardBoardListListResponse>;
}
export declare class WlRewardBoardNamespace {
    private readonly _client;
    readonly boardList: WlRewardBoardBoardListNamespace;
    constructor(_client: WlClient);
    /** Retrieves information about reward board item. */
    element(params?: WlRewardBoardElementParams): Promise<WlRewardBoardElementResponse>;
    /** Retrieves a list of reward board items to show. */
    list(params?: WlRewardBoardListParams): Promise<WlRewardBoardListResponse>;
}
export declare class WlRewardPrizeNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about redeemable prize item. */
    elementGet(params?: WlRewardPrizeElementGetParams): Promise<WlRewardPrizeElementGetResponse>;
    /** Redeems selected prize. */
    elementPost(params?: WlRewardPrizeElementPostParams): Promise<WlRewardPrizeElementPostResponse>;
    /** Retrieves a list of redeemable prizes. */
    prize(params?: WlRewardPrizePrizeParams): Promise<WlRewardPrizePrizeResponse>;
}
export declare class WlRewardNamespace {
    private readonly _client;
    readonly action: WlRewardActionNamespace;
    readonly score: WlRewardScoreNamespace;
    readonly board: WlRewardBoardNamespace;
    readonly prize: WlRewardPrizeNamespace;
    constructor(_client: WlClient);
}
export declare class WlNotificationSendNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Schedules or immediately sends a notification to clients of the specified business or location. */
    notificationSend(params?: WlNotificationSendNotificationSendParams): Promise<WlNotificationSendNotificationSendResponse>;
    /** Returns configuration information about the specified notification for the given business. */
    notificationInfo(params?: WlNotificationSendNotificationInfoParams): Promise<WlNotificationSendNotificationInfoResponse>;
}
export declare class WlNotificationOtpNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends an OTP code to the specified phone number for verification. */
    phoneOtpGet(params?: WlNotificationOtpPhoneOtpGetParams): Promise<WlNotificationOtpPhoneOtpGetResponse>;
    /** Verifies the OTP code submitted by the user for the specified phone number. */
    phoneOtpPost(params?: WlNotificationOtpPhoneOtpPostParams): Promise<WlNotificationOtpPhoneOtpPostResponse>;
}
export declare class WlNotificationNamespace {
    private readonly _client;
    readonly send: WlNotificationSendNamespace;
    readonly otp: WlNotificationOtpNamespace;
    constructor(_client: WlClient);
}
export declare class WlPassportLoginEnterNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends an OTP code to the user's email or phone number to initiate authorization. */
    passportOtpGet(params?: WlPassportLoginEnterPassportOtpGetParams): Promise<WlPassportLoginEnterPassportOtpGetResponse>;
    /** Verifies the submitted OTP code and establishes an authorized session for the user. */
    passportOtpPost(params?: WlPassportLoginEnterPassportOtpPostParams): Promise<WlPassportLoginEnterPassportOtpPostResponse>;
}
export declare class WlPassportLoginRegisterNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Sends an OTP code to the user's email or phone number to initiate authorization. */
    registerOtpGet(params?: WlPassportLoginRegisterRegisterOtpGetParams): Promise<WlPassportLoginRegisterRegisterOtpGetResponse>;
    /** Verifies the submitted OTP code and establishes an authorized session for the user. */
    registerOtpPost(params?: WlPassportLoginRegisterRegisterOtpPostParams): Promise<WlPassportLoginRegisterRegisterOtpPostResponse>;
}
export declare class WlPassportLoginNamespace {
    private readonly _client;
    readonly enter: WlPassportLoginEnterNamespace;
    readonly register: WlPassportLoginRegisterNamespace;
    constructor(_client: WlClient);
    /** Returns the current user's login information and password reset URL for the specified business. */
    info(params?: WlPassportLoginInfoParams): Promise<WlPassportLoginInfoResponse>;
}
export declare class WlPassportNamespace {
    private readonly _client;
    readonly login: WlPassportLoginNamespace;
    constructor(_client: WlClient);
}
export declare class WlMemberInfoNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about specified member. */
    info(params?: WlMemberInfoInfoParams): Promise<WlMemberInfoInfoResponse>;
}
export declare class WlMemberPurchaseNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns active clients holding at least one active Purchase Option from the specified list. */
    memberByPromotion(params?: WlMemberPurchaseMemberByPromotionParams): Promise<WlMemberPurchaseMemberByPromotionResponse>;
}
export declare class WlMemberGroupEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns data for group edit form. */
    editGet(params?: WlMemberGroupEditEditGetParams): Promise<WlMemberGroupEditEditGetResponse>;
    /** Adds or changes a client group. */
    editPost(params?: WlMemberGroupEditEditPostParams): Promise<WlMemberGroupEditEditPostResponse>;
    /** Adds or edit client group Query. */
    editPut(params?: WlMemberGroupEditEditPutParams): Promise<WlMemberGroupEditEditPutResponse>;
}
export declare class WlMemberGroupUserNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes the user from the group. */
    userGroupDelete(params?: WlMemberGroupUserUserGroupDeleteParams): Promise<WlMemberGroupUserUserGroupDeleteResponse>;
    /** Gets information about all groups to which the specified user belongs. */
    userGroupGet(params?: WlMemberGroupUserUserGroupGetParams): Promise<WlMemberGroupUserUserGroupGetResponse>;
    /** Adds a user to a group. */
    userGroupPost(params?: WlMemberGroupUserUserGroupPostParams): Promise<WlMemberGroupUserUserGroupPostResponse>;
}
export declare class WlMemberGroupGroupListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes groups. */
    listDelete(params?: WlMemberGroupGroupListListDeleteParams): Promise<WlMemberGroupGroupListListDeleteResponse>;
    /** Returns all member groups list in the business if `$a_member_group_select` is empty, otherwise filters result according to `$a_member_group_select`. */
    listGet(params?: WlMemberGroupGroupListListGetParams): Promise<WlMemberGroupGroupListListGetResponse>;
    /** Updates the order of groups in a list. */
    listPut(params?: WlMemberGroupGroupListListPutParams): Promise<WlMemberGroupGroupListListPutResponse>;
}
export declare class WlMemberGroupNamespace {
    private readonly _client;
    readonly edit: WlMemberGroupEditNamespace;
    readonly user: WlMemberGroupUserNamespace;
    readonly groupList: WlMemberGroupGroupListNamespace;
    constructor(_client: WlClient);
}
export declare class WlMemberProgressFieldEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns field data. */
    fieldGet(params?: WlMemberProgressFieldEditFieldGetParams): Promise<WlMemberProgressFieldEditFieldGetResponse>;
    /** Saves field data. */
    fieldPost(params?: WlMemberProgressFieldEditFieldPostParams): Promise<WlMemberProgressFieldEditFieldPostResponse>;
}
export declare class WlMemberProgressFieldNamespace {
    private readonly _client;
    readonly edit: WlMemberProgressFieldEditNamespace;
    constructor(_client: WlClient);
    /** Changes states of field. */
    state(params?: WlMemberProgressFieldStateParams): Promise<WlMemberProgressFieldStateResponse>;
}
export declare class WlMemberProgressLogEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns progress log data. */
    logGet(params?: WlMemberProgressLogEditLogGetParams): Promise<WlMemberProgressLogEditLogGetResponse>;
    /** Saves progress fields log. */
    logPost(params?: WlMemberProgressLogEditLogPostParams): Promise<WlMemberProgressLogEditLogPostResponse>;
}
export declare class WlMemberProgressLogImageNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes progress image. */
    imageDelete(params?: WlMemberProgressLogImageImageDeleteParams): Promise<WlMemberProgressLogImageImageDeleteResponse>;
    /** Returns progress picture data. */
    imageGet(params?: WlMemberProgressLogImageImageGetParams): Promise<WlMemberProgressLogImageImageGetResponse>;
    /** Saves progress picture. */
    imagePost(params?: WlMemberProgressLogImageImagePostParams): Promise<WlMemberProgressLogImageImagePostResponse>;
}
export declare class WlMemberProgressLogCompareNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of dates where client logged his progress. */
    compare(params?: WlMemberProgressLogCompareCompareParams): Promise<WlMemberProgressLogCompareCompareResponse>;
}
export declare class WlMemberProgressLogNamespace {
    private readonly _client;
    readonly edit: WlMemberProgressLogEditNamespace;
    readonly image: WlMemberProgressLogImageNamespace;
    readonly compare: WlMemberProgressLogCompareNamespace;
    constructor(_client: WlClient);
    /** Verifies client's progress log data. */
    verify(params?: WlMemberProgressLogVerifyParams): Promise<WlMemberProgressLogVerifyResponse>;
}
export declare class WlMemberProgressGoalEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns progress goal log data. */
    goalGet(params?: WlMemberProgressGoalEditGoalGetParams): Promise<WlMemberProgressGoalEditGoalGetResponse>;
    /** Saves progress goal fields log. */
    goalPost(params?: WlMemberProgressGoalEditGoalPostParams): Promise<WlMemberProgressGoalEditGoalPostResponse>;
}
export declare class WlMemberProgressGoalNamespace {
    private readonly _client;
    readonly edit: WlMemberProgressGoalEditNamespace;
    constructor(_client: WlClient);
}
export declare class WlMemberProgressNamespace {
    private readonly _client;
    readonly field: WlMemberProgressFieldNamespace;
    readonly log: WlMemberProgressLogNamespace;
    readonly goal: WlMemberProgressGoalNamespace;
    constructor(_client: WlClient);
}
export declare class WlMemberNamespace {
    private readonly _client;
    readonly info: WlMemberInfoNamespace;
    readonly purchase: WlMemberPurchaseNamespace;
    readonly group: WlMemberGroupNamespace;
    readonly progress: WlMemberProgressNamespace;
    constructor(_client: WlClient);
}
export declare class WlUserInfoNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Retrieves information about user. */
    userInfo(params?: WlUserInfoUserInfoParams): Promise<WlUserInfoUserInfoResponse>;
    /** Retrieves information about the user belongs to certain integrations. */
    userIntegration(params?: WlUserInfoUserIntegrationParams): Promise<WlUserInfoUserIntegrationResponse>;
}
export declare class WlUserReferrerNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Searches for a referrer by the given search string and returns their profile information. */
    referrer(params?: WlUserReferrerReferrerParams): Promise<WlUserReferrerReferrerResponse>;
}
export declare class WlUserNamespace {
    private readonly _client;
    readonly info: WlUserInfoNamespace;
    readonly referrer: WlUserReferrerNamespace;
    constructor(_client: WlClient);
}
export declare class WlDiscountCodeEditNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets information about discount. */
    discountCodeEditGet(params?: WlDiscountCodeEditDiscountCodeEditGetParams): Promise<WlDiscountCodeEditDiscountCodeEditGetResponse>;
    /** Saves information about discount code or create new. */
    discountCodeEditPost(params?: WlDiscountCodeEditDiscountCodeEditPostParams): Promise<WlDiscountCodeEditDiscountCodeEditPostResponse>;
    /** Duplicates an existing discount code. */
    discountCodeEditPut(params?: WlDiscountCodeEditDiscountCodeEditPutParams): Promise<WlDiscountCodeEditDiscountCodeEditPutResponse>;
}
export declare class WlDiscountCodeNamespace {
    private readonly _client;
    readonly edit: WlDiscountCodeEditNamespace;
    constructor(_client: WlClient);
    /** Returns discount codes of the specified business. */
    discountCode(params?: WlDiscountCodeDiscountCodeParams): Promise<WlDiscountCodeDiscountCodeResponse>;
}
export declare class WlDiscountNamespace {
    private readonly _client;
    readonly code: WlDiscountCodeNamespace;
    constructor(_client: WlClient);
}
export declare class WlShopCategoryNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns the list of shop categories available for the given business. */
    categoryGet(params?: WlShopCategoryCategoryGetParams): Promise<WlShopCategoryCategoryGetResponse>;
    /** Creates new shop category. */
    categoryPost(params?: WlShopCategoryCategoryPostParams): Promise<WlShopCategoryCategoryPostResponse>;
}
export declare class WlShopProductOptionInventoryCountNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about product options. Works in two modes: review and search. In review mode, the method returns products with changed inventory quantities and notes. In search mode, the method returns one product and its options (the result of searching by product barcode). */
    inventoryCountGet(params?: WlShopProductOptionInventoryCountInventoryCountGetParams): Promise<WlShopProductOptionInventoryCountInventoryCountGetResponse>;
    /** Saves changes of product inventory quantities and notes. */
    inventoryCountPost(params?: WlShopProductOptionInventoryCountInventoryCountPostParams): Promise<WlShopProductOptionInventoryCountInventoryCountPostResponse>;
}
export declare class WlShopProductOptionInventoryNamespace {
    private readonly _client;
    readonly count: WlShopProductOptionInventoryCountNamespace;
    constructor(_client: WlClient);
}
export declare class WlShopProductOptionNamespace {
    private readonly _client;
    readonly inventory: WlShopProductOptionInventoryNamespace;
    constructor(_client: WlClient);
}
export declare class WlShopProductNamespace {
    private readonly _client;
    readonly option: WlShopProductOptionNamespace;
    constructor(_client: WlClient);
}
export declare class WlShopNamespace {
    private readonly _client;
    readonly category: WlShopCategoryNamespace;
    readonly product: WlShopProductNamespace;
    constructor(_client: WlClient);
}
export declare class WlResourceLayoutNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns information about the specified asset layout, including assets and custom shapes. */
    layout(params?: WlResourceLayoutLayoutParams): Promise<WlResourceLayoutLayoutResponse>;
}
export declare class WlResourceResourceListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns assets list in the business. */
    list(params?: WlResourceResourceListListParams): Promise<WlResourceResourceListListResponse>;
}
export declare class WlResourceNamespace {
    private readonly _client;
    readonly layout: WlResourceLayoutNamespace;
    readonly resourceList: WlResourceResourceListNamespace;
    constructor(_client: WlClient);
}
export declare class WlFamilyRelationNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Deletes family relation between 2 users. */
    relationDelete(params?: WlFamilyRelationRelationDeleteParams): Promise<WlFamilyRelationRelationDeleteResponse>;
    /** Gets relative list. */
    relationGet(params?: WlFamilyRelationRelationGetParams): Promise<WlFamilyRelationRelationGetResponse>;
    /** Adds to user `uid` relative `a_new`. */
    relationPost(params?: WlFamilyRelationRelationPostParams): Promise<WlFamilyRelationRelationPostResponse>;
    /** Gets relationships list. */
    familyRelation(params?: WlFamilyRelationFamilyRelationParams): Promise<WlFamilyRelationFamilyRelationResponse>;
    /** Deletes family relation between 2 users. */
    relation72Delete(params?: WlFamilyRelationRelation72DeleteParams): Promise<WlFamilyRelationRelation72DeleteResponse>;
    /** Gets relative list. */
    relation72Get(params?: WlFamilyRelationRelation72GetParams): Promise<WlFamilyRelationRelation72GetResponse>;
    /** Adds to user [RelationApi](/Wl/Family/Relation/Relation.json) relative [RelationApi](/Wl/Family/Relation/Relation.json). */
    relation72Post(params?: WlFamilyRelationRelation72PostParams): Promise<WlFamilyRelationRelation72PostResponse>;
}
export declare class WlFamilyNamespace {
    private readonly _client;
    readonly relation: WlFamilyRelationNamespace;
    constructor(_client: WlClient);
}
export declare class WlIntegrationAutymateNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns or changes the Autymate enrollment status for the specified business. Autymate specifically requested this method be a get. */
    autymateActivate(params?: WlIntegrationAutymateAutymateActivateParams): Promise<WlIntegrationAutymateAutymateActivateResponse>;
    /** Gets the daily transaction data. */
    report(params?: WlIntegrationAutymateReportParams): Promise<WlIntegrationAutymateReportResponse>;
}
export declare class WlIntegrationSamlNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets status of the user in business for given list of identifiers. */
    samlUserDeactivation(params?: WlIntegrationSamlSamlUserDeactivationParams): Promise<WlIntegrationSamlSamlUserDeactivationResponse>;
}
export declare class WlIntegrationCurvesNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns country, region, state, city and location lists of the franchisor. This method returns all the information from the parent `get()` and the Curves territory ID. */
    curvesFranchiseLocation(params?: WlIntegrationCurvesCurvesFranchiseLocationParams): Promise<WlIntegrationCurvesCurvesFranchiseLocationResponse>;
}
export declare class WlIntegrationDragonFlyNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Checks if the user can physically access the location. */
    access(params?: WlIntegrationDragonFlyAccessParams): Promise<WlIntegrationDragonFlyAccessResponse>;
}
export declare class WlIntegrationNamespace {
    private readonly _client;
    readonly autymate: WlIntegrationAutymateNamespace;
    readonly saml: WlIntegrationSamlNamespace;
    readonly curves: WlIntegrationCurvesNamespace;
    readonly dragonFly: WlIntegrationDragonFlyNamespace;
    constructor(_client: WlClient);
}
export declare class WlCouponCouponListNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Gets list of coupons. */
    list(params?: WlCouponCouponListListParams): Promise<WlCouponCouponListListResponse>;
}
export declare class WlCouponNamespace {
    private readonly _client;
    readonly couponList: WlCouponCouponListNamespace;
    constructor(_client: WlClient);
}
export declare class WlMicrosoftLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Removes the association between a website client and a Microsoft account. */
    microsoftLoginDelete(params?: WlMicrosoftLoginMicrosoftLoginDeleteParams): Promise<WlMicrosoftLoginMicrosoftLoginDeleteResponse>;
    /** Collects data for the Microsoft login button. */
    microsoftLoginGet(params?: WlMicrosoftLoginMicrosoftLoginGetParams): Promise<WlMicrosoftLoginMicrosoftLoginGetResponse>;
    /** Authenticates a user via Microsoft OAuth for the specified business. */
    microsoftLoginPost(params?: WlMicrosoftLoginMicrosoftLoginPostParams): Promise<WlMicrosoftLoginMicrosoftLoginPostResponse>;
}
export declare class WlMicrosoftNamespace {
    private readonly _client;
    readonly login: WlMicrosoftLoginNamespace;
    constructor(_client: WlClient);
}
export declare class WlSearchTagNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Returns list of search tags. This is public information and method does not require any level of privileges. */
    searchTagList(params?: WlSearchTagSearchTagListParams): Promise<WlSearchTagSearchTagListResponse>;
}
export declare class WlSearchNamespace {
    private readonly _client;
    readonly tag: WlSearchTagNamespace;
    constructor(_client: WlClient);
}
export declare class WlGymVisitNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Records a gym visit for the specified client at the given date and time. */
    visitAdd(params?: WlGymVisitVisitAddParams): Promise<WlGymVisitVisitAddResponse>;
}
export declare class WlGymNamespace {
    private readonly _client;
    readonly visit: WlGymVisitNamespace;
    constructor(_client: WlClient);
}
export declare class WlSocialShareNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Saves the share post data and returns the secret key for the shared object. */
    socialShare(params?: WlSocialShareSocialShareParams): Promise<WlSocialShareSocialShareResponse>;
}
export declare class WlSocialNamespace {
    private readonly _client;
    readonly share: WlSocialShareNamespace;
    constructor(_client: WlClient);
}
export declare class WlFacebookLoginNamespace {
    private readonly _client;
    constructor(_client: WlClient);
    /** Performs Facebook authorization within the context of the specified business. */
    facebookLogin(params?: WlFacebookLoginFacebookLoginParams): Promise<WlFacebookLoginFacebookLoginResponse>;
}
export declare class WlFacebookNamespace {
    private readonly _client;
    readonly login: WlFacebookLoginNamespace;
    constructor(_client: WlClient);
}
export declare class WlNamespace {
    private readonly _client;
    readonly schedule: WlScheduleNamespace;
    readonly visit: WlVisitNamespace;
    readonly location: WlLocationNamespace;
    readonly profile: WlProfileNamespace;
    readonly event: WlEventNamespace;
    readonly business: WlBusinessNamespace;
    readonly report: WlReportNamespace;
    readonly collector: WlCollectorNamespace;
    readonly announcement: WlAnnouncementNamespace;
    readonly lead: WlLeadNamespace;
    readonly promotion: WlPromotionNamespace;
    readonly login: WlLoginNamespace;
    readonly quiz: WlQuizNamespace;
    readonly video: WlVideoNamespace;
    readonly fitbuilder: WlFitbuilderNamespace;
    readonly mail: WlMailNamespace;
    readonly staff: WlStaffNamespace;
    readonly skin: WlSkinNamespace;
    readonly tag: WlTagNamespace;
    readonly tax: WlTaxNamespace;
    readonly review: WlReviewNamespace;
    readonly rank: WlRankNamespace;
    readonly holiday: WlHolidayNamespace;
    readonly appointment: WlAppointmentNamespace;
    readonly book: WlBookNamespace;
    readonly classes: WlClassesNamespace;
    readonly catalog: WlCatalogNamespace;
    readonly google: WlGoogleNamespace;
    readonly reception: WlReceptionNamespace;
    readonly purchase: WlPurchaseNamespace;
    readonly insurance: WlInsuranceNamespace;
    readonly service: WlServiceNamespace;
    readonly sms: WlSmsNamespace;
    readonly aiAgent: WlAiAgentNamespace;
    readonly reward: WlRewardNamespace;
    readonly notification: WlNotificationNamespace;
    readonly passport: WlPassportNamespace;
    readonly member: WlMemberNamespace;
    readonly user: WlUserNamespace;
    readonly discount: WlDiscountNamespace;
    readonly shop: WlShopNamespace;
    readonly resource: WlResourceNamespace;
    readonly family: WlFamilyNamespace;
    readonly integration: WlIntegrationNamespace;
    readonly coupon: WlCouponNamespace;
    readonly microsoft: WlMicrosoftNamespace;
    readonly search: WlSearchNamespace;
    readonly gym: WlGymNamespace;
    readonly social: WlSocialNamespace;
    readonly facebook: WlFacebookNamespace;
    constructor(_client: WlClient);
}
/** WellnessLiving API client. */
export declare class WlClient {
    private readonly _token;
    private readonly _baseUrl;
    private readonly _timeout;
    readonly thoth: ThothNamespace;
    readonly core: CoreNamespace;
    readonly social: SocialNamespace;
    readonly wl: WlNamespace;
    constructor(options: WlClientOptions);
    _request<T>(path: string, params: unknown, method: string): Promise<T>;
}
export default WlClient;
