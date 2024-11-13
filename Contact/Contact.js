document.addEventListener("DOMContentLoaded", () => {
  setActivePage("contact");
});

const submitMessage = (event) => {
  event.preventDefault();
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const subject = document.getElementById("subject-input").value;
  const message = document.getElementById("message").value;

  validateName(name);
  validateEmail(email);
  validateSpecialRequestOrMessage(message);
  validateSubject(subject);

  const shallShowPopup=[name, isValid.name, email, isValid.email, subject, isValid.subject, isValid.specialReqOrMsg].every(check=>check)
  if (shallShowPopup) {
    Swal.fire({
      title: "Message Send",
      icon: "success",
    });
}
}
