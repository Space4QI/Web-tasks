class City {
    constructor(name, latitude, longitude) {
      this.town = name;
      this.latitude = parseFloat(latitude).toFixed(2);
      this.longitude = parseFloat(longitude).toFixed(2);
    }
  
    toString() {
      return `{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`;
    }
  }
  
  function parseTable(tableRows) {
    const cities = [];
  
    for (let row of tableRows) {
      const [town, latitude, longitude] = row.split('|').map(str => str.trim());
      cities.push(new City(town, latitude, longitude));
    }
  
    return cities;
  }
  
  const input = [
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
  ];
  
  const cities = parseTable(input);
  cities.forEach(city => console.log(city.toString()));
  