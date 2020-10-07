<template>
  <h1>{{ msg }}</h1>
  <button @click="addCount">count is: {{ count }}</button>
</template>

<script>
import {ref} from 'vue';
import add from './add'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    let {count, addCount} = add()
    //在组合api中定义的属性和方法，想在外界使用，需要return
    return {count, addCount};
  }
}
</script>
