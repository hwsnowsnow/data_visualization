<template>
  <div id="wordcloud"></div>
</template>

<script>
import * as d3 from 'd3';
import 'd3-cloud';

export default {
  mounted() {
    const words = [
      { text: '填充手机没有信号', size: 1443 },
      { text: '有信号无法拨通', size: 953 },
      { text: '通话过程中突然中断', size: 1406 },
      { text: '通话过程中有杂音听不清', size: 1629 },
      { text: '串线', size: 214 },
      { text: '通话过程中一方听不见', size: 1450 },
      { text: '流量', size: 20 },
      { text: '卡顿', size: 150 },
      { text: '微信', size: 50 },
      { text: '打不开', size: 70 },
      { text: '网络', size: 170 },
      // 添加更多词语和权重
    ];

    const width = 500;
    const height = 500;

    const layout = d3.layout.cloud()
      .size([width, height])
      .words(words.map(d => ({ text: d.text, size: d.size })))
      .padding(5)
      .rotate(() => (~~(Math.random() * 2) * 90))
      .fontSize(d => d.size)
      .shape(() => this.telephoneShape) // 指定词云形状为电话
      .on("end", this.draw);

    layout.start();
  },
  data() {
    return {
      telephoneShape: null // 电话形状的图像对象
    };
  },
  methods: {
    draw(words) {
      const svg = d3.select("#wordcloud")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

      const wordGroup = svg.append("g")
        .attr("transform", "translate(250, 250)");

      const text = wordGroup.selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", d => `${d.size}px`)
        .style("fill", "steelblue")
        .attr("text-anchor", "middle")
        .attr("transform", d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
        .text(d => d.text);
    },
    loadTelephoneShape() {
      const image = new Image();
      image.src = "phone.png"; // 替换为您的电话形状图像路径
      image.onload = () => {
        this.telephoneShape = image;
        this.mounted();
      };
    }
  },
  created() {
    this.loadTelephoneShape();
  }
};
</script>

<style>
#wordcloud {
  width: 500px;
  height: 500px;
}
</style>
