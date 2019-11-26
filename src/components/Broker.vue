<template>
  <div class="contact-broker-info">
    <img src="../assets/logo.png" alt="Logo makelaar" />
    <h1>Caspar Boetes</h1>
    <h3>Telefoon 06-24142683</h3>
    <hr />
    <br />
    <button type="button" @click="contactBroker">
      Contact makelaar
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    contactBroker() {
      window.location.href =
        "mailto:casparboetes@gmail.com?subject=Assignment&body=Dear%20Caspar%20,";
    }
  }
};
</script>

<style lang="scss">
.contact-broker-info {
  border: 1px #304455 solid;
  margin: 35px 0 0 35px;
  padding: 16px 16px;
  width: 310px;
  height: 386px;

  img {
    margin-left: 69px;
    width: 50%;
    height: auto;
  }

  button {
    width: 100%;
    background-color: white;
    border: 1px solid #f7a100;
    color: #f7a100;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #f7a100;
      color: white;
    }
  }
}
@media screen and (max-width: 1185px) {
  .contact-broker-info {
    padding: 10px 10px;
  }
}
@media screen and (max-width: 1105px) {
  .contact-broker-info {
    margin: 0 0 35px 0;
  }
}
@media screen and (max-with: 1060px) {
  .contact-broker-info {
    margin: 35px 35px, 35px 0;
  }
}
@media screen and (max-width: 500px) {
  .contact-broker-info {
    width: 365px;
    img {
      margin-left: 30%;
      width: 40%;
      height: auto;
    }
  }
}
@media screen and (max-width: 375px) {
  .contact-broker-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 365px;
    h1,
    h3 {
      margin-left: 15%;
      background-color: #fff;
    }
    img {
      margin-left: 29%;
      width: 40%;
    }
  }
}
</style>
