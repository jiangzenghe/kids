<template>
	<Layout>
		<!-- <div  style="width: 100%">
			<div class="index-page">
				<div data-am-widget="tabs" class="am-tabs am-tabs-default">
					<div class="am-tabs-bd">
						<div
							class="am-tab-panel am-active"
							v-if="slideshow.length > 0"
							:style="{ backgroundImage: `url(${slideshow[tabIndex].imageUrl})`}">
							<div class="index-banner">
								<div class="index-mask">
									<div class="container">
										<div class="am-g">
											<div class="am-u-md-10 am-u-sm-centered" style="text-align: center">
												<h1 class="slide_simple--title">企业移动化，首选云适配</h1>
												<p class="slide_simple--text am-text-left" style="display: flex;justify-content: center">
													全球领先的HTML5企业移动化解决方案供应商，安全高效的帮助您的企业移动化。云适配企业浏览器Enterploer,让企业安全迈进移动办公时代！
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<ul class="am-tabs-nav am-cf index-tab">
						<li v-for="(tab,index) in tabList" :key="index" :class="tabIndex === index ? 'am-active':''" >
							<a href="#" @click.prevent="changeTab(index)">
								<div class="am-u-md-3 am-u-sm-3 am-padding-right-0">
									<i :class="tab.icon"></i>
								</div>
								<div class="school-item-right am-u-md-9 am-u-sm-9 am-text-left">
									<strong class="promo_slider_nav--item_title">{{tab.name}}</strong>
									<p class="promo_slider_nav--item_description">{{tab.desc}}</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div> -->
		<!-- <div class="layout-container" style="width: 100%"> -->
			<div class="index-page" style="width: 100%;">
				<div class="index-banner">
					<h2>Peninsula Montessori Academy</h2>
					<!-- <h2>Kids Are The Best</h2> -->
					<p>The goal of Peninsula Montessori Academy is to provide a nurturing and inspiring learning environment that encourages children to explore freely and at their own pace.</p>
				</div>
			</div>
		<!-- </div> -->
		
		<div class="index-1">
			<div class="container" style="max-width: 1160px;">
				<div class="index-1--header">
					<!-- <h2 class="index-1--title">Peninsula Montessori Academy</h2> -->
					<p class="index-1--description">
							<!-- The goal of Peninsula Montessori Academy is to provide a nurturing and inspiring learning environment that encourages children to explore freely and at their own pace. -->
						<!-- Dr. Montessori learned that when children are really interested, they have atremendous capacity to concentrate and engage -->
					</p>
				</div>
				
				<div class="index-container">
					<div class="am-g">
						<div class="am-u-md-3" v-for="(advantage,index) in advantageList" :key="index">
							<div class="features_item">
								<img :src="advantage.cover" alt="">
								<h3 class="features_item--title">{{advantage.title}}</h3>
								<p class="features_item--text">{{advantage.desc}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="title-section">
			<h1>Why Choose Us</h1>
		</div>
				
		<div class="card-container">
			<div class="card" v-for="(card, index) in cards" :key="index" :style="{ backgroundColor: card.color }">
				<div class="icon-container">
					<!-- 确保icon-background有白色背景 -->
					<div class="icon-background">
						<img :src="card.icon" alt="icon" class="icon" />
					</div>
				</div>
				<h2>{{ card.title }}</h2>
				<p>{{ card.desc }}</p>
			</div>
		</div>

		<div class="title-section">
      		<h1><span>Activities</span></h1>
      	</div>

		<div class="image-gallery">
			<div class="gallery-container">
				<div class="gallery-item" v-for="(image, index) in activityList" :key="index">
					<img :src="image.src" :alt="'Image ' + (index + 1)" />
				</div>
			</div>
		</div>
		<!-- <div class="section" style="border-bottom: 1px solid #e9e9e9; padding-top: 0">
			<div class="container" style="max-width: 1160px;">
				<div class="section--header">
					<h2 class="section--title">Activities</h2>
				</div>
				

			</div>
		</div> -->

		<div class="teacher-list-container">
			<!-- 标题部分 -->
			<div class="title-section">
				<h1><span>Certified</span> Teachers</h1>
				<p>Our team members are developmental specialist for the age they teach. All head teachers hold an A.M.I teaching credential.</p>
			</div>

			<!-- 教师卡片列表 -->
			<div class="teacher-cards">
				<div class="teacher-card" v-for="(teacher, index) in teachers" :key="index">
					<img :src="teacher.photo" alt="teacher photo" class="teacher-photo" />
					<h3>{{ teacher.name }}</h3>
					<h4>{{ teacher.position }}</h4>
					<p>{{ teacher.description }}</p>
					<!-- 社交媒体图标 -->
					<div v-if="teacher.socials" class="social-icons">
						<a v-for="(icon, index) in teacher.socials" :key="index" :href="icon.link" target="_blank">
							<i :class="icon.iconClass"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
export default {
	name: "IndexView",
	components: {Layout},
	data(){
		return{
			cards:[
				{title:'Certified Teachers', color:'#4aace2', desc:'All head teachers hold an A.M.I teaching credential', 
					icon:require('../assets/images/index/teacher.png')},
				{title:'Creative Lessons', color:'#8cc63f', desc:'Provide a nurturing and inspiring learning environment', 
					icon:require('../assets/images/index/education.png')},
				{title:'Follow Child', color:'#624fa9', desc:'Mixed Age Grouping, Three Year Circles, Learning through Life Experiences', 
					icon:require('../assets/images/index/playing.png')},
			],
			tabIndex: 0,
			slideshow:[],
			teachers: [
				{
				name: 'Bianca Wilson',
				position: 'TEACHER',
				photo: require('../assets/images/teacher-1.jpg'),
				description: 'I am an ambitious workaholic, but apart from that, pretty simple'
				},
				{
				name: 'Mitch Parker',
				position: 'ENGLISH TEACHER',
				photo: require('../assets/images/teacher-2.jpg'),
				description: 'I am an ambitious workaholic, but apart from that, pretty simple',
				socials: [
					{ link: '#', iconClass: 'fab fa-twitter' },
					{ link: '#', iconClass: 'fab fa-facebook' },
					{ link: '#', iconClass: 'fab fa-google' },
					{ link: '#', iconClass: 'fab fa-instagram' }
				]
				},
				{
				name: 'Stella Smith',
				position: 'ART TEACHER',
				photo: require('../assets/images/teacher-3.jpg'),
				description: 'I am an ambitious workaholic, but apart from that, pretty simple'
				},
				{
				name: 'Monshe Henderson',
				position: 'SCIENCE TEACHER',
				photo: require('../assets/images/teacher-4.jpg'),
				description: 'I am an ambitious workaholic, but apart from that, pretty simple'
				}
			],
			
			activityList:[
				{ src: require('../assets/images/index/act-1.jpg') },
				{ src: require('../assets/images/index/act-2.jpg') },
				{ src: require('../assets/images/index/act-3.jpg') },
				{ src: require('../assets/images/index/act-4.jpg') },
			]
		}
	},
	mounted() {
		this.getSlideshow()
	},
	methods:{
		changeTab(index){
			this.tabIndex = index
		},
		getSlideshow(){
			this.getRequest("/findAllSlideshow").then(resp =>{
				if (resp){
					this.slideshow = resp.data.data
					//console.log(this.slideshow)
				}
			})
		}
	},
}
</script>

<style scoped>

</style>
