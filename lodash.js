//Lower - Upper Clamp Method
const _ = {
clamp(lower,number,upper) {
  var lowerClamp = Math.max(lower,number);
  var upperClamp = Math.min(upper,lowerClamp);
  return upperClamp;},
//In Range Method 
inRange(num, start, end){
  if (end===undefined){
    end = start
    start = 0 }
  if (start>end) {
    var temp = end
    end = start
    start = temp}
  var isInRange = (num >= start && num < end) 
return isInRange;
},
//Words Method
words(string) {
  var array = string.split(' ')
  return array;
},
//Pad Method
pad(str,len) {
if (len>str.length){
   var reqLen=len-str.length;
    if (reqLen%2===0) {
     var addLen=reqLen/2;
     var begin = ' '.repeat(addLen) + str;
     var ending = begin + ' '.repeat(addLen);
    }
    else {
      var addLen=Math.floor(reqLen/2);
      var begin = ' '.repeat(addLen) + str;
      var ending = begin + ' '.repeat(addLen+1);
    }
     return ending;}
if ((len<=str.length)) {return str;}
  },

has(obj,key){
  if (obj[key]===undefined) {return false}
  else {return true}
},
invert (object){
let newObject = {};
for (let key in object){
const originalValue = object[key];
 newObject[originalValue] = key; 
}
return newObject;
},
/*findKey (object,predicate) {
  for (let key in object){
    let value = object[key];
    let predicateReturnValue = predicate(value);
    if (predicateReturnValue) {return key;};
  };
  undefined
  return undefined;
}*/
drop(array,number){ 
  if (number===undefined) {number=1;}
  let newArray= [];
  newArray=array.slice(number);
  return newArray;
},
/*dropWhile(array,predicate) {
  const cb = (element,index)=> {return     !predicate(element,index,array);};
                                
  let dropNumber = array.findIndex(cb);
  let droppedArray=this.drop(array,dropNumber);
  return droppedArray;
},*/
chunk(array,size){
  if (size===undefined) {size=1}
  let arrayChunks=[];  
  for (let i=0; i< array.length; i+=size) {
    let arrayChunk= array.slice(i,i+size);
    arrayChunks.push(arrayChunk);}
    return arrayChunks;
  }
};

console.log(_.chunk([4,3,6,8,7,8,9,12],4));
console.log(_.clamp(4,3,6));
console.log(_.inRange(2,1,4)); 
console.log(_.words('Deneme bir ki'));
console.log(_.pad('car',40));
console.log(_.has({'cat':3},'cat'));

var obj1 = { 'a': '1', 'c': '1', 'b': '2' };
console.log(_.invert(obj1));

/*var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
}; 
console.log(_.findKey(users, { 'age': 1, 'active': true }));
const arr_1=[1,2,3,4,5]
console.log(_.dropWhile(arr_1,arr_1[2]===2));*/

console.log(_.drop([1, 2, 3,4,5,6], 3));
console.log(_.drop([1, 2, 3,4,5,6]));


// Do not write or modify code below this line.
module.exports = _;
