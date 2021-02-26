<template>
  <button
    class="soundBtn"
    :class="{ soundOn: toggle }"
    @click="toggle = !toggle"
  ></button>
</template>

<script>
export default {
  data: () => ({
    toggle: false
  })
};
</script>
