<script>
import { store } from '../data/store';
import AppCard from './AppCard.vue';
export default {
components: {AppCard},
data() {
    return{
        store,
    }
}
};
</script>

<template>
    <main class="p-5">
        <AppCard />
    </main>
</template>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
@import '../assets/scss/_vars.scss';

</style>