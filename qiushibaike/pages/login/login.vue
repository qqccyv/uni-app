<template>
	<view>
		<!-- 状态栏 -->
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<!-- 关闭按钮 -->
		<view class="icon iconfont icon-fanhui" @tap="back"></view>
		<!-- 引入背景图 -->
		<image class="loginhead" src="../../static/loginhead.png" mode="widthFix" lazy-load></image>
		<!-- 输入框+按钮 -->
		<view class="body">
			<template v-if="loginStatus">
				<input type="text" class="uni-input common-input" placeholder="昵称/手机号/邮箱" v-model="userName" />

				<view class="login-input-box">
					<input type="text" class="uni-input common-input forget-input" placeholder="请输入密码" v-model="password" />
					<view class="forget u-f-ajc login-font-color">忘记密码</view>
				</view>
			</template>

			<template v-else>
				<view class="login-input-box">
					<view class="phone u-f-ajc">+86</view>
					<input type="text" class="uni-input common-input phone-input" placeholder="手机号" v-model="phoneNum" />
				</view>
				<view class="login-input-box">
					<input type="text" class="uni-input common-input forget-input" placeholder="请输入验证码" v-model="checkNum" />
					<view class="forget u-f-ajc login-font-color yanzhengma" @tap="getCheckNum">
						<view class="u-f-ajc">{{!checkTime? '获取验证码':checkTime+'s'}}</view>
					</view>
				</view>
			</template>


			<button class="user-set-btn" :loading="loading" :class="{'user-set-btn-disable':disabled}" type="primary" @tap="submit"
			 :disabled="disabled">登录</button>
		</view>

		<!-- 登录状态切换 -->
		<view class="login-status u-f-ajc login-padding login-font-color" @tap="changeLoginStatus">
			{{loginStatus? '验证码登录':'账号密码登录'}}
			<view class="icon iconfont icon-jinru login-font-color"></view>
		</view>

		<!-- 第三方登陆 -->
		<view class="other-login-title u-f-ajc login-padding login-font-color">第三方登录</view>
		<other-login></other-login>

		<!-- 协议 -->
		<view class="login-rule u-f-ajc login-padding login-font-color">
			注册即代表您同意<view>《XXX协议》</view>
		</view>

	</view>
</template>

<script>
	import uniStatusBar from "../../components/uni-status-bar/uni-status-bar.vue";
	import otherLogin from "../../components/home/other-login.vue";
	export default {
		components: {
			uniStatusBar,
			otherLogin
		},
		data() {
			return {
				disabled: true,
				loading: false,
				loginStatus: true, // true 代表账号密码登录 false代码验证码登录
				userName: '',
				password: '',
				phoneNum: '',
				checkNum: '',
				checkTime: 0
			}
		},
		watch: {
			userName() {
				this.changeBtnStatus()
			},
			password() {
				this.changeBtnStatus()
			},
			phoneNum() {
				this.changeBtnStatus()
			},
			checkNum() {
				this.changeBtnStatus()
			},
		},
		methods: {
			// 验证手机号
			checkPhone(){
				//手机号正则
				var mPattern = /^1[34578]\d{9}$/; 
				if(mPattern.test(this.phoneNum)){
					return true
				}
				if(!mPattern.test(this.phoneNum)){
					uni.showToast({
						title: '请输入正确的手机号码！',
						icon:'none'
					});
					return false
				}
				
			},
			// 获取验证码
			getCheckNum() {
				if (this.checkTime > 0) {
					return
				};
				if(!this.checkPhone()) return
				this.checkTime = 10
				this.timer = setInterval(() => {
					this.checkTime--
					if (this.checkTime < 1) {
						clearInterval(this.timer)
						this.checkTime = 0
					}
				}, 1000)
			},
			// 切换登录类型
			changeLoginStatus() {
				this.initData()
				this.loginStatus = !this.loginStatus
			},
			// 初始化登录表单数值
			initData() {
				this.userName = ''
				this.password = ''
				this.phoneNum = ''
				this.checkNum = ''
			},
			// 提交按钮点击状态
			changeBtnStatus() {
				if ((this.userName.trim() && this.password.trim()) || (this.phoneNum.trim() && this.checkNum.trim())) {
					this.disabled = false
					return
				}
				this.disabled = true
			},
			// 返回上一步
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 提交登录
			submit() {
				if(!this.checkPhone()) return
				console.log("提交登录")
			}
		}
	}
</script>

<style>
	@import "../../common/form.css";

	.login-font-color {
		color: #BBBBBB;
	}

	.login-padding {
		padding: 20upx 0;
	}

	.icon-fanhui {
		position: fixed;
		top: 60upx;
		left: 30upx;
		font-size: 40upx;
		font-weight: bold;
		color: #332F0A;
		z-index: 99999;
	}

	.loginhead {
		width: 100%;
	}

	.other-login-title {
		position: relative;
	}

	.other-login-title:before,
	.other-login-title:after {
		content: "";
		position: absolute;
		background: #BBBBBB;
		height: 1upx;
		width: 100upx;
		top: 50%;
	}

	.other-login-title:before {
		left: 25%;
	}

	.other-login-title:after {
		right: 25%;
	}

	.login-input-box {
		position: relative;
	}

	.login-input-box .forget-input {
		padding-right: 150upx;
	}

	.login-input-box .forget,
	.login-input-box .phone {
		position: absolute;
		top: 0;
		height: 100%;
		z-index: 100;
	}

	.login-input-box .forget {
		width: 150upx;
		right: 0;
	}

	.login-input-box .phone {
		width: 100upx;
		left: 0;
		font-weight: bold;
	}

	.login-input-box .phone-input {
		padding-left: 100upx;
	}

	.yanzhengma view {
		background: #EEEEEE;
		border-radius: 10upx;
		font-size: 25upx;
		width: 150upx;
		padding: 10upx 0;
	}
</style>
