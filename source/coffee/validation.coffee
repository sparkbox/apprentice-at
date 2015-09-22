fieldValidation = (checkThis) ->
  isValid = true;
  $checkThis = $(checkThis)

  if $.trim($checkThis.val()).length
    $checkThis.removeClass('invalid')
  else
    isValid = false
    $checkThis.addClass('invalid')
  return isValid

validation = ->
  $('form').submit ->
    isValid = true
    $inputs = $(this).find('[required]')
    $inputs.each ->
      $input = $(this)
      if !fieldValidation($input)
        isValid = false
      return true
    if !isValid
      return false

  $('form *').focusout ->
    fieldValidation(this)

  $('input[type="radio"]').on 'click', (e) ->
    if $('#compensation_no').is(':checked')
      $('#compensation_no').addClass('invalid')
      $('#compensation_alert').removeClass('hidden')
      $('#submit_form').attr('disabled','disabled')
    else
      $('#compensation_no').removeClass('invalid')
      $('#compensation_alert').addClass('hidden')
      $('#submit_form').removeAttr('disabled')
