// 网络监听

// 监听网络状态
const netWork = {
	// 默认网络状态
	isConnect: false,
	on(){
		// 获取网络类型 同时了解联网状态
		uni.getNetworkType({
			success:(res)=> {
				if(res.networkType != 'none'){
					this.isConnect = true
					return
				}
				uni.showToast({
					title: '您处于断网状态',
					icon: 'none'
				});
			}
		})
		uni.onNetworkStatusChange((res)=>{
			this.isConnect = res.isConnected
			if(!res.isConnected){
				uni.showToast({
					title: '您处于断网状态',
					icon: 'none'
				});
			}
		})
	}
}
// 检测热更新
const update = ()=>{
	// #ifdef APP-PLUS  
	plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
	    uni.request({  
	        url: 'http://www.example.com/update/',  
	        data: {  
	            version: widgetInfo.version,  
	            name: widgetInfo.name  
	        },  
	        success: (result) => {  
	            var data = result.data;  
	            if (data.update && data.wgtUrl) {  
	                uni.downloadFile({  
	                    url: data.wgtUrl,  
	                    success: (downloadResult) => {  
	                        if (downloadResult.statusCode === 200) {  
	                            plus.runtime.install(downloadResult.tempFilePath, {  
	                                force: false  
	                            }, function() {  
	                                console.log('install success...');  
	                                plus.runtime.restart();  
	                            }, function(e) {  
	                                console.error('install fail...');  
	                            });  
	                        }  
	                    }  
	                });  
	            }  
	        }  
	    });  
	});  
	// #endif
}
export default {
	netWork,
	update
}