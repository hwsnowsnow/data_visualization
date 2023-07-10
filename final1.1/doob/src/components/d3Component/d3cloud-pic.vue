<template>
  <div class="photo-container">
    <img class="centered-image" :src="photoPath" alt="My Photo">
  </div>
</template>

<style>
.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 可根据需要调整高度 */
}

.centered-image {
  display: block;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: "CloudNet",
  data() {
    return {
      photoPath: require('@/assets/images/portfolio-06.jpg') // 设置照片文件的路径
    };
  }
};
</script>
