const Cohorts = require('../src/cohorts')
describe('cohorts', () => {
  let cohorts

  beforeEach(() => {
    cohorts = new Cohorts()
  })

  it('Create a cohort with a cohort name', () => {
    const expected = 'Cohort 6'
    const result = cohorts.createCohort(expected)
    expect(result).toEqual(expected)
  })

  it('Search for a cohort by cohort name', () => {
    const expected = 'Cohort 7'
    cohorts.createCohort(expected)
  })
})
