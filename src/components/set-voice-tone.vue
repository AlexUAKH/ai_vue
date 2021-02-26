<template>
  <div class="setVoiceTone">
    <ul>
      <li>
        <span
          ><img src="@/assets/images/ic_voiceTone.svg" alt="Voice Tone" />Voice
          Tone</span
        >
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn">
            <input type="radio" name="setVoiceTone" id="High" />High
          </label>
          <label class="btn">
            <input type="radio" name="setVoiceTone" id="Low" checked />Low
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
