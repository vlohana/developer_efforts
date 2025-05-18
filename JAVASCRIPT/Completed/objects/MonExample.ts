export enum CustomPremiumTrigger {
    Resize = "resize",
    Brands = "brands",
    Libraries = "libraries",
    CreateTemplate = "create-template",
    PremiumBackground = "premium-background",
    PremiumDesignAsset = "premium-design-asset",
    PremiumFont = "premium-font",
    PremiumTemplate = "premium-template",
    PremiumStock = "premium-stock-photo",
    PremiumStockVideo = "premium-stock-video",
    PremiumStockAudio = "premium-stock-audio",
    PremiumTextLockup = "premium-text-lockup",
    PremiumContentUnknown = "premium-content-unknown",
    ContentScheduler = "content-scheduler",
    MultiChannelScheduling = "multi-channel-scheduling",
    HomeNavUpgradeCTA = "home-nav-upgrade-cta",
    EditorNavUpgradeCTA = "editor-nav-upgrade-cta",
    Marketing = "sem-paid-marketing",
    Erase = "erase",
    HomeReturnVisit = "home-return-first-visit-after-24-hours",
    EditorReturnVisit = "editor-return-first-visit-after-24-hours",
    StockLimitReached = "stock-limit-reached",
    RemoveVideoBackground = "remove-background-video",
    VideoExport4k = "4K-video-export",
    VideoResolutionChangeExport = "video-resolution-change-export",
    UploadFont = "upload-font",
    AdvancedAnimation = "advanced-animation",
    TextToImage = "text-to-image",
    TextToTemplate = "text-to-template",
    GenerativeFill = "generative-fill",
    GenerativeCaption = "generative-caption",
    InsertObject = "insert-object-ai",
    RemoveObject = "remove-object-ai",
    Grid = "grid",
    Text = "text",
    TeamsFeature = "teams-feature",
    WelcomeModal = "welcome-modal",
    UKGoBigReverseTrialBegin = "uk-go-big-beginning-of-complimentary-premium",
    MobileSettings = "mobile-settings",
    TemplateLocking = "template-locking",
    CopywriterAssistant = "copywriter-assistant",
    PostExportNba = "post-export-nba",
    HomeReturnHIU = "home-return-hiu",
    EditorReturnHIU = "editor-return-hiu",
    TeamsPlanMerch = "teams-plan-merch",
    MobileMenu = "mobile-menu",
    ColoringPages = "coloring-pages",
    SearchWithGenerate = "search-with-generate",
    CreateCalendar = "create-calendar",
    DeleteCalendar = "delete-calendar",
    EditSharedCalendar = "edit-shared-calendar",
    BulkCreate = "bulk-create"
}


export enum CustomUpsellType {
    Tooltip = "tooltip",
    Toast = "toast",
    Modal = "modal",
    Banner = "banner",
    Watermark = "watermark",
    Export = "export",
    Direct = "direct",
    Button = "button",
    Ribbon = "ribbon",
    Callout = "callout",
    HoverTooltip = "hover-tooltip",
    AddOnUpgrade = "add-on-upgrade"
}


export enum CustomUpsellId {
    Generate = "generate",
    Upgrade = "upgrade-to-generate",
    LetsGo = "lets-go",
    PremiumPreviewIntro = "premium-preview-intro",
    GenerateMoreResult = "generate-more-results",
    TeamsPlanMerchHomePage = "teams-plan-merch-homepage",
    TeamsPlanMerchEditor = "teams-plan-merch-editor",
    TeamsPlanMerchShareMenu = "teams-plan-merch-sharemenu"
}


export enum DownloadVideoResolution {
    custom = "custom",
    resolution720 = "720",
    resolution1080 = "1080",
    resolution4k = "4K",
    NA = "NA"
}

export enum Plans {
    IndividualPremium = "individual-premium",
    TeamsPremium = "teams-premium",
    TeamsPremiumTrial = "teams-premium-trial",
    TeamsPremiumD2P = "teams-premium-d2p",
    IndividualPremiumTrial = "individual-premium-trial",
    IndividualPremiumD2P = "individual-premium-d2p"
}


export type CustomTriggerType = CustomPremiumTrigger | CustomPremiumTrigger[] | null;


export enum AuthAnalyticsPropertyNames {
    CUSTOM_PREMIUM_TRIGGER = "custom.premium.trigger",
    CUSTOM_UPSELL_TYPE = "custom.upsell.type",
    CUSTOM_UPSELL_ID = "custom.upsell.id",
    CUSTOM_UI_LOCATION = "custom.ui.location",
    CUSTOM_GEN_AI_USED_CREDITS = "custom.gen_ai.used_credits",
    CUSTOM_GEN_AI_AVAILABLE_CREDITS = "custom.gen_ai.available_credits",
    CUSTOM_ALERT_NUM_TIMES_SHOWN = "custom.alert.num_times_shown",
    CUSTOM_HAS_PREMIUM_CONTENT = "custom.has_premium_content",
    CUSTOM_PAGE_TASK_ID = "custom.page.task_id",
    CUSTOM_PAGE_UPDATED_TASK_ID = "custom.page.updated_task_id",
    CUSTOM_PREMIUM_PAYWALL_SHOWN = "custom.premium.paywall_shown",
    CUSTOM_DOWNLOAD_FILE_FORMAT = "custom.download.file_format",
    CUSTOM_DOWNLOAD_RESOLUTION_SELECTED = "custom.download.resolution_selected",
    CUSTOM_ACCESS_BLOCK_REASON = "custom.access.block_reason",
    CUSTOM_BLOCKED_ACTION = "custom.blocked_action",
    CUSTOM_TASK_IS_WEBPAGE = "custom.task.is_webpage",
    CUSTOM_ANIMATION_EFFECT_CATEGORY = "custom.animation.effect_category",
    CUSTOM_ANIMATION_EFFECT_ID = "custom.animation.effect_id",
    CUSTOM_ANIMATION_ADJUSTMENT_MAP = "custom.animation.adjustment_map",
    CUSTOM_CHECKOUT_TRIAL_LENGTH = "custom.checkout.trial_length",
    CUSTOM_CHECKOUT_PRICE_DISPLAYED = "custom.checkout.price_displayed",
    CUSTOM_CHECKOUT_DEFAULTED_PLAN_TYPE = "custom.checkout.defaulted_plan_type",
    CUSTOM_CHECKOUT_PLAN_TYPE = "custom.checkout.billing_plan_type",
    CUSTOM_MODAL_VERSION = "custom.modal.version",
    CUSTOM_CHECKOUT_PAGE_NAME = "custom.checkout.page_name",
    CUSTOM_CHECKOUT_OFFER_ID = "custom.checkout.offer_id",
    CUSTOM_CHECKOUT_PRODUCT_ID = "custom.checkout.product_id",
    CUSTOM_CHECKOUT_ORDER_TYPE = "custom.checkout.order_type",
    CUSTOM_PLANS_MERCHANDISED = "custom.plans_merchandised"
}


export type BaseAuthAnalyticsProperties = {
    [AuthAnalyticsPropertyNames.CUSTOM_PREMIUM_TRIGGER]: CustomTriggerType;
    [AuthAnalyticsPropertyNames.CUSTOM_UPSELL_TYPE]?: CustomUpsellType | null;
    [AuthAnalyticsPropertyNames.CUSTOM_UPSELL_ID]?: CustomUpsellId | string | null;
    [AuthAnalyticsPropertyNames.CUSTOM_TASK_IS_WEBPAGE]?: "true" | "false";
    [AuthAnalyticsPropertyNames.CUSTOM_DOWNLOAD_RESOLUTION_SELECTED]?: DownloadVideoResolution | null;
    [AuthAnalyticsPropertyNames.CUSTOM_PLANS_MERCHANDISED]?: Plans | Plans[];
};


/**
 * AppliedPreset type classifies the presets based on the lifespan of the presets.
 * This provides 3 separate unique keys for presets.
 */
export enum AppliedPresetType {
    /**
     * In animations are presets that are used to bring an object/group into view at the beginning of its lifespan.
     */
    in = "anim:appliedPreset-in",

    /**
     * Persistent animations are presets that apply to an object/group for its entire lifespan.
     */
    persistent = "anim:appliedPreset-persistent",

    /**
     * Out animations are presets that are used to take an object/group out of view at the end of its lifespan.
     */
    out = "anim:appliedPreset-out",

    /**
     * Transition effects are presets that define a transition between two scenes (ie. from- and to-).
     */
    transition = "anim:transitionEffect",

    /**
     * Transition components are presets used exclusively by a transition to be applied to either scene (ie. from- or to-).
     */
    transitionComponent = "anim:transitionComponent"
}
export const SCENE_LEVEL_PRESET_TYPE = "SCENE_LEVEL_PRESET_TYPE";
export type SCENE_LEVEL_PRESET_TYPE = typeof SCENE_LEVEL_PRESET_TYPE;
/**
 * Defines the combination of applied preset type and scene level preset type to use in the UI.
 */
export type AppliedPresetUIType = AppliedPresetType | SCENE_LEVEL_PRESET_TYPE;

export const AppliedPresetTypeNameMap: Record<AppliedPresetUIType, string> = {
    [AppliedPresetType.in]: "in",
    [AppliedPresetType.persistent]: "looping",
    [AppliedPresetType.out]: "out",
    [AppliedPresetType.transition]: "transition",
    [AppliedPresetType.transitionComponent]: "transitionComponent",
    [SCENE_LEVEL_PRESET_TYPE]: "sceneLevelAnimation"
};


let analyticsContext = {
    [AuthAnalyticsPropertyNames.CUSTOM_PREMIUM_TRIGGER]: [CustomPremiumTrigger.AdvancedAnimation],
    [AuthAnalyticsPropertyNames.CUSTOM_UPSELL_ID]: null,
    [AuthAnalyticsPropertyNames.CUSTOM_UPSELL_TYPE]: null,
    [AuthAnalyticsPropertyNames.CUSTOM_ANIMATION_EFFECT_CATEGORY]: "in",
};

console.log(analyticsContext);