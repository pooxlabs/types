/**
 * Controls the direction of flex items within a container ([See also](https://tailwindcss.com/docs/flex-direction))
 *
 * **Syntax**
 * - `value` → `flex-value` — applies direction from the **value** scale
 *
 * **Direction**
 * - `row` → `flex-row` — horizontal layout
 * - `row-reverse` → `flex-row-reverse` — horizontal reversed
 * - `col` → `flex-col` — vertical layout
 * - `col-reverse` → `flex-col-reverse` — vertical reversed
 *
 * **Usage**
 * ```tsx
 * // Horizontal layout
 * <Component direction="row" /> // → flex-row
 *
 * // Horizontal reversed
 * <Component direction="row-reverse" /> // → flex-row-reverse
 *
 * // Vertical layout
 * <Component direction="col" /> // → flex-col
 *
 * // Vertical reversed
 * <Component direction="col-reverse" /> // → flex-col-reverse
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type FlexDirection = "row" | "row-reverse" | "col" | "col-reverse"

// Exports
export type {
  FlexDirection
}
