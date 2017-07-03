$(function(){
  var add_message = $("")
  function haveimage(message){
    var html = `
      <div class="message--space" data-id="${message.id}">
        <p class="message--space--username"> ${message.user_name} </p>
        <span class="message--space--timesstamp"> ${message.created_at} </span>
        <p class="message--space--text"> ${message.body} </p>
        <img class="message--space--image" src="${message.image.url}">
      </div>`;
    return html;
  }
  function noimage(message){
    var html = `
      <div class="message--space" data-id="${message.id}">
        <p class="message--space--username"> ${message.user_name} </p>
        <span class="message--space--timesstamp"> ${message.created_at} </span>
        <p class="message--space--text"> ${message.body} </p>
      </div>`;
    return html;
  }
  function insert_message(message){
     var insertImage = '';
    if (message.image.url === null) { insertImage = ''
    }else{
    insertImage = `<img class:"message-space--image" src="${message.image.url}">`;
    }
    var html =`
      <div class="message--space" data-id="${message.id}">
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
    var last_id = {last_id: $(".message--space").first().data("id")}
    var group_id = $(".getid").data("group-id");
    console.log(last_id)
    if(window.location.href.match(/\/groups\/\d+\/messages/)){
      $.ajax({
        url: "/groups/" + group_id + "/messages",
        type: "get",
        data: last_id,
        dataType: 'json'
      })
      .done(function(json){
        var insertHTML = '';
        json.forEach(function(message){
          insertHTML = insert_message(message);
          $('.message').prepend(insertHTML);
        });
      })
      .fail(function(){
        alert("自動更新に失敗しました");
      });
    }
  } ,10000);

});
