<template>
    <div class="rn-card box-card-style-default"
         :class="{'card-list-view': blogPostStyle === 'list'}">
        <div class="inner">
            <div class="thumbnail">
                <router-link class="image" :to="`/portfolio-details/${blog.id}/${blog.components}`">
                    <img class="w-100" :src="blog.img" :alt="blog.title">
                </router-link>
            </div>
            <div class="content">
                <ul v-if="blogPostStyle === 'card'" class="rn-meta-list">
                    <li>{{ blog.author }}
                        <!--<router-link :to="''">
                            
                        </router-link>-->
                    </li>
                    <!--<li class="separator">/</li>
                    <li>{{ blog.publishedAt }}</li>-->
                </ul>
                <h4 class="title">
                    <router-link :to="`/portfolio-details/${blog.id}/${blog.components}`">
                        {{ blog.title }}
                    </router-link>
                </h4>
                <ul v-if="blogPostStyle === 'list'" class="rn-meta-list">
                    <li>
                        <router-link :to="''">
                            {{ blog.author }}
                        </router-link>
                    </li>
                    <li class="separator">/</li>
                    <li>{{ blog.publishedAt }}</li>
                </ul>
                <p v-if="blogPostStyle === 'list'" class="descriptiion">
                    {{ blog.excerpt }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlogPost',
        props: {
            blog: {},
            blogPostStyle: {
                type: String,
                default: 'card'
            }
        }
    }
</script>