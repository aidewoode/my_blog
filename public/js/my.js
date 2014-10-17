/* 控制导航栏样式*/
/* 还需改进 */
function activeLink() {
  var url = document.URL;
  var result = url.search(/about/);

  if(result == -1) {
    var node = document.getElementById("home");
    node.parentNode.childNodes.className="";
    node.className="active";
  } else {
    var node = document.getElementById("about");
    node.parentNode.childNodes.className="";
    node.className="active";
  } 

}
activeLink();
