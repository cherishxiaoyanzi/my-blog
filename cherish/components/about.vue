<template>
  <div id="about">
    <!--<header>
      <Content slot-key="header"></Content>
    </header>
    <main>
      <Content />
    </main>
    <footer>
      <Content slot-key="footer"></Content>
    </footer>-->
    <Markdown />
  </div>
</template>
<script>
import Markdown from './markdown'
export default {
  name: 'about',
  components: {
    Markdown
  },
  data() {
    return {
      
    }
  },
}
</script>
<style lang="less" scoped>

</style>