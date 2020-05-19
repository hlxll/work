<template>
	<div>
		<div class="shouye_mulu">
			<td>
				<tr><router-link to="/shouye/plane">机票</router-link></tr>
				<tr><router-link to="/shouye/hotel">酒店</router-link></tr>
				<tr><router-link to="/shouye/trainTicket">火车票</router-link></tr>
				<tr><router-link to="/shouye/holiday">度假</router-link></tr>
				<tr><router-link to="/shouye/tickets">门票</router-link></tr>
				<tr><router-link to="/shouye/shopp">购物</router-link></tr>
				<tr><router-link to="/shouye/car_car">车车</router-link></tr>
				<tr><router-link to="/shouye/independent">自由行</router-link></tr>
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
    padding-left: 10%;
		display: inline-block;
		width: 5%;
		height: 320px;
		/* div顶部对齐 */
		vertical-align:top;
	}
	.shouye_mulu td tr{
		display: inline-block;
		height: 40px;
	}
	.shouuye_view{
		display: inline-block;
		width: 50%;
		height: 320px;
		vertical-align:top;
	}
</style>
