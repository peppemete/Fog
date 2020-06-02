if ($(window).width() <= 767) {  
$("#prescriptionDetailContainer").css("display","none");
$("#prodSizeContainer").css({"display":"flex","flex-direction":"column"});
$("#wcs-size-pdp-display").css("order","0");
$("#wcs-pdp-buy-button-display").css("order","2");
$("#prodSizeContainer>hr.customiseDividerLine").css("display","none");
}