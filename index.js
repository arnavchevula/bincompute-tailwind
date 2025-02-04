const form = document.getElementById("contact_form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");

function processFormData(e) {
  e.preventDefault();
  console.log(userName.value);
  console.log(userEmail.value);
  console.log(userMessage.value);
  // validateForm();

  // if(isValid === true) {
  // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
  // .then(function(response){
  //     message.textContent ="Thank you very much we will reply to you as soon as possible";
  //     message.style.color = 'green';
  //     messageContainer.style.borderColor = 'green';
  //     console.log('SUCCES', response.status, response.text);
  // }, function(error){
  //     console.log("FAILED", error);
  // })
  // }
}

form.addEventListener("submit", processFormData);
