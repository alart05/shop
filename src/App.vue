<template>
  <div>
    <div class="header">
      <router-link :to="{name: 'AboutMe'}"  class="header__item">Обо мне</router-link>
      <router-link :to="{name: 'Main'}" class="header__item">Пресеты</router-link>
      <router-link class="header__logo" :to="{name: 'Main'}">
        <img class="logo__img" src="/images/logo.png">
      </router-link>
      <a class="header__item hidden-mobile">Телеграм</a>
      <a class="header__item hidden-mobile">Инстаграм</a>
    </div>

    <router-view></router-view>

    <div class="scroll-up">
      <v-btn
        elevation="5"
        icon
        outlined
        @click="top"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
     top(){ window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
}
</script>

<style lang="scss" scoped>
.header{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10px 10px 10px;
  top: 0;
  background: white;
  z-index: 1;
  position: sticky;
}
.header__item{
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-style: normal;
  font-size: 22px;
  margin: auto;
  cursor: pointer;
  padding-top: 15px;
  color: black;
  border-bottom: 1px solid black;
  text-decoration: none;
}
.header__logo{
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;
}
.logo__img{
  width: 100%;
  border-bottom: 1px solid rgba(4,4,4,0.2);
}
.hidden-mobile {
  display: none;
}
@media screen and (min-width: 700px){
  .header{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(4,4,4,0.2);
    padding-bottom: 15px;
    text-decoration: none;
  }
  .header__logo {
    width: 350px;
    display: flex;
    padding: 0 20px 0 20px;
  }
  .hidden-mobile {
    display: block;
  }
}
.scroll-up{
  color: #d2b8a7;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  padding: 15px 20px;
  bottom: 0;
}
</style>

<style>
@font-face {
  font-family: 'Cormorant Garamond';
  src: url('/fonts/CormorantGaramond-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Cormorant Garamond';
  src: url('/fonts/CormorantGaramond-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Cormorant Garamond';
  src: url('/fonts/CormorantGaramond-SemiBolt.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'adorabouton';
  src: url('/fonts/adorabouton.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'gilda';
  src: url('/fonts/gilda/GildaDisplay-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
</style>