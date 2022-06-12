// let list = $('.list');
// let li = $('<li></li>');

// $('input').each(function(i){
//     let inputValue = $(this).val();
//     let inputName = $(this).attr('name');
//     if(inputValue.length<1){
//         console.log('Please fill out the ' + inputName + ' field')
//     }
//     li.append(inputValue);
// });


// list.append(li);



// li.addClass("delete");

// $('input').on('click',function(){
//     li.addClass("strike");
// })

// $('input').off('click');

function newItem(){

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    
    if(inputValue === ''){
        alert("You must write something!");
    }else{
        $('#list').append(li);
    }
    
    li.on("dblclick", function(){
        li.toggleClass("strike");
    })
    
    let crossOutButton = $('<crossOutButton></crossOutButton>')
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton)
    
    crossOutButton.on("click",function(){
        li.addClass("delete")
    })
    
    $('#list').sortable();
    
    }
    