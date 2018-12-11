function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  // creates a constant variable that contains all of the elements with the class "ranked-list".

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;
    // This loop iterates over all of the elements within the variable, and

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

// function deepestChild() {
//   return document.querySelector('#grand-node :last-child');
// }
// :last-child only returns <li>! Not divs.

  function deepestChild() {
    let node = document.getElementById('grand-node');
    let nextNode = node.children[0];

    while (nextNode) {
      node = nextNode;
      nextNode = node.children[0];
    }
    return node;
  }
