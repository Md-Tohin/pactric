var description = 'I am Md Tohin. I am a full stack web Developer. My skills is HTML, CSS, Bootstrap, Javascript and more and more.'

//  topic no 01 :-  Srting lenght
console.log(description.length);

//  topic no 02 :-  Show Any index position value 
console.log(description[5]);

//  topic no 03 :- show first element of a string
console.log(description.charAt());

//  topic no 04 :- show output between  -- to -- 
console.log(description.substring(0, 14));
console.log(description.slice(0,10));

//  topic no 05 :- convert lowercase
console.log(description.toLowerCase()); 

//  topic no 06 :- convert Uppercase
console.log(description.toUpperCase());

//  topic no 07 :- find string 
console.log(description.includes('Tohin'));

//  topic on 08 :- find string position 
console.log(description.indexOf('hin'));

//  topic no 09 :- chedk first word and return True or False 
console.log(description.startsWith('I am'));

//  topic no 10 :- chedk Last word and return True or False 
console.log(description.endsWith('more and more.'));

//  topin no 11 :- concat to string 
var a = 'He is';
var b = 'Shamim';
console.log(a.concat(' Mr.'), b);

//  topic no 12 :- remove white space 
console.log('    Rucon     '.trim());

//  topic no 12 :- devided by white space in string  
console.log(description.split(' '));
console.log(b.split(''));

//  topic no 12 :- devided by white space in string  
var lines = [
    'I am Md Tohin',
    'I am a full stack web Developer',
    'My skills is HTML, CSS, Bootstrap, Javascript and more and more'
]
console.log(lines.join('. '));



