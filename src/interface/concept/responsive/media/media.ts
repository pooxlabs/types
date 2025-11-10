/**
 * Breakpoint keys used for media query-based responsive traits ([See also](https://tailwindcss.com/docs/responsive-design#working-mobile-first))
 *
 * **Syntax**
 * - `value` → `value:*` — @media (width >= **value**)
 *
 * **Query**
 * - `sm` → `sm:*` — @media (width >= **40rem**)
 * - `md` → `md:*` — @media (width >= **48rem**)
 * - `lg` → `lg:*` — @media (width >= **64rem**)
 * - `xl` → `xl:*` — @media (width >= **80rem**)
 * - `2xl` → `2xl:*` — @media (width >= **96rem**)
 *
 * **Custom**
 * - `value` → `value:*` — custom-defined breakpoint (e.g. `srylius`)
 *
 * ---
 * _Custom keys (e.g. "srylius") are supported if defined in your configuration file._
 */
type Breakpoint =
  | "sm" | "md" | "lg" | "xl"
  | "2xl"
  | `${string}`

/**
 * Max breakpoint keys used for media query-based responsive traits ([See also](https://tailwindcss.com/docs/responsive-design#using-arbitrary-values))
 *
 * **Syntax**
 * - `max-value` → `max-value:*` — @media (width < **max-value**)
 *
 * **Query**
 * - `max-sm` → `max-sm:*` — @media (width < **40rem**)
 * - `max-md` → `max-md:*` — @media (width < **48rem**)
 * - `max-lg` → `max-lg:*` — @media (width < **64rem**)
 * - `max-xl` → `max-xl:*` — @media (width < **80rem**)
 * - `max-2xl` → `max-2xl:*` — @media (width < **96rem**)
 *
 * **Custom**
 * - `max-value` → `max-value:*` — custom-defined max breakpoint (e.g. `max-srylius`)
 * - `max-[value]` → `max-[value]:*` — arbitrary fixed max breakpoint (e.g. `max-[480px]`)
 *
 * ---
 * _Custom keys (e.g. "max-srylius") are supported if defined in your configuration file._
 */
type BreakpointMax =
  | "max-sm" | "max-md" | "max-lg" | "max-xl"
  | "max-2xl"
  | `max-${string}`

/**
 * Min breakpoint keys used for media query-based responsive traits. ([See also](https://tailwindcss.com/docs/responsive-design#using-arbitrary-values))
 *
 * **Syntax**
 * - `min-value` → `min-value:*` — @media (width >= **min-value**)
 *
 * **Query**
 * - `min-sm` → `min-sm:*` — @media (width >= **40rem**)
 * - `min-md` → `min-md:*` — @media (width >= **48rem**)
 * - `min-lg` → `min-lg:*` — @media (width >= **64rem**)
 * - `min-xl` → `min-xl:*` — @media (width >= **80rem**)
 * - `min-2xl` → `min-2xl:*` — @media (width >= **96rem**)
 *
 * **Custom**
 * - `min-value` → `min-value:*` — custom-defined breakpoint range (e.g. `min-srylius`)
 * - `min-[value]` → `min-[value]:*` — arbitrary fixed breakpoint range (e.g. `min-[480px]`)
 *
 * ---
 * _Custom keys (e.g. "min-srylius") are supported if defined in your configuration file._
 */
type BreakpointMin =
  | "min-sm" | "min-md" | "min-lg" | "min-xl"
  | "min-2xl"
  | `min-${string}`

/**
 * Breakpoint range keys used for media queries spanning two widths ([See also](https://tailwindcss.com/docs/responsive-design#targeting-a-breakpoint-range))
 *
 * **Syntax**
 * - `value:max-value` → `value:max-value:*` — @media (width >= **value**) and @media (width < **max-value**)
 *
 * **Query**
 * - `sm:max-md` → `sm:max-md:*` — @media (width >= **40rem**) and @media (width < **48rem**)
 * - `sm:max-lg` → `sm:max-lg:*` — @media (width >= **40rem**) and @media (width < **64rem**)
 * - `sm:max-xl` → `sm:max-xl:*` — @media (width >= **40rem**) and @media (width < **80rem**)
 * - `sm:max-2xl` → `sm:max-2xl:*` — @media (width >= **40rem**) and @media (width < **96rem**)
 * ---
 * - `md:max-lg` → `md:max-lg:*` — @media (width >= **48rem**) and @media (width < **64rem**)
 * - `md:max-xl` → `md:max-xl:*` — @media (width >= **48rem**) and @media (width < **80rem**)
 * - `md:max-2xl` → `md:max-2xl:*` — @media (width >= **48rem**) and @media (width < **96rem**)
 * ---
 * - `lg:max-xl` → `lg:max-xl:*` — @media (width >= **64rem**) and @media (width < **80rem**)
 * - `lg:max-2xl` → `lg:max-2xl:*` — @media (width >= **64rem**) and @media (width < **96rem**)
 * ---
 * - `xl:max-2xl` → `xl:max-2xl:*` — @media (width >= **80rem**) and @media (width < **96rem**)
 *
 * **Custom**
 * - `value:max-value` → `value:max-value:*` — custom-defined breakpoint range (e.g. `srylius:max-srylius`)
 * - `value:max-[value]` → `value:max-[value]:*` — arbitrary fixed breakpoint range (e.g. `srylius:max-[480px]`)
 *
 * ---
 * _Custom keys (e.g. "srylius","max-srylius") are supported if defined in your configuration file._
 */
type BreakpointRange =
  | "sm:max-md" | "sm:max-lg" | "sm:max-xl" | "sm:max-2xl" | `sm:max-${string}`
  | "md:max-lg" | "md:max-xl" | "md:max-2xl" | `md:max-${string}`
  | "lg:max-xl" | "lg:max-2xl" | `lg:max-${string}`
  | `${string}:max-${string}`

// Exports
export type {
  Breakpoint,
  BreakpointMax,
  BreakpointMin,
  BreakpointRange
}
