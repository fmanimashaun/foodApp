(self.webpackChunkfoodapp=self.webpackChunkfoodapp||[]).push([[179],{434:(e,a,t)=>{var r={"./beer.svg":[762,762],"./bg-img.png":[256,256],"./burger.svg":[25,25],"./pizza.svg":[922,922]};function n(e){if(!t.o(r,e))return Promise.resolve().then((()=>{var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=r[e],n=a[0];return t.e(a[1]).then((()=>t.t(n,17)))}n.keys=()=>Object.keys(r),n.id=434,e.exports=n},394:(e,a,t)=>{"use strict";const r=[{name:"Pizza",ingredients:["pepperoni","mushrom","mozarella"],id:0,price:14,image:"pizza.svg"},{name:"Hamburger",ingredients:["beef","cheese","lettuce"],price:12,image:"burger.svg",id:1},{name:"Beer",ingredients:["grain, hops, yeast, water"],price:12,image:"beer.svg",id:2}],n=async()=>{const e=document.querySelector(".app__body-menu"),a=await Promise.all(r.map((async e=>`\n      <div class="app__body-menu-item">\n        <div class="app__body-menu-item-info">\n          <img class="app__body-menu-item-img" src="${(await t(434)(`./${e.image}`)).default}" alt="${e.name} icon" aria-hidden='true'>\n          <div class="app__body-menu-item-details">\n            <h2 class="app__body-menu-item-name">${e.name}</h2>\n            <p class="app__body-menu-item-desc">${e.ingredients.join(", ")}</p>\n            <p class="app__body-menu-item-price">$${e.price}</p>\n          </div>\n        </div>\n        <button class="app__body-menu-item-btn" aria-label='add ${e.name} to cart at $${e.price} per unit' data-add-order=${e.id}>\n          +\n        </button>\n      </div>\n    `)));e.insertAdjacentHTML("afterbegin",a.join(""))},o=async()=>{const e=document.querySelector(".app__footer"),a=localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[];if(a.length>0){let t=0,r="";a.forEach(((e,a)=>{t+=e.price,r+=`\n        <div class="app__footer-order-item">\n          <p class="app__footer-order-item-name">${e.name}<button class="app__footer-order-item-btn" data-remove-order=${a}>remove</button></p>\n          <p class="app__footer-order-item-price">$${e.price}</p>\n        </div>\n      `}));const n=`\n      <h2 class="app__footer-title ">Your order</h2>\n      <div class="app__footer-order">\n        ${r}\n      </div>\n      <div class="app__footer-order-total">\n        <p class="app__footer-order-total-title">Total price:</p>\n        <p class="app__footer-order-total-price">$${t}</p>\n      </div>\n      <button class="app__footer-order-btn" data-submit='pay'>Complete order</button>\n    `;e.innerHTML=n}else e.innerHTML=""};localStorage.getItem("order")?(n(),o()):n(),document.addEventListener("click",(e=>{if(e.target.dataset.addOrder){(e=>{const a=localStorage.getItem("order")?JSON.parse(localStorage.getItem("order")):[],t=r.find((a=>a.id===e));a.push(t),localStorage.setItem("order",JSON.stringify(a)),o()})(parseInt(e.target.dataset.addOrder,10))}else if(e.target.dataset.removeOrder){(e=>{const a=JSON.parse(localStorage.getItem("order")).filter(((a,t)=>t!==e));localStorage.setItem("order",JSON.stringify(a)),o()})(parseInt(e.target.dataset.removeOrder,10))}else"pay"===e.target.dataset.submit&&(()=>{const e=document.querySelector(".app__body"),a=`\n    <div class="app__body-payment">\n      <h2 class="app__body-payment-title">Enter card details</h2>\n      <form class="app__body-payment-form">\n        <input class="app__body-payment-input" type="text" name="card-name" id="card-name"\n          aria-label='enter your name' placeholder='Enter your name' required>\n        <input class="app__body-payment-input" type="text" inputmode="numeric" name="card-numner" id="card-number"\n          aria-label='Enter card number' placeholder='Enter card number' required>\n        <input class="app__body-payment-input" type="text" inputmode="numeric" name="card-cvv" id="card-cvv"\n          aria-label='Enter cvv' placeholder='Enter CVV' required>\n        <input class="app__body-payment-submit" type="submit" value='Pay' data-submit-order="${JSON.parse(localStorage.getItem("order")).reduce(((e,a)=>e+a.price),0)}">\n      </form>\n    </div>\n  `;e.insertAdjacentHTML("afterbegin",a)})()}))}},e=>{e(e.s=394)}]);