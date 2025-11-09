import type {
  // Grow
  Grow,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type GrowProps = {
  /**
   * Responsive grow factor for flex items when extra space is available.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:grow-value` — applies a **grow factor** at the given breakpoint
   *
   * **Grow**
   * - `{ grow: 0 }` → `grow-0` — disables **growing**
   * - `{ grow: 1 }` → `grow-1` — enables **growing**
   *
   * **Custom**
   * - `{ *: number }` → `*:grow-number` — applies a **scale-based** grow factor at the given breakpoint
   * - `{ *: "[value]" }` → `*:grow-[value]` — applies an **arbitrary** grow factor at the given breakpoint
   * - `{ *: "(--value)" }` → `*:grow-(--value)` — applies a **CSS variable** grow factor at the given breakpoint
   *
   * **Usage**
   * ```tsx
   * // Static grow factor (no media query)
   * <Component grow={1} /> // → grow-1
   *
   * // Applies universally across all breakpoints
   * <Component grow={{ base: 1 }} /> // → grow-1
   *
   * // Override at specific breakpoints
   * <Component grow={{ base: 0, sm: 1 }} /> // → grow-0 sm:grow-1
   * <Component grow={{ base: 1, md: 0 }} /> // → grow-1 md:grow-0
   * <Component grow={{ base: 0, lg: 1 }} /> // → grow-0 lg:grow-1
   * <Component grow={{ base: 1, xl: 0 }} /> // → grow-1 xl:grow-0
   * <Component grow={{ base: 0, "2xl": 1 }} /> // → grow-0 2xl:grow-1
   *
   * // Override with arbitrary grow factor
   * <Component grow={{ base: 1, xl: "[25vw]" }} /> // → grow-1 xl:grow-[25vw]
   *
   * // Override with CSS variable
   * <Component grow={{ base: 0, md: "(--srylius)" }} /> // → grow-0 md:grow-(--srylius)
   *
   * // Override at multiple breakpoints
   * <Component grow={{ base: 0, sm: 1, lg: 0 }} /> // → grow-0 sm:grow-1 lg:grow-0
   * ```
   *
   * ---
   * _Custom variable (e.g. "--srylius") are supported if defined in your configuration file._
   */
  grow?: ResponsiveQuery<Grow>
}

// Exports
export type {
  GrowProps
}
