$("#ct_perksForPurchase>ul").css({"display":"flex","flex-direction":"column"});
$("#freeShipping").css("order","-1");

if(parseFloat($("#salePrice").text().substr($("#salePrice").text().indexOf("$")+1))>100){
  $("#freeShipping>span").text("Free express shipping (2 working days)");
}
else {
  $("#freeShipping>span").text("Free express shipping on orders $100+");
}

