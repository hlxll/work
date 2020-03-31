<template>
  <div id="app">
      <div class="login">
        <router-view/>
      </div>
      <div class="left">
          <router-view name="left" class="area left"/>
      </div>
      <div class="right">
        <router-view name="right" class="area right"/>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }}
</script>

<style>
    .login{
		width: 100%;
    }
	.right{
		width: 100%;
		line-height: 30px;
	}
</style>
