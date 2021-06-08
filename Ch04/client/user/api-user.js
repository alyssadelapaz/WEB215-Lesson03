// The create method takes user data from the view component. Then, it uses fecth to make a POST call to create a new user. Finally, the response from the server is returned as a promise (Page 114)
const create = async (user) => {
    try {
        let response = await fetch('/api/users/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

// The list method uses fetch to make a GET call to retrieve all users in the data base, and then return the response from the server as a promise to the component (Page 115)
const list = async (signal) => {
    try {
        let response = await fetch('/api/users/', {
        method: 'GET',
        signal: signal,
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}

// The read method uses fetch to make a GET call to retrieve a specific user by ID. The requesting component must also provide valid credentials, a valid JWT received after a successful sign-in (Page 115)
const read = async (params, credentials, signal) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
        method: 'GET',
        signal: signal,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}

// The update method takes changed user data from the view component for a specific user, then use fetch to make a PUT call to update the existing user in the backend (Page 116)
const update = async (params, credentials, user) => {
    try {
      let response = await fetch('/api/users/' + params.userId, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(user)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

// The remove method allows the view component to delete a specific user from the database and use fetch to make a DELET call (Page 117)
const remove = async (params, credentials) => {
    try {
        let response = await fetch('/api/users/' + params.userId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        }
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}

export { create, list, read, update, remove }