import type {
  // Shrink
  Shrink,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type ShrinkProps = {
  /**
   * Responsive shrink factor for flex items when space is constrained.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:shrink-value` — applies a **shrink factor** at the given breakpoint
   *
   * **Scale**
   * - `{ shrink: 0 }` → `shrink-0` — disables shrinking
   * - `{ shrink: 1 }` → `shrink-1` — enables shrinking
   *
   * **Custom**
   * - `{ *: number }` → `*:shrink-number` — applies a **scale-based** shrink factor at the given breakpoint
   * - `{ *: "[value]" }` → `*:shrink-[value]` — applies an **arbitrary** shrink factor at the given breakpoint
   * - `{ *: "(--value)" }` → `*:shrink-(--value)` — applies a **CSS variable** shrink factor at the given breakpoint
   *
   * **Usage**
   * ```tsx
   * // Static shrink factor (no media query)
   * <Component shrink={1} /> // → shrink-1
   *
   * // Applies universally across all breakpoints
   * <Component shrink={{ base: 1 }} /> // → shrink-1
   *
   * // Override at specific breakpoints
   * <Component shrink={{ base: 0, sm: 1 }} /> // → shrink-0 sm:shrink-1
   * <Component shrink={{ base: 1, md: 0 }} /> // → shrink-1 md:shrink-0
   * <Component shrink={{ base: 0, lg: 1 }} /> // → shrink-0 lg:shrink-1
   * <Component shrink={{ base: 1, xl: 0 }} /> // → shrink-1 xl:shrink-0
   * <Component shrink={{ base: 0, "2xl": 1 }} /> // → shrink-0 2xl:shrink-1
   *
   * // Override with arbitrary shrink factor
   * <Component shrink={{ base: 1, xl: "[calc(100vw-var(--srylius))]" }} />
   *
   * // Override with CSS variable
   * <Component shrink={{ base: 0, md: "(--srylius)" }} /> // → shrink-0 md:shrink-(--srylius)
   *
   * // Override at multiple breakpoints
   * <Component shrink={{ base: 0, sm: 1, lg: 0 }} /> // → shrink-0 sm:shrink-1 lg:shrink-0
   * ```
   *
   * ---
   * _Custom variable (e.g. "--srylius") are supported if defined in your configuration file._
   */
  shrink?: ResponsiveQuery<Shrink>
}

// Exports
export type {
  // Spacing
  ShrinkProps
}
