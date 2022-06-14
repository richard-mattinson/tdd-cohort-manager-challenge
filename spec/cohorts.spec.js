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
      cohortNumber: 'Cohort 6',
      id: '6-01',
      givenName: 'Richard',
      familyName: 'Mattinson',
      github: 'richard.mattinson',
      email: 'richard.mattinson@gmail'
    }

    const cohortNumber = cohortManager.createCohort(expected.cohortNumber)
    const studentDetails = cohortManager.createStudent(
      expected.cohortNumber,
      expected.id,
      expected.givenName,
      expected.familyName,
      expected.github,
      expected.email
    )

    expect(cohortNumber).toEqual(expected.cohortNumber)
    expect(studentDetails).toEqual(expected)
  })

  it('Alert when trying to add a student that already exists', () => {
    const cohortName = 'Cohort 6'
    const cohortNumber = 'Cohort 6'
    const id = '6-01'
    const givenName = 'Richard'
    const familyName = 'Mattinson'
    const expected = `${givenName} ${familyName} already exists`

    cohortManager.createCohort(cohortName)
    cohortManager.createStudent(cohortNumber, id, givenName, familyName)

    const alert = cohortManager.createStudent(
      cohortNumber,
      id,
      givenName,
      familyName
    )
    // console.log('Cohort Exists', alert)
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
