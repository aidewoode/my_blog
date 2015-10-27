module.exports = function(type, id, action) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      action(request.responseText);
    }
  }

  request.open('GET', type + '/' + id + '.md', true);
  request.send();
};
