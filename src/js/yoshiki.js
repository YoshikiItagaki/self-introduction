
$(function(){
	//マウスが載ったらサブメニュー表示
		$(".dropdown").mouseenter(function(){
			$(".submenu").slideDown(200);
		}),
	//マウスが離れたらサブメニュー消去
		$(".submenu").click(function(){
			$(".submenu").slideUp(180);
		});

		$(".dropdown").mouseleave(function(){
			$(".submenu").slideUp(180);
		});

})

$(document).on('ready', function() {
  $(".slider").slick({
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
	slidesToShow: 1,
	fade:true
  });
});