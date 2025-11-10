import type {
  Breakpoint,
  BreakpointMax,
  BreakpointMin,
  BreakpointRange
} from "@pooxlabs/types"

/**
 * Responsive trait mapping across media breakpoints.
 *
 * **Syntax**
 * - `{ value: "*" }` → `value:*` — applies at a **value** breakpoint
 *
 * **Query**
 * - `{ sm: "*" }` → `sm:*` — overrides at the **sm** breakpoint
 * - `{ md: "*" }` → `md:*` — overrides at the **md** breakpoint
 * - `{ lg: "*" }` → `lg:*` — overrides at the **lg** breakpoint
 * - `{ xl: "*" }` → `xl:*` — overrides at the **xl** breakpoint
 * - `{ 2xl: "*" }` → `2xl:*` — overrides at the **2xl** breakpoint
 *
 * **Custom**
 * - `{ value: "*" }` → `value:*` — overrides at a **custom-defined** breakpoint
 *
 * **Usage**
 * ```tsx
 * // Static value (no media query)
 * <Component prop="value" />
 *
 * // Applies universally
 * <Component prop={{ base: "value" }} />
 *
 * // Override at a specific breakpoint
 * <Component prop={{ base: "value", sm: "override" }} />
 * <Component prop={{ base: "value", md: "override" }} />
 * <Component prop={{ base: "value", lg: "override" }} />
 * <Component prop={{ base: "value", xl: "override" }} />
 * <Component prop={{ base: "value", "2xl": "override" }} />
 *
 * // Override at multiple breakpoints
 * <Component prop={{ base: "value", sm: "override", lg: "override" }} />
 *
 * // Override at a custom-defined breakpoint
 * <Component prop={{ base: "value", srylius: "override" }} />
 * ```
 *
 * ---
 * _Custom keys (e.g. "srylius") are supported if defined in your configuration file._
 */
type Responsive<T extends object | boolean | string | number> = T | Partial<Record<Breakpoint, T>>

/**
 * Responsive trait mapping across media max breakpoints.
 *
 * **Syntax**
 * - `{ max-value: "*" }` → `max-value:*` — applies below a **max-value** breakpoint
 *
 * **Query**
 * - `{ max-sm: "*" }` → `max-sm:*` — overrides below the **sm** breakpoint
 * - `{ max-md: "*" }` → `max-md:*` — overrides below the **md** breakpoint
 * - `{ max-lg: "*" }` → `max-lg:*` — overrides below the **lg** breakpoint
 * - `{ max-xl: "*" }` → `max-xl:*` — overrides below the **xl** breakpoint
 * - `{ max-2xl: "*" }` → `max-2xl:*` — overrides below the **2xl** breakpoint
 *
 * **Custom**
 * - `{ max-value: "*" }` → `max-value:*` — overrides below a **custom-defined** breakpoint
 * - `{ max-[value]: "*" }` → `max-[value]:*` — overrides below an **arbitrary** breakpoint
 *
 * **Usage**
 * ```tsx
 * // Static value (no media query)
 * <Component prop="value" />

 * // Applies universally
 * <Component prop={{ base: "value" }} />

 * // Override at a specific breakpoint
 * <Component prop={{ base: "value", max-sm: "override" }} />
 * <Component prop={{ base: "value", max-md: "override" }} />
 * <Component prop={{ base: "value", max-lg: "override" }} />
 * <Component prop={{ base: "value", max-xl: "override" }} />
 * <Component prop={{ base: "value", max-2xl: "override" }} />
 *
 * // Override at an arbitrary breakpoint
 * <Component prop={{ base: "value", "max-[960px]": "override" }} />
 *
 * // Override at multiple breakpoints
 * <Component prop={{ base: "value", max-sm: "override", max-lg: "override" }} />
 *
 * // Override at a custom-defined breakpoint
 * <Component prop={{ base: "value", max-srylius: "override" }} />
 * ```
 *
 * ---
 * _Custom keys (e.g. `"max-srylius"`) are supported if defined in your configuration file._
 */
type ResponsiveMax<T extends object | boolean | string | number> = T | Partial<Record<BreakpointMax, T>>

/**
 * Responsive trait mapping across media min breakpoints.
 *
 * **Syntax**
 * - `{ min-value : "*" }` → `min-value:*` — applies at a **min-value** breakpoint
 *
 * **Query**
 * - `{ min-sm: "*" }` → `min-sm:*` — overrides at the **sm** breakpoint
 * - `{ min-md: "*" }` → `min-md:*` — overrides at the **md** breakpoint
 * - `{ min-lg: "*" }` → `min-lg:*` — overrides at the **lg** breakpoint
 * - `{ min-xl: "*" }` → `min-xl:*` — overrides at the **xl** breakpoint
 * - `{ min-2xl: "*" }` → `min-2xl:*` — overrides at the **2xl** breakpoint
 *
 * **Custom**
 * - `{ min-value: "*" }` → `min-value:*` — overrides at a **custom-defined** breakpoint
 * - `{ min-[value]: "*" }` → `min-[value]:*` — overrides at an **arbitrary** breakpoint
 *
 * **Usage**
 * ```tsx
 * // Static value (no media query)
 * <Component prop="value" />

 * // Applies universally
 * <Component prop={{ base: "value" }} />

 * // Override at a specific breakpoint
 * <Component prop={{ base: "value", min-sm: "override" }} />
 * <Component prop={{ base: "value", min-md: "override" }} />
 * <Component prop={{ base: "value", min-lg: "override" }} />
 * <Component prop={{ base: "value", min-xl: "override" }} />
 * <Component prop={{ base: "value", min-2xl: "override" }} />

 * // Override at an arbitrary breakpoint
 * <Component prop={{ base: "value", "min-[480px]": "override" }} />

 * // Override at multiple breakpoints
 * <Component prop={{ base: "value", min-sm: "override", min-lg: "override" }} />

 * // Override at a custom-defined breakpoint
 * <Component prop={{ base: "value", min-srylius: "override" }} />
 * ```
 *
 * ---
 * _Custom keys (e.g. `"min-srylius"`) are supported if defined in your configuration file._
 */
type ResponsiveMin<T extends object | boolean | string | number> = T | Partial<Record<BreakpointMin, T>>

/**
 * Responsive trait mapping across media breakpoint ranges.
 *
 * **Syntax**
 * - `{ value:max-value: "*" }` → `value:max-value:*`  — applies within a **value** to **max-value** breakpoint range
 *
 * **Query**
 * - `{ sm:max-md: "*" }` → `sm:max-md:*` — overrides within the **sm** to **max-md** range
 * - `{ sm:max-lg: "*" }` → `sm:max-lg:*` — overrides within the **sm** to **max-lg** range
 * - `{ sm:max-xl: "*" }` → `sm:max-xl:*` — overrides within the **sm** to **max-xl** range
 * - `{ sm:max-2xl: "*" }` → `sm:max-2xl:*` — overrides within the **sm** to **max-2xl** range
 * - `{ md:max-lg: "*" }` → `md:max-lg:*` — overrides within the **md** to **max-lg** range
 * - `{ md:max-xl: "*" }` → `md:max-xl:*` —  overrides within the **md** to **max-xl** range
 * - `{ md:max-2xl: "*" }` → `md:max-2xl:*` —  overrides within the **md** to **max-2xl** range
 * - `{ lg:max-xl: "*" }` → `lg:max-xl:*` —  overrides within the **lg** to **max-xl** range
 * - `{ lg:max-2xl: "*" }` → `lg:max-2xl:*` — overrides within the **lg** to **max-2xl** range
 * - `{ xl:max-2xl: "*" }` → `xl:max-2xl:*` — overrides within the **xl** to **max-2xl** range
 *
 * **Custom**
 * - `{ value:max-value: "*" }` → `value:max-value:*` — overrides at a **custom-defined** breakpoint
 * - `{ value:max-[value]: "*" }` → `value:max-[value]:*` — overrides within an **arbitrary** breakpoint range
 *
 * **Usage**
 * ```tsx
 * // Static value (no media query)
 * <Component prop="value" />
 *
 * // Applies universally
 * <Component prop={{ base: "value" }} />
 *
 * // Override within a specific breakpoint range
 * <Component prop={{ base: "value", "sm:max-md": "override" }} />
 * <Component prop={{ base: "value", "md:max-xl": "override" }} />
 *
 * // Override within an arbitrary breakpoint range
 * <Component prop={{ base: "value", "sm:max-[960px]": "override" }} />
 *
 * // Override across multiple breakpoint ranges
 * <Component prop={{ base: "value", "sm:max-md": "override", "lg:max-2xl": "override" }} />
 *
 * // Override within a custom-defined breakpoint range
 * <Component prop={{ base: "value", "srylius:max-srylius": "override" }} />
 * ```
 *
 * ---
 * _Custom keys (e.g. "srylius","max-srylius") are supported if defined in your configuration file._
 */
type ResponsiveRange<T extends object | boolean | string | number> = T | Partial<Record<BreakpointRange, T>>

/**
 * Responsive trait mapping across all media query types.
 *
 * **Syntax**
 * - `{ value: "*" }` → `value:*` — applies at a **value** breakpoint
 * - `{ max-value: "*" }` → `max-value:*` — applies below a **max-value** breakpoint
 * - `{ min-value : "*" }` → `min-value:*` — applies at a **min-value** breakpoint
 * - `{ value:max-value: "*" }` → `value:max-value:*`  — applies within a **value** to **max-value** breakpoint range
 *
 * **Query**
 * - `{ sm: "*" }` → `sm:*` — overrides at the **sm** breakpoint
 * - `{ md: "*" }` → `md:*` — overrides at the **md** breakpoint
 * - `{ lg: "*" }` → `lg:*` — overrides at the **lg** breakpoint
 * - `{ xl: "*" }` → `xl:*` — overrides at the **xl** breakpoint
 * - `{ 2xl: "*" }` → `2xl:*` — overrides at the **2xl** breakpoint
 *
 * **Query (Max)**
 * - `{ max-sm: "*" }` → `max-sm:*` — overrides below the **sm** breakpoint
 * - `{ max-md: "*" }` → `max-md:*` — overrides below the **md** breakpoint
 * - `{ max-lg: "*" }` → `max-lg:*` — overrides below the **lg** breakpoint
 * - `{ max-xl: "*" }` → `max-xl:*` — overrides below the **xl** breakpoint
 * - `{ max-2xl: "*" }` → `max-2xl:*` — overrides below the **2xl** breakpoint
 *
 * **Query (Min)**
 * - `{ min-sm: "*" }` → `min-sm:*` — overrides at the **sm** breakpoint
 * - `{ min-md: "*" }` → `min-md:*` — overrides at the **md** breakpoint
 * - `{ min-lg: "*" }` → `min-lg:*` — overrides at the **lg** breakpoint
 * - `{ min-xl: "*" }` → `min-xl:*` — overrides at the **xl** breakpoint
 * - `{ min-2xl: "*" }` → `min-2xl:*` — overrides at the **2xl** breakpoint
 *
 * **Query (Range)**
 * - `{ sm:max-md: "*" }` → `sm:max-md:*` — overrides within the **sm** to **max-md** range
 * - `{ sm:max-lg: "*" }` → `sm:max-lg:*` — overrides within the **sm** to **max-lg** range
 * - `{ sm:max-xl: "*" }` → `sm:max-xl:*` — overrides within the **sm** to **max-xl** range
 * - `{ sm:max-2xl: "*" }` → `sm:max-2xl:*` — overrides within the **sm** to **max-2xl** range
 * - `{ md:max-lg: "*" }` → `md:max-lg:*` — overrides within the **md** to **max-lg** range
 * - `{ md:max-xl: "*" }` → `md:max-xl:*` —  overrides within the **md** to **max-xl** range
 * - `{ md:max-2xl: "*" }` → `md:max-2xl:*` —  overrides within the **md** to **max-2xl** range
 * - `{ lg:max-xl: "*" }` → `lg:max-xl:*` —  overrides within the **lg** to **max-xl** range
 * - `{ lg:max-2xl: "*" }` → `lg:max-2xl:*` — overrides within the **lg** to **max-2xl** range
 * - `{ xl:max-2xl: "*" }` → `xl:max-2xl:*` — overrides within the **xl** to **max-2xl** range
 *
 * **Custom**
 * - `{ value: "*" }` → `value:*` — overrides at a **custom-defined** breakpoint
 * - `{ max-value: "*" }` → `max-value:*` — overrides below a **custom-defined** breakpoint
 * - `{ max-[value]: "*" }` → `max-[value]:*` — overrides below an **arbitrary** breakpoint
 * - `{ min-value: "*" }` → `min-value:*` — overrides at a **custom-defined** breakpoint
 * - `{ min-[value]: "*" }` → `min-[value]:*` — overrides at an **arbitrary** breakpoint
 * - `{ value:max-value: "*" }` → `value:max-value:*` — overrides at a **custom-defined** breakpoint
 * - `{ value:max-[value]: "*" }` → `value:max-[value]:*` — overrides within an **arbitrary** breakpoint range
 *
 * ---
 * _Custom keys (e.g. "srylius", "max-srylius", "min-srylius") are supported if defined in your configuration file._
 */
type ResponsiveQuery<T extends object | boolean | string | number> =
  | T
  | Responsive<T>
  | ResponsiveMax<T>
  | ResponsiveMin<T>
  | ResponsiveRange<T>

// Exports
export type {
  Responsive,
  ResponsiveMax,
  ResponsiveMin,
  ResponsiveRange,
  ResponsiveQuery
}
