document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
        $('form').submit(function(event) {
            console.log("Triggered");
            event.preventDefault();
            $.ajax({
                url: '/search-classes/classes',
                type: 'GET',
                data: $('form').serialize(),
                success: function(response) {
                    $('#classEntry-container').empty();
                    $('#classEntry-container').append(response);
                },
                error: function(xhr, status, error) {
                    $('#classEntry-container').empty();
                    $('#classEntry-container').append('<div id="error-message">Error: ' + error + '</div>');
                }
            });
        });
    });
});