<script setup>
import imgwidth from '@/components/imgwidth.vue'
</script>
<template>
<main>
    <div id="my-main">
        <imgwidth></imgwidth>
        <div class="box-4img">
            <div class="box-img1 , my-imgs">
                <img src="../assets/nas1.jpg" alt="">
                <div class="ab">
                    <p>Richard Garroitt</p>
                    <p>Lorem ipsum dolor sit, consectetur adipisicing elit. Quos, ea doloremque! Odit et, eum odio saepe optio deleniti fugit, accusantium officia neque quis 1995, placeat adipisci beatae cupiditate minima sint!</p>
                </div>
            </div>
            <div class="box-img2">
                <img src="../assets/nas2.jpg" alt="">
                <div class="ab">
                    <p>Dennis Anthony Tito</p>
                    <p>Lorem ipsum dolor sit, consectetur adipisicing elit. Quos, ea doloremque! Odit et, eum odio saepe optio deleniti fugit, accusantium officia neque quis 1995, placeat adipisci beatae cupiditate minima sint!</p>
                </div>
            </div>
            <div class="box-img3">
                <img src="../assets/nas3.jpg" alt="">
                <div class="ab">
                    <p>Mark Shuttleworth</p>
                    <p>Lorem ipsum dolor sit, consectetur adipisicing elit. Quos, ea doloremque! Odit et, eum odio saepe optio deleniti fugit, accusantium officia neque quis 1995, placeat adipisci beatae cupiditate minima sint!</p>
                </div>
            </div>
            <div class="box-img4">
                <img src="../assets/nas4.jpg" alt="">
                <div class="ab">
                    <p>Anousheh Ansari</p>
                    <p>Lorem ipsum dolor sit, consectetur adipisicing elit. Quos, ea doloremque! Odit et, eum odio saepe optio deleniti fugit, accusantium officia neque quis 1995, placeat adipisci beatae cupiditate minima sint!</p>
                </div>
            </div>
        </div>
    </div>
</main>
</template>
<style scoped>
#my-main{
    background-color: rgb(36, 41, 31);
}
.box-4img{
    width: 100%;
    height: 585px;
    display: flex;
    justify-content: space-around;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.box-4img img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
.box-4img p {
    color: rgb(30, 4, 4);
}
.ab{
    background-color: cornflowerblue;
    width: 100%;
    height: 0px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
}
.ab p {
    margin-top: 0px;
    text-align: center;
    padding: 4px;
    height: 0;
    width: 100%;
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.5s ease-in-out;
}
.box-img1:hover p{
    opacity: 1;
    transform: translateY(0);
}
.box-img2:hover p{
    opacity: 1;
    transform: translateY(0);
}
.box-img3:hover p{
    opacity: 1;
    transform: translateY(0);
}
.box-img4:hover p{
    opacity: 1;
    transform: translateY(0);
}
.box-img1:hover .ab {
    height: 175px;
}
.box-img2:hover .ab{
    height: 175px;
}
.box-img3:hover .ab{
    height: 175px;
}
.box-img4:hover .ab{
    height: 175px;
}
.box-img1{
    width: 250px;
    height: 400px;
}
.box-img2{
    width: 250px;
    height: 400px;
}
.box-img3{
    width: 250px;
    height: 400px;
}
.box-img4{
    width: 250px;
    height: 400px;
}
@media only screen and (max-width: 1035px) {
    .box-4img{
        height: 490px;
    }
    .box-img1{
        width: 200px;
        height: 300px;
    }
    .box-img2{
        width: 200px;
        height: 300px;
    }
    .box-img3{
        width: 200px;
        height: 300px;
    }
    .box-img4{
        width: 200px;
        height: 300px;
    }
}
@media only screen and (max-width: 834px) {
    .box-4img{
        height: 570px;
    }
    .box-img1{
        width: 150px;
        height: 300px;
    }
    .box-img2{
        width: 150px;
        height: 300px;
    }
    .box-img3{
        width: 150px;
        height: 300px;
    }
    .box-img4{
        width: 150px;
        height: 300px;
    }
    .box-img1:hover .ab {
    height: 250px;
    }
    .box-img2:hover .ab {
    height: 250px;
    }
    .box-img3:hover .ab {
    height: 250px;
    }
    .box-img4:hover .ab {
    height: 250px;
}
}
@media only screen and (max-width: 638px){
    .box-4img{
        height: 590px;
    }
    .box-img2{
        display: none;
    }
    .box-img3{
        display: none;
    }
    .box-img1{
        width: 200px;
        height: 400px;
    }
    .box-img4{
        width: 200px;
        height: 400px;
    }
    .box-img1:hover .ab {
    height: 175px;
    }
    .box-img4:hover .ab {
    height: 175px;
}
}
@media only screen and (max-width: 434px){
    .box-img1{
        display: none;
    }
    .box-img4{
        width: 300px;
    }
}
</style>