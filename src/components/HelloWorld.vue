<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-highcharts :title="title" :initOptions="options" :series="series"/>
    <button @click="handleClicked">更新数据</button>
  </div>
</template>

<script>
var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios)

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/users').reply(200, {
    series: [{                                 // 指定数据列
        name: '小明',
        id: '小明',                          // 数据列名
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100]
    }, {
        name: '小红',
        id: '小红',
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100]
    }]
})

export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue-Highcharts.js App',
            title: {
                text: '基于Vue的HightChart'
            },
            series: [{                                 // 指定数据列
                name: '小明',
                id: '小明',                          // 数据列名
                data: [1, 0, 4]                        // 数据
            }, {
                name: '小红',
                id: '小红',
                data: [5, 7, 3]
            }],
            options: {
                chart: {
                    type: 'bar'                           // 指定图表的类型，默认是折线图（line）
                },
                title: {
                    text: '我的第一个图表'                 // 指定图表标题
                },
                xAxis: {
                    categories: ['苹果', '香蕉', '橙子']   // 指定x轴分组
                },
                yAxis: {
                    title: {
                        text: 'something'                 // 指定y轴的标题
                    }
                },
                series: [{                                 // 指定数据列
                    name: '小明',
                    id: '小明',                          // 数据列名
                    data: [1, 0, 4]                        // 数据
                }, {
                    name: '小红',
                    id: '小红',
                    data: [5, 7, 3]
                }]
            }
        }
    },
    methods: {
        handleClicked () {
            let _ = this
            axios.get('/users')
            .then(function (response) {
                // console.log(response.data.series)
                _.series = [{                                 // 指定数据列
                    name: '小明',
                    id: '小明',                          // 数据列名
                    data: [Math.random() * 100, Math.random() * 100, Math.random() * 100]
                }, {
                    name: '小红',
                    id: '小红',
                    data: [Math.random() * 100, Math.random() * 100, Math.random() * 100]
                }]
            })
        }
    },
    mounted () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
