import fs from 'fs';

function realDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = lines.slice(1)
        .map((line) => line.split(','));

      const validStudents = students.filter((student) => student[0] && student[3]);

      const studentByFields = {};

      validStudents.forEach((student) => {
        const firstname = student[0];
        const field = student[3];

        if (!studentByFields[field]) {
          studentByFields[field] = [];
        }

        studentByFields[field].push(firstname);
      });

      resolve(studentByFields);
    });
  });
}

export default realDatabase;
