import type {
  // Basis
  FlexBasis,

  // Query
  ResponsiveQuery
} from "@pooxlabs/types"

type FlexBasisProps = {
  /**
   * Responsive initial size of a flex item before growing or shrinking.
   *
   * **Syntax**
   * - `{ *: "value" }` → `*:basis-value` — applies a **flex basis** at the given breakpoint
   *
   * **Basis**
   * - `{ basis: 0 }` → `basis-0` — no initial size
   * - `{ basis: 1 }` → `basis-1` — minimal initial size
   *
   * **Basis (Predefined)**
   * - `{ basis: "auto" }` → `basis-auto` — size based on content
   * - `{ basis: "full" }` → `basis-full` — fills available space
   *
   * **Basis (Fraction)**
   * - `{ basis: "1/2" }` → `basis-1/2` — 50% width
   * - `{ basis: "1/3" }` → `basis-1/3` — one-third width
   * - `{ basis: "2/3" }` → `basis-2/3` — two-thirds width
   * - `{ basis: "1/4" }` → `basis-1/4` — one-quarter width
   * - `{ basis: "2/4" }` → `basis-2/4` — half width
   * - `{ basis: "3/4" }` → `basis-3/4` — three-quarters width
   * - `{ basis: "1/5" }` → `basis-1/5` — one-fifth width
   * - `{ basis: "2/5" }` → `basis-2/5` — two-fifths width
   * - `{ basis: "3/5" }` → `basis-3/5` — three-fifths width
   * - `{ basis: "4/5" }` → `basis-4/5` — four-fifths width
   * - `{ basis: "1/6" }` → `basis-1/6` — one-sixth width
   * - `{ basis: "5/6" }` → `basis-5/6` — five-sixths width
   *
   * **Basis (Token)**
   * - `{ basis: "3xs" }` → `basis-3xs` — applies **--container-3xs** size **16rem**
   * - `{ basis: "2xs" }` → `basis-2xs` — applies **--container-2xs** size **18rem**
   * - `{ basis: "xs" }` → `basis-xs` — applies **--container-xs** size **20rem**
   * - `{ basis: "sm" }` → `basis-sm` — applies **--container-sm** size **24rem**
   * - `{ basis: "md" }` → `basis-md` — applies **--container-md** size **28rem**
   * - `{ basis: "lg" }` → `basis-lg` — applies **--container-lg** size **32rem**
   * - `{ basis: "xl" }` → `basis-xl` — applies **--container-xl** size **36rem**
   * - `{ basis: "2xl" }` → `basis-2xl` — applies **--container-2xl** size **42rem**
   * - `{ basis: "3xl" }` → `basis-3xl` — applies **--container-3xl** size **48rem**
   * - `{ basis: "4xl" }` → `basis-4xl` — applies **--container-4xl** size **56rem**
   * - `{ basis: "5xl" }` → `basis-5xl` — applies **--container-5xl** size **64rem**
   * - `{ basis: "6xl" }` → `basis-6xl` — applies **--container-6xl** size **72rem**
   * - `{ basis: "7xl" }` → `basis-7xl` — applies **--container-7xl** size **80rem**
   *
   * **Custom**
   * - `{ *: value }` → `*:basis-value` — applies a **scale-based** basis at the given breakpoint
   * - `{ *: "[value]" }` → `*:basis-[value]` — applies an **arbitrary** fixed basis at the given breakpoint
   * - `{ *: "(--value)" }` → `*:basis-(--value)` — applies a **CSS variable** basis at the given breakpoint
   *
   * **Usage**
   * ```tsx
   * // Static basis (no media query)
   * <Component basis={0} /> // → basis-0
   *
   * // Applies universally across all breakpoints
   * <Component basis={{ base: "auto" }} /> // → basis-auto
   *
   * // Override at specific breakpoints
   * <Component basis={{ base: 0, sm: 1 }} /> // → basis-0 sm:basis-1
   * <Component basis={{ base: "1/2", md: "full" }} /> // → basis-1/2 md:basis-full
   * <Component basis={{ base: 1, lg: "md" }} /> // → basis-1 lg:basis-md
   * <Component basis={{ base: 0, xl: "[33.3333%]" }} /> // → basis-0 xl:basis-[33.3333%]
   * <Component basis={{ base: 0, "2xl": "(--srylius)" }} /> // → basis-0 2xl:basis-(--srylius)
   *
   * // Override at multiple breakpoints
   * <Component basis={{ base: "auto", sm: "1/2", lg: "md" }} /> // → basis-auto sm:basis-1/2 lg:basis-md
   * ```
   *
   * ---
   * _Custom values and container tokens (e.g. "md", "--srylius") must be defined in your configuration file._
   */
  basis?: ResponsiveQuery<FlexBasis>
}

// Exports
export type {
  FlexBasisProps
}
