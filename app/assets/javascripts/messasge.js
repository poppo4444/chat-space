$(function(){
  function haveimage(message){

    var html = `
      <p class="message--space--username"> ${message.user_name} </p>
      <span class="message--space--timesstamp"> ${message.created_at} </span>
      <p class="message--space--text"> ${message.body} </p>
      <img class="message--space--image" src="${message.image}"" </p>
      `
    return html;
  }

  function noimgae(message){
    var html = `
      <p class="message--space--username"> ${message.user_name} </p>
      <span class="message--space--timesstamp"> ${message.created_at} </span>
      <p class="message--space--text"> ${message.body} </p>
      `
    return html;
  }

  function prepend(html){
          $('.message').prepend(html)
  }

  function val(html){
          $('.tweet-box--form').val('')
  }

  $('.tweet--js').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href;
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })


    .done(function(data){
        if ( data.image == null ){
          var html = noimage(data);
          prepend(html)
          val(html)
          }
        else {
          var html = haveimage(data);
          prepend(html)
          val(html)
          }
      })
    .fail(function(){
      alert('error');
    })
  })
});
