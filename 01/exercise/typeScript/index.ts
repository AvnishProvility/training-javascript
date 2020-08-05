 export{}

 let name:string= "avnish";
 let num:number = 123;
 //let num1:number ="123";
// console.log(name);

 function getDetails(id:number,name:string,email?:string):void{
console.log("id",id);
console.log("Name",name);
if(email!=undefined){
    console.log("email",email);
}
 }
 getDetails(11,"Avnish");
getDetails(21,"singh","avnish@gmail.com");
 


