
fetch("books.json")
  .then(r => {
    if (!r.ok) throw new Error("Cannot load books.json");
    return r.json();
  })
  .then(data => {
    const books = Array.isArray(data) ? data : [];
    const list = document.getElementById("books");
    const search = document.getElementById("search");

    function render(items){
      if(items.length===0){
        list.innerHTML="<p>പുസ്തകങ്ങൾ ലഭ്യമല്ല.</p>";
        return;
      }
      list.innerHTML = items.map(b=>`
        <div style="background:#fff;color:#000;padding:12px;margin:10px 0;border-radius:8px">
          <h3>${b.title || ""}</h3>
          <div><b>Code:</b> ${b.code || ""}</div>
          <div><b>Author:</b> ${b.author || ""}</div>
        </div>
      `).join("");
    }

    render(books);

    search.addEventListener("input",()=>{
      const q = search.value.toLowerCase();
      render(books.filter(b =>
        (b.title||"").toLowerCase().includes(q) ||
        (b.author||"").toLowerCase().includes(q) ||
        (b.code||"").toLowerCase().includes(q)
      ));
    });
  })
  .catch(err=>{
    document.getElementById("books").innerHTML =
      "<p>books.json ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല.</p>";
    console.error(err);
  });
