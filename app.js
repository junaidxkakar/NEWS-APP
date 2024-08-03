let div = document.getElementById('getdiv')
let getsearch = document.getElementById('search')

let newssearch = () => {
    fetch(`https://newsapi.org/v2/everything?q=${getsearch.value}&from=2024-07-03&sortBy=publishedAt&apiKey=d2b5280be8974a978248e2cbf4335939`)
        .then(data => data.json())
        // .then(data => console.log(data))

        .then(data => {
            for (let i = 0; i < data.articles.length; i++) {
                div.innerHTML += `
    <div class="card m-4 bg-dark text-light" style="width: 18rem;">
      <img  src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.articles[i].title}</h5>
        <p class="card-text">${data.articles[i].description}</p>
        <p> (Author: ${data.articles[i].author}) </p>
        <a href="${data.articles[i].url}" class="btn btn-primary">See more</a>
              
      </div>
    </div>
    `
            }

        }
        )
        .catch(err => console.log(err))
}
// console.log(data)

