const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//    .then(data => console.log(data))
//    .catch(err => console.error(err));

// User Data
const data = {
    name : 'John',
    username: 'johndoe',
    email: 'johndoe@typicode.com'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.error(err));
