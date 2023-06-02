// 定义内容
export default {
  codeMsg: {
    c200: 'Applications exist in the namespace',
    c300: 'Application already exists',
    c301: 'Job or delay exist in application',
    c400: 'Failed to parse time expression',
    c401: 'Instance exist in the job',
    c500: 'Topic already exists',
    c501: 'Instance exist in the delay',
  },
  commonMsg: {
    emptyInput: "Please enter",
    emptySelect: 'Select',
    all: 'All',
    tip: 'TIP',
    deleteSuccess: 'Delete success!',
    updateSuccess: 'Update success!',
    stopSuccess: 'Kill success!',
    operation: 'Operation',
    stopFail: 'Task instance is not running',
  },
  dateMsg: {
    rangeMsg: 'Date Time',
    startDate: 'Start Date',
    endDate: 'End Date',
    oneMinute: 'Last 1 Minute',
    fiveMinute: 'Last 5 minute',
    fifteenMinute: 'Last 15 minute',
    oneHours: 'Last 1 Hours',
    today: 'Today',
    oneDay: 'Last 1 day',
    oneWeek: 'Last 1 week',
  },
  commonBtn: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    query: "Query",
    reset: "Reset",
    log: 'Log',
    view: "View",
    update: "Update",
    copy: 'Copy',
    more: 'More',
    delete: "Delete",
    add: "Add",
    online: "on-line",
    offline: "off-line",
    stop: 'Kill',
    instance: 'Instance',
  },
  instanceStatus: {
    waiting: 'Waiting',
    running: 'Running',
    success: 'success',
    fail: 'Fail',
    stop: 'Stop',
    cancel: 'Cancel',
  },
  taskStatus: {
    init: 'Init',
    failover: 'Failover',
    running: 'Running',
    success: 'Success',
    failed: 'Failed',
    stop: 'Stop',
  },
  router: {
    // 路由
    dashboard: 'Dashboard',
    namespace: 'Namespace',
    application: 'Application',
    cronJob: 'Cron Job',
    cronJobJob: 'Job',
    cronJobInstance: 'Job Instance',
    delayJob: 'Delay Job',
    delayJobJob: 'Delay',
    delayJobInstance: 'Delay Instance',
    clusterManager: 'Cluster',
    clusterNode: 'Cluster Node',
    clusterWorker: 'Cluster Worker',
    systemManager: 'System',
    systemConfiguration: 'Configuration',
    systemSlots: 'Slots',

    // 框架默认路由
    home: 'home',
    system: 'system',
    systemMenu: 'systemMenu',
    systemRole: 'systemRole',
    systemUser: 'systemUser',
    systemDept: 'systemDept',
    systemDic: 'systemDic',
    limits: 'limits',
    limitsFrontEnd: 'FrontEnd',
    limitsFrontEndPage: 'FrontEndPage',
    limitsFrontEndBtn: 'FrontEndBtn',
    limitsBackEnd: 'BackEnd',
    limitsBackEndEndPage: 'BackEndEndPage',
    menu: 'menu',
    menu1: 'menu1',
    menu11: 'menu11',
    menu12: 'menu12',
    menu121: 'menu121',
    menu122: 'menu122',
    menu13: 'menu13',
    menu2: 'menu2',
    funIndex: 'function',
    funTagsView: 'funTagsView',
    funCountup: 'countup',
    funWangEditor: 'wangEditor',
    funCropper: 'cropper',
    funQrcode: 'qrcode',
    funEchartsMap: 'EchartsMap',
    funPrintJs: 'PrintJs',
    funClipboard: 'Copy cut',
    funGridLayout: 'Drag layout',
    funSplitpanes: 'Pane splitter',
    funDragVerify: 'Validator',
    pagesIndex: 'pages',
    pagesFiltering: 'Filtering',
    pagesFilteringDetails: 'FilteringDetails',
    pagesFilteringDetails1: 'FilteringDetails1',
    pagesIocnfont: 'iconfont icon',
    pagesElement: 'element icon',
    pagesAwesome: 'awesome icon',
    pagesFormAdapt: 'FormAdapt',
    pagesTableRules: 'pagesTableRules',
    pagesFormI18n: 'FormI18n',
    pagesFormRules: 'Multi form validation',
    pagesDynamicForm: 'Dynamic complex form',
    pagesWorkflow: 'Workflow',
    pagesListAdapt: 'ListAdapt',
    pagesWaterfall: 'Waterfall',
    pagesSteps: 'Steps',
    pagesPreview: 'Large preview',
    pagesWaves: 'Wave effect',
    pagesTree: 'tree alter table',
    pagesDrag: 'Drag command',
    pagesLazyImg: 'Image lazy loading',
    makeIndex: 'makeIndex',
    makeSelector: 'Icon selector',
    makeNoticeBar: 'notification bar',
    makeSvgDemo: 'Svgicon demo',
    makeTableDemo: 'table demo',
    paramsIndex: 'Routing parameters',
    paramsCommon: 'General routing',
    paramsDynamic: 'Dynamic routing',
    paramsCommonDetails: 'General routing details',
    paramsDynamicDetails: 'Dynamic routing details',
    chartIndex: 'chartIndex',
    visualizingIndex: 'visualizingIndex',
    visualizingLinkDemo1: 'visualizingLinkDemo1',
    visualizingLinkDemo2: 'visualizingLinkDemo2',
    personal: 'personal',
    tools: 'tools',
    layoutLinkView: 'LinkView',
    layoutIframeViewOne: 'IframeViewOne',
    layoutIframeViewTwo: 'IframeViewTwo',
  },
  staticRoutes: {
    signIn: 'signIn',
    notFound: 'notFound',
    noPower: 'noPower',
  },
  user: {
    title0: 'Component size',
    title1: 'Language switching',
    title2: 'Menu search',
    title3: 'Layout configuration',
    title4: 'news',
    title5: 'Full screen on',
    title6: 'Full screen off',
    dropdownLarge: 'large',
    dropdownDefault: 'default',
    dropdownSmall: 'small',
    dropdown1: 'home page',
    dropdown2: 'Personal Center',
    dropdown3: '404',
    dropdown4: '401',
    dropdown5: 'Log out',
    dropdown6: 'Code warehouse',
    searchPlaceholder: 'Menu search: support Chinese, routing path',
    newTitle: 'notice',
    newBtn: 'All read',
    newGo: 'Go to the notification center',
    newDesc: 'No notice',
    logOutTitle: 'Tips',
    logOutMessage: 'This operation will log out. Do you want to continue?',
    logOutConfirm: 'determine',
    logOutCancel: 'cancel',
    logOutExit: 'Exiting',
  },
  tagsView: {
    refresh: 'refresh',
    close: 'close',
    closeOther: 'closeOther',
    closeAll: 'closeAll',
    fullscreen: 'fullscreen',
    closeFullscreen: 'closeFullscreen',
  },
  notFound: {
    foundTitle: 'Wrong address input, please re-enter the address~',
    foundMsg: 'You can check the web address first, and then re-enter or give us feedback.',
    foundBtn: 'Back to home page',
  },
  noAccess: {
    accessTitle: 'You are not authorized to operate~',
    accessMsg: 'Contact information: add QQ group discussion 665452019',
    accessBtn: 'Reauthorization',
  },
  layout: {
    configTitle: 'Layout configuration',
    oneTitle: 'Global Themes',
    twoTopTitle: 'top bar set up',
    twoMenuTitle: 'Menu set up',
    twoColumnsTitle: 'Columns set up',
    twoTopBar: 'Top bar background',
    twoTopBarColor: 'Top bar default font color',
    twoIsTopBarColorGradual: 'Top bar gradient',
    twoMenuBar: 'Menu background',
    twoMenuBarColor: 'Menu default font color',
    twoMenuBarActiveColor: 'Menu Highlight Color',
    twoIsMenuBarColorGradual: 'Menu gradient',
    twoColumnsMenuBar: 'Column menu background',
    twoColumnsMenuBarColor: 'Default font color bar menu',
    twoIsColumnsMenuBarColorGradual: 'Column gradient',
    twoIsColumnsMenuHoverPreload: 'Column Menu Hover Preload',
    threeTitle: 'Interface settings',
    threeIsCollapse: 'Menu horizontal collapse',
    threeIsUniqueOpened: 'Menu accordion',
    threeIsFixedHeader: 'Fixed header.ts',
    threeIsClassicSplitMenu: 'Classic layout split menu',
    threeIsLockScreen: 'Open the lock screen',
    threeLockScreenTime: 'screen locking(s/s)',
    fourTitle: 'Interface display',
    fourIsShowLogo: 'Sidebar logo',
    fourIsBreadcrumb: 'Open breadcrumb',
    fourIsBreadcrumbIcon: 'Open breadcrumb icon',
    fourIsTagsview: 'Open tagsview',
    fourIsTagsviewIcon: 'Open tagsview Icon',
    fourIsCacheTagsView: 'Enable tagsview cache',
    fourIsSortableTagsView: 'Enable tagsview drag',
    fourIsShareTagsView: 'Enable tagsview sharing',
    fourIsFooter: 'Open footer',
    fourIsGrayscale: 'Grey model',
    fourIsInvert: 'Color weak mode',
    fourIsDark: 'Dark Mode',
    fourIsWartermark: 'Turn on watermark',
    fourWartermarkText: 'Watermark copy',
    fiveTitle: 'Other settings',
    fiveTagsStyle: 'Tagsview style',
    fiveAnimation: 'page animation',
    fiveColumnsAsideStyle: 'Column style',
    fiveColumnsAsideLayout: 'Column layout',
    sixTitle: 'Layout switch',
    sixDefaults: 'One',
    sixClassic: 'Two',
    sixTransverse: 'Three',
    sixColumns: 'Four',
    tipText: 'Click the button below to copy the layout configuration to `/src/stores/themeConfig.ts` It has been modified in.',
    copyText: 'replication configuration',
    resetText: 'restore default',
    copyTextSuccess: 'Copy succeeded!',
    copyTextError: 'Copy failed!',
  },
  upgrade: {
    title: 'New version',
    msg: 'The new version is available, please update it now! Dont worry, the update is fast!',
    desc: 'Prompt: Update will restore the default configuration',
    btnOne: 'Cruel refusal',
    btnTwo: 'Update now',
    btnTwoLoading: 'Updating',
  },
  home:{
    countOne: {
      one: 'Cronjob',
      two: 'Cron Instance',
      three: 'Delay Job',
      four: 'Delay Instance',
    },
    countTwo:{
      one: 'Application',
      two: 'Node',
      three: 'Worker',
      four: 'Slots',
    },
    timeSelect:'Time Select',
    taskNum:'Num',
    status:{
      waiting: 'Waiting',
      running: 'Running',
      success: 'Success',
      fail: 'Fail',
      stop: 'Stop',
    },
    job:{
      chartTitle: 'Cronjob Scheduling',
      percentTitle: 'Cronjob',
    },
    delay:{
      chartTitle: 'Delay Scheduling',
      percentTitle: 'Delay',
    }
  },
  namespace: {
    id: 'id',
    name: 'Name',
    uniqueId: 'UUID',
    status: "Status",
    createTime: 'Create time',
    addTitle: 'Add Namespace',
    editTitle: "Edit Namespace",
    deleteTitle: 'Are you sure to delete namespace',
  },
  app: {
    id: "ID",
    namespace: "Namespace",
    name: "Name",
    desc: "Desc",
    status: "Status",
    createTime: "Create time",
    updateTime: "Update time",
    addTitle: 'Add Application',
    editTitle: "Edit Application",
    deleteTitle: 'Are you sure to delete application',
    validateName: "Format letters or number or . or _ or -"
  },
  job: {
    job: {
      executeOnce: 'Execute',
      instanceBtn: 'Instance',
      application: "Application",
      nameAndDesc: 'Name/Desc',
      name: 'Name',
      description: 'Description',
      status: 'Status',
      workflowId: 'Workflow ID',
      processorType: 'Processor Type',
      processorInfo: 'Processor',
      executeType: 'Method',
      paramsType: 'Params Type',
      params: 'Params',
      extendParamsType: 'Extend Type',
      extendParams: 'Extend Params',
      timeExpressionType: 'Expression Type',
      timeExpression: 'Expression',
      executeStrategy: 'Strategy',
      failRetryTimes: 'Retry Times',
      failRetryInterval: 'Retry Interval',
      concurrency: 'Concurrency',
      createTime: 'Create Time',
      processorAndExecuteType: 'Type/Method',
      expressionAndType: 'Type/Expression',
      deleteTitle: 'Are you sure to delete job',
      executeTypeList: {
        standalone: 'standalone',
        broadcast: 'broadcast',
        mapReduce: 'map reduce',
        sharding: 'sharding',
      },
      executeStrategyList: {
        discard: 'discard',
        overlay: 'overlay',
        concurrency: 'concurrency',
      },
      timeExpressionTypeList: {
        cron: 'cron',
        secondDelay: 'second delay',
        fixedRate: 'fixed rate',
        oneTime: 'one time',
        secondDelayTitle: 'Fixed Delay',
        fixedRateTitle: 'Fixed Rate',
        oneTimeTitle: 'Execute Time',
      },
      validateName: {
        fixed: 'Format must be number',
      },
      timeExpressionTitle: 'Next execute time',
      timeExpressionValidMsg: 'Time expression is invalid',
      executeJobTitle: 'Execute once',
      addJobTitle: 'Add job',
      updateJobTitle: 'Update job',
      copyJobTitle: 'Copy job',
    },
    instance: {
      id: 'ID',
      jobId: 'Job id',
      status: 'Status',
      workerAddress: 'Worker address',
      executeTime: 'ExecuteTime',
      completeTime: 'Complete Time',
      lastReportTime: 'Last Report Time',
      createTime: 'Create Time',
      deleteTitle: 'Are you sure to delete job instance',
      stopTitle: 'Are you sure to stop job instance',
    }
  },
  delay: {
    job: {
      nsName: 'Namespace',
      appName: 'Application',
      nameAndDesc: 'Name/Desc',
      name: 'Name',
      processorInfo: 'Processor',
      topic: 'Topic',
      total: 'Total',
      ready: 'Ready',
      failCount: 'Fail',
      failTopicEnable: 'Fail topic',
      failTopicConcurrency: 'Fail Concurrency',
      status: 'Status',
      description: 'Description',
      failRetryTimes: 'Retry Times',
      failRetryInterval: 'Retry Interval',
      executeTimeout: 'Timeout',
      concurrency: 'Concurrency',
      blockingSize: 'Blocking Size',
      createTime: 'Create Time',
      deleteTitle: 'Are you sure to delete delay job',
      addJobTitle: 'Add delay job',
      updateJobTitle: 'Update delay job',
      copyJobTitle: 'Copy delay job',
    },
    instance: {
      namespaceId: 'Namespace',
      appId: 'Application',
      appName: 'Application',
      delayId: 'Delay ID',
      taskId: 'Task ID',
      topic: 'Topic',
      delayParams: 'Params',
      delayExtra: 'Extend params',
      status: 'Status',
      executeTime: 'Execute Time',
      completeTime: 'Complete Time',
      createTime: 'Create Time',
      deleteTitle: 'Are you sure to delete delay instance',
      stopTitle: 'Are you sure to stop delay instance',
    }
  },
  server: {
    slots: {
      id: 'ID',
      serverId: 'Server id',
      serverAddress: "Server address",
      serverStatus: "Server status",
      createTime: "Create time",
      updateTime: "Update time",
    },
    node: {
      id: 'ID',
      ip: "Ip",
      akkaAddress: "Address",
      status: "Status",
      createTime: "Create time",
      updateTime: "Update time",
    },
    worker: {
      appName: 'Application name',
      address: 'Address',
      protocolType: 'Protocol',
      version: 'Version',
      lastHeartbeatTime: 'Last Heartbeat',
      status: 'Status',
      createTime: "Create time",
    },
    system: {
      version: 'System version',
      maxSlot: 'Job slots',
      workerSupervisorSlot: 'Node slots',
      clusterVersion: 'Job version',
      clusterDelayVersion: 'Delay version',
      delayZsetSlot: 'Delay zset  slots',
      delayAddListSlot: 'Delay list slots',
      delayStatusListSlot: 'Delay status slots',
      delayDeleteListSlot: 'Delay delete slots',
      delayFailZsetSlot: 'Delay fail zset  slots',
      jobKeepDays: 'Keep job days',
      delayKeepDays: 'Keep delay days',
      serverKeepDays: 'Keep node days',
      workerKeepDays: 'Keep worker days',
      updateTitle: 'Are you sure to update system configuration?',
    }
  }
};
