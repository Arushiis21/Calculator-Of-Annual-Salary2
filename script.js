function calculateSalary() {
    const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const maritalStatus = document.querySelector('input[name="maritalStatus"]:checked').value;
    const childrenCount = parseInt(document.getElementById("childrenCount").value);

    let salaryIncrease = 0;

    if (gender === "male") {
        salaryIncrease += 0.10;
    } else if (gender === "female") {
        salaryIncrease += 0.07; 
    }

    if (maritalStatus === "married") {
        salaryIncrease += (childrenCount * 0.035);
    }

    const totalSalary = monthlyIncome * (1 + salaryIncrease);

    document.getElementById("result").innerHTML = `Total Salary: $${totalSalary.toFixed(2)}`;
}

document.getElementById("married").addEventListener("change", function() {
    const childrenInput = docu
ment.getElementById("childrenInput");
    const childrenInputField = childrenInput.querySelector('input[type="number"]');
    
    if (this.checked) {
        childrenInput.style.display = "block";
        childrenInputField.disabled = false;
    } else {
        childrenInput.style.display = "none";
        childrenInputField.disabled = true;
    }
});

document.getElementById("unmarried").addEventListener("change", function() {
    const childrenInput = document.getElementById("childrenInput");
    const childrenInputField = childrenInput.querySelector('input[type="number"]');
    
    if (this.checked) {
        childrenInputField.disabled = true;
    }
});
