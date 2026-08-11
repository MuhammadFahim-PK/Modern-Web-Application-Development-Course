console.log("This is my Js file");
// console.log("api calling in js -->");

let cardParent = document.querySelector(".cards-wrapper")

// fetch 

startApp()

// index.html ka -->
function startApp (){

    fetch("https://dummyjson.com/posts").then((response) => {
    return response.json()  
})
.then((result) => {
    // console.log(result.posts);

 let returnHTML =    result.posts.map((item) => {
const {id, title, body, tags, reactions, views, userId} = item

        return `
        <div class="card" id=${item.id}>    
            <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <p class="card-text">${body}</p>
                <span class="btn btn-primary">Go somewhere</span>
            </div>
        </div>
      `
    })

    cardParent.innerHTML = returnHTML.join(" ")
    console.log(returnHTML);
    
    
})

}


document.addEventListener("click", (e) => {
    let elem = e.target;
    if(elem.classList.contains("meraCard")){
        localStorage.setItem("id", JSON.stringify(elem.id))
    }
    


    
})