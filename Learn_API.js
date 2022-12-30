//API examples

// ======= 1st Example

// let p = fetch("https://goweather.herokuapp.com/weather/bardoli")
// p.then((response) => {
//   console.log(response.status)
//   console.log(response.ok);
//   //console.log(response.text());
//   return response.json()
// }).then((value2) => {
//   console.log(value2);
// })


// ======== 2ND Example

// console.log("This is my file")
// let mybtn = document.getElementById("mybtn");
// let content = document.getElementById("content");
// function getdata() {
//     console.log("started data")
//     url = "home1.txt";
//     fetch(url).then((response) => {
//         console.log("Inside  1st data")
//         console.log(response, "------------");
//         return response.text();
//     }).then((data) => {
//         console.log("Inside 2nd data")
//         console.log();
//     })
// }
// console.log("Before running data")
// getdata()
// console.log("After running data")

//========= 3rd Example(api github users)

// console.log("This is my file")
// let mybtn = document.getElementById("mybtn");
// let content = document.getElementById("content");
// function getdata() {
//     console.log("started data")
//     url = "https://api.github.com/users";
//     fetch(url).then((response) => {
//         console.log("Inside  1st data")
//         return response.json();
//     }).then((data) => {
//         console.log("Inside 2nd data")
//         console.log(data);
//     })
// }
// console.log("Before running data")
// getdata()
// console.log("After running data")

// ====== Using Post Request




// function postData() {

//     url = "https://dummy.restapiexample.com/api/v1/create";
//     data = { "name": "test111111", "salary": 123, "age": 23 }
//     params = {
//         method: 'post',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     }
//     fetch(url, params).then(response => response.json())
//         .then(data => console.log(data))
// }
// postData()



// const postData = async () => {
//     // url = "http://dummy.restapiexample.com/api/v1/create";
//     // data = '{"name":"harglry347485945","salary":"123","age":"23"}'
//     // params = {
//     //     method: 'post',
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },
//     //     body: data
//     // }
//     const ok = await fetch(url, params);
// }
// postData()



const postData = async () => {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    const ok = await fetch(url, params);
}
postData()
user_records_details.push({
    Sr_No: num,
    Name: name,
    Country: country,
    Age: age,
});



///put  method
// fetch("https://reqres.in/api/users", {
//   method: "PUT",
//   body: JSON.stringify({
//     Name: name,
//     Country: country,
//     Age: age,
//   }),
//   headers: {
//     "content-Type": "application/JSON; charset=UTF-8",
//   },
// })
