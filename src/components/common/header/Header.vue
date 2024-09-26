<template>
	<div class="header-wrapper" >
		<div class="header">
			<div class="header-left">
				<img src="../../../assets/images/logop.png" alt="">
			</div>
		</div>
		
		<div class="nav-wrapper header-default">
			
			<div class="nav">
				<ul class="am-nav am-nav-pills am-nav-justify">
					<li><router-link class="router" to="/index">Home</router-link></li>
					<li><router-link class="router" to="/toddler">Toddler</router-link></li>
					<li><router-link class="router" to="/preschool">Preschool</router-link></li>
					<li><router-link class="router" to="/faculty">Faculty</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
// import AppFunctions from "@/utils/AppFunctions";
export default {
	name: "Header",
	components: {},
	data(){
		return{
			AppFunctions,
			
		}
	},
	methods: {
		toggleStickyHeader() {
			// const scrolled = document.documentElement.scrollTop;
			// if (scrolled > 100) {
			// 	AppFunctions.addClass('.header-default', 'sticky');
			// } else if (scrolled <= 100) {
			// 	AppFunctions.removeClass('.header-default', 'sticky');
			// }
		},
	},
	created() {
		// window.addEventListener('scroll', this.toggleStickyHeader);
	},
	mounted() {
		// this.toggleStickyHeader();
	},
	beforeDestroy() {
		// window.removeEventListener('scroll', this.toggleStickyHeader);
	}
	
}
</script>

<style scoped>
.router.router-link-active{
	/*color: #fff;*/
	/*background-color: #0e90d2;*/
	/*border: 1px solid #0e90d2;*/
	cursor: default;
	
	color: #0e90d2;
}

</style>
