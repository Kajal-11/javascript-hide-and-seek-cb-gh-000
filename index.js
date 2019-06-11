function getFirstSelector(selector){
  const a= document.querySelector(selector);
  return a;
}

function nestedTarget(){
  const b = document.querySelector("#nested .target");
  return b;
}

function increaseRankBy(n){
  const lis = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < lis.length; i++) {
    const c = parseInt(lis[i].innerHTML, 10);
    lis[i].innerHTML = c+n;
  }
}

function deepestChild(){
  const c = document.querySelector("div#grand-node")
  const d= c;
  for(let j=0; j< 5; j++)
  {
    d = d.querySelector("div");
  }
  return d;
}
