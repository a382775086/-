<template>
<div class="content">
<div class="body">
	<div class="left-content">

		<div class="touxiang"><img src="../assets/other.jpg"/></div>
	    <p>{{zhao.introduce}}</p>
	</div>
	<div class="right-content">
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
		return {zhao:x[5]}
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
.content{width:auto;background:#CDB7B5;padding-bottom:100px;}
.body{width:auto;height:1300px;margin:0 auto;}
.left-content{width:100%;height:500px;background: #1C1C1C}
.right-content{float:left;width:auto;height:auto;padding-left:20px;padding-top:80px;}
.touxiang{width:1100px;height:500px;margin:0 auto;}
.touxiang img{width:100%;}
.left-content p{width:auto;text-indent:40px;font-family:SimHei;float:left;font-size:2.0em;margin-top:50px;color:#fff;}
.right-content ul{list-style: none;}
.right-content li{width:600px;height:40px;line-height: 40px;float:left;margin:30px 100px 0 0;padding-left:20px;background:#E6E6FA;border-radius: 15px;transition: all 0.7s;-webkit-transition: all 0.5s;}
.right-content li:hover{background:#FF6A6A;}
.right-content li i{float:right;margin-right:50px;line-height:40px;}
.right-content li a i{letter-spacing: 10px;font-family:Simhei;}
.right-content li a:hover,.right-content i:hover{color:#F0F8FF;}
.right-content i{cursor:pointer;}

.el-icon-star-on{color:#8B6914}
</style>