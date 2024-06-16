let elements = new Map();

export function elementsHasKey(key) {
  return elements.has(key);
};

export function setElements(value, key) {
  elements[key] = value;
};

export function getElements(key) {
  return elements[key];
};
