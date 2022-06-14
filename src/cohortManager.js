class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
  }

  getCohorts() {
    return this.cohorts
  }

  // const lastElement (array.length -1) Index is always one less than the physical number of items int the array, so use -1 to add to the end of the array.

  findCohort(name) {
    for (let index = 0; index < this.cohorts.length; index++) {
      if (this.cohorts[index] === name) {
        return name
      }
    }
    return false
  }

  createCohort(name) {
    const existingCohort = this.findCohort(name)
    console.log('Existing cohort', existingCohort)
    if (!existingCohort) {
      this.cohorts.push(name)
      const lastElement = this.cohorts.length - 1
      return this.cohorts[lastElement]
    } else {
      return `${name} already exists`
    }
  }

  // return can only return one data structure, though that could be an object or array

  findStudent(name, givenName, familyName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      // const currentCohort = this.cohorts[i]

      // console.log(this.students)

      if (this.cohorts[i] === name) {
        for (let j = 0; j < this.students.length; j++) {
          if (
            this.students[j].givenName === givenName &&
            this.students[j].familyName === familyName
          ) {
            return this.students[j]
          }
        }
        return false
      }
    }
  }

  createStudent(cohortName, givenName, familyName) {
    const existingStudent = this.findStudent(cohortName, givenName, familyName)
    if (!existingStudent) {
      this.students.push({ cohortName, givenName, familyName })
      const lastElement = this.students.length - 1
      return this.students[lastElement]
    } else {
      return `${givenName} ${familyName} already exists`
    }
  }
}

// const cohortManager = new CohortManager

module.exports = CohortManager
