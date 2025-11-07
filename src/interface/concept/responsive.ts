import type {
  // Media
  Breakpoint,
  BreakpointMax,
  BreakpointMin,
  BreakpointRange,

  // Container
  BreakpointContainer,
  BreakpointContainerMax,
  BreakpointContainerMin,
  BreakpointContainerRange
} from "@pooxlabs/types"

/**
 * Base value type for responsive trait mappings.
 *
 * **Syntax**
 * - `string` → `"center"`, `"stretch"`, `"1/2"`, `"hidden"`, `"lg"`, `"auto"`
 * - `number` → `-1`, `0`, `1`, `4`, `999`
 * - `boolean` → `true`, `false` (used for toggles like `visible`, `flex`, etc.)
 * - `object` → sugar-style trait groups (e.g. `{ content: "center", items: "stretch" }`)
 *
 * **Usage**
 * ```ts
 * // String value (e.g. display mode)
 * type Display = Responsive<"block" | "inline" | "flex">

 * // Number value (e.g. spacing scale)
 * type Gap = Responsive<number>

 * // Boolean toggle (e.g. visibility)
 * type Hidden = Responsive<boolean>

 * // Sugar-style trait group (e.g. alignment)
 * type Justify = Responsive<{ content?: string; items?: string }>

 * // Sugar-style trait group (e.g. vertical alignment)
 * type Align = Responsive<{ content?: string; items?: string; self?: string }>

 * // Sugar-style trait group (e.g. place alignment)
 * type Place = Responsive<{ content?: string; items?: string; self?: string }>

 * // String token (e.g. basis size)
 * type Basis = Responsive<"full" | "1/2" | "lg">

 * // Arbitrary string (e.g. custom spacing)
 * type GapX = Responsive<`[${string}]`>

 * // CSS variable (e.g. dynamic spacing)
 * type GapY = Responsive<`(--${string})`>

 * // Sugar-style layout traits
 * type Layout = Responsive<{ direction?: string; wrap?: string }>

 * // Sugar-style flex item traits
 * type Item = Responsive<{ grow?: number; shrink?: number; order?: number }>
 * ```
 */
type ResponsiveValue = object | boolean | string | number

/**
 * Responsive trait mapping across media breakpoints.
 *
 * **Syntax**
 * - `value` — applies without media query
 *
 * **Query**
 * - `{ "base": value }` — applies without media query
 * - `{ "sm": value, "md": value }` — applies per breakpoint
 * - `{ "base": value, "md": value }` — overrides at specific breakpoints
 */
type Responsive<T extends ResponsiveValue> = T | Partial<Record<Breakpoint, T>>

/**
 * Responsive trait mapping across media max breakpoints.
 *
 * **Syntax**
 * - `value` — applies without media query
 *
 * **Query**
 * - `{ "base": value }` — applies without media query
 * - `{ "max-sm": value, "max-md": value }` — applies per max breakpoint
 * - `{ "base": value, "max-md": value }` — overrides at specific max breakpoints
 */
type ResponsiveMax<T extends ResponsiveValue> = T | Partial<Record<BreakpointMax, T>>

/**
 * Responsive trait mapping across media min breakpoints.
 *
 * **Syntax**
 * - `value` — applies without media query
 *
 * **Query**
 * - `{ "base": value }` — applies without media query
 * - `{ "min-[20px]": value, "min-[30px]": value }` — applies per min breakpoint
 * - `{ "base": value, "min-[30px]": value }` — overrides at specific min breakpoints
 */
type ResponsiveMin<T extends ResponsiveValue> = T | Partial<Record<BreakpointMin, T>>

/**
 * Responsive trait mapping across media breakpoint ranges.
 *
 * **Syntax**
 * - `value` — applies without media query
 *
 * **Query**
 * - `{ "base": value }` — applies without media query
 * - `{ "sm:max-md": value }` — applies per breakpoint range
 * - `{ "base": value, "sm:max-xl": value }` — overrides at specific breakpoint ranges
 */
type ResponsiveRange<T extends ResponsiveValue> = T | Partial<Record<BreakpointRange, T>>

/**
 * Responsive trait mapping for media queries only.
 *
 * **Syntax**
 * - `value` — applies without media query
 *
 * **Query**
 * - `{ "base": value }` — applies without media query
 * - `{ "sm": value }` — applies at specific media breakpoints
 * - `{ "max-md": value }` — applies below a max breakpoint
 * - `{ "min-[480px]": value }` — applies above a min breakpoint
 * - `{ "sm:max-xl": value }` — applies within a media breakpoint range
 *
 * **Usage**
 * ```tsx
 * // Static value (no query)
 * <Component justifyContent="center" />
 *
 * // Media base query (no query)
 * <Component justifyContent={{ "base": "start" }} />
 *
 * // Media query per breakpoint
 * <Component justifyContent={{ "sm": "center" }} />
 *
 * // Media max query
 * <Component justifyContent={{ "max-md": "end" }} />
 *
 * // Media min query (arbitrary)
 * <Component justifyContent={{ "min-[480px]": "start" }} />
 *
 * // Media range query
 * <Component justifyContent={{ "sm:max-xl": "between" }} />
 *
 * // Sugar-style trait group
 * <Component justify={{
 *   "base": { content: "center", items: "stretch" },
 *   "lg": { content: "end", self: "auto" }
 * }} />
 * ```
 */
type ResponsiveQuery<T extends ResponsiveValue> =
  | T
  | Responsive<T>
  | ResponsiveMax<T>
  | ResponsiveMin<T>
  | ResponsiveRange<T>

/**
 * Responsive trait mapping across container breakpoints.
 *
 * **Syntax**
 * - `value` — applies without container query
 *
 * **Query**
 * - `{ "base": value }` — applies without container query
 * - `{ "@sm": value, "@md": value }` — applies per breakpoint
 * - `{ "base": value, "@md": value }` — overrides at specific breakpoints
 */
type ContainerResponsive<T extends ResponsiveValue> = T | Partial<Record<BreakpointContainer, T>>

/**
 * Responsive trait mapping across container max breakpoints.
 *
 * **Syntax**
 * - `value` — applies without container query
 *
 * **Query**
 * - `{ "base": value }` — applies without container query
 * - `{ "@max-sm": value, "@max-md": value }` — applies per max breakpoint
 * - `{ "base": value, "@max-md": value }` — overrides at specific max breakpoints
 */
type ContainerResponsiveMax<T extends ResponsiveValue> = T | Partial<Record<BreakpointContainerMax, T>>

/**
 * Responsive trait mapping across container min breakpoints.
 *
 * **Syntax**
 * - `value` — applies without container query
 *
 * **Query**
 * - `{ "base": value }` — applies without container query
 * - `{ "@min-[20px]": value, "@min-[30px]": value }` — applies per min breakpoint
 * - `{ "base": value, "@min-[30px]": value }` — overrides at specific min breakpoints
 */
type ContainerResponsiveMin<T extends ResponsiveValue> = T | Partial<Record<BreakpointContainerMin, T>>

/**
 * Responsive trait mapping across container breakpoint ranges.
 *
 * **Syntax**
 * - `value` — applies without container query
 *
 * **Query**
 * - `{ "base": value }` — applies without container query
 * - `{ "@sm:@max-md": value }` — applies per breakpoint range
 * - `{ "base": value, "@sm:@max-xl": value }` — overrides at specific breakpoint ranges
 */
type ContainerResponsiveRange<T extends ResponsiveValue> = T | Partial<Record<BreakpointContainerRange, T>>

/**
 * Responsive trait mapping for container queries only.
 *
 * **Syntax**
 * - `value` — applies without container query
 *
 * **Query**
 * - `{ "base": value }` — applies without container query
 * - `{ "@sm": value }` — applies at specific container breakpoints
 * - `{ "@max-md": value }` — applies below a max breakpoint
 * - `{ "@min-[480px]": value }` — applies above a min breakpoint
 * - `{ "@sm:@max-xl": value }` — applies within a container breakpoint range
 *
 * **Usage**
 * ```tsx
 * // Static value (no query)
 * <Component justifyContent="center" />
 *
 * // Container query per breakpoint
 * <Component justifyContent={{ "@lg": "center" }} />
 *
 * // Container max query
 * <Component justifyContent={{ "@max-md": "end-safe" }} />
 *
 * // Container min query (arbitrary)
 * <Component justifyContent={{ "@min-[600px]": "start" }} />
 *
 * // Container range query
 * <Component justifyContent={{ "@sm:@max-xl": "evenly" }} />
 *
 * // Sugar-style trait group
 * <Component justify={{
 *   "base": { content: "center", items: "stretch" },
 *   "@lg": { content: "end", self: "auto" }
 * }} />
 * ```
 */
type ContainerResponsiveQuery<T extends ResponsiveValue> =
  | T
  | ContainerResponsive<T>
  | ContainerResponsiveMax<T>
  | ContainerResponsiveMin<T>
  | ContainerResponsiveRange<T>

// Exports
export type {
  // Common
  ResponsiveValue,

  // Media
  Responsive,
  ResponsiveMax,
  ResponsiveMin,
  ResponsiveRange,
  ResponsiveQuery,

  // Container
  ContainerResponsive,
  ContainerResponsiveMax,
  ContainerResponsiveMin,
  ContainerResponsiveRange,
  ContainerResponsiveQuery
}
