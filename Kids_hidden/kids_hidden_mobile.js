
if ($(window).width() <= 767) {  
  
  /**ADD TO ALL MENU ITEM THE PROPERTY ORDER:5 */
  $("#SunglassesdisableLeftRight > div").css("order","5");
  
  /**POLARIZED ITEM ON TOP */
  /*$("#SunglassesdisableLeftRight > div:nth-child(4)").css("order","0");*/
  $("[data-description='sunglasses_polarized']").parent().css("order","0");
  
  /*$("#SunglassesdisableLeftRight > div:nth-child(1)").css("order","1");*/
  $("[data-description='sunglasses_clp']").parent().css("order","1");
  
  /**MEN - WOMEN - KIDS UNDER THE 2 BIG ITEMS */
  /*$("#SunglassesdisableLeftRight > div:nth-child(2)").css("order","2");*/
  $("[data-description='sunglasses_men-s']").parent().css("order","2");
  
  /*$("#SunglassesdisableLeftRight > div:nth-child(3)").css("order","3");*/
  $("[data-description='sunglasses_women-s']").parent().css("order","2");
  
  /**$("#SunglassesdisableLeftRight > div:nth-child(19)").css("order","4");**/
  $("[data-description='sunglasses_junior']").parent().css("order","4");
  
  $("[data-description='sunglasses_polarized']").parent().addClass("fullwidth view-all");
  /**ADD MARGIN  */
  
  if ($(window).width() <= 321) {  
    $("[data-description='sunglasses_polarized']").parent().css("margin-left","10px");
    $("[data-description='sunglasses_polarized']").parent().css("margin-right","10px");
  }else {
    $("[data-description='sunglasses_polarized']").parent().css("margin-left","20px");
    $("[data-description='sunglasses_polarized']").parent().css("margin-right","20px");
  }
  $("#SunglassesdisableLeftRight > div:nth-child(4)").css("margin-bottom","0");
  $("#SunglassesdisableLeftRight > div:nth-child(19)").removeClass("ct-rb__simpleLink_Carousel--last ct-rb__link--full-width noProductTileLink");
 
} else {
  $("#SunglassesdisableLeftRight > div").css("order","3");
  $("#SunglassesdisableLeftRight > div:nth-child(2)").css("order","0");
  $("#SunglassesdisableLeftRight > div:nth-child(3)").css("order","1");
  $("#SunglassesdisableLeftRight > div:nth-child(19)").css("order","2");
}     


