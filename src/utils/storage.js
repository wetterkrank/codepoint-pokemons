const ID_PREFIX = 'codepoint_pokedex';

function isSupportedLS() {
  try {
    const key = "__codepoint_pokedex_testLS__";
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

function lsID(id) {
  return `${ID_PREFIX}_${id}`;
}

export { isSupportedLS, lsID };
