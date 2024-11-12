const regexAlphabetsPattern = /^[A-Za-z\s-]+$/;

const setActivePage = (page) => {
  document.getElementById(page).style.color = "#fea116";
};
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    const navBar = document.getElementById("nav-bar");
    const goToTopBtn = document.getElementById("goto-top-btn");
    navBar.className = `nav-bar ${
      scrollY > 100 ? "nav-bar-scrolled" : "nav-bar-unscrolled"
    }`;
    goToTopBtn.style.display = scrollY > 100 ? "block" : "none";
  });
});

const goToTop = () => window.scrollTo(0, 0);

const validateName = (name) => {
  const patternError = document.getElementById("name-pattern-err");
  const requiredError = document.getElementById("name-required-err");
  requiredError.style.display = !name ? "block" : "none";
  showHidePatternError(patternError, name);
};
const validateSubject = (subject) => {
  const patternError = document.getElementById("subject-pattern-err");
  const requiredError = document.getElementById("subject-required-err");
  requiredError.style.display = !subject ? "block" : "none";
  showHidePatternError(patternError, subject);
};
const validateEmail = (email) => {
  const invalidErr = document.getElementById("invalid-email-err");
  const requiredErr = document.getElementById("email-required-err");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  requiredErr.style.display = !email ? "block" : "none";
  showHidePatternError(invalidErr, email, regex);
};

const validateSpecialRequestOrMessage = (value) => {
  const patternErr = document.getElementById("message-request-pattern-err");
  showHidePatternError(patternErr, value);
};

const validateDate = (date) => {
  const requiredErr = document.getElementById("date-required-err");
  requiredErr.style.display = !date ? "block" : "none";
};

const showHidePatternError = (
  errorElement,
  varToCheck,
  regex = regexAlphabetsPattern
) => {
  if (varToCheck) {
    errorElement.style.display = !regex.test(varToCheck) ? "block" : "none";
  } else {
    errorElement.style.display = "none";
  }
};

const showHideNavMobileMenu = () => {
  const mobileNavMenu = document.getElementById("mobile-nav-menu-list");
  mobileNavMenu.style.display =
    mobileNavMenu.style.display === "none" ? "block" : "none";
};
