function send() {
    var firstName = document.getElementById("fname").value
    var lastName = document.getElementById("lname").value
    var age =Number( document.getElementById("age").value)
    if(age>8){
        document.write(firstName + " " + lastName + "(" + age + ")")
    } else{
        document.write("سن باید بیشتز از 8 باشد")
    }

}