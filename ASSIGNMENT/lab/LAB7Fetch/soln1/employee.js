window.onload=function(){
    fetchEmployes();
     document.getElementById('refresh').onclick = fetchEmployes;
}
async function fetchEmployes(){
    let result= await fetch('https://randomuser.me/api/?results=5'); // will give us promise
    let emps= await result.json();
//console.log(emp);
    renderEmployees(emps.results)

}
function renderEmployees(emps){
    for(let i=0; i< emps.length;i++){
        let emp = emps[i];
        // console.log(emp.gender);
        // console.log(emp.name.first + " " + emp.name.last);
        // console.log(emp.email);
        // console.log(emp.picture.large);
        document.getElementById('img'+ i).src = emp.picture.large;
        document.getElementById('person-name-' + i).textContent = emp.name.first + " " + emp.name.last;
        document.getElementById('gender'+ i).textContent ='Gender:' + emp.gender;
        document.getElementById('email'+ i).textContent = emp.email;
       
        
    }
}
