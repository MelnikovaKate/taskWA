function initDataService(){  
    var arrayTags = [];

    var session = {
        'ArrayTags': []
    };

    return{
        getArrayTags: getArrayTags,
        setArrayTags: setArrayTags,
        addTag: addTag,
        removeTag: removeTag,
        setArray: setArray,
        getArray: getArray,
    }

    function getArrayTags(){
        return arrayTags;
    }

    function setArrayTags(array){
        arrayTags = array;
    }

    function addTag(tag){
        arrayTags.push(tag.getElementsByTagName('span')[0].innerText);
    }

    function removeTag(tag){
        var deletedTag = arrayTags.indexOf(tag);
        arrayTags.splice(deletedTag, 1);
    }

    function setArray(array){

        session.ArrayTags = [];
        array.forEach(function(item,i){
            // debugger
            // session.ArrayTags.push({'value': item.childNodes[0].innerText, 'id': i});
            session.ArrayTags.push({'value': item, 'id': i});
        });
        localStorage.setItem('session', JSON.stringify(session));
    }

    function getArray(){
        return JSON.parse(localStorage.getItem('session'));
    }
}

var DataService = initDataService();