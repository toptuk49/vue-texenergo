<template>
    <div class="v-popular-categories" id="popular">
        <div class="v-popular-categories-container">
            <div class="v-popular-categories-header">Самые популярные категории</div>
            <div class="v-popular-categories-grid">
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
        name: 'v-popular-categories',
        components: {
            vCategory
        },
        computed: {
            ...mapState([
                'categories'
            ]),
            all_categories() {
                return this.categories.filter(category => category.type === 'popular')
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