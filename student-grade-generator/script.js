// get the input elements
const marksInputs = document.querySelectorAll('.marks');
const gradeInput = document.querySelector('.grade');

// add an event listener to each marks input to calculate the grade when a value is entered
marksInputs.forEach(input => {
  input.addEventListener('input', () => {
    // get the marks for each subject
    const mathsMarks = parseFloat(document.querySelector('input[placeholder="Maths"]').value);
    const biologyMarks = parseFloat(document.querySelector('input[placeholder="Biology"]').value);
    const chemistryMarks = parseFloat(document.querySelector('input[placeholder="Chemistry"]').value);
    const physicsMarks = parseFloat(document.querySelector('input[placeholder="Physics"]').value);
    const historyMarks = parseFloat(document.querySelector('input[placeholder="History"]').value);

    // calculate the average marks
    const totalMarks = mathsMarks + biologyMarks + chemistryMarks + physicsMarks + historyMarks;
    const averageMarks = totalMarks / 5;

    // convert the average marks to a grade
    let grade = '';
    if (averageMarks >= 80 <100 ) {
      grade = 'A';
    } else if (averageMarks >= 60) {
      grade = 'B';
    } else if (averageMarks >= 50) {
      grade = 'C';
    } else if (averageMarks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    // display the grade in the grade input box
    gradeInput.value = grade;
  });
});
