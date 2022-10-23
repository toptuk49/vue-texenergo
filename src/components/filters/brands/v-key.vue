<template>
    <li class="v-key">
        {{ key_data.letter }}
    </li>
</template>

<script>
    export default {
        name: 'v-key',
        props: {
            key_data: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>