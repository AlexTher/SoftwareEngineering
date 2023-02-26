exports.isTeacher = (req, res, next) => {
  // if (req.session.role === 'teacher') {
  //   next();
  // } else {
  //   // user is not a teacher, redirect to login page
  //   res.redirect('/');
  // }

  // TODO while logging in isn't implemented, just go to the page regardless 
  next();
};