function addToWaitlist(button) {
    console.log("Running");
    // Get the class ID from the data-class-id attribute
    const classId = $(button).data('class-id');
  
    // Call the addToWaitlist function with the class ID
    $.post('/register/waitlist', {classId: classId}, function(response) {
      // Display a message based on the response
      alert(response.message);
    });
}

function addToList(button) {
    console.log("Running");
    // Get the class ID from the data-class-id attribute
    const classId = $(button).data('class-id');
  
    // Call the addToWaitlist function with the class ID
    $.post('/register/add', {classId: classId}, function(response) {
      // Display a message based on the response
      alert(response.message);
      location.reload();
    });
}