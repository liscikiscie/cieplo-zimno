<template>
    <div class="contactUs-container">
        <div class="info companyName">
            {{companyName}}
        </div>
        <div class="info series">
            {{series}}
        </div>
        <div class="info email">
            {{email}}
        </div>
        <div class="info invitation">
            {{invitation}}
        </div>
    </div>
</template>

<script>

    let ContactUs = {
        name: 'ContactUs',
        props: [ 'companyName', 'series', 'email', 'invitation' ],
        data() {
            return {}
        }
    };

    export default ContactUs
</script>

<style scoped lang="scss">
    .contactUs-container {
        width: 100%;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .info {
            text-indent: 25px;
            text-align: justify;
            padding-top: 30px;
        }
    }

</style>
