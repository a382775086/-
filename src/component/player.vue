<template>
<div class="bd">
<div class="content   clearfix">
	<div class="lyric">
		<h2 @click="aa">{{songName}}</h2>
		<div class="lyc" ref="lyc" style="overflow:hidden;height:800px;">
			<a type="text" class="btn" @click="show" ref="btn" style="display:block;">..展开
		    </a>
		    <span >{{lyc}}</span>

	    </div>
	</div>
	<div class="other">
		<div class="pic" ref="z">
			<img :src="pic"/>
		</div>
	</div> 
</div>
</div>
</template>
<script>
import {x} from "../../static/lyc.js"
export default{
	data(){
		return{shuju:x,
			lyc:"",
			songName:"",
			pic:"",
			deg:0,
			round:""
        }
	},
	props:["msg"],
	watch:{
		msg:function(){
			if(this.msg==true)
				{this.aa();}
			else {clearInterval(this.round)}
		}
	},
	methods:{
		aa(){
			this.round=setInterval(()=>{this.deg+=1
				this.$refs.z.style.transform=`rotate(${this.deg}deg)`},60)
		},
		show(){
			this.$refs.lyc.style.overflow="visible";
            this.$refs.btn.style.display="none";
            this.$refs.lyc.style.height="auto"
            console.log(this.$refs.lyc.height)
		}
	},
    activated(){
      this.songName=this.$route.params.id;
      this.songMeg=this.$route.params.meg;
     this.lyc=this.shuju[this.$route.params.id].lyc;
     this.pic=`http://localhost:8080/static/songPic/${this.songMeg}.jpg`
	},
	deactivated(){
       clearInterval(this.round)
       this.$refs.lyc.style.overflow="hidden";
       this.$refs.btn.style.display="block"
       this.$refs.lyc.style.height="800px"
	}
}
</script>
<style scoped>
.bd{width:auto;height:auto;
 background: -webkit-linear-gradient(#FF6A6A, #EEC591); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#FF6A6A, #EEC591); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#FF6A6A, #EEC591); /* Firefox 3.6 - 15 */
    background: linear-gradient(#FF6A6A, #EEC591); }
.content{width:1100px;margin:0 auto;height:auto;}
.lyric{width:700px;height:auto;white-space: pre;float:left;}
.lyric h2{margin:0 auto;width:200px;padding:50px 0;letter-spacing: 10px;}
.lyc {width:600px;margin:auto;position:relative;margin-bottom:50px;}
.lyc span{font-size:0.9em;margin:0 auto;display:block;width:400px;}

.other{width:300px;height:auto;float:left;}
.other .pic{width:300px;height:300px;margin-top:50px;}
.other .pic img{width:100%;height:100%;border-radius: 100%;}
.clearfix:after{display:block;visibility: hidden;clear:both;height:0;content:"";}
.btn{position:absolute;bottom:0px;right:0px;font-size:20px;color:rgb(0,0,204);cursor:pointer;}
</style>