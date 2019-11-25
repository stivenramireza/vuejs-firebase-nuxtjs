<template>
  <div>
    <h1>Protected Route</h1>
    {{user}}
    <h3>Welcome {{user.email}}!</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'Home',
  computed:{
    ...mapState(['user'])
  }
}
</script>

