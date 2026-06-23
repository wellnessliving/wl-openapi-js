// AUTO-GENERATED — DO NOT EDIT
// WellnessLiving SDK — production channel
// OpenAPI spec version: 1.1.20260620071011
// Build date: 2026-06-23
// Endpoints: 454
export class WlApiError extends Error {
    constructor(status, body) {
        super('WlSdk: HTTP ' + status);
        this.name = 'WlApiError';
        this.status = status;
        const data = body;
        this.errors = (data != null && data.a_error != null) ? data.a_error : [];
    }
}
// --- Namespace classes ---
export class ThothExplorerSearchClassSessionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets list of class sessions based on search criteria. */
    classSessionSearch(params) {
        return this._client._request('/Thoth/ExplorerSearch/ClassSession/ClassSessionSearch.json', params, 'GET');
    }
}
export class ThothExplorerSearchNamespace {
    constructor(_client) {
        this._client = _client;
        this.classSession = new ThothExplorerSearchClassSessionNamespace(this._client);
    }
}
export class ThothReportCoreGeneratorNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns contents of a report as a table. */
    query(params) {
        return this._client._request('/Thoth/ReportCore/Generator/Query.json', params, 'POST');
    }
}
export class ThothReportCoreNamespace {
    constructor(_client) {
        this._client = _client;
        this.generator = new ThothReportCoreGeneratorNamespace(this._client);
    }
}
export class ThothWlPayAccountChargeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Allows the user account to be filled with a specified payment, or to perform the reset change manually. */
    charge(params) {
        return this._client._request('/Thoth/WlPay/Account/Charge/Charge.json', params, 'POST');
    }
}
export class ThothWlPayAccountNamespace {
    constructor(_client) {
        this._client = _client;
        this.charge = new ThothWlPayAccountChargeNamespace(this._client);
    }
    /** Retrieves information about accounts of given user in given business. */
    account(params) {
        return this._client._request('/Thoth/WlPay/Account/Account.json', params, 'GET');
    }
}
export class ThothWlPayFormNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about payment environment. */
    environmentUser(params) {
        return this._client._request('/Thoth/WlPay/Form/EnvironmentUser.json', params, 'GET');
    }
    /** Returns information about payment environment. */
    /** @deprecated */
    environment(params) {
        return this._client._request('/Thoth/WlPay/Form/Environment.json', params, 'GET');
    }
}
export class ThothWlPayMethodNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of active payment methods data. */
    list(params) {
        return this._client._request('/Thoth/WlPay/Method/List.json', params, 'GET');
    }
}
export class ThothWlPayOwnerNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about payment owner. */
    owner(params) {
        return this._client._request('/Thoth/WlPay/Owner/Owner.json', params, 'GET');
    }
}
export class ThothWlPayAddressNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets user's payment addresses information. */
    address(params) {
        return this._client._request('/Thoth/WlPay/Address/Address.json', params, 'GET');
    }
    /** Returns default payment address data that is retrieved from user profile. */
    profile(params) {
        return this._client._request('/Thoth/WlPay/Address/Profile.json', params, 'GET');
    }
}
export class ThothWlPayTransactionReportNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets the daily transaction data. */
    transactionAllPayment(params) {
        return this._client._request('/Thoth/WlPay/Transaction/Report/TransactionAllPayment.json', params, 'GET');
    }
}
export class ThothWlPayTransactionNamespace {
    constructor(_client) {
        this._client = _client;
        this.report = new ThothWlPayTransactionReportNamespace(this._client);
    }
}
export class ThothWlPayBankCardAddNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes saved card. */
    addDelete(params) {
        return this._client._request('/Thoth/WlPay/Bank/Card/Add/Add.json', params, 'DELETE');
    }
    /** Gets code of bank card widget. */
    /** @deprecated */
    addGet(params) {
        return this._client._request('/Thoth/WlPay/Bank/Card/Add/Add.json', params, 'GET');
    }
    /** Saves new bank card. */
    addPost(params) {
        return this._client._request('/Thoth/WlPay/Bank/Card/Add/Add.json', params, 'POST');
    }
}
export class ThothWlPayBankCardNamespace {
    constructor(_client) {
        this._client = _client;
        this.add = new ThothWlPayBankCardAddNamespace(this._client);
    }
    /** Retrieves information about user's bank cards. */
    list(params) {
        return this._client._request('/Thoth/WlPay/Bank/Card/List.json', params, 'GET');
    }
}
export class ThothWlPayBankNamespace {
    constructor(_client) {
        this._client = _client;
        this.card = new ThothWlPayBankCardNamespace(this._client);
    }
}
export class ThothWlPayNamespace {
    constructor(_client) {
        this._client = _client;
        this.account = new ThothWlPayAccountNamespace(this._client);
        this.form = new ThothWlPayFormNamespace(this._client);
        this.method = new ThothWlPayMethodNamespace(this._client);
        this.owner = new ThothWlPayOwnerNamespace(this._client);
        this.address = new ThothWlPayAddressNamespace(this._client);
        this.transaction = new ThothWlPayTransactionNamespace(this._client);
        this.bank = new ThothWlPayBankNamespace(this._client);
    }
}
export class ThothNamespace {
    constructor(_client) {
        this._client = _client;
        this.explorerSearch = new ThothExplorerSearchNamespace(this._client);
        this.reportCore = new ThothReportCoreNamespace(this._client);
        this.wlPay = new ThothWlPayNamespace(this._client);
    }
}
export class CoreRequestApiApplicationCredentialNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes the specified credential for the application. */
    credentialDelete(params) {
        return this._client._request('/Core/Request/Api/Application/Credential/Credential.json', params, 'DELETE');
    }
    /** Returns the credential data for the application. */
    credentialGet(params) {
        return this._client._request('/Core/Request/Api/Application/Credential/Credential.json', params, 'GET');
    }
    /** Saves the credential for the application. */
    credentialPut(params) {
        return this._client._request('/Core/Request/Api/Application/Credential/Credential.json', params, 'PUT');
    }
}
export class CoreRequestApiApplicationNamespace {
    constructor(_client) {
        this._client = _client;
        this.credential = new CoreRequestApiApplicationCredentialNamespace(this._client);
    }
    /** Restricts access to API for all sites, which are given in the list. */
    originDelete(params) {
        return this._client._request('/Core/Request/Api/Application/Origin.json', params, 'DELETE');
    }
    /** Gets list of all sites, where usage of the API is allowed for the current application. */
    originGet(params) {
        return this._client._request('/Core/Request/Api/Application/Origin.json', params, 'GET');
    }
    /** Allows access to API for all sites, which are given in the list. */
    originPut(params) {
        return this._client._request('/Core/Request/Api/Application/Origin.json', params, 'PUT');
    }
}
export class CoreRequestApiNamespace {
    constructor(_client) {
        this._client = _client;
        this.application = new CoreRequestApiApplicationNamespace(this._client);
    }
    /** Gets a secret key for signing. */
    keySecret(params) {
        return this._client._request('/Core/Request/Api/KeySecret.json', params, 'GET');
    }
}
export class CoreRequestTokenNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets new pin code. */
    tokenPin(params) {
        return this._client._request('/Core/Request/Token/TokenPin.json', params, 'GET');
    }
}
export class CoreRequestNamespace {
    constructor(_client) {
        this._client = _client;
        this.api = new CoreRequestApiNamespace(this._client);
        this.token = new CoreRequestTokenNamespace(this._client);
    }
    /** Returns the example result for debugging. */
    example(params) {
        return this._client._request('/Core/Request/Example.json', params, 'GET');
    }
}
export class CoreGeoRegionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about countries and regions. */
    region(params) {
        return this._client._request('/Core/Geo/Region/Region.json', params, 'GET');
    }
}
export class CoreGeoNamespace {
    constructor(_client) {
        this._client = _client;
        this.region = new CoreGeoRegionNamespace(this._client);
    }
    /** Returns a list of cities to show in combobox list. */
    combobox(params) {
        return this._client._request('/Core/Geo/Combobox.json', params, 'GET');
    }
}
export class CoreGoogleCaptchaNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves the user CAPTCHA token for the current session. */
    googleCaptcha(params) {
        return this._client._request('/Core/Google/Captcha/GoogleCaptcha.json', params, 'PUT');
    }
    /** Returns the overridden score for the reCAPTCHA v3. */
    captchaScoreGet(params) {
        return this._client._request('/Core/Google/Captcha/CaptchaScore.json', params, 'GET');
    }
    /** Validates the reCAPTCHA v3 token. */
    captchaScorePost(params) {
        return this._client._request('/Core/Google/Captcha/CaptchaScore.json', params, 'POST');
    }
    /** Overrides the score for the reCAPTCHA v3. */
    captchaScorePut(params) {
        return this._client._request('/Core/Google/Captcha/CaptchaScore.json', params, 'PUT');
    }
}
export class CoreGoogleNamespace {
    constructor(_client) {
        this._client = _client;
        this.captcha = new CoreGoogleCaptchaNamespace(this._client);
    }
    /** Saves the user CAPTCHA token for the current session. */
    /** @deprecated */
    googleCaptcha(params) {
        return this._client._request('/Core/Google/GoogleCaptcha.json', params, 'PUT');
    }
}
export class CoreWebSocketNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks whether a listener can subscribe to specified channel. Subscribes in a case of positive result. */
    subscribe(params) {
        return this._client._request('/Core/WebSocket/Subscribe.json', params, 'POST');
    }
}
export class CoreSidNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of all items for the given Sid class. */
    coreSid(params) {
        return this._client._request('/Core/Sid/CoreSid.json', params, 'GET');
    }
}
export class CoreCaptchaNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if a CAPTCHA is required for the given captcha type. */
    captchaRequire(params) {
        return this._client._request('/Core/Captcha/CaptchaRequire.json', params, 'GET');
    }
}
export class CoreDriveImageUploadNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about the image. */
    imageUploadGet(params) {
        return this._client._request('/Core/Drive/ImageUpload/ImageUpload.json', params, 'GET');
    }
    /** Loads image information for a list of IDs. The POST method is used instead of the GET method because the maximum permitted URI length is restricted. */
    imageUploadPost(params) {
        return this._client._request('/Core/Drive/ImageUpload/ImageUpload.json', params, 'POST');
    }
    /** Updates the image. */
    imageUploadPut(params) {
        return this._client._request('/Core/Drive/ImageUpload/ImageUpload.json', params, 'PUT');
    }
    /** Saves new uploaded image. */
    imageUploadTemporary(params) {
        return this._client._request('/Core/Drive/ImageUpload/ImageUploadTemporary.json', params, 'POST');
    }
}
export class CoreDriveNamespace {
    constructor(_client) {
        this._client = _client;
        this.imageUpload = new CoreDriveImageUploadNamespace(this._client);
    }
}
export class CorePassportLoginEnterNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Signs the user in using their login and hashed password. */
    enter(params) {
        return this._client._request('/Core/Passport/Login/Enter/Enter.json', params, 'POST');
    }
    /** Generates notepad for user sign in form. */
    notepad(params) {
        return this._client._request('/Core/Passport/Login/Enter/Notepad.json', params, 'GET');
    }
}
export class CorePassportLoginRegisterNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Validates the new user's data and sends a confirmation email to complete registration. */
    register(params) {
        return this._client._request('/Core/Passport/Login/Register/Register.json', params, 'POST');
    }
    /** Confirms email of a new user and completes registration. */
    registerConfirm(params) {
        return this._client._request('/Core/Passport/Login/Register/RegisterConfirm.json', params, 'POST');
    }
}
export class CorePassportLoginSignOutNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Signs user out. */
    signOut(params) {
        return this._client._request('/Core/Passport/Login/SignOut/SignOut.json', params, 'POST');
    }
}
export class CorePassportLoginNamespace {
    constructor(_client) {
        this._client = _client;
        this.enter = new CorePassportLoginEnterNamespace(this._client);
        this.register = new CorePassportLoginRegisterNamespace(this._client);
        this.signOut = new CorePassportLoginSignOutNamespace(this._client);
    }
    /** Returns information about user that is currently signed in. */
    info(params) {
        return this._client._request('/Core/Passport/Login/Info.json', params, 'GET');
    }
}
export class CorePassportChangePasswordNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves for user new password. */
    changePasswordApply(params) {
        return this._client._request('/Core/Passport/ChangePassword/ChangePasswordApply.json', params, 'POST');
    }
    /** Sends to user "password recovery" mail. */
    changePasswordBegin(params) {
        return this._client._request('/Core/Passport/ChangePassword/ChangePasswordBegin.json', params, 'POST');
    }
}
export class CorePassportEnterJwtNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns a jwt token that can be used to log user. */
    jwtToken(params) {
        return this._client._request('/Core/Passport/Enter/Jwt/JwtToken.json', params, 'GET');
    }
}
export class CorePassportEnterNamespace {
    constructor(_client) {
        this._client = _client;
        this.jwt = new CorePassportEnterJwtNamespace(this._client);
    }
}
export class CorePassportUserEmailNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if email address exists. */
    emailExist(params) {
        return this._client._request('/Core/Passport/User/Email/EmailExist.json', params, 'GET');
    }
}
export class CorePassportUserNamespace {
    constructor(_client) {
        this._client = _client;
        this.email = new CorePassportUserEmailNamespace(this._client);
    }
}
export class CorePassportNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new CorePassportLoginNamespace(this._client);
        this.changePassword = new CorePassportChangePasswordNamespace(this._client);
        this.enter = new CorePassportEnterNamespace(this._client);
        this.user = new CorePassportUserNamespace(this._client);
    }
}
export class CoreNamespace {
    constructor(_client) {
        this._client = _client;
        this.request = new CoreRequestNamespace(this._client);
        this.geo = new CoreGeoNamespace(this._client);
        this.google = new CoreGoogleNamespace(this._client);
        this.webSocket = new CoreWebSocketNamespace(this._client);
        this.sid = new CoreSidNamespace(this._client);
        this.captcha = new CoreCaptchaNamespace(this._client);
        this.drive = new CoreDriveNamespace(this._client);
        this.passport = new CorePassportNamespace(this._client);
    }
}
export class SocialMicrosoftNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Removes the association between a website client and a Microsoft account. */
    loginDelete(params) {
        return this._client._request('/Social/Microsoft/Login.json', params, 'DELETE');
    }
    /** Collects data for the Microsoft login button. */
    loginGet(params) {
        return this._client._request('/Social/Microsoft/Login.json', params, 'GET');
    }
    /** Signs a user in with Microsoft. */
    loginPost(params) {
        return this._client._request('/Social/Microsoft/Login.json', params, 'POST');
    }
}
export class SocialAppleLoginNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Removes the association between a website client and the Apple account. Invalidates the tokens and associated client authorizations. */
    appleLoginDelete(params) {
        return this._client._request('/Social/Apple/Login/AppleLogin.json', params, 'DELETE');
    }
    /** Signs user in with Apple. */
    appleLoginPost(params) {
        return this._client._request('/Social/Apple/Login/AppleLogin.json', params, 'POST');
    }
}
export class SocialAppleNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new SocialAppleLoginNamespace(this._client);
    }
}
export class SocialFacebookLoginNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Authorizes user with facebook. */
    login(params) {
        return this._client._request('/Social/Facebook/Login/Login.json', params, 'POST');
    }
}
export class SocialFacebookNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new SocialFacebookLoginNamespace(this._client);
    }
}
export class SocialGooglePlusNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Authorizes user with Google. */
    login(params) {
        return this._client._request('/Social/Google/Plus/Login.json', params, 'POST');
    }
}
export class SocialGoogleNamespace {
    constructor(_client) {
        this._client = _client;
        this.plus = new SocialGooglePlusNamespace(this._client);
    }
}
export class SocialNamespace {
    constructor(_client) {
        this._client = _client;
        this.microsoft = new SocialMicrosoftNamespace(this._client);
        this.apple = new SocialAppleNamespace(this._client);
        this.facebook = new SocialFacebookNamespace(this._client);
        this.google = new SocialGoogleNamespace(this._client);
    }
}
export class WlScheduleClassListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** This method is a modified Get method `get()`. The difference is as follows: */
    classList68(params) {
        return this._client._request('/Wl/Schedule/ClassList/ClassList68.json', params, 'POST');
    }
    /** Retrieves a list of classes and class information for the given business and date range. */
    /** @deprecated */
    classList(params) {
        return this._client._request('/Wl/Schedule/ClassList/ClassList.json', params, 'GET');
    }
}
export class WlScheduleTabNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets information about tabs for page "Book now". */
    tab(params) {
        return this._client._request('/Wl/Schedule/Tab/Tab.json', params, 'GET');
    }
}
export class WlScheduleClassViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about class. */
    classViewGet(params) {
        return this._client._request('/Wl/Schedule/ClassView/ClassView.json', params, 'GET');
    }
    /** Retrieves information about classes. */
    classViewPost(params) {
        return this._client._request('/Wl/Schedule/ClassView/ClassView.json', params, 'POST');
    }
}
export class WlSchedulePageNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about one element of schedule. */
    pageElement(params) {
        return this._client._request('/Wl/Schedule/Page/PageElement.json', params, 'GET');
    }
    /** Retrieves items of schedule for the client. */
    pageList(params) {
        return this._client._request('/Wl/Schedule/Page/PageList.json', params, 'GET');
    }
}
export class WlScheduleScheduleListStaffAppNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets schedule of business `k_business` for day `dt_date`. */
    scheduleList(params) {
        return this._client._request('/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json', params, 'GET');
    }
    /** Gets schedule of business [ScheduleListApi](/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json) for day [ScheduleListApi](/Wl/Schedule/ScheduleList/StaffApp/ScheduleList.json). */
    scheduleListByToken(params) {
        return this._client._request('/Wl/Schedule/ScheduleList/StaffApp/ScheduleListByToken.json', params, 'GET');
    }
}
export class WlScheduleScheduleListNamespace {
    constructor(_client) {
        this._client = _client;
        this.staffApp = new WlScheduleScheduleListStaffAppNamespace(this._client);
    }
}
export class WlScheduleNamespace {
    constructor(_client) {
        this._client = _client;
        this.classList = new WlScheduleClassListNamespace(this._client);
        this.tab = new WlScheduleTabNamespace(this._client);
        this.classView = new WlScheduleClassViewNamespace(this._client);
        this.page = new WlSchedulePageNamespace(this._client);
        this.scheduleList = new WlScheduleScheduleListNamespace(this._client);
    }
    /** Cancels session for the client. */
    cancelGet(params) {
        return this._client._request('/Wl/Schedule/Cancel.json', params, 'GET');
    }
    /** Cancels session for the client. This method is an alias for partners using the API or SDK. */
    cancelPost(params) {
        return this._client._request('/Wl/Schedule/Cancel.json', params, 'POST');
    }
    /** Finds the nearest class session that can be booked by the current user. */
    scheduleAvailableDate(params) {
        return this._client._request('/Wl/Schedule/ScheduleAvailableDate.json', params, 'GET');
    }
}
export class WlVisitNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets visit status. */
    visitStatusGet(params) {
        return this._client._request('/Wl/Visit/VisitStatus.json', params, 'GET');
    }
    /** Changes visit status. */
    visitStatusPost(params) {
        return this._client._request('/Wl/Visit/VisitStatus.json', params, 'POST');
    }
}
export class WlLocationFlagNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if user `uid` is flagged in location `k_location` or each of users `a_uid` is flagged in location `k_location`. */
    flag(params) {
        return this._client._request('/Wl/Location/Flag/Flag.json', params, 'GET');
    }
}
export class WlLocationWorkTimeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves working hours of the location. */
    locationWorkTime(params) {
        return this._client._request('/Wl/Location/WorkTime/LocationWorkTime.json', params, 'POST');
    }
}
export class WlLocationViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns detailed information about the specified location. */
    view(params) {
        return this._client._request('/Wl/Location/View/View.json', params, 'GET');
    }
}
export class WlLocationFacilityNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of all items for the given Sid class. */
    facilitySid(params) {
        return this._client._request('/Wl/Location/Facility/FacilitySid.json', params, 'GET');
    }
}
export class WlLocationNamespace {
    constructor(_client) {
        this._client = _client;
        this.flag = new WlLocationFlagNamespace(this._client);
        this.workTime = new WlLocationWorkTimeNamespace(this._client);
        this.view = new WlLocationViewNamespace(this._client);
        this.facility = new WlLocationFacilityNamespace(this._client);
    }
    /** Gets location lists for a bulk of businesses. */
    listBulk(params) {
        return this._client._request('/Wl/Location/ListBulk.json', params, 'GET');
    }
    /** Creates new location or edits the existing location. */
    location(params) {
        return this._client._request('/Wl/Location/Location.json', params, 'POST');
    }
    /** Retrieves a list of locations for the given business. */
    list(params) {
        return this._client._request('/Wl/Location/List.json', params, 'GET');
    }
}
export class WlProfileEditEmailNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if specified email address is busy. */
    editEmail67Get(params) {
        return this._client._request('/Wl/Profile/Edit/Email/EditEmail67.json', params, 'GET');
    }
    /** Adds user to business. */
    editEmail67Post(params) {
        return this._client._request('/Wl/Profile/Edit/Email/EditEmail67.json', params, 'POST');
    }
    /** Checks if specified email address is busy. */
    /** @deprecated */
    editEmailGet(params) {
        return this._client._request('/Wl/Profile/Edit/Email/EditEmail.json', params, 'GET');
    }
    /** Adds user to business. */
    /** @deprecated */
    editEmailPost(params) {
        return this._client._request('/Wl/Profile/Edit/Email/EditEmail.json', params, 'POST');
    }
}
export class WlProfileEditNamespace {
    constructor(_client) {
        this._client = _client;
        this.email = new WlProfileEditEmailNamespace(this._client);
    }
    /** Returns current user profile information. */
    editGet(params) {
        return this._client._request('/Wl/Profile/Edit/Edit.json', params, 'GET');
    }
    /** Creates a new user. */
    editPost(params) {
        return this._client._request('/Wl/Profile/Edit/Edit.json', params, 'POST');
    }
    /** Updates values of profile fields. */
    editPut(params) {
        return this._client._request('/Wl/Profile/Edit/Edit.json', params, 'PUT');
    }
    /** Creates a new user. */
    create(params) {
        return this._client._request('/Wl/Profile/Edit/Create.json', params, 'POST');
    }
    /** Returns current user profile information. */
    editByTokenGet(params) {
        return this._client._request('/Wl/Profile/Edit/EditByToken.json', params, 'GET');
    }
    /** Creates a new user. */
    editByTokenPost(params) {
        return this._client._request('/Wl/Profile/Edit/EditByToken.json', params, 'POST');
    }
    /** Updates values of profile fields. */
    editByTokenPut(params) {
        return this._client._request('/Wl/Profile/Edit/EditByToken.json', params, 'PUT');
    }
    /** Saves new password for user. */
    editPassword(params) {
        return this._client._request('/Wl/Profile/Edit/EditPassword.json', params, 'POST');
    }
}
export class WlProfileAttachNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of file attachments for the specified client in the given business. */
    attachList(params) {
        return this._client._request('/Wl/Profile/Attach/AttachList.json', params, 'GET');
    }
    /** Deletes the attachment. */
    attachElementDelete(params) {
        return this._client._request('/Wl/Profile/Attach/AttachElement.json', params, 'DELETE');
    }
    /** Gets the data for the attachment editing form. */
    attachElementGet(params) {
        return this._client._request('/Wl/Profile/Attach/AttachElement.json', params, 'GET');
    }
    /** In case the attachment key is not specified, it adds a new attachment. In case the attachment key is specified, edits the attachment. */
    attachElementPost(params) {
        return this._client._request('/Wl/Profile/Attach/AttachElement.json', params, 'POST');
    }
}
export class WlProfilePurchaseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about 1 purchase item. */
    /** @deprecated */
    purchaseElement(params) {
        return this._client._request('/Wl/Profile/Purchase/PurchaseElement.json', params, 'GET');
    }
    /** Retrieves a list of user's purchase items to show in user profile. */
    /** @deprecated */
    purchaseList(params) {
        return this._client._request('/Wl/Profile/Purchase/PurchaseList.json', params, 'GET');
    }
}
export class WlProfilePurchaseListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves a list of user's purchase items to show in user profile. */
    purchaseList(params) {
        return this._client._request('/Wl/Profile/PurchaseList/PurchaseList.json', params, 'GET');
    }
    /** Retrieves information about 1 purchase item. */
    purchaseListElement(params) {
        return this._client._request('/Wl/Profile/PurchaseList/PurchaseListElement.json', params, 'GET');
    }
}
export class WlProfileAlertNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves a list of notices to show in user's profile. */
    alert(params) {
        return this._client._request('/Wl/Profile/Alert/Alert.json', params, 'GET');
    }
    /** Deletes existing note. */
    alertEditDelete(params) {
        return this._client._request('/Wl/Profile/Alert/AlertEdit.json', params, 'DELETE');
    }
    /** Retrieves login note data. */
    alertEditGet(params) {
        return this._client._request('/Wl/Profile/Alert/AlertEdit.json', params, 'GET');
    }
    /** Creates new text note or updates the existing one. */
    alertEditPost(params) {
        return this._client._request('/Wl/Profile/Alert/AlertEdit.json', params, 'POST');
    }
}
export class WlProfileTermNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns online waiver information for the specified user and business. */
    term(params) {
        return this._client._request('/Wl/Profile/Term/Term.json', params, 'GET');
    }
}
export class WlProfileAttendanceScheduleFrontendNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves lifetime visit totals. */
    lifetimeTotals(params) {
        return this._client._request('/Wl/Profile/Attendance/Schedule/Frontend/LifetimeTotals.json', params, 'GET');
    }
}
export class WlProfileAttendanceScheduleNamespace {
    constructor(_client) {
        this._client = _client;
        this.frontend = new WlProfileAttendanceScheduleFrontendNamespace(this._client);
    }
}
export class WlProfileAttendanceNamespace {
    constructor(_client) {
        this._client = _client;
        this.schedule = new WlProfileAttendanceScheduleNamespace(this._client);
    }
    /** Returns a list of visits that overlap with the specified service, class, resource, or time data. */
    attendanceOverlap(params) {
        return this._client._request('/Wl/Profile/Attendance/AttendanceOverlap.json', params, 'GET');
    }
}
export class WlProfileSettingNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves a list of user settings and other additional information for the settings page. */
    settingGet(params) {
        return this._client._request('/Wl/Profile/Setting/Setting.json', params, 'GET');
    }
    /** Saves the user's notification settings for the specified business. */
    settingPost(params) {
        return this._client._request('/Wl/Profile/Setting/Setting.json', params, 'POST');
    }
}
export class WlProfileActivityNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about activity item. */
    element(params) {
        return this._client._request('/Wl/Profile/Activity/Element.json', params, 'GET');
    }
    /** Retrieves a list of activity items to show in user profile. */
    list(params) {
        return this._client._request('/Wl/Profile/Activity/List.json', params, 'GET');
    }
}
export class WlProfileContractNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns contract information for the specified purchase option. */
    contractGet(params) {
        return this._client._request('/Wl/Profile/Contract/Contract.json', params, 'GET');
    }
    /** Completes a sale of a Purchase Option requiring a contract by submitting the signed contract. */
    contractPost(params) {
        return this._client._request('/Wl/Profile/Contract/Contract.json', params, 'POST');
    }
}
export class WlProfileFormResponseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the lists of completed and pending quiz responses for the specified user and business. */
    responseList(params) {
        return this._client._request('/Wl/Profile/Form/Response/ResponseList.json', params, 'GET');
    }
}
export class WlProfileFormNamespace {
    constructor(_client) {
        this._client = _client;
        this.response = new WlProfileFormResponseNamespace(this._client);
    }
}
export class WlProfileNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlProfileEditNamespace(this._client);
        this.attach = new WlProfileAttachNamespace(this._client);
        this.purchase = new WlProfilePurchaseNamespace(this._client);
        this.purchaseList = new WlProfilePurchaseListNamespace(this._client);
        this.alert = new WlProfileAlertNamespace(this._client);
        this.term = new WlProfileTermNamespace(this._client);
        this.attendance = new WlProfileAttendanceNamespace(this._client);
        this.setting = new WlProfileSettingNamespace(this._client);
        this.activity = new WlProfileActivityNamespace(this._client);
        this.contract = new WlProfileContractNamespace(this._client);
        this.form = new WlProfileFormNamespace(this._client);
    }
    /** Creates a new client profile with the provided personal details in the specified business. */
    profileCreate(params) {
        return this._client._request('/Wl/Profile/ProfileCreate.json', params, 'POST');
    }
}
export class WlEventBookEventViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about event item. */
    element(params) {
        return this._client._request('/Wl/Event/Book/EventView/Element.json', params, 'GET');
    }
}
export class WlEventBookEventListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves a list of events. */
    list(params) {
        return this._client._request('/Wl/Event/Book/EventList/List.json', params, 'GET');
    }
}
export class WlEventBookNamespace {
    constructor(_client) {
        this._client = _client;
        this.eventView = new WlEventBookEventViewNamespace(this._client);
        this.eventList = new WlEventBookEventListNamespace(this._client);
    }
}
export class WlEventNamespace {
    constructor(_client) {
        this._client = _client;
        this.book = new WlEventBookNamespace(this._client);
    }
    /** Returns the list of events matching the specified filter parameters. */
    eventListGet(params) {
        return this._client._request('/Wl/Event/EventList.json', params, 'GET');
    }
    /** Resets the event list cache for the specified business and user. */
    eventListPut(params) {
        return this._client._request('/Wl/Event/EventList.json', params, 'PUT');
    }
    /** Cancels book of event `k_class`. */
    eventCancelWhole(params) {
        return this._client._request('/Wl/Event/EventCancelWhole.json', params, 'POST');
    }
}
export class WlBusinessPartnerNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the partner URL for the specified business. */
    partnerCodeGet(params) {
        return this._client._request('/Wl/Business/Partner/PartnerCode.json', params, 'GET');
    }
    /** Updates partner url for a business that takes part in the partner program. */
    partnerCodePost(params) {
        return this._client._request('/Wl/Business/Partner/PartnerCode.json', params, 'POST');
    }
    /** Returns partner settings for the business identified by the given partner code. */
    partnerSettings(params) {
        return this._client._request('/Wl/Business/Partner/PartnerSettings.json', params, 'GET');
    }
}
export class WlBusinessAccountSubscriptionAchieveNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the Achieve subscription plan flags (free and white-label) for the given business. */
    achieveSubscription(params) {
        return this._client._request('/Wl/Business/Account/Subscription/Achieve/AchieveSubscription.json', params, 'GET');
    }
}
export class WlBusinessAccountSubscriptionNamespace {
    constructor(_client) {
        this._client = _client;
        this.achieve = new WlBusinessAccountSubscriptionAchieveNamespace(this._client);
    }
    /** Gets information about subscription. */
    subscriptionInfo(params) {
        return this._client._request('/Wl/Business/Account/Subscription/SubscriptionInfo.json', params, 'GET');
    }
}
export class WlBusinessAccountNamespace {
    constructor(_client) {
        this._client = _client;
        this.subscription = new WlBusinessAccountSubscriptionNamespace(this._client);
    }
    /** Generates list of active business keys for the same region as the requesting user (proper permissions required). */
    businessAccount(params) {
        return this._client._request('/Wl/Business/Account/BusinessAccount.json', params, 'GET');
    }
}
export class WlBusinessClaimNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if the email or phone number has already been used for a trial account or not. */
    businessClaimGet(params) {
        return this._client._request('/Wl/Business/Claim/BusinessClaim.json', params, 'GET');
    }
    /** Completes the verification process of the trial business. */
    businessClaimPost(params) {
        return this._client._request('/Wl/Business/Claim/BusinessClaim.json', params, 'POST');
    }
    /** Saves the Self-Setup wizard form data in the business claim log. */
    businessClaimPut(params) {
        return this._client._request('/Wl/Business/Claim/BusinessClaim.json', params, 'PUT');
    }
}
export class WlBusinessDesignNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** API method to get business design data. */
    businessDesign(params) {
        return this._client._request('/Wl/Business/Design/BusinessDesign.json', params, 'GET');
    }
}
export class WlBusinessLeadNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves a new business lead referral record submitted through the Partner Program. */
    businessLead(params) {
        return this._client._request('/Wl/Business/Lead/BusinessLead.json', params, 'POST');
    }
}
export class WlBusinessPhoneNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes business phone number from the system. */
    phoneDelete(params) {
        return this._client._request('/Wl/Business/Phone/Phone.json', params, 'DELETE');
    }
    /** Returns phone number(in locale format) of the business, if phone number does not exist returns empty line. */
    phoneGet(params) {
        return this._client._request('/Wl/Business/Phone/Phone.json', params, 'GET');
    }
    /** Registers business phone number in system. */
    phonePost(params) {
        return this._client._request('/Wl/Business/Phone/Phone.json', params, 'POST');
    }
}
export class WlBusinessSearchNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Searches for businesses by name and email address and returns matching business keys. */
    businessSearchUser(params) {
        return this._client._request('/Wl/Business/Search/BusinessSearchUser.json', params, 'GET');
    }
    /** Searches for businesses by name and returns matching business keys. */
    businessSearch(params) {
        return this._client._request('/Wl/Business/Search/BusinessSearch.json', params, 'GET');
    }
}
export class WlBusinessConfigNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets information about a business config. */
    businessConfig(params) {
        return this._client._request('/Wl/Business/Config/BusinessConfig.json', params, 'GET');
    }
}
export class WlBusinessAmazonRegionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the Amazon region ID for each of the requested business keys. */
    amazonRegion(params) {
        return this._client._request('/Wl/Business/AmazonRegion/AmazonRegion.json', params, 'GET');
    }
}
export class WlBusinessAuthorizePartnerNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Grants or denies access to business location for a partner. */
    authorizePartner(params) {
        return this._client._request('/Wl/Business/AuthorizePartner/AuthorizePartner.json', params, 'GET');
    }
}
export class WlBusinessSelectNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Performs checks and generates a list of businesses according to a given configuration. */
    businessSelect(params) {
        return this._client._request('/Wl/Business/Select/BusinessSelect.json', params, 'GET');
    }
}
export class WlBusinessTypeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of available business types with their categories and images. */
    businessTypeList(params) {
        return this._client._request('/Wl/Business/Type/BusinessTypeList.json', params, 'GET');
    }
}
export class WlBusinessWaiverNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the business waiver text rendered as HTML with user-specific variables substituted. */
    waiver(params) {
        return this._client._request('/Wl/Business/Waiver/Waiver.json', params, 'GET');
    }
}
export class WlBusinessAuthorizeSupportResponseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Grants or denies access to business location for staff member. */
    response(params) {
        return this._client._request('/Wl/Business/AuthorizeSupport/Response/Response.json', params, 'GET');
    }
}
export class WlBusinessAuthorizeSupportNamespace {
    constructor(_client) {
        this._client = _client;
        this.response = new WlBusinessAuthorizeSupportResponseNamespace(this._client);
    }
}
export class WlBusinessFranchiseLocationNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns country, region, state, city and location lists of the franchisor. */
    businessFranchiseLocation(params) {
        return this._client._request('/Wl/Business/Franchise/Location/BusinessFranchiseLocation.json', params, 'GET');
    }
}
export class WlBusinessFranchiseNamespace {
    constructor(_client) {
        this._client = _client;
        this.location = new WlBusinessFranchiseLocationNamespace(this._client);
    }
}
export class WlBusinessRewardConfigNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the reward program configuration for the specified business. */
    rewardConfigGet(params) {
        return this._client._request('/Wl/Business/Reward/Config/RewardConfig.json', params, 'GET');
    }
    /** Updates the reward program enabled or disabled state for the specified business. */
    rewardConfigPost(params) {
        return this._client._request('/Wl/Business/Reward/Config/RewardConfig.json', params, 'POST');
    }
}
export class WlBusinessRewardNamespace {
    constructor(_client) {
        this._client = _client;
        this.config = new WlBusinessRewardConfigNamespace(this._client);
    }
}
export class WlBusinessUserSubscribeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about if user is subscribed on specified business or not. */
    subscribeGet(params) {
        return this._client._request('/Wl/Business/User/Subscribe/Subscribe.json', params, 'GET');
    }
    /** Subscribes or unsubscribes user on specified business. */
    subscribePut(params) {
        return this._client._request('/Wl/Business/User/Subscribe/Subscribe.json', params, 'PUT');
    }
}
export class WlBusinessUserNamespace {
    constructor(_client) {
        this._client = _client;
        this.subscribe = new WlBusinessUserSubscribeNamespace(this._client);
    }
}
export class WlBusinessNamespace {
    constructor(_client) {
        this._client = _client;
        this.partner = new WlBusinessPartnerNamespace(this._client);
        this.account = new WlBusinessAccountNamespace(this._client);
        this.claim = new WlBusinessClaimNamespace(this._client);
        this.design = new WlBusinessDesignNamespace(this._client);
        this.lead = new WlBusinessLeadNamespace(this._client);
        this.phone = new WlBusinessPhoneNamespace(this._client);
        this.search = new WlBusinessSearchNamespace(this._client);
        this.config = new WlBusinessConfigNamespace(this._client);
        this.amazonRegion = new WlBusinessAmazonRegionNamespace(this._client);
        this.authorizePartner = new WlBusinessAuthorizePartnerNamespace(this._client);
        this.select = new WlBusinessSelectNamespace(this._client);
        this.type = new WlBusinessTypeNamespace(this._client);
        this.waiver = new WlBusinessWaiverNamespace(this._client);
        this.authorizeSupport = new WlBusinessAuthorizeSupportNamespace(this._client);
        this.franchise = new WlBusinessFranchiseNamespace(this._client);
        this.reward = new WlBusinessRewardNamespace(this._client);
        this.user = new WlBusinessUserNamespace(this._client);
    }
    /** Returns detailed information about the specified business, including locale, franchise status, services, tips, social URLs, and logo. */
    data(params) {
        return this._client._request('/Wl/Business/Data.json', params, 'GET');
    }
    /** Creates new business. */
    businessPost(params) {
        return this._client._request('/Wl/Business/Business.json', params, 'POST');
    }
    /** Claims business. */
    businessPut(params) {
        return this._client._request('/Wl/Business/Business.json', params, 'PUT');
    }
    /** Gets information about businesses where given user is a staff member. */
    businessAccess(params) {
        return this._client._request('/Wl/Business/BusinessAccess.json', params, 'GET');
    }
}
export class WlReportNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets data of required report. */
    data(params) {
        return this._client._request('/Wl/Report/Data.json', params, 'GET');
    }
    /** Checks access to given report. */
    access(params) {
        return this._client._request('/Wl/Report/Access.json', params, 'GET');
    }
    /** Gets data of required report collection. */
    pageData(params) {
        return this._client._request('/Wl/Report/PageData.json', params, 'GET');
    }
}
export class WlCollectorNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns a list of client debts for the specified business within the given date range. */
    debtList(params) {
        return this._client._request('/Wl/Collector/DebtList.json', params, 'GET');
    }
    /** Registers a debt payment made outside WellnessLiving and applies a credit to the client's account balance. */
    debtPay(params) {
        return this._client._request('/Wl/Collector/DebtPay.json', params, 'POST');
    }
    /** Returns a list of debt payment transactions for the specified business within the given date range. */
    debtTransaction(params) {
        return this._client._request('/Wl/Collector/DebtTransaction.json', params, 'GET');
    }
}
export class WlAnnouncementNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns a list of announcements for the given business and location. */
    announcementList(params) {
        return this._client._request('/Wl/Announcement/AnnouncementList.json', params, 'GET');
    }
}
export class WlLeadSourceNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets list of Lead Sources. */
    leadSourceList(params) {
        return this._client._request('/Wl/Lead/Source/LeadSourceList.json', params, 'GET');
    }
    /** Deletes custom source lead. */
    leadSourceElementDelete(params) {
        return this._client._request('/Wl/Lead/Source/LeadSourceElement.json', params, 'DELETE');
    }
    /** Creates or edits a custom source lead. */
    /** @deprecated */
    leadSourceElementPost(params) {
        return this._client._request('/Wl/Lead/Source/LeadSourceElement.json', params, 'POST');
    }
    /** Adds one lead source. */
    leadSourceElementPut(params) {
        return this._client._request('/Wl/Lead/Source/LeadSourceElement.json', params, 'PUT');
    }
}
export class WlLeadNamespace {
    constructor(_client) {
        this._client = _client;
        this.source = new WlLeadSourceNamespace(this._client);
    }
    /** Gets information necessary to display "Lead capture" widget. */
    leadGet(params) {
        return this._client._request('/Wl/Lead/Lead.json', params, 'GET');
    }
    /** Saves new user via "Lead capture". */
    leadPost(params) {
        return this._client._request('/Wl/Lead/Lead.json', params, 'POST');
    }
}
export class WlPromotionIndexNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets a list of packages/passes/memberships. */
    promotionIndex(params) {
        return this._client._request('/Wl/Promotion/Index/PromotionIndex.json', params, 'GET');
    }
}
export class WlPromotionNamespace {
    constructor(_client) {
        this._client = _client;
        this.index = new WlPromotionIndexNamespace(this._client);
    }
    /** Returns promotion list of the specified business. */
    promotionList(params) {
        return this._client._request('/Wl/Promotion/PromotionList.json', params, 'GET');
    }
    /** Soft-deletes the specified promotion if it has no associated sales. */
    promotionDelete(params) {
        return this._client._request('/Wl/Promotion/Promotion.json', params, 'DELETE');
    }
    /** Returns promotion by the specified business and promotion keys. */
    promotionGet(params) {
        return this._client._request('/Wl/Promotion/Promotion.json', params, 'GET');
    }
    /** Saves promotion data. */
    promotionPost(params) {
        return this._client._request('/Wl/Promotion/Promotion.json', params, 'POST');
    }
}
export class WlLoginMailNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if specified user exists in specified business. */
    mailUse(params) {
        return this._client._request('/Wl/Login/Mail/MailUse.json', params, 'GET');
    }
}
export class WlLoginPromotionConvertNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Removes conversion and reset the after expiration setting to previous state. */
    convertDelete(params) {
        return this._client._request('/Wl/Login/Promotion/Convert/Convert.json', params, 'DELETE');
    }
    /** Returns the current conversion configuration and the list of promotions available to convert to. */
    convertGet(params) {
        return this._client._request('/Wl/Login/Promotion/Convert/Convert.json', params, 'GET');
    }
    /** Creates or updates conversion form data for the login promotion. Performs all necessary checks and apply changes. */
    convertPost(params) {
        return this._client._request('/Wl/Login/Promotion/Convert/Convert.json', params, 'POST');
    }
}
export class WlLoginPromotionGuestPassClaimNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Claims the guest pass invitation for the current user and accepts it. */
    claim(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Claim/Claim.json', params, 'POST');
    }
}
export class WlLoginPromotionGuestPassInviteNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Revokes a guest pass invitation. */
    inviteDelete(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Invite/Invite.json', params, 'DELETE');
    }
    /** Sends a reminder notification for a guest pass invitation. */
    invitePut(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Invite/Invite.json', params, 'PUT');
    }
    /** Returns a list of guest pass invitations for the given membership or user. */
    inviteListGet(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Invite/InviteList.json', params, 'GET');
    }
    /** Sends a guest pass invitation to a user. */
    inviteListPost(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Invite/InviteList.json', params, 'POST');
    }
}
export class WlLoginPromotionGuestPassApplyNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Applies the guest pass of the specified login promotion to the attendee's visit. */
    apply(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Apply/Apply.json', params, 'POST');
    }
}
export class WlLoginPromotionGuestPassNamespace {
    constructor(_client) {
        this._client = _client;
        this.claim = new WlLoginPromotionGuestPassClaimNamespace(this._client);
        this.invite = new WlLoginPromotionGuestPassInviteNamespace(this._client);
        this.apply = new WlLoginPromotionGuestPassApplyNamespace(this._client);
    }
    /** Retrieves guest passes for a specific client. */
    guestPassList(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/GuestPassList.json', params, 'GET');
    }
    /** Retrieves guest pass information for a client's membership. */
    guestPassGet(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/GuestPass.json', params, 'GET');
    }
    /** Updates the guest pass remaining usages for a client's membership. */
    guestPassPut(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/GuestPass.json', params, 'PUT');
    }
}
export class WlLoginPromotionNamespace {
    constructor(_client) {
        this._client = _client;
        this.convert = new WlLoginPromotionConvertNamespace(this._client);
        this.guestPass = new WlLoginPromotionGuestPassNamespace(this._client);
    }
    /** Deletes specified promotion payment pause. */
    promotionPayPauseDelete(params) {
        return this._client._request('/Wl/Login/Promotion/PromotionPayPause.json', params, 'DELETE');
    }
    /** Returns promotion payment pause data: all hold periods when `is_list` is `true`,  the specified hold period when `k_promotion_pay_pause` is provided, or the currently  active hold period otherwise. */
    promotionPayPauseGet(params) {
        return this._client._request('/Wl/Login/Promotion/PromotionPayPause.json', params, 'GET');
    }
    /** Adds or updates a payment pause period for promotion. */
    promotionPayPausePost(params) {
        return this._client._request('/Wl/Login/Promotion/PromotionPayPause.json', params, 'POST');
    }
    /** Updates a promotion payment pause period. */
    promotionPayPausePut(params) {
        return this._client._request('/Wl/Login/Promotion/PromotionPayPause.json', params, 'PUT');
    }
}
export class WlLoginMemberDynamicIdNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the member's barcode and its expiry time for the specified business and user. */
    dynamicId(params) {
        return this._client._request('/Wl/Login/Member/DynamicId/DynamicId.json', params, 'GET');
    }
}
export class WlLoginMemberNamespace {
    constructor(_client) {
        this._client = _client;
        this.dynamicId = new WlLoginMemberDynamicIdNamespace(this._client);
    }
    /** Checks whether anything prevents the user from using the business and returns any blocking conditions found. */
    /** @deprecated */
    memberValidate(params) {
        return this._client._request('/Wl/Login/Member/MemberValidate.json', params, 'GET');
    }
    /** Returns the list of businesses where the specified user is an active member. */
    memberGet(params) {
        return this._client._request('/Wl/Login/Member/Member.json', params, 'GET');
    }
    /** Adds a user into a business. */
    memberPost(params) {
        return this._client._request('/Wl/Login/Member/Member.json', params, 'POST');
    }
    /** Gets client ID for a specific client in a business. */
    loginMemberGet(params) {
        return this._client._request('/Wl/Login/Member/LoginMember.json', params, 'GET');
    }
    /** Updates client ID for a specific client in a business. */
    loginMemberPost(params) {
        return this._client._request('/Wl/Login/Member/LoginMember.json', params, 'POST');
    }
    /** Checks whether anything prevents the user from using the business and returns details about missing required fields. */
    memberValidate63(params) {
        return this._client._request('/Wl/Login/Member/MemberValidate63.json', params, 'GET');
    }
    /** Returns a paginated list of active member user keys for the specified business. */
    loginMemberListAll(params) {
        return this._client._request('/Wl/Login/Member/LoginMemberListAll.json', params, 'GET');
    }
}
export class WlLoginAddNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks required profile fields and, if complete, registers the existing user in the specified business. */
    mailUseOk(params) {
        return this._client._request('/Wl/Login/Add/MailUseOk.json', params, 'POST');
    }
}
export class WlLoginAttendanceAddNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets information about ability of user to pay for given session in any ways. */
    addGet(params) {
        return this._client._request('/Wl/Login/Attendance/Add/Add.json', params, 'GET');
    }
    /** Adds client to attendance list. */
    addPost(params) {
        return this._client._request('/Wl/Login/Attendance/Add/Add.json', params, 'POST');
    }
}
export class WlLoginAttendanceNamespace {
    constructor(_client) {
        this._client = _client;
        this.add = new WlLoginAttendanceAddNamespace(this._client);
    }
    /** Returns the attendance list for a class period or appointment session. */
    attendanceList(params) {
        return this._client._request('/Wl/Login/Attendance/AttendanceList.json', params, 'GET');
    }
    /** Returns detailed information about a single class period, appointment, or asset session. */
    attendanceInfo(params) {
        return this._client._request('/Wl/Login/Attendance/AttendanceInfo.json', params, 'GET');
    }
    /** Returns the attendance list for a class period or appointment session. */
    attendanceListByToken(params) {
        return this._client._request('/Wl/Login/Attendance/AttendanceListByToken.json', params, 'GET');
    }
    /** Returns detailed information about a single class period, appointment, or asset session. */
    attendanceInfoByToken(params) {
        return this._client._request('/Wl/Login/Attendance/AttendanceInfoByToken.json', params, 'GET');
    }
}
export class WlLoginSearchStaffAppNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Performs access checks and returns a list of users, depending on the search query. */
    list(params) {
        return this._client._request('/Wl/Login/Search/StaffApp/List.json', params, 'GET');
    }
}
export class WlLoginSearchNamespace {
    constructor(_client) {
        this._client = _client;
        this.staffApp = new WlLoginSearchStaffAppNamespace(this._client);
    }
    /** Finds a user by their email or phone within the specified business. */
    concerto(params) {
        return this._client._request('/Wl/Login/Search/Concerto.json', params, 'GET');
    }
}
export class WlLoginTypeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets a login types list of a business. */
    loginType(params) {
        return this._client._request('/Wl/Login/Type/LoginType.json', params, 'GET');
    }
}
export class WlLoginPermissionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves the auto-renew setting for a purchased promotion. */
    permission(params) {
        return this._client._request('/Wl/Login/Permission/Permission.json', params, 'POST');
    }
}
export class WlLoginAgreeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns text of business liability release if business has liability release and if user did not agree to this liability release. */
    agreeGet(params) {
        return this._client._request('/Wl/Login/Agree/Agree.json', params, 'GET');
    }
    /** Saves the user's agreement to the online waiver. */
    agreePost(params) {
        return this._client._request('/Wl/Login/Agree/Agree.json', params, 'POST');
    }
}
export class WlLoginCouponNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves the key and balance of a gift card by its code for the specified business. */
    coupon(params) {
        return this._client._request('/Wl/Login/Coupon/Coupon.json', params, 'GET');
    }
}
export class WlLoginProductNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about products purchased by client. */
    product(params) {
        return this._client._request('/Wl/Login/Product/Product.json', params, 'GET');
    }
}
export class WlLoginNamespace {
    constructor(_client) {
        this._client = _client;
        this.mail = new WlLoginMailNamespace(this._client);
        this.promotion = new WlLoginPromotionNamespace(this._client);
        this.member = new WlLoginMemberNamespace(this._client);
        this.add = new WlLoginAddNamespace(this._client);
        this.attendance = new WlLoginAttendanceNamespace(this._client);
        this.search = new WlLoginSearchNamespace(this._client);
        this.type = new WlLoginTypeNamespace(this._client);
        this.permission = new WlLoginPermissionNamespace(this._client);
        this.agree = new WlLoginAgreeNamespace(this._client);
        this.coupon = new WlLoginCouponNamespace(this._client);
        this.product = new WlLoginProductNamespace(this._client);
    }
    /** Retrieves information about user. */
    loginGet(params) {
        return this._client._request('/Wl/Login/Login.json', params, 'GET');
    }
    /** Retrieves information about a list of users. This is done via "post" method because only "post" allows large requests. */
    loginPost(params) {
        return this._client._request('/Wl/Login/Login.json', params, 'POST');
    }
}
export class WlQuizResponseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes the specified quiz response or list of responses for the given business. */
    response65Delete(params) {
        return this._client._request('/Wl/Quiz/Response/Response65.json', params, 'DELETE');
    }
    /** Returns quiz response data including element answers, dates, and access information. */
    response65Get(params) {
        return this._client._request('/Wl/Quiz/Response/Response65.json', params, 'GET');
    }
    /** Saves a quiz response with the given element answers. */
    response65Post(params) {
        return this._client._request('/Wl/Quiz/Response/Response65.json', params, 'POST');
    }
    /** Validates, updates and reindex response information for associated user. */
    response65Put(params) {
        return this._client._request('/Wl/Quiz/Response/Response65.json', params, 'PUT');
    }
    /** Deletes the specified quiz response or list of responses for the given business. */
    /** @deprecated */
    responseDelete(params) {
        return this._client._request('/Wl/Quiz/Response/Response.json', params, 'DELETE');
    }
    /** Returns quiz response data including element answers, dates, and access information. */
    /** @deprecated */
    responseGet(params) {
        return this._client._request('/Wl/Quiz/Response/Response.json', params, 'GET');
    }
    /** Saves a quiz response with the given element answers. */
    /** @deprecated */
    responsePost(params) {
        return this._client._request('/Wl/Quiz/Response/Response.json', params, 'POST');
    }
    /** Validates, updates and reindex response information for associated user. */
    /** @deprecated */
    responsePut(params) {
        return this._client._request('/Wl/Quiz/Response/Response.json', params, 'PUT');
    }
}
export class WlQuizNamespace {
    constructor(_client) {
        this._client = _client;
        this.response = new WlQuizResponseNamespace(this._client);
    }
    /** Deletes the quiz with the given key. */
    /** @deprecated */
    quizElementDelete(params) {
        return this._client._request('/Wl/Quiz/QuizElement.json', params, 'DELETE');
    }
    /** Returns quiz element data including settings, elements, and access information for the given quiz. */
    /** @deprecated */
    quizElementGet(params) {
        return this._client._request('/Wl/Quiz/QuizElement.json', params, 'GET');
    }
    /** Creates or updates a quiz with the given elements and settings. */
    /** @deprecated */
    quizElementPost(params) {
        return this._client._request('/Wl/Quiz/QuizElement.json', params, 'POST');
    }
    /** Updates the active status of the given quiz. */
    /** @deprecated */
    quizElementPut(params) {
        return this._client._request('/Wl/Quiz/QuizElement.json', params, 'PUT');
    }
    /** Deletes the quiz with the given key. */
    quizElement72Delete(params) {
        return this._client._request('/Wl/Quiz/QuizElement72.json', params, 'DELETE');
    }
    /** Returns quiz element data including settings, elements, and access information for the given quiz. */
    quizElement72Get(params) {
        return this._client._request('/Wl/Quiz/QuizElement72.json', params, 'GET');
    }
    /** Creates or updates a quiz with the given elements and settings. */
    quizElement72Post(params) {
        return this._client._request('/Wl/Quiz/QuizElement72.json', params, 'POST');
    }
    /** Updates the active status of the given quiz. */
    quizElement72Put(params) {
        return this._client._request('/Wl/Quiz/QuizElement72.json', params, 'PUT');
    }
}
export class WlVideoWatchNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Records the start of a video watch session for the current user. */
    watchPost(params) {
        return this._client._request('/Wl/Video/Watch/Watch.json', params, 'POST');
    }
    /** Updates the watch progress (current position and total watched time) for an existing watch record. */
    watchPut(params) {
        return this._client._request('/Wl/Video/Watch/Watch.json', params, 'PUT');
    }
}
export class WlVideoCategoryNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes the specified video category. */
    categoryElementDelete(params) {
        return this._client._request('/Wl/Video/Category/CategoryElement.json', params, 'DELETE');
    }
    /** Returns the data for the specified video category. */
    categoryElementGet(params) {
        return this._client._request('/Wl/Video/Category/CategoryElement.json', params, 'GET');
    }
    /** Creates or updates a video category. */
    categoryElementPut(params) {
        return this._client._request('/Wl/Video/Category/CategoryElement.json', params, 'PUT');
    }
    /** Returns the list of video categories for the business. */
    categoryListGet(params) {
        return this._client._request('/Wl/Video/Category/CategoryList.json', params, 'GET');
    }
    /** Updates the order of video categories. */
    categoryListPut(params) {
        return this._client._request('/Wl/Video/Category/CategoryList.json', params, 'PUT');
    }
}
export class WlVideoLevelNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes the specified video level. */
    levelDelete(params) {
        return this._client._request('/Wl/Video/Level/Level.json', params, 'DELETE');
    }
    /** Creates a new video level. */
    levelPost(params) {
        return this._client._request('/Wl/Video/Level/Level.json', params, 'POST');
    }
    /** Updates the specified video level. */
    levelPut(params) {
        return this._client._request('/Wl/Video/Level/Level.json', params, 'PUT');
    }
    /** Returns the list of video levels for the business. */
    levelListGet(params) {
        return this._client._request('/Wl/Video/Level/LevelList.json', params, 'GET');
    }
    /** Updates the order of video levels. */
    levelListPut(params) {
        return this._client._request('/Wl/Video/Level/LevelList.json', params, 'PUT');
    }
}
export class WlVideoTagNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes the specified video tag. */
    tagDelete(params) {
        return this._client._request('/Wl/Video/Tag/Tag.json', params, 'DELETE');
    }
    /** Creates a new video tag. */
    tagPost(params) {
        return this._client._request('/Wl/Video/Tag/Tag.json', params, 'POST');
    }
    /** Updates the specified video tag. */
    tagPut(params) {
        return this._client._request('/Wl/Video/Tag/Tag.json', params, 'PUT');
    }
    /** Returns the list of video tags for the business. */
    tagList(params) {
        return this._client._request('/Wl/Video/Tag/TagList.json', params, 'GET');
    }
}
export class WlVideoNamespace {
    constructor(_client) {
        this._client = _client;
        this.watch = new WlVideoWatchNamespace(this._client);
        this.category = new WlVideoCategoryNamespace(this._client);
        this.level = new WlVideoLevelNamespace(this._client);
        this.tag = new WlVideoTagNamespace(this._client);
    }
    /** Deletes the specified video. */
    videoElementDelete(params) {
        return this._client._request('/Wl/Video/VideoElement.json', params, 'DELETE');
    }
    /** Returns the data for the specified video. */
    videoElementGet(params) {
        return this._client._request('/Wl/Video/VideoElement.json', params, 'GET');
    }
    /** Creates or updates a video for the specified business. */
    videoElementPost(params) {
        return this._client._request('/Wl/Video/VideoElement.json', params, 'POST');
    }
    /** Validates video embed code. */
    videoElementPut(params) {
        return this._client._request('/Wl/Video/VideoElement.json', params, 'PUT');
    }
    /** Returns the list of videos for the specified business. */
    videoListGet(params) {
        return this._client._request('/Wl/Video/VideoList.json', params, 'GET');
    }
    /** Updates the custom sort order of videos for the specified business. */
    videoListPut(params) {
        return this._client._request('/Wl/Video/VideoList.json', params, 'PUT');
    }
}
export class WlFitbuilderNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Notifies messengers with new information. */
    message(params) {
        return this._client._request('/Wl/Fitbuilder/Message.json', params, 'POST');
    }
}
export class WlMailNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Sends email. */
    sendMail(params) {
        return this._client._request('/Wl/Mail/SendMail.json', params, 'POST');
    }
}
export class WlStaffPrivilegeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of privileges for the current user in the given business. */
    privilegeList(params) {
        return this._client._request('/Wl/Staff/Privilege/PrivilegeList.json', params, 'GET');
    }
}
export class WlStaffStaffListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of staff members for the given business. */
    staffList(params) {
        return this._client._request('/Wl/Staff/StaffList/StaffList.json', params, 'GET');
    }
}
export class WlStaffStaffViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about staff. */
    /** @deprecated */
    staffView(params) {
        return this._client._request('/Wl/Staff/StaffView/StaffView.json', params, 'GET');
    }
    /** Retrieves information about staff. */
    staffView74(params) {
        return this._client._request('/Wl/Staff/StaffView/StaffView74.json', params, 'GET');
    }
}
export class WlStaffNamespace {
    constructor(_client) {
        this._client = _client;
        this.privilege = new WlStaffPrivilegeNamespace(this._client);
        this.staffList = new WlStaffStaffListNamespace(this._client);
        this.staffView = new WlStaffStaffViewNamespace(this._client);
    }
    /** Update or create staff. */
    staffElement(params) {
        return this._client._request('/Wl/Staff/StaffElement.json', params, 'POST');
    }
}
export class WlSkinApplicationConnectNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Creates or updates the integration credentials for the given business application. */
    applicationConnect(params) {
        return this._client._request('/Wl/Skin/Application/Connect/ApplicationConnect.json', params, 'POST');
    }
}
export class WlSkinApplicationResourceNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets application resources. */
    applicationResource(params) {
        return this._client._request('/Wl/Skin/Application/Resource/ApplicationResource.json', params, 'GET');
    }
    /** Saves text metadata for the given business application. */
    applicationResourceMaterial(params) {
        return this._client._request('/Wl/Skin/Application/Resource/ApplicationResourceMaterial.json', params, 'POST');
    }
    /** Uploads image and file assets for the given business application. */
    applicationResourceUpload(params) {
        return this._client._request('/Wl/Skin/Application/Resource/ApplicationResourceUpload.json', params, 'POST');
    }
}
export class WlSkinApplicationNamespace {
    constructor(_client) {
        this._client = _client;
        this.connect = new WlSkinApplicationConnectNamespace(this._client);
        this.resource = new WlSkinApplicationResourceNamespace(this._client);
    }
    /** Reset customisation form of client application. */
    skinDelete(params) {
        return this._client._request('/Wl/Skin/Application/Skin.json', params, 'DELETE');
    }
    /** Returns the application customisation skin data for the given business. */
    skinGet(params) {
        return this._client._request('/Wl/Skin/Application/Skin.json', params, 'GET');
    }
}
export class WlSkinWidgetNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns widget skins grouped by widget type for the given business. */
    skinWidgetList(params) {
        return this._client._request('/Wl/Skin/Widget/SkinWidgetList.json', params, 'GET');
    }
}
export class WlSkinNamespace {
    constructor(_client) {
        this._client = _client;
        this.application = new WlSkinApplicationNamespace(this._client);
        this.widget = new WlSkinWidgetNamespace(this._client);
    }
    /** Deletes the existing widget. */
    skinForeignDelete(params) {
        return this._client._request('/Wl/Skin/SkinForeign.json', params, 'DELETE');
    }
    /** Creates a new widget. */
    skinForeignPost(params) {
        return this._client._request('/Wl/Skin/SkinForeign.json', params, 'POST');
    }
    /** Updates the existing widget. */
    skinForeignPut(params) {
        return this._client._request('/Wl/Skin/SkinForeign.json', params, 'PUT');
    }
}
export class WlTagNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns tags of the specified business. */
    tagListGet(params) {
        return this._client._request('/Wl/Tag/TagList.json', params, 'GET');
    }
    /** Saves the list of tags. Can be used to create new tags or update existing ones. */
    tagListPost(params) {
        return this._client._request('/Wl/Tag/TagList.json', params, 'POST');
    }
}
export class WlTaxNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the title for the specified tax. */
    tax(params) {
        return this._client._request('/Wl/Tax/Tax.json', params, 'GET');
    }
    /** Returns taxes of the specified business. */
    taxList(params) {
        return this._client._request('/Wl/Tax/TaxList.json', params, 'GET');
    }
}
export class WlReviewReviewListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes a review. */
    reviewElementDelete(params) {
        return this._client._request('/Wl/Review/ReviewList/ReviewElement.json', params, 'DELETE');
    }
    /** Retrieves information about review item. */
    reviewElementGet(params) {
        return this._client._request('/Wl/Review/ReviewList/ReviewElement.json', params, 'GET');
    }
    /** Retrieves a list of reviews. */
    reviewList(params) {
        return this._client._request('/Wl/Review/ReviewList/ReviewList.json', params, 'GET');
    }
}
export class WlReviewNamespace {
    constructor(_client) {
        this._client = _client;
        this.reviewList = new WlReviewReviewListNamespace(this._client);
    }
    /** Submits user's review. */
    review(params) {
        return this._client._request('/Wl/Review/Review.json', params, 'POST');
    }
    /** Updates the featured status of the given review for the business. */
    reviewFeature(params) {
        return this._client._request('/Wl/Review/ReviewFeature.json', params, 'POST');
    }
    /** Saves the reply text and optional status update for the given review. */
    reviewReply(params) {
        return this._client._request('/Wl/Review/ReviewReply.json', params, 'POST');
    }
}
export class WlRankNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets belts list of a business. */
    rank(params) {
        return this._client._request('/Wl/Rank/Rank.json', params, 'GET');
    }
}
export class WlHolidayNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about holiday day of business/locations. */
    holiday(params) {
        return this._client._request('/Wl/Holiday/Holiday.json', params, 'GET');
    }
    /** Returns all holiday records for all locations of the specified business. */
    bulkBusinessHoliday(params) {
        return this._client._request('/Wl/Holiday/BulkBusinessHoliday.json', params, 'GET');
    }
}
export class WlAppointmentEditNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Return data about appointment's add-ons. */
    addonUpdateGet(params) {
        return this._client._request('/Wl/Appointment/Edit/AddonUpdate.json', params, 'GET');
    }
    /** Replaces the add-ons for the appointment with the provided list, optionally updating the appointment duration. */
    addonUpdatePut(params) {
        return this._client._request('/Wl/Appointment/Edit/AddonUpdate.json', params, 'PUT');
    }
}
export class WlAppointmentInfoNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets information about appointment. */
    info(params) {
        return this._client._request('/Wl/Appointment/Info/Info.json', params, 'GET');
    }
}
export class WlAppointmentRecentNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets list of client's last booked services. */
    recentService(params) {
        return this._client._request('/Wl/Appointment/Recent/RecentService.json', params, 'GET');
    }
}
export class WlAppointmentBookServiceNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about services in the current service category. */
    serviceList52(params) {
        return this._client._request('/Wl/Appointment/Book/Service/ServiceList52.json', params, 'GET');
    }
    /** Retrieves a list of information about service categories on the appointment booking page. */
    category(params) {
        return this._client._request('/Wl/Appointment/Book/Service/Category.json', params, 'GET');
    }
    /** Retrieves information about services in the current service category. */
    /** @deprecated */
    serviceList(params) {
        return this._client._request('/Wl/Appointment/Book/Service/ServiceList.json', params, 'GET');
    }
    /** Checks whether a service can be booked by the given client at the given date, throwing an exception if booking is restricted. */
    serviceCheck(params) {
        return this._client._request('/Wl/Appointment/Book/Service/ServiceCheck.json', params, 'GET');
    }
}
export class WlAppointmentBookFinishNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Completes the appointment booking for one or more providers, optionally creating a new client. */
    finishMultiple(params) {
        return this._client._request('/Wl/Appointment/Book/Finish/FinishMultiple.json', params, 'POST');
    }
    /** Loads data to prepare client side to complete booking. */
    /** @deprecated */
    finishGet(params) {
        return this._client._request('/Wl/Appointment/Book/Finish/Finish.json', params, 'GET');
    }
    /** Completes the appointment booking and processes payment for the client. */
    /** @deprecated */
    finishPost(params) {
        return this._client._request('/Wl/Appointment/Book/Finish/Finish.json', params, 'POST');
    }
    /** Loads data to prepare client side to complete booking. */
    finish47Get(params) {
        return this._client._request('/Wl/Appointment/Book/Finish/Finish47.json', params, 'GET');
    }
    /** Completes the appointment booking and logs variable counts for diagnostic purposes. */
    finish47Post(params) {
        return this._client._request('/Wl/Appointment/Book/Finish/Finish47.json', params, 'POST');
    }
}
export class WlAppointmentBookPurchaseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves a list of information about available purchase options. */
    /** @deprecated */
    purchase(params) {
        return this._client._request('/Wl/Appointment/Book/Purchase/Purchase.json', params, 'GET');
    }
    /** Retrieves a list of information about available purchase options. */
    purchase72(params) {
        return this._client._request('/Wl/Appointment/Book/Purchase/Purchase72.json', params, 'GET');
    }
}
export class WlAppointmentBookScheduleNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves a list of available appointment booking schedule. */
    /** @deprecated */
    dayTime(params) {
        return this._client._request('/Wl/Appointment/Book/Schedule/DayTime.json', params, 'GET');
    }
    /** Retrieves a list with all calendar days in specified period with available and unavailable appointment booking schedule. */
    /** @deprecated */
    calendar(params) {
        return this._client._request('/Wl/Appointment/Book/Schedule/Calendar.json', params, 'GET');
    }
    /** Finds and returns the next available date for appointment booking starting from the given date. */
    nextAvailableDay(params) {
        return this._client._request('/Wl/Appointment/Book/Schedule/NextAvailableDay.json', params, 'GET');
    }
}
export class WlAppointmentBookAssetServiceNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves assets required for a service booking at the given date and time, including availability and busy status. */
    service(params) {
        return this._client._request('/Wl/Appointment/Book/Asset/Service/Service.json', params, 'GET');
    }
}
export class WlAppointmentBookAssetNamespace {
    constructor(_client) {
        this._client = _client;
        this.service = new WlAppointmentBookAssetServiceNamespace(this._client);
    }
    /** Retrieves information about assets in the current asset category. */
    assetList(params) {
        return this._client._request('/Wl/Appointment/Book/Asset/AssetList.json', params, 'GET');
    }
    /** Retrieves a list of information about asset categories for the appointment booking page. */
    category(params) {
        return this._client._request('/Wl/Appointment/Book/Asset/Category.json', params, 'GET');
    }
}
export class WlAppointmentBookPaymentNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals. */
    /** @deprecated */
    paymentGet(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/Payment.json', params, 'GET');
    }
    /** Allows to pay an appointment or appointment purchase option for the client. */
    /** @deprecated */
    paymentPost(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/Payment.json', params, 'POST');
    }
    /** Calculates pricing information for a batch of appointment bookings, including taxes, discounts, surcharges, and per-provider totals. */
    paymentMultipleGet(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/PaymentMultiple.json', params, 'GET');
    }
    /** Allows to pay an appointment or appointment purchase option for the client. */
    paymentMultiplePost(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/PaymentMultiple.json', params, 'POST');
    }
    /** Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals. */
    paymentPostGet(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/PaymentPost.json', params, 'GET');
    }
    /** Allows to pay an appointment or appointment purchase option for the client. */
    paymentPostPost(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/PaymentPost.json', params, 'POST');
    }
}
export class WlAppointmentBookQuestionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves questions for the current service. */
    question(params) {
        return this._client._request('/Wl/Appointment/Book/Question/Question.json', params, 'GET');
    }
}
export class WlAppointmentBookStaffNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves an information about staff members for the current service. */
    list(params) {
        return this._client._request('/Wl/Appointment/Book/Staff/List.json', params, 'GET');
    }
}
export class WlAppointmentBookProductNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves list of available service add-ons. */
    product62(params) {
        return this._client._request('/Wl/Appointment/Book/Product/Product62.json', params, 'GET');
    }
    /** Retrieves list of available service add-ons. */
    product(params) {
        return this._client._request('/Wl/Appointment/Book/Product/Product.json', params, 'GET');
    }
}
export class WlAppointmentBookNamespace {
    constructor(_client) {
        this._client = _client;
        this.service = new WlAppointmentBookServiceNamespace(this._client);
        this.finish = new WlAppointmentBookFinishNamespace(this._client);
        this.purchase = new WlAppointmentBookPurchaseNamespace(this._client);
        this.schedule = new WlAppointmentBookScheduleNamespace(this._client);
        this.asset = new WlAppointmentBookAssetNamespace(this._client);
        this.payment = new WlAppointmentBookPaymentNamespace(this._client);
        this.question = new WlAppointmentBookQuestionNamespace(this._client);
        this.staff = new WlAppointmentBookStaffNamespace(this._client);
        this.product = new WlAppointmentBookProductNamespace(this._client);
    }
}
export class WlAppointmentNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlAppointmentEditNamespace(this._client);
        this.info = new WlAppointmentInfoNamespace(this._client);
        this.recent = new WlAppointmentRecentNamespace(this._client);
        this.book = new WlAppointmentBookNamespace(this._client);
    }
}
export class WlBookProcessPurchaseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns available purchase options, existing client promotions, session passes, and prizes for the specified session. */
    /** @deprecated */
    purchase(params) {
        return this._client._request('/Wl/Book/Process/Purchase/Purchase.json', params, 'GET');
    }
    /** Returns the pricing breakdown (totals, taxes, and discounts) for the given list of purchase items. */
    purchaseElementGroup(params) {
        return this._client._request('/Wl/Book/Process/Purchase/PurchaseElementGroup.json', params, 'GET');
    }
    /** Returns available purchase options for the specified session, decoding JSON-encoded group promotion and session inputs. */
    purchase56(params) {
        return this._client._request('/Wl/Book/Process/Purchase/Purchase56.json', params, 'GET');
    }
    /** Builds a single-item purchase list from the scalar input fields and delegates to the parent for price calculation. */
    purchaseElement(params) {
        return this._client._request('/Wl/Book/Process/Purchase/PurchaseElement.json', params, 'GET');
    }
    /** Returns the pricing breakdown for a list of purchase items, applying applicable discounts and taxes. */
    purchaseElementList(params) {
        return this._client._request('/Wl/Book/Process/Purchase/PurchaseElementList.json', params, 'GET');
    }
}
export class WlBookProcessRelationNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if user can book specified session. */
    relationGet(params) {
        return this._client._request('/Wl/Book/Process/Relation/Relation.json', params, 'GET');
    }
    /** Added new relative. */
    relationPost(params) {
        return this._client._request('/Wl/Book/Process/Relation/Relation.json', params, 'POST');
    }
}
export class WlBookProcessResourceNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of available assets for the booking session, grouped by asset category. */
    /** @deprecated */
    resourceGet(params) {
        return this._client._request('/Wl/Book/Process/Resource/Resource.json', params, 'GET');
    }
    /** Saves the asset selection for the booking and attempts to book the session if no further steps are required. */
    /** @deprecated */
    resourcePost(params) {
        return this._client._request('/Wl/Book/Process/Resource/Resource.json', params, 'POST');
    }
    /** Returns available assets for the booking, decoding the JSON-encoded session input before delegating to the parent. */
    resource54Get(params) {
        return this._client._request('/Wl/Book/Process/Resource/Resource54.json', params, 'GET');
    }
    /** Processes the asset selection step of the booking wizard, decoding the JSON-encoded session input before delegating to the parent. */
    resource54Post(params) {
        return this._client._request('/Wl/Book/Process/Resource/Resource54.json', params, 'POST');
    }
}
export class WlBookProcessPaymentNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Processes purchases and books sessions on the "Pay/Billing info" step of the booking wizard. */
    payment(params) {
        return this._client._request('/Wl/Book/Process/Payment/Payment.json', params, 'POST');
    }
}
export class WlBookProcessStoreNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Processes the "Purchase Options" step of the booking wizard, validates selections, and books the session when possible. */
    store(params) {
        return this._client._request('/Wl/Book/Process/Store/Store.json', params, 'POST');
    }
    /** Validates and distributes selected purchase options across all clients in the booking group. */
    storeGroup(params) {
        return this._client._request('/Wl/Book/Process/Store/StoreGroup.json', params, 'POST');
    }
}
export class WlBookProcessInfoNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns class session details and booking information for the "Class and Location" step of the booking wizard. */
    /** @deprecated */
    infoGet(params) {
        return this._client._request('/Wl/Book/Process/Info/Info.json', params, 'GET');
    }
    /** Processes the "Class and Location" step of the booking wizard, optionally recording the waiver agreement and booking the session. */
    /** @deprecated */
    infoPost(params) {
        return this._client._request('/Wl/Book/Process/Info/Info.json', params, 'POST');
    }
    /** Returns class and location booking information, enriched with localized date and time for each session. */
    info54Get(params) {
        return this._client._request('/Wl/Book/Process/Info/Info54.json', params, 'GET');
    }
    /** Processes the "Class and Location" step of the booking wizard, optionally recording the waiver agreement and booking the session. */
    info54Post(params) {
        return this._client._request('/Wl/Book/Process/Info/Info54.json', params, 'POST');
    }
    /** Checks whether the user can complete booking wizard without additional steps. */
    /** @deprecated */
    infoCanCompleteGet(params) {
        return this._client._request('/Wl/Book/Process/Info/InfoCanComplete.json', params, 'GET');
    }
    /** Checks whether the user can complete booking wizard without additional steps. */
    infoCanCompletePost(params) {
        return this._client._request('/Wl/Book/Process/Info/InfoCanComplete.json', params, 'POST');
    }
}
export class WlBookProcessQuizNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Defines list of required quizzes. */
    quizGet(params) {
        return this._client._request('/Wl/Book/Process/Quiz/Quiz.json', params, 'GET');
    }
    /** Finished booking process and save quiz responses (if quiz step is the last in booking wizard). */
    quizPost(params) {
        return this._client._request('/Wl/Book/Process/Quiz/Quiz.json', params, 'POST');
    }
}
export class WlBookProcessFrequencyNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of visits to be created for the given recurring booking settings. */
    repeat(params) {
        return this._client._request('/Wl/Book/Process/Frequency/Repeat.json', params, 'GET');
    }
    /** Returns the list of visits to be created for the given recurring booking settings. */
    repeatParallel(params) {
        return this._client._request('/Wl/Book/Process/Frequency/RepeatParallel.json', params, 'GET');
    }
}
export class WlBookProcessGuestNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Check if user exists. */
    guestProfileGet(params) {
        return this._client._request('/Wl/Book/Process/Guest/GuestProfile.json', params, 'GET');
    }
    /** Creates new user. */
    guestProfilePost(params) {
        return this._client._request('/Wl/Book/Process/Guest/GuestProfile.json', params, 'POST');
    }
}
export class WlBookProcessNamespace {
    constructor(_client) {
        this._client = _client;
        this.purchase = new WlBookProcessPurchaseNamespace(this._client);
        this.relation = new WlBookProcessRelationNamespace(this._client);
        this.resource = new WlBookProcessResourceNamespace(this._client);
        this.payment = new WlBookProcessPaymentNamespace(this._client);
        this.store = new WlBookProcessStoreNamespace(this._client);
        this.info = new WlBookProcessInfoNamespace(this._client);
        this.quiz = new WlBookProcessQuizNamespace(this._client);
        this.frequency = new WlBookProcessFrequencyNamespace(this._client);
        this.guest = new WlBookProcessGuestNamespace(this._client);
    }
    /** Processes the group booking: validates input, collects payment, books sessions, and sends confirmation emails. */
    processGroup(params) {
        return this._client._request('/Wl/Book/Process/ProcessGroup.json', params, 'POST');
    }
    /** Returns the ordered list of booking wizard steps for the given session and client. */
    /** @deprecated */
    process(params) {
        return this._client._request('/Wl/Book/Process/Process.json', params, 'GET');
    }
    /** Returns the ordered list of booking wizard steps, including the quiz step when required. */
    /** @deprecated */
    process54(params) {
        return this._client._request('/Wl/Book/Process/Process54.json', params, 'GET');
    }
    /** Returns the booking wizard steps, adjusting the path when the service is already booked for a family member. */
    process59(params) {
        return this._client._request('/Wl/Book/Process/Process59.json', params, 'GET');
    }
}
export class WlBookCancelNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about whether the given user can cancel the booking and the expected consequences. */
    cancelCan(params) {
        return this._client._request('/Wl/Book/Cancel/CancelCan.json', params, 'GET');
    }
}
export class WlBookNamespace {
    constructor(_client) {
        this._client = _client;
        this.process = new WlBookProcessNamespace(this._client);
        this.cancel = new WlBookCancelNamespace(this._client);
    }
}
export class WlClassesClassListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets a list of classes which take place in the specified location. */
    bookList(params) {
        return this._client._request('/Wl/Classes/ClassList/BookList.json', params, 'GET');
    }
    /** Returns list of classes and events in the business. */
    list(params) {
        return this._client._request('/Wl/Classes/ClassList/List.json', params, 'GET');
    }
}
export class WlClassesClassViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns class information including schedules, images, and booking settings for the specified business. */
    element(params) {
        return this._client._request('/Wl/Classes/ClassView/Element.json', params, 'GET');
    }
}
export class WlClassesPromotionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of promotions that can be used to pay for the class / event. */
    classPromotion(params) {
        return this._client._request('/Wl/Classes/Promotion/ClassPromotion.json', params, 'GET');
    }
}
export class WlClassesPeriodModifyNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets data for step in wizard. */
    modifyGet(params) {
        return this._client._request('/Wl/Classes/Period/Modify/Modify.json', params, 'GET');
    }
    /** Makes step in wizard. */
    modifyPost(params) {
        return this._client._request('/Wl/Classes/Period/Modify/Modify.json', params, 'POST');
    }
}
export class WlClassesPeriodNamespace {
    constructor(_client) {
        this._client = _client;
        this.modify = new WlClassesPeriodModifyNamespace(this._client);
    }
}
export class WlClassesNamespace {
    constructor(_client) {
        this._client = _client;
        this.classList = new WlClassesClassListNamespace(this._client);
        this.classView = new WlClassesClassViewNamespace(this._client);
        this.promotion = new WlClassesPromotionNamespace(this._client);
        this.period = new WlClassesPeriodNamespace(this._client);
    }
}
export class WlCatalogCatalogListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves an information about current sale item. */
    element(params) {
        return this._client._request('/Wl/Catalog/CatalogList/Element.json', params, 'GET');
    }
    /** Retrieves a list of all sale items. */
    list(params) {
        return this._client._request('/Wl/Catalog/CatalogList/List.json', params, 'GET');
    }
    /** Gets store products by shop category. */
    catalogProduct(params) {
        return this._client._request('/Wl/Catalog/CatalogList/CatalogProduct.json', params, 'GET');
    }
}
export class WlCatalogPaymentNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Allows to pay items for the client. */
    payment(params) {
        return this._client._request('/Wl/Catalog/Payment/Payment.json', params, 'POST');
    }
}
export class WlCatalogCartNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets purchase cost data. */
    cart(params) {
        return this._client._request('/Wl/Catalog/Cart/Cart.json', params, 'GET');
    }
    /** Checks limit quantity and whether a promotion can be added to the cart. */
    limitQuantity(params) {
        return this._client._request('/Wl/Catalog/Cart/LimitQuantity.json', params, 'GET');
    }
}
export class WlCatalogStaffAppCatalogCartNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Calculates amount of cart. */
    catalogCart(params) {
        return this._client._request('/Wl/Catalog/StaffApp/CatalogCart/CatalogCart.json', params, 'GET');
    }
}
export class WlCatalogStaffAppCatalogListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns all sale items available in the business for staff, optionally filtered by location and visit. */
    catalogList(params) {
        return this._client._request('/Wl/Catalog/StaffApp/CatalogList/CatalogList.json', params, 'GET');
    }
}
export class WlCatalogStaffAppCatalogViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Calculates price information about sale item. */
    catalogView(params) {
        return this._client._request('/Wl/Catalog/StaffApp/CatalogView/CatalogView.json', params, 'GET');
    }
}
export class WlCatalogStaffAppNamespace {
    constructor(_client) {
        this._client = _client;
        this.catalogCart = new WlCatalogStaffAppCatalogCartNamespace(this._client);
        this.catalogList = new WlCatalogStaffAppCatalogListNamespace(this._client);
        this.catalogView = new WlCatalogStaffAppCatalogViewNamespace(this._client);
    }
}
export class WlCatalogNamespace {
    constructor(_client) {
        this._client = _client;
        this.catalogList = new WlCatalogCatalogListNamespace(this._client);
        this.payment = new WlCatalogPaymentNamespace(this._client);
        this.cart = new WlCatalogCartNamespace(this._client);
        this.staffApp = new WlCatalogStaffAppNamespace(this._client);
    }
}
export class WlGoogleLoginNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Performs Google authorization within the context of the specified business. */
    googleLogin(params) {
        return this._client._request('/Wl/Google/Login/GoogleLogin.json', params, 'POST');
    }
}
export class WlGoogleNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new WlGoogleLoginNamespace(this._client);
    }
}
export class WlReceptionRosterDesignNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns configuration for the Attendance Kiosk. */
    receptionRosterDesign(params) {
        return this._client._request('/Wl/Reception/Roster/Design/ReceptionRosterDesign.json', params, 'GET');
    }
}
export class WlReceptionRosterNamespace {
    constructor(_client) {
        this._client = _client;
        this.design = new WlReceptionRosterDesignNamespace(this._client);
    }
    /** Marks the visit as not attended via the Attendance Kiosk. */
    attendanceListNotAttend(params) {
        return this._client._request('/Wl/Reception/Roster/AttendanceListNotAttend.json', params, 'POST');
    }
    /** Books a class for the client and marks the visit as attended via the Attendance Kiosk. */
    attendanceListAttend(params) {
        return this._client._request('/Wl/Reception/Roster/AttendanceListAttend.json', params, 'POST');
    }
    /** Books a class for the client via the Attendance Kiosk and returns whether the client was placed on the class list or waitlist. */
    attendanceListBook(params) {
        return this._client._request('/Wl/Reception/Roster/AttendanceListBook.json', params, 'POST');
    }
    /** Gets the secret string for Attendance Kiosk requests. */
    attendanceSecret(params) {
        return this._client._request('/Wl/Reception/Roster/AttendanceSecret.json', params, 'GET');
    }
}
export class WlReceptionApplicationNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the schedule and HTML for the Self Check-In Web App for the given user. */
    receptionScheduleGet(params) {
        return this._client._request('/Wl/Reception/Application/ReceptionSchedule.json', params, 'GET');
    }
    /** Performs check-in for the given user and returns the confirmation HTML and data. */
    receptionSchedulePost(params) {
        return this._client._request('/Wl/Reception/Application/ReceptionSchedule.json', params, 'POST');
    }
    /** Returns member information and notification items for the Self Check-In Web App. */
    memberInfo(params) {
        return this._client._request('/Wl/Reception/Application/MemberInfo.json', params, 'GET');
    }
    /** Performs authorization based on the given authorization value and business settings. */
    receptionAuthorize(params) {
        return this._client._request('/Wl/Reception/Application/ReceptionAuthorize.json', params, 'POST');
    }
}
export class WlReceptionDesignNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about settings for Check In Web Application. */
    receptionDesign(params) {
        return this._client._request('/Wl/Reception/Design/ReceptionDesign.json', params, 'GET');
    }
}
export class WlReceptionNamespace {
    constructor(_client) {
        this._client = _client;
        this.roster = new WlReceptionRosterNamespace(this._client);
        this.application = new WlReceptionApplicationNamespace(this._client);
        this.design = new WlReceptionDesignNamespace(this._client);
    }
}
export class WlPurchaseReceiptNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets purchase information. */
    purchaseReceipt(params) {
        return this._client._request('/Wl/Purchase/Receipt/PurchaseReceipt.json', params, 'GET');
    }
}
export class WlPurchaseMailNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Sends mail message with list of purchased items for specified purchase. */
    purchaseMail(params) {
        return this._client._request('/Wl/Purchase/Mail/PurchaseMail.json', params, 'POST');
    }
}
export class WlPurchaseShareNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Records the purchase share action and returns the social network sharing URL. */
    purchaseShare(params) {
        return this._client._request('/Wl/Purchase/Share/PurchaseShare.json', params, 'POST');
    }
}
export class WlPurchaseNamespace {
    constructor(_client) {
        this._client = _client;
        this.receipt = new WlPurchaseReceiptNamespace(this._client);
        this.mail = new WlPurchaseMailNamespace(this._client);
        this.share = new WlPurchaseShareNamespace(this._client);
    }
}
export class WlInsuranceCatalogNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns a list of active insurance programs for the specified promotion. */
    programList(params) {
        return this._client._request('/Wl/Insurance/Catalog/ProgramList.json', params, 'GET');
    }
}
export class WlInsuranceEnrollmentFieldNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of required partner fields for the specified wellness program. */
    enrollmentFieldListGet(params) {
        return this._client._request('/Wl/Insurance/Enrollment/Field/EnrollmentFieldList.json', params, 'GET');
    }
    /** Validates the list of fields filled in by the user for enrollment. */
    enrollmentFieldListPost(params) {
        return this._client._request('/Wl/Insurance/Enrollment/Field/EnrollmentFieldList.json', params, 'POST');
    }
}
export class WlInsuranceEnrollmentNamespace {
    constructor(_client) {
        this._client = _client;
        this.field = new WlInsuranceEnrollmentFieldNamespace(this._client);
    }
}
export class WlInsuranceNamespace {
    constructor(_client) {
        this._client = _client;
        this.catalog = new WlInsuranceCatalogNamespace(this._client);
        this.enrollment = new WlInsuranceEnrollmentNamespace(this._client);
    }
}
export class WlServiceServiceListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of appointment type in the business. */
    list(params) {
        return this._client._request('/Wl/Service/ServiceList/List.json', params, 'GET');
    }
}
export class WlServiceNamespace {
    constructor(_client) {
        this._client = _client;
        this.serviceList = new WlServiceServiceListNamespace(this._client);
    }
}
export class WlSmsPhoneNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets the phone number associated with a specific business. */
    businessPhone(params) {
        return this._client._request('/Wl/Sms/Phone/BusinessPhone.json', params, 'GET');
    }
}
export class WlSmsNamespace {
    constructor(_client) {
        this._client = _client;
        this.phone = new WlSmsPhoneNamespace(this._client);
    }
}
export class WlAiAgentLinkNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Sends an AI agent link action email (booking or purchase) to the specified user. */
    sendMail(params) {
        return this._client._request('/Wl/AiAgent/Link/SendMail.json', params, 'POST');
    }
}
export class WlAiAgentNamespace {
    constructor(_client) {
        this._client = _client;
        this.link = new WlAiAgentLinkNamespace(this._client);
    }
}
export class WlRewardActionCategoryListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves all reward action categories for business specified in `k_business`. */
    categoryList(params) {
        return this._client._request('/Wl/Reward/Action/CategoryList/CategoryList.json', params, 'GET');
    }
}
export class WlRewardActionNamespace {
    constructor(_client) {
        this._client = _client;
        this.categoryList = new WlRewardActionCategoryListNamespace(this._client);
    }
    /** Retrieves a list of available reward actions. */
    action(params) {
        return this._client._request('/Wl/Reward/Action/Action.json', params, 'GET');
    }
    /** Updates configuration fields for the specified reward action. */
    actionWrite(params) {
        return this._client._request('/Wl/Reward/Action/ActionWrite.json', params, 'POST');
    }
    /** Retrieves information about reward action item. */
    elementGet(params) {
        return this._client._request('/Wl/Reward/Action/Element.json', params, 'GET');
    }
    /** Requests points earning. */
    elementPost(params) {
        return this._client._request('/Wl/Reward/Action/Element.json', params, 'POST');
    }
    /** Retrieves information about reward actions. */
    actionType(params) {
        return this._client._request('/Wl/Reward/Action/ActionType.json', params, 'GET');
    }
}
export class WlRewardScoreCurrentNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about current score in wellnessliving points. */
    current(params) {
        return this._client._request('/Wl/Reward/Score/Current/Current.json', params, 'GET');
    }
}
export class WlRewardScoreNamespace {
    constructor(_client) {
        this._client = _client;
        this.current = new WlRewardScoreCurrentNamespace(this._client);
    }
    /** Returns the total reward points for the specified activity list or user. */
    scoreGet(params) {
        return this._client._request('/Wl/Reward/Score/Score.json', params, 'GET');
    }
    /** Gives user reward points for sharing of certain activity into Facebook. */
    scorePost(params) {
        return this._client._request('/Wl/Reward/Score/Score.json', params, 'POST');
    }
    /** Manually adjusts the reward points balance for the specified user. */
    scorePut(params) {
        return this._client._request('/Wl/Reward/Score/Score.json', params, 'PUT');
    }
}
export class WlRewardBoardBoardListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves all reward boards for business specified in `k_business`. */
    list(params) {
        return this._client._request('/Wl/Reward/Board/BoardList/List.json', params, 'GET');
    }
}
export class WlRewardBoardNamespace {
    constructor(_client) {
        this._client = _client;
        this.boardList = new WlRewardBoardBoardListNamespace(this._client);
    }
    /** Retrieves information about reward board item. */
    element(params) {
        return this._client._request('/Wl/Reward/Board/Element.json', params, 'GET');
    }
    /** Retrieves a list of reward board items to show. */
    list(params) {
        return this._client._request('/Wl/Reward/Board/List.json', params, 'GET');
    }
}
export class WlRewardPrizeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about redeemable prize item. */
    elementGet(params) {
        return this._client._request('/Wl/Reward/Prize/Element.json', params, 'GET');
    }
    /** Redeems selected prize. */
    elementPost(params) {
        return this._client._request('/Wl/Reward/Prize/Element.json', params, 'POST');
    }
    /** Retrieves a list of redeemable prizes. */
    prize(params) {
        return this._client._request('/Wl/Reward/Prize/Prize.json', params, 'GET');
    }
}
export class WlRewardNamespace {
    constructor(_client) {
        this._client = _client;
        this.action = new WlRewardActionNamespace(this._client);
        this.score = new WlRewardScoreNamespace(this._client);
        this.board = new WlRewardBoardNamespace(this._client);
        this.prize = new WlRewardPrizeNamespace(this._client);
    }
}
export class WlNotificationSendNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Schedules or immediately sends a notification to clients of the specified business or location. */
    notificationSend(params) {
        return this._client._request('/Wl/Notification/Send/NotificationSend.json', params, 'POST');
    }
    /** Returns configuration information about the specified notification for the given business. */
    notificationInfo(params) {
        return this._client._request('/Wl/Notification/Send/NotificationInfo.json', params, 'GET');
    }
}
export class WlNotificationOtpNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Sends an OTP code to the specified phone number for verification. */
    phoneOtpGet(params) {
        return this._client._request('/Wl/Notification/Otp/PhoneOtp.json', params, 'GET');
    }
    /** Verifies the OTP code submitted by the user for the specified phone number. */
    phoneOtpPost(params) {
        return this._client._request('/Wl/Notification/Otp/PhoneOtp.json', params, 'POST');
    }
}
export class WlNotificationNamespace {
    constructor(_client) {
        this._client = _client;
        this.send = new WlNotificationSendNamespace(this._client);
        this.otp = new WlNotificationOtpNamespace(this._client);
    }
}
export class WlPassportLoginEnterNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Sends an OTP code to the user's email or phone number to initiate authorization. */
    passportOtpGet(params) {
        return this._client._request('/Wl/Passport/Login/Enter/PassportOtp.json', params, 'GET');
    }
    /** Verifies the submitted OTP code and establishes an authorized session for the user. */
    passportOtpPost(params) {
        return this._client._request('/Wl/Passport/Login/Enter/PassportOtp.json', params, 'POST');
    }
}
export class WlPassportLoginRegisterNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Sends an OTP code to the user's email or phone number to initiate authorization. */
    registerOtpGet(params) {
        return this._client._request('/Wl/Passport/Login/Register/RegisterOtp.json', params, 'GET');
    }
    /** Verifies the submitted OTP code and establishes an authorized session for the user. */
    registerOtpPost(params) {
        return this._client._request('/Wl/Passport/Login/Register/RegisterOtp.json', params, 'POST');
    }
}
export class WlPassportLoginNamespace {
    constructor(_client) {
        this._client = _client;
        this.enter = new WlPassportLoginEnterNamespace(this._client);
        this.register = new WlPassportLoginRegisterNamespace(this._client);
    }
    /** Returns the current user's login information and password reset URL for the specified business. */
    info(params) {
        return this._client._request('/Wl/Passport/Login/Info.json', params, 'GET');
    }
}
export class WlPassportNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new WlPassportLoginNamespace(this._client);
    }
}
export class WlMemberInfoNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about specified member. */
    info(params) {
        return this._client._request('/Wl/Member/Info/Info.json', params, 'GET');
    }
}
export class WlMemberPurchaseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns active clients holding at least one active Purchase Option from the specified list. */
    memberByPromotion(params) {
        return this._client._request('/Wl/Member/Purchase/MemberByPromotion.json', params, 'GET');
    }
}
export class WlMemberGroupEditNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns data for group edit form. */
    editGet(params) {
        return this._client._request('/Wl/Member/Group/Edit/Edit.json', params, 'GET');
    }
    /** Adds or changes a client group. */
    editPost(params) {
        return this._client._request('/Wl/Member/Group/Edit/Edit.json', params, 'POST');
    }
    /** Adds or edit client group Query. */
    editPut(params) {
        return this._client._request('/Wl/Member/Group/Edit/Edit.json', params, 'PUT');
    }
}
export class WlMemberGroupUserNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes the user from the group. */
    userGroupDelete(params) {
        return this._client._request('/Wl/Member/Group/User/UserGroup.json', params, 'DELETE');
    }
    /** Gets information about all groups to which the specified user belongs. */
    userGroupGet(params) {
        return this._client._request('/Wl/Member/Group/User/UserGroup.json', params, 'GET');
    }
    /** Adds a user to a group. */
    userGroupPost(params) {
        return this._client._request('/Wl/Member/Group/User/UserGroup.json', params, 'POST');
    }
}
export class WlMemberGroupGroupListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Removes groups. */
    listDelete(params) {
        return this._client._request('/Wl/Member/Group/GroupList/List.json', params, 'DELETE');
    }
    /** Returns all member groups list in the business if `$a_member_group_select` is empty, otherwise filters result according to `$a_member_group_select`. */
    listGet(params) {
        return this._client._request('/Wl/Member/Group/GroupList/List.json', params, 'GET');
    }
    /** Updates the order of groups in a list. */
    listPut(params) {
        return this._client._request('/Wl/Member/Group/GroupList/List.json', params, 'PUT');
    }
}
export class WlMemberGroupNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlMemberGroupEditNamespace(this._client);
        this.user = new WlMemberGroupUserNamespace(this._client);
        this.groupList = new WlMemberGroupGroupListNamespace(this._client);
    }
}
export class WlMemberProgressFieldEditNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns field data. */
    fieldGet(params) {
        return this._client._request('/Wl/Member/Progress/Field/Edit/Field.json', params, 'GET');
    }
    /** Saves field data. */
    fieldPost(params) {
        return this._client._request('/Wl/Member/Progress/Field/Edit/Field.json', params, 'POST');
    }
}
export class WlMemberProgressFieldNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlMemberProgressFieldEditNamespace(this._client);
    }
    /** Changes states of field. */
    state(params) {
        return this._client._request('/Wl/Member/Progress/Field/State.json', params, 'PUT');
    }
}
export class WlMemberProgressLogEditNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns progress log data. */
    logGet(params) {
        return this._client._request('/Wl/Member/Progress/Log/Edit/Log.json', params, 'GET');
    }
    /** Saves progress fields log. */
    logPost(params) {
        return this._client._request('/Wl/Member/Progress/Log/Edit/Log.json', params, 'POST');
    }
}
export class WlMemberProgressLogImageNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes progress image. */
    imageDelete(params) {
        return this._client._request('/Wl/Member/Progress/Log/Image/Image.json', params, 'DELETE');
    }
    /** Returns progress picture data. */
    imageGet(params) {
        return this._client._request('/Wl/Member/Progress/Log/Image/Image.json', params, 'GET');
    }
    /** Saves progress picture. */
    imagePost(params) {
        return this._client._request('/Wl/Member/Progress/Log/Image/Image.json', params, 'POST');
    }
}
export class WlMemberProgressLogCompareNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of dates where client logged his progress. */
    compare(params) {
        return this._client._request('/Wl/Member/Progress/Log/Compare/Compare.json', params, 'GET');
    }
}
export class WlMemberProgressLogNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlMemberProgressLogEditNamespace(this._client);
        this.image = new WlMemberProgressLogImageNamespace(this._client);
        this.compare = new WlMemberProgressLogCompareNamespace(this._client);
    }
    /** Verifies client's progress log data. */
    verify(params) {
        return this._client._request('/Wl/Member/Progress/Log/Verify.json', params, 'PUT');
    }
}
export class WlMemberProgressGoalEditNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns progress goal log data. */
    goalGet(params) {
        return this._client._request('/Wl/Member/Progress/Goal/Edit/Goal.json', params, 'GET');
    }
    /** Saves progress goal fields log. */
    goalPost(params) {
        return this._client._request('/Wl/Member/Progress/Goal/Edit/Goal.json', params, 'POST');
    }
}
export class WlMemberProgressGoalNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlMemberProgressGoalEditNamespace(this._client);
    }
}
export class WlMemberProgressNamespace {
    constructor(_client) {
        this._client = _client;
        this.field = new WlMemberProgressFieldNamespace(this._client);
        this.log = new WlMemberProgressLogNamespace(this._client);
        this.goal = new WlMemberProgressGoalNamespace(this._client);
    }
}
export class WlMemberNamespace {
    constructor(_client) {
        this._client = _client;
        this.info = new WlMemberInfoNamespace(this._client);
        this.purchase = new WlMemberPurchaseNamespace(this._client);
        this.group = new WlMemberGroupNamespace(this._client);
        this.progress = new WlMemberProgressNamespace(this._client);
    }
}
export class WlUserInfoNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about user. */
    userInfo(params) {
        return this._client._request('/Wl/User/Info/UserInfo.json', params, 'GET');
    }
    /** Retrieves information about the user belongs to certain integrations. */
    userIntegration(params) {
        return this._client._request('/Wl/User/Info/UserIntegration.json', params, 'GET');
    }
}
export class WlUserReferrerNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Searches for a referrer by the given search string and returns their profile information. */
    referrer(params) {
        return this._client._request('/Wl/User/Referrer/Referrer.json', params, 'GET');
    }
}
export class WlUserNamespace {
    constructor(_client) {
        this._client = _client;
        this.info = new WlUserInfoNamespace(this._client);
        this.referrer = new WlUserReferrerNamespace(this._client);
    }
}
export class WlDiscountCodeEditNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets information about discount. */
    discountCodeEditGet(params) {
        return this._client._request('/Wl/Discount/Code/Edit/DiscountCodeEdit.json', params, 'GET');
    }
    /** Saves information about discount code or create new. */
    discountCodeEditPost(params) {
        return this._client._request('/Wl/Discount/Code/Edit/DiscountCodeEdit.json', params, 'POST');
    }
    /** Duplicates an existing discount code. */
    discountCodeEditPut(params) {
        return this._client._request('/Wl/Discount/Code/Edit/DiscountCodeEdit.json', params, 'PUT');
    }
}
export class WlDiscountCodeNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlDiscountCodeEditNamespace(this._client);
    }
    /** Returns discount codes of the specified business. */
    discountCode(params) {
        return this._client._request('/Wl/Discount/Code/DiscountCode.json', params, 'GET');
    }
}
export class WlDiscountNamespace {
    constructor(_client) {
        this._client = _client;
        this.code = new WlDiscountCodeNamespace(this._client);
    }
}
export class WlShopCategoryNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of shop categories available for the given business. */
    categoryGet(params) {
        return this._client._request('/Wl/Shop/Category/Category.json', params, 'GET');
    }
    /** Creates new shop category. */
    categoryPost(params) {
        return this._client._request('/Wl/Shop/Category/Category.json', params, 'POST');
    }
}
export class WlShopProductOptionInventoryCountNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about product options. Works in two modes: review and search. In review mode, the method returns products with changed inventory quantities and notes. In search mode, the method returns one product and its options (the result of searching by product barcode). */
    inventoryCountGet(params) {
        return this._client._request('/Wl/Shop/Product/Option/Inventory/Count/InventoryCount.json', params, 'GET');
    }
    /** Saves changes of product inventory quantities and notes. */
    inventoryCountPost(params) {
        return this._client._request('/Wl/Shop/Product/Option/Inventory/Count/InventoryCount.json', params, 'POST');
    }
}
export class WlShopProductOptionInventoryNamespace {
    constructor(_client) {
        this._client = _client;
        this.count = new WlShopProductOptionInventoryCountNamespace(this._client);
    }
}
export class WlShopProductOptionNamespace {
    constructor(_client) {
        this._client = _client;
        this.inventory = new WlShopProductOptionInventoryNamespace(this._client);
    }
}
export class WlShopProductNamespace {
    constructor(_client) {
        this._client = _client;
        this.option = new WlShopProductOptionNamespace(this._client);
    }
}
export class WlShopNamespace {
    constructor(_client) {
        this._client = _client;
        this.category = new WlShopCategoryNamespace(this._client);
        this.product = new WlShopProductNamespace(this._client);
    }
}
export class WlResourceLayoutNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about the specified asset layout, including assets and custom shapes. */
    layout(params) {
        return this._client._request('/Wl/Resource/Layout/Layout.json', params, 'GET');
    }
}
export class WlResourceResourceListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns assets list in the business. */
    list(params) {
        return this._client._request('/Wl/Resource/ResourceList/List.json', params, 'GET');
    }
}
export class WlResourceNamespace {
    constructor(_client) {
        this._client = _client;
        this.layout = new WlResourceLayoutNamespace(this._client);
        this.resourceList = new WlResourceResourceListNamespace(this._client);
    }
}
export class WlFamilyRelationNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Deletes family relation between 2 users. */
    relationDelete(params) {
        return this._client._request('/Wl/Family/Relation/Relation.json', params, 'DELETE');
    }
    /** Gets relative list. */
    relationGet(params) {
        return this._client._request('/Wl/Family/Relation/Relation.json', params, 'GET');
    }
    /** Adds to user `uid` relative `a_new`. */
    relationPost(params) {
        return this._client._request('/Wl/Family/Relation/Relation.json', params, 'POST');
    }
    /** Gets relationships list. */
    familyRelation(params) {
        return this._client._request('/Wl/Family/Relation/FamilyRelation.json', params, 'GET');
    }
    /** Deletes family relation between 2 users. */
    relation72Delete(params) {
        return this._client._request('/Wl/Family/Relation/Relation72.json', params, 'DELETE');
    }
    /** Gets relative list. */
    relation72Get(params) {
        return this._client._request('/Wl/Family/Relation/Relation72.json', params, 'GET');
    }
    /** Adds to user [RelationApi](/Wl/Family/Relation/Relation.json) relative [RelationApi](/Wl/Family/Relation/Relation.json). */
    relation72Post(params) {
        return this._client._request('/Wl/Family/Relation/Relation72.json', params, 'POST');
    }
}
export class WlFamilyNamespace {
    constructor(_client) {
        this._client = _client;
        this.relation = new WlFamilyRelationNamespace(this._client);
    }
}
export class WlIntegrationAutymateNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns or changes the Autymate enrollment status for the specified business. Autymate specifically requested this method be a get. */
    autymateActivate(params) {
        return this._client._request('/Wl/Integration/Autymate/AutymateActivate.json', params, 'GET');
    }
    /** Gets the daily transaction data. */
    report(params) {
        return this._client._request('/Wl/Integration/Autymate/Report.json', params, 'GET');
    }
}
export class WlIntegrationSamlNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets status of the user in business for given list of identifiers. */
    samlUserDeactivation(params) {
        return this._client._request('/Wl/Integration/Saml/SamlUserDeactivation.json', params, 'POST');
    }
}
export class WlIntegrationCurvesNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns country, region, state, city and location lists of the franchisor. This method returns all the information from the parent `get()` and the Curves territory ID. */
    curvesFranchiseLocation(params) {
        return this._client._request('/Wl/Integration/Curves/CurvesFranchiseLocation.json', params, 'GET');
    }
}
export class WlIntegrationDragonFlyNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if the user can physically access the location. */
    access(params) {
        return this._client._request('/Wl/Integration/DragonFly/Access.json', params, 'GET');
    }
}
export class WlIntegrationNamespace {
    constructor(_client) {
        this._client = _client;
        this.autymate = new WlIntegrationAutymateNamespace(this._client);
        this.saml = new WlIntegrationSamlNamespace(this._client);
        this.curves = new WlIntegrationCurvesNamespace(this._client);
        this.dragonFly = new WlIntegrationDragonFlyNamespace(this._client);
    }
}
export class WlCouponCouponListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets list of coupons. */
    list(params) {
        return this._client._request('/Wl/Coupon/CouponList/List.json', params, 'GET');
    }
}
export class WlCouponNamespace {
    constructor(_client) {
        this._client = _client;
        this.couponList = new WlCouponCouponListNamespace(this._client);
    }
}
export class WlMicrosoftLoginNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Removes the association between a website client and a Microsoft account. */
    microsoftLoginDelete(params) {
        return this._client._request('/Wl/Microsoft/Login/MicrosoftLogin.json', params, 'DELETE');
    }
    /** Collects data for the Microsoft login button. */
    microsoftLoginGet(params) {
        return this._client._request('/Wl/Microsoft/Login/MicrosoftLogin.json', params, 'GET');
    }
    /** Authenticates a user via Microsoft OAuth for the specified business. */
    microsoftLoginPost(params) {
        return this._client._request('/Wl/Microsoft/Login/MicrosoftLogin.json', params, 'POST');
    }
}
export class WlMicrosoftNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new WlMicrosoftLoginNamespace(this._client);
    }
}
export class WlSearchTagNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of search tags. This is public information and method does not require any level of privileges. */
    searchTagList(params) {
        return this._client._request('/Wl/Search/Tag/SearchTagList.json', params, 'GET');
    }
}
export class WlSearchNamespace {
    constructor(_client) {
        this._client = _client;
        this.tag = new WlSearchTagNamespace(this._client);
    }
}
export class WlGymVisitNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Records a gym visit for the specified client at the given date and time. */
    visitAdd(params) {
        return this._client._request('/Wl/Gym/Visit/VisitAdd.json', params, 'POST');
    }
}
export class WlGymNamespace {
    constructor(_client) {
        this._client = _client;
        this.visit = new WlGymVisitNamespace(this._client);
    }
}
export class WlSocialShareNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves the share post data and returns the secret key for the shared object. */
    socialShare(params) {
        return this._client._request('/Wl/Social/Share/SocialShare.json', params, 'POST');
    }
}
export class WlSocialNamespace {
    constructor(_client) {
        this._client = _client;
        this.share = new WlSocialShareNamespace(this._client);
    }
}
export class WlFacebookLoginNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Performs Facebook authorization within the context of the specified business. */
    facebookLogin(params) {
        return this._client._request('/Wl/Facebook/Login/FacebookLogin.json', params, 'POST');
    }
}
export class WlFacebookNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new WlFacebookLoginNamespace(this._client);
    }
}
export class WlNamespace {
    constructor(_client) {
        this._client = _client;
        this.schedule = new WlScheduleNamespace(this._client);
        this.visit = new WlVisitNamespace(this._client);
        this.location = new WlLocationNamespace(this._client);
        this.profile = new WlProfileNamespace(this._client);
        this.event = new WlEventNamespace(this._client);
        this.business = new WlBusinessNamespace(this._client);
        this.report = new WlReportNamespace(this._client);
        this.collector = new WlCollectorNamespace(this._client);
        this.announcement = new WlAnnouncementNamespace(this._client);
        this.lead = new WlLeadNamespace(this._client);
        this.promotion = new WlPromotionNamespace(this._client);
        this.login = new WlLoginNamespace(this._client);
        this.quiz = new WlQuizNamespace(this._client);
        this.video = new WlVideoNamespace(this._client);
        this.fitbuilder = new WlFitbuilderNamespace(this._client);
        this.mail = new WlMailNamespace(this._client);
        this.staff = new WlStaffNamespace(this._client);
        this.skin = new WlSkinNamespace(this._client);
        this.tag = new WlTagNamespace(this._client);
        this.tax = new WlTaxNamespace(this._client);
        this.review = new WlReviewNamespace(this._client);
        this.rank = new WlRankNamespace(this._client);
        this.holiday = new WlHolidayNamespace(this._client);
        this.appointment = new WlAppointmentNamespace(this._client);
        this.book = new WlBookNamespace(this._client);
        this.classes = new WlClassesNamespace(this._client);
        this.catalog = new WlCatalogNamespace(this._client);
        this.google = new WlGoogleNamespace(this._client);
        this.reception = new WlReceptionNamespace(this._client);
        this.purchase = new WlPurchaseNamespace(this._client);
        this.insurance = new WlInsuranceNamespace(this._client);
        this.service = new WlServiceNamespace(this._client);
        this.sms = new WlSmsNamespace(this._client);
        this.aiAgent = new WlAiAgentNamespace(this._client);
        this.reward = new WlRewardNamespace(this._client);
        this.notification = new WlNotificationNamespace(this._client);
        this.passport = new WlPassportNamespace(this._client);
        this.member = new WlMemberNamespace(this._client);
        this.user = new WlUserNamespace(this._client);
        this.discount = new WlDiscountNamespace(this._client);
        this.shop = new WlShopNamespace(this._client);
        this.resource = new WlResourceNamespace(this._client);
        this.family = new WlFamilyNamespace(this._client);
        this.integration = new WlIntegrationNamespace(this._client);
        this.coupon = new WlCouponNamespace(this._client);
        this.microsoft = new WlMicrosoftNamespace(this._client);
        this.search = new WlSearchNamespace(this._client);
        this.gym = new WlGymNamespace(this._client);
        this.social = new WlSocialNamespace(this._client);
        this.facebook = new WlFacebookNamespace(this._client);
    }
}
// --- Client ---
/** WellnessLiving API client. */
export class WlClient {
    constructor(options) {
        if (options == null || typeof options !== 'object') {
            throw new TypeError('WlSdk: options must be a plain object');
        }
        this._token = (options.token != null) ? options.token : null;
        const base = (options.baseUrl != null) ? options.baseUrl : 'https://staging.wellnessliving.com';
        this._baseUrl = (base.charAt(base.length - 1) === '/') ? base.slice(0, -1) : base;
        this._timeout = (options.timeout != null && options.timeout > 0) ? options.timeout : 30000;
        this.thoth = new ThothNamespace(this);
        this.core = new CoreNamespace(this);
        this.social = new SocialNamespace(this);
        this.wl = new WlNamespace(this);
    }
    _request(path, params, method) {
        const httpMethod = method.toUpperCase();
        let url = this._baseUrl + path;
        const headers = {};
        if (this._token != null)
            headers['Authorization'] = 'Bearer ' + this._token;
        const p = ((params != null && typeof params === 'object') ? params : {});
        const fetchOptions = { method: httpMethod, headers };
        if (httpMethod === 'GET' || httpMethod === 'HEAD') {
            const parts = [];
            Object.entries(p).forEach(([k, v]) => {
                if (Array.isArray(v)) {
                    v.forEach((item) => { if (item != null)
                        parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(String(item))); });
                }
                else if (v != null) {
                    parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(String(v)));
                }
            });
            if (parts.length > 0)
                url += '?' + parts.join('&');
        }
        else {
            const form = new URLSearchParams();
            Object.entries(p).forEach(([k, v]) => {
                if (Array.isArray(v)) {
                    v.forEach((item) => { if (item != null)
                        form.append(k, String(item)); });
                }
                else if (v != null) {
                    form.append(k, String(v));
                }
            });
            fetchOptions.body = form;
        }
        const controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
        let timerId = null;
        if (controller != null) {
            fetchOptions.signal = controller.signal;
            timerId = setTimeout(() => { controller.abort(); }, this._timeout);
        }
        const cleanup = () => { if (timerId !== null) {
            clearTimeout(timerId);
            timerId = null;
        } };
        return fetch(url, fetchOptions).then((response) => {
            cleanup();
            return response.json().then((data) => {
                if (!response.ok)
                    throw new WlApiError(response.status, data);
                return data;
            });
        }, (err) => { cleanup(); throw err; });
    }
}
export default WlClient;
