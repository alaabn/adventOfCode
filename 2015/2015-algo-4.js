const crypto = require('crypto');

/*---------------------------------DAY4-EX1-----------------------------------*/

const zeroesHash = function (input, num) {
  let ans = 0;
  const check = new Array(num).fill(0).join('');
  while (true) {
    let hash = crypto
      .createHash('md5')
      .update(input + ans)
      .digest('hex');

    if (hash.substring(0, num) === check) {
      return ans;
      break;
    } else {
      ans++;
    }
  }
};

console.log('DAY4-EX1 :', zeroesHash('yzbqklnj', 5));

/*---------------------------------DAY4-EX2-----------------------------------*/

console.log('DAY4-EX2 :', zeroesHash('yzbqklnj', 6));
