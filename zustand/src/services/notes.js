const baseUrl = 'http://localhost:3001/notes'


const getAll = async () => { //create a variable getAll
    const response = await fetch(baseUrl) // here is using the fetch method 
    console.log(response)

    if(!response.ok) {
        throw new Error('Failed to fetch the data') // here is using the conditon statement 
    }

    const data = await response.json() // here is create a new variable and using json() mehod
    console.log(data)
    return data
}

// here is using the post method 
const createNew = async (content) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({ content, important: false}),
    }

    const response = await fetch(baseUrl, options)

    if (!response.ok) {
        throw new Error('Faild to create note')
    }

    return await response.json()
}

export default { getAll, createNew } // it is important to import the function