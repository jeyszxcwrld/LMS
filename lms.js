const users = [
    { username: "arisse", password: "arisse123", role: "student"},
    { username: "renz", password: "renz123", role: "instructor"},
    { username: "hans", password: "hans123", role: "admin"},
  ];
  
  function login(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
  
      if (user.username === "arisse") {
        window.location.href = "arisse.html";
      }else if (user.username === "renz") {
        window.location.href = "renz.html";
      } else if (user.username === "hans") {
        window.location.href = "hans.html";
      }
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  }