document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    const search = document.getElementById("search");
    const r = document.getElementById("r");

    button.addEventListener("click", function() {
        const query = encodeURIComponent(search.value.trim());

        let url = "superheroes.php";
        if (query !== "") {
            url += "?query=" + query;
        }

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(data => {
                r.innerHTML = "";

                if (!data || data.length === 0) {
                    r.innerHTML = "<p>Superhero not found</p>";
                    return;
                }

                if (data.length === 1) {
                    const hero = data[0];
                    r.innerHTML = `
                        <h3>${hero.alias}</h3>
                        <h4>${hero.name}</h4>
                        <p>${hero.biography}</p>
                    `;
                } else {
                    let listHTML = "<ul>";
                    data.forEach(hero => {
                        listHTML += `<li>${hero.alias} (${hero.name})</li>`;
                    });
                    listHTML += "</ul>";
                    r.innerHTML = listHTML;
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
                r.innerHTML = "<p>There was an error retrieving superheroes.</p>";
            });
    });
});



