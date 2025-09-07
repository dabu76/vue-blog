<template>
  <div>
    <div v-for="blog in blog" :key="blog.number">
      <h5>{{ blog.title }}</h5>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogList",
  data() {},
  props: {
    blog: Array,
  },
};
</script>
<style></style>
