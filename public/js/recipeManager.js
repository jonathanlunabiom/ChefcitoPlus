document.querySelector('#allrecipe').addEventListener('click', async (e)=>{
    e.preventDefault();
    
    if(e.target.innerHTML === '♥ Add favorites!'){
        recipe_name = e.target.getAttribute("id")

        console.log(recipe_name)

        const res = await fetch('/api/recipe/favorites',{
            method: "POST",
            body: JSON.stringify({ recipe_name }),
            headers: { "Content-Type": "application/json" },
        })

        res.ok ? alert('added to favorites!') : console.log("error")
    }else if(e.target.innerHTML === 'Delete recipe'){
        btnID = e.target.getAttribute("id")

        const res = await fetch(`/api/recipe/${btnID}`, {
            method: "DELETE",
          });
    
          if (res.ok) {
            document.location.reload();
          } else {
            alert("Failed to delete post");
          }
          res.ok ? alert("Post deleted") : alert("Failed to delete post");
    }
})