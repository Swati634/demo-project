function dlt(id) {

  fetch(
    'https://crudcrud.com/api/b1df15bc14f54134a2f6063814fdc4bf/data/' + id, {
    method: 'DELETE'
  })
    .then(response => console.log(response))
  getResponse();
  clear();
}

function clear() {
  document.getElementById("new_num").value = "";
  document.getElementById("new_name").value = "";
  document.getElementById("new_country").value = "";
  document.getElementById("new_age").value = "";
}
const add_row = async () => {
  const id = localStorage.getItem('userIds');
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
    if (id) {
      console.log(id)
      const response = await fetch(
        `https://crudcrud.com/api/b1df15bc14f54134a2f6063814fdc4bf/data/` + id,
        {
          headers: { "Content-Type": "application/json; charset=utf-8" },
          method: "PUT",
          body: JSON.stringify({
            Name: name,
            Country: country,
            Age: age,
          }),
        }
      );
      const data = response.json();
      console.log(data);
      localStorage.removeItem('userIds');
    } else {
      const response = await fetch(
        'https://crudcrud.com/api/b1df15bc14f54134a2f6063814fdc4bf/data',
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

    }
    var myModalEl = document.getElementById("exampleModal");
    getResponse();
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
    clear();
  }
};
async function getResponse() {
  const response = await fetch(
    'https://crudcrud.com/api/b1df15bc14f54134a2f6063814fdc4bf/data',
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "GET",
    }
  );
  const data = await response.json();
  displaydata(data)
}
getResponse()


function displaydata(demo) {

  let table = '';
  table += `<tr><th>Sr_No</th><th>Name</th><th>Country</th><th>Age</th><th>Actions</th></tr><tbody>`;

  demo.length && demo.map((demos, index) => {
    table = table + `<tr>\
    <td>`+ demos._id + `</td>
    <td>`+ demos.Name + `</td>
    <td>`+ demos.Country + `</td>
    <td>`+ demos.Age + `</td>\
    <td>\
    <button class= 'edit btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal' id="edit" onclick="edit('`+ demos._id + `')"> Edit</button>
    <button button class='delete btn btn-danger' id = "dlt" onClick = "dlt('`+ demos._id + `')" > Delete </button ></td >\
    </tr >`;
  });
  table += `</tbody > `;
  document.getElementById("table").innerHTML = table;

}


async function getSingleUserData(id) {
  const response = await fetch(
    'https://crudcrud.com/api/b1df15bc14f54134a2f6063814fdc4bf/data/' + id,
    {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "GET",
    }
  );
  const data = await response.json();
  console.log(data, '=------------');
  document.getElementById("new_name").value = data.Name;
  document.getElementById("new_country").value = data.Country;
  document.getElementById("new_age").value = data.Age;

}

function edit(userId) {
  localStorage.setItem('userIds', userId)
  getSingleUserData(userId)
}


//'${x._id}') " 