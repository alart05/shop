<template>
  <div>
    <div class="title">Обо мне</div>
    <div class="img">
      <img width="50%" src="/images/pug.jpg">
    </div>
    <div class="text">Привет!</div>
    <div class="text">Я рада приветствовать тебя на моем сайте, давай познакомимся поближе</div>
    <div class="text-about-me">Меня зовут Алина и я твой помощник в создании индивидуальной картинки.</div>
      <v-container fluid>
        <v-row dense>
          <v-col cols="6">
            <v-card>
              <v-img
                src="/images/pug2.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
              </v-img> 
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-img
                src="/images/pug2.jpg" 
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="text">В области фотографии я уже 4 года и знаю все о цвете, сейчас мое вдохновение сосредоточено конкретно на мобильной съемки, потому что это то, что у тебя всегда под рукой - телефон</div>
      <v-container fluid>
        <v-row dense>
          <v-col cols="6">
            <v-card>
              <v-img
                src="/images/pug2.jpg"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
              </v-img> 
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-img
                src="/images/pug2.jpg" 
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                cover
              >
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 26px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  padding: 30px 0 20px 30px;
}
.img{
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  
  img {
    border-radius: 20px;
  }
}
.text{
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-style: normal;
  font-size: 22px;
  padding: 20px 0 0 30px
}
.text-about-me{
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-style: normal;
  font-size: 22px;
  padding: 35px 20px 20px 30px
}
</style>