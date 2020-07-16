 function staggeredCase(str){
   let count;
   return str.split('').map(char => {
     if (/[a-z]/i.test(char)) {
      count = count + 1 || 0;
      return count % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
     } else {
      return char;
     }
   }).join('');
 }

 console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
 console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
 console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
 
