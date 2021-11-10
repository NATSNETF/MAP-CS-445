window.onload = function (){
    document.getElementById('btn').onclick = function(){
       fetch('https://jsonplaceholder.typicode.com/users/1')
    //    .then(response => console.log(response));// 
    //    //1st the promise.returned by fetch getting response or resolves with an object of the built-in response class as soon as the server responds with headers.
    .then(response => response.json())//step 2. 
    .then(data => console.log(data.username,data.email))//second. to get the response body ,we need to use an additional method call.data.username...we get the name of the user we pick

    }

}