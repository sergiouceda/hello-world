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
  document.querySelectorAll("figure").forEach(fig => {
    try{
      var artImg = document.createElement('img');
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = fig.querySelector('noscript').innerHTML;
      artImg.setAttribute('src', tempDiv.querySelector('img').getAttribute('src'));
      fig.replaceWith(artImg);
    }catch(e){};
  })  
}
  
}



