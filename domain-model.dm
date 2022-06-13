FUNCTIONAL REQUIREMENTS

The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name DONE
- Search for a cohort by cohort name DONE
- Add student to a specific cohort 
- Remove a cohort by cohort name 
- Remove student from a specific cohort 
- Return errors if student or cohort not found 

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

DOMAIN MODEL

Class: Cohorts

properties:
// 
- cohorts  

|1 Objects (classes) |2 Properties |3 Messages (Methods) |4 Output (method return value)

|1 Cohorts |2 cohort(array) |3 newCohort |4 new student (object) 