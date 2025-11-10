import type {
  // Wrap
  FlexWrap,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type FlexWrapProps = {
  /**
   * Responsive wrapping behavior of flex items.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:flex-wrap-value` — applies a **wrap mode** at the given breakpoint
   *
   * **Wrap**
   * - `{ *: "wrap" }` → `flex-wrap` — wraps items to the next line
   * - `{ *: "nowrap" }` → `flex-nowrap` — prevents wrapping
   * - `{ *: "wrap-reverse" }` → `flex-wrap-reverse` — wraps in reverse direction
   *
   * **Usage**
   * ```tsx
   * // Static wrap (no media query)
   * <Component wrap="wrap" /> // → flex-wrap
   *
   * // Applies universally across all breakpoints
   * <Component wrap={{ base: "nowrap" }} /> // → flex-nowrap
   *
   * // Override at specific breakpoints
   * <Component wrap={{ base: "wrap", sm: "nowrap" }} /> // → flex-wrap sm:flex-nowrap
   * <Component wrap={{ base: "nowrap", md: "wrap-reverse" }} /> // → flex-nowrap md:flex-wrap-reverse
   * <Component wrap={{ base: "wrap", lg: "wrap-reverse" }} /> // → flex-wrap lg:flex-wrap-reverse
   * <Component wrap={{ base: "nowrap", xl: "wrap" }} /> // → flex-nowrap xl:flex-wrap
   * <Component wrap={{ base: "wrap", "2xl": "nowrap" }} /> // → flex-wrap 2xl:flex-nowrap
   *
   * // Override at multiple breakpoints
   * <Component wrap={{ base: "wrap", sm: "nowrap", lg: "wrap-reverse" }} /> // → flex-wrap sm:flex-nowrap lg:flex-wrap-reverse
   * ```
   *
   * ---
   * _Arbitrary values and CSS variables are not supported (e.g. "[value]", "(--value)")_
   */
  wrap?: ResponsiveQuery<FlexWrap>
}

// Exports
export type {
  FlexWrapProps
}
