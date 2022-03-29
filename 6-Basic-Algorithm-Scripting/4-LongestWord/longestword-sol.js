function longestWordLength(str) {
  let start = 0;
  let end = 0;
  let max = 0;
  let range = [];

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ' ') end = i;
    if (str[i] === ' ' && start === 0) {
      end = i;
      max = end - start;
      range = [end, start];
      start = i + 1;
    }
    if ((str[i] === ' ' && start !== 0) || i === str.length) {
      end = i;
      if (end - start > max) {
        max = end - start;
        range = [end, start];
      }
      start = i + 1;
      end = 0;
    }
  }

  return str.substring(range[1], range[0]);
}
//s:0 e:3, s:3 e:8, s:8 :13,
console.log(longestWordLength('T aa bbb'));
