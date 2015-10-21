module.exports = function(vue) {
  var moment = require('moment');
  vue.filter('formattedDate', function(value){
    var date = new Date(value);
    return moment(date).format('ll');
  })
}
