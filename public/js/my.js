/* 控制导航栏样式*/
function activeLink() {
  var url = document.URL;
  var lasturl = url.slice(url.indexOf("/",7)+1, url.length-1);

  if(lasturl == "") {
    var node = document.getElementById("home");
    node.parentNode.childNodes.className="";
    node.className="active";
  } else {
    var node = document.getElementById(lasturl);
    node.parentNode.childNodes.className="";
    node.className="active";
  } 

}
activeLink();
