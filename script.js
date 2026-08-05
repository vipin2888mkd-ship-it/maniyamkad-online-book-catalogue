fetch('data/books.json').then(r=>r.json()).then(data=>{
const out=document.getElementById('books'),q=document.getElementById('search');
function draw(list){out.innerHTML=list.map(b=>`<div class="card"><b>${b.code}</b><br>${b.title}<br><small>${b.author}</small></div>`).join('');}
draw(data);
q.oninput=()=>{const k=q.value.toLowerCase();draw(data.filter(b=>(b.code+b.title+b.author).toLowerCase().includes(k)));};
});