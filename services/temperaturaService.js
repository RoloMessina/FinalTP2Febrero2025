
import temperatureModel from "../models/temperaturaModel.js";
import notificationService from "./notificacionService.js";

class TemperatureService {
  insertTemperature = async (magnitude, unit) => {
    try {
      if (typeof magnitude !== 'number' || !['celsius', 'farenheit', 'kelvin'].includes(unit.toLowerCase())) {
        throw new Error('Datos de temperatura no válidos');
      }

      
      if ((unit.toLowerCase() === 'kelvin' && magnitude < 0) ||
          (unit.toLowerCase() === 'celsius' && magnitude < -273) ||
          (unit.toLowerCase() === 'farenheit' && magnitude < -460)) {
        await notificationService.sendEmail(
          'administrador@gmail.com',
          'Atento existe una alerta de temperatura crítica',
          `Se ha registrado una temperatura crítica de ${magnitude} ${unit}. ¡Esto podría ser un hecho de suma importancia para la comunidad científica!`
        );
      }

      const data = await temperatureModel.createTemperature(magnitude, unit);
      return data;
    } catch (error) {
      console.error('Error en insertTemperature:', error.message);
      throw new Error('Datos de temperatura no válidos');
    }
  }

  getTemperatures = async () => {
    try {
      const data = await temperatureModel.getAll();
      return data;
    } catch (error) {
      throw new Error('Error al obtener las temperaturas');
    }
  }

  getTemperaturesByRange = async (min, max) => {
    try {
      const data = await temperatureModel.getByRange(min, max);
      return data;
    } catch (error) {
      throw new Error('Error al obtener las temperaturas por rango');
    }
  }
}

export default new TemperatureService();