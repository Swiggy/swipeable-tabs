/**
 * @param object
 * @param path
 * @param defaultVal
 * Gets the value at path of object.
 * If the resolved value is undefined, the defaultVal is returned in its place.
 * Path can be passed in one of the below notations:
 * Example:
 * object = {a:[{b:{c:4}}]}
 *
 * path: ['a',0,'b'] ==> {c:4}
 * path: "a.1.b.c" ==> defaultVal
 * path: ["a", 0, "b", "c"] ==> 3
 * path: "a.0.b.c" ==> 3
 * path: "a[0]b.c" ==> 3
 * path: "a[0].b.c" ==> 3
 */

type ObjectType = Array<any> | { [key: string]: any } | undefined;

function getProp(
  object: ObjectType,
  path: Array<string | number> | string,
  defaultVal?: any
) {
  const _path = Array.isArray(path)
    ? path
    : path.split(/[.[\]]/g).filter(i => i.length);

  if (!_path.length || typeof object === "undefined" || !object) {
    return typeof object === "undefined" || object === null
      ? defaultVal
      : object;
  }

  return getProp(object[_path.shift() as string | number], _path, defaultVal);
}

export default getProp;
