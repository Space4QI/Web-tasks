class Employee {
    constructor(name) {
      this.name = name;
      this.personalNum = this.calculatePersonalNum();
    }
  
    calculatePersonalNum() {
      return this.name.length;
    }
  
    toString() {
      return `Name: ${this.name} - Personal Number: ${this.personalNum}`;
    }
  }
  
  function createEmployeeList(employeeNames) {
    const employees = [];
  
    for (let name of employeeNames) {
      employees.push(new Employee(name));
    }
  
    return employees;
  }
  
  const input = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
  ];
  
  const employeeList = createEmployeeList(input);
  employeeList.forEach(employee => console.log(employee.toString()));
  