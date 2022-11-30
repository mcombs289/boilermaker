const router = require("express").Router();
module.exports = router;

//composed middleware together.
//router.use("/users", require("./users"));

//handeling 404s aka when routes dont exist
router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
