/**
 * The breakpoints used for responsive traits.
 *
 * **Syntax**
 * - `base` → `*` — applies without media query
 *
 * **Query**
 * - `sm` → `sm:*` — @media (width >= 40rem)
 * - `md` → `md:*` — @media (width >= 48rem)
 * - `lg` → `lg:*` — @media (width >= 64rem)
 * - `xl` → `xl:*` — @media (width >= 80rem)
 * - `2xl` → `2xl:*` — @media (width >= 96rem)
 *
 * **Custom**
 * - `value` → `<value>:*` — custom-defined breakpoint
 */
type Breakpoint =
  | "base"
  | "sm" | "md" | "lg"
  | "xl" | "2xl"
  | `${string}`

/**
 * The max breakpoint keys used for responsive traits.
 *
 * **Syntax**
 * - `base` → `*` — applies without media query
 *
 * **Query**
 * - `max-sm` → `max-sm:*` — @media (width < 40rem)
 * - `max-md` → `max-md:*` — @media (width < 48rem)
 * - `max-lg` → `max-lg:*` — @media (width < 64rem)
 * - `max-xl` → `max-xl:*` — @media (width < 80rem)
 * - `max-2xl` → `max-2xl:*` — @media (width < 96rem)
 *
 * **Custom**
 * - `max-value` → `max-<value>:*` — custom-defined max breakpoint
 * - `max-[value]` → `max-[value]:*` — arbitrary fixed max breakpoint
 */
type MaxBreakpoint =
  | "base"
  | "max-sm" | "max-md" | "max-lg"
  | "max-xl" | "max-2xl"
  | `max-${string}` | `max-[${string}]`

export type {
  Breakpoint,
  MaxBreakpoint
}
