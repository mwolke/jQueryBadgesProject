$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/w01k3.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response.courses.completed);
      try {
        for (let c = 0; c < $(response.courses.completed).length; c++) {
          $('#badges').append('<div class="course">' +
            '<h3>' + response.courses.completed[c].title + '</h3>' +
              '<img src="' + response.courses.completed[c].badge + '"/>' +
              '<a class="btn btn-primary" target="_blank" href="' + response.courses.completed[c].url + '">See Course</a>' +
            '</div>');
        }
      } catch(e) {
        console.log(e)
      }
    }

  })

});
