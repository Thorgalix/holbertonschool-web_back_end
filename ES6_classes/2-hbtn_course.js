export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter Name
  get name() {
    return this._name;
  }

  // Setter Name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter Length
  get length() {
    return this._length;
  }

  // Setter Length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter students
  get students() {
    return this._students;
  }

  // Setter students
  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    this._students = value;
  }
}
