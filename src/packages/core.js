/*
* @Author: Marte
* @Date:   2017-10-31 14:14:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-31 17:25:28
*/

'use strict'

export default {
    render (h) {
        return h('div', {
            ref: 'highchartsPanel'
        })
    },
    props: {
        series: { type: Array, default () { return [] } },
        initOptions: { type: Object, default () { return {} } },
        title: { type: Object, default () { return {} } },
        subtitle: { type: Object, default () { return {} } },
        legend: { type: Array, default () { return [] } },
        xAxis: { type: Object, default () { return {} } },
        yAxis: { type: Object, default () { return {} } },
        colors: { type: Array, default () { return [] } },
        tooltip: { type: Object, default () { return {} } },
        credits: { type: Object, default () { return { enabled: false } } },
        labels: { type: Object, default () { return {} } },
        chart: { type: Object, default () { return {} } }
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
            let options = {
                ..._.initOptions,
                title: _.title,
                subtitle: _.subtitle,
                series: _.series
            }
            _.highchartIns = new _.HIGHTCHARTS.Chart(_.$refs.highchartsPanel, options)
        },
        redrawData (options) {
            let _ = this
            // 无新增数据，只更新已有数据时候调用update
            // _.highchartIns.update(options)
            // 数据内容有新增时候重画
            _.highchartIns = new _.HIGHTCHARTS.Chart(_.$refs.highchartsPanel, options)
        }
    },
    watch: {
        title: {
            deep: true,
            handler (v) {
                if (v) {
                    let _ = this
                    console.log(v)
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
                    let options = {..._.initOptions, series: _.series}
                    this.redrawData(options)
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
