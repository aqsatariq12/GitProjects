/*Liked dislike starts  */
const likeButtons = document.querySelectorAll('.like-btn');
const dislikeButtons = document.querySelectorAll('.dislike-btn');
const savedProjectsContainer = document.getElementById('saved-projects');

// Function to add project to saved projects
function addToSavedProjects(projectElement) {
  const clonedProject = projectElement.cloneNode(true);  
  clonedProject.querySelector('.like-btn').disabled = true;  
  clonedProject.querySelector('.like-btn').textContent = 'Liked';  
  savedProjectsContainer.appendChild(clonedProject);


  // Add an event listener to the "Dislike" button of the saved project
  const dislikeBtn = clonedProject.querySelector('.dislike-btn');
  dislikeBtn.addEventListener('click', () => {
    dislikeBtn.textContent = 'Disliked';
    dislikeBtn.disabled = true;
    alert('Project Disliked');
    savedProjectsContainer.removeChild(clonedProject);
    });
}

// Event listeners for the "Like" button
likeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const projectCard = event.target.closest('.project-card'); 

    // Automatically remove from Disliked section if it's liked
    const dislikedProject = savedProjectsContainer.querySelector(`.project-card[data-id="${projectCard.dataset.id}"]`);
    if (dislikedProject) {
      dislikedProject.querySelector('.dislike-btn').textContent = 'Dislike';
      dislikedProject.querySelector('.dislike-btn').disabled = false;
      savedProjectsContainer.removeChild(dislikedProject);
    }

    addToSavedProjects(projectCard); 
    alert('Project Liked'); 

    // Optionally disable and change the button text to indicate it's liked
    event.target.disabled = true;
    event.target.textContent = 'Liked';
  });
});

// Event listeners for the "Dislike" button
dislikeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const projectCard = event.target.closest('.project-card'); 

    // Automatically remove from Liked section if it's disliked
    const likedProject = savedProjectsContainer.querySelector(`.project-card[data-id="${projectCard.dataset.id}"]`);
    if (likedProject) {
      likedProject.querySelector('.like-btn').textContent = 'Like';
      likedProject.querySelector('.like-btn').disabled = false;
      savedProjectsContainer.removeChild(likedProject);
    }

    // Change text to 'Disliked' when clicked
    event.target.textContent = 'Disliked';
    event.target.disabled = true;  
    alert('Project Disliked'); 
    savedProjectsContainer.removeChild(projectCard); // Remove from saved projects
  });
});

/*Liked disliked end  */
/*toggler starts */

// Get the theme toggler container and SVG icons
const themeToggler = document.getElementById('theme_toggler');
const icons = themeToggler.querySelectorAll('svg');

// Function to handle theme toggling
function toggleTheme() {
  icons.forEach((icon) => icon.classList.toggle('active')); // Toggle 'active' class

  // Check which theme is active and apply corresponding styles
  if (icons[0].classList.contains('active')) {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }
}

// Add event listener to the toggler
themeToggler.addEventListener('click', toggleTheme);