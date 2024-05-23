"use strict";
const holder_name = document.getElementById("holder")
const num_input = document.getElementById("card-num")
const exp_txtM = document.getElementById("exp-month")
const exp_txtY = document.getElementById("exp-year")
const cvc_no = document.getElementById("cvc");
const card_name = document.getElementById("card");
const card_num = document.getElementById("card-no")
const exp_month = document.getElementById("month")
const exp_year = document.getElementById("year")
const cvc = document.getElementById("cvc-num")
const wrongNum = document.getElementById("error1")
const blank = document.getElementById("error2")
const blankCvc = document.getElementById("error3")
const pattern_name = /^[A-Za-z]+ [A-Za-z]+$/;
const pattern_card = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;
const pattern_exp = /^[0-9]{2}$/;
const pattern_cvc = /^[0-9]{3}$/;
const btn = document.getElementById('btn')


function validateName() {
    if (card_name.value.match(pattern_name)) {
        holder_name.textContent = card_name.value
        card_name.classList.remove("border-color")
    } else if (!(card_name.value) || !(card_name.value.match(pattern_name))) {
        card_name.classList.add("border-color")
    }
}
function validateCardNum() {
    if (card_num.value.match(pattern_card)) {
        num_input.textContent = card_num.value
        card_num.classList.remove("border-color")
        wrongNum.classList.add("errormsg")
    } else if (!card_num.value) {
        wrongNum.textContent = "Please input your card number"
        card_num.classList.add("border-color")
        wrongNum.classList.remove("errormsg")
    } if (!(card_num.value.match(pattern_card))) {
        card_num.classList.add("border-color")
        wrongNum.textContent = "Please check your input"
        wrongNum.classList.remove("errormsg")
    }
    if (card_num.value.match(pattern_card)) {
        card_num.classList.remove("border-color")
        wrongNum.classList.add("errormsg")
    }
}
function validateDate() {
    console.log(Number(exp_year.value));
    const vas = Number(exp_month.value);
    if (exp_year.value.match(pattern_exp) && exp_month.value.match(pattern_exp)) {
        if (vas > 12) {
            exp_month.classList.add("border-color")
            blank.textContent = "Please check your input"
        } else {
            exp_month.classList.remove("border-color")
            exp_txtM.textContent = exp_month.value

        }
        exp_txtY.textContent = exp_year.value
        exp_month.classList.remove("border-color")
        exp_year.classList.remove("border-color")
        blank.classList.add("errormsg")
    }
    if (!(exp_month.value.match(pattern_exp))) {
        blank.classList.remove("errormsg")
        blank.textContent = "Please check your input"
        exp_month.classList.add("border-color")
    }
    if (!(exp_year.value.match(pattern_exp))) {
        exp_year.classList.add("border-color")
        blank.classList.remove("errormsg")
        blank.textContent = "Please check your input"
    }
    if (!(exp_month.value.match(pattern_exp)) && !(exp_year.value.match(pattern_exp))) {
        exp_month.classList.add("border-color")
        exp_year.classList.add("border-color")
        blank.classList.remove("errormsg")
        exp_txtM.textContent = "00"
        exp_txtY.textContent = "00"
    }
    if (exp_month.value && !exp_year.value) {
        exp_year.classList.add("border-color")
        exp_month.classList.remove("border-color")
        blank.classList.remove("errormsg")
        exp_txtM.textContent = "00"
        exp_txtY.textContent = "00"
    }
    if (!exp_month.value && exp_year.value) {
        exp_month.classList.add("border-color")
        exp_year.classList.remove("border-color")
        blank.classList.remove("errormsg")
        exp_txtM.textContent = "00"
        exp_txtY.textContent = "00"
        blank.textContent = "Can't be blank"
    }
    if (!(exp_month.value) && !(exp_year.value)) {
        exp_month.classList.add("border-color")
        exp_year.classList.add("border-color")
        blank.classList.remove("errormsg")
        exp_txtM.textContent = "00"
        exp_txtY.textContent = "00"
        blank.textContent = "Can't be blank"
    }
}


function validateCvc() {
    if (cvc_no.value.match(pattern_cvc)) {
        cvc.textContent = cvc_no.value
        cvc_no.style.border = "1px solid rgb(145, 143, 143)"
        blankCvc.classList.add("errormsg")
    }
    if (!(cvc_no.value.match(pattern_cvc))) {
        blankCvc.textContent = "Please check your input"
        blankCvc.classList.remove("errormsg")
        cvc_no.style.border = "1px solid #ff0000"
    }
    if (!(cvc_no.value)) {
        cvc_no.style.border = "1px solid #ff0000"
        blankCvc.textContent = "Can't be blank"
        blankCvc.classList.remove("errormsg")
    }

}

btn.addEventListener("click", function () {
    validateName()
    validateCardNum()
    validateDate()
    validateCvc()
    if (card_name.value && card_num.value && exp_month.value && exp_year.value && cvc_no.value) {
        if (!(card_name.classList.contains("border-color")) &&
            !(card_num.classList.contains("border-color")) &&
            !(exp_month.classList.contains("border-color")) &&
            !(exp_year.classList.contains("border-color")) &&
            (cvc_no.style.border !== "1px solid #ff0000")) {

            document.querySelector("#info").classList.add("errormsg")
            document.querySelector("#complete").classList.remove("errormsg")
        }
    }

})
