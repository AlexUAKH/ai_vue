<template>
  <the-modal :modal-id="'recording'">
    <template #header>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </template>
    
    <p>Teamsに入室し、通訳を開始します。<br>Teams会議のRoom IDとパスワードを入力してください。</p>
    <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-4 col-form-label">Teams ID</label>
        <div class="col-sm-8">
          <input type="text" readonly class="form-control-plaintext" id="teamsID" value="xxxxx">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword">
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" name="agree" id="agree">
        <label class="form-check-label" for="agree">
          AI通訳の<a href="#">利用規約</a>に同意する。
        </label>
      </div>
    </form>

    <template #footer>
      <button
        type="button"
        class="btn btn-primary"
        data-dismiss="modal"
        data-toggle="modal"
        data-target="#recording"
      >
        Teamsに入室して通訳を開始
      </button>
    </template>
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