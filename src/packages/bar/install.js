/*
* @Author: Marte
* @Date:   2017-10-31 14:47:54
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-31 15:21:58
*/

'use strict'

import VhBar from './index'

VhBar.install = function (Vue) {
    Vue.component(VhBar.name, VhBar)
}
export default VhBar
