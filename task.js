function callbackTest(response) {
    console.log(response);
}

function printPosts(posts) {

    posts = posts.sort(function (a, b) {
        return b.title.length - a.title.length
    });
    posts.forEach(post => {
        console.log(post);
    })
}

function printTodos(todos) {
    let newTodos = []
    todos.forEach(todo => {
        if (todo.completed == 'falsy') {
            newTodos.push(todo);
        }
    })
    newTodos.forEach(newTodo => {
        console.log(newTodo);
    })
}

function printComments(comments, users) {
    comments.forEach(comment => {
        let userName = ""
        users.forEach(user => {
            if (user.id == comment.user_id) {
                comment.username = user.username;
            }
        })
    })
    comments = comments.sort(function (a, b) {
        a.username.localeCompare(b.username)
    });
    console.log(comments);
}

async function getPosts(callback = null) {
    let response = await fetch("https://my-json-server.typicode.com/Xdoxgg/testDbRepo/posts");
    let data = await response.json();
    if (callback) callback(data);// мб тут стоило возвращать callback, но я хз
    return data;
}


async function getComments(callback = null) {
    let response = await fetch("https://my-json-server.typicode.com/Xdoxgg/testDbRepo/comments");
    let data = await response.json();
    let users = await getUsers();
    if (callback) callback(data, users);
    return data;

}

async function getUsers(callback = null) {
    let response = await fetch("https://my-json-server.typicode.com/Xdoxgg/testDbRepo/users");
    let data = await response.json();
    if (callback) callback(data);
    return data;

}


async function updateUsers(callback = null) {
    let users = null;
    try {
        users = await getUsers();
        users.forEach(user => {
            delete user.empty;
        })
    } catch (err) {
        console.log(err);
    }
    return users;
    // let response = fetch("https://my-json-server.typicode.com/Xdoxgg/testDbRepo/users", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(users)
    // }).then(response => {
    //     if (!response.ok) {
    //         throw new Error('Ошибка сети: ' + response.status);
    //     }
    //     return response.json();
    // })
    //     .then(data => {
    //         console.log('Ответ сервера:', data);
    //     })
    //     .catch(error => {
    //         console.error('Ошибка запроса:', error);
    //     });
}

async function getTodos(callback = null) {
    let response = await fetch("https://my-json-server.typicode.com/Xdoxgg/testDbRepo/todos");
    let data = await response.json();
    if (callback) callback(data);
    return data;
}

// await getPosts(printPosts); // 1
// await getComments(printComments); // 2
// callbackTest(await updateUsers(callbackTest)) //3
await getTodos(printTodos);



