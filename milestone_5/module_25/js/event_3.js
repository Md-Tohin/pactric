
// function postButton(){
//     const inputTextArea = document.getElementById('inputTextArea');
//     const commentText = inputTextArea.value;

//     const displayComment = document.getElementById('displayComment');
//     const p = document.createElement('p');
//     p.innerText = commentText;    
//     displayComment.appendChild(p)

//     inputTextArea.value = '';
// }

document.getElementById('postButton').addEventListener('click', function(){
    const inputTextArea = document.getElementById('inputTextArea');
    const commentText = inputTextArea.value;

    const displayComment = document.getElementById('displayComment');
    const p = document.createElement('p');
    p.innerText = commentText;    
    displayComment.appendChild(p)

    inputTextArea.value = '';
})