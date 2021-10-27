

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems'));

cardItems.forEach(element => {
    $('#ProdectRow').append(
        `<div class="col-6" id="Item" style="background-color: white;">
          ${element['name']}
            </div>
            <div class="col-3" id="Quntity" style="background-color: white;">
            ${element['qty']}
            </div>
            <div class="col-3" id="Price" style="background-color: white;">
            ${element['price']}
            </div>`)
});

let total = 0;
cardItems.forEach(element => {
    total += element['price'];
});

$('#totalPrice').html(`<p>${total}</p>`);

$('#ok').click(function () {
  localStorage.removeItem('SelectedItems')
  
})