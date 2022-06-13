class CohortManager {
  constructor() {
    this.cohorts = []
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

  // Has this created a cohort, or just a string? Do I need to create an  object for the cohort name and array for the students?
  createCohort(name) {
    const existingCohort = this.findCohort(name)
    if (!existingCohort) {
      this.cohorts.push(name)
      const lastElement = this.cohorts.length - 1
      return this.cohorts[lastElement]
    } else {
      return `${name} already exists`
    }
  }

  // is this accessing the students array?
  // findStudent(givenName, familyName) {
    
  //   for (let index = 0; index < this.cohorts[students].length; index++) {
  //     if (
  //       this.cohorts[index].givenName === givenName &&
  //       this.cohorts[index].familyName === familyName
  //     ) {
  //       return givenName, familyName
  //     }
  //   }
  //   return false
  // }

  // createStudent(givenName, familyName) {
  //   const existingStudent = this.findStudent(givenName, familyName)
  //   if (!existingStudent) {
  //     this.cohorts.push(givenName, familyName)
  //     const lastElement = this.cohorts.students[].length - 1
  //     return this.cohorts[lastElement]
  //   } else {
  //     return `${givenName} ${familyName} already exists`
  //   }
  // }
}

module.exports = CohortManager
