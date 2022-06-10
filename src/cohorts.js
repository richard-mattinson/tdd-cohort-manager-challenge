class Cohorts {
  constructor() {
    this.cohorts = []
  }

  // const lastElement (array.length -1) Index is always one less than the physical number of items int the array, so use -1 to add to the end of the array.

  createCohort(name) {
    this.cohorts.push(name)
    const lastElement = this.cohorts.length - 1
    return this.cohorts[lastElement]
  }
}

module.exports = Cohorts
