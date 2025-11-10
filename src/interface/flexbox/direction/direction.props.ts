import type {
  // Direction
  FlexDirection,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type FlexDirectionProps = {
  /**
   * Responsive direction of flex items within a container.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:flex-value` — applies a **flex direction** at the given breakpoint
   *
   * **Direction**
   * - `{ *: "row" }` → `flex-row` — horizontal layout
   * - `{ *: "row-reverse" }` → `flex-row-reverse` — horizontal reversed
   * - `{ *: "col" }` → `flex-col` — vertical layout
   * - `{ *: "col-reverse" }` → `flex-col-reverse` — vertical reversed
   *
   * **Usage**
   * ```tsx
   * // Static direction (no media query)
   * <Component direction="row" /> // → flex-row
   *
   * // Applies universally across all breakpoints
   * <Component direction={{ base: "col" }} /> // → flex-col
   *
   * // Override at specific breakpoints
   * <Component direction={{ base: "row", sm: "col" }} /> // → flex-row sm:flex-col
   * <Component direction={{ base: "col", md: "row-reverse" }} /> // → flex-col md:flex-row-reverse
   * <Component direction={{ base: "row", lg: "col-reverse" }} /> // → flex-row lg:flex-col-reverse
   * <Component direction={{ base: "col", xl: "row" }} /> // → flex-col xl:flex-row
   * <Component direction={{ base: "row", "2xl": "col" }} /> // → flex-row 2xl:flex-col
   *
   * // Override at multiple breakpoints
   * <Component direction={{ base: "col", sm: "row", lg: "col-reverse" }} /> // → flex-col sm:flex-row lg:flex-col-reverse
   * ```
   *
   * ---
   * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
   */
  direction?: ResponsiveQuery<FlexDirection>
}

// Exports
export type {
  FlexDirectionProps
}
