FUNCTIONAL REQUIREMENTS

The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name (verbs: create. nouns: cohort. properties: string)
- Search for a cohort by cohort name (verbs: search. nouns: cohort. properties: string)
- Add student to a specific cohort (verbs: add. nouns: cohort. properties: string)
- Remove a cohort by cohort name (verbs: remove. nouns: cohort. properties: string)
- Remove student from a specific cohort (verbs: remove. nouns: cohort. properties: string)
- Return errors if student or cohort not found (verbs: return. nouns: return. properties: string)

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

DOMAIN MODEL

Class: Cohorts

properties:
// 
- cohorts  

|1 Objects (classes) |2 Properties |3 Messages (Methods) |4 Output (method return value)

|1 Cohorts |2 cohort(array) |3 newCohort |4 new student (object) 