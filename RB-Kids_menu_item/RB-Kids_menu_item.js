/**MOBILE */
if ($(window).width() <= 767) {  
  
  /* Add to all menu items the CSS property "order:5" */
  $("#SunglassesdisableLeftRight > div").css("order","5");
  
  /* "Polarized" menu item on top */
 
  $("[data-description='sunglasses_polarized']").parent().css("order","0");
  
  /* "All sunglasses" menu item under "Polarized" menu item */
  $("[data-description='sunglasses_clp']").parent().css("order","1");
  
  /* "Men" - "Women" - "Kids" menu items under the 2 big items */

  $("[data-description='sunglasses_men-s']").parent().css("order","2");
  
  
  $("[data-description='sunglasses_women-s']").parent().css("order","2");
  
  
  $("[data-description='sunglasses_junior']").parent().css("order","4");
  
  /* Ass CSS classes to "olarized" menu item*/
  $("[data-description='sunglasses_polarized']").parent().addClass("fullwidth view-all");
  
  /* Fix margins  */
  
  if ($(window).width() <= 321) {  
    $("[data-description='sunglasses_polarized']").parent().css("margin-left","10px");
    $("[data-description='sunglasses_polarized']").parent().css("margin-right","10px");
  }else {
    $("[data-description='sunglasses_polarized']").parent().css("margin-left","20px");
    $("[data-description='sunglasses_polarized']").parent().css("margin-right","20px");
  }
  $("#SunglassesdisableLeftRight > div:nth-child(4)").css("margin-bottom","0");

  /* Remove CSS classes to "polarized" menu item*/
  $("#SunglassesdisableLeftRight > div:nth-child(19)").removeClass("ct-rb__simpleLink_Carousel--last ct-rb__link--full-width noProductTileLink");
 
  
}
  /* Desktop version */
else {
  $("#SunglassesdisableLeftRight > div").css("order","3");
  $("[data-description='sunglasses_men-s']").parent().css("order","0");
  $("[data-description='sunglasses_women-s']").parent().css("order","1");
  $("[data-description='sunglasses_junior']").parent().css("order","2");
}     

/* Function which fix the borders dimension when the user use a small smartphone (max 321px) 
and he rotate it, switching from portrait to landscape mode */
$( window ).resize( function() {
  if ($(window).width() <= 321) {  
    $("[data-description='sunglasses_polarized']").parent().css("margin-left","10px");
    $("[data-description='sunglasses_polarized']").parent().css("margin-right","10px");
  }else {
    $("[data-description='sunglasses_polarized']").parent().css("margin-left","20px");
    $("[data-description='sunglasses_polarized']").parent().css("margin-right","20px");
  }
});


