$(function(){
  var add_message = $("")
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
  function insert_message(message){
     var insertImage = '';
     console.log(message.image.url)
    if (message.image.url === null) { insertImage = ''
    }else{
    insertImage = `<img class:"message-space--image" src="${message.image.url}">`;
    }
    var html =`<div class="message--space">
                 <p class="message--space--username"> ${message.user_name}</p>
                 <span class="message--space--timesstamp"> ${message.created_at}</span>
                 <p class="message--space--text"> ${message.body}</p>
                 ${insertImage}
               </div>`;
    return html
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

  setInterval(function(){
    var href = window.location.href;
    $.ajax({
      url: href,
      type: "get",
      dataType: 'json'
    })
    .done(function(json){
      var id = $("div").attr("data-message-id")
      var insertHTML = '';
      json.forEach(function(message){
        if(message.id > id)
          insertHTML = insert_message(message);
          $('.message--space').prepend(insertHTML);
      });
    })
    .fail(function(){
      alert("自動更新に失敗しました");
    });
  },10000);

});
