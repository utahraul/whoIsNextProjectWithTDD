//Sheldon, Leonard,Penny, Rajesh y Howard llegan a una máquina de bebidas,
//se ponen en cola y cada vez que uno bebe una bebida de la máquina, se clona y los dos clones se ponen a la cola al final
// http://codeforces.com/problemset/problem/82/A

var whoIsNext = function (placeInQueue) {
  var names = ["Sheldon","Leonard","Penny","Rajesh","Howard"];
  var queue = names;
  if (placeInQueue <= 5) {
    console.log("En el número " + placeInQueue + " está" + names[placeInQueue] + " que no ha bebido aún" );
    return(names[placeInQueue]);
  }
  else {

  for(i=0; queue.length < placeInQueue; i ++){
    queue.push(queue[i]);
    queue.push(queue[i]);
  }
  console.log("Si Sheldon, Leonard,Penny, Rajesh y Howard llegan a una máquina de bebidas, se ponen en cola y cada vez que uno bebe una bebida de la máquina, se clona y los dos clones se ponen a la cola al final, en el número " + placeInQueue + " está: " + queue[i-1]);
  return(queue[i-1]);
}
}