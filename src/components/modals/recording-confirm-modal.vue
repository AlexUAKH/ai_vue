<template>
  <div
    class="modal fade recordingModal show"
    style="display: block"
    tabindex="-1"
  >
    <the-modal :modal-id="'recordingConfirm'">
      <template #header>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          @click="$emit('resetModal', '')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </template>

      <video
        autoplay="autoplay"
        autobuffer="autobuffer"
        muted="muted"
        loop
        width="100%"
        poster="require('@/assets/images/video.jpg')"
      >
        <source src="@/assets/images/sample.mp4" type="video/mp4" />
      </video>
      <p>
        デフォルト動画はこれでよろしいですか？<br />
        ※音は再生されません
      </p>
      <div class="recordingConfirmBtns">
        <button
          type="button"
          class="btn btn-light"
          data-dismiss="modal"
          data-toggle="modal"
          data-target="#recording"
          @click="$emit('resetModal', 'recording')"
        >
          撮影をやり直す
        </button>
        <button type="button" class="btn btn-primary" @click="usuVideoHandler">
          この動画を使用する
        </button>
      </div>
    </the-modal>
  </div>
</template>

<script>
import TheModal from "./the-modal.vue";

export default {
  components: {
    TheModal
  },
  methods: {
    usuVideoHandler() {
      console.log("Video used");
      this.$emit("resetModal", "");
    }
  }
};
</script>
