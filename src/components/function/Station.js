const Stations = (stat) => {
    let mass = [];
    for(let i=0; i<stat.length; i++){
        for(let j=0; j<stat.length; j++){
            if(i!==j && stat[i].frequency === stat[j].frequency){
                mass.push({name: stat[i].name, frequency: stat[i].frequency});
                break;
            }
        }
    }
    return mass;
};
export default Stations;