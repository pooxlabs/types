import type {
  // Align
  Align,
  AlignContent,
  AlignItem,
  AlignSelf,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type AlignProps = {
  /**
   * Responsive vertical alignment group for layout control.
   *
   * **Syntax**
   * - `{ target: "*" }` → `align-target-*` — applies **target** static alignment
   * - `{ *: { target: "*" }}` → `*:align-target-*` — responsive alignment per breakpoint
   *
   * **Alignment**
   * - `{ *: { content: "*" }}` → `*:align-content-*` — alignment of content blocks
   * - `{ *: { items: "*" }}` → `*:align-items-*` — alignment of items within the container
   * - `{ *: { self: "*" }}` → `*:align-self-*` — alignment override for individual item
   *
   * **Usage**
   * ```tsx
   * // Static alignment
   * <Component align={{ content: "center", items: "stretch", self: "auto" }} />
   *
   * // Applies universally across all breakpoints
   * <Component align={{ base: { content: "start", items: "center", self: "end" } }} />
   *
   * // Override at specific breakpoints
   * <Component align={{
   *   content: { base: "start", sm: "between", md: "evenly" },
   *   items: { lg: "center-safe" },
   *   self: { xl: "end-safe" }
   * }} />
   *
   * // Mixed static and responsive
   * <Component align={{ content: "around", items: { sm: "stretch", lg: "center" }, self: "auto" }} />
   *
   * // Override at multiple breakpoints
   * <Component align={{ base: { items: "start" }, sm: { items: "center" }, lg: { items: "stretch" } }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  align?: ResponsiveQuery<Align>

  /**
   * Responsive vertical alignment of content blocks within flex or grid containers.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:content-value` — applies content-level alignment at the given breakpoint
   *
   * **Alignment**
   * - `{ *: "normal" }` → `*:content-normal` — browser default alignment
   * - `{ *: "center" }` → `*:content-center` — centers content vertically
   * - `{ *: "start" }` → `*:content-start` — aligns content to the top edge
   * - `{ *: "end" }` → `*:content-end` — aligns content to the bottom edge
   * - `{ *: "between" }` → `*:content-between` — equal spacing between content blocks
   * - `{ *: "around" }` → `*:content-around` — spacing with outer margins
   * - `{ *: "evenly" }` → `*:content-evenly` — equal gaps including edges
   * - `{ *: "baseline" }` → `*:content-baseline` — aligns to text baseline
   * - `{ *: "stretch" }` → `*:content-stretch` — fills container space
   *
   * **Usage**
   * ```tsx
   * // Static alignment (no media query)
   * <Component alignContent="center" />
   *
   * // Applies universally across all breakpoints
   * <Component alignContent={{ base: "start" }} />
   *
   * // Override at specific breakpoints
   * <Component alignContent={{ base: "start", sm: "center" }} />
   * <Component alignContent={{ base: "center", md: "between" }} />
   * <Component alignContent={{ base: "around", lg: "evenly" }} />
   * <Component alignContent={{ base: "stretch", xl: "end" }} />
   * <Component alignContent={{ base: "baseline", "2xl": "normal" }} />
   *
   * // Override at multiple breakpoints
   * <Component alignContent={{ base: "center", sm: "start", lg: "stretch" }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  alignContent?: ResponsiveQuery<AlignContent>

  /**
   * Responsive vertical alignment of items within flex or grid containers.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:items-value` — applies item-level alignment at the given breakpoint
   *
   * **Alignment**
   * - `{ *: "start" }` → `*:items-start` — aligns items to the top edge
   * - `{ *: "end" }` → `*:items-end` — aligns items to the bottom edge
   * - `{ *: "end-safe" }` → `*:items-end-safe` — bottom alignment with overflow safety
   * - `{ *: "center" }` → `*:items-center` — centers items vertically
   * - `{ *: "center-safe" }` → `*:items-center-safe` — centers safely, avoiding overflow
   * - `{ *: "baseline" }` → `*:items-baseline` — aligns to first text baseline
   * - `{ *: "baseline-last" }` → `*:items-baseline-last` — aligns to last text baseline
   * - `{ *: "stretch" }` → `*:items-stretch` — fills container space
   *
   * **Usage**
   * ```tsx
   * // Static alignment (no media query)
   * <Component alignItems="center" />
   *
   * // Applies universally across all breakpoints
   * <Component alignItems={{ base: "start" }} />
   *
   * // Override at specific breakpoints
   * <Component alignItems={{ base: "start", sm: "center" }} />
   * <Component alignItems={{ base: "center", md: "end-safe" }} />
   * <Component alignItems={{ base: "stretch", lg: "baseline" }} />
   * <Component alignItems={{ base: "baseline", xl: "baseline-last" }} />
   *
   * // Override at multiple breakpoints
   * <Component alignItems={{ base: "center", sm: "start", lg: "stretch" }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  alignItems?: ResponsiveQuery<AlignItem>

  /**
   * Responsive vertical alignment override for a single flex or grid item.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:self-value` — applies individual item alignment at the given breakpoint
   *
   * **Alignment**
   * - `{ *: "auto" }` → `*:self-auto` — uses the container’s default alignment
   * - `{ *: "start" }` → `*:self-start` — aligns the item to the top edge
   * - `{ *: "end" }` → `*:self-end` — aligns the item to the bottom edge
   * - `{ *: "end-safe" }` → `*:self-end-safe` — bottom alignment with overflow safety
   * - `{ *: "center" }` → `*:self-center` — centers the item vertically
   * - `{ *: "center-safe" }` → `*:self-center-safe` — centers safely, avoiding overflow
   * - `{ *: "stretch" }` → `*:self-stretch` — fills the available container space
   * - `{ *: "baseline" }` → `*:self-baseline` — aligns to first text baseline
   * - `{ *: "baseline-last" }` → `*:self-baseline-last` — aligns to last text baseline
   *
   * **Usage**
   * ```tsx
   * // Static alignment (no media query)
   * <Component alignSelf="center" />
   *
   * // Applies universally across all breakpoints
   * <Component alignSelf={{ base: "start" }} />
   *
   * // Override at specific breakpoints
   * <Component alignSelf={{ base: "auto", sm: "center" }} />
   * <Component alignSelf={{ base: "center", md: "end-safe" }} />
   * <Component alignSelf={{ base: "stretch", lg: "center-safe" }} />
   * <Component alignSelf={{ base: "baseline", xl: "baseline-last" }} />
   *
   * // Override at multiple breakpoints
   * <Component alignSelf={{ base: "center", sm: "start", lg: "stretch" }} />
   * ```
   *
   * ---
   * _Only predefined keyword values are supported. Arbitrary values and CSS variables are not allowed._
   */
  alignSelf?: ResponsiveQuery<AlignSelf>
}

// Exports
export type {
  AlignProps
}
