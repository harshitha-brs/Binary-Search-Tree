// Define the TreeNode class to represent each node in the binary tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Function to insert a new node into the binary search tree
function insertNode(root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    root.left = insertNode(root.left, val);
  } else {
    root.right = insertNode(root.right, val);
  }

  return root;
}

// Function to check if the binary tree is a valid BST
const isValidBST = function(root) {
  let output = true;
  const loop = (tree, min, max) => {
    if (
      tree.val > min ||
      (min === undefined && tree.val < max) ||
      max === undefined
    ) {
      if (tree.left) {
        loop(tree.left, min, tree.val);
      }
      if (tree.right) {
        loop(tree.right, tree.val, max);
      }
    } else {
      output = false;
    }
  };

  loop(root);

  return output;
};

document.getElementById("submit").addEventListener("click", function() {
  const input = document.getElementById("intervalsInput").value;
  const values = JSON.parse(input);
  let root = null;
  values.forEach(val => {
    root = insertNode(root, val);
  });

  const output = isValidBST(root);
  document.getElementById("output").innerHTML = output ? "true" : "false";
});
