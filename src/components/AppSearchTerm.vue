<script>
export default {
    data() {
        return {
            searchTerm: '',
        }
    },
    props: {
        placeholder: String,
        submitLabel: String,
    },
    emits: ['term-change', 'form-submit']
};
</script>

<template>
    <form @submit.prevent="$emit('form-submit')" class="input-group-sm mb-3 d-flex pe-3">
        <input
         v-model.trim="searchTerm" type="text" :placeholder="placeholder || 'Cerca film e serie tv'"
         class="form-control pe-5"
         @keyup="$emit('term-change', searchTerm)">
        <button class="btn btn-danger rounded-end" type="submit">{{ submitLabel || 'Cerca' }}</button>
    </form>
</template>

<style lang="scss" scoped>

</style>