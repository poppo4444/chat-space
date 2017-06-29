$(function(){
  function haveimage(message){
    var html = `
      <p class="message--space--username"> ${message.user_name} </p>
      <span class="message--space--timesstamp"> ${message.created_at} </span>
      <p class="message--space--text"> ${message.body} </p>
      <img class="message--space--image" src="${message.image.url}"" </p>
      `;
    return html;
  }
  function noimage(message){
    var html = `
      <p class="message--space--username"> ${message.user_name} </p>
      <span class="message--space--timesstamp"> ${message.created_at} </span>
      <p class="message--space--text"> ${message.body} </p>
      `;
    return html;
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
      console.log(data)
      if ( data.image.url === null ){
        var html = noimage(data);
        $('.message').prepend(html);
        $('.tweet-box--form').val('');
      } else {
        var html = haveimage(data);
        $('.message').prepend(html);
        $('.tweet-box--form').val('');
      }
    })
    .fail(function(){
      alert('error');
    })
  })
});
