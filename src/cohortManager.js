class CohortManager {
  constructor() {
    this.cohorts = []
    this.students = []
  }

  getCohorts() {
    return this.cohorts
  }

  // const lastElement (array.length -1) Index is always one less than the physical number of items int the array, so use -1 to add to the end of the array.

  findCohort(cohortName) {
    for (let index = 0; index < this.cohorts.length; index++) {
      if (this.cohorts[index] === cohortName) {
        return cohortName
      }
    }
    return false
  }

  createCohort(cohortName) {
    const existingCohort = this.findCohort(cohortName)
    // console.log('Existing cohort', existingCohort)
    if (!existingCohort) {
      this.cohorts.push(cohortName)
      const lastElement = this.cohorts.length - 1
      return this.cohorts[lastElement]
    } else {
      return `${cohortName} already exists`
    }
  }

  // return can only return one data structure, though that could be an object or array

  findStudent(cohortNumber, id, givenName, familyName) {
    for (let i = 0; i < this.cohorts.length; i++) {
      // const currentCohort = this.cohorts[i]

      // console.log(this.students)

      if (this.cohorts[i] === cohortNumber) {
        for (let j = 0; j < this.students.length; j++) {
          if (
            this.students[j].id === id &&
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

  createStudent(cohortNumber, id, givenName, familyName, github, email) {
    const existingStudent = this.findStudent(
      cohortNumber,
      id,
      givenName,
      familyName
    )
    if (!existingStudent) {
      this.students.push({
        cohortNumber,
        id,
        givenName,
        familyName,
        github,
        email
      })
      const lastElement = this.students.length - 1
      return this.students[lastElement]
    } else {
      return `${givenName} ${familyName} already exists`
    }
  }
}

// const cohortManager = new CohortManager

module.exports = CohortManager
