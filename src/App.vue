<template>
  <div>  
    <xc></xc>
    <keep-alive>
    <router-view @reciveMsg="changeSongSrc" @reciveMsg2="addCollect" :msg="isPlayed"></router-view>
    </keep-alive>
    <div class="bottom-nav">
      <router-link to="/first/other"><ul>
        <p>新歌榜</p>
        <li v-for="x in bangdan[0]" ><span v-text="x"></span></li>
      </ul>
    </router-link>
      <router-link to="/first/other"><ul>
        <p>民谣榜</p>
        <li v-for="x in bangdan[1]" ><span v-text="x"></span></li>
      </ul>
    </router-link>
      <router-link to="/first/other"><ul>
        <p>欧美榜单<p>
        <li v-for="x in bangdan[2]" ><span v-text="x"></span></li>
      </ul>
      </router-link>
      </div>            
    <div class="player" @mouseleave="listShow=false">
      <audio src=""  ref="player" @ended="end" ></audio>
        <div class="anniu btn-prev" @click="prev"></div>
        <div class="anniu btn-play" @click="aa" ref="anniu"></div>
        <div class="anniu btn-next" @click="end"></div>
        <div class="jindutiao">
          <div class="d1" @click="bb">
            <div class="d2" style="width:0px;" ref="d2">
            <div class="circle"></div>
          </div>
          </div>
        </div>
        <div class="time">
          <p>{{cm}}:{{cs}}--{{minite}}:{{second}}</p>
       </div>
       <div class="list" @mouseover="listShow=true">
         <marquee behavior="scroll" direction="right"><span v-text="songName" ></span></marquee>
       </div>
       <transition name="fade">
         <ul class="menu" ref="list" v-show="listShow">
          <p>丨播放列表丨</p>
          <li v-for="(x,y) in songList">
           <span class="n1" ref="shanchu" @click="listPlay" title="点击播放">{{y+1}}. {{x}}</span>
           <span class="n2" @click="shanchu" title="删除"><i class="el-icon-delete" ></i></span>
           <span class="n2"><i class="el-icon-upload"></i></span>
           <span class="n2"><i class="el-icon-star-off" ></i></span>       </li>
         </ul>
        </transition>
    </div>
  </div>
</template>

<script>
import xc from './component/firstcomponent.vue';
import {y} from "../static/data.js"
export default {
  data () {
    return {
      msg: 'Hello Vue!',
      cm:"0",
      cs:"00",
      minite:"0",
      second:"00",
      loop:"",
      clock:"",
      isPlayed:false,
      songName:"",//当前播放歌曲；
      songList:[],
      listShow:false,
      bangdan:y
    }
  },
  components: { xc },
   methods:{
    play:function(){
            //分成100份，每次需要的时间；
      var duration=Math.floor(this.$refs.player.duration)
       this.isPlayed=true;
       this.minite=Math.floor(duration/60);
            this.second=duration%60;
          this.$refs.anniu.style.backgroundImage="url(../static/pause.png)";
           this.clock=setInterval(()=>{
            let x=Math.floor(this.$refs.player.currentTime)
              this.cm=Math.floor(x/60);
              this.cs=x%60;
              if(this.cs<10)
                {this.cs="0"+this.cs};
           },800);
           this.circleMove();
         },        
         circleMove:function(){
          clearInterval(this.loop);
          var duration=Math.floor(this.$refs.player.duration)
                     this.loop=setInterval(()=>{
          var x=Math.floor(this.$refs.player.currentTime);
          this.$refs.d2.style.width=parseInt(Math.round(500*x/duration))+"px"//500isWidth
           },800)
         },
    pause:function(){
          this.$refs.anniu.style.backgroundImage="url(../static/play.png)";
          this.isPlayed=false
            clearInterval(this.loop);
            clearInterval(this.clock);
    },
    aa:function(){
      var myAudio=this.$refs.player
       if(myAudio.paused){
            myAudio.play();
            this.play();
        }else{
            myAudio.pause();
            this.pause();
        }
    },
    bb:function(event){
    this.$refs.player.currentTime=(event.clientX-288)/500*this.$refs.player.duration;
    this.circleMove();
   },
   end:function(){this.$refs.anniu.style.backgroundImage="url(../static/play.png)";
     var index=this.songList.indexOf(this.songName)
       this.isPlayed=false;
       if(this.songList.length!=0)
       {
        if(this.songList.length>index+1)
        {this.changeSongSrc(this.songList[index+1])}
       else {this.changeSongSrc(this.songList[0])}
       }
       else {this.$refs.player.src=""}
     },
   changeSongSrc:function(data){
    var self=this
    if(self.songList.indexOf(data)==-1)
     { self.songList.push(data)}
    this.pause();

    this.$refs.player.src=`../static/${data}.mp3`
    this.$refs.player.load();
    this.songName=data

   var x=document.getElementsByClassName("player")[0];
    x.children[0].oncanplay=function(){ 
    self.play();
    self.fontColorChange();
    self.$refs.player.play();
     }
   },
   fontColorChange:function(){
    var length=this.songList.length;
    var index=this.songList.indexOf(this.songName)+1;
        
        for (let num=0;num<length;num++)
        {this.$refs.list.children[num+1].children[0].style.color="#fff"}   
    this.$refs.list.children[index].children[0].style.color="red"
   },
   shanchu:function(e){                  
         var songName=e.target.parentNode.parentNode.children[0].innerText.slice(3)
          if(this.songName==songName)//当删除当前歌曲时；
            {this.end();}    
         this.songList.splice(this.songList.indexOf(songName),1);
         this.fontColorChange();                  
   },
   addCollect:function(data){
    this.songList.push(data)
   },
   prev:function(){
    var index=this.songList.indexOf(this.songName);
    if (this.songList.length>index&&index!=0)
      {this.changeSongSrc(this.songList[index-1])}
   },
   listPlay:function(e){
         var txt=e.target.innerText.slice(3);
         this.changeSongSrc(txt);
   }
  }//method
 
}


</script>



<style>
*{border:0;margin:0;padding:0;}
body {
  font-size:1.2em;
}
.player{width:100%;height:45px;background:#4d403d;position:fixed;bottom:0px;padding-top: 5px;}
.anniu{width:40px;height:40px;background-size: 100% 100%;float:left;cursor:pointer;margin-left:20px;}
.btn-play{background-image:url(../static/play.png);}
.btn-prev{background-image:url(../static/prev.png);}
.btn-next{background-image:url(../static/prev.png);transform:rotate(180deg);}
.jindutiao{width:500px;height:50px;background:#d48302;float:left;margin-left:100px;}
.d1{width:500px;height:4px;background:red;margin-top:23px;}
.d2{height:4px;background:green;}
.circle{width:20px;height:20px;background:pink;border-radius:100%;position:relative;left:9px;top:-9px;float:right;}
.time,.list{width:120px;height:50px;float:left;line-height:50px;margin-left:10px;}
.time{width:120px;}
.list{width:320px;background:#2d3b48;color:#EEDC82;float:right;}
.player ul{width:300px;height:500px;background:rgba(0,0,0,0.7);position:absolute;right:0px;bottom:50px;list-style: none;color:#fff;padding-left: 20px;}
.player ul li,.player ul  p{width:300px;height:50px;border-bottom:1px solid #000;line-height:50px;display:block;}
.player ul  p{font-size: 1.3em;font-family:simHei;border:0;letter-spacing: 15px;}
.player ul li:hover{background:#000;}
.player ul li span.n1{width:150px;height:50px;font-size:1em;float:left;cursor:pointer;}
.player ul li span.n2{width:50px;height:50px;font-size:1.3em;float:right;cursor:pointer;}
.player ul li span.n1:hover{color:red;}
.player ul li span.n2:hover{color:#8B3A3A;}
.player ul li span
.fade-enter-active, .fade-leave-active {
  transition: all .7s;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;transform:translateY(100px);
}
.changeColor{color:#f00;}
.bottom-nav{width:100%;height:auto;margin:0 auto;background:#FFEFDB;display: flex;display:-webkit-flex;justify-content: space-around;}
.bottom-nav ul{width:300px;height:auto;background:#96CDCD;list-style: none;padding-bottom:100px;padding-top:100px;box-shadow:  10px 10px 5px #888888;border-radius: 20%;}
.bottom-nav ul:hover{opacity:0.8;}
.bottom-nav ul p{width:200px;margin:0 auto;color:#fff;font-size:1.2em;font-family: SimHei;}
.bottom-nav ul li{width:100%;height:50px;line-height: 50px;margin-top:10px;}
.bottom-nav ul li:hover{background: #ff0;cursor: pointer;}
.bottom-nav ul li span{margin:0 auto;width:200px;height:50px;display:block;font-size:0.8em;}
@media screen and (min-width: 1600px) {
  .bottom-nav ul{width:500px;}
  .bottom-nav ul li span{width:300px;}
}
</style>
