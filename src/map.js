const map = (array, call) => {
    if( call == "cube")
        return array.map((x) => {return x*x*x;});
    else if( call == "identity")
        return array.map((x) => {return x;})
    else
        return null;
}

module.exports = map;