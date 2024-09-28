<template>
	<Layout>
		<div style="background-color:#FAA842" class="header-top-margin"></div>
		<div class="layout-container" style="width: 100%">
			<div class="page-header">
				<div class="am-container">
					<h1 class="page-header-title">Faculty</h1>
				</div>
			</div>
		
		</div>
		
		<div class="section">
			<div class="container" style="max-width: 1160px">
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
			</div>
		</div>
		
	</Layout>
</template>

<script>
import Layout from "@/components/common/Layout";
export default {
	name: "NewsView",
	components: {Layout},
	data(){
		return{
			articles: {},
			pageIndex: 1,
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
			]
		}
	},
	mounted() {
		this.getArticle(1)
	},
	methods:{
		getArticle(pageIndex){
			this.getRequest(`/findArticles/${pageIndex}`).then(resp =>{
				if (resp){
					this.articles = resp.data.data
					console.log(this.articles)
					
				}
			})
		},
		changeIndex(p){
			if (p === 0){
				this.pageIndex = 1
			}else if (p === this.articles.pages + 1){
				this.pageIndex = this.articles.pages
			}else{
				this.pageIndex = p;
				this.getArticle(p)
			}
		}
	}
}
</script>

<style scoped>

</style>
