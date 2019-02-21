<template>
  <div>
    <p>welcome to vue-cli3-template</p>
    <p>详细说明请查看README</p>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
export default {
  created() {
    console.log(this.c);
  },
  computed: {
    ...mapState('demo',{
      a: "defaultField"
    }),
    ...mapGetters('demo', {
      c: "defaultField"
    })
  }
};
</script>

<style lang="less">
div {
  margin-top: 200px;
}
p {
  text-align: center;
  font-size: 30px;
}
</style>
