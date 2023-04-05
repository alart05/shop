<template>
  <div>
    <div class="banner">
      <img width="100%" src="/images/pug.jpg">
      <div class="banner__text">Presets</div>
    </div>
    <div class="main">
      <div class="main__title">для творчества</div>
      <div class="main__title">твоей </div>
      <div class="main__title">мобильной обработки</div>

      <div class="main__cards">
        <CardPreset image="/images/pug2.jpg" title="Preset PLENKA" price="1 000₽" id="plenka"/>
        <CardPreset image="/images/pug2.jpg" title="Preset PLENKA-2" price="3 000₽" id="plenka_2"/>
      </div>
    </div>
  </div>
</template>

<script>
import CardPreset from '@/components/CardPreset'
export default {
  name: 'Presets',
  components: {
    CardPreset
  }
}
</script>

<style lang="scss" scoped>
.banner__text{
  font-family: 'adorabouton', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 55px;
  transform: translate(-58%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: #63522f;
}
.main__cards{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 70px;
  padding: 75px 10px 10px 10px;
}
.main__title{
  font-family: 'Montserrat', serif;
  font-weight: 400;
  font-style: normal;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
}
.main{
  font-size: 22px;
}
.banner {
  position: relative;
  padding-bottom: 35px;
}
@media screen and (min-width: 700px){
  .preset-img{
    font-size: 130px;
  }
  .main__cards{
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
  }
  .main{
    padding: 0 150px 0 150px;
    font-size: 38px;
  }
  .banner__text {
    font-size: 100px;
  }
}
@media screen and (min-width: 1250px){
  .main__cards{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>