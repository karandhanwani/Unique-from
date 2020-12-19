function animatedform()
{
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener("click" , () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(input.type === "text" && validateUser(input))
            {
                nextSlide(parent,nextForm);
            }
            else if(input.type === "email" && validateemail(input))
            {
                nextSlide(parent,nextForm);
            }
            else if(input.type === "password" && validatepass(input))
            {
                nextSlide(parent,nextForm);
            }
            else
            {
                parent.style.animation = "shake 0.5s ease";
            }
            parent.addEventListener("animationend" , () => {
                parent.style.animation = "";
            });
        });
    });
}
var error_icon = document.getElementById("error-icon");
var text;
var error_msg = document.getElementById("error-msg");

function validateUser(user)
{
    if(user.value.length < 6)
    {
        console.log("not enough characters");
        error_icon.classList.add("active");
        text = "Enter more than 6 characters";
        error_msg.innerHTML = text;
        error("rgb(189,87,87)");
    }
    else
    {
        error_icon.classList.remove("active");
        error("rgb(87, 189, 130)");
        return true;
    }
}

function validateemail(email)
{
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailregex.test(email.value))
    {
        error_icon.classList.remove("active");
        console.log("email accepted");
        error("rgb(87, 189, 130)");
        return true;
    }
    else
    {
        error_icon.classList.add("active");
        text = "Enter valid email";
        error_msg.innerHTML = text;
        console.log("email rejected");
        error("rgb(189,87,87)");
        return false;   
    }
}

function validatepass(password)
{
    const passsregex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(passsregex.test(password.value))
    {
        error_icon.classList.remove("active");
        console.log("password accepted");
        error("rgb(87, 189, 130)");
        return true;
    }
    else
    {
        error_icon.classList.add("active");
        text = "Password should contain special charcter, numbers and capital letter";
        error_msg.innerHTML = text;
        console.log("password rejected");
        error("rgb(189,87,87)");
        return false; 
    }
}

function nextSlide(parent , nextform)
{
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nextform.classList.add("active");

}

function error(color)
{
    document.body.style.backgroundColor = color;
}

animatedform();