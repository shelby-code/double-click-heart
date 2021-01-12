const bg = document.querySelector('.bg-img')
const times = document.querySelector('#times')

let numTimes = 0

bg.addEventListener('dblclick', (e)=>{
   createHeart(e)
   
})

function createHeart(e){
    const x = e.clientX
    const y = e.clientY

    const heart = document.createElement('i')
    heart.classList.add('fa-heart')
    heart.classList.add('fas')

    const leftOffset = x - e.target.offsetLeft
    const topOffset = y - e.target.offsetTop

    heart.style.top = `${topOffset}px`
    heart.style.left = `${leftOffset}px`

    bg.appendChild(heart)
    updateTimes()
    setTimeout(()=>heart.remove(), 1000)
}

function updateTimes(){

    if(numTimes == 0){
        numTimes++
    } else{
        if(numTimes > 0){
            numTimes++
        }
    }
    times.innerHTML = numTimes
}

