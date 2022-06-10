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

  createCohort(name) {
    // (for loop) does cohort already exist?
    // - (if) NO, add cohort to array
    // - (if) YES, return error
    const existingCohort = this.findCohort(name)
    if (!existingCohort) {
      this.cohorts.push(name)
      const lastElement = this.cohorts.length - 1
      return this.cohorts[lastElement]
    } else {
      return `${name} already exists`
    }
  }
}

module.exports = CohortManager
