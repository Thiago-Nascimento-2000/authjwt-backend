import Router from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.put("/change-password", authMiddleware, authController.changePassword);
router.put("/change-email", authMiddleware, authController.changeEmail);

export default router;
