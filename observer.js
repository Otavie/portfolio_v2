const bars = document.querySelectorAll('.bar');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            entry.target.classList.remove('eachBar');
        }else{
            entry.target.classList.add('eachBar');
        }
   });
})

bars.forEach(skillBar =>{
    observer.observe(skillBar)
})
