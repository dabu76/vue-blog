<template>
  <div>
    <h4>詳細ページ</h4>
    <h5>{{ blog[$route.params.id].title }}</h5>
    <p>{{ blog[$route.params.id].content }}</p>
  </div>
</template>
<script>
export default {
  name: "DetailPage",
  data() {},
  props: {
    blog: Array,
  },
};
</script>
<style></style>
