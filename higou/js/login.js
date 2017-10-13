$(function(){
	document.title = "用户中心_嗨购, higou.cc";
	$("#login_01").focus(function(){
		$("#one").html("");
	})
	$("#login_01").blur(function(){
		$("#one").html("用户名");
	})
	$("#login_02").focus(function(){
		$("#two").html("");
	})
	$("#login_02").blur(function(){
		$("#two").html("密码");
	})

	var isYes = false;
	$("#Sp span").click(function(){
		if(!isYes){
			$("#Sp").addClass("cur");
		}else{
			$("#Sp").removeClass("cur");
		}
		isYes = !isYes;
	})
})