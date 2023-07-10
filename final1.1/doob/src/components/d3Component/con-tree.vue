<template>
  <div>
    <svg ref="svg"></svg>
  </div>
</template>

<style>
/*body {
  background-color: black;
}*/
</style>

<script>
import * as d3 from 'd3';


export default {
  name:"conTree",
  mounted() {
    const data = {
      name: "客户满意度影响因素",
      children: [
        { name: "技术因素", children: [
          { name: "设备性能",
            children:[
                {name:"可用性"},
                {name:"吞吐量"},
                {name:"时延"},
                {name:"丢包率"}
            ] },
          { name: "设备质量" }
        ]},
        { name: "服务因素", children: [
        { name: "网络质量",
            children:[
                {name:"网络覆盖"},
                {name:"信号强度"}
            ] },
            { name: "客服质量",
            children:[
                {name:"业务提供水平"},
                {name:"投诉处理情况"}
            ] }
        ]},
        { name: "用户因素", children: [
        { name: "消费信息",
            children:[
                {name:"终端价格"},
                {name:"消费标准"}
            ] },
            { name: "用户信息",
            children:[
                {name:"性别"},
                {name:"使用场景"}
            ] },
            { name: "终端",
            children:[
                {name:"终端类型"},
                {name:"终端品牌"}
            ] }
        ]}
      ]
    };

    const width = (window.innerWidth
           || document.documentElement.clientWidth
           || document.body.clientWidth)*0.85;
    const height = (window.innerHeight
           || document.documentElement.clientHeight
           || document.body.clientHeight)*0.6;

    const svg = d3.select(this.$refs.svg)
      .attr("width", width)
      .attr("height", height);

    const treeLayout = d3.tree()
      .size([height, width - 100]);

    const root = d3.hierarchy(data);

    treeLayout(root);

    const links = root.links();
    const nodes = root.descendants();

    const linkGroup = svg.append("g");
    const nodeGroup = svg.append("g");

    const link = linkGroup.selectAll("path")
      .data(links)
      .join("path")
      .attr("d", d => {
        return `M${d.source.y},${d.source.x}C${(d.source.y + d.target.y) / 2},${d.source.x} ${(d.source.y + d.target.y) / 2},${d.target.x} ${d.target.y},${d.target.x}`;
      })
      .attr("fill", "none")
      .attr("stroke", "#90e0ef");

    const node = nodeGroup.selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("cx", d => d.y)
      .attr("cy", d => d.x)
      .attr("r", 4)
      .attr("fill", "#90e0ef");

    const text = nodeGroup.selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", d => d.y)
      .attr("y", d => d.x)
      .attr("dx",function(d){
                            if((d.height==1||d.height==2)&&d.data.name.length!=2){
                                return "-2em";
                            }
                            else if(d.height==1&&d.data.name.length==2){
                                return "-1em";
                            }
                            else if(d.height==0){
                              return "1em";
                            }
                            else{
                              return "0em";
                            }
                        })
      .attr("dy",function(d){
                            if(d.height>0){
                                return "-1em";
                            }
                            else{
                                return "0.4em";
                            }
                        })
      .text(d => d.data.name)
      .attr("font-size", function(d){
        if(d.height==0&&d.data.name.length==6){
          return "14px"
        }
        else{
          return "16px"
        }
      })
      .attr("fill", "white");
  }
}
</script>
