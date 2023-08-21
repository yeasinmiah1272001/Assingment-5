function addToProductList(productName, productPrice){
       const nameElement = document.getElementById(productName);
       const name = nameElement.innerText;
       const priceElement = document.getElementById(productPrice);
       const price = parseFloat(priceElement.innerText);

       const productList = document.getElementById('product-list');

       const counter = productList.childElementCount;
       const newItem = document.createElement('p');
       newItem.innerText = `${counter + 1}. ${name}`;
       productList.appendChild(newItem);

       const totalPriceElement = document.getElementById('total-price');
       let totalPrice = parseFloat(totalPriceElement.innerText);
       totalPrice = totalPrice + price;
       totalPriceElement.innerText = totalPrice.toFixed(2);

       const couponBtn = document.getElementById('btn-coupon');
       if(totalPrice >= 200){
              couponBtn.removeAttribute('disabled')
       }

       const BtnPurchase = document.getElementById('btn-make-purchase');
       if(totalPrice > 0){
              BtnPurchase.removeAttribute('disabled')
       }


}

function coupon(){
       const couponInputElement = document.getElementById('coupon-input');
       const couponInput = couponInputElement.value;
       const totalPriceElement = document.getElementById('total-price');
       let totalPrice = parseFloat(totalPriceElement.innerText);
       const discountElement = document.getElementById('discount');
       let discount = parseFloat(discountElement.innerText);
       const totalElement = document.getElementById('total');
       let total = parseFloat(totalElement.innerText);

       couponInputElement.value = ''
       if(couponInput == 'SELL200'){
              discount = totalPrice * (20/100);
              discountElement.innerText = discount.toFixed(2);
              total = totalPrice - discount;
              totalElement.innerText = total.toFixed(2);
              return;
       }
       alert('please provide a coupon code number')
}


function goHome(){
       window.location.href = 'index.html'
}