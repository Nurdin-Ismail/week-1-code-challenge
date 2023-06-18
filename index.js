//writing my solutions here.


//Code Challenge 1

//Student Grade Generator (Toy Problem)
//Write that prompts the user to input student marks. 
//The input should be between 0 and 100. 
//Then output the correct grade: 

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


//Code:

//Making the input-range 0-100


let grade 


function gradeGenerator(grade){
    if (grade >= 0 && grade <= 100){
        if (grade > 79){
            return "A"
        } else if(grade >= 60 && grade <= 79){
            return "B"

        } else if(grade >= 49 && grade <= 59){
            return "C"

        }else if(grade >= 40 && grade <= 48){
            return "D"

        }else{
            return "E"

        }

    } else {
        return "Input an actual grade"   
    }
}


console.log(gradeGenerator(54))
console.log(gradeGenerator(70))

//works!



//Challenge 2!
//Speed Detector (Toy Problem)
//Write a program that takes as input the speed of a car e.g 80. 
//If the speed is less than 70, it should print “Ok”. 
//Otherwise, for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the total number of demerit points.

//For example, if the speed is 80, it should print: “Points: 2”. 
//If the driver gets more than 12 points, the function should print: “License suspended”.

//Code:

function speedDetector(speed){
    let dif = speed - 70
    let points = dif/5
    
    if(speed < 70){
        return "Ok"
    } else if (points < 12){
        return `Points : ${points}`
        

    }else{
        return "License suspended"
    }
     
}

console.log(speedDetector(170))

//Challenge 3:

//Net Salary Calculator (Toy Problem)
//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

//Code:

function netSalaryCalculator(basicSalary, benefits){
    let payee
    
    if (basicSalary <= 24000){
     payee = (basicSalary + benefits) * 0.1;

    } else if(basicSalary>24000 && basicSalary <= 32333){
     payee = (basicSalary + benefits) * 0.25;

    } else{
     payee = (basicSalary + benefits) * 0.3;
    }
    

  //Calculate NHIF deductions
    let NHIFDeductions = basicSalary * 0.02;

  //Calculate NSSF deductions
    let NSSFDeductions = basicSalary * 0.12;

  //Calculate gross salary
    let grossSalary = basicSalary + benefits;

  //Calculate net salary
    let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

    let obj = 
    
    {
        payee : payee,

  
        NHIF : NHIFDeductions,

  
        NSSFDeductions : NSSFDeductions,


        grossSalary : grossSalary,

  
        netSalary : netSalary
    }

    return obj
    

}

console.log(netSalaryCalculator(45000, 5000))






