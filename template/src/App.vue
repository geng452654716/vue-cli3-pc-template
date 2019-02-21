<template>
  <div id="app">
    {{#router}}
    <router-view></router-view>
    {{/router}}
    {{#!router}}
    <div>
      <p>welcome to vue-cli3-template</p>
      <p>详细说明请查看README</p>
    </div>
    {{/router}}
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>
{{#!router}}
<style lang="less">
div {
  margin-top: 200px;
}
p {
  text-align: center;
  font-size: 30px;
}
</style>
{{/router}}