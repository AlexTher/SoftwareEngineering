// Waits for page to fully load 
document.addEventListener("DOMContentLoaded", function() {
    // Wait for the document to be ready
    $(document).ready(function() {
        // When the user changes the value of the department select field
        $('#department').change(function() { 
            // Get the value of the department select field
            const department = $(this).val();
            // Send an AJAX request to the server to get the subjects for the selected department
            $.ajax({
                url: '/add-classes/subjects',
                data: { department },
                success: function(subjects) {
                    // When the AJAX request is successful, clear the className select field
                    const $classNameSelect = $('#className');
                    $classNameSelect.empty();
                    // Loop through the subjects returned by the server and add an option for each subject to 
                    subjects.forEach(function(subject) {
                        $classNameSelect.append($('<option>', {
                        value: subject._id,
                        text: subject.classID + " - " + subject.className
                        }));
                    });
                }
            });
        });
    });
});