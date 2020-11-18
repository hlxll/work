<template>
	<div>
		<div>
			<button v-on:click="keepBtn('')">one</button><button v-on:click="keepBtn('Child')">two</button>
			<button v-bind:id="'bind-'+id" v-bind:disabled="isButtonDisabled">bind测试</button>
			<keep-alive>
				<component v-bind:is="currentTabComponent"></component>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import Child from './trainTicketChild/index.vue'
export default {
	components: {
		Child
	},
	data(){
		return{
			currentTabComponent: '',
			isButtonDisabled: true,
			id: 'bind'
		}
	},
	methods: {
		keepBtn(item){
			this.currentTabComponent = item;
		}
	}
}
</script>

<style>
</style>
