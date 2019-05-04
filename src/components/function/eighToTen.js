const eighToTen = (num) => {
    if(num.split("").length!==0) {
        if(num.split("").find(t => t>7)>7){
            return("числа должны быть 0 - 7")
        }else {
            return num.split("").
            map((t,i,mass) =>
            {
                return t*Math.pow(8,(mass.length-i-1))
            }).reduce((sum,t) => {return sum+t });
        }
    } else {
        return ""
    }
};
export default eighToTen;