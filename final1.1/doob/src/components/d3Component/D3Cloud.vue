<template>
  <div>
    <svg ref="wordcloud"></svg>
  </div>
</template>
<style>
body {
  background-color: black;
}
</style>
<script>
import * as d3 from 'd3';
import cloud from 'd3-cloud';

export default {
  mounted() {
    this.generateWordCloud();
  },
  methods: {
    generateWordCloud() {
      const data = [

        { text: '填充手机没有信号', size: 1443 },
    { text: '有信号无法拨通', size: 953 },
    { text: '通话过程中突然中断', size: 1406 },
    { text: '通话过程中有杂音听不清', size: 1629 },
    { text: '串线', size: 214 },
    { text: '通话过程中一方听不见', size: 1450 },
    { text: '流量', size: 20 },
    { text: '卡顿', size: 150 },
    { text: '声音断断续续', size: 50 },
    { text: '打不开', size: 70 },
    { text: '网络', size: 170 },
    { text: '无法接听来电', size: 300 },
    { text: '通话质量差', size: 400 },
    { text: '通话时间过长', size: 200 },
    { text: '无法接收短信验证码', size: 250 },
    { text: '拨号失败', size: 150 },
    { text: '通话中断频繁', size: 500 },
    { text: '无法拨打国际长途', size: 180 },
    { text: '语音信箱无法使用', size: 220 },
    { text: '通话质量不清晰', size: 380 },
    { text: '通话无法接通', size: 330 },
    { text: '无法开启免提模式', size: 280 },
    { text: '无法录音通话', size: 190 },
    { text: '有回声', size: 270 },
    { text: '无法接收来电', size: 240 },
    { text: '通话时长不准确', size: 210 },
    { text: '有杂音', size: 320 },
    { text: '通话无法保持', size: 260 },
    { text: '质量差', size: 350 },
    { text: '噪音', size: 230 },
    { text: '通话时长错误', size: 270 },
    { text: '无法接听短信通知', size: 90 },
    { text: '通话中断问题', size: 80 },
    { text: '呼叫转移问题', size: 70 },
    { text: '语音信箱功能异常', size: 60 },
    { text: '通话录音质量差', size: 50 },
    { text: '通话无法保密', size: 40 },
    { text: '无法使用免提模式', size: 30 },
    { text: '通话过程中自动静音', size: 20 },
    { text: '通话声音过小', size: 10 },
    { text: '通话时长不准确', size: 50 },
    { text: '无法拨打紧急电话', size: 90 },
    { text: '通话过程中有回音', size: 80 },
    { text: '通话被窃听', size: 10 },
    { text: '无法使用蓝牙耳机', size: 60 },
    { text: '通话被录音', size: 50 },
    { text: '通话中断时间过长', size: 40 },
    { text: '通话无法录音', size: 30 },
    { text: '通话质量不稳定', size: 20 },
    { text: '通话声音有杂音', size: 10 },
    { text: '通话过程中卡顿', size: 50 }
        // ... 添加更多的词和权重数据
      ];

      const layout = cloud()
        .size([500, 500])
        .words(data)
        .padding(5)
        .rotate(() => ~~(Math.random() * 2) * 90)
        .font('Impact')
        .fontSize(d => d.size)
        .on('end', this.drawWordCloud);

      layout.start();
    },
    drawWordCloud(words) {
      const svg = d3.select(this.$refs.wordcloud);

      svg
        .attr('width', 500)
        .attr('height', 500)
        .append('g')
        .attr('transform', 'translate(250, 250)')
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', d => d.size + 'px')
        .style('font-family', 'Impact')
        .style('fill', 'steelblue')
        .attr('text-anchor', 'middle')
        .attr('transform', d => `translate(${d.x}, ${d.y})rotate(${d.rotate})`)
        .text(d => d.text);
    }
  }
};
</script>

<style scoped>
svg {
  display: block;
  margin: 0 auto;
}
</style>
