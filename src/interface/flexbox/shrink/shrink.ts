/**
 * Controls how much a flex item shrinks when space is constrained ([See also](https://tailwindcss.com/docs/flex-shrink))
 *
 * **Syntax**
 * - `value` → `shrink-value` — applies shrink factor from the **value** scale
 *
 * **Shrink**
 * - `0` → `shrink-0` — disables shrinking
 * - `1` → `shrink-1` — enables shrinking
 *
 * **Custom**
 * - `number` → `shrink-number` — resolved **automatically**
 * - `[value]` → `shrink-[value]` — **arbitrary** fixed shrink factor
 * - `(--value)` → `shrink-(--value)` — shrink factor via **CSS variable**
 *
 * **Usage**
 * ```tsx
 * // Standard shrink factor
 * <Component shrink={1} /> // → shrink-1
 *
 * // Disable shrinking
 * <Component shrink={0} /> // → shrink-0
 *
 * // Arbitrary shrink factor
 * <Component shrink="[calc(100vw-var(--srylius))]" /> // → shrink-[calc(100vw-var(--srylius))]
 *
 * // Dynamic shrink via CSS variable
 * <Component shrink="(--srylius)" /> // → shrink-(--srylius)
 * ```
 *
 * ---
 * _Custom variable (e.g. "--srylius") are supported if defined in your configuration file._
 */
type Shrink = number | `[${string}]` | `(${string})`

// Exports
export type {
  Shrink
}
