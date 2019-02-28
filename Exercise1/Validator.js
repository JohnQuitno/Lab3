function Validate()
{
  if(document.getElementById("first").value.length <= 8)
  {
    alert("Please enter at least 8 characters");
    return;
  }
  if(document.getElementById("first").value==document.getElementById("second").value)
  {
    alert("Passwords Match");
  }
  else
  {
    alert("Passwords Don't Match");
  }
}
