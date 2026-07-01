<template>
  <div class="tg-nav-layer">
    <div class="tg-nav">
      <button class="tg-nav__btn" title="Previous (←)" @click="$nav.prev()">‹</button>
      <span class="tg-nav__count">{{ $nav.currentPage }} / {{ $nav.total }}</span>
      <button class="tg-nav__btn" title="Next (Space / →)" @click="$nav.next()">›</button>
    </div>
  </div>
</template>

<style scoped>
.tg-nav-layer {
  position: absolute;
  inset: 0;
  z-index: 40;
  pointer-events: none;
}
.tg-nav {
  position: absolute;
  left: 50%;
  bottom: 0.6rem;
  transform: translateX(-50%);
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.24rem 0.7rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  user-select: none;
  color: #e5e7eb;
  font-size: 0.8rem;
}
.tg-nav__btn {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: inherit;
  font-size: 1.25rem;
  line-height: 1;
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.15s ease, background 0.15s ease;
}
.tg-nav__btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.15);
}
.tg-nav__count {
  opacity: 0.65;
  font-variant-numeric: tabular-nums;
  font-size: 0.72rem;
}
.tg-nav__tip {
  opacity: 0.5;
  font-size: 0.62rem;
}
</style>
