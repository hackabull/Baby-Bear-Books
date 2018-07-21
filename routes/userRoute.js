const router = require("express").Router();
const userService = require("../service/userService");

// "user/signup" to create new user
router.route("/signup")
  .get(userService.findAll)
  .post(userService.create);

router.route("/search/:query")
  .get(userService.findByQuery);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userService.findById)
  .put(userService.update)
  .delete(userService.remove);

module.exports = router;  
