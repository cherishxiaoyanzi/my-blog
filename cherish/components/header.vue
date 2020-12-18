<template>
  <div class="header">
    <a-row>
      <a-col :span="12">
        <h1><router-link to="/">logo</router-link></h1>
      </a-col>
      <a-col :span="12">
        <a-menu v-model:selectedKeys="current" mode="horizontal">
          <a-sub-menu>
            <template v-slot:title>
              <span class="submenu-title-wrapper">
               前端编程技术<a-icon type="caret-down" />
              </span>
            </template>
              <a-menu-item key="html">
              <router-link to="/html">html</router-link>
              </a-menu-item>
              <a-menu-item key="css">
                <router-link to="/css">css</router-link>
              </a-menu-item>
              <a-menu-item key="javascript">
                <router-link to="/javascript">javascript</router-link>
              </a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
            <template v-slot:title>
              <span class="submenu-title-wrapper">
               生活兴趣 <a-icon type="caret-down" />
              </span>
            </template>
              <a-menu-item key="tea">
                <router-link to="/tea">茶</router-link>
              </a-menu-item>
              <a-menu-item key="plant">
                <router-link to="/plant">植物</router-link>
              </a-menu-item>
              <a-menu-item key="guzheng">
                <router-link to="/guzheng">古筝</router-link>
              </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="softTool">软件工具 </a-menu-item>
          <a-menu-item key="other">其他 </a-menu-item>
          <a-menu-item key="about">
            <router-link to="/article/about.html">
              {{ $l('about') }}
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>

  </div>
</template>
<script>
// import { DownOutlined } from '@ant-design/icons-vue';
export default {
  data() {
    return {
      current: [''],
    };
  },
  components: {
    // DownOutlined,
  },
  mounted() {
    console.log('this.$site', this.$site)
  },
}
</script>
<style lang="less" scoped>

</style>