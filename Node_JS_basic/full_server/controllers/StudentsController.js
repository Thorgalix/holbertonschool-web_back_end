import realDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    realDatabase(process.argv[2])
      .then((students) => {
        const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        let output = 'This is the list of our students';

        fields.forEach((field) => {
          output += `\nNumber of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
        });

        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return realDatabase(process.argv[2])
      .then((students) => {
        response.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
