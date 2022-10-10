const sections = document.getElementsByClassName('section');
for(const section of sections){
    section.style.backgroundColor = '#eee';
    section.style.border = '2px solid tomato';
    section.style.margin = '7px 20px';
    section.style.borderRadius = '10px';
}

const section_2 = document.getElementById('section-2');
section_2.classList.add('bg-green-200');

const section_1_ul = document.getElementById('section-1-ul');
const li1 = document.createElement('li');
li1.innerText = 'Item insert of Js';
section_1_ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Item second time insert of JS';
section_1_ul.appendChild(li2);

const main_container = document.getElementById('main-container');
const newSection_1 = document.createElement('section');

const newTitle_1 = document.createElement('h1');
newTitle_1.innerText = 'This is Title insert of Js';
newSection_1.appendChild(newTitle_1);

const newSubTitle_1 = document.createElement('p');
newSubTitle_1.innerText = 'This is Subtilte insert of js';
newSection_1.appendChild(newSubTitle_1);

const newSection_1_ul = document.createElement('ul');
const section_1_li_1 = document.createElement('li');
section_1_li_1.innerText = 'List Item One';
newSection_1_ul.appendChild(section_1_li_1);

const section_1_li_2 = document.createElement('li');
section_1_li_2.innerText = 'List Item Two';
newSection_1_ul.appendChild(section_1_li_2);

const section_1_li_3 = document.createElement('li');
section_1_li_3.innerText = 'List Item Three';
newSection_1_ul.appendChild(section_1_li_3);

const section_1_li_4 = document.createElement('li');
section_1_li_4.innerText = 'List Item Fout';
newSection_1_ul.appendChild(section_1_li_4);

newSection_1.appendChild(newSection_1_ul);
newSection_1.classList.add('bg-green-200');
newSection_1.setAttribute('style', 'color: red; border: 2px solid tomato; border-radius: 10px; margin: 7px 20px')
// newSection_1.setAttribute('style', 'border= 2px solid tomato; border-radius=10px; ');

main_container.appendChild(newSection_1);

const newSection_2 = document.createElement('section');
newSection_2.innerHTML = `
    <section>
        <h1>This is Section 2 Title insert of Javascript</h1>
        <p>This is Section 2 Sub Title insert of Javascript</p>
        <ul>
            <li>Item One Insert</li>
            <li>Item Two Insert</li>
            <li>Item Three Insert</li>
            <li>Item Four Insert</li>
        </ul>
    </section>
`
main_container.appendChild(newSection_2);

