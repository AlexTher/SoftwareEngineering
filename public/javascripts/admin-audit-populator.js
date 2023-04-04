document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
        $('form').submit(function(event) {
            console.log("Triggered");
            event.preventDefault();
            $.ajax({
                url: '/search-audits/audits',
                type: 'GET',
                data: $('form').serialize(),
                success: function(response) {
                    $('#auditEntry-container').empty();
                    if (response.length > 0) {
                        $('#auditEntry-container').append(response);
                    } else {
                        alert("No Changes Fit this Criteria \n Change Search Parameters");
                    }
                },
                error: function(xhr, status, error) {
                    $('#auditEntry-container').empty();
                    $('#auditEntry-container').append('<div id="error-message">Error: ' + error + '</div>');
                }
            });
        });
        $('#class-fields').hide();
        $('#auditType').on('change', function() {
            var selectedOption = $(this).find(':selected').val();
            
            // if the selected option contains the word 'class', show the fields
            if (selectedOption.includes('class')) {
              $('#class-fields').show();
              $('#class-fields :input').prop('disabled', false);
            } else {
              // otherwise, hide the fields
              $('#class-fields').hide();
              $('#class-fields :input').prop('disabled', true);
            }
          });
    });
});