try {
  var araHidden = document.querySelector('div.ara-body div[style="display:none"]');
  araHidden.style.display = 'unset';
  araHidden.setAttribute("class","ara-body");
}catch(e){}

try {
  document.querySelector("div.gsc-adBlock").remove();
}catch(e){}

try {
  document.querySelectorAll("*[class*='ezoic']").forEach(e => e.remove());
  document.querySelector("body").style.fontSize ="16px";
}catch(e){}
