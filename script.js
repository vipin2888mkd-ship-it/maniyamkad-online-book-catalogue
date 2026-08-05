fetch("books.json")
  .then(response => response.json())
  .then(books => {

    const booksDiv = document.getElementById("books");
    const search = document.getElementById("search");

    function showBooks(list) {
      booksDiv.innerHTML = "";

      if (list.length === 0) {
        booksDiv.innerHTML = "<p>പുസ്തകങ്ങൾ ലഭ്യമല്ല.</p>";
        return;
      }

      list.forEach(book => {
        booksDiv.innerHTML += `
          <div style="background:#ffffff;color:#000;padding:15px;margin:10px 0;border-radius:10px;">
            <h3>${book.title}</h3>
            <p><b>Code:</b> ${book.code}</p>
            <p><b>Author:</b> ${book.author}</p>
          </div>
        `;
      });
    }

    showBooks(books);

    search.addEventListener("input", function () {
      const text = this.value.toLowerCase();

      const result = books.filter(book =>
        (book.title || "").toLowerCase().includes(text) ||
        (book.author || "").toLowerCase().includes(text) ||
        (book.code || "").toLowerCase().includes(text)
      );

      showBooks(result);
    });

  })
  .catch(error => {
    document.getElementById("books").innerHTML =
      "<p>books.json ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല.</p>";
    console.log(error);
  });
