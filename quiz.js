function checkAnswer() {
    const correctAnswer = '4'; // The correct answer

    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Check if the user selected an answer
    if (!userAnswer) {
        feedback.textContent = 'Please select an answer';
        feedback.style.color = 'orange';
        return; // Exit the function early
    }

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) { // Required comparison
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = 'green';
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = 'red';
    }
}

// Retrieve the "submit-answer" button
const submitButton = document.getElementById('submit-answer');

// Add an event listener to the button
submitButton.addEventListener('click', checkAnswer);