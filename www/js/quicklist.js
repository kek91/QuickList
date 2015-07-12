$(document).bind("pageinit", function() {

    // Populating existing tasks from localStorage
    for (var i = 0; i < localStorage.length; i++){
        var todoEntry = localStorage.getItem(localStorage.key(i));
        if(todoEntry != "undefined") {
            if(todoEntry.indexOf('||1||') == 0) {
                var todoEntryText = todoEntry.replace('||1||', '');
                $('#todolist').append('<label><input type="checkbox" name="todo[]" value="'+todoEntry+'">'+todoEntryText+'</label>');  
            }
            else {
                var todoEntryText = todoEntry.replace('||2||', '');
                $('#todolist2').append('<label><input type="checkbox" name="todo[]" value="'+todoEntry+'">'+todoEntryText+'</label>');  
            }
        }
        $('input[type=checkbox]').checkboxradio().trigger('create');
    }




    /* Todo list 1 */
    $('form#todo_add').submit(function(event){
        event.preventDefault();
        var data = '||1||' + $('input[name=todo_add_item]').val().trim();
        var dataText = $('input[name=todo_add_item]').val().trim();
        if(!data) {
            alert("Text input cannot be empty.");
        }
        else if (localStorage.getItem(data)) {
            alert("This entry already exists");
        }
        else {
            localStorage.setItem(data, data);
            $('#todolist').append('<label><input type="checkbox" name="todo[]" value="'+data+'">'+dataText+'</label>');
            $('input[type=checkbox]').checkboxradio().trigger('create');
            $('input[name=todo_add_item]').val("");
            $('input[name=todo_add_item]').blur();
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

    // And then the same code again, but this time for the second todo list.

    /* Todo list 2 */
    $('form#todo_add2').submit(function(event){
        event.preventDefault();
        var data = $('input[name=todo_add_item2]').val().trim();
        var dataText = $('input[name=todo_add_item2]').val().trim();
        if(!data) {
            alert("Text input cannot be empty.");
        }
        else if (localStorage.getItem(data)) {
            alert("This entry already exists");
        }
        else {
            localStorage.setItem(data, data);
            $('#todolist2').append('<label><input type="checkbox" name="todo[]" value="||2||'+data+'">'+dataText+'</label>');
            $('input[type=checkbox]').checkboxradio().trigger('create');
            $('input[name=todo_add_item2]').val("");
            $('input[name=todo_add_item2]').blur();
        }
    });
    $('#todo_clean2').click(function(){
        var selected = [];
        $('#todolist2 input:checked').each(function() {
            $(this).prev('label').remove();
            $(this).remove();
            localStorage.removeItem($(this).val());
        });
    });

    // On a totally unrelated subject, I wonder what DRY means.



    // Note, this deletes everything in localStorage, meaning both todo lists will be deleted
    $('#todo_delete_confirmed').click(function(){
        $('#todolist').html("");
        $('#todolist2').html("");
        localStorage.clear();
    });


});