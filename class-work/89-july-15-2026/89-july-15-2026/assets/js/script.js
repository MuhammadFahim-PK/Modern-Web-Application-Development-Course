console.log("This is my Js file, and it's include.");


// promise in js 
// wada in js 

// pending
// resolve
// reject 

// let food = new Promise((resolve, reject) => {
//     let zinger = false
//     if (zinger) {
//         resolve("zinger mil gaya")
//     }
//     else {
//         reject("Zinger nai mila")
//     }
// })

// .then(data => console.log(data))
// .catch(err => console.log(err))


// let getUsers = document.querySelector("#users")

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(data => data.json())
//     .then((data) => {
//         data.map((value) => {

//             let { street, suite, city, zipcode } = value.address

//             getUsers.innerHTML += `<div id="child"> 
//             <p> ${value.id} </p>
//             <p> ${value.name} </p>
//             <p> ${value.email} </p>
//             <p> ${value.username} </p>
//             <p> ${street} </p>
//             <p> ${suite} </p>
//             <p> ${city} </p>
//             <p> ${zipcode} </p>
//             </div>`

//             // let address = value.address
//             // for(let key in address){
//             //     getUsers.innerHTML += `<p> ${address[key]} </p>`
//             // }

//         })
//     })
//     .catch(err => console.log(err))

//  Fahim code
//  https://newsapi.org/v2/everything?q=tesla&from=2026-06-15&sortBy=publishedAt&apiKey=261b170628a442dc9563e3e38d99faa2

// fetch(`https://newsapi.org/v2/everything?q=tesla&from=2026-06-15&sortBy=publishedAt&apiKey=261b170628a442dc9563e3e38d99faa2`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// fetch(`https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=a6b00b58caf68aeb4ada0745aeeca3dc`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     data.map((value) => {});
//   })
//   .catch(error => {
//     console.error(error);
//   });


// fetch(`https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=a6b00b58caf68aeb4ada0745aeeca3dc`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);

//     let newsContainer = document.getElementById("news-container");

//     data.articles.map((article) => {
//       newsContainer.innerHTML += `
//         <div class="card">
//             <div class="img-wrapper">
//               <img 
//                 class="card-img-top" 
//                 src="${article.image || 'https://placehold.net/default.png'}" 
//                 alt="News image">
//             </div>

//             <div class="card-body">
//               <h5 class="card-title">
//                 ${article.title}
//               </h5>

//               <p class="card-text">
//                 ${article.description || "No description available"}
//               </p>

//               <a href="${article.url}" target="_blank" class="btn btn-primary">
//                 Read More
//               </a>
//             </div>
//           </div>
//       `;
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });


// fetch(`https://gnews.io/api/v4/search?q=baber+azam&lang=en&max=5&apikey=a6b00b58caf68aeb4ada0745aeeca3dc`)
//   .then(response => response.json())
//   .then(data => {

//     console.log(data);

//     // Create container
//     // let newsContainer = document.createElement("div");
//     let newsContainer = document.getElementById("news-container");

//     newsContainer.className = "row";
//     document.body.appendChild(newsContainer);

//     // Loop through articles
//     data.articles.map((article) => {

//       // Create card
//       let card = document.createElement("div");
//       card.className = "card col-md-4 mb-4";

//       card.innerHTML = `
//         <div class="img-wrapper">
//           <img 
//             class="card-img-top" 
//             src="${article.image || 'https://placehold.net/default.png'}" 
//             alt="News image">
//         </div>

//         <div class="card-body">
//           <h5 class="card-title">${article.title}</h5>

//           <p class="card-text">
//             ${article.description || "No description available"}
//           </p>

//           <a href="${article.url}" target="_blank" class="btn btn-primary">
//             Read More
//           </a>
//         </div>
//       `;

//       // Add card to container
//       newsContainer.appendChild(card);

//     });

//   })
//   .catch(error => {
//     console.error(error);
//   });

fetch(`https://newsapi.org/v2/everything?q=tesla&from=2026-06-15&sortBy=publishedAt&apiKey=261b170628a442dc9563e3e38d99faa2`)
    .then(response => response.json())
    .then(data => {
        //  console.log(data)

    })
    .catch(error => {
        console.error(error);
    });