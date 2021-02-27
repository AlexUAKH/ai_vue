<template>
  <div class="setExportServices">
    <ul>
      <export-item
        v-model="exportTo"
        title="zoom に出力"
        id="export_zoom"
      ></export-item>
      <export-item
        v-model="exportTo"
        title="Teams に出力"
        id="export_teams"
      ></export-item>
      <export-item
        v-model="exportTo"
        title="Hangouts に出力"
        id="export_hangouts"
      ></export-item>
    </ul>
  </div>
</template>

<script>
import exportItem from "./export-item.vue";
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  components: { exportItem },
  data: () => ({
    exportTo: ""
  }),
  watch: {
    exportTo() {
      if (this.exportTo === "export_zoom") {
        this.$emit("openModal", "zoom");
      }
      if (this.exportTo === "export_teams") {
        this.$emit("openModal", "teams");
      }
      if (this.exportTo === "export_hangouts") {
        this.$emit("openModal", "hangouts");
      }
    },
    value() {
      if (this.value === "") this.exportTo = "";
    }
  }
};
</script>
