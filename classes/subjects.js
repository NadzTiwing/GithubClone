class Subjects {
  constructor (id, name, teacher) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
  }
  
  getAll() {
    const teachers = window.localStorage.getItem("teachers");
    return JSON.parse(teachers) || [];
  }
}
