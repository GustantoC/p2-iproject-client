<template>
  <div id="loading">
    <div class="loader" id="loading-image"></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style>
#loading {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.7;
  background-color: #fff;
  z-index: 99;
}

#loading-image {
  z-index: 100;
}

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #5b00b1;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>