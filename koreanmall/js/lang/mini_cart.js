var miniCart=new function(){this.id='mini_cart';this.service_url='/app/svc/mini_cart/';this.offset=null;this.width=174;this.chkJaego=function(goods_no,goods_sub,opt,goods_cnt){var self=miniCart;var result=0;$.ajax({type:"POST",async:false,url:"/app/svc/jaego_chk/"+goods_no+"/"+goods_sub,data:"goods_opt="+urlEncode(opt)+"&goods_cnt="+goods_cnt,success:function(msg){eval("var response = "+msg);result=response.result;}});return result;}
this.deleteCart=function(str){var self=miniCart;$.ajax({url:"/app/svc/delete_cart/"+str,success:function(msg){shoppingSlide.viewCart(false);}});}
this.directOrder=function(){document.location.href='/app/order/order_form';}

	this.buyCart = function(buy_type) {	//[2016-05-03] 바로가기 주문
		var btn_buy_all = $("#btn_buy_all");

		if(btn_buy_all.data("state") == "ing" ) {
			alert("Please wait.");
			return false;
		}

		btn_buy_all.data("state","ing");


		// 위시리스트 저장 후 결과 출력
		$.ajax({
			type: "POST",
			url: "/app/cart/mini_cart_chk/"+buy_type,
			success: function(msg) {

				btn_buy_all.data("state","done");

				if(msg == "wrong access"){
					alert("wrong access!");
					return false;
				}

				if(msg == "no_exist"){
					alert("The selected item does not exists!");
					return false;
				}

				if(msg == "finish"){
					document.location.href="/app/order/order_form/";
				}

			}
		});
	}
}