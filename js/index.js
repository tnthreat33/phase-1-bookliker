document.addEventListener("DOMContentLoaded", function() {
  
    let ul = document.querySelector("#list")
    let div = document.querySelector("#show-panel")

    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(books=>{
        books.forEach(book => {
            let li = document.createElement("li")
            li.innerText = book.title
            ul.appendChild(li)
            li.addEventListener("click", ()=>{
                let p = document.createElement("p")
                div.append(p)
                p.innerText = `Book Title: ${book.title}
               Book Description: ${book.description}
                Users Who Like This Book: ${book.users[0].username}`
                let img = document.createElement("img")
                div.append(img)
                img.src = book.img_url
            })
        })
    }
    
        )
}



);
