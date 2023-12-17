<script setup>
// import { RouterLink } from 'vue-router';
import imgwidth from '@/components/imgwidth.vue'
</script>

<template>
    <main>
        <div id="my-main">
            <div class="imgs">
                <div class="img-left">
                    <img src="../assets/sayare (1).jpg" alt="">
                    <p class="p-img">سیاره زحل(2023)</p>
                </div>
                <div class="img-right">
                    <img src="../assets/sayare (2).jpg" alt="">
                    <p class="p-img">کهکشان راه شیری(2022)</p>
                </div>
            </div>
            <div class="paragraf">
                <h1>galaxy</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia alias, impedit sit ducimus nobis molestias est laudantium quod esse similique blanditiis ullam veniam! Architecto repudiandae officiis suscipit dolores! Laborum Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae iusto reiciendis quam expedita a amet rerum, illum modi excepturi soluta porro assumenda eum libero provident aut vero molestias doloribus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores, esse laboriosam incidunt sequi nisi nesciunt obcaecati quia voluptate quaerat, odit quos vero quas ex suscipit iusto inventore ad expedita Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni perspiciatis aspernatur mollitia modi nulla facere at, ad natus et iste id laborum expedita sunt dicta, consectetur ex tempore ratione eius Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis porro, nihil soluta quae impedit, facere minima neque dicta commodi dolores molestias sint!
                </p>
                <h1>nasa news</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, soluta cumque voluptatem ad corporis aut magnam repellat quidem similique numquam consequatur ipsam sapiente aspernatur pariatur nostrum eos? Enim, fugiat deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis numquam ipsa doloremque laboriosam tenetur deleniti ad nostrum corporis dolorum earum est incidunt adipisci molestiae modi ea, quia provident error dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ducimus a pariatur nam corrupti rerum voluptatibus excepturi ad tempore ea eius ratione assumenda sed alias, eveniet provident magni laboriosam voluptatum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas fuga unde ad, iste commodi, optio quis nisi numquam, voluptatibus velit dolorum inventore ab culpa odio repellat possimus adipisci dolorem blanditiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ducimus architecto minus eaque blanditiis nostrum ratione ab magnam, temporibus quas illum nam exercitationem in porro ullam aut, libero aperiam facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic delectus amet magnam, repudiandae animi blanditiis! Facilis, libero? Itaque nesciunt non nulla, culpa dignissimos quaerat illo nostrum harum delectus sit!</p>
            </div>
            <imgwidth></imgwidth>
            <div class="box-img-p">
                <div class="box-img"><img src="../assets/say2.jpeg" alt=""></div>
                <div class="box-p">
                    <h2>Features of the planets</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat, explicabo facere unde fuga, distinctio id eveniet rem a repellendus consequatur? Soluta perspiciatis in incidunt quos rerum, natus optio! Magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo cumque architecto deleniti dolorem! Ut sequi, adipisci autem est praesentium aliquid alias laborum, quaerat, deleniti doloremque itaque nam beatae magni officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum quisquam modi enim iure delectus sunt recusandae quos at nam facere beatae eligendi, voluptatum neque. Doloribus iusto dolor dignissimos porro! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur error aperiam et possimus blanditiis perspiciatis voluptas nostrum voluptate numquam quisquam nemo, expedita explicabo unde, laborum temporibus! Odio rerum inventore harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores, repudiandae ullam fugiat fugit in distinctio nihil. Amet esse tenetur aliquid maxime beatae provident repellendus accusamus recusandae, eum sint. Rerum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea eius corporis natus similique ullam laborum, itaque assumenda, voluptates illum exercitationem corrupti commodi, iusto pariatur fugit quasi. Tempora, ipsam labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur recusandae accusantium dolore iste dolorum? Ipsam perspiciatis consequuntur sed harum at dolorem, similique, sit soluta aspernatur dolor pariatur perferendis laborum eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam necessitatibus ipsa voluptatibus sed magnam cum rerum ea. Iste aspernatur omnis exercitationem alias consectetur odit placeat ratione voluptates debitis animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel dignissimos consectetur commodi recusandae voluptatum nulla minus officia, ex maiores facere magnam ipsum accusamus corporis, a praesentium rem esse? Suscipit, neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim odio atque ipsum molestias distinctio cumque eaque, aliquid, molestiae quasi eligendi quisquam exercitationem sint illo quibusdam assumenda ratione dolore, autem delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deserunt fugit nisi nesciunt iure. Dolorem molestias culpa deleniti tenetur quidem vel nesciunt hic optio debitis. Cupiditate amet porro nam officia.
                    </p>
                </div> 
            </div>
            <div class="end"></div>
        </div>
    </main>
</template>
<style scoped>
template{
    display: flex;
    flex-direction: column;
}
p , h1 , h2{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #bbb4ab;
}
#my-main{
    /* background-color: rgb(36, 41, 31); */
    background-color: rgb(15, 15, 15);
    width:100%;
}
.imgs{
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: sanas;
}
.imgs img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.p-img{
    display: none;
    text-align: center;
    margin: 0px;
}
.img-right:hover{
  transform: scale(1.1);
  transition: all 0.3s ease-in-out 0.1s;
}
.img-left:hover{
    transform: scale(1.1);
    transition: all 0.3s ease-in-out 0.1s;
}
.img-left:hover .p-img{
    display: block;
}
.img-right:hover .p-img{
    display: block;
}
.img-right , .img-left{
    width: 490px;
    height: 260px;
}
.paragraf{
    width: 100%;
    margin-top: 12px;
}
.paragraf p{
    padding: 10px;
    margin-top: 0px;
}
.paragraf h1{
    margin-bottom: 0px;
    padding-left: 10px;
    color: rgb(255, 0, 0);
}
.box-img-p{
    width: 100%;
    display: flex;
    margin-top: 20px;
}
.box-img{
    width: 310px;
    max-height: 650px;
    padding-left: 10px;
}
.box-img img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.box-p{
    width: 80%;
    height: 100%;
}
.box-p p , h2{
    padding: 10px;
    margin: 0px;
}
.box-p  h2{
    color: red;
}
.end{
    width: 100%;
    height: 20px;
    background-color: rgb(40, 0, 0);
    margin-top: 100px;
}
.img-right{
    transition: all 0.4s ease;
}
.img-left{
    transition: all 0.4s ease;
}
@font-face {
    font-family: sanas;
    src: url('@/assets/Iranian Sans.ttf');
}
@media only screen and (max-width: 371px) {
    .serch-box{
        display: none;
    }
}
@media only screen and (max-width: 1114px) {
    .img-left{
        width:350px;
        height: 250px;
    }
    .img-right{
        width:350px;
        height: 250px;
    }
}
@media only screen and (max-width: 816px) {
    .img-left{
        width:290px;
        height: 220px;
    }
    .img-right{
        width:290px;
        height: 220px;
    }
}
@media only screen and (max-width: 668px) {
    .img-left{
        display: none;
    }
    .img-right:hover{
        transform: none;
    }
    .img-right{
        width: 400px;
        height: 300px;
    }
}
</style>