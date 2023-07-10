<template>
    <Layout>
        <Breadcrumb :title="'Part-' + this.routeId" :current-url="'Part-' + this.routeId"/>

        <div class="rn-blog-area rn-section-gap">
            <div class="container">
                <div class="row mt_dec--30">
                    <div class="col-lg-12">
                        <div class="row row--15">
                            <div class="col-lg-4 col-md-6 col-12 mt--30"
                                 data-aos="slide-up"
                                 data-aos-duration="800"
                                 :data-aos-delay="100 + index"
                                 v-for="(blog, index) in displayedPosts"
                                 :key="index">
                                <BlogPost :blog="blog"/>
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
    import Breadcrumb from '../components/elements/breadcrumb/Breadcrumb'
    import BlogPost from '../components/blog/BlogPost'
    import Icon from '../components/icon/Icon'
    import BlogPostMixin from '../mixins/BlogPostMixin'

    export default {
  name: 'BlogGridPage',
  components: { Icon, BlogPost, Layout, Breadcrumb },
  mixins: [BlogPostMixin],
  data() {
    return {
      routeId: this.$route.params.id,
      displayedPosts: []
    }
  },
  methods: {
  },
  mounted(){
    console.log(this.posts)
    if (this.routeId === '1') {
                this.displayedPosts = this.posts.filter(post => ['1', '2'].includes(post.id));
            } else if (this.routeId === '2') {
                this.displayedPosts = this.posts.filter(post => ['3', '4','5','6'].includes(post.id));
            }else if (this.routeId === '3') {
                this.displayedPosts = this.posts.filter(post => ['7', '8'].includes(post.id));
            }else if (this.routeId === '4') {
                this.displayedPosts = this.posts.filter(post => ['9', '10'].includes(post.id));
            }
  }
}

</script>