/**
 * Justify traits for horizontal layout control.
 *
 * **Syntax**
 * - `{ target: "*" }` → `justify-target-*` — applies horizontal alignment to the specified target
 *
 * **Alignment**
 * - `{ content: "*" }` → `justify-*` — alignment of content blocks
 * - `{ items: "*" }` → `justify-items-*` — alignment of items within the container
 * - `{ self: "*" }` → `justify-self-*` — alignment override for individual item
 *
 * **Usage**
 * ```tsx
 * // Align content to center
 * <Component justify={{ content: "center" }} /> // → justify-content-center
 *
 * // Align items to start
 * <Component justify={{ items: "start" }} /> // → justify-items-start
 *
 * // Override alignment for a single item
 * <Component justify={{ self: "end" }} /> // → justify-self-end
 *
 * // Combine multiple alignments
 * <Component justify={{ content: "between", items: "stretch", self: "auto" }} />
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type Justify = {
  content?: JustifyContent
  items?: JustifyItem
  self?: JustifySelf
}

/**
 * Horizontal alignment for flex and grid items ([See also](https://tailwindcss.com/docs/justify-content))
 *
 * **Syntax**
 * - `value` → `justify-value` — applies horizontal alignment from the predefined keyword set
 *
 * **Alignment**
 * - `start` → `justify-start` — aligns items to the start edge
 * - `center` → `justify-center` — centers items horizontally
 * - `center-safe` → `justify-center-safe` — centers safely, avoiding overflow
 * - `end` → `justify-end` — aligns items to the end edge
 * - `end-safe` → `justify-end-safe` — end alignment with overflow safety
 * - `between` → `justify-between` — equal spacing between items
 * - `around` → `justify-around` — spacing with outer margins
 * - `evenly` → `justify-evenly` — equal gaps including edges
 * - `stretch` → `justify-stretch` — fills container space
 * - `baseline` → `justify-baseline` — aligns to text baseline
 * - `normal` → `justify-normal` — browser default alignment
 *
 * **Usage**
 * ```tsx
 * // Align items to the start edge
 * <Component justify="start" /> // → justify-start
 *
 * // Center items horizontally
 * <Component justify="center" /> // → justify-center
 *
 * // Center safely, avoiding overflow
 * <Component justify="center-safe" /> // → justify-center-safe
 *
 * // Align items to the end edge
 * <Component justify="end" /> // → justify-end
 *
 * // End alignment with overflow safety
 * <Component justify="end-safe" /> // → justify-end-safe
 *
 * // Equal spacing between items
 * <Component justify="between" /> // → justify-between
 *
 * // Spacing with outer margins
 * <Component justify="around" /> // → justify-around
 *
 * // Equal gaps including edges
 * <Component justify="evenly" /> // → justify-evenly
 *
 * // Fill container space
 * <Component justify="stretch" /> // → justify-stretch
 *
 * // Align to text baseline
 * <Component justify="baseline" /> // → justify-baseline
 *
 * // Use browser default alignment
 * <Component justify="normal" /> // → justify-normal
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type JustifyContent =
  | "start"
  | "center"
  | "center-safe"
  | "end"
  | "end-safe"
  | "between"
  | "around"
  | "evenly"
  | "stretch"
  | "baseline"
  | "normal"

/**
 * Horizontal alignment for individual flex or grid items ([See also](https://tailwindcss.com/docs/justify-items))
 *
 * **Syntax**
 * - `value` → `justify-items-value` — applies horizontal alignment from the predefined keyword set
 *
 * **Alignment**
 * - `start` → `justify-items-start` — aligns item to the start edge
 * - `end` → `justify-items-end` — aligns item to the end edge
 * - `end-safe` → `justify-items-end-safe` — end alignment with overflow safety
 * - `center` → `justify-items-center` — centers item horizontally
 * - `center-safe` → `justify-items-center-safe` — centers safely, avoiding overflow
 * - `stretch` → `justify-items-stretch` — fills container space
 * - `normal` → `justify-items-normal` — browser default alignment
 *
 * **Usage**
 * ```tsx
 * // Align item to the start edge
 * <Component justifyItems="start" /> // → justify-items-start
 *
 * // Align item to the end edge
 * <Component justifyItems="end" /> // → justify-items-end
 *
 * // End alignment with overflow safety
 * <Component justifyItems="end-safe" /> // → justify-items-end-safe
 *
 * // Center item horizontally
 * <Component justifyItems="center" /> // → justify-items-center
 *
 * // Center safely, avoiding overflow
 * <Component justifyItems="center-safe" /> // → justify-items-center-safe
 *
 * // Fill container space
 * <Component justifyItems="stretch" /> // → justify-items-stretch
 *
 * // Use browser default alignment
 * <Component justifyItems="normal" /> // → justify-items-normal
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type JustifyItem =
  | "start"
  | "end"
  | "end-safe"
  | "center"
  | "center-safe"
  | "stretch"
  | "normal"

/**
 * Horizontal alignment for a single flex or grid item ([See also](https://tailwindcss.com/docs/justify-self))
 *
 * **Syntax**
 * - `value` → `justify-self-value` — applies horizontal alignment from the predefined keyword set
 *
 * **Alignment**
 * - `auto` → `justify-self-auto` — uses the browser’s default alignment
 * - `start` → `justify-self-start` — aligns the item to the start edge
 * - `center` → `justify-self-center` — centers the item horizontally
 * - `center-safe` → `justify-self-center-safe` — centers safely, avoiding overflow
 * - `end` → `justify-self-end` — aligns the item to the end edge
 * - `end-safe` → `justify-self-end-safe` — end alignment with overflow safety
 * - `stretch` → `justify-self-stretch` — fills the available container space
 *
 * **Usage**
 * ```tsx
 * // Use browser default alignment
 * <Component justifySelf="auto" /> // → justify-self-auto
 *
 * // Align item to the start edge
 * <Component justifySelf="start" /> // → justify-self-start
 *
 * // Center item horizontally
 * <Component justifySelf="center" /> // → justify-self-center
 *
 * // Center safely, avoiding overflow
 * <Component justifySelf="center-safe" /> // → justify-self-center-safe
 *
 * // Align item to the end edge
 * <Component justifySelf="end" /> // → justify-self-end
 *
 * // End alignment with overflow safety
 * <Component justifySelf="end-safe" /> // → justify-self-end-safe
 *
 * // Fill container space
 * <Component justifySelf="stretch" /> // → justify-self-stretch
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type JustifySelf =
  | "auto"
  | "start"
  | "center"
  | "center-safe"
  | "end"
  | "end-safe"
  | "stretch"

// Exports
export type {
  Justify,
  JustifyContent,
  JustifyItem,
  JustifySelf,
}
