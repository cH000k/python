const divA = document.querySelector('.aa');



const xpath = "//div[text()='HELLO']"

const matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

console.log(matchingElement);


