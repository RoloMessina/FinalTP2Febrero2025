
class TemperatureModel {
  constructor() {
    this.temperatures = [];
  }

  createTemperature = async (magnitude, unit) => {
    const temperature = { magnitude, unit };
    this.temperatures.push(temperature);
    return temperature;
  };

  getAll = async () => {
    return this.temperatures;
  };

  getByRange = async (min, max) => {
    return this.temperatures.filter(temp => temp.magnitude >= min && temp.magnitude <= max);
  };
}

export default new TemperatureModel();