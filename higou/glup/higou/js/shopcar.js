$(function(){
	document.title = "购物流程_嗨购, higou.cc";
	$.ajax({
		url:"../ajax/hot.json",
		success:function(res){
			var sc_str = $.cookie("goods");
			var arr = eval(sc_str);
			var html = "";
			var PriceS = 0;
			var num1 = 0;
			for(var i in arr){
				html += '<tr id='+arr[i].id+'><td class="title col_2" width="425"><div class = "pro clearfix"><div class="img fl"><a href="detailpage.html" target="_blank"><img src='+res[arr[i].id].img+' border="0" width="80" height="80"></a></div><div class="txtwrap"><div class="tit"><a href="detailpage.html" target="_blank">'+res[arr[i].id].title+'</a></div><div class="attr"></div><div class="taxes"><span class="u_taxval">'+"税费：免税"+'</span></div></div></div></td><td class="col_3 width="102" align="left"><span class="price priceA_gray">'+res[arr[i].id].price+'</span></td><td class="col_4" width="186" align="left"><span class="oprate"><a class="reduce inblock" href="#"></a><input class="intxt" type="text" id="goods_number_a1465" value='+arr[i].num+'><input type="hidden" value="1456" id="rec_id"><a class="add inblock" href="#"></a></span></td><td class="col_5" width="100" align="left"><span class="price priceA_gray" id="total_items_1465">'+"邮费：0.00"+'</span></td><td class="col_6" align="left"><a href="#" class="bule"></a></td></tr>';
				PriceS += parseInt(res[arr[i].id].price.substring(1,4))*arr[i].num;
				num1 += arr[i].num; 
			}
			$("#table_Box").html(html);
			var sum = PriceS;
			var NumberS = num1;
			//求和
			$("#totalSkuPrice").html("￥" + sum + ".00");
			$("#totalSkuPrice02").html("￥" + sum + ".00");
			$("#selectedCount").html(NumberS);
			//删除商品
			$("#table_Box").find(".col_6 a").click(function(){
				$(this).parent().parent().remove();
				$("#totalSkuPrice").html("￥" + sum + ".00");
				var id = $(this).parent().parent().attr("id");
				var cookieStr = $.cookie("goods");
				var goodsArr = eval(cookieStr);
				for(var i in goodsArr){
					if(id == goodsArr[i].id){
						goodsArr.splice(i, 1);
						$.cookie("goods", JSON.stringify(goodsArr),{expires:7, raw:true})
						break;
					}
				}

				var cookieStr1 = $.cookie("Goods");
				var goodsArr1 = eval(cookieStr1);
				for(var i in goodsArr1){
					if(id == goodsArr1[i].id){
						goodsArr1.splice(i, 1);
						$.cookie("Goods", JSON.stringify(goodsArr1),{expires:7, raw:true})
						break;
					}
				}
				location.reload();
			})
			//商品数量加1
			$("#table_Box").find(".add").click(function(){
				var cookieStr = $.cookie("goods");
				var id = $(this).parent().parent().parent().attr("id");
				var arr = eval(cookieStr);
				for(var i in arr){
					if(arr[i].id == id){
						arr[i].num ++;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
					
					}
				}
				var num = parseInt($(this).parent().find("input").eq(0).val());
				$(this).parent().find("input").eq(0).val(num+1);
				location.reload();
			})
			//商品数量减1
			$("#table_Box").find(".reduce").click(function(){
				var cookieStr = $.cookie("goods");
				var id = $(this).parent().parent().parent().attr("id");
				var arr = eval(cookieStr);
				var num = parseInt($(this).parent().find("input").eq(0).val());
				if($(this).parent().find("input").eq(0).val()==1){
					alert("商品数量不能少于1件");
				}else{
					for(var i in arr){
					if(arr[i].id == id){
						arr[i].num --;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
						
						}
					}
					$(this).parent().find("input").eq(0).val(num-1);
				}
				location.reload();//页面点击后刷新
			})
		}
	})
	//清空购物车
	$(".checkout_action a").eq(1).click(function(){
		$("#formCart tr").remove();
		var cookieSTR = "";
		$.cookie("goods", cookieSTR, {expires:7});
	})

})