exports.isStudent = (req, res, next) => {
    // if (req.session.role === 'student') {
    //   next();
    // } else {
    //   // user is not a student, redirect to login page
    //   res.redirect('/');
    // }

    // TODO while logging in isn't implemented, just go to the page regardless 
    next();
};