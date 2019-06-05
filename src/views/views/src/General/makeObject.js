function createObject(e){
    const object = {};
    e.target.childNodes.forEach((dat) => {
        if(dat.value){
            object[dat.name] = dat.value
        }
        dat.value = null
    });
    return object;
}

module.exports = {createObject};