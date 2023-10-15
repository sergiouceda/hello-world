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
  document.querySelectorAll("noscript").forEach(ns => {
    try{
      var imgsrc = ns.innerHTML.match(/img.*src=\"(.*?jpg)\"/)[1];
      console.log(imgsrc);
      var newimg = document.createElement('img');
      newimg.setAttribute('src',imgsrc);
      ns.parentNode.parentNode.parentNode.appendChild(newimg);
    }catch(e){}
  });
  
  try{
    document.querySelectorAll("div[class*='content-ad']").forEach(el => el.remove()) 
  }catch(e){}
  
}



