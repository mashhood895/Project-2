    let x=[]
    let y=[]
    let z=[]
    
    function add(){
    
    let first=document.getElementById('first').value
    let second=document.getElementById('second').value
    let third=document.getElementById('third').value
    x.push(first);
    y.push(second);
    z.push(third);
    listshow();
    
    }
    
    function listshow(){
    let list=""
    for(let i=0;i<x.length;i++){
    list+= "<tr><td>"+(i+1)+"</td>"+"<td>"+x[i]+"</td>"+"<td>"+y[i]+"</td>"+"<td>"+z[i]+"</td>"+"<td>"+"<button onclick='del("+i+")'>Delete</button>"+"</td></tr>"
    
    }
    document.getElementById('data').innerHTML=list
    
    }
    
    
    function del(dok){
    x.splice(dok,1)
    y.splice(dok,1)
    z.splice(dok,1)
    listshow();
    }
    x.push('Allegra');
    y.push('120');
    z.push('20');
    listshow();