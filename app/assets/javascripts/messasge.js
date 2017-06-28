$(function(){
  function buildHTML(message){
    var messege_username = {<p class="tweet-space--username"> ${message.user_name} </p>};
    var message_body = { <a class="tweet-box--form"> ${message.body} </p> };
    var message_image = { <img class="tweet-space--image" src="${message.image}" </p> };

    var html = `
      message_username
      message_body
      message_image
      `
    return html;
  };

  function buildHTML(message){
    var bodyonly = `
      message_username
      message_body
      `
    return html;
  };

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href;
    var prepend = $('.message').prepend(html);
    var val = $('.tweet-box--send-botton').val('');

    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    });
    .done(function(data){
      $prepend
      $val
        if ( data.image == null ){
          var bodyonly = buildHTML(data);
          };
        else{
          var html = buildHTML(data);
          };
      });
    .fail(function(){
      alert('error');
    })
  })
});
