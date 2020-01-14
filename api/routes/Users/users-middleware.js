const Users = require('./users-model');

module.exports = {
   validateId
}

// Validate that user id exists in the database
function validateId(req, res, next) {
   const id = req.params.id;

   Users.findById(id)
      .then(user => {
         if (!user) {
            res.status(404).json({ message: 'No such user exists by that id.' });
         } else {
            next();
         }
      });
}