class Subjects {
  getAll() {
    const teachers = window.localStorage.getItem("teachers");
    return JSON.parse(teachers) || [];
  }
}
