<template>
    <Layout>
        <div class="rwt-portfolio-area rn-section-gap">
            <div class="container-fluid plr--30">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="center"
                            subtitle="Portfolio Default"
                            title="You can customize everything!"
                            data-aos="fade-up"
                            data-aos-delay="60"
                        />
                    </div>
                </div>
                <Portfolio class="mt--20" :portfolio-data="portfolioItems" column="col-lg-4 col-md-6 mt--30 box-grid-layout no-overlay"/>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Portfolio from '../components/elements/portfolio/Portfolio'
    import SectionTitle from '../components/elements/sectionTitle/SectionTitle'
    import Layout from '../components/common/Layout'
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import PortfolioItemMixin from '../mixins/PortfolioItemMixin'

    export default {
        name: "PortfolioBoxLayoutPage",
        components: {Portfolio, SectionTitle, Layout, Breadcrumb},
        mixins: [PortfolioItemMixin]
    }
</script>