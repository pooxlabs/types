/**
 * Controls whether flex items wrap onto multiple lines ([See also](https://tailwindcss.com/docs/flex-wrap))
 *
 * **Syntax**
 * - `value` → `flex-wrap-value` — applies wrapping behavior from the **value** scale
 *
 * **Wrap**
 * - `wrap` → `flex-wrap` — wraps items to the next line
 * - `nowrap` → `flex-nowrap` — prevents wrapping
 * - `wrap-reverse` → `flex-wrap-reverse` — wraps in reverse direction
 *
 * **Usage**
 * ```tsx
 * // Standard wrapping
 * <Component wrap="wrap" /> // → flex-wrap
 *
 * // No wrapping
 * <Component wrap="nowrap" /> // → flex-nowrap
 *
 * // Reverse wrapping
 * <Component wrap="wrap-reverse" /> // → flex-wrap-reverse
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. "[value]", "(--value)")_
 */
type FlexWrap = "wrap" | "nowrap" | "wrap-reverse"

// Exports
export type {
  FlexWrap
}
