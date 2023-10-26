const btn = document.querySelector('button');

btn.addEventListener('click', function(evt) {
   console.log(evt); 
   const li = document.createElement('li');
   const inp = document.querySelector('input');
   console.log(inp.value)
   li.textContent = inp.value;
   document.querySelector('ul').appendChild(li);
})

document.querySelector('ul').addEventListener('click', handleClick);

function handleClick(evt) {
    console.log(evt);
    console.log(evt.target);
    let evtColor = evt.target.style.color;
    if (evtColor == 'red') {
        evt.target.style.color = 'black'
    }else {
    evt.target.style.color = 'red';
}
}
