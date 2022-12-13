$(document).ready(function() {
  $.each($('.product-multiple-option'), function(index, val) {
    if($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });
  $(document).on('click', '.product-multiple-option', function(event) {
    $(this).parents('.product-options-container').find('.product-multiple-option').removeClass('active');
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
  })
});
