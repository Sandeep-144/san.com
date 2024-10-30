function showDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

// JavaScript for typing animation
const textArray = ["Hi! I'm Sandeep Malivad", "I'm an AI-ML engineer", "I'm a developer", /*"I'm a coder"*/];
let currentIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function typeEffect() {
    if (isDeleting) {
        currentText = textArray[currentIndex].substring(0, charIndex--);
    } else {
        currentText = textArray[currentIndex].substring(0, charIndex++);
    }
    
    document.getElementById('animated-text').textContent = currentText;
    
    if (!isDeleting && charIndex === textArray[currentIndex].length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textArray.length;
    }
    
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// function submitComment() {
//     const comment = document.getElementById("comment").value;
//     const predefinedComment = document.getElementById("predefined-comments").value;
    
//     const feedbackMessage = document.getElementById("comment-feedback");
    
//     // Check if either the comment or the predefined comment is provided
//     if (comment.trim() === "" && predefinedComment === "") {
//         feedbackMessage.textContent = "Please enter a comment or select a predefined comment.";
//         feedbackMessage.style.color = "red";
//     } else {
//         feedbackMessage.textContent = "Thank you for your comment!";
//         feedbackMessage.style.color = "green";
        
//         // Clear the comment textarea and dropdown
//         document.getElementById("comment").value = "";
//         document.getElementById("predefined-comments").selectedIndex = 0;
//     }
// }

// function sendMessage() {
//     const name = document.getElementById("userName").value;
//     const email = document.getElementById("userEmail").value;
//     const message = document.getElementById("userMessage").value;

//     if (name && email && message) {
//         // Displaying comment
//         const commentsSection = document.getElementById("comments-section");
//         const commentDiv = document.createElement("div");
//         commentDiv.className = "comment";
//         commentDiv.innerHTML = `<strong>${name}</strong> (<em>${email}</em>): <p>${message}</p>`;
        
//         commentsSection.appendChild(commentDiv);

//         // Reset the form
//         document.getElementById("userName").value = "";
//         document.getElementById("userEmail").value = "";
//         document.getElementById("userMessage").value = "";

//         // Simulate sending an email (this won't actually send an email)
//         console.log(`Sending email from: ${email}\nMessage: ${message}`);
//     } else {
//         alert("Please fill in all fields.");
//     }
// }

// function submitComment() {
//     const commentSelect = document.getElementById("predefined-comments");
//     const selectedComment = commentSelect.value;

//     if (selectedComment) {
//         // Displaying comment
//         const commentsSection = document.getElementById("comments-section");
//         const commentDiv = document.createElement("div");
//         commentDiv.className = "comment";
//         commentDiv.innerHTML = `<p>${selectedComment}</p>`;
        
//         commentsSection.appendChild(commentDiv);

//         // Reset the select field
//         commentSelect.value = "";
//     } else {
//         alert("Please select a comment.");
//     }
// }

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user name and comment value
    const userName = document.getElementById("userName").value;
    const comment = document.getElementById("comment").value;

    // Create a new list item for the comment
    const newComment = document.createElement("li");
    newComment.textContent = `${userName}: ${comment}`;

    // Append the new comment to the comments list
    document.getElementById("comments-list").appendChild(newComment);

    // Clear the form fields
    document.getElementById("contact-form").reset();
});

