const tabButton = document.getElementById('send-email-button');
const tabContent = document.querySelectorAll('.tab-content');

function toggleTab() {
    tabContent.forEach(item => {
        if (item.style.opacity === '1') {
            item.style.opacity = '0';
            item.style.transitionDuration = '1s';
            // this.innerHTML = 'Send Email';
            this.innerHTML = '<i class="fa fa-envelope" aria-hidden="true"></i>';
            item.classList.add('active');
        } else {
            item.style.opacity = '1';
            item.style.transitionDuration = '1s';
            // this.innerHTML = '&nbsp;X&nbsp;';
            this.innerHTML = '<i class="fa-solid fa-x"></i>';
            item.classList.add('active');
    }
    });

    if (tabButton.classList.contains('active')) {
        tabButton.classList.remove('active');
    } else {
        tabButton.classList.add('active');
    }

}

tabButton.addEventListener('click', toggleTab);

// Make the first tab content fully opaque when the page loads
document.getElementById('tab-1').style.opacity = '1';




const projectButtons = document.querySelectorAll('.project-button');
const projectContent = document.querySelectorAll('.project-content');

function showProject(project) {
    projectContent.forEach(item => {
        item.style.display = 'none';
    });
    
    document.getElementById(project).style.display = 'block';
}

projectButtons.forEach(button => {
    button.addEventListener('click', function() {
        const project = this.dataset.project;
        
        projectButtons.forEach(button=> {
            button.classList.remove('active-project')
        });
        this.classList.add('active-project');
        showProject(project);
    });
});
  
showProject('project-1');
  