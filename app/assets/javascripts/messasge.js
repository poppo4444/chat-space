$(function(){
  function buildHTML(message){
    var html = `
      <p class="tweet-space--username"> ${message.user_name} </p>
      <a class="tweet-space--text"> ${message.body} </p>
      <img class="tweet-space--image" src="${message.image}"" </p>
      `
    return html;
  }

$(function(){
function buildHTML(message){
  var bodyonly = `
    <p class="tweet-space--username"> ${message.user_name} </p>
    <a class="tweet-space--text"> ${message.body} </p>
    `
  return html;
}
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
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
        var bodyonly = buildHTML(data);
          $('.message').prepend(html)
          $('.tweet-box--send-botton').val('')
        }
      else{
      var html = buildHTML(data);
        $('.message').prepend(html)
        $('.tweet-box--send-botton').val('')
        }
    })
    .fail(function(){
      alert('error');
    })
  })
});
