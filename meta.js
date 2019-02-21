module.exports = {
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
      type: 'string',
      required: true,
      message: '项目名称',
    },
    description: {
      type: 'string',
      required: false,
      message: '项目描述',
      default: 'vue cli3 template',
    },
    router: {
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
    }
  },
  filters: {
    'src/router/**/*': 'router',
    'src/store/**/*': 'vuex',
    'src/plugins/iview/**/*': 'iview',
  }
}