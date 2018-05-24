let newsArticles = news.articles // need to use'[]' to open articles and access key values

let newsContainer = document.getElementById("newsContainer")


// using for each loop
// to get the source it would be news.source.(id or name)
newsArticles.forEach(function(news){
    let newsItem = 
    `
    <div class="newsDiv">
    <img src=${news.urlToImage}> 
    </div>
    <div>
    <h1>${news.title}</h1> 
    <h4>By: ${news.author}</h4>
    <h6>${news.publishedAt}</h6>
    <p>${news.description}</p>
    <a href=${news.url}>Click to read more!</a>
    </div>
    `

    newsContainer.innerHTML += newsItem
})
