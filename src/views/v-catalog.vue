<template>
    <div class="v-catalog">
        <div class="v-catalog-header-container">
            <div class="v-catalog-header-root-container">
                <div class="v-catalog-header-root-item">Главная</div>
                <div class="dash"></div>
                <div class="v-catalog-header-root-item">Каталог</div>
            </div>
            <div class="v-catalog-header">Каталог электротехнической продукции</div>
        </div>
        <a href="#" class="v-catalog-banner-container" id="banner" v-if="!bannerHidden">
            <div class="v-catalog-banner-img-container">
                <picture class="v-catalog-banner-picture">
                    <source srcset="@/assets/images/main-banner.webp" type="image/webp" class="v-catalog-banner-webp">
                    <img src="@/assets/images/main-banner.jpg" alt="" class="v-catalog-banner-img" width="100" height="100"
                        style="width: 100%; height: 100%;">
                </picture>
                <div class="close-icon" id="close" @click="bannerHidden = true">
                    <div class="close-icon-line"></div>
                    <div class="close-icon-line"></div>
                </div>
            </div>
        </a>
        <div class="filter-button-container">
            <v-brands-filter 
                @toggleFilters="toggleFilters"
                @keysSelected="filterKeys"
            />
            <div class="group-and-category-buttons" v-if="this.brandsFilterHidden">
                <a href="#popular"
                    class="filter-button"
                    id="group"
                    :class="groupSelected"
                    @click="
                        this.brandsFilterHidden = true,
                        this.categoriesFilterHidden = true
                    "
                >
                    <div class="group-icon">
                        <div class="group-icon-grid">
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                            <div class="group-icon-grid-item"></div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="filter-button-text">По группам</div>
                </a>
                <a href="#left"
                    class="filter-button"
                    id="category"
                    @click="this.categoriesFilterHidden = !this.categoriesFilterHidden ? true : false"
                    :class="categoriesVisible"   
                >
                    <div class="category-icon">
                        <div class="category-icon-line"></div>
                        <div class="category-icon-line"></div>
                        <div class="category-icon-line"></div>
                    </div>
                    <div class="line"></div>
                    <div class="filter-button-text">По категориям</div>
                </a>
            </div>
        </div>
        <ul class="brands-list-container" v-if="!brandsFilterHidden">
            <v-brand 
                v-for="brand in filteredBrands"
                :key="brand.id"
                :brand="brand"
            />
        </ul>
    </div>
    <v-categories-filter
        v-if="!categoriesFilterHidden"
    />
    <v-popular-categories />
    <v-all-categories />
    <v-sub />
</template>

<script>
import vBrandsFilter from '../components/filters/brands/v-brands-filter'
import vBrand from '../components/filters/brands/v-brand'
import vCategoriesFilter from '../components/filters/categories/v-categories-filter'
import vPopularCategories from '../components/categories/v-popular-categories'
import vAllCategories from '../components/categories/v-all-categories'
import vSub from '../components/v-sub'

import {mapActions, mapState} from 'vuex'

export default {
    name: 'v-catalog',
    components: {
        vBrandsFilter,
        vBrand,
        vCategoriesFilter,
        vPopularCategories,
        vAllCategories,
        vSub
    },
    data() {
        return {
            bannerHidden: false,
            brandsFilterHidden: true,
            categoriesFilterHidden: true,
            checked: [],
            keys: ''
        }
    },
    computed: {
        groupSelected() {
            return {
                selected: this.categoriesFilterHidden && this.brandsFilterHidden
            }
        },
        categoriesVisible() {
            return {
                selected: !this.categoriesFilterHidden
            }
        },
        ...mapState([
            'brands'
        ]),
        filteredBrands() {
            return this.brands.filter(brand => {
                return brand.name.indexOf(this.keys) !== -1
            })
        }
    },
    methods: {
        toggleFilters(params) {
            this.brandsFilterHidden = params.hidden
            this.categoriesFilterHidden = params.categoriesFilterHidden
        },
        ...mapActions([
            'FETCH_BRANDS'
        ]),
        filterKeys(keys) {
            this.keys = keys
        }
    },
    mounted() {
        this.FETCH_BRANDS()
    }
}
</script>

<style lang="scss" scoped>

</style>