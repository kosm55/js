const button=document.querySelector('.input_container button');
const input=document.querySelector('.input_container input');
const list=document.querySelector('.todo_list');


button.addEventListener('click',()=>{
    const li=document.createElement('li');
    li.className='todo_list_item';
    const deleteBtn=document.createElement('button');
    deleteBtn.innerText='Delete';
    li.innerText=input.value;
    list.appendChild(li);
    li.appendChild(deleteBtn)
    input.value='';

    deleteBtn.addEventListener('click', ()=>{
        list.removeChild(li);
    })
})