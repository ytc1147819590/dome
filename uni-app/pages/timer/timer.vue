<template>
	<view>
		<text>{{text}}</text>
		<text>{{i}}</text>
		<text>{{s}}</text>
		<text>{{dates1}}</text>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: 600,
				timers: null,
				dates: ''
			};
		},
		computed:{
			dates1() {
				var text = `${this.dates.getHours()}${this.dates.getMinutes()}${this.dates.getSeconds()}`
				return text
			}
		},
		methods: {
			parentHandleclick(e) {
				if (e) {
					clearInterval(this.timers)
				}
			},
			run() {
				this.text = 60
				console.log(this.timerStop)
				this.timers = setInterval(() => {
					this.text --
				}, 1000)
			}
		},
		props: {
// 			timerStop: {
// 				type: Boolean,
// 				default: false
// 			}
			i: {
				type: String,
				default: '00'
			},
			s: {
				type: String,
				default: '00'
			}
		},
		created() {
			this.run()
			this.dates = new Date()
		}
	}
</script>

<style>

</style>
