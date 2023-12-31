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
            <div class="box-img2 , my-imgs">
                <img src="../assets/nas2.jpg" alt="">
                <div class="ab">
                    <p>Dennis Anthony Tito</p>
                    <p>Lorem ipsum dolor sit, consectetur adipisicing elit. Quos, ea doloremque! Odit et, eum odio saepe optio deleniti fugit, accusantium officia neque quis 1995, placeat adipisci beatae cupiditate minima sint!</p>
                </div>
            </div>
            <div class="box-img3 , my-imgs">
                <img src="../assets/nas3.jpg" alt="">
                <div class="ab">
                    <p>Mark Shuttleworth</p>
                    <p>Lorem ipsum dolor sit, consectetur adipisicing elit. Quos, ea doloremque! Odit et, eum odio saepe optio deleniti fugit, accusantium officia neque quis 1995, placeat adipisci beatae cupiditate minima sint!</p>
                </div>
            </div>
            <div class="box-img4 , my-imgs">
                <img src="../assets/nas4.jpg" alt="">
                <div class="ab">
                    <p>Anousheh Ansari</p>
                    <p>Lorem ipsum dolor sit, consectetur adipisicing elit. Quos, ea doloremque! Odit et, eum odio saepe optio deleniti fugit, accusantium officia neque quis 1995, placeat adipisci beatae cupiditate minima sint!</p>
                </div>
            </div>
        </div>
        <div class="box-boton">
            <div class="box-sub-paragraf">
                <div class="sub-paragraf">
                    <h2>Transcendence</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas beatae amet sit, unde nesciunt necessitatibus dolore quisquam ex reprehenderit, impedit enim cumque architecto accusamus delectus, assumenda itaque explicabo quaerat Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime voluptate dolorum inventore! Velit quam tempora quisquam quidem quae voluptatibus consectetur repellendus quo ex tempore ea, laborum quaerat rem illum animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic explicabo velit sint, accusamus amet error accusantium nostrum necessitatibus quisquam nesciunt repudiandae. Blanditiis quae voluptatem explicabo quaerat illo ipsam sequi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi vero eum ipsa rem distinctio illo nesciunt earum atque numquam suscipit aliquid, laboriosam eosias Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt dignissimos dicta hic enim qui, perspiciatis minus alias. Deserunt nesciunt saepe dolorem dolorum placeat, possimus ipsum rerum vel nostrum expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisicing elit. Doloremque, sed error tempore omnis similique ea nemo possimus, iusto expedita animi exercitationem quos saepe enim placeat dignissimos ab eum, necessitatibus facere Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellat incidunt asperiores aliquam esse, quibusdam obcaecati ad hic rem quod quam facere temporibus itaque error? Saepe aut corrupti quaerat ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cupiditate obcaecati optio iure nulla odit neque laborum quia veritatis, explicabo repellat animi ipsam autem magni natus nam repudiandae ab id! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic repellendus nemo, dicta architecto maxime maiores aperiam fugit vitae, aspernatur, sunt ducimus. Porro nisi tenetur sequi enim ipsam mollitia architecto ducimus.</p>
                </div>
            </div>
            <div class="box-sub-img">
                <div class="sub-img">
                    <img src="../assets/fazai.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="end"></div>
    </div>
</main>
</template>
<style scoped>
#my-main{
    background-color: rgb(15, 15, 15);
    color: #bbb4ab;
}
h2{
    color: red;
}
.box-4img{
    margin-bottom: 40px;
    width: 100%;
    /* height: 585px; */
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
    color: rgb(255, 0, 0);
    font-size: 18px;
}
.ab{
    width: 100%;
    border-radius: 20px;
    position: absolute;
    bottom: 80px;
    display: none;
}
.ab p {
    margin-top: 0px;
    text-align: center;
    padding: 4px;
    width: 90%;
}
.my-imgs{
    position: relative;
    margin-right: 5px;
}
.my-imgs:hover img{
    filter: blur(3px);
}
.my-imgs:hover .ab{
    display: block;
}
.my-imgs{
    width: 250px;
    height: 400px;
}
.end{
    width: 100%;
    height: 20px;
    background-color: rgb(40, 0, 0);
    margin-top: 50px;
}
@media only screen and (max-width: 1024px) {
    .my-imgs{
        width: 200px;
        height: 300px;
    }
    .ab{
        bottom: -10px;
    }
}
@media only screen and (max-width: 768px) {
    .my-imgs{
        width: 150px;
        height: 300px;
    }
    .my-imgs:hover .ab{
    height: 250px;
    }
    .ab{
        bottom: 30px;
    }
    .ab p{
        font-size: 15px;
    }
}
@media only screen and (max-width: 602px){
    .box-img2{
        display: none;
    }
    .box-img3{
        display: none;
    }
    .my-imgs{
        width: 200px;
        height: 400px;
    }
    .my-imgs:hover .ab {
    height: 175px;
    }
    .ab{
        bottom: 90px;
    }
}
@media only screen and (max-width: 434px){
    .box-img1{
        display: none;
    }
    .box-img4{
        width: 300px;
    }
    .ab{
        bottom: 70px;
    }
}
.box-boton{
    width: 100%;
    display: flex;
    padding-bottom: 20px;
}
.box-sub-img{
    width: 30%;
    display: flex;
    align-items: center;
}
.sub-img{
    height: 466px;
    padding-right: 10px;
}
.sub-img img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.box-sub-paragraf{
    padding: 15px;
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.sub-paragraf{
    box-sizing: border-box;
    /* width: 740px; */
    direction: rtl;
    padding: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 14px;
}
@media only screen and (max-width: 570px) {
    .box-sub-img{
        display: none;
    }
    .box-sub-paragraf{
        width: 100%;
    }
}
</style>