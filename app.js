// Function to show login form
function showLogin() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-btn').classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
  }
  
  // Function to show signup form
  function showSignup() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-btn').classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
  }

function auth(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "210@ycce.com" && password === "ycce") {
        window.location.replace("./index1.html");
       //  alert("You Are a ADMIN");

    } else {
        alert("Invalid information");   
        return;
    }

}

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  