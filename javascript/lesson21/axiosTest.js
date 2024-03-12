const axios = require('axios')

async function fetchPosts() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // const data = await response.json()
    // console.log(data)

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log(response.data)
}

fetchPosts()    