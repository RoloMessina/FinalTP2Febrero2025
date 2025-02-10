import { Router } from "express";
import temperatureController from "../controllers/temperaturaController.js";

const router = Router();

router.post('/temperature', temperatureController.insertTemperature);
router.get('/temperatures', temperatureController.getTemperatures);
router.get('/temperatures/range', temperatureController.getTemperaturesByRange);

export default router;