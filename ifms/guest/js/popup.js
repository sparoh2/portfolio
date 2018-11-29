	/* 반투명 배경화면 생성 */	
	$(document).ready(function() {
		$('<div class="overLayer"></div>').appendTo('.sub_contents');
		$(".overLayer").hide();
	});


	/* 레이어 팝업 (반려사유) */	
	$(function() {
		$(".layer_wrap").hide();
		$(".open_layer a").click(function(e) {
			e.preventDefault();
			$(".overLayer").show();
			$(".layer_wrap").show();
			});

		$(".close_layer a").click(function(e) {
			e.preventDefault();
			$(".overLayer").hide();
			$(".layer_wrap").hide();
			});
	});


	/* 구역검색 */
	$(function() {
		$(".layer_search_pop").hide();
		$(".open_search a").click(function(e) {
			e.preventDefault();
			$(".overLayer").show();
			$(".layer_search_pop").show();
		});

		$(".close_search a").click(function(e) {
			e.preventDefault();
			$(".overLayer").hide();
			$(".layer_search_pop").hide();
		});
	});

