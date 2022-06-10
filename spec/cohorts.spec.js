const CohortManager = require('../src/cohortManager')
describe('cohorts', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('Create a cohort with a cohort name', () => {
    const expected = 'Cohort 6'
    const result = cohortManager.createCohort(expected)
    expect(result).toEqual(expected)
  })

  it('Search for a cohort by cohort name', () => {
    const expected = ['Cohort 7']

    // cohortManager.createCohort('Cohort 5')
    // cohortManager.createCohort('Cohort 6')
    cohortManager.createCohort('Cohort 7')

    const result = cohortManager.getCohorts('Cohort 7')
    expect(result).toEqual(expected)
  })

  it('Alert when trying to add a cohort that already exists', () => {
    const cohortName = 'Cohort 6'
    const expected = `${cohortName} already exists`

    cohortManager.createCohort(cohortName)
    const alert = cohortManager.createCohort(cohortName)
    expect(alert).toEqual(expected)
  })
})
