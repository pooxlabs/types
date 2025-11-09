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

/**
 * Responsive trait mapping across container breakpoints.
 *
 * **Syntax**
 * - `{ @value: "*" }` → `value:*` — applies at a **value** breakpoint
 * - `{ @value/name: "*" }` → `@value/name:*` — applies at a **value** breakpoint **(n)**
 *
 * **Query**
 * - `{ @3xs: "*" }` → `@3xs:*` — overrides at the **@3xs** breakpoint
 * - `{ @2xs: "*" }` → `@2xs:*` — overrides at the **@2xs** breakpoint
 * - `{ @xs: "*" }` → `@xs:*` — overrides at the **@xs** breakpoint
 * - `{ @sm: "*" }` → `@sm:*` — overrides at the **@sm** breakpoint
 * - `{ @md: "*" }` → `@md:*` — overrides at the **@md** breakpoint
 * - `{ @lg: "*" }` → `@lg:*` — overrides at the **@lg** breakpoint
 * - `{ @xl: "*" }` → `@xl:*` — overrides at the **@xl** breakpoint
 * - `{ @2xl: "*" }` → `@2xl:*` — overrides at the **@2xl** breakpoint
 * - `{ @3xl: "*" }` → `@3xl:*` — overrides at the **@3xl** breakpoint
 * - `{ @4xl: "*" }` → `@4xl:*` — overrides at the **@4xl** breakpoint
 * - `{ @5xl: "*" }` → `@5xl:*` — overrides at the **@5xl** breakpoint
 * - `{ @6xl: "*" }` → `@6xl:*` — overrides at the **@6xl** breakpoint
 * - `{ @7xl: "*" }` → `@7xl:*` — overrides at the **@7xl** breakpoint
 *
 * **Custom**
 * - `{ @value: "*" }` → `@value:*` — overrides at a **custom-defined** breakpoint
 * - `{ @value/name: "*" }` → `@value/name:*` — overrides at a **custom-defined** breakpoint **(n)**
 *
 * **Example**
 * ```tsx
 * // Static value (no media query)
 * <Component prop="value" />
 *
 * // Applies universally
 * <Component prop={{ base: "value" }} />
 *
 * // Override at a specific breakpoint
 * <Component prop={{ base: "value", "@3xs": "override" }} />
 * <Component prop={{ base: "value", "@2xs": "override" }} />
 * <Component prop={{ base: "value", "@xs": "override" }} />
 * <Component prop={{ base: "value", "@sm": "override" }} />
 * <Component prop={{ base: "value", "@md": "override" }} />
 * <Component prop={{ base: "value", "@lg": "override" }} />
 * <Component prop={{ base: "value", "@xl": "override" }} />
 * <Component prop={{ base: "value", "@2xl": "override" }} />
 * <Component prop={{ base: "value", "@3xl": "override" }} />
 * <Component prop={{ base: "value", "@4xl": "override" }} />
 * <Component prop={{ base: "value", "@5xl": "override" }} />
 * <Component prop={{ base: "value", "@6xl": "override" }} />
 * <Component prop={{ base: "value", "@7xl": "override" }} />
 *
 * // Override at a specific breakpoint (n)
 * <Component prop={{ base: "value", "@3xs/foo": "override" }} />
 *
 * // Override at multiple breakpoints
 * <Component prop={{ base: "value", "@3xs": "override", "@md": "override" }} />
 *
 * // Override at multiple breakpoints (n)
 * <Component prop={{ base: "value", "@3xs/foo": "override", "@md/foo": "override" }} />
 *
 * // Override at a custom-defined breakpoint
 * <Component prop={{ base: "value", "@srylius": "override" }} />
 *
 * // Override at an custom-defined breakpoint (n)
 * <Component prop={{ base: "value", "@srylius/foo": "override" }} />
 * ```
 *
 * ---
 * _Custom keys (e.g. "@srylius") are supported if defined in your configuration file._
 */
type ContainerResponsive<T extends object | boolean | string | number> = T | Partial<Record<BreakpointContainer, T>>

/**
 * Responsive trait mapping across container max breakpoints.
 *
 * **Syntax**
 * - `{ @max-value: "*" }` → `@max-value:*` — applies below a **@max-value** breakpoint
 * - `{ @max-value/name: "*" }` → `@max-value/name:*` — applies below a **@max-value** breakpoint **(n)**
 *
 * **Query**
 * - `{ @max-3xs: "*" }` → `@max-3xs:*` — overrides below the **@max-3xs** breakpoint
 * - `{ @max-2xs: "*" }` → `@max-2xs:*` — overrides below the **@max-2xs** breakpoint
 * - `{ @max-xs: "*" }` → `@max-xs:*` — overrides below the **@max-xs** breakpoint
 * - `{ @max-sm: "*" }` → `@max-sm:*` — overrides below the **@max-sm** breakpoint
 * - `{ @max-md: "*" }` → `@max-md:*` — overrides below the **@max-md** breakpoint
 * - `{ @max-lg: "*" }` → `@max-lg:*` — overrides below the **@max-lg** breakpoint
 * - `{ @max-xl: "*" }` → `@max-xl:*` — overrides below the **@max-xl** breakpoint
 * - `{ @max-2xl: "*" }` → `@max-xl:*` — overrides below the **@max-2xl** breakpoint
 * - `{ @max-3xl: "*" }` → `@max-3xl:*` — overrides below the **@max-3xl** breakpoint
 * - `{ @max-4xl: "*" }` → `@max-4xl:*` — overrides below the **@max-4xl** breakpoint
 * - `{ @max-5xl: "*" }` → `@max-5xl:*` — overrides below the **@max-5xl** breakpoint
 * - `{ @max-6xl: "*" }` → `@max-6xl:*` — overrides below the **@max-6xl** breakpoint
 * - `{ @max-7xl: "*" }` → `@max-7xl:*` — overrides below the **@max-7xl** breakpoint
 *
 * **Custom**
 * - `{ @max-value: "*" }` → `@max-value:*` — overrides below a **custom-defined** breakpoint
 * - `{ @max-value/name: "*" }` → `@max-value/name:*` — overrides below a **custom-defined** breakpoint **(n)**
 * - `{ @max-[value]: "*" }` → `@max-[value]:*` — overrides below an **arbitrary** breakpoint
 * - `{ @max-[value]/name: "*" }` → `@max-[value]/name:*` — overrides below an **arbitrary** breakpoint **(n)**
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
 * <Component prop={{ base: "value", "@max-3xs": "override" }} />
 * <Component prop={{ base: "value", "@max-2xs": "override" }} />
 * <Component prop={{ base: "value", "@max-xs": "override" }} />
 * <Component prop={{ base: "value", "@max-sm": "override" }} />
 * <Component prop={{ base: "value", "@max-md": "override" }} />
 * <Component prop={{ base: "value", "@max-lg": "override" }} />
 * <Component prop={{ base: "value", "@max-xl": "override" }} />
 * <Component prop={{ base: "value", "@max-2xl": "override" }} />
 * <Component prop={{ base: "value", "@max-3xl": "override" }} />
 * <Component prop={{ base: "value", "@max-4xl": "override" }} />
 * <Component prop={{ base: "value", "@max-5xl": "override" }} />
 * <Component prop={{ base: "value", "@max-6xl": "override" }} />
 * <Component prop={{ base: "value", "@max-7xl": "override" }} />
 *
 * // Override at an specific breakpoint (n)
 * <Component prop={{ base: "value", "@max-3xs/foo": "override" }} />
 *
 * // Override at an arbitrary breakpoint
 * <Component prop={{ base: "value", "@max-[960px]": "override" }} />
 *
 * // Override at an arbitrary breakpoint (n)
 * <Component prop={{ base: "value", "@max-[960px]/foo": "override" }} />
 *
 * // Override at multiple breakpoints
 * <Component prop={{ base: "value", "@max-sm": "override", "@max-lg": "override" }} />
 *
 * // Override at multiple breakpoints (n)
 * <Component prop={{ base: "value", "@max-sm/foo": "override", "@max-lg/foo": "override" }} />
 *
 * // Override at a custom-defined breakpoint
 * <Component prop={{ base: "value", "@max-srylius": "override" }} />
 *
 * // Override at a custom-defined breakpoint (n)
 * <Component prop={{ base: "value", "@max-srylius/foo": "override" }} />
 * ```
 *
 * ---
 * _Custom keys (e.g. `"@max-srylius"`) are supported if defined in your configuration file._
 */
type ContainerResponsiveMax<T extends object | boolean | string | number> = T | Partial<Record<BreakpointContainerMax, T>>

/**
 * Responsive trait mapping across container min breakpoints.
 *
 * **Syntax**
 * - `{ @min-value: "*" }` → `@min-value:*` —  applies at a **@min-value** breakpoint
 * - `{ @min-value/name: "*" }` → `@min-value/name:*` —  applies at a **@min-value** breakpoint **(n)**
 *
 * **Query**
 * - `{ @min-3xs: "*" }` → `@min-3xs:*` — overrides at the **@min-3xs** breakpoint
 * - `{ @min-2xs: "*" }` → `@min-2xs:*` — overrides at the **@min-2xs** breakpoint
 * - `{ @min-xs: "*" }` → `@min-xs:*` — overrides at the **@min-xs** breakpoint
 * - `{ @min-sm: "*" }` → `@min-sm:*` — overrides at the **@min-sm** breakpoint
 * - `{ @min-md: "*" }` → `@min-md:*` — overrides at the **@min-md** breakpoint
 * - `{ @min-lg: "*" }` → `@min-lg:*` — overrides at the **@min-lg** breakpoint
 * - `{ @min-xl: "*" }` → `@min-xl:*` — overrides at the **@min-xl** breakpoint
 * - `{ @min-2xl: "*" }` → `@min-xl:*` — overrides at the **@min-2xl** breakpoint
 * - `{ @min-3xl: "*" }` → `@min-3xl:*` — overrides at the **@min-3xl** breakpoint
 * - `{ @min-4xl: "*" }` → `@min-4xl:*` — overrides at the **@min-4xl** breakpoint
 * - `{ @min-5xl: "*" }` → `@min-5xl:*` — overrides at the **@min-5xl** breakpoint
 * - `{ @min-6xl: "*" }` → `@min-6xl:*` — overrides at the **@min-6xl** breakpoint
 * - `{ @min-7xl: "*" }` → `@min-7xl:*` — overrides at the **@min-7xl** breakpoint
 *
 * **Custom**
 * - `{ @min-value: "*" }` → `@min-value:*` — overrides below a **custom-defined** breakpoint
 * - `{ @min-value/name: "*" }` → `@min-value/name:*` — overrides below a **custom-defined** breakpoint **(n)**
 * - `{ @min-[value]: "*" }` → `@min-[value]:*` — overrides below an **arbitrary** breakpoint
 * - `{ @min-[value]/name: "*" }` → `@min-[value]/name:*` — overrides below an **arbitrary** breakpoint **(n)**
 *
 * **Usage**
 * ```tsx
 * // Static value (no container query)
 * <Component prop="value" />
 *
 * // Applies universally
 * <Component prop={{ base: "value" }} />
 *
 * // Override at a specific breakpoint
 * <Component prop={{ base: "value", "@min-3xs": "override" }} />
 * <Component prop={{ base: "value", "@min-2xs": "override" }} />
 * <Component prop={{ base: "value", "@min-xs": "override" }} />
 * <Component prop={{ base: "value", "@min-sm": "override" }} />
 * <Component prop={{ base: "value", "@min-md": "override" }} />
 * <Component prop={{ base: "value", "@min-lg": "override" }} />
 * <Component prop={{ base: "value", "@min-xl": "override" }} />
 * <Component prop={{ base: "value", "@min-2xl": "override" }} />
 * <Component prop={{ base: "value", "@min-3xl": "override" }} />
 * <Component prop={{ base: "value", "@min-4xl": "override" }} />
 * <Component prop={{ base: "value", "@min-5xl": "override" }} />
 * <Component prop={{ base: "value", "@min-6xl": "override" }} />
 * <Component prop={{ base: "value", "@min-7xl": "override" }} />
 *
 * // Override at an specific breakpoint (n)
 * <Component prop={{ base: "value", "@min-3xs/foo": "override" }} />
 *
 * // Override at an arbitrary breakpoint
 * <Component prop={{ base: "value", "@min-[960px]": "override" }} />
 *
 * // Override at an arbitrary breakpoint (n)
 * <Component prop={{ base: "value", "@min-[960px]/foo": "override" }} />
 *
 * // Override at multiple breakpoints
 * <Component prop={{ base: "value", "@min-sm": "override", "@min-lg": "override" }} />
 *
 * // Override at multiple breakpoints (n)
 * <Component prop={{ base: "value", "@min-sm/foo": "override", "@min-lg/foo": "override" }} />
 *
 * // Override at a custom-defined breakpoint
 * <Component prop={{ base: "value", "@min-srylius": "override" }} />
 *
 * // Override at a custom-defined breakpoint (n)
 * <Component prop={{ base: "value", "@min-srylius/foo": "override" }} />
 * ```
 *
 * ---
 * _Custom keys (e.g. `"@min-srylius"`) are supported if defined in your configuration file._
 */
type ContainerResponsiveMin<T extends object | boolean | string | number> = T | Partial<Record<BreakpointContainerMin, T>>

/**
 * Responsive trait mapping across container breakpoint ranges.
 *
 * **Syntax**
 * - `{ @value:@max-value: "*" }` → `@value:@max-value:*`  — applies within a **@value** to **@max-value** breakpoint range
 * - `{ @value/name:@max-value: "*" }` → `@value/name:@max-value:*`  — applies within a **@value** to **@max-value** breakpoint range **(n)**
 * - `{ @value:@max-value/name: "*" }` → `@value:@max-value/name:*`  — applies within a **@value** to **@max-value** breakpoint range **(n)**
 *
 * **Query**
 * - `{ @3xs:@max-2xs: "*" }` → `@3xs:@max-2xs:*` — overrides within the **@3xs** to **@max-2xs** range
 * - `{ @3xs:@max-xs: "*" }` → `@3xs:@max-xs:*` — overrides within the **@3xs** to **@max-xs** range
 * - `{ @3xs:@max-sm: "*" }` → `@3xs:@max-sm:*` —  overrides within the **@3xs** to **@max-sm** range
 * - `{ @3xs:@max-md: "*" }` → `@3xs:@max-md:*` — overrides within the **@3xs** to **@max-md** range
 * - `{ @3xs:@max-lg: "*" }` → `@3xs:@max-lg:*` — overrides within the **@3xs** to **@max-lg** range
 * - `{ @3xs:@max-xl: "*" }` → `@3xs:@max-xl:*` — overrides within the **@3xs** to **@max-xl** range
 * - `{ @3xs:@max-2xl: "*" }` → `@3xs:@max-2xl:*` — overrides within the **@3xs** to **@max-2xl** range
 * - `{ @3xs:@max-3xl: "*" }` → `@3xs:@max-3xl:*` — overrides within the **@3xs** to **@max-3xl** range
 * - `{ @3xs:@max-4xl: "*" }` → `@3xs:@max-4xl:*` — overrides within the **@3xs** to **@max-4xl** range
 * - `{ @3xs:@max-5xl: "*" }` → `@3xs:@max-5xl:*` — overrides within the **@3xs** to **@max-5xl** range
 * - `{ @3xs:@max-6xl: "*" }` → `@3xs:@max-6xl:*` — overrides within the **@3xs** to **@max-6xl** range
 * - `{ @3xs:@max-7xl: "*" }` → `@3xs:@max-7xl:*` — overrides within the **@3xs** to **@max-7xl** range
 * ---
 * - `{ @2xs:@max-xs: "*" }` → `@2xs:@max-xs:*` — overrides within the **@2xs** to **@max-xs** range
 * - `{ @2xs:@max-sm: "*" }` → `@2xs:@max-sm:*` — overrides within the **@2xs** to **@max-sm** range
 * - `{ @2xs:@max-md: "*" }` → `@2xs:@max-md:*` — overrides within the **@2xs** to **@max-md** range
 * - `{ @2xs:@max-lg: "*" }` → `@2xs:@max-lg:*` — overrides within the **@2xs** to **@max-lg** range
 * - `{ @2xs:@max-xl: "*" }` → `@2xs:@max-xl:*` — overrides within the **@2xs** to **@max-xl** range
 * - `{ @2xs:@max-2xl: "*" }` → `@2xs:@max-2xl:*` — overrides within the **@2xs** to **@max-2xl** range
 * - `{ @2xs:@max-3xl: "*" }` → `@2xs:@max-3xl:*` — overrides within the **@2xs** to **@max-3xl** range
 * - `{ @2xs:@max-4xl: "*" }` → `@2xs:@max-4xl:*` — overrides within the **@2xs** to **@max-4xl** range
 * - `{ @2xs:@max-5xl: "*" }` → `@2xs:@max-5xl:*` — overrides within the **@2xs** to **@max-5xl** range
 * - `{ @2xs:@max-6xl: "*" }` → `@2xs:@max-6xl:*` — overrides within the **@2xs** to **@max-6xl** range
 * - `{ @2xs:@max-7xl: "*" }` → `@2xs:@max-7xl:*` — overrides within the **@2xs** to **@max-7xl** range
 * ---
 * - `{ @xs:@max-sm: "*" }` → `@xs:@max-sm:*` — overrides within the **@xs** to **@max-sm** range
 * - `{ @xs:@max-md: "*" }` → `@xs:@max-md:*` — overrides within the **@xs** to **@max-md** range
 * - `{ @xs:@max-lg: "*" }` → `@xs:@max-lg:*` — overrides within the **@xs** to **@max-lg** range
 * - `{ @xs:@max-xl: "*" }` → `@xs:@max-xl:*` — overrides within the **@xs** to **@max-xl** range
 * - `{ @xs:@max-2xl: "*" }` → `@xs:@max-2xl:*` — overrides within the **@xs** to **@max-2xl** range
 * - `{ @xs:@max-3xl: "*" }` → `@xs:@max-3xl:*` — overrides within the **@xs** to **@max-3xl** range
 * - `{ @xs:@max-4xl: "*" }` → `@xs:@max-4xl:*` — overrides within the **@xs** to **@max-4xl** range
 * - `{ @xs:@max-5xl: "*" }` → `@xs:@max-5xl:*` — overrides within the **@xs** to **@max-5xl** range
 * - `{ @xs:@max-6xl: "*" }` → `@xs:@max-6xl:*` — overrides within the **@xs** to **@max-6xl** range
 * - `{ @xs:@max-7xl: "*" }` → `@xs:@max-7xl:*` — overrides within the **@xs** to **@max-7xl** range
 * ---
 * - `{ @sm:@max-md: "*" }` → `@sm:@max-md:*` — overrides within the **@sm** to **@max-md** range
 * - `{ @sm:@max-lg: "*" }` → `@sm:@max-lg:*` — overrides within the **@sm** to **@max-lg** range
 * - `{ @sm:@max-xl: "*" }` → `@sm:@max-xl:*` — overrides within the **@sm** to **@max-xl** range
 * - `{ @sm:@max-2xl: "*" }` → `@sm:@max-2xl:*` — overrides within the **@sm** to **@max-2xl** range
 * - `{ @sm:@max-3xl: "*" }` → `@sm:@max-3xl:*` — overrides within the **@sm** to **@max-3xl** range
 * - `{ @sm:@max-4xl: "*" }` → `@sm:@max-4xl:*` — overrides within the **@sm** to **@max-4xl** range
 * - `{ @sm:@max-5xl: "*" }` → `@sm:@max-5xl:*` — overrides within the **@sm** to **@max-5xl** range
 * - `{ @sm:@max-6xl: "*" }` → `@sm:@max-6xl:*` — overrides within the **@sm** to **@max-6xl** range
 * - `{ @sm:@max-7xl: "*" }` → `@sm:@max-7xl:*` — overrides within the **@sm** to **@max-7xl** range
 * ---
 * - `{ @md:@max-lg: "*" }` → `@md:@max-lg:*` — overrides within the **@md** to **@max-lg** range
 * - `{ @md:@max-xl: "*" }` → `@md:@max-xl:*` — overrides within the **@md** to **@max-xl** range
 * - `{ @md:@max-2xl: "*" }` → `@md:@max-2xl:*` — overrides within the **@md** to **@max-2xl** range
 * - `{ @md:@max-3xl: "*" }` → `@md:@max-3xl:*` — overrides within the **@md** to **@max-3xl** range
 * - `{ @md:@max-4xl: "*" }` → `@md:@max-4xl:*` — overrides within the **@md** to **@max-4xl** range
 * - `{ @md:@max-5xl: "*" }` → `@md:@max-5xl:*` — overrides within the **@md** to **@max-5xl** range
 * - `{ @md:@max-6xl: "*" }` → `@md:@max-6xl:*` — overrides within the **@md** to **@max-6xl** range
 * - `{ @md:@max-7xl: "*" }` → `@md:@max-7xl:*` — overrides within the **@md** to **@max-7xl** range
 *  ---
 * - `{ @lg:@max-xl: "*" }` → `@lg:@max-xl:*` — overrides within the **@lg** to **@max-xl** range
 * - `{ @lg:@max-2xl: "*" }` → `@lg:@max-2xl:*` — overrides within the **@lg** to **@max-2xl** range
 * - `{ @lg:@max-3xl: "*" }` → `@lg:@max-3xl:*` — overrides within the **@lg** to **@max-3xl** range
 * - `{ @lg:@max-4xl: "*" }` → `@lg:@max-4xl:*` — overrides within the **@lg** to **@max-4xl** range
 * - `{ @lg:@max-5xl: "*" }` → `@lg:@max-5xl:*` — overrides within the **@lg** to **@max-5xl** range
 * - `{ @lg:@max-6xl: "*" }` → `@lg:@max-6xl:*` — overrides within the **@lg** to **@max-6xl** range
 * - `{ @lg:@max-7xl: "*" }` → `@lg:@max-7xl:*` — overrides within the **@lg** to **@max-7xl** range
 * ---
 * - `{ @xl:@max-2xl: "*" }` → `@xl:@max-2xl:*` — overrides within the **@xl** to **@max-2xl** range
 * - `{ @xl:@max-3xl: "*" }` → `@xl:@max-3xl:*` — overrides within the **@xl** to **@max-3xl** range
 * - `{ @xl:@max-4xl: "*" }` → `@xl:@max-4xl:*` — overrides within the **@xl** to **@max-4xl** range
 * - `{ @xl:@max-5xl: "*" }` → `@xl:@max-5xl:*` — overrides within the **@xl** to **@max-5xl** range
 * - `{ @xl:@max-6xl: "*" }` → `@xl:@max-6xl:*` — overrides within the **@xl** to **@max-6xl** range
 * - `{ @xl:@max-7xl: "*" }` → `@xl:@max-7xl:*` — overrides within the **@xl** to **@max-7xl** range
 * ---
 * - `{ @2xl:@max-3xl: "*" }` → `@2xl:@max-3xl:*` — overrides within the **@2xl** to **@max-3xl** range
 * - `{ @2xl:@max-4xl: "*" }` → `@2xl:@max-4xl:*` — overrides within the **@2xl** to **@max-4xl** range
 * - `{ @2xl:@max-5xl: "*" }` → `@2xl:@max-5xl:*` — overrides within the **@2xl** to **@max-5xl** range
 * - `{ @2xl:@max-6xl: "*" }` → `@2xl:@max-6xl:*` — overrides within the **@2xl** to **@max-6xl** range
 * - `{ @2xl:@max-7xl: "*" }` → `@2xl:@max-7xl:*` — overrides within the **@2xl** to **@max-7xl** range
 * ---
 * - `{ @3xl:@max-4xl: "*" }` → `@3xl:@max-4xl:*` — overrides within the **@3xl** to **@max-4xl** range
 * - `{ @3xl:@max-5xl: "*" }` → `@3xl:@max-5xl:*` — overrides within the **@3xl** to **@max-5xl** range
 * - `{ @3xl:@max-6xl: "*" }` → `@3xl:@max-6xl:*` — overrides within the **@3xl** to **@max-6xl** range
 * - `{ @3xl:@max-7xl: "*" }` → `@3xl:@max-7xl:*` — overrides within the **@3xl** to **@max-7xl** range
 * ---
 * - `{ @4xl:@max-5xl: "*" }` → `@4xl:@max-7xl:*` — overrides within the **@4xl** to **@max-5xl** range
 * - `{ @4xl:@max-6xl: "*" }` → `@4xl:@max-7xl:*` — overrides within the **@4xl** to **@max-6xl** range
 * - `{ @4xl:@max-7xl: "*" }` → `@4xl:@max-7xl:*` — overrides within the **@4xl** to **@max-7xl** range
 * ---
 * - `{ @5xl:@max-6xl: "*" }` → `@5xl:@max-6xl:*` — overrides within the **@5xl** to **@max-6xl** range
 * - `{ @5xl:@max-7xl: "*" }` → `@5xl:@max-7xl:*` — overrides within the **@5xl** to **@max-7xl** range
 * ---
 * - `{ @6xl:@max-7xl: "*" }` → `@6xl:@max-7xl:*` — overrides within the **@6xl** to **@max-7xl** range
 *
 * **Custom**
 * - `{ @value:@max-value: "*" }` → `@value:@max-value:*` — overrides at a **custom-defined** breakpoint
 * - `{ @value/name:@max-value: "*" }` → `@value/name:@max-value:*` — overrides at a **custom-defined** breakpoint **(n)**
 * - `{ @value:@max-value/name: "*" }` → `@value:@max-value/name:*` — overrides at a **custom-defined** breakpoint **(n)**
 * - `{ @value:@max-[value]: "*" }` → `@value:@max-[value]:*` — overrides within an **arbitrary** breakpoint range
 * - `{ @value/name:@max-[value]: "*" }` → `@value/name:@max-[value]:*` — overrides within an **arbitrary** breakpoint range **(n)**
 * - `{ @value:@max-[value]/name: "*" }` → `@value:@max-[value]/name:*` — overrides within an **arbitrary** breakpoint range **(n)**
 *
 * **Usage**
 * ```tsx
 * // Static value (no container query)
 * <Component prop="value" />
 *
 * // Applies universally
 * <Component prop={{ base: "value" }} />
 *
 * // Override within a specific breakpoint range
 * <Component prop={{ base: "value", "@sm:@max-md": "override" }} />
 * <Component prop={{ base: "value", "@md:@max-xl": "override" }} />
 *
 * // Override within a specific breakpoint range (n)
 * <Component prop={{ base: "value", "@sm/foo:@max-md/foo": "override" }} />
 *
 * // Override within an arbitrary breakpoint range
 * <Component prop={{ base: "value", "@sm:@max-[960px]": "override" }} />
 *
 * // Override within an arbitrary breakpoint range (n)
 * <Component prop={{ base: "value", "@sm/foo:@max-[960px]/foo": "override" }} />
 *
 * // Override across multiple breakpoint ranges
 * <Component prop={{ base: "value", "@sm:@max-md": "override", "@lg:@max-2xl": "override" }} />
 *
 * // Override across multiple breakpoint ranges (n)
 * <Component prop={{ base: "value", "@sm/foo:@max-md/foo": "override", "@lg/foo:@max-xl/foo": "." }} />
 *
 * // Override within a custom-defined breakpoint range
 * <Component prop={{ base: "value", "@srylius:@max-srylius": "override" }} />
 *
 * // Override within a custom-defined breakpoint range (n)
 * <Component prop={{ base: "value", "@srylius/foo:@max-srylius/foo": "override" }} />
 * ```
 *
 * ---
 * _Custom keys (e.g. "srylius","max-srylius") are supported if defined in your configuration file._
 */
type ContainerResponsiveRange<T extends object | boolean | string | number> = T | Partial<Record<BreakpointContainerRange, T>>

/**
 * Responsive trait mapping across all container query types.
 *
 * **Syntax**
 * - `{ @value: "*" }` → `@value:*` — applies at a **value** breakpoint
 * - `{ @value/name: "*" }` → `@value/name:*` — applies at a **value** breakpoint **(n)**
 * - `{ @max-value: "*" }` → `@max-value:*` — applies below a **max-value** breakpoint
 * - `{ @max-value/name: "*" }` → `@max-value/name:*` — applies below a **max-value** breakpoint **(n)**
 * - `{ @min-value : "*" }` → `@min-value:*` — applies at a **min-value** breakpoint
 * - `{ @min-value/name : "*" }` → `@min-value/name:*` — applies at a **min-value** breakpoint **(n)**
 * - `{ @value:@max-value: "*" }` → `@value:@max-value:*`  — applies within a **value** to **max-value** breakpoint range
 * - `{ @value/name:@max-value: "*" }` → `@value/name:@max-value:*`  — applies within a **value** to **max-value** breakpoint range **(n)**
 * - `{ @value:@max-value/name: "*" }` → `@value:@max-value/name:*`  — applies within a **value** to **max-value** breakpoint range **(n)**
 *
 * **Query**
 * - `{ @3xs: "*" }` → `@3xs:*` — overrides at the **@3xs** breakpoint
 * - `{ @2xs: "*" }` → `@2xs:*` — overrides at the **@2xs** breakpoint
 * - `{ @xs: "*" }` → `@xs:*` — overrides at the **@xs** breakpoint
 * - `{ @sm: "*" }` → `@sm:*` — overrides at the **@sm** breakpoint
 * - `{ @md: "*" }` → `@md:*` — overrides at the **@md** breakpoint
 * - `{ @lg: "*" }` → `@lg:*` — overrides at the **@lg** breakpoint
 * - `{ @xl: "*" }` → `@xl:*` — overrides at the **@xl** breakpoint
 * - `{ @2xl: "*" }` → `@2xl:*` — overrides at the **@2xl** breakpoint
 * - `{ @3xl: "*" }` → `@3xl:*` — overrides at the **@3xl** breakpoint
 * - `{ @4xl: "*" }` → `@4xl:*` — overrides at the **@4xl** breakpoint
 * - `{ @5xl: "*" }` → `@5xl:*` — overrides at the **@5xl** breakpoint
 * - `{ @6xl: "*" }` → `@6xl:*` — overrides at the **@6xl** breakpoint
 * - `{ @7xl: "*" }` → `@7xl:*` — overrides at the **@7xl** breakpoint
 *
 * **Query (Max)**
 * - `{ @max-3xs: "*" }` → `@max-3xs:*` — overrides below the **@max-3xs** breakpoint
 * - `{ @max-2xs: "*" }` → `@max-2xs:*` — overrides below the **@max-2xs** breakpoint
 * - `{ @max-xs: "*" }` → `@max-xs:*` — overrides below the **@max-xs** breakpoint
 * - `{ @max-sm: "*" }` → `@max-sm:*` — overrides below the **@max-sm** breakpoint
 * - `{ @max-md: "*" }` → `@max-md:*` — overrides below the **@max-md** breakpoint
 * - `{ @max-lg: "*" }` → `@max-lg:*` — overrides below the **@max-lg** breakpoint
 * - `{ @max-xl: "*" }` → `@max-xl:*` — overrides below the **@max-xl** breakpoint
 * - `{ @max-2xl: "*" }` → `@max-xl:*` — overrides below the **@max-2xl** breakpoint
 * - `{ @max-3xl: "*" }` → `@max-3xl:*` — overrides below the **@max-3xl** breakpoint
 * - `{ @max-4xl: "*" }` → `@max-4xl:*` — overrides below the **@max-4xl** breakpoint
 * - `{ @max-5xl: "*" }` → `@max-5xl:*` — overrides below the **@max-5xl** breakpoint
 * - `{ @max-6xl: "*" }` → `@max-6xl:*` — overrides below the **@max-6xl** breakpoint
 * - `{ @max-7xl: "*" }` → `@max-7xl:*` — overrides below the **@max-7xl** breakpoint
 *
 * **Query (Min)**
 * - `{ @min-3xs: "*" }` → `@min-3xs:*` — overrides at the **@min-3xs** breakpoint
 * - `{ @min-2xs: "*" }` → `@min-2xs:*` — overrides at the **@min-2xs** breakpoint
 * - `{ @min-xs: "*" }` → `@min-xs:*` — overrides at the **@min-xs** breakpoint
 * - `{ @min-sm: "*" }` → `@min-sm:*` — overrides at the **@min-sm** breakpoint
 * - `{ @min-md: "*" }` → `@min-md:*` — overrides at the **@min-md** breakpoint
 * - `{ @min-lg: "*" }` → `@min-lg:*` — overrides at the **@min-lg** breakpoint
 * - `{ @min-xl: "*" }` → `@min-xl:*` — overrides at the **@min-xl** breakpoint
 * - `{ @min-2xl: "*" }` → `@min-xl:*` — overrides at the **@min-2xl** breakpoint
 * - `{ @min-3xl: "*" }` → `@min-3xl:*` — overrides at the **@min-3xl** breakpoint
 * - `{ @min-4xl: "*" }` → `@min-4xl:*` — overrides at the **@min-4xl** breakpoint
 * - `{ @min-5xl: "*" }` → `@min-5xl:*` — overrides at the **@min-5xl** breakpoint
 * - `{ @min-6xl: "*" }` → `@min-6xl:*` — overrides at the **@min-6xl** breakpoint
 * - `{ @min-7xl: "*" }` → `@min-7xl:*` — overrides at the **@min-7xl** breakpoint
 *
 * **Query (Range)**
 * - `{ @3xs:@max-2xs: "*" }` → `@3xs:@max-2xs:*` — overrides within the **@3xs** to **@max-2xs** range
 * - `{ @3xs:@max-xs: "*" }` → `@3xs:@max-xs:*` — overrides within the **@3xs** to **@max-xs** range
 * - `{ @3xs:@max-sm: "*" }` → `@3xs:@max-sm:*` —  overrides within the **@3xs** to **@max-sm** range
 * - `{ @3xs:@max-md: "*" }` → `@3xs:@max-md:*` — overrides within the **@3xs** to **@max-md** range
 * - `{ @3xs:@max-lg: "*" }` → `@3xs:@max-lg:*` — overrides within the **@3xs** to **@max-lg** range
 * - `{ @3xs:@max-xl: "*" }` → `@3xs:@max-xl:*` — overrides within the **@3xs** to **@max-xl** range
 * - `{ @3xs:@max-2xl: "*" }` → `@3xs:@max-2xl:*` — overrides within the **@3xs** to **@max-2xl** range
 * - `{ @3xs:@max-3xl: "*" }` → `@3xs:@max-3xl:*` — overrides within the **@3xs** to **@max-3xl** range
 * - `{ @3xs:@max-4xl: "*" }` → `@3xs:@max-4xl:*` — overrides within the **@3xs** to **@max-4xl** range
 * - `{ @3xs:@max-5xl: "*" }` → `@3xs:@max-5xl:*` — overrides within the **@3xs** to **@max-5xl** range
 * - `{ @3xs:@max-6xl: "*" }` → `@3xs:@max-6xl:*` — overrides within the **@3xs** to **@max-6xl** range
 * - `{ @3xs:@max-7xl: "*" }` → `@3xs:@max-7xl:*` — overrides within the **@3xs** to **@max-7xl** range
 * ---
 * - `{ @2xs:@max-xs: "*" }` → `@2xs:@max-xs:*` — overrides within the **@2xs** to **@max-xs** range
 * - `{ @2xs:@max-sm: "*" }` → `@2xs:@max-sm:*` — overrides within the **@2xs** to **@max-sm** range
 * - `{ @2xs:@max-md: "*" }` → `@2xs:@max-md:*` — overrides within the **@2xs** to **@max-md** range
 * - `{ @2xs:@max-lg: "*" }` → `@2xs:@max-lg:*` — overrides within the **@2xs** to **@max-lg** range
 * - `{ @2xs:@max-xl: "*" }` → `@2xs:@max-xl:*` — overrides within the **@2xs** to **@max-xl** range
 * - `{ @2xs:@max-2xl: "*" }` → `@2xs:@max-2xl:*` — overrides within the **@2xs** to **@max-2xl** range
 * - `{ @2xs:@max-3xl: "*" }` → `@2xs:@max-3xl:*` — overrides within the **@2xs** to **@max-3xl** range
 * - `{ @2xs:@max-4xl: "*" }` → `@2xs:@max-4xl:*` — overrides within the **@2xs** to **@max-4xl** range
 * - `{ @2xs:@max-5xl: "*" }` → `@2xs:@max-5xl:*` — overrides within the **@2xs** to **@max-5xl** range
 * - `{ @2xs:@max-6xl: "*" }` → `@2xs:@max-6xl:*` — overrides within the **@2xs** to **@max-6xl** range
 * - `{ @2xs:@max-7xl: "*" }` → `@2xs:@max-7xl:*` — overrides within the **@2xs** to **@max-7xl** range
 * ---
 * - `{ @xs:@max-sm: "*" }` → `@xs:@max-sm:*` — overrides within the **@xs** to **@max-sm** range
 * - `{ @xs:@max-md: "*" }` → `@xs:@max-md:*` — overrides within the **@xs** to **@max-md** range
 * - `{ @xs:@max-lg: "*" }` → `@xs:@max-lg:*` — overrides within the **@xs** to **@max-lg** range
 * - `{ @xs:@max-xl: "*" }` → `@xs:@max-xl:*` — overrides within the **@xs** to **@max-xl** range
 * - `{ @xs:@max-2xl: "*" }` → `@xs:@max-2xl:*` — overrides within the **@xs** to **@max-2xl** range
 * - `{ @xs:@max-3xl: "*" }` → `@xs:@max-3xl:*` — overrides within the **@xs** to **@max-3xl** range
 * - `{ @xs:@max-4xl: "*" }` → `@xs:@max-4xl:*` — overrides within the **@xs** to **@max-4xl** range
 * - `{ @xs:@max-5xl: "*" }` → `@xs:@max-5xl:*` — overrides within the **@xs** to **@max-5xl** range
 * - `{ @xs:@max-6xl: "*" }` → `@xs:@max-6xl:*` — overrides within the **@xs** to **@max-6xl** range
 * - `{ @xs:@max-7xl: "*" }` → `@xs:@max-7xl:*` — overrides within the **@xs** to **@max-7xl** range
 * ---
 * - `{ @sm:@max-md: "*" }` → `@sm:@max-md:*` — overrides within the **@sm** to **@max-md** range
 * - `{ @sm:@max-lg: "*" }` → `@sm:@max-lg:*` — overrides within the **@sm** to **@max-lg** range
 * - `{ @sm:@max-xl: "*" }` → `@sm:@max-xl:*` — overrides within the **@sm** to **@max-xl** range
 * - `{ @sm:@max-2xl: "*" }` → `@sm:@max-2xl:*` — overrides within the **@sm** to **@max-2xl** range
 * - `{ @sm:@max-3xl: "*" }` → `@sm:@max-3xl:*` — overrides within the **@sm** to **@max-3xl** range
 * - `{ @sm:@max-4xl: "*" }` → `@sm:@max-4xl:*` — overrides within the **@sm** to **@max-4xl** range
 * - `{ @sm:@max-5xl: "*" }` → `@sm:@max-5xl:*` — overrides within the **@sm** to **@max-5xl** range
 * - `{ @sm:@max-6xl: "*" }` → `@sm:@max-6xl:*` — overrides within the **@sm** to **@max-6xl** range
 * - `{ @sm:@max-7xl: "*" }` → `@sm:@max-7xl:*` — overrides within the **@sm** to **@max-7xl** range
 * ---
 * - `{ @md:@max-lg: "*" }` → `@md:@max-lg:*` — overrides within the **@md** to **@max-lg** range
 * - `{ @md:@max-xl: "*" }` → `@md:@max-xl:*` — overrides within the **@md** to **@max-xl** range
 * - `{ @md:@max-2xl: "*" }` → `@md:@max-2xl:*` — overrides within the **@md** to **@max-2xl** range
 * - `{ @md:@max-3xl: "*" }` → `@md:@max-3xl:*` — overrides within the **@md** to **@max-3xl** range
 * - `{ @md:@max-4xl: "*" }` → `@md:@max-4xl:*` — overrides within the **@md** to **@max-4xl** range
 * - `{ @md:@max-5xl: "*" }` → `@md:@max-5xl:*` — overrides within the **@md** to **@max-5xl** range
 * - `{ @md:@max-6xl: "*" }` → `@md:@max-6xl:*` — overrides within the **@md** to **@max-6xl** range
 * - `{ @md:@max-7xl: "*" }` → `@md:@max-7xl:*` — overrides within the **@md** to **@max-7xl** range
 *  ---
 * - `{ @lg:@max-xl: "*" }` → `@lg:@max-xl:*` — overrides within the **@lg** to **@max-xl** range
 * - `{ @lg:@max-2xl: "*" }` → `@lg:@max-2xl:*` — overrides within the **@lg** to **@max-2xl** range
 * - `{ @lg:@max-3xl: "*" }` → `@lg:@max-3xl:*` — overrides within the **@lg** to **@max-3xl** range
 * - `{ @lg:@max-4xl: "*" }` → `@lg:@max-4xl:*` — overrides within the **@lg** to **@max-4xl** range
 * - `{ @lg:@max-5xl: "*" }` → `@lg:@max-5xl:*` — overrides within the **@lg** to **@max-5xl** range
 * - `{ @lg:@max-6xl: "*" }` → `@lg:@max-6xl:*` — overrides within the **@lg** to **@max-6xl** range
 * - `{ @lg:@max-7xl: "*" }` → `@lg:@max-7xl:*` — overrides within the **@lg** to **@max-7xl** range
 * ---
 * - `{ @xl:@max-2xl: "*" }` → `@xl:@max-2xl:*` — overrides within the **@xl** to **@max-2xl** range
 * - `{ @xl:@max-3xl: "*" }` → `@xl:@max-3xl:*` — overrides within the **@xl** to **@max-3xl** range
 * - `{ @xl:@max-4xl: "*" }` → `@xl:@max-4xl:*` — overrides within the **@xl** to **@max-4xl** range
 * - `{ @xl:@max-5xl: "*" }` → `@xl:@max-5xl:*` — overrides within the **@xl** to **@max-5xl** range
 * - `{ @xl:@max-6xl: "*" }` → `@xl:@max-6xl:*` — overrides within the **@xl** to **@max-6xl** range
 * - `{ @xl:@max-7xl: "*" }` → `@xl:@max-7xl:*` — overrides within the **@xl** to **@max-7xl** range
 * ---
 * - `{ @2xl:@max-3xl: "*" }` → `@2xl:@max-3xl:*` — overrides within the **@2xl** to **@max-3xl** range
 * - `{ @2xl:@max-4xl: "*" }` → `@2xl:@max-4xl:*` — overrides within the **@2xl** to **@max-4xl** range
 * - `{ @2xl:@max-5xl: "*" }` → `@2xl:@max-5xl:*` — overrides within the **@2xl** to **@max-5xl** range
 * - `{ @2xl:@max-6xl: "*" }` → `@2xl:@max-6xl:*` — overrides within the **@2xl** to **@max-6xl** range
 * - `{ @2xl:@max-7xl: "*" }` → `@2xl:@max-7xl:*` — overrides within the **@2xl** to **@max-7xl** range
 * ---
 * - `{ @3xl:@max-4xl: "*" }` → `@3xl:@max-4xl:*` — overrides within the **@3xl** to **@max-4xl** range
 * - `{ @3xl:@max-5xl: "*" }` → `@3xl:@max-5xl:*` — overrides within the **@3xl** to **@max-5xl** range
 * - `{ @3xl:@max-6xl: "*" }` → `@3xl:@max-6xl:*` — overrides within the **@3xl** to **@max-6xl** range
 * - `{ @3xl:@max-7xl: "*" }` → `@3xl:@max-7xl:*` — overrides within the **@3xl** to **@max-7xl** range
 * ---
 * - `{ @4xl:@max-5xl: "*" }` → `@4xl:@max-7xl:*` — overrides within the **@4xl** to **@max-5xl** range
 * - `{ @4xl:@max-6xl: "*" }` → `@4xl:@max-7xl:*` — overrides within the **@4xl** to **@max-6xl** range
 * - `{ @4xl:@max-7xl: "*" }` → `@4xl:@max-7xl:*` — overrides within the **@4xl** to **@max-7xl** range
 * ---
 * - `{ @5xl:@max-6xl: "*" }` → `@5xl:@max-6xl:*` — overrides within the **@5xl** to **@max-6xl** range
 * - `{ @5xl:@max-7xl: "*" }` → `@5xl:@max-7xl:*` — overrides within the **@5xl** to **@max-7xl** range
 * ---
 * - `{ @6xl:@max-7xl: "*" }` → `@6xl:@max-7xl:*` — overrides within the **@6xl** to **@max-7xl** range
 *
 * **Custom**
 * - `{ @value: "*" }` → `@value:*` — overrides at a **custom-defined** breakpoint
 * - `{ @value/name: "*" }` → `@value/name:*` — overrides at a **custom-defined** breakpoint **(n)**
 * - `{ @max-value: "*" }` → `@max-value:*` — overrides below a **custom-defined** breakpoint
 * - `{ @max-value/name: "*" }` → `@max-value/name:*` — overrides below a **custom-defined** breakpoint **(n)**
 * - `{ @max-[value]: "*" }` → `@max-[value]:*` — overrides below an **arbitrary** breakpoint
 * - `{ @max-[value]/name: "*" }` → `@max-[value]/name:*` — overrides below an **arbitrary** breakpoint **(n)**
 * - `{ @min-value: "*" }` → `@min-value:*` — overrides below a **custom-defined** breakpoint
 * - `{ @min-value/name: "*" }` → `@min-value/name:*` — overrides below a **custom-defined** breakpoint **(n)**
 * - `{ @min-[value]: "*" }` → `@min-[value]:*` — overrides below an **arbitrary** breakpoint
 * - `{ @min-[value]/name: "*" }` → `@min-[value]/name:*` — overrides below an **arbitrary** breakpoint **(n)**
 * - `{ @value:@max-value: "*" }` → `@value:@max-value:*` — overrides at a **custom-defined** breakpoint
 * - `{ @value/name:@max-value: "*" }` → `@value/name:@max-value:*` — overrides at a **custom-defined** breakpoint **(n)**
 * - `{ @value:@max-value/name: "*" }` → `@value:@max-value/name:*` — overrides at a **custom-defined** breakpoint **(n)**
 * - `{ @value:@max-[value]: "*" }` → `@value:@max-[value]:*` — overrides within an **arbitrary** breakpoint range
 * - `{ @value/name:@max-[value]: "*" }` → `@value/name:@max-[value]:*` — overrides within an **arbitrary** breakpoint range **(n)**
 * - `{ @value:@max-[value]/name: "*" }` → `@value:@max-[value]/name:*` — overrides within an **arbitrary** breakpoint range **(n)**
 *
 * ---
 * _Custom keys (e.g. "@srylius", "@max-srylius", "@min-srylius") are supported if defined in your configuration file._
 */
type ContainerResponsiveQuery<T extends object | boolean | string | number> =
  | T
  | ContainerResponsive<T>
  | ContainerResponsiveMax<T>
  | ContainerResponsiveMin<T>
  | ContainerResponsiveRange<T>

// Exports
export type {
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
