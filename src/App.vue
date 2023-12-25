<script setup>
import { RouterView } from 'vue-router'
import myheder from './components/myheder.vue'
import myfooter from './components/myfooter.vue'
</script>
<template>
  <myheder></myheder>
  <RouterView/>
  <myfooter></myfooter>
</template>
<style scoped>

</style>