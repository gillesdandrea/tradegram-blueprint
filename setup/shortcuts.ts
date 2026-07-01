import type { NavOperations, ShortcutOptions } from '@slidev/types'

// Rebind the vertical arrows so they jump a whole slide but land FULLY REVEALED
// (all clicks shown). This makes casual/self browsing with Up/Down forgiving —
// it never skips progressive (v-click) content the way Slidev's default does.
// Space / ← / → keep the normal step-through-clicks behaviour for live presenting.
export default function (nav: NavOperations, base: ShortcutOptions[]): ShortcutOptions[] {
  return base.map((shortcut) => {
    if (shortcut.name === 'next_down')
      return { ...shortcut, fn: () => nav.nextSlide(true) }
    if (shortcut.name === 'prev_up')
      return { ...shortcut, fn: () => nav.prevSlide(true) }
    return shortcut
  })
}
