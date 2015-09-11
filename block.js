console.log(window.location.toString())
if (window.location.toString().indexOf('http://m.ltn.com.tw/news/') >= 0) {
  //Not sure if it works
  var ads = document.getElementsByClassName('splash');
  ads[0].style.display = "none";
}

console.log(window.location.toString().indexOf('http://www.ettoday.net/'))
if (window.location.toString().indexOf('http://www.ettoday.net/') >= 0) {
  console.log("I'm in")
  setInterval(function(){
    var closeBtn = document.getElementsByClassName('btn_close');
    console.log(closeBtn)
    var ad = closeBtn[0].parentNode;
    ad.parentNode.removeChild(ad);
  }, 1000)
}

if (window.location.toString().indexOf('https://www.ptt.cc/ask/over18') >= 0) {
  console.log('PTT ask over18');
  window.onload = function () {
    var yesBtn = document.querySelector(".btn-big[name='yes']");
    console.log(yesBtn);
    yesBtn.click();
  }
}
