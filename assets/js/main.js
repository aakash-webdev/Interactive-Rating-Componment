document.addEventListener("DOMContentLoaded", () => {

    // Select all rating buttons
    const ratingButtons = document.querySelectorAll(".rating_btn");

    // Select the submit button
    const submitButton = document.getElementById("submit_btn");

    // Variable to store the selected rating
    let selectedRating = 0;

    // Add click event listener to each rating button
    ratingButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove the 'active' class from all rating buttons
            ratingButtons.forEach(btn => btn.classList.remove("active"));

            // Add the 'active' class to the clicked button
            button.classList.add("active");

            // Store the rating value (text content of the button)
            selectedRating = button.textContent.trim();
        });
    });

    // Add click event listener to the submit button
    submitButton.addEventListener("click", (event) => {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();

        // Check if a rating has been selected
        if (selectedRating) {
            // Display the selected rating in the #rating_result span
            document.getElementById("rating_result").textContent = selectedRating;

            // Hide the rating box
            document.getElementById("rating_box").style.display = "none";

            // Show the thank you box
            document.getElementById("thanks_box").style.display = "inline-block";
        } else {
            // Alert the user if no rating has been selected
            alert("Please select a rating from 1-5.");
        }
    });
});
