<template>
  <div class="object-header">
    <div class="adress">{{ allData.Adres }}</div>
    <div class="location">{{ allData.Postcode }} {{ allData.Plaats }}</div>
    <div class="price">
      {{ euroSign }}{{ allData.Prijs.Koopprijs }}
      {{ allData.Prijs.KoopAbbreviation }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const STORE_MODULE_NAME = "detailPage";

export default {
  data: () => ({
    euroSign: "€"
  }),
  computed: {
    ...mapGetters({
      allData: `${STORE_MODULE_NAME}/allData`
    })
  }
};
</script>

<style lang="scss" scoped>
.object-header {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 16px;
  height: 128px;
  width: 512px;
  margin: 0 135px;
  .adress {
    color: #333333;
    font-size: 24px;
  }
  .location {
    color: #999999;
    font-size: 16px;
  }
  .price {
    color: #333333;
    font-size: 16px;
    font-weight: bold;
  }
}

@media screen and (max-width: 768px) {
  .object-header {
    margin: 0 93px;
  }
}

@media screen and (max-width: 643px) {
  .object-header {
    margin: 0 46.6px;
  }
}

@media screen and (max-width: 500px) {
  .object-header {
    margin: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 16px 0;
    height: 48px;
    width: 500px;
    margin: 0;
    .adress {
      color: #333333;
      font-size: 16px;
    }
    .location {
      color: #333333;
      font-size: 16px;
    }
    .price {
      color: #333333;
      font-size: 16px;
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 375px) {
  .object-header {
    width: 350px;
    position: absolute;
    top: 3rem;
    left: 1rem;
    z-index: 1;
    .adress {
      color: #0071b3;
      font-size: 16px;
      font-weight: bold;
    }
    .location {
      color: #0071b3;
      font-size: 16px;
      font-weight: bold;
    }
    .price {
      color: #0071b3;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
