export default function getStudentIdsSum(list) {
  return list.reduce((accumulator, currentIndex) => accumulator + currentIndex.id, 0);
}
