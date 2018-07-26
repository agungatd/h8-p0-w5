function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var obj = {
    penumpang: '',
    naikDari: '',
    tujuan: '',
    bayar: 0
    }
  var res = []

    for (var i = 0; i < arrPenumpang.length; i++)
    {
      // res.push()
      obj = {}

      obj.penumpang = arrPenumpang[i][0]
      obj.naikDari = arrPenumpang[i][1]
      obj.tujuan = arrPenumpang[i][2]
      obj.bayar = 2000 * ( rute.indexOf(obj.tujuan) - rute.indexOf(obj.naikDari) )

      res.push(obj)
    }
  return res
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]