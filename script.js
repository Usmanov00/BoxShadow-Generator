const box = document.querySelector('.box')
const offsetX = document.querySelector('.offsetX')
const offsetY = document.querySelector('.offsetY')
const blur = document.querySelector('.blur')
const stretch= document.querySelector('.stretch')
const color = document.querySelector('.color')
const output = document.querySelector('.output')
const inset = document.querySelector('.inset')
const outset = document.querySelector('.output')




function boxShadowGenerator (){
    let insetValue = ''
    if (inset.checked){
        insetValue = 'inset'
    }
    else outset.checked
    console.log(insetValue)
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${stretch.value}px ${color.value} ${insetValue} `
    output.textContent = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${stretch.value}px ${color.value};`
    console.log(inset.checked)
}

offsetX.addEventListener('input', boxShadowGenerator)
offsetY.addEventListener('input', boxShadowGenerator)
blur.addEventListener('input', boxShadowGenerator)
stretch.addEventListener('input', boxShadowGenerator)
color.addEventListener('input', boxShadowGenerator)
inset.addEventListener('input', boxShadowGenerator)
outset.addEventListener('input', boxShadowGenerator)



boxShadowGenerator()



