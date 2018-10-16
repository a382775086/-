<template>
<div class="content">
<div class="body">
	<div class="left-content">
		<div class="touxiang"><img src="../assets/t2.jpg"/>
		</div>
		<h2>{{zhao.name}}</h2>
	    <p>{{zhao.introduce}}</p>
	</div>
	<div class="right-content">
		<h3>Ta的精选歌曲</h3>
		<ul>
		    <li v-for="x in zhao.songs">
		    	<span>{{x.name}}</span>	
		    	<i class="el-icon-plus" @click="addCollect">加入播放列表</i>
		    	<i class="el-icon-star-off" @click="collect" >收藏</i>
		    	<router-link :to='{name:"player",params:{id:x.name,meg:x.songMeg}}'><i class="el-icon-caret-right"  @click="sendMsg">播放</i>
		    	</router-link>		    	
		    </li>
	    </ul>
	</div>
</div>
</div>
</template>
<script>
import {x} from "../../static/data.js"
export default {
	data(){
		return {zhao:x[1]}
	},
	methods:{
		sendMsg(e){
			var xx=e.target.parentNode.parentNode.children[0].innerText;
		  this.$emit("reciveMsg",xx)
		},
		collect(e){if (e.target.className=="el-icon-star-off"){
			e.target.className="el-icon-star-on";
             e.target.innerText="已收藏"  
		}

			else {e.target.className="el-icon-star-off";
			e.target.innerText="收藏" }
		},
		addCollect(e){
			var xx=e.target.parentNode.children[0].innerText;
			this.$emit("reciveMsg2",xx)
		}
		}
	}
</script>
<style scoped>
.content{width:auto;background:#96CDCD;}
.body{width:1200px;height:1300px;margin:0 auto;}
.left-content{width:100%;height:270px;}
.right-content{float:left;width:auto;height:800px;padding-left:20px;padding-top:80px;}
.touxiang{width:300px;height:300px;float:left;margin-right:100px;}
.touxiang img{width:100%;border-radius: 100%;}
.left-content h2{text-indent: 70px;letter-spacing: 8px;width:200px;margin-left:100px;float:left;}
.left-content p{width:600px;text-indent:40px;font-family:SimSun;line-height: 170%;float:left;}
.right-content ul{list-style: none;}
.right-content li{width:525px;height:40px;line-height: 40px;float:left;margin:50px 40px 0 0;padding-left:20px;background:#E6E6FA;border-radius: 15px;transition: all 0.7s;-webkit-transition: all 0.5s;}
.right-content li:hover{background:	#668B8B;}
.right-content li i{float:right;margin-right:50px;line-height:40px;}
.right-content li a i{letter-spacing: 10px;font-family:Simhei;}
.right-content li a:hover,.right-content i:hover{color:#F0F8FF;}
.right-content i{cursor:pointer;}

.el-icon-star-on{color:#8B6914}
</style>