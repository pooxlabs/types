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
 * - `value` → `<value>:*` — custom-defined breakpoint (e.g. `srylius`)
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
 * - `max-value` → `max-<value>:*` — custom-defined max breakpoint (e.g. `max-srylius`)
 * - `max-[value]` → `max-[value]:*` — arbitrary fixed max breakpoint (e.g. `max-[480px]`)
 */
type MaxBreakpoint =
  | "base"
  | "max-sm" | "max-md" | "max-lg" | "max-xl"
  | "max-2xl"
  | `max-${string}`

/**
 * Breakpoint range keys used for responsive traits between two media query widths.
 *
 * **Syntax**
 * - `value:max-value` → `value:max-value:*` — @media (width >= **value**) and @media (width < **max-value**)
 *
 * **Query**
 * - `sm:max-md` → `sm:max-md:*` — @media (width >= **40rem**) and @media (width < **48rem**)
 * - `sm:max-lg` → `sm:max-lg:*` — @media (width >= **40rem**) and @media (width < **64rem**)
 * - `sm:max-xl` → `sm:max-xl:*` — @media (width >= **40rem**) and @media (width < **80rem**)
 * - `sm:max-2xl` → `sm:max-2xl:*` — @media (width >= **40rem**) and @media (width < **96rem**)
 * - `md:max-lg` → `md:max-lg:*` — @media (width >= **48rem**) and @media (width < **64rem**)
 * - `md:max-xl` → `md:max-xl:*` — @media (width >= **48rem**) and @media (width < **80rem**)
 * - `md:max-2xl` → `md:max-2xl:*` — @media (width >= **48rem**) and @media (width < **96rem**)
 * - `lg:max-xl` → `lg:max-xl:*` — @media (width >= **64rem**) and @media (width < **80rem**)
 * - `lg:max-2xl` → `lg:max-2xl:*` — @media (width >= **64rem**) and @media (width < **96rem**)
 * - `xl:max-2xl` → `xl:max-2xl:*` — @media (width >= **80rem**) and @media (width < **96rem**)
 *
 * **Custom**
 * - `value:max-value` → `value-max-<value>:*` — custom-defined breakpoint range (e.g. `srylius:max-srylius`)
 * - `value:max-[value]` → `value-max-[value]:*` — arbitrary fixed breakpoint range (e.g. `srylius:max-[480px]`)
 */
type BetweenBreakpoint =
  | "sm:max-md" | "sm:max-lg" | "sm:max-xl" | "sm:max-2xl" | `sm:max-${string}`
  | "md:max-lg" | "md:max-xl" | "md:max-2xl" | `md:max-${string}`
  | "lg:max-xl" | "lg:max-2xl" | `lg:max-${string}`
  | `${string}:max-${string}`

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
 * - `@value` → `@<value>:*` — custom-defined breakpoint (e.g. `@srylius`)
 */
type ContainerBreakpoint =
  | "base"
  | "@3xs" | "@2xs" | "@xs"
  | "@sm" | "@md" | "@lg" | "@xl"
  | "@2xl" | "@3xl" | "@4xl" | "@5xl" | "@6xl" | "@7xl"
  | `@${string}`

/**
 * The max breakpoint keys used for container responsive traits.
 *
 * **Syntax**
 * - `base` → `*` — applies without max container query
 *
 * **Query**
 * - `@max-3xs` → `@max-3xs:*` — @container (width < 16rem)
 * - `@max-2xs` → `@max-2xs:*` — @container (width < 18rem)
 * - `@max-xs` → `@max-xs:*` — @container (width < 20rem)
 * - `@max-sm` → `@max-sm:*` — @container (width < 24rem)
 * - `@max-md` → `@max-md:*` — @container (width < 28rem)
 * - `@max-lg` → `@max-lg:*` — @container (width < 32rem)
 * - `@max-xl` → `@max-xl:*` — @container (width < 36rem)
 * - `@max-2xl` → `@max-2xl:*` — @container (width < 42rem)
 * - `@max-3xl` → `@max-3xl:*` — @container (width < 48rem)
 * - `@max-4xl` → `@max-4xl:*` — @container (width < 56rem)
 * - `@max-5xl` → `@max-5xl:*` — @container (width < 64rem)
 * - `@max-6xl` → `@max-6xl:*` — @container (width < 72rem)
 * - `@max-7xl` → `@max-7xl:*` — @container (width < 80rem)
 *
 * **Custom**
 * - `@max-value` → `@max-<value>:*` — custom-defined breakpoint (e.g. `@max-srylius`)
 * - `@max-[value]` → `@max-[value]:*` — arbitrary fixed max breakpoint (e.g. `@max-[480px]`)
 */
type MaxContainerBreakpoint =
  | "base"
  | "@max-3xs" | "@max-2xs" | "@max-xs"
  | "@max-sm" | "@max-md" | "@max-lg" | "@max-xl"
  | "@max-2xl" | "@max-3xl" | "@max-4xl" | "@max-5xl" | "@max-6xl" | "@max-7xl"
  | `@max-${string}`

export type {
  Breakpoint,
  BetweenBreakpoint,
  ContainerBreakpoint,
  MaxBreakpoint,
  MaxContainerBreakpoint
}
