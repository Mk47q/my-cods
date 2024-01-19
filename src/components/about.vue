<script setup></script>
<template>
    <section class="my-box-proje">
    <div class="container">
      <div class="wrapper-boxs">
        <div class="box-img , gg">
          <img src="../assets/nas4.jpg" alt="" class="box-img-item">
        </div>
        <div class="box-title">
          <h3 class="box-title__title">Anousheh Ansari #3429</h3>
          <p class="box-title__text">Our Equilibrium collection promotes balance and calm Lorem ipsum.</p>
        </div>
        <div class="box-datas">
          <p class="data-item , p1">0.041 ETH</p>
          <p class="data-item , p2">3 days left</p>
        </div>
        <span class="border"></span>
        <div class="box-end">
          <div class="box-end-img">
            <img src="../assets/nas4.jpg" alt="" class="parent-img">
          </div>
          <div class="box-end-p">
            <small class="end-p">Creation of <span class="end-p__spani">Jules Wyvern</span></small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
body{
    margin: 0px;
    background: #0d1a2d;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
.container{
    max-width: 80%;
    margin: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}
.my-box-proje{
    border-radius: 0.8rem;
    /* margin-top: 4rem; */
    margin-left: auto;
    margin-right: auto;
    background-color: #1a1d21;
    width: 100%;
}
.wrapper-boxs{
    display: flex;
    justify-content: center;
    flex-direction: column  ;
}
.box-img{
    width: 100%;
    height: 16rem;
    padding-top: 1rem;
}
.box-img-item{
    border-radius: 0.6rem;
    width: 100%;
    height: 100%;
}
.box-title__title{
    color: #fffffd;
    margin: 5px 0px 0px;
    font-weight: 500;
}
.box-title__text{
    margin: 5px 0px 0px;
    color: #687f9e;
}
.box-datas{
    display: flex;
    justify-content: space-between;
}
.data-item{
   font-size: 12px;
}
.p1{
    color: #3cf8f9;
}
.p2{
    color: #687f9e;
}
.border{
    margin-top: 0.7rem;
    border: 1px solid gray;
}
.box-end{
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
}
.box-end-img{
    width: 2rem;
    height: 2rem; 
    margin-right: 1rem;
}
.parent-img{
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 50%;
}
.end-p{
    color: #687f9e
}
.end-p__spani{
    color: #fffffd;
}
</style>