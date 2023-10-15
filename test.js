try {
  var araHidden = document.querySelector('div.ara-body div[style="display:none"]');
  araHidden.style.display = 'unset';
  araHidden.setAttribute("class","ara-body");
}catch(e){}

try {
  document.querySelectorAll("*[class*='gsc-adBlock']").forEach(e => e.remove());
}catch(e){}

/*
if(window.location.host == "cse.google.com"){
       
        function removeTarget(){
                document.querySelectorAll('a.gs-title').forEach(a => a.setAttribute('target',"_self"));
        }
       
        setInterval(removeTarget, 500);        

}
*/
if(window.location.host == "www.wired.com"){ 
  try{
    document.querySelector(".paywall").forEach(el => el.classList.remove('paywall'))
  }catch(e){};

  document.querySelectorAll("figure").forEach(fig => {
      try{
        var artImg = document.createElement('img');
        imgSrc = fig.querySelector('noscript').innerHTML.match(/src="(.*?)"/)[1];
        artImg.setAttribute('src', imgSrc);
        fig.replaceWith(artImg);
      }catch(e){}; 
  })
  
}



