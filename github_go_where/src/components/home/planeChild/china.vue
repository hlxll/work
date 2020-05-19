<template>
	<div>
		<form>
			<tr>
              <input type="radio" checked="checked" name="one" value="dan" @click="change(false)"/>单程
              <input type="radio" name="one" value="wan" @click="change(true)"/>往返
            </tr>
			<tr>
				<td>
                    <tr><input type="text" name="tourl" placeholder="请输入"/></tr>
					<tr><input type="text" name="backurl"/></tr>
                </td>
                <td>
                    <tr><input type="datetime" name="todate"/></tr>
                    <tr><input type="datetime" name="backdate" :class="[this.flad?'add':'delete']"/></tr>
                </td>
            </tr>
        </form>
	</div>
</template>

<script>
export default {
  name: 'china',
  data () {
    return {
      flad: false
    }
  },
  methods: {
    change (data) {
      this.flad = data
    }
  }
}
</script>

<style>
	.add{
	}
	.delete{
		display:none;
	}
</style>
