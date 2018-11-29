function deleteItem(e){
  var itemRow = e.currentTarget.parentNode.parentNode;
  var container = itemRow.parentNode;
  container.removeChild(itemRow);

  getTotalPrice();
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
  var input = document.createElement('input');
  input.name = 'qty';
  input.value = 0;
  input.className = 'qty';
  input.onkeyup = getTotalPrice;

  return input;
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

  col.appendChild(label);
  col.appendChild(createQuantityInput());

  return col;
}

function createItemNode(dataType, itemData){
  var itemNode = document.createElement('div');
  itemNode.className = 'col';
  var spanNode = document.createElement('span');
  spanNode.className = 'span-' + itemData.class;
  if(dataType == 'number') {
    spanNode.innerHTML = Number(itemData.value).toFixed(2);
  } else {
    spanNode.innerHTML = itemData.value;
  }
  itemNode.appendChild(spanNode);

  return itemNode;  
}

function createNewItemRow(itemName, itemUnitPrice){
  if(!itemName) return;

  var row = document.createElement('div');
  row.className = 'row';

  row.appendChild(createItemNode('string', { class: 'name', value: itemName }));
  row.appendChild(createItemNode('number', { class: 'price', value: itemUnitPrice }));
  row.appendChild(createQuantityNode());
  row.appendChild(createItemNode('number', { class: 'total-price', value: '0' }));
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

function createNewItemKeyup(e){
  if(e.which == 13) {
    createNewItem();
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var inputs = document.getElementsByClassName('qty');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  for(var i = 0; i<inputs.length ; i++){
    inputs[i].onkeyup = getTotalPrice;
  }

  document.getElementById('new-item-name').onkeyup = createNewItemKeyup;
  document.getElementById('new-item-price').onkeyup = createNewItemKeyup;
};
