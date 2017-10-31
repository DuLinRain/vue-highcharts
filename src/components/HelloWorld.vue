<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <VhBar v-for="n in 4" :title="title" :initOptions="options" :series="series"/>
  </div>
</template>

<script>
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
    mounted () {
        setTimeout(() => {
            this.title.text = '测试更新标题'
        }, 3000)
        setTimeout(() => {
            this.series.push({
                name: '小花',
                id: '小花',
                data: [25, 77, 13]
            })
        }, 5000)
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
