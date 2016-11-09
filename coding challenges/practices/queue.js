const processData = (input) => {
  let arr = input.split("\n");
  let q = Number(arr.shift());

  let queue = [];

  for (let i = 0; i < q; i++) {
    switch (arr[i][0]) {
      case '1':
        let x = arr[i].split(" ")[1];
        queue.push(x);
        break;
      case '2':
        queue.shift();
        break;
      case '3':
        console.log(queue[0]);
        break;
    }
  }
};

let input = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;

processData(input);
