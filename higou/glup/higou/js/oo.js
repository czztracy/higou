$('.sideNav_good').find('li').each(function(i){
			$(this).hover(function(){
				$(this).css('backgroundColor','white');
				$(this).find('.sideNav_hideGoods').css('display','block');
				var _this=this;
				$.ajax({
					url: "data/data2.json",
					type: "GET",
					success: function(res){
						var html='';
						var goodsList='';
						for(var j = 0; j < res[i].goods.length; j++){
							// alert(res[i].goods.length);
							html+='<div class="title"><p>'+res[i].goods[j].name+'</p></div>';
							// 
							for(var k=0;k<res[i].goods[j].goodsList.length;k++){

								html+='<div class="box"><img src="'+res[i].goods[j].goodsList[k].url+'" /><span>'+res[i].goods[j].goodsList[k].name+'</span></div>'

							}

						}
						$(_this).find('.sideNav_hideGoods').html(html);

				}
			})

			},function(){
				$(this).css('backgroundColor','#F4F3F3');
				$(this).find('.sideNav_hideGoods').css('display','none');

			})
		})	
