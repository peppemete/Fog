if ($(window).width() <= 767) {  
  gm_thumbnail(); 
  
}


function gm_thumbnail() {
  $("div.colors-carousel_items > a.thumb-preview").wrap('<div class="owl-item" style="width: 50px;height: 50px;"></div>');
  var items = $("div.preview").parent().parent();
  items.each(function () {
    $(this).find("div.colors-carousel_items >div.owl-item").wrapAll("<div class='owl-wrapper-outer'><div class='owl-wrapper' style='width: 182px; left: 0px; display: block; transition: all 0ms ease 0s; transform: translate3d(0px, 0px, 0px);'></div></div>");
  });
  $("div.owl-wrapper-outer").css({"overflow-x":"scroll","overflow-y":"hidden"});
  $("div.owl-wrapper").css("width","max-content");
  $("div.colors-carousel").css("display","block");
  $("div.colors-carousel_items").addClass("owl-carousel owl-theme hide");
  $("div.colors-carousel_items").attr('style', 'display:block !important; opacity:"1"');
  $("a.thumb-preview").css({"display":"block","background-repeat": "no-repeat","background-size": "auto",  "background-position": "center"});
  
  $('a.thumb-preview').each( function(){
    var href=$(this).attr("href");
    $(this).attr("href","javascript:gm_none()");
    $(this).attr("data-href",href);
    var img='url("'+$(this).attr("data-src");+')';
    
    $(this).css("background-image",img);
  });
  
}
$("a.thumb-preview").on("click",function(){
  var price=$(this).attr("data-colorprice");
  var img='url("'+$(this).attr("data-src");+')';
  var href=$(this).attr("data-preview-href");
  $(this).parent().parent().find("div.preview_image_primary").css("background-image",img);
  $(this).parent().parent().find("div.preview_image_primary").attr("href",href);
  $(this).parent().parent().find("div.product-price>a.product-url").text(price);
});

function gm_none(){
  $(this).attr("style","background-size:contain");
  
};

$("a.lazy-load-btn").on("touchend", function(){
  setTimeout(function(){ gm_thumbnail(); }, 3500);
});