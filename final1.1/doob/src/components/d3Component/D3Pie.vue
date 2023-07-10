
<template>
    <div id ="pie-container"></div>
</template>

<script>
import { defineComponent } from 'vue';
import * as d3 from "d3";
import { API_BASE_URL } from '../../../config.js';
 //获取页面宽高
var w=window.innerWidth
           || document.documentElement.clientWidth
           || document.body.clientWidth;

var h=window.innerHeight
           || document.documentElement.clientHeight
           || document.body.clientHeight;
           
//调整至实际可用范围
w=w*0.98;
h=h*0.59;

export default defineComponent({
    name:"CircleTest",
    data() {
      return {
        chartData: []
      }
    },
    mounted(){
        const apiUrl = `${API_BASE_URL}/portfolio-details/4/pie`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.chartData = data;  // 将从后端获取的数据保存到chartData中
          var cd=this.processedData //计算数据
          this.drawSinglePie(cd);// 调用方法绘制图表
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        
    },
    computed: {
        processedData() {
          var data = {};
          //console.log(res)
          for (var category in this.chartData) {
            var values = this.chartData[category];
            var total = 0;

            // 计算总数
            for (var i = 0; i < values.length; i++) {
              total += values[i][1];
            }

            // 计算百分比并存储结果
            data[category] = values.map(function(item) {
              var percentage = (item[1] / total) * 100;
              return percentage.toFixed(1); // 保留一位小数
            });
          }

          return data;
        }
      }
,
    methods:{
        
        drawSinglePie(data){
            
// 定义SVG的宽度和高度
var width = w,
    height = h;
// 创建SVG元素
var svg = d3.select("#pie-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
// 定义颜色比例尺
    const color = d3.scaleOrdinal()
    .range([ "#90e0ef","#48cae4","#00b4d8"]);

// 创建一个饼图布局
var pie=d3.pie()
        .value(function(d){return d;});
            
// 定义环的内外半径
var innerRadius = 50,
    outerRadius1 = 90,
    innerRadius2 = 95,
    outerRadius2 = 135;
// 创建一个弧度生成器
var arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius1)
    ;
// 创建一个弧度生成器，用于绘制第二个环
var arc2 = d3.arc()
    .innerRadius(innerRadius2)
    .outerRadius(outerRadius2)
    ;

// 为每个数据点创建一个分组
var arcs = svg.selectAll("g.arc")
    .data(pie(Object.values(data)[0]))
    .enter()
    .append("g")
    .attr("class", "arc")
    .attr("transform", "translate(" + width / 2.2 + "," + height / 3 + ")")
;
// 绘制第一个环
arcs.append("path")
    .attr("d", arc)
    .attr("fill", function(d, i) { return color(i); })
    ;
arcs.append("text")
    .attr("fill","black")
    .attr("text-anchor","middle")
    .attr("transform",function(d){
            var x=arc.centroid(d)[0];
            var y=arc.centroid(d)[1];
            return "transform","translate("+(x)+","+(y+6)+")";
        })
    .text(function(d){return d.data});
// 为每个数据点创建一个分组，用于绘制第二个环
var arcs2 = svg.selectAll("g.arc2")
    .data(pie(Object.values(data)[1]))
    .enter()
    .append("g")
    .attr("class", "arc2")
    .attr("transform", "translate(" + width / 2.2 + "," + height / 3 + ")");
// 绘制第二个环
arcs2.append("path")
    .attr("d", arc2)
    .attr("fill", function(d, i) { return color(i); })
    ;
arcs2.append("text")
    .attr("fill","black")
    .attr("text-anchor","middle")
    .attr("transform",function(d){
            var x=arc2.centroid(d)[0];
            var y=arc2.centroid(d)[1];
            return "transform","translate("+(x)+","+(y+6)+")";
        })
    .text(function(d){return d.data});

//图例
var legend = d3.select("#pie-container")
            .append("svg")
            .attr("class", "legend")
            .attr("width", w)
            .attr("height", h*0.2)
            ;
            var sample=[
                {label:"满意",color:"#90e0ef"},
                {label:"一般",color:"#48cae4"},
                {label:"不满意",color:"#00b4d8"}
            ]
            var legendItems = legend.selectAll(".legend-item")
            .data(sample)
            .enter()
            .append("g")
            .attr("class", "legend-item")
            .attr("transform", function(d, i) {
                return "translate(30," + (i+1) * 19 + ")";
            });
            legendItems.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", function(d) {
                return d.color;
            });
            legendItems.append("text")
            .attr("x", 20)
            .attr("y", 10)
            .attr("fill","white")
            .text(function(d) {
                return d.label;
            });

}}})


</script>
