function validParentheses(s) {
  let stack = [];

  for (c of s) {
    if (c === "(") {
      stack.push(")")
    } else if (c === "[") {
      stack.push("]")
    } else if (c === "{") {
      stack.push("}")
    } else {
      const inThere = stack.pop() === c
      if (!inThere) {
        return false
      }
    }
  }

  return stack.length === 0;
}

validParentheses('()');