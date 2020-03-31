<template>
	<div>
		<div class="shouye_mulu">
			<td>
				<tr><router-link to="/shouye/1">机票</router-link></tr>
				<tr><router-link to="/shouye/2">酒店</router-link></tr>
				<tr><router-link to="/shouye/3">火车票</router-link></tr>
				<tr><router-link to="/shouye/4">度假</router-link></tr>
				<tr><router-link to="/shouye/5">门票</router-link></tr>
				<tr><router-link to="/shouye/6">购物</router-link></tr>
				<tr><router-link to="/shouye/7">车车</router-link></tr>
				<tr><router-link to="/shouye/8">自由行</router-link></tr>
			</td>
		</div>
		<div class="shouuye_view">
          <router-view/>
		</div>
	</div>
</template>

<script>

</script>

<style>
	.shouye_mulu{
		display: inline-block;
		width: 5%;
		height: 200px;
		/* div顶部对齐 */
		vertical-align:top;
	}
	.shouye_mulu td tr{
		display: inline-block;
	}
	.shouuye_view{
		display: inline-block;
		width: 40%;
		vertical-align:top;
	}
</style>
