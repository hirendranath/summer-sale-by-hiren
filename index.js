
let sum = 0

function addCart (target){
    const cartField = document.getElementById("add-to-cart");
    const count = cartField.childElementCount
    const li = document.createElement("li")
    const cartId = target.childNodes[3].childNodes[1].innerText;
    li.innerText = cartId;
    li.innerHTML= `${count + 1}. ${cartId}`
    cartField.appendChild(li)

    const productPriceInput = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPrice = parseFloat(productPriceInput)
    const total = sum += productPrice
    const finalTotal = total.toFixed(2)
    
    const totalPrice = document.getElementById("total-prices");
    totalPrice.innerText = finalTotal
    

    // button 
    if(finalTotal > 0){
        document.getElementById("make-Purchase-btn").removeAttribute('disabled')
    }
    
    if(finalTotal > 200.00){
        document.getElementById("coupon-btn").removeAttribute('disabled')
    }


    // discount btn
    document.getElementById('coupon-btn').addEventListener('click', function(){

        const couponInput = document.getElementById('coupon-input-filed');
        const couponInputValue = couponInput.value;
        couponInput.value = ""

        if(couponInputValue === "SELL200"){
            const discount = totalPrice.innerText - (totalPrice.innerText * 20/100);
            const discountTotal = totalPrice.innerText - discount;
            document.getElementById("discount").innerText = discountTotal.toFixed(2);
            document.getElementById('total').innerText = discount.toFixed(2);
        }
    })
}

// modal
document.getElementById('go-home-btn').addEventListener('click', function(){
    document.getElementById("total-prices").innerText = "00.00"
    document.getElementById("discount").innerText = "00.00"
    document.getElementById("total").innerText = "00.00"
    document.getElementById("add-to-cart").innerText = ""
    window.location.href = "index.html"
})
