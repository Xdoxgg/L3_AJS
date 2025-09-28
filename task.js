
function callbackTest(response) {
    console.log(response);
}

function printPosts(posts) {

    posts = posts.sort(function(a, b) {return b.title.length - a.title.length});
    posts.forEach(post => {
        console.log(post);
    })
}

function printComments(comments, users) {
    comments.forEach(comment => {
        let userName = ""
        users.forEach(user => {
            if(user.id == comment.user_id) {
                comment.username = user.username;
            }
        })
    })
    comments = comments.sort(function(a, b) {a.username.localeCompare(b.username)});
    console.log(comments);
}

async function getPosts(callback = null) {
    let response = await fetch("https://my-json-server.typicode.com/Xdoxgg/testDbRepo/posts");
    let data = await response.json();
    if (callback) callback(data);
    return data;
}


async function getComments(callback  = null) {
    let response = await fetch("https://my-json-server.typicode.com/Xdoxgg/testDbRepo/comments");
    let data = await response.json();
    let users = await getUsers();
    if (callback) callback(data, users);
    return data;

}

async function getUsers(callback = null) {
    let response = await fetch("https://my-json-server.typicode.com/Xdoxgg/testDbRepo/users");
    let data = await response.json();
    return data;
    if (callback) callback(data);
    return data;

}



// await getPosts(printPosts);
await getComments(printComments);
// await getUsers(callbackTest);






