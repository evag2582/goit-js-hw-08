import throttle from 'lodash.throttle';

const input = document.querySelector('.feedback-form');

  input.addEventListener("input", (e) => {
    e.preventDefault();
    const {
      elements: { email, message }
    } = e.currentTarget;
    const emailAndMessage = {
      email: email.value,
      message: message.value
    }  

    var throt_fun = throttle(function (data) {
      localStorage.setItem('feedback-form-state', JSON.stringify(emailAndMessage));
    }, 500);
    
    document.addEventListener('input', (e) => {
      throt_fun();
    });

  });

const savedJson = localStorage.getItem('feedback-form-state');
const saved = JSON.parse(savedJson);
  
  input.elements.email.value = saved.email ?? "";
  input.elements.message.value = saved.message ?? "";

input.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(saved);
   localStorage.removeItem('feedback-form-state');
   input.reset();
 });
