$(function(){
	//顶部menu
	$("#mcDropmenBox").hover(function(){
		$("#mcDropmenu").css("display", "block");
	},function(){
		$("#mcDropmenu").css("display", "none");
	})

	$("#Dropmenuservice").hover(function(){
		$("#Dropmenuservicemenu").css("display", "block");
	},function(){
		$("#Dropmenuservicemenu").css("display", "none");
	})

	$("#Dropmenumore").hover(function(){
		$("#more").css("display", "block");
	},function(){
		$("#more").css("display", "none");
	})

	$("#ul1").on("mouseover", "li", function(){
		$(this).find("span").css("display", "block");
	})
	$("#ul1").on("mouseout", "li", function(){
		$(this).find("span").css("display", "none");
	})
//导航栏定位
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop > 120){
			$("#topTopBox").css("position","fixed").css("top",0).css("z-index", 500);
			$("#topTab").css("left", 200);
			$("#fixed").css("position", "fixed").css("display", "block").css("z-index", 501);
		}else{
			$("#topTopBox").css("position","static");
			$("#topTab").css("left", "");
			$("#fixed").css("position", "static").css("display", "none");
		}
		$("#GOTOP").click(function(){
			$("body,html").stop().animate({"scrollTop" : 0}, 1000);
		})
	}
	//topTopBox ajax数据
	$.ajax({
		url: "../ajax/data.json",
		success:function(data){
			/*alert(data[0].list.length);*/
			var html = "";

			for(var i = 0; i < data.length; i ++){
				html += '<li id='+ data[i].id +'><a href="#">' + data[i].title + '</a><span></span><div id="box"></div></li>';
			}
			$("#left ul").html(html);
			for(var j = 0; j < data.length; j ++){
				var cnt = "";
				for(var k = 0; k < data[j].list.length; k ++){
					cnt += '<a href="#"  id=a' + data[j].list[k].id + '>' + data[j].list[k].desc + '</a>';
				}
				 $("#left ul li").find("#box").eq(j).html(cnt);
				
			}
		}
	})
	
	$.ajax({
		url:"../ajax/navcnt.json",
		success:function(data){
			var html = '<p>' + data[0].title + '</p><a href="#"><img src= '+ data[0].img +' /></a>';
			$("#right").find("div").eq(0).html(html);
			var oCnt = '<a href="#"><img src = ' + data[1].img + ' /></a>';
			$("#right").find("div").eq(1).html(oCnt);
		}
	})

	$.ajax({
		url:"../ajax/navcnt2.json",
		success:function(data){
			var html ="";
			for(var i = 0; i < data.length; i ++){
				html += '<li id='+ data[i].id +'><a href="#">' + data[i].title + '</a><span></span><div id="box"></div></li>';
			}
			$("#nav_Makeup ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/navcnt.json",
		success:function(data){
			var html = '<p>' + data[0].title + '</p><a href="#"><img src= '+ data[0].img +' /></a>';
			$("#nav_Makeup .right").find("div").eq(0).html(html);
			var oCnt = '<a href="#"><img src = ' + data[1].img + ' /></a>';
			$("#nav_Makeup .right").find("div").eq(1).html(oCnt);
		}
	})
	$("#momBaby").hover(function(){
		$("#nav_menu").css("display", "block");
	},function(){
		$("#nav_menu").css("display", "none");
	})

	$("#makeup").hover(function(){
		$("#nav_Makeup").css("display", "block");
	},function(){
		$("#nav_Makeup").css("display", "none");
	})

	$.ajax({
		url:"../ajax/navcnt3.json",
		success:function(data){
			var html ="";
			for(var i = 0; i < data.length; i ++){
				html += '<li id='+ data[i].id +'><a href="#">' + data[i].title + '</a><span></span><div id="box"></div></li>';
			}
			$("#nav_Home ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/navcnt.json",
		success:function(data){
			var html = '<p>' + data[0].title + '</p><a href="#"><img src= '+ data[0].img +' /></a>';
			$("#nav_Home .right").find("div").eq(0).html(html);
			var oCnt = '<a href="#"><img src = ' + data[1].img + ' /></a>';
			$("#nav_Home .right").find("div").eq(1).html(oCnt);
		}
	})

	$("#HOME").hover(function(){
		$("#nav_Home").css("display", "block");
	},function(){
		$("#nav_Home").css("display", "none");
	})

	$.ajax({
		url:"../ajax/navcnt4.json",
		success:function(data){
			var html ="";
			for(var i = 0; i < data.length; i ++){
				html += '<li id='+ data[i].id +'><a href="#">' + data[i].title + '</a><span></span><div id="box"></div></li>';
			}
			$("#nav_Health ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/navcnt.json",
		success:function(data){
			var html = '<p>' + data[0].title + '</p><a href="#"><img src= '+ data[0].img +' /></a>';
			$("#nav_Health .right").find("div").eq(0).html(html);
			var oCnt = '<a href="#"><img src = ' + data[1].img + ' /></a>';
			$("#nav_Health .right").find("div").eq(1).html(oCnt);
		}
	})

	$("#Health").hover(function(){
		$("#nav_Health").css("display", "block");
	},function(){
		$("#nav_Health").css("display", "none");
	})


	$.ajax({
		url:"../ajax/navcnt5.json",
		success:function(data){
			var html ="";
			for(var i = 0; i < data.length; i ++){
				html += '<li id='+ data[i].id +'><a href="#">' + data[i].title + '</a><span></span><div id="box"></div></li>';
			}
			$("#nav_Round ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/navcnt.json",
		success:function(data){
			var html = '<p>' + data[0].title + '</p><a href="#"><img src= '+ data[0].img +' /></a>';
			$("#nav_Round .right").find("div").eq(0).html(html);
			var oCnt = '<a href="#"><img src = ' + data[1].img + ' /></a>';
			$("#nav_Round .right").find("div").eq(1).html(oCnt);
		}
	})

	$("#round").hover(function(){
		$("#nav_Round").css("display", "block");
	},function(){
		$("#nav_Round").css("display", "none");
	})


	$.ajax({
		url:"../ajax/navcnt6.json",
		success:function(data){
			var html ="";
			for(var i = 0; i < data.length; i ++){
				html += '<li id='+ data[i].id +'><a href="#">' + data[i].title + '</a><span></span><div id="box"></div></li>';
			}
			$("#nav_Costume ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/navcnt.json",
		success:function(data){
			var html = '<p>' + data[0].title + '</p><a href="#"><img src= '+ data[0].img +' /></a>';
			$("#nav_Costume .right").find("div").eq(0).html(html);
			var oCnt = '<a href="#"><img src = ' + data[1].img + ' /></a>';
			$("#nav_Costume .right").find("div").eq(1).html(oCnt);
		}
	})

	$("#costume").hover(function(){
		$("#nav_Costume").css("display", "block");
	},function(){
		$("#nav_Costume").css("display", "none");
	})

	$.ajax({
		url:"../ajax/navcnt7.json",
		success:function(data){
			var html ="";
			for(var i = 0; i < data.length; i ++){
				html += '<li id='+ data[i].id +'><a href="#">' + data[i].title + '</a><span></span><div id="box"></div></li>';
			}
			$("#nav_Appliances ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/navcnt.json",
		success:function(data){
			var html = '<p>' + data[0].title + '</p><a href="#"><img src= '+ data[0].img +' /></a>';
			$("#nav_Appliances .right").find("div").eq(0).html(html);
			var oCnt = '<a href="#"><img src = ' + data[1].img + ' /></a>';
			$("#nav_Appliances .right").find("div").eq(1).html(oCnt);
		}
	})

	$("#Appliances").hover(function(){
		$("#nav_Appliances").css("display", "block");
	},function(){
		$("#nav_Appliances").css("display", "none");
	})

	$.ajax({
		url:"../ajax/navcnt8.json",
		success:function(data){
			var html ="";
			for(var i = 0; i < data.length; i ++){
				html += '<li id='+ data[i].id +'><a href="#">' + data[i].title + '</a><span></span><div id="box"></div></li>';
			}
			$("#nav_Overseas ul").html(html);
		}
	})

	$.ajax({
		url:"../ajax/navcnt.json",
		success:function(data){
			var html = '<p>' + data[0].title + '</p><a href="#"><img src= '+ data[0].img +' /></a>';
			$("#nav_Overseas .right").find("div").eq(0).html(html);
			var oCnt = '<a href="#"><img src = ' + data[1].img + ' /></a>';
			$("#nav_Overseas .right").find("div").eq(1).html(oCnt);
		}
	})

	$("#Overseas").hover(function(){
		$("#nav_Overseas").css("display", "block");
	},function(){
		$("#nav_Overseas").css("display", "none");
	})

	$("#CODE").css("opacity", 0);
	$("#oIphone").hover(function(){
		$("#CODE").stop().animate({"opacity": 1}, 500)
	},function(){
		$("#CODE").stop().animate({"opacity": 0}, 500)
	})
})