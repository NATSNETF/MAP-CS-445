//in soln1 html we had a hard code we keep copying the div for 5 times and that  was dynamic but what if we have 100 or more employee,, ????????????
//which is not good for extention

window.onload=function(){
    fetchEmployes();
    document.getElementById('refresh').onclick = fetchEmployes;
}
async function fetchEmployes(){
    let result= await fetch('https://randomuser.me/api/?results=10'); // will give us promise
    let emps= await result.json();
//console.log(emp);
    renderEmployees(emps.results)


}
function renderEmployees(emps){
    const empDiv =document.getElementById('employees');
    
    for(let i=0; i< emps.length;i++){
        let emp = emps[i];
        //this is html
        let template =`
        <div class="col-4">
                <img src="${emp.picture.large}"/>
            </div>
            <div class="col-8 text-end">
                <p class="fw-bold">"${emp.name.first + " " + emp.name.last}</p>
                <p>Gender:"${emp.gender}"</p>
                <p>email:"${emp.email}"</p>
            </div>
            <hr>
        `
       //how to create dom those 3 line we creating dom same as html which include all div + template the one it is holding all data + classList--- the row
       let div = document.createElement('div'); //<div></div>
       div.innerHTML = template;//<div>....content is template...</div>
       div.classList='row' //<div class='row'>....content is template...</div>

        empDiv.appendChild(div);//...this child is going to be each part of the div we were copying
    }
}
