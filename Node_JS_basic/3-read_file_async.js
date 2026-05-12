const fs = require('fs');

function countStudents(path) {
  // On retourne une Promise pour pouvoir attendre la lecture du fichier sans bloquer Node.
  return new Promise((resolve, reject) => {
    // Lecture asynchrone du fichier CSV.
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        // Si le fichier n'existe pas ou n'est pas lisible, on rejette avec le message attendu.
        reject(new Error('Cannot load the database'));
        return;
      }
      // On enlève les lignes vides pour ignorer les retours à la ligne en fin de fichier.
      const lines = data.split('\n')
        .filter((line) => line.trim() !== '');

      // On retire l'en-tête CSV et on transforme chaque ligne en tableau de colonnes.
      const students = lines.slice(1)
        .map((line) => line.split(','));

      // On garde uniquement les étudiants valides: prénom et filière doivent exister.
      const validStudents = students.filter((student) => student[0] && student[3]);

      // Objet qui va regrouper les étudiants par filière.
      const studentsByField = {};
      // Tableau qui servira à construire le texte final retourné par la Promise.
      const output = [`Number of students: ${validStudents.length}`];

      // Premier affichage: nombre total d'étudiants valides.
      console.log(`Number of students: ${validStudents.length}`);

      // On classe chaque étudiant dans son groupe de filière.
      validStudents.forEach((student) => {
        const firstname = student[0];
        const field = student[3];
        // On crée le groupe s'il n'existe pas encore.
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        // On ajoute le prénom à la liste de la filière.
        studentsByField[field].push(firstname);
      });

      // On affiche les groupes dans l'ordre alphabétique des filières.
      Object.keys(studentsByField).sort().forEach((field) => {
        const line = `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`;
        console.log(line);
        // On garde aussi cette ligne dans la chaîne finale résolue.
        output.push(line);
      });

      // La Promise se résout avec le rapport complet sous forme de texte.
      resolve(output.join('\n'));
    });
  });
}

module.exports = countStudents;
