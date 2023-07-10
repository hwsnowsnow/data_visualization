export default {
    data() {
        return {
           portfolioItems:  [
               {
                   id: 1,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-01.jpg`),
                   title: '中国移动用户分布地图',
                   subtitle: '地图',
                   date: '2023年4月',
                   client: '中华人民共和国工业和信息化部',
                   category: 'Part1',
                   body: `<p>北京作为中国首都，人口密集，中国移动用户数量庞大，拥有众多消费者</p> `,
                   largeImage: require(`@/assets/images/portfolio/portfolio-01.jpg`),
               },
               {
                   id: 2,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-02.jpg`),
                   title: '北京移动用户逐年用户数量',
                   subtitle: '柱状图+折线图',
                   date: '2018-2023.4',
                   client: '中国移动官网',
                   category: 'Part1',
                   body: `<p>本数据截止到2023年4月，可见近期每年用户数持续稳步上涨，有着很可观的用户群体</p>`,
                   largeImage: require(`@/assets/images/portfolio/portfolio-02.jpg`),
               },
               {
                   id: 3,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-03.jpg`),
                   title: '满意度及因素维度可视化',
                   subtitle: '层次树图',
                   date: '2022年',
                   client: '中国移动',
                   category: 'Part2',
                   body: `<p>为得到影响客户满意度的主要因素并量化分析结果，考虑技术与非技术原因，将客户满意度影响因素进行三级指标的划分。</p>
                   <br /> <p>技术因素包含设备性能、设备质量；服务因素包含网络质量、客服质量；用户因素包含消费信息、用户信息、终端。技术因素指服务端设备的性能水平，囊括接入性能、保持性能、移动性能、传输性能、资源利用率、干扰性能等。设备性能指信息传输、资源利用率等性能，具体影响参数有可用性、吞吐量、时延、丢包率等。</p>
                   <br /> <p>服务因素指运营商为用户提供的相应服务内容，具体针对语音业务有通话质量、客服质量，针对上网业务包括网络质量、客服质量。网络质量主要指覆盖率，具体分为网络覆盖和信号强度。客服质量指客服人员对用户进行主动回访或响应用户需求的服务水平，具体分为业务提供水平和投诉处理情况。</p>
                   <br /> <p>而用户因素则包括了用户主观感受、人为等因素。将因素具体化，有用户信息（用户主观感受）、用户上下文、终端设备、用户消费信息和用户类型等。用户信息是指用户个体相关信息，包括用户的年龄、性别、使用场景等。终端设备则指用户用来体验移动业务的设备信息，包含设备类型和设备品牌。消费信息指用户选择何种资费品牌和用户每月各项业务消费费用之和。用户类型分别指用户使用网络的制式(如：2G/3G/4G)和按照 ARPU (用户每月平均消费量)对用户层次的划分，诸如此类在数据集特征中有具体体现。移动网络中，每个用户基于自身使用业务时根据上下文情景的不同，满意度也不尽相同。</p>`,
                   largeImage: require(`@/assets/images/portfolio/portfolio-03.jpg`),
               },
               {
                   id: 4,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-04.jpg`),
                   title: '满意比例',
                   subtitle: '环图',
                   date: '2022年',
                   client: '对用户打分结果进行划分，满分10分，其中7分-10分为满意，4分-6分为一般，4分以下为不满意。',
                   category: 'Part2',
                   body: `<p>内：上网满意度，外：语音满意度</p> <br /> <p>可以非常明显的观察到无论对于语音与上网，绝大部分用户还是满意于当前北京移动所提供的服务</p>`,
                   largeImage: require(`@/assets/images/portfolio/portfolio-04.jpg`),
               },
               {
                   id: 5,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                   title: '满意度二级因素相关性分析',
                   subtitle: '热力图',
                   date: '2022年',
                   client: '对影响用户使用感受的因素进行相关性分析，对冗余或不相关特征使用t-SNE算法降维，降低数据多重共线性。',
                   category: 'Part2',
                   body: `<p>左：上网满意度，右：语音满意度</p>
                   <br /> <p>结论：</p>
                   <br /> <p>1. 设备性能与设备质量、通话质量、客服质量以及终端之间存在一定程度的正相关性。这意味着设备性能好的设备往往也具有较好的设备质量、通话质量、客服质量和终端性能。</p>
                   <br /> <p>2. 设备性能与消费信息之间的相关性较弱。这表示设备性能与消费信息之间的关联不明显，设备性能的好坏并不直接决定消费信息的质量。</p>
                   <br /> <p>3. 用户信息与设备性能之间存在一定的负相关性。这意味着设备性能较差的用户可能更倾向于提供有关设备性能的负面反馈或投诉。</p>
                   <br /> <p>4. 设备质量与通话质量之间存在较强的正相关性。这表明设备质量好的设备通常也提供更好的通话质量。</p>
                   <br /> <p>5. 客服质量与消费信息之间存在较强的正相关性。这意味着客服质量好的用户可能更倾向于提供积极的消费信息反馈。</p>
                   <br /> <p>这些相关性系数提供了不同变量之间关联的线索，但并不能确定因果关系。</p>`,
                   largeImage: require(`@/assets/images/portfolio/portfolio-05.jpg`),
                   
               },
               {
                   id: 6,
                   portfolioImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                   image: require(`@/assets/images/portfolio/portfolio-06.jpg`),
                   title: '用户在体验过程中遇到的问题',
                   subtitle: '词云图',
                   date: '2022年',
                   client: '中国移动',
                   category: 'Part2',
                   body: `<p>通过自然语言处理对用户遇到的问题提取关键词并得到出现频率。</p>
                   <br /> <p>网络问题、填充手机没有信号、有信号无法拨通、通话过程中突然中断、杂音等问题具有普遍性。</p>`,
                   largeImage: require(`@/assets/images/portfolio/portfolio-06.jpg`),
               },
               {
                id: 7,
                portfolioImage: require(`@/assets/images/portfolio/portfolio-07.jpg`),
                image: require(`@/assets/images/portfolio/portfolio-07.jpg`),
                title: '用户体验满意度二级指标权重分析',
                subtitle: '面积树图',
                date: '2022年',
                client: '使用变异系数法确定各指标的权重，根据各项指标的权重大小，建立模糊评价模型，并由此获得综合评价向量。',
                category: 'Part3',
                body: `<p>结论：</p>
                <br /> <p>对于语音业务，从权重分配上可以看出，设备性能、通话质量、消费信息是影响客户满意度最重要的三个指标；其次是设备质量、用户信息以及终端。</p>
                <br /> <p>对于上网业务，从权重分配上可以看出，网络质量、设备性能、用户信息是影响客户满意度最重要的三个指标；其次是设备质量、用户消费信息、以及客服质量。</p>
                <br /> <p>综上所述，虽然影响客服满意度的因素涵盖了各个方面，但运营商需要着重改进提供的服务质量，改善用户的通话、网络质量，才能有效提高用户满意度。</p>`,
                largeImage: require(`@/assets/images/portfolio/portfolio-07.jpg`),
                
            },
            {
                id: 8,
                portfolioImage: require(`@/assets/images/portfolio/portfolio-08.jpg`),
                image: require(`@/assets/images/portfolio/portfolio-08.jpg`),
                title: '满意度三级指标因素相关性分析',
                subtitle: '力导向图',
                date: '2022年',
                client: '',
                category: 'Part3',
                body: `<p>结论：</p> 
                <br /> <p>1. 网络性能方面：</p> 
                <br /> <p>可用性可能与数据传输速率和延迟之间的关系密切相关，重点关注提高吞吐量和降低时延，以提升网络的可用性。</p>
                <br /> <p>2. 用户因素：</p> 
                <br /> <p>性别与其他变量之间的相关性接近零，对其他因素的影响较小。不同的使用场景对信号强度仍有一定的影响。根据不同的使用场景来调整信号覆盖范围和信号强度，以提供更好的用户体验。</p> 
                <br /> <p>3. 终端因素：</p> 
                <br /> <p>终端价格与其他变量之间的相关性较低，用户更关注的是性能、功能和品质等方面。终端价格和信号强度之间存在一定的关联。更多地关注网络基础设施和服务的提升，而不仅仅依赖于特定终端类型的选择。</p> `,
                largeImage: require(`@/assets/images/portfolio/portfolio-08.jpg`),
                
            },
           ]
        }
    }
}