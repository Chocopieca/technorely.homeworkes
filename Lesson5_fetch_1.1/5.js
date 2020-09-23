// const API = 'http://dummy.restapiexample.com/api/v1/'
// const endpoints = {
//     getEmployees: 'employees', // GET
//     getEmployee: 'employee/$id', // GET
//     createEmployee: 'create', // POST
//     updateEmployee: 'update/$id', // PUT
//     deleteEmployee: 'delete/$id' // DELETE
// }

// /*
// {
//     "id": "1",
//     "employee_name": "Tiger Nixon",
//     "employee_salary": "320800",
//     "employee_age": "61",
//     "profile_image": ""
// }
// */


// // XHR
// function myAsyncFunction(url, method = 'GET', body = {}) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, API + url);

//         xhr.body = body

//         xhr.headers = {
//             'Content-Type': 'application/json'
//         }

//         xhr.onreadystatechange = () => {
//             console.log(xhr.readyState)
//         }

//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(xhr.statusText);

//         xhr.send();
//     });
// }

// // Fetch
// function myAsyncFunctionFetch(url, method = 'GET', body) {
//     return fetch(API + url, {
//         method: method,
//         body: body,
//         headers: {
//             // 'Content-Type': 'application/json'
//         }
//     })
// }

// const list = document.getElementById('table-body');

// function foo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('asdasdas')
//         }, 2000)
//         setTimeout(() => {
//             resolve('Hi')
//         }, 5000)
//     })
// }

// myAsyncFunctionFetch(endpoints.getEmployees, 'GET')
//     .then(res => res.json())
//     .then(async response => {
//         const data = response.data
//         try {
//             console.log(await foo())
//             data.forEach(item => {
//                 console.log('Processing')
//                 const tr = document.createElement('tr')
//                 Object.keys(item).forEach(i => {
//                     if (i in item) {
//                         const td = document.createElement('td')
//                         td.textContent = item[i]
//                         tr.appendChild(td)
//                     }
//                 })
//                 list.appendChild(tr)
//             })
//         } catch (e) {
//             console.log(e)
//         }
//     })

const tbody = document.getElementById("table-body");
let numLine = 1;

function sendForm(e) {
    e.preventDefault()
    const tr = document.createElement('tr');

    tr.id = numLine;
    for (let input of e.target) {
        if (input.name === 'id' && !input.value) {
            return alert("Введите id");
        }

        let td = document.createElement('td');
        td.innerHTML = `${input.value}`;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    ++numLine;
}

const form = document.querySelector('form')
form.onsubmit = sendForm