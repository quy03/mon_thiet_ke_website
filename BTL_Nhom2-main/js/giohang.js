const btn = document.querySelectorAll("a.btn.btn-primary")

btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement
        var productImg = product.children[0].querySelector("img").src
        var productName = product.children[1].querySelector("h5").innerText
        var productPrice = product.children[1].querySelector("span").innerText
        addcart(productPrice, productImg, productName)
    })
})

function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            alert("Sản phẩm của bạn đã có trong giỏ hàng!")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex; align-items:center;"><img style="width:70px"src="'+productImg+'"><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td><span class = "cart-delete">Xoá</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()

}

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalPrice = 0

    for (var i=0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
    
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
    
        totalPriceA = inputValue*productPrice*1000
 
        
        totalPrice = totalPrice + totalPriceA

        totalPriceC = totalPrice.toLocaleString('de-DE') 
    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalPriceC
    inputChange()

}

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemA = cartDelete.parentElement.parentElement
            cartItemA.remove()

            carttotal()
        })
    }
}

function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}

const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-bag")
cartshow.addEventListener("click",function(){
    console.log("cartshow")
    document.querySelector(".cart").style.left= "0"
})

cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.left= "-100%"
})