import Vue from 'vue'

import UIkit from '~/node_modules/uikit/dist/js/uikit-core'  
import Icons from '~/node_modules/uikit/dist/js/uikit-icons'

UIkit.use(Icons)  
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit