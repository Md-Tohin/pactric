function allPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => viewPost(data))
}

function viewPost(data){
    const postContainer = document.getElementById('post-container');
    for(const post of data){
       const newPost = document.createElement('div');
       newPost.classList.add('post');
       newPost.innerHTML = `
        <div>
            <h4>User - ${post['userId']}</h4>
            <h5>Post Id : ${post.id}</h5>
            <h5>Post Title : ${post['title']}</h5>
            <p>Post Description : ${post['body']}</p>
        </div>
       `
       postContainer.appendChild(newPost);

        console.log(post);
    }
}

allPost();