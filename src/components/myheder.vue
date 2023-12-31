<script setop></script>
<template>
    <header>
        <div id="my-heder">
            <div class="hed1">
                <div class="box-left">
                    <div class="p-s123">
                        <div class="p1"><h2>Galaxies</h2></div>
                        <div class="p2"><p>Nasa exploration of the galaxy</p></div>
                        <div class="p3"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div>
                    </div>
                </div>
                <div class="box-right">
                    <div class="serch-box">
                        <form action="">
                            <div class="box-sch">
                                <button type="submit">
                                    <img src="@/assets/search.png" alt="">
                                </button>
                                <input type="search">
                            </div>    
                        </form>
                    </div>
                    <div class="logo">
                        <img src="@/assets/NASA.png" alt="">
                    </div>
                </div>
            </div>
            <div class="hed2">
                <ul class="list-hed">
                    <li class="sub-list"><RouterLink to="/">صفحه اصلی</RouterLink></li>
                    <li class="sub-list"><RouterLink to="about">صفحه درباره ما</RouterLink></li>
                    <li class="sub-list"><RouterLink to="call">تماس باما</RouterLink></li>
                </ul>
            </div>
        </div>
    </header>
</template>
<style scoped>
#my-heder{
    background-color: black;
    width:100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    font-family: sanas;
}
.hed1{
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-between;
}
.box-right{
    height: 100%;
    display: flex;
    justify-content: end;
    flex-wrap: wrap-reverse;
}
.box-left{
    padding: 10px 20px 0px 10px;
    width: 300px;
    height: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.p1 h2{
    margin: 1px;
    padding-left: 2px;
    color: red;
}
.p2 p{
    margin: 0px;
    padding-left: 2px;
    margin-bottom: 0px;
}
.p3 p{
    margin-top: 0px;
    padding-left: 2px;
}
.p-s123{
    color: #f8f0e5;
}
.logo img{
    width: 125px;
    height: 120px;
}
.serch-box{
    height: 30px;
    display: flex;
    align-items: end;
    justify-content: end;
}
.serch-box input{
    border: none;
    border-radius: 10px;
    width: 170px;
    height: 25px;
    background-color:  #f8f0e5;
    font-family: sanas;
}
.serch-box button{
    width: 35px;
    height: 25px;
    border-radius: 10px;
    border: none;
    background-color: tomato;
    margin-right: 2px;
}
.box-sch{
    padding: 0px 4px 6px 0px;
    display: flex;
}
.box-sch img{
    width: 100%;
    height: 100%;
}
.name-sayt{
    background-color: darkolivegreen;
    width: 100px;
    height: 100px;
}
.hed2{
    background-color: rgb(40, 0, 0);
    width: 100%;
}
.list-hed{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    direction: rtl;
    padding-right: 20px;
    line-height: 25%;
    gap: 25px;
}
.list-hed li{
    margin-right: 25px;
}
a:hover{
    border-bottom: 5px solid tomato;
    transition: all 0.1s ease-in-out;
}
.list-hed a{
    text-decoration: none;
    color:  #f8f0e5;;
}
</style>