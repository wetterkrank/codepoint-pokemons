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

export { isSupportedLS };
