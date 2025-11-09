import type {
  Align,
  AlignContent,
  AlignItem,
  AlignSelf,

  Justify,
  JustifyContent,
  JustifyItem,
  JustifySelf,

  Place,
  PlaceContent,
  PlaceItem,
  PlaceSelf,

  ResponsiveQuery
} from "@srylius/types"

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
  // Justify
  JustifyProps,

  // Align
  AlignProps,

  // Place
  PlaceProps
}
