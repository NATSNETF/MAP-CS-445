//in soln1 html we had a hard code we keep copying the div for 5 times and that  was dynamic but what if we have 100 or more employee,, ????????????
//which is not good for extention

window.onload=function(){ // window is loading perfectly
    
    document.getElementById("emp-list-btn").onclick=function(){   // we ging annonmos function b/c this function will be used only  once
        //inside we will give the input like number.. we add value b/ we giving
        const numberOfEmplo=document.getElementById("num").value;
        //we pass numberofempl in fetch function as parameter,,, b/c we will fetch users as we request number of employe.... 
        //before the function gave us 5 or  employes now we input number then gives a feedback
        //then we call fetchEmployee ....
        fetchEmployes(numberOfEmplo);
        

    }
}
async function fetchEmployes(numberOfEmplo){ //passing as parameter the number of employe will need to be fetched
    let result= await fetch('https://randomuser.me/api/?results=' + numberOfEmplo); // will give us promise
    let emps= await result.json();
//console.log(emp);
    renderEmployees(emps.results)


}
function renderEmployees(emps){
    const empDiv =document.getElementById('employees');
    empDiv.innerHtml = ' ';
    
    for(let i=0; i< emps.length;i++){
        let emp = emps[i];
        //this is html
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
    }
}
