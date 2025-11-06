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
  | "sm" | "md" | "lg" | "xl"
  | "2xl"
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
  | "max-sm" | "max-md" | "max-lg" | "max-xl"
  | "max-2xl"
  | `max-${string}` | `max-[${string}]`

/**
 * The breakpoint keys used for container responsive traits.
 *
 * **Syntax**
 * - `base` → `*` — applies without container query
 *
 * **Query**
 * - `@3xs` → `@3xs:*` — @container (width >= 16rem)
 * - `@2xs` → `@2xs:*` — @container (width >= 18rem)
 * - `@xs` → `@xs:*` — @container (width >= 20rem)
 * - `@sm` → `@sm:*` — @container (width >= 24rem)
 * - `@md` → `@md:*` — @container (width >= 28rem)
 * - `@lg` → `@lg:*` — @container (width >= 32rem)
 * - `@xl` → `@xl:*` — @container (width >= 36rem)
 * - `@2xl` → `@2xl:*` — @container (width >= 42rem)
 * - `@3xl` → `@3xl:*` — @container (width >= 48rem)
 * - `@4xl` → `@4xl:*` — @container (width >= 56rem)
 * - `@5xl` → `@5xl:*` — @container (width >= 64rem)
 * - `@6xl` → `@6xl:*` — @container (width >= 72rem)
 * - `@7xl` → `@7xl:*` — @container (width >= 80rem)
 *
 * **Custom**
 * - `@value` → `@<value>:*` — custom-defined breakpoint
 */
type ContainerBreakpoint =
  | "base"
  | "@3xs" | "@2xs" | "@xs"
  | "@sm" | "@md" | "@lg" | "@xl"
  | "@2xl" | "@3xl" | "@4xl" | "@5xl" | "@6xl" | "@7xl"
  | `@${string}`

export type {
  Breakpoint,
  MaxBreakpoint,

  ContainerBreakpoint
}
