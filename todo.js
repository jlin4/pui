$(document).ready(function() {

    $('form').on('submit', function(event){
        event.preventDefault();
        var newItem = $('#newitem').val();
        var itemContainer = $('<p></p>');
        itemContainer.addClass('listItem');
        itemContainer.text(newItem);

        itemContainer.append($('<button class="delete">Delete</button>'));
        $('.todowrapper').append(itemContainer);
        $('#newitem').val("");
    }) 

    $('.todowrapper').on('click', '.listItem', function(){
        $(this).toggleClass('completed');
    })
    
    $('.todowrapper').on('click', '.listItem button', function(){
        $(this).parent().remove();
    })
})
