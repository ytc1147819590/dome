<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
        </view>
		<view class="btn">
			<button type="primary" @click="alerts">弹窗</button>
			<button type="primary" @click="routers">跳转</button>
			<button type="primary" @click="stops">停止</button>
		</view>
		<view class="">
			<timers ref = "timerStop"></timers>
		</view>
		<view class="" v-for="(item, index) in list" :key="index">
			<view>{{item.name}}</view>
			<view>{{item.id}}</view>
			<view>{{item.password}}</view>
		</view>
	</view>
</template>

<script>
	import timers from '../timer/timer'
	export default {
		components: {
			timers
		},
		data() {
			return {
				title: 'Hello',
				list: [],
			}
		},
		onLoad() {

		},
		methods: {
			alerts(e) {
				console.log(this)
			},
			routers() {
				this.search('https://www.easy-mock.com/mock/5c6a97a0b350a069f379de28/login')
			},
			stops() {
				this.$refs.timerStop.parentHandleclick(true)
			},
			search(callback, params = {}, path = true) {
				uni.request({
					url: callback,
					data: {
						params
					},
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						if (path !== true) {
							uni.navigateTo({
								url: path
							})
						} else {
							console.log(1)
							this.list = res.data.list
						}
					}
				})
			}
		},
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
