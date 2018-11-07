
// 公共方法

//判断数组对象是否为空
export function isEmpty(v) {
  return (
    (Array.isArray(v) && v.length == 0) || (Object.prototype.isPrototypeOf(v) && Object.keys(v).length == 0)
  );
}
