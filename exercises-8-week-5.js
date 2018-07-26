function cariPelaku(str) {
  // you can only write your code here!
  var arr = str.match(/abc/gi)
  var res=0
// console.log(arr)
  for ( var i = 0 ; i < arr.length; i++)
  {
    res += 1
  }
   
  return res
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2