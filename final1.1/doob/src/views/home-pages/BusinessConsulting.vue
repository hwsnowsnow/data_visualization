<template>
    <Layout header-class="header-transparent" :footer-style="3">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-1 variation-default height-850 bg_image"
             data-black-overlay="7"
             :style="{'background-image': `url(${require(`@/assets/images/bg/bg-image-3.jpg`)})`}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <span class="subtitle" data-aos="fade-up" data-aos-delay="100">
                                20数科 江婷 周睿 雷若兰
                            </span>
                            <h1 class="title display-one" data-aos="fade-up" data-aos-delay="150">北京移动用户体验影响因素研究</h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="200">
                                数据可视化
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->
        <Separator/>

<!-- Start Counter Area  -->
<section class="rn-service-area rn-section-gap">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <SectionTitle
                            class="mb--50"
                            text-align="center"
                            subtitle=""
                            title="关于数据"
                            description=""
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Counter
                    text-align="center"
                    :counter-data="counterOneData"
                    column="col-lg-3 col-md-6 col-sm-6 col-12"
                    
                />
            </div>
        </section>
        <!-- End Counter Area -->

        <Separator/>

        <!-- Start Timeline Area -->
        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle=""
                            title="可视化"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <Timeline :timeline-data="timelineData"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Timeline Area -->

        <Separator/>

        <!-- Start Portfolio Area  -->
        <div class="rwt-portfolio-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle=""
                            title="总览"
                            description=""
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <Portfolio column="col-lg-4 col-md-6 col-12 mt--30" :portfolioData="portfolioData"/>
            </div>
        </div>
        <!-- End Portfolio Area  -->

        <Separator/>

        <!-- Start Elements Area  -->
        <div class="rwt-split-area rn-section-gap">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 mb--40">
                        <SectionTitle
                            text-align="center"
                            subtitle =""
                            title="总结"
                            description="一段描述 <br /> 可以做一些总结？"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Split :split-data="splitOneData"/>
            </div>
        </div>
        <!-- End Elements Area  -->

       
        <Separator/>

    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Icon from '../../components/icon/Icon'
    import Separator from '../../components/elements/separator/Separator'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import Portfolio from '../../components/elements/portfolio/Portfolio'
    import Split from "../../components/elements/split/Split"
    import Counter from "../../components/elements/counterUp/Counter";
    import Timeline from "../../components/elements/timeline/Timeline";

    export default {
        name: 'BusinessConsulting',
        components: {
            Timeline,
            Counter,
            Split,
            Portfolio,
            SectionTitle,
            Separator,
            Icon,
            Layout
        },
        created(){
            //console.log(this.counterOneData)
        },
        data() {
            return {
                timelineData: [
                    {
                        id: '1',
                        date: 'Part-1',
                        title: '基础背景',
                        description: '体现北京移动用户在全国范围内数量的庞大，且用户越来越多，体现我们有关用户体验的研究有一点意义。',
                        image: 'timeline-01',
                        workingStep: [
                            {
                                stepTitle: '地图',
                                stepDescription: '中国移动用户分布地图',
                            },
                            {
                                stepTitle: '柱状图+折线图',
                                stepDescription: '北京移动用户逐年用户数量',
                            },
                        ]
                    },
                    {
                        id: '2',
                        date: 'Part-2',
                        title: '对北京移动用户满意度的数据进行初步分析',
                        description: '介绍数据格式',
                        image: 'timeline-02',
                        workingStep: [
                            {
                                stepTitle: '层次树图',
                                stepDescription: '满意度及因素维度可视化',
                            },
                            /*{
                                stepTitle: '交互数据库',
                                stepDescription: '查看某个因素下用户的数量/某个用户具体的体验',
                            },*/
                            {
                                stepTitle: '环图',
                                stepDescription: '满意比例',
                            },
                            {
                                stepTitle: '热力图',
                                stepDescription: '满意度分数（体现满意度分数的分布）',
                            },
                            {
                                stepTitle: '词云',
                                stepDescription: '用户在体验过程中遇到的问题（整体词云做一个电话/电脑的形状）',
                            },
                        ]
                    },
                    {
                        id: '3',
                        date: 'Part-3',
                        title: '影响客户语音和上网业务满意度的主要因素与量化分析研究',
                        description: 'blabla',
                        image: 'timeline-02',
                        workingStep: [
                            {
                                stepTitle: '面积树图',
                                stepDescription: '三级因素及因素影响大小',
                            },
                            {
                                stepTitle: '力导向图',
                                stepDescription: '相关性分析，edge为相关权重，node是因素，展现因素之间的关系',
                            }
                        ]
                    },
                    /*{
                        id: '4',
                        date: 'Part-4',
                        title: '预测用户满意度',
                        description: 'blabla',
                        image: 'timeline-02',
                        workingStep: [
                            {
                                stepTitle: '神经网络图',
                                stepDescription: '模型结构',
                            },
                            {
                                stepTitle: '各种结果图',
                                stepDescription: '以及指标，体现研究严谨性、完整性',
                            }
                        ]
                    },*/
                ],
                counterOneData: [
                    {
                        number: 5438,
                        title: '语音业务（行）',
                    },
                    {
                        number: 7030,
                        title: '上网业务（行）',
                    },
                    {
                        number: 29,
                        title: '语音业务（列）',
                    },
                    {
                        number: 99,
                        title: '上网业务（列）',
                    }
                ],
                splitOneData: {
                    image: 'split-01.jpg',
                    title: 'Title',
                    description: `abcdefg一段描述`,
                    list: [
                        '- 这里可以分点描述',
                        '- 1',
                        '- 2',
                        '- 3'
                    ],
                },
                
                portfolioData:  [
                    {
                        id: 1,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                        title: '中国移动用户分布地图',
                        d3Component:'ChinaMap2',
                        subtitle: '地图',
                        date: '？',
                        client: '？',
                        category: 'Part1',
                        body: `<p>一段描述</p>`,
                        largeImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                    },
                    {
                        id: 2,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                        title: '北京移动用户逐年用户数量',
                        d3Component:'Hist',
                        subtitle: '柱状图+折线图',
                        date: '2014-2023',
                        client: '某某统计数据',
                        category: 'Part1',
                        body: `<p>一段描述</p>`,
                        largeImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                        
                    },
                    {
                        id: 3,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                        title: '满意度及因素维度可视化',
                        d3Component:'conTree',
                        subtitle: '层次树图',
                        /*date: '01 March 2021',*/
                        client: '?',
                        category: 'Part2',
                        body: `<p>一段描述</p>`,
                        largeImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                    },
                    {
                        id: 4,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        title: '满意比例',
                        d3Component:'pie',
                        subtitle: '环图',
                        date: '？',
                        client: '？',
                        category: 'Part2',
                        body: `<p>一段描述</p>`,
                        largeImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                        
                    },
                    {
                        id: 5,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        title: '满意度分布',
                        d3Component:'HeatMap',
                        subtitle: '热力图',
                        date: '？',
                        client: '？',
                        category: 'Part2',
                        body: `<p>一段描述</p>`,
                        largeImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                        
                    },
                    {
                        id: 6,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                        title: '用户在体验过程中遇到的问题',
                        d3Component:'CloudNet',
                        subtitle: '词云',
                        date: '？',
                        client: '？',
                        category: 'Part2',
                        body: `<p>一段描述</p>`,
                        largeImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                    },
                    {
                        id: 7,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-07.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-07.jpg`),
                        title: '三级因素及影响因素大小',
                        d3Component:'BubbleMap',
                        subtitle: '面积树图',
                        date: '？',
                        client: '？',
                        category: 'Part3',
                        body: `<p>一段描述</p>`,
                        largeImage: require(`@/assets/images/portfolio/portfolio-07.jpg`),
                        
                    },
                    {
                        id: 8,
                        portfolioImage: require(`@/assets/images/portfolio/portfolio-08.jpg`),
                        image: require(`@/assets/images/portfolio/portfolio-08.jpg`),
                        title: '因素相关性分析',
                        d3Component:'force',
                        subtitle: '力导向图',
                        date: '？',
                        client: '？',
                        category: 'Part3',
                        body: `<p>一段描述</p>`,
                        largeImage: require(`@/assets/images/portfolio/portfolio-08.jpg`),
                        
                    },
                ]
            }
        }
    }
</script>