function leap_year() {
    var year = document.getElementById("year_input").value;
    var result = document.getElementById("result")

   
   if (year==0) {
       alert("Please, Enter a valid year. Eg 2020")
       result.innerHTML="please,enter a valid year"
   } else {
       if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {

                result.innerHTML = "The year " + year + " is a leap year."
            } else {
                result.innerHTML = "The year " + year + " is not a leap year."
            }
        } else {
            result.innerHTML = "The year " + year + " is a leap year."
        }
    } else {
        result.innerHTML = "The year " + year + " is not a leap year."
    }
}
}