const email = document.querySelector("#email");
const form = document.querySelector("form");
const errorEmail = document.querySelector("#email-error");
const main = document.querySelector("#main");
const success = document.querySelector("#success");
const dismiss = document.querySelector("#dismiss");
const emailaddress = document.querySelector("#emailaddress");

function resetform() {
    email.classList.remove(
        "text-[#ff6257ff]",
        "border-[#ff6257ff]",
        "bg-[#f3e2e1ff]"
    );
    errorEmail.classList.replace("flex", "hidden");
}

email.addEventListener("input", resetform);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetform();
    if (!email.checkValidity()) {
        errorEmail.classList.replace("hidden", "flex");
        email.classList.add(
            "text-[#ff6257ff]",
            "border-[#ff6257ff]",
            "bg-[#f3e2e1ff]"
        );
    }
    else {
        main.classList.toggle("hidden");
        main.classList.toggle("lg:grid");
        success.classList.toggle("hidden");
        emailaddress.textContent = email.value;
    }
});



dismiss.addEventListener("click", () => {
    form.reset();
    emailaddress.textContent = "";
    main.classList.remove("hidden");
    success.classList.toggle("hidden");
    main.classList.toggle("lg:grid");
});