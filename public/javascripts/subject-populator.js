document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
        $('#department').change(function() {
        const department = $(this).val();
        $.ajax({
            url: '/add-classes/subjects',
            data: { department },
            success: function(subjects) {
            const $classNameSelect = $('#className');
            $classNameSelect.empty();
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