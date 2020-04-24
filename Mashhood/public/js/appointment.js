function check(form)
{
  if((form.name.value == "UserName" && form.dob.value == "") ||(form.streetno.value == "" && form.city.value == "Thunder Bay")||(form.speciality.value == "Doctor" && form.preferredtime.value == ""))
  {
    window.open('appointsucces.html' , '_self')
  }

  else
  {
    alert("Please Fill the form to take The Doctors appointment")
  }
}