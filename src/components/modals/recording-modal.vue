<template>
  <div
    class="modal fade recordingModal show"
    style="display: block"
    tabindex="-1"
  >
    <the-modal :modal-id="'recording'">
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
        width="100%"
        poster="require('@/assets/images/video.jpg')"
      >
        <source src="@/assets/images/sample.mp4" type="video/mp4" />
      </video>
      <p>
        デフォルトの動画を撮影します。<br />
        ここで撮影された動画は、高速モードで使用されます。<br />
        録画開始ボタンを押して、カメラの前で以下の文章を読み上げてください。
      </p>
      <div class="recordingBtns">
        <button
          type="button"
          class="btn btn-primary"
          :class="{
            stopRecordingBtn: isRecording,
            startRecordingBtn: !isRecording
          }"
          data-dismiss="modal"
          data-toggle="modal"
          data-target="#recordingConfirm"
          @click="$emit('resetModal', 'recConfirm')"
        >
          <span class="start">録画を開始</span
          ><span class="stop">録画を停止</span>
        </button>
      </div>
      <div class="textArea">
        <p>
          オルツの開発するスマートミーティングのAI通訳を使えば働き方改革に多大なメリットが生まれます。
        </p>
        <p>
          オルツの開発するスマートミーティングのAI通訳を使えば働き方改革に多大なメリットが生まれます。
        </p>
        <p>
          オルツの開発するスマートミーティングのAI通訳を使えば働き方改革に多大なメリットが生まれます。
        </p>
        <p>
          オルツの開発するスマートミーティングのAI通訳を使えば働き方改革に多大なメリットが生まれます。
        </p>
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
  data: () => ({
    isRecording: true
  })
};
</script>
