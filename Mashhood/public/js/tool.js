let x=[]
let y=[]

function add(){

let first=document.getElementById('first').value
let second=document.getElementById('second').value
x.push(first);
y.push(second);
listshow();
}

function listshow(){
let list=""
for(let i=0;i<x.length;i++){
list+= "<tr><td>"+(i+1)+"</td>"+"<td>"+x[i]+"</td>"+"<td>"+y[i]+"</td><td>"+"<button onclick='del("+i+")'>Delete</button>"+"</td></tr>"

}
document.getElementById('data').innerHTML=list

}

function del(dok){
x.splice(dok,1)
y.splice(dok,1)
listshow();
}

x.push('stretcher');
y.push('10');
// listshow();