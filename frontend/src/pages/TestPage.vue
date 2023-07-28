<template>
  <div>
    <h1>Test Page</h1>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TestPage',
  setup() {
    return {}
  },
  mounted() {
    const res = axios
      .get('test')
      .then((res) => res.data)
      .catch((err) => console.log(err))
    console.log(res)
  },
})
</script>
<style scoped></style>
