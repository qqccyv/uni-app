// 权限验证
export default {
	token: false,
	userInfo: false,
	permission(callback,options){
		if(!this.token){
			uni.showModal({
				content: '该页面需要登录后才能访问，是否马上去登录？',
				success: function (res) {
					if (res.confirm) {
						uni.navigateTo({
							url: '../login/login',
						});
						return
					} else if (res.cancel) {
						return
					}
				}
			});
		}else {
			callback(options)
		}
		
	}
}