/*
* @Author: Administrator
* @Date:   2017-04-06 11:09:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-06 11:10:22
*/

'use strict';
// 窗口加载完之后，执行一段程序
window.onload = function(){
	var designWidth = 750;
	// 定义设计尺寸
	function fontSize(){
		var CW = document.documentElement.clientWidth;
		// 设备尺寸 文档的宽度
		// console.log(CW); 输出文档的宽度
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style.fontSize = size;
		// 设置html的font-size
	}
	fontSize();   
	// 运行函数
	window.onresize = fontSize;   /*监测窗口尺寸是否发生改变*/
}