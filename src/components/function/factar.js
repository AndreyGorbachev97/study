const factar = (n) => {
        let fact = n;
        for(let i = n-1; i!==1; i--){
            fact = fact*i;
        }
        return fact;
};
const fun_sum = (N) => {
    let step = 0;
    let s = 0;
    if(N.split("").length!==0 && N.split("").length<3){
        for(let k=1; k <= N; k++){
            step = Math.pow(-1,k)* factar(2*k+1);
            s = s + step;
        }
        return  s;
    }else if (N.split("").length>2) {
        return "infinity";
    } else {
        return 0
    }
};
export default fun_sum;