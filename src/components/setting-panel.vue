<template>
  <section
    id="settingPanel"
    class="settingPanel"
    :class="{ panelClose: isSettingsHided || windowWidth <= 767 }"
  >
    <button
      class="settingPanelBtn"
      @click="isSettingsHided = !isSettingsHided"
    ></button>

    <set-export-services
      @openModal="$emit('input', $event)"
      :value="value"
    ></set-export-services>

    <hr />

    <set-sound-mode></set-sound-mode>

    <hr />

    <set-lang-panel></set-lang-panel>

    <hr />

    <set-voice-tone></set-voice-tone>
  </section>
</template>

<script>
import SetLangPanel from "./set-lang-panel.vue";
import SetSoundMode from "./set-sound-mode.vue";
import SetVoiceTone from "./set-voice-tone.vue";
import SetExportServices from "./set-export-services.vue";
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  components: { SetSoundMode, SetLangPanel, SetVoiceTone, SetExportServices },
  data: () => ({
    isSettingsHided: false,
    windowWidth: window.innerWidth
  }),
  created() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
};
</script>
