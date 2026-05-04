export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter(student => student.location === city)
    .map(student => {
      const gradeO = newGrades.find(a => a.studentId === student.id)
      
      return {
        ...student,
        grade: gradeO ? gradeO.grade : "N/A"
      }
    })
}