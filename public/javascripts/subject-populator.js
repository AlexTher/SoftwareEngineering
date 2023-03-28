document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
        $('#department').change(function() {
        const department = $(this).val();
        if (department === '') {
            $.ajax({
                url: '/add-classes/all-subjects',
                success: function(subjects) {
                    const $classNameSelect = $('#className');
                    $classNameSelect.empty();
                    $classNameSelect.append($('<option>', {
                        value: "",
                        text: "Select a Class"
                    })),
                    subjects.forEach(function(subject) {
                        $classNameSelect.append($('<option>', {
                            value: subject.className,
                            text: subject.department + subject.classID + " - " + subject.className
                        }));
                    });
                }
            });
        } else {
            $.ajax({
                url: '/add-classes/subjects',
                data: { department },
                success: function(subjects) {
                    const $classNameSelect = $('#className');
                    $classNameSelect.empty();
                    $classNameSelect.append($('<option>', {
                        value: "",
                        text: "Select a Class"
                    })),
                    subjects.forEach(function(subject) {
                        $classNameSelect.append($('<option>', {
                            value: subject.className,
                            text: subject.classID + " - " + subject.className
                        }));
                    });
                }
            });
        }
        });
    });
});
