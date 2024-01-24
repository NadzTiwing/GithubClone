class NewSubject {
  constructor (id, name, teacher) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
  }
}

class Subjects {
  getAll() {
    const subjects = window.localStorage.getItem("subjects");
    return JSON.parse(subjects) || [];
  }
}
