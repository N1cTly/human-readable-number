module.exports = function toReadable (number) {
  let n = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  let d = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let dd = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  let k = Math.trunc(number / 100);
  let result = '';
  if (k !== 0){
    if (number % 100 === 0){
        result = n[k] + ' hundred';
        return result;
    } else {
        result = n[k] + ' hundred';
        k = number % 100;
        if (k < 20){
            if (k >= 10){
                k = k % 10;
                result = `${result}` + ' ' + d[k];
                return result;
            } else {
                result = `${result}` + ' ' + n[(k % 10)];
                return result;
            }
        } else {
            var k1 = Math.trunc(k / 10);
            result = `${result}` + ' ' + dd[k1 - 2];
            if ( k % 10 !== 0) {
                result = `${result}` + ' ' + n[(k % 10)];
                return result;
            }
            else 
            return result;
        }
    }
  } else
  k = Math.trunc(number % 100);
  if (k < 20){
    if (k >= 10){
        k = k % 10;
        result = d[k];
        return result;
    } else {
        result = n[(k % 10)];
        return result;
    }
  } else {
        var k1 = Math.trunc(k / 10);
        result = dd[k1 - 2];
        if ( k % 10 !== 0) {
            result = `${result}` + ' ' + n[(k % 10)];
            return result;
        }
        else 
        return result;
    }
}
