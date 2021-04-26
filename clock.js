let digitalhour=document.getElementById("hours");
let digitalminute=document.getElementById("minutes");
let digitalsecond=document.getElementById("seconds");
let digitalampm=document.getElementById("ampm");

function clock()
{

  let currenttime= new Date();
  let nowhour=currenttime.getHours();
  let nowminute=currenttime.getMinutes();
  let nowsecond=currenttime.getSeconds();


  nowhour=nowhour<10?"0"+nowhour:nowhour;
  nowminute=nowminute<10?"0"+nowminute:nowminute;
  nowsecond=nowsecond<10?"0"+nowsecond:nowsecond;

  nowhour=nowhour===12?(nowhour=12):nowhour;

  if(nowhour>12)
  {
digitalampm=digitalampm.innerText="PM";
nowhour=nowhour-12;

  }

digitalhour.innerText=nowhour;
digitalminute.innerText=nowminute;
digitalsecond.innerText=nowsecond;





}




setInterval(clock,1000);
clock();