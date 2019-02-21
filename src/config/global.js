import Vue from 'vue'
import Cookies from 'js-cookie'
import '../plugins/iview'

/* ------------------------Vue Global Config------------------------------ */
Vue.config.productionTip = false

const lang = Cookies.get('lang') || 'en'
Vue.config.lang = lang

/* ------------------------Vue Global Variable------------------------------ */
import $utils from '@/utils'
import {
  $lodash
} from '@plugins'
Vue.prototype.$_ = $lodash
Vue.prototype.$utils = $utils