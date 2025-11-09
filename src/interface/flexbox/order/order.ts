/**
 * Controls the visual order of flex or grid items ([See also](https://tailwindcss.com/docs/order))
 *
 * **Syntax**
 * - `value` → `order-value` — applies order from the **value** scale
 * - `-value` → `-order-value` — applies order from the **negative value** scale
 *
 * **Order**
 * - `-1` → `-order-1` — moves item **backward**
 * - `0` → `order-0` — default **numeric order**
 * - `1` → `order-1` — moves item **forward**
 * - `2` → `order-2` — moves item **further forward**
 *
 * **Order (Predefined)**
 * - `none` → `order-none` — default order **(order: 0)**
 * - `first` → `order-first` — forces item to appear first **(order: -9999)**
 * - `last` → `order-last` — forces item to appear last **(order: 9999)**
 *
 * **Custom**
 * - `number` → `order-number` — resolved **automatically**
 * - `[value]` → `order-[value]` — **arbitrary** fixed order
 * - `(--value)` → `order-(--value)` — order via **CSS variable**
 *
 * **Usage**
 * ```tsx
 * // Standard order
 * <Component order={1} /> // → order-1
 *
 * // Default order
 * <Component order={0} /> // → order-0
 *
 * // Negative order (if supported)
 * <Component order={-1} /> // → -order-1
 *
 * // Named order keywords
 * <Component order="first" /> // → order-first
 * <Component order="last" /> // → order-last
 * <Component order="none" /> // → order-none
 *
 * // Arbitrary order value
 * <Component order="[999]" /> // → order-[999]
 *
 * // Dynamic order via CSS variable
 * <Component order="(--srylius)" /> // → order-(--srylius)
 * ```
 *
 * ---
 * _Custom values (e.g. "--srylius") are supported if defined in your configuration file._
 */
type Order =
  | "first"
  | "last"
  | "none"
  | number
  | `[${string}]`
  | `(${string})`

// Exports
export type {
  Order
}
