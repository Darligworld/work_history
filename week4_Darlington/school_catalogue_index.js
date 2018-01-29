class school {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberofStudents;
  }
  quickfacts() = {
    console.log(`${name} educates NUMBER OF STUDENTS students, typically between the ages of LEVEL.`)
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === numberOfStudents) {
      this._numberOfStudents = newNumberOfStudents;
      console.log(`${newNumberOfStudents} is valid input.`);
    } else {
        console.log(`Change ${newNumberofStudents} to a number.`);
    }

    }
  }
}
