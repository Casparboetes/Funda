<template>
  <div id="app">
    <NavBar />
    <ObjectHeader />
    <PhotoGallery />
    <div class="container">
      <Characteristics />
      <Broker />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { mapActions } from "vuex";
// COMPONENTS
import NavBar from "./components/NavBar.vue";
import ObjectHeader from "./components/ObjectHeader.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import Characteristics from "./components/Characteristics.vue";
import Broker from "./components/Broker.vue";
import AppFooter from "./components/AppFooter.vue";

const STORE_MODULE_NAME = "detailPage";

export default {
  name: "app",
  components: {
    NavBar,
    ObjectHeader,
    PhotoGallery,
    Characteristics,
    Broker,
    AppFooter
  },
  methods: {
    ...mapActions({
      getDetailPageData: `${STORE_MODULE_NAME}/getDetailPageData`
    })
  },
  created() {
    this.getDetailPageData();
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Proxima Nova", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #304455;
  width: 1440px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

h3 {
  background-color: #ededed;
  padding: 4px;
}

.container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 135px;
  margin-right: 135px;
}
@media screen and (max-width: 1185px) {
  .container {
    justify-content: space-around;
  }
}
@media screen and (max-width: 1105px) {
  .container {
    flex-direction: column;
    justify-content: flex-start;
  }
}
@media screen and (max-width: 768px) {
  .container {
    margin-left: 93px;
  }
}
@media screen and (max-width: 643px) {
  .container {
    margin-left: 46.5px;
    margin-right: 46.5px;
  }
}
@media screen and (max-width: 500px) {
  .container {
    margin-left: 15px;
    margin-right: 15px;
  }
}
@media screen and (max-width: 375px) {
  .container {
    padding-top: 30px;
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>
