$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/w01k3.json',
    dataType: 'jsonp',
    success: function(response) {
      // console.log(response.courses.completed)
      try {
        for (let c = 0; c < $(response.courses.completed).length; c++) {
          $('#badges').append('<div class="course"></div>')
        }
      } catch(e) {
        console.log(e)
      }
    }

  })

});
