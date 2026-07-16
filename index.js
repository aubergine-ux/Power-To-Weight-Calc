const power = document.getElementById('power')
const weight = document.getElementById('weight')
const result = document.getElementById('result')

const calc = () => {
    const p = parseFloat(power.value)
    const w = parseFloat(weight.value)
    const ratio = w / p
    result.innerText = ratio
}

document.getElementById('calc').addEventListener('click', calc)
