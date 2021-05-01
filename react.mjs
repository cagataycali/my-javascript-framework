export const render = (element, container) => {
  container.appendChild(element)
}

export const createElement = (type, props, children) => {
  console.log(type, props);
  const node = document.createElement(type)
  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      node[key] = value
    });
  }
  if (!children) {
    return node
  }
  if (typeof children === 'string') {
    const textNode = document.createTextNode("")
    textNode['nodeValue'] = children
    node.appendChild(textNode)
  } else {
    node.appendChild(children)
  }
  return node
}

export default {
  render,
  createElement
}