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
    const expected = 'Cohort 7'

    cohortManager.createCohort('Cohort 5')
    cohortManager.createCohort('Cohort 6')
    cohortManager.createCohort('Cohort 7')

    const result = cohortManager.findCohort('Cohort 7')
    expect(result).toEqual(expected)
  })

  it('Alert when trying to add a cohort that already exists', () => {
    const cohortName = 'Cohort 6'
    const expected = `${cohortName} already exists`

    cohortManager.createCohort(cohortName)
    const alert = cohortManager.createCohort(cohortName)
    expect(alert).toEqual(expected)
  })

  it('Add a student to a specific cohort', () => {
    const expected = {
      cohortName: 'Cohort 6',
      givenName: 'Richard',
      familyName: 'Mattinson'
    }

    const cohortName = cohortManager.createCohort(expected.cohortName)
    const studentDetails = cohortManager.createStudent(
      expected.cohortName,
      expected.givenName,
      expected.familyName
    )

    expect(cohortName).toEqual(expected.cohortName)
    expect(studentDetails).toEqual(expected)
  })

  it('Alert when trying to add a cohort that already exists', () => {
    const cohort = 'Cohort 6'
    const givenName = 'Richard'
    const familyName = 'Mattinson'
    const expected = `${givenName} ${familyName} already exists`
    cohortManager.createCohort(cohort)

    cohortManager.createStudent(cohort, givenName, familyName)
    const alert = cohortManager.createStudent(cohort, givenName, familyName)
    console.log('Cohort Exisits', alert)
    expect(alert).toEqual(expected)
  })
})

// NESTED ARRAY EXAMPLE
/* [
      {
        cohort: 'Cohort 6',
        student: [

          { cohortName: 'Cohort 6', givenName: 'Richard', familyName: 'Mattinson' },
          { cohortName: 'Cohort 6', givenName: 'John', familyName: 'Xander' }
        ]
      },

      {
        cohort: 'Cohort 7',
        student: [
          { givenName: 'Claire', familyName: 'Blah' },
          { givenName: 'Barry', familyName: 'Blah' }
        ]
      }
    ] */
