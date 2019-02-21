module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },

  prompts: {
    name: {
      when: 'isNotTest',
      type: 'string',
      required: true,
      message: '项目名称',
    },
    description: {
      when: 'isNotTest',
      type: 'string',
      required: false,
      message: '项目描述',
      default: 'vue cli3 template',
    },
    author: {
      when: 'isNotTest',
      type: 'string',
      message: '项目归属',
    },
    router: {
      when: 'isNotTest',
      type: 'confirm',
      message: '是否初始化router',
    },
    "vuex": {
      "type": "confirm",
      "message": "是否初始化vuex"
    },
    "isMobile": {
      "type": "confirm",
      "message": "是否是移动端webApp项目"
    },
    "iview": {
      type: "confirm",
      message: "是否需要安装iview"
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message: '是否需要初始化加载依赖',
      choices: [{
          name: '是的，使用 npm',
          value: 'npm',
          short: 'npm',
        },
        {
          name: '是的, 使用 Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: '不，我自己初始化',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    'src/router/**/*': 'router',
    'src/store/**/*': 'vuex',
    'src/plugins/iview/**/*': 'iview',
  }
}