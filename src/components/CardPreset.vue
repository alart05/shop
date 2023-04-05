<template>
  <router-link :to="{ name: 'BuyPreset', params: {preset_name: id}}" class="card">
    <img width="100%" :src="image">
    <img class='card__kiss' src="/images/pink-kiss.png">
    <div class="card__title">{{ title }}</div> 
    <div class="card__title"> for Lightroom (mobile)</div>
    <div class="card__price">{{ price }}</div>
  </router-link>
</template>

<script>
export default {
  name: 'CardPreset',
  props: {
    image: {type: String},
    title: {type: String},
    price: {type: String},
    id: {type: String},
  }
}
</script>

<style style="scss" scoped>
.card__title{
  font-family: 'gilda', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 26px;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  padding-top: 15px;
  padding: 0 10px 10px 10px;
}
.card__kiss{
  width: 20%;
  position: absolute;
  top: -5%;
  right: 18%;
  transform: rotate(25deg);
}
.card__price{
  display: flex;
  justify-content: flex-end;
  font-family: 'Montserrat', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  padding: 0 10px 10px 10px;
}
.card {
  text-decoration: none;
  color: black;
  position: relative;
  box-shadow: 4px 0px 13px #446f7a;
} 
@media screen and (min-width: 700px){
  .card__kiss{
    width: 20%;
    top: -4%;
  }
}
</style>