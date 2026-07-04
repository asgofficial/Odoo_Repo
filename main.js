/*==========================================================
  AURA HRMS - MAIN JS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeIdentity();

    initializePasswordToggle();

    initializeRippleButtons();

    initializeCardTilt();

    initializeParallax();

});

/*==========================================================
IDENTITY SWITCH
==========================================================*/

function initializeIdentity(){

    const employee = document.getElementById("employeeBtn");
    const hr = document.getElementById("hrBtn");
    const loginTitle = document.querySelector(".login-header h2");
    const loginSub = document.querySelector(".login-header p");

    employee.addEventListener("click",()=>{
        employee.classList.add("active");
        hr.classList.remove("active");
        document.body.setAttribute("data-role","employee");
        if (loginTitle) loginTitle.innerHTML="Welcome Employee";
        if (loginSub) loginSub.innerHTML="Access your personal workspace";
        localStorage.setItem("userRole", "employee");
    });

    hr.addEventListener("click",()=>{
        hr.classList.add("active");
        employee.classList.remove("active");
        document.body.setAttribute("data-role","hr");
        if (loginTitle) loginTitle.innerHTML="Welcome HR Administrator";
        if (loginSub) loginSub.innerHTML="Manage your workforce securely";
        localStorage.setItem("userRole", "hr");
    });

}

/*==========================================================
PASSWORD TOGGLE
==========================================================*/

function initializePasswordToggle(){

    const input=document.getElementById("password");

    const btn=document.getElementById("togglePassword");

    btn.addEventListener("click",()=>{

        if(input.type==="password"){

            input.type="text";

            btn.innerHTML='<i class="ri-eye-off-line"></i>';

        }

        else{

            input.type="password";

            btn.innerHTML='<i class="ri-eye-line"></i>';

        }

    });

}

/*==========================================================
BUTTON RIPPLE
==========================================================*/

function initializeRippleButtons(){

    document.querySelectorAll(".login-btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const circle=document.createElement("span");

            const diameter=Math.max(this.clientWidth,this.clientHeight);

            const radius=diameter/2;

            circle.style.width=circle.style.height=`${diameter}px`;

            circle.style.left=`${e.clientX-this.getBoundingClientRect().left-radius}px`;

            circle.style.top=`${e.clientY-this.getBoundingClientRect().top-radius}px`;

            circle.classList.add("ripple");

            const ripple=this.getElementsByClassName("ripple")[0];

            if(ripple){

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

}

/*==========================================================
LOGIN CARD TILT
==========================================================*/

function initializeCardTilt(){

    const card=document.querySelector(".login-card");

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*8;

        const rotateX=((y/rect.height)-0.5)*-8;

        card.style.transform=

        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0deg) rotateY(0deg)";

    });

}

/*==========================================================
BACKGROUND PARALLAX
==========================================================*/

function initializeParallax(){

    const bg=document.querySelector(".gradient-layer");

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5)*25;

        const y=(e.clientY/window.innerHeight-.5)*25;

        bg.style.transform=`translate(${x}px,${y}px)`;

    });

}

/*==========================================================
FORM VALIDATION
==========================================================*/

function initializeValidation(){
    // Validation is now handled in the UPDATED LOGIN section.
}

/*==========================================================
TOAST
==========================================================*/

function showToast(message,type){

    const toast=document.createElement("div");

    toast.className=`toast ${type}`;

    toast.innerText=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },50);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },3000);

}
/*==========================================================
 PREMIUM INTERACTIONS - PART 2
==========================================================*/

/*=====================================
 Floating Labels
=====================================*/

const inputs = document.querySelectorAll(".input-box input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.classList.add("focused");

    });

    input.addEventListener("blur", () => {

        if(input.value === ""){

            input.parentElement.classList.remove("focused");

        }

    });

});


/*=====================================
 Identity Welcome Message (Moved to initializeIdentity)
=====================================*/


/*=====================================
 Input Glow
=====================================*/

inputs.forEach(input=>{

    input.addEventListener("keyup",()=>{

        if(input.value.length>0){

            input.style.borderColor="#2563eb";

        }else{

            input.style.borderColor="";

        }

    });

});


/*=====================================
 Login Loading Animation
=====================================*/

const loginBtn=document.querySelector(".login-btn");

loginBtn.addEventListener("click",function(){

    if(loginBtn.classList.contains("loading")) return;

    loginBtn.classList.add("loading");

    loginBtn.innerHTML=`
        <span class="loader"></span>
        Signing In...
    `;

    setTimeout(()=>{

        loginBtn.classList.remove("loading");

        loginBtn.innerHTML="Sign In";

    },2000);

});


/*=====================================
 Keyboard Shortcut (Removed redundant form submit)
=====================================*/


/*=====================================
 Login Card Entrance Delay
=====================================*/

window.addEventListener("load",()=>{

    const card=document.querySelector(".login-card");

    card.style.opacity="0";

    card.style.transform="translateY(30px)";

    setTimeout(()=>{

        card.style.transition=".8s";

        card.style.opacity="1";

        card.style.transform="translateY(0px)";

    },250);

});


/*=====================================
 Background Rotation
=====================================*/

let angle=0;

setInterval(()=>{

    angle+=0.08;

    document.querySelector(".gradient-layer").style.transform=

    `rotate(${angle}deg) scale(1.08)`;

},40);


/*=====================================
 Feature Card Hover Glow
=====================================*/

document.querySelectorAll(".feature").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow=

        "0 20px 50px rgba(37,99,235,.20)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});


/*=====================================
 Simple Theme Toggle Ready
=====================================*/

let dark=false;

function toggleTheme(){

    dark=!dark;

    document.body.classList.toggle("dark");

}


/*=====================================
 Random Quote (Optional)
=====================================*/

const quotes=[

"Great teams build great organizations.",

"Productivity starts with people.",

"Every employee matters.",

"Empower your workforce every day."

];

const quote=document.createElement("div");

quote.className="daily-quote";

quote.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

const hero=document.querySelector(".hero-content");

if(hero){

    hero.appendChild(quote);

}
/*==========================================================
CORE COMPLETION
==========================================================*/

/*=========================================
EMAIL VALIDATION
=========================================*/

function validateEmail(email){

    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

/*=========================================
PASSWORD VALIDATION
=========================================*/

function validatePassword(password){

    return password.length>=8;

}

/*=========================================
REMEMBER ME
=========================================*/

const remember=document.querySelector("input[type='checkbox']");

const emailInput=document.querySelector("input[type='email']");

window.addEventListener("load",()=>{

    const savedEmail=localStorage.getItem("rememberEmail");

    const savedRole=localStorage.getItem("userRole");

    if(savedEmail){

        emailInput.value=savedEmail;

        remember.checked=true;

    }

    if(savedRole==="hr"){

        document.getElementById("hrBtn").click();

    }else{

        document.getElementById("employeeBtn").click();

    }

});

/*=========================================
SAVE USER
=========================================*/

function saveUser(){

    if(remember.checked){

        localStorage.setItem(

            "rememberEmail",

            emailInput.value

        );

    }

    else{

        localStorage.removeItem("rememberEmail");

    }

}

/*=========================================
SAVE ROLE (Moved to initializeIdentity)
=========================================*/

/*=========================================
ERROR SHAKE
=========================================*/

function shakeCard(){

    const card=document.querySelector(".login-card");

    card.classList.add("shake");

    setTimeout(()=>{

        card.classList.remove("shake");

    },500);

}

/*=========================================
SUCCESS OVERLAY
=========================================*/

function showSuccess(){

    const overlay=document.createElement("div");

    overlay.className="success-overlay";

    overlay.innerHTML=`

        <div class="success-box">

            <i class="ri-checkbox-circle-fill"></i>

            <h2>Login Successful</h2>

            <p>

                Preparing your workspace...

            </p>

        </div>

    `;

    document.body.appendChild(overlay);

    setTimeout(()=>{

        overlay.classList.add("show");

    },50);

}

/*=========================================
UPDATED LOGIN
=========================================*/

document

.getElementById("loginForm")

.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email=emailInput.value.trim();

    const password=

    document.getElementById("password").value;

    if(email===""){

        shakeCard();

        showToast(

        "Email is required",

        "error"

        );

        return;

    }

    if(!validateEmail(email)){

        shakeCard();

        showToast(

        "Invalid Email",

        "error"

        );

        return;

    }

    if(password===""){

        shakeCard();

        showToast(

        "Password required",

        "error"

        );

        return;

    }

    if(!validatePassword(password)){

        shakeCard();

        showToast(

        "Minimum 8 characters",

        "error"

        );

        return;

    }

    saveUser();

    showSuccess();

    setTimeout(()=>{

        window.location.href="oho.html";

    },2200);

});

/*=========================================
ESC KEY
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        document.activeElement.blur();

    }

});