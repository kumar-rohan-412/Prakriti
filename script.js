// for search
let searchForm= document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// for cart 
let shoppingCart= document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = ()=>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

// for login
let loginForm= document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = ()=>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

// for navbar
let navbar= document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    
}

window.onscroll = ()=>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// preloader
        let intro = document.querySelector(".intro");
        let logo = document.querySelector(".logo-header");
        let logoSpan=document.querySelectorAll('.logo');
        window.addEventListener('DOMContentLoaded',()=>{
            setTimeout(()=>{
                logoSpan.forEach((span, idx)=>{
                    setTimeout(()=>{
                        span.classList.add('active');
                    },(idx+1)*400)

                });
                setTimeout(()=>{
                    logoSpan.forEach((span, idx)=>{

                        setTimeout(()=>{
                            span.classList.remove('active');
                            span.classList.add('fade');
                        },(idx+1)*50)
                    })
                },2000);
                setTimeout(()=>{
                    intro.style.top='-100vh';
                },2300)
            })
               
        })
// preloader


//image changing
var a = ["head-image/starter2.jpg","head-image/starter3.jpg","head-image/starter4.jpg","head-image/starter5.jpg","head-image/starter6.jpg","head-image/starter7.jpg","head-image/starter8.jpg","head-image/starter9.jpg","head-image/starter10.jpg","head-image/starter11.jpg","head-image/starter12.jpg","head-image/starter13.jpg","head-image/starter14.jpg","head-image/starter15.jpg","head-image/starter16.jpg","head-image/starter17.jpg","head-image/starter18.jpg","head-image/starter19.jpg","head-image/starter20.jpg","head-image/starter21.jpg"];
var i=0;

function changeimage(){
    if(i<a.length){
        document.getElementById("d1").src = a[i];
        i++;
    }
    else{
        i=0;
    }
}

function myfun(){
    setInterval("changeimage()",5000);
}
windows.onload = myfun();

// image changing


// feedback form
function toggle_visibility() {
    var e = document.getElementById('feedback-main');
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

// feedback form




