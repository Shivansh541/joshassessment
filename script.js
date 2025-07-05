const video = document.querySelector('.video');
const playBtn = document.querySelector('.play_btn');
const playIcon = document.querySelector('.play');
const pauseIcon = document.querySelector('.pause');

// Initially show only play icon
pauseIcon.style.display = 'none';

playBtn.addEventListener('click', () => {
if (video.paused) {
    video.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
} else {
    video.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
}
});

const testimonials = document.querySelectorAll('.testim')
const dots = document.querySelectorAll('.dot')
let currentIndex = 0
let interval = null;
const updateTestimonial = (index)=>{
    testimonials.forEach((testi,i)=>{
        testi.classList.toggle('active',i===index)
        dots[i].classList.toggle('active',i===index)
    })
    currentIndex = index
}
const nextTestimonial = ()=>{
    nextIndex = (currentIndex+1)%testimonials.length;
    updateTestimonial(nextIndex)
}

const startSlider = ()=>{
    interval = setInterval(nextTestimonial,5000)
}
const stopSlider = ()=>{
    clearInterval(interval)
}

dots.forEach((dot,i)=>{
    dot.addEventListener('click',()=>{
        stopSlider()
        updateTestimonial(i)
        startSlider()
    })
})
updateTestimonial(currentIndex)
startSlider()

const sendBtn = document.getElementById('send_btn');
  const modal = document.getElementById('success_modal');
  const closeBtn = document.getElementById('close_btn');

sendBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // Show modal
  document.body.classList.add('no_scroll'); // Disable scroll
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide modal
  document.body.classList.remove('no_scroll'); // Enable scroll
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('no_scroll');
  }
});
