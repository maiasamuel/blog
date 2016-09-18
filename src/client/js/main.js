(function () {

  console.log('sanity check!');

  $('button#delete').on('click', function() {

    var id = $(this).data('id');

    console.log(id);

    $.ajax({
      url: `/${id}`,
      method: 'DELETE'
    }).done(function() {
      window.location.replace('/');
    }).fail(function(error) {
      console.log(error);
    });
  });

  $('button#update').on('click', function(event) {

    event.preventDefault();

    var id = $(this).data('id');
    var title = $('#inputTitle').val();
    var name = $('#inputName').val();
    var content = $('#inputContent').val();
    var url = $('#inputURL').val();

    var renderObject = {
      id: id,
      title: title,
      name: name,
      content: content,
      url: url
    };

    $.ajax({
      url:`/update/${id}`,
      method: 'PUT',
      data: renderObject
    }).done(function() {
      window.location.replace('/');
    }).fail(function(error) {
      console.log(error);
    });
  });

})();
