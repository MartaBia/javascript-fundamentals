const cohort = {
  name: 'December 2022',
  id: 1234,
  students: ['Marta', 'Rachel', 'Juliana', 'Tom', 'Luiz']
};

const cohortFormatter = (object) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
};

cohortFormatter(cohort)