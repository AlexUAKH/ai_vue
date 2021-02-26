<template>
  <div class="setSoundMode">
    <ul>
      <li :class="{ active: isSoundOn }">
        <p><span class="ic ic_lipSync"></span>音声限定モード</p>
        <div class="custom-switch custom-switch-label-io">
          <input
            class="custom-switch-input"
            id="soundMode"
            type="checkbox"
            @click="soundModeChange"
          />
          <label class="custom-switch-btn" for="soundMode"></label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    isSoundOn: false
  }),
  methods: {
    soundModeChange() {
      this.isSoundOn = !this.isSoundOn;
    }
  }
};
</script>
