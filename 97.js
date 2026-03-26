//write a class student with property maks and method Grade()
//to ensure correct grade

class Student{
    constructor(marks){
        if(marks < 0 || marks > 100){
            return
        }

        this.marks=marks
    }

    grade(){
        if(this.marks > 90){
            console.log("A+ >> Excellent")
        }else if(this.marks > 80){
            console.log(`A >> Greate Job`)
        }else if(this.marks > 70){
            console.log(`B >>Good`)
        }else if(this.marks>60){
            console.log(`C >>Fair`)
        }else if(this.marks >50){
            console.log(`D  >> Needs Improvement`)
        }else if(this.marks >1){
            console.log(`Failed >> Below Expectation`)
        }else{
            console.log(`Invalid marks plese enter marks betn the 1 to 100`)
        }
    }
}
let student1 = new Student(0)
student1.grade()
