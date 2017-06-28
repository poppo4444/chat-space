$(function(){
  function buildHTML(message){

    var html = `
      <p class="message--space--username"> ${message.user_name} </p>
      <a class="message--space--timesstamp"> ${message.created_at} </a>
      <p class="message--space--text"> ${message.body} </p>
      <img class="message--space--image" src="${message.image}"" </p>
      `
    return html;
  }

  function build2HTML(message){
    var html = `
      <p class="message--space--username"> ${message.user_name} </p>
      <a class="message--space--timesstamp"> ${message.created_at} </a>
      <p class="message--space--text"> ${message.body} </p>
      `
    return html;
  }

  function prepend_and_form_val(html){
          $('.message').prepend(html)
          $('.tweet-box--form').val('')
  }

  $('#new_message').on('submit', function(e){
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
          var html = buildHTML(data);
          prepend_and_form_val(html)
          }
        else {
          var html = build2HTML(data);
          prepend_and_form_val(html)
          }
      })
    .fail(function(){
      alert('error');
    })
  })
});
