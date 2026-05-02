<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  badge?: string
}>(), {
  title: 'Slip',
  description: 'L\'app italiana che decifra la busta paga in 30 secondi.',
  badge: 'App busta paga AI',
})
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 80px;
      background:
        radial-gradient(ellipse 90% 60% at 80% 0%, rgba(124, 92, 240, 0.18), transparent 60%),
        radial-gradient(ellipse 90% 60% at 0% 100%, rgba(47, 111, 229, 0.20), transparent 60%),
        #fafbfd;
      color: #1a1d23;
      font-family: Inter, sans-serif;
      box-sizing: border-box;
    "
  >
    <div
      style="
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 12px 22px;
        border-radius: 9999px;
        background: rgba(47, 111, 229, 0.10);
        color: #2f6fe5;
        font-size: 22px;
        font-weight: 600;
        align-self: flex-start;
      "
    >
      <div
        style="
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          background: #2f6fe5;
        "
      />
      {{ badge }}
    </div>

    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
      <div
        style="
          font-size: 96px;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #1a1d23;
          margin-bottom: 28px;
        "
      >
        {{ title }}
      </div>
      <div
        style="
          font-size: 36px;
          line-height: 1.35;
          color: #4f5359;
          max-width: 900px;
        "
      >
        {{ description }}
      </div>
    </div>

    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        color: #5e6168;
        font-weight: 500;
      "
    >
      <div style="display: flex; align-items: center; gap: 16px;">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background: #2f6fe5;
            color: white;
            font-size: 28px;
            font-weight: 800;
          "
        >
          S
        </div>
        <span style="font-weight: 700; color: #1a1d23; font-size: 30px;">slippino.app</span>
      </div>
      <span>Gratis · iOS e Android</span>
    </div>
  </div>
</template>
