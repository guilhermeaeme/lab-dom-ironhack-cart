function deleteItem(e){
  var itemRow = e.currentTarget.parentNode.parentNode;
  var container = itemRow.parentNode;
  container.removeChild(itemRow);
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
  var col = document.createElement('div');
  col.className = 'col';

  var button = document.createElement('button');
  button.className = 'btn btn-delete';
  button.onclick = deleteItem;
  button.innerHTML = 'Delete';

  col.appendChild(button);

  return col;
}

function createQuantityNode(){
  var col = document.createElement('div');
  col.className = 'col';

  var label = document.createElement('label');
  label.innerHTML = 'QTY';

  var input = document.createElement('input');
  input.name = 'qty';
  input.className = 'qty';

  col.appendChild(label);
  col.appendChild(input);

  return col;
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  if(!itemName) return;

  var row = document.createElement('div');
  row.className = 'row';

  var colName = document.createElement('div');
  colName.className = 'col';
  var spanName = document.createElement('span');
  spanName.innerHTML = itemName;
  colName.appendChild(spanName);

  var colPrice = document.createElement('div');
  colPrice.className = 'col col-price';
  var spanPrice = document.createElement('span');
  spanPrice.className = 'span-price';
  spanPrice.innerHTML = Number(itemUnitPrice).toFixed(2);
  colPrice.appendChild(spanPrice);

  var colTotalPrice = document.createElement('div');
  colTotalPrice.className = 'col col-total-price';
  var spanTotalPrice = document.createElement('span');
  spanTotalPrice.className = 'span-total-price';
  spanTotalPrice.innerHTML = '0.00';
  colTotalPrice.appendChild(spanTotalPrice);

  row.appendChild(colName);
  row.appendChild(colPrice);
  row.appendChild(createQuantityNode());
  row.appendChild(colTotalPrice);
  row.appendChild(createDeleteButton());

  var cart = document.getElementById('cart');
  cart.appendChild(row);
}

function createNewItem(){
  var itemName = document.getElementById('new-item-name').value;
  var itemUnitPrice = document.getElementById('new-item-price').value;
  createNewItemRow(itemName, itemUnitPrice);

  document.getElementById('new-item-name').value = '';
  document.getElementById('new-item-price').value = '';
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
