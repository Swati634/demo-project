function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var num = document.getElementById("num_row" + no);
  var name = document.getElementById("name_row" + no);
  var country = document.getElementById("country_row" + no);
  var age = document.getElementById("age_row" + no);

  var num_data = num.innerHTML;
  var name_data = name.innerHTML;
  var country_data = country.innerHTML;
  var age_data = age.innerHTML;

  num.innerHTML =
    "<input type='number' id='num_number" + no + "' value='" + num_data + "'>";
  name.innerHTML =
    "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
  country.innerHTML =
    "<input type='text' id='country_text" +
    no +
    "' value='" +
    country_data +
    "'>";
  age.innerHTML =
    "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}

function save_row(no) {
  var num_val = document.getElementById("num_number" + no).value;
  var name_val = document.getElementById("name_text" + no).value;
  var country_val = document.getElementById("country_text" + no).value;
  var age_val = document.getElementById("age_text" + no).value;

  document.getElementById("num_row" + no).innerHTML = num_val;
  document.getElementById("name_row" + no).innerHTML = name_val;
  document.getElementById("country_row" + no).innerHTML = country_val;
  document.getElementById("age_row" + no).innerHTML = age_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

const add_row = () => {
  let user_records_details = [];

  const new_num = document.getElementById("new_num").value;
  const new_name = document.getElementById("new_name").value;
  const new_country = document.getElementById("new_country").value;
  const new_age = document.getElementById("new_age").value;

  const table = document.getElementById("data_table");
  const table_len = table.rows.length;
  const row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'><td id='num_row" +
    table_len +
    "'>" +
    new_num +
    "</td><td id='name_row" +
    table_len +
    "'>" +
    new_name +
    "</td><td id='country_row" +
    table_len +
    "'>" +
    new_country +
    "</td><td id='age_row" +
    table_len +
    "'>" +
    new_age +
    "</td><td><input type='button' id='edit_button" +
    table_len +
    "' value='Edit' class='edit' onclick='edit_row(" +
    table_len +
    ")'> <input type='button' id='save_button" +
    table_len +
    "' value='Save' class='save' onclick='save_row(" +
    table_len +
    ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" +
    table_len +
    ")'></td></tr>");

  user_records_details = JSON.parse(localStorage.getItem("usersList"))
    ? JSON.parse(localStorage.getItem("usersList"))
    : [];
  user_records_details.push({
    Sr_No: new_num,
    Name: new_name,
    Country: new_country,
    Age: new_age,
  });
  localStorage.setItem("usersList", JSON.stringify(user_records_details));
  alert("You have add data successfully");
};
