function makeObject(e){
    const object = {};
    e.target.childNodes.forEach((elm) => {
        if(elm.value){
            object[elm.name] = elm.value
        }
        elm.value = null
    });
    return object;
}

module.exports = {makeObject};