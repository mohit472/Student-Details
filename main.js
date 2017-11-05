
/*function editdata()
{
    var m=document.getElementById("search_data");
    var input = m.getElementById("myInput");\
    var filter = input.value.toUpperCase();
    var table = document.getElementById("tableid");
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) 
    {
      var td = tr[i].getElementsByTagName("td")[1];
      if (td)
       {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1)
            {
              tr[i].style.display = "";
           }
            else 
            {
              tr[i].style.display = "none";
            }
       }
    }   
}*/
function edit_data(){
  
}




 function delete_data() {
    document.getElementById("myTable").deleteRow(0);
}




function input_data() {
        const row=document.createElement('tr');
        let col1=document.createElement('td');
        let col2=document.createElement('td');
        let col3=document.createElement('td');
        let col4=document.createElement('td');
             row.appendChild(col1);
             row.appendChild(col2);
             row.appendChild(col3);
             row.appendChild(col4);
          
             col1.innerHTML=document.getElementById('roll').value;
             col2.innerHTML=document.getElementById('name').value;
             col3.innerHTML=document.getElementById('year').value;
             col4.innerHTML=document.getElementById('stream').value;
        const table=document.getElementById('tableid');
             table.appendChild(row);
             $("#table tr").click(function () {
               $(this).addClass('selected').siblings().removeClass('selected');
               var value = $(this).find('td:first').html();
               alert(value);
             });

 }