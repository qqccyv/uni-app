<template>
	<view class="body">
		<input type="text" @change="changeValue" password v-model="oldPassword" class="uni-input common-input" placeholder="输入旧密码" />
		<input type="text" @change="changeValue" password v-model="newPassword" class="uni-input common-input" placeholder="输入新密码" />
		<input type="text" @change="changeValue" password v-model="reNewPassword" class="uni-input common-input" placeholder="确认密码" />
		<button :disabled="isDisabled" :loading="isLoading" :class="{'user-set-btn-disable': isDisabled}" class="user-set-btn" type="primary" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPassword: '',
				newPassword: '',
				reNewPassword: '',
				isLoading: false,
				isDisabled: true
			}
		},
		methods: {
			check() {
				if (this.oldPassword.trim() && this.newPassword.trim() && this.reNewPassword.trim()) {
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
