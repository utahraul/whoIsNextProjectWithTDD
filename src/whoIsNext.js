//One possible solution for http://codeforces.com/problemset/problem/82/A using Javascript and TDD.
//Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on. This process continues ad infinitum.
//For example, Penny drinks the third can of cola and the queue will look like this: Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny.
//Write a program that will print the name of a man who will drink the n-th can.
//Note that in the very beginning the queue looks like that: Sheldon, Leonard, Penny, Rajesh, Howard. The first person is Sheldon.
//http://codeforces.com/problemset/problem/82/A

var whoIsNext = function(placeInQueue) {
  var names = [ "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" ];
  var queue = names;
  var position = placeInQueue - 1;

  if (placeInQueue <= 5) {
    console.log("The name of the one who has drunk the drink number " + placeInQueue + " is " + names[position]
        + " .");
    return (names[position]);
  } else {
    for (var i = 0; queue.length < placeInQueue; i++) {
      queue.push(queue[i]);
      queue.push(queue[i]);
    }
    console.log("The name of the one who has drunk the drink number " + placeInQueue + " is: " + queue[i - 1] + " .");
    return (queue[i - 1]);
  }
};

module.exports = whoIsNext;
