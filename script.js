fetch('data/books.json').then(r=>r.json()).then(data=>{
const box=document.getElementById('books');
const search=document.getElementById('search');
function render(list){box.innerHTML=list.map(b=>`<div class='card'><b>${b.code}</b><br>${b.title}<br>${b.author}</div>`).join('');}
render(data);
search.oninput=()=>render(data.filter(b=>JSON.stringify(b).toLowerCase().includes(search.value.toLowerCase())));
});