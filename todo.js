var listeDOM = document.querySelector('#list');
var taskDOM = document.querySelector('#task');
var alertDOM = document.querySelector('#alert');
var isCheck = "";


var newElement = () => {
    var taskID= Math.floor(Math.random()*10000);
    var hazır =localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')): [];
    var node = [taskID,taskDOM.value,isCheck];

    hazır.unshift(node);
    localStorage.setItem('todo', JSON.stringify(hazır));
    taskDOM.value="";
    getElement();
    alertDOM.innerHTML = `<div class="alert alert-success mt-1" role="alert">Görev Eklendi    </div>`;
    setTimeout(()=>{  alertDOM.innerHTML="";   }, 3000);

}

var getElement = () =>{
    listeDOM.innerHTML = "";
    var hazır =JSON.parse(localStorage.getItem('todo'));
    //console.log(hazır[0]);
    hazır.forEach(element => {
      listeDOM.innerHTML = listeDOM.innerHTML + ` 
        <li class="list-group-item">
        <input class="form-check-input" type="checkbox" onclick="updateStatus(${element[0]})" value="" id="flexCheckChecked" ${element[2]}>
        <label class="form-check-label mx-3" for="flexCheckChecked">
          ${element[1]}
        </label>
        <span class="badge bg-danger rounded-pill float-end" onclick="deleteElement(${element[0]})" role="button">Sil</span>  
        </li>`
    });
}
getElement();

var updateStatus = (t_id) =>{
    //console.log(t_id);
    alertDOM.innerHTML = `<div class="alert alert-warning mt-1" role="alert"> Görev Güncellendi </div>`;
    setTimeout(()=>{  alertDOM.innerHTML="";   }, 3000);
    var hazır =JSON.parse(localStorage.getItem('todo'));
    hazır.forEach((task,index) =>{
        if(task[0] == t_id){
          // console.log(task,id,task[0]);
          
          if(task[2] == "checked"){ 
              task[2] = ""; 
          }else{
              task[2] ="checked"; 
          }
        }
        localStorage.setItem('todo', JSON.stringify(hazır));
    })
    getElement();
}

var deleteElement =(t_id)=>{
  alertDOM.innerHTML = `<div class="alert alert-danger mt-1" role="alert"> Görev silindi </div>`;
  setTimeout(()=>{  alertDOM.innerHTML="";   }, 3000);
  
  //console.log(t_id);
  getElement();
  var hazır =JSON.parse(localStorage.getItem('todo'));
  hazır.forEach((task,index) =>{
      if(task[0] == t_id){
        // console.log(task,id,task[0]);
        hazır.splice(index,1);
        
      }
      localStorage.setItem('todo', JSON.stringify(hazır));
  })
  getElement();
}