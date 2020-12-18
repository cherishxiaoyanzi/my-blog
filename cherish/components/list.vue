<template>
  <div id="list">
    <ul>
      <li v-for="(item,index) in initData" :key="index">
        <router-link :to="item.url">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      type: '',
      initData: null
    }
  },
  watch:{
    $route(v,o) {
      this.type = v.path.split('/')[1]
      this.initData = this.$types.filter((item) => {
      return item.type == this.type
    })
    }
  },
  mounted() {
    this.type = this.$route.path.split('/')[1]
    console.log('types',this.$types)
    this.initData = this.$types.filter((item) => {
      return item.type == this.type
    })

  },
  methods: {
    
  },
}
</script>
<style lang="less" scoped>

</style>