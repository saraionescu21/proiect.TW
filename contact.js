function promptMe() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var review = document.getElementById("review").value;
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return; 
    }
  
    var nameRegex = /^[A-Z][a-z]*$/;
    if (!nameRegex.test(firstName)) {
      alert("Please enter a valid first name (start with a capital letter)");
      return; 
    }
    if (!nameRegex.test(lastName)) {
      alert("Please enter a valid last name (start with a capital letter)");
      return; 
    }
  
    var data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      review: review
    };
  
    var jsonData = JSON.stringify(data);
    localStorage.setItem("formData", jsonData);
  
    window.alert("Thank you for your message!");
  
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("review").value = "";
  }
  