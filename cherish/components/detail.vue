<template>
  <div id="detail">
    <ul class="left">
      <li v-for="(item,index) in initData" :key="index">
        <router-link :to="item.url">{{item.title}}</router-link>
      </li>
    </ul>
    <div class="right">
      <Markdown />
    </div>
  </div>
</template>
<script>
import Markdown from './markdown'
export default {
  components: {
    Markdown
  },
  data(){
    return {
      type:'',
      initData: null,
    }
  },
  mounted() {
    console.log('posts----',this.$route)
    this.type = this.$route.path.split('/')[3]
    this.initData = this.$types.filter((item) => {
      return item.type == this.type
    })
  },
}
</script>
<style lang="less" scoped>
#detail{
  display: flex;
}
.left{
  // flex: 1;
}
.right{
  max-width:740px;
  margin: 0 auto;
}
</style>