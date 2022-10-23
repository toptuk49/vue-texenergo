<template>
    <div class="v-brands-filter">
        <a href="#keyboard"
            class="filter-button"
            id="brands"
            :class="visible"
            @click="toggleFilter"
        >
            <div class="brands-icon">
                <div class="brands-icon-line"></div>
                <div class="brands-icon-line"></div>
                <div class="brands-icon-line"></div>
            </div>
            <div class="line"></div>
            <div class="filter-button-text">Бренды</div>
        </a>
        <div class="brands-sort-container">
            <div class="line"></div>
            <div class="brands-sort"></div>
            <div class="sort-clean-button">Очистить фильтр</div>
        </div>
        <div class="keyboard-container" id="keyboard" v-if="!this.hidden">
            <div class="rus-keyboard">
                <div class="keyboard-header">Рус</div>
                <ul class="key-list">
                    <v-key
                        v-for="key in rus"
                        :key="key.id"
                        :key_data="key"
                        :id="key.id"
                        @click="selectKey(key.letter)"
                    />
                </ul>
            </div>
            <div class="en-keyboard">
                <div class="keyboard-header">Eng</div>
                <ul class="key-list">
                    <v-key
                        v-for="key in en"
                        :key="key.id"
                        :key_data="key"
                        :id="key.id"
                        @click="selectKey(key.letter)"
                    />
                </ul>
            </div>
            <div class="after-keyboard-container">
                <div class="apply-button">Отобрать</div>
                <div class="clean-button" @click="removeFilter">Очистить фильтр</div>
            </div>
        </div>
    </div>
</template>

<script>
    import vKey from './v-key'
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'v-brands-filter',
        components: {
            vKey
        },
        data() {
            return {
                hidden: true,
                keys_selected: ''
            }
        },
        computed: {
            visible() {
                return {
                    selected: !this.hidden
                }
            },
            ...mapState([
                'keyboards'
            ]),
            rus() {
                return this.keyboards.rus
            },
            en() {
                return this.keyboards.en
            }
        },
        methods: {
            ...mapActions([
                'FETCH_KEYBOARDS'
            ]),
            toggleFilter() {
                this.hidden = !this.hidden ? true : false,
                this.categoriesFilterHidden = true
                this.$emit('toggleFilters', {
                    hidden: this.hidden,
                    categoriesFilterHidden: this.categoriesFilterHidden
                })
            },
            selectKey(letter) {
                this.keys_selected += letter
                this.$emit('keysSelected', this.keys_selected)
            },
            removeFilter() {
                this.keys_selected = ''
                this.$emit('keysSelected', this.keys_selected)
            }
        },
        mounted() {
            this.FETCH_KEYBOARDS()
        }
    }
</script>

<style lang="scss" scoped>

</style>