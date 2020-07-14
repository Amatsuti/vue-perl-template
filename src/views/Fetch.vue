<template>
  <div class="fetch">
    <h1>（・ω・）</h1>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      error: null,
    }
  },
  methods: {
    setData (v) {
      this.error = v.error
    }
  },
  beforeRouteEnter (route, redirect, next) {
    store.dispatch('fetch', {})
      .then((response) => {
        next(vm => vm.setData(response))        
      })
  },
}
</script>
