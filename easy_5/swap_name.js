function swapName(name) {
  let nameArr = name.split(' ');
  nameArr[nameArr.length - 1] += ',';
  return nameArr.reverse().join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"