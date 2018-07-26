/**
 * looping array student untuk akses tiap object
 * declare obj sebagai object kosong
 * dari tiap element kita buat format output ke obj
 * 
 */
function highestScore (students) {
  // Code disini
  var obj = {}
  var arrScore = [], arrName=[], arrClass=[], arrPerClass=[]
  var indexHighScore = 0
  //looping students elemnt

  for (var i =0; i < students.length; i++)
  {
    // find max score per class
    if (typeof obj[students[i].class] == 'undefined')
    {
      obj[students[i].class] = {
        name: '',
        score: 0
      }
    }
    // console.log(obj[students[i].class])
    if (obj[students[i].class].score < students[i].score) {
      obj[students[i].class].score = students[i].score
      obj[students[i].class].name = students[i].name
    }
    // console.log( arrPerClass, 'i ke-', i)
  }
    
  
  return obj
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}