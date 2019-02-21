import Vue from 'vue'
import Cookies from 'js-cookie'

Vue.config.productionTip = false

const lang = Cookies.get('lang') || 'en'
Vue.config.lang = lang

import $utils from '@/utils'
{{#lodash}}
import {
  $lodash
} from '@plugins'
Vue.prototype.$_ = $lodash
{{/lodash}}

{{#iview}}
import '@plugins'
{{/iview}}
Vue.prototype.$utils = $utils