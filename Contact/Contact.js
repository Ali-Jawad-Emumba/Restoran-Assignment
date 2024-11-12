document.addEventListener("DOMContentLoaded", () => {
    
  setActivePage('contact')
  });

const submitMessage=(event)=>{
    event.preventDefault()
    const name=document.getElementById('name-input').value
    const email=document.getElementById('email-input').value
    const subject=document.getElementById('subject-input').value
    const message=document.getElementById('message').value

    validateName(name)
    validateEmail(email)
    validateSpecialRequestOrMessage(message)
    validateSubject(subject)
    

}