let images =['./images/1.jpeg','./images/2.jpeg','./images/3.jpeg','./images/4.jpeg','./images/5.jpeg',]
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
