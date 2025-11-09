/**
 * Spacing between flex and grid items on both axes ([See also](https://tailwindcss.com/docs/gap))
 *
 * **Syntax**
 * - `value` → `gap-value` — applies spacing from the **value** scale
 *
 * **Scale**
 * - `0` → `gap-0` — no spacing
 * - `1` → `gap-1` — extra-tight spacing
 * - `2` → `gap-2` — tight spacing
 * - `3` → `gap-3` — medium spacing
 * - `4` → `gap-4` — loose spacing
 * - `5` → `gap-5` — extra-loose spacing
 *
 * **Custom**
 * - `number` → `gap-number` — resolved **automatically**
 * - `[value]` → `gap-[value]` — **arbitrary** fixed spacing
 * - `(--value)` → `gap-(--value)` — spacing via **CSS variable**
 *
 * **Usage**
 * ```tsx
 * // Resolved automatically from the spacing scale
 * <Component gap={4} /> // → gap-4
 *
 * // Arbitrary fixed spacing
 * <Component gap="[10px]" /> // → gap-[10px]
 *
 * // Dynamic spacing via CSS variable
 * <Component gap="(--srylius)" /> // → gap-(--srylius)
 * ```
 *
 * ---
 * _Custom variable (e.g. "--srylius") are supported if defined in your configuration file._
 */
type Gap = number | `[${string}]` | `(${string})`

/**
 * Horizontal spacing between flex and grid items ([See also](https://tailwindcss.com/docs/gap#changing-row-and-column-gaps-independently))
 *
 * **Syntax**
 * - `value` → `gap-x-value` — applies spacing from the **value** scale
 *
 * **Scale**
 * - `0` → `gap-x-0` — no spacing
 * - `1` → `gap-x-1` — extra-tight spacing
 * - `2` → `gap-x-2` — tight spacing
 * - `3` → `gap-x-3` — medium spacing
 * - `4` → `gap-x-4` — loose spacing
 * - `5` → `gap-x-5` — extra-loose spacing
 *
 * **Custom**
 * - `value` → `gap-x-value` — resolved **automatically**
 * - `[value]` → `gap-x-[value]` — **arbitrary** fixed spacing
 * - `(--value)` → `gap-x-(--value)` — spacing via **CSS variable**
 *
 * **Usage**
 * ```tsx
 * // Resolved automatically from the spacing scale
 * <Component gapX={3} /> // → gap-x-3
 *
 * // Arbitrary fixed spacing
 * <Component gapX="[12px]" /> // → gap-x-[12px]
 *
 * // Dynamic spacing via CSS variable
 * <Component gapX="(--srylius)" /> // → gap-x-(--srylius)
 * ```
 *
 * ---
 * _Custom variable (e.g. "--srylius") are supported if defined in your configuration file._
 */
type GapX = number | `[${string}]` | `(${string})`

/**
 * Vertical spacing between flex and grid items ([See also](https://tailwindcss.com/docs/gap#changing-row-and-column-gaps-independently))
 *
 * **Syntax**
 * - `value` → `gap-y-value` — applies spacing from the **value** scale
 *
 * **Scale**
 * - `0` → `gap-y-0` — no spacing
 * - `1` → `gap-y-1` — extra-tight spacing
 * - `2` → `gap-y-2` — tight spacing
 * - `3` → `gap-y-3` — medium spacing
 * - `4` → `gap-y-4` — loose spacing
 * - `5` → `gap-y-5` — extra-loose spacing
 *
 * **Custom**
 * - `value` → `gap-y-value` — resolved **automatically**
 * - `[value]` → `gap-y-[value]` — **arbitrary** fixed spacing
 * - `(--value)` → `gap-y-(--value)` — spacing via **CSS variable**
 *
 * **Usage**
 * ```tsx
 * // Resolved automatically from the spacing scale
 * <Component gapY={2} /> // → gap-y-2
 *
 * // Arbitrary fixed spacing
 * <Component gapY="[8px]" /> // → gap-y-[8px]
 *
 * // Dynamic spacing via CSS variable
 * <Component gapY="(--srylius)" /> // → gap-y-(--srylius)
 * ```
 *
 * ---
 * _Custom key and variable (e.g. "srylius", "--srylius") are supported if defined in your configuration file._
 */
type GapY = number | `[${string}]` | `(${string})`

// Exports
export type {
  Gap,
  GapX,
  GapY
}
