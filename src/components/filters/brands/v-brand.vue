<template>
	<li class="v-brand">
		<div class="v-brand-container">
			<input
				type="checkbox"
				class="v-brand-checkbox"
				:id="`brands_${this.brand.id}`"
				v-model="checked"
				:change="check"
			/>
			<label :for="`brands_${this.brand.id}`" class="v-brand-label">
				<span class="v-brand-item">{{ brand.name }}</span>
				<span class="v-brand-count">{{ [ brand.count ] }}</span>
			</label>
		</div>
	</li>
</template>

<script>
	export default {
		name: "v-brand",
		data() {
			return {
				checked: false
			}
		},
		props: {
			brand: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			check() {
				this.$emit('check', {
					id: this.brand.id,
					checked: this.checked
				})
			}
		}
	};
</script>

<style lang="sass" scoped></style>
