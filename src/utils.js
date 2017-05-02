// @flow

export function addEvent (event: string, cb: Function) {
  window.addEventListener(event, cb, false);
  return () => window.removeEventListener(event, cb, false);
}
