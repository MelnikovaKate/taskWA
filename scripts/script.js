var $inputField = document.getElementById('tags-input');
var $listTags = document.getElementById('tags-list');
var $checkboxReadOnly = document.getElementById('readonly-property');
var $addTagBtn = document.getElementById('tags-add-btn');
var $allDeleteTagBtn = document.getElementsByClassName('tags-delete-btn');

$inputField.focus();

document.addEventListener('click', addNewTag);
document.addEventListener('click', deleteTag);
$checkboxReadOnly.addEventListener('click', readonlyMode);

function addNewTag(e){
    if(e.target.classList.contains('tags-add-btn') && $inputField.value != ''){
            var $newTag = document.createElement('li');
            var $textTag = document.createElement('span');
            $listTags.append($newTag);
            $newTag.append($textTag);
            $newTag.classList = 'tags-list-item';
            $textTag.textContent = $inputField.value;

            var deleteBtn = document.createElement('button');
            $newTag.appendChild(deleteBtn);
            deleteBtn.classList.add('tags-delete-btn');
            deleteBtn.textContent = 'x';

            DataService.addTag($newTag);
    }
    else{
        return;
    }
}

function deleteTag(e){
    if(e.target.classList.contains('tags-delete-btn')){
        var tagChild = e.target.parentNode;
        var tagParent = tagChild.parentNode;
        tagParent.removeChild(tagChild);

        DataService.removeTag(tagChild);
    }
}

function setReadonly(state){
    $inputField.readOnly = state;
    $addTagBtn.disabled = state;
    for(let i = 0; i < $allDeleteTagBtn.length; i++){
        $allDeleteTagBtn[i].disabled = state;
    }          
}

function readonlyMode(){
    setReadonly($checkboxReadOnly.checked);
}

