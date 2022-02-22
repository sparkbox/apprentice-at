const validation = function() {
  $('form').validate({
    rules: {
      name: "required",
      url: {
        required: true,
        url: true
      },
      category: "required",
      duration: {
        required: true,
        min: 1,
        number: true
      },
      summary: "required",
      location: "required",
      learn_more: {
        required: true,
        url: true
      },
     apprentice: {
        required: true,
        email: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      compensation: "Your apprenticeship must be paid",
      name: "Please enter your company name",
      url: {
        required: "Please enter your company website",
        url: "Please enter a valid URL"
      },
      category: "Please select a category",
      duration: {
        required: "Please enter a duration",
        min: "Please enter a number greater than 0",
        number: "Please enter a number"
      },
      summary: "Please enter a summary of the apprenticeship",
      location: "Please enter a location",
      learn_more :{
        required: "Please enter a link to the application",
        url: "Please enter a valid URL"
      },
      apprentice: {
        required: "Please enter a past apprentice email",
        email: "Plesae enter a valid email address"
      },
      email: {
        required: "Please enter an email address",
        email: "Please enter a valid email address"
      }
    }
  })

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

