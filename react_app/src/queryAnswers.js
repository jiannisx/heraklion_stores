let queryAnswers = new Map();

export function queryAnswersHasKey(key) {
  return queryAnswers.has(key);
};

export function queryAnswersSet(value, key) {
  queryAnswers.set(key, value);
};

export function queryAnswersGet(key) {
  return queryAnswers.get(key);
};
