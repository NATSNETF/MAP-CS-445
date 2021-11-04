new Promise(function(resolve, reject) {
       setTimeout(() => resolve(1), 1000); // (*)


}).then(function(result) { // (**)  
      alert(result); // 1
    return result * 2;
//not returning 2... it is actully returning new promise  function ///// resolve


}).then(function(result) { // (***)  
     alert(result); // 2
    return result * 2;
//returning new promise(function, resolve )
}).then(function(result) {
       alert(result); // 4
    return result * 2;
});
