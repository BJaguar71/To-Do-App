// define a function to add new item 
function newItem (){

    // add a new item to the list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something first!');
    } else {
        $('#list').append(li);
    }

    //crossing out an item from the list
    function crossOut () {
        li.toggleClass('strike');
    }
}
