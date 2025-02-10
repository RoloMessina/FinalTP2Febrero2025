

import temperatureService from "../services/temperaturaService.js";

class TemperatureController {
  constructor() {
    this.temperatureService = temperatureService;
  }

  insertTemperature = async (req, res) => {
    try {
      const { magnitude, unit } = req.body;
      if (magnitude === undefined || !unit) throw new Error('Los datos de la temperatura no son válidos');
      const data = await this.temperatureService.insertTemperature(magnitude, unit);
      res.status(200).send(data);
    } catch (error) {
      console.error('Error en insertTemperature:', error.message);
      res.status(422).send({ errorMsg: 'Los datos de la temperatura no son válidos' });
    }
  };

  getTemperatures = async (req, res) => {
    try {
      const data = await this.temperatureService.getTemperatures();
      res.status(200).send(data);
    } catch (error) {
      console.error('Error en getTemperatures:', error.message);
      res.status(500).send({ errorMsg: 'Hemos tenido un error al obtener las temperaturas' });
    }
  };

  getTemperaturesByRange = async (req, res) => {
    try {
      const { min, max } = req.query;
      if (min === undefined || max === undefined) throw new Error('Rango no válido');
      const data = await this.temperatureService.getTemperaturesByRange(Number(min), Number(max));
      res.status(200).send(data);
    } catch (error) {
      console.error('Error en getTemperaturesByRange:', error.message);
      res.status(422).send({ errorMsg: 'Hemos tenido un error al obtener las temperaturas por rango' });
    }
  };
}

export default new TemperatureController();