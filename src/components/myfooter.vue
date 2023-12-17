<script setup>

</script>
<template>
    <footer>
        <div id="my-foter">
            <div class="foters">
                <div class="foter-top">
                    <div class="box-foter1 , box-foters">
                        <h3>دسترسی سریع</h3>
                        <ul class="lists">
                            <li><RouterLink to="/">صفحه اصلی</RouterLink></li>
                            <li><RouterLink to="about">صفحه درباره ما</RouterLink></li>
                            <li><RouterLink to="call">تماس با ما</RouterLink></li>
                        </ul>
                    </div>
                    <div class="box-foter2 , box-foters">
                        <h3>وب سایت</h3>
                        <ul class="lists">
                            <li><RouterLink to="">درباره شرکت</RouterLink></li>
                            <li><RouterLink to="">سوالات متداول</RouterLink></li>
                        </ul>
                    </div>
                    <div class="box-foter3 , box-foters">
                        <h3>پشتیبانی</h3>
                        <ul class="lists">
                            <li><RouterLink to="">اطلاعات تماس</RouterLink></li>
                            <li><RouterLink to="">مرکز اموزش</RouterLink></li>
                            <li><RouterLink to="">تالار مریخ</RouterLink></li>
                        </ul>
                    </div>
                    <div class="box-foter4">
                        <h3>درباره ما</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi odit nam qui repudiandae culpa veritatis et corrupti quisquam!</p>
                    </div>
                </div>
                <div class="foter-butum">
                    <div class="foter-icon">
                        <img src="../assets/twitter.png" alt="">
                        <img src="../assets/facebook.png" alt="">
                        <img src="../assets/google.png" alt="">
                    </div>
                    <div class="foter-logo">
                        <img src="../assets/NASA.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
    #my-foter{
    /* background-color: #242611; */
    background-color: rgb(17, 0, 0);
    width:100%; 
    direction: rtl;
}
.foters{
    width: 100%;
}
.foter-top{
    width: 100%;
    display: flex;
    color: #bbb4ab;
}
.foter-top a{
    text-decoration: none;
    font-family: sanas;
    color: #bbb4ab;
    padding-right: 0px;
}
.foter-top li {
    margin-top: 7px;
}
.foter-top p{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 17px;
}
.foter-top h3{
    margin: 5px 0px 0px 0px ;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #bbb4ab;
}
.box-foters{
    width: 100%;
    border-left: 1px solid rgb(22, 20, 20);
    margin-left: 5px;
}
.box-foter4{
    width: 100%;
    margin-left: 5px;
}
.lists{
    padding-right: 20px;
    color: #bbb4ab;
}
.foter-butum{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgb(40, 0, 0);
}
.foter-logo img{
    width: 40px;
    height: 100%;
}
.foter-icon{
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
.foter-icon img{
    width: 40px;
    height: 100%;
}
@media only screen and (max-width: 410px) {
    .box-foter4{
        display: none;
    }
    .box-foter3{
        border: none;
    }
}
</style>