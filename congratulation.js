const date = document.getElementById("date");
const time = document.getElementById("time");
const user_ID = document.getElementById("user_ID");

const current_date = new Date().toLocaleDateString();
date.innerText = `Date: ${current_date}`;

const current_time = new Date().toLocaleTimeString();
time.innerText = `Time: ${current_time}`;

let id = Math.floor(Math.random() * 100000);
user_ID.innerText = `ID: ${id}`;
