$("#freeShipping").remove();
if(parseFloat($("#salePrice").text().substr($("#salePrice").text().indexOf("$")+1))>100){
  $("#ct_perksForPurchase > ul > li:nth-child(1)").html("<span style='color:green;font-weight:600;'>Free express shipping (2 working days)</span>");
}
else {
  $("#ct_perksForPurchase > ul > li:nth-child(1)").html("<span style='color:green;font-weight:600;'>Free express shipping on orders $100+</span>");
}

