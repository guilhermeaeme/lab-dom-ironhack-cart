function deleteItem(e){
  var item = e.currentTarget.parentNode.parentNode;
  item.remove();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var prices = document.getElementsByClassName('span-price');
  var qtys = document.getElementsByClassName('qty');
  var totals = document.getElementsByClassName('span-total-price');

  var total = 0;

  for(i=0; i<prices.length; i++) {
    var price = Number(prices[i].innerHTML);
    var qty = Number(qtys[i].value);
    var subtotal = price * qty;

    total += subtotal;

    totals[i].innerHTML = subtotal.toFixed(2);
  }

  document.getElementById('total-price').innerHTML = total.toFixed(2);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
