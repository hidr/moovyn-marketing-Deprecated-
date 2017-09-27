'use strict';

(function () {

  var invalidClass = "form-invalid";
  var validClass = "form-valid";

  $.validator.addMethod("postcodeUK", function(value, element) {
    return this.optional(element) || /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}([\s]+)?$/i.test(value);
  });

  $( "form").each(function() {
    // Fires initial validation
    var form = this;
    $(form).find('input').on('change keyup blur focus paste propertychange input', function() {
      if ($(form).valid()) {
        $(form).addClass(validClass).removeClass(invalidClass);
      } else {
        $(form).addClass(invalidClass).removeClass(validClass);
      }
    });

    $(this).validate({
      rules: {
        "postcode": {
          required: true,
          postcodeUK: true
        }
      },
      errorPlacement: function(error, element) {
        $(element).closest("form").addClass(invalidClass).removeClass(validClass);
        return true;
      }
    });
  });

})();
