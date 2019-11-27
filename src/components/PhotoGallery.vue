<template>
  <div class="photo-gallery">
    <div class="image-container" v-for="i in [currentIndex]" :key="i">
      <img class="currentImg" :src="currentImg" />
      <a class="previous" @click="previous" href="#">&#10094; Vorige</a>
      <a class="next" @click="next" href="#">Volgende &#10095;</a>
    </div>
    &nbsp;
    <img class="secondImg" :src="secondImg" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import debounce from "lodash/debounce";

const STORE_MODULE_NAME = "detailPage";

// Note: I intended to take the images from the store on a later time.
// Could not make the correct filter in time. 
// I think I have a solution now, which I will try to implement tonight.

export default {
  name: "PhotoGallery",
  data: () => ({
    images: [
      "http://cloud.funda.nl/valentina_media/121/013/436_groot.jpg",
      "http://cloud.funda.nl/valentina_media/121/013/437_groot.jpg",
      "http://cloud.funda.nl/valentina_media/121/013/438_groot.jpg",
      "http://cloud.funda.nl/valentina_media/121/013/439_groot.jpg",
      "http://cloud.funda.nl/valentina_media/121/013/440_groot.jpg",
      "http://cloud.funda.nl/valentina_media/121/013/441_groot.jpg"
    ],
    currentIndex: 0
  }),
  computed: {
    ...mapGetters({
      allData: `${STORE_MODULE_NAME}/media`
    }),
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    secondImg: function() {
      return this.images[Math.abs(this.currentIndex + 1) % this.images.length];
    }
  },
  methods: {
    next: debounce(function() {
      this.currentIndex += 1;
    }, 300),
    previous: debounce(function() {
      this.currentIndex -= 1;
    }, 300)
  }
};
</script>

<style lang="scss">
.photo-gallery {
  position: relative;

  .image-container {
    display: inline-block;
    padding-left: 135px;
    .currentImg {
      width: 100%;
      max-width: 580px;
      height: auto;
    }
    .secondImg {
      width: 100%;
      max-width: 580px;
      height: auto;
    }

    .previous,
    .next {
      cursor: pointer;
      position: absolute;
      top: 40%;
      width: auto;
      padding: 16px;
      color: #f7a100;
      background-color: rgba(0, 0, 0, 0.4);
      font-weight: bold;
      font-size: 18px;
      transition: 0.7s ease;
      border-radius: 0 4px 4px 0;
      text-decoration: none;
      user-select: none;
    }

    .next {
      right: 0;
    }

    .previous {
      left: 0;
      width: 120px;
    }

    .previous:hover,
    .next:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  @media screen and (max-width: 1300px) {
    .secondImg {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .image-container {
      position: relative;
      display: inline-block;
      padding-left: 93px;
      .currentImg {
        width: 100%;
        max-width: 580px;
        height: auto;
      }

      .previous {
        position: absolute;
        top: 60%;
        font-size: 16px;
        margin-left: 93px !important;
      }

      .next {
        position: absolute;
        top: 60%;
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 643px) {
    .image-container {
      padding-left: 46.5px;
      padding-right: 46.5px;
      .previous {
        margin-left: 46.5px !important;
      }
      .next {
        margin-right: 46.5px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .image-container {
      display: inline-block;
      padding-left: 15px;
      padding-right: 15px;
      .previous {
        top: 83%;
        margin-left: 15px !important;
      }
      .next {
        top: 83%;
        margin-right: 15px !important;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .image-container {
      position: relative;
      display: inline-block;
      padding-left: 0;
      padding-right: 0;

      .previous {
        top: 100%;
        font-size: 18px;
        width: 45%;
        margin-left: 5px !important;
        padding-left: 32px;
      }

      .next {
        top: 100%;
        font-size: 18px;
        width: 45%;
        margin-right: 5px !important;
        padding-left: 32px;
      }
    }
  }
}
</style>
