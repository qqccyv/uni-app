<template>
	<view class="body">
		<input type="text"   v-model="email" class="uni-input common-input" placeholder="输入邮箱账号" />
		<input type="text"  password v-model="password" class="uni-input common-input" placeholder="输入邮箱密码" />
		<button :disabled="isDisabled" :loading="isLoading" :class="{'user-set-btn-disable': isDisabled}" class="user-set-btn" type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: '',
				isLoading: false,
				isDisabled: true
			}
		},
		watch:{
			email(){
				this.isDisabled = !this.check()
			},
			password(){
				this.isDisabled = !this.check()
			}
		},
		methods: {
			check() {
				if (this.email.trim() && this.password.trim()) {
					return true
				}

				return false
			},
			changeValue(){
				this.isDisabled = !this.check()
				console.log(!this.check())
			},
			submit() {
				if (!this.check()) {
					uni.showToast({
						title: '输入框不能为空!',
						image: '/static/icon/warning.png'
					})
					return
				}
				this.isLoading = true
				setTimeout(() => {
					this.isLoading = false
					uni.showToast({
						title: '验证成功！'
					});
				}, 1000)
			}
		}
	}
</script>

<style>
	@import "../../common/form.css";
</style>
