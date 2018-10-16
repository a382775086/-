<template>
  <div class="block">
    <el-carousel height="400px" >
      <el-carousel-item style="background:#EECBAD"> 
        <div>
          <img src="../assets/carousel_1.jpg" />
        </div>
      </el-carousel-item>
       <el-carousel-item style="background:#696969">
        <div>
          <img src="../assets/carousel_2.jpg" />
        </div>
      </el-carousel-item>
      <el-carousel-item  style="background:#4A708B">
        <div>
          <img src="../assets/carousel_3.jpg" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="tuijian">
      <div class="gedan">
        <ul class="gedan_nav" style="list-style:none;">
          <li><h3>为您精选</h3></li>
          <li><a>流行</a></li>
          <li><a>华语</a></li>
          <li><a>民谣</a></li>
          <li><a>电子</a></li>
        </ul>
        <hr/>
        <div class="gedan_content">
          <div class="gedan_row">
            <div>
              <router-link to="/first/other">
              <img src="../assets/p1.jpg">
              <span href=#>100句情话我只唱给你听</span>
              </router-link>
            </div>
            <div>
              <router-link to="/first/other">
              <img src="../assets/p2.jpg">
              <span href=#>绵亘于脑际的悲悯叹息</span>
              </router-link>
            </div>
            <div>
              <router-link to="/first/other">
              <img src="../assets/p3.jpg">
              <span href=#>你是八月初秋里的怦然心动</span>
              </router-link>
            </div> 
          </div>
           <div class="gedan_row">
            <div>
              <router-link to="/first/other">
              <img src="../assets/p4.jpg">
              <span href=#>来自未来的访客</span>
              </router-link>
            </div>
            <div>
              <router-link to="/first/other">
              <img src="../assets/p5.jpg">
              <span href=#>每个人都是一颗独立星球</span>
              </router-link>
            </div>
            <div>
              <router-link to="/first/other">
              <img src="../assets/p6.jpg">
              <span href=#>与空调被一同服用效果更佳</span>
              </router-link>
            </div> 
          </div>
          <div class="gedan_row">
            <div>
              <router-link to="/first/other">
              <img src="../assets/p7.jpg">
              <span href=#>今天也要元气满满鸭！</span>
              </router-link>
            </div>
            <div>
              <router-link to="/first/other">
              <img src="../assets/p8.jpg">
              <span href=#>没有一首属于我</span>
              </router-link>
            </div>
            <div>
              <router-link to="/first/other">
              <img src="../assets/p9.jpg">
              <span href=#>我想和你共享耳机</span>
              </router-link>
            </div> 
          </div>                            
        </div>
      </div>
      <div class="geshou">
        <div class="geshou_head">
          <h4>入驻歌手</h4>
        </div>
        <hr/>
        <div class="geshou_introduce">
          <div class="geshou_touxiang">
            <img src="../assets/t1.jpg">
          </div>
          <router-link to="/first/zjl">
          <div class="geshou_2">
               <span>周杰伦</span>
          </div>
          </router-link>
        </div>

        <div class="geshou_introduce">
          <div class="geshou_touxiang">
            <img src="../assets/t2.jpg">
          </div>
          <router-link to="/first/cyx">
          <div class="geshou_2">
            <span>陈奕迅</span>
          </div>
          </router-link>
        </div>
        <div class="geshou_introduce">
          <div class="geshou_touxiang">
            <img src="../assets/t3.jpg">
          </div>
          <router-link to="/first/zek">
          <div class="geshou_2">
            <span>周二珂</span>
          </div>
          </router-link>
        </div>
        <div class="geshou_introduce">
          <div class="geshou_touxiang">
            <img src="../assets/t4.jpg">
          </div>
          <router-link to="/first/maroon5">
          <div class="geshou_2">
            <span>Maroon 5</span>
          </div>
          </router-link>
        </div>
        <div class="geshou_introduce">
          <div class="geshou_touxiang">
            <img src="../assets/t5.jpg">
          </div>
          <router-link to="/first/aw">
          <div class="geshou_2">
            <span>Alan Walker</span>
          </div>
          </router-link>
        </div>
      </div>
    </div>
    <hr/>
  </div>
</template>

<style>
.block{background:#FFEFDB;height:1500px;}
.el-carousel{z-index: 0;}
  .el-carousel__item div {
    width:1000px;
    height:400px;
    margin:0 auto;
  }
 .el-carousel__item div img {
  width:1000px;

 }
 .tuijian { width:1000px;height:1000px;margin:0 auto;}
 .gedan {width:720px;height:1000px;float:left;padding-right:30px;}
.gedan_nav { width:720px;height:80px;}
.gedan_nav li{display:inline-block;margin-left:20px;}
.gedan_content {width:auto;height:1000px;}
.gedan_row {width:auto;height:220px;margin-top:40px;display:flex;justify-content: space-around;flex-wrap: wrap;margin-top:40px;}
.gedan_row  div{width:180px;height:220px;text-align:center;}
.gedan_row  div img{width:180px;height:180px;}
.gedan_row  div span { font-size:1em;color:#8B8989;}
 .geshou{width:250px;height:1000px;float:left;margin-top:30px;
}
.geshou_head{width:auto;height:50px;line-height: 50px;text-align: center;}
.geshou_introduce{width:auto;height:90px;margin-top:55px;border-bottom: 2px solid #000;}
.geshou_touxiang{ width:90px;height:90px;background:grey;float:left; }
.geshou_touxiang img{ width:90px;height:90px;}
.geshou_2{width:140px;height:40px;float:left;padding-top:50px;-webkit-transition:all 0.5s;transition:all 0.5s;}
.geshou_2:hover{margin-left:10px;color:#f00;}
.geshou_2 span{font-size:1.2em;}
 a{text-decoration: none;color:#000;}
 hr {width:100%;height:2px;background:#fff;}
</style>