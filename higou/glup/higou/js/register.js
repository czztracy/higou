$(function(){
	document.title="用户注册_嗨购, higou.cc";
	//用户名
	$("#username").focus(function(){
		$("#one").html("");
	})
	$("#username").blur(function(){
		if($("#username").val() == "") {
			$("#username_notice").html("用户名不能为空");
		}else if(!/^\w{6,18}$/.test($("#username").val())){
			$("#username_notice").html("用户名的长度是6~18位");
		}else if(/^\d/.test($("#username").val())){
			$("#username_notice").html("用户名首字符不能为数字");
		}else if(/\W/ig.test($("#username").val())){
			$("#username_notice").html("用户名必须由数字字母下划线组成");
		}
	})
	//手机号
	$("#iPhone").focus(function(){
		$("#two").html("");
	})
	$("#iPhone").blur(function(){
		if($("#iPhone").val() == ""){
			$("#iPhone_notice").html("请填写手机号");
		}else if(!(/^1\d{10}$/.test($("#iPhone").val()))){
			$("#iPhone_notice").html("手机号填写有误");
		}
	})
	//密码
	$("#password").focus(function(){
		$("#three").html("");
	})
	$("#password").blur(function(){
		if ($("#password").val() == "") {
			$("#password_notice").html("请设置密码");
		}else if(!/^\w{6,18}$/.test($("#password").val())){
			$("#password_notice").html("密码必须为6~18位");
		}
	})
	//确认密码
	$("#confirm_password").focus(function(){
		$("#four").html("");
	})
	$("#confirm_password").blur(function(){
		if ($("#confirm_password").val() == "") {
			$("#conform_password_notice").html("请确认密码");
		}else if($("#confirm_password").val() != $("#password").val()){
			$("#conform_password_notice").html("密码不一致");
		}
	})
	//邮箱
	$("#email").focus(function(){
		$("#five").html("");
	})
	$("#email").blur(function(){
		if ($("#email").val() == "") {
			$("#email_notice").html("请填写邮箱");
		}else if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($("#email").val()))){
			$("#email_notice").html("邮箱填写错误");
		}
	})
})