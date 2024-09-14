// Handle form submission
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('Skills') as HTMLInputElement;
    const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
    const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
    const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

    
    if (nameElement && emailElement && phoneElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

    const resumeOutput = `<h2>Resume</h2>
   <p>Name: <span contenteditable="true"> ${name} </span> </p>
   <p>Email: <span contenteditable="true"> ${email}</span></p>
   <p>Phone Number: <span contenteditable="true"> ${phone}</span></p>
   
   <h2>Education</h2>
   <p contenteditable="true">Education: ${education}</p>

   <h2>Experience</h2>
   <p contenteditable="true">Experience: ${experience}</p>

   <h2>Skills</h2>
   <p contenteditable="true">Skills: ${skills}</p>
    `;
    
    const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput
        }
        else{
            console.error('resume output is missing')
        }
        console.log(resumeOutput)
    }

// Generate a shareable URL with the username only
const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
})
})