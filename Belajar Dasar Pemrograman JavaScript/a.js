function ax(a,b,c){
    if(a > b || a > c){
        return a;
    }
    else if(b>a || b > c){
        return b
    }

    else{
        return c
    }
}


function ay(a,b,c){
    let minvalue;
    if(a < b){
      minvalue = a
    }
    else if(b>a || b > c){
        return b
    }

    else{
        return c
    }
}

console.log(ax(1,3,4))

