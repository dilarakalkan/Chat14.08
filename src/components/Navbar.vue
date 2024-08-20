<template>
    <nav  class="navbar">
      <ul class="navbar-menu">
        <li><a href="#">About</a></li>
      </ul>
      <div class="navbar-buttons">
        <button class="login-btn">Login</button>
        <button class="signup-btn">Sign-up</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: white;
    border-bottom: 1px solid #e5e5e5;
  }
  
  .navbar-menu {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .navbar-menu li {
    margin-right: 20px;
  }
  
  .navbar-menu li a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
  
  .navbar-menu li a:hover {
    color: #0056b3;
  }
  
  .navbar-buttons {
    display: flex;
    align-items: center;
  }
  
  .login-btn,
  .signup-btn {
    border: 1px solid #007bff;
    background-color: transparent;
    color: #007bff;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .signup-btn {
    background-color: #007bff;
    color: white;
  }
  
  .login-btn:hover {
    background-color: #e6f2ff;
  }
  
  .signup-btn:hover {
    background-color: #0056b3;
  }
  </style>
  