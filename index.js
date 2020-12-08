// Add your functions here
function map(src, cb){
    let r = []
    
    for (let i = 0; i < src.length; i++){
        let ele = src[i]
        r.push(cb(ele))
    }

    return r;
}

function reduce(src, cb, start){
    let r = (!!start) ? start : src[0]
    let i = (!!start) ? 0 : 1

    for (; i < src.length; i++){
        r = cb(src[i], r)
    }

    return r;
}