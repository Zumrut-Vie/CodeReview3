function calculateInsurance() {
    var name = document.getElementById("name").value;
    var age = Number(document.getElementById("age").value);
    var country = document.getElementById("selectOption").value;
    var hpower = document.getElementById("hpower").value;

    switch (true) {
        case (country == "Austria"):
            i = Math.round((hpower * 100) / (age + 50));

            document.getElementById('result').innerHTML = name + ", your insurance costs " + i + " €";
             break;
        case (country == "Hungary"):
            i = Math.round((hpower * 120) / (age + 100));
            document.getElementById('result').innerHTML = name + ", your insurance costs " + i + " €";
            break;
        case (country == "Greece"):
            i = Math.round((hpower * 150) / ((age + 3) + 50));
            document.getElementById('result').innerHTML = name + ", your insurance costs " + i + " €";
            break;
        default:
            console.log("Calculate your rate!");
           
    }
}

document.getElementById("calculate").addEventListener("click", calculateInsurance);