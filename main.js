function input_data() {

        const i=1;
        let rows = "";
        const name = document.getElementById("name").value;
        const roll = document.getElementById("rollno").value;
        const year = document.getElementById("year").value;
        const stream = document.getElementById("stream").value;

        if(name == null || /[^a-zA-Z]/.test(name))
                alert("Enter correct Name");
        else if( roll == null || /[^0-9]/.test(roll))
                alert("Enter correct roll number");
        else if(year == null || /[^0-9]/.test(year))
                alert("Enter correct Year");
        else if( stream == null || /[^a-zA-Z]/.test(stream))
                alert("Enter correct Stream");
        else if(name!= null && name.trim() !== '' && roll!= null && roll.trim() !== '' && year!= null && year.trim() !== '' && stream!= null && stream.trim() !== '')
        {
            rows += `<tr><td>${roll}</td><td>${name}</td><td>${year}</td><td>${stream}</td></tr>`;
            $(rows).appendTo("#tableid");
        }
        else 
        {
            alert("Donot leave any field empty");
            alert("Enter Details of Student");
        }

        document.getElementById("rollno").value = "";
        document.getElementById("name").value = "";
        document.getElementById("year").value = "";
        document.getElementById("stream").value = "";
    }
    function delete_data() {
        const i = prompt("enter the row number which you want to delete ");
        let t = document.getElementsByTagName('tr');
        if(i<1 || i>t.length+1)
        alert('No such row no. exists');
        else
        document.getElementById("tableid").deleteRow(i-1);
    }

    function edit_data(){
        var i=parseInt(prompt("Which row you want to edit"));
        let A = document.getElementsByTagName('tr');
        if(i<1 || i>A.length+1)
            alert('No such row no. exists');
        else
        {
            const name=document.getElementById("name1").value;
            const roll=document.getElementById("rollno1").value;
            const year=document.getElementById("year1").value;
            const stream=document.getElementById("stream1").value;
            const e=document.getElementById("tableid").rows[i+1].cells;
            e[0].innerHTML=roll;
            e[1].innerHTML=name ;
            e[2].innerHTML=year;
            e[3].innerHTML=stream;
        }
       }