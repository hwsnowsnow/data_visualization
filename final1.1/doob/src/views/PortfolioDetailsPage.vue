<template>
    <Layout>
        <div class="rwt-portfolio-details rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="inner">
                            <div class="details-list">
                                <div class="thumbnail alignwide">
                                    <component :is="dynamicComponent"></component>
                                    <!--这里放可视化,用vue组件写可视化，然后把组件当参数插进来，注意在import和components部分导入所需组件，然后使用switch选择组件-->
                                </div>

                                <div class="row mt--40 row--30">
                                    <div class="col-lg-6">
                                        <div class="content-left">
                                            <h4 class="title">{{ portfolio.title }}</h4>
                                            <div class="single-list-wrapper">
                                                <div class="single-list">
                                                    <label>时间:</label>
                                                    <span>{{ portfolio.date }}</span>
                                                </div>
                                                <div class="single-list">
                                                    <label>数据来源:</label>
                                                    <span>{{ portfolio.client }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mt_md--30 mt_sm--30">
                                        <div class="content-right">
                                            <h5 class="subtitle">{{ portfolio.subtitle }}</h5>
                                            <div class="description" v-html="portfolio.body"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template> 

<script>
    import Layout from '../components/common/Layout'
    import PortfolioItemMixin from '../mixins/PortfolioItemMixin'
    import d3Hist from '../components/d3Component/D3Hist'
    import Hist from '../components/d3Component/Hist.vue'
    import conTree from '../components/d3Component/con-tree.vue'
    import pie from '../components/d3Component/D3Pie.vue'
    import HeatMap from '../components/d3Component/con-online.vue'
    import BubbleMap from '../components/d3Component/bubble.vue'
    import force from '../components/d3Component/fdg.vue'
    import ChinaMap2 from '../components/d3Component/chinamap copy'
    import CloudNet from '../components/d3Component/d3cloud-pic.vue'
    //import CircleTest from '../components/d3Component/D3Pie.vue'
    //import Button from "../components/elements/button/Button";

    export default {
        name: 'PortfolioDetailsPage',
        components: {Layout,d3Hist,Hist,conTree,pie,HeatMap,BubbleMap,force,CloudNet},
        mixins: [PortfolioItemMixin],
        data() {
            return {
                id: this.$route.params.id,
                portfolio: {},
                d3ComponentName:this.$route.params.d3Component,
                dynamicComponent:null
            }
        },
        methods: {
            getPortfolio(portfolioId) {
                this.portfolio = this.portfolioItems.find(item => item.id == portfolioId);
            },
        },
        created() {
            this.getPortfolio(this.id);
            console.log(this.portfolio);
            console.log(this.dynamicComponent);
            // 根据 d3ComponentName 动态选择组件
    switch (this.d3ComponentName) {
      case 'ChinaMap2':
        this.dynamicComponent = ChinaMap2;
        break;
      // 添加其他可能的 d3 组件
      case 'Hist':
        this.dynamicComponent = Hist;
        break;
      case 'conTree':
        this.dynamicComponent = conTree;
        break;
      case 'pie':
        this.dynamicComponent = pie;
        break;
      /*case 'CircleTest':
        this.dynamicComponent = CircleTest;
        break;*/
      case 'HeatMap':
        this.dynamicComponent = HeatMap;
        break;
      case 'BubbleMap':
        this.dynamicComponent = BubbleMap;
        break;
      case 'force':
        this.dynamicComponent = force;
        break;  
      case 'CloudNet':
        this.dynamicComponent = CloudNet;
        break;  
      default:
        this.dynamicComponent = null;
        break;}
        }
    }
</script>