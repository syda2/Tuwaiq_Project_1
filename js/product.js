let user_info=document.querySelector('#user_info');
let userDom=document.querySelector('#user1');
let links=document.querySelector('#links');
let logoutbtn=document.querySelector('#logout');
if(localStorage.getItem('user')){
     links.remove();
user_info.style.display= "flex";
 userDom.innerHTML=localStorage.getItem("user");
}
logoutbtn.addEventListener('click',function (){
 localStorage.clear();


  setTimeout(()=>{

    window.location='login.html';
    },1500)
    

 })
// protect 1
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product1').click(function(){ 
    let name = 'EUREKA HELOIS 65-YELLOW'; 
    let qty = parseInt($('#product1-qt').text());
    let price = 3000;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 2
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product2').click(function(){ 
    let name = 'NILZA'; 
    let qty = parseInt($('#product2-qt').text()); 
    let price = 100;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 3
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product3').click(function(){ 
    let name = 'Tea bew'; 
    let qty = parseInt($('#product3-qt').text());
    let price = 150;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 4
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product4').click(function(){ 
    let name = 'STRAWBERRY & VANILLA JAM'; 
    let qty = parseInt($('#product4-qt').text());
    let price = 25;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 5
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product5').click(function(){ 
    let name = 'DAFFODIL'; 
    let qty = parseInt($('#product5-qt').text()); 
    let price = 40;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 6
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product6').click(function(){ 
    let name = '50 SIPS OF GREY'; 
    let qty = parseInt($('#product6-qt').text()); 
    let price = 25;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 7
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product7').click(function(){ 
    let name = 'WIGHT SOLID'; 
    let qty =parseInt($('#product7-qt').text()); 
    let price = 35;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 8
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product8').click(function(){ 
    let name = 'GREEN CUP'; 
    let qty = parseInt($('#product8-qt').text()); 
    let price = 40;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 9
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product9').click(function(){ 
    let name = 'MOCCAMASTER-KAFFEEMASCHINE'; 
    let qty = parseInt($('#product9-qt').text()); 
    let price = 3500;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 10
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product10').click(function(){ 
    let name = 'Leaf'; 
    let qty = parseInt($('#product10-qt').text()); 
    let price = 30;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 11
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product11').click(function(){ 
    let name = 'blueberry and violet'; 
    let qty = parseInt($('#product11-qt').text());
    let price = 25;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
// protect 12
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#product12').click(function(){ 
    let name = 'Tea'; 
    let qty =parseInt($('#product12-qt').text());
    let price = 50;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});

//////////////////////////////////////////////////////////////

$('#product1-decrease').click(()=>{
    let quantity = parseInt($('#product1-qt').text());
    if(quantity >1){
        $('#product1-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product1-increase').click(()=>{
    let quantity = parseInt($('#product1-qt').text());
    console.log(quantity);
    $('#product1-qt').text(++quantity)
})

$('#product2-decrease').click(()=>{
    let quantity = parseInt($('#product2-qt').text());
    if(quantity >1){
        $('#product2-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product2-increase').click(()=>{
    let quantity = parseInt($('#product2-qt').text());
    console.log(quantity);
    $('#product2-qt').text(++quantity)
})



$('#product3-decrease').click(()=>{
    let quantity = parseInt($('#product3-qt').text());
    if(quantity >1){
        $('#product3-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product3-increase').click(()=>{
    let quantity = parseInt($('#product3-qt').text());
    console.log(quantity);
    $('#product3-qt').text(++quantity)
})

$('#product4-decrease').click(()=>{
    let quantity = parseInt($('#product4-qt').text());
    if(quantity >1){
        $('#product4-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product4-increase').click(()=>{
    let quantity = parseInt($('#product4-qt').text());
    console.log(quantity);
    $('#product4-qt').text(++quantity)
})



$('#product5-decrease').click(()=>{
    let quantity = parseInt($('#product5-qt').text());
    if(quantity >1){
        $('#product5-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product5-increase').click(()=>{
    let quantity = parseInt($('#product5-qt').text());
    console.log(quantity);
    $('#product5-qt').text(++quantity)
})



$('#product6-decrease').click(()=>{
    let quantity = parseInt($('#product6-qt').text());
    if(quantity >1){
        $('#product6-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product6-increase').click(()=>{
    let quantity = parseInt($('#product6-qt').text());
    console.log(quantity);
    $('#product6-qt').text(++quantity)
})



$('#product7-decrease').click(()=>{
    let quantity = parseInt($('#product7-qt').text());
    if(quantity >1){
        $('#product7-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product7-increase').click(()=>{
    let quantity = parseInt($('#product7-qt').text());
    console.log(quantity);
    $('#product7-qt').text(++quantity)
})

$('#product8-decrease').click(()=>{
    let quantity = parseInt($('#product8-qt').text());
    if(quantity >1){
        $('#product8-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product8-increase').click(()=>{
    let quantity = parseInt($('#product8-qt').text());
    console.log(quantity);
    $('#product8-qt').text(++quantity)
})



$('#product9-decrease').click(()=>{
    let quantity = parseInt($('#product9-qt').text());
    if(quantity >1){
        $('#product9-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product9-increase').click(()=>{
    let quantity = parseInt($('#product9-qt').text());
    console.log(quantity);
    $('#product9-qt').text(++quantity)
})

$('#product10-decrease').click(()=>{
    let quantity = parseInt($('#product10-qt').text());
    if(quantity >1){
        $('#product10-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product10-increase').click(()=>{
    let quantity = parseInt($('#product10-qt').text());
    console.log(quantity);
    $('#product10-qt').text(++quantity)
})

$('#product11-decrease').click(()=>{
    let quantity = parseInt($('#product11-qt').text());
    if(quantity >1){
        $('#product11-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product11-increase').click(()=>{
    let quantity = parseInt($('#product11-qt').text());
    console.log(quantity);
    $('#product11-qt').text(++quantity)
})



$('#product12-decrease').click(()=>{
    let quantity = parseInt($('#product12-qt').text());
    if(quantity >1){
        $('#product12-qt').text(--quantity)
    }
    console.log(quantity);
})
$('#product12-increase').click(()=>{
    let quantity = parseInt($('#product12-qt').text());
    console.log(quantity);
    $('#product12-qt').text(++quantity)
})




