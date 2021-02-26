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

        <section id="settingPanel" class="settingPanel">
          <button class="settingPanelBtn"></button>
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
                  <label
                    class="custom-switch-btn"
                    for="export_hangouts"
                  ></label>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          <div class="setSoundMode">
            <ul>
              <li>
                <p><span class="ic ic_lipSync"></span>音声限定モード</p>
                <div class="custom-switch custom-switch-label-io">
                  <input
                    class="custom-switch-input"
                    id="soundMode"
                    type="checkbox"
                  />
                  <label class="custom-switch-btn" for="soundMode"></label>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          <div class="setLang">
            <ul>
              <li>
                <span class="title"
                  ><img
                    src="images/ic_comment.svg"
                    alt="発話言語"
                  />発話言語</span
                >
                <div class="selectdiv">
                  <select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Korean</option>
                    <option>Mandarin</option>
                    <option>Cantonese</option>
                    <option>Taiwanese</option>
                    <option>Vietnamese</option>
                    <option>French</option>
                    <option>Italiano</option>
                  </select>
                </div>
              </li>
              <li>
                <span class="title"
                  ><img
                    src="images/ic_translate.svg"
                    alt="通訳言語の追加"
                  />通訳言語の追加</span
                >
                <div class="selectdiv">
                  <select>
                    <option selected>訳文の言語</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Korean</option>
                    <option>Mandarin</option>
                    <option>Cantonese</option>
                    <option>Taiwanese</option>
                    <option>Vietnamese</option>
                    <option>French</option>
                    <option>Italiano</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
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
                    <input
                      type="radio"
                      name="setVoiceTone"
                      id="Low"
                      checked
                    />Low
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </section>
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

    <!-- exportZoomModal -->
    <div
      class="modal fade exportServicesModal"
      id="exportZoomModal"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <img src="images/ic_zoom-on.svg" alt="zoom" />
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Zoomに入室し、通訳を開始します。<br />Zoom会議のRoom
              IDとパスワードを入力してください。
            </p>
            <form>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Room ID</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="roomID"
                    value="xxxxx"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-4 col-form-label"
                  >Password</label
                >
                <div class="col-sm-8">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="agree"
                  id="agree"
                />
                <label class="form-check-label" for="agree">
                  AI通訳の<a href="#">利用規約</a>に同意する。
                </label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#recording"
            >
              Zoomに入室して通訳を開始
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /END #exportZoomModal -->

    <!-- exportServicesModal -->
    <div
      class="modal fade exportServicesModal"
      id="exportTeamsModal"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <img src="images/ic_teams-on.svg" alt="zoom" />
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Teamsに入室し、通訳を開始します。<br />Teams会議のRoom
              IDとパスワードを入力してください。
            </p>
            <form>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Teams ID</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="teamsID"
                    value="xxxxx"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-4 col-form-label"
                  >Password</label
                >
                <div class="col-sm-8">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="agree"
                  id="agree"
                />
                <label class="form-check-label" for="agree">
                  AI通訳の<a href="#">利用規約</a>に同意する。
                </label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#recording"
            >
              Teamsに入室して通訳を開始
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /END #exportTeamsModal -->

    <!-- exportServicesModal -->
    <div
      class="modal fade exportServicesModal"
      id="exportHangoutsModal"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <img src="images/ic_hangouts-on.svg" alt="zoom" />
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              Hangoutsに入室し、通訳を開始します。<br />Hangouts会議のRoom
              IDとパスワードを入力してください。
            </p>
            <form>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Hangouts ID</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="HangoutsID"
                    value="xxxxx"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-4 col-form-label"
                  >Password</label
                >
                <div class="col-sm-8">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="agree"
                  id="agree"
                />
                <label class="form-check-label" for="agree">
                  AI通訳の<a href="#">利用規約</a>に同意する。
                </label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#recording"
            >
              Hangoutsに入室して通訳を開始
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /END #exportTeamsModal -->

    <!-- recordingModal -->
    <div class="modal fade recordingModal" id="recording" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
          </div>
        </div>
      </div>
    </div>
    <!-- /END #recordingModal -->

    <!-- recordingModal -->
    <div class="modal fade recordingModal" id="recordingConfirm" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <video
              autoplay="autoplay"
              autobuffer="autobuffer"
              muted="muted"
              poster="images/video.jpg"
            >
              <source src="images/sample.mp4" type="video/mp4" />
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
              >
                撮影をやり直す
              </button>
              <button type="button" class="btn btn-primary">
                この動画を使用する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /END #recordingModal -->
  </div>
</template>

<script>
import AiNavigation from "./components/ai-navigation.vue";
import AvailableTime from "./components/available-time.vue";
import SelectLangList from "./components/select-lang-list.vue";
import TextList from "./components/text-list.vue";
export default {
  components: {
    AiNavigation,
    AvailableTime,
    TextList,
    SelectLangList
  }
};
</script>
, AvailableTime
