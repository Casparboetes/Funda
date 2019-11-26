<template>
  <div class="main-info">
    <div>
      <h2>Highlights</h2>
      <h3>
        {{ allData.Kenmerken[1].Kenmerken[2].Naam }}
        {{ allData.Kenmerken[1].Kenmerken[2].Waarde }}
      </h3>
      <h3>
        {{ displayLivingArea }}
        {{ displaySquareMeters(this.allData.Kenmerken[2].Kenmerken[0].Waarde) }}
        {{ squareMeter }}
      </h3>
      <h3>
        {{ allData.Kenmerken[3].Kenmerken[0].Naam }}
        {{ allData.Kenmerken[3].Kenmerken[0].Waarde }}
      </h3>
      <h3>
        {{ allData.Kenmerken[2].Kenmerken[2].Naam }}
        {{ displaySquareMeters(allData.Kenmerken[2].Kenmerken[2].Waarde) }}
        {{ squareMeter }}
      </h3>
    </div>
    <br />
    <div>
      <h2>Kenmerken</h2>
      <h3>
        {{ allData.Kenmerken[0].Kenmerken[0].Naam }} {{ euroSign
        }}{{ onlyDisplayNumber(allData.Kenmerken[0].Kenmerken[0].Waarde) }}
      </h3>
      <h3>
        {{ allData.Kenmerken[0].Kenmerken[0].Naam }} {{ euroSign
        }}{{ calculateAskingPricePerSquareMeter }} per {{ squareMeter }}
      </h3>
      <h3>
        {{ allData.Kenmerken[0].Kenmerken[1].Naam }}
        {{ allData.Kenmerken[0].Kenmerken[1].Waarde }}
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const STORE_MODULE_NAME = "detailPage";

export default {
  data: () => ({
    euroSign: "€",
    squareMeter: "m²"
  }),
  computed: {
    ...mapGetters({
      allData: `${STORE_MODULE_NAME}/allData`
    }),
    calculateAskingPricePerSquareMeter() {
      const askingPrice = this.onlyDisplayNumber(
        this.allData.Kenmerken[0].Kenmerken[0].Waarde
      );

      const amountOfSquareMeters = this.displaySquareMeters(
        this.allData.Kenmerken[2].Kenmerken[0].Waarde
      );

      const askingPricePerSquareMeterWithoutDecimals = (
        askingPrice / amountOfSquareMeters
      ).toFixed(0);

      return askingPricePerSquareMeterWithoutDecimals;
    },
    displayLivingArea() {
      const livingArea = this.allData.Kenmerken[2].Kenmerken[0].Naam.slice(
        0,
        5
      );

      return livingArea;
    }
  },
  methods: {
    displaySquareMeters(value) {
      const amountOfSquareMeters = value.slice(0, -13);

      return amountOfSquareMeters;
    },
    onlyDisplayNumber(value) {
      const parsedString = value.replace(/[^0-9]/g, "");

      return parsedString;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-info {
  border: 1px #304455 solid;
  width: 750px;
  height: 750px;
  margin: 35px 0;
  padding: 0 15px 15px 15px;
}
@media screen and (max-width: 1105px) {
  .main-info {
    width: 580px;
  }
}
@media screen and (max-width: 768px) {
  .main-info {
    max-width: 580px;
  }
}
@media screen and (max-width: 768px) {
  .main-info {
    max-width: 580px;
  }
}
@media screen and (max-width: 643px) {
  .main-info {
    max-width: 540px;
    width: 100%;
    height: auto;
  }
}
</style>
