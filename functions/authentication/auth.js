const roles = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student'
};

const restrictAccess = (role) => (req, res, next) => {
    if (!req.session.user || req.session.user.role !== role) {
    // If the user is not authenticated or does not have the required role, redirect to the login page
    res.redirect('/login');
    // } else if (!access[role].includes(req.path)) {
    // // If the user does not have access to the requested path, return a 403 Forbidden error
    // res.status(403).send('Forbidden');
    } else {
    // If the user is authenticated and has the required role and access, continue to the next middleware or route handler
    next();
    }
};
  
  module.exports = { roles, restrictAccess };