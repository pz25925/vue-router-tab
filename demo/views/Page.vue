<template>
  <div>
    <h2 @click="click">
      页面{{ pageId }}
    </h2>

    <p>你在 <strong class="text-strong">{{ pageTime }}</strong> 秒前打开本页面</p>

    <h3>页签操作</h3>

    <p>
      <a
        class="demo-btn"
        @click="$routerTab.refresh()"
      >刷新当前页面</a>

      <a
        class="demo-btn"
        @click="$routerTab.close()"
      >关闭当前页面</a>
    </p>

    <p>
      <router-link
        class="demo-btn"
        :to="'../page/'+ nextId"
      >
        打开“页面{{ nextId }}”
      </router-link>
    </p>

    <p v-if="prevId > 0">
      <router-link
        class="demo-btn"
        :to="'../page/'+ prevId"
      >
        打开“页面{{ prevId }}”
      </router-link>

      <router-link
        class="demo-btn"
        :to="'../page/'+ prevId"
        @click.native="$routerTab.refresh('../page/'+ prevId)"
      >
        全新打开“页面{{ prevId }}”
      </router-link>
    </p>

    <p>
      <a
        class="demo-btn"
        @click="$router.push('../tab-dynamic')"
      >打开“动态更新页签”</a>

      <a
        class="demo-btn"
        @click="$routerTab.close('../tab-dynamic')"
      >关闭“动态更新页签”</a>
    </p>

    <h3>iframe 页签操作</h3>

    <p>
      <a
        class="demo-btn"
        @click="$routerTab.openIframeTab('https://www.baidu.com', '百度', 'rt-icon-web')"
      >打开“百度”</a>

      <a
        class="demo-btn"
        @click="$routerTab.refreshIframeTab('https://www.baidu.com')"
      >刷新“百度”</a>

      <a
        class="demo-btn"
        @click="$routerTab.closeIframeTab('https://www.baidu.com')"
      >关闭“百度”</a>
    </p>

    <h3>打开 iframe 页签</h3>

    <div class="custom-iframe">
      <label>
        名称：
        <input
          v-model="iframe.title"
          name="title"
          placeholder="页签标题"
        >
      </label>

      <label>
        网址：
        <input
          v-model="iframe.src"
          name="src"
          placeholder="请输入完整的网址"
        >
      </label>

      <a
        class="demo-btn primary"
        @click="iframe.src && $routerTab.openIframeTab(iframe.src, iframe.title, 'rt-icon-web')"
      >打开页签</a>
    </div>

    <h3>路由信息</h3>

    <page-route-info />
  </div>
</template>

<script>
import pageTimer from '../mixins/pageTimer'
import PageRouteInfo from '../components/PageRouteInfo'

export default {
  name: 'Page',
  components: { PageRouteInfo },
  mixins: [ pageTimer ],
  data () {
    let id = this.$route.params.id
    let isI18nPage = this.$route.fullPath.indexOf('/i18n/') > -1
    return {
      pageId: id,
      nextId: +id + 1,
      prevId: +id - 1,
      routeTab: {
        title: isI18nPage
          ? ['page', id]
          : '页面' + id
      },

      iframe: {
        src: 'https://www.hao123.com/',
        title: 'Hao123'
      }
    }
  },

  methods: {
    click () {
      console.log(`页面${this.pageId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-iframe {
  label {
    display: block;
    margin-bottom: .8em;
  }

  input {
    padding: .4em .8em;
  }
}
</style>
