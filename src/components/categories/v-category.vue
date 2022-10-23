<template>
    <div class="v-category">
        <a href="#" class="v-category-link">
            <div class="main-item-link-container">
                <div class="v-category-img-container">
                    <picture>
                        <source :srcset="webpPath" type="image/webp">
                        <img :src="pngPath" alt="" class="v-category-img">
                    </picture>
                </div>
                <div class="v-category-header">{{ category.name }}</div>
            </div>
            <div class="v-category-description">
                <div class="v-category-description-container">
                    <div class="category-count">{{ category.category_count + '&nbsp;' + categoryCountText }}</div>
                    <div class="line"></div>
                    <div class="product-count">{{ category.product_count + '&nbsp;' + productCountText }}</div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'v-category',
        props: {
            category: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            categoryCountText() {
                let category_count = this.category.category_count
                if (category_count === 1) {
                    return 'категория'
                } else if (category_count === 2 
                    || category_count === 3 
                    || category_count === 4
                ) {
                    return 'категории'
                } else {
                    return 'категорий'
                }
            },
            productCountText() {
                let product_count = this.category.product_count.toString()
                if (product_count.slice(-1) === '1'
                    && Math.floor(Number(product_count) / 10) != 1
                ) {
                    return 'товар'
                } else if (product_count.slice(-1) === '2'
                    || product_count.slice(-1) === '3'
                    || product_count.slice(-1) === '4'
                    && Math.floor(Number(product_count) / 10) != 1
                ) {
                    return 'товара'
                } else {
                    return 'товаров'
                }
            },
            webpPath() {
                return require('@/assets/images/categories' + this.category.id + '.webp')
            },
            pngPath() {
                return require('@/assets/images/categories' + this.category.id + '.png')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>