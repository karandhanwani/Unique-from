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


function validateUser(user)
{
    if(user.value.length < 6)
    {
        console.log("not enough characters");
        error("rgb(189,87,87)");
    }
    else
    {
        error("rgb(87, 189, 130)");
        return true;
    }
}

function validateemail(email)
{
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailregex.test(email.value))
    {
        console.log("email accepted");
        error("rgb(87, 189, 130)");
        return true;
    }
    else
    {
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
        console.log("password accepted");
        error("rgb(87, 189, 130)");
        return true;
    }
    else
    {
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