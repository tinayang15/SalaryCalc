const submitButton = document.querySelector('.submit')

function addWage(event) {
    event.preventDefault()

    let wageInput = document.querySelector("#wage")
    let wage = wageInput.value
    let hoursInput = document.querySelector("#hours")
    let hours = hoursInput.value
    if (isNaN(wage) || isNaN(hours)) {
        alert("Wage or hours input is not a number")
    } else {
        const newWage = parseInt(wage)
        console.log(newWage)
        const newHours = parseInt(hours)
        console.log(newHours)
        console.log(wage, hours, 'here')
        const salary = newWage * newHours * 52
        console.log(salary)
        let salaryDisplay = document.querySelector('.yearlySalary')
        salaryDisplay.innerHTML = "$" + salary
    }
}

submitButton.addEventListener('click', addWage)