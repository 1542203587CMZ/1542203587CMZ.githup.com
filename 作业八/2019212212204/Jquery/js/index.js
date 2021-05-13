$(document).ready(function(){
	$('.pic02').hide();      //大图放大后缩小大图
    $('.pic01').on('click',function(){
      var picsrc=$(this).attr('src')     //使要点击的图片使用同一个类名，然后通过js点击获取当前的图片路径
      $('.pic02 img').attr('src',picsrc)      //将获取到的图片路径放到大图中
      $('.pic02').show()     //显示大图
    })
    $('.pic02').on('click',function(){
      $('.pic02').hide()       //大图放大后缩小大图
    })




    $(".item1").on('click',function(){
		$(".item1").css("background-color","silver")
		$(".a").css("background-color","lightpink")
		$(".a>span").html(($(this).index()+1));
		$(".item2").css("background-color","white")
		$(".item3").css("background-color","white")
	})
	$(".item2").on('click',function(){
		$(".item2").css("background-color","silver")
		$(".a").css("background-color","lightgreen")
		$(".a>span").html(($(this).index()+1));
		$(".item1").css("background-color","white")
		$(".item3").css("background-color","white")
	})
	$(".item3").on('click',function(){
		$(".item3").css("background-color","silver")
		$(".a").css("background-color","#ead85c8c")
		$(".a>span").html(($(this).index()+1));
		$(".item2").css("background-color","white")
		$(".item1").css("background-color","white")
	})


    var i=1;
    $(".it1").each(function(){
    	$(this).html(i++);
    })
	$(".but").on('click',function(){
		var td=$(".items").clone();
		$(".add").append(td);
		var i=1;
    $(".it1").each(function(){
    	$(this).html(i++);
    })
	});
		
	$(document).on("click",".Delete",function(){
		$(this).parent().remove();
	})

})




