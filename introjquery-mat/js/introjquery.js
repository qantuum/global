	var $list = $(".col50 ul").css("list-style-type");
	var $list2 = $("ul").css("list-style-type");

	$("#test").on("click", function() {
		var $ul1 = $(".col50 ul");
		if ($list != "none") {
			$ul1.css("list-style-type","none");
			$list = $(".col50 ul").css("list-style-type");
		}
		else if ($list == "none") {
			$ul1.css("list-style-type","disc");
			$list = $(".col50 ul").css("list-style-type");
		}
	});

	$("#test2").on("click", function() {
		var $ul2 = $("ul");
		var $ul3 = $(".col100 ul");
		if ($list2 != "none") {
			$ul2.css("list-style-type","none");
			$ul3.css("padding-left","0");
			$list2 = $("ul").css("list-style-type");
			$list = $(".col50 ul").css("list-style-type");
		}
		else if ($list2 == "none") {
			$ul2.css("list-style-type","disc");
			$list2 = $("ul").css("list-style-type");
			$list = $(".col50 ul").css("list-style-type");
			$ul3.css("padding-left","40px");
		}
	});