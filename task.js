const post = {
    id: 1,
    title: "Hello World"
}
let arr = []
arr.push(post)
await patchPosts(arr)
//posts
async function patchPosts(params){
    let t = await fetch("https://my-json-server.typicode.com/typicode/demo/posts/:id", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });

}

function printPosts(posts) {
    posts = posts.sort(function(a, b) {a.title.length - b.title.length});
    posts.forEach(post => {
        console.log(post);
    })
}

async function getPosts(callback) {
    let response = await fetch("https://my-json-server.typicode.com/typicode/demo/posts");
    let data = await response.json();
    callback(data);
}
await getPosts(printPosts);




function callbackDefault(response) {
    console.log(response);
}





