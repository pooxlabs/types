import type {
  // Order
  Order,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type OrderProps = {
  /**
   * Responsive visual order for flex or grid items.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:order-value` — applies an **order** at the given breakpoint
   *
   * **Scale**
   * - `{ order: "none" }` → `order-none` — default order (`order: 0`)
   * - `{ order: "first" }` → `order-first` — forces item to appear first (`order: -9999`)
   * - `{ order: "last" }` → `order-last` — forces item to appear last (`order: 9999`)
   * - `{ order: 0 }` → `order-0` — default numeric order
   * - `{ order: 1 }` → `order-1` — moves item forward
   * - `{ order: 2 }` → `order-2` — moves item further forward
   * - `{ order: -1 }` → `-order-1` — moves item backward (if negative is enabled)
   *
   * **Custom**
   * - `{ *: number }` → `*:order-number` — applies a **scale-based** order at the given breakpoint
   * - `{ *: "[value]" }` → `*:order-[value]` — applies an **arbitrary** fixed order at the given breakpoint
   * - `{ *: "(--value)" }` → `*:order-(--value)` — applies a **CSS variable** order at the given breakpoint
   *
   * **Usage**
   * ```tsx
   * // Static order (no media query)
   * <Component order={1} /> // → order-1
   *
   * // Named order keywords
   * <Component order="first" /> // → order-first
   * <Component order="last" /> // → order-last
   * <Component order="none" /> // → order-none
   *
   * // Applies universally across all breakpoints
   * <Component order={{ base: 1 }} /> // → order-1
   *
   * // Override at specific breakpoints
   * <Component order={{ base: 0, sm: 1 }} /> // → order-0 sm:order-1
   * <Component order={{ base: "first", md: "last" }} /> // → order-first md:order-last
   * <Component order={{ base: 1, lg: 2 }} /> // → order-1 lg:order-2
   * <Component order={{ base: 0, xl: -1 }} /> // → order-0 xl:-order-1
   * <Component order={{ base: "none", "2xl": 1 }} /> // → order-none 2xl:order-1
   *
   * // Override with arbitrary order value
   * <Component order={{ base: 1, xl: "[999]" }} /> // → order-1 xl:order-[999]
   *
   * // Override with CSS variable
   * <Component order={{ base: 0, md: "(--priority)" }} /> // → order-0 md:order-(--priority)
   *
   * // Override at multiple breakpoints
   * <Component order={{ base: 0, sm: 1, lg: "last" }} /> // → order-0 sm:order-1 lg:order-last
   * ```
   *
   * ---
   * _Custom variable (e.g. "--priority") are supported if defined in your configuration file._
   */
  order?: ResponsiveQuery<Order>
}

// Exports
export type {
  OrderProps
}
