// Import du module fs pour lire des fichiers
const fs = require('fs');

function countStudents(path) {
  try {
    // Lire le fichier de manière synchrone en UTF-8
    const content = fs.readFileSync(path, 'utf8');

    // Découper en lignes et enlever les lignes vides (notamment la dernière ligne vide possible)
    const lines = content.split('\n').filter((line) => line.trim() !== '');

    // Extraire l'en-tête (première ligne) et garder les lignes des étudiants
    const header = lines.shift();

    // Obtenir les noms de colonnes à partir de l'en-tête
    const columns = header.split(',');

    // Trouver l'index de firstname et de field dans l'en-tête
    const firstnameIndex = columns.indexOf('firstname');
    const fieldIndex = columns.indexOf('field');

    // Structure pour regrouper les étudiants par filière
    const studentsByField = {};

    // Compteur total d'étudiants valides
    let totalStudents = 0;

    // Parcourir chaque ligne d'étudiant
    for (const line of lines) {
      // Séparer les champs de la ligne par virgule
      const parts = line.split(',');

      // Récupérer le prénom et la filière en utilisant les index trouvés
      const firstname = parts[firstnameIndex];
      const field = parts[fieldIndex];

      // Si une des valeurs est manquante, ignorer la ligne
      if (!firstname || !field) {
        continue;
      }

      // Incrémenter le compteur total
      totalStudents += 1;

      // Initialiser la filière si elle n'existe pas encore
      if (!studentsByField[field]) {
        studentsByField[field] = { count: 0, names: [] };
      }

      // Ajouter le prénom et incrémenter le compteur de la filière
      studentsByField[field].names.push(firstname);
      studentsByField[field].count += 1;
    }

    // Afficher le nombre total d'étudiants
    console.log(`Number of students: ${totalStudents}`);

    // Afficher les statistiques par filière (ordre alphabétique)
    Object.keys(studentsByField).sort().forEach((f) => {
      const { count, names } = studentsByField[f];
      console.log(`Number of students in ${f}: ${count}. List: ${names.join(', ')}`);
    });
  } catch (err) {
    // Si la lecture du fichier échoue, lever l'erreur
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;