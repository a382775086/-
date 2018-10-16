<template>
<div class="content">
<div class="body">
	<div class="left-content">
		<div class="touxiang"><img src="../assets/t4.jpg"/>
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
		    	<i class="el-icon-star-off" @click="collect">收藏</i>
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
		return {zhao:x[3]}
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
.content{width:auto;background:	#F4A460;}
.body{width:1200px;height:1000px;margin:0 auto;}
.left-content{float:left;width:550px;height:800px;}
.right-content{float:left;width:630px;height:800px;padding-left:20px;padding-top:80px;}
.touxiang{width:300px;height:300px;}
.touxiang img{width:100%;border-radius: 100%;}
.left-content h2{text-indent: 70px;letter-spacing: 8px;width:280px;margin-left:70px;}
.left-content p{width:90%;text-indent:40px;font-family:SimSun;line-height: 170%;}
.right-content ul{list-style: none;margin-top:120px;}
.right-content li{width:700px;height:60px;line-height: 60px;font-size:1.1em;margin-top:10px;}
.right-content li:nth-child(odd) {background:#CDAA7D}
.right-content li i{float:right;margin-right:50px;line-height:60px;}
.right-content li a i{letter-spacing: 10px;font-family:Simhei;}
.right-content li a:hover{color:#fff;}
.right-content i{cursor:pointer;}
.el-icon-star-on{color:gold;}
</style>