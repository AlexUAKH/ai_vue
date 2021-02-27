<template>
  <section id="avaialbeTime" class="avaialbeTime">
    <span class="title">通訳可能時間</span>
    <span class="remainingTime en">00:13:59</span>
    <div class="translateBtnBox">
      <button
        class="translateBtn"
        :class="{
          disabledTranslate: isDisabledTranslate,
          startTranslate: isStartTranslate
        }"
        @click.stop="isExportMsg = !isExportMsg"
      ></button>
      <span
        class="selectExportMsg"
        :class="{ hide: isExportMsg }"
        @click.stop="isExportMsg = !isExportMsg"
        >出力先を選択してください</span
      >
    </div>
    <sound-mute-switcher></sound-mute-switcher>
  </section>
</template>

<script>
import SoundMuteSwitcher from "./sound-mute-switcher.vue";
export default {
  props: {
    activateTranslate: {
      type: Boolean,
      require: true
    }
  },
  data: () => ({
    isExportMsg: true,
    isDisabledTranslate: true,
    isStartTranslate: false
  }),
  components: {
    SoundMuteSwitcher
  },
  watch: {
    activateTranslate() {
      this.isDisabledTranslate = !this.activateTranslate;
      this.isStartTranslate = this.activateTranslate;
    }
  }
};
</script>
