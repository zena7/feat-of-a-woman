function addClass(node, className) {
  node.classList.add(className);
}

const removeClass = (node, className) => node.classList.remove(className);

export { addClass, removeClass };
