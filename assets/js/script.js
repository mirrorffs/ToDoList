document.getElementById('deleteButton').addEventListener('click',function(){
    let checkedVal=document.querySelectorAll('.delete-checkbox:checked')
    let checkedArr=[]
    for(let i of checkedVal){
        
        let id=i.getAttribute('id')
        console.log(id)
        checkedArr.push(id);
    }
    if(checkedArr.length==0){
        swal('No list item seleted to be deleted')
        return
    }
    $.ajax({
        url: '/delete-todo/?id='+checkedArr,
        method: "POST",
        success:function(){
            swal('deleted successfully')
            .then(()=>{
                window.location = '/';
            })
        },
        error:function(error){
            console.log(error)
        }
})
})