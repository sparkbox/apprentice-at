jQuery(document).ready(function($){
  $(function(){
    $('input[type="radio"]').click(function(){
      if ($('#compensation_no').is(':checked')) {
        $('#compensation_alert').removeClass('hidden');
        $('#submit_form').attr('disabled','disabled');
      } else {
        $('#compensation_alert').addClass('hidden');
        $('#submit_form').removeAttr('disabled');
      }
    });
  });
});
