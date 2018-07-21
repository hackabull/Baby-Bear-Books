const router = require("express").Router();
const userRoutes = require("./userRoute");

// user routes
router.use(userRoutes);

module.exports = router;