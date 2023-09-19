document.querySelector("#btnsignup").addEventListener("click", async (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const last_name = document.querySelector("#lastname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  if (name && last_name && email && password) {
    const response = await fetch(`/api/user`, {
      method: "POST",
      body: JSON.stringify({ name, last_name, email, password }),
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
