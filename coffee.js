let allOrdersURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
let newOrdersUrl = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
let getOrderEmailURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress"
let delOrderEmailURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress"

let getAllOrdersBtn= document.getElementById("getAllOrders")
let submitOrderBtn = document.getElementById("submitOrder")
let getEmailOrderBtn = document.getElementById("getEmailOrder")
let deleteEmailOrderBtn = document.getElementById("deleteEmailOrder")
let coffeeOrderTextBox= document.getElementById("coffeeOrderTextBox")
let emailTextBox = document.getElementById("emailTextBox")
let listOrders = document.getElementById("listOrders")


//get and display all orders
getAllOrdersBtn.addEventListener('click', function(){
    listOrders.innerHTML= "" 
fetch(allOrdersURL)
.then(function(response){return response.json()})
.then(function(orders){console.log(orders)
    return orders}).then(function(order){
        for (email in order) {
            let theOrder = order[email]
            let coffeeOrder = `
            <li>
            <h4>${theOrder.emailAddress}</h4>
            <label>${theOrder.coffee}</label>
            </li>`

            listOrders.insertAdjacentHTML('beforeend',coffeeOrder)
    }

} )
})


//make order by email address and coffee
//order the email the correct way 
getEmailOrderBtn.addEventListener('click',function(){
    let emailTextBox = document.getElementById("emailTextBox")
    //clear the page 
    listOrders.innerHTML= ""
    getOrderEmailURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/" + emailTextBox.value
    fetch(getOrderEmailURL)
    .then(function(response){return response.json()})
    .then(function(order){console.log(order)
    
        let coffeeOrder = `
    <li>
    <h4>${order.emailAddress}</h4>
    <label>${order.coffee}</label>
    </li>`

    listOrders.insertAdjacentHTML('beforeend',coffeeOrder)
}).then(function(){ emailTextBox.value=""})
})





//submit an order
submitOrderBtn.addEventListener('click', function(){
    listOrders.innerHTML= "" 
    let emailTextBox = document.getElementById("emailTextBox")
    let coffeeOrderTextBox= document.getElementById("coffeeOrderTextBox")
   

    console.log(emailTextBox)
    console.log(coffeeOrderTextBox)
    let newOrder = {emailAddress: emailTextBox.value, coffee: coffeeOrderTextBox.value}
    console.log(newOrder)
    fetch(newOrdersUrl,{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newOrder)



    }).then(function(){
        emailTextBox.value=""}).then(function(){
        coffeeOrderTextBox.value=""})
})
   
    

    
        
    //delete the order 
deleteEmailOrderBtn.addEventListener('click', function(){
     listOrders.innerHTML= "" 
    let emailTextBox = document.getElementById("emailTextBox")
     delOrderEmailURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/" + emailTextBox.value
       
     console.log(emailTextBox)
    console.log(coffeeOrderTextBox)
    let deleteOrder = {emailAddress: emailTextBox}
     console.log(deleteOrder)
    fetch(delOrderEmailURL,{
        method:"DELETE",
        headers: {'Content-Type': 'application/json'},
            //body: JSON.stringify(deleteOrder)
        
        }).then(function(){emailTextBox.value=""})
            
            
        
            
  })
    

    




