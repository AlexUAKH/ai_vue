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

    <div class="setExportServices">
      <ul>
        <li id="exportToZoom">
          <p><span class="ic ic_zoom"></span>zoom に出力</p>
          <div class="custom-switch custom-switch-label-io">
            <input
              class="custom-switch-input"
              id="export_zoom"
              type="radio"
              name="setExportServices"
            />
            <label class="custom-switch-btn" for="export_zoom"></label>
          </div>
        </li>
        <li id="exportToTeams">
          <p><span class="ic ic_teams"></span>Teams に出力</p>
          <div class="custom-switch custom-switch-label-io">
            <input
              class="custom-switch-input"
              id="export_teams"
              type="radio"
              name="setExportServices"
            />
            <label class="custom-switch-btn" for="export_teams"></label>
          </div>
        </li>
        <li id="exportToHangouts">
          <p><span class="ic ic_hangouts"></span>Hangouts に出力</p>
          <div class="custom-switch custom-switch-label-io">
            <input
              class="custom-switch-input"
              id="export_hangouts"
              type="radio"
              name="setExportServices"
            />
            <label class="custom-switch-btn" for="export_hangouts"></label>
          </div>
        </li>
      </ul>
    </div>

    <hr />

    <set-sound-mode></set-sound-mode>

    <hr />

    <set-lang-panel></set-lang-panel>

    <hr />

    <div class="setVoiceTone">
      <ul>
        <li>
          <span
            ><img src="images/ic_voiceTone.svg" alt="Voice Tone" />Voice
            Tone</span
          >
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn active">
              <input type="radio" name="setVoiceTone" id="High" />High
            </label>
            <label class="btn">
              <input type="radio" name="setVoiceTone" id="Low" checked />Low
            </label>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SetLangPanel from "./set-lang-panel.vue";
import setSoundMode from "./set-sound-mode.vue";
export default {
  components: { setSoundMode, SetLangPanel },
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
