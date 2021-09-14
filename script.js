let imgError = document.querySelector('.imgError')
let mail = document.querySelector('.mail')
let errorMsg = document.querySelector('.errorMsg')

function validate(event) {

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (mail.value.match(validRegex)) {
    alert("Email successfully sent!")
  } else {
    event.preventDefault()
    mail.style.borderColor = "hsl(0, 93%, 68%)"
    mail.style.borderWidth = "2px"
    imgError.style.visibility = "visible"
    errorMsg.style.visibility = "visible"
  }
}