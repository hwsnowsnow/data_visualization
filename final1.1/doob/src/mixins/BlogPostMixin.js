import AppFunctions from '../helpers/AppFunctions'

export default {
    data() {
        return {
            posts: [
                {
                    id: '1',
                    img: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                    author: '地图',
                    components:'ChinaMap2',
                    //components:'d3Hist',//假设，后续改成对应组件名就可以
                    title: '中国移动用户分布',
                },
                {
                    id: '2',
                    img: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                    author: '柱状图+折线图',
                    components:'Hist',
                    title: '北京移动用户逐年用户数量',
                },
                {
                    id: '3',
                    img: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                    author: '层次树图',
                    components:'conTree',
                    title: '满意度及因素维度可视化',
                },
                {
                    id: '4',
                    img: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                    author: '环图',
                    components:'pie',
                    title: '满意比例',
                },
                {
                    id: '5',
                    img: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                    author: '热力图',
                    components:'HeatMap',
                    title: '满意度分数分布',
                },
                {
                    id: '6',
                    img: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                    author: '词云',
                    components:'CloudNet',
                    title: '用户在体验过程中所遇问题',
                },
                {
                    id: '7',
                    img: require(`@/assets/images/portfolio/portfolio-07.jpg`),
                    author: '面积树图',
                    components:'BubbleMap',
                    title: '三级因素及因素影响大小',
                },
                {
                    id: '8',
                    img: require(`@/assets/images/portfolio/portfolio-08.jpg`),
                    author: '力导向图',
                    components:'force',
                    title: '因素相关性分析',
                },
                {
                    id: '9',
                    img: require(`@/assets/images/blog/blog-03.jpg`),
                    author: '神经网络图',
                    title: '模型结构',
                },
                {
                    id: '10',
                    img: require(`@/assets/images/blog/blog-03.jpg`),
                    author: '',
                    title: '指标与结果',
                    
                },
            ],
            categories: '',
            tags: '',
            AppFunctions
        }
    },
    methods: {
        blogCategories() {
            let cats = this.posts.map(item => {
                    return item.categories;
                }),
                singleCatArray = AppFunctions.flatDeep(cats),
                categories = [];

            singleCatArray.forEach(cat => {
                const obj = {
                    title: cat.trim(),
                    slug: AppFunctions.slugify(cat),
                    count: 1
                }
                const objIndex = AppFunctions.containsObject(obj, categories);
                if (objIndex !== -1) {
                    const prevCount = categories[objIndex].count;
                    categories[objIndex] = {
                        title: cat.trim(),
                        slug: AppFunctions.slugify(cat),
                        count: prevCount + 1
                    }
                } else {
                    categories.push(obj);
                }
            });

            this.categories = categories;
        },
        blogTags() {
            let tags = this.posts.map(item => {
                    return item.tags;
                }),
                singleTagArray = AppFunctions.flatDeep(tags),
                tagsData = [];

            singleTagArray.forEach(tag => {
                const obj = {
                        title: tag.trim(),
                        slug: AppFunctions.slugify(tag)
                    },
                    objIndex = AppFunctions.containsObject(obj, tagsData);

                if (objIndex !== -1) {
                    tagsData[objIndex] = {
                        title: tag.trim(),
                        slug: AppFunctions.slugify(tag)
                    }
                } else {
                    tagsData.push(obj);
                }
            });

            this.tags = tagsData;
        }
    },
    created() {
        this.blogCategories();
        this.blogTags();
    }
}