<template>
  <!--<h1>上网满意度组成</h1>-->
  <div id ="fdg-container"></div>
  
</template>

<style>
/*body {
background-color: black;
}*/
</style>

<script>
import { defineComponent } from 'vue';
import * as d3 from "d3";

var w=window.innerWidth
         || document.documentElement.clientWidth
         || document.body.clientWidth;

var h=window.innerHeight
         || document.documentElement.clientHeight
         || document.body.clientHeight;
//var simulation=d3.forceSimulation();
const color = d3.scaleOrdinal()
  .range([ "#90e0ef","#48cae4","#00b4d8","#0096c7","#0077b6","#023e8a"]);          
//调整至实际可用范围
w=w*0.98;
h=h*0.74;
export default defineComponent ({
  name:"force",
  mounted() {

var width = w,
  height = h;
// 创建SVG元素
var svg = d3.select("#fdg-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

 //节点及链接定义   
 const nodes=[
      {name:"可用性",id:0,group:1},
      {name:"吞吐量",id:1,group:1},
      {name:"时延",id:2,group:1},
      {name:"丢包率",id:3,group:1},
      {name:"网络覆盖",id:4,group:2},
      {name:"信号强度",id:5,group:2},
      {name:"业务提供水平",id:6,group:3},
      {name:"投诉处理情况",id:7,group:3},
      {name:"终端价格",id:8,group:3},
      {name:"消费标准",id:9,group:3},
      {name:"性别",id:10,group:4},
      {name:"使用场景",id:11,group:4},
      {name:"终端类型",id:12,group:5},
      {name:"终端品牌",id:13,group:5}
  ];
  
  const links=[
          {source:0,target:1,"relation":"0.829"},
          {source:0,target:2,"relation":"0.823"},
          {source:0,target:3,"relation":"0.473"},
          {source:1,target:2,"relation":"0.523"},
          {source:1,target:3,"relation":"0.701"},
          {source:1,target:6,"relation":"0.324"},
          {source:2,target:3,"relation":"0.618"},
          {source:2,target:3,"relation":"0.823"},
          {source:2,target:8,"relation":"0.421"},
          {source:3,target:4,"relation":"0.492"},
          {source:3,target:12,"relation":"0.512"},
          {source:4,target:5,"relation":"0.923"},
          {source:5,target:11,"relation":"0.320"},
          {source:5,target:13,"relation":"0.512"},
          {source:6,target:7,"relation":"0.679"},
          {source:6,target:9,"relation":"0.391"},
          {source:7,target:9,"relation":"0.381"},
          {source:8,target:12,"relation":"0.832"},
          {source:8,target:13,"relation":"0.621"},
          {source:9,target:12,"relation":"0.391"},
          {source:9,target:13,"relation":"0.128"},
            {source:10,target:11,"relation":"0.284"},
            {source:12,target:13,"relation":"0.127"},
            {source:11,target:5,"relation":"0.320"},
            {source:10,target:9,"relation":"0.182"},
            {source:11,target:10,"relation":"0.284"}
  ];

    // 创建一个力导向图模拟器
const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width*3 / 7, height/2));

console.log(nodes);

      // 创建链接元素
    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .style('stroke', 'gray')
      .style('stroke-width', d => 10 * +d.relation);

    // 创建节点元素
    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr("r", function(d) {
          if (d.group === 1) {
          return 15;
          }else if (d.group === 2) {
          return 12;
          } else {
          return 10;
          }
      })
      .style('fill',function(d){
          return color(d.group)
      })
      .call(drag(simulation));

      const texts=svg.selectAll("forceText")
          .data(nodes)
          .enter()
          .append("text")
          .attr("class","forceText")
          .attr("x",function(d){return d.x;})
          .attr("y",function(d){return d.y;})
          .style("stroke","white")
          .style("font-size","14px")
          .attr("dx","-4em")
          .attr("dy","2em")
          .style("fill","white")
          .text(function(d){return d.name;});
     
      const link_text = svg.selectAll("lineText")
          .data(links)
          .enter()
          .append("text")
          .attr("class","linetext")
          .text(d=>d.relation)
          .style("stroken","gray")
          .style("font-size","12px")
          .style("fill","white");

    // 定义节点和链接的更新方法
    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
      
      texts
          .attr("x",function(d){return d.x;})
          .attr("y",function(d){return d.y;});
      
      link_text
          .attr("x",d=>(d.source.x+d.target.x)/2)
          .attr("y",d=>(d.source.y+d.target.y)/2);
    }

    // 注册节点和链接的更新方法
    simulation.on('tick', ticked);

    // 鼠标进入节点时的事件处理程序
function handleMouseover() {
// 突出显示节点
d3.select(this).style('fill', '#C5C8CB');

}

// 鼠标离开节点时的事件处理程序
function handleMouseout() {
// 取消突出显示节点
d3.select(this).style('fill',function(d){
          return color(d.group)
      } );


}

// 注册事件监听器
node
.on('mouseover', handleMouseover)
.on('mouseout', handleMouseout);


  }
});

function drag(simulation){
  function dragstarted(event,d){
      if(!event.active){
          simulation.alphaTarget(0.3);}
      d.fx=d.x;
      d.fy=d.y;
  }
  function dragged(event,d){
      d.fx=event.x;
      d.fy=event.y;
  }
  function dragended(event,d){
      d.fx=null;
      d.fy=null;
  }
  return d3.drag(simulation)
      .on("start",dragstarted)
      .on("drag",dragged)
      .on("end",dragended);
}
//图例
var legend = d3.select("#fdg-container")
          .append("g")
          .attr("class", "legend")
          .attr("width", w*0.3)
          .attr("height", h*0.2)
          .style("position", "absolute")
          .style("left", "10px")
          .style("top", "10px");
          var sample = [
          {label: "一级影响因素", color: "#99DBF5"},
          {label: "二级影响因素", color: "#47A992"},
          {label:"三级影响因素",color:"#FEFF86"}
          ];
          var legendItems = legend.selectAll(".legend-item")
          .data(sample)
          .enter()
          .append("g")
          .attr("class", "legend-item")
          .attr("transform", function(d, i) {
              return "translate(30," + (i+1) * 20 + ")";
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
          .style("fill","white")
          .text(function(d) {
              return d.label;
          });

</script>