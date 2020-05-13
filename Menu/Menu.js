/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/


let menuButton = document.querySelector(".menu-button");
const menuMaker = function(items){
  let menuButton = document.querySelector(".menu-button");
  let menu = document.createElement("div");
  let menuList = document.createElement("ul");
  items.forEach(element => {
    let menuItem = document.createElement("li");
    menuItem.textContent = element;
    menuList.append(menuItem);
  });

  menu.classList.add("menu");
  menu.append(menuList);


  menuButton.addEventListener("click", (event) =>{
    event.stopPropagation();
    menu.classList.add("fade");
    menu.classList.toggle("menu--open");
  })
  document.querySelector("body").addEventListener("click", (event)=>{
    menu.classList.remove("menu--open");
  })

  return menu;
}


document.querySelector(".header").append(menuMaker(menuItems));