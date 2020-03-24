<template>
  <div>
    车辆
  </div>
</template>

<script>

export default {
  name: 'feedback',
  data () {
    return {
      title: '意见反馈', // 名称
    }
  },
  components: {

  },
  computed: {},
  created () {

  },
  methods: {
    goback () {
      this.$router.push('/mine')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
