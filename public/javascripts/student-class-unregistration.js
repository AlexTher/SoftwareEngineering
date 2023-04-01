function unregister(button) {
    // Get the class ID from the data-class-id attribute
    const classId = $(button).data('class-id');
  
    $.post('/register/remove', {classId: classId}, function(response) {
      // Display a message based on the response
      alert(response);
      location.reload();
    });
}