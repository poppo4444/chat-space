$(function(){

var user_serch_list = $("#user-search-result");

function incremental_serch(users){
  if (users !== 0){
    console.log(users)
    var html = `<div class="chat-group-user clearfix">
                  <div class="chat-group-form__field--left">
                    <div class="chat-group-form__label"></div>
                  </div>
                  <div class="chat-group-form__field--right">
                    <p class="chat-group-user__name">${ users.name }</p>
                    <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ users.id}" data-user-name="${ users.name }">追加</a>
                  </div>
                </div> `;
  }else{
    var html = `<div class="chat-group-user clearfix">
                <div class="chat-group-form__field--left"></div>
                <div class="chat-group-form__field--right">
                  "${user}"
                </div>
              </div> `;
  }
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
      user_serch_list.empty();
      users.forEach(function(users){
      incremental_serch(users);
      });
    })
    .fail(function(){
      alert('error');
    })
  })
});
