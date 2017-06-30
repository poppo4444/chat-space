$(function(){

var user_serch_list = $("#user-search-result");

function appendUser(user){
  var html = `<div class="chat-group-user clearfix">
              <div class="chat-group-form__field--left">
              <div class="chat-group-form__label"></div>
              </div>
              <div class="chat-group-form__field--right">
              <p class="chat-group-user__name">${ user.name }</p>
              <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id}" data-user-name="${ user.name }">追加</a>
              </div>
              </div> `;
    user_serch_list.append(html);
}

function appendNoUser(user){
  var html = `<div class="chat-group-user clearfix">
              <div class="chat-group-form__field--left"></div>
              <div class="chat-group-form__field--right">
                "${user}"
              </div>
              </div> `;
    user_serch_list.append(html);
}


  $(" .chat-group-form__search.clearfix").on('keyup', function(){
    var input = $(".chat-group-form__input.js").val();
    $.ajax({
      url: "/users",
      type: "GET",
      data: {keyword: input},
      dataType: 'json'
    })

    .done(function(users){
      $("#user-search-result").empty();
      if(users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else{
          appendNoUser("一致するユーザーはいません");
      }
    })
    .fail(function(){
      alert('error');
    })
  })
});