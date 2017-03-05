$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/w01k3.json',
    dataType: 'jsonp',
    success: function(response) {
      // console.log(response.courses.completed)
    }

  })

});
