import type {
  // Gap
  Gap,
  GapX,
  GapY,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type GapProps = {
  /**
   * Responsive spacing between flex and grid items on both axes.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:gap-value` — applies a **bidirectional spacing** at the given breakpoint
   *
   * **Scale**
   * - `{ gap: 0 }` → `gap-0` — no spacing
   * - `{ gap: 1 }` → `gap-1` — extra-tight spacing
   * - `{ gap: 2 }` → `gap-2` — tight spacing
   * - `{ gap: 3 }` → `gap-3` — medium spacing
   * - `{ gap: 4 }` → `gap-4` — loose spacing
   * - `{ gap: 5 }` → `gap-5` — extra-loose spacing
   *
   * **Custom**
   * - `{ *: number }` → `*:gap-number` — applies a **scale-based** spacing at the given breakpoint
   * - `{ *: "[value]" }` → `*:gap-[value]` — applies an **arbitrary** fixed spacing at the given breakpoint
   * - `{ *: "(--value)" }` → `*:gap-(--value)` — applies a **CSS variable** spacing at the given breakpoint
   *
   * **Usage**
   * ```tsx
   * // Static spacing (no media query)
   * <Component gap={4} /> // → gap-4
   *
   * // Applies universally across all breakpoints
   * <Component gap={{ base: 4 }} /> // → gap-4
   *
   * // Override at specific breakpoints
   * <Component gap={{ base: 0, sm: 1 }} /> // → gap-0 sm:gap-1
   * <Component gap={{ base: 1, md: 2 }} /> // → gap-1 md:gap-2
   * <Component gap={{ base: 2, lg: 3 }} /> // → gap-2 lg:gap-3
   * <Component gap={{ base: 3, xl: 4 }} /> // → gap-3 xl:gap-4
   * <Component gap={{ base: 5, "2xl": 6 }} /> // → gap-5 2xl:gap-6
   *
   * // Override with arbitrary fixed spacing
   * <Component gap={{ base: 0, xl: "[10px]" }} /> // → gap-0 xl:gap-[10px]
   *
   * // Override with CSS variable
   * <Component gap={{ base: 0, md: "(--srylius)" }} /> // → gap-0 md:gap-(--srylius)
   *
   * // Override at multiple breakpoints
   * <Component gap={{ base: 0, sm: 1, lg: 2 }} /> // → gap-0 sm:gap-1 lg:gap-2
   * ```
   *
   * ---
   * _Custom variable (e.g. "--srylius") are supported if defined in your configuration file._
   */
  gap?: ResponsiveQuery<Gap>

  /**
   * Responsive horizontal spacing between flex and grid items.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:gap-x-value` — applies a **horizontal spacing** at the given breakpoint
   *
   * **Scale**
   * - `{ gapX: 0 }` → `gap-x-0` — no spacing
   * - `{ gapX: 1 }` → `gap-x-1` — extra-tight spacing
   * - `{ gapX: 2 }` → `gap-x-2` — tight spacing
   * - `{ gapX: 3 }` → `gap-x-3` — medium spacing
   * - `{ gapX: 4 }` → `gap-x-4` — loose spacing
   * - `{ gapX: 5 }` → `gap-x-5` — extra-loose spacing
   *
   * **Custom**
   * - `{ *: number }` → `*:gap-x-number` — applies a **scale-based** spacing at the given breakpoint
   * - `{ *: "[value]" }` → `*:gap-x-[value]` — applies an **arbitrary** fixed spacing at the given breakpoint
   * - `{ *: "(--value)" }` → `*:gap-x-(--value)` — applies a **CSS variable** spacing at the given breakpoint
   *
   * **Usage**
   * ```tsx
   * // Static spacing (no media query)
   * <Component gapX={4} /> // → gap-x-4
   *
   * // Applies universally across all breakpoints
   * <Component gapX={{ base: 4 }} /> // → gap-x-4
   *
   * // Override at specific breakpoints
   * <Component gapX={{ base: 0, sm: 1 }} /> // → gap-x-0 sm:gap-x-1
   * <Component gapX={{ base: 1, md: 2 }} /> // → gap-x-1 md:gap-x-2
   * <Component gapX={{ base: 2, lg: 3 }} /> // → gap-x-2 lg:gap-x-3
   * <Component gapX={{ base: 3, xl: 4 }} /> // → gap-x-3 xl:gap-x-4
   * <Component gapX={{ base: 5, "2xl": 6 }} /> // → gap-x-5 2xl:gap-x-6
   *
   * // Override with arbitrary fixed spacing
   * <Component gapX={{ base: 0, xl: "[10px]" }} /> // → gap-x-0 xl:gap-x-[10px]
   *
   * // Override with CSS variable
   * <Component gapX={{ base: 0, md: "(--srylius)" }} /> // → gap-x-0 md:gap-x-(--srylius)
   *
   * // Override at multiple breakpoints
   * <Component gapX={{ base: 0, sm: 1, lg: 2 }} /> // → gap-x-0 sm:gap-x-1 lg:gap-x-2
   * ```
   *
   * ---
   * _Custom variable (e.g. "--srylius") are supported if defined in your configuration file._
   */
  gapX?: ResponsiveQuery<GapX>

  /**
   * Responsive vertical spacing between flex and grid items.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:gap-y-value` — applies a **vertical spacing** at the given breakpoint
   *
   * **Scale**
   * - `{ gapY: 0 }` → `gap-y-0` — no spacing
   * - `{ gapY: 1 }` → `gap-y-1` — extra-tight spacing
   * - `{ gapY: 2 }` → `gap-y-2` — tight spacing
   * - `{ gapY: 3 }` → `gap-y-3` — medium spacing
   * - `{ gapY: 4 }` → `gap-y-4` — loose spacing
   * - `{ gapY: 5 }` → `gap-y-5` — extra-loose spacing
   *
   * **Custom**
   * - `{ *: number }` → `*:gap-number` — applies a **scale-based** spacing at the given breakpoint
   * - `{ *: "[value]" }` → `*:gap-[value]` — applies an **arbitrary** fixed spacing at the given breakpoint
   * - `{ *: "(--value)" }` → `*:gap-(--value)` — applies a **CSS variable** spacing at the given breakpoint
   *
   * **Usage**
   * ```tsx
   * // Static spacing (no media query)
   * <Component gapY={4} /> // → gap-y-4
   *
   * // Applies universally across all breakpoints
   * <Component gapY={{ base: 4 }} /> // → gap-y-4
   *
   * // Override at specific breakpoints
   * <Component gapY={{ base: 0, sm: 1 }} /> // → gap-y-0 sm:gap-y-1
   * <Component gapY={{ base: 1, md: 2 }} /> // → gap-y-1 md:gap-y-2
   * <Component gapY={{ base: 2, lg: 3 }} /> // → gap-y-2 lg:gap-y-3
   * <Component gapY={{ base: 3, xl: 4 }} /> // → gap-y-3 xl:gap-y-4
   * <Component gapY={{ base: 5, "2xl": 6 }} /> // → gap-y-5 2xl:gap-y-6
   *
   * // Override with arbitrary fixed spacing
   * <Component gapY={{ base: 0, xl: "[10px]" }} /> // → gap-y-0 xl:gap-y-[10px]
   *
   * // Override with CSS variable
   * <Component gapY={{ base: 0, md: "(--srylius)" }} /> // → gap-y-0 md:gap-y-(--srylius)
   *
   * // Override at multiple breakpoints
   * <Component gapY={{ base: 0, sm: 1, lg: 2 }} /> // → gap-y-0 sm:gap-y-1 lg:gap-y-2
   * ```
   *
   * ---
   * _Custom variable (e.g. "--srylius") are supported if defined in your configuration file._
   */
  gapY?: ResponsiveQuery<GapY>
}

// Exports
export type {
  GapProps
}
