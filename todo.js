var ul=document.getElementById('list'); //getting list
var li;

var addbutton=document.getElementById('add'); 
addbutton.addEventListener('click', addItem); //event listener on click

var removebutton=document.getElementById('remove');
removebutton.addEventListener('click',removeItem);

var search=document.getElementById('input');
search.addEventListener('keyup',searchy); //keyup is for when we press ley it search

function addItem()
{
    var input=document.getElementById('input').value;
     var ul=document.getElementById('list');
     var textnode=document.createTextNode(input);

     
     if(input=='')
     {
         alert('Enter value');
        // var p = document.createElement('p');
        // let val = 'please enter node';
        // var label = document.createTextNode(val);
        // p.appendChild(label);
        
     }
     else
     {
         //create li
         li=document.createElement('li');
         //create checkbox
         var checkbox=document.createElement('input');
         checkbox.type='checkbox';
         checkbox.setAttribute('id','check');

         //create label
         var label=document.createElement('label');

         //create edit button
         var edit=document.createElement('button');
         edit.innerHTML="EDIT"
         edit.className="edit";
         //edit.classList.add("edit");
         
         
         //add elements

         //ul.appendChild(label); 
         label.appendChild(textnode);
         li.appendChild(checkbox);
         li.appendChild(label);
         li.appendChild(edit);
         ul.insertBefore(li,ul.childNodes[0]);   

         input.value='';
         
    //      //1st adding textNode to label
    //    label.appendChild(textNode);
    //    //ul.appendChild(label);

    //    //add label and checkbox to li
    //    li.appendChild(checkbox);
    //   li.appendChild(label);
    //    //add these elements on web page
    //   ul.insertBefore(li, ul.childNodes[0]);


     }

}


function removeItem()
{
  li=ul.children
  for(let i=0;i<li.length;i++)
  {
      while(li[i].children[0].checked)
      {
        ul.removeChild(li[i]);
      }
  }
  


}

function searchy()
{
  console.log('hello');
    var val=search.value.toUpperCase();
    var list=document.querySelector('#val-list ul');
    var flist=list.querySelectorAll('li');
    var li =list.querySelectorAll('label');


    for(i=0;i<li.length;i++)
     {
        var a=li[i].textContent;
        var txtvalue = a.toUpperCase();
         if(txtvalue.indexOf(val) > -1)
         {
            flist[i].style.display = "";
        }
        else
        {
            flist[i].style.display = "none";
        }
    }

}
