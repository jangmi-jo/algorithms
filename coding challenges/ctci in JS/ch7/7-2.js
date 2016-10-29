
class Employee {
  constructor() {
    this.busy = false;
    this.level = 0;
  }

  assignManager() {
    this.level = 1;
  }

  assignDirector() {
    this.level = 2;
  }

  static dispatchCall(employees) {
    let freeEmployees = employees.filter((e) => !e.busy);
    freeEmployees.sort((a, b) => a.level - b.level);
    freeEmployees[0].busy = true;
    return freeEmployees[0];
  }
}
