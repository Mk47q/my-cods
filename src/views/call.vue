<script setup></script>
<template>
    <main>
        <div id="my-main">
            <div class="box-call">
                <div class="sub-call-form">
                    <div class="my-form">
                        <form action="">
                            <div class="sub-form">
                                <label for="name">نام و نام خانوادگی:</label>
                                <input type="text" id="name">
                            </div>
                            <div class="sub-form">
                                <label for="email">ایمیل:</label>
                                <input type="email" id="email">
                            </div>
                            <div class="sub-form">
                                <label for="tel">شماره تلفن:</label>
                                <input type="tel" name="" id="tel">
                            </div>
                            <div class="sub-form">
                                <label for="area">متن پیام:</label>
                                <textarea cols="20" rows="5" id="area"></textarea>
                            </div>
                            <div class="buton-form">
                                <button type="submit">ارسال پیام</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="sub-call-about" dir="rtl">
                    <div class="sub-about">
                        <h3>ادرس</h3>
                        <p>مشهد بعد از کوهسنگی نرسیده به پیچ تلگرد میدون عسگری نواب اصفهانی</p>
                    </div>
                    <div class="sub-about">
                        <h3>تلفن</h3>
                        <p>05-432905</p>
                    </div>
                    <div class="sub-about">
                        <h3>ایمیل</h3>
                        <p>amojoneydi@gmail.com</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="igg"></div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
    #my-main{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(15, 15, 15);
    }
    .box-call{
        margin: 10px 0px 20px 0px;
        background-color: chocolate;
        width: 950px;
        height: 600px;
        display: flex;
        background-image: url(../assets/say2.jpeg);
        background-size: cover;
        border-radius: 20px;
    }
    .sub-call-form{
        border-right:1px solid black ;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        direction: rtl;
        color: #f8f0e5;
    }
    .my-form{
        width: 90%;
        height: 470px;
    }
    .sub-form label , input , textarea , button{
        display: block;
        font-family: sanas;
    }
    .sub-form input , textarea{
        display: flex;
        width: 97%;
        height: 35px;
        border: none;
        border-radius: 10px;
        margin-top: 10px;
        background-color: rgb(80, 0, 0);
        color: white;
    }
    .buton-form button{
        background-color: rgb(167, 25, 0);
        border: none;
        width: 80%;
        height: 35px;
        border-radius: 10px;
        margin: auto;
        color: #f8f0e5;
    }
    .buton-form{
        margin-top: 60px;
    }
    .sub-form{
        margin-top: 10px;
        padding: 10px;
    }
    .sub-call-about{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column; 
        justify-content: space-around;
    }
    .sub-about{
        box-sizing: border-box;
        padding: 10px;
        height: 100px;
    }
    .sub-about p , h3{
        margin: 0px;
        margin-top: 5px;
        font-family: sanas;
        color: #f8f0e5;
    }
</style>