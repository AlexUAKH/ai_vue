<template>
  <section id="avaialbeTime" class="avaialbeTime">
    <span class="title">通訳可能時間</span>
    <span class="remainingTime en">00:13:59</span>
    <div class="translateBtnBox">
      <button
        class="translateBtn disabledTranslate"
        @click.stop="isExportMsg = !isExportMsg"
      ></button>
      <span
        class="selectExportMsg"
        :class="{ hide: isExportMsg }"
        @click.stop="isExportMsg = !isExportMsg"
        >出力先を選択してください</span
      >
    </div>
    <sound-switcher></sound-switcher>
  </section>
</template>

<script>
import SoundSwitcher from "./sound-switcher.vue";
export default {
  data: () => ({
    isExportMsg: true
  }),
  components: {
    SoundSwitcher
  }
};
</script>
