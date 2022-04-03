<template>
  <div>
    <div class="banner2-component bg-extra-light">
      <v-container>
        <!-- -----------------------------------------------
            Start Banner2
        ----------------------------------------------- -->
        <v-row class="bg-extra-light" justify="center">
          <v-col xl="6" lg="6" md="12" sm="12" xs="12" class="align-left">
            <div class="text-left">
              <h2 class="banner2-title font-weight-light">
                <p>I’m Charmyne Mamador,</p></h2>
              <h2 class="banner2-subtitle font-weight-light">
                <p class="font-weight-bold">
                  Information Designer, Visualization Developer & Product Manager
                </p>
              </h2>
              <h2 class="banner2-title font-weight-light">
                <SocialMedia />
              </h2>

              <div class="mt-16 pt-2">
                <v-btn
                  nuxt
                  large
                  to="/work"
                  class="btn-custom-lg btn-arrow"
                  depressed
                  color="error"
                  elevation="0"
                >
                  <span>Check My Work</span>
                  <i class="mdi mdi-arrow-right"></i>
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col id="sketchDiv" xl="6" lg="6" md="12" sm="12" xs="12" class="d-flex align-center ma-0 pa-0">
            
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Banner2
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>


export default {
  name: "Banner2",
  components: {
    SocialMedia: () => import("@/layouts/sections/SocialMedia")
  },
  data() {
    return {};
  },
  methods: {

  },
  created(){

  },
  mounted(){

    const script = function (p5){
      var n = 0;
      var c = 4;
      let limit = 400;

      p5.setup = () => {
        var myCanvas = p5.createCanvas(500, 500);
        myCanvas.parent("sketchDiv");
        p5.angleMode(p5.DEGREES);
        p5.colorMode(p5.HSB);
      }

      p5.draw = () =>{
        var a = n* 137.5;
        var r = c * p5.sqrt(n);
      
        var x = r*3*p5.cos(a) + p5.width/2;
        var y = r*3*p5.sin(a) + p5.height/2;
      
      //fill(a%256,255,255);
      //fill(n%256,255,255);
      // var fillColor = color(a%256,255,255);
      // var fillColor = color((a-r)%256,255,150);
      var fillColor = p5.color(n%256,255,255);
      fillColor.setAlpha(0.5);  
      p5.fill(fillColor);
      p5.stroke(0,0,100);
      // noStroke();
      // triangle(x, y, x-30, y, x, y-20);
      p5.ellipse(x,y,20,20)
      // quad(x, y, x-1, y-20, x+5, y-25, x+7, y-1);
      // var triFan = 10
      // beginShape(TRIANGLE_FAN);
      // vertex(x,y);
      // vertex(x,y-triFan);
      // vertex(x+triFan,y);
      // vertex(x,y+triFan);
      // vertex(x-triFan,y);
      // vertex(x,y-triFan);
      // endShape();
      
      
      
        if(n<limit){
        n++; 
        }else{
          p5.noLoop();
        }
      }

    }

    const P5 = require('p5');
    new P5(script);
  }
};
</script>
<style lang="scss" scoped>
.banner2-component {
  padding:100px 0;
}
</style>
