let images =['/home/j073q846/EECS448/Lab3/Exercise2/images/1.jpeg','/home/j073q846/EECS448/Lab3/Exercise2/images/2.jpeg','/home/j073q846/EECS448/Lab3/Exercise2/images/3.jpeg','/home/j073q846/EECS448/Lab3/Exercise2/images/4.jpeg','/home/j073q846/EECS448/Lab3/Exercise2/images/5.jpeg',]
let index=0;


function Previous()
{
  if(index==0)
  {
    index=4
    document.getElementById('myImgId').src = images[index];
  }
  else {
    index=index-1;
    document.getElementById('myImgId').src = images[index];
  }
}

function Next()
{
  if(index==4)
  {
    index=0
    document.getElementById('myImgId').src = images[index];
  }
  else {
    index=index+1;
    document.getElementById('myImgId').src = images[index];
  }
}
