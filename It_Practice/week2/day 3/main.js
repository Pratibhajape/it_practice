// function myFunction(list){
//     var text = document.getElementById("name","roll_name","email").value; 
//     console.log(data);
//     var list = document.createElement("list");
//     item.innerText = data;
//     document.getElementById("list").appendChild(list);
//   }

  document.getElementById("add").onclick = function() {
    
    var text = document.getElementById("idea").value; 

   
    var li = "<li>" + text + "</li>";
    document.getElementById("list").appendChild(li);
}