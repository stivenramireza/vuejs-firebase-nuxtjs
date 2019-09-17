<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link :to="{name: 'home'} ">
        <img src="@/assets/logo.png" alt="">
      </router-link>
    </div>
    <router-view/>
  </div>
</template>