document.querySelector("#btnlogin").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Complete all the datafields");
  }
});
