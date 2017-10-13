$(function(){
	document.title = "嗨购，higou，买好货, higou.cc";
	//banner图
	var num = 0;
	$("#bd ul").find("li").css("opacity", 0);
	$("#bd ul").find("li").eq(0).css("opacity", 1);	
	//banner滚动
	function inntimer(){
		if(num < 5){
			$("#bd ul").find("li").eq(num).stop().animate({"opacity": 0}, 2000, "easeOutCubic");
			$("#bd ul").find("li").eq(num + 1).stop().animate({"opacity": 1}, 2000, "easeOutCubic");
		}else{
			$("#bd ul").find("li").eq(5).stop().animate({"opacity": 0}, 2000, "easeOutCubic");
			$("#bd ul").find("li").eq(0).stop().animate({"opacity": 1}, 2000, "easeOutCubic");
			num = -1;
		}
		num ++;
	}
	var timer = setInterval(inntimer ,2000);
	//小banner图
	$("#smallBox").css("display", "none");
	$("#slideBox").hover(function(){
		$("#smallBox").css("display", "block");
		clearInterval(timer);
		clearInterval(smallBanner);
	},function(){
		$("#smallBox").css("display", "none");
		timer = setInterval(inntimer ,2000);
		smallBanner = setInterval(inntimersmall, 2000);
	})
	var count = 0;
	$("#smallBanner li").find("span").css("opacity", 0.4);
	$("#smallBanner li").eq(0).find("span").css("opacity", 0);
	function inntimersmall(){
		if(count < 5){
			$("#smallBanner li").eq(count).find("span").stop().animate({"opacity": 0.4}, 2000, "easeOutCubic");
			$("#smallBanner li").eq(count + 1).find("span").stop().animate({"opacity": 0}, 2000, "easeOutCubic");
		}else{
			$("#smallBanner li").eq(5).find("span").stop().animate({"opacity": 0.4}, 2000, "easeOutCubic");
			$("#smallBanner li").eq(0).find("span").stop().animate({"opacity": 0}, 2000, "easeOutCubic");
			count = -1;
		}
		count ++;
	}
	var smallBanner = setInterval(inntimersmall ,2000);
	
	//banner图的切换
	$("#smallBanner").find("li").mouseover(function(){
		$("#smallBanner").find("li").find("span").css("opacity", 0.4);
		$("#bd ul").find("li").css("opacity", 0);
		$(this).find("span").css("opacity", 0);
		$("#bd ul").find("li").eq($(this).index()).css("opacity", 1);
	})
	


	//限时抢购
	$.ajax({
		url:"../ajax/mainWrapcnt.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += '<li id = ' + data[i].id + '><a href = "#" class="image"><img src = ' + data[i].img + '></a><div class ="right"><h3><a href = "#">' + data[i].title + '</a></h3><p class="one"><a href ="#">'+data[i].desc+'</a></p><p class="price">'+data[i].price+'</p><del>'+ data[i].original +'</del><a href = "detailpage.html" target="_blank" class="btn">'+ data[i].content +'</a></div></li>';
			}
			$("#flashsale").html(html);
		}
	})
	//母婴专区
	$.ajax({
		url:"../ajax/montherBoby_middle.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><a href="#"><p>'+data[i].title+'</p><span>'+ data[i].desc +'</span><img src = '+ data[i].img +'></a></li>';
			}
			$("#montherBoby_middle ul").html(html);
		}
	})
	$.ajax({
		url:"../ajax/montherBoby_left.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><a href="#">' + data[i].desc + '</a></li>';
			}
			$("#montherBoby_left ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/montherBoby_right1.json",
		success:function(data){
			var html1 = "";
			for(var i = 0; i < data.length; i ++){
				html1 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'<p class="two">'+data[i].desc2+'</p></p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL1").html(html1);
		}
	})
	$.ajax({
		url:"../ajax/montherBoby_right2.json",
		success:function(data){
			var html2 = "";
			for(var i = 0; i < data.length; i ++){
				html2 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'<p class="two">'+data[i].desc2+'</p></p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL2").html(html2);
		}
	})
	$.ajax({
		url:"../ajax/montherBoby_right3.json",
		success:function(data){
			var html3 = "";
			for(var i = 0; i < data.length; i ++){
				html3 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'</p><p class="two">'+data[i].desc2+'</p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL3").html(html3);
		}
	})

	$("#bottom div").eq(0).css("background", "#999");
	$("#montherBoby_right_wrap ul").eq(0).css("display", "block");

	$("#bottom div").mouseover(function(){
		$("#bottom div").css("background", "#f2f2f2");
		$("#montherBoby_right_wrap ul").css("display", "none");
		$(this).css("background", "#999");
		$("#montherBoby_right_wrap ul").eq($(this).index()).css("display", "block");
	})
	//个护彩妆
	$.ajax({
		url:"../ajax/Nurseleft.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><a href="#">' + data[i].desc + '</a></li>';
			}
			$("#Nurse_left ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/Nursemiddle.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><a href="#"><p>'+data[i].title+'</p><span>'+ data[i].desc +'</span><img src = '+ data[i].img +'></a></li>';
			}
			$("#Nurse_middle ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/Nurseright1.json",
		success:function(data){
			var html2 = "";
			for(var i = 0; i < data.length; i ++){
				html2 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'</p><p class="two">'+data[i].desc2+'</p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL11").html(html2);
		}
	})
	$.ajax({
		url:"../ajax/Nurseright2.json",
		success:function(data){
			var html3 = "";
			for(var i = 0; i < data.length; i ++){
				html3 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'</p><p class="two">'+data[i].desc2+'</p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL22").html(html3);
		}
	})
	$("#bottom1 div").eq(0).css("background", "#999");
	$("#Nurse_right_wrap ul").eq(0).css("display", "block");

	$("#bottom1 div").mouseover(function(){
		$("#bottom1 div").css("background", "#f2f2f2");
		$("#Nurse_right_wrap ul").css("display", "none");
		$(this).css("background", "#999");
		$("#Nurse_right_wrap ul").eq($(this).index()).css("display", "block");
	})
	//海外直邮
	$.ajax({
		url:"../ajax/Post_left.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><a href="#">' + data[i].desc + '</a></li>';
			}
			$("#Post_left ul").html(html);
		}
	})
	$.ajax({
		url:"../ajax/Post_middle.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><a href="#"><p>'+data[i].title+'</p><span>'+ data[i].desc +'</span><img src = '+ data[i].img +'></a></li>';
			}
			$("#Post_middle ul").html(html);
		}
	})
	$.ajax({
		url:"../ajax/Post_right1.json",
		success:function(data){
			var html2 = "";
			for(var i = 0; i < data.length; i ++){
				html2 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'</p><p class="two">'+data[i].desc2+'</p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL111").html(html2);
		}
	})
	$.ajax({
		url:"../ajax/Post_right2.json",
		success:function(data){
			var html3 = "";
			for(var i = 0; i < data.length; i ++){
				html3 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'</p><p class="two">'+data[i].desc2+'</p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL222").html(html3);
		}
	})
	$("#bottom2 div").eq(0).css("background", "#999");
	$("#Post_right_wrap ul").eq(0).css("display", "block");

	$("#bottom2 div").mouseover(function(){
		$("#bottom2 div").css("background", "#f2f2f2");
		$("#Post_right_wrap ul").css("display", "none");
		$(this).css("background", "#999");
		$("#Post_right_wrap ul").eq($(this).index()).css("display", "block");
	})
	//家居生活
	$.ajax({
		url:"../ajax/Living_left.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><a href="#">' + data[i].desc + '</a></li>';
			}
			$("#Living_left ul").html(html);
		}
	})
	$.ajax({
		url:"../ajax/Living_middle.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><a href="#"><p>'+data[i].title+'</p><span>'+ data[i].desc +'</span><img src = '+ data[i].img +'></a></li>';
			}
			$("#Living_middle ul").html(html);
		}
	})
	$.ajax({
		url:"../ajax/Living_right1.json",
		success:function(data){
			var html2 = "";
			for(var i = 0; i < data.length; i ++){
				html2 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'</p><p class="two">'+data[i].desc2+'</p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL1111").html(html2);
		}
	})
	$.ajax({
		url:"../ajax/Living_right2.json",
		success:function(data){
			var html3 = "";
			for(var i = 0; i < data.length; i ++){
				html3 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'</p><p class="two">'+data[i].desc2+'</p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL2222").html(html3);
		}
	})
	$.ajax({
		url:"../ajax/Living_right3.json",
		success:function(data){
			var html3 = "";
			for(var i = 0; i < data.length; i ++){
				html3 += '<li><a href="#" id="images"><img src ='+data[i].img+'></a><div class="box"><a href="#"><p class="one">'+data[i].desc1+'</p><p class="two">'+data[i].desc2+'</p></a><span class="tx1">'+data[i].price+'</span><del>'+data[i].original+'</del></div></li>';
			}
			$("#OUL3333").html(html3);
		}
	})
	$("#bottom3 div").eq(0).css("background", "#999");
	$("#Living_right_wrap ul").eq(0).css("display", "block");

	$("#bottom3 div").mouseover(function(){
		$("#bottom3 div").css("background", "#f2f2f2");
		$("#Living_right_wrap ul").css("display", "none");
		$(this).css("background", "#999");
		$("#Living_right_wrap ul").eq($(this).index()).css("display", "block");
	})
	//购物车中商品的数量
	sc_car();
	function sc_car(){
		var sc_str = $.cookie("goods");
		if(sc_str){
			var arr = eval(sc_str);
			var sum = 0;
			for(var i = 0; i < arr.length; i++){
				sum += arr[i].num;
			}
			$(".num").html(sum);
		}
	}
})