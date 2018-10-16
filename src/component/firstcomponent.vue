<template>
  <div class="top-nav">
  	<div class="top-nav-content">
	  	<div class="logo">
	  		<router-link to="/first">甄(Real)音悦</router-link>
	  	</div>
	  	<div class="nav-bar">
	  		<router-link to="/first">发现音乐</router-link>
	  		<router-link to="/first">Wo的最爱</router-link>
	  		<router-link to="/first">歌单</router-link>
	  		<router-link to="/first">音乐台</router-link>
	  		<router-link to="/first">直播</router-link>
	  	</div>
	  	<div class="nav-bar-right">
	  		  <el-input placeholder="搜索歌曲." class="a">
              </el-input>
	  		<router-link to="/first">登录</router-link>
	  		<router-link to="/first">注册</router-link>	  		
	  	</div>
	 </div>
   </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
    
    }
  }
}
</script>

<style scoped>
 a{text-decoration: none;}
 .top-nav{width:100%;height:70px;background: #F08080;font-size:1.2em;}
 .top-nav-content{width:100%;height:70px;margin:0 auto;line-height: 70px;}
 .logo{width:200px;height:70px;font-size:1.4em;float:left;}
 .logo a{color:#fff;}
 .nav-bar{width:auto;height:70px;position:relative;float:left;}
 .nav-bar a{font-size:0.9em;font-weight:bold;font-family: FangSong;margin-left:20px;color:#fff;}
 .nav-bar-right a{font-size:0.9em;font-family: SimHei;margin-right:10px;color:#fff;}
  .nav-bar-right .a{width:200px;height:10px;line-height: 10px;margin-right:50px;}
.nav-bar-right{width:400px;height:70px;float:right;}
</style>
