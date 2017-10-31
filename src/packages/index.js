/*
* @Author: Marte
* @Date:   2017-10-31 14:57:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-31 15:33:15
*/

'use strict'
import VhBar from './bar/index'

const components = [
    VhBar
]

function install (Vue, _) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {
    VhBar,
    install
}
