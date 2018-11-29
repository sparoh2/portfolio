	/* 레이어 팝업 (반려사유) */	
	$(function() {
		$(".layer_wrap").hide();
		$(".open_layer a").click(function(e) {
			e.preventDefault();
			$('<div class="overLayer"></div>').appendTo('.sub_contents');
			$(".overLayer").show();
			$(".layer_wrap").show();
			});

		$(".close_layer a").click(function(e) {
			e.preventDefault();
			$(".overLayer").remove();
			$(".layer_wrap").hide();
			});
	});


	/* 구역검색 */
	$(function() {
		$(".layer_search_pop").hide();
		$(".open_search a").click(function(e) {
			e.preventDefault();
			$('<div class="overLayer"></div>').appendTo('.sub_contents');
			$(".overLayer").show();
			$(".layer_search_pop").show();
		});

		$(".close_search a").click(function(e) {
			e.preventDefault();
			$(".overLayer").remove();
			$(".layer_search_pop").hide();
		});
	});

	$(function() {
		var not = false;
		$("input[name=allow_reason]").attr("disabled", true);
		$("input[name=allow_reason]").css("background", "#e4e4e4");
		$(".allow_status a").click(function(e) {
			e.preventDefault();
			if(not == false) {
				$(this).html('사용불가능');
				$(this).parent().removeClass("yes");
				$(this).parent().addClass("no");
				$("input[name=allow_reason]").attr("disabled", false);
				$("input[name=allow_reason]").css("background", "#ffffff");
				not = true;
			}

			else {
				$(this).html('사용가능');
				$(this).parent().removeClass("no");
				$(this).parent().addClass("yes");
				$("input[name=allow_reason]").attr("disabled", true);
				$("input[name=allow_reason]").css("background", "#e4e4e4");
				$("input[name=allow_reason]").val("");
				not = false;
			}
			return false;
		});
	});

	$(function() {
		var dis_fac = false;
		$("#dis_fac a").click(function(e) {
			e.preventDefault();
			if(dis_fac == false) {
				$(this).html('사용안함');
				$(this).parent().removeClass("yes");
				$(this).parent().addClass("no");
				dis_fac = true;
			}

			else {
				$(this).html('사용');
				$(this).parent().removeClass("no");
				$(this).parent().addClass("yes");
				dis_fac = false;
			}
			return false;
		});
	});

	$(function() {
		var dis_light = false;
		$("#dis_light a").click(function(e) {
			e.preventDefault();
			if(dis_light == false) {
				$(this).html('사용안함');
				$(this).parent().removeClass("yes");
				$(this).parent().addClass("no");
				dis_light = true;
			}

			else {
				$(this).html('사용');
				$(this).parent().removeClass("no");
				$(this).parent().addClass("yes");
				dis_light = false;
			}
			return false;
		});
	});
