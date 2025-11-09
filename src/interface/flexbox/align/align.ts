/**
 * Align traits for vertical layout control.
 *
 * **Syntax**
 * - `{ target: "*" }` → `target-*` — applies vertical alignment to the specified target
 *
 * **Alignment**
 * - `{ content: "*" }` → `content-*` — alignment of content blocks
 * - `{ items: "*" }` → `items-*` — alignment of items within the container
 * - `{ self: "*" }` → `self-*` — alignment override for individual item
 *
 * **Usage**
 * ```tsx
 * // Align content to center
 * <Component align={{ content: "center" }} /> // → content-center
 *
 * // Align items to start
 * <Component align={{ items: "start" }} /> // → items-start
 *
 * // Override alignment for a single item
 * <Component align={{ self: "end" }} /> // → self-end
 *
 * // Combine multiple alignments
 * <Component align={{ content: "stretch", items: "baseline", self: "auto" }} />
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type Align = {
  content?: AlignContent
  items?: AlignItem
  self?: AlignSelf
}

/**
 * Vertical alignment for flex and grid content blocks ([See also](https://tailwindcss.com/docs/align-content))
 *
 * **Syntax**
 * - `value` → `content-value` — applies vertical alignment from the predefined keyword set
 *
 * **Alignment**
 * - `normal` → `content-normal` — browser default alignment
 * - `center` → `content-center` — centers content vertically
 * - `start` → `content-start` — aligns content to the top edge
 * - `end` → `content-end` — aligns content to the bottom edge
 * - `between` → `content-between` — equal spacing between content blocks
 * - `around` → `content-around` — spacing with outer margins
 * - `evenly` → `content-evenly` — equal gaps including edges
 * - `baseline` → `content-baseline` — aligns to text baseline
 * - `stretch` → `content-stretch` — fills container space
 *
 * **Usage**
 * ```tsx
 * // Use browser default alignment
 * <Component alignContent="normal" /> // → content-normal
 *
 * // Center content vertically
 * <Component alignContent="center" /> // → content-center
 *
 * // Align content to the top edge
 * <Component alignContent="start" /> // → content-start
 *
 * // Align content to the bottom edge
 * <Component alignContent="end" /> // → content-end
 *
 * // Equal spacing between content blocks
 * <Component alignContent="between" /> // → content-between
 *
 * // Spacing with outer margins
 * <Component alignContent="around" /> // → content-around
 *
 * // Equal gaps including edges
 * <Component alignContent="evenly" /> // → content-evenly
 *
 * // Align to text baseline
 * <Component alignContent="baseline" /> // → content-baseline
 *
 * // Fill container space
 * <Component alignContent="stretch" /> // → content-stretch
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type AlignContent =
  | "normal"
  | "center"
  | "start"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "baseline"
  | "stretch"

/**
 * Vertical alignment for individual flex or grid items ([See also](https://tailwindcss.com/docs/align-items))
 *
 * **Syntax**
 * - `value` → `items-value` — applies vertical alignment from the predefined keyword set
 *
 * **Alignment**
 * - `start` → `items-start` — aligns item to the top edge
 * - `end` → `items-end` — aligns item to the bottom edge
 * - `end-safe` → `items-end-safe` — bottom alignment with overflow safety
 * - `center` → `items-center` — centers item vertically
 * - `center-safe` → `items-center-safe` — centers safely, avoiding overflow
 * - `baseline` → `items-baseline` — aligns to first text baseline
 * - `baseline-last` → `items-baseline-last` — aligns to last text baseline
 * - `stretch` → `items-stretch` — fills container space
 *
 * **Usage**
 * ```tsx
 * // Align item to the top edge
 * <Component alignItems="start" /> // → items-start
 *
 * // Align item to the bottom edge
 * <Component alignItems="end" /> // → items-end
 *
 * // Bottom alignment with overflow safety
 * <Component alignItems="end-safe" /> // → items-end-safe
 *
 * // Center item vertically
 * <Component alignItems="center" /> // → items-center
 *
 * // Center safely, avoiding overflow
 * <Component alignItems="center-safe" /> // → items-center-safe
 *
 * // Align to first text baseline
 * <Component alignItems="baseline" /> // → items-baseline
 *
 * // Align to last text baseline
 * <Component alignItems="baseline-last" /> // → items-baseline-last
 *
 * // Fill container space
 * <Component alignItems="stretch" /> // → items-stretch
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type AlignItem =
  | "start"
  | "end"
  | "end-safe"
  | "center"
  | "center-safe"
  | "baseline"
  | "baseline-last"
  | "stretch"

/**
 * Vertical alignment override for a single flex or grid item ([See also](https://tailwindcss.com/docs/align-self))
 *
 * **Syntax**
 * - `value` → `self-value` — applies vertical alignment from the predefined keyword set
 *
 * **Alignment**
 * - `auto` → `self-auto` — uses the container’s default alignment
 * - `start` → `self-start` — aligns the item to the top edge
 * - `end` → `self-end` — aligns the item to the bottom edge
 * - `end-safe` → `self-end-safe` — bottom alignment with overflow safety
 * - `center` → `self-center` — centers the item vertically
 * - `center-safe` → `self-center-safe` — centers safely, avoiding overflow
 * - `stretch` → `self-stretch` — fills the available container space
 * - `baseline` → `self-baseline` — aligns to first text baseline
 * - `baseline-last` → `self-baseline-last` — aligns to last text baseline
 *
 * **Usage**
 * ```tsx
 * // Use container default alignment
 * <Component alignSelf="auto" /> // → self-auto
 *
 * // Align item to the top edge
 * <Component alignSelf="start" /> // → self-start
 *
 * // Align item to the bottom edge
 * <Component alignSelf="end" /> // → self-end
 *
 * // Bottom alignment with overflow safety
 * <Component alignSelf="end-safe" /> // → self-end-safe
 *
 * // Center item vertically
 * <Component alignSelf="center" /> // → self-center
 *
 * // Center safely, avoiding overflow
 * <Component alignSelf="center-safe" /> // → self-center-safe
 *
 * // Fill container space
 * <Component alignSelf="stretch" /> // → self-stretch
 *
 * // Align to first text baseline
 * <Component alignSelf="baseline" /> // → self-baseline
 *
 * // Align to last text baseline
 * <Component alignSelf="baseline-last" /> // → self-baseline-last
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type AlignSelf =
  | "auto"
  | "start"
  | "end"
  | "end-safe"
  | "center"
  | "center-safe"
  | "stretch"
  | "baseline"
  | "baseline-last"

// Exports
export type {
  Align,
  AlignContent,
  AlignItem,
  AlignSelf
}
