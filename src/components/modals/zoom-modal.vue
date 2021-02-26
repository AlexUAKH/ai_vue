<template>
  <the-modal :modal-id="'exportZoomModal'">
    <template #header>
      <img src="images/ic_zoom-on.svg" alt="zoom">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </template>
  
    <video
      autoplay="autoplay"
      autobuffer="autobuffer"
      poster="images/video.jpg"
    >
      <source src="images/sample.mp4" type="video/mp4" />
    </video>
    <p>
      デフォルトの動画を撮影します。<br />
      ここで撮影された動画は、高速モードで使用されます。<br />
      録画開始ボタンを押して、カメラの前で以下の文章を読み上げてください。
    </p>
    <div class="recordingBtns">
      <button
        type="button"
        class="btn btn-primary stopRecordingBtn"
        data-dismiss="modal"
        data-toggle="modal"
        data-target="#recordingConfirm"
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
</template>

<script>
import TheModal from "./the-modal.vue"

export default {
  components: {
    TheModal
  }
}
</script>