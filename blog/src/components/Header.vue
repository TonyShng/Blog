<!-- 头部 -->
<template>
    <div class="site-header">
        <div class="site-header-wrap">
            <div class="site-header-inside">
                <div class="site-branding">
                    <p class="profile">
                        <router-link to="/index">
                        <img src="../assets/logo.jpg" alt>
                        </router-link>
                    </p>
                    <div class="site-identity">
                        <h1>赵四</h1>
                        <p>WEB DEVELOPER</p>
                    </div>

                    <div class="site-nav-inside">
                        <ul class="menu">
                            <li class="menu-item"><a>home</a></li>
                            <li class="menu-item"><a>about</a></li>
                            <li class="menu-item"><a>note</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>

<style scoped>
ul{
    padding: 0;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
}
.site-header{
    background: #1d1d1d;
    color: #fff;
    height: 100%;
    left: 0;
    position: fixed;
    text-align: center;
    top: 0;
}

.profile img{
    width: 100px;
    border: 2px solid #d4a259;
    border-radius: 50%;
}

.site-identity{
    padding-bottom: 1.6em;
}

.site-identity h1{
    font-size: 30px;
    line-height: 1;
}

.site-identity p{
    font-size: 12px;
    color: rgb(102, 102, 102);
}

.menu {
    font-size: 0.8rem;
    color: #aaa;
    line-height: 1.5;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border-bottom: 1px solid #333;
}

.menu-item{
    border-top: 1px solid #333;
    padding: 0.5rem 0;
}

.menu-item a{
    color: #aaa;
    cursor: pointer;
}

.menu-item a:hover{
    color: #d4a259;
}

.menu-item-select{
    color: #d4a259 !important;
}

@media only screen and (min-width: 1001px){
    .site-header{
        width: 300px;
    }
    .site-header-inside{
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 3.33333em;
        padding-top: 3.33333em;
    }
}

@media only screen and (min-width: 801px)and(max-width: 1000px){
    .site-header{
        width: 30vw;
    }
    .site-header-inside{
        padding-bottom: 3.33333em;
        padding-top: 3.33333em;
    }
}

@media only screen and (max-width: 800px){
    .site-header{
        width: 100%;
        height: 78px;
    }
    .profile img{
        width: 50px;
    }
}

.site-header-wrap{
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
}


</style>