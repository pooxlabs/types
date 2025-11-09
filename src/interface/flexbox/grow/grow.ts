/**
 * Controls how much a flex item grows when extra space is available ([See also](https://tailwindcss.com/docs/flex-grow))
 *
 * **Syntax**
 * - `value` → `grow-value` — applies grow factor from the **value** scale
 *
 * **Grow**
 * - `0` → `grow-0` — disables growing
 * - `1` → `grow-1` — enables growing
 *
 * **Custom**
 * - `number` → `grow-number` — resolved **automatically**
 * - `[value]` → `grow-[value]` — **arbitrary** fixed grow factor
 * - `(--value)` → `grow-(--value)` — grow factor via **CSS variable**
 *
 * **Usage**
 * ```tsx
 * // Standard grow factor
 * <Component grow={1} /> // → grow-1
 *
 * // Disable growing
 * <Component grow={0} /> // → grow-0
 *
 * // Arbitrary grow factor
 * <Component grow="grow-[25vw]" /> // → grow-[25vw]
 *
 * // Dynamic grow via CSS variable
 * <Component grow="(--srylius)" /> // → grow-(--srylius)
 * ```
 *
 * ---
 * _Custom variable (e.g. "--srylius") are supported if defined in your configuration file._
 */
type Grow = number | `[${string}]` | `(${string})`

// Exports
export type {
  Grow
}
