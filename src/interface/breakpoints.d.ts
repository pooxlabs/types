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
 * - `value` → `value:*` — custom-defined breakpoint
 */
type Breakpoint =
  | "base"
  | "sm" | "md" | "lg"
  | "xl" | "2xl" | `${string}`

export type {
  Breakpoint
}
