<template>
  <div id="app" class="container">
    <Header></Header>
    <List></List>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";

export default {
  name: 'app',
  components: {
    Header,
    List
  }
};
</script>