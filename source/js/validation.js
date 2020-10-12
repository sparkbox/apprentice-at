var fieldValidation, validation;

fieldValidation = function(checkThis) {
  var $checkThis, isValid;
  isValid = true;
  $checkThis = $(checkThis);
  if ($.trim($checkThis.val()).length) {
    $checkThis.removeClass('invalid');
  } else {
    isValid = false;
    $checkThis.addClass('invalid');
  }
  return isValid;
};

validation = function() {
  $('form').submit(function() {
    var $inputs, isValid;
    isValid = true;
    $inputs = $(this).find('[required]');
    $inputs.each(function() {
      var $input;
      $input = $(this);
      if (!fieldValidation($input)) {
        isValid = false;
      }
      return true;
    });
    if (!isValid) {
      return false;
    }
  });
  $('form *').focusout(function() {
    return fieldValidation(this);
  });
  return $('input[type="radio"]').on('click', function(e) {
    if ($('#compensation_no').is(':checked')) {
      $('#compensation_no').addClass('invalid');
      $('#compensation_alert').removeClass('hidden');
      return $('#submit_form').attr('disabled', 'disabled');
    } else {
      $('#compensation_no').removeClass('invalid');
      $('#compensation_alert').addClass('hidden');
      return $('#submit_form').removeAttr('disabled');
    }
  });
};
