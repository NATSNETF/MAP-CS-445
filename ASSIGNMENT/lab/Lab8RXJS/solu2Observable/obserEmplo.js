
const {form}=rxjs;  // this is distructing assignment
// we use form to convert observable....
window.onload=function(){ // window is loading perfectly
    
    document.getElementById("emp-list-btn").onclick=function(){   
        const numberOfEmplo=document.getElementById("num").value;
        
        fetchEmployes(numberOfEmplo);
        

    }
}
async function fetchEmployes(numberOfEmplo){ 
    let result= await fetch('https://randomuser.me/api/?results=' + numberOfEmplo); // will give us promise
    let emps= await result.json();
    renderEmployees(emps.results) //this result is an array which contains random return of employee and using form(emps) can convert observable



}
function renderEmployees(emps){
    const empDiv =document.getElementById('employees');
    empDiv.innerHTML = '';

    form(emps)
    .subscribe(emp => {
        let template =`
        <div class="col">
        ${emp.name.first + " " + emp.name.last}
            </div>
            <div class="col">
                <p class="fw-bold">Location</p>
                <p>${emp.location.street.number} ${emp.location.street.name}</p>
                <p>${emp.location.city} ${emp.location.state} ${emp.location.country} ${emp.location.postcode}</p>
               
            </div>
            <hr>
        `
       //how to create dom those 3 line we creating dom same as html which include all div + template the one it is holding all data + classList--- the row
       let div = document.createElement('div'); //<div></div>
       div.innerHTML = template;//<div>....content is template...</div>
       div.classList='row' //<div class='row'>....content is template...</div>

        empDiv.appendChild(div);//...this child is going to be each part of the div we were copying

    });

}