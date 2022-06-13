// define a function to add new item 
function newItem (){

    // add a new item to the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

}
