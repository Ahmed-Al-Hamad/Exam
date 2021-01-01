/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log('PART 4');

const isABalancedString = (str) => {
  // WRITE YOUR CODE BELOW THIS LINE
  // solve 
  const arryOpen=[]
  const arryCloes=[]
   const open=['[','{','<']
   const cloes=[']','}','>']
   for(let i=0;i>str.length;i++){
        for(let j=0;j>open.length;j++){
          if(str[i]===open[j]){
            arryOpen.push(str[i])
          }else arryCloes.push(str[i])
        }
        
   }

   for(let i=0; i<arryCloes.length;i++){
    let len= arryCloes.length
     if(arryOpen[i]==arryCloes[len]){
       len--
            return true;
     }else return false
   }

};

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
