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

        <setting-panel></setting-panel>
        <!-- /END #settingPanel -->
      </div>
      <!-- /END #contents -->

      <video
        id="topscreen_video"
        autoplay="autoplay"
        autobuffer="autobuffer"
        muted="muted"
        poster="images/video.jpg"
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

    <zoom-modal />
    <teams-modal />
    <hangouts-modal />

    <!-- recordingModal -->
    <recording-modal />
    <recording-confirm-modal />
    <!-- /END #recordingModal -->
  </div>
</template>

<script>
import AiNavigation from "./components/ai-navigation.vue";
import AvailableTime from "./components/available-time.vue";
import SelectLangList from "./components/select-lang-list.vue";
import SettingPanel from "./components/setting-panel.vue";
import TextList from "./components/text-list.vue";
import ZoomModal from "./components/modals/zoom-modal.vue"
import TeamsModal from "./components/modals/teams-modal.vue"
import HangoutsModal from './components/modals/hangouts-modal.vue';
import RecordingModal from './components/modals/recording-modal.vue';
import RecordingConfirmModal from './components/modals/recording-confirm-modal.vue';

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
  }
};
</script>
