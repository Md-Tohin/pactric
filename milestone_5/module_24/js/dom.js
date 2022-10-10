const sections =  document.querySelectorAll('section');
for(const section of sections){    
    section.style.backgroundColor='#eee';
    section.style.margin='7px 15px ';
    section.style.padding='7px 15px ';
    section.style.border='2px solid tomato';
    section.style.borderRadius='10px';
}
const name = document.getElementById('name');
name.style.color='green';

const lists = document.getElementsByClassName('text-red');
for(const list of lists){
    list.style.color='#d45105';
    list.style.listStyle='none';
}

const sectionContainer = document.getElementById('section-container');
sectionContainer.classList.add('bg-yellow')
// console.log(sectionContainer.childNodes);
// console.log(sectionContainer.childNodes[3].childNodes[3].nextSibling);
// console.log(sectionContainer.firstChild);


