let buttons = document.querySelectorAll('button')

fetch(`http://api.mediastack.com/v1/news?access_key=f9508cac22af04882dfd25fe3a6bde9d&languages=en&limit=100&page=1`)
    .then(res => res.json())
    .then(news => {
        $('#main').empty()
        console.log(news)
        for (let i = 0; i < news.data.length; i++) {
            var div = document.createElement('div')
            let img = document.createElement('img')
            div.onclick = () => {
                window.location.href = news.data[i].url
            }
            if (news.data[i].image != null) {
                img.src = news.data[i].image
            } else {
                img.src = 'http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg'
            }
            img.onerror = () => {
                img.src = 'http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg'
            }
            $('#main').append(div)
            div.appendChild(img)
            div.append(document.createElement('h3').textContent = news.data[i].title)

        }
    })

for (item of buttons) {
    item.onclick = (e) => {
        console.log('clicked')
        if (e.target.innerHTML != 'Search') {
            fetch(`http://api.mediastack.com/v1/news?access_key=f9508cac22af04882dfd25fe3a6bde9d&keywords=${e.target.innerHTML}&languages=en&limit=100&page=1`)
                .then(res => res.json())
                .then(news => {
                    $('#main').empty()
                    console.log(news)
                    for (let i = 0; i < news.data.length; i++) {
                        var div = document.createElement('div')
                        let img = document.createElement('img')
                        if (news.data[i].image != null) {
                            img.src = news.data[i].image
                        } else {
                            img.src = 'http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg'
                        }
                        div.onclick = () => {
                            window.location.href = news.data[i].url
                        }
                        img.onerror = () => {
                            img.src = 'http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg'
                        }
                        $('#main').append(div)
                        div.appendChild(img)
                        div.append(document.createElement('h3').textContent = news.data[i].title)

                    }
                })
        } else {
            fetch(`http://api.mediastack.com/v1/news?access_key=f9508cac22af04882dfd25fe3a6bde9d&keywords=${$('#search-text').val()}&languages=en&limit=100`)
                .then(res => res.json())
                .then(news => {
                    $('#main').empty()
                    console.log(news)
                    for (let i = 0; i < news.data.length; i++) {
                        var div = document.createElement('div')
                        let img = document.createElement('img')
                        if (news.data[i].image != null) {
                            img.src = news.data[i].image
                        } else {
                            img.src = 'http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg'
                        }
                        div.onclick = () => {
                            window.location.href = news.data[i].url
                        }
                        img.onerror = () => {
                            img.src = 'http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg'
                        }
                        $('#main').append(div)
                        div.appendChild(img)
                        div.append(document.createElement('h3').textContent = news.data[i].title)

                    }
                })
        }
    }
}

$('#search-text').change(() => {
    fetch(`http://api.mediastack.com/v1/news?access_key=f9508cac22af04882dfd25fe3a6bde9d&keywords=${$('#search-text').val()}&languages=en&limit=100`)
        .then(res => res.json())
        .then(news => {
            $('#main').empty()
            console.log(news)
            for (let i = 0; i < news.data.length; i++) {
                var div = document.createElement('div')
                let img = document.createElement('img')
                if (news.data[i].image != null) {
                    img.src = news.data[i].image
                } else {
                    img.src = 'http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg'
                }
                div.onclick = () => {
                    window.location.href = news.data[i].url
                }
                img.onerror = () => {
                    img.src = 'http://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg'
                }
                $('#main').append(div)
                div.appendChild(img)
                div.append(document.createElement('h1').textContent = news.data[i].title)

            }
        })
})

// fetch('http://api.mediastack.com/v1/news?access_key=f9508cac22af04882dfd25fe3a6bde9d&countries=us')
//     .then(res => res.json())
//     .then(blob => {
//         console.log(blob)
//     })