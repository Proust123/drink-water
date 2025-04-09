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
    if(idx === smallCups.length - 1 && smallCups[idx].classList.contains('full')){
        idx--
    }else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((ele, idx2) => {
        console.log(`idx: ${idx}`, `idx2: ${idx2}`);
        
        if(idx2 <= idx){
            ele.classList.add('full')
        }else{
            ele.classList.remove('full')
        }
    })

    fillBigCup()

}

function fillBigCup(){
    const filledGlasses = document.querySelectorAll('.cup-small.full').length
    const totalGlasses = smallCups.length

    if(filledGlasses === 0){
        percent.style.height = '0'
        percent.style.visibility = 'hidden'
    }else{
        percent.style.visibility = 'visible'
        //330px total height hai big glass ki
        percent.style.height = `${(filledGlasses / totalGlasses) * 330}px`
        percent.innerHTML = `${(filledGlasses / totalGlasses) * 100}%`
    }

    if(filledGlasses === totalGlasses){
        remained.style.height = '0'
        remained.style.visibility = 'hidden'
    }else{
        remained.style.visibility = 'visible'
        liters.innerHTML = `${2 - (250 * filledGlasses / 1000)}L`
    }

}