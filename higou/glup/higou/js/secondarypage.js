$(function(){
	document.title = "母婴专区_嗨购，higou.cc";
	//banner
	$("#oUl").find("li").eq(0).css("opacity", 1);
	var num = 0;
	function timer(){
		if(num < 4){
			$("#oUl li").eq(num).stop().animate({"opacity" : 0}, 2000);
			$("#oUl li").eq(num + 1).stop().animate({"opacity" : 1}, 2000);
		}else{
			$("#oUl li").eq(4).stop().animate({"opacity" : 0}, 2000);
			$("#oUl li").eq(0).stop().animate({"opacity" : 1}, 2000);
			num = -1;
		}
		num ++;
	}
	var inntimer1 = setInterval(timer, 2000);


	$("#circle p").eq(0).css("background", "#E31436");
	var count = 0;
	function inntimer(){
		if(count < 4){
			$("#circle p").eq(count).stop().animate({"background-color": "#fff"}, 2000);
			$("#circle p").eq(count + 1).stop().animate({"background-color": "#E31436"}, 2000);
		}else{
			$("#circle p").eq(4).stop().animate({"background-color": "#fff"}, 2000);
			$("#circle p").eq(0).stop().animate({"background-color": "#E31436"}, 2000);
			count = -1;
		}
		count ++;
	}

	var inntimer2 = setInterval(inntimer, 2000);
	

	


	$("#circle p").hover(function(){
		$("#circle p").css("background", "#fff");
		$(this).css("background", "#E31436");
		$("#oUl li").css("opacity", 0);
		$("#oUl li").eq($(this).index()).css("opacity", 1);
		clearInterval(inntimer1);
		clearInterval(inntimer2);
	},function(){
		inntimer1 = setInterval(timer, 2000);
		inntimer2 = setInterval(inntimer, 2000);
	})
	//爆款
	$.ajax({
		url:"../ajax/hot.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><div class="img"><a href="detailpage.html" target="_blank"><img src=' + data[i].img + '></a></div><div class="info"><h3><a href="#">' + data[i].title + '</a><p>'+data[i].desc1+'</p></h3><div class="goodlist_bq"><span>'+data[i].discount+'</span></div><p class="w_price"><span>'+data[i].price+'</span><i>'+data[i].desc2+'<del>'+data[i].original+'</del></i><a href="#" class="btn" id='+data[i].id+'>'+data[i].btn+'</a></p></div></li>';
			}
			$("#hot ul").html(html);
			//cookie加载
			$("#hot .w_price").on("click", ".btn", function(){
				var first = $.cookie("goods") == null ? true : false;//判断cookie是否第一次添加
				var id = this.id;
				if(first){
					$.cookie("goods", '[{id:' + id + ',num:1}]', {expires: 7});
				}else{
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);
					var isYes = false;//判断之前是否有过存储
					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num ++;
							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr,  {
								expires: 7
							});
							isYes = true;
						}
					}
					if(!isYes){
						var obj = {id: id, num: 1};
						arr.push(obj);
						$.cookie("goods", JSON.stringify(arr), {expires: 7});
					}
					sc_car();
				}
								
				$("#overlay").css("display", "block");
				$(".add_ok").css("display", "block");
				$(".back").click(function(){
					$("#overlay").css("display", "none");
					$(".add_ok").css("display", "none");
				})
				$(".btn-cssl").click(function(){
					$("#overlay").css("display", "none");
					$(".add_ok").css("display", "none");
				})
				return false;//阻止冒泡
			})	
		}
	})
	//新品
	$.ajax({
		url:"../ajax/new.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><div class="img"><a href="detailpage.html" target="_blank"><img src=' + data[i].img + '></a></div><div class="info"><h3><a href="#">' + data[i].title + '</a><p>'+data[i].desc1+'</p></h3><div class="goodlist_bq"><span>'+data[i].discount+'</span></div><p class="w_price"><span>'+data[i].price+'</span><i>'+data[i].desc2+'<del>'+data[i].original+'</del></i><a href="detailpage.html" target="_blank" class="btn" id='+data[i].id+'>'+data[i].btn+'</a></p></div></li>';
			}
			$("#new ul").html(html);
		}
	})
	//大牌奶粉
	$.ajax({
		url:"../ajax/milk.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><div class="img"><a href="detailpage.html" target="_blank"><img src=' + data[i].img + '></a></div><div class="info"><h3><a href="#">' + data[i].title + '</a><p>'+data[i].desc1+'</p></h3><div class="goodlist_bq"><span>'+data[i].discount+'</span></div><p class="w_price"><span>'+data[i].price+'</span><i>'+data[i].desc2+'<del>'+data[i].original+'</del></i><a href="detailpage.html" target="_blank" id='+data[i].id+'>'+data[i].btn+'</a></p></div></li>';
			}
			$("#milk ul").html(html);
		}
	})
	//尿裤湿巾
	$.ajax({
		url:"../ajax/wet.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length; i ++){
				html += '<li><div class="img"><a href="detailpage.html" target="_blank"><img src=' + data[i].img + '></a></div><div class="info"><h3><a href="#">' + data[i].title + '</a><p>'+data[i].desc1+'</p></h3><div class="goodlist_bq"><span>'+data[i].discount+'</span></div><p class="w_price"><span>'+data[i].price+'</span><i>'+data[i].desc2+'<del>'+data[i].original+'</del></i><a href="detailpage.html" target="_blank">'+data[i].btn+'</a></p></div></li>';
			}
			$("#wet ul").html(html);
		}
	})

	//商品存在数量++
	function sc_car(){
		var sc_str = $.cookie("goods");
		if(sc_str){
			var arr = eval(sc_str);
			var sum = 0;
			for(var i = 0; i < arr.length; i ++){
				sum += arr[i].num;
			}
			$(".num").html(sum);
		}
	}

})