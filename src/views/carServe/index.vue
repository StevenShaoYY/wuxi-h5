<template>
  <div class="container">
    <div class="middles">
      车辆
    </div>
    <footer-tabbar />
  </div>
</template>

<script>
  import FooterTabbar from 'components/FooterTabbar';
export default {
  name: "carServe",
  data() {
    return {};
  },
  components: {
    FooterTabbar
  },
  computed: {},
  methods: {
    goback() {
      this.$router.push({
        path: "/home"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
