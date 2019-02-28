function textColor()
{
  console.log(document.getElementById("r").value);
  console.log(document.getElementById("g").value);
  console.log(document.getElementById("b").value);

  document.getElementById("dummytext").style.backgroundColor = 'rgb(' + document.getElementById("r").value + ',' + document.getElementById("g").value + ',' + document.getElementById("b").value + ')'
}
function border()
{
  document.getElementById("dummytext").style.borderColor = 'rgb(' + document.getElementById("rb").value + ',' + document.getElementById("gb").value + ',' + document.getElementById("bb").value + ')'
  document.getElementById("dummytext").style.borderWidth = document.getElementById("width").value + 'px'
  console.log(document.getElementById("width").value)
}
