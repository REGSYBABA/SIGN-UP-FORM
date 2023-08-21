const form = document.getElementById('my-form')
const fname = document.getElementById('first-name')
const lname = document.getElementById('last-name')
const email = document.getElementById('email')
const phoneNum = document.getElementById('phoneNumber')
const password = document.getElementById('password')
const password2 = document.getElementById('confirmPassword')
const btn = document.querySelector('button')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    validateInputs()
})

btn.addEventListener('click', () => {
    validateInputs()
})

const setError = (element, message) => {
    const inputs = element.parentElement
    const errorDisplay = inputs.querySelector('.error')
    console.log(inputs)
    
    errorDisplay.innerText = message
    inputs.classList.add('error')
    inputs.classList.remove('success')

}

const setSuccess = (element) => {
    const inputs = element.parentElement
    const errorDisplay = inputs.querySelector('.error')

    errorDisplay.innerText = ''
    inputs.classList.add('success')
    inputs.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhoneNUm = email => {
    const re = /^[0-9]{10}$/;
    return re.test(Number(email));
}

const validateInputs = () => {
    const fnameVal = fname.value.trim()
    const lnameVal = lname.value.trim()
    const emailVal = email.value.trim()
    const phoneNumVal = phoneNum.value.trim()
    const passwordVal = password.value.trim()
    const password2Val = password2.value.trim()

    if (fnameVal === ''){
       setError(fname, 'first name is required')
    } else {
        setSuccess(fname)
    }

    if (lnameVal === ''){
        setError(lname, 'last name is required')
    } else {
         setSuccess(lname)
    }
   
    if (phoneNumVal === ''){
        setError(phoneNum, 'Phone no is required')
    } else if (phoneNumVal.length !== 11){
        setError(phoneNum, 'Phone no should be 11 digits')
    } else if (!isValidPhoneNUm){
        setError(phoneNum, 'Invalid Phone no')
    } else {
        setSuccess(phoneNum)
    }

    if (emailVal === ''){
        setError(email, 'Email is Required')
    } else if(!isValidEmail(emailVal)){
        setError(email, 'Enter a valid email')
    } else {
        setSuccess(email)
    }

    if(passwordVal === ''){
        setError(password, 'Password is required')
    } else if(passwordVal.length < 8){
        setError(password, 'Password must be at least 8 characters')
    } else{
        setSuccess(password)
    }

    if(password2Val === ''){
        setError(password2, 'Password confirm your password')
    } else if(passwordVal !== password2Val){
        setError(password2, "Passwords doesn't match")
    } else{
        setSuccess(password2)
    }
}