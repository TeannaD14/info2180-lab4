document.getElementById("button").addEventListener("click", function() 
{
    fetch("superheroes.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", 
error);
        });
});

