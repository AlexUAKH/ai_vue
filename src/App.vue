<template>
  <div class="beforeTranslate">
    <ai-navigation></ai-navigation>

    <available-time></available-time>

    <!-- Topscreen -->
    <main id="topscreen" class="topscreen">
      <div id="contents">
        <text-list></text-list>
        <!-- /END #textList -->

        <select-lang-list></select-lang-list>
        <!-- /END #selectLangList -->

        <setting-panel v-model="modal"></setting-panel>
        <!-- /END #settingPanel -->
      </div>
      <!-- /END #contents -->

      <video
        id="topscreen_video"
        autoplay="autoplay"
        autobuffer="autobuffer"
        muted="muted"
        poster="require('@/assets/images/video.jpg')"
        loop
      >
        <source
          src="@/assets/images/ai-tsuyaku-waiting-back.mp4"
          type="video/mp4"
        />
      </video>
      <div class="topscreen_overlay"></div>
    </main>
    <!-- /END #topscreen -->

    <zoom-modal v-if="modal === 'zoom'" @resetModal="modal = ''" />
    <teams-modal v-if="modal === 'teams'" @resetModal="modal = ''" />
    <hangouts-modal v-if="modal === 'hangouts'" @resetModal="modal = ''" />

    <!-- recordingModal -->
    <recording-modal v-if="false" />
    <recording-confirm-modal v-if="false" />
    <!-- /END #recordingModal -->
  </div>
</template>

<script>
import AiNavigation from "./components/ai-navigation.vue";
import AvailableTime from "./components/available-time.vue";
import SelectLangList from "./components/select-lang-list.vue";
import SettingPanel from "./components/setting-panel.vue";
import TextList from "./components/text-list.vue";
import ZoomModal from "./components/modals/zoom-modal.vue";
import TeamsModal from "./components/modals/teams-modal.vue";
import HangoutsModal from "./components/modals/hangouts-modal.vue";
import RecordingModal from "./components/modals/recording-modal.vue";
import RecordingConfirmModal from "./components/modals/recording-confirm-modal.vue";

export default {
  components: {
    AiNavigation,
    AvailableTime,
    TextList,
    SelectLangList,
    SettingPanel,
    ZoomModal,
    TeamsModal,
    HangoutsModal,
    RecordingModal,
    RecordingConfirmModal
  },
  data: () => ({
    modal: ""
  }),
  watch: {
    modal() {
      console.log("modal", this.modal);
    }
  }
};
</script>
