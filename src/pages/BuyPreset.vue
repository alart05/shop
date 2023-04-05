<template>
<div class="main">
  <div class="main__content">
    <div>
      <img class="preset__img" :src="preset.img"> 
      <div class="preset__title">{{ preset.title }} </div> 
      <div class="preset__title">for Lightroom (mobile)</div>
    </div>
    <div class="content__info">
      <div class="info__price mobile">{{ preset.price }}р</div>
      <div class="info__button mobile">      
        <v-btn
          color="#d2b8a7"
          @click="buyPreset()"
        >
          <span class="button__text"> Купить </span>
        </v-btn>
      </div>
      <div class="info__attention">- Только для мобильного Lightroom</div>
      <div class="info__description">В этот набор входят 4 преста</div>
      <div class="info__description">Пакет PLENKA представляет собой пленочную обработку, вдохновленную ретро камерами 80-х. Окунись в трендовую обработку, набирающую спрос в Instagram </div>
      <div class="info__payment">Оплата</div>
      <div class="info__payment-method">
        <div> 1-ый способ через сайт</div>
        <div> 2-ой способ через <a>WhatsApp</a></div>
      </div>
      <div class="info__price desktop">{{ preset.price }}р</div>
      <div class="info__button desktop">      
        <v-btn
          color="#d2b8a7"
          @click="buyPreset()"
        >
          <span class="button__text"> Купить </span>
        </v-btn>
      </div>
    </div>
  </div>
  <div class="slider">
    <div class="slider__item slider__item1">
      <img-comparison-slider class="slider-focus">
        <img slot="first" width="100%" src="/images/pug2.jpg" />
        <img slot="second" width="100%" src="/images/pug3.jpg" />
      </img-comparison-slider>
    </div>

    <div class="slider__item slider__item2">
      <img-comparison-slider class="slider-focus">
        <img slot="first" width="100%" src="/images/pug2.jpg" />
        <img slot="second" width="100%" src="/images/pug3.jpg" />
      </img-comparison-slider>
      <img-comparison-slider class="slider-focus">
        <img slot="first" width="100%" src="/images/pug2.jpg" />
        <img slot="second" width="100%" src="/images/pug3.jpg" />
      </img-comparison-slider>
    </div>

    <div class="slider__item slider__item3">
      <img-comparison-slider class="slider-focus">
        <img slot="first" width="100%" src="/images/pug2.jpg" />
        <img slot="second" width="100%" src="/images/pug3.jpg" />
      </img-comparison-slider>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BuyPreset',
  data() {
    return {
      presets: [
        {
          id: 'plenka',
          title: 'Preset PLENKA',
          img: '/images/pug2.jpg',
          price: 1000
        },
        {
          id: 'plenka_2',
          title: 'Preset PLENKA 2',
          img: '/images/pug2.jpg',
          price: 3000
        }
      ],
      preset: {
        id: '',
        title: '',
        img: '',
        price: ''
      }
    }
  },
  mounted() {
    this.presets.forEach(preset => {
      if (preset.id === this.$route.params.preset_name) {
        this.preset = preset
      }
    })
  },
  methods: {
    buyPreset() {
      localStorage.setItem('shopItem', JSON.stringify(this.preset))
      this.$router.push({name: 'Bascket'})
    }
  }
}
</script>

<style lang="scss" scoped>
.preset__img{
  width: 70%;
  justify-content: center;
  display: flex;
  padding-top: 30px;
  margin: auto;
  padding-bottom: 20px;
}
.preset__title{
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 26px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding: 0 10px 10px 10px;
}
.info__price{
  display: flex;
  justify-content: flex-end;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-style: normal;
  font-size: 27px;
  color: #34a22e;
  padding: 10px 30px 10px 10px;
}
.info__button{
  display: flex;
  justify-content: center;
}
.button__text{
  color: white;
  text-decoration: none;
}
.slider__item2{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
.info__attention{
  font-family: 'Montserrat', serif;
  font-weight: 500;
  font-style: normal;
  font-size: 18px;
  padding: 40px 10px 0 10px
}
.info__description{
  font-family: 'Montserrat', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  padding: 20px 10px 0 10px
}
.info__payment{
  font-family: 'Montserrat', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 26px;
  margin: auto;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding-top: 25px;
}
.info__payment-method{
  font-family: 'Montserrat', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  padding: 8px 0 0 30px
}
.slider__item3{
  width: 70%;
  margin: auto;
}
.slider__item1{
  width: 50%;
  margin: auto;
}
.slider__item{
  padding-top: 70px;
}
.desktop {
  display: none;
}
@media screen and (min-width: 700px){
  .desktop{
    display: flex;
  }
  .mobile{
    display: none;
  }
  .main{
    padding: 60px;
  }
  .info__price{
    font-size: 45px;
  }
  .preset__img{
    width: 85%;
  }
  .main__content{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .content__info{
    display: flex;
    margin: auto;
    flex-direction: column;
  }
}
</style>
<style lang="scss">
  .slider-focus:focus {
    outline: none;
  }
</style>