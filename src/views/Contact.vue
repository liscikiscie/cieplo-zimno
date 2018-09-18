<template>
    <div class="contact">
        <ContactUs
                v-for="information in informations"
                :key="information.series"
                :companyName="information.companyName"
                :series="information.series"
                :email="information.email"
                :invitation="information.invitation"
        />
    </div>
</template>

<script>
    import ContactUs from '../componets/ContactUs.vue'
    import ContactUsInfo from '../assets/ContactUs';

    let Contact = {
        name: 'Contact',
        components: {
            ContactUs
        },
        data() {
            return {
                informations: ContactUsInfo
            }
        }
    };
    export default Contact;

</script>

<style scoped lang="scss">

</style>
