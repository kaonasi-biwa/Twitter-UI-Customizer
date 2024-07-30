/**
 * 関数の場合は返り値、そうでない場合は引数そのままを返します。
 *
 * @param {unknwon} functionOrPrimitive 関数もしくはそうでない値
 * @return {unknwon} 返り値もしくはそのままの値
 */
export function getPrimitiveOrFunction<T>(functionOrPrimitive: (() => T) | T): T {
    if (typeof functionOrPrimitive === "function") {
        return (functionOrPrimitive as () => T)();
    } else {
        return functionOrPrimitive;
    }
}
