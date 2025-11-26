// // Promise

// // fetch User (async)  Callback function
// function fetchUser(userId, callback){
//     setTimeout(() => {
//         callback(null, {id: userId, name: 'Nancy'})
//     }, 500);
// }

// // Fetch Posts (async)
// function fetchPost(userId, callback){
//     setTimeout(() => {
//         callback(null, ['Post 1', 'Post 2'])
//     }, 500);
// }


// // Nested Call (Callback Hell)
// fetchUser(101, (err, user) => {
//     if(err) return console.error(err);

//     // Nested operation 1
//     fetchPost(user.id, (err,post) => {
//         if(err) return console.error(err);

//         // nested operation 2
//         console.log(`User ${user.name} has posts: ${post.join(', ')}`);
//     })
// })



// async/await

// Promise Function
function fetchUser(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: userId, name:'Nancy'});
        }, 500);
    });
}

function fetchPost(userId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2']);
        }, 500);
    });
}
async function processData(userId){
    try{
        // Use await to PAUSE ansd wait for the user data Promise to fulfill.
        // It looks synchronous and directly stored in user variable
        const user = await fetchUser(userId);
        const posts = await fetchPost(user.id);

        console.log(`User ${user.name} has posts: ${posts.join(', ')}`);
    }catch (error) {
        // Handle error for any await calls using single try..catch block
        console.error("An error occurred during processing:",error);
    }
}
// call the async function
processData(101);