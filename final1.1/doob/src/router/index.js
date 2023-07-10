import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/Demo'
import About from '../views/About'
import ButtonPage from '../views/ButtonPage'
import ServicePage from '../views/ServicePage'
import ServiceDetailsPage from '../views/ServiceDetailsPage'
import CounterUpPage from '../views/CounterUpPage'
import ProgressbarPage from '../views/ProgressbarPage'
import AccordionPage from '../views/AccordionPage'
import SocialSharePage from '../views/SocialSharePage'
import BlogGridPage from '../views/BlogGridPage'
import BlogGridSidebarPage from '../views/BlogGridSidebarPage'
import BlogListPage from '../views/BlogListPage'
import BlogListSidebarPage from '../views/BlogListSidebarPage'
import BlogDetailsPage from '../views/BlogDetailsPage'
import BlogCategoryPosts from '../components/blog/BlogCategoryPosts'
import TeamPage from '../views/TeamPage'
import PortfolioPage from '../views/PortfolioPage'
import PortfolioThreeColumnPage from '../views/PortfolioThreeColumnPage'
import PortfolioFullWidthPage from '../views/PortfolioFullWidthPage'
import PortfolioGridLayoutPage from '../views/PortfolioGridLayoutPage'
import PortfolioBoxLayoutPage from '../views/PortfolioBoxLayoutPage'
import PortfolioDetailsPage from '../views/PortfolioDetailsPage'
import TestimonialPage from '../views/TestimonialPage'
import TimelinePage from '../views/TimelinePage'
import TabPage from '../views/TabPage'
import PricingPage from '../views/PricingPage'
import SplitSectionPage from '../views/SplitSectionPage'
import CallToActionPage from '../views/CallToActionPage'
import VideoPage from '../views/VideoPage'
import GalleryPage from '../views/GalleryPage'
import ContactPage from '../views/ContactPage'
import BrandPage from '../views/BrandPage'
import ErrorPage from '../views/404'
import AdvanceTabPage from '../views/AdvanceTabPage'
import BrandCarouselPage from '../views/BrandCarouselPage'
import AdvancePricingPage from '../views/AdvancePricingPage'
import BusinessConsulting from '../views/home-pages/BusinessConsulting'
import BusinessConsulting2 from '../views/home-pages/BusinessConsulting2'
import Corporate from '../views/home-pages/Corporate'
import Business from '../views/home-pages/Business'
import DigitalAgency from '../views/home-pages/DigitalAgency'
import Finance from '../views/home-pages/Finance'
import Company from '../views/home-pages/Company'
import MarketAgency from '../views/home-pages/MarketAgency'
import TravelAgency from '../views/home-pages/TravelAgency'
import Consulting from '../views/home-pages/Consulting'
import SeoAgency from '../views/home-pages/SeoAgency'
import PersonalPortfolio from '../views/home-pages/PersonalPortfolio'
import EventConference from '../views/home-pages/EventConference'
import CreativePortfolio from '../views/home-pages/CreativePortfolio'
import Freelancer from '../views/home-pages/Freelancer'
import InternationalConsulting from '../views/home-pages/InternationalConsulting'
import Startup from '../views/home-pages/Startup'
import WebAgency from '../views/home-pages/WebAgency'

Vue.use(VueRouter)

const routes = [
    
    {
        path:'/',
        name:'test',
        component:BusinessConsulting,
        meta:{
            title:'test',
        }
    },
   
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioPage,
        meta: {
            title: 'Portfolio',
        },
    },
    {
        path:'/BlogGridPage/:id',
        name:'BlogGridPage details',
        component:BlogGridPage,
        meta:{
            title:'BlogGridPageDetails',
        }
    },
    {
        path: '/portfolio-details/:id/:d3Component',
        name: 'Portfolio details',
        component: PortfolioDetailsPage,
        meta: {
            title: 'PortfolioDetails',
        },
    },
    {
        path: '/error',
        name: 'Error',
        component: ErrorPage,
        meta: {
            title: '404 || Doob Business and Consulting Bootstrap5 Template',
        },
    },
   
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0)
});

export default router
