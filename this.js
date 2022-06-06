/*'use strict';
this.table='window table';
const cleantable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
};
cleantable.call(this,'some soap');
this.garage={
    table:'garage table',
    cleantable(){
        console.log(`cleaning ${this.table}`)
    }
};
let johnsroom={
    table:'johns table',
    cleantable(){
        console.log(`cleaning ${this.table}`)
    }
};
johnsroom.cleantable();
this.garage.cleantable();
cleantable.call(this.garage,'some soap');
cleantable.call(johnsroom,'some soap');*/
class student{
    static count=0;
    constructor(name,age,phone_no,boardmarks){
         this.name=name,
         this.age=age,
         this.phone_no=phone_no,
         this.boardmarks=boardmarks,
         student.count++;
    }
    countuser(){
        console.log('Total no. of registerd students is'+ ' '+student.count);
      }
    checkeligiblity(boardmarks){
        if(boardmarks>40)
          {
             console.log( `${this.name} is eligible`);
          }
        else{
            console.log(`${this.name} is not eligible`);
        }  
    }
     checkeligiblityforcollage(minmarks){ return(minage) => {
         if(this.boardmarks>minmarks && this.age>minage){
             console.log(this.name +" "+"is eligible for placement");
         }
         else{
            console.log(this.name +" "+"is  not eligible for placement");
         }
     }
        
    }
}
const s1 =new student('priti','22', ' ','75');
const s2 =new student('priya','18',' ','89');
const s3 =new student('santosh','45',' ','45');
const s4 =new student('soni','24',' ','35');
const s5 =new student('yash','25',' ',' 90');
s1.checkeligiblity(35);
s2.checkeligiblity(45);
s3.checkeligiblity(15);
s4.checkeligiblity(65);
s5.checkeligiblity(85);
s5.countuser();
s1.checkeligiblityforcollage(60)(20);
s2.checkeligiblityforcollage(60)(20);
s3.checkeligiblityforcollage(60)(20);
s4.checkeligiblityforcollage(60)(20);
s5.checkeligiblityforcollage(60)(20);
var getA =function (a){
    return a;
};
//var a=4;
let cube = (a,b)=>{return a*b};
console.log(cube(3,5));
var x=(...n) => {
    console.log(n[0])
};
x(1,2,3);