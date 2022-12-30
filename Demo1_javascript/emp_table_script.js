// let selectedtr = null;
// function empty() {
//   if (selectedtr == null) {
//     add_row();
//   } else {
//     update();
//     selectedtr = null;
//   }
// }
// function edit(y) {
//   selectedtr = y.parentElement.parentElement;
//   console.log(selectedtr, "HELLO");
//   document.getElementById("new_num").value = selectedtr.cells[0].innerHTML;
//   document.getElementById("new_name").value = selectedtr.cells[1].innerHTML;
//   document.getElementById("new_country").value = selectedtr.cells[2].innerHTML;
//   document.getElementById("new_age").value = selectedtr.cells[3].innerHTML;
// }
// function update(z) {
//   console.log(selectedtr, "HELLO======");
//   selectedtr.cells[0].innerHTML = document.getElementById("new_num").value;
//   selectedtr.cells[1].innerHTML = document.getElementById("new_name").value;
//   selectedtr.cells[2].innerHTML = document.getElementById("new_country").value;
//   selectedtr.cells[3].innerHTML = document.getElementById("new_age").value;
//   var myModalEl = document.getElementById("exampleModal");
//   var modal = bootstrap.Modal.getInstance(myModalEl);
//   modal.hide();
// }
// function dlt(dl) {
//   var dltrow = dl.parentElement.parentElement;
//   dltrow.remove();
//   clear();
// }
// function clear() {
//   document.getElementById("new_num").value = "";
//   document.getElementById("new_name").value = "";
//   document.getElementById("new_country").value = "";
//   document.getElementById("new_age").value = "";
// }
// const add_row = () => {
//   const num = document.getElementById("new_num").value
//   const name = document.getElementById("new_name").value;
//   const country = document.getElementById("new_country").value
//   const age = document.getElementById("new_age").value
//   if (name == "") {
//     alert("Please enter your name");
//     return false;
//   } else if (country == "") {
//     alert("Please enter your country name");
//     return false;
//   } else if (age == "") {
//     alert("Please enter your Age");
//     return false;
//   } else {
//     let table = document.getElementById("table")
//     let row = table.insertRow(-1)
//     let sr = row.insertCell(0);
//     let nm = row.insertCell(1);
//     let cr = row.insertCell(2);
//     let ae = row.insertCell(3);
//     let edit = row.insertCell(4);
//     sr.innerHTML = document.getElementById("new_num").value;
//     nm.innerHTML = document.getElementById("new_name").value;
//     cr.innerHTML = document.getElementById("new_country").value;
//     ae.innerHTML = document.getElementById("new_age").value;
//     edit.innerHTML = `<button class='edit btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal' id="edit" onClick="edit(this)">Edit</button>
//   <button class='delete btn btn-danger' id="dlt" onClick="dlt(this)">Delete </button>`;
//     user_records_details = JSON.parse(localStorage.getItem("usersList"))
//       ? JSON.parse(localStorage.getItem("usersList"))
//       : [];
//     user_records_details.push({
//       Sr_No: num,
//       Name: name,
//       Country: country,
//       Age: age,
//     });
//     localStorage.setItem("usersList", JSON.stringify(user_records_details));
//     var myModalEl = document.getElementById("exampleModal");
//     var modal = bootstrap.Modal.getInstance(myModalEl);
//     modal.hide();
//     clear();
//   }
// }

//================== Data store API Through

let selectedtr = null;
function empty() {
  if (selectedtr == null) {
    add_row();
  } else {
    update();
    selectedtr = null;
  }
}
function edit(y) {
  console.log(y, "y=hellooooooo");
  selectedtr = y.parentElement.parentElement;
  console.log(selectedtr, "HELLO");
  document.getElementById("new_num").value = selectedtr.cells[0].innerHTML;
  document.getElementById("new_name").value = selectedtr.cells[1].innerHTML;
  document.getElementById("new_country").value = selectedtr.cells[2].innerHTML;
  document.getElementById("new_age").value = selectedtr.cells[3].innerHTML;
}
async function update(z) {
  console.log(selectedtr, "HELLO======");
  selectedtr.cells[0].innerHTML = document.getElementById("new_num").value;
  selectedtr.cells[1].innerHTML = document.getElementById("new_name").value;
  selectedtr.cells[2].innerHTML = document.getElementById("new_country").value;
  selectedtr.cells[3].innerHTML = document.getElementById("new_age").value;

  const name = selectedtr.cells[1].innerHTML
  const country = selectedtr.cells[2].innerHTML
  const age = selectedtr.cells[3].innerHTML
  const response = await fetch(
    'https://crudcrud.com/api/d33eec5b0a7a4679ae002fffe8b87ef5/data',
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        Name: name,
        Country: country,
        Age: age,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
  var myModalEl = document.getElementById("exampleModal");
  var modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();
  clear();
}

function dlt(dl) {
  var dltrow = dl.parentElement.parentElement;
  dltrow.remove();

  fetch(
    'https://crudcrud.com/api/d33eec5b0a7a4679ae002fffe8b87ef5/data', {
    method: 'DELETE'
  })
    .then(response => console.log(response))
  clear();
}

function clear() {
  document.getElementById("new_num").value = "";
  document.getElementById("new_name").value = "";
  document.getElementById("new_country").value = "";
  document.getElementById("new_age").value = "";
}
const add_row = async () => {
  const num = document.getElementById("new_num").value;
  const name = document.getElementById("new_name").value;
  const country = document.getElementById("new_country").value;
  const age = document.getElementById("new_age").value;
  if (name == "") {
    alert("Please enter your name");
    return false;
  } else if (country == "") {
    alert("Please enter your country name");
    return false;
  } else if (age == "") {
    alert("Please enter your Age");
    return false;
  } else {
    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let sr = row.insertCell(0);
    let nm = row.insertCell(1);
    let cr = row.insertCell(2);
    let ae = row.insertCell(3);
    let edit = row.insertCell(4);
    sr.innerHTML = document.getElementById("new_num").value;
    nm.innerHTML = document.getElementById("new_name").value;
    cr.innerHTML = document.getElementById("new_country").value;
    ae.innerHTML = document.getElementById("new_age").value;
    edit.innerHTML = `<button class='edit btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal' id="edit" onClick="edit(this)">Edit</button>
  <button class='delete btn btn-danger' id="dlt" onClick="dlt(this)">Delete </button>`;

    const response = await fetch(
      'https://crudcrud.com/api/d33eec5b0a7a4679ae002fffe8b87ef5/data',
      {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify({
          Name: name,
          Country: country,
          Age: age,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    var myModalEl = document.getElementById("exampleModal");
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
    clear();
  }
};
async function getResponse() {
  const response = await fetch(
    'https://crudcrud.com/api/d33eec5b0a7a4679ae002fffe8b87ef5/data',
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "GET",
    }
  );
  const data = await response.json();
  console.log(data);
}
getResponse()