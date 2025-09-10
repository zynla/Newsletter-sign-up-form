const dismiss = document.querySelector("#dismiss");
const email = document.querySelector("#email");
const main = document.querySelector("#main");
const success = document.querySelector("#success");
const form = document.querySelector("form");
const emailaddress = document.querySelector("#emailaddress");
const emailerror = document.querySelector("#email-error");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    if (!email.checkValidity()) {
        emailerror.classList.replace("hidden", "flex");
        email.style.border = "1px solid #ff6257ff";
        email.style.background = "#f3e2e1ff";
        email.style.color = "#ff6257ff";
    } else {
        emailaddress.textContent = email.value;
        main.classList.toggle("hidden");
        success.classList.toggle("hidden");
        emailerror.classList.replace("flex", "hidden");
        email.style.border = "";
        email.style.background = "";
        email.style.color = "";
        
    }
    
});

dismiss.addEventListener("click", ()=> {
    form.reset();
    main.classList.toggle("hidden");
    success.classList.toggle("hidden");
});