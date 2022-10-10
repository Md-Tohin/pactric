// document.getElementById('btn-more').addEventListener('click', function(){
//     console.log('Event Triggered');
// })
// document.getElementById('btn-more').addEventListener('mouseenter', function(){
//     console.log('Event Triggered');
// })
// document.getElementById('btn-more').addEventListener('mousemove', function(){
//     console.log('Event Triggered');
// })
// document.getElementById('btn-more').addEventListener('mousedown', function(){
//     console.log('Event Triggered');
// })
// document.getElementById('btn-more').addEventListener('mouseleave', function(){
//     console.log('Event Triggered');
// })
// document.getElementById('btn-more').addEventListener('mouseover', function(){
//     console.log('Event Triggered');
// })
// document.getElementById('inputField').addEventListener('focus', function(){
//     inputField.style.border='2px solid red';
// })
// document.getElementById('inputField').addEventListener('blur', function(){
//     inputField.style.border='2px solid red';
// })
document.getElementById('inputField').addEventListener('keyup', function(event){
    // console.log(event.key);
    // console.log(event.target);
    const keyValues = document.getElementById('inputField').value;
    console.log(keyValues);
})