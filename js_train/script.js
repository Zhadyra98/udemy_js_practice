"use strict";
function getMathResult(base , count) {
    let res='';
    if(typeof count == 'number' && count>0 ){
        for(let i=1; i<=count; i++){
            if(i==1){
                res+=base*i;
            }
            else{
                res+=`---${base*i}`;
            }
        }
        return res;
    }
    else {
        return base;
    }
}

console.log(getMathResult(10,-5));
