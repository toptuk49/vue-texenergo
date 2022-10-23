<template>
    <div class="v-all-categories">
        <div class="v-all-categories-container">
            <div class="v-all-categories-header">Все категории</div>
            <div class="v-all-categories-grid">
                <v-category
                    v-for="category in all_categories"
                    :key="category.id"
                    :category="category"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import vCategory from './v-category'

    export default {
        name: 'v-all-categories',
        components: {
            vCategory
        },
        computed: {
            ...mapState([
                'categories'
            ]),
            all_categories() {
                return this.categories.filter(category => category.type === 'all')
            }
        },
        methods: {
            ...mapActions([
                'FETCH_CATEGORIES'
            ])
        },
        mounted() {
            this.FETCH_CATEGORIES()
        }
    }
</script>

<style lang="scss" scoped>

</style>