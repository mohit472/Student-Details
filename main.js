input_data=()=> {

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
            rows += `<tr><td><input class="c" type="checkbox" /><td>${roll}</td><td>${name}</td><td>${year}</td><td>${stream}</td></tr>`;
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
    delete_data=()=> {
        let t=document.getElementById("tableid");
        let n=t.getElementsByClassName("c");
        for(let i=0;i<=n.length;i++)
        {
            if(n[i].checked)
            {
                tableid.deleteRow(i);
                i--;
                n.length--;
            }
        }
    }

    edit_data=()=>{
        
       /* var i=parseInt(prompt("Which row you want to edit"));
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
            e[1].innerHTML=name;
            e[2].innerHTML=year;
            e[3].innerHTML=stream;
        }*/

       let t=document.getElementById("tableid");
        let n=t.getElementsByClassName("c");
        for(let i=0;i<=n.length;i++)
        {
            if(n[i].checked)
            {
                let rows = "";
                const name=document.getElementById("name1").value;
                const roll=document.getElementById("rollno1").value;
                const year=document.getElementById("year1").value;
                const stream=document.getElementById("stream1").value;
                rows += `<tr><td><input class="c" type="checkbox" /><td>${roll}</td><td>${name}</td><td>${year}</td><td>${stream}</td></tr>`;
                t.deleteRow(i);
                $(rows).appendTo("#tableid");
                //t.replaceChild(rows,t.childNodes[i]);
                /*const e=document.getElementById("tableid").rows[i+1].cells;
                e[1].innerHTML=roll;
                e[2].innerHTML=name ;
                e[3].innerHTML=year;
                e[4].innerHTML=stream;*/
            }
        }
       }