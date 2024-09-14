var _a;
// Handle form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('Skills');
    var shareableLinkContainer = document.getElementById('shareable-link-container');
    var shareableLinkElement = document.getElementById('shareable-link');
    var downloadPdfButton = document.getElementById('download-pdf');
    if (nameElement && emailElement && phoneElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "<h2>Resume</h2>\n   <p>Name: <span contenteditable=\"true\"> ".concat(name_1, " </span> </p>\n   <p>Email: <span contenteditable=\"true\"> ").concat(email, "</span></p>\n   <p>Phone Number: <span contenteditable=\"true\"> ").concat(phone, "</span></p>\n   \n   <h2>Education</h2>\n   <p contenteditable=\"true\">Education: ").concat(education, "</p>\n\n   <h2>Experience</h2>\n   <p contenteditable=\"true\">Experience: ").concat(experience, "</p>\n\n   <h2>Skills</h2>\n   <p contenteditable=\"true\">Skills: ").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('resume output is missing');
        }
        console.log(resumeOutput);
    }
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    // Handle PDF download
    downloadPdfButton.addEventListener('click', function () {
        window.print(); // This will open the print dialog and allow the user to save as PDF
    });
    // Prefill the form based on the username in the URL
    window.addEventListener('DOMContentLoaded', function () {
        var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get('username');
    });
});
