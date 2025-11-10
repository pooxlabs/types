/**
 * Controls the initial size of a flex item before growing or shrinking ([See also](https://tailwindcss.com/docs/flex-basis))
 *
 * **Syntax**
 * - `value` → `basis-value` — applies basis from the **value** scale
 *
 * **Basis**
 * - `0` → `basis-0` — no initial size
 * - `1` → `basis-1` — minimal initial size
 *
 * **Basis (Predefined)**
 * - `auto` → `basis-auto` — size based on content
 * - `full` → `basis-full` — fills available space
 *
 * **Basis (Fraction)**
 * - `1/2` → `basis-1/2` — 50% width
 * - `1/3` → `basis-1/3` — one-third width
 * - `2/3` → `basis-2/3` — two-thirds width
 * - `1/4` → `basis-1/4` — one-quarter width
 * - `2/4` → `basis-2/4` — half width
 * - `3/4` → `basis-3/4` — three-quarters width
 * - `1/5` → `basis-1/5` — one-fifth width
 * - `2/5` → `basis-2/5` — two-fifths width
 * - `3/5` → `basis-3/5` — three-fifths width
 * - `4/5` → `basis-4/5` — four-fifths width
 * - `1/6` → `basis-1/6` — one-sixth width
 * - `5/6` → `basis-5/6` — five-sixths width
 *
 * **Basis (Token)**
 * - `3xs` → `basis-3xs` — applies **--container-3xs** size **16rem**
 * - `2xs` → `basis-2xs` — applies **--container-2xs** size **18rem**
 * - `xs` → `basis-xs` — applies **--container-xs** size **20rem**
 * - `sm` → `basis-sm` — applies **--container-sm** size **24rem**
 * - `md` → `basis-md` — applies **--container-md** size **28rem**
 * - `lg` → `basis-lg` — applies **--container-lg** size **32rem**
 * - `xl` → `basis-xl` — applies **--container-xl** size **36rem**
 * - `2xl` → `basis-2xl` — applies **--container-2xl** size **42rem**
 * - `3xl` → `basis-3xl` — applies **--container-3xl** size **48rem**
 * - `4xl` → `basis-4xl` — applies **--container-4xl** size **56rem**
 * - `5xl` → `basis-5xl` — applies **--container-5xl** size **64rem**
 * - `6xl` → `basis-6xl` — applies **--container-6xl** size **72rem**
 * - `7xl` → `basis-7xl` — applies **--container-7xl** size **80rem**
 *
 * **Custom**
 * - `value` → `basis-value` — resolved **automatically**
 * - `[value]` → `basis-[value]` — **arbitrary** fixed basis
 * - `(--value)` → `basis-(--value)` — basis via **CSS variable**
 *
 * **Usage**
 * ```tsx
 * // Standard basis from spacing scale
 * <Component basis={0} /> // → basis-0
 * <Component basis={1} /> // → basis-1
 *
 * // Predefined basis
 * <Component basis="auto" /> // → basis-auto
 * <Component basis="full" /> // → basis-full
 *
 * // Fractional basis
 * <Component basis="1/2" /> // → basis-1/2
 * <Component basis="3/5" /> // → basis-3/5
 *
 * // Token basis
 * <Component basis="sm" /> // → basis-sm
 *
 * // Arbitrary fixed basis
 * <Component basis="[33.3333%]" /> // → basis-[33.3333%]
 * <Component basis="[420px]" /> // → basis-[420px]
 *
 * // Dynamic basis via CSS variable
 * <Component basis="(--srylius)" /> // → basis-(--srylius)
 * ```
 *
 * ---
 * _Custom values and container tokens (e.g. "--srylius", "md") must be defined in your configuration file._
 */
type FlexBasis =
  | "auto"
  | "full"
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | number
  | `${string}/${string}`
  | `[${string}]`
  | `(${string})`

// Exports
export type {
  FlexBasis
}
