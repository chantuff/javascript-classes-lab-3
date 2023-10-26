// // making a variable called titleEl
// //  we are having that variable hold the information from the element that has the id title
// // document.getElementById is a method that looks at the html and returns an element with the matching id
// let titleEl = document.getElementById('title');
// // console.log to check 
// console.log(titleEl);
// console.dir(titleEl);



// // accessing an element without an id
// // document.querySelector(selector)
// // creating h1El variable
// // get an h1 element from our document and save it in that variable
// let h1El = document.querySelector("h1");
// console.log(h1El);
// // If the CSS selector provided to querySelector()matches multiple elements, it returns the "first" matching element.
// // If no matching node is found, nullis returned.

// // Practice 
// // add a <p> tag and use querySelector() to access it
// // let pEl = document.querySelector('p');
// // console.log(pEl);

// // use the class "cool" and querySelector
// let pEl = document.querySelector('.cool');
// console.log(pEl);


// pEl.textContent = "Comments for <strong>Today</strong>";
// pEl.innerHTML = "Comments for <strong>Today</strong>";

// // go to your hmtl file
// //  you try adding in an unordered list <ul>
// //  add some <li>
// // in the js file try:
// // let listEl = document.querySelector("li");
// // console.log(listEl);
// // what did you see?

// // Changing the style
// // let titleEl = document.getElementById('title');
// // the variable titleEl which links my js file to the html element with id of title
// // update the style to add a property of textAlign and center
// // this is similar to css 
// // text-align: center;
// titleEl.style.textAlign = 'center';
// titleEl.style.color = 'red';
// titleEl.style.backgroundColor = 'yellow';

// pEl.style.backgroundColor = 'blue';
// pEl.style.color =  'white';

// console.dir(pEl);
// console.log(pEl.getAttribute("class"));
// console.log(pEl.hasAttribute("id"));

// // Adding attributes to elements
// // Add an a tag to index.html
// // aTag is the js variable that I can reference here
// // 'a' is an <a> element that I am adding to my document (which is what is showing up in my browser)
// let aTag = document.createElement('a');
// // <a> usually have a textContent attribute
// //      and an href attribute
// //  with content of "Visit Google"
// aTag.textContent = "visit google";
// //  but without href
// // without an href, this won't go anywhere without an href
// //      <a href="someurl.com">text content</a>
// aTag.setAttribute('href', 'https://www.google.com')
// document.body.appendChild(aTag);


let aTag = document.createElement('a');
   aTag.textContent = "Visit Google";
   aTag.setAttribute('href', 'https://google.com')
   document.body.appendChild(aTag);

// add(className, className, ...)
// remove(className, className, ...)
// toggle(className)
// contains(className)
// replace(oldClass, newClass)

let commentsList = document.getElementsByClassName('comment')
console.log(commentsList)

// What method is the most efficient for selecting an element that has an id? getElementById
// If we want to insert content in an element that includes markup, what property would we assign to?
// If you had to pick only one method to select DOM elements with during your career as a developer, which one should you choose?
// Which property on DOM elements is used to set the CSS properties for that element?