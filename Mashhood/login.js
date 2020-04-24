// coding for login page
    function check(form)
    {
      if(form.userid.value == "admin" && form.password.value == "admin")
      {
        // window.open('homeabout.html' , '_self')
        window.location.replace('homeabout.html','_self')
      }
      else
      {
        alert("Login ID or Password is incorrect")
      }
    }