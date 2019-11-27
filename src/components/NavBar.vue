<template>
  <nav class="nav-bar">
    <div class="container">
      <a href="https://www.funda.nl/" class="active" target="_blank">
        <img alt="Funda wonen logo" :src="fundawonen" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    fundawonen: require("../assets/fundawonen-logo.svg")
  })
};
</script>

<style lang="scss">
.nav-bar {
  height: 52px;
  background-color: #f7a100;
  padding: 0 16px 0 16px;

  .container {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 101px;
    padding-top: 7.5px;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>
