"use strict";
// AUTO-GENERATED — DO NOT EDIT
// WellnessLiving SDK — dev channel
// OpenAPI spec version: 1.1.20260625105950
// Build date: 2026-06-25
// Endpoints: 457
// Enums: 176
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADurationSid = exports.RsProgramTypeSid = exports.RsProgramSid = exports.RsPayMethodSid = exports.WlAnnouncementSortFieldSid = exports.WlAnnouncementAnnouncementStatusEnum = exports.RsProjectSid = exports.RsHomeTourSid = exports.WlVideoCatalogFilterSortFilterSortSid = exports.CoreSidSortOrderSid = exports.WlVideoVideoSourceSid = exports.CoreSidYesNoSid = exports.WlVideoVideoEmbedSourceSid = exports.RsPrivilegeRoleSid = exports.WlLoginMemberVaccinationStatusVaccinationStatusSid = exports.WlModeModeSid = exports.WlLoginMemberIntentsMemberIntentsSid = exports.AFlagSid = exports.RsScheduleTimeSid = exports.CoreDriveDriveTypeSid = exports.WlClassesTabTabSid = exports.ADateWeekSid = exports.AGenderSid = exports.CoreAmazonRegionAmazonRegionSid = exports.RsRankTypeSid = exports.CoreLocaleCurrencySid = exports.WlBusinessClaimBusinessClaimStatusSid = exports.RsBusinessCategorySid = exports.WlServiceServiceSid = exports.RsReportChartViewSid = exports.RsReportPageSid = exports.RsReportGroupSid = exports.RsFieldTypeSid = exports.RsFieldGeneralSid = exports.WlImportCustomCustomSid = exports.WlVisitVisitSid = exports.ThothPayProcessorNuveiCodeCSResponseSid = exports.WlPayBankCardCardTypeEnum = exports.ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid = exports.RsPayException = exports.ACardSystemSid = exports.WlMailVerifyMailVerifyStatusSid = exports.WlMailDomainDomainVerifyStatusSid = exports.RsReportSid = exports.ThothReportCoreGeneratorReportGeneratorStatusSid = exports.WlGenderGenderSid = exports.WlTaskTaskStatusSid = exports.CoreGoogleCaptchaCaptchaVersionSid = exports.CoreLocaleLocaleSid = exports.WlApiError = void 0;
exports.RsAppointmentPaySid = exports.WlPrivilegePrivilegeSid = exports.WlProfileAttachAttachPreviewSid = exports.WlLocationFlagFlagSourceEnum = exports.RsLoginNoteFlagSid = exports.RsLoginNoteAccessSid = exports.RsProfileNoteSid = exports.RsLoginActivityTypeSid = exports.WlDesignIconSid = exports.WlProfileRegisterSourceSid = exports.RsCommissionTypeSid = exports.RsActivationSid = exports.WlServiceBookableSid = exports.WlClassesRequirePaySid = exports.WlBookProcessProcessSpaSid = exports.RsFamilyRelationSid = exports.RsRepeatEndSid = exports.WlVirtualVirtualProviderSid = exports.WlScheduleClassViewDenyReasonSid = exports.WlResourceResourceCategoryEnum = exports.RsMailSid = exports.WlReceptionDesignCheckInSoundSid = exports.WlReceptionApplicationMemberInfoIconSid = exports.WlReceptionApplicationMemberInfoColorSid = exports.WlLoginTypeClientTypeSid = exports.RsServiceSid = exports.WlVisitNoteSidNoteSid = exports.RsSaleSid = exports.WlVisitPassProspectSid = exports.WlProfileSensorSensorTypesSid = exports.CoreQuizResponseResponseStatusSid = exports.WlMemberProgressFieldTypeSid = exports.WlMemberProgressFieldMeasurementSid = exports.WlMemberProgressFieldProgressFieldSid = exports.RsBusinessDesignLogoStyleSid = exports.RsBusinessDesignLogoPositionSid = exports.RsPageFrontendHeaderLayoutSid = exports.WlBusinessPolicyChargeSid = exports.WlBusinessPolicyBlameSid = exports.CoreGoogleCaptchaCaptchaResponseSid = exports.RsPayOwnerSid = exports.ThothPayProcessorPayProcessorSid = exports.ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum = exports.RsReviewStatusSid = exports.RsSkinSid = exports.RsPurchaseItemSid = exports.WlQuizQuizFrequencySid = exports.WlQuizActivityActivitySid = exports.WlPromotionPurchaseRestrictionSid = exports.RsDurationTypeSid = void 0;
exports.WlBusinessAccountSubscriptionAssetAssetSubscriptionSid = exports.WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid = exports.WlBusinessAccountSubscriptionRewardRewardSubscriptionSid = exports.WlBusinessAccountSubscriptionReviewReviewSubscriptionSid = exports.WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid = exports.WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid = exports.WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid = exports.WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid = exports.WlBusinessAccountSubscriptionZoomZoomSubscriptionSid = exports.WlBusinessAccountSubscriptionQuizQuizSubscriptionSid = exports.WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid = exports.WlBusinessAccountSubscriptionDoorDoorSubscriptionSid = exports.WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid = exports.WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid = exports.WlBusinessAccountSubscriptionZapierZapierSubscriptionSid = exports.WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid = exports.WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid = exports.WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid = exports.WlBusinessAccountSubscriptionSmsSmsSubscriptionSid = exports.WlBusinessAccountSubscriptionBaseBaseSubscriptionSid = exports.WlShareShareSid = exports.WlSearchSearchOperationSid = exports.WlMemberGroupShapeSid = exports.WlLeadConversionLeadConversionTypeSid = exports.RsPayAccountChargeSid = exports.WlSocialShareShareObjectSid = exports.WlReviewReviewListReviewOrderSid = exports.WlUserTrackingFlowSid = exports.WlCouponTypeSid = exports.WlBusinessFranchiseLocationBusinessFranchiseLocationSid = exports.WlReportGeneratorReportGeneratorStatusSid = exports.WlIntegrationAutymateAutymateAccessModeSid = exports.WlIntegrationAutymateAutymateStatusSid = exports.RsRewardScoreSid = exports.RsRewardActionCategorySid = exports.WlCatalogQuickPurchaseTypeSid = exports.WlQuizResponseSourceSid = exports.RsProgramCategorySid = exports.WlPromotionEditLimitCycleSid = exports.WlShopCategoryShopCategorySortSid = exports.WlCatalogPurchaseOptionViewSid = exports.RsTaxSid = exports.WlCouponEditDurationTypeSid = exports.WlCouponEditActivationSid = exports.WlResourceImageImageIconSid = exports.WlResourceLayoutShapeLayoutShapeSid = exports.RsFacilitySid = exports.RsAgeSid = exports.ASocialSid = exports.WlVideoWatchWatchSourceSid = void 0;
exports.CoreDriveNamespace = exports.CoreDriveImageUploadNamespace = exports.CorePassportNamespace = exports.CorePassportUserNamespace = exports.CorePassportUserEmailNamespace = exports.CorePassportEnterNamespace = exports.CorePassportEnterJwtNamespace = exports.CorePassportChangePasswordNamespace = exports.CorePassportLoginNamespace = exports.CorePassportLoginSignOutNamespace = exports.CorePassportLoginRegisterNamespace = exports.CorePassportLoginEnterNamespace = exports.CoreCaptchaNamespace = exports.CoreSidNamespace = exports.CoreWebSocketNamespace = exports.CoreGoogleNamespace = exports.CoreGoogleCaptchaNamespace = exports.CoreGeoNamespace = exports.CoreGeoRegionNamespace = exports.CoreRequestNamespace = exports.CoreRequestTokenNamespace = exports.CoreRequestApiNamespace = exports.CoreRequestApiApplicationNamespace = exports.CoreRequestApiApplicationCredentialNamespace = exports.WlLoginPromotionGuestPassInviteInviteStatusEnum = exports.RsPayActorSid = exports.WlSkinApplicationUpgradeAppUpdateTypeEnum = exports.WlSkinApplicationResourceApplicationCategorySid = exports.WlShopProductPurchaseRestrictionSid = exports.WlPassportLoginEnterOtpDeliveryStrategyEnum = exports.RsServicePriceSid = exports.WlLoginLoginRoleSid = exports.RsAppointmentEditConflictSid = exports.RsServiceRequireSid = exports.WlServiceServiceBookFlowSid = exports.RsClassModifyModeSid = exports.RsClassModifyActionSid = exports.WlBookProcessProcessCheckSid = exports.WlScheduleDesignOptionSid = exports.WlReceptionRosterDirectSid = exports.WlPromotionGuestPassGuestPassResetTypeSid = exports.WlLoginPromotionConvertConvertWhenSid = exports.WlPromotionConvertPromotionConvertSid = exports.WlLoginAttendanceAddOptionSid = exports.WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid = exports.WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid = exports.WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid = exports.WlBusinessAccountSubscriptionEmailEmailSubscriptionSid = exports.WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid = exports.WlBusinessAccountSubscriptionApiApiSubscriptionSid = void 0;
exports.WlLoginPromotionGuestPassClaimNamespace = exports.WlLoginPromotionGuestPassInviteNamespace = exports.WlLoginPromotionConvertNamespace = exports.WlLoginSearchNamespace = exports.WlLoginSearchStaffAppNamespace = exports.WlLoginMemberNamespace = exports.WlLoginMemberDynamicIdNamespace = exports.WlLoginAttendanceNamespace = exports.WlLoginAttendanceAddNamespace = exports.WlLoginMailNamespace = exports.WlMailNamespace = exports.WlMailPatternNamespace = exports.WlMailPatternAutomatedMarketingNamespace = exports.WlMailPatternAutomatedMarketingCustomTemplateNamespace = exports.WlBusinessNamespace = exports.WlBusinessUserNamespace = exports.WlBusinessUserSubscribeNamespace = exports.WlBusinessRewardNamespace = exports.WlBusinessRewardConfigNamespace = exports.WlBusinessFranchiseNamespace = exports.WlBusinessFranchiseLocationNamespace = exports.WlBusinessAuthorizeSupportNamespace = exports.WlBusinessAuthorizeSupportResponseNamespace = exports.WlBusinessWaiverNamespace = exports.WlBusinessTypeNamespace = exports.WlBusinessAuthorizePartnerNamespace = exports.WlBusinessAmazonRegionNamespace = exports.WlBusinessSearchNamespace = exports.WlBusinessPhoneNamespace = exports.WlBusinessLeadNamespace = exports.WlBusinessDesignNamespace = exports.WlBusinessPartnerNamespace = exports.WlBusinessClaimNamespace = exports.WlBusinessSelectNamespace = exports.WlBusinessConfigNamespace = exports.WlBusinessAccountNamespace = exports.WlBusinessAccountSubscriptionNamespace = exports.WlBusinessAccountSubscriptionAchieveNamespace = exports.WlReportNamespace = exports.WlLeadNamespace = exports.WlLeadSourceNamespace = exports.SocialNamespace = exports.SocialGoogleNamespace = exports.SocialGooglePlusNamespace = exports.SocialFacebookNamespace = exports.SocialFacebookLoginNamespace = exports.SocialAppleNamespace = exports.SocialAppleLoginNamespace = exports.SocialMicrosoftNamespace = exports.CoreNamespace = void 0;
exports.WlLocationViewNamespace = exports.WlLocationWorkTimeNamespace = exports.WlLocationFlagNamespace = exports.WlVideoNamespace = exports.WlVideoTagNamespace = exports.WlVideoLevelNamespace = exports.WlVideoCategoryNamespace = exports.WlVideoWatchNamespace = exports.WlVisitNamespace = exports.WlStaffNamespace = exports.WlStaffStaffViewNamespace = exports.WlStaffPrivilegeNamespace = exports.WlStaffStaffListNamespace = exports.WlProfileNamespace = exports.WlProfileFormNamespace = exports.WlProfileFormResponseNamespace = exports.WlProfileContractNamespace = exports.WlProfileAttendanceNamespace = exports.WlProfileAttendanceScheduleNamespace = exports.WlProfileAttendanceScheduleFrontendNamespace = exports.WlProfileAttachNamespace = exports.WlProfileTermNamespace = exports.WlProfileSettingNamespace = exports.WlProfilePurchaseListNamespace = exports.WlProfileAlertNamespace = exports.WlProfileActivityNamespace = exports.WlProfileEditNamespace = exports.WlProfileEditEmailNamespace = exports.WlProfilePurchaseNamespace = exports.WlEventNamespace = exports.WlEventBookNamespace = exports.WlEventBookEventListNamespace = exports.WlEventBookEventViewNamespace = exports.WlScheduleNamespace = exports.WlScheduleScheduleListNamespace = exports.WlScheduleScheduleListStaffAppNamespace = exports.WlSchedulePageNamespace = exports.WlScheduleClassViewNamespace = exports.WlScheduleTabNamespace = exports.WlScheduleClassListNamespace = exports.WlLoginNamespace = exports.WlLoginProductNamespace = exports.WlLoginCouponNamespace = exports.WlLoginPermissionNamespace = exports.WlLoginTypeNamespace = exports.WlLoginAddNamespace = exports.WlLoginAgreeNamespace = exports.WlLoginPromotionNamespace = exports.WlLoginPromotionGuestPassNamespace = exports.WlLoginPromotionGuestPassApplyNamespace = void 0;
exports.WlBookProcessStoreNamespace = exports.WlBookProcessPaymentNamespace = exports.WlBookProcessResourceNamespace = exports.WlBookProcessPurchaseNamespace = exports.WlBookProcessGuestNamespace = exports.WlBookProcessRelationNamespace = exports.WlNotificationNamespace = exports.WlNotificationOtpNamespace = exports.WlNotificationSendNamespace = exports.WlReceptionNamespace = exports.WlReceptionDesignNamespace = exports.WlReceptionRosterNamespace = exports.WlReceptionRosterDesignNamespace = exports.WlReceptionApplicationNamespace = exports.WlMemberNamespace = exports.WlMemberProgressNamespace = exports.WlMemberProgressGoalNamespace = exports.WlMemberProgressGoalEditNamespace = exports.WlMemberProgressLogNamespace = exports.WlMemberProgressLogCompareNamespace = exports.WlMemberProgressLogImageNamespace = exports.WlMemberProgressLogEditNamespace = exports.WlMemberProgressFieldNamespace = exports.WlMemberProgressFieldEditNamespace = exports.WlMemberGroupNamespace = exports.WlMemberGroupGroupListNamespace = exports.WlMemberGroupUserNamespace = exports.WlMemberGroupEditNamespace = exports.WlMemberPurchaseNamespace = exports.WlMemberInfoNamespace = exports.WlRankNamespace = exports.WlReviewNamespace = exports.WlReviewReviewListNamespace = exports.WlTaxNamespace = exports.WlSkinNamespace = exports.WlSkinWidgetNamespace = exports.WlSkinApplicationNamespace = exports.WlSkinApplicationResourceNamespace = exports.WlSkinApplicationConnectNamespace = exports.WlTagNamespace = exports.WlFitbuilderNamespace = exports.WlQuizNamespace = exports.WlQuizResponseNamespace = exports.WlPromotionNamespace = exports.WlPromotionIndexNamespace = exports.WlHolidayNamespace = exports.WlCollectorNamespace = exports.WlAnnouncementNamespace = exports.WlLocationNamespace = exports.WlLocationFacilityNamespace = void 0;
exports.WlCatalogStaffAppCatalogViewNamespace = exports.WlCatalogStaffAppCatalogListNamespace = exports.WlCatalogStaffAppCatalogCartNamespace = exports.WlCatalogCartNamespace = exports.WlCatalogCatalogListNamespace = exports.WlCatalogPaymentNamespace = exports.WlPassportNamespace = exports.WlPassportLoginNamespace = exports.WlPassportLoginRegisterNamespace = exports.WlPassportLoginEnterNamespace = exports.WlSmsNamespace = exports.WlSmsPhoneNamespace = exports.WlResourceNamespace = exports.WlResourceResourceListNamespace = exports.WlResourceLayoutNamespace = exports.WlGoogleNamespace = exports.WlGoogleLoginNamespace = exports.WlServiceNamespace = exports.WlServiceServiceListNamespace = exports.WlPurchaseNamespace = exports.WlPurchaseShareNamespace = exports.WlPurchaseMailNamespace = exports.WlPurchaseReceiptNamespace = exports.WlAppointmentNamespace = exports.WlAppointmentBookNamespace = exports.WlAppointmentBookAssetNamespace = exports.WlAppointmentBookAssetServiceNamespace = exports.WlAppointmentBookProductNamespace = exports.WlAppointmentBookQuestionNamespace = exports.WlAppointmentBookPurchaseNamespace = exports.WlAppointmentBookStaffNamespace = exports.WlAppointmentBookPaymentNamespace = exports.WlAppointmentBookFinishNamespace = exports.WlAppointmentBookScheduleNamespace = exports.WlAppointmentBookServiceNamespace = exports.WlAppointmentRecentNamespace = exports.WlAppointmentInfoNamespace = exports.WlAppointmentEditNamespace = exports.WlClassesNamespace = exports.WlClassesPeriodNamespace = exports.WlClassesPeriodModifyNamespace = exports.WlClassesPromotionNamespace = exports.WlClassesClassViewNamespace = exports.WlClassesClassListNamespace = exports.WlBookNamespace = exports.WlBookCancelNamespace = exports.WlBookProcessNamespace = exports.WlBookProcessFrequencyNamespace = exports.WlBookProcessQuizNamespace = exports.WlBookProcessInfoNamespace = void 0;
exports.ThothExplorerSearchNamespace = exports.ThothExplorerSearchClassSessionNamespace = exports.WlNamespace = exports.WlFacebookNamespace = exports.WlFacebookLoginNamespace = exports.WlSocialNamespace = exports.WlSocialShareNamespace = exports.WlGymNamespace = exports.WlGymVisitNamespace = exports.WlSearchNamespace = exports.WlSearchTagNamespace = exports.WlFamilyNamespace = exports.WlFamilyRelationNamespace = exports.WlDiscountNamespace = exports.WlDiscountCodeNamespace = exports.WlDiscountCodeEditNamespace = exports.WlCouponNamespace = exports.WlCouponCouponListNamespace = exports.WlShopNamespace = exports.WlShopProductNamespace = exports.WlShopProductOptionNamespace = exports.WlShopProductOptionInventoryNamespace = exports.WlShopProductOptionInventoryCountNamespace = exports.WlShopCategoryNamespace = exports.WlMicrosoftNamespace = exports.WlMicrosoftLoginNamespace = exports.WlAiAgentNamespace = exports.WlAiAgentLinkNamespace = exports.WlIntegrationNamespace = exports.WlIntegrationDragonFlyNamespace = exports.WlIntegrationCurvesNamespace = exports.WlIntegrationSamlNamespace = exports.WlIntegrationAutymateNamespace = exports.WlUserNamespace = exports.WlUserInfoNamespace = exports.WlUserReferrerNamespace = exports.WlInsuranceNamespace = exports.WlInsuranceEnrollmentNamespace = exports.WlInsuranceEnrollmentFieldNamespace = exports.WlInsuranceCatalogNamespace = exports.WlRewardNamespace = exports.WlRewardPrizeNamespace = exports.WlRewardBoardNamespace = exports.WlRewardBoardBoardListNamespace = exports.WlRewardActionNamespace = exports.WlRewardActionCategoryListNamespace = exports.WlRewardScoreNamespace = exports.WlRewardScoreCurrentNamespace = exports.WlCatalogNamespace = exports.WlCatalogStaffAppNamespace = void 0;
exports.WlClient = exports.ThothNamespace = exports.ThothWlPayNamespace = exports.ThothWlPayTransactionNamespace = exports.ThothWlPayTransactionReportNamespace = exports.ThothWlPayBankNamespace = exports.ThothWlPayBankCardNamespace = exports.ThothWlPayBankCardAddNamespace = exports.ThothWlPayAddressNamespace = exports.ThothWlPayMethodNamespace = exports.ThothWlPayOwnerNamespace = exports.ThothWlPayAccountNamespace = exports.ThothWlPayAccountChargeNamespace = exports.ThothWlPayFormNamespace = exports.ThothReportCoreNamespace = exports.ThothReportCoreGeneratorNamespace = void 0;
class WlApiError extends Error {
    constructor(status, body) {
        super('WlSdk: HTTP ' + status);
        this.name = 'WlApiError';
        this.status = status;
        const data = body;
        this.errors = (data != null && data.a_error != null) ? data.a_error : [];
    }
}
exports.WlApiError = WlApiError;
// --- Enum types (176 total) ---
/** A list of locales. */
var CoreLocaleLocaleSid;
(function (CoreLocaleLocaleSid) {
    /** Australia */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["AUSTRALIA"] = 4] = "AUSTRALIA";
    /** Bahamas */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["BAHAMAS"] = 20] = "BAHAMAS";
    /** Bermuda */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["BERMUDA"] = 19] = "BERMUDA";
    /** Canada */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["CANADA"] = 2] = "CANADA";
    /** Cayman Islands */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["CAYMAN"] = 5] = "CAYMAN";
    /** Cyprus */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["CYPRUS"] = 13] = "CYPRUS";
    /** Egypt */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["EGYPT"] = 8] = "EGYPT";
    /** Republic of Ireland */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["IRELAND"] = 18] = "IRELAND";
    /** Kuwait */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["KUWAIT"] = 14] = "KUWAIT";
    /** Republic of Mauritius */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["MAURITIUS"] = 16] = "MAURITIUS";
    /** A special locale that can be used for testing or a business situated in an unknown region */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["NEVERLAND"] = 9] = "NEVERLAND";
    /** New Zealand */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["NEW_ZEALAND"] = 10] = "NEW_ZEALAND";
    /** Philippines */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["PHILIPPINES"] = 12] = "PHILIPPINES";
    /** Saudi Arabia */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["SAUDI_ARABIA"] = 15] = "SAUDI_ARABIA";
    /** Senegal */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["SENEGAL"] = 17] = "SENEGAL";
    /** Singapore */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["SINGAPORE"] = 21] = "SINGAPORE";
    /** South Africa */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["SOUTH_AFRICA"] = 6] = "SOUTH_AFRICA";
    /** United Arab Emirates */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["UAE"] = 11] = "UAE";
    /** United Kingdom */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["UK"] = 3] = "UK";
    /** United States of America */
    CoreLocaleLocaleSid[CoreLocaleLocaleSid["USA"] = 1] = "USA";
})(CoreLocaleLocaleSid || (exports.CoreLocaleLocaleSid = CoreLocaleLocaleSid = {}));
/** List of Google reCaptcha versions. */
var CoreGoogleCaptchaCaptchaVersionSid;
(function (CoreGoogleCaptchaCaptchaVersionSid) {
    /** Version 2 (invisible) */
    CoreGoogleCaptchaCaptchaVersionSid[CoreGoogleCaptchaCaptchaVersionSid["V2"] = 1] = "V2";
    /** Version 3 */
    CoreGoogleCaptchaCaptchaVersionSid[CoreGoogleCaptchaCaptchaVersionSid["V3"] = 2] = "V3";
})(CoreGoogleCaptchaCaptchaVersionSid || (exports.CoreGoogleCaptchaCaptchaVersionSid = CoreGoogleCaptchaCaptchaVersionSid = {}));
/** A list of task statuses. */
var WlTaskTaskStatusSid;
(function (WlTaskTaskStatusSid) {
    /** Task is not started */
    WlTaskTaskStatusSid[WlTaskTaskStatusSid["BACKLOG"] = 1] = "BACKLOG";
    /** Task completed */
    WlTaskTaskStatusSid[WlTaskTaskStatusSid["COMPLETE"] = 3] = "COMPLETE";
    /** Task in progress */
    WlTaskTaskStatusSid[WlTaskTaskStatusSid["PROGRESS"] = 2] = "PROGRESS";
})(WlTaskTaskStatusSid || (exports.WlTaskTaskStatusSid = WlTaskTaskStatusSid = {}));
/** Class to work with gender string identifiers. */
var WlGenderGenderSid;
(function (WlGenderGenderSid) {
    /** Female gender */
    WlGenderGenderSid[WlGenderGenderSid["FEMALE"] = 2] = "FEMALE";
    /** Male gender */
    WlGenderGenderSid[WlGenderGenderSid["MALE"] = 1] = "MALE";
    /** Gender is undefined in cases where the user preferred not to identify their gender */
    WlGenderGenderSid[WlGenderGenderSid["UNDEFINED"] = 3] = "UNDEFINED";
})(WlGenderGenderSid || (exports.WlGenderGenderSid = WlGenderGenderSid = {}));
/** Lists statuses of reports from point of view of its generation. */
var ThothReportCoreGeneratorReportGeneratorStatusSid;
(function (ThothReportCoreGeneratorReportGeneratorStatusSid) {
    /** Report is in an inconsistent state */
    ThothReportCoreGeneratorReportGeneratorStatusSid[ThothReportCoreGeneratorReportGeneratorStatusSid["ABORTED"] = 6] = "ABORTED";
    /** Current operation is being aborted now */
    ThothReportCoreGeneratorReportGeneratorStatusSid[ThothReportCoreGeneratorReportGeneratorStatusSid["ABORTING"] = 5] = "ABORTING";
    /** This report is being deleted now */
    ThothReportCoreGeneratorReportGeneratorStatusSid[ThothReportCoreGeneratorReportGeneratorStatusSid["DELETING"] = 4] = "DELETING";
    /** This report is being generated now */
    ThothReportCoreGeneratorReportGeneratorStatusSid[ThothReportCoreGeneratorReportGeneratorStatusSid["GENERATING"] = 2] = "GENERATING";
    /** Generation of this report is queued */
    ThothReportCoreGeneratorReportGeneratorStatusSid[ThothReportCoreGeneratorReportGeneratorStatusSid["QUEUED"] = 1] = "QUEUED";
    /** Generation of this report is now completed */
    ThothReportCoreGeneratorReportGeneratorStatusSid[ThothReportCoreGeneratorReportGeneratorStatusSid["READY"] = 3] = "READY";
})(ThothReportCoreGeneratorReportGeneratorStatusSid || (exports.ThothReportCoreGeneratorReportGeneratorStatusSid = ThothReportCoreGeneratorReportGeneratorStatusSid = {}));
/** A list of reports. */
var RsReportSid;
(function (RsReportSid) {
    /** Report with list of canceled appointments */
    RsReportSid[RsReportSid["APPOINTMENT_CANCEL"] = 163] = "APPOINTMENT_CANCEL";
    /** Report with list of requested appointments */
    RsReportSid[RsReportSid["APPOINTMENT_REQUEST"] = 54] = "APPOINTMENT_REQUEST";
    /** Report with list of requested appointments */
    RsReportSid[RsReportSid["APPOINTMENT_REQUEST_SHORT"] = 55] = "APPOINTMENT_REQUEST_SHORT";
    /** Booking metric */
    RsReportSid[RsReportSid["BOOK_METRIC_CHART"] = 204] = "BOOK_METRIC_CHART";
    /** Report about revenue for application */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_APPLICATION"] = 117] = "BUSINESS_ACCOUNT_APPLICATION";
    /** Report with the list of 'Annual Application Fees' transactions */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_APPLICATION_ANNUAL"] = 135] = "BUSINESS_ACCOUNT_APPLICATION_ANNUAL";
    /** Report about first paid application subscription */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_APPLICATION_NEW"] = 221] = "BUSINESS_ACCOUNT_APPLICATION_NEW";
    /** Report with the list of customers lost during the period */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_CHURN"] = 81] = "BUSINESS_ACCOUNT_CHURN";
    /** Gift card usages */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_COUPON"] = 237] = "BUSINESS_ACCOUNT_COUPON";
    /** The number of WellnessLiving customers */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_CUSTOMER"] = 84] = "BUSINESS_ACCOUNT_CUSTOMER";
    /** The number of WellnessLiving customers during the selected period */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_CUSTOMER_BEGIN"] = 85] = "BUSINESS_ACCOUNT_CUSTOMER_BEGIN";
    /** The list of all locations from WellnessLiving customers during the selected period including */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_CUSTOMER_LOCATION"] = 244] = "BUSINESS_ACCOUNT_CUSTOMER_LOCATION";
    /** Report with the list of customers that has failed payments */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_DEBT"] = 105] = "BUSINESS_ACCOUNT_DEBT";
    /** Report with list of changes to business account settings */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_LOG"] = 248] = "BUSINESS_ACCOUNT_LOG";
    /** Report with list of changes to business account settings */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_LOG_ALL"] = 267] = "BUSINESS_ACCOUNT_LOG_ALL";
    /** Report with the list of all payments from businesses to Wellnessliving Inc */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_REVENUE"] = 227] = "BUSINESS_ACCOUNT_REVENUE";
    /** Report with the list of all subscription payments */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_REVENUE_SUBSCRIPTION"] = 222] = "BUSINESS_ACCOUNT_REVENUE_SUBSCRIPTION";
    /** Report with taxes of all payments from businesses */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_REVENUE_TAX"] = 236] = "BUSINESS_ACCOUNT_REVENUE_TAX";
    /** Report with list of previous payments for business account */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_SCHEDULE_PREVIOUS"] = 251] = "BUSINESS_ACCOUNT_SCHEDULE_PREVIOUS";
    /** Report with list of future payments for business account */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_SCHEDULE_UPCOMING"] = 252] = "BUSINESS_ACCOUNT_SCHEDULE_UPCOMING";
    /** Skipped customers (who skipped business subscription payment) */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_SKIP"] = 98] = "BUSINESS_ACCOUNT_SKIP";
    /** Report with business subscription information */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_SUBSCRIPTION"] = 254] = "BUSINESS_ACCOUNT_SUBSCRIPTION";
    /** Report with business subscription information for churned businesses */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_SUBSCRIPTION_CHURN"] = 256] = "BUSINESS_ACCOUNT_SUBSCRIPTION_CHURN";
    /** Report with the list of 'Annual merchant processing fees' and 'Annual PCI fees' transactions */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_TRANSACTION_ANNUAL"] = 100] = "BUSINESS_ACCOUNT_TRANSACTION_ANNUAL";
    /** Report with the list of bonus transactions */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_TRANSACTION_BONUS"] = 88] = "BUSINESS_ACCOUNT_TRANSACTION_BONUS";
    /** Report with the list of 'Direct Connect Bonuses' transactions */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_TRANSACTION_BONUS_DIRECT"] = 114] = "BUSINESS_ACCOUNT_TRANSACTION_BONUS_DIRECT";
    /** Report with the list of failed transactions */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_TRANSACTION_FAIL"] = 87] = "BUSINESS_ACCOUNT_TRANSACTION_FAIL";
    /** Report with the list of 'Optimal Merchant' transactions */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_TRANSACTION_MERCHANT_REVENUE"] = 95] = "BUSINESS_ACCOUNT_TRANSACTION_MERCHANT_REVENUE";
    /** Report with the list of 'NMI' transactions */
    RsReportSid[RsReportSid["BUSINESS_ACCOUNT_TRANSACTION_NMI"] = 89] = "BUSINESS_ACCOUNT_TRANSACTION_NMI";
    /** Report with the list of all businesses */
    RsReportSid[RsReportSid["BUSINESS_ALL"] = 107] = "BUSINESS_ALL";
    /** Achieve clients metric */
    RsReportSid[RsReportSid["BUSINESS_APPLICATION_METRIC_CHART"] = 208] = "BUSINESS_APPLICATION_METRIC_CHART";
    /** Report with the list of 'MP Approval Fee' transactions */
    RsReportSid[RsReportSid["BUSINESS_CHARGE_APPROVAL"] = 90] = "BUSINESS_CHARGE_APPROVAL";
    /** Report with the list of 'Credit Card Import Fees' transactions */
    RsReportSid[RsReportSid["BUSINESS_CHARGE_CCIMPORT"] = 91] = "BUSINESS_CHARGE_CCIMPORT";
    /** Report with the list of 'Early Termination' transactions */
    RsReportSid[RsReportSid["BUSINESS_CHARGE_EARLY"] = 104] = "BUSINESS_CHARGE_EARLY";
    /** Report with the list of 'Hardware' transactions */
    RsReportSid[RsReportSid["BUSINESS_CHARGE_HARDWARE"] = 92] = "BUSINESS_CHARGE_HARDWARE";
    /** Report with the list of 'OTHER' transactions */
    RsReportSid[RsReportSid["BUSINESS_CHARGE_OTHER"] = 96] = "BUSINESS_CHARGE_OTHER";
    /** Report with the list of 'Set Up Fees' transactions */
    RsReportSid[RsReportSid["BUSINESS_CHARGE_SETUP"] = 93] = "BUSINESS_CHARGE_SETUP";
    /** Report with list of customers' churn status history */
    RsReportSid[RsReportSid["BUSINESS_CUSTOMER_STATUS_HISTORY"] = 226] = "BUSINESS_CUSTOMER_STATUS_HISTORY";
    /** Report with list of customers' statuses */
    RsReportSid[RsReportSid["BUSINESS_CUSTOMER_STATUS_LOCATION"] = 225] = "BUSINESS_CUSTOMER_STATUS_LOCATION";
    /** List of franchisee business hours */
    RsReportSid[RsReportSid["BUSINESS_FRANCHISE_HOURS"] = 247] = "BUSINESS_FRANCHISE_HOURS";
    /** List of franchisee locations */
    RsReportSid[RsReportSid["BUSINESS_FRANCHISE_LOCATION"] = 141] = "BUSINESS_FRANCHISE_LOCATION";
    /** List of franchise region */
    RsReportSid[RsReportSid["BUSINESS_FRANCHISE_REGION_LIST"] = 142] = "BUSINESS_FRANCHISE_REGION_LIST";
    /** Saba files report */
    RsReportSid[RsReportSid["BUSINESS_FRANCHISE_REPORT_CURVES_SABA"] = 219] = "BUSINESS_FRANCHISE_REPORT_CURVES_SABA";
    /** Report with list of customer leads */
    RsReportSid[RsReportSid["BUSINESS_LEAD"] = 125] = "BUSINESS_LEAD";
    /** The number of unique merchant accounts that have processed more than $100 from the beginning */
    RsReportSid[RsReportSid["BUSINESS_MERCHANT_PROCESS"] = 82] = "BUSINESS_MERCHANT_PROCESS";
    /** The number of unique merchant accounts that processed greater than $100 for the first time during the selected period */
    RsReportSid[RsReportSid["BUSINESS_MERCHANT_PROCESS_BEGIN"] = 83] = "BUSINESS_MERCHANT_PROCESS_BEGIN";
    /** Report with list of business having active Sms subscription */
    RsReportSid[RsReportSid["BUSINESS_MESSAGE"] = 260] = "BUSINESS_MESSAGE";
    /** WellnessLiving Key Metrics */
    RsReportSid[RsReportSid["BUSINESS_METRIC"] = 94] = "BUSINESS_METRIC";
    /** Report with amount that should be paid to partners for their referrals */
    RsReportSid[RsReportSid["BUSINESS_PARTNER_PAY"] = 126] = "BUSINESS_PARTNER_PAY";
    /** Report with list of all referrals of the given business */
    RsReportSid[RsReportSid["BUSINESS_PARTNER_REFERRAL_DETAIL"] = 128] = "BUSINESS_PARTNER_REFERRAL_DETAIL";
    /** Report with list of all businesses which gave us at least one new customer */
    RsReportSid[RsReportSid["BUSINESS_PARTNER_REFERRAL_SUMMARY"] = 129] = "BUSINESS_PARTNER_REFERRAL_SUMMARY";
    /** Report which allows to view list of classes that starts or ends within specific date range */
    RsReportSid[RsReportSid["CLASSES_SCHEDULE"] = 127] = "CLASSES_SCHEDULE";
    /** Class capacity utilization metric */
    RsReportSid[RsReportSid["CLASSES_UTILIZATION_CHART"] = 205] = "CLASSES_UTILIZATION_CHART";
    /** History of a contacts with clients */
    RsReportSid[RsReportSid["CONTACT_MEMBER_HISTORY"] = 110] = "CONTACT_MEMBER_HISTORY";
    /** History of a contacts for one certain client */
    RsReportSid[RsReportSid["CONTACT_MEMBER_HISTORY_USER"] = 152] = "CONTACT_MEMBER_HISTORY_USER";
    /** Event capacity utilization metric */
    RsReportSid[RsReportSid["EVENT_UTILIZATION_CHART"] = 215] = "EVENT_UTILIZATION_CHART";
    /** List of all relatives in the business */
    RsReportSid[RsReportSid["FAMILY_ALL"] = 134] = "FAMILY_ALL";
    /** Franchise membership transfer history report */
    RsReportSid[RsReportSid["FRANCHISE_TRANSFER_MEMBERSHIP_HISTORY_LIST"] = 159] = "FRANCHISE_TRANSFER_MEMBERSHIP_HISTORY_LIST";
    /** Franchise membership requested transfers report */
    RsReportSid[RsReportSid["FRANCHISE_TRANSFER_MEMBERSHIP_REQUESTED_LIST"] = 160] = "FRANCHISE_TRANSFER_MEMBERSHIP_REQUESTED_LIST";
    /** Report to view list of locations with gympass integration status */
    RsReportSid[RsReportSid["GYMPASS_LOCATION"] = 266] = "GYMPASS_LOCATION";
    /** List of all link that import could not process correctly even after max count of attempts */
    RsReportSid[RsReportSid["IMPORT_MIGRATION_COMPANY_URL_FAIL"] = 121] = "IMPORT_MIGRATION_COMPANY_URL_FAIL";
    /** A list of imported visits */
    RsReportSid[RsReportSid["IMPORT_MIGRATION_COMPANY_VISIT_LIST"] = 220] = "IMPORT_MIGRATION_COMPANY_VISIT_LIST";
    /** "Wellness Program" report on user profile */
    RsReportSid[RsReportSid["INSURANCE_PROFILE_PROGRAM"] = 181] = "INSURANCE_PROFILE_PROGRAM";
    /** Detail wellness program report on user profile */
    RsReportSid[RsReportSid["INSURANCE_PROFILE_PROGRAM_DETAIL"] = 184] = "INSURANCE_PROFILE_PROGRAM_DETAIL";
    /** List of clients, which got reimbursement */
    RsReportSid[RsReportSid["INSURANCE_REIMBURSEMENT_DETAIL"] = 183] = "INSURANCE_REIMBURSEMENT_DETAIL";
    /** List of clients, which got reimbursement */
    RsReportSid[RsReportSid["INSURANCE_REIMBURSEMENT_FRANCHISE_DETAIL"] = 217] = "INSURANCE_REIMBURSEMENT_FRANCHISE_DETAIL";
    /** Total amounts of reimbursement by partner */
    RsReportSid[RsReportSid["INSURANCE_REIMBURSEMENT_FRANCHISE_SUMMARY"] = 218] = "INSURANCE_REIMBURSEMENT_FRANCHISE_SUMMARY";
    /** List of partner, which support reimbursement export and import */
    RsReportSid[RsReportSid["INSURANCE_REIMBURSEMENT_REBATE_FILE"] = 233] = "INSURANCE_REIMBURSEMENT_REBATE_FILE";
    /** Total amounts of reimbursement by partner */
    RsReportSid[RsReportSid["INSURANCE_REIMBURSEMENT_SUMMARY"] = 182] = "INSURANCE_REIMBURSEMENT_SUMMARY";
    /** Isaac control report */
    RsReportSid[RsReportSid["ISAAC_CONTROL"] = 241] = "ISAAC_CONTROL";
    /** Franchise leads from lead capture forms. Chart representation */
    RsReportSid[RsReportSid["LEAD_FRANCHISE_REPORT_CHART"] = 173] = "LEAD_FRANCHISE_REPORT_CHART";
    /** Franchise leads from lead capture forms. Table representation */
    RsReportSid[RsReportSid["LEAD_FRANCHISE_REPORT_LIST"] = 167] = "LEAD_FRANCHISE_REPORT_LIST";
    /** Franchise leads from lead capture forms. Year-by-year chart representation */
    RsReportSid[RsReportSid["LEAD_FRANCHISE_REPORT_YOY"] = 176] = "LEAD_FRANCHISE_REPORT_YOY";
    /** Leads from lead capture forms */
    RsReportSid[RsReportSid["LEAD_LIST"] = 42] = "LEAD_LIST";
    /** New leads metric */
    RsReportSid[RsReportSid["LEAD_NEWEST_METRIC_CHART"] = 200] = "LEAD_NEWEST_METRIC_CHART";
    /** New leads YOY metric */
    RsReportSid[RsReportSid["LEAD_NEWEST_METRIC_YOY"] = 203] = "LEAD_NEWEST_METRIC_YOY";
    /** Leads from lead capture forms */
    RsReportSid[RsReportSid["LEAD_REPORT_CHART"] = 166] = "LEAD_REPORT_CHART";
    /** List of market locations */
    RsReportSid[RsReportSid["LOCATION_MARKET"] = 35] = "LOCATION_MARKET";
    /** Log report of staff activity */
    RsReportSid[RsReportSid["LOG"] = 136] = "LOG";
    /** List of clients with information about account state */
    RsReportSid[RsReportSid["LOGIN_ACCOUNT"] = 43] = "LOGIN_ACCOUNT";
    /** List of clients with upcoming birthdays within a specified date range */
    RsReportSid[RsReportSid["LOGIN_BIRTHDAY"] = 75] = "LOGIN_BIRTHDAY";
    /** For the past 4 years, shows the number of clients whose */
    RsReportSid[RsReportSid["LOGIN_CLIENT_NEWEST_METRIC_CHART"] = 199] = "LOGIN_CLIENT_NEWEST_METRIC_CHART";
    /** List of all Gift Cards purchased */
    RsReportSid[RsReportSid["LOGIN_COUPON"] = 76] = "LOGIN_COUPON";
    /** Detail franchise client report table */
    RsReportSid[RsReportSid["LOGIN_FRANCHISE_DETAIL_LIST"] = 156] = "LOGIN_FRANCHISE_DETAIL_LIST";
    /** Franchise client status report table */
    RsReportSid[RsReportSid["LOGIN_FRANCHISE_STATUS_LIST"] = 162] = "LOGIN_FRANCHISE_STATUS_LIST";
    /** Login list */
    RsReportSid[RsReportSid["LOGIN_LIST"] = 22] = "LOGIN_LIST";
    /** Login list all */
    RsReportSid[RsReportSid["LOGIN_LIST_ALL"] = 33] = "LOGIN_LIST_ALL";
    /** Report with conversions of Login Types */
    RsReportSid[RsReportSid["LOGIN_MEMBER_TYPE_HISTORY"] = 122] = "LOGIN_MEMBER_TYPE_HISTORY";
    /** Report "Client Data" */
    RsReportSid[RsReportSid["LOGIN_PROFILE"] = 72] = "LOGIN_PROFILE";
    /** Report about client's ranks */
    RsReportSid[RsReportSid["LOGIN_RANK"] = 40] = "LOGIN_RANK";
    /** List of clients that are at churn risk according to isaac prediction */
    RsReportSid[RsReportSid["LOGIN_RISK"] = 261] = "LOGIN_RISK";
    /** Report with client's attendance history */
    RsReportSid[RsReportSid["LOGIN_VISIT"] = 52] = "LOGIN_VISIT";
    /** Count of sent mail and sms per business */
    RsReportSid[RsReportSid["MAIL_BUSINESS_LIST"] = 46] = "MAIL_BUSINESS_LIST";
    /** Mail campaign details list report */
    RsReportSid[RsReportSid["MAIL_CAMPAIGN_DETAIL"] = 37] = "MAIL_CAMPAIGN_DETAIL";
    /** Mail campaign history list report */
    RsReportSid[RsReportSid["MAIL_CAMPAIGN_LIST"] = 36] = "MAIL_CAMPAIGN_LIST";
    /** Mail history list report */
    RsReportSid[RsReportSid["MAIL_HISTORY_LIST"] = 38] = "MAIL_HISTORY_LIST";
    /** Member progress body fat report in chart view */
    RsReportSid[RsReportSid["MEMBER_PROGRESS_LOG_BODY_FAT"] = 149] = "MEMBER_PROGRESS_LOG_BODY_FAT";
    /** Member progress report collection for charts */
    RsReportSid[RsReportSid["MEMBER_PROGRESS_LOG_CHART"] = 146] = "MEMBER_PROGRESS_LOG_CHART";
    /** Report with list of progress log per client */
    RsReportSid[RsReportSid["MEMBER_PROGRESS_LOG_CLIENT"] = 150] = "MEMBER_PROGRESS_LOG_CLIENT";
    /** Member progress main report in table view */
    RsReportSid[RsReportSid["MEMBER_PROGRESS_LOG_LIST"] = 147] = "MEMBER_PROGRESS_LOG_LIST";
    /** Member progress report collection for table */
    RsReportSid[RsReportSid["MEMBER_PROGRESS_LOG_TABLE"] = 145] = "MEMBER_PROGRESS_LOG_TABLE";
    /** Member progress weight report in chart view */
    RsReportSid[RsReportSid["MEMBER_PROGRESS_LOG_WEIGHT"] = 148] = "MEMBER_PROGRESS_LOG_WEIGHT";
    /** List of clients' credit cards with expiration date */
    RsReportSid[RsReportSid["PAY_BANK_CARD_EXPIRE"] = 44] = "PAY_BANK_CARD_EXPIRE";
    /** Total Sum Processed by all Businesses */
    RsReportSid[RsReportSid["PAY_METHOD_BUSINESS"] = 235] = "PAY_METHOD_BUSINESS";
    /** Total Sum Processed from all Businesses to wellnessliving */
    RsReportSid[RsReportSid["PAY_METHOD_SYSTEM"] = 78] = "PAY_METHOD_SYSTEM";
    /** Processing per Business with Login Date */
    RsReportSid[RsReportSid["PAY_METHOD_SYSTEM_LOGIN"] = 242] = "PAY_METHOD_SYSTEM_LOGIN";
    /** A report to track history of refunds */
    RsReportSid[RsReportSid["PAY_REFUND"] = 45] = "PAY_REFUND";
    /** A list of payment transactions that are in the NMI batches */
    RsReportSid[RsReportSid["PAY_TRANSACTION_BATCH"] = 77] = "PAY_TRANSACTION_BATCH";
    /** List of Cash Outs */
    RsReportSid[RsReportSid["PAY_TRANSACTION_CASH"] = 113] = "PAY_TRANSACTION_CASH";
    /** If the report is opened in backend it shows a list of transactions for the current business */
    RsReportSid[RsReportSid["PAY_TRANSACTION_LIST"] = 34] = "PAY_TRANSACTION_LIST";
    /** If the report is opened in backend it shows a list of transactions for the current business */
    RsReportSid[RsReportSid["PAY_TRANSACTION_SUM"] = 119] = "PAY_TRANSACTION_SUM";
    /** Revenue Report for WellnessLiving Accounting */
    RsReportSid[RsReportSid["PAY_TRANSACTION_SYSTEM_ALL"] = 79] = "PAY_TRANSACTION_SYSTEM_ALL";
    /** If the report is opened in backend it shows a list of system transactions for the current business */
    RsReportSid[RsReportSid["PAY_TRANSACTION_SYSTEM_LIST"] = 62] = "PAY_TRANSACTION_SYSTEM_LIST";
    /** Revenue Report for WellnessLiving Accounting */
    RsReportSid[RsReportSid["PAY_TRANSACTION_SYSTEM_REFUND"] = 106] = "PAY_TRANSACTION_SYSTEM_REFUND";
    /** Sum of all transactions from businesses to system merchants */
    RsReportSid[RsReportSid["PAY_TRANSACTION_SYSTEM_SUMMARY"] = 143] = "PAY_TRANSACTION_SYSTEM_SUMMARY";
    /** If the report is opened in backend it shows a list of transactions for the one given user in the current business */
    RsReportSid[RsReportSid["PAY_TRANSACTION_USER"] = 120] = "PAY_TRANSACTION_USER";
    /** This report is available for user in client app */
    RsReportSid[RsReportSid["PAY_TRANSACTION_USER_CLIENT"] = 253] = "PAY_TRANSACTION_USER_CLIENT";
    /** Postcard history list report */
    RsReportSid[RsReportSid["POSTCARD_HISTORY"] = 103] = "POSTCARD_HISTORY";
    /** Attendance history report in frontend */
    RsReportSid[RsReportSid["PROFILE_ATTENDANCE_SCHEDULE_FRONTEND_HISTORY"] = 180] = "PROFILE_ATTENDANCE_SCHEDULE_FRONTEND_HISTORY";
    /** Upcoming schedule report in frontend */
    RsReportSid[RsReportSid["PROFILE_ATTENDANCE_SCHEDULE_FRONTEND_UPCOMING"] = 179] = "PROFILE_ATTENDANCE_SCHEDULE_FRONTEND_UPCOMING";
    /** Attendance history report */
    RsReportSid[RsReportSid["PROFILE_ATTENDANCE_SCHEDULE_HISTORY"] = 178] = "PROFILE_ATTENDANCE_SCHEDULE_HISTORY";
    /** Attendance history report for given login promotion */
    RsReportSid[RsReportSid["PROFILE_ATTENDANCE_SCHEDULE_LOGIN_PROMOTION_HISTORY"] = 262] = "PROFILE_ATTENDANCE_SCHEDULE_LOGIN_PROMOTION_HISTORY";
    /** Upcoming schedule report for given login promotion */
    RsReportSid[RsReportSid["PROFILE_ATTENDANCE_SCHEDULE_LOGIN_PROMOTION_UPCOMING"] = 263] = "PROFILE_ATTENDANCE_SCHEDULE_LOGIN_PROMOTION_UPCOMING";
    /** Upcoming schedule report */
    RsReportSid[RsReportSid["PROFILE_ATTENDANCE_SCHEDULE_UPCOMING"] = 177] = "PROFILE_ATTENDANCE_SCHEDULE_UPCOMING";
    /** Contract list report in client profile */
    RsReportSid[RsReportSid["PROFILE_CONTRACT_LIST"] = 255] = "PROFILE_CONTRACT_LIST";
    /** Report to view list of responses for specific user in client profile */
    RsReportSid[RsReportSid["PROFILE_FORM_RESPONSE"] = 265] = "PROFILE_FORM_RESPONSE";
    /** Gift Card report in client profile */
    RsReportSid[RsReportSid["PROFILE_PURCHASE_REPORT_COUPON"] = 193] = "PROFILE_PURCHASE_REPORT_COUPON";
    /** Session Pass report in client profile */
    RsReportSid[RsReportSid["PROFILE_PURCHASE_REPORT_EVENT"] = 192] = "PROFILE_PURCHASE_REPORT_EVENT";
    /** Groupon report in client profile */
    RsReportSid[RsReportSid["PROFILE_PURCHASE_REPORT_GROUPON"] = 213] = "PROFILE_PURCHASE_REPORT_GROUPON";
    /** Membership report in client profile */
    RsReportSid[RsReportSid["PROFILE_PURCHASE_REPORT_MEMBERSHIP"] = 188] = "PROFILE_PURCHASE_REPORT_MEMBERSHIP";
    /** Package report in client profile */
    RsReportSid[RsReportSid["PROFILE_PURCHASE_REPORT_PACKAGE"] = 189] = "PROFILE_PURCHASE_REPORT_PACKAGE";
    /** Duration Pass report in client profile */
    RsReportSid[RsReportSid["PROFILE_PURCHASE_REPORT_SESSION_DURATION"] = 190] = "PROFILE_PURCHASE_REPORT_SESSION_DURATION";
    /** Session Pass report in client profile */
    RsReportSid[RsReportSid["PROFILE_PURCHASE_REPORT_SESSION_PASS"] = 191] = "PROFILE_PURCHASE_REPORT_SESSION_PASS";
    /** Single Session report in client profile */
    RsReportSid[RsReportSid["PROFILE_PURCHASE_REPORT_SESSION_SINGLE"] = 194] = "PROFILE_PURCHASE_REPORT_SESSION_SINGLE";
    /** Intro offers metric */
    RsReportSid[RsReportSid["PROMOTION_INTRODUCTORY_METRIC_CHART"] = 206] = "PROMOTION_INTRODUCTORY_METRIC_CHART";
    /** Shows list of memberships with negative balances */
    RsReportSid[RsReportSid["PROMOTION_MEMBERSHIP_NEGATIVE"] = 130] = "PROMOTION_MEMBERSHIP_NEGATIVE";
    /** Shows list of pricing options from that were imported mindbody and converted into memberships */
    RsReportSid[RsReportSid["PROMOTION_PASS_MEMBERSHIP"] = 108] = "PROMOTION_PASS_MEMBERSHIP";
    /** A list of payment transactions including scheduled transaction (recurrent payments for memberships and renewals of */
    RsReportSid[RsReportSid["PURCHASE_AUTO_LIST"] = 60] = "PURCHASE_AUTO_LIST";
    /** Report with list of sales per client */
    RsReportSid[RsReportSid["PURCHASE_CLIENT_SUMMARY"] = 115] = "PURCHASE_CLIENT_SUMMARY";
    /** Summary franchise memberships report (chart view) */
    RsReportSid[RsReportSid["PURCHASE_FRANCHISE_MEMBERSHIP_CHART"] = 175] = "PURCHASE_FRANCHISE_MEMBERSHIP_CHART";
    /** Summary franchise memberships report */
    RsReportSid[RsReportSid["PURCHASE_FRANCHISE_MEMBERSHIP_DETAIL"] = 257] = "PURCHASE_FRANCHISE_MEMBERSHIP_DETAIL";
    /** Summary franchise memberships report */
    RsReportSid[RsReportSid["PURCHASE_FRANCHISE_MEMBERSHIP_LIST"] = 174] = "PURCHASE_FRANCHISE_MEMBERSHIP_LIST";
    /** Purchases that have been bought divided by payment methods */
    RsReportSid[RsReportSid["PURCHASE_ITEM_ACCRUAL_CASH"] = 123] = "PURCHASE_ITEM_ACCRUAL_CASH";
    /** Purchases that have been bought divided by time */
    RsReportSid[RsReportSid["PURCHASE_ITEM_ACCRUAL_CASH_CHART"] = 171] = "PURCHASE_ITEM_ACCRUAL_CASH_CHART";
    /** Special quick purchases report for migration */
    RsReportSid[RsReportSid["PURCHASE_ITEM_ACCRUAL_MIGRATION"] = 132] = "PURCHASE_ITEM_ACCRUAL_MIGRATION";
    /** Summaries of the sales divided by days, months or years */
    RsReportSid[RsReportSid["PURCHASE_ITEM_ACCRUAL_SUMMARY"] = 133] = "PURCHASE_ITEM_ACCRUAL_SUMMARY";
    /** Purchase item count */
    RsReportSid[RsReportSid["PURCHASE_ITEM_COUNT"] = 27] = "PURCHASE_ITEM_COUNT";
    /** Purchase item count product */
    RsReportSid[RsReportSid["PURCHASE_ITEM_COUNT_PRODUCT"] = 50] = "PURCHASE_ITEM_COUNT_PRODUCT";
    /** Purchase item count revenue */
    RsReportSid[RsReportSid["PURCHASE_ITEM_COUNT_REVENUE"] = 51] = "PURCHASE_ITEM_COUNT_REVENUE";
    /** Purchase item list */
    RsReportSid[RsReportSid["PURCHASE_ITEM_LIST"] = 26] = "PURCHASE_ITEM_LIST";
    /** All sales report */
    RsReportSid[RsReportSid["PURCHASE_ITEM_LIST_PRODUCT"] = 48] = "PURCHASE_ITEM_LIST_PRODUCT";
    /** Sales With Revenue Categories report */
    RsReportSid[RsReportSid["PURCHASE_ITEM_LIST_REVENUE"] = 49] = "PURCHASE_ITEM_LIST_REVENUE";
    /** List of sale for the one user */
    RsReportSid[RsReportSid["PURCHASE_ITEM_LIST_USER"] = 118] = "PURCHASE_ITEM_LIST_USER";
    /** List of memberships in chart format */
    RsReportSid[RsReportSid["PURCHASE_MEMBERSHIP_CHART"] = 165] = "PURCHASE_MEMBERSHIP_CHART";
    /** List of memberships */
    RsReportSid[RsReportSid["PURCHASE_MEMBERSHIP_LIST"] = 71] = "PURCHASE_MEMBERSHIP_LIST";
    /** Lost members metric */
    RsReportSid[RsReportSid["PURCHASE_MEMBERSHIP_METRIC_CHART"] = 198] = "PURCHASE_MEMBERSHIP_METRIC_CHART";
    /** Recurring revenue metric */
    RsReportSid[RsReportSid["PURCHASE_MEMBERSHIP_RECURRING_METRIC_CHART"] = 202] = "PURCHASE_MEMBERSHIP_RECURRING_METRIC_CHART";
    /** All sales metric */
    RsReportSid[RsReportSid["PURCHASE_METRIC_CHART"] = 195] = "PURCHASE_METRIC_CHART";
    /** All sales YOY metric */
    RsReportSid[RsReportSid["PURCHASE_METRIC_YOY"] = 201] = "PURCHASE_METRIC_YOY";
    /** Report with list of sales grouped by purchase options. Products and drop-ins are not included */
    RsReportSid[RsReportSid["PURCHASE_OPTION_SUMMARY"] = 109] = "PURCHASE_OPTION_SUMMARY";
    /** Purchase tag count */
    RsReportSid[RsReportSid["PURCHASE_TAG_COUNT"] = 30] = "PURCHASE_TAG_COUNT";
    /** Purchase tag list */
    RsReportSid[RsReportSid["PURCHASE_TAG_LIST"] = 31] = "PURCHASE_TAG_LIST";
    /** Report taxes of business in list format */
    RsReportSid[RsReportSid["PURCHASE_TAX_COUNT"] = 29] = "PURCHASE_TAX_COUNT";
    /** Report taxes of business in chart format */
    RsReportSid[RsReportSid["PURCHASE_TAX_LIST"] = 28] = "PURCHASE_TAX_LIST";
    /** List of sales with non zero tips */
    RsReportSid[RsReportSid["PURCHASE_TIP"] = 99] = "PURCHASE_TIP";
    /** Tips summary by staff */
    RsReportSid[RsReportSid["PURCHASE_TIP_SUM"] = 101] = "PURCHASE_TIP_SUM";
    /** Report to view list of responses for specific quiz */
    RsReportSid[RsReportSid["QUIZ_RESPONSE"] = 264] = "QUIZ_RESPONSE";
    /** Report with list of generated reports */
    RsReportSid[RsReportSid["REPORT_BACKGROUND_GENERATE"] = 246] = "REPORT_BACKGROUND_GENERATE";
    /** Report with list of customers reviews. Available only in business backend and contains reviews on this business */
    RsReportSid[RsReportSid["REVIEW_LIST"] = 47] = "REVIEW_LIST";
    /** Report with list of customers reviews. Available out of the backend and contains reviews on all businesses */
    RsReportSid[RsReportSid["REVIEW_ROOT"] = 53] = "REVIEW_ROOT";
    /** Report client's reward points */
    RsReportSid[RsReportSid["REWARD_BOARD"] = 56] = "REWARD_BOARD";
    /** Schedule prospect count */
    RsReportSid[RsReportSid["SCHEDULE_PROSPECT_COUNT"] = 9] = "SCHEDULE_PROSPECT_COUNT";
    /** Daily Tracker */
    RsReportSid[RsReportSid["SCHEDULE_PROSPECT_LIST"] = 10] = "SCHEDULE_PROSPECT_LIST";
    /** Report about daily booking activity special for dashboard */
    RsReportSid[RsReportSid["SCHEDULE_PROSPECT_LIST_TODAY"] = 39] = "SCHEDULE_PROSPECT_LIST_TODAY";
    /** Schedule wait list */
    RsReportSid[RsReportSid["SCHEDULE_WAIT_LIST"] = 11] = "SCHEDULE_WAIT_LIST";
    /** Products, Purchase Options and Packages with Barcode */
    RsReportSid[RsReportSid["SHOP_BARCODE"] = 102] = "SHOP_BARCODE";
    /** Inventory On Hand */
    RsReportSid[RsReportSid["SHOP_PRODUCT"] = 80] = "SHOP_PRODUCT";
    /** Physical Inventory Count */
    RsReportSid[RsReportSid["SHOP_PRODUCT_OPTION_INVENTORY_COUNT"] = 243] = "SHOP_PRODUCT_OPTION_INVENTORY_COUNT";
    /** SMS history report */
    RsReportSid[RsReportSid["SMS_HISTORY"] = 116] = "SMS_HISTORY";
    /** Social sharing details */
    RsReportSid[RsReportSid["SOCIAL_SHARE_DETAILS_LIST"] = 212] = "SOCIAL_SHARE_DETAILS_LIST";
    /** All social sharing */
    RsReportSid[RsReportSid["SOCIAL_SHARE_METRIC_CHART"] = 197] = "SOCIAL_SHARE_METRIC_CHART";
    /** Social sharing summary by user */
    RsReportSid[RsReportSid["SOCIAL_SHARE_SUMMARY_LIST"] = 214] = "SOCIAL_SHARE_SUMMARY_LIST";
    /** Chart version of {@link RsReportSid} report */
    RsReportSid[RsReportSid["STAFF_PAY_COUNT"] = 24] = "STAFF_PAY_COUNT";
    /** Report that contains detail information about staff payments for each option */
    RsReportSid[RsReportSid["STAFF_PAY_DETAIL"] = 25] = "STAFF_PAY_DETAIL";
    /** Report that contains general information about payments for each staff */
    RsReportSid[RsReportSid["STAFF_PAY_LIST"] = 23] = "STAFF_PAY_LIST";
    /** Staff retention report collection */
    RsReportSid[RsReportSid["STAFF_RETENTION"] = 137] = "STAFF_RETENTION";
    /** Staff Member New Clients Retention report */
    RsReportSid[RsReportSid["STAFF_RETENTION_CLIENT_NEW"] = 138] = "STAFF_RETENTION_CLIENT_NEW";
    /** Staff Member Repeat Clients Retention report */
    RsReportSid[RsReportSid["STAFF_RETENTION_CLIENT_REPEAT"] = 139] = "STAFF_RETENTION_CLIENT_REPEAT";
    /** Staff Member Client Retention Summary report */
    RsReportSid[RsReportSid["STAFF_RETENTION_CLIENT_SUMMARY"] = 140] = "STAFF_RETENTION_CLIENT_SUMMARY";
    /** Report that contains detailed information about staff clock-in and clock-out, total load, hourly pay rates, average */
    RsReportSid[RsReportSid["STAFF_TIME_DETAIL"] = 111] = "STAFF_TIME_DETAIL";
    /** Report that contains summary information about staff clock-in and clock-out, total load, hourly pay rates, average */
    RsReportSid[RsReportSid["STAFF_TIME_SUMMARY"] = 112] = "STAFF_TIME_SUMMARY";
    /** Staff task manager */
    RsReportSid[RsReportSid["TASK_MANAGER"] = 86] = "TASK_MANAGER";
    /** Report that contains regional taxes */
    RsReportSid[RsReportSid["TAX_REGION"] = 234] = "TAX_REGION";
    /** Report with potential client duplicates */
    RsReportSid[RsReportSid["USER_DUPLICATE"] = 185] = "USER_DUPLICATE";
    /** Report with all businesses, which has videos and count of videos and total size of the videos */
    RsReportSid[RsReportSid["VIDEO_BUSINESS_ALL"] = 239] = "VIDEO_BUSINESS_ALL";
    /** Report with all businesses, which has videos and count of videos and total size of the videos */
    RsReportSid[RsReportSid["VIDEO_BUSINESS_UPLOAD"] = 240] = "VIDEO_BUSINESS_UPLOAD";
    /** Report with all business videos and basic information about these videos */
    RsReportSid[RsReportSid["VIDEO_DETAIL"] = 238] = "VIDEO_DETAIL";
    /** Report with all business videos and detail information about these videos */
    RsReportSid[RsReportSid["VIDEO_SUMMARY"] = 250] = "VIDEO_SUMMARY";
    /** Report with all views of videos and information about a viewers */
    RsReportSid[RsReportSid["VIDEO_VIEW_DETAIL"] = 249] = "VIDEO_VIEW_DETAIL";
    /** Report with list of canceled appointments */
    RsReportSid[RsReportSid["VIRTUAL_ZOOM_USER_HISTORY"] = 245] = "VIRTUAL_ZOOM_USER_HISTORY";
    /** Controls visit appointment report in chart format */
    RsReportSid[RsReportSid["VISIT_APPOINTMENT_COUNT"] = 70] = "VISIT_APPOINTMENT_COUNT";
    /** Appointment details analysis report */
    RsReportSid[RsReportSid["VISIT_APPOINTMENT_DETAIL"] = 66] = "VISIT_APPOINTMENT_DETAIL";
    /** Appointment details analysis report */
    RsReportSid[RsReportSid["VISIT_APPOINTMENT_LIST"] = 65] = "VISIT_APPOINTMENT_LIST";
    /** List of visits in attended state */
    RsReportSid[RsReportSid["VISIT_ATTEND_LIST"] = 64] = "VISIT_ATTEND_LIST";
    /** List of visits in attended state */
    RsReportSid[RsReportSid["VISIT_ATTEND_LIST_LEGACY"] = 268] = "VISIT_ATTEND_LIST_LEGACY";
    /** Visit book count */
    RsReportSid[RsReportSid["VISIT_BOOK_COUNT"] = 4] = "VISIT_BOOK_COUNT";
    /** Visit book list */
    RsReportSid[RsReportSid["VISIT_BOOK_LIST"] = 6] = "VISIT_BOOK_LIST";
    /** Visit class average count */
    RsReportSid[RsReportSid["VISIT_CLASS_AVERAGE_COUNT"] = 20] = "VISIT_CLASS_AVERAGE_COUNT";
    /** Visit class average list */
    RsReportSid[RsReportSid["VISIT_CLASS_AVERAGE_LIST"] = 18] = "VISIT_CLASS_AVERAGE_LIST";
    /** Visit class buy */
    RsReportSid[RsReportSid["VISIT_CLASS_BUY"] = 32] = "VISIT_CLASS_BUY";
    /** Controls list report for attendance. With information about usage purchase option */
    RsReportSid[RsReportSid["VISIT_CLASS_BUY_DETAIL"] = 61] = "VISIT_CLASS_BUY_DETAIL";
    /** Controls visit class report in chart format */
    RsReportSid[RsReportSid["VISIT_CLASS_COUNT"] = 16] = "VISIT_CLASS_COUNT";
    /** Class analysis report */
    RsReportSid[RsReportSid["VISIT_CLASS_DETAIL"] = 59] = "VISIT_CLASS_DETAIL";
    /** Simplified variation of report {@link RsReportSid} */
    RsReportSid[RsReportSid["VISIT_CLASS_LIST"] = 14] = "VISIT_CLASS_LIST";
    /** Report with list of duplicated visits */
    RsReportSid[RsReportSid["VISIT_DUPLICATE"] = 131] = "VISIT_DUPLICATE";
    /** Controls visit event report in chart format */
    RsReportSid[RsReportSid["VISIT_EVENT_COUNT"] = 69] = "VISIT_EVENT_COUNT";
    /** Event details analysis report */
    RsReportSid[RsReportSid["VISIT_EVENT_DETAIL"] = 68] = "VISIT_EVENT_DETAIL";
    /** Event analysis report */
    RsReportSid[RsReportSid["VISIT_EVENT_LIST"] = 67] = "VISIT_EVENT_LIST";
    /** Old first visits report */
    RsReportSid[RsReportSid["VISIT_FIRST_COUNT"] = 3] = "VISIT_FIRST_COUNT";
    /** Old first visits report */
    RsReportSid[RsReportSid["VISIT_FIRST_LIST"] = 2] = "VISIT_FIRST_LIST";
    /** Filterable first visit list report, allowing to see first visits to certain criteria (locations/events/etc.) */
    RsReportSid[RsReportSid["VISIT_FIRST_SCOPED_COUNT"] = 224] = "VISIT_FIRST_SCOPED_COUNT";
    /** Filterable first visit list report, allowing to see first visits to certain criteria (locations/events/etc.) */
    RsReportSid[RsReportSid["VISIT_FIRST_SCOPED_LIST"] = 223] = "VISIT_FIRST_SCOPED_LIST";
    /** Detail franchise cross-location visits table for franchisee */
    RsReportSid[RsReportSid["VISIT_FRANCHISE_LOCATION_CROSS_DETAIL_FRANCHISEE"] = 186] = "VISIT_FRANCHISE_LOCATION_CROSS_DETAIL_FRANCHISEE";
    /** Detail franchise cross-location visits table */
    RsReportSid[RsReportSid["VISIT_FRANCHISE_LOCATION_CROSS_DETAIL_LIST"] = 157] = "VISIT_FRANCHISE_LOCATION_CROSS_DETAIL_LIST";
    /** Summary franchise cross-location visits chart */
    RsReportSid[RsReportSid["VISIT_FRANCHISE_LOCATION_CROSS_SUMMARY_CHART"] = 164] = "VISIT_FRANCHISE_LOCATION_CROSS_SUMMARY_CHART";
    /** Summary franchise cross-location visits table for franchisee */
    RsReportSid[RsReportSid["VISIT_FRANCHISE_LOCATION_CROSS_SUMMARY_FRANCHISEE"] = 187] = "VISIT_FRANCHISE_LOCATION_CROSS_SUMMARY_FRANCHISEE";
    /** Summary franchise cross-location visits table */
    RsReportSid[RsReportSid["VISIT_FRANCHISE_LOCATION_CROSS_SUMMARY_LIST"] = 158] = "VISIT_FRANCHISE_LOCATION_CROSS_SUMMARY_LIST";
    /** Expired passes report in chart format */
    RsReportSid[RsReportSid["VISIT_LAST_COUNT"] = 8] = "VISIT_LAST_COUNT";
    /** Expired passes report in list format */
    RsReportSid[RsReportSid["VISIT_LAST_LIST"] = 7] = "VISIT_LAST_LIST";
    /** Detail cross-location visits table. For regular businesses */
    RsReportSid[RsReportSid["VISIT_LOCATION_CROSS_DETAIL_LIST"] = 168] = "VISIT_LOCATION_CROSS_DETAIL_LIST";
    /** Summary cross-location visits chart. For regular businesses */
    RsReportSid[RsReportSid["VISIT_LOCATION_CROSS_SUMMARY_CHART"] = 170] = "VISIT_LOCATION_CROSS_SUMMARY_CHART";
    /** Summary cross-location visits table. For regular businesses */
    RsReportSid[RsReportSid["VISIT_LOCATION_CROSS_SUMMARY_LIST"] = 169] = "VISIT_LOCATION_CROSS_SUMMARY_LIST";
    /** Visit login list */
    RsReportSid[RsReportSid["VISIT_LOGIN_LIST"] = 12] = "VISIT_LOGIN_LIST";
    /** Visits Remaining */
    RsReportSid[RsReportSid["VISIT_REMAIN_LIST"] = 63] = "VISIT_REMAIN_LIST";
    /** Visits Remaining */
    RsReportSid[RsReportSid["VISIT_REMAIN_LIST_TEMP"] = 144] = "VISIT_REMAIN_LIST_TEMP";
    /** Detailed revenue by service */
    RsReportSid[RsReportSid["VISIT_REVENUE_DETAIL"] = 58] = "VISIT_REVENUE_DETAIL";
    /** Service revenue analysis */
    RsReportSid[RsReportSid["VISIT_REVENUE_LIST"] = 57] = "VISIT_REVENUE_LIST";
    /** Risky clients */
    RsReportSid[RsReportSid["VISIT_RISK"] = 41] = "VISIT_RISK";
    /** Event capacity utilization metric */
    RsReportSid[RsReportSid["VISIT_RISK_ISAAC"] = 216] = "VISIT_RISK_ISAAC";
    /** Visit staff average count */
    RsReportSid[RsReportSid["VISIT_STAFF_AVERAGE_COUNT"] = 19] = "VISIT_STAFF_AVERAGE_COUNT";
    /** Visit staff average list */
    RsReportSid[RsReportSid["VISIT_STAFF_AVERAGE_LIST"] = 17] = "VISIT_STAFF_AVERAGE_LIST";
    /** Visit staff count */
    RsReportSid[RsReportSid["VISIT_STAFF_COUNT"] = 15] = "VISIT_STAFF_COUNT";
    /** Visit staff list */
    RsReportSid[RsReportSid["VISIT_STAFF_LIST"] = 13] = "VISIT_STAFF_LIST";
    /** Detail list of unpaid visits */
    RsReportSid[RsReportSid["VISIT_UNPAID_DETAIL"] = 74] = "VISIT_UNPAID_DETAIL";
    /** List of unpaid visits */
    RsReportSid[RsReportSid["VISIT_UNPAID_LIST"] = 73] = "VISIT_UNPAID_LIST";
    /** Monthly coaching sessions YOY report for Curves business */
    RsReportSid[RsReportSid["VISIT_WORKOUT_APPOINTMENT_LIST"] = 210] = "VISIT_WORKOUT_APPOINTMENT_LIST";
    /** Monthly coaching sessions YOY report for Curves business */
    RsReportSid[RsReportSid["VISIT_WORKOUT_APPOINTMENT_YOY"] = 211] = "VISIT_WORKOUT_APPOINTMENT_YOY";
    /** Workout list report for Curves business */
    RsReportSid[RsReportSid["VISIT_WORKOUT_GYM_LIST"] = 209] = "VISIT_WORKOUT_GYM_LIST";
    /** Workout YOY report for Curves business */
    RsReportSid[RsReportSid["VISIT_WORKOUT_GYM_YOY"] = 207] = "VISIT_WORKOUT_GYM_YOY";
    /** Report with list of businesses connected to FitLIVE */
    RsReportSid[RsReportSid["ZOOM_SYSTEM_BUSINESS"] = 258] = "ZOOM_SYSTEM_BUSINESS";
    /** Report with list of businesses connected to FitLIVE */
    RsReportSid[RsReportSid["ZOOM_SYSTEM_COUNT"] = 259] = "ZOOM_SYSTEM_COUNT";
})(RsReportSid || (exports.RsReportSid = RsReportSid = {}));
/** Statuses of domain verification. */
var WlMailDomainDomainVerifyStatusSid;
(function (WlMailDomainDomainVerifyStatusSid) {
    /** Domain is not verified */
    WlMailDomainDomainVerifyStatusSid[WlMailDomainDomainVerifyStatusSid["FAIL"] = 2] = "FAIL";
    /** Domain verification is pending */
    WlMailDomainDomainVerifyStatusSid[WlMailDomainDomainVerifyStatusSid["PENDING"] = 1] = "PENDING";
    /** Domain is verified */
    WlMailDomainDomainVerifyStatusSid[WlMailDomainDomainVerifyStatusSid["SUCCESS"] = 3] = "SUCCESS";
})(WlMailDomainDomainVerifyStatusSid || (exports.WlMailDomainDomainVerifyStatusSid = WlMailDomainDomainVerifyStatusSid = {}));
/** Statuses of mail verification. Based on statuses that returns Amazon SES API. */
var WlMailVerifyMailVerifyStatusSid;
(function (WlMailVerifyMailVerifyStatusSid) {
    /** Email is not verified */
    WlMailVerifyMailVerifyStatusSid[WlMailVerifyMailVerifyStatusSid["FAIL"] = 4] = "FAIL";
    /** Verification request is not running */
    WlMailVerifyMailVerifyStatusSid[WlMailVerifyMailVerifyStatusSid["NONE"] = 1] = "NONE";
    /** Email is verified */
    WlMailVerifyMailVerifyStatusSid[WlMailVerifyMailVerifyStatusSid["VERIFY"] = 3] = "VERIFY";
    /** Verification in progress */
    WlMailVerifyMailVerifyStatusSid[WlMailVerifyMailVerifyStatusSid["WAIT_FOR_VERIFY"] = 2] = "WAIT_FOR_VERIFY";
})(WlMailVerifyMailVerifyStatusSid || (exports.WlMailVerifyMailVerifyStatusSid = WlMailVerifyMailVerifyStatusSid = {}));
/** A class for a list of card systems. */
var ACardSystemSid;
(function (ACardSystemSid) {
    /** American Express */
    ACardSystemSid[ACardSystemSid["AMERICAN_EXPRESS"] = 1] = "AMERICAN_EXPRESS";
    /** Bank of Montreal (BMO) */
    ACardSystemSid[ACardSystemSid["BMO"] = 2] = "BMO";
    /** Canadian Imperial Bank of Commerce (CIBC) */
    ACardSystemSid[ACardSystemSid["CIBC"] = 3] = "CIBC";
    /** Diners Club International */
    ACardSystemSid[ACardSystemSid["DINNER_CLUB"] = 4] = "DINNER_CLUB";
    /** Discover */
    ACardSystemSid[ACardSystemSid["DISCOVER"] = 5] = "DISCOVER";
    /** HSBC Bank Canada */
    ACardSystemSid[ACardSystemSid["HSBC_CANADA"] = 6] = "HSBC_CANADA";
    /** Japan Credit Bureau (JCB) */
    ACardSystemSid[ACardSystemSid["JCB"] = 7] = "JCB";
    /** Mastercard */
    ACardSystemSid[ACardSystemSid["MASTERCARD"] = 8] = "MASTERCARD";
    /** Royal Bank of Canada */
    ACardSystemSid[ACardSystemSid["ROYAL_BANK"] = 9] = "ROYAL_BANK";
    /** Scotiabank */
    ACardSystemSid[ACardSystemSid["SCOTIBANK"] = 10] = "SCOTIBANK";
    /** TD Canada Trust */
    ACardSystemSid[ACardSystemSid["TD_CANADA"] = 11] = "TD_CANADA";
    /** The card system can't be determined */
    ACardSystemSid[ACardSystemSid["UNDEFINED"] = 13] = "UNDEFINED";
    /** Union Pay */
    ACardSystemSid[ACardSystemSid["UNION_PAY"] = 14] = "UNION_PAY";
    /** Visa */
    ACardSystemSid[ACardSystemSid["VISA"] = 12] = "VISA";
})(ACardSystemSid || (exports.ACardSystemSid = ACardSystemSid = {}));
/** An exception that is thrown in a case of a payment error. */
var RsPayException;
(function (RsPayException) {
    /** Invalid ABA number chosen */
    RsPayException[RsPayException["ABAN_EMPTY"] = 58] = "ABAN_EMPTY";
    /** Invalid ABA number chosen */
    RsPayException[RsPayException["ABAN_INVALID"] = 57] = "ABAN_INVALID";
    /** User Authentication Failed */
    RsPayException[RsPayException["ACCESS_AUTHENTICATE"] = 160] = "ACCESS_AUTHENTICATE";
    /** Authentication token is not valid */
    RsPayException[RsPayException["ACCESS_TOKEN_INVALID"] = 181] = "ACCESS_TOKEN_INVALID";
    /** Account payment entry method is empty */
    RsPayException[RsPayException["ACCOUNT_ENTRY_EMPTY"] = 63] = "ACCOUNT_ENTRY_EMPTY";
    /** Account holder type is empty */
    RsPayException[RsPayException["ACCOUNT_HOLDER_EMPTY"] = 64] = "ACCOUNT_HOLDER_EMPTY";
    /** Account name is empty */
    RsPayException[RsPayException["ACCOUNT_NAME_EMPTY"] = 59] = "ACCOUNT_NAME_EMPTY";
    /** Account name is too long */
    RsPayException[RsPayException["ACCOUNT_NAME_LONG"] = 60] = "ACCOUNT_NAME_LONG";
    /** Account number is empty */
    RsPayException[RsPayException["ACCOUNT_NUMBER_EMPTY"] = 61] = "ACCOUNT_NUMBER_EMPTY";
    /** Account number invalid */
    RsPayException[RsPayException["ACCOUNT_NUMBER_INVALID"] = 67] = "ACCOUNT_NUMBER_INVALID";
    /** Account number is too long */
    RsPayException[RsPayException["ACCOUNT_NUMBER_LONG"] = 62] = "ACCOUNT_NUMBER_LONG";
    /** Account number is too short */
    RsPayException[RsPayException["ACCOUNT_NUMBER_SHORT"] = 66] = "ACCOUNT_NUMBER_SHORT";
    /** Account owner is empty */
    RsPayException[RsPayException["ACCOUNT_OWNER_EMPTY"] = 69] = "ACCOUNT_OWNER_EMPTY";
    /** Account name is too long */
    RsPayException[RsPayException["ACCOUNT_OWNER_LONG"] = 70] = "ACCOUNT_OWNER_LONG";
    /** Account owner name does not equal billing name */
    RsPayException[RsPayException["ACCOUNT_OWNER_DOES_NOT_MATCH"] = 182] = "ACCOUNT_OWNER_DOES_NOT_MATCH";
    /** Account type is empty */
    RsPayException[RsPayException["ACCOUNT_TYPE_EMPTY"] = 65] = "ACCOUNT_TYPE_EMPTY";
    /** ACH: Account Closed */
    RsPayException[RsPayException["ACH_E02"] = 198] = "ACH_E02";
    /** ACH: No Account / Unable to Locate Account */
    RsPayException[RsPayException["ACH_E03"] = 199] = "ACH_E03";
    /** ACH: Invalid Account Number */
    RsPayException[RsPayException["ACH_E04"] = 200] = "ACH_E04";
    /** ACH: Unauthorized Debit to Consumer Account Using Corporate SEC Code */
    RsPayException[RsPayException["ACH_E05"] = 201] = "ACH_E05";
    /** ACH: Authorization Revoked by Customer */
    RsPayException[RsPayException["ACH_E07"] = 202] = "ACH_E07";
    /** ACH: Payment Stopped */
    RsPayException[RsPayException["ACH_E08"] = 203] = "ACH_E08";
    /** ACH: Customer Advises Originator Not Known / Not Authorized */
    RsPayException[RsPayException["ACH_E10"] = 204] = "ACH_E10";
    /** ACH: Customer Advises Entry Not in Accordance with Authorization */
    RsPayException[RsPayException["ACH_E11"] = 205] = "ACH_E11";
    /** ACH: RDFI Not Qualified to Participate */
    RsPayException[RsPayException["ACH_E13"] = 206] = "ACH_E13";
    /** ACH: Representative Payee Deceased or Unable to Continue */
    RsPayException[RsPayException["ACH_E14"] = 207] = "ACH_E14";
    /** ACH: Beneficiary or Account Holder Deceased */
    RsPayException[RsPayException["ACH_E15"] = 208] = "ACH_E15";
    /** ACH: Account Frozen */
    RsPayException[RsPayException["ACH_E16"] = 209] = "ACH_E16";
    /** ACH: Invalid Account Number under Questionable Circumstances */
    RsPayException[RsPayException["ACH_E17"] = 210] = "ACH_E17";
    /** ACH: Non-Transaction Account */
    RsPayException[RsPayException["ACH_E20"] = 211] = "ACH_E20";
    /** ACH: Corporate Customer Advises Not Authorized */
    RsPayException[RsPayException["ACH_E29"] = 212] = "ACH_E29";
    /** ACH: Invalid Image */
    RsPayException[RsPayException["ACH_E92"] = 213] = "ACH_E92";
    /** ACH: Non-Negotiable */
    RsPayException[RsPayException["ACH_E93"] = 214] = "ACH_E93";
    /** ACH: Breach of Warranty */
    RsPayException[RsPayException["ACH_E95"] = 215] = "ACH_E95";
    /** ACH: Counterfeit / Forgery */
    RsPayException[RsPayException["ACH_E96"] = 216] = "ACH_E96";
    /** ACH: Refer to Maker */
    RsPayException[RsPayException["ACH_E97"] = 217] = "ACH_E97";
    /** Insufficient funds */
    RsPayException[RsPayException["ACH_R01"] = 124] = "ACH_R01";
    /** Bank account closed */
    RsPayException[RsPayException["ACH_R02"] = 125] = "ACH_R02";
    /** No bank account/unable to locate account */
    RsPayException[RsPayException["ACH_R03"] = 126] = "ACH_R03";
    /** Invalid bank account number */
    RsPayException[RsPayException["ACH_R04"] = 127] = "ACH_R04";
    /** Unauthorized Debit to Consumer Account Using Corporate SEC Code */
    RsPayException[RsPayException["ACH_R05"] = 128] = "ACH_R05";
    /** Returned per ODFI request */
    RsPayException[RsPayException["ACH_R06"] = 129] = "ACH_R06";
    /** Authorization revoked by customer */
    RsPayException[RsPayException["ACH_R07"] = 130] = "ACH_R07";
    /** Payment stopped */
    RsPayException[RsPayException["ACH_R08"] = 131] = "ACH_R08";
    /** Uncollected funds */
    RsPayException[RsPayException["ACH_R09"] = 132] = "ACH_R09";
    /** Customer advises not authorized */
    RsPayException[RsPayException["ACH_R10"] = 133] = "ACH_R10";
    /** Check truncation entry return */
    RsPayException[RsPayException["ACH_R11"] = 134] = "ACH_R11";
    /** Branch sold to another RDFI */
    RsPayException[RsPayException["ACH_R12"] = 135] = "ACH_R12";
    /** RDFI not qualified to participate */
    RsPayException[RsPayException["ACH_R13"] = 136] = "ACH_R13";
    /** Representative payee deceased or unable to continue in that capacity */
    RsPayException[RsPayException["ACH_R14"] = 137] = "ACH_R14";
    /** Beneficiary or bank account holder */
    RsPayException[RsPayException["ACH_R15"] = 138] = "ACH_R15";
    /** Bank account frozen */
    RsPayException[RsPayException["ACH_R16"] = 139] = "ACH_R16";
    /** File record edit criteria */
    RsPayException[RsPayException["ACH_R17"] = 140] = "ACH_R17";
    /** Improper effective entry date */
    RsPayException[RsPayException["ACH_R18"] = 141] = "ACH_R18";
    /** Amount field error */
    RsPayException[RsPayException["ACH_R19"] = 142] = "ACH_R19";
    /** Non-payment bank account */
    RsPayException[RsPayException["ACH_R20"] = 143] = "ACH_R20";
    /** Invalid company ID number */
    RsPayException[RsPayException["ACH_R21"] = 144] = "ACH_R21";
    /** Invalid individual ID number */
    RsPayException[RsPayException["ACH_R22"] = 145] = "ACH_R22";
    /** Credit entry refused by receiver */
    RsPayException[RsPayException["ACH_R23"] = 146] = "ACH_R23";
    /** Duplicate entry */
    RsPayException[RsPayException["ACH_R24"] = 147] = "ACH_R24";
    /** Addenda error */
    RsPayException[RsPayException["ACH_R25"] = 148] = "ACH_R25";
    /** Mandatory field error */
    RsPayException[RsPayException["ACH_R26"] = 149] = "ACH_R26";
    /** Trace number error */
    RsPayException[RsPayException["ACH_R27"] = 150] = "ACH_R27";
    /** Transit routing number check digit error */
    RsPayException[RsPayException["ACH_R28"] = 151] = "ACH_R28";
    /** Corporate customer advises not authorized */
    RsPayException[RsPayException["ACH_R29"] = 152] = "ACH_R29";
    /** RDFI not participant in check truncation program */
    RsPayException[RsPayException["ACH_R30"] = 153] = "ACH_R30";
    /** Permissible return entry (CCD and CTX only) */
    RsPayException[RsPayException["ACH_R31"] = 154] = "ACH_R31";
    /** RDFI non-settlement */
    RsPayException[RsPayException["ACH_R32"] = 155] = "ACH_R32";
    /** Return of XCK entry */
    RsPayException[RsPayException["ACH_R33"] = 156] = "ACH_R33";
    /** Limited participation RDFI */
    RsPayException[RsPayException["ACH_R34"] = 157] = "ACH_R34";
    /** Return of improper debit entry */
    RsPayException[RsPayException["ACH_R35"] = 158] = "ACH_R35";
    /** ACH: Return of Improper Credit Entry */
    RsPayException[RsPayException["ACH_R36"] = 218] = "ACH_R36";
    /** ACH: Source Document Presented for Payment */
    RsPayException[RsPayException["ACH_R37"] = 219] = "ACH_R37";
    /** ACH: Stop Payment on Source Document */
    RsPayException[RsPayException["ACH_R38"] = 220] = "ACH_R38";
    /** ACH: Improper Source Document */
    RsPayException[RsPayException["ACH_R39"] = 221] = "ACH_R39";
    /** ACH: Return of ENR Entry by Federal Government Agency */
    RsPayException[RsPayException["ACH_R40"] = 222] = "ACH_R40";
    /** ACH: Invalid Transaction Code */
    RsPayException[RsPayException["ACH_R41"] = 223] = "ACH_R41";
    /** ACH: Routing Number / Check Digit Error */
    RsPayException[RsPayException["ACH_R42"] = 224] = "ACH_R42";
    /** ACH: Invalid DFI Account Number */
    RsPayException[RsPayException["ACH_R43"] = 225] = "ACH_R43";
    /** ACH: Invalid Individual ID Number / Identification */
    RsPayException[RsPayException["ACH_R44"] = 226] = "ACH_R44";
    /** ACH: Invalid Individual Name / Company Name */
    RsPayException[RsPayException["ACH_R45"] = 227] = "ACH_R45";
    /** ACH: Invalid Representative Payee Indicator */
    RsPayException[RsPayException["ACH_R46"] = 228] = "ACH_R46";
    /** ACH: Duplicate Enrollment */
    RsPayException[RsPayException["ACH_R47"] = 229] = "ACH_R47";
    /** ACH: State Law Affecting RCK Acceptance */
    RsPayException[RsPayException["ACH_R50"] = 230] = "ACH_R50";
    /** ACH: Item is Ineligible, Notice Not Provided, etc */
    RsPayException[RsPayException["ACH_R51"] = 231] = "ACH_R51";
    /** ACH: Stop Payment on Item (Adjustment Entries) */
    RsPayException[RsPayException["ACH_R52"] = 232] = "ACH_R52";
    /** ACH: Item and ACH Entry Presented for Payment */
    RsPayException[RsPayException["ACH_R53"] = 233] = "ACH_R53";
    /** ACH: Misrouted Return */
    RsPayException[RsPayException["ACH_R61"] = 234] = "ACH_R61";
    /** ACH: Incorrect Trace Number */
    RsPayException[RsPayException["ACH_R62"] = 235] = "ACH_R62";
    /** ACH: Incorrect Dollar Amount */
    RsPayException[RsPayException["ACH_R63"] = 236] = "ACH_R63";
    /** ACH: Incorrect Individual Identification */
    RsPayException[RsPayException["ACH_R64"] = 237] = "ACH_R64";
    /** ACH: Incorrect Transaction Code */
    RsPayException[RsPayException["ACH_R65"] = 238] = "ACH_R65";
    /** ACH: Incorrect Company Identification */
    RsPayException[RsPayException["ACH_R66"] = 239] = "ACH_R66";
    /** ACH: Duplicate Return */
    RsPayException[RsPayException["ACH_R67"] = 240] = "ACH_R67";
    /** ACH: Untimely Return */
    RsPayException[RsPayException["ACH_R68"] = 241] = "ACH_R68";
    /** ACH: Multiple Errors */
    RsPayException[RsPayException["ACH_R69"] = 242] = "ACH_R69";
    /** ACH: Permissible Return Entry Not Accepted */
    RsPayException[RsPayException["ACH_R70"] = 243] = "ACH_R70";
    /** ACH: Misrouted Dishonored Return */
    RsPayException[RsPayException["ACH_R71"] = 244] = "ACH_R71";
    /** ACH: Untimely Dishonored Return */
    RsPayException[RsPayException["ACH_R72"] = 245] = "ACH_R72";
    /** ACH: Timely Original Return */
    RsPayException[RsPayException["ACH_R73"] = 246] = "ACH_R73";
    /** ACH: Corrected Return */
    RsPayException[RsPayException["ACH_R74"] = 247] = "ACH_R74";
    /** ACH: Return Not a Duplicate */
    RsPayException[RsPayException["ACH_R75"] = 248] = "ACH_R75";
    /** ACH: No Errors Found */
    RsPayException[RsPayException["ACH_R76"] = 249] = "ACH_R76";
    /** ACH: IAT Entry Coding Error */
    RsPayException[RsPayException["ACH_R80"] = 250] = "ACH_R80";
    /** ACH: Non-Participant in IAT Program */
    RsPayException[RsPayException["ACH_R81"] = 251] = "ACH_R81";
    /** ACH: Invalid Foreign Receiving DFI Identification */
    RsPayException[RsPayException["ACH_R82"] = 252] = "ACH_R82";
    /** ACH: Foreign Receiving DFI Unable to Settle */
    RsPayException[RsPayException["ACH_R83"] = 253] = "ACH_R83";
    /** ACH: Entry Not Processed by Gateway */
    RsPayException[RsPayException["ACH_R84"] = 254] = "ACH_R84";
    /** ACH: Incorrectly Coded Outbound International Payment */
    RsPayException[RsPayException["ACH_R85"] = 255] = "ACH_R85";
    /** ACH check type or account type is invalid */
    RsPayException[RsPayException["ACH_ACCOUNT_TYPE"] = 185] = "ACH_ACCOUNT_TYPE";
    /** ACH payment method is not supported by processor */
    RsPayException[RsPayException["ACH_SUPPORT"] = 105] = "ACH_SUPPORT";
    /** ACH error: uncollected */
    RsPayException[RsPayException["ACH_UNCOLLECTED"] = 123] = "ACH_UNCOLLECTED";
    /** Invalid payment address chosen */
    RsPayException[RsPayException["ADDRESS_INVALID"] = 39] = "ADDRESS_INVALID";
    /** Chosen payment address does not exist */
    RsPayException[RsPayException["ADDRESS_NX"] = 40] = "ADDRESS_NX";
    /** Disagreement with the Payment Agreement */
    RsPayException[RsPayException["AGREEMENT_DISAGREE"] = 176] = "AGREEMENT_DISAGREE";
    /** Sum of amounts for all individual payment sources does not equal the total expected amount */
    RsPayException[RsPayException["AMOUNT_CONSOLIDATE"] = 35] = "AMOUNT_CONSOLIDATE";
    /** Total package price can't be divided equally between package items without loosing cents */
    RsPayException[RsPayException["AMOUNT_CONSOLIDATE_PACKAGE"] = 191] = "AMOUNT_CONSOLIDATE_PACKAGE";
    /** Amount was unexpectedly changed during the purchase process */
    RsPayException[RsPayException["AMOUNT_CHANGE"] = 179] = "AMOUNT_CHANGE";
    /** Amount is invalid */
    RsPayException[RsPayException["AMOUNT_INVALID"] = 34] = "AMOUNT_INVALID";
    /** Total price of cart greater than `1000000000.00` */
    RsPayException[RsPayException["AMOUNT_TOTAL"] = 75] = "AMOUNT_TOTAL";
    /** Amount equals zero */
    RsPayException[RsPayException["AMOUNT_ZERO"] = 32] = "AMOUNT_ZERO";
    /** AVS verification failed. Postal code or address are invalid */
    RsPayException[RsPayException["AVS"] = 14] = "AVS";
    /** Invalid bank account ID */
    RsPayException[RsPayException["BANK_ACCOUNT_INVALID"] = 79] = "BANK_ACCOUNT_INVALID";
    /** Bank account ID does not exist */
    RsPayException[RsPayException["BANK_ACCOUNT_NX"] = 80] = "BANK_ACCOUNT_NX";
    /** Bank state branch is empty */
    RsPayException[RsPayException["BSB_EMPTY"] = 77] = "BSB_EMPTY";
    /** Bank state branch is invalid */
    RsPayException[RsPayException["BSB_INVALID"] = 78] = "BSB_INVALID";
    /** This business is a lost customer */
    RsPayException[RsPayException["BUSINESS_CHURN"] = 173] = "BUSINESS_CHURN";
    /** Client must call issuer for further information */
    RsPayException[RsPayException["CALL"] = 17] = "CALL";
    /** Card data is valid, but you can not pay with it (e.g. hold placed on card) */
    RsPayException[RsPayException["CARD_DECLINE"] = 5] = "CARD_DECLINE";
    /** Invalid payment card chosen */
    RsPayException[RsPayException["CARD_INVALID"] = 42] = "CARD_INVALID";
    /** Card over limit */
    RsPayException[RsPayException["CARD_LIMIT"] = 73] = "CARD_LIMIT";
    /** Payment card nickname is empty */
    RsPayException[RsPayException["CARD_NAME_EMPTY"] = 46] = "CARD_NAME_EMPTY";
    /** Payment card nickname is too long */
    RsPayException[RsPayException["CARD_NAME_LONG"] = 47] = "CARD_NAME_LONG";
    /** The customer’s bank has declined the transaction as the credit card number has failed a security check, or the */
    RsPayException[RsPayException["CARD_NOT_HONOR"] = 71] = "CARD_NOT_HONOR";
    /** Insufficient funds available */
    RsPayException[RsPayException["CARD_NSF"] = 72] = "CARD_NSF";
    /** Chosen payment card does not exist */
    RsPayException[RsPayException["CARD_NX"] = 43] = "CARD_NX";
    /** User has chosen payment card but he had no such rights */
    RsPayException[RsPayException["CARD_SELECT"] = 44] = "CARD_SELECT";
    /** No such card issuer */
    RsPayException[RsPayException["CARD_ISSUER_INVALID"] = 184] = "CARD_ISSUER_INVALID";
    /** Card unsupported */
    RsPayException[RsPayException["CARD_UNSUPPORTED"] = 190] = "CARD_UNSUPPORTED";
    /** Element which should be paid with this payment has been canceled and payment should be blocked */
    RsPayException[RsPayException["CANCELED"] = 177] = "CANCELED";
    /** Comment for payment method too long */
    RsPayException[RsPayException["COMMENT_LONG"] = 99] = "COMMENT_LONG";
    /** Can't connect to payment gateway */
    RsPayException[RsPayException["CONNECT"] = 8] = "CONNECT";
    /** Unsupported country */
    RsPayException[RsPayException["COUNTRY_UNSUPPORTED"] = 164] = "COUNTRY_UNSUPPORTED";
    /** Gift card belongs to a foreign business */
    RsPayException[RsPayException["COUPON_BUSINESS"] = 55] = "COUPON_BUSINESS";
    /** Invalid payment card chosen */
    RsPayException[RsPayException["COUPON_CURRENCY"] = 54] = "COUPON_CURRENCY";
    /** Coupon is inactive */
    RsPayException[RsPayException["COUPON_INACTIVE"] = 97] = "COUPON_INACTIVE";
    /** Coupon code is invalid (invalid length, or invalid characters encountered) */
    RsPayException[RsPayException["COUPON_INVALID"] = 51] = "COUPON_INVALID";
    /** Invalid payment card chosen */
    RsPayException[RsPayException["COUPON_NX"] = 52] = "COUPON_NX";
    /** Coupon is redeemed already */
    RsPayException[RsPayException["COUPON_REDEEM"] = 53] = "COUPON_REDEEM";
    /** Card credentials (number, csc, month, year) change ability is disabled. E.g. payment processor may not support */
    RsPayException[RsPayException["CREDENTIAL_SUPPORT"] = 76] = "CREDENTIAL_SUPPORT";
    /** Invalid card security code (CSC) */
    RsPayException[RsPayException["CSC_EMPTY"] = 21] = "CSC_EMPTY";
    /** Invalid card security code (CSC) */
    RsPayException[RsPayException["CSC_INVALID"] = 2] = "CSC_INVALID";
    /** Card is expired */
    RsPayException[RsPayException["DATE_EXPIRE"] = 24] = "DATE_EXPIRE";
    /** Card is inactive */
    RsPayException[RsPayException["DATE_INACTIVE"] = 163] = "DATE_INACTIVE";
    /** Invalid Expiration Date */
    RsPayException[RsPayException["DATE_INVALID"] = 183] = "DATE_INVALID";
    /** Month is invalid */
    RsPayException[RsPayException["DATE_MONTH"] = 22] = "DATE_MONTH";
    /** Multiple usage of this payment method is not allowed */
    RsPayException[RsPayException["DATE_YEAR"] = 23] = "DATE_YEAR";
    /** Duplicate transaction. Transaction data that is selected for comparison is payment gateway-specific */
    RsPayException[RsPayException["DUPLICATE"] = 1] = "DUPLICATE";
    /** Error, caused by one of the following cases: */
    RsPayException[RsPayException["FRAUD"] = 168] = "FRAUD";
    /** Terminal that should be used for payment is not found */
    RsPayException[RsPayException["HARDWARE_NOT_FOUND"] = 196] = "HARDWARE_NOT_FOUND";
    /** Informational field is not filled in */
    RsPayException[RsPayException["INFO_EMPTY"] = 9] = "INFO_EMPTY";
    /** Informational field is too long */
    RsPayException[RsPayException["INFO_LONG"] = 41] = "INFO_LONG";
    /** Minimum payment amount is less then `1` */
    RsPayException[RsPayException["INSTALLMENT_AMOUNT_MIN"] = 93] = "INSTALLMENT_AMOUNT_MIN";
    /** Installment plan: Number of payment is invalid */
    RsPayException[RsPayException["INSTALLMENT_COUNT_FORMAT"] = 85] = "INSTALLMENT_COUNT_FORMAT";
    /** Installment plan: Number of payment is too large */
    RsPayException[RsPayException["INSTALLMENT_COUNT_MAX"] = 87] = "INSTALLMENT_COUNT_MAX";
    /** Installment plan: Number of payment is too small (less then 2) */
    RsPayException[RsPayException["INSTALLMENT_COUNT_MIN"] = 86] = "INSTALLMENT_COUNT_MIN";
    /** Installment date is not specified */
    RsPayException[RsPayException["INSTALLMENT_DATE_EMPTY"] = 81] = "INSTALLMENT_DATE_EMPTY";
    /** Installment date format is invalid */
    RsPayException[RsPayException["INSTALLMENT_DATE_FORMAT"] = 82] = "INSTALLMENT_DATE_FORMAT";
    /** Installment date is too deep in the future */
    RsPayException[RsPayException["INSTALLMENT_DATE_FUTURE"] = 84] = "INSTALLMENT_DATE_FUTURE";
    /** Installment date is in the past (minimum is today) */
    RsPayException[RsPayException["INSTALLMENT_DATE_PAST"] = 83] = "INSTALLMENT_DATE_PAST";
    /** Installment plan: Duration of a period is not allowed */
    RsPayException[RsPayException["INSTALLMENT_DURATION_DISABLE"] = 91] = "INSTALLMENT_DURATION_DISABLE";
    /** Installment plan: Maximum total duration of installment plan is 100 years */
    RsPayException[RsPayException["INSTALLMENT_DURATION_MAX"] = 92] = "INSTALLMENT_DURATION_MAX";
    /** Installment plan: Duration of a period does not exist */
    RsPayException[RsPayException["INSTALLMENT_DURATION_NX"] = 90] = "INSTALLMENT_DURATION_NX";
    /** Installment plan: Number of periods between two consecutive payments is invalid */
    RsPayException[RsPayException["INSTALLMENT_PERIOD_FORMAT"] = 88] = "INSTALLMENT_PERIOD_FORMAT";
    /** Installment plan: Number of periods between two consecutive payments is too large */
    RsPayException[RsPayException["INSTALLMENT_PERIOD_MAX"] = 89] = "INSTALLMENT_PERIOD_MAX";
    /** Template of installment plans: template is not selected */
    RsPayException[RsPayException["INSTALLMENT_TEMPLATE_EMPTY"] = 95] = "INSTALLMENT_TEMPLATE_EMPTY";
    /** Template of installment plans: ID of the template does not exist */
    RsPayException[RsPayException["INSTALLMENT_TEMPLATE_NX"] = 94] = "INSTALLMENT_TEMPLATE_NX";
    /** Internal errors that occurred in the browser (for example, some form data arrived to servers such that user should */
    RsPayException[RsPayException["INTERNAL_BROWSER"] = 33] = "INTERNAL_BROWSER";
    /** Security throttling error */
    RsPayException[RsPayException["INTERNAL_HIT"] = 192] = "INTERNAL_HIT";
    /** Internal merchant error */
    RsPayException[RsPayException["INTERNAL_MERCHANT"] = 186] = "INTERNAL_MERCHANT";
    /** Some strange service error (e.g. invalid merchant data passed, data format) */
    RsPayException[RsPayException["INTERNAL_SERVER"] = 6] = "INTERNAL_SERVER";
    /** Payer email is required for payment, but empty */
    RsPayException[RsPayException["MAIL_EMPTY"] = 175] = "MAIL_EMPTY";
    /** The associated merchant account has been closed */
    RsPayException[RsPayException["MERCHANT_ACCOUNT_CLOSED"] = 189] = "MERCHANT_ACCOUNT_CLOSED";
    /** Invalid merchant data */
    RsPayException[RsPayException["MERCHANT_INVALID"] = 7] = "MERCHANT_INVALID";
    /** Transaction was rejected by gateway */
    RsPayException[RsPayException["MERCHANT_REJECT"] = 74] = "MERCHANT_REJECT";
    /** Merchant has invalid settings and does not return customer vault */
    RsPayException[RsPayException["MERCHANT_SETTINGS_VAULT"] = 166] = "MERCHANT_SETTINGS_VAULT";
    /** User has no access to the specified payment method */
    RsPayException[RsPayException["METHOD_ACCESS"] = 18] = "METHOD_ACCESS";
    /** This method does not support authorization request */
    RsPayException[RsPayException["METHOD_AUTHORIZE"] = 96] = "METHOD_AUTHORIZE";
    /** This payment method can not be used with this business */
    RsPayException[RsPayException["METHOD_BUSINESS"] = 19] = "METHOD_BUSINESS";
    /** Multiple usage of this payment method is not allowed */
    RsPayException[RsPayException["METHOD_MULTIPLE"] = 20] = "METHOD_MULTIPLE";
    /** Cardholder name is not typed in */
    RsPayException[RsPayException["NAME_EMPTY"] = 25] = "NAME_EMPTY";
    /** Customer name is invalid (contains invalid characters) */
    RsPayException[RsPayException["NAME_INVALID"] = 106] = "NAME_INVALID";
    /** Cardholder name is too long */
    RsPayException[RsPayException["NAME_LONG"] = 26] = "NAME_LONG";
    /** Validation Rejection */
    RsPayException[RsPayException["NMI_PAYSAFE_900"] = 159] = "NMI_PAYSAFE_900";
    /** Not sufficient funds (debits only) */
    RsPayException[RsPayException["NMI_PAYSAFE_901"] = 110] = "NMI_PAYSAFE_901";
    /** Payment stopped/recalled */
    RsPayException[RsPayException["NMI_PAYSAFE_903"] = 111] = "NMI_PAYSAFE_903";
    /** Post dated/stale dated */
    RsPayException[RsPayException["NMI_PAYSAFE_904"] = 112] = "NMI_PAYSAFE_904";
    /** Account closed */
    RsPayException[RsPayException["NMI_PAYSAFE_905"] = 113] = "NMI_PAYSAFE_905";
    /** Account transferred */
    RsPayException[RsPayException["NMI_PAYSAFE_906"] = 114] = "NMI_PAYSAFE_906";
    /** No chequing privileges */
    RsPayException[RsPayException["NMI_PAYSAFE_907"] = 115] = "NMI_PAYSAFE_907";
    /** Funds not cleared */
    RsPayException[RsPayException["NMI_PAYSAFE_908"] = 116] = "NMI_PAYSAFE_908";
    /** Payor/payee deceased */
    RsPayException[RsPayException["NMI_PAYSAFE_910"] = 117] = "NMI_PAYSAFE_910";
    /** Account frozen */
    RsPayException[RsPayException["NMI_PAYSAFE_911"] = 118] = "NMI_PAYSAFE_911";
    /** Invalid/incorrect account number */
    RsPayException[RsPayException["NMI_PAYSAFE_912"] = 119] = "NMI_PAYSAFE_912";
    /** Incorrect payor/payee name */
    RsPayException[RsPayException["NMI_PAYSAFE_914"] = 120] = "NMI_PAYSAFE_914";
    /** Refused by payor/payee */
    RsPayException[RsPayException["NMI_PAYSAFE_915"] = 121] = "NMI_PAYSAFE_915";
    /** No Return Agreement */
    RsPayException[RsPayException["NMI_PAYSAFE_998"] = 122] = "NMI_PAYSAFE_998";
    /** Card number is not typed in */
    RsPayException[RsPayException["NUMBER_EMPTY"] = 27] = "NUMBER_EMPTY";
    /** Card number is invalid */
    RsPayException[RsPayException["NUMBER_INVALID"] = 30] = "NUMBER_INVALID";
    /** Card number is too long */
    RsPayException[RsPayException["NUMBER_LONG"] = 28] = "NUMBER_LONG";
    /** Card number is too long */
    RsPayException[RsPayException["NUMBER_SHORT"] = 29] = "NUMBER_SHORT";
    /** Some parameters client has provided are invalid */
    RsPayException[RsPayException["PARAMETER"] = 4] = "PARAMETER";
    /** Payment form is in passive mode */
    RsPayException[RsPayException["PASSIVE"] = 165] = "PASSIVE";
    /** Error during authentication of the payer */
    RsPayException[RsPayException["PAYER_AUTHENTICATION"] = 167] = "PAYER_AUTHENTICATION";
    /** There is other process currently running to update payment. Failed to wait until it ends */
    RsPayException[RsPayException["PAYMENT_UPDATE_LOCK"] = 174] = "PAYMENT_UPDATE_LOCK";
    /** Phone number is not specified on user account */
    RsPayException[RsPayException["PHONE_EMPTY"] = 107] = "PHONE_EMPTY";
    /** Phone number is invalid */
    RsPayException[RsPayException["PHONE_INVALID"] = 178] = "PHONE_INVALID";
    /** Phone number is too long */
    RsPayException[RsPayException["PHONE_LONG"] = 108] = "PHONE_LONG";
    /** Transaction error returned by processor */
    RsPayException[RsPayException["PROCESSOR_ERROR"] = 98] = "PROCESSOR_ERROR";
    /** Internal error at processor side has occurred */
    RsPayException[RsPayException["PROCESSOR_INTERNAL"] = 109] = "PROCESSOR_INTERNAL";
    /** Refund operation is applied too early */
    RsPayException[RsPayException["REFUND_EARLY"] = 50] = "REFUND_EARLY";
    /** Amount about to refund is larger then the current rest of the transaction */
    RsPayException[RsPayException["REFUND_REST"] = 49] = "REFUND_REST";
    /** Transaction can not be refunded because it is in an invalid status */
    RsPayException[RsPayException["REFUND_STATUS"] = 48] = "REFUND_STATUS";
    /** Invalid region chosen */
    RsPayException[RsPayException["REGION_INVALID"] = 37] = "REGION_INVALID";
    /** Chosen region does not exist */
    RsPayException[RsPayException["REGION_NX"] = 38] = "REGION_NX";
    /** Can not repeat purchase transaction. Reference data is expired and invalid now */
    RsPayException[RsPayException["REPEAT_INVALID"] = 15] = "REPEAT_INVALID";
    /** Error during request to service. In case we have not even got response */
    RsPayException[RsPayException["REQUEST"] = 12] = "REQUEST";
    /** Too many requests */
    RsPayException[RsPayException["REQUEST_THROTTLE"] = 172] = "REQUEST_THROTTLE";
    /** Temporary service error. Repeat request */
    RsPayException[RsPayException["RETRY"] = 3] = "RETRY";
    /** Payment is blocked due security reasons (because payment amount is too large) */
    RsPayException[RsPayException["SECURITY_LARGE"] = 103] = "SECURITY_LARGE";
    /** Only for test, when there is an error in the test that we cannot influence, for example: “server is not available */
    RsPayException[RsPayException["SKIP_IN_TESTS"] = 188] = "SKIP_IN_TESTS";
    /** Stripe data is empty */
    RsPayException[RsPayException["STRIPE_EMPTY"] = 31] = "STRIPE_EMPTY";
    /** Invalid data on magnetic stripe. Maybe some part does not exist */
    RsPayException[RsPayException["STRIPE_INVALID"] = 16] = "STRIPE_INVALID";
    /** This recurrent payment token belongs to a different account of this merchant */
    RsPayException[RsPayException["TOKEN_ACCOUNT"] = 161] = "TOKEN_ACCOUNT";
    /** Payment token belongs to a different merchant processor */
    RsPayException[RsPayException["TOKEN_PROCESSOR"] = 162] = "TOKEN_PROCESSOR";
    /** Transaction does not exist. E.g. we want to make refund using nonexistent reference number */
    RsPayException[RsPayException["TRANSACTION_NX"] = 13] = "TRANSACTION_NX";
    /** Transaction is in unexpected status. For example, authorization process started but takes long time. While waiting */
    RsPayException[RsPayException["UNEXPECTED_TRANSACTION_STATUS"] = 187] = "UNEXPECTED_TRANSACTION_STATUS";
    /** If the user who pays through the account is a debtor */
    RsPayException[RsPayException["USER_DEBTOR"] = 194] = "USER_DEBTOR";
    /** If access denied to an anonymous user */
    RsPayException[RsPayException["USER_GUEST"] = 56] = "USER_GUEST";
    /** Error specific for payment processors that stores payer entity */
    RsPayException[RsPayException["USER_NOT_FOUND"] = 197] = "USER_NOT_FOUND";
    /** Some unpredicted error happened during void on processor side */
    RsPayException[RsPayException["VOID_ERROR"] = 193] = "VOID_ERROR";
    /** Operation Void is not possible, it's too late to do it */
    RsPayException[RsPayException["VOID_LATE"] = 180] = "VOID_LATE";
    /** Void operation can be done only for a total transaction amount and cannot be partial */
    RsPayException[RsPayException["VOID_PARTIAL"] = 100] = "VOID_PARTIAL";
    /** Void operation is restricted by rules of the system */
    RsPayException[RsPayException["VOID_RESTRICT"] = 102] = "VOID_RESTRICT";
    /** Void operation is not supported by the merchant processor */
    RsPayException[RsPayException["VOID_SUPPORT"] = 101] = "VOID_SUPPORT";
    /** Timeout waiting for settlement */
    RsPayException[RsPayException["WAIT_TIMEOUT"] = 104] = "WAIT_TIMEOUT";
    /** Incorrect payment card type specified */
    RsPayException[RsPayException["TENDER_TYPE_INVALID"] = 195] = "TENDER_TYPE_INVALID";
})(RsPayException || (exports.RsPayException = RsPayException = {}));
/** Paragon ticket status. */
var ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid;
(function (ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid) {
    /** Ticket was canceled */
    ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid[ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid["CANCELLED"] = 1] = "CANCELLED";
    /** Ticket was completed */
    ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid[ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid["COMPLETE"] = 2] = "COMPLETE";
    /** Ticket in error state */
    ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid[ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid["ERROR"] = 3] = "ERROR";
    /** Ticket is processed */
    ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid[ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid["INPROCESS"] = 4] = "INPROCESS";
    /** Ticket is opened */
    ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid[ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid["OPEN"] = 6] = "OPEN";
    /** Ticket was reversed */
    ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid[ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid["REVERSED"] = 7] = "REVERSED";
})(ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid || (exports.ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid = ThothPayProcessorDirectConnectTicketDirectConnectTicketStatusSid = {}));
/** An enum of credit card types. */
var WlPayBankCardCardTypeEnum;
(function (WlPayBankCardCardTypeEnum) {
    /** Credit Card */
    WlPayBankCardCardTypeEnum[WlPayBankCardCardTypeEnum["CREDIT"] = 1] = "CREDIT";
    /** Debit Card */
    WlPayBankCardCardTypeEnum[WlPayBankCardCardTypeEnum["DEBIT"] = 2] = "DEBIT";
})(WlPayBankCardCardTypeEnum || (exports.WlPayBankCardCardTypeEnum = WlPayBankCardCardTypeEnum = {}));
/** CS Response code class. */
var ThothPayProcessorNuveiCodeCSResponseSid;
(function (ThothPayProcessorNuveiCodeCSResponseSid) {
    /** Service has been successfully provided */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["APPROVED"] = 1] = "APPROVED";
    /** Transaction cannot be cancelled */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["CANNOT_CANCEL"] = 2] = "CANNOT_CANCEL";
    /** Service is declined */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["DECLINED"] = 3] = "DECLINED";
    /** Device is busy */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["DEVICE_BUSY"] = 4] = "DEVICE_BUSY";
    /** Duplicate transmission */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["DUPLICATE_TRANSMISSION"] = 5] = "DUPLICATE_TRANSMISSION";
    /** Invalid identification data for the sender */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["INITIATING_PARTY"] = 6] = "INITIATING_PARTY";
    /** Invalid envelope of the message */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["INVALID_MESSAGE"] = 7] = "INVALID_MESSAGE";
    /** Type of message the recipient receives is unknown or unsupported */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["MESSAGE_TYPE"] = 8] = "MESSAGE_TYPE";
    /** NO Ticket/Emtpy */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["NO_TICKET"] = 9] = "NO_TICKET";
    /** Invalid message: At least one of the data element or data structure is not present, */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["PARSING_ERROR"] = 10] = "PARSING_ERROR";
    /** Version of the protocol couldn't be supported by the recipient */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["PROTOCOL_VERSION"] = 11] = "PROTOCOL_VERSION";
    /** Invalid identification data for the receiver */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["RECIPIENT_PARTY"] = 12] = "RECIPIENT_PARTY";
    /** Ticket is locked */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["TICKET_LOCKED"] = 13] = "TICKET_LOCKED";
    /** Timeout error */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["TIMEOUT_ERROR"] = 14] = "TIMEOUT_ERROR";
    /** Transaction has been cancelled */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["TRANSACTION_CANCELLED"] = 16] = "TRANSACTION_CANCELLED";
    /** There is an unfinish transactions */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["TRANSACTION_IN_PROCESS"] = 15] = "TRANSACTION_IN_PROCESS";
    /** Transaction has been cancelled */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["TRANSACTION_NOT_FOUND"] = 17] = "TRANSACTION_NOT_FOUND";
    /** Transaction with unadjusted tip */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["UN_ADJUSTED_TIP"] = 20] = "UN_ADJUSTED_TIP";
    /** Not possible to process the message, for instance the security module is unavailable, */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["UNABLE_TO_PROCESS"] = 18] = "UNABLE_TO_PROCESS";
    /** No relationship between register and terminal */
    ThothPayProcessorNuveiCodeCSResponseSid[ThothPayProcessorNuveiCodeCSResponseSid["UNMAPPED"] = 19] = "UNMAPPED";
})(ThothPayProcessorNuveiCodeCSResponseSid || (exports.ThothPayProcessorNuveiCodeCSResponseSid = ThothPayProcessorNuveiCodeCSResponseSid = {}));
/** Possible states of the visit: book, attended, cancelled, etc. */
var WlVisitVisitSid;
(function (WlVisitVisitSid) {
    /** Client has attended the session */
    WlVisitVisitSid[WlVisitVisitSid["ATTEND"] = 3] = "ATTEND";
    /** Active reservation means that user is going to attend the session */
    WlVisitVisitSid[WlVisitVisitSid["BOOK"] = 1] = "BOOK";
    /** Client has cancelled the reservation in time and without penalty */
    WlVisitVisitSid[WlVisitVisitSid["CANCEL"] = 6] = "CANCEL";
    /** Client has cancelled his reservation too late */
    WlVisitVisitSid[WlVisitVisitSid["PENALTY"] = 4] = "PENALTY";
    /** This state means that visit is registered, but it is unknown is it {@link WlVisitVisitSid} */
    WlVisitVisitSid[WlVisitVisitSid["PENDING"] = 7] = "PENDING";
    /** Visit was removed */
    WlVisitVisitSid[WlVisitVisitSid["REMOVE"] = 8] = "REMOVE";
    /** Client has missed the session without cancellation */
    WlVisitVisitSid[WlVisitVisitSid["TRUANCY"] = 5] = "TRUANCY";
    /** Reservation in a wait list means that user is going to attend the session if someone will cancel his reservation */
    WlVisitVisitSid[WlVisitVisitSid["WAIT"] = 2] = "WAIT";
})(WlVisitVisitSid || (exports.WlVisitVisitSid = WlVisitVisitSid = {}));
/** List of all custom imports that are supported by system. */
var WlImportCustomCustomSid;
(function (WlImportCustomCustomSid) {
    /** Creates recurring appointments with no end date */
    WlImportCustomCustomSid[WlImportCustomCustomSid["APPOINTMENT_RECURRING"] = 8] = "APPOINTMENT_RECURRING";
    /** Custom import which allows to import client account balance */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CLIENT_ACCOUNT_BALANCE"] = 10] = "CLIENT_ACCOUNT_BALANCE";
    /** Custom import which allows to import client note */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CLIENT_NOTE"] = 5] = "CLIENT_NOTE";
    /** Custom import which allows to import client purchase refund */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CLIENT_PURCHASE_REFUND"] = 11] = "CLIENT_PURCHASE_REFUND";
    /** Custom import which allows to import client relationship */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CLIENT_RELATIONSHIP"] = 12] = "CLIENT_RELATIONSHIP";
    /** Custom import which allows to import contact block information */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CLIENTS"] = 20] = "CLIENTS";
    /** Custom import which allows to import contact log information */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CONTACT"] = 1] = "CONTACT";
    /** Custom import which allows to import curves staff-manager custom fields */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CURVE_EXT_MANAGER"] = 15] = "CURVE_EXT_MANAGER";
    /** Custom import which allows to import curves franchisee custom fields */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CURVE_EXT_ORGANIZATION"] = 13] = "CURVE_EXT_ORGANIZATION";
    /** Custom import which allows to import curves staff-owner custom fields */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CURVE_EXT_OWNER"] = 14] = "CURVE_EXT_OWNER";
    /** Custom import which allows to import curves franchisee */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CURVE_FRANCHISE"] = 7] = "CURVE_FRANCHISE";
    /** Custom import which allows to import curves client historical visits */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CURVE_HISTORICAL_VISIT"] = 16] = "CURVE_HISTORICAL_VISIT";
    /** Custom import which allows to import curves members */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CURVE_MEMBER"] = 4] = "CURVE_MEMBER";
    /** Custom import which allows to start import for the list of franchisees */
    WlImportCustomCustomSid[WlImportCustomCustomSid["CURVE_START"] = 9] = "CURVE_START";
    /** Creates sold gift cards for clients */
    WlImportCustomCustomSid[WlImportCustomCustomSid["LOGIN_COUPON"] = 17] = "LOGIN_COUPON";
    /** Custom import which allows to import purchase members */
    WlImportCustomCustomSid[WlImportCustomCustomSid["PURCHASE_MEMBER"] = 6] = "PURCHASE_MEMBER";
    /** Allows to remove list of purchases from specific file */
    WlImportCustomCustomSid[WlImportCustomCustomSid["PURCHASE_REMOVE"] = 18] = "PURCHASE_REMOVE";
    /** Custom import which allows to import forms */
    WlImportCustomCustomSid[WlImportCustomCustomSid["QUIZ"] = 19] = "QUIZ";
    /** Custom import which allows to import refund dates to update transactions */
    WlImportCustomCustomSid[WlImportCustomCustomSid["REFUND"] = 2] = "REFUND";
    /** Custom import which allows to import client reward balance */
    WlImportCustomCustomSid[WlImportCustomCustomSid["REWARD"] = 3] = "REWARD";
})(WlImportCustomCustomSid || (exports.WlImportCustomCustomSid = WlImportCustomCustomSid = {}));
/** List of general fields in user's profile. */
var RsFieldGeneralSid;
(function (RsFieldGeneralSid) {
    /** Set of fields to choose address */
    RsFieldGeneralSid[RsFieldGeneralSid["ADDRESS"] = 9] = "ADDRESS";
    /** Set of fields to choose birthday date */
    RsFieldGeneralSid[RsFieldGeneralSid["BIRTHDAY"] = 7] = "BIRTHDAY";
    /** Gender field */
    RsFieldGeneralSid[RsFieldGeneralSid["GENDER"] = 8] = "GENDER";
    /** Image */
    RsFieldGeneralSid[RsFieldGeneralSid["IMAGE"] = 13] = "IMAGE";
    /** Home location */
    RsFieldGeneralSid[RsFieldGeneralSid["LOCATION"] = 10] = "LOCATION";
    /** Block with login information (email and password) */
    RsFieldGeneralSid[RsFieldGeneralSid["LOGIN"] = 3] = "LOGIN";
    /** Member ID */
    RsFieldGeneralSid[RsFieldGeneralSid["MEMBER"] = 11] = "MEMBER";
    /** First name */
    RsFieldGeneralSid[RsFieldGeneralSid["NAME_FIRST"] = 2] = "NAME_FIRST";
    /** Last name */
    RsFieldGeneralSid[RsFieldGeneralSid["NAME_LAST"] = 1] = "NAME_LAST";
    /** Cell phone number */
    RsFieldGeneralSid[RsFieldGeneralSid["PHONE_CELL"] = 4] = "PHONE_CELL";
    /** Home phone number */
    RsFieldGeneralSid[RsFieldGeneralSid["PHONE_HOME"] = 5] = "PHONE_HOME";
    /** Work phone number + ext */
    RsFieldGeneralSid[RsFieldGeneralSid["PHONE_WORK"] = 6] = "PHONE_WORK";
    /** Referred by */
    RsFieldGeneralSid[RsFieldGeneralSid["REFERRER"] = 12] = "REFERRER";
    /** Client status (client/member types). System default client/member types see SystemSid */
    RsFieldGeneralSid[RsFieldGeneralSid["STATUS"] = 14] = "STATUS";
    /** Timezone field */
    RsFieldGeneralSid[RsFieldGeneralSid["TIMEZONE"] = 15] = "TIMEZONE";
    /** Vaccination status. See {@link WlLoginMemberVaccinationStatusVaccinationStatusSid} */
    RsFieldGeneralSid[RsFieldGeneralSid["VACCINATION_STATUS"] = 16] = "VACCINATION_STATUS";
})(RsFieldGeneralSid || (exports.RsFieldGeneralSid = RsFieldGeneralSid = {}));
/** Possible types of the custom fields: text, checkbox, radio buttons, etc. */
var RsFieldTypeSid;
(function (RsFieldTypeSid) {
    /** Checkbox field. The `s_value` for this type of field can be 1 if checkbox is checked and 0 otherwise */
    RsFieldTypeSid[RsFieldTypeSid["CHECKBOX"] = 2] = "CHECKBOX";
    /** General field. Has its own format */
    RsFieldTypeSid[RsFieldTypeSid["GENERAL"] = 5] = "GENERAL";
    /** Radio buttons */
    RsFieldTypeSid[RsFieldTypeSid["RADIO"] = 4] = "RADIO";
    /** Drop-down menu */
    RsFieldTypeSid[RsFieldTypeSid["SELECT"] = 3] = "SELECT";
    /** One line text field */
    RsFieldTypeSid[RsFieldTypeSid["TEXT"] = 1] = "TEXT";
})(RsFieldTypeSid || (exports.RsFieldTypeSid = RsFieldTypeSid = {}));
/** Describes reports grouping dates ranges. */
var RsReportGroupSid;
(function (RsReportGroupSid) {
    /** Step 1 day */
    RsReportGroupSid[RsReportGroupSid["DAY"] = 1] = "DAY";
    /** Step 1 hour */
    RsReportGroupSid[RsReportGroupSid["HOUR"] = 5] = "HOUR";
    /** Step 1 month */
    RsReportGroupSid[RsReportGroupSid["MONTH"] = 3] = "MONTH";
    /** Step 1 week */
    RsReportGroupSid[RsReportGroupSid["WEEK"] = 2] = "WEEK";
    /** Step 1 year */
    RsReportGroupSid[RsReportGroupSid["YEAR"] = 4] = "YEAR";
})(RsReportGroupSid || (exports.RsReportGroupSid = RsReportGroupSid = {}));
/** Set of pages for dashboard. */
var RsReportPageSid;
(function (RsReportPageSid) {
    /** List of requested appointments */
    RsReportPageSid[RsReportPageSid["APPOINTMENT_REQUEST"] = 4] = "APPOINTMENT_REQUEST";
    /** Collection with following reports: */
    RsReportPageSid[RsReportPageSid["BUSINESS_CUSTOMER_STATUS"] = 12] = "BUSINESS_CUSTOMER_STATUS";
    /** Collection with list of searches and "All clients" report */
    RsReportPageSid[RsReportPageSid["LOGIN_CLIENT_ALL"] = 7] = "LOGIN_CLIENT_ALL";
    /** Collection with list of progress log charts */
    RsReportPageSid[RsReportPageSid["MEMBER_PROGRESS_LOG_CHART"] = 8] = "MEMBER_PROGRESS_LOG_CHART";
    /** Collection with list of progress log table */
    RsReportPageSid[RsReportPageSid["MEMBER_PROGRESS_LOG_TABLE"] = 9] = "MEMBER_PROGRESS_LOG_TABLE";
    /** Collection with {@link RsReportSid} */
    RsReportPageSid[RsReportPageSid["PROFILE_ATTENDANCE_SCHEDULE"] = 10] = "PROFILE_ATTENDANCE_SCHEDULE";
    /** Collection with following reports: */
    RsReportPageSid[RsReportPageSid["PROFILE_PURCHASE"] = 11] = "PROFILE_PURCHASE";
    /** Leaderboard to display in backend */
    RsReportPageSid[RsReportPageSid["REWARD_BOARD"] = 5] = "REWARD_BOARD";
    /** Current schedule */
    RsReportPageSid[RsReportPageSid["SCHEDULE_PROSPECT"] = 3] = "SCHEDULE_PROSPECT";
    /** Set of staff retention list reports */
    RsReportPageSid[RsReportPageSid["STAFF_RETENTION"] = 6] = "STAFF_RETENTION";
    /** Set of attendance reports */
    RsReportPageSid[RsReportPageSid["VISIT"] = 2] = "VISIT";
})(RsReportPageSid || (exports.RsReportPageSid = RsReportPageSid = {}));
/** Describes charts types (bar, line, area) and chart modes. */
var RsReportChartViewSid;
(function (RsReportChartViewSid) {
    /** Area chart */
    RsReportChartViewSid[RsReportChartViewSid["AREA"] = 2] = "AREA";
    /** Column chart */
    RsReportChartViewSid[RsReportChartViewSid["COLUMN"] = 1] = "COLUMN";
    /** Donut chart */
    RsReportChartViewSid[RsReportChartViewSid["DONUT"] = 5] = "DONUT";
    /** Line chart */
    RsReportChartViewSid[RsReportChartViewSid["LINE"] = 3] = "LINE";
    /** Year-by-year comparisons in the column chart */
    RsReportChartViewSid[RsReportChartViewSid["YEAR_COLUMN"] = 4] = "YEAR_COLUMN";
})(RsReportChartViewSid || (exports.RsReportChartViewSid = RsReportChartViewSid = {}));
/** A list of services. */
var WlServiceServiceSid;
(function (WlServiceServiceSid) {
    /** Appointment */
    WlServiceServiceSid[WlServiceServiceSid["APPOINTMENT"] = 1] = "APPOINTMENT";
    /** Belts */
    WlServiceServiceSid[WlServiceServiceSid["BELT"] = 6] = "BELT";
    /** Bookable asset */
    WlServiceServiceSid[WlServiceServiceSid["BOOKABLE_ASSET"] = 4] = "BOOKABLE_ASSET";
    /** Class */
    WlServiceServiceSid[WlServiceServiceSid["CLASSES"] = 2] = "CLASSES";
    /** Event */
    WlServiceServiceSid[WlServiceServiceSid["EVENT"] = 3] = "EVENT";
    /** Gym visits */
    WlServiceServiceSid[WlServiceServiceSid["GYM"] = 5] = "GYM";
})(WlServiceServiceSid || (exports.WlServiceServiceSid = WlServiceServiceSid = {}));
/** A list of client booking flow types. */
var RsBusinessCategorySid;
(function (RsBusinessCategorySid) {
    /** Musician schools */
    RsBusinessCategorySid[RsBusinessCategorySid["EDUCATION"] = 6] = "EDUCATION";
    /** Traditional medicine */
    RsBusinessCategorySid[RsBusinessCategorySid["HEALTH"] = 3] = "HEALTH";
    /** Spa saloons */
    RsBusinessCategorySid[RsBusinessCategorySid["RECREATION"] = 2] = "RECREATION";
    /** Yoga and Fitness studios and gyms */
    RsBusinessCategorySid[RsBusinessCategorySid["SPORT"] = 1] = "SPORT";
})(RsBusinessCategorySid || (exports.RsBusinessCategorySid = RsBusinessCategorySid = {}));
/** Business status for managing claim request behavior. */
var WlBusinessClaimBusinessClaimStatusSid;
(function (WlBusinessClaimBusinessClaimStatusSid) {
    /** Business HAD a contract with WL, but decided not to continue it, i.e. it is a churned business, or a business */
    WlBusinessClaimBusinessClaimStatusSid[WlBusinessClaimBusinessClaimStatusSid["CHURN"] = 4] = "CHURN";
    /** Business has a contract with WL, be it a trial (with all fields updated and actual), or a subscription */
    WlBusinessClaimBusinessClaimStatusSid[WlBusinessClaimBusinessClaimStatusSid["CUSTOMER"] = 3] = "CUSTOMER";
    /** Business is not a WL client and never was, i.e. it is a true prospect business */
    WlBusinessClaimBusinessClaimStatusSid[WlBusinessClaimBusinessClaimStatusSid["PROSPECT"] = 1] = "PROSPECT";
    /** Business claiming process started, the contact information was verified, the trial has started, but company */
    WlBusinessClaimBusinessClaimStatusSid[WlBusinessClaimBusinessClaimStatusSid["UNVERIFY"] = 2] = "UNVERIFY";
})(WlBusinessClaimBusinessClaimStatusSid || (exports.WlBusinessClaimBusinessClaimStatusSid = WlBusinessClaimBusinessClaimStatusSid = {}));
/** A list of currencies. */
var CoreLocaleCurrencySid;
(function (CoreLocaleCurrencySid) {
    /** United Arab Emirates dirham */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["AED"] = 11] = "AED";
    /** Australian dollar */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["AUD"] = 6] = "AUD";
    /** Bermudian Dollar */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["BMD"] = 18] = "BMD";
    /** Bahamian dollar */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["BSD"] = 19] = "BSD";
    /** Canadian dollar */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["CAD"] = 4] = "CAD";
    /** Egypt Pound */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["EGP"] = 8] = "EGP";
    /** Euro */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["EUR"] = 13] = "EUR";
    /** British pound */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["GBP"] = 3] = "GBP";
    /** Kuwaiti dinar */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["KWD"] = 14] = "KWD";
    /** Cayman Islands dollar */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["KYD"] = 5] = "KYD";
    /** Mauritian Rupee */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["MUR"] = 16] = "MUR";
    /** New Zealand Dollar */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["NZD"] = 10] = "NZD";
    /** Philippines Pesco */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["PHP"] = 12] = "PHP";
    /** Saudi Riyal */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["SAR"] = 15] = "SAR";
    /** Singapore dollar */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["SGD"] = 20] = "SGD";
    /** Unknown code */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["UNKNOWN"] = 2] = "UNKNOWN";
    /** US dollars */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["USD"] = 1] = "USD";
    /** West African CFA franc */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["XOF"] = 17] = "XOF";
    /** South African rand */
    CoreLocaleCurrencySid[CoreLocaleCurrencySid["ZAR"] = 7] = "ZAR";
})(CoreLocaleCurrencySid || (exports.CoreLocaleCurrencySid = CoreLocaleCurrencySid = {}));
/** Types of the possible ranks in different business. */
var RsRankTypeSid;
(function (RsRankTypeSid) {
    /** Belts for Martial Arts */
    RsRankTypeSid[RsRankTypeSid["BELT"] = 1] = "BELT";
})(RsRankTypeSid || (exports.RsRankTypeSid = RsRankTypeSid = {}));
/** List of available data center regions. */
var CoreAmazonRegionAmazonRegionSid;
(function (CoreAmazonRegionAmazonRegionSid) {
    /** Sydney, Australia */
    CoreAmazonRegionAmazonRegionSid[CoreAmazonRegionAmazonRegionSid["AP_SOUTHEAST_2"] = 2] = "AP_SOUTHEAST_2";
    /** North Virginia, USA */
    CoreAmazonRegionAmazonRegionSid[CoreAmazonRegionAmazonRegionSid["US_EAST_1"] = 1] = "US_EAST_1";
})(CoreAmazonRegionAmazonRegionSid || (exports.CoreAmazonRegionAmazonRegionSid = CoreAmazonRegionAmazonRegionSid = {}));
/** String identifiers for gender. */
var AGenderSid;
(function (AGenderSid) {
    /** Female gender */
    AGenderSid[AGenderSid["FEMALE"] = 2] = "FEMALE";
    /** Male gender */
    AGenderSid[AGenderSid["MALE"] = 1] = "MALE";
    /** Gender is undefined in cases where the user preferred not to identify their gender */
    AGenderSid[AGenderSid["UNDEFINED"] = 3] = "UNDEFINED";
})(AGenderSid || (exports.AGenderSid = AGenderSid = {}));
/** A class for the days of the week. */
var ADateWeekSid;
(function (ADateWeekSid) {
    /** Friday */
    ADateWeekSid[ADateWeekSid["FRIDAY"] = 5] = "FRIDAY";
    /** Monday */
    ADateWeekSid[ADateWeekSid["MONDAY"] = 1] = "MONDAY";
    /** Saturday */
    ADateWeekSid[ADateWeekSid["SATURDAY"] = 6] = "SATURDAY";
    /** Sunday */
    ADateWeekSid[ADateWeekSid["SUNDAY"] = 7] = "SUNDAY";
    /** Thursday */
    ADateWeekSid[ADateWeekSid["THURSDAY"] = 4] = "THURSDAY";
    /** Tuesday */
    ADateWeekSid[ADateWeekSid["TUESDAY"] = 2] = "TUESDAY";
    /** Wednesday */
    ADateWeekSid[ADateWeekSid["WEDNESDAY"] = 3] = "WEDNESDAY";
})(ADateWeekSid || (exports.ADateWeekSid = ADateWeekSid = {}));
/** List of class tab objects. */
var WlClassesTabTabSid;
(function (WlClassesTabTabSid) {
    /** Enrolments */
    WlClassesTabTabSid[WlClassesTabTabSid["ENROLLMENT"] = 2] = "ENROLLMENT";
    /** Bookable Assets */
    WlClassesTabTabSid[WlClassesTabTabSid["RESOURCE"] = 4] = "RESOURCE";
    /** Appointments */
    WlClassesTabTabSid[WlClassesTabTabSid["SERVICE"] = 3] = "SERVICE";
    /** Classes */
    WlClassesTabTabSid[WlClassesTabTabSid["TRAINING"] = 1] = "TRAINING";
})(WlClassesTabTabSid || (exports.WlClassesTabTabSid = WlClassesTabTabSid = {}));
/** List of image types. */
var CoreDriveDriveTypeSid;
(function (CoreDriveDriveTypeSid) {
    /** Bmp image */
    CoreDriveDriveTypeSid[CoreDriveDriveTypeSid["BMP"] = 4] = "BMP";
    /** Gif image */
    CoreDriveDriveTypeSid[CoreDriveDriveTypeSid["GIF"] = 1] = "GIF";
    /** Jpeg image */
    CoreDriveDriveTypeSid[CoreDriveDriveTypeSid["JPEG"] = 2] = "JPEG";
    /** Png image */
    CoreDriveDriveTypeSid[CoreDriveDriveTypeSid["PNG"] = 3] = "PNG";
})(CoreDriveDriveTypeSid || (exports.CoreDriveDriveTypeSid = CoreDriveDriveTypeSid = {}));
/** Day time periods. */
var RsScheduleTimeSid;
(function (RsScheduleTimeSid) {
    /** Afternoon */
    RsScheduleTimeSid[RsScheduleTimeSid["AFTERNOON"] = 2] = "AFTERNOON";
    /** Evening */
    RsScheduleTimeSid[RsScheduleTimeSid["EVENING"] = 3] = "EVENING";
    /** Morning */
    RsScheduleTimeSid[RsScheduleTimeSid["MORNING"] = 1] = "MORNING";
})(RsScheduleTimeSid || (exports.RsScheduleTimeSid = RsScheduleTimeSid = {}));
/** A class for filter states for flagged fields. */
var AFlagSid;
(function (AFlagSid) {
    /** All records */
    AFlagSid[AFlagSid["ALL"] = 1] = "ALL";
    /** Records with the flag turned off */
    AFlagSid[AFlagSid["OFF"] = 2] = "OFF";
    /** Records with the flag turned on */
    AFlagSid[AFlagSid["ON"] = 3] = "ON";
})(AFlagSid || (exports.AFlagSid = AFlagSid = {}));
/** List of intents of the user in the business. */
var WlLoginMemberIntentsMemberIntentsSid;
(function (WlLoginMemberIntentsMemberIntentsSid) {
    /** Customer asks about payment methods, financing, invoices, payment issues, or billing to insurance */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["BILLING_INQUIRY"] = 1] = "BILLING_INQUIRY";
    /** Customer clearly expresses intent to schedule a new class, appointment, event, or asset */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["BOOKING"] = 2] = "BOOKING";
    /** Customer explicitly asks to cancel an existing booking with no intent to reschedule */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["BOOKING_CANCELLATION"] = 3] = "BOOKING_CANCELLATION";
    /** Customer explicitly asks to change the date, time, or provider for an existing booking */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["BOOKING_RESCHEDULE"] = 4] = "BOOKING_RESCHEDULE";
    /** Customer requests operational or logistical details about the business (address, hours, contacts) */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["BUSINESS_INFORMATION"] = 5] = "BUSINESS_INFORMATION";
    /** Customer asks whether a specific instructor, staff member, or service is available */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["CHECK_AVAILABILITY"] = 6] = "CHECK_AVAILABILITY";
    /** Customer asks general wellness or fitness questions not tied to appointments, pricing, or availability */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["GENERAL_INQUIRY"] = 7] = "GENERAL_INQUIRY";
    /** Customer wants to leave a voicemail, voice note, or message for staff */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["LEAVE_MESSAGE"] = 8] = "LEAVE_MESSAGE";
    /** Customer requests cost or pricing details for services */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["PRICING_INQUIRY"] = 9] = "PRICING_INQUIRY";
    /** Customer asks about packages, session passes, or membership options */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["PURCHASE_OPTIONS_INQUIRY"] = 10] = "PURCHASE_OPTIONS_INQUIRY";
    /** Customer mentions they were referred by someone */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["REFERRAL"] = 11] = "REFERRAL";
    /** Customer expresses interest in a service without asking about pricing or availability specifically */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["SERVICE_INQUIRY"] = 12] = "SERVICE_INQUIRY";
    /** Customer requests to speak with a staff member, receive a callback, or staff follow-up is needed */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["STAFF_ASSISTANCE_REQUEST"] = 13] = "STAFF_ASSISTANCE_REQUEST";
    /** Customer insists on immediate live transfer to a staff member */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["TRANSFER_CALL_TO_STAFF"] = 14] = "TRANSFER_CALL_TO_STAFF";
    /** Customer asks about their already scheduled or upcoming appointments */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["VIEW_BOOKINGS"] = 15] = "VIEW_BOOKINGS";
    /** Customer asks about their purchased memberships, session passes, or packages */
    WlLoginMemberIntentsMemberIntentsSid[WlLoginMemberIntentsMemberIntentsSid["VIEW_CLIENT_PO_DETAILS"] = 16] = "VIEW_CLIENT_PO_DETAILS";
})(WlLoginMemberIntentsMemberIntentsSid || (exports.WlLoginMemberIntentsMemberIntentsSid = WlLoginMemberIntentsMemberIntentsSid = {}));
/** The source of a visit. */
var WlModeModeSid;
(function (WlModeModeSid) {
    /** Action made via Api Endpoint. Default for leads created via API, unless overridden */
    WlModeModeSid[WlModeModeSid["API"] = 28] = "API";
    /** Registered through `Azure` */
    WlModeModeSid[WlModeModeSid["AZURE"] = 21] = "AZURE";
    /** Visit has been created by `CENTRED` */
    WlModeModeSid[WlModeModeSid["CENTRED"] = 23] = "CENTRED";
    /** Visit has been created by `ClassPass` */
    WlModeModeSid[WlModeModeSid["CLASSPASS_BOOKING"] = 8] = "CLASSPASS_BOOKING";
    /** Debt paid via collections */
    WlModeModeSid[WlModeModeSid["COLLECTIONS"] = 22] = "COLLECTIONS";
    /** Debt paid via collections */
    WlModeModeSid[WlModeModeSid["COLLECTIONS_FUTURE"] = 26] = "COLLECTIONS_FUTURE";
    /** Action from Concerto */
    WlModeModeSid[WlModeModeSid["CONCERTO"] = 27] = "CONCERTO";
    /** Action made via email */
    WlModeModeSid[WlModeModeSid["EMAIL"] = 18] = "EMAIL";
    /** Indicating that the source is Facebook */
    WlModeModeSid[WlModeModeSid["FACEBOOK"] = 20] = "FACEBOOK";
    /** Action from Go High Level */
    WlModeModeSid[WlModeModeSid["GO_HIGH_LEVEL"] = 30] = "GO_HIGH_LEVEL";
    /** Indicating that the source is Google */
    WlModeModeSid[WlModeModeSid["GOOGLE"] = 19] = "GOOGLE";
    /** Visit has been created by Google Booking Service */
    WlModeModeSid[WlModeModeSid["GOOGLE_BOOKING"] = 7] = "GOOGLE_BOOKING";
    /** Visit has been created by `GymPass` */
    WlModeModeSid[WlModeModeSid["GYMPASS_BOOKING"] = 14] = "GYMPASS_BOOKING";
    /** Visit was created during import */
    WlModeModeSid[WlModeModeSid["IMPORT"] = 5] = "IMPORT";
    /** Action made via microsite */
    WlModeModeSid[WlModeModeSid["MICROSITE"] = 12] = "MICROSITE";
    /** Indicating that the source is Microsoft */
    WlModeModeSid[WlModeModeSid["MICROSOFT"] = 24] = "MICROSOFT";
    /** Client booked session on My Presence Site */
    WlModeModeSid[WlModeModeSid["MY_PRESENCE_SITE"] = 13] = "MY_PRESENCE_SITE";
    /** Action made via SMS */
    WlModeModeSid[WlModeModeSid["SMS"] = 17] = "SMS";
    /** Staff booked session from spa backend */
    WlModeModeSid[WlModeModeSid["SPA_BACKEND"] = 4] = "SPA_BACKEND";
    /** Client booked session from spa frontend */
    WlModeModeSid[WlModeModeSid["SPA_FRONTEND"] = 3] = "SPA_FRONTEND";
    /** Created by system */
    WlModeModeSid[WlModeModeSid["SYSTEM"] = 10] = "SYSTEM";
    /** Means that we did not define mode */
    WlModeModeSid[WlModeModeSid["UNDEFINED"] = 6] = "UNDEFINED";
    /** Client booked session from Attendance Web App */
    WlModeModeSid[WlModeModeSid["WEB_APP_ATTENDANCE"] = 16] = "WEB_APP_ATTENDANCE";
    /** Client checked-in for the session through Check-In Web App */
    WlModeModeSid[WlModeModeSid["WEB_APP_CHECK_IN"] = 15] = "WEB_APP_CHECK_IN";
    /** Staff booked session for client from website backend */
    WlModeModeSid[WlModeModeSid["WEB_BACKEND"] = 2] = "WEB_BACKEND";
    /** Client booked session from website frontend */
    WlModeModeSid[WlModeModeSid["WEB_FRONTEND"] = 1] = "WEB_FRONTEND";
    /** Action made via widget (purchase, book etc) */
    WlModeModeSid[WlModeModeSid["WIDGET"] = 11] = "WIDGET";
    /** Action from Zapier */
    WlModeModeSid[WlModeModeSid["ZAPIER"] = 25] = "ZAPIER";
})(WlModeModeSid || (exports.WlModeModeSid = WlModeModeSid = {}));
/** List of member vaccination statuses. */
var WlLoginMemberVaccinationStatusVaccinationStatusSid;
(function (WlLoginMemberVaccinationStatusVaccinationStatusSid) {
    /** Fully Vaccinated */
    WlLoginMemberVaccinationStatusVaccinationStatusSid[WlLoginMemberVaccinationStatusVaccinationStatusSid["FULL"] = 3] = "FULL";
    /** Unvaccinated */
    WlLoginMemberVaccinationStatusVaccinationStatusSid[WlLoginMemberVaccinationStatusVaccinationStatusSid["NONE"] = 1] = "NONE";
    /** Partially Vaccinated */
    WlLoginMemberVaccinationStatusVaccinationStatusSid[WlLoginMemberVaccinationStatusVaccinationStatusSid["PARTIAL"] = 2] = "PARTIAL";
    /** Unknown */
    WlLoginMemberVaccinationStatusVaccinationStatusSid[WlLoginMemberVaccinationStatusVaccinationStatusSid["UNKNOWN"] = 4] = "UNKNOWN";
})(WlLoginMemberVaccinationStatusVaccinationStatusSid || (exports.WlLoginMemberVaccinationStatusVaccinationStatusSid = WlLoginMemberVaccinationStatusVaccinationStatusSid = {}));
/** String identifiers for rs.privilege.role. */
var RsPrivilegeRoleSid;
(function (RsPrivilegeRoleSid) {
    /** Staff role business owner */
    RsPrivilegeRoleSid[RsPrivilegeRoleSid["BUSINESS_OWNER"] = 1] = "BUSINESS_OWNER";
    /** Staff role front desk */
    RsPrivilegeRoleSid[RsPrivilegeRoleSid["FRONT_DESK"] = 4] = "FRONT_DESK";
    /** Staff role instructor */
    RsPrivilegeRoleSid[RsPrivilegeRoleSid["INSTRUCTOR"] = 3] = "INSTRUCTOR";
    /** Staff role location owner */
    RsPrivilegeRoleSid[RsPrivilegeRoleSid["LOCATION_OWNER"] = 2] = "LOCATION_OWNER";
})(RsPrivilegeRoleSid || (exports.RsPrivilegeRoleSid = RsPrivilegeRoleSid = {}));
/** List of embed video sources. */
var WlVideoVideoEmbedSourceSid;
(function (WlVideoVideoEmbedSourceSid) {
    /** Les Mills */
    WlVideoVideoEmbedSourceSid[WlVideoVideoEmbedSourceSid["LES_MILLS"] = 4] = "LES_MILLS";
    /** Vimeo */
    WlVideoVideoEmbedSourceSid[WlVideoVideoEmbedSourceSid["VIMEO"] = 2] = "VIMEO";
    /** Wistia */
    WlVideoVideoEmbedSourceSid[WlVideoVideoEmbedSourceSid["WISTIA"] = 3] = "WISTIA";
    /** YouTube */
    WlVideoVideoEmbedSourceSid[WlVideoVideoEmbedSourceSid["YOUTUBE"] = 1] = "YOUTUBE";
})(WlVideoVideoEmbedSourceSid || (exports.WlVideoVideoEmbedSourceSid = WlVideoVideoEmbedSourceSid = {}));
/** A list of two answers for any question: Yes or No. */
var CoreSidYesNoSid;
(function (CoreSidYesNoSid) {
    /** The answer is "no" */
    CoreSidYesNoSid[CoreSidYesNoSid["NO"] = 2] = "NO";
    /** The answer is "yes" */
    CoreSidYesNoSid[CoreSidYesNoSid["YES"] = 1] = "YES";
})(CoreSidYesNoSid || (exports.CoreSidYesNoSid = CoreSidYesNoSid = {}));
/** List of video types. */
var WlVideoVideoSourceSid;
(function (WlVideoVideoSourceSid) {
    /** Embedded video */
    WlVideoVideoSourceSid[WlVideoVideoSourceSid["EMBED"] = 2] = "EMBED";
    /** Uploaded video */
    WlVideoVideoSourceSid[WlVideoVideoSourceSid["UPLOAD"] = 1] = "UPLOAD";
})(WlVideoVideoSourceSid || (exports.WlVideoVideoSourceSid = WlVideoVideoSourceSid = {}));
/** List of possible sort order. */
var CoreSidSortOrderSid;
(function (CoreSidSortOrderSid) {
    /** Ascending order */
    CoreSidSortOrderSid[CoreSidSortOrderSid["ASC"] = 2] = "ASC";
    /** Descending order */
    CoreSidSortOrderSid[CoreSidSortOrderSid["DESC"] = 1] = "DESC";
})(CoreSidSortOrderSid || (exports.CoreSidSortOrderSid = CoreSidSortOrderSid = {}));
/** List of video catalog sorting types. */
var WlVideoCatalogFilterSortFilterSortSid;
(function (WlVideoCatalogFilterSortFilterSortSid) {
    /** Sort alphabetically */
    WlVideoCatalogFilterSortFilterSortSid[WlVideoCatalogFilterSortFilterSortSid["ALPHABET"] = 1] = "ALPHABET";
    /** Sort by custom */
    WlVideoCatalogFilterSortFilterSortSid[WlVideoCatalogFilterSortFilterSortSid["CUSTOM"] = 4] = "CUSTOM";
    /** Sort by most recently added */
    WlVideoCatalogFilterSortFilterSortSid[WlVideoCatalogFilterSortFilterSortSid["RECENT"] = 2] = "RECENT";
    /** Sorted by number of views */
    WlVideoCatalogFilterSortFilterSortSid[WlVideoCatalogFilterSortFilterSortSid["VIEW"] = 3] = "VIEW";
})(WlVideoCatalogFilterSortFilterSortSid || (exports.WlVideoCatalogFilterSortFilterSortSid = WlVideoCatalogFilterSortFilterSortSid = {}));
/** List of different types for landing pages based on business types. */
var RsHomeTourSid;
(function (RsHomeTourSid) {
    /** Barbershops */
    RsHomeTourSid[RsHomeTourSid["BARBERSHOP"] = 26] = "BARBERSHOP";
    /** Boot camps */
    RsHomeTourSid[RsHomeTourSid["BOOTCAMP"] = 24] = "BOOTCAMP";
    /** Boxing studios */
    RsHomeTourSid[RsHomeTourSid["BOXING"] = 25] = "BOXING";
    /** Special industry free landing page with only contact us form */
    RsHomeTourSid[RsHomeTourSid["BUSINESS_MANAGEMENT"] = 21] = "BUSINESS_MANAGEMENT";
    /** Health clubs */
    RsHomeTourSid[RsHomeTourSid["CLUB"] = 10] = "CLUB";
    /** Affiliate Gym */
    RsHomeTourSid[RsHomeTourSid["CROSSFIT"] = 9] = "CROSSFIT";
    /** Dance studios */
    RsHomeTourSid[RsHomeTourSid["DANCE"] = 11] = "DANCE";
    /** Dental studios */
    RsHomeTourSid[RsHomeTourSid["DENTAL"] = 14] = "DENTAL";
    /** Fitness gyms */
    RsHomeTourSid[RsHomeTourSid["FITNESS"] = 6] = "FITNESS";
    /** Functional fitness also known as functional training or functional movement */
    RsHomeTourSid[RsHomeTourSid["FUNCTIONAL_FITNESS"] = 29] = "FUNCTIONAL_FITNESS";
    /** Fitness gyms */
    RsHomeTourSid[RsHomeTourSid["GYM"] = 22] = "GYM";
    /** Health clubs */
    RsHomeTourSid[RsHomeTourSid["HEALTH_CLUB"] = 23] = "HEALTH_CLUB";
    /** Health and beauty salons at one place */
    RsHomeTourSid[RsHomeTourSid["INTEGRATIVE_HEALTH_CENTER"] = 30] = "INTEGRATIVE_HEALTH_CENTER";
    /** Martial arts */
    RsHomeTourSid[RsHomeTourSid["MARTIAL_ART"] = 8] = "MARTIAL_ART";
    /** Massage salons */
    RsHomeTourSid[RsHomeTourSid["MASSAGE"] = 4] = "MASSAGE";
    /** Massage salons */
    RsHomeTourSid[RsHomeTourSid["MEDICAL_SPA"] = 28] = "MEDICAL_SPA";
    /** Alternative medical offices */
    RsHomeTourSid[RsHomeTourSid["MEDICINE_ALTERNATIVE"] = 15] = "MEDICINE_ALTERNATIVE";
    /** Hospitals and private doctors */
    RsHomeTourSid[RsHomeTourSid["MEDICINE_TRADITIONAL"] = 13] = "MEDICINE_TRADITIONAL";
    /** Music schools */
    RsHomeTourSid[RsHomeTourSid["MUSIC"] = 19] = "MUSIC";
    /** Personal trainings */
    RsHomeTourSid[RsHomeTourSid["PERSONAL_TRAINING"] = 5] = "PERSONAL_TRAINING";
    /** Pilates */
    RsHomeTourSid[RsHomeTourSid["PILATES"] = 7] = "PILATES";
    /** Play cafes */
    RsHomeTourSid[RsHomeTourSid["PLAY_CAFE"] = 32] = "PLAY_CAFE";
    /** Pole dancing studios */
    RsHomeTourSid[RsHomeTourSid["POLE_DANCING"] = 18] = "POLE_DANCING";
    /** Salons */
    RsHomeTourSid[RsHomeTourSid["SALON"] = 3] = "SALON";
    /** Spa salons */
    RsHomeTourSid[RsHomeTourSid["SPA"] = 2] = "SPA";
    /** Spinning */
    RsHomeTourSid[RsHomeTourSid["SPINNING"] = 17] = "SPINNING";
    /** Swim schools */
    RsHomeTourSid[RsHomeTourSid["SWIM_SCHOOL"] = 33] = "SWIM_SCHOOL";
    /** Tattoo salons */
    RsHomeTourSid[RsHomeTourSid["TATTOO"] = 31] = "TATTOO";
    /** Tours and events */
    RsHomeTourSid[RsHomeTourSid["TOUR"] = 12] = "TOUR";
    /** Wellness Centers */
    RsHomeTourSid[RsHomeTourSid["WELLNESS_CENTER"] = 20] = "WELLNESS_CENTER";
    /** Yoga */
    RsHomeTourSid[RsHomeTourSid["YOGA"] = 1] = "YOGA";
    /** Zumba */
    RsHomeTourSid[RsHomeTourSid["ZUMBA"] = 27] = "ZUMBA";
})(RsHomeTourSid || (exports.RsHomeTourSid = RsHomeTourSid = {}));
/** List of different directories, which can use wellnessliving as a source of data. */
var RsProjectSid;
(function (RsProjectSid) {
    /** WellnessLiving Explorer */
    RsProjectSid[RsProjectSid["WELLNESSLIVING"] = 4] = "WELLNESSLIVING";
})(RsProjectSid || (exports.RsProjectSid = RsProjectSid = {}));
/** List of announcement statuses. */
var WlAnnouncementAnnouncementStatusEnum;
(function (WlAnnouncementAnnouncementStatusEnum) {
    /** Announcement does not have publish/unpublish dates */
    WlAnnouncementAnnouncementStatusEnum[WlAnnouncementAnnouncementStatusEnum["DRAFT"] = 1] = "DRAFT";
    /** Announcement currently is published */
    WlAnnouncementAnnouncementStatusEnum[WlAnnouncementAnnouncementStatusEnum["PUBLISH"] = 2] = "PUBLISH";
    /** Announcement scheduled for publishing */
    WlAnnouncementAnnouncementStatusEnum[WlAnnouncementAnnouncementStatusEnum["SCHEDULE"] = 3] = "SCHEDULE";
    /** Announcement previously will be published, but now not published */
    WlAnnouncementAnnouncementStatusEnum[WlAnnouncementAnnouncementStatusEnum["UNPUBLISH"] = 4] = "UNPUBLISH";
})(WlAnnouncementAnnouncementStatusEnum || (exports.WlAnnouncementAnnouncementStatusEnum = WlAnnouncementAnnouncementStatusEnum = {}));
/** List of fields by which you can sort. */
var WlAnnouncementSortFieldSid;
(function (WlAnnouncementSortFieldSid) {
    /** Created by field */
    WlAnnouncementSortFieldSid[WlAnnouncementSortFieldSid["CREATED_BY"] = 1] = "CREATED_BY";
    /** Created date field */
    WlAnnouncementSortFieldSid[WlAnnouncementSortFieldSid["CREATED_DATE"] = 2] = "CREATED_DATE";
    /** Description field */
    WlAnnouncementSortFieldSid[WlAnnouncementSortFieldSid["DESCRIPTION"] = 3] = "DESCRIPTION";
    /** Image field */
    WlAnnouncementSortFieldSid[WlAnnouncementSortFieldSid["IMAGE"] = 4] = "IMAGE";
    /** Location field */
    WlAnnouncementSortFieldSid[WlAnnouncementSortFieldSid["LOCATION"] = 5] = "LOCATION";
    /** Publish date field */
    WlAnnouncementSortFieldSid[WlAnnouncementSortFieldSid["PUBLISH_DATE"] = 6] = "PUBLISH_DATE";
    /** Status field */
    WlAnnouncementSortFieldSid[WlAnnouncementSortFieldSid["STATUS"] = 7] = "STATUS";
    /** Title field */
    WlAnnouncementSortFieldSid[WlAnnouncementSortFieldSid["TITLE"] = 8] = "TITLE";
    /** Unpublish date field */
    WlAnnouncementSortFieldSid[WlAnnouncementSortFieldSid["UNPUBLISH_DATE"] = 9] = "UNPUBLISH_DATE";
})(WlAnnouncementSortFieldSid || (exports.WlAnnouncementSortFieldSid = WlAnnouncementSortFieldSid = {}));
/** A list of payment methods. */
var RsPayMethodSid;
(function (RsPayMethodSid) {
    /** Payment with personal user account (rs.pay.account) */
    RsPayMethodSid[RsPayMethodSid["ACCOUNT"] = 7] = "ACCOUNT";
    /** ACH system (USA-specific direct banking transactions) */
    RsPayMethodSid[RsPayMethodSid["ACH"] = 9] = "ACH";
    /** Payment with cash */
    RsPayMethodSid[RsPayMethodSid["CASH"] = 4] = "CASH";
    /** Payment with a cheque */
    RsPayMethodSid[RsPayMethodSid["CHEQUE"] = 5] = "CHEQUE";
    /** Payment with a coupon */
    RsPayMethodSid[RsPayMethodSid["COUPON"] = 8] = "COUPON";
    /** Direct Entry system (australian-specific direct banking transactions) */
    RsPayMethodSid[RsPayMethodSid["DIRECT_ENTRY"] = 10] = "DIRECT_ENTRY";
    /** Online payment. Card not present */
    RsPayMethodSid[RsPayMethodSid["ECOMMERCE"] = 2] = "ECOMMERCE";
    /** Payment with an external terminal */
    RsPayMethodSid[RsPayMethodSid["EXTERNAL"] = 6] = "EXTERNAL";
    /** Special method to be used for migration process */
    RsPayMethodSid[RsPayMethodSid["IMPORT_ACCRUAL"] = 11] = "IMPORT_ACCRUAL";
    /** Payment method at a Points of sale */
    RsPayMethodSid[RsPayMethodSid["POS"] = 1] = "POS";
})(RsPayMethodSid || (exports.RsPayMethodSid = RsPayMethodSid = {}));
/** Program types. */
var RsProgramSid;
(function (RsProgramSid) {
    /** Special Membership that does not allow client to visit anything but fill client's account after purchase */
    RsProgramSid[RsProgramSid["ACCOUNT_MEMBERSHIP"] = 21] = "ACCOUNT_MEMBERSHIP";
    /** Special Time-Based pass that does not allow client to visit anything but fill client's account after purchase */
    RsProgramSid[RsProgramSid["ACCOUNT_PASS"] = 20] = "ACCOUNT_PASS";
    /** Class Guest pass */
    RsProgramSid[RsProgramSid["CLASS_GUEST"] = 25] = "CLASS_GUEST";
    /** Class Pass */
    RsProgramSid[RsProgramSid["CLASS_LIMIT"] = 1] = "CLASS_LIMIT";
    /** Class Membership */
    RsProgramSid[RsProgramSid["CLASS_MEMBERSHIP"] = 5] = "CLASS_MEMBERSHIP";
    /** Class Time-Based pass */
    RsProgramSid[RsProgramSid["CLASS_PASS"] = 6] = "CLASS_PASS";
    /** WellnessLiving Promotion */
    RsProgramSid[RsProgramSid["CLASS_PROSPECT"] = 4] = "CLASS_PROSPECT";
    /** Daily Deal Integration: not for sale, only redemption codes */
    RsProgramSid[RsProgramSid["DEAL"] = 7] = "DEAL";
    /** Enrollment */
    RsProgramSid[RsProgramSid["ENROLLMENT"] = 14] = "ENROLLMENT";
    /** "Wellness Program" membership */
    RsProgramSid[RsProgramSid["INSURANCE_MEMBERSHIP"] = 22] = "INSURANCE_MEMBERSHIP";
    /** Package */
    RsProgramSid[RsProgramSid["PACKAGE"] = 3] = "PACKAGE";
    /** Resource Duration Pass */
    RsProgramSid[RsProgramSid["RESOURCE_DURATION"] = 19] = "RESOURCE_DURATION";
    /** Resource Limit Pass */
    RsProgramSid[RsProgramSid["RESOURCE_LIMIT"] = 15] = "RESOURCE_LIMIT";
    /** Resource Membership */
    RsProgramSid[RsProgramSid["RESOURCE_MEMBERSHIP"] = 16] = "RESOURCE_MEMBERSHIP";
    /** Resource Time-Based pass */
    RsProgramSid[RsProgramSid["RESOURCE_PASS"] = 17] = "RESOURCE_PASS";
    /** Appointment Duration Pass */
    RsProgramSid[RsProgramSid["SERVICE_DURATION"] = 18] = "SERVICE_DURATION";
    /** Appointment session pass */
    RsProgramSid[RsProgramSid["SERVICE_LIMIT"] = 11] = "SERVICE_LIMIT";
    /** Appointment membership */
    RsProgramSid[RsProgramSid["SERVICE_MEMBERSHIP"] = 12] = "SERVICE_MEMBERSHIP";
    /** Appointment Time-Based pass */
    RsProgramSid[RsProgramSid["SERVICE_PASS"] = 13] = "SERVICE_PASS";
    /** Video Membership */
    RsProgramSid[RsProgramSid["VIDEO_MEMBERSHIP"] = 23] = "VIDEO_MEMBERSHIP";
    /** Gym Guest pass */
    RsProgramSid[RsProgramSid["VISIT_GUEST"] = 24] = "VISIT_GUEST";
    /** Gym Pass */
    RsProgramSid[RsProgramSid["VISIT_LIMIT"] = 8] = "VISIT_LIMIT";
    /** Gym Membership */
    RsProgramSid[RsProgramSid["VISIT_MEMBERSHIP"] = 9] = "VISIT_MEMBERSHIP";
    /** Gym Time-Based pass */
    RsProgramSid[RsProgramSid["VISIT_PASS"] = 10] = "VISIT_PASS";
})(RsProgramSid || (exports.RsProgramSid = RsProgramSid = {}));
/** Program types. */
var RsProgramTypeSid;
(function (RsProgramTypeSid) {
    /** Duration Pass */
    RsProgramTypeSid[RsProgramTypeSid["DURATION"] = 7] = "DURATION";
    /** Guest passes */
    RsProgramTypeSid[RsProgramTypeSid["GUEST"] = 8] = "GUEST";
    /** Class pass */
    RsProgramTypeSid[RsProgramTypeSid["LIMIT"] = 1] = "LIMIT";
    /** This promotion is a membership */
    RsProgramTypeSid[RsProgramTypeSid["MEMBERSHIP"] = 3] = "MEMBERSHIP";
    /** Type for programs that are not presented in {@link RsProgramSid} */
    RsProgramTypeSid[RsProgramTypeSid["OTHER"] = 6] = "OTHER";
    /** Packages and Daily deals */
    RsProgramTypeSid[RsProgramTypeSid["PACKAGE"] = 4] = "PACKAGE";
    /** Unlimited pass. Day/week/month pass */
    RsProgramTypeSid[RsProgramTypeSid["PASS"] = 2] = "PASS";
    /** Special WellnessLiving promote passes that allow to visit specific classes to get acquainted with the business */
    RsProgramTypeSid[RsProgramTypeSid["PROSPECT"] = 5] = "PROSPECT";
})(RsProgramTypeSid || (exports.RsProgramTypeSid = RsProgramTypeSid = {}));
/** A class for managing time intervals. */
var ADurationSid;
(function (ADurationSid) {
    /** Days */
    ADurationSid[ADurationSid["DAY"] = 4] = "DAY";
    /** Hours */
    ADurationSid[ADurationSid["HOUR"] = 3] = "HOUR";
    /** Minutes */
    ADurationSid[ADurationSid["MINUTE"] = 2] = "MINUTE";
    /** Months */
    ADurationSid[ADurationSid["MONTH"] = 5] = "MONTH";
    /** Seconds */
    ADurationSid[ADurationSid["SECOND"] = 1] = "SECOND";
    /** Weeks (7 days) */
    ADurationSid[ADurationSid["WEEK"] = 7] = "WEEK";
    /** Two weeks (14 days) */
    ADurationSid[ADurationSid["WEEK2"] = 9] = "WEEK2";
    /** Foursome of weeks (28 days) */
    ADurationSid[ADurationSid["WEEK4"] = 8] = "WEEK4";
    /** Years */
    ADurationSid[ADurationSid["YEAR"] = 6] = "YEAR";
})(ADurationSid || (exports.ADurationSid = ADurationSid = {}));
/** Class to process string identifiers for duration types */
var RsDurationTypeSid;
(function (RsDurationTypeSid) {
    /** Specific date. Example, 2013-12-24 */
    RsDurationTypeSid[RsDurationTypeSid["DATE"] = 2] = "DATE";
    /** No ending date */
    RsDurationTypeSid[RsDurationTypeSid["ETERNAL"] = 3] = "ETERNAL";
    /** Examples: 12 days, 2 months, 2 hours etc */
    RsDurationTypeSid[RsDurationTypeSid["PERIOD"] = 1] = "PERIOD";
})(RsDurationTypeSid || (exports.RsDurationTypeSid = RsDurationTypeSid = {}));
/** Purchase restrictions. */
var WlPromotionPurchaseRestrictionSid;
(function (WlPromotionPurchaseRestrictionSid) {
    /** Purchase option available for all clients */
    WlPromotionPurchaseRestrictionSid[WlPromotionPurchaseRestrictionSid["ALL"] = 1] = "ALL";
    /** Purchase option introductory offer, available for new clients only */
    WlPromotionPurchaseRestrictionSid[WlPromotionPurchaseRestrictionSid["INTRODUCTORY"] = 2] = "INTRODUCTORY";
    /** Purchase option available for clients with special login type or member group */
    WlPromotionPurchaseRestrictionSid[WlPromotionPurchaseRestrictionSid["TYPE"] = 3] = "TYPE";
})(WlPromotionPurchaseRestrictionSid || (exports.WlPromotionPurchaseRestrictionSid = WlPromotionPurchaseRestrictionSid = {}));
/** The status of form actions. */
var WlQuizActivityActivitySid;
(function (WlQuizActivityActivitySid) {
    /** Form was added to the profile */
    WlQuizActivityActivitySid[WlQuizActivityActivitySid["ADD"] = 1] = "ADD";
    /** Form was saved as a draft */
    WlQuizActivityActivitySid[WlQuizActivityActivitySid["DRAFT"] = 2] = "DRAFT";
    /** Form was edited */
    WlQuizActivityActivitySid[WlQuizActivityActivitySid["EDIT"] = 3] = "EDIT";
    /** Form was exported to CSV file */
    WlQuizActivityActivitySid[WlQuizActivityActivitySid["EXPORT_CSV"] = 4] = "EXPORT_CSV";
    /** Form was exported to PDF file */
    WlQuizActivityActivitySid[WlQuizActivityActivitySid["EXPORT_PDF"] = 5] = "EXPORT_PDF";
    /** Form was printed */
    WlQuizActivityActivitySid[WlQuizActivityActivitySid["PRINTING"] = 6] = "PRINTING";
    /** Form was submitted */
    WlQuizActivityActivitySid[WlQuizActivityActivitySid["SUBMIT"] = 7] = "SUBMIT";
    /** Form was viewed */
    WlQuizActivityActivitySid[WlQuizActivityActivitySid["VIEW"] = 8] = "VIEW";
})(WlQuizActivityActivitySid || (exports.WlQuizActivityActivitySid = WlQuizActivityActivitySid = {}));
/** List of quiz frequency types. */
var WlQuizQuizFrequencySid;
(function (WlQuizQuizFrequencySid) {
    /** Client will be asked to complete the quiz every time they book a service or purchase item */
    WlQuizQuizFrequencySid[WlQuizQuizFrequencySid["EVERY"] = 1] = "EVERY";
    /** Client will be asked to complete the quiz the first time they book a service or purchase item */
    WlQuizQuizFrequencySid[WlQuizQuizFrequencySid["FIRST"] = 2] = "FIRST";
    /** Client will be asked to complete the quiz only one time when they book a service or purchase item */
    WlQuizQuizFrequencySid[WlQuizQuizFrequencySid["ONCE"] = 3] = "ONCE";
})(WlQuizQuizFrequencySid || (exports.WlQuizQuizFrequencySid = WlQuizQuizFrequencySid = {}));
/** A list of purchase types. */
var RsPurchaseItemSid;
(function (RsPurchaseItemSid) {
    /** Personal user's account refill */
    RsPurchaseItemSid[RsPurchaseItemSid["ACCOUNT"] = 7] = "ACCOUNT";
    /** Business account payment */
    RsPurchaseItemSid[RsPurchaseItemSid["ACCOUNT_BUSINESS"] = 11] = "ACCOUNT_BUSINESS";
    /** Single appointment reservation */
    RsPurchaseItemSid[RsPurchaseItemSid["APPOINTMENT"] = 8] = "APPOINTMENT";
    /** Single appointment reservation with deposit */
    RsPurchaseItemSid[RsPurchaseItemSid["APPOINTMENT_DEPOSIT"] = 18] = "APPOINTMENT_DEPOSIT";
    /** Tips for the appointment */
    RsPurchaseItemSid[RsPurchaseItemSid["APPOINTMENT_TIP"] = 22] = "APPOINTMENT_TIP";
    /** Expense that comes along with the payment business. It contains information about additional services which are */
    RsPurchaseItemSid[RsPurchaseItemSid["BUSINESS_EXPENSE"] = 16] = "BUSINESS_EXPENSE";
    /** A skipped purchase for the business account */
    RsPurchaseItemSid[RsPurchaseItemSid["BUSINESS_SKIP"] = 17] = "BUSINESS_SKIP";
    /** Business subscription payment */
    RsPurchaseItemSid[RsPurchaseItemSid["BUSINESS_SUBSCRIPTION"] = 23] = "BUSINESS_SUBSCRIPTION";
    /** Single classes */
    RsPurchaseItemSid[RsPurchaseItemSid["CLASS_PERIOD"] = 2] = "CLASS_PERIOD";
    /** Collectors payments */
    RsPurchaseItemSid[RsPurchaseItemSid["COLLECTOR_DEBT"] = 24] = "COLLECTOR_DEBT";
    /** Arbitrary money withdrawal with comment */
    RsPurchaseItemSid[RsPurchaseItemSid["COMMENT"] = 13] = "COMMENT";
    /** Gift Cards */
    RsPurchaseItemSid[RsPurchaseItemSid["COUPON"] = 10] = "COUPON";
    /** Events and enrollments. Client can not book only one class, he needs to book the whole enrollment */
    RsPurchaseItemSid[RsPurchaseItemSid["ENROLLMENT"] = 4] = "ENROLLMENT";
    /** Enrollment reservation with a deposit */
    RsPurchaseItemSid[RsPurchaseItemSid["ENROLLMENT_DEPOSIT"] = 19] = "ENROLLMENT_DEPOSIT";
    /** Enrollment reservation with a discount */
    RsPurchaseItemSid[RsPurchaseItemSid["ENROLLMENT_DISCOUNT"] = 21] = "ENROLLMENT_DISCOUNT";
    /** Payment by an installment plan */
    RsPurchaseItemSid[RsPurchaseItemSid["INSTALLMENT"] = 14] = "INSTALLMENT";
    /** Recurrent payments */
    RsPurchaseItemSid[RsPurchaseItemSid["MEMBERSHIP"] = 3] = "MEMBERSHIP";
    /** Products */
    RsPurchaseItemSid[RsPurchaseItemSid["PRODUCT"] = 9] = "PRODUCT";
    /** Promotions */
    RsPurchaseItemSid[RsPurchaseItemSid["PROMOTION"] = 1] = "PROMOTION";
    /** Early cancellation fee for a memberships */
    RsPurchaseItemSid[RsPurchaseItemSid["PROMOTION_CANCEL_FEE"] = 25] = "PROMOTION_CANCEL_FEE";
    /** A purchase to renew a promotion */
    RsPurchaseItemSid[RsPurchaseItemSid["PROMOTION_RENEW"] = 12] = "PROMOTION_RENEW";
    /** A purchase to book an asset */
    RsPurchaseItemSid[RsPurchaseItemSid["RESOURCE"] = 15] = "RESOURCE";
    /** A purchase to book a deposit asset */
    RsPurchaseItemSid[RsPurchaseItemSid["RESOURCE_DEPOSIT"] = 20] = "RESOURCE_DEPOSIT";
    /** Purchase item for appointments */
    RsPurchaseItemSid[RsPurchaseItemSid["SERVICE"] = 6] = "SERVICE";
    /** Tuition purchase item */
    RsPurchaseItemSid[RsPurchaseItemSid["TUITION"] = 26] = "TUITION";
    /** Tuition fee purchase item */
    RsPurchaseItemSid[RsPurchaseItemSid["TUITION_FEE"] = 27] = "TUITION_FEE";
})(RsPurchaseItemSid || (exports.RsPurchaseItemSid = RsPurchaseItemSid = {}));
/** A list of skin types. */
var RsSkinSid;
(function (RsSkinSid) {
    /** Ai Agent web-chat */
    RsSkinSid[RsSkinSid["AI_AGENT"] = 19] = "AI_AGENT";
    /** Application skin */
    RsSkinSid[RsSkinSid["APPLICATION"] = 13] = "APPLICATION";
    /** Appointment booking wizard */
    RsSkinSid[RsSkinSid["APPOINTMENT"] = 7] = "APPOINTMENT";
    /** Online store widget */
    RsSkinSid[RsSkinSid["CATALOG_FOREIGN"] = 21] = "CATALOG_FOREIGN";
    /** Event enrollment wizard widget */
    RsSkinSid[RsSkinSid["ENROLLMENT"] = 8] = "ENROLLMENT";
    /** Fitbuilder widget */
    RsSkinSid[RsSkinSid["FITBUILDER"] = 17] = "FITBUILDER";
    /** Skin for lead tracking form */
    RsSkinSid[RsSkinSid["LEAD"] = 9] = "LEAD";
    /** Skin for lead tracking form from microservice */
    RsSkinSid[RsSkinSid["LEAD_FOREIGN"] = 20] = "LEAD_FOREIGN";
    /** Mobile schedule version */
    RsSkinSid[RsSkinSid["MOBILE_SCHEDULE"] = 10] = "MOBILE_SCHEDULE";
    /** Asset booking wizard */
    RsSkinSid[RsSkinSid["RESOURCE"] = 16] = "RESOURCE";
    /** Review list widget */
    RsSkinSid[RsSkinSid["REVIEW_LIST"] = 4] = "REVIEW_LIST";
    /** General schedule design appearance */
    RsSkinSid[RsSkinSid["SCHEDULE_DESIGN"] = 15] = "SCHEDULE_DESIGN";
    /** Foreign schedule widget on react language */
    RsSkinSid[RsSkinSid["SCHEDULE_FOREIGN"] = 18] = "SCHEDULE_FOREIGN";
    /** Schedule list widget */
    RsSkinSid[RsSkinSid["SCHEDULE_LIST"] = 1] = "SCHEDULE_LIST";
    /** Standard version of schedule */
    RsSkinSid[RsSkinSid["SCHEDULE_STANDARD"] = 14] = "SCHEDULE_STANDARD";
    /** Staff widget */
    RsSkinSid[RsSkinSid["STAFF"] = 12] = "STAFF";
    /** Online store widget */
    RsSkinSid[RsSkinSid["STORE"] = 11] = "STORE";
})(RsSkinSid || (exports.RsSkinSid = RsSkinSid = {}));
/** Review status identifiers. */
var RsReviewStatusSid;
(function (RsReviewStatusSid) {
    /** Admin */
    RsReviewStatusSid[RsReviewStatusSid["ADMIN"] = 1] = "ADMIN";
    /** Hidden */
    RsReviewStatusSid[RsReviewStatusSid["HIDDEN"] = 4] = "HIDDEN";
    /** Publish */
    RsReviewStatusSid[RsReviewStatusSid["PUBLISH"] = 3] = "PUBLISH";
})(RsReviewStatusSid || (exports.RsReviewStatusSid = RsReviewStatusSid = {}));
/** Experience types for class sessions to differentiate virtual and in-person sessions. */
var ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum;
(function (ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum) {
    /** In-person session at a physical location */
    ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum[ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum["IN_PERSON"] = 1] = "IN_PERSON";
    /** Virtual session conducted through a virtual provider */
    ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum[ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum["VIRTUAL"] = 2] = "VIRTUAL";
})(ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum || (exports.ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum = ThothExplorerSearchClassSessionSearchWordClassSessionExperienceTypeEnum = {}));
/** A list of payment gateways or processors. */
var ThothPayProcessorPayProcessorSid;
(function (ThothPayProcessorPayProcessorSid) {
    /** Payment gateway for `cybersource.com` */
    ThothPayProcessorPayProcessorSid[ThothPayProcessorPayProcessorSid["CYBER_SOURCE"] = 11] = "CYBER_SOURCE";
    /** Payment gateway for Direct Connect */
    ThothPayProcessorPayProcessorSid[ThothPayProcessorPayProcessorSid["DIRECT_CONNECT"] = 9] = "DIRECT_CONNECT";
    /** Payment gateway for Lucy */
    ThothPayProcessorPayProcessorSid[ThothPayProcessorPayProcessorSid["LUCY"] = 2] = "LUCY";
    /** Payment gateway for Netbanx */
    ThothPayProcessorPayProcessorSid[ThothPayProcessorPayProcessorSid["NETBANX"] = 1] = "NETBANX";
    /** Payment gateway for NMI */
    ThothPayProcessorPayProcessorSid[ThothPayProcessorPayProcessorSid["NMI"] = 6] = "NMI";
    /** Payment gateway for Nuvei */
    ThothPayProcessorPayProcessorSid[ThothPayProcessorPayProcessorSid["NUVEI"] = 12] = "NUVEI";
    /** Payment gateway for Paychoice */
    ThothPayProcessorPayProcessorSid[ThothPayProcessorPayProcessorSid["PAYCHOICE"] = 7] = "PAYCHOICE";
    /** Payment gateway for `stripe.com` */
    ThothPayProcessorPayProcessorSid[ThothPayProcessorPayProcessorSid["STRIPE_COM"] = 10] = "STRIPE_COM";
})(ThothPayProcessorPayProcessorSid || (exports.ThothPayProcessorPayProcessorSid = ThothPayProcessorPayProcessorSid = {}));
/** A list of money owners from which account money can be transferred. */
var RsPayOwnerSid;
(function (RsPayOwnerSid) {
    /** Anonymous user (Walk-In) */
    RsPayOwnerSid[RsPayOwnerSid["ANONYMOUS"] = 3] = "ANONYMOUS";
    /** Business */
    RsPayOwnerSid[RsPayOwnerSid["BUSINESS"] = 2] = "BUSINESS";
    /** System user */
    RsPayOwnerSid[RsPayOwnerSid["USER"] = 1] = "USER";
})(RsPayOwnerSid || (exports.RsPayOwnerSid = RsPayOwnerSid = {}));
/** List of responses for Google Captcha token. */
var CoreGoogleCaptchaCaptchaResponseSid;
(function (CoreGoogleCaptchaCaptchaResponseSid) {
    /** Token can be verified due to error from Google Captcha */
    CoreGoogleCaptchaCaptchaResponseSid[CoreGoogleCaptchaCaptchaResponseSid["ERROR"] = 5] = "ERROR";
    /** Token is invalid or expired */
    CoreGoogleCaptchaCaptchaResponseSid[CoreGoogleCaptchaCaptchaResponseSid["INVALID"] = 1] = "INVALID";
    /** Token is valid, but v2 captcha require */
    CoreGoogleCaptchaCaptchaResponseSid[CoreGoogleCaptchaCaptchaResponseSid["REQUIRE_V2"] = 2] = "REQUIRE_V2";
    /** Token is valid */
    CoreGoogleCaptchaCaptchaResponseSid[CoreGoogleCaptchaCaptchaResponseSid["VALID"] = 3] = "VALID";
    /** Token is valid but score is risky */
    CoreGoogleCaptchaCaptchaResponseSid[CoreGoogleCaptchaCaptchaResponseSid["VALID_BLOCK"] = 4] = "VALID_BLOCK";
})(CoreGoogleCaptchaCaptchaResponseSid || (exports.CoreGoogleCaptchaCaptchaResponseSid = CoreGoogleCaptchaCaptchaResponseSid = {}));
/** Defines if client has "Late cancel" or "No shows" sessions. */
var WlBusinessPolicyBlameSid;
(function (WlBusinessPolicyBlameSid) {
    /** If client has "Late cancel" and "No shows" sessions */
    WlBusinessPolicyBlameSid[WlBusinessPolicyBlameSid["BOTH"] = 1] = "BOTH";
    /** If client has "Late cancel" sessions */
    WlBusinessPolicyBlameSid[WlBusinessPolicyBlameSid["LATE_CANCEL"] = 2] = "LATE_CANCEL";
    /** If client has "No shows" sessions */
    WlBusinessPolicyBlameSid[WlBusinessPolicyBlameSid["NO_SHOWS"] = 3] = "NO_SHOWS";
})(WlBusinessPolicyBlameSid || (exports.WlBusinessPolicyBlameSid = WlBusinessPolicyBlameSid = {}));
/** Client's charge if he has "Late cancel" or "No shows" sessions. */
var WlBusinessPolicyChargeSid;
(function (WlBusinessPolicyChargeSid) {
    /** The client should be to pay a penalty */
    WlBusinessPolicyChargeSid[WlBusinessPolicyChargeSid["CHARGE"] = 1] = "CHARGE";
    /** Mark account as has "Late cancel" and "No shows" sessions */
    WlBusinessPolicyChargeSid[WlBusinessPolicyChargeSid["FLAG_ACCOUNT"] = 2] = "FLAG_ACCOUNT";
})(WlBusinessPolicyChargeSid || (exports.WlBusinessPolicyChargeSid = WlBusinessPolicyChargeSid = {}));
/** List of layouts for client's header. */
var RsPageFrontendHeaderLayoutSid;
(function (RsPageFrontendHeaderLayoutSid) {
    /** Logo is under the main menu */
    RsPageFrontendHeaderLayoutSid[RsPageFrontendHeaderLayoutSid["BOTTOM"] = 4] = "BOTTOM";
    /** Logo is in the left corner */
    RsPageFrontendHeaderLayoutSid[RsPageFrontendHeaderLayoutSid["LEFT"] = 1] = "LEFT";
    /** Logo is in the right corner */
    RsPageFrontendHeaderLayoutSid[RsPageFrontendHeaderLayoutSid["RIGHT"] = 2] = "RIGHT";
    /** Logo is above the main menu */
    RsPageFrontendHeaderLayoutSid[RsPageFrontendHeaderLayoutSid["TOP"] = 3] = "TOP";
})(RsPageFrontendHeaderLayoutSid || (exports.RsPageFrontendHeaderLayoutSid = RsPageFrontendHeaderLayoutSid = {}));
/** A position of logo. */
var RsBusinessDesignLogoPositionSid;
(function (RsBusinessDesignLogoPositionSid) {
    /** Logo located in the center */
    RsBusinessDesignLogoPositionSid[RsBusinessDesignLogoPositionSid["CENTER"] = 2] = "CENTER";
    /** Logo located on the left side */
    RsBusinessDesignLogoPositionSid[RsBusinessDesignLogoPositionSid["LEFT"] = 1] = "LEFT";
    /** Logo located on the right side */
    RsBusinessDesignLogoPositionSid[RsBusinessDesignLogoPositionSid["RIGHT"] = 3] = "RIGHT";
})(RsBusinessDesignLogoPositionSid || (exports.RsBusinessDesignLogoPositionSid = RsBusinessDesignLogoPositionSid = {}));
/** A style of logo. */
var RsBusinessDesignLogoStyleSid;
(function (RsBusinessDesignLogoStyleSid) {
    /** Logo is invisible */
    RsBusinessDesignLogoStyleSid[RsBusinessDesignLogoStyleSid["HIDE"] = 1] = "HIDE";
    /** Logo is a rectangle */
    RsBusinessDesignLogoStyleSid[RsBusinessDesignLogoStyleSid["RECTANGLE"] = 4] = "RECTANGLE";
    /** Logo is a round */
    RsBusinessDesignLogoStyleSid[RsBusinessDesignLogoStyleSid["ROUND"] = 3] = "ROUND";
    /** Logo is a square */
    RsBusinessDesignLogoStyleSid[RsBusinessDesignLogoStyleSid["SQUARE"] = 2] = "SQUARE";
})(RsBusinessDesignLogoStyleSid || (exports.RsBusinessDesignLogoStyleSid = RsBusinessDesignLogoStyleSid = {}));
/** List of progress log fields. */
var WlMemberProgressFieldProgressFieldSid;
(function (WlMemberProgressFieldProgressFieldSid) {
    /** Abdomen field */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["ABDOMEN"] = 6] = "ABDOMEN";
    /** Arms field */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["ARMS"] = 3] = "ARMS";
    /** Blood pressure field */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["BLOOD_PRESSURE"] = 2] = "BLOOD_PRESSURE";
    /** Body fat field */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["BODY_FAT"] = 11] = "BODY_FAT";
    /** Bust field */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["BUST"] = 4] = "BUST";
    /** Height of the client */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["HEIGHT"] = 9] = "HEIGHT";
    /** Client hips size */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["HIPS"] = 7] = "HIPS";
    /** Long term goals */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["LONG_TERM_GOALS"] = 14] = "LONG_TERM_GOALS";
    /** Pre workout heart rate */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["PRE_WORKOUT_HEART_RATE"] = 1] = "PRE_WORKOUT_HEART_RATE";
    /** Progress picture */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["PROGRESS_PICTURE"] = 12] = "PROGRESS_PICTURE";
    /** Short term goals */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["SHORT_TERM_GOALS"] = 13] = "SHORT_TERM_GOALS";
    /** THIGHS */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["THIGHS"] = 8] = "THIGHS";
    /** Waist */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["WAIST"] = 5] = "WAIST";
    /** Client weight */
    WlMemberProgressFieldProgressFieldSid[WlMemberProgressFieldProgressFieldSid["WEIGHT"] = 10] = "WEIGHT";
})(WlMemberProgressFieldProgressFieldSid || (exports.WlMemberProgressFieldProgressFieldSid = WlMemberProgressFieldProgressFieldSid = {}));
/** Possible measurement units of the progress fields values. */
var WlMemberProgressFieldMeasurementSid;
(function (WlMemberProgressFieldMeasurementSid) {
    /** Value in beats per minutes */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["BEATS_PER_MINUTE"] = 7] = "BEATS_PER_MINUTE";
    /** Value in centimeters */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["CENTIMETRES"] = 1] = "CENTIMETRES";
    /** Value in feet */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["FEET"] = 3] = "FEET";
    /** Value in feet and inches */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["FEET_AND_INCHES"] = 11] = "FEET_AND_INCHES";
    /** Value in grams */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["GRAMS"] = 9] = "GRAMS";
    /** Value in inches */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["INCHES"] = 4] = "INCHES";
    /** Value in kilograms */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["KILOGRAMS"] = 5] = "KILOGRAMS";
    /** Value in metres */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["METRES"] = 2] = "METRES";
    /** Value in metres and centimetres */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["METRES_AND_CENTIMETRES"] = 12] = "METRES_AND_CENTIMETRES";
    /** Value in mmHG */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["MMHG"] = 8] = "MMHG";
    /** Value in percentages */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["PERCENTAGES"] = 10] = "PERCENTAGES";
    /** Value in pounds */
    WlMemberProgressFieldMeasurementSid[WlMemberProgressFieldMeasurementSid["POUNDS"] = 6] = "POUNDS";
})(WlMemberProgressFieldMeasurementSid || (exports.WlMemberProgressFieldMeasurementSid = WlMemberProgressFieldMeasurementSid = {}));
/** Possible types of the progress fields values. */
var WlMemberProgressFieldTypeSid;
(function (WlMemberProgressFieldTypeSid) {
    /** Value is decimal */
    WlMemberProgressFieldTypeSid[WlMemberProgressFieldTypeSid["DECIMAL"] = 2] = "DECIMAL";
    /** Value is image */
    WlMemberProgressFieldTypeSid[WlMemberProgressFieldTypeSid["IMAGE"] = 5] = "IMAGE";
    /** Value is percentage */
    WlMemberProgressFieldTypeSid[WlMemberProgressFieldTypeSid["PERCENTAGE"] = 3] = "PERCENTAGE";
    /** Value is string */
    WlMemberProgressFieldTypeSid[WlMemberProgressFieldTypeSid["STRING"] = 4] = "STRING";
    /** Value is whole number */
    WlMemberProgressFieldTypeSid[WlMemberProgressFieldTypeSid["WHOLE_NUMBER"] = 1] = "WHOLE_NUMBER";
})(WlMemberProgressFieldTypeSid || (exports.WlMemberProgressFieldTypeSid = WlMemberProgressFieldTypeSid = {}));
/** List of response statuses. */
var CoreQuizResponseResponseStatusSid;
(function (CoreQuizResponseResponseStatusSid) {
    /** Response is active */
    CoreQuizResponseResponseStatusSid[CoreQuizResponseResponseStatusSid["ACTIVE"] = 1] = "ACTIVE";
    /** Response is active and has amendments */
    CoreQuizResponseResponseStatusSid[CoreQuizResponseResponseStatusSid["ACTIVE_AMEND"] = 5] = "ACTIVE_AMEND";
    /** Response in draft mode */
    CoreQuizResponseResponseStatusSid[CoreQuizResponseResponseStatusSid["DRAFT"] = 2] = "DRAFT";
    /** Response in inactive */
    CoreQuizResponseResponseStatusSid[CoreQuizResponseResponseStatusSid["INACTIVE"] = 3] = "INACTIVE";
    /** Response in inactive and in draft mode */
    CoreQuizResponseResponseStatusSid[CoreQuizResponseResponseStatusSid["INACTIVE_DRAFT"] = 4] = "INACTIVE_DRAFT";
})(CoreQuizResponseResponseStatusSid || (exports.CoreQuizResponseResponseStatusSid = CoreQuizResponseResponseStatusSid = {}));
/** List of sensor types. */
var WlProfileSensorSensorTypesSid;
(function (WlProfileSensorSensorTypesSid) {
    /** Heart rate sensor */
    WlProfileSensorSensorTypesSid[WlProfileSensorSensorTypesSid["HEART_RATE"] = 1] = "HEART_RATE";
})(WlProfileSensorSensorTypesSid || (exports.WlProfileSensorSensorTypesSid = WlProfileSensorSensorTypesSid = {}));
/** List foreign sites that can pay for visits. */
var WlVisitPassProspectSid;
(function (WlVisitPassProspectSid) {
    /** Class Pass */
    WlVisitPassProspectSid[WlVisitPassProspectSid["CLASSPASS"] = 1] = "CLASSPASS";
    /** Gym Pass */
    WlVisitPassProspectSid[WlVisitPassProspectSid["GYMPASS"] = 2] = "GYMPASS";
})(WlVisitPassProspectSid || (exports.WlVisitPassProspectSid = WlVisitPassProspectSid = {}));
/** List of sale categories on the store page. */
var RsSaleSid;
(function (RsSaleSid) {
    /** Single appointment reservation */
    RsSaleSid[RsSaleSid["APPOINTMENT"] = 8] = "APPOINTMENT";
    /** Single appointment deposit reservation */
    RsSaleSid[RsSaleSid["APPOINTMENT_DEPOSIT"] = 11] = "APPOINTMENT_DEPOSIT";
    /** Tips for the appointment */
    RsSaleSid[RsSaleSid["APPOINTMENT_TIP"] = 12] = "APPOINTMENT_TIP";
    /** Single class visit */
    RsSaleSid[RsSaleSid["CLASS_PERIOD"] = 6] = "CLASS_PERIOD";
    /** Gift card */
    RsSaleSid[RsSaleSid["COUPON"] = 7] = "COUPON";
    /** Enrollments. Classes where flag event is `true` */
    RsSaleSid[RsSaleSid["ENROLLMENT"] = 3] = "ENROLLMENT";
    /** Promotions with program {@link RsProgramSid} */
    RsSaleSid[RsSaleSid["PACKAGE"] = 5] = "PACKAGE";
    /** Products: water, t-shirts, etc */
    RsSaleSid[RsSaleSid["PRODUCT"] = 4] = "PRODUCT";
    /** Promotions with program category {@link RsProgramCategorySid} and {@link RsProgramCategorySid} */
    RsSaleSid[RsSaleSid["PROMOTION_CLASS"] = 1] = "PROMOTION_CLASS";
    /** Promotions with program category {@link RsProgramCategorySid} */
    RsSaleSid[RsSaleSid["PROMOTION_RESOURCE"] = 9] = "PROMOTION_RESOURCE";
    /** Promotions with program category {@link RsProgramCategorySid} and {@link RsProgramCategorySid} */
    RsSaleSid[RsSaleSid["PROMOTION_SERVICE"] = 2] = "PROMOTION_SERVICE";
    /** Promotions with program category {@link RsProgramCategorySid} */
    RsSaleSid[RsSaleSid["PROMOTION_VIDEO"] = 13] = "PROMOTION_VIDEO";
    /** Products: water, t-shirts, etc. That is available for quick buy */
    RsSaleSid[RsSaleSid["QUICK_BUY"] = 10] = "QUICK_BUY";
    /** Tuition */
    RsSaleSid[RsSaleSid["TUITION"] = 14] = "TUITION";
})(RsSaleSid || (exports.RsSaleSid = RsSaleSid = {}));
/** A list of types of visit note. */
var WlVisitNoteSidNoteSid;
(function (WlVisitNoteSidNoteSid) {
    /** The usual quick accompanying note for the customer visit */
    WlVisitNoteSidNoteSid[WlVisitNoteSidNoteSid["QUICK"] = 2] = "QUICK";
    /** Accompanying medical note for the customer visit */
    WlVisitNoteSidNoteSid[WlVisitNoteSidNoteSid["SOAP"] = 1] = "SOAP";
})(WlVisitNoteSidNoteSid || (exports.WlVisitNoteSidNoteSid = WlVisitNoteSidNoteSid = {}));
/** Identifiers for services types. */
var RsServiceSid;
(function (RsServiceSid) {
    /** Appointments */
    RsServiceSid[RsServiceSid["APPOINTMENT"] = 1] = "APPOINTMENT";
    /** Classes */
    RsServiceSid[RsServiceSid["CLASSES"] = 2] = "CLASSES";
    /** Enrolments */
    RsServiceSid[RsServiceSid["ENROLLMENT"] = 3] = "ENROLLMENT";
    /** Resources */
    RsServiceSid[RsServiceSid["RESOURCE"] = 5] = "RESOURCE";
    /** Visits */
    RsServiceSid[RsServiceSid["VISIT"] = 4] = "VISIT";
})(RsServiceSid || (exports.RsServiceSid = RsServiceSid = {}));
/** A list of client type IDs. */
var WlLoginTypeClientTypeSid;
(function (WlLoginTypeClientTypeSid) {
    /** Record contains type of member */
    WlLoginTypeClientTypeSid[WlLoginTypeClientTypeSid["MEMBER"] = 3] = "MEMBER";
    /** Record is SystemSid::PROSPECT */
    WlLoginTypeClientTypeSid[WlLoginTypeClientTypeSid["NOTHING"] = 1] = "NOTHING";
    /** Record contains type of client */
    WlLoginTypeClientTypeSid[WlLoginTypeClientTypeSid["PASSHOLDER"] = 2] = "PASSHOLDER";
})(WlLoginTypeClientTypeSid || (exports.WlLoginTypeClientTypeSid = WlLoginTypeClientTypeSid = {}));
/** Define colors of notice messages. */
var WlReceptionApplicationMemberInfoColorSid;
(function (WlReceptionApplicationMemberInfoColorSid) {
    /** Default for neutral, informative messages. Displayed in blue */
    WlReceptionApplicationMemberInfoColorSid[WlReceptionApplicationMemberInfoColorSid["BLUE"] = 1] = "BLUE";
    /** Positive messages. Displayed in green */
    WlReceptionApplicationMemberInfoColorSid[WlReceptionApplicationMemberInfoColorSid["GREEN"] = 2] = "GREEN";
    /** Mild negative messages to warn the user. Displayed in orange */
    WlReceptionApplicationMemberInfoColorSid[WlReceptionApplicationMemberInfoColorSid["ORANGE"] = 3] = "ORANGE";
    /** Negative messages with strong importance or urgency. Displayed in red */
    WlReceptionApplicationMemberInfoColorSid[WlReceptionApplicationMemberInfoColorSid["RED"] = 4] = "RED";
})(WlReceptionApplicationMemberInfoColorSid || (exports.WlReceptionApplicationMemberInfoColorSid = WlReceptionApplicationMemberInfoColorSid = {}));
/** Define types of icons for notice messages. */
var WlReceptionApplicationMemberInfoIconSid;
(function (WlReceptionApplicationMemberInfoIconSid) {
    /** Icon of an award ribbon. For celebration of an occasion (e.g. a client's first visit) */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["AWARD"] = 1] = "AWARD";
    /** Icon of a birthday cake. For birthday messages */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["CAKE"] = 2] = "CAKE";
    /** Icon of a signed contract */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["CONTRACT"] = 3] = "CONTRACT";
    /** Icon of a document with a slash. For the unsigned waiver message */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["DOCUMENT_SLASH"] = 4] = "DOCUMENT_SLASH";
    /** Icon of dollar sign. For messages relating to personal balance and amounts due */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["DOLLAR"] = 5] = "DOLLAR";
    /** Icon of a dumbbell. For messages relating to visits */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["DUMBBELL"] = 6] = "DUMBBELL";
    /** Icon of a form */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["FORM"] = 7] = "FORM";
    /** Icon of an "i". Used for general informative messages */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["INFO"] = 8] = "INFO";
    /** Icon of an "x". For messages communicating some important or urgent issue for the user */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["PROBLEM"] = 9] = "PROBLEM";
    /** Icon of an exclamation mark. For messages communicating a mild issue or cautioning the user */
    WlReceptionApplicationMemberInfoIconSid[WlReceptionApplicationMemberInfoIconSid["WARNING"] = 10] = "WARNING";
})(WlReceptionApplicationMemberInfoIconSid || (exports.WlReceptionApplicationMemberInfoIconSid = WlReceptionApplicationMemberInfoIconSid = {}));
/** List of sounds used for check ins. */
var WlReceptionDesignCheckInSoundSid;
(function (WlReceptionDesignCheckInSoundSid) {
    /** Error sound 1 to be played when self check in fails */
    WlReceptionDesignCheckInSoundSid[WlReceptionDesignCheckInSoundSid["ERROR_SOUND_1"] = 1] = "ERROR_SOUND_1";
    /** Error sound 2 to be played when self check in fails */
    WlReceptionDesignCheckInSoundSid[WlReceptionDesignCheckInSoundSid["ERROR_SOUND_2"] = 2] = "ERROR_SOUND_2";
    /** Error sound 3 to be played when self check in fails */
    WlReceptionDesignCheckInSoundSid[WlReceptionDesignCheckInSoundSid["ERROR_SOUND_3"] = 3] = "ERROR_SOUND_3";
    /** Success sound 1 to be played when self check in succeeds */
    WlReceptionDesignCheckInSoundSid[WlReceptionDesignCheckInSoundSid["SUCCESS_SOUND_1"] = 4] = "SUCCESS_SOUND_1";
    /** Success sound 2 to be played when self check in succeeds */
    WlReceptionDesignCheckInSoundSid[WlReceptionDesignCheckInSoundSid["SUCCESS_SOUND_2"] = 5] = "SUCCESS_SOUND_2";
    /** Success sound 3 to be played when self check in succeeds */
    WlReceptionDesignCheckInSoundSid[WlReceptionDesignCheckInSoundSid["SUCCESS_SOUND_3"] = 6] = "SUCCESS_SOUND_3";
})(WlReceptionDesignCheckInSoundSid || (exports.WlReceptionDesignCheckInSoundSid = WlReceptionDesignCheckInSoundSid = {}));
/** Mail types. */
var RsMailSid;
(function (RsMailSid) {
    /** Sent by CASSI phone agent, when client requests a booking url */
    RsMailSid[RsMailSid["AI_LINK_BOOK"] = 206] = "AI_LINK_BOOK";
    /** Sent by CASSI phone agent, when client requests a purchase url */
    RsMailSid[RsMailSid["AI_LINK_PURCHASE"] = 207] = "AI_LINK_PURCHASE";
    /** Appointment approved by staff */
    RsMailSid[RsMailSid["APPOINTMENT_APPROVE_STAFF"] = 71] = "APPOINTMENT_APPROVE_STAFF";
    /** Sent when the AI Agent successfully books an appointment */
    RsMailSid[RsMailSid["APPOINTMENT_BOOKED_AI"] = 198] = "APPOINTMENT_BOOKED_AI";
    /** Appointment Cancelled by Client - Early */
    RsMailSid[RsMailSid["APPOINTMENT_CANCEL_EARLY_USER"] = 33] = "APPOINTMENT_CANCEL_EARLY_USER";
    /** Appointment Cancelled by Client - Late */
    RsMailSid[RsMailSid["APPOINTMENT_CANCEL_LATE_USER"] = 35] = "APPOINTMENT_CANCEL_LATE_USER";
    /** Appointment Cancelled Notification - Staff */
    RsMailSid[RsMailSid["APPOINTMENT_CANCEL_STAFF"] = 32] = "APPOINTMENT_CANCEL_STAFF";
    /** Sends to the client when appointment has been cancelled by staff */
    RsMailSid[RsMailSid["APPOINTMENT_CANCEL_STAFF_USER"] = 80] = "APPOINTMENT_CANCEL_STAFF_USER";
    /** Sends to the clients when appointment information has been changed */
    RsMailSid[RsMailSid["APPOINTMENT_CHANGE_GENERAL_CLIENT"] = 114] = "APPOINTMENT_CHANGE_GENERAL_CLIENT";
    /** Sends to the staff members when appointment information has been changed */
    RsMailSid[RsMailSid["APPOINTMENT_CHANGE_GENERAL_STAFF"] = 113] = "APPOINTMENT_CHANGE_GENERAL_STAFF";
    /** Appointment Change Notification - Staff */
    RsMailSid[RsMailSid["APPOINTMENT_CHANGE_STAFF"] = 36] = "APPOINTMENT_CHANGE_STAFF";
    /** Appointment Change Notification - Client */
    RsMailSid[RsMailSid["APPOINTMENT_CHANGE_USER"] = 37] = "APPOINTMENT_CHANGE_USER";
    /** New Appointment Notification - Staff */
    RsMailSid[RsMailSid["APPOINTMENT_CREATE_STAFF"] = 31] = "APPOINTMENT_CREATE_STAFF";
    /** Appointment Confirmation */
    RsMailSid[RsMailSid["APPOINTMENT_CREATE_USER"] = 30] = "APPOINTMENT_CREATE_USER";
    /** Multiple Appointment Confirmation (Client) */
    RsMailSid[RsMailSid["APPOINTMENT_CREATE_USER_MULTIPLE"] = 211] = "APPOINTMENT_CREATE_USER_MULTIPLE";
    /** Notification to a customer about an appointment that has been canceled because not paid */
    RsMailSid[RsMailSid["APPOINTMENT_PAY_CANCEL"] = 189] = "APPOINTMENT_PAY_CANCEL";
    /** Notification to a customer about mandatory payment for an appointment */
    RsMailSid[RsMailSid["APPOINTMENT_PAY_PAY"] = 188] = "APPOINTMENT_PAY_PAY";
    /** Sends one email to a client when several sessions of one or several appointments or single session of recurring */
    RsMailSid[RsMailSid["APPOINTMENT_REPEAT_CANCEL_CLIENT"] = 103] = "APPOINTMENT_REPEAT_CANCEL_CLIENT";
    /** Sends one email to staff when several sessions of one or several appointments or single session of recurring */
    RsMailSid[RsMailSid["APPOINTMENT_REPEAT_CANCEL_STAFF"] = 105] = "APPOINTMENT_REPEAT_CANCEL_STAFF";
    /** Sends one email to a client when several sessions of one or several appointments or single session of recurring */
    RsMailSid[RsMailSid["APPOINTMENT_REPEAT_CANCEL_USER"] = 131] = "APPOINTMENT_REPEAT_CANCEL_USER";
    /** Sent to staff when the AI Agent receives an appointment request */
    RsMailSid[RsMailSid["APPOINTMENT_REQUEST_AI"] = 200] = "APPOINTMENT_REQUEST_AI";
    /** Requested appointment has been denied */
    RsMailSid[RsMailSid["APPOINTMENT_REQUEST_DENY"] = 88] = "APPOINTMENT_REQUEST_DENY";
    /** Appointment has been requested */
    RsMailSid[RsMailSid["APPOINTMENT_REQUEST_STAFF"] = 89] = "APPOINTMENT_REQUEST_STAFF";
    /** Appointment has been requested */
    RsMailSid[RsMailSid["APPOINTMENT_REQUEST_USER"] = 90] = "APPOINTMENT_REQUEST_USER";
    /** Appointment Wait List Cancellation */
    RsMailSid[RsMailSid["APPOINTMENT_WAIT_REMOVE"] = 195] = "APPOINTMENT_WAIT_REMOVE";
    /** Sent to staff when the AI Agent logs a billing or payment query */
    RsMailSid[RsMailSid["BILLING_RELATED_QUERY"] = 204] = "BILLING_RELATED_QUERY";
    /** Class Booking Confirmation */
    RsMailSid[RsMailSid["BOOK_ADD_CLASS"] = 1] = "BOOK_ADD_CLASS";
    /** Class Booking Notification - Staff */
    RsMailSid[RsMailSid["BOOK_ADD_STAFF"] = 47] = "BOOK_ADD_STAFF";
    /** Sent if a client cancels a booking (used in automations) */
    RsMailSid[RsMailSid["BOOK_CANCEL"] = 210] = "BOOK_CANCEL";
    /** Class Booking (Reservation) Cancelled by Staff */
    RsMailSid[RsMailSid["BOOK_CANCEL_ADMIN_CLASS"] = 23] = "BOOK_CANCEL_ADMIN_CLASS";
    /** Enrollment Booking Cancelled by Staff */
    RsMailSid[RsMailSid["BOOK_CANCEL_ADMIN_ENROLLMENT"] = 57] = "BOOK_CANCEL_ADMIN_ENROLLMENT";
    /** Enrollment Session Cancellation Notification */
    RsMailSid[RsMailSid["BOOK_CANCEL_ENROLLMENT_SESSION"] = 128] = "BOOK_CANCEL_ENROLLMENT_SESSION";
    /** Class Cancelled by Client - Early */
    RsMailSid[RsMailSid["BOOK_CANCEL_FREE_CLASS"] = 3] = "BOOK_CANCEL_FREE_CLASS";
    /** Enrollment Cancelled by Client - Early */
    RsMailSid[RsMailSid["BOOK_CANCEL_FREE_ENROLLMENT"] = 58] = "BOOK_CANCEL_FREE_ENROLLMENT";
    /** Class Cancelled By Client - Late */
    RsMailSid[RsMailSid["BOOK_CANCEL_PENALTY_CLASS"] = 4] = "BOOK_CANCEL_PENALTY_CLASS";
    /** Enrollment Cancelled By Client - Late */
    RsMailSid[RsMailSid["BOOK_CANCEL_PENALTY_ENROLLMENT"] = 59] = "BOOK_CANCEL_PENALTY_ENROLLMENT";
    /** Class Booking Cancellation Notification - Staff */
    RsMailSid[RsMailSid["BOOK_CANCEL_STAFF"] = 48] = "BOOK_CANCEL_STAFF";
    /** Enrollment Booking Confirmation */
    RsMailSid[RsMailSid["BOOK_ENROLLMENT"] = 69] = "BOOK_ENROLLMENT";
    /** Enrollment Booking Cancellation Notification - Staff */
    RsMailSid[RsMailSid["BOOK_ENROLLMENT_CANCEL_STAFF"] = 92] = "BOOK_ENROLLMENT_CANCEL_STAFF";
    /** Enrollment Booking Notification - Staff */
    RsMailSid[RsMailSid["BOOK_ENROLLMENT_STAFF"] = 91] = "BOOK_ENROLLMENT_STAFF";
    /** Thanks for your interest */
    RsMailSid[RsMailSid["BOOK_FIRST"] = 73] = "BOOK_FIRST";
    /** Appointment Wait List Promotion (Client Confirmation Required) */
    RsMailSid[RsMailSid["BOOK_PROMOTE_CONFIRM_APPOINTMENT"] = 169] = "BOOK_PROMOTE_CONFIRM_APPOINTMENT";
    /** Waitlist Promotion (Client Confirmation Required) */
    RsMailSid[RsMailSid["BOOK_PROMOTE_CONFIRM_CLASS"] = 53] = "BOOK_PROMOTE_CONFIRM_CLASS";
    /** Waitlist Promotion (Client Confirmation Required) */
    RsMailSid[RsMailSid["BOOK_PROMOTE_CONFIRM_ENROLLMENT"] = 60] = "BOOK_PROMOTE_CONFIRM_ENROLLMENT";
    /** Appointment Wait List Promotion (Confirmation not Required) */
    RsMailSid[RsMailSid["BOOK_PROMOTE_DIRECT_APPOINTMENT"] = 168] = "BOOK_PROMOTE_DIRECT_APPOINTMENT";
    /** Waitlist Promotion (Client Confirmation Not Required) */
    RsMailSid[RsMailSid["BOOK_PROMOTE_DIRECT_CLASS"] = 8] = "BOOK_PROMOTE_DIRECT_CLASS";
    /** Waitlist Promotion (Client Confirmation Not Required) */
    RsMailSid[RsMailSid["BOOK_PROMOTE_DIRECT_ENROLLMENT"] = 61] = "BOOK_PROMOTE_DIRECT_ENROLLMENT";
    /** Class Reminder */
    RsMailSid[RsMailSid["BOOK_REMIND_CLASS"] = 25] = "BOOK_REMIND_CLASS";
    /** Enrollment Reminder */
    RsMailSid[RsMailSid["BOOK_REMIND_ENROLLMENT"] = 62] = "BOOK_REMIND_ENROLLMENT";
    /** Appointment Reminder - Staff */
    RsMailSid[RsMailSid["BOOK_REMIND_SERVICE_STAFF"] = 27] = "BOOK_REMIND_SERVICE_STAFF";
    /** Appointment Reminder */
    RsMailSid[RsMailSid["BOOK_REMIND_SERVICE_USER"] = 26] = "BOOK_REMIND_SERVICE_USER";
    /** Class Booking Confirmation */
    RsMailSid[RsMailSid["BOOK_REPEAT_ADD"] = 101] = "BOOK_REPEAT_ADD";
    /** Class Booking Cancelled */
    RsMailSid[RsMailSid["BOOK_REPEAT_CANCEL"] = 102] = "BOOK_REPEAT_CANCEL";
    /** Recurrent Class Reservation Wait List */
    RsMailSid[RsMailSid["BOOK_REPEAT_WAIT"] = 166] = "BOOK_REPEAT_WAIT";
    /** Class Review Request */
    RsMailSid[RsMailSid["BOOK_VISIT"] = 39] = "BOOK_VISIT";
    /** Appointment Reservation Wait List */
    RsMailSid[RsMailSid["BOOK_WAIT_APPOINTMENT"] = 165] = "BOOK_WAIT_APPOINTMENT";
    /** Class Reservation Wait List */
    RsMailSid[RsMailSid["BOOK_WAIT_CLASS"] = 2] = "BOOK_WAIT_CLASS";
    /** Enrollment Reservation Wait List */
    RsMailSid[RsMailSid["BOOK_WAIT_ENROLLMENT"] = 63] = "BOOK_WAIT_ENROLLMENT";
    /** Sent when a business account or location is churned */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_CHURN"] = 154] = "BUSINESS_ACCOUNT_CHURN";
    /** Sent to business owner if payment for account failed */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_PAY_FAIL"] = 82] = "BUSINESS_ACCOUNT_PAY_FAIL";
    /** Sent to business owners as notification in one day before payment for account */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_PAY_NOTIFY"] = 83] = "BUSINESS_ACCOUNT_PAY_NOTIFY";
    /** Sent to business owner on successful payment for account */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_PAY_OK"] = 81] = "BUSINESS_ACCOUNT_PAY_OK";
    /** Sent when the monthly postcard limit is exceeded */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_POSTCARD_LIMIT"] = 155] = "BUSINESS_ACCOUNT_POSTCARD_LIMIT";
    /** Sent when subscription price has been overridden and is less than the configured notification threshold */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_SUBSCRIPTION_DISCOUNT"] = 158] = "BUSINESS_ACCOUNT_SUBSCRIPTION_DISCOUNT";
    /** Sent when subscription price has been overridden twice or more */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_SUBSCRIPTION_OVERRIDE"] = 151] = "BUSINESS_ACCOUNT_SUBSCRIPTION_OVERRIDE";
    /** Sent when a subscription payment is marked as paid */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_SUBSCRIPTION_PAYMENT"] = 156] = "BUSINESS_ACCOUNT_SUBSCRIPTION_PAYMENT";
    /** Sent when subscription skip payment setting has been changed */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_SUBSCRIPTION_SKIP"] = 134] = "BUSINESS_ACCOUNT_SUBSCRIPTION_SKIP";
    /** Sent when a new subscription has been added, and the business is paying for fewer locations than they have */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_SUBSCRIPTION_UNDERPAYING"] = 152] = "BUSINESS_ACCOUNT_SUBSCRIPTION_UNDERPAYING";
    /** Sent when a user signs up for the virtual service */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_VIRTUAL_SIGNUP"] = 157] = "BUSINESS_ACCOUNT_VIRTUAL_SIGNUP";
    /** Sent when a business adds more licenses to their `FitLIVE` subscription */
    RsMailSid[RsMailSid["BUSINESS_ACCOUNT_VIRTUAL_UPGRADE"] = 175] = "BUSINESS_ACCOUNT_VIRTUAL_UPGRADE";
    /** Sends to client after the first-level onboarding, providing them with login information */
    RsMailSid[RsMailSid["BUSINESS_CREATE"] = 192] = "BUSINESS_CREATE";
    /** Email sales@wellnessliving.com when user changes Message Center plan */
    RsMailSid[RsMailSid["BUSINESS_MESSAGE_SUBSCRIBE"] = 164] = "BUSINESS_MESSAGE_SUBSCRIBE";
    /** Email to the marketing to remind to upload the 'Partner Program 30-Day Notification Banner' to all businesses accounts */
    RsMailSid[RsMailSid["BUSINESS_PARTNER_BANNER"] = 179] = "BUSINESS_PARTNER_BANNER";
    /** Email to the marketing to remind to upload the 'Partner Program 30-Day Notification Banner' to business account */
    RsMailSid[RsMailSid["BUSINESS_PARTNER_BANNER_CUSTOMER"] = 180] = "BUSINESS_PARTNER_BANNER_CUSTOMER";
    /** Email to the admins that business staff member wants to take a part in the partner program */
    RsMailSid[RsMailSid["BUSINESS_PARTNER_ENROLL"] = 119] = "BUSINESS_PARTNER_ENROLL";
    /** Email to the staff members of the partner business when a new lead comes in through his partnership */
    RsMailSid[RsMailSid["BUSINESS_PARTNER_REFERRAL_MAIL_NEW"] = 143] = "BUSINESS_PARTNER_REFERRAL_MAIL_NEW";
    /** Email to the admins when a referral reaches a certain period of paid subscription about sending a check to partner business */
    RsMailSid[RsMailSid["BUSINESS_PARTNER_REFERRAL_MAIL_REACH_ADMIN_PARTNER"] = 145] = "BUSINESS_PARTNER_REFERRAL_MAIL_REACH_ADMIN_PARTNER";
    /** Email to the admins when a referral reaches a certain period of paid subscription about sending a check to referral business */
    RsMailSid[RsMailSid["BUSINESS_PARTNER_REFERRAL_MAIL_REACH_ADMIN_REFERRAL"] = 148] = "BUSINESS_PARTNER_REFERRAL_MAIL_REACH_ADMIN_REFERRAL";
    /** Email to the staff members of the partner business when a referral reaches a certain period of paid subscription */
    RsMailSid[RsMailSid["BUSINESS_PARTNER_REFERRAL_MAIL_REACH_PARTNER"] = 146] = "BUSINESS_PARTNER_REFERRAL_MAIL_REACH_PARTNER";
    /** Email to the staff members of the referred business when they reaches a certain period of paid subscription */
    RsMailSid[RsMailSid["BUSINESS_PARTNER_REFERRAL_MAIL_REACH_REFERRAL"] = 147] = "BUSINESS_PARTNER_REFERRAL_MAIL_REACH_REFERRAL";
    /** Email to the staff members of the partner business when a referral has been subscribed */
    RsMailSid[RsMailSid["BUSINESS_PARTNER_REFERRAL_MAIL_SUBSCRIBE"] = 144] = "BUSINESS_PARTNER_REFERRAL_MAIL_SUBSCRIBE";
    /** Business registered its business phone number */
    RsMailSid[RsMailSid["BUSINESS_PHONE"] = 139] = "BUSINESS_PHONE";
    /** Sent when send/receive SMS in Two-Way SMS chat */
    RsMailSid[RsMailSid["BUSINESS_SMS_CHAT"] = 141] = "BUSINESS_SMS_CHAT";
    /** Sent to staff when the AI Agent captures a cancellation request */
    RsMailSid[RsMailSid["CANCELLATION_REQUEST_AI"] = 202] = "CANCELLATION_REQUEST_AI";
    /** Sent to staff when CAASI receives a request for booking */
    RsMailSid[RsMailSid["CLASS_BOOK_AI"] = 201] = "CLASS_BOOK_AI";
    /** Alerts staff that the AI Agent has completed a class booking for a client */
    RsMailSid[RsMailSid["CLASS_BOOKED_AI"] = 199] = "CLASS_BOOKED_AI";
    /** Class Type Modified Has Changed */
    RsMailSid[RsMailSid["CLASS_EDIT_CLASS"] = 24] = "CLASS_EDIT_CLASS";
    /** Enrollment Type Modified Has Changed */
    RsMailSid[RsMailSid["CLASS_EDIT_ENROLLMENT"] = 64] = "CLASS_EDIT_ENROLLMENT";
    /** Class cancelled by staff */
    RsMailSid[RsMailSid["CLASS_PERIOD_CANCEL_CLASS"] = 16] = "CLASS_PERIOD_CANCEL_CLASS";
    /** Enrollment cancelled by staff */
    RsMailSid[RsMailSid["CLASS_PERIOD_CANCEL_ENROLLMENT"] = 66] = "CLASS_PERIOD_CANCEL_ENROLLMENT";
    /** Class Schedule Details Changed Modified */
    RsMailSid[RsMailSid["CLASS_PERIOD_CHANGE_CLASS"] = 17] = "CLASS_PERIOD_CHANGE_CLASS";
    /** Enrollment Schedule Details Changed Modified */
    RsMailSid[RsMailSid["CLASS_PERIOD_CHANGE_ENROLLMENT"] = 65] = "CLASS_PERIOD_CHANGE_ENROLLMENT";
    /** Class Cancellation Notification - Staff */
    RsMailSid[RsMailSid["CLASSES_CANCEL_STAFF"] = 135] = "CLASSES_CANCEL_STAFF";
    /** Class Schedule Details Changed */
    RsMailSid[RsMailSid["CLASSES_PERIOD_CHANGE_CLASSES_STAFF"] = 100] = "CLASSES_PERIOD_CHANGE_CLASSES_STAFF";
    /** Email to the business members with information about newly added class schedule */
    RsMailSid[RsMailSid["CLASSES_PROMOTE"] = 109] = "CLASSES_PROMOTE";
    /** A reminder for the staff about an upcoming recurrent class */
    RsMailSid[RsMailSid["CLASSES_STAFF_RECURRENT"] = 124] = "CLASSES_STAFF_RECURRENT";
    /** A notification to the staff about a cancellation of a recurrent class */
    RsMailSid[RsMailSid["CLASSES_STAFF_RECURRENT_CANCEL"] = 125] = "CLASSES_STAFF_RECURRENT_CANCEL";
    /** Staff member that conducts the class is changed (a new staff member is added, or an existing staff member is substituted) */
    RsMailSid[RsMailSid["CLASSES_STAFF_SUBSTITUTION"] = 110] = "CLASSES_STAFF_SUBSTITUTION";
    /** Send to the staff a remind about an upcoming class session */
    RsMailSid[RsMailSid["CLASSES_STAFF_SUBSTITUTION_REMIND"] = 117] = "CLASSES_STAFF_SUBSTITUTION_REMIND";
    /** Sent to the client after a video uploaded to an attendance list is published */
    RsMailSid[RsMailSid["CLASSES_VIDEO_PUBLISH"] = 161] = "CLASSES_VIDEO_PUBLISH";
    /** Send a copy of contract */
    RsMailSid[RsMailSid["CONTRACT_COPY"] = 98] = "CONTRACT_COPY";
    /** Sent after purchase of coupon */
    RsMailSid[RsMailSid["COUPON_PURCHASE"] = 84] = "COUPON_PURCHASE";
    /** Enrollment Session(s) Booking Confirmation */
    RsMailSid[RsMailSid["EVENT_BOOK_SESSION_CLIENT"] = 129] = "EVENT_BOOK_SESSION_CLIENT";
    /** Enrollment Session(s) Booking Notification - Staff */
    RsMailSid[RsMailSid["EVENT_BOOK_SESSION_STAFF"] = 130] = "EVENT_BOOK_SESSION_STAFF";
    /** Email to the business members with information about newly added event schedule */
    RsMailSid[RsMailSid["EVENT_PROMOTE"] = 160] = "EVENT_PROMOTE";
    /** Sent to the client after a video uploaded to an attendance list is published */
    RsMailSid[RsMailSid["EVENT_VIDEO_PUBLISH"] = 162] = "EVENT_VIDEO_PUBLISH";
    /** Staff sent feedback with some comment */
    RsMailSid[RsMailSid["FEEDBACK_DIALOG"] = 133] = "FEEDBACK_DIALOG";
    /** New Comment on Logged Result */
    RsMailSid[RsMailSid["FITBUILDER_MAIL_COMMENT"] = 182] = "FITBUILDER_MAIL_COMMENT";
    /** New Likes on Comment */
    RsMailSid[RsMailSid["FITBUILDER_MAIL_LIKE"] = 183] = "FITBUILDER_MAIL_LIKE";
    /** Thumbs up on Logged Result */
    RsMailSid[RsMailSid["FITBUILDER_MAIL_THUMB"] = 184] = "FITBUILDER_MAIL_THUMB";
    /** Workout of the day */
    RsMailSid[RsMailSid["FITBUILDER_MAIL_WORKOUT"] = 185] = "FITBUILDER_MAIL_WORKOUT";
    /** Guest Pass invitation expired */
    RsMailSid[RsMailSid["GUEST_PASS_EXPIRED"] = 218] = "GUEST_PASS_EXPIRED";
    /** Guest Pass invitation sent */
    RsMailSid[RsMailSid["GUEST_PASS_INVITATION"] = 217] = "GUEST_PASS_INVITATION";
    /** Guest Pass invitation reminder */
    RsMailSid[RsMailSid["GUEST_PASS_REMINDER"] = 219] = "GUEST_PASS_REMINDER";
    /** For staff members to send emails to support using the help popup */
    RsMailSid[RsMailSid["HELP_POPUP_EMAIL"] = 150] = "HELP_POPUP_EMAIL";
    /** Sent when a business enrolls in Autymate */
    RsMailSid[RsMailSid["INTEGRATION_AUTYMATE_ENROLLMENT"] = 176] = "INTEGRATION_AUTYMATE_ENROLLMENT";
    /** Sent when a business subscribes to collections */
    RsMailSid[RsMailSid["INTEGRATION_COLLECTION_ALDOUS"] = 178] = "INTEGRATION_COLLECTION_ALDOUS";
    /** Email, which is sent when a customer has connected a paid Zoom account */
    RsMailSid[RsMailSid["INTEGRATION_ZOOM_CONFIRMATION"] = 138] = "INTEGRATION_ZOOM_CONFIRMATION";
    /** Request a demo from landing page */
    RsMailSid[RsMailSid["LANDING_CONTACT"] = 97] = "LANDING_CONTACT";
    /** Sent to staff member informing them that a new client has entered their information into the Lead Capture Widget */
    RsMailSid[RsMailSid["LEAD_ADDED_STAFF"] = 163] = "LEAD_ADDED_STAFF";
    /** Sent to the client after they fill out a Lead Capture Form on the website of a business */
    RsMailSid[RsMailSid["LEAD_CAPTURE"] = 87] = "LEAD_CAPTURE";
    /** Sent to staff when CAASI captures a new lead from a conversation, */
    RsMailSid[RsMailSid["LEAD_CAPTURE_AI"] = 197] = "LEAD_CAPTURE_AI";
    /** Sent to client on annual anniversary of the Member Since date */
    RsMailSid[RsMailSid["LOGIN_ANNIVERSARY"] = 96] = "LOGIN_ANNIVERSARY";
    /** Attendance List */
    RsMailSid[RsMailSid["LOGIN_ATTENDANCE"] = 42] = "LOGIN_ATTENDANCE";
    /** Sent when user long time did not visit location, and it not has active promotion */
    RsMailSid[RsMailSid["LOGIN_BACK"] = 79] = "LOGIN_BACK";
    /** Email to send on the day, when client has birthday */
    RsMailSid[RsMailSid["LOGIN_BIRTHDAY"] = 49] = "LOGIN_BIRTHDAY";
    /** Clients Payment Card expires this month */
    RsMailSid[RsMailSid["LOGIN_CARD_EXPIRE"] = 51] = "LOGIN_CARD_EXPIRE";
    /** Email address confirmation */
    RsMailSid[RsMailSid["LOGIN_MAIL_CONFIRM"] = 123] = "LOGIN_MAIL_CONFIRM";
    /** Custom Client Email #1 */
    RsMailSid[RsMailSid["LOGIN_MESSAGE"] = 22] = "LOGIN_MESSAGE";
    /** Client no show */
    RsMailSid[RsMailSid["LOGIN_PENALTY_APPOINTMENT"] = 72] = "LOGIN_PENALTY_APPOINTMENT";
    /** Client no show */
    RsMailSid[RsMailSid["LOGIN_PENALTY_CLASS"] = 15] = "LOGIN_PENALTY_CLASS";
    /** Client no show */
    RsMailSid[RsMailSid["LOGIN_PENALTY_ENROLLMENT"] = 67] = "LOGIN_PENALTY_ENROLLMENT";
    /** Billed to Account. Sent to the client when any purchase was billed to their account balance */
    RsMailSid[RsMailSid["LOGIN_PURCHASE_ACCOUNT"] = 159] = "LOGIN_PURCHASE_ACCOUNT";
    /** Sent to a client when they haven't visited in a set number of days, */
    RsMailSid[RsMailSid["LOGIN_RETENTION"] = 50] = "LOGIN_RETENTION";
    /** Sent to the client when a new account statement becomes available */
    RsMailSid[RsMailSid["LOGIN_STATEMENT_NEW"] = 213] = "LOGIN_STATEMENT_NEW";
    /** Sent to all new users after they create an account for the first time */
    RsMailSid[RsMailSid["LOGIN_WELCOME"] = 9] = "LOGIN_WELCOME";
    /** Client added to a member group */
    RsMailSid[RsMailSid["MEMBER_GROUP_USER_ADD"] = 214] = "MEMBER_GROUP_USER_ADD";
    /** Client removed from a member group */
    RsMailSid[RsMailSid["MEMBER_GROUP_USER_REMOVE"] = 215] = "MEMBER_GROUP_USER_REMOVE";
    /** Sent to staff when the AI Agent logs a membership or purchase query */
    RsMailSid[RsMailSid["MEMBERSHIP_QUERY"] = 203] = "MEMBERSHIP_QUERY";
    /** Sent OTP code by sms or email to validate phone number or email address */
    RsMailSid[RsMailSid["NOTIFICATION_OTP"] = 191] = "NOTIFICATION_OTP";
    /** Sent OTP code by sms and email for the user sign in */
    RsMailSid[RsMailSid["PASSPORT_LOGIN_ENTER"] = 187] = "PASSPORT_LOGIN_ENTER";
    /** Notification about email address is changed due to merge */
    RsMailSid[RsMailSid["PASSPORT_LOGIN_MERGE"] = 205] = "PASSPORT_LOGIN_MERGE";
    /** E-mail with a list of user's payment account transactions for last `62` days */
    RsMailSid[RsMailSid["PAY_ACCOUNT_INVOICE"] = 85] = "PAY_ACCOUNT_INVOICE";
    /** Automatic payment success */
    RsMailSid[RsMailSid["PAY_AUTOMATIC_SUCCESS"] = 116] = "PAY_AUTOMATIC_SUCCESS";
    /** Transaction failed */
    RsMailSid[RsMailSid["PAY_TRANSACTION_FAIL"] = 181] = "PAY_TRANSACTION_FAIL";
    /** Request a custom website subscription */
    RsMailSid[RsMailSid["PRESENCE_ACTIVATE"] = 137] = "PRESENCE_ACTIVATE";
    /** Sent after purchase of product */
    RsMailSid[RsMailSid["PRODUCT_PURCHASE"] = 127] = "PRODUCT_PURCHASE";
    /** Email to inform user that they email is changed */
    RsMailSid[RsMailSid["PROFILE_MAIL_CHANGE"] = 93] = "PROFILE_MAIL_CHANGE";
    /** Email to confirm new email address after it was changed */
    RsMailSid[RsMailSid["PROFILE_MAIL_CONFIRM"] = 86] = "PROFILE_MAIL_CONFIRM";
    /** Mail to inform the user that their password has been changed */
    RsMailSid[RsMailSid["PROFILE_PASSWORD_CHANGE"] = 111] = "PROFILE_PASSWORD_CHANGE";
    /** Mail containing reset password link to allow the user to change their password */
    RsMailSid[RsMailSid["PROFILE_PASSWORD_RESET"] = 142] = "PROFILE_PASSWORD_RESET";
    /** Few Pass Visits Remaining */
    RsMailSid[RsMailSid["PROMOTION_LOW"] = 43] = "PROMOTION_LOW";
    /** Sent when membership is canceled */
    RsMailSid[RsMailSid["PROMOTION_MEMBERSHIP_CANCEL"] = 153] = "PROMOTION_MEMBERSHIP_CANCEL";
    /** Sent to staff when membership is canceled */
    RsMailSid[RsMailSid["PROMOTION_MEMBERSHIP_CANCEL_STAFF"] = 193] = "PROMOTION_MEMBERSHIP_CANCEL_STAFF";
    /** Sent when membership expires */
    RsMailSid[RsMailSid["PROMOTION_MEMBERSHIP_EXPIRE"] = 77] = "PROMOTION_MEMBERSHIP_EXPIRE";
    /** Membership Payment - Billed to Account */
    RsMailSid[RsMailSid["PROMOTION_MEMBERSHIP_PAY_ACCOUNT"] = 106] = "PROMOTION_MEMBERSHIP_PAY_ACCOUNT";
    /** Automatic Payment Failed */
    RsMailSid[RsMailSid["PROMOTION_MEMBERSHIP_PAY_FAIL"] = 55] = "PROMOTION_MEMBERSHIP_PAY_FAIL";
    /** Membership Payment Confirmation */
    RsMailSid[RsMailSid["PROMOTION_MEMBERSHIP_PAY_OK"] = 56] = "PROMOTION_MEMBERSHIP_PAY_OK";
    /** Sent to the customer after their membership is renewed */
    RsMailSid[RsMailSid["PROMOTION_MEMBERSHIP_REACTIVATE"] = 75] = "PROMOTION_MEMBERSHIP_REACTIVATE";
    /** Sent before certain count of days before membership renews */
    RsMailSid[RsMailSid["PROMOTION_MEMBERSHIP_RENEW"] = 78] = "PROMOTION_MEMBERSHIP_RENEW";
    /** Sent after purchase of promotion */
    RsMailSid[RsMailSid["PROMOTION_PURCHASE"] = 76] = "PROMOTION_PURCHASE";
    /** Receipt sent after purchase of promotion */
    RsMailSid[RsMailSid["PROMOTION_RECEIPT"] = 136] = "PROMOTION_RECEIPT";
    /** Sent after a client attended a visit using a purchase option (used in automations) */
    RsMailSid[RsMailSid["PROMOTION_USED"] = 212] = "PROMOTION_USED";
    /** Sent to the customer when a promotion is paused */
    RsMailSid[RsMailSid["PURCHASE_HOLD"] = 194] = "PURCHASE_HOLD";
    /** Sends to the clients when purchase option hold expiring soon */
    RsMailSid[RsMailSid["PURCHASE_HOLD_EXPIRING"] = 186] = "PURCHASE_HOLD_EXPIRING";
    /** Purchase Receipt */
    RsMailSid[RsMailSid["PURCHASE_PAYMENT"] = 52] = "PURCHASE_PAYMENT";
    /** Purchase Receipt */
    RsMailSid[RsMailSid["PURCHASE_PAYMENT_ACCOUNT"] = 107] = "PURCHASE_PAYMENT_ACCOUNT";
    /** Purchase Receipt */
    RsMailSid[RsMailSid["PURCHASE_PAYMENT_POS"] = 115] = "PURCHASE_PAYMENT_POS";
    /** Sent to Business Owner when the re-order level has been reached for some product */
    RsMailSid[RsMailSid["PURCHASE_PRODUCT_INVENTORY"] = 95] = "PURCHASE_PRODUCT_INVENTORY";
    /** Thanks for purchasing an introductory offer */
    RsMailSid[RsMailSid["PURCHASE_PROMOTION_INTRODUCTORY"] = 74] = "PURCHASE_PROMOTION_INTRODUCTORY";
    /** Send refund receipt */
    RsMailSid[RsMailSid["PURCHASE_REFUND"] = 108] = "PURCHASE_REFUND";
    /** Quiz form submission - Client */
    RsMailSid[RsMailSid["QUIZ_FORM_SUBMITTION"] = 172] = "QUIZ_FORM_SUBMITTION";
    /** Email to wellnessliving team when user changes Quiz Subscription plan */
    RsMailSid[RsMailSid["QUIZ_INDEX"] = 174] = "QUIZ_INDEX";
    /** Quiz submitted - Staff */
    RsMailSid[RsMailSid["QUIZ_NOTIFICATION"] = 171] = "QUIZ_NOTIFICATION";
    /** Quiz submitted - Staff */
    RsMailSid[RsMailSid["QUIZ_NOTIFICATION_REMIND"] = 173] = "QUIZ_NOTIFICATION_REMIND";
    /** Email to wellnessliving team when businesses perform actions which is exporting data */
    RsMailSid[RsMailSid["REPORT_EXPORT"] = 177] = "REPORT_EXPORT";
    /** New Customer Review - Staff */
    RsMailSid[RsMailSid["REVIEW_ADD"] = 38] = "REVIEW_ADD";
    /** Owner Replied to Review */
    RsMailSid[RsMailSid["REVIEW_REPLY"] = 45] = "REVIEW_REPLY";
    /** Client left a review */
    RsMailSid[RsMailSid["REVIEW_USER_LEFT"] = 216] = "REVIEW_USER_LEFT";
    /** Event redeems a reward (points or prizes) for client */
    RsMailSid[RsMailSid["REWARD_PRIZE_CLIENT"] = 120] = "REWARD_PRIZE_CLIENT";
    /** Event redeems a reward (points or prizes) for staff */
    RsMailSid[RsMailSid["REWARD_PRIZE_STAFF"] = 121] = "REWARD_PRIZE_STAFF";
    /** Sale Has Been Made */
    RsMailSid[RsMailSid["SALE_STAFF"] = 126] = "SALE_STAFF";
    /** Sent after booking a service (used in automations) */
    RsMailSid[RsMailSid["SERVICE_BOOK"] = 208] = "SERVICE_BOOK";
    /** Event when finished push certification for ios devices */
    RsMailSid[RsMailSid["SKIN_APPLICATION_CONNECT"] = 122] = "SKIN_APPLICATION_CONNECT";
    /** Notifies staff when CAASI captures a client request for a staff connect, */
    RsMailSid[RsMailSid["STAFF_CALLBACK_REQUEST"] = 196] = "STAFF_CALLBACK_REQUEST";
    /** Sends when task assigned to staff */
    RsMailSid[RsMailSid["TASK_ASSIGN"] = 104] = "TASK_ASSIGN";
    /** Send a copy of waiver */
    RsMailSid[RsMailSid["TERM_COPY"] = 99] = "TERM_COPY";
    /** Global email campaigns allows to send email to all clients, business owners, admins, etc */
    RsMailSid[RsMailSid["USER_CAMPAIGN"] = 112] = "USER_CAMPAIGN";
    /** Request a video subscription */
    RsMailSid[RsMailSid["VIDEO_SUBSCRIPTION_UPGRADE"] = 140] = "VIDEO_SUBSCRIPTION_UPGRADE";
    /** Sent after visit the service */
    RsMailSid[RsMailSid["VISIT_CAMPAIGN"] = 94] = "VISIT_CAMPAIGN";
    /** Sent if a client does not show up to a service reserved by (used in automations) */
    RsMailSid[RsMailSid["VISIT_NOSHOW"] = 209] = "VISIT_NOSHOW";
    /** Visit receipt */
    RsMailSid[RsMailSid["VISIT_RECEIPT_RECEIPT"] = 190] = "VISIT_RECEIPT_RECEIPT";
    /** Email, which is sent when a Zoom license is lack */
    RsMailSid[RsMailSid["ZOOM_LICENSE_LACK"] = 149] = "ZOOM_LICENSE_LACK";
})(RsMailSid || (exports.RsMailSid = RsMailSid = {}));
/** List of resource categories. */
var WlResourceResourceCategoryEnum;
(function (WlResourceResourceCategoryEnum) {
    /** Asset resource category */
    WlResourceResourceCategoryEnum[WlResourceResourceCategoryEnum["ASSET"] = 1] = "ASSET";
    /** Off-site location resource category */
    WlResourceResourceCategoryEnum[WlResourceResourceCategoryEnum["LOCATION"] = 2] = "LOCATION";
})(WlResourceResourceCategoryEnum || (exports.WlResourceResourceCategoryEnum = WlResourceResourceCategoryEnum = {}));
/** Reasons why the client can't book this class. */
var WlScheduleClassViewDenyReasonSid;
(function (WlScheduleClassViewDenyReasonSid) {
    /** User is trying to book on behalf of another client, but does not have permission to do so */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["ACCESS_DENIED"] = 1] = "ACCESS_DENIED";
    /** Manual restriction to book business, location or a certain class */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["ACCESS_LIMITED"] = 2] = "ACCESS_LIMITED";
    /** The business can not take one more client because of business subscription limitations */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["ACCOUNT_LIMIT"] = 3] = "ACCOUNT_LIMIT";
    /** Class is not available for certain age */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["AGE_RESTRICTION"] = 4] = "AGE_RESTRICTION";
    /** Liability Release needs to be agreed */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["AGREE_NX"] = 5] = "AGREE_NX";
    /** Client has unpaid fees */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["BALANCE_NEGATIVE"] = 22] = "BALANCE_NEGATIVE";
    /** It's too early to book a class */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["BOOK_EARLY"] = 7] = "BOOK_EARLY";
    /** It's too late to book a class */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["BOOK_LATE"] = 8] = "BOOK_LATE";
    /** User's visit overlaps with another visit */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["BOOK_OVERLAP"] = 25] = "BOOK_OVERLAP";
    /** User's pricing options do not allow booking another visit within a certain period because of pricing option limitations */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["BOOK_RESTRICT"] = 9] = "BOOK_RESTRICT";
    /** Client is already booked for this session */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["BOOKED_ALREADY"] = 6] = "BOOKED_ALREADY";
    /** Business is inactive */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["BUSINESS_INACTIVE"] = 10] = "BUSINESS_INACTIVE";
    /** Class is canceled */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["CLASS_CANCELED"] = 11] = "CLASS_CANCELED";
    /** Class is full */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["CLASS_FULL"] = 14] = "CLASS_FULL";
    /** Class does not exist anymore */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["CLASS_NOT_AVAILABLE_ANYMORE"] = 15] = "CLASS_NOT_AVAILABLE_ANYMORE";
    /** Client is flagged at location */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["CLIENT_FLAGGED"] = 12] = "CLIENT_FLAGGED";
    /** Credit card is required for booking services */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["CREDIT_CARD_REQUIRE"] = 13] = "CREDIT_CARD_REQUIRE";
    /** Business is closed */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["HOLIDAY"] = 16] = "HOLIDAY";
    /** Login is required */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["LOGIN_REQUIRED"] = 17] = "LOGIN_REQUIRED";
    /** Online booking is disabled for the class */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["NOT_BOOKABLE"] = 18] = "NOT_BOOKABLE";
    /** Online booking is disabled for this type of client */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["NOT_BOOKABLE_BY_TYPE"] = 24] = "NOT_BOOKABLE_BY_TYPE";
    /** Required personal details missing */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["USER_INFO_MISSING"] = 19] = "USER_INFO_MISSING";
    /** Visit to another class is required first */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["VISIT_BEFORE"] = 20] = "VISIT_BEFORE";
    /** The wait list is full */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["WAIT_LIST_LIMIT_MAX"] = 21] = "WAIT_LIST_LIMIT_MAX";
    /** Client has unsigned waiver */
    WlScheduleClassViewDenyReasonSid[WlScheduleClassViewDenyReasonSid["WAIVER_NX"] = 23] = "WAIVER_NX";
})(WlScheduleClassViewDenyReasonSid || (exports.WlScheduleClassViewDenyReasonSid = WlScheduleClassViewDenyReasonSid = {}));
/** List of possible value of virtual integrations. */
var WlVirtualVirtualProviderSid;
(function (WlVirtualVirtualProviderSid) {
    /** Virtual integration non implemented */
    WlVirtualVirtualProviderSid[WlVirtualVirtualProviderSid["NON_INTEGRATED"] = 2] = "NON_INTEGRATED";
    /** Virtual Zoom service integration */
    WlVirtualVirtualProviderSid[WlVirtualVirtualProviderSid["ZOOM"] = 1] = "ZOOM";
})(WlVirtualVirtualProviderSid || (exports.WlVirtualVirtualProviderSid = WlVirtualVirtualProviderSid = {}));
/** Possible ways to stop repeatable events. */
var RsRepeatEndSid;
(function (RsRepeatEndSid) {
    /** Stop after a certain number of repeats */
    RsRepeatEndSid[RsRepeatEndSid["COUNT"] = 2] = "COUNT";
    /** Stop after a certain date. Including this date */
    RsRepeatEndSid[RsRepeatEndSid["DATE"] = 3] = "DATE";
    /** Eternal appointments. Such appointments are scheduled for one year */
    RsRepeatEndSid[RsRepeatEndSid["ETERNAL"] = 1] = "ETERNAL";
})(RsRepeatEndSid || (exports.RsRepeatEndSid = RsRepeatEndSid = {}));
/** Relation type between two relatives. */
var RsFamilyRelationSid;
(function (RsFamilyRelationSid) {
    /** Care participant */
    RsFamilyRelationSid[RsFamilyRelationSid["CARE_PARTICIPANT"] = 12] = "CARE_PARTICIPANT";
    /** Care recipient */
    RsFamilyRelationSid[RsFamilyRelationSid["CARE_RECEIVER"] = 9] = "CARE_RECEIVER";
    /** Care provider */
    RsFamilyRelationSid[RsFamilyRelationSid["CAREGIVER"] = 8] = "CAREGIVER";
    /** Case load */
    RsFamilyRelationSid[RsFamilyRelationSid["CASE_LOAD"] = 16] = "CASE_LOAD";
    /** Case Manager */
    RsFamilyRelationSid[RsFamilyRelationSid["CASE_MANAGER"] = 15] = "CASE_MANAGER";
    /** Child of the parent */
    RsFamilyRelationSid[RsFamilyRelationSid["CHILD"] = 5] = "CHILD";
    /** Dependent */
    RsFamilyRelationSid[RsFamilyRelationSid["DEPENDENT"] = 10] = "DEPENDENT";
    /** Friend */
    RsFamilyRelationSid[RsFamilyRelationSid["FRIEND"] = 2] = "FRIEND";
    /** Guardian */
    RsFamilyRelationSid[RsFamilyRelationSid["GUARDIAN"] = 7] = "GUARDIAN";
    /** Not specified custom relationship */
    RsFamilyRelationSid[RsFamilyRelationSid["OTHER"] = 6] = "OTHER";
    /** Parent of the child */
    RsFamilyRelationSid[RsFamilyRelationSid["PARENT"] = 3] = "PARENT";
    /** Sibling. A brother or sister */
    RsFamilyRelationSid[RsFamilyRelationSid["SIBLING"] = 4] = "SIBLING";
    /** Spouse. A husband or wife */
    RsFamilyRelationSid[RsFamilyRelationSid["SPOUSE"] = 1] = "SPOUSE";
    /** Student */
    RsFamilyRelationSid[RsFamilyRelationSid["STUDENT"] = 14] = "STUDENT";
    /** Teacher */
    RsFamilyRelationSid[RsFamilyRelationSid["TEACHER"] = 13] = "TEACHER";
    /** Therapist */
    RsFamilyRelationSid[RsFamilyRelationSid["THERAPIST"] = 11] = "THERAPIST";
})(RsFamilyRelationSid || (exports.RsFamilyRelationSid = RsFamilyRelationSid = {}));
/** Class/Event booking process sid class. */
var WlBookProcessProcessSpaSid;
(function (WlBookProcessProcessSpaSid) {
    /** Step "Class details" */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["DETAIL"] = 10] = "DETAIL";
    /** Step "Documents" */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["DOCUMENT"] = 8] = "DOCUMENT";
    /** Step "Frequency" */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["FREQUENCY"] = 9] = "FREQUENCY";
    /** Information about the class */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["INFO"] = 2] = "INFO";
    /** Installment selection */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["INSTALLMENT"] = 4] = "INSTALLMENT";
    /** Sign in, Sign up, fill in all necessary account data */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["PASSPORT"] = 1] = "PASSPORT";
    /** Card data and the booking confirmation */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["PAYMENT"] = 5] = "PAYMENT";
    /** Quizzes attached to the class */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["QUIZ"] = 7] = "QUIZ";
    /** Booking for */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["RELATION"] = 12] = "RELATION";
    /** Selection of assets */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["RESOURCE"] = 6] = "RESOURCE";
    /** Session selection step for a session event */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["SESSION"] = 11] = "SESSION";
    /** A list of possible Purchase Options to be bought */
    WlBookProcessProcessSpaSid[WlBookProcessProcessSpaSid["STORE"] = 3] = "STORE";
})(WlBookProcessProcessSpaSid || (exports.WlBookProcessProcessSpaSid = WlBookProcessProcessSpaSid = {}));
/** List of possible modes to require amount while booking a class. */
var WlClassesRequirePaySid;
(function (WlClassesRequirePaySid) {
    /** Clients can pay online or pay when they visit */
    WlClassesRequirePaySid[WlClassesRequirePaySid["ADVANCE"] = 3] = "ADVANCE";
    /** Client should leave a deposit before booking an event */
    WlClassesRequirePaySid[WlClassesRequirePaySid["DEPOSIT"] = 4] = "DEPOSIT";
    /** Client must purchase online */
    WlClassesRequirePaySid[WlClassesRequirePaySid["ONLINE"] = 1] = "ONLINE";
    /** Clients can only pay when they visit. Online payment is not available */
    WlClassesRequirePaySid[WlClassesRequirePaySid["VISIT"] = 2] = "VISIT";
})(WlClassesRequirePaySid || (exports.WlClassesRequirePaySid = WlClassesRequirePaySid = {}));
/** A list of bookable types. */
var WlServiceBookableSid;
(function (WlServiceBookableSid) {
    /** All users can book */
    WlServiceBookableSid[WlServiceBookableSid["ALL"] = 1] = "ALL";
    /** Only special client groups can book */
    WlServiceBookableSid[WlServiceBookableSid["CUSTOM"] = 3] = "CUSTOM";
    /** Nobody can book */
    WlServiceBookableSid[WlServiceBookableSid["NONE"] = 2] = "NONE";
})(WlServiceBookableSid || (exports.WlServiceBookableSid = WlServiceBookableSid = {}));
/** Promotion or package date start rule. */
var RsActivationSid;
(function (RsActivationSid) {
    /** Number of a day of the month or of the week */
    RsActivationSid[RsActivationSid["DAY"] = 7] = "DAY";
    /** Custom date */
    RsActivationSid[RsActivationSid["FIXED"] = 3] = "FIXED";
    /** The first day of month */
    RsActivationSid[RsActivationSid["MONTH_FIRST"] = 4] = "MONTH_FIRST";
    /** The 15th day of the month */
    RsActivationSid[RsActivationSid["MONTH_HALF"] = 6] = "MONTH_HALF";
    /** The last day of the month */
    RsActivationSid[RsActivationSid["MONTH_LAST"] = 5] = "MONTH_LAST";
    /** Date of the sale */
    RsActivationSid[RsActivationSid["SALE"] = 1] = "SALE";
    /** Date of the first visit */
    RsActivationSid[RsActivationSid["VISIT"] = 2] = "VISIT";
})(RsActivationSid || (exports.RsActivationSid = RsActivationSid = {}));
/** String identifiers for tax type. */
var RsCommissionTypeSid;
(function (RsCommissionTypeSid) {
    /** Fixed type */
    RsCommissionTypeSid[RsCommissionTypeSid["FLAT"] = 1] = "FLAT";
    /** Percent type */
    RsCommissionTypeSid[RsCommissionTypeSid["PERCENT"] = 2] = "PERCENT";
})(RsCommissionTypeSid || (exports.RsCommissionTypeSid = RsCommissionTypeSid = {}));
/** List of sources from where the user registers. */
var WlProfileRegisterSourceSid;
(function (WlProfileRegisterSourceSid) {
    /** Source when a user registers during purchase or booking */
    WlProfileRegisterSourceSid[WlProfileRegisterSourceSid["BOOKING_AND_PURCHASE"] = 1] = "BOOKING_AND_PURCHASE";
    /** Source when a user registers on self-registration web app, self-registration web app URL, etc */
    WlProfileRegisterSourceSid[WlProfileRegisterSourceSid["SELF"] = 2] = "SELF";
    /** This is a service value, which means to not choose any specific source */
    WlProfileRegisterSourceSid[WlProfileRegisterSourceSid["UNSET_VALUE"] = 3] = "UNSET_VALUE";
})(WlProfileRegisterSourceSid || (exports.WlProfileRegisterSourceSid = WlProfileRegisterSourceSid = {}));
/** List of available design icons. */
var WlDesignIconSid;
(function (WlDesignIconSid) {
    /** Signs that session or pass is an appointment connected */
    WlDesignIconSid[WlDesignIconSid["APPOINTMENT"] = 4] = "APPOINTMENT";
    /** Signs that session or pass is an asset connected */
    WlDesignIconSid[WlDesignIconSid["ASSET"] = 7] = "ASSET";
    /** Signs that session or pass is a class or event connected */
    WlDesignIconSid[WlDesignIconSid["CLASSES"] = 5] = "CLASSES";
    /** Cycle icon. Used, for example, to show transferred status of the promotion */
    WlDesignIconSid[WlDesignIconSid["CYCLE"] = 3] = "CYCLE";
    /** Early cancel activity list icon */
    WlDesignIconSid[WlDesignIconSid["EARLY_CANCELED"] = 8] = "EARLY_CANCELED";
    /** Signs that session or pass is a gym visit connected */
    WlDesignIconSid[WlDesignIconSid["GYM_VISIT"] = 6] = "GYM_VISIT";
    /** Late cancel activity list icon */
    WlDesignIconSid[WlDesignIconSid["LATE_CANCELED"] = 9] = "LATE_CANCELED";
    /** Piece of paper with the curved end for different text notes */
    WlDesignIconSid[WlDesignIconSid["NOTE"] = 2] = "NOTE";
    /** No show at visit activity list icon */
    WlDesignIconSid[WlDesignIconSid["NO_SHOW"] = 10] = "NO_SHOW";
    /** Paper with medical symbolic for medical notes */
    WlDesignIconSid[WlDesignIconSid["SOAP"] = 1] = "SOAP";
    /** Clock activity list icon in SPA application */
    WlDesignIconSid[WlDesignIconSid["SPA_CLOCK"] = 11] = "SPA_CLOCK";
})(WlDesignIconSid || (exports.WlDesignIconSid = WlDesignIconSid = {}));
/** Manages identifiers of user activity. */
var RsLoginActivityTypeSid;
(function (RsLoginActivityTypeSid) {
    /** Client books an appointment */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["APPOINTMENT_BOOK"] = 27] = "APPOINTMENT_BOOK";
    /** Client booked an appointment and shared on Facebook */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["APPOINTMENT_BOOK_FACEBOOK"] = 47] = "APPOINTMENT_BOOK_FACEBOOK";
    /** Client booked an appointment and shared on Twitter */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["APPOINTMENT_BOOK_TWITTER"] = 48] = "APPOINTMENT_BOOK_TWITTER";
    /** Client cancels an appointment */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["APPOINTMENT_CANCEL"] = 28] = "APPOINTMENT_CANCEL";
    /** Client attends an appointment */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["APPOINTMENT_VISIT"] = 23] = "APPOINTMENT_VISIT";
    /** Client books an appointment to wait list */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["APPOINTMENT_WAIT"] = 52] = "APPOINTMENT_WAIT";
    /** Client booked an asset and shared on Facebook */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["ASSET_BOOK_FACEBOOK"] = 49] = "ASSET_BOOK_FACEBOOK";
    /** Client booked an asset and shared on Twitter */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["ASSET_BOOK_TWITTER"] = 50] = "ASSET_BOOK_TWITTER";
    /** Client's birthday */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["BIRTHDAY"] = 1] = "BIRTHDAY";
    /** Client booked a class */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["CLASS_BOOK"] = 2] = "CLASS_BOOK";
    /** Client booked a class and shared on Facebook */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["CLASS_BOOK_FACEBOOK"] = 43] = "CLASS_BOOK_FACEBOOK";
    /** Client booked a class and shared on Twitter */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["CLASS_BOOK_TWITTER"] = 44] = "CLASS_BOOK_TWITTER";
    /** Client cancelled a class */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["CLASS_CANCEL"] = 3] = "CLASS_CANCEL";
    /** Client attends a class */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["CLASS_VISIT"] = 15] = "CLASS_VISIT";
    /** Client booked a class */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["CLASS_WAIT"] = 54] = "CLASS_WAIT";
    /** Gift card transferred */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["COUPON_TRANSFER"] = 51] = "COUPON_TRANSFER";
    /** Staff approved a custom reward for a client */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["CUSTOM_REWARD"] = 31] = "CUSTOM_REWARD";
    /** Client booked an enrollment */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["ENROLLMENT_BOOK"] = 17] = "ENROLLMENT_BOOK";
    /** Client booked an enrollment and shared on Facebook */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["ENROLLMENT_BOOK_FACEBOOK"] = 45] = "ENROLLMENT_BOOK_FACEBOOK";
    /** Client booked an enrollment and shared on Twitter */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["ENROLLMENT_BOOK_TWITTER"] = 46] = "ENROLLMENT_BOOK_TWITTER";
    /** Client cancels an enrollment */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["ENROLLMENT_CANCEL"] = 18] = "ENROLLMENT_CANCEL";
    /** Client attends an enrollment */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["ENROLLMENT_VISIT"] = 16] = "ENROLLMENT_VISIT";
    /** Client booked an enrollment */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["ENROLLMENT_WAIT"] = 53] = "ENROLLMENT_WAIT";
    /** Client connected his Facebook account */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["FACEBOOK_CONNECT"] = 12] = "FACEBOOK_CONNECT";
    /** Client disconnected his Facebook account */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["FACEBOOK_DISCONNECT"] = 19] = "FACEBOOK_DISCONNECT";
    /** Client added a class to favorites */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["FAVORITE_ADD_CLASS"] = 4] = "FAVORITE_ADD_CLASS";
    /** Client added a location to favorites */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["FAVORITE_ADD_LOCATION"] = 5] = "FAVORITE_ADD_LOCATION";
    /** Client added a staff member to favorites */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["FAVORITE_ADD_STAFF"] = 6] = "FAVORITE_ADD_STAFF";
    /** Client removed a class from favorites */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["FAVORITE_REMOVE_CLASS"] = 7] = "FAVORITE_REMOVE_CLASS";
    /** Client removed a location from favorites */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["FAVORITE_REMOVE_LOCATION"] = 8] = "FAVORITE_REMOVE_LOCATION";
    /** Client removed a staff member from favorites */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["FAVORITE_REMOVE_STAFF"] = 9] = "FAVORITE_REMOVE_STAFF";
    /** Client added a friend */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["FRIEND_ADD"] = 10] = "FRIEND_ADD";
    /** Client made a gym visit */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["GYM_VISIT"] = 32] = "GYM_VISIT";
    /** Client sent an invite */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["INVITE_SEND"] = 14] = "INVITE_SEND";
    /** The user shared location item into Facebook */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["LOCATION_SHARE_FACEBOOK"] = 39] = "LOCATION_SHARE_FACEBOOK";
    /** The user shared location item into Twitter */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["LOCATION_SHARE_TWITTER"] = 40] = "LOCATION_SHARE_TWITTER";
    /** The user spend money */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["PAY"] = 22] = "PAY";
    /** Client has bought prize */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["PRIZE"] = 24] = "PRIZE";
    /** Promotion transferred */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["PROMOTION_TRANSFER"] = 34] = "PROMOTION_TRANSFER";
    /** Customer bought the product */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["PURCHASE_PRODUCT"] = 30] = "PURCHASE_PRODUCT";
    /** Customer bought the promotion */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["PURCHASE_PROMOTION"] = 29] = "PURCHASE_PROMOTION";
    /** The user shared purchase item into Facebook */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["PURCHASE_SHARE_FACEBOOK"] = 25] = "PURCHASE_SHARE_FACEBOOK";
    /** The user shared purchase item into Twitter */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["PURCHASE_SHARE_TWITTER"] = 26] = "PURCHASE_SHARE_TWITTER";
    /** Referral made a purchase */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["REFER_PURCHASE"] = 38] = "REFER_PURCHASE";
    /** A referrer is set for the user */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["REFER_REGISTER"] = 37] = "REFER_REGISTER";
    /** The user has logged in */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["REGISTRATION"] = 21] = "REGISTRATION";
    /** Client wrote a review */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["REVIEW"] = 11] = "REVIEW";
    /** The user shared purchase item into Facebook */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["REVIEW_SHARE_FACEBOOK"] = 41] = "REVIEW_SHARE_FACEBOOK";
    /** The user shared purchase item into Twitter */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["REVIEW_SHARE_TWITTER"] = 42] = "REVIEW_SHARE_TWITTER";
    /** Reward points were changed manually */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["REWARD_MANUAL"] = 55] = "REWARD_MANUAL";
    /** All-time earned reward points have been reset */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["REWARD_RESET"] = 36] = "REWARD_RESET";
    /** Current available reward points have been reset */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["REWARD_RESET_AVAILABLE"] = 56] = "REWARD_RESET_AVAILABLE";
    /** Client attended several visits */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["SUMMARY_VISIT"] = 35] = "SUMMARY_VISIT";
    /** Client connected his Twitter account */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["TWITTER_CONNECT"] = 13] = "TWITTER_CONNECT";
    /** Client disconnected his Twitter account */
    RsLoginActivityTypeSid[RsLoginActivityTypeSid["TWITTER_DISCONNECT"] = 20] = "TWITTER_DISCONNECT";
})(RsLoginActivityTypeSid || (exports.RsLoginActivityTypeSid = RsLoginActivityTypeSid = {}));
/** Sources of system notes. */
var RsProfileNoteSid;
(function (RsProfileNoteSid) {
    /** A list of clients with not redeemed invitations */
    RsProfileNoteSid[RsProfileNoteSid["DOORACCESS_BRIVO_INVITATION_BRIVOINVITATIONPROFILE"] = 5] = "DOORACCESS_BRIVO_INVITATION_BRIVOINVITATIONPROFILE";
    /** A list of accounts with invalid progress log */
    RsProfileNoteSid[RsProfileNoteSid["MEMBER_PROGRESS_LOG_PROFILE"] = 3] = "MEMBER_PROGRESS_LOG_PROFILE";
    /** A list of accounts with not verified progress log */
    RsProfileNoteSid[RsProfileNoteSid["MEMBER_PROGRESS_LOG_VERIFICATION"] = 4] = "MEMBER_PROGRESS_LOG_VERIFICATION";
    /** A list of accounts with negative balance */
    RsProfileNoteSid[RsProfileNoteSid["PAY_ACCOUNT"] = 1] = "PAY_ACCOUNT";
    /** A list of accounts with unsigned waivers */
    RsProfileNoteSid[RsProfileNoteSid["PROFILE_PAGE_OVERVIEW_ALERT_AGREE"] = 8] = "PROFILE_PAGE_OVERVIEW_ALERT_AGREE";
    /** A list of accounts with upcoming birthdays */
    RsProfileNoteSid[RsProfileNoteSid["PROFILE_PAGE_OVERVIEW_ALERT_BIRTHDAY"] = 6] = "PROFILE_PAGE_OVERVIEW_ALERT_BIRTHDAY";
    /** A list of accounts with unsigned contracts */
    RsProfileNoteSid[RsProfileNoteSid["PROFILE_PAGE_OVERVIEW_ALERT_CONTRACT"] = 9] = "PROFILE_PAGE_OVERVIEW_ALERT_CONTRACT";
    /** A list of accounts with expired or soon expiring credit cards */
    RsProfileNoteSid[RsProfileNoteSid["PROFILE_PAGE_OVERVIEW_ALERT_CREDITCARD"] = 7] = "PROFILE_PAGE_OVERVIEW_ALERT_CREDITCARD";
    /** A list of accounts with a milestone visit */
    RsProfileNoteSid[RsProfileNoteSid["PROFILE_PAGE_OVERVIEW_ALERT_MILESTONEVISIT"] = 12] = "PROFILE_PAGE_OVERVIEW_ALERT_MILESTONEVISIT";
    /** A list of accounts with uncompleted quizzes */
    RsProfileNoteSid[RsProfileNoteSid["PROFILE_PAGE_OVERVIEW_ALERT_QUIZ"] = 10] = "PROFILE_PAGE_OVERVIEW_ALERT_QUIZ";
    /** A list of accounts at risk of churn */
    RsProfileNoteSid[RsProfileNoteSid["PROFILE_PAGE_OVERVIEW_ALERT_RISK"] = 11] = "PROFILE_PAGE_OVERVIEW_ALERT_RISK";
    /** A list of due membership payments */
    RsProfileNoteSid[RsProfileNoteSid["PROMOTION_PAY"] = 2] = "PROMOTION_PAY";
})(RsProfileNoteSid || (exports.RsProfileNoteSid = RsProfileNoteSid = {}));
/** Class for access type to login note. */
var RsLoginNoteAccessSid;
(function (RsLoginNoteAccessSid) {
    /** Login note can view all staff and client */
    RsLoginNoteAccessSid[RsLoginNoteAccessSid["CLIENT"] = 1] = "CLIENT";
    /** Login note can view only staff which create this note */
    RsLoginNoteAccessSid[RsLoginNoteAccessSid["ME"] = 2] = "ME";
    /** Login note can view only all staff */
    RsLoginNoteAccessSid[RsLoginNoteAccessSid["STAFF"] = 3] = "STAFF";
})(RsLoginNoteAccessSid || (exports.RsLoginNoteAccessSid = RsLoginNoteAccessSid = {}));
/** List of modes to change user's "flag" status within a location */
var RsLoginNoteFlagSid;
(function (RsLoginNoteFlagSid) {
    /** Add flag record */
    RsLoginNoteFlagSid[RsLoginNoteFlagSid["ADD"] = 1] = "ADD";
    /** Remove flag record */
    RsLoginNoteFlagSid[RsLoginNoteFlagSid["REMOVE"] = 2] = "REMOVE";
})(RsLoginNoteFlagSid || (exports.RsLoginNoteFlagSid = RsLoginNoteFlagSid = {}));
/** Different sources of flags, which are not set manually by the staff member. Such flags have own logic. */
var WlLocationFlagFlagSourceEnum;
(function (WlLocationFlagFlagSourceEnum) {
    /** Flag is set because user is sent to collections. This means user has debt and cannot make new purchases */
    WlLocationFlagFlagSourceEnum[WlLocationFlagFlagSourceEnum["COLLECTIONS"] = 1] = "COLLECTIONS";
})(WlLocationFlagFlagSourceEnum || (exports.WlLocationFlagFlagSourceEnum = WlLocationFlagFlagSourceEnum = {}));
/** List of file extensions. */
var WlProfileAttachAttachPreviewSid;
(function (WlProfileAttachAttachPreviewSid) {
    /** Image file */
    WlProfileAttachAttachPreviewSid[WlProfileAttachAttachPreviewSid["IMAGE"] = 1] = "IMAGE";
    /** Pdf file */
    WlProfileAttachAttachPreviewSid[WlProfileAttachAttachPreviewSid["PDF"] = 2] = "PDF";
})(WlProfileAttachAttachPreviewSid || (exports.WlProfileAttachAttachPreviewSid = WlProfileAttachAttachPreviewSid = {}));
/** Wellnessliving-wide privileges. */
var WlPrivilegePrivilegeSid;
(function (WlPrivilegePrivilegeSid) {
    /** Allows user to view, create or edit knowledge base entries, or conversational flows used by the AI Agent */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["AI_AGENT_KNOWLEDGE_BASE"] = 225] = "AI_AGENT_KNOWLEDGE_BASE";
    /** Allows user to view reporting and analytics data related to AI Agent performance or usage */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["AI_AGENT_REPORTS"] = 226] = "AI_AGENT_REPORTS";
    /** Allows user to modify configuration or conversational flows used by the AI Agents */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["AI_AGENT_SETTINGS"] = 227] = "AI_AGENT_SETTINGS";
    /** Allows user to create, update, or cancel AI Agent subscription plans */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["AI_AGENT_SUBSCRIPTIONS"] = 228] = "AI_AGENT_SUBSCRIPTIONS";
    /** View banner alert message on dashboard */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ALERT_MESSAGE"] = 142] = "ALERT_MESSAGE";
    /** Book appointments for clients with negative account balances */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["APPOINTMENT_BOOK_NEGATIVE"] = 209] = "APPOINTMENT_BOOK_NEGATIVE";
    /** Unpaid appointment booking */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["APPOINTMENT_BOOK_UNPAID"] = 167] = "APPOINTMENT_BOOK_UNPAID";
    /** Book appointments for clients with an unsigned waiver */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["APPOINTMENT_BOOK_UNSIGNED"] = 203] = "APPOINTMENT_BOOK_UNSIGNED";
    /** Edit appointment at my location */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["APPOINTMENT_EDIT"] = 50] = "APPOINTMENT_EDIT";
    /** Change/View all appointment */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["APPOINTMENT_FOREIGN"] = 49] = "APPOINTMENT_FOREIGN";
    /** Edit appointment schedule */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["APPOINTMENT_PERIOD"] = 51] = "APPOINTMENT_PERIOD";
    /** View appointment */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["APPOINTMENT_VIEW"] = 52] = "APPOINTMENT_VIEW";
    /** Ability to book clients outside their current paid period */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BOOK_OUTSIDE_PAID_PERIOD"] = 141] = "BOOK_OUTSIDE_PAID_PERIOD";
    /** Ability to book clients over capacity during or after the services have been scheduled */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BOOK_OVER_CAPACITY"] = 154] = "BOOK_OVER_CAPACITY";
    /** Ability to book assets which are booked for another service or set as unavailable */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BOOK_UNAVAILABLE_ASSETS"] = 138] = "BOOK_UNAVAILABLE_ASSETS";
    /** Ability to schedule staff members who are booked for another service or set as unavailable */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BOOK_UNAVAILABLE_STAFF"] = 137] = "BOOK_UNAVAILABLE_STAFF";
    /** Ability to book clients into recurring services even if they do not have an applicable Purchase Option to cover all visits */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BOOK_UNPAID_RECURRING_APPOINTMENT"] = 231] = "BOOK_UNPAID_RECURRING_APPOINTMENT";
    /** Ability to book clients into recurring services even if they do not have an applicable Purchase Option to cover all visits */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BOOK_UNPAID_RECURRING_CLASS"] = 232] = "BOOK_UNPAID_RECURRING_CLASS";
    /** Unpaid asset recurring booking */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BOOK_UNPAID_RECURRING_RESOURCE"] = 233] = "BOOK_UNPAID_RECURRING_RESOURCE";
    /** Manage business */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_EDIT"] = 1] = "BUSINESS_EDIT";
    /** Change business email settings */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_EMAIL"] = 117] = "BUSINESS_EMAIL";
    /** Change business policies */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_POLICY"] = 120] = "BUSINESS_POLICY";
    /** Change available services in business */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_SERVICE"] = 118] = "BUSINESS_SERVICE";
    /** Change services privileges apply */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_SERVICE_APPLY"] = 145] = "BUSINESS_SERVICE_APPLY";
    /** Change services privileges apply (third button requires second privilege) */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_SERVICE_APPLY_CUSTOM"] = 165] = "BUSINESS_SERVICE_APPLY_CUSTOM";
    /** Change Design Settings */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_SKIN"] = 19] = "BUSINESS_SKIN";
    /** Change business SMS settings */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_SMS"] = 169] = "BUSINESS_SMS";
    /** Change business URLs */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_URL"] = 119] = "BUSINESS_URL";
    /** Change business online waiver */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["BUSINESS_WAIVER"] = 121] = "BUSINESS_WAIVER";
    /** Perform Cash Out */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CASH_OUT"] = 82] = "CASH_OUT";
    /** Edit deposits while perform Cash Out */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CASH_OUT_DEPOSIT"] = 83] = "CASH_OUT_DEPOSIT";
    /** Perform editing of Cash Out */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CASH_OUT_EDIT"] = 84] = "CASH_OUT_EDIT";
    /** Manage clients' Credit Cards */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CC_MANAGE"] = 35] = "CC_MANAGE";
    /** Manage clients' Credit Cards manually */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CC_MANAGE_MANUAL"] = 208] = "CC_MANAGE_MANUAL";
    /** Edit class schedule */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CLASS_ATTENDANCE"] = 48] = "CLASS_ATTENDANCE";
    /** Book classes for clients with negative account balances */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CLASS_BOOK_NEGATIVE"] = 210] = "CLASS_BOOK_NEGATIVE";
    /** Add clients to the attendance list of a service, even if they do not have an applicable purchase option */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CLASS_BOOK_UNPAID"] = 79] = "CLASS_BOOK_UNPAID";
    /** Book classes for clients with an unsigned waiver */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CLASS_BOOK_UNSIGNED"] = 201] = "CLASS_BOOK_UNSIGNED";
    /** Edit classes at my location */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CLASS_EDIT"] = 3] = "CLASS_EDIT";
    /** Allows overriding certain class fields (capacity, price, etc.) when schedule is added */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CLASS_EDIT_SESSIONS"] = 238] = "CLASS_EDIT_SESSIONS";
    /** Change/View all classes */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CLASS_FOREIGN"] = 17] = "CLASS_FOREIGN";
    /** Lock search bar on class attendance list */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CLASS_LOCK_SEARCH"] = 152] = "CLASS_LOCK_SEARCH";
    /** Edit class schedule */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CLASS_PERIOD"] = 5] = "CLASS_PERIOD";
    /** Add and view client's contact logs */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["CONTACT_LOG_MANAGE"] = 135] = "CONTACT_LOG_MANAGE";
    /** Add, remove, and edit gift cards */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["COUPON"] = 31] = "COUPON";
    /** Delete shared dashboard */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["DASHBOARD_DELETE"] = 131] = "DASHBOARD_DELETE";
    /** Edit shared dashboard */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["DASHBOARD_EDIT"] = 130] = "DASHBOARD_EDIT";
    /** Share dashboard */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["DASHBOARD_SHARE"] = 129] = "DASHBOARD_SHARE";
    /** Add, remove and edit discount codes */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["DISCOUNT_CODE"] = 76] = "DISCOUNT_CODE";
    /** Configure Constant Contact settings */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["EML_CONSTANT_CONTACT"] = 123] = "EML_CONSTANT_CONTACT";
    /** Configure MailChimp settings */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["EML_MAILCHIMP"] = 122] = "EML_MAILCHIMP";
    /** Edit class schedule */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ENROLLMENT_ATTENDANCE"] = 55] = "ENROLLMENT_ATTENDANCE";
    /** Book events for clients with negative account balances */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ENROLLMENT_BOOK_NEGATIVE"] = 211] = "ENROLLMENT_BOOK_NEGATIVE";
    /** Add clients to the attendance list of a service, even if they do not have an applicable purchase option */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ENROLLMENT_BOOK_UNPAID"] = 80] = "ENROLLMENT_BOOK_UNPAID";
    /** Book events for clients with an unsigned waiver */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ENROLLMENT_BOOK_UNSIGNED"] = 202] = "ENROLLMENT_BOOK_UNSIGNED";
    /** Edit classes at my location */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ENROLLMENT_EDIT"] = 54] = "ENROLLMENT_EDIT";
    /** Allows overriding certain event fields (capacity, price, etc.) when schedule is added */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ENROLLMENT_EDIT_SESSIONS"] = 239] = "ENROLLMENT_EDIT_SESSIONS";
    /** Change/View all classes */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ENROLLMENT_FOREIGN"] = 53] = "ENROLLMENT_FOREIGN";
    /** Lock search bar on enrollment attendance list */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ENROLLMENT_LOCK_SEARCH"] = 153] = "ENROLLMENT_LOCK_SEARCH";
    /** Manage Enterprise Cloud Fees */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ENTERPRISE_CLOUD_FEES"] = 207] = "ENTERPRISE_CLOUD_FEES";
    /** Allows to manage leaderboard in the `FitBuilder` addon */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FITBUILDER_LEADERBOARD"] = 190] = "FITBUILDER_LEADERBOARD";
    /** Allows to subscribe to `FitBuilder` subscription addon */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FITBUILDER_SUBSCRIPTION"] = 189] = "FITBUILDER_SUBSCRIPTION";
    /** Allows to assign workouts from the `FitBuilder` addon to different services */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FITBUILDER_WORKOUT_ASSIGN"] = 188] = "FITBUILDER_WORKOUT_ASSIGN";
    /** Allows to add, edit and remove workouts in the `FitBuilder` addon */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FITBUILDER_WORKOUT_MANAGE"] = 187] = "FITBUILDER_WORKOUT_MANAGE";
    /** Allow Staff members to view/complete forms for clients from any location */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_ALL"] = 177] = "FORM_ALL";
    /** Amend apply to privilege */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_AMEND_ACCESS"] = 198] = "FORM_AMEND_ACCESS";
    /** Allow staff members to make modifications to completed forms on the client profile */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_AMEND_COMPLETED"] = 194] = "FORM_AMEND_COMPLETED";
    /** Allow staff members to make modifications to completed forms on the client profile for all clients */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_AMEND_COMPLETED_ALL"] = 195] = "FORM_AMEND_COMPLETED_ALL";
    /** Allow staff members to make modifications to completed forms on the client profile for clients at staff location */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_AMEND_COMPLETED_LOCATION"] = 196] = "FORM_AMEND_COMPLETED_LOCATION";
    /** Allow staff members to make modifications to completed forms on the client profile for self clients */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_AMEND_COMPLETED_MY_CLIENTS"] = 197] = "FORM_AMEND_COMPLETED_MY_CLIENTS";
    /** Allow staff members to fill in forms for clients */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_COMPLETE"] = 178] = "FORM_COMPLETE";
    /** Allow staff members to add, edit and delete forms */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_MANAGE"] = 160] = "FORM_MANAGE";
    /** Allow Staff members to view/complete forms for clients that belong to them through service offerings */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_MY_CLIENTS"] = 175] = "FORM_MY_CLIENTS";
    /** Allow Staff members to view/complete forms for clients that belong to the location that they are selected to work at */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_MY_LOCATION"] = 176] = "FORM_MY_LOCATION";
    /** Allow staff members to delete forms from the client’s profil */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_RESPONSE_DELETE"] = 199] = "FORM_RESPONSE_DELETE";
    /** Allow staff members to view form responses */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["FORM_VIEW_RESPONSE"] = 161] = "FORM_VIEW_RESPONSE";
    /** Add holidays */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["HOLIDAY"] = 7] = "HOLIDAY";
    /** Allows to import clients from a CSV file */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["IMPORT_CLIENT"] = 215] = "IMPORT_CLIENT";
    /** Set up and modify Autymate integration */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["INTEGRATION_AUTYMATE"] = 163] = "INTEGRATION_AUTYMATE";
    /** Set up and modify Brivo integration */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["INTEGRATION_BRIVO"] = 179] = "INTEGRATION_BRIVO";
    /** Enroll into and manage the WellnessLiving Achieve App. These settings are located under Setup &gt; Achieve Client App */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["INTERFACE_ACHIEVE_APP"] = 87] = "INTERFACE_ACHIEVE_APP";
    /** Modify the look and functionality business’s widgets. These settings are located within Setup &gt; Widget */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["INTERFACE_WIDGET_EDIT"] = 39] = "INTERFACE_WIDGET_EDIT";
    /** View the look and functionality business’s widgets. These settings are located within Setup &gt; Widget */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["INTERFACE_WIDGET_VIEW"] = 110] = "INTERFACE_WIDGET_VIEW";
    /** Permission to Receive or Adjust quantity from the Inventory On Hand Report */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["INVENTORY_UPDATE"] = 157] = "INVENTORY_UPDATE";
    /** Manage my locations except General information */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["LOCATION_EDIT"] = 9] = "LOCATION_EDIT";
    /** Manage tab Location -&gt; General */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["LOCATION_EDIT_GENERAL"] = 126] = "LOCATION_EDIT_GENERAL";
    /** Manage all locations */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["LOCATION_FOREIGN"] = 8] = "LOCATION_FOREIGN";
    /** Manage franchise locations */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["LOCATION_FRANCHISE"] = 109] = "LOCATION_FRANCHISE";
    /** Logs view */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["LOG_VIEW"] = 101] = "LOG_VIEW";
    /** Add client notes and warnings */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["LOGIN_NOTE"] = 11] = "LOGIN_NOTE";
    /** Flag clients */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["LOGIN_NOTE_RESTRICT"] = 12] = "LOGIN_NOTE_RESTRICT";
    /** View service add-ons */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["LOGIN_PRODUCT_VIEW"] = 206] = "LOGIN_PRODUCT_VIEW";
    /** Access to send mails and sms to clients */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MAIL_SEND"] = 75] = "MAIL_SEND";
    /** Manage announcements */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MANAGE_ANNOUNCEMENT"] = 200] = "MANAGE_ANNOUNCEMENT";
    /** Only the staff roles with this permission provided are able to edit/add/delete the business billing information */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MANAGE_BILLING_INFORMATION"] = 134] = "MANAGE_BILLING_INFORMATION";
    /** View, manage, and analyze CAASI-led conversations */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MANAGE_CAASI_CONVERSATION"] = 229] = "MANAGE_CAASI_CONVERSATION";
    /** Manage hardware readers */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MANAGE_READERS"] = 181] = "MANAGE_READERS";
    /** Enable, disable, and edit daily deals */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MARKETING_DD"] = 43] = "MARKETING_DD";
    /** Settings pertaining to all automated marketing to clients */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MARKETING_EMAIL"] = 42] = "MARKETING_EMAIL";
    /** Allows to subscribe to email marketing subscription plans and manage existing subscriptions */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MARKETING_SUBSCRIPTION"] = 237] = "MARKETING_SUBSCRIPTION";
    /** Enabling this permission for a role will enable making and receiving calls in Message Center */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MESSAGES_CALLS"] = 173] = "MESSAGES_CALLS";
    /** Enabling this permission for a role will enable the role to use the ‘Assign to’ field and assign a conversation to a staff mem */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MESSAGES_CONVERSATIONS"] = 174] = "MESSAGES_CONVERSATIONS";
    /** Enabling this permission for a role will grant access to the inbox tab including viewing and sending messages in the Message Center */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MESSAGES_MANAGE"] = 170] = "MESSAGES_MANAGE";
    /** Enabling this permission for a role will grant access to the Settings tab including modifying phone number(s) for the business */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MESSAGES_SETTINGS"] = 171] = "MESSAGES_SETTINGS";
    /** Enabling this permission for a role will grant access and changes to the Subscription Plans tab */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["MESSAGES_SUBSCRIPTION"] = 172] = "MESSAGES_SUBSCRIPTION";
    /** Receive new appointment booking / request notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_APPOINTMENT_BOOK"] = 60] = "NOTIFICATION_APPOINTMENT_BOOK";
    /** Receive Appointment Booked (AI Agent) notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_APPOINTMENT_BOOKED_AI"] = 218] = "NOTIFICATION_APPOINTMENT_BOOKED_AI";
    /** Receive appointment cancellation notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_APPOINTMENT_CANCEL"] = 61] = "NOTIFICATION_APPOINTMENT_CANCEL";
    /** Receive appointment change notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_APPOINTMENT_CHANGE"] = 59] = "NOTIFICATION_APPOINTMENT_CHANGE";
    /** Receive Appointment Requested (AI Agent) notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_APPOINTMENT_REQUEST_AI"] = 220] = "NOTIFICATION_APPOINTMENT_REQUEST_AI";
    /** Receive Billing Related Query notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_BILLING_RELATED_QUERY"] = 224] = "NOTIFICATION_BILLING_RELATED_QUERY";
    /** Receive Cancellation Requested (AI Agent) notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_CANCELLATION_REQUEST_AI"] = 222] = "NOTIFICATION_CANCELLATION_REQUEST_AI";
    /** Receive class attendance list */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_CLASS_ATTENDANCE"] = 56] = "NOTIFICATION_CLASS_ATTENDANCE";
    /** Receive client class booking notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_CLASS_BOOK"] = 57] = "NOTIFICATION_CLASS_BOOK";
    /** Receive Class Booking Requested (AI Agent) notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_CLASS_BOOK_AI"] = 221] = "NOTIFICATION_CLASS_BOOK_AI";
    /** Receive Class Booked (AI Agent) notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_CLASS_BOOKED_AI"] = 219] = "NOTIFICATION_CLASS_BOOKED_AI";
    /** Receive client class cancellation notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_CLASS_CANCEL"] = 58] = "NOTIFICATION_CLASS_CANCEL";
    /** Receive event attendance list */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_EVENT_ATTENDANCE"] = 62] = "NOTIFICATION_EVENT_ATTENDANCE";
    /** Receive client event booking notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_EVENT_BOOK"] = 63] = "NOTIFICATION_EVENT_BOOK";
    /** Receive client event cancellation notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_EVENT_CANCEL"] = 64] = "NOTIFICATION_EVENT_CANCEL";
    /** Permissions apply to all appointment schedules */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_FOREIGN"] = 65] = "NOTIFICATION_FOREIGN";
    /** Receive new lead capture widget notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_LEAD_CAPTURE"] = 159] = "NOTIFICATION_LEAD_CAPTURE";
    /** Receive Lead Capture (AI Agent) notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_LEAD_CAPTURE_AI"] = 217] = "NOTIFICATION_LEAD_CAPTURE_AI";
    /** Staff with this role will receive the membership cancel mails */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_MEMBERSHIP_CANCEL"] = 214] = "NOTIFICATION_MEMBERSHIP_CANCEL";
    /** Receive Membership or Purchase Options Query notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_MEMBERSHIP_QUERY"] = 223] = "NOTIFICATION_MEMBERSHIP_QUERY";
    /** Staff with this role will receive emails about reward prizes */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_PRIZE_REDEMPTION"] = 90] = "NOTIFICATION_PRIZE_REDEMPTION";
    /** Staff with this role will receive the inventory mails */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_PRODUCT_INVENTORY"] = 77] = "NOTIFICATION_PRODUCT_INVENTORY";
    /** Receive new quiz notification form staff */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_QUIZ"] = 162] = "NOTIFICATION_QUIZ";
    /** Staff with this role will receive customer review notifications */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_REVIEW"] = 66] = "NOTIFICATION_REVIEW";
    /** Staff with this role will receive the sale receipts mails */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_SALE_STAFF"] = 136] = "NOTIFICATION_SALE_STAFF";
    /** Receive Staff Callback Request notification */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["NOTIFICATION_STAFF_CALLBACK_REQUEST"] = 216] = "NOTIFICATION_STAFF_CALLBACK_REQUEST";
    /** Override late cancel and no show fees */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["OVERRIDE_FEE"] = 164] = "OVERRIDE_FEE";
    /** Manage partner program */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PARTNER_PROGRAM_MANAGE"] = 94] = "PARTNER_PROGRAM_MANAGE";
    /** Access to Payment Processing */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PAYMENT_PROCESSING"] = 166] = "PAYMENT_PROCESSING";
    /** Permission to perform Physical Inventory Count */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PHYSICAL_INVENTORY_COUNT"] = 156] = "PHYSICAL_INVENTORY_COUNT";
    /** Staff member with this role will be able to send postcards */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["POSTCARD_SEND"] = 88] = "POSTCARD_SEND";
    /** Delete shared power searches */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["POWER_SEARCH_DELETE"] = 106] = "POWER_SEARCH_DELETE";
    /** Edit shared power searches */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["POWER_SEARCH_EDIT"] = 105] = "POWER_SEARCH_EDIT";
    /** Share power searches with other staff members */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["POWER_SEARCH_SHARE"] = 107] = "POWER_SEARCH_SHARE";
    /** Ability to request subscription plan for custom website */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PRESENCE"] = 149] = "PRESENCE";
    /** Edit products but not product name and description */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PRODUCT_DESCRIPTION_EDIT"] = 113] = "PRODUCT_DESCRIPTION_EDIT";
    /** Add, remove, and edit products in the online store */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PRODUCT_MANAGE"] = 34] = "PRODUCT_MANAGE";
    /** Manage all clients */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_ALL"] = 24] = "PROFILE_ALL";
    /** This permission allows users to delete client profiles */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_DELETE"] = 230] = "PROFILE_DELETE";
    /** This permission allows users to view client details throughout the interface */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_DETAIL"] = 67] = "PROFILE_DETAIL";
    /** Manage profile client groups (only create, delete and rename a group) */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_GROUP_MANAGE"] = 69] = "PROFILE_GROUP_MANAGE";
    /** Manage client group members (only members, not a group itself) */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_GROUP_MEMBER_MANAGE"] = 191] = "PROFILE_GROUP_MEMBER_MANAGE";
    /** Merge client profiles */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_MERGE"] = 213] = "PROFILE_MERGE";
    /** Manage clients from my location */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_MY_LOCATION"] = 86] = "PROFILE_MY_LOCATION";
    /** View client’s upcoming and past schedul */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_SCHEDULE"] = 205] = "PROFILE_SCHEDULE";
    /** Manage profile client type */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_TYPE_EDIT"] = 68] = "PROFILE_TYPE_EDIT";
    /** Manage all clients */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROFILE_VIEW"] = 13] = "PROFILE_VIEW";
    /** Manage progress log */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROGRESS_LOG_MANAGE"] = 102] = "PROGRESS_LOG_MANAGE";
    /** Edit progress log in profile */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROGRESS_LOG_PROFILE"] = 104] = "PROGRESS_LOG_PROFILE";
    /** Add, remove, and edit purchase options and packages for services */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROMOTION_MANAGE"] = 25] = "PROMOTION_MANAGE";
    /** Allows to edit only base information about purchase option */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PROMOTION_MANAGE_BASE"] = 127] = "PROMOTION_MANAGE_BASE";
    /** Access to edit client purchases (passes and memberships) */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PURCHASE_EDIT"] = 93] = "PURCHASE_EDIT";
    /** Access to view client purchases (passes and memberships) */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["PURCHASE_VIEW"] = 92] = "PURCHASE_VIEW";
    /** Allow to see alerts */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["RECEIVE_ALERT"] = 193] = "RECEIVE_ALERT";
    /** Access to view reports for all staff */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_ALL"] = 71] = "REPORT_ALL";
    /** Reports attendance */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_ATTENDANCE"] = 27] = "REPORT_ATTENDANCE";
    /** Reports client */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_CLIENT"] = 26] = "REPORT_CLIENT";
    /** Reports with cash closeout information */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_CLOSEOUT"] = 85] = "REPORT_CLOSEOUT";
    /** Export and print button in reports */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_EXPORT_PRINT"] = 186] = "REPORT_EXPORT_PRINT";
    /** Reports with franchise information */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_FRANCHISE"] = 108] = "REPORT_FRANCHISE";
    /** Wellness Programs reports */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_INSURANCE"] = 115] = "REPORT_INSURANCE";
    /** Ability to generate, export and import insurance reimbursement files */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_INSURANCE_FILE"] = 155] = "REPORT_INSURANCE_FILE";
    /** Reports emails */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_MAIL"] = 30] = "REPORT_MAIL";
    /** Reports sales */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_SALE"] = 29] = "REPORT_SALE";
    /** Ability to view purchase report for specific user */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_SALE_USER"] = 125] = "REPORT_SALE_USER";
    /** Reports staff */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REPORT_STAFF"] = 28] = "REPORT_STAFF";
    /** Manage assets */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["RESOURCE"] = 37] = "RESOURCE";
    /** Book assets for clients with negative account balances */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["RESOURCE_BOOK_NEGATIVE"] = 212] = "RESOURCE_BOOK_NEGATIVE";
    /** Unpaid asset booking */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["RESOURCE_BOOK_UNPAID"] = 168] = "RESOURCE_BOOK_UNPAID";
    /** Book assets for clients with an unsigned waiver */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["RESOURCE_BOOK_UNSIGNED"] = 204] = "RESOURCE_BOOK_UNSIGNED";
    /** Mark client reviews as inappropriate and respond to customer comments */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REVIEW_FLAG"] = 18] = "REVIEW_FLAG";
    /** Create contests on the leaderboard */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REWARD_LEADERBOARD"] = 44] = "REWARD_LEADERBOARD";
    /** Rules related to point accumulation */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REWARD_POINT_MANAGE"] = 46] = "REWARD_POINT_MANAGE";
    /** Clear the total accumulated points for all clients */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REWARD_POINT_RESET"] = 45] = "REWARD_POINT_RESET";
    /** Define prizes and the number of points that are required to redeem */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["REWARD_PRIZE"] = 47] = "REWARD_PRIZE";
    /** Enable SABA single sign on and create SABA accounts */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SABA"] = 116] = "SABA";
    /** View canceled classes from the schedule */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_CANCELED_CLASS"] = 139] = "SCHEDULE_CANCELED_CLASS";
    /** View canceled classes from the schedule */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_CANCELED_ENROLLMENT"] = 140] = "SCHEDULE_CANCELED_ENROLLMENT";
    /** Scheduling and editing future sessions of the appointments */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_FUTURE_APPOINTMENT"] = 95] = "SCHEDULE_FUTURE_APPOINTMENT";
    /** Scheduling sessions of the assets */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_FUTURE_ASSETS"] = 128] = "SCHEDULE_FUTURE_ASSETS";
    /** Scheduling and editing future sessions of the classes */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_FUTURE_CLASS"] = 96] = "SCHEDULE_FUTURE_CLASS";
    /** Scheduling and editing future sessions of the events */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_FUTURE_EVENT"] = 99] = "SCHEDULE_FUTURE_EVENT";
    /** Scheduling and editing past sessions of the appointments */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_PAST_APPOINTMENT"] = 97] = "SCHEDULE_PAST_APPOINTMENT";
    /** Scheduling and editing past sessions of the classes */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_PAST_CLASS"] = 98] = "SCHEDULE_PAST_CLASS";
    /** Scheduling and editing past sessions of the events */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_PAST_EVENT"] = 100] = "SCHEDULE_PAST_EVENT";
    /** View a summary of projected and earned service revenue generated from scheduled and completed sessions */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_SUMMARY_REVENUE_SERVICE"] = 234] = "SCHEDULE_SUMMARY_REVENUE_SERVICE";
    /** View a summary of projected pay from upcoming sessions and earned pay from completed sessions, based on the staff’s schedul */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SCHEDULE_SUMMARY_REVENUE_STAFF"] = 235] = "SCHEDULE_SUMMARY_REVENUE_STAFF";
    /** Allows sign service agreement */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SERVICE_AGREEMENT_SIGN"] = 133] = "SERVICE_AGREEMENT_SIGN";
    /** View, modify and delete shop categories */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SHOP_CATEGORY"] = 78] = "SHOP_CATEGORY";
    /** Modify the clock-in and clock-out times for staff members */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_CLOCK"] = 32] = "STAFF_CLOCK";
    /** Add, remove, and edit staff profiles */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_EDIT"] = 14] = "STAFF_EDIT";
    /** Edit own staff profile */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_EDIT_OWN"] = 150] = "STAFF_EDIT_OWN";
    /** Modify pay rates for products and Purchase Options */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_MODIFY_RATES_PRODUCT"] = 184] = "STAFF_MODIFY_RATES_PRODUCT";
    /** Modify pay rates for services */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_MODIFY_RATES_SERVICE"] = 183] = "STAFF_MODIFY_RATES_SERVICE";
    /** Modify the clock-in and clock-out times for your own staff profile */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_MY_CLOCK"] = 192] = "STAFF_MY_CLOCK";
    /** Add, remove, and edit staff pay rates */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_PAY_ALL"] = 20] = "STAFF_PAY_ALL";
    /** Change staff role on the staff edit page */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_ROLE_CHANGE"] = 72] = "STAFF_ROLE_CHANGE";
    /** Edit staff role on the staff role page */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_ROLE_EDIT"] = 124] = "STAFF_ROLE_EDIT";
    /** Create/Edit/Remove staff working hours */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STAFF_WORKING_HOURS"] = 144] = "STAFF_WORKING_HOURS";
    /** Allow staff to override staff commission at the point of sale */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STORE_COMMISSION_OVERRIDE"] = 185] = "STORE_COMMISSION_OVERRIDE";
    /** Temporarily modify the price of products and services at the point of sale */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STORE_PRICE"] = 41] = "STORE_PRICE";
    /** Access to the point of sale store to facilitate the sale of products and services */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STORE_SELL"] = 40] = "STORE_SELL";
    /** Access to view and edit store settings */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["STORE_SETTINGS_EDIT"] = 143] = "STORE_SETTINGS_EDIT";
    /** Add, remove, and edit supplier profiles */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["SUPPLIER_MANAGE"] = 114] = "SUPPLIER_MANAGE";
    /** Access to add tasks */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TASK_ADD"] = 111] = "TASK_ADD";
    /** Access to view all tasks for all members */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TASK_ALL"] = 70] = "TASK_ALL";
    /** Access to edit tasks */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TASK_EDIT"] = 112] = "TASK_EDIT";
    /** Access to transaction details */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TRANSACTION_DETAIL"] = 81] = "TRANSACTION_DETAIL";
    /** Access to edit transaction */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TRANSACTION_EDIT"] = 89] = "TRANSACTION_EDIT";
    /** Access to refund transaction */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TRANSACTION_REFUND"] = 91] = "TRANSACTION_REFUND";
    /** Access to enroll clients in tuition plans via the enrollment wizard */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TUITION_ENROLL"] = 242] = "TUITION_ENROLL";
    /** Add, remove, and edit tuition plans, their settings, and assigned instances */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TUITION_MANAGE"] = 243] = "TUITION_MANAGE";
    /** Cancel a client's tuition plan from the Clients tab, stopping all future installments and optionally revoking remaining session access */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TUITION_PAYMENT_CANCEL"] = 244] = "TUITION_PAYMENT_CANCEL";
    /** Access to view the tuition plan list and plan details */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["TUITION_VIEW"] = 241] = "TUITION_VIEW";
    /** Access to view and change list of video categories */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["VIDEO_CATEGORY"] = 146] = "VIDEO_CATEGORY";
    /** Access to view and change videos in the business video library */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["VIDEO_SETUP"] = 147] = "VIDEO_SETUP";
    /** View the Balance History & Statements tab and generate or email account statements on */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["VIEW_BALANCE_HISTORY_STATEMENTS"] = 240] = "VIEW_BALANCE_HISTORY_STATEMENTS";
    /** Set up and modify FitLIVE integration */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["VIRTUAL_SETUP"] = 158] = "VIRTUAL_SETUP";
    /** Access to edit, delete visit notes */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["VISIT_NOTE_EDIT"] = 74] = "VISIT_NOTE_EDIT";
    /** Access to view visit notes */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["VISIT_NOTE_VIEW"] = 73] = "VISIT_NOTE_VIEW";
    /** Access to WellnessLiving Academy */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["WELLNESSLIVING_ACADEMY"] = 151] = "WELLNESSLIVING_ACADEMY";
    /** Allow access to manage integration with Zapier */
    WlPrivilegePrivilegeSid[WlPrivilegePrivilegeSid["ZAPIER"] = 180] = "ZAPIER";
})(WlPrivilegePrivilegeSid || (exports.WlPrivilegePrivilegeSid = WlPrivilegePrivilegeSid = {}));
/** The possible payment types an appointment can have. */
var RsAppointmentPaySid;
(function (RsAppointmentPaySid) {
    /** A deposit was paid */
    RsAppointmentPaySid[RsAppointmentPaySid["DEPOSIT"] = 2] = "DEPOSIT";
    /** Appointment is free and does not require payment */
    RsAppointmentPaySid[RsAppointmentPaySid["FREE"] = 4] = "FREE";
    /** The full price was paid */
    RsAppointmentPaySid[RsAppointmentPaySid["FULL"] = 3] = "FULL";
    /** Nothing was paid */
    RsAppointmentPaySid[RsAppointmentPaySid["NONE"] = 1] = "NONE";
})(RsAppointmentPaySid || (exports.RsAppointmentPaySid = RsAppointmentPaySid = {}));
/** List sources of the view video. */
var WlVideoWatchWatchSourceSid;
(function (WlVideoWatchWatchSourceSid) {
    /** Video watched from application */
    WlVideoWatchWatchSourceSid[WlVideoWatchWatchSourceSid["APP"] = 1] = "APP";
    /** Video watched from direct URL */
    WlVideoWatchWatchSourceSid[WlVideoWatchWatchSourceSid["DIRECT_URL"] = 2] = "DIRECT_URL";
    /** Video watched from frontend */
    WlVideoWatchWatchSourceSid[WlVideoWatchWatchSourceSid["FRONTEND"] = 3] = "FRONTEND";
    /** Source of watched is undefined */
    WlVideoWatchWatchSourceSid[WlVideoWatchWatchSourceSid["UNDEFINED"] = 4] = "UNDEFINED";
})(WlVideoWatchWatchSourceSid || (exports.WlVideoWatchWatchSourceSid = WlVideoWatchWatchSourceSid = {}));
/** A list of supported social networks. */
var ASocialSid;
(function (ASocialSid) {
    /** Facebook social network */
    ASocialSid[ASocialSid["FACEBOOK"] = 1] = "FACEBOOK";
    /** Google Plus social network */
    ASocialSid[ASocialSid["GOOGLE"] = 2] = "GOOGLE";
    /** Twitter social network */
    ASocialSid[ASocialSid["TWITTER"] = 3] = "TWITTER";
})(ASocialSid || (exports.ASocialSid = ASocialSid = {}));
/** List of ages, which are suitable for visiting this location. */
var RsAgeSid;
(function (RsAgeSid) {
    /** An Adaptive / Inclusive Programs */
    RsAgeSid[RsAgeSid["ADAPTIVE"] = 5] = "ADAPTIVE";
    /** An adult */
    RsAgeSid[RsAgeSid["ADULT"] = 2] = "ADULT";
    /** A kid */
    RsAgeSid[RsAgeSid["KID"] = 1] = "KID";
    /** Natal */
    RsAgeSid[RsAgeSid["NATAL"] = 4] = "NATAL";
    /** Senior */
    RsAgeSid[RsAgeSid["SENIOR"] = 3] = "SENIOR";
})(RsAgeSid || (exports.RsAgeSid = RsAgeSid = {}));
/** Type of facilities available at a location. */
var RsFacilitySid;
(function (RsFacilitySid) {
    /** The location has accessible parking */
    RsFacilitySid[RsFacilitySid["ACCESSIBLE_PARKING"] = 18] = "ACCESSIBLE_PARKING";
    /** The location allows app check-in */
    RsFacilitySid[RsFacilitySid["APP_CHECK_IN"] = 22] = "APP_CHECK_IN";
    /** The location has aquatic wheelchair access */
    RsFacilitySid[RsFacilitySid["AQUATIC_WHEELCHAIR_ACCESS"] = 24] = "AQUATIC_WHEELCHAIR_ACCESS";
    /** This location has Asian owned */
    RsFacilitySid[RsFacilitySid["ASIAN_OWNED"] = 23] = "ASIAN_OWNED";
    /** This location has barre equipment */
    RsFacilitySid[RsFacilitySid["BARRE_EQUIPMENT"] = 25] = "BARRE_EQUIPMENT";
    /** This location has basketball courts */
    RsFacilitySid[RsFacilitySid["BASKETBALL_COURTS"] = 8] = "BASKETBALL_COURTS";
    /** This location has bike racks */
    RsFacilitySid[RsFacilitySid["BIKE_RACKS"] = 26] = "BIKE_RACKS";
    /** This location is black owned */
    RsFacilitySid[RsFacilitySid["BLACK_OWNED"] = 27] = "BLACK_OWNED";
    /** This location has boxing rings or heavy bags */
    RsFacilitySid[RsFacilitySid["BOXING_RINGS_HEAVY_BAGS"] = 28] = "BOXING_RINGS_HEAVY_BAGS";
    /** This location has cardio machines */
    RsFacilitySid[RsFacilitySid["CARDIO_MACHINES"] = 29] = "CARDIO_MACHINES";
    /** This location has change rooms */
    RsFacilitySid[RsFacilitySid["CHANGE_ROOM"] = 1] = "CHANGE_ROOM";
    /** This location has childcare services */
    RsFacilitySid[RsFacilitySid["CHILDCARE"] = 14] = "CHILDCARE";
    /** This location has classrooms */
    RsFacilitySid[RsFacilitySid["CLASSROOMS"] = 30] = "CLASSROOMS";
    /** This location has climbing bouldering wall */
    RsFacilitySid[RsFacilitySid["CLIMBING_BOULDERING_WALL"] = 31] = "CLIMBING_BOULDERING_WALL";
    /** This location has climbing walls */
    RsFacilitySid[RsFacilitySid["CLIMBING_WALLS"] = 32] = "CLIMBING_WALLS";
    /** This location is close to public transit */
    RsFacilitySid[RsFacilitySid["CLOSE_PUBLIC_TRANSIT"] = 33] = "CLOSE_PUBLIC_TRANSIT";
    /** This location has cold plunge */
    RsFacilitySid[RsFacilitySid["COLD_PLUNGE"] = 34] = "COLD_PLUNGE";
    /** This location has couples treatment rooms */
    RsFacilitySid[RsFacilitySid["COUPLES_TREATMENT_ROOMS"] = 35] = "COUPLES_TREATMENT_ROOMS";
    /** This location has cryotherapy */
    RsFacilitySid[RsFacilitySid["CRYOTHERAPY"] = 36] = "CRYOTHERAPY";
    /** This location has diaper changing stations */
    RsFacilitySid[RsFacilitySid["DIAPER_CHANGING_STATIONS"] = 37] = "DIAPER_CHANGING_STATIONS";
    /** This location is disability owned */
    RsFacilitySid[RsFacilitySid["DISABILITY_OWNED"] = 38] = "DISABILITY_OWNED";
    /** This location has eco-friendly practices */
    RsFacilitySid[RsFacilitySid["ECO_FRIENDLY_PRACTICES"] = 39] = "ECO_FRIENDLY_PRACTICES";
    /** This location has elevator ramps */
    RsFacilitySid[RsFacilitySid["ELEVATOR_RAMPS"] = 40] = "ELEVATOR_RAMPS";
    /** This location has equestrian facilities */
    RsFacilitySid[RsFacilitySid["EQUESTRIAN_FACILITIES"] = 41] = "EQUESTRIAN_FACILITIES";
    /** This location has equipment rentals */
    RsFacilitySid[RsFacilitySid["EQUIPMENT_RENTALS"] = 19] = "EQUIPMENT_RENTALS";
    /** This location is ESA friendly */
    RsFacilitySid[RsFacilitySid["ESA_FRIENDLY"] = 42] = "ESA_FRIENDLY";
    /** This location has EV charging stations */
    RsFacilitySid[RsFacilitySid["EV_CHARGING_STATIONS"] = 43] = "EV_CHARGING_STATIONS";
    /** This location is family friendly */
    RsFacilitySid[RsFacilitySid["FAMILY_FRIENDLY"] = 44] = "FAMILY_FRIENDLY";
    /** This location is family owned */
    RsFacilitySid[RsFacilitySid["FAMILY_OWNED"] = 45] = "FAMILY_OWNED";
    /** This location has family restroom */
    RsFacilitySid[RsFacilitySid["FAMILY_RESTROOM"] = 46] = "FAMILY_RESTROOM";
    /** This location has food drink */
    RsFacilitySid[RsFacilitySid["FOOD_DRINK"] = 20] = "FOOD_DRINK";
    /** This location has free weights area */
    RsFacilitySid[RsFacilitySid["FREE_WEIGHTS_AREA"] = 47] = "FREE_WEIGHTS_AREA";
    /** This location has gender neutral restroom */
    RsFacilitySid[RsFacilitySid["GENDER_NEUTRAL_RESTROOM"] = 48] = "GENDER_NEUTRAL_RESTROOM";
    /** This location has group fitness studio */
    RsFacilitySid[RsFacilitySid["GROUP_FITNESS_STUDIO"] = 49] = "GROUP_FITNESS_STUDIO";
    /** This location has hair styling stations */
    RsFacilitySid[RsFacilitySid["HAIR_STYLING_STATIONS"] = 50] = "HAIR_STYLING_STATIONS";
    /** This location has hot tub */
    RsFacilitySid[RsFacilitySid["HOT_TUB"] = 51] = "HOT_TUB";
    /** This location has hydrotherapy */
    RsFacilitySid[RsFacilitySid["HYDROTHERAPY"] = 52] = "HYDROTHERAPY";
    /** This location has ice skating rinks */
    RsFacilitySid[RsFacilitySid["ICE_SKATING_RINKS"] = 53] = "ICE_SKATING_RINKS";
    /** This location is indigenous owned */
    RsFacilitySid[RsFacilitySid["INDIGENOUS_OWNED"] = 54] = "INDIGENOUS_OWNED";
    /** This location has indoor turf field */
    RsFacilitySid[RsFacilitySid["INDOOR_TURF_FIELD"] = 55] = "INDOOR_TURF_FIELD";
    /** This location has a juice bar */
    RsFacilitySid[RsFacilitySid["JUICE_BAR"] = 15] = "JUICE_BAR";
    /** This location has lactation room */
    RsFacilitySid[RsFacilitySid["LACTATION_ROOM"] = 56] = "LACTATION_ROOM";
    /** This location has laser treatments */
    RsFacilitySid[RsFacilitySid["LASER_TREATMENTS"] = 58] = "LASER_TREATMENTS";
    /** This location is Latinx owned */
    RsFacilitySid[RsFacilitySid["LATINX_OWNED"] = 57] = "LATINX_OWNED";
    /** This location is LEED certified building */
    RsFacilitySid[RsFacilitySid["LEED_CERTIFIED_BUILDING"] = 59] = "LEED_CERTIFIED_BUILDING";
    /** This location is LGBTQ friendly */
    RsFacilitySid[RsFacilitySid["LGBTQ_FRIENDLY"] = 60] = "LGBTQ_FRIENDLY";
    /** This location is LGBTQ owned */
    RsFacilitySid[RsFacilitySid["LGBTQ_OWNED"] = 61] = "LGBTQ_OWNED";
    /** This location has lockers available for clients */
    RsFacilitySid[RsFacilitySid["LOCKERS"] = 2] = "LOCKERS";
    /** This location has manicure/pedicure stations */
    RsFacilitySid[RsFacilitySid["MANICURE_PEDICURE_STATIONS"] = 62] = "MANICURE_PEDICURE_STATIONS";
    /** This location has massage tables/chairs */
    RsFacilitySid[RsFacilitySid["MASSAGE_TABLES_CHAIRS"] = 63] = "MASSAGE_TABLES_CHAIRS";
    /** This location has meditation/quiet room */
    RsFacilitySid[RsFacilitySid["MEDITATION_QUIET_ROOM"] = 64] = "MEDITATION_QUIET_ROOM";
    /** This location has music practice rooms */
    RsFacilitySid[RsFacilitySid["MUSIC_PRACTICE_ROOMS"] = 65] = "MUSIC_PRACTICE_ROOMS";
    /** This location is neurodiverse friendly */
    RsFacilitySid[RsFacilitySid["NEURODIVERSE_FRIENDLY"] = 66] = "NEURODIVERSE_FRIENDLY";
    /** This location has ninja/parkour structures */
    RsFacilitySid[RsFacilitySid["NINJA_PARKOUR_STRUCTURES"] = 67] = "NINJA_PARKOUR_STRUCTURES";
    /** This location has site parking for clients */
    RsFacilitySid[RsFacilitySid["ON_SITE_PARKING"] = 16] = "ON_SITE_PARKING";
    /** This location has outdoor sports field */
    RsFacilitySid[RsFacilitySid["OUTDOOR_SPORTS_FIELD"] = 68] = "OUTDOOR_SPORTS_FIELD";
    /** This location has outdoor training space */
    RsFacilitySid[RsFacilitySid["OUTDOOR_TRAINING_SPACE"] = 69] = "OUTDOOR_TRAINING_SPACE";
    /** This location has parking nearby for clients */
    RsFacilitySid[RsFacilitySid["PARKING_NEARBY"] = 17] = "PARKING_NEARBY";
    /** This location is pet friendly */
    RsFacilitySid[RsFacilitySid["PET_FRIENDLY"] = 70] = "PET_FRIENDLY";
    /** This location has pickleball courts */
    RsFacilitySid[RsFacilitySid["PICKLEBALL_COURTS"] = 72] = "PICKLEBALL_COURTS";
    /** This location has pilates reformers */
    RsFacilitySid[RsFacilitySid["PILATES_REFORMERS"] = 71] = "PILATES_REFORMERS";
    /** This location has pole/aerial equipment */
    RsFacilitySid[RsFacilitySid["POLE_AERIAL_EQUIPMENT"] = 73] = "POLE_AERIAL_EQUIPMENT";
    /** This location has pool lift */
    RsFacilitySid[RsFacilitySid["POOL_LIFT"] = 74] = "POOL_LIFT";
    /** This location has private treatment rooms */
    RsFacilitySid[RsFacilitySid["PRIVATE_TREATMENT_ROOMS"] = 75] = "PRIVATE_TREATMENT_ROOMS";
    /** This location has a pro-shop */
    RsFacilitySid[RsFacilitySid["PRO_SHOP"] = 12] = "PRO_SHOP";
    /** This location has racquetball courts */
    RsFacilitySid[RsFacilitySid["RACQUETBALL_COURTS"] = 7] = "RACQUETBALL_COURTS";
    /** This location has rehab equipment */
    RsFacilitySid[RsFacilitySid["REHAB_EQUIPMENT"] = 76] = "REHAB_EQUIPMENT";
    /** This location has running track */
    RsFacilitySid[RsFacilitySid["RUNNING_TRACK"] = 77] = "RUNNING_TRACK";
    /** This location is safe space certified */
    RsFacilitySid[RsFacilitySid["SAFE_SPACE_CERTIFIED"] = 78] = "SAFE_SPACE_CERTIFIED";
    /** This location has saunas */
    RsFacilitySid[RsFacilitySid["SAUNA"] = 10] = "SAUNA";
    /** This location is senior friendly */
    RsFacilitySid[RsFacilitySid["SENIOR_FRIENDLY"] = 79] = "SENIOR_FRIENDLY";
    /** This location has showers */
    RsFacilitySid[RsFacilitySid["SHOWERS"] = 4] = "SHOWERS";
    /** This location has smart fitness equipment */
    RsFacilitySid[RsFacilitySid["SMART_FITNESS_EQUIPMENT"] = 80] = "SMART_FITNESS_EQUIPMENT";
    /** This location has a spa */
    RsFacilitySid[RsFacilitySid["SPA"] = 9] = "SPA";
    /** This location has spin bikes */
    RsFacilitySid[RsFacilitySid["SPIN_BIKES"] = 81] = "SPIN_BIKES";
    /** This location has squash courts */
    RsFacilitySid[RsFacilitySid["SQUASH_COURTS"] = 6] = "SQUASH_COURTS";
    /** This location has steam room */
    RsFacilitySid[RsFacilitySid["STEAM_ROOM"] = 82] = "STEAM_ROOM";
    /** This location has strength machines */
    RsFacilitySid[RsFacilitySid["STRENGTH_MACHINES"] = 83] = "STRENGTH_MACHINES";
    /** This location has a swimming pool */
    RsFacilitySid[RsFacilitySid["SWIMMING_POOL"] = 11] = "SWIMMING_POOL";
    /** This location has tanning beds */
    RsFacilitySid[RsFacilitySid["TANNING_BEDS"] = 84] = "TANNING_BEDS";
    /** This location has tattoo equipment */
    RsFacilitySid[RsFacilitySid["TATTOO_EQUIPMENT"] = 85] = "TATTOO_EQUIPMENT";
    /** This location provides towel service */
    RsFacilitySid[RsFacilitySid["TOWEL_SERVICE"] = 5] = "TOWEL_SERVICE";
    /** This location is trauma informed */
    RsFacilitySid[RsFacilitySid["TRAUMA_INFORMED"] = 86] = "TRAUMA_INFORMED";
    /** This location has turf/functional training */
    RsFacilitySid[RsFacilitySid["TURF_FUNCTIONAL_TRAINING"] = 87] = "TURF_FUNCTIONAL_TRAINING";
    /** This location is veteran owned */
    RsFacilitySid[RsFacilitySid["VETERAN_OWNED"] = 89] = "VETERAN_OWNED";
    /** This location offers virtual/hybrid classes */
    RsFacilitySid[RsFacilitySid["VIRTUAL_HYBRID_CLASSES"] = 88] = "VIRTUAL_HYBRID_CLASSES";
    /** This location has washrooms for clients */
    RsFacilitySid[RsFacilitySid["WASHROOMS"] = 3] = "WASHROOMS";
    /** This location has wheelchair accessible entrance */
    RsFacilitySid[RsFacilitySid["WHEELCHAIR_ACCESSIBLE_ENTRANCE"] = 90] = "WHEELCHAIR_ACCESSIBLE_ENTRANCE";
    /** This location has wheelchair accessible restroom */
    RsFacilitySid[RsFacilitySid["WHEELCHAIR_ACCESSIBLE_RESTROOM"] = 91] = "WHEELCHAIR_ACCESSIBLE_RESTROOM";
    /** This location has a woman's only area */
    RsFacilitySid[RsFacilitySid["WOMAN_ONLY_AREA"] = 13] = "WOMAN_ONLY_AREA";
    /** This location is women owned */
    RsFacilitySid[RsFacilitySid["WOMEN_OWNED"] = 92] = "WOMEN_OWNED";
    /** This location has zero depth entry pool */
    RsFacilitySid[RsFacilitySid["ZERO_DEPTH_ENTRY_POOL"] = 93] = "ZERO_DEPTH_ENTRY_POOL";
})(RsFacilitySid || (exports.RsFacilitySid = RsFacilitySid = {}));
/** Types of the shapes. */
var WlResourceLayoutShapeLayoutShapeSid;
(function (WlResourceLayoutShapeLayoutShapeSid) {
    /** Circles */
    WlResourceLayoutShapeLayoutShapeSid[WlResourceLayoutShapeLayoutShapeSid["CIRCLE"] = 2] = "CIRCLE";
    /** Pies */
    WlResourceLayoutShapeLayoutShapeSid[WlResourceLayoutShapeLayoutShapeSid["PIE"] = 3] = "PIE";
    /** Rectangles and squares */
    WlResourceLayoutShapeLayoutShapeSid[WlResourceLayoutShapeLayoutShapeSid["RECTANGLE"] = 1] = "RECTANGLE";
})(WlResourceLayoutShapeLayoutShapeSid || (exports.WlResourceLayoutShapeLayoutShapeSid = WlResourceLayoutShapeLayoutShapeSid = {}));
/** Predefined icons for assets. */
var WlResourceImageImageIconSid;
(function (WlResourceImageImageIconSid) {
    /** Training bench */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["BENCH"] = 1] = "BENCH";
    /** Exercise bike */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["BIKE_1"] = 2] = "BIKE_1";
    /** Exercise bike */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["BIKE_2"] = 3] = "BIKE_2";
    /** Exercise bike */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["BIKE_3"] = 4] = "BIKE_3";
    /** Exercise bike */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["BIKE_4"] = 5] = "BIKE_4";
    /** Exercise bike */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["BIKE_5"] = 6] = "BIKE_5";
    /** Exercise bike */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["BIKE_6"] = 7] = "BIKE_6";
    /** Boot */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["BOOT"] = 8] = "BOOT";
    /** Door */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["DOOR"] = 9] = "DOOR";
    /** Fan */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["FAN_1"] = 10] = "FAN_1";
    /** Fan */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["FAN_2"] = 11] = "FAN_2";
    /** Man */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["MAN"] = 12] = "MAN";
    /** Mat */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["MAT"] = 13] = "MAT";
    /** Mirror */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["MIRROR"] = 14] = "MIRROR";
    /** Orbitrack */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["ORBITRACK_1"] = 15] = "ORBITRACK_1";
    /** Orbitrack */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["ORBITRACK_2"] = 16] = "ORBITRACK_2";
    /** Orbitrack */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["ORBITRACK_3"] = 17] = "ORBITRACK_3";
    /** Orbitrack */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["ORBITRACK_4"] = 18] = "ORBITRACK_4";
    /** Orbitrack */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["ORBITRACK_5"] = 19] = "ORBITRACK_5";
    /** Orbitrack */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["ORBITRACK_6"] = 20] = "ORBITRACK_6";
    /** Boxing punch */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["PUNCH_1"] = 21] = "PUNCH_1";
    /** Boxing punch */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["PUNCH_2"] = 22] = "PUNCH_2";
    /** Rectangle */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["RECTANGLE"] = 23] = "RECTANGLE";
    /** Loudspeaker */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["SPEAKER"] = 24] = "SPEAKER";
    /** Treadmill */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["TREADMILL_1"] = 25] = "TREADMILL_1";
    /** Treadmill */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["TREADMILL_2"] = 26] = "TREADMILL_2";
    /** TV */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["TV"] = 27] = "TV";
    /** Twines */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["TWINE"] = 28] = "TWINE";
    /** Weight */
    WlResourceImageImageIconSid[WlResourceImageImageIconSid["WEIGHT"] = 29] = "WEIGHT";
})(WlResourceImageImageIconSid || (exports.WlResourceImageImageIconSid = WlResourceImageImageIconSid = {}));
/** Coupon date start rule. */
var WlCouponEditActivationSid;
(function (WlCouponEditActivationSid) {
    /** Number of a day of the month or of the week */
    WlCouponEditActivationSid[WlCouponEditActivationSid["DAY"] = 7] = "DAY";
    /** Custom date */
    WlCouponEditActivationSid[WlCouponEditActivationSid["FIXED"] = 3] = "FIXED";
    /** Date of the sale */
    WlCouponEditActivationSid[WlCouponEditActivationSid["SALE"] = 1] = "SALE";
})(WlCouponEditActivationSid || (exports.WlCouponEditActivationSid = WlCouponEditActivationSid = {}));
/** Class to process string identifiers for duration types */
var WlCouponEditDurationTypeSid;
(function (WlCouponEditDurationTypeSid) {
    /** Specific date. Example, 2013-12-24 */
    WlCouponEditDurationTypeSid[WlCouponEditDurationTypeSid["DATE"] = 2] = "DATE";
    /** No ending date */
    WlCouponEditDurationTypeSid[WlCouponEditDurationTypeSid["ETERNAL"] = 3] = "ETERNAL";
    /** Examples: 12 days, 2 months, 2 hours etc */
    WlCouponEditDurationTypeSid[WlCouponEditDurationTypeSid["PERIOD"] = 1] = "PERIOD";
})(WlCouponEditDurationTypeSid || (exports.WlCouponEditDurationTypeSid = WlCouponEditDurationTypeSid = {}));
/** Types of taxes. */
var RsTaxSid;
(function (RsTaxSid) {
    /** Tax is accounted based on percents */
    RsTaxSid[RsTaxSid["PERCENT"] = 2] = "PERCENT";
})(RsTaxSid || (exports.RsTaxSid = RsTaxSid = {}));
/** A list of Purchase Option view types. */
var WlCatalogPurchaseOptionViewSid;
(function (WlCatalogPurchaseOptionViewSid) {
    /** A single appointment reservation */
    WlCatalogPurchaseOptionViewSid[WlCatalogPurchaseOptionViewSid["APPOINTMENT"] = 1] = "APPOINTMENT";
    /** A single class reservation */
    WlCatalogPurchaseOptionViewSid[WlCatalogPurchaseOptionViewSid["CLASS_PERIOD"] = 2] = "CLASS_PERIOD";
    /** A gift card */
    WlCatalogPurchaseOptionViewSid[WlCatalogPurchaseOptionViewSid["COUPON"] = 3] = "COUPON";
    /** Enrollments. Classes where flag event is `true` */
    WlCatalogPurchaseOptionViewSid[WlCatalogPurchaseOptionViewSid["ENROLLMENT"] = 4] = "ENROLLMENT";
    /** Promotions with programs: */
    WlCatalogPurchaseOptionViewSid[WlCatalogPurchaseOptionViewSid["MEMBERSHIP"] = 8] = "MEMBERSHIP";
    /** Promotions with program {@link RsProgramSid} */
    WlCatalogPurchaseOptionViewSid[WlCatalogPurchaseOptionViewSid["PACKAGE"] = 5] = "PACKAGE";
    /** Products (such as water, t-shirts, etc.) */
    WlCatalogPurchaseOptionViewSid[WlCatalogPurchaseOptionViewSid["PRODUCT"] = 6] = "PRODUCT";
    /** Session passes */
    WlCatalogPurchaseOptionViewSid[WlCatalogPurchaseOptionViewSid["PROMOTION"] = 7] = "PROMOTION";
    /** Products available for quick buy */
    WlCatalogPurchaseOptionViewSid[WlCatalogPurchaseOptionViewSid["QUICK_BUY"] = 9] = "QUICK_BUY";
})(WlCatalogPurchaseOptionViewSid || (exports.WlCatalogPurchaseOptionViewSid = WlCatalogPurchaseOptionViewSid = {}));
/** List of Setup -&gt; Store configuration -&gt; Categories and Layout sort options. */
var WlShopCategoryShopCategorySortSid;
(function (WlShopCategoryShopCategorySortSid) {
    /** Custom sort */
    WlShopCategoryShopCategorySortSid[WlShopCategoryShopCategorySortSid["CUSTOM"] = 2] = "CUSTOM";
    /** Sort by date */
    WlShopCategoryShopCategorySortSid[WlShopCategoryShopCategorySortSid["DATE"] = 3] = "DATE";
    /** Sort by price */
    WlShopCategoryShopCategorySortSid[WlShopCategoryShopCategorySortSid["PRICE"] = 4] = "PRICE";
    /** Sort by name/title */
    WlShopCategoryShopCategorySortSid[WlShopCategoryShopCategorySortSid["NAME"] = 1] = "NAME";
})(WlShopCategoryShopCategorySortSid || (exports.WlShopCategoryShopCategorySortSid = WlShopCategoryShopCategorySortSid = {}));
/** Attendance Restriction cycle type. */
var WlPromotionEditLimitCycleSid;
(function (WlPromotionEditLimitCycleSid) {
    /** Attendance Restriction is applied at the start of the calendar cycle */
    WlPromotionEditLimitCycleSid[WlPromotionEditLimitCycleSid["CALENDAR"] = 1] = "CALENDAR";
    /** Attendance Restriction is applied at the start of the payment cycle */
    WlPromotionEditLimitCycleSid[WlPromotionEditLimitCycleSid["PAYMENT"] = 2] = "PAYMENT";
})(WlPromotionEditLimitCycleSid || (exports.WlPromotionEditLimitCycleSid = WlPromotionEditLimitCycleSid = {}));
/** Program type categories. */
var RsProgramCategorySid;
(function (RsProgramCategorySid) {
    /** Purchase options to fill user's account: */
    RsProgramCategorySid[RsProgramCategorySid["ACCOUNT"] = 7] = "ACCOUNT";
    /** Purchase options to pay for classes, events and enrollments: */
    RsProgramCategorySid[RsProgramCategorySid["CLASSES"] = 1] = "CLASSES";
    /** Special "Wellness Program" purchase option */
    RsProgramCategorySid[RsProgramCategorySid["INSURANCE"] = 8] = "INSURANCE";
    /** Packages and daily deals */
    RsProgramCategorySid[RsProgramCategorySid["OTHER"] = 5] = "OTHER";
    /** Resource category */
    RsProgramCategorySid[RsProgramCategorySid["RESOURCE"] = 6] = "RESOURCE";
    /** Purchase options to pay for appointments: */
    RsProgramCategorySid[RsProgramCategorySid["SERVICE"] = 3] = "SERVICE";
    /** Purchase options to pay for videos:<ui> */
    RsProgramCategorySid[RsProgramCategorySid["VIDEO"] = 9] = "VIDEO";
    /** Purchase options to pay for gym visits: */
    RsProgramCategorySid[RsProgramCategorySid["VISIT"] = 2] = "VISIT";
})(RsProgramCategorySid || (exports.RsProgramCategorySid = RsProgramCategorySid = {}));
/** List of sources where quiz response can be generated. */
var WlQuizResponseSourceSid;
(function (WlQuizResponseSourceSid) {
    /** Quiz response received during booking process */
    WlQuizResponseSourceSid[WlQuizResponseSourceSid["BOOKING"] = 2] = "BOOKING";
    /** Quiz response was imported */
    WlQuizResponseSourceSid[WlQuizResponseSourceSid["IMPORT"] = 6] = "IMPORT";
    /** Quiz response received by kiosk mode link */
    WlQuizResponseSourceSid[WlQuizResponseSourceSid["KIOSK"] = 7] = "KIOSK";
    /** Quiz response received by direct link */
    WlQuizResponseSourceSid[WlQuizResponseSourceSid["LINK"] = 1] = "LINK";
    /** Quiz response received by direct link */
    WlQuizResponseSourceSid[WlQuizResponseSourceSid["MANUAL"] = 5] = "MANUAL";
    /** Quiz response received during purchase process */
    WlQuizResponseSourceSid[WlQuizResponseSourceSid["PURCHASE"] = 4] = "PURCHASE";
    /** Quiz response received during registration process */
    WlQuizResponseSourceSid[WlQuizResponseSourceSid["REGISTRATION"] = 3] = "REGISTRATION";
})(WlQuizResponseSourceSid || (exports.WlQuizResponseSourceSid = WlQuizResponseSourceSid = {}));
/** List of quick purchase item types. */
var WlCatalogQuickPurchaseTypeSid;
(function (WlCatalogQuickPurchaseTypeSid) {
    /** Classes */
    WlCatalogQuickPurchaseTypeSid[WlCatalogQuickPurchaseTypeSid["CLASSES"] = 224] = "CLASSES";
    /** Resource */
    WlCatalogQuickPurchaseTypeSid[WlCatalogQuickPurchaseTypeSid["RESOURCE"] = 681] = "RESOURCE";
    /** Service */
    WlCatalogQuickPurchaseTypeSid[WlCatalogQuickPurchaseTypeSid["SERVICE"] = 690] = "SERVICE";
})(WlCatalogQuickPurchaseTypeSid || (exports.WlCatalogQuickPurchaseTypeSid = WlCatalogQuickPurchaseTypeSid = {}));
/** List of default categories of the rewards. */
var RsRewardActionCategorySid;
(function (RsRewardActionCategorySid) {
    /** Booking and visiting rewards */
    RsRewardActionCategorySid[RsRewardActionCategorySid["ATTENDANCE"] = 1] = "ATTENDANCE";
    /** Rewards for spending money */
    RsRewardActionCategorySid[RsRewardActionCategorySid["PURCHASE"] = 2] = "PURCHASE";
    /** Rewards for referrals */
    RsRewardActionCategorySid[RsRewardActionCategorySid["REFER"] = 7] = "REFER";
    /** Rewards for reviewing a business */
    RsRewardActionCategorySid[RsRewardActionCategorySid["REVIEW"] = 3] = "REVIEW";
    /** Social networks rewards */
    RsRewardActionCategorySid[RsRewardActionCategorySid["SOCIAL"] = 4] = "SOCIAL";
    /** Rewards for significant user events */
    RsRewardActionCategorySid[RsRewardActionCategorySid["USER"] = 5] = "USER";
})(RsRewardActionCategorySid || (exports.RsRewardActionCategorySid = RsRewardActionCategorySid = {}));
/** Types of reward actions. */
var RsRewardScoreSid;
(function (RsRewardScoreSid) {
    /** Customer Birthday earns X points */
    RsRewardScoreSid[RsRewardScoreSid["BIRTHDAY"] = 16] = "BIRTHDAY";
    /** Book a class online */
    RsRewardScoreSid[RsRewardScoreSid["BOOK"] = 14] = "BOOK";
    /** Book a class and share on Facebook */
    RsRewardScoreSid[RsRewardScoreSid["BOOK_FACEBOOK"] = 2] = "BOOK_FACEBOOK";
    /** Book a class and share on Twitter */
    RsRewardScoreSid[RsRewardScoreSid["BOOK_TWITTER"] = 3] = "BOOK_TWITTER";
    /** Custom action */
    RsRewardScoreSid[RsRewardScoreSid["CUSTOM"] = 26] = "CUSTOM";
    /** Connect profile to Facebook */
    RsRewardScoreSid[RsRewardScoreSid["LOGIN_FACEBOOK"] = 7] = "LOGIN_FACEBOOK";
    /** Each Dollar spent earns customers X points */
    RsRewardScoreSid[RsRewardScoreSid["PAY"] = 15] = "PAY";
    /** The reward for the purchase of some product */
    RsRewardScoreSid[RsRewardScoreSid["PURCHASE_PRODUCT"] = 28] = "PURCHASE_PRODUCT";
    /** The reward for the purchase of some promotion */
    RsRewardScoreSid[RsRewardScoreSid["PURCHASE_PROMOTION"] = 27] = "PURCHASE_PROMOTION";
    /** Share to facebook purchased item */
    RsRewardScoreSid[RsRewardScoreSid["PURCHASE_SHARE_FACEBOOK"] = 22] = "PURCHASE_SHARE_FACEBOOK";
    /** Share to twitter purchased item */
    RsRewardScoreSid[RsRewardScoreSid["PURCHASE_SHARE_TWITTER"] = 23] = "PURCHASE_SHARE_TWITTER";
    /** Referral purchase */
    RsRewardScoreSid[RsRewardScoreSid["REFER_PURCHASE"] = 30] = "REFER_PURCHASE";
    /** Referral registration */
    RsRewardScoreSid[RsRewardScoreSid["REFER_REGISTER"] = 31] = "REFER_REGISTER";
    /** User registration */
    RsRewardScoreSid[RsRewardScoreSid["REGISTRATION"] = 20] = "REGISTRATION";
    /** Record to reset all-time earned user points. This points will be always negative */
    RsRewardScoreSid[RsRewardScoreSid["RESET"] = 25] = "RESET";
    /** Record to reset current available user points. This points will be always negative */
    RsRewardScoreSid[RsRewardScoreSid["RESET_AVAILABLE"] = 32] = "RESET_AVAILABLE";
    /** Write a review on microsite */
    RsRewardScoreSid[RsRewardScoreSid["REVIEW"] = 11] = "REVIEW";
    /** Write a review on microsite and share on Facebook */
    RsRewardScoreSid[RsRewardScoreSid["REVIEW_FACEBOOK"] = 9] = "REVIEW_FACEBOOK";
    /** Write a review on microsite and share on Twitter */
    RsRewardScoreSid[RsRewardScoreSid["REVIEW_TWITTER"] = 10] = "REVIEW_TWITTER";
    /** Visit classes on the same location */
    RsRewardScoreSid[RsRewardScoreSid["VISIT"] = 12] = "VISIT";
    /** Attending a specific appointment earns customers X points */
    RsRewardScoreSid[RsRewardScoreSid["VISIT_APPOINTMENT"] = 29] = "VISIT_APPOINTMENT";
    /** Attending a specific class earns customers X points */
    RsRewardScoreSid[RsRewardScoreSid["VISIT_CLASS"] = 18] = "VISIT_CLASS";
    /** Attending a specific Workshop/Enrollment/Event earns customers X points */
    RsRewardScoreSid[RsRewardScoreSid["VISIT_ENROLLMENT"] = 19] = "VISIT_ENROLLMENT";
})(RsRewardScoreSid || (exports.RsRewardScoreSid = RsRewardScoreSid = {}));
/** List of statuses of an Autymate enrollment notification. */
var WlIntegrationAutymateAutymateStatusSid;
(function (WlIntegrationAutymateAutymateStatusSid) {
    /** Autymation enrollment is active */
    WlIntegrationAutymateAutymateStatusSid[WlIntegrationAutymateAutymateStatusSid["ACTIVE"] = 1] = "ACTIVE";
    /** Autymation enrollment is no longer active */
    WlIntegrationAutymateAutymateStatusSid[WlIntegrationAutymateAutymateStatusSid["INACTIVE"] = 2] = "INACTIVE";
})(WlIntegrationAutymateAutymateStatusSid || (exports.WlIntegrationAutymateAutymateStatusSid = WlIntegrationAutymateAutymateStatusSid = {}));
/** List of modes used to access Autymate. */
var WlIntegrationAutymateAutymateAccessModeSid;
(function (WlIntegrationAutymateAutymateAccessModeSid) {
    /** Access Autymate to create an initial enrollment */
    WlIntegrationAutymateAutymateAccessModeSid[WlIntegrationAutymateAutymateAccessModeSid["ENROLL"] = 1] = "ENROLL";
    /** Access Autymate to view the dashboard */
    WlIntegrationAutymateAutymateAccessModeSid[WlIntegrationAutymateAutymateAccessModeSid["VIEW"] = 2] = "VIEW";
})(WlIntegrationAutymateAutymateAccessModeSid || (exports.WlIntegrationAutymateAutymateAccessModeSid = WlIntegrationAutymateAutymateAccessModeSid = {}));
/** Lists statuses of reports from point of view of its generation. */
var WlReportGeneratorReportGeneratorStatusSid;
(function (WlReportGeneratorReportGeneratorStatusSid) {
    /** Report is in an inconsistent state */
    WlReportGeneratorReportGeneratorStatusSid[WlReportGeneratorReportGeneratorStatusSid["ABORTED"] = 6] = "ABORTED";
    /** Current operation is being aborted now */
    WlReportGeneratorReportGeneratorStatusSid[WlReportGeneratorReportGeneratorStatusSid["ABORTING"] = 5] = "ABORTING";
    /** This report is being deleted now */
    WlReportGeneratorReportGeneratorStatusSid[WlReportGeneratorReportGeneratorStatusSid["DELETING"] = 4] = "DELETING";
    /** This report is being generated now */
    WlReportGeneratorReportGeneratorStatusSid[WlReportGeneratorReportGeneratorStatusSid["GENERATING"] = 2] = "GENERATING";
    /** Generation of this report is queued */
    WlReportGeneratorReportGeneratorStatusSid[WlReportGeneratorReportGeneratorStatusSid["QUEUED"] = 1] = "QUEUED";
    /** Generation of this report is now completed */
    WlReportGeneratorReportGeneratorStatusSid[WlReportGeneratorReportGeneratorStatusSid["READY"] = 3] = "READY";
})(WlReportGeneratorReportGeneratorStatusSid || (exports.WlReportGeneratorReportGeneratorStatusSid = WlReportGeneratorReportGeneratorStatusSid = {}));
/** Types of the location. */
var WlBusinessFranchiseLocationBusinessFranchiseLocationSid;
(function (WlBusinessFranchiseLocationBusinessFranchiseLocationSid) {
    /** All locations */
    WlBusinessFranchiseLocationBusinessFranchiseLocationSid[WlBusinessFranchiseLocationBusinessFranchiseLocationSid["ALL"] = 1] = "ALL";
    /** Locations without the region */
    WlBusinessFranchiseLocationBusinessFranchiseLocationSid[WlBusinessFranchiseLocationBusinessFranchiseLocationSid["REGION_NO"] = 2] = "REGION_NO";
    /** Location with the region */
    WlBusinessFranchiseLocationBusinessFranchiseLocationSid[WlBusinessFranchiseLocationBusinessFranchiseLocationSid["REGION_YES"] = 3] = "REGION_YES";
})(WlBusinessFranchiseLocationBusinessFranchiseLocationSid || (exports.WlBusinessFranchiseLocationBusinessFranchiseLocationSid = WlBusinessFranchiseLocationBusinessFranchiseLocationSid = {}));
/** List of possible types of Gift Cards. */
var WlCouponTypeSid;
(function (WlCouponTypeSid) {
    /** Amount Gift Card */
    WlCouponTypeSid[WlCouponTypeSid["AMOUNT"] = 2] = "AMOUNT";
    /** Product Gift Card */
    WlCouponTypeSid[WlCouponTypeSid["COMPONENT"] = 1] = "COMPONENT";
    /** Quick Gift Card */
    WlCouponTypeSid[WlCouponTypeSid["QUICK"] = 3] = "QUICK";
})(WlCouponTypeSid || (exports.WlCouponTypeSid = WlCouponTypeSid = {}));
/** Different user flows that can be tracked. */
var WlUserTrackingFlowSid;
(function (WlUserTrackingFlowSid) {
    /** Appointment booking flow */
    WlUserTrackingFlowSid[WlUserTrackingFlowSid["BOOK_APPOINTMENT"] = 1] = "BOOK_APPOINTMENT";
    /** Class booking flow */
    WlUserTrackingFlowSid[WlUserTrackingFlowSid["BOOK_CLASS"] = 2] = "BOOK_CLASS";
    /** Event booking flow */
    WlUserTrackingFlowSid[WlUserTrackingFlowSid["BOOK_EVENT"] = 3] = "BOOK_EVENT";
})(WlUserTrackingFlowSid || (exports.WlUserTrackingFlowSid = WlUserTrackingFlowSid = {}));
/** List of possible order for gets review. */
var WlReviewReviewListReviewOrderSid;
(function (WlReviewReviewListReviewOrderSid) {
    /** Ascending sort review by date */
    WlReviewReviewListReviewOrderSid[WlReviewReviewListReviewOrderSid["LATEST"] = 1] = "LATEST";
    /** Ascending sort review by date */
    WlReviewReviewListReviewOrderSid[WlReviewReviewListReviewOrderSid["NEGATIVE"] = 3] = "NEGATIVE";
    /** Descending sort review by date */
    WlReviewReviewListReviewOrderSid[WlReviewReviewListReviewOrderSid["OLDEST"] = 4] = "OLDEST";
    /** Descending sort review by date */
    WlReviewReviewListReviewOrderSid[WlReviewReviewListReviewOrderSid["POSITIVE"] = 2] = "POSITIVE";
})(WlReviewReviewListReviewOrderSid || (exports.WlReviewReviewListReviewOrderSid = WlReviewReviewListReviewOrderSid = {}));
/** A list of types object for share post to social network. */
var WlSocialShareShareObjectSid;
(function (WlSocialShareShareObjectSid) {
    /** Book */
    WlSocialShareShareObjectSid[WlSocialShareShareObjectSid["BOOK"] = 4] = "BOOK";
    /** Location */
    WlSocialShareShareObjectSid[WlSocialShareShareObjectSid["LOCATION"] = 3] = "LOCATION";
    /** Purchase */
    WlSocialShareShareObjectSid[WlSocialShareShareObjectSid["PURCHASE"] = 1] = "PURCHASE";
    /** Review */
    WlSocialShareShareObjectSid[WlSocialShareShareObjectSid["REVIEW"] = 2] = "REVIEW";
})(WlSocialShareShareObjectSid || (exports.WlSocialShareShareObjectSid = WlSocialShareShareObjectSid = {}));
/** List of page transaction type. */
var RsPayAccountChargeSid;
(function (RsPayAccountChargeSid) {
    /** Account charging using payment form */
    RsPayAccountChargeSid[RsPayAccountChargeSid["AUTO"] = 1] = "AUTO";
    /** Manual account charge by admin */
    RsPayAccountChargeSid[RsPayAccountChargeSid["CREDIT"] = 3] = "CREDIT";
    /** Manual account withdrawal by admin */
    RsPayAccountChargeSid[RsPayAccountChargeSid["DEBIT"] = 2] = "DEBIT";
})(RsPayAccountChargeSid || (exports.RsPayAccountChargeSid = RsPayAccountChargeSid = {}));
/** Lead conversion type. */
var WlLeadConversionLeadConversionTypeSid;
(function (WlLeadConversionLeadConversionTypeSid) {
    /** Consider leads as 'Lost' or no longer interested */
    WlLeadConversionLeadConversionTypeSid[WlLeadConversionLeadConversionTypeSid["LOST"] = 1] = "LOST";
    /** Consider leads as successfully 'Won' */
    WlLeadConversionLeadConversionTypeSid[WlLeadConversionLeadConversionTypeSid["WON"] = 2] = "WON";
})(WlLeadConversionLeadConversionTypeSid || (exports.WlLeadConversionLeadConversionTypeSid = WlLeadConversionLeadConversionTypeSid = {}));
/** Shapes of client group icons. */
var WlMemberGroupShapeSid;
(function (WlMemberGroupShapeSid) {
    /** Circle */
    WlMemberGroupShapeSid[WlMemberGroupShapeSid["CIRCLE"] = 1] = "CIRCLE";
    /** Hexagon */
    WlMemberGroupShapeSid[WlMemberGroupShapeSid["HEXAGON"] = 2] = "HEXAGON";
    /** Oval */
    WlMemberGroupShapeSid[WlMemberGroupShapeSid["OVAL"] = 3] = "OVAL";
    /** Pentagon */
    WlMemberGroupShapeSid[WlMemberGroupShapeSid["PENTAGON"] = 4] = "PENTAGON";
    /** Rectangle */
    WlMemberGroupShapeSid[WlMemberGroupShapeSid["RECTANGLE"] = 5] = "RECTANGLE";
    /** Square */
    WlMemberGroupShapeSid[WlMemberGroupShapeSid["SQUARE"] = 6] = "SQUARE";
    /** Star */
    WlMemberGroupShapeSid[WlMemberGroupShapeSid["STAR"] = 7] = "STAR";
})(WlMemberGroupShapeSid || (exports.WlMemberGroupShapeSid = WlMemberGroupShapeSid = {}));
/** Search operation constants. */
var WlSearchSearchOperationSid;
(function (WlSearchSearchOperationSid) {
    /** Contains */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["CONTAIN"] = 1] = "CONTAIN";
    /** Custom */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["CUSTOM"] = 27] = "CUSTOM";
    /** On */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["DATE"] = 2] = "DATE";
    /** After */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["DATE_AFTER"] = 3] = "DATE_AFTER";
    /** Before */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["DATE_BEFORE"] = 4] = "DATE_BEFORE";
    /** In specific range */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["DATE_RANGE"] = 5] = "DATE_RANGE";
    /** Ends with */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["END_WITH"] = 6] = "END_WITH";
    /** = */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["EQUAL"] = 13] = "EQUAL";
    /** &gt; */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["GREATER_THAN"] = 17] = "GREATER_THAN";
    /** &gt;= */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["GREATER_THAN_OR_EQUAL"] = 18] = "GREATER_THAN_OR_EQUAL";
    /** In the last */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["IN_LAST"] = 23] = "IN_LAST";
    /** In a specific range */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["IN_SPECIFIC_RANGE"] = 24] = "IN_SPECIFIC_RANGE";
    /** Is */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["IS"] = 7] = "IS";
    /** Is checked */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["IS_CHECKED"] = 30] = "IS_CHECKED";
    /** Is empty */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["IS_EMPTY"] = 11] = "IS_EMPTY";
    /** Isn`t */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["IS_NOT"] = 8] = "IS_NOT";
    /** Is unchecked */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["IS_UNCHECKED"] = 31] = "IS_UNCHECKED";
    /** Last month */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["LAST_MONTH"] = 29] = "LAST_MONTH";
    /** Last week */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["LAST_WEEK"] = 28] = "LAST_WEEK";
    /** &lt; */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["LESS_THAN"] = 15] = "LESS_THAN";
    /** &lt;= */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["LESS_THAN_OR_EQUAL"] = 16] = "LESS_THAN_OR_EQUAL";
    /** No */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["NO"] = 19] = "NO";
    /** Doesn`t contain */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["NOT_CONTAIN"] = 9] = "NOT_CONTAIN";
    /** Is not empty */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["NOT_EMPTY"] = 12] = "NOT_EMPTY";
    /** =/= */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["NOT_EQUAL"] = 14] = "NOT_EQUAL";
    /** Starts with */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["START_WITH"] = 10] = "START_WITH";
    /** This month */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["THIS_MONTH"] = 26] = "THIS_MONTH";
    /** This week */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["THIS_WEEK"] = 25] = "THIS_WEEK";
    /** Today */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["TODAY"] = 21] = "TODAY";
    /** Yes */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["YES"] = 20] = "YES";
    /** Yesterday */
    WlSearchSearchOperationSid[WlSearchSearchOperationSid["YESTERDAY"] = 22] = "YESTERDAY";
})(WlSearchSearchOperationSid || (exports.WlSearchSearchOperationSid = WlSearchSearchOperationSid = {}));
/** A list of share options. */
var WlShareShareSid;
(function (WlShareShareSid) {
    /** Item is available for all staffs in a business */
    WlShareShareSid[WlShareShareSid["EVERYONE"] = 2] = "EVERYONE";
    /** Item is available for current user */
    WlShareShareSid[WlShareShareSid["ONLY_ME"] = 1] = "ONLY_ME";
    /** Item is available for selected staff roles */
    WlShareShareSid[WlShareShareSid["SELECTED_STAFF_ROLE"] = 3] = "SELECTED_STAFF_ROLE";
})(WlShareShareSid || (exports.WlShareShareSid = WlShareShareSid = {}));
/** List of possible plans for BaseSubscription subscription. */
var WlBusinessAccountSubscriptionBaseBaseSubscriptionSid;
(function (WlBusinessAccountSubscriptionBaseBaseSubscriptionSid) {
    /** Advanced */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["ADVANCED"] = 4] = "ADVANCED";
    /** Basic */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["BASIC"] = 3] = "BASIC";
    /** Business(Legacy) */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["BUSINESS"] = 7] = "BUSINESS";
    /** Business */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["BUSINESS_2405"] = 11] = "BUSINESS_2405";
    /** Business(Legacy) */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["BUSINESS_LIGHT"] = 8] = "BUSINESS_LIGHT";
    /** Business Max */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["BUSINESS_MAX"] = 9] = "BUSINESS_MAX";
    /** Business Pro */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["BUSINESS_PRO"] = 10] = "BUSINESS_PRO";
    /** Enterprise */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["ENTERPRISE"] = 6] = "ENTERPRISE";
    /** None */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["FREE"] = 1] = "FREE";
    /** Business Partner */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["PARTNER"] = 2] = "PARTNER";
    /** Platform Access */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["PLATFORM_ACCESS"] = 15] = "PLATFORM_ACCESS";
    /** Professional */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["PROFESSIONAL"] = 5] = "PROFESSIONAL";
    /** Starter */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["STARTER"] = 12] = "STARTER";
    /** Starter */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["STARTER_2502"] = 13] = "STARTER_2502";
    /** Trial */
    WlBusinessAccountSubscriptionBaseBaseSubscriptionSid[WlBusinessAccountSubscriptionBaseBaseSubscriptionSid["TRIAL"] = 14] = "TRIAL";
})(WlBusinessAccountSubscriptionBaseBaseSubscriptionSid || (exports.WlBusinessAccountSubscriptionBaseBaseSubscriptionSid = WlBusinessAccountSubscriptionBaseBaseSubscriptionSid = {}));
/** List of possible plans for SmsSubscription subscription. */
var WlBusinessAccountSubscriptionSmsSmsSubscriptionSid;
(function (WlBusinessAccountSubscriptionSmsSmsSubscriptionSid) {
    /** 1000 Messages */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["CENTER_1000"] = 5] = "CENTER_1000";
    /** 10000 Messages */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["CENTER_10000"] = 8] = "CENTER_10000";
    /** 2500 Messages */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["CENTER_2500"] = 6] = "CENTER_2500";
    /** 25000 Messages */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["CENTER_25000"] = 9] = "CENTER_25000";
    /** 500 Messages */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["CENTER_500"] = 4] = "CENTER_500";
    /** 5000 Messages */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["CENTER_5000"] = 7] = "CENTER_5000";
    /** Message Center Custom */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["CENTER_CUSTOM"] = 10] = "CENTER_CUSTOM";
    /** Enterprise */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["ENTERPRISE"] = 11] = "ENTERPRISE";
    /** None */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["FREE"] = 1] = "FREE";
    /** Message Center Professional */
    WlBusinessAccountSubscriptionSmsSmsSubscriptionSid[WlBusinessAccountSubscriptionSmsSmsSubscriptionSid["PREMIUM"] = 3] = "PREMIUM";
})(WlBusinessAccountSubscriptionSmsSmsSubscriptionSid || (exports.WlBusinessAccountSubscriptionSmsSmsSubscriptionSid = WlBusinessAccountSubscriptionSmsSmsSubscriptionSid = {}));
/** List of possible plans for AchieveSubscription subscription. */
var WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid;
(function (WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid) {
    /** Basic */
    WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid[WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid["FREE"] = 1] = "FREE";
    /** Premium */
    WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid[WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid["PREMIUM"] = 2] = "PREMIUM";
    /** White Label (Legacy) */
    WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid[WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid["WHITE"] = 3] = "WHITE";
    /** White Label */
    WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid[WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid["WHITE0125"] = 7] = "WHITE0125";
    /** White Label (Business Max) */
    WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid[WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid["WHITE_MAX"] = 4] = "WHITE_MAX";
    /** White Label (Legacy) */
    WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid[WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid["WHITE_PLUS"] = 6] = "WHITE_PLUS";
    /** White Label (Business Pro) */
    WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid[WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid["WHITE_PRO"] = 5] = "WHITE_PRO";
})(WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid || (exports.WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid = WlBusinessAccountSubscriptionAchieveAchieveSubscriptionSid = {}));
/** List of possible plans for MarketingSuiteSubscription subscription. */
var WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid;
(function (WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid) {
    /** Pro */
    WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid[WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid["BASIC"] = 2] = "BASIC";
    /** Standard (Business) */
    WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid[WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid["BASIC_BUSINESS"] = 4] = "BASIC_BUSINESS";
    /** Standard (Legacy) */
    WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid[WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid["BASIC_OLD"] = 3] = "BASIC_OLD";
    /** Base */
    WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid[WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid["FREE"] = 1] = "FREE";
    /** Ultimate */
    WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid[WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid["PRO"] = 5] = "PRO";
})(WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid || (exports.WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid = WlBusinessAccountSubscriptionMarketingSuiteMarketingSuiteSubscriptionSid = {}));
/** List of possible plans for CollectionsSubscription subscription. */
var WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid;
(function (WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid[WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid["FREE"] = 1] = "FREE";
    /** Integration Requested */
    WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid[WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid["INTEGRATION_REQUESTED"] = 3] = "INTEGRATION_REQUESTED";
    /** Professional */
    WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid[WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid || (exports.WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid = WlBusinessAccountSubscriptionCollectionsCollectionsSubscriptionSid = {}));
/** List of possible plans for ZapierSubscription subscription. */
var WlBusinessAccountSubscriptionZapierZapierSubscriptionSid;
(function (WlBusinessAccountSubscriptionZapierZapierSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionZapierZapierSubscriptionSid[WlBusinessAccountSubscriptionZapierZapierSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionZapierZapierSubscriptionSid[WlBusinessAccountSubscriptionZapierZapierSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionZapierZapierSubscriptionSid || (exports.WlBusinessAccountSubscriptionZapierZapierSubscriptionSid = WlBusinessAccountSubscriptionZapierZapierSubscriptionSid = {}));
/** List of possible plans for FitliveSubscription subscription. */
var WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid;
(function (WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid) {
    /** Advanced */
    WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid[WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid["ADVANCED"] = 5] = "ADVANCED";
    /** Basic */
    WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid[WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid["BASIC"] = 4] = "BASIC";
    /** None */
    WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid[WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid[WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid["LICENCED"] = 2] = "LICENCED";
    /** Suspended */
    WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid[WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid["SUSPENDED"] = 3] = "SUSPENDED";
})(WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid || (exports.WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid = WlBusinessAccountSubscriptionFitliveFitliveSubscriptionSid = {}));
/** List of possible plans for AiAgentSubscription subscription. */
var WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid;
(function (WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid) {
    /** Chat Agent */
    WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid[WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid["CHAT_AGENT"] = 4] = "CHAT_AGENT";
    /** Dental Phone Agent */
    WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid[WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid["DENTAL_PHONE_AGENT"] = 5] = "DENTAL_PHONE_AGENT";
    /** None */
    WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid[WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid[WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
    /** Assistant */
    WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid[WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid["STANDARD"] = 3] = "STANDARD";
})(WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid || (exports.WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid = WlBusinessAccountSubscriptionAiAgentAiAgentSubscriptionSid = {}));
/** List of possible plans for DoorSubscription subscription. */
var WlBusinessAccountSubscriptionDoorDoorSubscriptionSid;
(function (WlBusinessAccountSubscriptionDoorDoorSubscriptionSid) {
    /** Brivo */
    WlBusinessAccountSubscriptionDoorDoorSubscriptionSid[WlBusinessAccountSubscriptionDoorDoorSubscriptionSid["BASE"] = 2] = "BASE";
    /** None */
    WlBusinessAccountSubscriptionDoorDoorSubscriptionSid[WlBusinessAccountSubscriptionDoorDoorSubscriptionSid["FREE"] = 1] = "FREE";
    /** Passport */
    WlBusinessAccountSubscriptionDoorDoorSubscriptionSid[WlBusinessAccountSubscriptionDoorDoorSubscriptionSid["PASSPORT"] = 3] = "PASSPORT";
})(WlBusinessAccountSubscriptionDoorDoorSubscriptionSid || (exports.WlBusinessAccountSubscriptionDoorDoorSubscriptionSid = WlBusinessAccountSubscriptionDoorDoorSubscriptionSid = {}));
/** List of possible plans for FitbuilderSubscription subscription. */
var WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid;
(function (WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid[WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid[WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid || (exports.WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid = WlBusinessAccountSubscriptionFitbuilderFitbuilderSubscriptionSid = {}));
/** List of possible plans for QuizSubscription subscription. */
var WlBusinessAccountSubscriptionQuizQuizSubscriptionSid;
(function (WlBusinessAccountSubscriptionQuizQuizSubscriptionSid) {
    /** Business */
    WlBusinessAccountSubscriptionQuizQuizSubscriptionSid[WlBusinessAccountSubscriptionQuizQuizSubscriptionSid["BUSINESS"] = 3] = "BUSINESS";
    /** None */
    WlBusinessAccountSubscriptionQuizQuizSubscriptionSid[WlBusinessAccountSubscriptionQuizQuizSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionQuizQuizSubscriptionSid[WlBusinessAccountSubscriptionQuizQuizSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
    /** Starter */
    WlBusinessAccountSubscriptionQuizQuizSubscriptionSid[WlBusinessAccountSubscriptionQuizQuizSubscriptionSid["STARTER"] = 4] = "STARTER";
})(WlBusinessAccountSubscriptionQuizQuizSubscriptionSid || (exports.WlBusinessAccountSubscriptionQuizQuizSubscriptionSid = WlBusinessAccountSubscriptionQuizQuizSubscriptionSid = {}));
/** List of possible plans for ZoomSubscription subscription. */
var WlBusinessAccountSubscriptionZoomZoomSubscriptionSid;
(function (WlBusinessAccountSubscriptionZoomZoomSubscriptionSid) {
    /** Basic */
    WlBusinessAccountSubscriptionZoomZoomSubscriptionSid[WlBusinessAccountSubscriptionZoomZoomSubscriptionSid["BASIC"] = 2] = "BASIC";
    /** None */
    WlBusinessAccountSubscriptionZoomZoomSubscriptionSid[WlBusinessAccountSubscriptionZoomZoomSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionZoomZoomSubscriptionSid[WlBusinessAccountSubscriptionZoomZoomSubscriptionSid["PROFESSIONAL"] = 3] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionZoomZoomSubscriptionSid || (exports.WlBusinessAccountSubscriptionZoomZoomSubscriptionSid = WlBusinessAccountSubscriptionZoomZoomSubscriptionSid = {}));
/** List of possible plans for FinanceSubscription subscription. */
var WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid;
(function (WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid[WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid[WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid || (exports.WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid = WlBusinessAccountSubscriptionFinanceFinanceSubscriptionSid = {}));
/** List of possible plans for FitvidSubscription subscription. */
var WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid;
(function (WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid) {
    /** Basic */
    WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid[WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid["BASIC"] = 2] = "BASIC";
    /** Enterprise */
    WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid[WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid["ENTERPRISE"] = 3] = "ENTERPRISE";
    /** None */
    WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid[WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid["FREE"] = 1] = "FREE";
    /** Premium */
    WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid[WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid["PREMIUM"] = 4] = "PREMIUM";
})(WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid || (exports.WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid = WlBusinessAccountSubscriptionFitvidFitvidSubscriptionSid = {}));
/** List of possible plans for FitzoneSubscription subscription. */
var WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid;
(function (WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid[WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid[WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid || (exports.WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid = WlBusinessAccountSubscriptionFitzoneFitzoneSubscriptionSid = {}));
/** List of possible plans for PostcardSubscription subscription. */
var WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid;
(function (WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid) {
    /** Basic */
    WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid[WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid["BASIC"] = 3] = "BASIC";
    /** None */
    WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid[WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid[WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid || (exports.WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid = WlBusinessAccountSubscriptionPostcardPostcardSubscriptionSid = {}));
/** List of possible plans for ReviewSubscription subscription. */
var WlBusinessAccountSubscriptionReviewReviewSubscriptionSid;
(function (WlBusinessAccountSubscriptionReviewReviewSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionReviewReviewSubscriptionSid[WlBusinessAccountSubscriptionReviewReviewSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionReviewReviewSubscriptionSid[WlBusinessAccountSubscriptionReviewReviewSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionReviewReviewSubscriptionSid || (exports.WlBusinessAccountSubscriptionReviewReviewSubscriptionSid = WlBusinessAccountSubscriptionReviewReviewSubscriptionSid = {}));
/** List of possible plans for RewardSubscription subscription. */
var WlBusinessAccountSubscriptionRewardRewardSubscriptionSid;
(function (WlBusinessAccountSubscriptionRewardRewardSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionRewardRewardSubscriptionSid[WlBusinessAccountSubscriptionRewardRewardSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionRewardRewardSubscriptionSid[WlBusinessAccountSubscriptionRewardRewardSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionRewardRewardSubscriptionSid || (exports.WlBusinessAccountSubscriptionRewardRewardSubscriptionSid = WlBusinessAccountSubscriptionRewardRewardSubscriptionSid = {}));
/** List of possible plans for WebsiteSubscription subscription. */
var WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid;
(function (WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid) {
    /** Basic */
    WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid[WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid["BASIC"] = 2] = "BASIC";
    /** Basic */
    WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid[WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid["BASIC_LARGE"] = 6] = "BASIC_LARGE";
    /** Enterprise */
    WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid[WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid["ENTERPRISE"] = 4] = "ENTERPRISE";
    /** None */
    WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid[WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid["FREE"] = 1] = "FREE";
    /** Premium */
    WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid[WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid["PREMIUM"] = 3] = "PREMIUM";
    /** Premium (Business Max) */
    WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid[WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid["PREMIUM_MAX"] = 7] = "PREMIUM_MAX";
    /** Professional */
    WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid[WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid["PROFESSIONAL"] = 5] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid || (exports.WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid = WlBusinessAccountSubscriptionWebsiteWebsiteSubscriptionSid = {}));
/** List of possible plans for AssetSubscription subscription. */
var WlBusinessAccountSubscriptionAssetAssetSubscriptionSid;
(function (WlBusinessAccountSubscriptionAssetAssetSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionAssetAssetSubscriptionSid[WlBusinessAccountSubscriptionAssetAssetSubscriptionSid["FREE"] = 1] = "FREE";
    /** Professional */
    WlBusinessAccountSubscriptionAssetAssetSubscriptionSid[WlBusinessAccountSubscriptionAssetAssetSubscriptionSid["PROFESSIONAL"] = 2] = "PROFESSIONAL";
})(WlBusinessAccountSubscriptionAssetAssetSubscriptionSid || (exports.WlBusinessAccountSubscriptionAssetAssetSubscriptionSid = WlBusinessAccountSubscriptionAssetAssetSubscriptionSid = {}));
/** List of possible plans for ApiSubscription subscription. */
var WlBusinessAccountSubscriptionApiApiSubscriptionSid;
(function (WlBusinessAccountSubscriptionApiApiSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionApiApiSubscriptionSid[WlBusinessAccountSubscriptionApiApiSubscriptionSid["FREE"] = 1] = "FREE";
    /** Premium */
    WlBusinessAccountSubscriptionApiApiSubscriptionSid[WlBusinessAccountSubscriptionApiApiSubscriptionSid["PREMIUM"] = 2] = "PREMIUM";
})(WlBusinessAccountSubscriptionApiApiSubscriptionSid || (exports.WlBusinessAccountSubscriptionApiApiSubscriptionSid = WlBusinessAccountSubscriptionApiApiSubscriptionSid = {}));
/** List of possible plans for GoHighLevelSubscription subscription. */
var WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid;
(function (WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid) {
    /** Standard */
    WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid[WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid["BASIC"] = 2] = "BASIC";
    /** Free */
    WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid[WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid["FREE"] = 1] = "FREE";
})(WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid || (exports.WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid = WlBusinessAccountSubscriptionGoHighLevelGoHighLevelSubscriptionSid = {}));
/** List of possible plans for EmailSubscription subscription. */
var WlBusinessAccountSubscriptionEmailEmailSubscriptionSid;
(function (WlBusinessAccountSubscriptionEmailEmailSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionEmailEmailSubscriptionSid[WlBusinessAccountSubscriptionEmailEmailSubscriptionSid["FREE"] = 1] = "FREE";
    /** Standard */
    WlBusinessAccountSubscriptionEmailEmailSubscriptionSid[WlBusinessAccountSubscriptionEmailEmailSubscriptionSid["STANDARD"] = 2] = "STANDARD";
})(WlBusinessAccountSubscriptionEmailEmailSubscriptionSid || (exports.WlBusinessAccountSubscriptionEmailEmailSubscriptionSid = WlBusinessAccountSubscriptionEmailEmailSubscriptionSid = {}));
/** List of possible plans for ConstantContactSubscription subscription. */
var WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid;
(function (WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid[WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid["FREE"] = 1] = "FREE";
    /** Standard */
    WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid[WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid["STANDARD"] = 2] = "STANDARD";
})(WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid || (exports.WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid = WlBusinessAccountSubscriptionEmlConstantContactSubscriptionSid = {}));
/** List of possible plans for MailchimpSubscription subscription. */
var WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid;
(function (WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid) {
    /** None */
    WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid[WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid["FREE"] = 1] = "FREE";
    /** Standard */
    WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid[WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid["STANDARD"] = 2] = "STANDARD";
})(WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid || (exports.WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid = WlBusinessAccountSubscriptionEmlMailchimpSubscriptionSid = {}));
/** List of possible plans for BusinessCoachSubscription subscription. */
var WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid;
(function (WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid) {
    /** Business Success Coaching */
    WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid[WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid["BUSINESS_SUCCESS_COACHING"] = 2] = "BUSINESS_SUCCESS_COACHING";
    /** No subscription */
    WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid[WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid["FREE"] = 1] = "FREE";
})(WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid || (exports.WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid = WlBusinessAccountSubscriptionBusinessCoachBusinessCoachSubscriptionSid = {}));
/** List of options to add client to attendance list. */
var WlLoginAttendanceAddOptionSid;
(function (WlLoginAttendanceAddOptionSid) {
    /** Add client to attendance list and charge his account */
    WlLoginAttendanceAddOptionSid[WlLoginAttendanceAddOptionSid["DEBIT"] = 2] = "DEBIT";
    /** Add client to attendance list and pay now */
    WlLoginAttendanceAddOptionSid[WlLoginAttendanceAddOptionSid["PAY"] = 3] = "PAY";
    /** Add client to attendance list without payment */
    WlLoginAttendanceAddOptionSid[WlLoginAttendanceAddOptionSid["UNPAID"] = 1] = "UNPAID";
})(WlLoginAttendanceAddOptionSid || (exports.WlLoginAttendanceAddOptionSid = WlLoginAttendanceAddOptionSid = {}));
/** List of options to convert promotion. */
var WlPromotionConvertPromotionConvertSid;
(function (WlPromotionConvertPromotionConvertSid) {
    /** Promotion conversion downgraded */
    WlPromotionConvertPromotionConvertSid[WlPromotionConvertPromotionConvertSid["DOWNGRADE"] = 1] = "DOWNGRADE";
    /** Type of the promotion conversion */
    WlPromotionConvertPromotionConvertSid[WlPromotionConvertPromotionConvertSid["EQUAL_VALUE"] = 2] = "EQUAL_VALUE";
    /** Promotion conversion upgraded */
    WlPromotionConvertPromotionConvertSid[WlPromotionConvertPromotionConvertSid["UPGRADE"] = 3] = "UPGRADE";
})(WlPromotionConvertPromotionConvertSid || (exports.WlPromotionConvertPromotionConvertSid = WlPromotionConvertPromotionConvertSid = {}));
/** Different types of conversion behavior: when and how it should be converted. */
var WlLoginPromotionConvertConvertWhenSid;
(function (WlLoginPromotionConvertConvertWhenSid) {
    /** Purchase Option converts one day after the scheduled expiration date and the client is charged for the new purchase option */
    WlLoginPromotionConvertConvertWhenSid[WlLoginPromotionConvertConvertWhenSid["EXPIRATION_PAID"] = 1] = "EXPIRATION_PAID";
    /** Purchase Option converts now and the client is not charged for the new Purchase Option */
    WlLoginPromotionConvertConvertWhenSid[WlLoginPromotionConvertConvertWhenSid["NOW_FREE"] = 2] = "NOW_FREE";
    /** Purchase Option converts now and the client is changed for the new Purchase Option */
    WlLoginPromotionConvertConvertWhenSid[WlLoginPromotionConvertConvertWhenSid["NOW_PAID"] = 3] = "NOW_PAID";
    /** Purchase Option converts on the specified date and the client is charged for the new Purchase Option */
    WlLoginPromotionConvertConvertWhenSid[WlLoginPromotionConvertConvertWhenSid["SCHEDULE_PAID"] = 4] = "SCHEDULE_PAID";
})(WlLoginPromotionConvertConvertWhenSid || (exports.WlLoginPromotionConvertConvertWhenSid = WlLoginPromotionConvertConvertWhenSid = {}));
/** Guest Pass reset type. */
var WlPromotionGuestPassGuestPassResetTypeSid;
(function (WlPromotionGuestPassGuestPassResetTypeSid) {
    /** Limits reset on promotion billing day */
    WlPromotionGuestPassGuestPassResetTypeSid[WlPromotionGuestPassGuestPassResetTypeSid["BILLING"] = 1] = "BILLING";
    /** Limits reset on promotion renewal day */
    WlPromotionGuestPassGuestPassResetTypeSid[WlPromotionGuestPassGuestPassResetTypeSid["RENEWAL"] = 2] = "RENEWAL";
})(WlPromotionGuestPassGuestPassResetTypeSid || (exports.WlPromotionGuestPassGuestPassResetTypeSid = WlPromotionGuestPassGuestPassResetTypeSid = {}));
/** List of places to redirect user from attendance list after inactivity. */
var WlReceptionRosterDirectSid;
(function (WlReceptionRosterDirectSid) {
    /** Redirect user to recently viewed class */
    WlReceptionRosterDirectSid[WlReceptionRosterDirectSid["RECENT"] = 1] = "RECENT";
    /** Redirect user to upcoming schedule */
    WlReceptionRosterDirectSid[WlReceptionRosterDirectSid["SCHEDULE"] = 2] = "SCHEDULE";
})(WlReceptionRosterDirectSid || (exports.WlReceptionRosterDirectSid = WlReceptionRosterDirectSid = {}));
/** Appointment display option. */
var WlScheduleDesignOptionSid;
(function (WlScheduleDesignOptionSid) {
    /** Appointment name in header */
    WlScheduleDesignOptionSid[WlScheduleDesignOptionSid["APPOINTMENT_NAME"] = 1] = "APPOINTMENT_NAME";
    /** Client name in header */
    WlScheduleDesignOptionSid[WlScheduleDesignOptionSid["CLIENT_NAME"] = 3] = "CLIENT_NAME";
    /** Staff name in header */
    WlScheduleDesignOptionSid[WlScheduleDesignOptionSid["STAFF_NAME"] = 2] = "STAFF_NAME";
})(WlScheduleDesignOptionSid || (exports.WlScheduleDesignOptionSid = WlScheduleDesignOptionSid = {}));
/** List of checks that are performed before session book. */
var WlBookProcessProcessCheckSid;
(function (WlBookProcessProcessCheckSid) {
    /** Check that a client has a credit card */
    WlBookProcessProcessCheckSid[WlBookProcessProcessCheckSid["CARD"] = 1] = "CARD";
    /** Check a client has no unsigned waiver */
    WlBookProcessProcessCheckSid[WlBookProcessProcessCheckSid["WAIVER"] = 2] = "WAIVER";
})(WlBookProcessProcessCheckSid || (exports.WlBookProcessProcessCheckSid = WlBookProcessProcessCheckSid = {}));
/** The list of possible actions for class modify wizard. */
var RsClassModifyActionSid;
(function (RsClassModifyActionSid) {
    /** Cancel class schedule */
    RsClassModifyActionSid[RsClassModifyActionSid["CANCEL"] = 2] = "CANCEL";
    /** Change class schedule */
    RsClassModifyActionSid[RsClassModifyActionSid["EDIT"] = 1] = "EDIT";
    /** Restore cancelled schedule */
    RsClassModifyActionSid[RsClassModifyActionSid["RESTORE"] = 3] = "RESTORE";
})(RsClassModifyActionSid || (exports.RsClassModifyActionSid = RsClassModifyActionSid = {}));
/** The list of possible modify mode for class modify wizard. */
var RsClassModifyModeSid;
(function (RsClassModifyModeSid) {
    /** Edit class schedule */
    RsClassModifyModeSid[RsClassModifyModeSid["FULL"] = 1] = "FULL";
    /** Edit instructor in class schedule */
    RsClassModifyModeSid[RsClassModifyModeSid["INSTRUCTOR"] = 2] = "INSTRUCTOR";
    /** Asset working hours */
    RsClassModifyModeSid[RsClassModifyModeSid["RESOURCE_PERIOD"] = 4] = "RESOURCE_PERIOD";
    /** Staff working hours */
    RsClassModifyModeSid[RsClassModifyModeSid["STAFF_PERIOD"] = 3] = "STAFF_PERIOD";
})(RsClassModifyModeSid || (exports.RsClassModifyModeSid = RsClassModifyModeSid = {}));
/** A list of client booking flow types. */
var WlServiceServiceBookFlowSid;
(function (WlServiceServiceBookFlowSid) {
    /** Client selects the date and time and then the staff member */
    WlServiceServiceBookFlowSid[WlServiceServiceBookFlowSid["DATE_STAFF_ORDER"] = 2] = "DATE_STAFF_ORDER";
    /** Client selects their preferred booking order should be staff member / calendar */
    WlServiceServiceBookFlowSid[WlServiceServiceBookFlowSid["PREFER_ORDER"] = 3] = "PREFER_ORDER";
    /** Client selects the staff member and then the date and time */
    WlServiceServiceBookFlowSid[WlServiceServiceBookFlowSid["STAFF_DATE_ORDER"] = 1] = "STAFF_DATE_ORDER";
})(WlServiceServiceBookFlowSid || (exports.WlServiceServiceBookFlowSid = WlServiceServiceBookFlowSid = {}));
/** A list of client booking flow types. */
var RsServiceRequireSid;
(function (RsServiceRequireSid) {
    /** Some part of the price is required. Type of the deposit can be flat or percentage */
    RsServiceRequireSid[RsServiceRequireSid["ADVANCE"] = 4] = "ADVANCE";
    /** Full payment is required */
    RsServiceRequireSid[RsServiceRequireSid["FULL"] = 2] = "FULL";
    /** Nothing is required */
    RsServiceRequireSid[RsServiceRequireSid["NOTHING"] = 1] = "NOTHING";
    /** Clients can book, but online purchase is not available */
    RsServiceRequireSid[RsServiceRequireSid["OFFLINE"] = 6] = "OFFLINE";
    /** Credit card authorisation without payment is required */
    RsServiceRequireSid[RsServiceRequireSid["ZERO"] = 5] = "ZERO";
})(RsServiceRequireSid || (exports.RsServiceRequireSid = RsServiceRequireSid = {}));
/** List of possible ways to solve a conflict. */
var RsAppointmentEditConflictSid;
(function (RsAppointmentEditConflictSid) {
    /** Create an event with other staff, date or time */
    RsAppointmentEditConflictSid[RsAppointmentEditConflictSid["EDIT"] = 3] = "EDIT";
    /** Ignore this conflict and create event as it is */
    RsAppointmentEditConflictSid[RsAppointmentEditConflictSid["IGNORE"] = 1] = "IGNORE";
    /** Do not create conflicted event */
    RsAppointmentEditConflictSid[RsAppointmentEditConflictSid["SKIP"] = 2] = "SKIP";
})(RsAppointmentEditConflictSid || (exports.RsAppointmentEditConflictSid = RsAppointmentEditConflictSid = {}));
/** List of user roles in a system. */
var WlLoginLoginRoleSid;
(function (WlLoginLoginRoleSid) {
    /** Admin role */
    WlLoginLoginRoleSid[WlLoginLoginRoleSid["ADMIN"] = 1] = "ADMIN";
    /** Client role */
    WlLoginLoginRoleSid[WlLoginLoginRoleSid["CLIENT"] = 2] = "CLIENT";
    /** Guest role. User that is not logged in */
    WlLoginLoginRoleSid[WlLoginLoginRoleSid["GUEST"] = 3] = "GUEST";
    /** Staff member role */
    WlLoginLoginRoleSid[WlLoginLoginRoleSid["STAFF"] = 4] = "STAFF";
})(WlLoginLoginRoleSid || (exports.WlLoginLoginRoleSid = WlLoginLoginRoleSid = {}));
/** A list of service price types. */
var RsServicePriceSid;
(function (RsServicePriceSid) {
    /** Fixed price */
    RsServicePriceSid[RsServicePriceSid["FIXED"] = 1] = "FIXED";
    /** No need to pay */
    RsServicePriceSid[RsServicePriceSid["FREE"] = 2] = "FREE";
    /** Hide price */
    RsServicePriceSid[RsServicePriceSid["HIDE"] = 4] = "HIDE";
    /** Various price */
    RsServicePriceSid[RsServicePriceSid["VARIES"] = 3] = "VARIES";
})(RsServicePriceSid || (exports.RsServicePriceSid = RsServicePriceSid = {}));
/** List of different OTP code delivery strategies. */
var WlPassportLoginEnterOtpDeliveryStrategyEnum;
(function (WlPassportLoginEnterOtpDeliveryStrategyEnum) {
    /** OTP code is sent to all given communication channels (sms, emails, etc.) */
    WlPassportLoginEnterOtpDeliveryStrategyEnum[WlPassportLoginEnterOtpDeliveryStrategyEnum["BROADCAST"] = 1] = "BROADCAST";
    /** OTP code is sent to the first communication channel that is available, according to the given list of priorities */
    WlPassportLoginEnterOtpDeliveryStrategyEnum[WlPassportLoginEnterOtpDeliveryStrategyEnum["PRIORITY"] = 2] = "PRIORITY";
})(WlPassportLoginEnterOtpDeliveryStrategyEnum || (exports.WlPassportLoginEnterOtpDeliveryStrategyEnum = WlPassportLoginEnterOtpDeliveryStrategyEnum = {}));
/** Purchase restrictions. */
var WlShopProductPurchaseRestrictionSid;
(function (WlShopProductPurchaseRestrictionSid) {
    /** Purchase option available for all clients */
    WlShopProductPurchaseRestrictionSid[WlShopProductPurchaseRestrictionSid["ALL"] = 1] = "ALL";
    /** Purchase option introductory offer, available for new clients only */
    WlShopProductPurchaseRestrictionSid[WlShopProductPurchaseRestrictionSid["INTRODUCTORY"] = 2] = "INTRODUCTORY";
    /** Purchase option available for clients with special login type or member group */
    WlShopProductPurchaseRestrictionSid[WlShopProductPurchaseRestrictionSid["TYPE"] = 3] = "TYPE";
})(WlShopProductPurchaseRestrictionSid || (exports.WlShopProductPurchaseRestrictionSid = WlShopProductPurchaseRestrictionSid = {}));
/** Mobile applications categories which will be displayed in select tag. */
var WlSkinApplicationResourceApplicationCategorySid;
(function (WlSkinApplicationResourceApplicationCategorySid) {
    /** Mobile applications with content related to the sphere of cosmetology and appearance */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["BEAUTY"] = 1] = "BEAUTY";
    /** Mobile applications with content related to the sphere of Business and finance */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["BUSINESS"] = 2] = "BUSINESS";
    /** Mobile applications with content related to the sphere education */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["EDUCATION"] = 3] = "EDUCATION";
    /** Mobile applications with content related to the sphere entertainment */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["ENTERTAINMENT"] = 4] = "ENTERTAINMENT";
    /** Mobile applications with content related with various events */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["EVENTS"] = 5] = "EVENTS";
    /** Mobile applications with content related to the sphere health, sport and fitness */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["HEALTH_AND_FITNESS"] = 6] = "HEALTH_AND_FITNESS";
    /** Mobile applications with content related to the life style */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["LIFESTYLE"] = 7] = "LIFESTYLE";
    /** Mobile applications with content related to the sphere health, and medical services */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["MEDICAL"] = 8] = "MEDICAL";
    /** Mobile applications with content related with various social events */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["SOCIAL"] = 9] = "SOCIAL";
    /** Mobile applications with content related with various sports events */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["SPORTS"] = 10] = "SPORTS";
    /** Mobile applications with content for performing certain tasks */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["TOOLS"] = 11] = "TOOLS";
    /** Mobile applications with content related to the sphere of travel and geography */
    WlSkinApplicationResourceApplicationCategorySid[WlSkinApplicationResourceApplicationCategorySid["TRAVEL_AND_LOCAL"] = 12] = "TRAVEL_AND_LOCAL";
})(WlSkinApplicationResourceApplicationCategorySid || (exports.WlSkinApplicationResourceApplicationCategorySid = WlSkinApplicationResourceApplicationCategorySid = {}));
/** Enum for application update types used in Google Play and Apple Store releases. */
var WlSkinApplicationUpgradeAppUpdateTypeEnum;
(function (WlSkinApplicationUpgradeAppUpdateTypeEnum) {
    /** Patch update (1) - for small bug fixes or improvements */
    WlSkinApplicationUpgradeAppUpdateTypeEnum[WlSkinApplicationUpgradeAppUpdateTypeEnum["PATCH"] = 1] = "PATCH";
    /** Minor update (2) - for backward-compatible feature additions */
    WlSkinApplicationUpgradeAppUpdateTypeEnum[WlSkinApplicationUpgradeAppUpdateTypeEnum["MINOR"] = 2] = "MINOR";
    /** Major update (3) - for incompatible API changes or major new features */
    WlSkinApplicationUpgradeAppUpdateTypeEnum[WlSkinApplicationUpgradeAppUpdateTypeEnum["MAJOR"] = 3] = "MAJOR";
})(WlSkinApplicationUpgradeAppUpdateTypeEnum || (exports.WlSkinApplicationUpgradeAppUpdateTypeEnum = WlSkinApplicationUpgradeAppUpdateTypeEnum = {}));
/** Payment actors (staff member, user or business owner). */
var RsPayActorSid;
(function (RsPayActorSid) {
    /** Business owner */
    RsPayActorSid[RsPayActorSid["BUSINESS"] = 3] = "BUSINESS";
    /** Staff member */
    RsPayActorSid[RsPayActorSid["STAFF"] = 1] = "STAFF";
    /** User */
    RsPayActorSid[RsPayActorSid["USER"] = 2] = "USER";
})(RsPayActorSid || (exports.RsPayActorSid = RsPayActorSid = {}));
/** Lifecycle state of a guest pass invitation. */
var WlLoginPromotionGuestPassInviteInviteStatusEnum;
(function (WlLoginPromotionGuestPassInviteInviteStatusEnum) {
    /** Guest attended the visit booked with the guest pass */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["ATTEND"] = 9] = "ATTEND";
    /** Guest booked the visit booked with the guest pass */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["BOOK"] = 8] = "BOOK";
    /** Guest cancelled the visit early (without penalty). Pass is returned to the host's */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["EARLY_CANCELLED"] = 10] = "EARLY_CANCELLED";
    /** Guest attended the visit booked with the guest pass */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["CHECKED_IN"] = 3] = "CHECKED_IN";
    /** Guest accepted the invitation but did not attend within the pass expiration */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["GUEST_PASS_EXPIRED"] = 6] = "GUEST_PASS_EXPIRED";
    /** Guest claimed the invitation but the linked visit (if any) has not been */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["INVITE_ACCEPTED"] = 2] = "INVITE_ACCEPTED";
    /** Invitation expired before the guest claimed it. Pass returns to the host's */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["INVITE_EXPIRED"] = 7] = "INVITE_EXPIRED";
    /** Invitation has been sent but the guest has not claimed it yet. Pass is held */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["INVITE_SENT"] = 1] = "INVITE_SENT";
    /** Guest cancelled the visit too late and was penalised. Pass is consumed and */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["LATE_CANCELLED"] = 5] = "LATE_CANCELLED";
    /** Guest accepted the invitation but did not show up for the visit. Pass is */
    WlLoginPromotionGuestPassInviteInviteStatusEnum[WlLoginPromotionGuestPassInviteInviteStatusEnum["NO_SHOW"] = 4] = "NO_SHOW";
})(WlLoginPromotionGuestPassInviteInviteStatusEnum || (exports.WlLoginPromotionGuestPassInviteInviteStatusEnum = WlLoginPromotionGuestPassInviteInviteStatusEnum = {}));
// --- Namespace classes ---
class CoreRequestApiApplicationCredentialNamespace {
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
exports.CoreRequestApiApplicationCredentialNamespace = CoreRequestApiApplicationCredentialNamespace;
class CoreRequestApiApplicationNamespace {
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
exports.CoreRequestApiApplicationNamespace = CoreRequestApiApplicationNamespace;
class CoreRequestApiNamespace {
    constructor(_client) {
        this._client = _client;
        this.application = new CoreRequestApiApplicationNamespace(this._client);
    }
    /** Gets a secret key for signing. */
    keySecret(params) {
        return this._client._request('/Core/Request/Api/KeySecret.json', params, 'GET');
    }
}
exports.CoreRequestApiNamespace = CoreRequestApiNamespace;
class CoreRequestTokenNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets new pin code. */
    tokenPin(params) {
        return this._client._request('/Core/Request/Token/TokenPin.json', params, 'GET');
    }
}
exports.CoreRequestTokenNamespace = CoreRequestTokenNamespace;
class CoreRequestNamespace {
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
exports.CoreRequestNamespace = CoreRequestNamespace;
class CoreGeoRegionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about countries and regions. */
    region(params) {
        return this._client._request('/Core/Geo/Region/Region.json', params, 'GET');
    }
}
exports.CoreGeoRegionNamespace = CoreGeoRegionNamespace;
class CoreGeoNamespace {
    constructor(_client) {
        this._client = _client;
        this.region = new CoreGeoRegionNamespace(this._client);
    }
    /** Returns a list of cities to show in combobox list. */
    combobox(params) {
        return this._client._request('/Core/Geo/Combobox.json', params, 'GET');
    }
}
exports.CoreGeoNamespace = CoreGeoNamespace;
class CoreGoogleCaptchaNamespace {
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
exports.CoreGoogleCaptchaNamespace = CoreGoogleCaptchaNamespace;
class CoreGoogleNamespace {
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
exports.CoreGoogleNamespace = CoreGoogleNamespace;
class CoreWebSocketNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks whether a listener can subscribe to specified channel. Subscribes in a case of positive result. */
    subscribe(params) {
        return this._client._request('/Core/WebSocket/Subscribe.json', params, 'POST');
    }
}
exports.CoreWebSocketNamespace = CoreWebSocketNamespace;
class CoreSidNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of all items for the given Sid class. */
    coreSid(params) {
        return this._client._request('/Core/Sid/CoreSid.json', params, 'GET');
    }
}
exports.CoreSidNamespace = CoreSidNamespace;
class CoreCaptchaNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if a CAPTCHA is required for the given captcha type. */
    captchaRequire(params) {
        return this._client._request('/Core/Captcha/CaptchaRequire.json', params, 'GET');
    }
}
exports.CoreCaptchaNamespace = CoreCaptchaNamespace;
class CorePassportLoginEnterNamespace {
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
exports.CorePassportLoginEnterNamespace = CorePassportLoginEnterNamespace;
class CorePassportLoginRegisterNamespace {
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
exports.CorePassportLoginRegisterNamespace = CorePassportLoginRegisterNamespace;
class CorePassportLoginSignOutNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Signs user out. */
    signOut(params) {
        return this._client._request('/Core/Passport/Login/SignOut/SignOut.json', params, 'POST');
    }
}
exports.CorePassportLoginSignOutNamespace = CorePassportLoginSignOutNamespace;
class CorePassportLoginNamespace {
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
exports.CorePassportLoginNamespace = CorePassportLoginNamespace;
class CorePassportChangePasswordNamespace {
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
exports.CorePassportChangePasswordNamespace = CorePassportChangePasswordNamespace;
class CorePassportEnterJwtNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns a jwt token that can be used to log user. */
    jwtToken(params) {
        return this._client._request('/Core/Passport/Enter/Jwt/JwtToken.json', params, 'GET');
    }
}
exports.CorePassportEnterJwtNamespace = CorePassportEnterJwtNamespace;
class CorePassportEnterNamespace {
    constructor(_client) {
        this._client = _client;
        this.jwt = new CorePassportEnterJwtNamespace(this._client);
    }
}
exports.CorePassportEnterNamespace = CorePassportEnterNamespace;
class CorePassportUserEmailNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if email address exists. */
    emailExist(params) {
        return this._client._request('/Core/Passport/User/Email/EmailExist.json', params, 'GET');
    }
}
exports.CorePassportUserEmailNamespace = CorePassportUserEmailNamespace;
class CorePassportUserNamespace {
    constructor(_client) {
        this._client = _client;
        this.email = new CorePassportUserEmailNamespace(this._client);
    }
}
exports.CorePassportUserNamespace = CorePassportUserNamespace;
class CorePassportNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new CorePassportLoginNamespace(this._client);
        this.changePassword = new CorePassportChangePasswordNamespace(this._client);
        this.enter = new CorePassportEnterNamespace(this._client);
        this.user = new CorePassportUserNamespace(this._client);
    }
}
exports.CorePassportNamespace = CorePassportNamespace;
class CoreDriveImageUploadNamespace {
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
exports.CoreDriveImageUploadNamespace = CoreDriveImageUploadNamespace;
class CoreDriveNamespace {
    constructor(_client) {
        this._client = _client;
        this.imageUpload = new CoreDriveImageUploadNamespace(this._client);
    }
}
exports.CoreDriveNamespace = CoreDriveNamespace;
class CoreNamespace {
    constructor(_client) {
        this._client = _client;
        this.request = new CoreRequestNamespace(this._client);
        this.geo = new CoreGeoNamespace(this._client);
        this.google = new CoreGoogleNamespace(this._client);
        this.webSocket = new CoreWebSocketNamespace(this._client);
        this.sid = new CoreSidNamespace(this._client);
        this.captcha = new CoreCaptchaNamespace(this._client);
        this.passport = new CorePassportNamespace(this._client);
        this.drive = new CoreDriveNamespace(this._client);
    }
}
exports.CoreNamespace = CoreNamespace;
class SocialMicrosoftNamespace {
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
exports.SocialMicrosoftNamespace = SocialMicrosoftNamespace;
class SocialAppleLoginNamespace {
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
exports.SocialAppleLoginNamespace = SocialAppleLoginNamespace;
class SocialAppleNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new SocialAppleLoginNamespace(this._client);
    }
}
exports.SocialAppleNamespace = SocialAppleNamespace;
class SocialFacebookLoginNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Authorizes user with facebook. */
    login(params) {
        return this._client._request('/Social/Facebook/Login/Login.json', params, 'POST');
    }
}
exports.SocialFacebookLoginNamespace = SocialFacebookLoginNamespace;
class SocialFacebookNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new SocialFacebookLoginNamespace(this._client);
    }
}
exports.SocialFacebookNamespace = SocialFacebookNamespace;
class SocialGooglePlusNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Authorizes user with Google. */
    login(params) {
        return this._client._request('/Social/Google/Plus/Login.json', params, 'POST');
    }
}
exports.SocialGooglePlusNamespace = SocialGooglePlusNamespace;
class SocialGoogleNamespace {
    constructor(_client) {
        this._client = _client;
        this.plus = new SocialGooglePlusNamespace(this._client);
    }
}
exports.SocialGoogleNamespace = SocialGoogleNamespace;
class SocialNamespace {
    constructor(_client) {
        this._client = _client;
        this.microsoft = new SocialMicrosoftNamespace(this._client);
        this.apple = new SocialAppleNamespace(this._client);
        this.facebook = new SocialFacebookNamespace(this._client);
        this.google = new SocialGoogleNamespace(this._client);
    }
}
exports.SocialNamespace = SocialNamespace;
class WlLeadSourceNamespace {
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
exports.WlLeadSourceNamespace = WlLeadSourceNamespace;
class WlLeadNamespace {
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
exports.WlLeadNamespace = WlLeadNamespace;
class WlReportNamespace {
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
exports.WlReportNamespace = WlReportNamespace;
class WlBusinessAccountSubscriptionAchieveNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the Achieve subscription plan flags (free and white-label) for the given business. */
    achieveSubscription(params) {
        return this._client._request('/Wl/Business/Account/Subscription/Achieve/AchieveSubscription.json', params, 'GET');
    }
}
exports.WlBusinessAccountSubscriptionAchieveNamespace = WlBusinessAccountSubscriptionAchieveNamespace;
class WlBusinessAccountSubscriptionNamespace {
    constructor(_client) {
        this._client = _client;
        this.achieve = new WlBusinessAccountSubscriptionAchieveNamespace(this._client);
    }
    /** Gets information about subscription. */
    subscriptionInfo(params) {
        return this._client._request('/Wl/Business/Account/Subscription/SubscriptionInfo.json', params, 'GET');
    }
}
exports.WlBusinessAccountSubscriptionNamespace = WlBusinessAccountSubscriptionNamespace;
class WlBusinessAccountNamespace {
    constructor(_client) {
        this._client = _client;
        this.subscription = new WlBusinessAccountSubscriptionNamespace(this._client);
    }
    /** Generates list of active business keys for the same region as the requesting user (proper permissions required). */
    businessAccount(params) {
        return this._client._request('/Wl/Business/Account/BusinessAccount.json', params, 'GET');
    }
}
exports.WlBusinessAccountNamespace = WlBusinessAccountNamespace;
class WlBusinessConfigNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets information about a business config. */
    businessConfig(params) {
        return this._client._request('/Wl/Business/Config/BusinessConfig.json', params, 'GET');
    }
}
exports.WlBusinessConfigNamespace = WlBusinessConfigNamespace;
class WlBusinessSelectNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Performs checks and generates a list of businesses according to a given configuration. */
    businessSelect(params) {
        return this._client._request('/Wl/Business/Select/BusinessSelect.json', params, 'GET');
    }
}
exports.WlBusinessSelectNamespace = WlBusinessSelectNamespace;
class WlBusinessClaimNamespace {
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
exports.WlBusinessClaimNamespace = WlBusinessClaimNamespace;
class WlBusinessPartnerNamespace {
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
exports.WlBusinessPartnerNamespace = WlBusinessPartnerNamespace;
class WlBusinessDesignNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** API method to get business design data. */
    businessDesign(params) {
        return this._client._request('/Wl/Business/Design/BusinessDesign.json', params, 'GET');
    }
}
exports.WlBusinessDesignNamespace = WlBusinessDesignNamespace;
class WlBusinessLeadNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves a new business lead referral record submitted through the Partner Program. */
    businessLead(params) {
        return this._client._request('/Wl/Business/Lead/BusinessLead.json', params, 'POST');
    }
}
exports.WlBusinessLeadNamespace = WlBusinessLeadNamespace;
class WlBusinessPhoneNamespace {
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
exports.WlBusinessPhoneNamespace = WlBusinessPhoneNamespace;
class WlBusinessSearchNamespace {
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
exports.WlBusinessSearchNamespace = WlBusinessSearchNamespace;
class WlBusinessAmazonRegionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the Amazon region ID for each of the requested business keys. */
    amazonRegion(params) {
        return this._client._request('/Wl/Business/AmazonRegion/AmazonRegion.json', params, 'GET');
    }
}
exports.WlBusinessAmazonRegionNamespace = WlBusinessAmazonRegionNamespace;
class WlBusinessAuthorizePartnerNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Grants or denies access to business location for a partner. */
    authorizePartner(params) {
        return this._client._request('/Wl/Business/AuthorizePartner/AuthorizePartner.json', params, 'GET');
    }
}
exports.WlBusinessAuthorizePartnerNamespace = WlBusinessAuthorizePartnerNamespace;
class WlBusinessTypeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of available business types with their categories and images. */
    businessTypeList(params) {
        return this._client._request('/Wl/Business/Type/BusinessTypeList.json', params, 'GET');
    }
}
exports.WlBusinessTypeNamespace = WlBusinessTypeNamespace;
class WlBusinessWaiverNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the business waiver text rendered as HTML with user-specific variables substituted. */
    waiver(params) {
        return this._client._request('/Wl/Business/Waiver/Waiver.json', params, 'GET');
    }
}
exports.WlBusinessWaiverNamespace = WlBusinessWaiverNamespace;
class WlBusinessAuthorizeSupportResponseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Grants or denies access to business location for staff member. */
    response(params) {
        return this._client._request('/Wl/Business/AuthorizeSupport/Response/Response.json', params, 'GET');
    }
}
exports.WlBusinessAuthorizeSupportResponseNamespace = WlBusinessAuthorizeSupportResponseNamespace;
class WlBusinessAuthorizeSupportNamespace {
    constructor(_client) {
        this._client = _client;
        this.response = new WlBusinessAuthorizeSupportResponseNamespace(this._client);
    }
}
exports.WlBusinessAuthorizeSupportNamespace = WlBusinessAuthorizeSupportNamespace;
class WlBusinessFranchiseLocationNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns country, region, state, city and location lists of the franchisor. */
    businessFranchiseLocation(params) {
        return this._client._request('/Wl/Business/Franchise/Location/BusinessFranchiseLocation.json', params, 'GET');
    }
}
exports.WlBusinessFranchiseLocationNamespace = WlBusinessFranchiseLocationNamespace;
class WlBusinessFranchiseNamespace {
    constructor(_client) {
        this._client = _client;
        this.location = new WlBusinessFranchiseLocationNamespace(this._client);
    }
}
exports.WlBusinessFranchiseNamespace = WlBusinessFranchiseNamespace;
class WlBusinessRewardConfigNamespace {
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
exports.WlBusinessRewardConfigNamespace = WlBusinessRewardConfigNamespace;
class WlBusinessRewardNamespace {
    constructor(_client) {
        this._client = _client;
        this.config = new WlBusinessRewardConfigNamespace(this._client);
    }
}
exports.WlBusinessRewardNamespace = WlBusinessRewardNamespace;
class WlBusinessUserSubscribeNamespace {
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
exports.WlBusinessUserSubscribeNamespace = WlBusinessUserSubscribeNamespace;
class WlBusinessUserNamespace {
    constructor(_client) {
        this._client = _client;
        this.subscribe = new WlBusinessUserSubscribeNamespace(this._client);
    }
}
exports.WlBusinessUserNamespace = WlBusinessUserNamespace;
class WlBusinessNamespace {
    constructor(_client) {
        this._client = _client;
        this.account = new WlBusinessAccountNamespace(this._client);
        this.config = new WlBusinessConfigNamespace(this._client);
        this.select = new WlBusinessSelectNamespace(this._client);
        this.claim = new WlBusinessClaimNamespace(this._client);
        this.partner = new WlBusinessPartnerNamespace(this._client);
        this.design = new WlBusinessDesignNamespace(this._client);
        this.lead = new WlBusinessLeadNamespace(this._client);
        this.phone = new WlBusinessPhoneNamespace(this._client);
        this.search = new WlBusinessSearchNamespace(this._client);
        this.amazonRegion = new WlBusinessAmazonRegionNamespace(this._client);
        this.authorizePartner = new WlBusinessAuthorizePartnerNamespace(this._client);
        this.type = new WlBusinessTypeNamespace(this._client);
        this.waiver = new WlBusinessWaiverNamespace(this._client);
        this.authorizeSupport = new WlBusinessAuthorizeSupportNamespace(this._client);
        this.franchise = new WlBusinessFranchiseNamespace(this._client);
        this.reward = new WlBusinessRewardNamespace(this._client);
        this.user = new WlBusinessUserNamespace(this._client);
    }
    /** Creates new business. */
    businessPost(params) {
        return this._client._request('/Wl/Business/Business.json', params, 'POST');
    }
    /** Claims business. */
    businessPut(params) {
        return this._client._request('/Wl/Business/Business.json', params, 'PUT');
    }
    /** Returns detailed information about the specified business, including locale, franchise status, services, tips, social URLs, and logo. */
    data(params) {
        return this._client._request('/Wl/Business/Data.json', params, 'GET');
    }
    /** Gets information about businesses where given user is a staff member. */
    businessAccess(params) {
        return this._client._request('/Wl/Business/BusinessAccess.json', params, 'GET');
    }
}
exports.WlBusinessNamespace = WlBusinessNamespace;
class WlMailPatternAutomatedMarketingCustomTemplateNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets custom pattern data. */
    patternGet(params) {
        return this._client._request('/Wl/Mail/Pattern/AutomatedMarketing/CustomTemplate/Pattern.json', params, 'GET');
    }
    /** Saves custom pattern. */
    patternPost(params) {
        return this._client._request('/Wl/Mail/Pattern/AutomatedMarketing/CustomTemplate/Pattern.json', params, 'POST');
    }
}
exports.WlMailPatternAutomatedMarketingCustomTemplateNamespace = WlMailPatternAutomatedMarketingCustomTemplateNamespace;
class WlMailPatternAutomatedMarketingNamespace {
    constructor(_client) {
        this._client = _client;
        this.customTemplate = new WlMailPatternAutomatedMarketingCustomTemplateNamespace(this._client);
    }
}
exports.WlMailPatternAutomatedMarketingNamespace = WlMailPatternAutomatedMarketingNamespace;
class WlMailPatternNamespace {
    constructor(_client) {
        this._client = _client;
        this.automatedMarketing = new WlMailPatternAutomatedMarketingNamespace(this._client);
    }
}
exports.WlMailPatternNamespace = WlMailPatternNamespace;
class WlMailNamespace {
    constructor(_client) {
        this._client = _client;
        this.pattern = new WlMailPatternNamespace(this._client);
    }
    /** Sends email. */
    sendMail(params) {
        return this._client._request('/Wl/Mail/SendMail.json', params, 'POST');
    }
}
exports.WlMailNamespace = WlMailNamespace;
class WlLoginMailNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if specified user exists in specified business. */
    mailUse(params) {
        return this._client._request('/Wl/Login/Mail/MailUse.json', params, 'GET');
    }
}
exports.WlLoginMailNamespace = WlLoginMailNamespace;
class WlLoginAttendanceAddNamespace {
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
exports.WlLoginAttendanceAddNamespace = WlLoginAttendanceAddNamespace;
class WlLoginAttendanceNamespace {
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
exports.WlLoginAttendanceNamespace = WlLoginAttendanceNamespace;
class WlLoginMemberDynamicIdNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the member's barcode and its expiry time for the specified business and user. */
    dynamicId(params) {
        return this._client._request('/Wl/Login/Member/DynamicId/DynamicId.json', params, 'GET');
    }
}
exports.WlLoginMemberDynamicIdNamespace = WlLoginMemberDynamicIdNamespace;
class WlLoginMemberNamespace {
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
exports.WlLoginMemberNamespace = WlLoginMemberNamespace;
class WlLoginSearchStaffAppNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Performs access checks and returns a list of users, depending on the search query. */
    list(params) {
        return this._client._request('/Wl/Login/Search/StaffApp/List.json', params, 'GET');
    }
}
exports.WlLoginSearchStaffAppNamespace = WlLoginSearchStaffAppNamespace;
class WlLoginSearchNamespace {
    constructor(_client) {
        this._client = _client;
        this.staffApp = new WlLoginSearchStaffAppNamespace(this._client);
    }
    /** Finds a user by their email or phone within the specified business. */
    concerto(params) {
        return this._client._request('/Wl/Login/Search/Concerto.json', params, 'GET');
    }
}
exports.WlLoginSearchNamespace = WlLoginSearchNamespace;
class WlLoginPromotionConvertNamespace {
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
exports.WlLoginPromotionConvertNamespace = WlLoginPromotionConvertNamespace;
class WlLoginPromotionGuestPassInviteNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns a list of guest pass invitations for the given membership or user. */
    inviteListGet(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Invite/InviteList.json', params, 'GET');
    }
    /** Sends a guest pass invitation to a user. */
    inviteListPost(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Invite/InviteList.json', params, 'POST');
    }
    /** Revokes a guest pass invitation. */
    inviteDelete(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Invite/Invite.json', params, 'DELETE');
    }
    /** Sends a reminder notification for a guest pass invitation. */
    invitePut(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Invite/Invite.json', params, 'PUT');
    }
}
exports.WlLoginPromotionGuestPassInviteNamespace = WlLoginPromotionGuestPassInviteNamespace;
class WlLoginPromotionGuestPassClaimNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Claims the guest pass invitation for the current user and accepts it. */
    claim(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Claim/Claim.json', params, 'POST');
    }
}
exports.WlLoginPromotionGuestPassClaimNamespace = WlLoginPromotionGuestPassClaimNamespace;
class WlLoginPromotionGuestPassApplyNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Applies the guest pass of the specified login promotion to the attendee's visit. */
    apply(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/Apply/Apply.json', params, 'POST');
    }
}
exports.WlLoginPromotionGuestPassApplyNamespace = WlLoginPromotionGuestPassApplyNamespace;
class WlLoginPromotionGuestPassNamespace {
    constructor(_client) {
        this._client = _client;
        this.invite = new WlLoginPromotionGuestPassInviteNamespace(this._client);
        this.claim = new WlLoginPromotionGuestPassClaimNamespace(this._client);
        this.apply = new WlLoginPromotionGuestPassApplyNamespace(this._client);
    }
    /** Retrieves guest pass information for a client's membership. */
    guestPassGet(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/GuestPass.json', params, 'GET');
    }
    /** Updates the guest pass remaining usages for a client's membership. */
    guestPassPut(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/GuestPass.json', params, 'PUT');
    }
    /** Retrieves guest passes for a specific client. */
    guestPassList(params) {
        return this._client._request('/Wl/Login/Promotion/GuestPass/GuestPassList.json', params, 'GET');
    }
}
exports.WlLoginPromotionGuestPassNamespace = WlLoginPromotionGuestPassNamespace;
class WlLoginPromotionNamespace {
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
exports.WlLoginPromotionNamespace = WlLoginPromotionNamespace;
class WlLoginAgreeNamespace {
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
exports.WlLoginAgreeNamespace = WlLoginAgreeNamespace;
class WlLoginAddNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks required profile fields and, if complete, registers the existing user in the specified business. */
    mailUseOk(params) {
        return this._client._request('/Wl/Login/Add/MailUseOk.json', params, 'POST');
    }
}
exports.WlLoginAddNamespace = WlLoginAddNamespace;
class WlLoginTypeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets a login types list of a business. */
    loginType(params) {
        return this._client._request('/Wl/Login/Type/LoginType.json', params, 'GET');
    }
}
exports.WlLoginTypeNamespace = WlLoginTypeNamespace;
class WlLoginPermissionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves the auto-renew setting for a purchased promotion. */
    permission(params) {
        return this._client._request('/Wl/Login/Permission/Permission.json', params, 'POST');
    }
}
exports.WlLoginPermissionNamespace = WlLoginPermissionNamespace;
class WlLoginCouponNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves the key and balance of a gift card by its code for the specified business. */
    coupon(params) {
        return this._client._request('/Wl/Login/Coupon/Coupon.json', params, 'GET');
    }
}
exports.WlLoginCouponNamespace = WlLoginCouponNamespace;
class WlLoginProductNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about products purchased by client. */
    product(params) {
        return this._client._request('/Wl/Login/Product/Product.json', params, 'GET');
    }
}
exports.WlLoginProductNamespace = WlLoginProductNamespace;
class WlLoginNamespace {
    constructor(_client) {
        this._client = _client;
        this.mail = new WlLoginMailNamespace(this._client);
        this.attendance = new WlLoginAttendanceNamespace(this._client);
        this.member = new WlLoginMemberNamespace(this._client);
        this.search = new WlLoginSearchNamespace(this._client);
        this.promotion = new WlLoginPromotionNamespace(this._client);
        this.agree = new WlLoginAgreeNamespace(this._client);
        this.add = new WlLoginAddNamespace(this._client);
        this.type = new WlLoginTypeNamespace(this._client);
        this.permission = new WlLoginPermissionNamespace(this._client);
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
exports.WlLoginNamespace = WlLoginNamespace;
class WlScheduleClassListNamespace {
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
exports.WlScheduleClassListNamespace = WlScheduleClassListNamespace;
class WlScheduleTabNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets information about tabs for page "Book now". */
    tab(params) {
        return this._client._request('/Wl/Schedule/Tab/Tab.json', params, 'GET');
    }
}
exports.WlScheduleTabNamespace = WlScheduleTabNamespace;
class WlScheduleClassViewNamespace {
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
exports.WlScheduleClassViewNamespace = WlScheduleClassViewNamespace;
class WlSchedulePageNamespace {
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
exports.WlSchedulePageNamespace = WlSchedulePageNamespace;
class WlScheduleScheduleListStaffAppNamespace {
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
exports.WlScheduleScheduleListStaffAppNamespace = WlScheduleScheduleListStaffAppNamespace;
class WlScheduleScheduleListNamespace {
    constructor(_client) {
        this._client = _client;
        this.staffApp = new WlScheduleScheduleListStaffAppNamespace(this._client);
    }
}
exports.WlScheduleScheduleListNamespace = WlScheduleScheduleListNamespace;
class WlScheduleNamespace {
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
exports.WlScheduleNamespace = WlScheduleNamespace;
class WlEventBookEventViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about event item. */
    element(params) {
        return this._client._request('/Wl/Event/Book/EventView/Element.json', params, 'GET');
    }
}
exports.WlEventBookEventViewNamespace = WlEventBookEventViewNamespace;
class WlEventBookEventListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves a list of events. */
    list(params) {
        return this._client._request('/Wl/Event/Book/EventList/List.json', params, 'GET');
    }
}
exports.WlEventBookEventListNamespace = WlEventBookEventListNamespace;
class WlEventBookNamespace {
    constructor(_client) {
        this._client = _client;
        this.eventView = new WlEventBookEventViewNamespace(this._client);
        this.eventList = new WlEventBookEventListNamespace(this._client);
    }
}
exports.WlEventBookNamespace = WlEventBookNamespace;
class WlEventNamespace {
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
exports.WlEventNamespace = WlEventNamespace;
class WlProfilePurchaseNamespace {
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
exports.WlProfilePurchaseNamespace = WlProfilePurchaseNamespace;
class WlProfileEditEmailNamespace {
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
exports.WlProfileEditEmailNamespace = WlProfileEditEmailNamespace;
class WlProfileEditNamespace {
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
exports.WlProfileEditNamespace = WlProfileEditNamespace;
class WlProfileActivityNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves a list of activity items to show in user profile. */
    list(params) {
        return this._client._request('/Wl/Profile/Activity/List.json', params, 'GET');
    }
    /** Retrieves information about activity item. */
    element(params) {
        return this._client._request('/Wl/Profile/Activity/Element.json', params, 'GET');
    }
}
exports.WlProfileActivityNamespace = WlProfileActivityNamespace;
class WlProfileAlertNamespace {
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
exports.WlProfileAlertNamespace = WlProfileAlertNamespace;
class WlProfilePurchaseListNamespace {
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
exports.WlProfilePurchaseListNamespace = WlProfilePurchaseListNamespace;
class WlProfileSettingNamespace {
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
exports.WlProfileSettingNamespace = WlProfileSettingNamespace;
class WlProfileTermNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns online waiver information for the specified user and business. */
    term(params) {
        return this._client._request('/Wl/Profile/Term/Term.json', params, 'GET');
    }
}
exports.WlProfileTermNamespace = WlProfileTermNamespace;
class WlProfileAttachNamespace {
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
exports.WlProfileAttachNamespace = WlProfileAttachNamespace;
class WlProfileAttendanceScheduleFrontendNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves lifetime visit totals. */
    lifetimeTotals(params) {
        return this._client._request('/Wl/Profile/Attendance/Schedule/Frontend/LifetimeTotals.json', params, 'GET');
    }
}
exports.WlProfileAttendanceScheduleFrontendNamespace = WlProfileAttendanceScheduleFrontendNamespace;
class WlProfileAttendanceScheduleNamespace {
    constructor(_client) {
        this._client = _client;
        this.frontend = new WlProfileAttendanceScheduleFrontendNamespace(this._client);
    }
}
exports.WlProfileAttendanceScheduleNamespace = WlProfileAttendanceScheduleNamespace;
class WlProfileAttendanceNamespace {
    constructor(_client) {
        this._client = _client;
        this.schedule = new WlProfileAttendanceScheduleNamespace(this._client);
    }
    /** Returns a list of visits that overlap with the specified service, class, resource, or time data. */
    attendanceOverlap(params) {
        return this._client._request('/Wl/Profile/Attendance/AttendanceOverlap.json', params, 'GET');
    }
}
exports.WlProfileAttendanceNamespace = WlProfileAttendanceNamespace;
class WlProfileContractNamespace {
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
exports.WlProfileContractNamespace = WlProfileContractNamespace;
class WlProfileFormResponseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the lists of completed and pending quiz responses for the specified user and business. */
    responseList(params) {
        return this._client._request('/Wl/Profile/Form/Response/ResponseList.json', params, 'GET');
    }
}
exports.WlProfileFormResponseNamespace = WlProfileFormResponseNamespace;
class WlProfileFormNamespace {
    constructor(_client) {
        this._client = _client;
        this.response = new WlProfileFormResponseNamespace(this._client);
    }
}
exports.WlProfileFormNamespace = WlProfileFormNamespace;
class WlProfileNamespace {
    constructor(_client) {
        this._client = _client;
        this.purchase = new WlProfilePurchaseNamespace(this._client);
        this.edit = new WlProfileEditNamespace(this._client);
        this.activity = new WlProfileActivityNamespace(this._client);
        this.alert = new WlProfileAlertNamespace(this._client);
        this.purchaseList = new WlProfilePurchaseListNamespace(this._client);
        this.setting = new WlProfileSettingNamespace(this._client);
        this.term = new WlProfileTermNamespace(this._client);
        this.attach = new WlProfileAttachNamespace(this._client);
        this.attendance = new WlProfileAttendanceNamespace(this._client);
        this.contract = new WlProfileContractNamespace(this._client);
        this.form = new WlProfileFormNamespace(this._client);
    }
    /** Creates a new client profile with the provided personal details in the specified business. */
    profileCreate(params) {
        return this._client._request('/Wl/Profile/ProfileCreate.json', params, 'POST');
    }
}
exports.WlProfileNamespace = WlProfileNamespace;
class WlStaffStaffListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of staff members for the given business. */
    staffList(params) {
        return this._client._request('/Wl/Staff/StaffList/StaffList.json', params, 'GET');
    }
}
exports.WlStaffStaffListNamespace = WlStaffStaffListNamespace;
class WlStaffPrivilegeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of privileges for the current user in the given business. */
    privilegeList(params) {
        return this._client._request('/Wl/Staff/Privilege/PrivilegeList.json', params, 'GET');
    }
}
exports.WlStaffPrivilegeNamespace = WlStaffPrivilegeNamespace;
class WlStaffStaffViewNamespace {
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
exports.WlStaffStaffViewNamespace = WlStaffStaffViewNamespace;
class WlStaffNamespace {
    constructor(_client) {
        this._client = _client;
        this.staffList = new WlStaffStaffListNamespace(this._client);
        this.privilege = new WlStaffPrivilegeNamespace(this._client);
        this.staffView = new WlStaffStaffViewNamespace(this._client);
    }
    /** Update or create staff. */
    staffElement(params) {
        return this._client._request('/Wl/Staff/StaffElement.json', params, 'POST');
    }
}
exports.WlStaffNamespace = WlStaffNamespace;
class WlVisitNamespace {
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
exports.WlVisitNamespace = WlVisitNamespace;
class WlVideoWatchNamespace {
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
exports.WlVideoWatchNamespace = WlVideoWatchNamespace;
class WlVideoCategoryNamespace {
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
exports.WlVideoCategoryNamespace = WlVideoCategoryNamespace;
class WlVideoLevelNamespace {
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
exports.WlVideoLevelNamespace = WlVideoLevelNamespace;
class WlVideoTagNamespace {
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
exports.WlVideoTagNamespace = WlVideoTagNamespace;
class WlVideoNamespace {
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
exports.WlVideoNamespace = WlVideoNamespace;
class WlLocationFlagNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if user `uid` is flagged in location `k_location` or each of users `a_uid` is flagged in location `k_location`. */
    flag(params) {
        return this._client._request('/Wl/Location/Flag/Flag.json', params, 'GET');
    }
}
exports.WlLocationFlagNamespace = WlLocationFlagNamespace;
class WlLocationWorkTimeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves working hours of the location. */
    locationWorkTime(params) {
        return this._client._request('/Wl/Location/WorkTime/LocationWorkTime.json', params, 'POST');
    }
}
exports.WlLocationWorkTimeNamespace = WlLocationWorkTimeNamespace;
class WlLocationViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns detailed information about the specified location. */
    view(params) {
        return this._client._request('/Wl/Location/View/View.json', params, 'GET');
    }
}
exports.WlLocationViewNamespace = WlLocationViewNamespace;
class WlLocationFacilityNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns the list of all items for the given Sid class. */
    facilitySid(params) {
        return this._client._request('/Wl/Location/Facility/FacilitySid.json', params, 'GET');
    }
}
exports.WlLocationFacilityNamespace = WlLocationFacilityNamespace;
class WlLocationNamespace {
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
exports.WlLocationNamespace = WlLocationNamespace;
class WlAnnouncementNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns a list of announcements for the given business and location. */
    announcementList(params) {
        return this._client._request('/Wl/Announcement/AnnouncementList.json', params, 'GET');
    }
}
exports.WlAnnouncementNamespace = WlAnnouncementNamespace;
class WlCollectorNamespace {
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
exports.WlCollectorNamespace = WlCollectorNamespace;
class WlHolidayNamespace {
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
exports.WlHolidayNamespace = WlHolidayNamespace;
class WlPromotionIndexNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets a list of packages/passes/memberships. */
    promotionIndex(params) {
        return this._client._request('/Wl/Promotion/Index/PromotionIndex.json', params, 'GET');
    }
}
exports.WlPromotionIndexNamespace = WlPromotionIndexNamespace;
class WlPromotionNamespace {
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
exports.WlPromotionNamespace = WlPromotionNamespace;
class WlQuizResponseNamespace {
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
exports.WlQuizResponseNamespace = WlQuizResponseNamespace;
class WlQuizNamespace {
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
exports.WlQuizNamespace = WlQuizNamespace;
class WlFitbuilderNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Notifies messengers with new information. */
    message(params) {
        return this._client._request('/Wl/Fitbuilder/Message.json', params, 'POST');
    }
}
exports.WlFitbuilderNamespace = WlFitbuilderNamespace;
class WlTagNamespace {
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
exports.WlTagNamespace = WlTagNamespace;
class WlSkinApplicationConnectNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Creates or updates the integration credentials for the given business application. */
    applicationConnect(params) {
        return this._client._request('/Wl/Skin/Application/Connect/ApplicationConnect.json', params, 'POST');
    }
}
exports.WlSkinApplicationConnectNamespace = WlSkinApplicationConnectNamespace;
class WlSkinApplicationResourceNamespace {
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
exports.WlSkinApplicationResourceNamespace = WlSkinApplicationResourceNamespace;
class WlSkinApplicationNamespace {
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
exports.WlSkinApplicationNamespace = WlSkinApplicationNamespace;
class WlSkinWidgetNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns widget skins grouped by widget type for the given business. */
    skinWidgetList(params) {
        return this._client._request('/Wl/Skin/Widget/SkinWidgetList.json', params, 'GET');
    }
}
exports.WlSkinWidgetNamespace = WlSkinWidgetNamespace;
class WlSkinNamespace {
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
exports.WlSkinNamespace = WlSkinNamespace;
class WlTaxNamespace {
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
exports.WlTaxNamespace = WlTaxNamespace;
class WlReviewReviewListNamespace {
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
exports.WlReviewReviewListNamespace = WlReviewReviewListNamespace;
class WlReviewNamespace {
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
exports.WlReviewNamespace = WlReviewNamespace;
class WlRankNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets belts list of a business. */
    rank(params) {
        return this._client._request('/Wl/Rank/Rank.json', params, 'GET');
    }
}
exports.WlRankNamespace = WlRankNamespace;
class WlMemberInfoNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about specified member. */
    info(params) {
        return this._client._request('/Wl/Member/Info/Info.json', params, 'GET');
    }
}
exports.WlMemberInfoNamespace = WlMemberInfoNamespace;
class WlMemberPurchaseNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns active clients holding at least one active Purchase Option from the specified list. */
    memberByPromotion(params) {
        return this._client._request('/Wl/Member/Purchase/MemberByPromotion.json', params, 'GET');
    }
}
exports.WlMemberPurchaseNamespace = WlMemberPurchaseNamespace;
class WlMemberGroupEditNamespace {
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
exports.WlMemberGroupEditNamespace = WlMemberGroupEditNamespace;
class WlMemberGroupUserNamespace {
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
exports.WlMemberGroupUserNamespace = WlMemberGroupUserNamespace;
class WlMemberGroupGroupListNamespace {
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
exports.WlMemberGroupGroupListNamespace = WlMemberGroupGroupListNamespace;
class WlMemberGroupNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlMemberGroupEditNamespace(this._client);
        this.user = new WlMemberGroupUserNamespace(this._client);
        this.groupList = new WlMemberGroupGroupListNamespace(this._client);
    }
}
exports.WlMemberGroupNamespace = WlMemberGroupNamespace;
class WlMemberProgressFieldEditNamespace {
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
exports.WlMemberProgressFieldEditNamespace = WlMemberProgressFieldEditNamespace;
class WlMemberProgressFieldNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlMemberProgressFieldEditNamespace(this._client);
    }
    /** Changes states of field. */
    state(params) {
        return this._client._request('/Wl/Member/Progress/Field/State.json', params, 'PUT');
    }
}
exports.WlMemberProgressFieldNamespace = WlMemberProgressFieldNamespace;
class WlMemberProgressLogEditNamespace {
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
exports.WlMemberProgressLogEditNamespace = WlMemberProgressLogEditNamespace;
class WlMemberProgressLogImageNamespace {
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
exports.WlMemberProgressLogImageNamespace = WlMemberProgressLogImageNamespace;
class WlMemberProgressLogCompareNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of dates where client logged his progress. */
    compare(params) {
        return this._client._request('/Wl/Member/Progress/Log/Compare/Compare.json', params, 'GET');
    }
}
exports.WlMemberProgressLogCompareNamespace = WlMemberProgressLogCompareNamespace;
class WlMemberProgressLogNamespace {
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
exports.WlMemberProgressLogNamespace = WlMemberProgressLogNamespace;
class WlMemberProgressGoalEditNamespace {
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
exports.WlMemberProgressGoalEditNamespace = WlMemberProgressGoalEditNamespace;
class WlMemberProgressGoalNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlMemberProgressGoalEditNamespace(this._client);
    }
}
exports.WlMemberProgressGoalNamespace = WlMemberProgressGoalNamespace;
class WlMemberProgressNamespace {
    constructor(_client) {
        this._client = _client;
        this.field = new WlMemberProgressFieldNamespace(this._client);
        this.log = new WlMemberProgressLogNamespace(this._client);
        this.goal = new WlMemberProgressGoalNamespace(this._client);
    }
}
exports.WlMemberProgressNamespace = WlMemberProgressNamespace;
class WlMemberNamespace {
    constructor(_client) {
        this._client = _client;
        this.info = new WlMemberInfoNamespace(this._client);
        this.purchase = new WlMemberPurchaseNamespace(this._client);
        this.group = new WlMemberGroupNamespace(this._client);
        this.progress = new WlMemberProgressNamespace(this._client);
    }
}
exports.WlMemberNamespace = WlMemberNamespace;
class WlReceptionApplicationNamespace {
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
exports.WlReceptionApplicationNamespace = WlReceptionApplicationNamespace;
class WlReceptionRosterDesignNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns configuration for the Attendance Kiosk. */
    receptionRosterDesign(params) {
        return this._client._request('/Wl/Reception/Roster/Design/ReceptionRosterDesign.json', params, 'GET');
    }
}
exports.WlReceptionRosterDesignNamespace = WlReceptionRosterDesignNamespace;
class WlReceptionRosterNamespace {
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
exports.WlReceptionRosterNamespace = WlReceptionRosterNamespace;
class WlReceptionDesignNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about settings for Check In Web Application. */
    receptionDesign(params) {
        return this._client._request('/Wl/Reception/Design/ReceptionDesign.json', params, 'GET');
    }
}
exports.WlReceptionDesignNamespace = WlReceptionDesignNamespace;
class WlReceptionNamespace {
    constructor(_client) {
        this._client = _client;
        this.application = new WlReceptionApplicationNamespace(this._client);
        this.roster = new WlReceptionRosterNamespace(this._client);
        this.design = new WlReceptionDesignNamespace(this._client);
    }
}
exports.WlReceptionNamespace = WlReceptionNamespace;
class WlNotificationSendNamespace {
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
exports.WlNotificationSendNamespace = WlNotificationSendNamespace;
class WlNotificationOtpNamespace {
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
exports.WlNotificationOtpNamespace = WlNotificationOtpNamespace;
class WlNotificationNamespace {
    constructor(_client) {
        this._client = _client;
        this.send = new WlNotificationSendNamespace(this._client);
        this.otp = new WlNotificationOtpNamespace(this._client);
    }
}
exports.WlNotificationNamespace = WlNotificationNamespace;
class WlBookProcessRelationNamespace {
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
exports.WlBookProcessRelationNamespace = WlBookProcessRelationNamespace;
class WlBookProcessGuestNamespace {
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
exports.WlBookProcessGuestNamespace = WlBookProcessGuestNamespace;
class WlBookProcessPurchaseNamespace {
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
exports.WlBookProcessPurchaseNamespace = WlBookProcessPurchaseNamespace;
class WlBookProcessResourceNamespace {
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
exports.WlBookProcessResourceNamespace = WlBookProcessResourceNamespace;
class WlBookProcessPaymentNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Processes purchases and books sessions on the "Pay/Billing info" step of the booking wizard. */
    payment(params) {
        return this._client._request('/Wl/Book/Process/Payment/Payment.json', params, 'POST');
    }
}
exports.WlBookProcessPaymentNamespace = WlBookProcessPaymentNamespace;
class WlBookProcessStoreNamespace {
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
exports.WlBookProcessStoreNamespace = WlBookProcessStoreNamespace;
class WlBookProcessInfoNamespace {
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
exports.WlBookProcessInfoNamespace = WlBookProcessInfoNamespace;
class WlBookProcessQuizNamespace {
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
exports.WlBookProcessQuizNamespace = WlBookProcessQuizNamespace;
class WlBookProcessFrequencyNamespace {
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
exports.WlBookProcessFrequencyNamespace = WlBookProcessFrequencyNamespace;
class WlBookProcessNamespace {
    constructor(_client) {
        this._client = _client;
        this.relation = new WlBookProcessRelationNamespace(this._client);
        this.guest = new WlBookProcessGuestNamespace(this._client);
        this.purchase = new WlBookProcessPurchaseNamespace(this._client);
        this.resource = new WlBookProcessResourceNamespace(this._client);
        this.payment = new WlBookProcessPaymentNamespace(this._client);
        this.store = new WlBookProcessStoreNamespace(this._client);
        this.info = new WlBookProcessInfoNamespace(this._client);
        this.quiz = new WlBookProcessQuizNamespace(this._client);
        this.frequency = new WlBookProcessFrequencyNamespace(this._client);
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
exports.WlBookProcessNamespace = WlBookProcessNamespace;
class WlBookCancelNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about whether the given user can cancel the booking and the expected consequences. */
    cancelCan(params) {
        return this._client._request('/Wl/Book/Cancel/CancelCan.json', params, 'GET');
    }
}
exports.WlBookCancelNamespace = WlBookCancelNamespace;
class WlBookNamespace {
    constructor(_client) {
        this._client = _client;
        this.process = new WlBookProcessNamespace(this._client);
        this.cancel = new WlBookCancelNamespace(this._client);
    }
}
exports.WlBookNamespace = WlBookNamespace;
class WlClassesClassListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of classes and events in the business. */
    list(params) {
        return this._client._request('/Wl/Classes/ClassList/List.json', params, 'GET');
    }
    /** Gets a list of classes which take place in the specified location. */
    bookList(params) {
        return this._client._request('/Wl/Classes/ClassList/BookList.json', params, 'GET');
    }
}
exports.WlClassesClassListNamespace = WlClassesClassListNamespace;
class WlClassesClassViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns class information including schedules, images, and booking settings for the specified business. */
    element(params) {
        return this._client._request('/Wl/Classes/ClassView/Element.json', params, 'GET');
    }
}
exports.WlClassesClassViewNamespace = WlClassesClassViewNamespace;
class WlClassesPromotionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of promotions that can be used to pay for the class / event. */
    classPromotion(params) {
        return this._client._request('/Wl/Classes/Promotion/ClassPromotion.json', params, 'GET');
    }
}
exports.WlClassesPromotionNamespace = WlClassesPromotionNamespace;
class WlClassesPeriodModifyNamespace {
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
exports.WlClassesPeriodModifyNamespace = WlClassesPeriodModifyNamespace;
class WlClassesPeriodNamespace {
    constructor(_client) {
        this._client = _client;
        this.modify = new WlClassesPeriodModifyNamespace(this._client);
    }
}
exports.WlClassesPeriodNamespace = WlClassesPeriodNamespace;
class WlClassesNamespace {
    constructor(_client) {
        this._client = _client;
        this.classList = new WlClassesClassListNamespace(this._client);
        this.classView = new WlClassesClassViewNamespace(this._client);
        this.promotion = new WlClassesPromotionNamespace(this._client);
        this.period = new WlClassesPeriodNamespace(this._client);
    }
}
exports.WlClassesNamespace = WlClassesNamespace;
class WlAppointmentEditNamespace {
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
exports.WlAppointmentEditNamespace = WlAppointmentEditNamespace;
class WlAppointmentInfoNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets information about appointment. */
    info(params) {
        return this._client._request('/Wl/Appointment/Info/Info.json', params, 'GET');
    }
}
exports.WlAppointmentInfoNamespace = WlAppointmentInfoNamespace;
class WlAppointmentRecentNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets list of client's last booked services. */
    recentService(params) {
        return this._client._request('/Wl/Appointment/Recent/RecentService.json', params, 'GET');
    }
}
exports.WlAppointmentRecentNamespace = WlAppointmentRecentNamespace;
class WlAppointmentBookServiceNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves a list of information about service categories on the appointment booking page. */
    category(params) {
        return this._client._request('/Wl/Appointment/Book/Service/Category.json', params, 'GET');
    }
    /** Retrieves information about services in the current service category. */
    serviceList52(params) {
        return this._client._request('/Wl/Appointment/Book/Service/ServiceList52.json', params, 'GET');
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
exports.WlAppointmentBookServiceNamespace = WlAppointmentBookServiceNamespace;
class WlAppointmentBookScheduleNamespace {
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
exports.WlAppointmentBookScheduleNamespace = WlAppointmentBookScheduleNamespace;
class WlAppointmentBookFinishNamespace {
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
exports.WlAppointmentBookFinishNamespace = WlAppointmentBookFinishNamespace;
class WlAppointmentBookPaymentNamespace {
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
    /** Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals. */
    paymentPostGet(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/PaymentPost.json', params, 'GET');
    }
    /** Allows to pay an appointment or appointment purchase option for the client. */
    paymentPostPost(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/PaymentPost.json', params, 'POST');
    }
    /** Calculates pricing information for a batch of appointment bookings, including taxes, discounts, surcharges, and per-provider totals. */
    paymentMultipleGet(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/PaymentMultiple.json', params, 'GET');
    }
    /** Allows to pay an appointment or appointment purchase option for the client. */
    paymentMultiplePost(params) {
        return this._client._request('/Wl/Appointment/Book/Payment/PaymentMultiple.json', params, 'POST');
    }
}
exports.WlAppointmentBookPaymentNamespace = WlAppointmentBookPaymentNamespace;
class WlAppointmentBookStaffNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves an information about staff members for the current service. */
    list(params) {
        return this._client._request('/Wl/Appointment/Book/Staff/List.json', params, 'GET');
    }
}
exports.WlAppointmentBookStaffNamespace = WlAppointmentBookStaffNamespace;
class WlAppointmentBookPurchaseNamespace {
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
exports.WlAppointmentBookPurchaseNamespace = WlAppointmentBookPurchaseNamespace;
class WlAppointmentBookQuestionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves questions for the current service. */
    question(params) {
        return this._client._request('/Wl/Appointment/Book/Question/Question.json', params, 'GET');
    }
}
exports.WlAppointmentBookQuestionNamespace = WlAppointmentBookQuestionNamespace;
class WlAppointmentBookProductNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves list of available service add-ons. */
    product(params) {
        return this._client._request('/Wl/Appointment/Book/Product/Product.json', params, 'GET');
    }
    /** Retrieves list of available service add-ons. */
    product62(params) {
        return this._client._request('/Wl/Appointment/Book/Product/Product62.json', params, 'GET');
    }
}
exports.WlAppointmentBookProductNamespace = WlAppointmentBookProductNamespace;
class WlAppointmentBookAssetServiceNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves assets required for a service booking at the given date and time, including availability and busy status. */
    service(params) {
        return this._client._request('/Wl/Appointment/Book/Asset/Service/Service.json', params, 'GET');
    }
}
exports.WlAppointmentBookAssetServiceNamespace = WlAppointmentBookAssetServiceNamespace;
class WlAppointmentBookAssetNamespace {
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
exports.WlAppointmentBookAssetNamespace = WlAppointmentBookAssetNamespace;
class WlAppointmentBookNamespace {
    constructor(_client) {
        this._client = _client;
        this.service = new WlAppointmentBookServiceNamespace(this._client);
        this.schedule = new WlAppointmentBookScheduleNamespace(this._client);
        this.finish = new WlAppointmentBookFinishNamespace(this._client);
        this.payment = new WlAppointmentBookPaymentNamespace(this._client);
        this.staff = new WlAppointmentBookStaffNamespace(this._client);
        this.purchase = new WlAppointmentBookPurchaseNamespace(this._client);
        this.question = new WlAppointmentBookQuestionNamespace(this._client);
        this.product = new WlAppointmentBookProductNamespace(this._client);
        this.asset = new WlAppointmentBookAssetNamespace(this._client);
    }
}
exports.WlAppointmentBookNamespace = WlAppointmentBookNamespace;
class WlAppointmentNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlAppointmentEditNamespace(this._client);
        this.info = new WlAppointmentInfoNamespace(this._client);
        this.recent = new WlAppointmentRecentNamespace(this._client);
        this.book = new WlAppointmentBookNamespace(this._client);
    }
}
exports.WlAppointmentNamespace = WlAppointmentNamespace;
class WlPurchaseReceiptNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets purchase information. */
    purchaseReceipt(params) {
        return this._client._request('/Wl/Purchase/Receipt/PurchaseReceipt.json', params, 'GET');
    }
}
exports.WlPurchaseReceiptNamespace = WlPurchaseReceiptNamespace;
class WlPurchaseMailNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Sends mail message with list of purchased items for specified purchase. */
    purchaseMail(params) {
        return this._client._request('/Wl/Purchase/Mail/PurchaseMail.json', params, 'POST');
    }
}
exports.WlPurchaseMailNamespace = WlPurchaseMailNamespace;
class WlPurchaseShareNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Records the purchase share action and returns the social network sharing URL. */
    purchaseShare(params) {
        return this._client._request('/Wl/Purchase/Share/PurchaseShare.json', params, 'POST');
    }
}
exports.WlPurchaseShareNamespace = WlPurchaseShareNamespace;
class WlPurchaseNamespace {
    constructor(_client) {
        this._client = _client;
        this.receipt = new WlPurchaseReceiptNamespace(this._client);
        this.mail = new WlPurchaseMailNamespace(this._client);
        this.share = new WlPurchaseShareNamespace(this._client);
    }
}
exports.WlPurchaseNamespace = WlPurchaseNamespace;
class WlServiceServiceListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of appointment type in the business. */
    list(params) {
        return this._client._request('/Wl/Service/ServiceList/List.json', params, 'GET');
    }
}
exports.WlServiceServiceListNamespace = WlServiceServiceListNamespace;
class WlServiceNamespace {
    constructor(_client) {
        this._client = _client;
        this.serviceList = new WlServiceServiceListNamespace(this._client);
    }
}
exports.WlServiceNamespace = WlServiceNamespace;
class WlGoogleLoginNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Performs Google authorization within the context of the specified business. */
    googleLogin(params) {
        return this._client._request('/Wl/Google/Login/GoogleLogin.json', params, 'POST');
    }
}
exports.WlGoogleLoginNamespace = WlGoogleLoginNamespace;
class WlGoogleNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new WlGoogleLoginNamespace(this._client);
    }
}
exports.WlGoogleNamespace = WlGoogleNamespace;
class WlResourceLayoutNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about the specified asset layout, including assets and custom shapes. */
    layout(params) {
        return this._client._request('/Wl/Resource/Layout/Layout.json', params, 'GET');
    }
}
exports.WlResourceLayoutNamespace = WlResourceLayoutNamespace;
class WlResourceResourceListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns assets list in the business. */
    list(params) {
        return this._client._request('/Wl/Resource/ResourceList/List.json', params, 'GET');
    }
}
exports.WlResourceResourceListNamespace = WlResourceResourceListNamespace;
class WlResourceNamespace {
    constructor(_client) {
        this._client = _client;
        this.layout = new WlResourceLayoutNamespace(this._client);
        this.resourceList = new WlResourceResourceListNamespace(this._client);
    }
}
exports.WlResourceNamespace = WlResourceNamespace;
class WlSmsPhoneNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets the phone number associated with a specific business. */
    businessPhone(params) {
        return this._client._request('/Wl/Sms/Phone/BusinessPhone.json', params, 'GET');
    }
}
exports.WlSmsPhoneNamespace = WlSmsPhoneNamespace;
class WlSmsNamespace {
    constructor(_client) {
        this._client = _client;
        this.phone = new WlSmsPhoneNamespace(this._client);
    }
}
exports.WlSmsNamespace = WlSmsNamespace;
class WlPassportLoginEnterNamespace {
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
exports.WlPassportLoginEnterNamespace = WlPassportLoginEnterNamespace;
class WlPassportLoginRegisterNamespace {
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
exports.WlPassportLoginRegisterNamespace = WlPassportLoginRegisterNamespace;
class WlPassportLoginNamespace {
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
exports.WlPassportLoginNamespace = WlPassportLoginNamespace;
class WlPassportNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new WlPassportLoginNamespace(this._client);
    }
}
exports.WlPassportNamespace = WlPassportNamespace;
class WlCatalogPaymentNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Allows to pay items for the client. */
    payment(params) {
        return this._client._request('/Wl/Catalog/Payment/Payment.json', params, 'POST');
    }
}
exports.WlCatalogPaymentNamespace = WlCatalogPaymentNamespace;
class WlCatalogCatalogListNamespace {
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
exports.WlCatalogCatalogListNamespace = WlCatalogCatalogListNamespace;
class WlCatalogCartNamespace {
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
exports.WlCatalogCartNamespace = WlCatalogCartNamespace;
class WlCatalogStaffAppCatalogCartNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Calculates amount of cart. */
    catalogCart(params) {
        return this._client._request('/Wl/Catalog/StaffApp/CatalogCart/CatalogCart.json', params, 'GET');
    }
}
exports.WlCatalogStaffAppCatalogCartNamespace = WlCatalogStaffAppCatalogCartNamespace;
class WlCatalogStaffAppCatalogListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns all sale items available in the business for staff, optionally filtered by location and visit. */
    catalogList(params) {
        return this._client._request('/Wl/Catalog/StaffApp/CatalogList/CatalogList.json', params, 'GET');
    }
}
exports.WlCatalogStaffAppCatalogListNamespace = WlCatalogStaffAppCatalogListNamespace;
class WlCatalogStaffAppCatalogViewNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Calculates price information about sale item. */
    catalogView(params) {
        return this._client._request('/Wl/Catalog/StaffApp/CatalogView/CatalogView.json', params, 'GET');
    }
}
exports.WlCatalogStaffAppCatalogViewNamespace = WlCatalogStaffAppCatalogViewNamespace;
class WlCatalogStaffAppNamespace {
    constructor(_client) {
        this._client = _client;
        this.catalogCart = new WlCatalogStaffAppCatalogCartNamespace(this._client);
        this.catalogList = new WlCatalogStaffAppCatalogListNamespace(this._client);
        this.catalogView = new WlCatalogStaffAppCatalogViewNamespace(this._client);
    }
}
exports.WlCatalogStaffAppNamespace = WlCatalogStaffAppNamespace;
class WlCatalogNamespace {
    constructor(_client) {
        this._client = _client;
        this.payment = new WlCatalogPaymentNamespace(this._client);
        this.catalogList = new WlCatalogCatalogListNamespace(this._client);
        this.cart = new WlCatalogCartNamespace(this._client);
        this.staffApp = new WlCatalogStaffAppNamespace(this._client);
    }
}
exports.WlCatalogNamespace = WlCatalogNamespace;
class WlRewardScoreCurrentNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves information about current score in wellnessliving points. */
    current(params) {
        return this._client._request('/Wl/Reward/Score/Current/Current.json', params, 'GET');
    }
}
exports.WlRewardScoreCurrentNamespace = WlRewardScoreCurrentNamespace;
class WlRewardScoreNamespace {
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
exports.WlRewardScoreNamespace = WlRewardScoreNamespace;
class WlRewardActionCategoryListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves all reward action categories for business specified in `k_business`. */
    categoryList(params) {
        return this._client._request('/Wl/Reward/Action/CategoryList/CategoryList.json', params, 'GET');
    }
}
exports.WlRewardActionCategoryListNamespace = WlRewardActionCategoryListNamespace;
class WlRewardActionNamespace {
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
exports.WlRewardActionNamespace = WlRewardActionNamespace;
class WlRewardBoardBoardListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Retrieves all reward boards for business specified in `k_business`. */
    list(params) {
        return this._client._request('/Wl/Reward/Board/BoardList/List.json', params, 'GET');
    }
}
exports.WlRewardBoardBoardListNamespace = WlRewardBoardBoardListNamespace;
class WlRewardBoardNamespace {
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
exports.WlRewardBoardNamespace = WlRewardBoardNamespace;
class WlRewardPrizeNamespace {
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
exports.WlRewardPrizeNamespace = WlRewardPrizeNamespace;
class WlRewardNamespace {
    constructor(_client) {
        this._client = _client;
        this.score = new WlRewardScoreNamespace(this._client);
        this.action = new WlRewardActionNamespace(this._client);
        this.board = new WlRewardBoardNamespace(this._client);
        this.prize = new WlRewardPrizeNamespace(this._client);
    }
}
exports.WlRewardNamespace = WlRewardNamespace;
class WlInsuranceCatalogNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns a list of active insurance programs for the specified promotion. */
    programList(params) {
        return this._client._request('/Wl/Insurance/Catalog/ProgramList.json', params, 'GET');
    }
}
exports.WlInsuranceCatalogNamespace = WlInsuranceCatalogNamespace;
class WlInsuranceEnrollmentFieldNamespace {
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
exports.WlInsuranceEnrollmentFieldNamespace = WlInsuranceEnrollmentFieldNamespace;
class WlInsuranceEnrollmentNamespace {
    constructor(_client) {
        this._client = _client;
        this.field = new WlInsuranceEnrollmentFieldNamespace(this._client);
    }
}
exports.WlInsuranceEnrollmentNamespace = WlInsuranceEnrollmentNamespace;
class WlInsuranceNamespace {
    constructor(_client) {
        this._client = _client;
        this.catalog = new WlInsuranceCatalogNamespace(this._client);
        this.enrollment = new WlInsuranceEnrollmentNamespace(this._client);
    }
}
exports.WlInsuranceNamespace = WlInsuranceNamespace;
class WlUserReferrerNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Searches for a referrer by the given search string and returns their profile information. */
    referrer(params) {
        return this._client._request('/Wl/User/Referrer/Referrer.json', params, 'GET');
    }
    /** Returns referral count, total referral points, and shareable referral link for the given user. */
    referralInfo(params) {
        return this._client._request('/Wl/User/Referrer/ReferralInfo.json', params, 'GET');
    }
}
exports.WlUserReferrerNamespace = WlUserReferrerNamespace;
class WlUserInfoNamespace {
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
exports.WlUserInfoNamespace = WlUserInfoNamespace;
class WlUserNamespace {
    constructor(_client) {
        this._client = _client;
        this.referrer = new WlUserReferrerNamespace(this._client);
        this.info = new WlUserInfoNamespace(this._client);
    }
}
exports.WlUserNamespace = WlUserNamespace;
class WlIntegrationAutymateNamespace {
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
exports.WlIntegrationAutymateNamespace = WlIntegrationAutymateNamespace;
class WlIntegrationSamlNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets status of the user in business for given list of identifiers. */
    samlUserDeactivation(params) {
        return this._client._request('/Wl/Integration/Saml/SamlUserDeactivation.json', params, 'POST');
    }
}
exports.WlIntegrationSamlNamespace = WlIntegrationSamlNamespace;
class WlIntegrationCurvesNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns country, region, state, city and location lists of the franchisor. This method returns all the information from the parent `get()` and the Curves territory ID. */
    curvesFranchiseLocation(params) {
        return this._client._request('/Wl/Integration/Curves/CurvesFranchiseLocation.json', params, 'GET');
    }
}
exports.WlIntegrationCurvesNamespace = WlIntegrationCurvesNamespace;
class WlIntegrationDragonFlyNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Checks if the user can physically access the location. */
    access(params) {
        return this._client._request('/Wl/Integration/DragonFly/Access.json', params, 'GET');
    }
}
exports.WlIntegrationDragonFlyNamespace = WlIntegrationDragonFlyNamespace;
class WlIntegrationNamespace {
    constructor(_client) {
        this._client = _client;
        this.autymate = new WlIntegrationAutymateNamespace(this._client);
        this.saml = new WlIntegrationSamlNamespace(this._client);
        this.curves = new WlIntegrationCurvesNamespace(this._client);
        this.dragonFly = new WlIntegrationDragonFlyNamespace(this._client);
    }
}
exports.WlIntegrationNamespace = WlIntegrationNamespace;
class WlAiAgentLinkNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Sends an AI agent link action email (booking or purchase) to the specified user. */
    sendMail(params) {
        return this._client._request('/Wl/AiAgent/Link/SendMail.json', params, 'POST');
    }
}
exports.WlAiAgentLinkNamespace = WlAiAgentLinkNamespace;
class WlAiAgentNamespace {
    constructor(_client) {
        this._client = _client;
        this.link = new WlAiAgentLinkNamespace(this._client);
    }
}
exports.WlAiAgentNamespace = WlAiAgentNamespace;
class WlMicrosoftLoginNamespace {
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
exports.WlMicrosoftLoginNamespace = WlMicrosoftLoginNamespace;
class WlMicrosoftNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new WlMicrosoftLoginNamespace(this._client);
    }
}
exports.WlMicrosoftNamespace = WlMicrosoftNamespace;
class WlShopCategoryNamespace {
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
exports.WlShopCategoryNamespace = WlShopCategoryNamespace;
class WlShopProductOptionInventoryCountNamespace {
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
exports.WlShopProductOptionInventoryCountNamespace = WlShopProductOptionInventoryCountNamespace;
class WlShopProductOptionInventoryNamespace {
    constructor(_client) {
        this._client = _client;
        this.count = new WlShopProductOptionInventoryCountNamespace(this._client);
    }
}
exports.WlShopProductOptionInventoryNamespace = WlShopProductOptionInventoryNamespace;
class WlShopProductOptionNamespace {
    constructor(_client) {
        this._client = _client;
        this.inventory = new WlShopProductOptionInventoryNamespace(this._client);
    }
}
exports.WlShopProductOptionNamespace = WlShopProductOptionNamespace;
class WlShopProductNamespace {
    constructor(_client) {
        this._client = _client;
        this.option = new WlShopProductOptionNamespace(this._client);
    }
}
exports.WlShopProductNamespace = WlShopProductNamespace;
class WlShopNamespace {
    constructor(_client) {
        this._client = _client;
        this.category = new WlShopCategoryNamespace(this._client);
        this.product = new WlShopProductNamespace(this._client);
    }
}
exports.WlShopNamespace = WlShopNamespace;
class WlCouponCouponListNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets list of coupons. */
    list(params) {
        return this._client._request('/Wl/Coupon/CouponList/List.json', params, 'GET');
    }
}
exports.WlCouponCouponListNamespace = WlCouponCouponListNamespace;
class WlCouponNamespace {
    constructor(_client) {
        this._client = _client;
        this.couponList = new WlCouponCouponListNamespace(this._client);
    }
}
exports.WlCouponNamespace = WlCouponNamespace;
class WlDiscountCodeEditNamespace {
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
exports.WlDiscountCodeEditNamespace = WlDiscountCodeEditNamespace;
class WlDiscountCodeNamespace {
    constructor(_client) {
        this._client = _client;
        this.edit = new WlDiscountCodeEditNamespace(this._client);
    }
    /** Returns discount codes of the specified business. */
    discountCode(params) {
        return this._client._request('/Wl/Discount/Code/DiscountCode.json', params, 'GET');
    }
}
exports.WlDiscountCodeNamespace = WlDiscountCodeNamespace;
class WlDiscountNamespace {
    constructor(_client) {
        this._client = _client;
        this.code = new WlDiscountCodeNamespace(this._client);
    }
}
exports.WlDiscountNamespace = WlDiscountNamespace;
class WlFamilyRelationNamespace {
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
exports.WlFamilyRelationNamespace = WlFamilyRelationNamespace;
class WlFamilyNamespace {
    constructor(_client) {
        this._client = _client;
        this.relation = new WlFamilyRelationNamespace(this._client);
    }
}
exports.WlFamilyNamespace = WlFamilyNamespace;
class WlSearchTagNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of search tags. This is public information and method does not require any level of privileges. */
    searchTagList(params) {
        return this._client._request('/Wl/Search/Tag/SearchTagList.json', params, 'GET');
    }
}
exports.WlSearchTagNamespace = WlSearchTagNamespace;
class WlSearchNamespace {
    constructor(_client) {
        this._client = _client;
        this.tag = new WlSearchTagNamespace(this._client);
    }
}
exports.WlSearchNamespace = WlSearchNamespace;
class WlGymVisitNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Records a gym visit for the specified client at the given date and time. */
    visitAdd(params) {
        return this._client._request('/Wl/Gym/Visit/VisitAdd.json', params, 'POST');
    }
}
exports.WlGymVisitNamespace = WlGymVisitNamespace;
class WlGymNamespace {
    constructor(_client) {
        this._client = _client;
        this.visit = new WlGymVisitNamespace(this._client);
    }
}
exports.WlGymNamespace = WlGymNamespace;
class WlSocialShareNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Saves the share post data and returns the secret key for the shared object. */
    socialShare(params) {
        return this._client._request('/Wl/Social/Share/SocialShare.json', params, 'POST');
    }
}
exports.WlSocialShareNamespace = WlSocialShareNamespace;
class WlSocialNamespace {
    constructor(_client) {
        this._client = _client;
        this.share = new WlSocialShareNamespace(this._client);
    }
}
exports.WlSocialNamespace = WlSocialNamespace;
class WlFacebookLoginNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Performs Facebook authorization within the context of the specified business. */
    facebookLogin(params) {
        return this._client._request('/Wl/Facebook/Login/FacebookLogin.json', params, 'POST');
    }
}
exports.WlFacebookLoginNamespace = WlFacebookLoginNamespace;
class WlFacebookNamespace {
    constructor(_client) {
        this._client = _client;
        this.login = new WlFacebookLoginNamespace(this._client);
    }
}
exports.WlFacebookNamespace = WlFacebookNamespace;
class WlNamespace {
    constructor(_client) {
        this._client = _client;
        this.lead = new WlLeadNamespace(this._client);
        this.report = new WlReportNamespace(this._client);
        this.business = new WlBusinessNamespace(this._client);
        this.mail = new WlMailNamespace(this._client);
        this.login = new WlLoginNamespace(this._client);
        this.schedule = new WlScheduleNamespace(this._client);
        this.event = new WlEventNamespace(this._client);
        this.profile = new WlProfileNamespace(this._client);
        this.staff = new WlStaffNamespace(this._client);
        this.visit = new WlVisitNamespace(this._client);
        this.video = new WlVideoNamespace(this._client);
        this.location = new WlLocationNamespace(this._client);
        this.announcement = new WlAnnouncementNamespace(this._client);
        this.collector = new WlCollectorNamespace(this._client);
        this.holiday = new WlHolidayNamespace(this._client);
        this.promotion = new WlPromotionNamespace(this._client);
        this.quiz = new WlQuizNamespace(this._client);
        this.fitbuilder = new WlFitbuilderNamespace(this._client);
        this.tag = new WlTagNamespace(this._client);
        this.skin = new WlSkinNamespace(this._client);
        this.tax = new WlTaxNamespace(this._client);
        this.review = new WlReviewNamespace(this._client);
        this.rank = new WlRankNamespace(this._client);
        this.member = new WlMemberNamespace(this._client);
        this.reception = new WlReceptionNamespace(this._client);
        this.notification = new WlNotificationNamespace(this._client);
        this.book = new WlBookNamespace(this._client);
        this.classes = new WlClassesNamespace(this._client);
        this.appointment = new WlAppointmentNamespace(this._client);
        this.purchase = new WlPurchaseNamespace(this._client);
        this.service = new WlServiceNamespace(this._client);
        this.google = new WlGoogleNamespace(this._client);
        this.resource = new WlResourceNamespace(this._client);
        this.sms = new WlSmsNamespace(this._client);
        this.passport = new WlPassportNamespace(this._client);
        this.catalog = new WlCatalogNamespace(this._client);
        this.reward = new WlRewardNamespace(this._client);
        this.insurance = new WlInsuranceNamespace(this._client);
        this.user = new WlUserNamespace(this._client);
        this.integration = new WlIntegrationNamespace(this._client);
        this.aiAgent = new WlAiAgentNamespace(this._client);
        this.microsoft = new WlMicrosoftNamespace(this._client);
        this.shop = new WlShopNamespace(this._client);
        this.coupon = new WlCouponNamespace(this._client);
        this.discount = new WlDiscountNamespace(this._client);
        this.family = new WlFamilyNamespace(this._client);
        this.search = new WlSearchNamespace(this._client);
        this.gym = new WlGymNamespace(this._client);
        this.social = new WlSocialNamespace(this._client);
        this.facebook = new WlFacebookNamespace(this._client);
    }
}
exports.WlNamespace = WlNamespace;
class ThothExplorerSearchClassSessionNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Gets list of class sessions based on search criteria. */
    classSessionSearch(params) {
        return this._client._request('/Thoth/ExplorerSearch/ClassSession/ClassSessionSearch.json', params, 'GET');
    }
}
exports.ThothExplorerSearchClassSessionNamespace = ThothExplorerSearchClassSessionNamespace;
class ThothExplorerSearchNamespace {
    constructor(_client) {
        this._client = _client;
        this.classSession = new ThothExplorerSearchClassSessionNamespace(this._client);
    }
}
exports.ThothExplorerSearchNamespace = ThothExplorerSearchNamespace;
class ThothReportCoreGeneratorNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns contents of a report as a table. */
    query(params) {
        return this._client._request('/Thoth/ReportCore/Generator/Query.json', params, 'POST');
    }
}
exports.ThothReportCoreGeneratorNamespace = ThothReportCoreGeneratorNamespace;
class ThothReportCoreNamespace {
    constructor(_client) {
        this._client = _client;
        this.generator = new ThothReportCoreGeneratorNamespace(this._client);
    }
}
exports.ThothReportCoreNamespace = ThothReportCoreNamespace;
class ThothWlPayFormNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about payment environment. */
    /** @deprecated */
    environment(params) {
        return this._client._request('/Thoth/WlPay/Form/Environment.json', params, 'GET');
    }
    /** Returns information about payment environment. */
    environmentUser(params) {
        return this._client._request('/Thoth/WlPay/Form/EnvironmentUser.json', params, 'GET');
    }
}
exports.ThothWlPayFormNamespace = ThothWlPayFormNamespace;
class ThothWlPayAccountChargeNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Refills the user account balance by the specified payment amount or adjusts it manually. */
    charge(params) {
        return this._client._request('/Thoth/WlPay/Account/Charge/Charge.json', params, 'POST');
    }
}
exports.ThothWlPayAccountChargeNamespace = ThothWlPayAccountChargeNamespace;
class ThothWlPayAccountNamespace {
    constructor(_client) {
        this._client = _client;
        this.charge = new ThothWlPayAccountChargeNamespace(this._client);
    }
    /** Retrieves information about accounts of given user in given business. */
    account(params) {
        return this._client._request('/Thoth/WlPay/Account/Account.json', params, 'GET');
    }
}
exports.ThothWlPayAccountNamespace = ThothWlPayAccountNamespace;
class ThothWlPayOwnerNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns information about payment owner. */
    owner(params) {
        return this._client._request('/Thoth/WlPay/Owner/Owner.json', params, 'GET');
    }
}
exports.ThothWlPayOwnerNamespace = ThothWlPayOwnerNamespace;
class ThothWlPayMethodNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns list of active payment methods data. */
    list(params) {
        return this._client._request('/Thoth/WlPay/Method/List.json', params, 'GET');
    }
}
exports.ThothWlPayMethodNamespace = ThothWlPayMethodNamespace;
class ThothWlPayAddressNamespace {
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
exports.ThothWlPayAddressNamespace = ThothWlPayAddressNamespace;
class ThothWlPayBankCardAddNamespace {
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
exports.ThothWlPayBankCardAddNamespace = ThothWlPayBankCardAddNamespace;
class ThothWlPayBankCardNamespace {
    constructor(_client) {
        this._client = _client;
        this.add = new ThothWlPayBankCardAddNamespace(this._client);
    }
    /** Retrieves information about user's bank cards. */
    list(params) {
        return this._client._request('/Thoth/WlPay/Bank/Card/List.json', params, 'GET');
    }
}
exports.ThothWlPayBankCardNamespace = ThothWlPayBankCardNamespace;
class ThothWlPayBankNamespace {
    constructor(_client) {
        this._client = _client;
        this.card = new ThothWlPayBankCardNamespace(this._client);
    }
}
exports.ThothWlPayBankNamespace = ThothWlPayBankNamespace;
class ThothWlPayTransactionReportNamespace {
    constructor(_client) {
        this._client = _client;
    }
    /** Returns All Transactions Report data for the specified date range. */
    transactionAllPayment(params) {
        return this._client._request('/Thoth/WlPay/Transaction/Report/TransactionAllPayment.json', params, 'GET');
    }
}
exports.ThothWlPayTransactionReportNamespace = ThothWlPayTransactionReportNamespace;
class ThothWlPayTransactionNamespace {
    constructor(_client) {
        this._client = _client;
        this.report = new ThothWlPayTransactionReportNamespace(this._client);
    }
}
exports.ThothWlPayTransactionNamespace = ThothWlPayTransactionNamespace;
class ThothWlPayNamespace {
    constructor(_client) {
        this._client = _client;
        this.form = new ThothWlPayFormNamespace(this._client);
        this.account = new ThothWlPayAccountNamespace(this._client);
        this.owner = new ThothWlPayOwnerNamespace(this._client);
        this.method = new ThothWlPayMethodNamespace(this._client);
        this.address = new ThothWlPayAddressNamespace(this._client);
        this.bank = new ThothWlPayBankNamespace(this._client);
        this.transaction = new ThothWlPayTransactionNamespace(this._client);
    }
}
exports.ThothWlPayNamespace = ThothWlPayNamespace;
class ThothNamespace {
    constructor(_client) {
        this._client = _client;
        this.explorerSearch = new ThothExplorerSearchNamespace(this._client);
        this.reportCore = new ThothReportCoreNamespace(this._client);
        this.wlPay = new ThothWlPayNamespace(this._client);
    }
}
exports.ThothNamespace = ThothNamespace;
// --- Client ---
/** WellnessLiving API client. */
class WlClient {
    constructor(options) {
        if (options == null || typeof options !== 'object') {
            throw new TypeError('WlSdk: options must be a plain object');
        }
        this._token = (options.token != null) ? options.token : null;
        const base = (options.baseUrl != null) ? options.baseUrl : 'https://staging.wellnessliving.com';
        this._baseUrl = (base.charAt(base.length - 1) === '/') ? base.slice(0, -1) : base;
        this._timeout = (options.timeout != null && options.timeout > 0) ? options.timeout : 30000;
        this.core = new CoreNamespace(this);
        this.social = new SocialNamespace(this);
        this.wl = new WlNamespace(this);
        this.thoth = new ThothNamespace(this);
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
exports.WlClient = WlClient;
exports.default = WlClient;
