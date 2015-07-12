$(document).bind("pageinit", function() {
    
    //var test = localStorage.getItem("Hello wørld");
    for (var i = 0; i < localStorage.length; i++){
        var todoEntry = localStorage.getItem(localStorage.key(i));
        if(todoEntry != "undefined") {
            $('#todolist').append('<label><input type="checkbox" name="todo[]" value="'+todoEntry+'">'+todoEntry+'</label>');  
        }
        // $('#todolist').append(localStorage.getItem(localStorage.key(i)));
        $('input[type=checkbox]').checkboxradio().trigger('create');
    }

    $('form#todo_add').submit(function(event){
        event.preventDefault();
        var data = $('input[name=todo_add_item]').val().trim();
        if(!data) {
            alert("Text input cannot be empty.");
        }
        else if (localStorage.getItem(data)) {
            alert("This entry already exists");
        }
        else {
            localStorage.setItem(data, data);
            $('#todolist').append('<label><input type="checkbox" name="todo[]" value="'+data+'">'+data+'</label>');
            $('input[type=checkbox]').checkboxradio().trigger('create');
            $('input[name=todo_add_item]').val("");
        }
    });


    $('#todo_clean').click(function(){
        var selected = [];
        $('#todolist input:checked').each(function() {
            $(this).prev('label').remove();
            $(this).remove();
            localStorage.removeItem($(this).val());
        });
    });

    $('#todo_delete_confirmed').click(function(){
        $('#todolist').html("");
        localStorage.clear();
    });


    // $('label').click(function(){
    //     $(this).addClass('grayedOut');
    // });

    // $(document).on('click', 'label', function(){
    //     $(this).next('div').css('background', '000000');
    // });
     

// $(document).on('click', '.list_accordion_toggle', function (event) {
//     $(this).toggleClass('list_item collapse').next().toggle();
//     $(this).find('.icon-minus-sign, .icon-plus-sign').toggleClass('icon-minus-sign icon-plus-sign')
// });

    
    // $(document).on('click', 'p', function(){
    //     //$(this).remove();
    //     //$(this).toggleClass('grayedOut');
    //     $(this).css('text-decoration', 'line-through');
    // });


    $(function(){
        // Bind the swiperightHandler callback function to the swipe event on div.box
      $( "p" ).on( "swiperight", swiperightHandler );
     
      // Callback function references the event target and adds the 'swiperight' class to it
      function swiperightHandler( event ){
        $( event.target ).addClass( "grayedOut" );
      }
    });

});




// $(document).ready(function() {

//     $("#button").click(function() {
//         var toAdd = $("input[name=checkListItem]").val();
//         $(".list").append('<div class="item">' + toAdd + '</div>');
//     })
    
//     $(document).on('click', '.item', function() {
//         $(this).remove();
//     })

// })


