<template>
    <div class="v-sub">
        <div class="v-sub-container">
            <div class="v-sub-container-header">Подпишитесь, чтобы первыми узнавать <br class="media-header-br">о наших
                новинках и акциях!</div>
            <div class="v-sub-container-description">Рассылка проводится не чаще 1 раза в неделю</div>
            <div class="main-v-sub-container">
                <input type="text" placeholder="Имя" class="v-sub-input" id="name-input">
                <input type="email" placeholder="Адрес электронной почты" class="v-sub-input" id="email-input">
                <div class="mailing-container">
                    <input type="checkbox" class="mailing-input" id="mailing" disabled>
                    <label for="mailing" class="mailing-label"></label>
                    <div class="mailing-text">Нажимая эту кнопку вы даёте согласие <br class="media-br">на <a href="#"
                            class="mailing-link">обработку своих персональных данных</a></div>
                </div>
                <button class="mailing-button">Подписаться на рассылку</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-v-sub'
    }
</script>

<style lang="scss" scoped>

</style>