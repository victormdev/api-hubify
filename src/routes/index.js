const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const negotiationController = require("../controllers/negotiationController");

// Rotas dos contatos
router.post("/contacts", contactController.create);
router.get("/contacts", contactController.list);
router.get("/contacts/:id", contactController.getById);

// Rotas das negociações
router.post("/negotiations", negotiationController.create);
router.get("/negotiations", negotiationController.list);
router.get("/negotiations/:id", negotiationController.getById);
router.patch("/negotiations/:id/move", negotiationController.moveFunnel);

module.exports = router;