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

/**
 * Place alignment traits for layout control.
 *
 * **Syntax**
 * - `{ target: "*" }` → `place-target-*` — applies **alignment** to the specified **target**
 *
 * **Alignment**
 * - `{ content: "*" }` → `place-content-*` — alignment of content blocks
 * - `{ items: "*" }` → `place-items-*` — alignment of items within the container
 * - `{ self: "*" }` → `place-self-*` — alignment override for individual item
 *
 * **Usage**
 * ```tsx
 * // Align content to center
 * <Component place={{ content: "center" }} />
 *
 * // Align items to start
 * <Component place={{ items: "start" }} />
 *
 * // Override alignment for a single item
 * <Component place={{ self: "end" }} />
 *
 * // Combine multiple alignments
 * <Component place={{ content: "between", items: "stretch", self: "auto" }} />
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type Place = {
  content?: PlaceContent
  items?: PlaceItem
  self?: PlaceSelf
}

/**
 * Combined alignment for flex and grid content blocks on both axes ([See also](https://tailwindcss.com/docs/place-content))
 *
 * **Syntax**
 * - `value` → `place-content-value` — applies bidirectional alignment from the predefined keyword set
 *
 * **Alignment**
 * - `center` → `place-content-center` — centers content both horizontally and vertically
 * - `center-safe` → `place-content-center-safe` — centers safely, avoiding overflow
 * - `start` → `place-content-start` — aligns content to the top-left corner
 * - `end` → `place-content-end` — aligns content to the bottom-right corner
 * - `end-safe` → `place-content-end-safe` — end alignment with overflow safety
 * - `between` → `place-content-between` — equal spacing between content blocks
 * - `around` → `place-content-around` — spacing with outer margins
 * - `evenly` → `place-content-evenly` — equal gaps including edges
 * - `baseline` → `place-content-baseline` — aligns to text baseline
 * - `stretch` → `place-content-stretch` — fills container space
 *
 * **Usage**
 * ```tsx
 * // Center content on both axes
 * <Component placeContent="center" /> // → place-content-center
 *
 * // Center safely, avoiding overflow
 * <Component placeContent="center-safe" /> // → place-content-center-safe
 *
 * // Align content to top-left
 * <Component placeContent="start" /> // → place-content-start
 *
 * // Align content to bottom-right
 * <Component placeContent="end" /> // → place-content-end
 *
 * // End alignment with overflow safety
 * <Component placeContent="end-safe" /> // → place-content-end-safe
 *
 * // Equal spacing between content blocks
 * <Component placeContent="between" /> // → place-content-between
 *
 * // Spacing with outer margins
 * <Component placeContent="around" /> // → place-content-around
 *
 * // Equal gaps including edges
 * <Component placeContent="evenly" /> // → place-content-evenly
 *
 * // Align to text baseline
 * <Component placeContent="baseline" /> // → place-content-baseline
 *
 * // Fill container space
 * <Component placeContent="stretch" /> // → place-content-stretch
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type PlaceContent =
  | "center"
  | "center-safe"
  | "start"
  | "end"
  | "end-safe"
  | "between"
  | "around"
  | "evenly"
  | "baseline"
  | "stretch"

/**
 * Combined alignment for individual flex or grid items on both axes ([See also](https://tailwindcss.com/docs/place-items))
 *
 * **Syntax**
 * - `value` → `place-items-value` — applies bidirectional alignment from the predefined keyword set
 *
 * **Alignment**
 * - `start` → `place-items-start` — aligns item to the top-left corner
 * - `end` → `place-items-end` — aligns item to the bottom-right corner
 * - `end-safe` → `place-items-end-safe` — end alignment with overflow safety
 * - `center` → `place-items-center` — centers item on both axes
 * - `center-safe` → `place-items-center-safe` — centers safely, avoiding overflow
 * - `baseline` → `place-items-baseline` — aligns to text baseline
 * - `stretch` → `place-items-stretch` — fills container space
 *
 * **Usage**
 * ```tsx
 * // Align item to top-left
 * <Component placeItems="start" /> // → place-items-start
 *
 * // Align item to bottom-right
 * <Component placeItems="end" /> // → place-items-end
 *
 * // End alignment with overflow safety
 * <Component placeItems="end-safe" /> // → place-items-end-safe
 *
 * // Center item on both axes
 * <Component placeItems="center" /> // → place-items-center
 *
 * // Center safely, avoiding overflow
 * <Component placeItems="center-safe" /> // → place-items-center-safe
 *
 * // Align to text baseline
 * <Component placeItems="baseline" /> // → place-items-baseline
 *
 * // Fill container space
 * <Component placeItems="stretch" /> // → place-items-stretch
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type PlaceItem =
  | "start"
  | "end"
  | "end-safe"
  | "center"
  | "center-safe"
  | "baseline"
  | "stretch"

/**
 * Combined alignment override for a single flex or grid item on both axes ([See also](https://tailwindcss.com/docs/place-self))
 *
 * **Syntax**
 * - `value` → `place-self-value` — applies bidirectional alignment from the predefined keyword set
 *
 * **Alignment**
 * - `auto` → `place-self-auto` — uses the container’s default alignment
 * - `start` → `place-self-start` — aligns the item to the top-left corner
 * - `end` → `place-self-end` — aligns the item to the bottom-right corner
 * - `end-safe` → `place-self-end-safe` — end alignment with overflow safety
 * - `center` → `place-self-center` — centers the item on both axes
 * - `center-safe` → `place-self-center-safe` — centers safely, avoiding overflow
 * - `stretch` → `place-self-stretch` — fills the available container space
 *
 * **Usage**
 * ```tsx
 * // Use container default alignment
 * <Component placeSelf="auto" /> // → place-self-auto
 *
 * // Align item to top-left
 * <Component placeSelf="start" /> // → place-self-start
 *
 * // Align item to bottom-right
 * <Component placeSelf="end" /> // → place-self-end
 *
 * // End alignment with overflow safety
 * <Component placeSelf="end-safe" /> // → place-self-end-safe
 *
 * // Center item on both axes
 * <Component placeSelf="center" /> // → place-self-center
 *
 * // Center safely, avoiding overflow
 * <Component placeSelf="center-safe" /> // → place-self-center-safe
 *
 * // Fill container space
 * <Component placeSelf="stretch" /> // → place-self-stretch
 * ```
 *
 * ---
 * _Arbitrary values and CSS variables are not supported (e.g. `[value]`, `(--value)`)_
 */
type PlaceSelf =
  | "auto"
  | "start"
  | "end"
  | "end-safe"
  | "center"
  | "center-safe"
  | "stretch"

// Exports
export type {
  // Justify
  Justify,
  JustifyContent,
  JustifyItem,
  JustifySelf,

  // Align
  Align,
  AlignContent,
  AlignItem,
  AlignSelf,

  // Place
  Place,
  PlaceContent,
  PlaceItem,
  PlaceSelf
}
