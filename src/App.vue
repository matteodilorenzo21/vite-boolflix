<script>
import axios from 'axios';
import {api} from './data';
import {store} from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppSearchTerm from './components/AppSearchTerm.vue';
export default {
  components: {AppHeader, AppSearchTerm},
};
</script>

<template>
<AppHeader />
</template>

<style lang="scss" scoped>
@import './assets/scss/style.scss';
@import './assets/scss/_vars.scss';


</style>
