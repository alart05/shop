<template>
  <div>
    <div class="title">Корзина</div>
    <div class="bascket">
      <div>
        <div><img class="bascket__img" :src="preset.img"></div>
        <div class="bascket__description">{{ preset.title }} <br> for Lightroom (mobile)</div>
        <div class="bascket__price">{{ preset.price }}р</div>
      </div>
      <div>
        <div class="order__title">Оформить заказ</div>
        <div class="order__input">
          <v-text-field
            label="Ваше ФИО*"
            filled
            rounded
            dense
            hide-details
          ></v-text-field>
        </div>
        <div class="order__input">
          <v-text-field
            label="Ваша почта*"
            filled
            rounded
            dense
            hide-details
          ></v-text-field>
        </div>
        <div class="order__input">
          <v-textarea
            filled
            rounded
            label="Ваш комментарий"
          ></v-textarea>
        </div>
        <div class="order__button">
          <v-btn
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            color="#34a22e"
            @click="loader = 'loading'"
          >
            <span class="button__send">Отправить</span>
            <template v-slot:loader>
              <span>Загрузка...</span>
            </template>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bascket',
  data () {
    return {
      loader: null,
      loading: false,
      preset: {
        id: '',
        title: '',
        img: '',
        price: ''
      }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
  mounted() {
    this.preset = JSON.parse(localStorage.getItem('shopItem'))
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 26px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  padding: 30px 0 30px 30px
}
.bascket__img{
  width: 70%;
  justify-content: center;
  display: flex;
  margin: 0 auto 20px auto;
}
.order__button{
  display: flex;
  justify-content: center;
}
.bascket__description{
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
.bascket__price{
  display: flex;
  justify-content: center;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  font-style: normal;
  font-size: 27px;
  color: #34a22e;
  padding: 0 30px 0px 10px;
}
.order__title{
  display: flex;
  justify-content: center;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-style: normal;
  font-size: 27px;
  padding: 30px 0 0 20px ;
}
.order__input{
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 25px 15px 0 15px;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
.button__send{
  color: white;
}
@media screen and (min-width: 700px){
  .order__input{
    width: 95%;
    margin: auto;
  }
  .bascket__img{
    width: 80%;
  }
  .bascket{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>