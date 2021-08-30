const reduce = (array, fun, iv) => {
    if(!iv)
    {
        if(array.length==0)
            return undefined;
        else
            return array.reduce(fun);
    }
    return array.reduce(fun, iv);
}

module.exports = reduce;