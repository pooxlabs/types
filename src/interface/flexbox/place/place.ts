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
  Place,
  PlaceContent,
  PlaceItem,
  PlaceSelf
}
