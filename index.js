// users can add items via "#js-shopping-list-form submit"
// users can check or uncheck items via css class ".shopping-item__checked"
// users can delete items from the list permanently via ".remove()"

'use strict';
$(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let itemName = document.getElementById('shopping-list-entry').value;
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
  });
  $('.shopping-list').on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
  });
  $('.shopping-list').on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});
