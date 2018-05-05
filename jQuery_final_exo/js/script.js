  $(function() {

  	//1ère solution : mais on peut ouvrir les 4 à la fois alors qu'il faut 1 seul à la fois. En plus si
  	//on rajoute un child, ça marche plus !
  	/*var $children = $("#faq").children();
  	var $bool = true;

  	for (var i=0; i<$children.length;i+=2) {
  		$children.eq(i).on("click", function() {
  			$(this).next().slideToggle(500);
  			$bool=false;
  		});
  	}*/

  	$("h3").on("click", function() {
  		$(this).toggleClass("ui-state-active").next().slideToggle();
  		$("h3").not(this).removeClass("ui-state-active").next().slideUp();
  	});
    
  });

