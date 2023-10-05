const temperateField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

form.addEventListener("submit", search);

let target = "bhubaneswar";

const fetchData = async (target) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=10917fb46ae543278c7212432232608&q=${target}`;
try
{
  let response = await fetch(url)
let data = await response.json();
console.log(data)
const {
  current:{
    temp_c,
  condition:{text,icon},
  },
  location:{
    localtime,name
  }}=data
  updateDom(temp_c,name,localtime,icon,text);
}
catch{
  alert("THE LOCATION NOT FOUND")
}
}

function updateDom(temperate, city, time, emoji, text) {
  const exactTime = time.split(" ")[1];
  const exactDate = time.split(" ")[0];
  const exactDay = getDayFullName(new Date(exactDate).getDay());
  temperateField.innerText = temperate;
  cityField.innerText = city;
  dateField.innerText = `${exactTime} - ${exactDay}   ${exactDate}`;
  emojiField.src = emoji;
  weatherField.innerText = text
}

fetchData(target);
function search(e) {
  e.preventDefault();

  target = searchField.value;

  fetchData(target);
}


function getDayFullName(num) {
  switch (num) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturdat";

    default:
      return "Don't Know";
  }
}