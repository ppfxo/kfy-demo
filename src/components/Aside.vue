<template>
  <div id="aside">
    <div class="logo">
      <img src="../assets/logo01.png" alt="">
    </div>
    <div class="first">
      <ul>
        <li><img src="../assets/jigou.png" alt=""><span>机构管理</span></li>
        <li><img src="../assets/tongji.png" alt=""><span>统计分析</span></li>        
      </ul>
    </div>
    <div class="second">
      <ul>
        <router-link to="/1" tag="li">基本信息</router-link>
        <router-link to="/2" tag="li">产品和服务</router-link>
        <router-link to="/3" tag="li">教师管理</router-link>
        <router-link to="studentmanage" tag="li">学生管理</router-link>
        <router-link to="/4" tag="li">班级管理</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
ul,li{padding:0;list-style-type:none;}
#aside{
  width: 180px;
  height: 100%;
  background-color:#e5f1ff;
  float: left;
}
.logo{
  width: 180px;
  height: 60px;
  background-color: #237ae4;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.first, .second{
  float: left;
}
.first{
  width: 40px;
  position: fixed;
  top: 60px;
  height: 100%;
  background-color: #000d23;
  color: #9eb7dd;
  font-size: 14px;
}
.first ul li{
  height: 200px;
  line-height: 14px;
  padding: 0 10px;
  border-bottom: 1px solid #465569;
}
.first ul li img{
  margin: 65px 0 11px 0;
}
.second{
  position: fixed;
  top: 60px;
  left: 40px;
  height: 100%;
  width: 140px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.second ul li{
  width: 140px;
  height: 40px;
  color: #4c4c4c;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.second ul .router-link-exact-active{
  background-color: #fff;
  border-right: 1px solid #fff;
}
</style>
