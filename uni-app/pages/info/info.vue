<template>
	<view>
		<button type="primary">计时开始</button>
		<text>60</text>
		<view class="">
			<text>{{id}}</text>
		</view>
		<view class="">
			<timers></timers>
		</view>
	</view>
</template>

<script>
	import timers from '../timer/timer'
	export default {
		components:{
			timers
		},
		data() {
			return {
				id: ''
			};
		},
		onLoad(option) {
			console.log(option)
			this.id = option.ytcid
		}
	}
</script>

<style>

</style>
