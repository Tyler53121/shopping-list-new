$('#js-shopping-list-form').submit(function(event) {
  
  event.preventDefault();
  
  let newItem = $("#shopping-list-entry").val();
  $('<li>'+'<span class = "shopping-item">'+ newItem +'</span>'+'<div class="shopping-item-controls">'+'<button class="shopping-item-toggle"><span class="button-label">check</span> </button>'+'<button class="shopping-item-delete"><span class="button-label">delete</span></button></div>'+'</li>').appendTo('.shopping-list');

});

$('.shopping-list').on('click', '.shopping-item-delete', function(event){
       $(this).closest('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', (function(event) {
  $(this).closest('li').toggleClass('shopping-item shopping-item__checked');
}));