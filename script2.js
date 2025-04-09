const remained = document.getElementById('remained')
const liters = document.getElementById('liters')
const percent = document.getElementById('percentage')
const smallCups = document.querySelectorAll('.cup-small')

fillBigCup()

smallCups.forEach((ele, idx) => {
    ele.addEventListener('click', () => {
        fillSmallCup(idx)
    })
})

function fillSmallCup(idx) {
    if(idx === smallCups.length - 1 && smallCups[idx].classList.contains('full')) {
        idx--
    }else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((ele, index) => {
        if(idx >= index) {
            ele.classList.add('full')
        }else{
            ele.classList.remove('full')
        }
    })

    fillBigCup()
}

function fillBigCup() {
    let filledSmallCups = document.querySelectorAll('.cup-small.full').length
    let totalSmallCups = smallCups.length

    // console.log(filledSmallCups, totalSmallCups);
    
    if(filledSmallCups === 0) {
        percent.style.height = '0'
        percent.style.visibility = 'hidden'
    }else{
        percent.style.visibility = 'visible'
        percent.style.height = `${(filledSmallCups / totalSmallCups)* 330}px`
        console.log(percent);
        percent.innerHTML = `${(filledSmallCups / totalSmallCups)* 100}%`
    }

    if(filledSmallCups === totalSmallCups) {
        remained.style.height = '0'
        // remained.style.visibility = 'hidden'
    }else{
        remained.style.visibility = 'visible'
        liters.innerHTML = `${2 - (250 * filledSmallCups)/ 1000}L`
    }
}