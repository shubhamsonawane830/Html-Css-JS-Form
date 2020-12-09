const text = document.querySelector('#text');
        const textError = document.querySelector('.text-error');
        text.addEventListener('input', function() {
            const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
            if (nameRegex.test(text.value))
                textError.textContent = "";
            else textError.textContent = "Name is Incorrect ";
        });

const email = document.querySelector('#email');
    const emailError = document.querySelector('.email-error');
    email.addEventListener('input', function() {
        const regEmail = /^[A-Za-z0-9]+([._%+-][0-9a-zA-Z]+)*@[A-Za-z0-9]+([.]([a-zA-Z]{2,3})*)+$/;
        if (regEmail.test(email.value))
            emailError.textContent = "";
        else emailError.textContent = "Email is Incorrect ";
    });

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});

