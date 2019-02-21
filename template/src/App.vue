<template>
  <div id="app">
    {{#router}}
    <router-view></router-view>
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