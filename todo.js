var ul=document.getElementById('list');
var li;

var addbutton=document.getElementById('add');
addbutton.addEventListener('click', addItem); 

var removebutton=document.getElementById('remove');
removebutton.addEventListener('click',removeItem);

function addItem()
{
    var input=document.getElementById('input').value;
     var ul=document.getElementById('list');
     var textnode=document.createTextNode(input);
     
     if(input=='')
     {
        // let p = document.getElementById('p')
        // let val = 'please enter node'
        // let label = document.createTextNode(val)
        // p.appendChild(label)
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
         
         //add elements

        //  ul.appendChild(label); 
        //  li.appendChild(checkbox);
        //  label.appendChild(textnode);
        //  li.appendChild(label);
        //  ul.insertBefore(li,ul.childNodes[0]); 
        //  input.value='';
         
         //1st adding textNode to label
       label.appendChild(textNode);
       //ul.appendChild(label);

       //add label and checkbox to li
       li.appendChild(checkbox);
      li.appendChild(label);
       //add these elements on web page
      ul.insertBefore(li, ul.childNodes[0]);


     }

}


function removeItem()
{
  li=ul.children
  for(let i=0;i<li.length;i++)
  {
      while(li[i] && li[i].children[0].checked)
      {
        ul.removeChild(li[i]);
      }
  }
  


}