const init =1575943038251; 
const end = 1591236508302;
console.log(end-init);
let obt = {};
let tmp=init;
while(tmp<end){
    obt[tmp]="";
    tmp+=86400;
}
console.log(obt);
