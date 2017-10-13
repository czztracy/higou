$(function(){
	document.title = "Aptamil 德国爱他美 婴儿奶粉";
	var num = parseInt($("#number").val());
	$("#skunum a").eq(0).click(function(){
		if(num > 1){
			num--;
			$("#number").val(num);
		}else{
			alert("您至少得购买一件商品！");
		}
	})
	$("#skunum a").eq(1).click(function(){
		num++;
		$("#number").val(num);
	})

	$("#weixin").click(function(){
		$("#imgs").css("display", "block");
	})
	$("#BTN").click(function(){
		$("#imgs").css("display", "none");
	})
	bigglass();
	function bigglass(event){
		var oS_box=document.getElementById('bigimg');
		var oS_position=document.getElementById('position_box');
		var oS_mark=document.getElementById('mark_box');
		var oB_box=document.getElementById('b_box');
		var oB_box_all=document.getElementById('b_box_all')
		oS_mark.onmouseover=function(){
			oS_position.style.display='block';
			oB_box.style.display='block';
		}
		oS_mark.onmouseout=function(){
			oS_position.style.display='none';
			oB_box.style.display='none';
		}
		oS_mark.onmousemove=function(event){
			var evt=event||window.event;
			var left=evt.offsetX-oS_position.offsetWidth/2;
			if(left<0){
				left=0;
			}else if(left>oS_box.offsetWidth-oS_position.offsetWidth){
				left=oS_box.offsetWidth-oS_position.offsetWidth
			}
			oS_position.style.left=left+'px';
			var top=evt.offsetY-oS_position.offsetHeight/2;
			if(top<0){
				top=0;
			}else if(top>oS_box.offsetHeight-oS_position.offsetHeight){
				top=oS_box.offsetHeight-oS_position.offsetHeight
			}
			oS_position.style.top=top+'px';
			//移动的比例  把X值和Y值换算成比例;
			var proportionX=left/(oS_box.offsetWidth-oS_position.offsetWidth);
			var proportionY=top/(oS_box.offsetHeight-oS_position.offsetHeight);
			//利用比例去算出大小不同的元素的偏移距离；
			oB_box_all.style.left=-proportionX*(oB_box_all.offsetWidth-oB_box.offsetWidth)+'px';
			oB_box_all.style.top=-proportionY*(oB_box_all.offsetHeight-oB_box.offsetHeight)+'px';
		}	
	}
	$("#tabA a").mouseover(function(){
		$("#tabA a").attr("class", "");
		$(this).attr("class", "now");
		$(".tabc").css("display", "none");
		$(".tabc").eq($(this).index()).css("display", "block");
	})
	$("#p_nav .item").click(function(){
		$("#p_nav .item").removeClass("on");
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	})
	$("#p_nav .item").eq(1).click(function(){
		$("#p_detail").css("display", "none");
	})
	$("#p_nav .item").eq(0).click(function(){
		$("#p_detail").css("display", "block");
	})

	
	$(".btn_addcart").click(function(){
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
	$("#btnAddToWish").click(function(){
		alert("由于您还没有登录，因此您还不能使用该功能。");
	})
})