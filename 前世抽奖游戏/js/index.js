


//设置开始游戏按钮效果
var indexbtn=function(){
	
	$(".begingame").addClass("active");
	
}

//显示登记簿
var showRegister=function(){

	$(".indexbody").animate({opacity:"0"},1000,"ease",function(){		
		$(".begingame").removeClass("active");		
	})
	
	$(".registerbody").css("z-index","999").animate({opacity:"1"},1000,"ease",function(){
		$(".registerbox").animate({"margin-left":"0"},1000,"ease")		
	})
		
}


//关闭登记薄
var closeRegister=function(){
	$(".registerbox").animate({"margin-left":"-100%"},1000,"ease",function(){		
		$(".registerbody").css("z-index","9").animate({opacity:"0"},1000,"ease")
		$(".indexbody").animate({opacity:"1"},1000,"ease",function(){		
		$(".begingame").addClass("active");		
	})
	})
	
}



