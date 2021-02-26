<template>
  <div class="setLang">
    <ul>
      <li>
        <span class="title"
          ><img
            src="@/assets/images/ic_comment.svg"
            alt="発話言語"
          />発話言語</span
        >
        <div class="selectdiv">
          <select @change="translateFromHandler">
            <option
              v-for="(lang, ind) in translateFrom"
              :key="lang"
              :selected="ind === selecktedLangFrom"
              >{{ lang }}</option
            >
          </select>
        </div>
      </li>
      <li>
        <span class="title"
          ><img
            src="@/assets/images/ic_translate.svg"
            alt="通訳言語の追加"
          />通訳言語の追加</span
        >
        <div class="selectdiv">
          <select @change="translateToHandler">
            <option
              v-for="(lang, ind) in translateTo"
              :key="lang + 2"
              :selected="ind === selecktedLangTo"
            >
              {{ lang }}
            </option>
          </select>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    selecktedLangFrom: 0,
    selecktedLangTo: 0,
    translateFrom: [
      "English",
      "Spanish",
      "Korean",
      "Mandarin",
      "Cantonese",
      "Taiwanese",
      "Vietnamese",
      "French",
      "Italiano"
    ],
    translateTo: [
      "訳文の言語",
      "English",
      "Spanish",
      "Korean",
      "Mandarin",
      "Cantonese",
      "Taiwanese",
      "Vietnamese",
      "French",
      "Italiano"
    ]
  }),
  methods: {
    translateFromHandler(e) {
      console.log("langFrom: ", e.target.value);
      // action to choose lang
    },
    translateToHandler(e) {
      // action to choose lang
      console.log("langTo: ", e.target.value);
    }
  }
};
</script>
