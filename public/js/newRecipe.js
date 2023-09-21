document.querySelector("#btnSaveRecipe").addEventListener("click", async (e) => {
    e.preventDefault();
    const recipe_name = document.querySelector("#recipe_name").value.trim();
    const ingredients = document.querySelector("#ingredients").value.trim();
    const recipe = document.querySelector("#recipe").value.trim();

    if (recipe_name && ingredients && recipe) {
        const response = await fetch(`/api/recipe`, {
            method: "POST",
            body: JSON.stringify({ recipe_name, ingredients, recipe }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    } else {
        alert("Complete all the datafields");
    }
});