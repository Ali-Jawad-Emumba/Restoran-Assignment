let selectedMenuType = "popularBreakfast";
let isReservationFormValid = false;


const menuItems = {
  lovelyDinner: [
    { name: "Grilled Salmon", price: 18.99 },
    { name: "Steak and Mashed Potatoes", price: 24.99 },
    { name: "Lobster Risotto", price: 28.5 },
    { name: "Roasted Duck Breast", price: 22.0 },
    { name: "Chicken Alfredo Pasta", price: 16.75 },
    { name: "Vegetable Stir-Fry", price: 13.5 },
    { name: "Beef Wellington", price: 30.0 },
    { name: "Lamb Chops with Mint Sauce", price: 27.25 },
  ],
  specialLunch: [
    { name: "Chicken Caesar Salad", price: 11.5 },
    { name: "Turkey Club Sandwich", price: 10.25 },
    { name: "Spaghetti Bolognese", price: 13.0 },
    { name: "Shrimp Tacos", price: 14.75 },
    { name: "Vegetarian Wrap", price: 9.5 },
    { name: "Fish and Chips", price: 12.5 },
    { name: "BBQ Pulled Pork Sandwich", price: 13.25 },
    { name: "Greek Salad with Grilled Chicken", price: 12.0 },
  ],
  popularBreakfast: [
    { name: "Avocado Toast with Poached Eggs", price: 9.75 },
    { name: "Pancakes with Maple Syrup", price: 8.5 },
    { name: "Classic French Toast", price: 8.0 },
    { name: "Eggs Benedict", price: 11.25 },
    { name: "Breakfast Burrito", price: 10.0 },
    { name: "Oatmeal with Fresh Berries", price: 7.0 },
    { name: "Bagel with Smoked Salmon", price: 9.5 },
    { name: "Fruit and Yogurt Parfait", price: 6.75 },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  updateMenuList();
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("date-input").setAttribute("min", today);
  setActivePage("home");
});

const setSelectedMenuType = (menuType) => {
  selectedMenuType = menuType;
  updateMenuList();
};

const updateMenuList = () => {
  let menuItemsHtml = menuItems[selectedMenuType].map(
    (menuItem, index) => `<div class="menu-item">
            <img src="../assets/images/menu-${index + 1}.jpg.png" alt="" />
            <div class="food-details">
              <div class="food-name-and-price"> 
<h3>${menuItem.name}</h3>
                <h3>$${menuItem.price}</h3>
              </div>
              <p>Ipsum ipsum clita erat amet dolor justo diam</p>
            </div>
          </div>
          `
  );
  document.getElementById("menu-list").innerHTML = menuItemsHtml.join("");

  markUnderlines(selectedMenuType);
};
const markUnderlines = (selectedMenuType) => {
  document.getElementById(`${selectedMenuType}-underline`).style.borderColor =
    "#fea116";
  markOthersLineGray(selectedMenuType);
};

//mark the underline of other elemnts expect of the provided type to gray
const markOthersLineGray = (currentType) => {
  const typesToUnderline = Object.keys(menuItems).filter(
    (type) => type !== currentType
  );
  typesToUnderline.forEach(
    (type) =>
      (document.getElementById(`${type}-underline`).style.borderColor =
        "lightgray")
  );
};

const bookReservation = (event) => {
  event.preventDefault();
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const request = document.getElementById("special-request-input").value;
  const date = document.getElementById("date-input").value;

  validateName(name);
  validateEmail(email);
  validateSpecialRequestOrMessage(request);
  validateDate(date);

  const shallShowPopup=[name, isValid.name, email, isValid.email, date, isValid.specialReqOrMsg].every(check=>check)
  if (shallShowPopup) {
    Swal.fire({
      title: "Reservation Booked",
      icon: "success",
    });
  }
};
const formatDate = (event) => {
  const dateTime = event.target.value;
  console.log(dateTime);
  const [date, time] = dateTime.split("T");
  const [year, month, day] = date.split("-");
  document.getElementById("date-input").type = "text";

  document.getElementById(
    "date-input"
  ).value = `${day}/${month}/${year}, ${time}`;
};
