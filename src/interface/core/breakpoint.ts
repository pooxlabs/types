/**
 * Breakpoint keys used for media query-based responsive traits ([See also](https://tailwindcss.com/docs/responsive-design#working-mobile-first))
 *
 * **Syntax**
 * - `base` → `*` — applies without media query
 *
 * **Query**
 * - `sm` → `@media (width >= 40rem)` — applies at ≥ 40rem
 * - `md` → `@media (width >= **48rem**)` — applies at ≥ 48rem
 * - `lg` → `@media (width >= **64rem**)` — applies at ≥ 64rem
 * - `xl` → `@media (width >= **80rem**)` — applies at ≥ 80rem
 * - `2xl` → `@media (width >= **96rem**)` — applies at ≥ 96rem
 *
 * **Custom**
 * - `value` → `value:*` — custom-defined breakpoint (e.g. `srylius`)
 *
 * ---
 * _Custom keys (e.g. "srylius") are supported if defined in your configuration file._
 */
type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl" | `${string}`

/**
 * Max breakpoint keys used for media query-based responsive traits ([See also](https://tailwindcss.com/docs/responsive-design#targeting-a-breakpoint-range))
 *
 * **Syntax**
 * - `base` → `*` — applies without media query
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
 * _Custom keys (e.g. "srylius") are supported if defined in your configuration file._
 */
type BreakpointMax =
  | "max-sm" | "max-md" | "max-lg" | "max-xl"
  | "max-2xl"
  | `max-${string}`

/**
 * Breakpoint range keys used for media queries spanning two widths ([See also](https://tailwindcss.com/docs/responsive-design#targeting-a-breakpoint-range))
 *
 * **Syntax**
 * - `base` → `*` — applies without container query
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

/**
 * Container breakpoint keys used for container query-based responsive traits ([See also](https://tailwindcss.com/docs/responsive-design#container-queries))
 *
 * **Syntax**
 * - `base` → `*` — applies without container query
 *
 * **Query**
 * - `@3xs` → `@3xs:*` — @container (width >= **16rem**)
 * - `@2xs` → `@2xs:*` — @container (width >= 18rem)
 * - `@xs` → `@xs:*` — @container (width >= **20rem**)
 * - `@sm` → `@sm:*` — @container (width >= **24rem**)
 * - `@md` → `@md:*` — @container (width >= **28rem**)
 * - `@lg` → `@lg:*` — @container (width >= **32rem**)
 * - `@xl` → `@xl:*` — @container (width >= **36rem**)
 * - `@2xl` → `@2xl:*` — @container (width >= **42rem**)
 * - `@3xl` → `@3xl:*` — @container (width >= **48rem**)
 * - `@4xl` → `@4xl:*` — @container (width >= **56rem**)
 * - `@5xl` → `@5xl:*` — @container (width >= **64rem**)
 * - `@6xl` → `@6xl:*` — @container (width >= **72rem**)
 * - `@7xl` → `@7xl:*` — @container (width >= **80rem**)
 *
 * **Custom**
 * - `@value` → `@value:*` — custom-defined breakpoint (e.g. `@srylius`)
 * - `@value/name` → `@value/name:*` — custom-defined named breakpoint (e.g. `@srylius/card`)
 *
 * ---
 * _Custom keys (e.g. "@srylius") are supported if defined in your configuration file._
 */
type BreakpointContainer =
  | "@3xs" | "@2xs" | "@xs"
  | "@sm" | "@md" | "@lg" | "@xl"
  | "@2xl" | "@3xl" | "@4xl" | "@5xl" | "@6xl" | "@7xl"
  | `@${string}`

/**
 * Container breakpoint range keys used for queries spanning two widths ([See also](https://tailwindcss.com/docs/responsive-design#container-query-ranges))
 *
 * **Syntax**
 * - `base` → `*` — applies without container query
 *
 * **Query**
 * - `@3xs:@max-2xs` → @container (width >= **16rem**) and (width < **18rem**)
 * - `@3xs:@max-xs` → @container (width >= **16rem**) and (width < **20rem**)
 * - `@3xs:@max-sm` → @container (width >= **16rem**) and (width < **24rem**)
 * - `@3xs:@max-md` → @container (width >= **16rem**) and (width < **28rem**)
 * - `@3xs:@max-lg` → @container (width >= **16rem**) and (width < **32rem**)
 * - `@3xs:@max-xl` → @container (width >= **16rem**) and (width < **36rem**)
 * - `@3xs:@max-2xl` → @container (width >= **16rem**) and (width < **42rem**)
 * - `@3xs:@max-3xl` → @container (width >= **16rem**) and (width < **48rem**)
 * - `@3xs:@max-4xl` → @container (width >= **16rem**) and (width < **56rem**)
 * - `@3xs:@max-5xl` → @container (width >= **16rem**) and (width < **64rem**)
 * - `@3xs:@max-6xl` → @container (width >= **16rem**) and (width < **72rem**)
 * - `@3xs:@max-7xl` → @container (width >= **16rem**) and (width < **80rem**)
 * - `@2xs:@max-xs` → @container (width >= **18rem**) and (width < **20rem**)
 * - `@2xs:@max-sm` → @container (width >= **18rem**) and (width < **24rem**)
 * - `@2xs:@max-md` → @container (width >= **18rem**) and (width < **28rem**)
 * - `@2xs:@max-lg` → @container (width >= **18rem**) and (width < **32rem**)
 * - `@2xs:@max-xl` → @container (width >= **18rem**) and (width < **36rem**)
 * - `@2xs:@max-2xl` → @container (width >= **18rem**) and (width < **42rem**)
 * - `@2xs:@max-3xl` → @container (width >= **18rem**) and (width < **48rem**)
 * - `@2xs:@max-4xl` → @container (width >= **18rem**) and (width < **56rem**)
 * - `@2xs:@max-5xl` → @container (width >= **18rem**) and (width < **64rem**)
 * - `@2xs:@max-6xl` → @container (width >= **18rem**) and (width < **72rem**)
 * - `@2xs:@max-7xl` → @container (width >= **18rem**) and (width < **80rem**)
 * - `@xs:@max-sm` → @container (width >= **20rem**) and (width < **24rem**)
 * - `@xs:@max-md` → @container (width >= **20rem**) and (width < **28rem**)
 * - `@xs:@max-lg` → @container (width >= **20rem**) and (width < **32rem**)
 * - `@xs:@max-xl` → @container (width >= **20rem**) and (width < **36rem**)
 * - `@xs:@max-2xl` → @container (width >= **20rem**) and (width < **42rem**)
 * - `@xs:@max-3xl` → @container (width >= **20rem**) and (width < **48rem**)
 * - `@xs:@max-4xl` → @container (width >= **20rem**) and (width < **56rem**)
 * - `@xs:@max-5xl` → @container (width >= **20rem**) and (width < **64rem**)
 * - `@xs:@max-6xl` → @container (width >= **20rem**) and (width < **72rem**)
 * - `@xs:@max-7xl` → @container (width >= **20rem**) and (width < **80rem**)
 * - `@sm:@max-md` → @container (width >= **24rem**) and (width < **28rem**)
 * - `@sm:@max-lg` → @container (width >= **24rem**) and (width < **32rem**)
 * - `@sm:@max-xl` → @container (width >= **24rem**) and (width < **36rem**)
 * - `@sm:@max-2xl` → @container (width >= **24rem**) and (width < **42rem**)
 * - `@sm:@max-3xl` → @container (width >= **24rem**) and (width < **48rem**)
 * - `@sm:@max-4xl` → @container (width >= **24rem**) and (width < **56rem**)
 * - `@sm:@max-5xl` → @container (width >= **24rem**) and (width < **64rem**)
 * - `@sm:@max-6xl` → @container (width >= **24rem**) and (width < **72rem**)
 * - `@sm:@max-7xl` → @container (width >= **24rem**) and (width < **80rem**)
 * - `@md:@max-lg` → @container (width >= **28rem**) and (width < **32rem**)
 * - `@md:@max-xl` → @container (width >= **28rem**) and (width < **36rem**)
 * - `@md:@max-2xl` → @container (width >= **28rem**) and (width < **42rem**)
 * - `@md:@max-3xl` → @container (width >= **28rem**) and (width < **48rem**)
 * - `@md:@max-4xl` → @container (width >= **28rem**) and (width < **56rem**)
 * - `@md:@max-5xl` → @container (width >= **28rem**) and (width < **64rem**)
 * - `@md:@max-6xl` → @container (width >= **28rem**) and (width < **72rem**)
 * - `@md:@max-7xl` → @container (width >= **28rem**) and (width < **80rem**)
 * - `@lg:@max-xl` → @container (width >= **32rem**) and (width < **36rem**)
 * - `@lg:@max-2xl` → @container (width >= **32rem**) and (width < **42rem**)
 * - `@lg:@max-3xl` → @container (width >= **32rem**) and (width < **48rem**)
 * - `@lg:@max-4xl` → @container (width >= **32rem**) and (width < **56rem**)
 * - `@lg:@max-5xl` → @container (width >= **32rem**) and (width < **64rem**)
 * - `@lg:@max-6xl` → @container (width >= **32rem**) and (width < **72rem**)
 * - `@lg:@max-7xl` → @container (width >= **32rem**) and (width < **80rem**)
 * - `@xl:@max-2xl` → @container (width >= **36rem**) and (width < **42rem**)
 * - `@xl:@max-3xl` → @container (width >= **36rem**) and (width < **48rem**)
 * - `@xl:@max-4xl` → @container (width >= **36rem**) and (width < **56rem**)
 * - `@xl:@max-5xl` → @container (width >= **36rem**) and (width < **64rem**)
 * - `@xl:@max-6xl` → @container (width >= **36rem**) and (width < **72rem**)
 * - `@xl:@max-7xl` → @container (width >= **36rem**) and (width < **80rem**)
 * - `@2xl:@max-3xl` → @container (width >= **42rem**) and (width < **48rem**)
 * - `@2xl:@max-4xl` → @container (width >= **42rem**) and (width < **56rem**)
 * - `@2xl:@max-5xl` → @container (width >= **42rem**) and (width < **64rem**)
 * - `@2xl:@max-6xl` → @container (width >= **42rem**) and (width < **72rem**)
 * - `@2xl:@max-7xl` → @container (width >= **42rem**) and (width < **80rem**)
 * - `@3xl:@max-4xl` → @container (width >= **48rem**) and (width < **56rem**)
 * - `@3xl:@max-5xl` → @container (width >= **48rem**) and (width < **64rem**)
 * - `@3xl:@max-6xl` → @container (width >= **48rem**) and (width < **72rem**)
 * - `@3xl:@max-7xl` → @container (width >= **48rem**) and (width < **80rem**)
 * - `@4xl:@max-5xl` → @container (width >= **56rem**) and (width < **64rem**)
 * - `@4xl:@max-6xl` → @container (width >= **56rem**) and (width < **72rem**)
 * - `@4xl:@max-7xl` → @container (width >= **56rem**) and (width < **80rem**)
 * - `@5xl:@max-6xl` → @container (width >= **64rem**) and (width < **72rem**)
 * - `@5xl:@max-7xl` → @container (width >= **64rem**) and (width < **80rem**)
 * - `@6xl:@max-7xl` → @container (width >= **72rem**) and (width < **80rem**)
 *
 * **Custom**
 * - `@value:@max-value` → `@value:@max-value:*` — custom-defined container range (e.g. `@srylius:@max-srylius`)
 * - `@value:@max-[value]` → `@value:@max-[value]:*` — arbitrary fixed container range (e.g. `@srylius:@max-[480px]`)
 *
 * ---
 * _Custom keys (e.g. "@srylius", "@max-srylius") are supported if defined in your configuration file._
 */
type BreakpointContainerRange =
  | "@3xs:@max-2xs" | "@3xs:@max-xs" | "@3xs:@max-sm" | "@3xs:@max-md" | "@3xs:@max-lg" | "@3xs:@max-xl" | "@3xs:@max-2xl" | "@3xs:@max-3xl" | "@3xs:@max-4xl" | "@3xs:@max-5xl" | "@3xs:@max-6xl" | "@3xs:@max-7xl" | `@3xs:@max-${string}`
  | "@2xs:@max-xs" | "@2xs:@max-sm" | "@2xs:@max-md" | "@2xs:@max-lg" | "@2xs:@max-xl" | "@2xs:@max-2xl" | "@2xs:@max-3xl" | "@2xs:@max-4xl" | "@2xs:@max-5xl" | "@2xs:@max-6xl" | "@2xs:@max-7xl" | `@2xs:@max-${string}`
  | "@xs:@max-sm" | "@xs:@max-md"  | "@xs:@max-lg"  | "@xs:@max-xl"  | "@xs:@max-2xl" | "@xs:@max-3xl" | "@xs:@max-4xl" | "@xs:@max-5xl" | "@xs:@max-6xl" | "@xs:@max-7xl" | `@xs:@max-${string}`
  | "@sm:@max-md" | "@sm:@max-lg"  | "@sm:@max-xl"  | "@sm:@max-2xl" | "@sm:@max-3xl" | "@sm:@max-4xl" | "@sm:@max-5xl" | "@sm:@max-6xl" | "@sm:@max-7xl" | `@sm:@max-${string}`
  | "@md:@max-lg" | "@md:@max-xl"  | "@md:@max-2xl" | "@md:@max-3xl" | "@md:@max-4xl" | "@md:@max-5xl" | "@md:@max-6xl" | "@md:@max-7xl" | `@md:@max-${string}`
  | "@lg:@max-xl" | "@lg:@max-2xl" | "@lg:@max-3xl" | "@lg:@max-4xl" | "@lg:@max-5xl" | "@lg:@max-6xl" | "@lg:@max-7xl" | `@lg:@max-${string}`
  | "@xl:@max-2xl" | "@xl:@max-3xl" | "@xl:@max-4xl" | "@xl:@max-5xl" | "@xl:@max-6xl" | "@xl:@max-7xl" | `@xl:@max-${string}`
  | "@2xl:@max-3xl" | "@2xl:@max-4xl"| "@2xl:@max-5xl"| "@2xl:@max-6xl"| "@2xl:@max-7xl"| `@2xl:@max-${string}`
  | "@3xl:@max-4xl" | "@3xl:@max-5xl"| "@3xl:@max-6xl"| "@3xl:@max-7xl"| `@3xl:@max-${string}`
  | "@4xl:@max-5xl" | "@4xl:@max-6xl"| "@4xl:@max-7xl"| `@4xl:@max-${string}`
  | "@5xl:@max-6xl" | "@5xl:@max-7xl"| `@5xl:@max-${string}`
  | "@6xl:@max-7xl" | `@6xl:@max-${string}`
  | `@${string}:@max-${string}`

/**
 * Max container breakpoint keys used for container query-based responsive traits ([See also](https://tailwindcss.com/docs/responsive-design#max-width-container-queries))
 *
 * **Syntax**
 * - `base` → `*` — applies without container query
 *
 * **Query**
 * - `@max-3xs` → `@max-3xs:*` — @container (width < **16rem**)
 * - `@max-2xs` → `@max-2xs:*` — @container (width < **18rem**)
 * - `@max-xs` → `@max-xs:*` — @container (width < **20rem**)
 * - `@max-sm` → `@max-sm:*` — @container (width < **24rem**)
 * - `@max-md` → `@max-md:*` — @container (width < **28rem**)
 * - `@max-lg` → `@max-lg:*` — @container (width < **32rem**)
 * - `@max-xl` → `@max-xl:*` — @container (width < **36rem**)
 * - `@max-2xl` → `@max-2xl:*` — @container (width < **42rem**)
 * - `@max-3xl` → `@max-3xl:*` — @container (width < **48rem**)
 * - `@max-4xl` → `@max-4xl:*` — @container (width < **56rem**)
 * - `@max-5xl` → `@max-5xl:*` — @container (width < **64rem**)
 * - `@max-6xl` → `@max-6xl:*` — @container (width < **72rem**)
 * - `@max-7xl` → `@max-7xl:*` — @container (width < **80rem**)
 *
 * **Custom**
 * - `@max-value` → `@max-value:*` — custom-defined max breakpoint (e.g. `@max-srylius`)
 * - `@max-[value]` → `@max-[value]:*` — arbitrary fixed max breakpoint (e.g. `@max-[480px]`)
 *
 * ---
 * _Custom keys (e.g. "@max-srylius") are supported if defined in your configuration file._
 */
type BreakpointContainerMax =
  | "@max-3xs" | "@max-2xs" | "@max-xs"
  | "@max-sm" | "@max-md" | "@max-lg" | "@max-xl"
  | "@max-2xl" | "@max-3xl" | "@max-4xl" | "@max-5xl" | "@max-6xl" | "@max-7xl"
  | `@max-${string}`

// Exports
export type {
  // Media
  Breakpoint,
  BreakpointMax,
  BreakpointRange,

  // Container
  BreakpointContainer,
  BreakpointContainerRange,
  BreakpointContainerMax
}
