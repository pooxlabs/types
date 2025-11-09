import type {
  // Place
  Place,
  PlaceContent,
  PlaceItem,
  PlaceSelf,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type PlaceProps = {
  /**
   * Responsive bidirectional alignment group for layout control.
   *
   * **Syntax**
   * - `{ target: "*" }` → `place-target-*` — applies **target** static alignment
   * - `{ *: { target: "*" }}` → `*:place-target-*` — responsive alignment per breakpoint
   *
   * **Alignment**
   * - `{ *: { content: "*" }}` → `*:place-content-*` — alignment of content blocks
   * - `{ *: { items: "*" }}` → `*:place-items-*` — alignment of items within the container
   * - `{ *: { self: "*" }}` → `*:place-self-*` — alignment override for individual item
   *
   * **Usage**
   * ```tsx
   * // Static alignment
   * <Component place={{ content: "center", items: "stretch", self: "auto" }} />
   *
   * // Applies universally across all breakpoints
   * <Component place={{ base: { content: "start", items: "center", self: "end" } }} />
   *
   * // Override at specific breakpoints
   * <Component place={{
   *   content: { base: "start", sm: "between", md: "evenly" },
   *   items: { lg: "center-safe" },
   *   self: { xl: "end-safe" }
   * }} />
   *
   * // Mixed static and responsive
   * <Component place={{ content: "around", items: { sm: "stretch", lg: "center" }, self: "auto" }} />
   *
   * // Override at multiple breakpoints
   * <Component place={{ base: { items: "start" }, sm: { items: "center" }, lg: { items: "stretch" } }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  place?: ResponsiveQuery<Place>

  /**
   * Responsive bidirectional alignment of content blocks within flex or grid containers.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:place-content-value` — applies content-level alignment at the given breakpoint
   *
   * **Alignment**
   * - `{ *: "center" }` → `*:place-content-center` — centers content both horizontally and vertically
   * - `{ *: "center-safe" }` → `*:place-content-center-safe` — centers safely, avoiding overflow
   * - `{ *: "start" }` → `*:place-content-start` — aligns content to the top-left corner
   * - `{ *: "end" }` → `*:place-content-end` — aligns content to the bottom-right corner
   * - `{ *: "end-safe" }` → `*:place-content-end-safe` — end alignment with overflow safety
   * - `{ *: "between" }` → `*:place-content-between` — equal spacing between content blocks
   * - `{ *: "around" }` → `*:place-content-around` — spacing with outer margins
   * - `{ *: "evenly" }` → `*:place-content-evenly` — equal gaps including edges
   * - `{ *: "baseline" }` → `*:place-content-baseline` — aligns to text baseline
   * - `{ *: "stretch" }` → `*:place-content-stretch` — fills container space
   *
   * **Usage**
   * ```tsx
   * // Static alignment (no media query)
   * <Component placeContent="center" />
   *
   * // Applies universally across all breakpoints
   * <Component placeContent={{ base: "start" }} />
   *
   * // Override at specific breakpoints
   * <Component placeContent={{ base: "start", sm: "center" }} />
   * <Component placeContent={{ base: "center", md: "between" }} />
   * <Component placeContent={{ base: "around", lg: "evenly" }} />
   * <Component placeContent={{ base: "stretch", xl: "end-safe" }} />
   * <Component placeContent={{ base: "baseline", "2xl": "center-safe" }} />
   *
   * // Override at multiple breakpoints
   * <Component placeContent={{ base: "center", sm: "start", lg: "stretch" }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  placeContent?: ResponsiveQuery<PlaceContent>

  /**
   * Responsive bidirectional alignment of individual items within flex or grid containers.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:place-items-value` — applies item-level alignment at the given breakpoint
   *
   * **Alignment**
   * - `{ *: "start" }` → `*:place-items-start` — aligns item to the top-left corner
   * - `{ *: "end" }` → `*:place-items-end` — aligns item to the bottom-right corner
   * - `{ *: "end-safe" }` → `*:place-items-end-safe` — end alignment with overflow safety
   * - `{ *: "center" }` → `*:place-items-center` — centers item on both axes
   * - `{ *: "center-safe" }` → `*:place-items-center-safe` — centers safely, avoiding overflow
   * - `{ *: "baseline" }` → `*:place-items-baseline` — aligns to text baseline
   * - `{ *: "stretch" }` → `*:place-items-stretch` — fills container space
   *
   * **Usage**
   * ```tsx
   * // Static alignment (no media query)
   * <Component placeItems="center" />
   *
   * // Applies universally across all breakpoints
   * <Component placeItems={{ base: "start" }} />
   *
   * // Override at specific breakpoints
   * <Component placeItems={{ base: "start", sm: "center" }} />
   * <Component placeItems={{ base: "center", md: "end-safe" }} />
   * <Component placeItems={{ base: "stretch", lg: "baseline" }} />
   * <Component placeItems={{ base: "baseline", xl: "center-safe" }} />
   *
   * // Override at multiple breakpoints
   * <Component placeItems={{ base: "center", sm: "start", lg: "stretch" }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  placeItems?: ResponsiveQuery<PlaceItem>

  /**
   * Responsive bidirectional alignment override for a single flex or grid item.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:place-self-value` — applies individual item alignment at the given breakpoint
   *
   * **Alignment**
   * - `{ *: "auto" }` → `*:place-self-auto` — uses the container’s default alignment
   * - `{ *: "start" }` → `*:place-self-start` — aligns the item to the top-left corner
   * - `{ *: "end" }` → `*:place-self-end` — aligns the item to the bottom-right corner
   * - `{ *: "end-safe" }` → `*:place-self-end-safe` — end alignment with overflow safety
   * - `{ *: "center" }` → `*:place-self-center` — centers the item on both axes
   * - `{ *: "center-safe" }` → `*:place-self-center-safe` — centers safely, avoiding overflow
   * - `{ *: "stretch" }` → `*:place-self-stretch` — fills the available container space
   *
   * **Usage**
   * ```tsx
   * // Static alignment (no media query)
   * <Component placeSelf="center" />
   *
   * // Applies universally across all breakpoints
   * <Component placeSelf={{ base: "start" }} />
   *
   * // Override at specific breakpoints
   * <Component placeSelf={{ base: "auto", sm: "center" }} />
   * <Component placeSelf={{ base: "center", md: "end-safe" }} />
   * <Component placeSelf={{ base: "stretch", lg: "center-safe" }} />
   * <Component placeSelf={{ base: "start", xl: "end" }} />
   *
   * // Override at multiple breakpoints
   * <Component placeSelf={{ base: "center", sm: "start", lg: "stretch" }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  placeSelf?: ResponsiveQuery<PlaceSelf>
}

// Exports
export type {
  PlaceProps
}
