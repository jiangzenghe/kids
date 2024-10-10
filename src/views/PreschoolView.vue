<template>
	<Layout>
		<div style="background-color:#FAA842" class="header-top-margin"></div>
		<!-- <div class="layout-container" style="width: 100%"> -->
			<div class="preschool-page" style="width: 100%;">
				<div class="container" style="text-align: center">
					<h2></h2>
					<p></p>
				</div>
			</div>
		<!-- </div> -->
		
		<div class="section example">
			<div class="container" style="max-width: 1160px; margin: 0 auto">
				<!-- 第一个布局：左边文字右边图片 -->
				<div class="layout">
					<div class="text-content">
						<h2>Classroom</h2>
						<p>
						Preschoolers use their newfound independence, language, and latent curiosity to play, build, and respond to their world. RRDC preschool classrooms challenge children with more complex materials as students work to recognize patterns, accomplish tasks, and care for their environment.
						</p>
						<p>
						
						</p>
					</div>
					<div class="image-content">
						<img src="../assets/images/pre_4.jpg" alt="Classroom Image">
					</div>
				</div>

				<!-- 第二个布局：左边图片右边文字 -->
				<div class="layout">
					<div class="image-content">
						<img src="../assets/images/pre_2.jpg" alt="Preschool Activities Image">
					</div>
					<div class="text-content">
						<h2>Preschool Activities</h2>
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
						
						</p>
						<p>
						In the classroom, students can explore dramatic play, storytelling, visual arts, puzzles, math manipulatives, toys, and games at their own pace. Balanced with time for music, cultural education, outdoor play, nap, meals, and snacks, preschoolers practice a daily routine that builds confidence before kindergarten.
						</p>
					</div>
					<div class="image-content">
						<img src="../assets/images/pre_3.jpg" alt="Curriculum Image">
					</div>
				</div>
				
				<!-- <div class="example-container">
					<div class="am-tabs">
						<ul class="am-tabs-nav am-nav am-nav-tabs am-g">
							<li class="am-u-md-2"
								v-for="(tab,index) in tabList"
								:key="index"
								@click.prevent="changeTab(index)"
								:class="tabIndex === index ? 'am-active':''">
								<a href="#"><i :class="tab.icon"></i>{{tab.name}}</a>
							</li>
						</ul>
						
						<div class="tabs">
							<div class="tab" v-for="(image,index) in list" :key="index">
								<img :src="image" alt="">
							</div>
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
export default {
	name: "ExampleView",
	components: {Layout},
	data(){
		return{
			tabIndex: 0,
			tabList:[
			],
			list:[],
		}
	},
	mounted() {
		this.findExampleByExampleType(0)
	},
	methods:{
		changeTab(index){
			this.tabIndex = index
			//console.log(index)
			this.findExampleByExampleType(index)
		},
		findExampleByExampleType(exampleType){
			this.getRequest(`/findExampleByExampleType/${exampleType}`).then(resp =>{
				if (resp){
					const temp = resp.data.data
					//console.log(temp)
					const list = [];
					for (let i = 1; i < 17; i++) {
						// 判断是否为空
						if (temp['image'+ i] != null){
							list.push(temp['image'+ i])
						}
					}
					this.list = list
					//console.log(this.list)
				}
			})
		}
	}
}
</script>

<style scoped>

</style>
