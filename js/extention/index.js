const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deletBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage === null) {
  ulEl.innerHTML = `<p>You have saved no leads</p>`;
} else {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

function render(leads) {
  let listitems = "";
  for (let i = 0; i < leads.length; i++) {
    listitems += `<li><a href='https://${leads[i]}' target='_blank'> ${leads[i]}  </a></li>`;
  }
  ulEl.innerHTML = listitems;
}

deletBtn.addEventListener("dblclick", function () {
  console.log("clicked");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
  ulEl.innerHTML = `<p>You have saved no leads</p>`;
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    render(myLeads);
  });
});
