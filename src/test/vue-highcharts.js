/*
* @Author: Marte
* @Date:   2017-10-31 14:14:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-02 20:20:15
*/

'use strict'

const VueHighcharts = {
    name: 'v-highcharts',
    render (h) {
        return h('div', {
            ref: 'highchartsPanel'
        })
    },
    computed: {
        options () {
            let _ = this
            let options = {}
            _.initOptions && (options = {...options, ..._.initOptions})
            _.title && (options = {...options, title: _.title})
            _.subtitle && (options = {...options, subtitle: _.subtitle})
            _.series && (options = {...options, series: _.series})
            _.legend && (options = {...options, legend: _.legend})
            _.xAxis && (options = {...options, xAxis: _.xAxis})
            _.yAxis && (options = {...options, yAxis: _.yAxis})
            _.colors && (options = {...options, colors: _.colors})
            _.tooltip && (options = {...options, tooltip: _.tooltip})
            _.credits && (options = {...options, credits: _.credits})
            _.labels && (options = {...options, labels: _.labels})
            _.chart && (options = {...options, chart: _.chart})
            _.accessibility && (options = {...options, accessibility: _.accessibility})
            _.drilldown && (options = {...options, drilldown: _.drilldown})
            _.loading && (options = {...options, loading: _.loading})
            _.drilldown && (options = {...options, drilldown: _.drilldown})
            _.navigation && (options = {...options, navigation: _.navigation})
            _.noData && (options = {...options, noData: _.noData})
            _.pane && (options = {...options, pane: _.pane})
            _.plotOptions && (options = {...options, plotOptions: _.plotOptions})
            _.responsive && (options = {...options, responsive: _.responsive})
            _.zAxiszAxis && (options = {...options, zAxiszAxis: _.zAxiszAxis})
            return options
        }
    },
    props: {
        title: { type: Object },
        subtitle: { type: Object },
        legend: { type: Object },
        xAxis: { type: Object },
        yAxis: { type: Object },
        colors: { type: Array },
        tooltip: { type: Object },
        credits: { type: Object },
        labels: { type: Object },
        chart: { type: Object },
        series: { type: Array },
        initOptions: { type: Object },
        accessibility: { type: Object },
        drilldown: { type: Object },
        loading: { type: Object },
        navigation: { type: Object },
        noData: { type: Object },
        pane: { type: Object },
        plotOptions: { type: Object },
        responsive: { type: Object },
        zAxis: { type: Object }
    },
    data () {
        return {
            HIGHTCHARTS: window.Highcharts
        }
    },
    methods: {
        init () {
            let _ = this
            if (_.highchartIns) {
                return
            }
            _.highchartIns = new _.HIGHTCHARTS.Chart(_.$refs.highchartsPanel, _.options)
        },
        redrawData () {
            let _ = this
            // 无新增数据，只更新已有数据时候调用update
            // _.highchartIns.update(options)
            // 数据内容有新增时候重画
            _.highchartIns = new _.HIGHTCHARTS.Chart(_.$refs.highchartsPanel, _.options)
        }
    },
    watch: {
        title: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        title: v
                    })
                }
            }
        },
        subtitle: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        subtitle: v
                    })
                }
            }
        },
        legend: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        legend: v
                    })
                }
            }
        },
        xAxis: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        xAxis: v
                    })
                }
            }
        },
        yAxis: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        yAxis: v
                    })
                }
            }
        },
        colors: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        colors: v
                    })
                }
            }
        },
        tooltip: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        tooltip: v
                    })
                }
            }
        },
        credits: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        credits: v
                    })
                }
            }
        },
        labels: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        labels: v
                    })
                }
            }
        },
        chart: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        chart: v
                    })
                }
            }
        },
        series: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        series: v
                    })
                    // let options = {..._.initOptions, series: _.series}
                    // this.redrawData(options)
                }
            }
        },
        initOptions: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    let options = {..._.initOptions, series: _.series}
                    this.redrawData(options)
                }
            }
        },
        accessibility: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        accessibility: v
                    })
                }
            }
        },
        drilldown: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        drilldown: v
                    })
                }
            }
        },
        loading: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        loading: v
                    })
                }
            }
        },
        navigation: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        navigation: v
                    })
                }
            }
        },
        noData: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        noData: v
                    })
                }
            }
        },
        pane: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        pane: v
                    })
                }
            }
        },
        plotOptions: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        plotOptions: v
                    })
                }
            }
        },
        responsive: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        responsive: v
                    })
                }
            }
        },
        zAxis: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    _.highchartIns && _.highchartIns.update({
                        zAxis: v
                    })
                }
            }
        }
    },
    created () {
        this.highchartIns = void 0
        if (this.HIGHTCHARTS === void 0) {
            this.HIGHTCHARTS = window.Highcharts
        }
    },
    mounted () {
        this.init()
    }
}
function install (Vue) {
    Vue.component(VueHighcharts.name, VueHighcharts)
}

export default {
    install
}
