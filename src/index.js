module.exports = function count(s, pairs) {
  // your implementation
    var n=1;
    var result = 0;
    s = s.split('');
    for(var i=0; i<pairs.length; i++){
        n *= Math.pow(pairs[i][0],pairs[i][1]);
    }
    function nod(m,n){
        if(n>0){
           var k = m%n;
            return nod(n,k);
           }
        else{
            return Math.abs(m);
        }
    }
    return n/3;
}