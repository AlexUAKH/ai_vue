<template>
  <section id="textList" class="textList">
    <ul>
      <li v-for="(item, ind) in textListItems" :key="item + ind">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({
    textListItems: [
      "こ",
      "こん",
      "こんに",
      "こんにち",
      "こんにち(final)",
      "Hello",
      "わ",
      "わた",
      "わたし",
      "わたしは",
      "私はよ",
      "私はよね",
      "私はよねく",
      "私は米倉",
      "私は米倉ご",
      "私は米倉ごう",
      "私は米倉倉豪志",
      "私は米倉豪志で",
      "私は米倉豪志です。(final)",
      "I’m Goushi Yonekura",
      "わ",
      "わた",
      "わたし",
      "わたしは",
      "私はよ",
      "私はよね",
      "私はよねく",
      "私は米倉",
      "私は米倉ご",
      "私は米倉ごう"
    ]
  })
};
</script>
