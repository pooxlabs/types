import type {
  // Justify
  Justify,
  JustifyContent,
  JustifyItem,
  JustifySelf,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type JustifyProps = {
  /**
   * Responsive horizontal alignment group for layout control.
   *
   * **Syntax**
   * - `{ target: "*" }` → `justify-target-*` — applies **target** static alignment
   * - `{ *: { target: "*" }}` → `*:justify-target-*` — responsive alignment per breakpoint
   *
   * **Alignment**
   * - `{ *: { content: "*" }}` → `*:justify-*` — alignment of content blocks
   * - `{ *: { items: "*" }}` → `*:justify-items-*` — alignment of items within the container
   * - `{ *: { self: "*" }}` → `*:justify-self-*` — alignment override for individual item
   *
   * **Usage**
   * ```tsx
   * // Static alignment
   * <Component justify={{ content: "center", items: "stretch", self: "auto" }} />
   *
   * // Applies universally across all breakpoints
   * <Component justify={{ base: { content: "start", items: "center", self: "end" } }} />
   *
   * // Override at specific breakpoints
   * <Component justify={{
   *   content: { base: "start", sm: "between", md: "evenly" },
   *   items: { lg: "center-safe" },
   *   self: { xl: "end-safe" }
   * }} />
   *
   * // Mixed static and responsive
   * <Component justify={{ content: "around", items: { sm: "stretch", lg: "center" }, self: "auto" }} />
   *
   * // Override at multiple breakpoints
   * <Component justify={{ base: { items: "start" }, sm: { items: "center" }, lg: { items: "stretch" } }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  justify?: ResponsiveQuery<Justify>

  /**
   * Responsive horizontal alignment of content blocks within flex or grid items
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:justify-value` — applies horizontal alignment at the given breakpoint
   *
   * **Alignment**
   * - `{ *: "start" }` → `*:justify-start` — aligns content to the start edge
   * - `{ *: "center" }` → `*:justify-center` — centers content horizontally
   * - `{ *: "center-safe" }` → `*:justify-center-safe` — centers safely, avoiding overflow
   * - `{ *: "end" }` → `*:justify-end` — aligns content to the end edge
   * - `{ *: "end-safe" }` → `*:justify-end-safe` — end alignment with overflow safety
   * - `{ *: "between" }` → `*:justify-between` — equal spacing between content blocks
   * - `{ *: "around" }` → `*:justify-around` — spacing with outer margins
   * - `{ *: "evenly" }` → `*:justify-evenly` — equal gaps including edges
   * - `{ *: "stretch" }` → `*:justify-stretch` — fills container space
   * - `{ *: "baseline" }` → `*:justify-baseline` — aligns to text baseline
   * - `{ *: "normal" }` → `*:justify-normal` — browser default alignment
   *
   * **Usage**
   * ```tsx
   * // Static alignment (no media query)
   * <Component justifyContent="center" />
   *
   * // Applies universally across all breakpoints
   * <Component justifyContent={{ base: "start" }} />
   *
   * // Override at specific breakpoints
   * <Component justifyContent={{ base: "start", sm: "center" }} />
   * <Component justifyContent={{ base: "center", md: "between" }} />
   * <Component justifyContent={{ base: "around", lg: "evenly" }} />
   * <Component justifyContent={{ base: "stretch", xl: "end-safe" }} />
   * <Component justifyContent={{ base: "baseline", "2xl": "normal" }} />
   *
   * // Override at multiple breakpoints
   * <Component justifyContent={{ base: "start", sm: "center", lg: "end" }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  justifyContent?: ResponsiveQuery<JustifyContent>

  /**
   * Responsive horizontal alignment of individual items within flex or grid containers.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:justify-items-value` — applies item-level alignment at the given breakpoint
   *
   * **Alignment**
   * - `{ *: "start" }` → `*:justify-items-start` — aligns item to the start edge
   * - `{ *: "end" }` → `*:justify-items-end` — aligns item to the end edge
   * - `{ *: "end-safe" }` → `*:ijustify-tems-end-safe` — end alignment with overflow safety
   * - `{ *: "center" }` → `*:justify-items-center` — centers item horizontally
   * - `{ *: "center-safe" }` → `*:justify-items-center-safe` — centers safely, avoiding overflow
   * - `{ *: "stretch" }` → `*:justify-items-stretch` — fills container space
   * - `{ *: "normal" }` → `*:justify-items-normal` — browser default alignment
   *
   * **Usage**
   * ```tsx
   * // Static alignment (no media query)
   * <Component justifyItems="center" />
   *
   * // Applies universally across all breakpoints
   * <Component justifyItems={{ base: "start" }} />
   *
   * // Override at specific breakpoints
   * <Component justifyItems={{ base: "start", sm: "center" }} />
   * <Component justifyItems={{ base: "center", md: "end-safe" }} />
   * <Component justifyItems={{ base: "stretch", lg: "center-safe" }} />
   * <Component justifyItems={{ base: "normal", xl: "end" }} />
   *
   * // Override at multiple breakpoints
   * <Component justifyItems={{ base: "center", sm: "start", lg: "stretch" }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  justifyItems?: ResponsiveQuery<JustifyItem>

  /**
   * Responsive horizontal alignment override for a single flex or grid item.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:justify-self-value` — applies individual item alignment at the given breakpoint
   *
   * **Alignment**
   * - `{ *: "auto" }` → `*:justify-self-auto` — uses the container’s default alignment
   * - `{ *: "start" }` → `*:justify-self-start` — aligns the item to the start edge
   * - `{ *: "center" }` → `*:justify-self-center` — centers the item horizontally
   * - `{ *: "center-safe" }` → `*:justify-self-center-safe` — centers safely, avoiding overflow
   * - `{ *: "end" }` → `*:justify-self-end` — aligns the item to the end edge
   * - `{ *: "end-safe" }` → `*:justify-self-end-safe` — end alignment with overflow safety
   * - `{ *: "stretch" }` → `*:justify-self-stretch` — fills the available container space
   *
   * **Usage**
   * ```tsx
   * // Static alignment (no media query)
   * <Component justifySelf="center" />
   *
   * // Applies universally across all breakpoints
   * <Component justifySelf={{ base: "start" }} />
   *
   * // Override at specific breakpoints
   * <Component justifySelf={{ base: "auto", sm: "center" }} />
   * <Component justifySelf={{ base: "center", md: "end-safe" }} />
   * <Component justifySelf={{ base: "stretch", lg: "center-safe" }} />
   * <Component justifySelf={{ base: "start", xl: "end" }} />
   *
   * // Override at multiple breakpoints
   * <Component justifySelf={{ base: "center", sm: "start", lg: "stretch" }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  justifySelf?: ResponsiveQuery<JustifySelf>
}

// Exports
export type {
  // Justify
  JustifyProps
}
