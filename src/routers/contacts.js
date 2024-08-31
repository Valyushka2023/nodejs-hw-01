import { Router } from "express";
import * as contactsController from "../controllers/contactsController.js";

const router = Router();

router.get("/", contactsController.getAllContacts);
router.get("/:id", contactsController.getContactById);

export default router;
