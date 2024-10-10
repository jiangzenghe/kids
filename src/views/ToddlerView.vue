<template>
	<Layout>
		<!--<div class="product-background"></div>-->
		<div style="background-color:#FAA842" class="header-top-margin"></div>

		<div class="layout-container" style="width: 100%">
			<div class="toddler-page">
				<div class="container" style="text-align: center">
					<h2></h2>
					<p></p>
				</div>
			</div>
		</div>
		
		<div class="section">
			<div class="container" style="max-width: 1160px">
				<!-- 第一个布局：左边文字右边图片 -->
				<div class="layout">
					<div class="text-content">
						<h2>Classroom</h2>
						<p>
						
						</p>
						<p>
						In the classroom, students can explore dramatic play, storytelling, visual arts, puzzles, math manipulatives, toys, and games at their own pace. Balanced with time for music, cultural education, outdoor play, nap, meals, and snacks, preschoolers practice a daily routine that builds confidence before kindergarten.
						</p>
					</div>
					<div class="image-content">
						<img src="../assets/images/toddler_1.jpg" alt="Classroom Image">
					</div>
				</div>

				<!-- 第二个布局：左边图片右边文字 -->
				<div class="layout">
					<div class="image-content">
						<img src="../assets/images/toddler_2.jpg" alt="Preschool Activities Image">
					</div>
					<div class="text-content">
						<h2>Toddler Activities</h2>
						<p>
						Students engage in a variety of activities designed to foster creativity and critical thinking. From painting and drawing to building with blocks, preschoolers are encouraged to explore and express themselves through hands-on learning.
						</p>
						<p>
						Teachers provide guidance while allowing children the freedom to discover new concepts at their own pace. These activities not only develop fine motor skills but also lay the foundation for academic success and social-emotional growth.
						</p>
					</div>
				</div>

				<div class="layout">
					<div class="text-content">
						<h2> Curriculum</h2>
						<p>
						Toddlers use their newfound independence, language, and latent curiosity to play, build, and respond to their world. RRDC preschool classrooms challenge children with more complex materials as students work to recognize patterns, accomplish tasks, and care for their environment.
						</p>
						<p>
						
						</p>
					</div>
					<div class="image-content">
						<img src="../assets/images/toddler_3.jpg" alt="Curriculum Image">
					</div>
				</div>
			</div>
		</div>
		
	</Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
export default {
	name: "ProductView",
	components: {Layout},
	data(){
		return{
			tabList:[],
			list:[],
			tabIndex: 0,
			goodsList:[],
		}
	},
	mounted() {
		this.getTabList()
		this.getGoodsList(1)
	},
	methods:{
		getTabList(){
			this.getRequest("/findAllType").then(resp =>{
				if (resp){
					this.tabList = resp.data.data
					//console.log(resp.data.data)
				}
			})
		},
		changeTab(index,typeId){
			this.tabIndex = index
			console.log(typeId)
			this.getGoodsList(typeId)
		},
		getGoodsList(typeId){
			this.getRequest(`/findTypeDetailsByTypeId/${typeId}`).then(resp =>{
				if (resp){
					this.goodsList = resp.data.data
					//console.log(resp.data.data)
				}
			})
		},
		handleDetails(productId){
			this.$router.push({path:`/product/productId/${productId}`})
		}
	}
}
</script>

<style scoped>

</style>
