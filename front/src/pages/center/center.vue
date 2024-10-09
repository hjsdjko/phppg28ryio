<template>
<div class="center-preview" :style='{"padding":"20px 12% 40px","margin":"0 auto","color":"#999","flexWrap":"wrap","background":"#edeff1","display":"block","width":"100%","fontSize":"14px","position":"relative","justifyContent":"space-between"}'>
	<div class="title" :style='{"padding":"12px 0 0","margin":"0px auto","color":"#333","textAlign":"center","background":"none","width":"100%","fontSize":"24px","fontWeight":"600","height":"60px"}'>{{ title }}</div>
	
	<div class="info" :style='{"padding":"80px 60px 80px 200px","margin":"20px 0 0 0","borderColor":"#28890b20","alignItems":"center","display":"flex","borderRadius":"0px","flexWrap":"wrap","background":"#fff","borderWidth":"0px","width":"calc(100% - 0px)","position":"relative","borderStyle":"solid","height":"auto","order":"2"}'>
		<div :style='{"padding":"8px 30px","borderColor":"#eee","margin":"0 20px 0 0","color":"#333","letterSpacing":"0px","borderRadius":"0px","top":"20px","left":"170px","borderWidth":"0px","background":"none","width":"auto","lineHeight":"1.5","fontSize":"18px","position":"absolute","borderStyle":"solid","fontWeight":"600","height":"auto"}'>个人信息</div>
		<div :style='{"borderColor":"#1abc9e20","left":"20px","borderWidth":"0 0 0px 0","width":"auto","fontSize":0,"position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xueyuan'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"150px","borderStyle":"solid","height":"150px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"borderColor":"#1abc9e20","left":"20px","borderWidth":"0 0 0px 0","width":"auto","fontSize":0,"position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiantai'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"150px","borderStyle":"solid","height":"150px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"borderColor":"#1abc9e20","left":"20px","borderWidth":"0 0 0px 0","width":"auto","fontSize":0,"position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"150px","borderStyle":"solid","height":"150px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xueyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"width":"100%","margin":"0 10px 0 0","fontSize":"inherit","color":"inherit"}'>学员账号</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xueyuanzhanghao}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xueyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>学员姓名</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xueyuanxingming}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xueyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>手机号</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.shoujihao}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xueyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>性别</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xueyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>年龄</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.nianling}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xueyuan'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>班级</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.banji}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiantai'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"width":"100%","margin":"0 10px 0 0","fontSize":"inherit","color":"inherit"}'>前台账号</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.qiantaizhanghao}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiantai'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>前台姓名</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.qiantaixingming}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiantai'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>手机号</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.shoujihao}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='qiantai'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>性别</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"width":"100%","margin":"0 10px 0 0","fontSize":"inherit","color":"inherit"}'>教师工号</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.jiaoshigonghao}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>教师姓名</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.jiaoshixingming}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>手机号</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.shoujihao}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>性别</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>学时费用</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xueshifeiyong}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>专业舞种</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.zhuanyewuzhong}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"width":"100%","margin":"20px 0 0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="100px">
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xueyuan'" label="学员账号" prop="xueyuanzhanghao">
            <el-input v-model="sessionForm.xueyuanzhanghao" placeholder="学员账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xueyuan'" label="学员姓名" prop="xueyuanxingming">
            <el-input v-model="sessionForm.xueyuanxingming" placeholder="学员姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xueyuan'" label="手机号" prop="shoujihao">
            <el-input v-model="sessionForm.shoujihao" placeholder="手机号" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xueyuan'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xueyuan'" label="年龄" prop="nianling">
            <el-input v-model="sessionForm.nianling" placeholder="年龄" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xueyuan'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="xueyuantouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='xueyuan'" label="班级" prop="banji">
            <el-input v-model="sessionForm.banji" placeholder="班级" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='qiantai'" label="前台账号" prop="qiantaizhanghao">
            <el-input v-model="sessionForm.qiantaizhanghao" placeholder="前台账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='qiantai'" label="前台姓名" prop="qiantaixingming">
            <el-input v-model="sessionForm.qiantaixingming" placeholder="前台姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='qiantai'" label="手机号" prop="shoujihao">
            <el-input v-model="sessionForm.shoujihao" placeholder="手机号" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='qiantai'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='qiantai'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="qiantaitouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="教师工号" prop="jiaoshigonghao">
            <el-input v-model="sessionForm.jiaoshigonghao" placeholder="教师工号" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="教师姓名" prop="jiaoshixingming">
            <el-input v-model="sessionForm.jiaoshixingming" placeholder="教师姓名" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="手机号" prop="shoujihao">
            <el-input v-model="sessionForm.shoujihao" placeholder="手机号" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="学时费用" prop="xueshifeiyong">
            <el-input v-model="sessionForm.xueshifeiyong" placeholder="学时费用" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="专业舞种" prop="zhuanyewuzhong">
            <el-input v-model="sessionForm.zhuanyewuzhong" placeholder="专业舞种" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="jiaoshitouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"30px","background":"#3795c4","width":"120px","lineHeight":"50px","fontSize":"14px","height":"50px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"1px solid #3795c4","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#3795c4","borderRadius":"30px","background":"#fff","width":"110px","lineHeight":"50px","fontSize":"14px","height":"50px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
	  <el-tab-pane label="修改密码">
		<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="100px">
			<el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="原密码" prop="password">
			  <el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="新密码" prop="newpassword">
			  <el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="确认密码" prop="repassword">
			  <el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}'>
			  <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"30px","background":"#3795c4","width":"120px","lineHeight":"50px","fontSize":"14px","height":"50px"}' type="primary" @click="updatePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	  </el-tab-pane>
		<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
  import config from '@/config/config'
  import menu from '@/config/menu'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
		passwordForm: {},
		passwordRules: {
			password: [
				{
					required: true,
					message: "密码不能为空",
					trigger: "blur"
				}
			],
			newpassword: [
				{
					required: true,
					message: "新密码不能为空",
					trigger: "blur"
				}
			],
			repassword: [
				{
					required: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}
			]
		},
        rules: {},
		menuList: [],
        disabled: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('frontToken')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {},
      }
    },
    created() {
		let menus = menu.list()
		for(let x in menus){
			if(menus[x].tableName == this.userTableName){
				this.menuList = menus[x].backMenu
			}
		}
		if ('xueyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'xueyuanzhanghao', null);
		}
		if ('xueyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'xueyuanxingming', null);
		}
		if ('xueyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('xueyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'shoujihao', null);
		}
		if ('xueyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('xueyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'nianling', null);
		}
		if ('xueyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('xueyuan' == this.userTableName) {
			this.$set(this.sessionForm, 'banji', null);
		}
		if ('qiantai' == this.userTableName) {
			this.$set(this.sessionForm, 'qiantaizhanghao', null);
		}
		if ('qiantai' == this.userTableName) {
			this.$set(this.sessionForm, 'qiantaixingming', null);
		}
		if ('qiantai' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('qiantai' == this.userTableName) {
			this.$set(this.sessionForm, 'shoujihao', null);
		}
		if ('qiantai' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('qiantai' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'jiaoshigonghao', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'jiaoshixingming', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'shoujihao', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'xueshifeiyong', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'zhuanyewuzhong', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}

		if ('xueyuan' == this.userTableName&&this.rules['xueyuanzhanghao']){
			this.rules['xueyuanzhanghao'].push({ required: true, message: '请输入学员账号', trigger: 'blur' })
		}else if('xueyuan' == this.userTableName&&!this.rules['xueyuanzhanghao']) {
			this.$set(this.rules, 'xueyuanzhanghao', [{ required: true, message: '请输入学员账号', trigger: 'blur' }]);
		}
		if ('xueyuan' == this.userTableName&&this.rules['xueyuanxingming']){
			this.rules['xueyuanxingming'].push({ required: true, message: '请输入学员姓名', trigger: 'blur' })
		}else if('xueyuan' == this.userTableName&&!this.rules['xueyuanxingming']) {
			this.$set(this.rules, 'xueyuanxingming', [{ required: true, message: '请输入学员姓名', trigger: 'blur' }]);
		}
		if ('xueyuan' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('xueyuan' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('xueyuan' == this.userTableName&&this.rules['shoujihao']){
			this.rules['shoujihao'].push({ required: true, message: '请输入手机号', trigger: 'blur' })
		}else if('xueyuan' == this.userTableName&&!this.rules['shoujihao']) {
			this.$set(this.rules, 'shoujihao', [{ required: true, message: '请输入手机号', trigger: 'blur' }]);
		}
		if ('qiantai' == this.userTableName&&this.rules['qiantaizhanghao']){
			this.rules['qiantaizhanghao'].push({ required: true, message: '请输入前台账号', trigger: 'blur' })
		}else if('qiantai' == this.userTableName&&!this.rules['qiantaizhanghao']) {
			this.$set(this.rules, 'qiantaizhanghao', [{ required: true, message: '请输入前台账号', trigger: 'blur' }]);
		}
		if ('qiantai' == this.userTableName&&this.rules['qiantaixingming']){
			this.rules['qiantaixingming'].push({ required: true, message: '请输入前台姓名', trigger: 'blur' })
		}else if('qiantai' == this.userTableName&&!this.rules['qiantaixingming']) {
			this.$set(this.rules, 'qiantaixingming', [{ required: true, message: '请输入前台姓名', trigger: 'blur' }]);
		}
		if ('qiantai' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('qiantai' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('qiantai' == this.userTableName&&this.rules['shoujihao']){
			this.rules['shoujihao'].push({ required: true, message: '请输入手机号', trigger: 'blur' })
		}else if('qiantai' == this.userTableName&&!this.rules['shoujihao']) {
			this.$set(this.rules, 'shoujihao', [{ required: true, message: '请输入手机号', trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName&&this.rules['jiaoshigonghao']){
			this.rules['jiaoshigonghao'].push({ required: true, message: '请输入教师工号', trigger: 'blur' })
		}else if('jiaoshi' == this.userTableName&&!this.rules['jiaoshigonghao']) {
			this.$set(this.rules, 'jiaoshigonghao', [{ required: true, message: '请输入教师工号', trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName&&this.rules['jiaoshixingming']){
			this.rules['jiaoshixingming'].push({ required: true, message: '请输入教师姓名', trigger: 'blur' })
		}else if('jiaoshi' == this.userTableName&&!this.rules['jiaoshixingming']) {
			this.$set(this.rules, 'jiaoshixingming', [{ required: true, message: '请输入教师姓名', trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('jiaoshi' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName&&this.rules['shoujihao']){
			this.rules['shoujihao'].push({ required: true, message: '请输入手机号', trigger: 'blur' })
		}else if('jiaoshi' == this.userTableName&&!this.rules['shoujihao']) {
			this.$set(this.rules, 'shoujihao', [{ required: true, message: '请输入手机号', trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.rules, 'xueshifeiyong', [{ required: false, validator: this.$validate.isNumber, trigger: 'blur' }]);
		}

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
        if ('xueyuan' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
        if ('qiantai' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
        if ('jiaoshi' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      onSubmit(formName) {
		if(`xueyuan` == this.userTableName && (this.sessionForm.xueyuanzhanghao).toString().length<7){
			this.$message.error('学员账号长度不能小于7');
			return
		}
		if(`xueyuan` == this.userTableName && (this.sessionForm.xueyuanzhanghao).toString().length>10){
			this.$message.error('学员账号长度不能大于10');
			return
		}
		if(`xueyuan` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`qiantai` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`jiaoshi` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      xueyuantouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      qiantaitouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      jiaoshitouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '修改密码':
            this.passwordForm = {
				password: '',
				newpassword: '',
				repassword: '',
			}
			this.$forceUpdate()
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
	  async updatePassword(){
			this.$refs["passwordForm"].validate(async valid => {
				if (valid) {
					var password = "";
					if (this.sessionForm.mima) {
						password = this.sessionForm.mima;
					} else if (this.sessionForm.password) {
						password = this.sessionForm.password;
					}
					if (this.passwordForm.password != password) {
						this.$message.error("原密码错误");
						return;
					}
					if (this.passwordForm.newpassword != this.passwordForm.repassword) {
						this.$message.error("两次密码输入不一致");
						return;
					}
					if (this.userTableName == 'xueyuan') {
					}
					this.sessionForm.password = this.passwordForm.newpassword;
					this.sessionForm.mima = this.passwordForm.newpassword;
					this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
						if (data && data.code === 0) {
							this.$message({
								message: "修改密码成功,下次登录系统生效",
								type: "success",
								duration: 1500,
								onClose: () => {
								}
							});
							this.setSession()
						} else {
							this.$message.error(data.msg);
						}
					});
				}
			})
	  },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
	  hasBack(name){
		  switch(name){
			case '我的收藏管理':
				return false
				break;
			default:
				return true
		  }
	  }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & /deep/ .el-tabs__header {
		.el-tabs__nav{
			overflow: auto;
		}
		::-webkit-scrollbar {
		  -webkit-appearance: none;
		  width: 6px;
		  height: 6px;
		}
		::-webkit-scrollbar-track {
		  background: rgba(0, 0, 0, 0.1);
		  border-radius: 0;
		}
		::-webkit-scrollbar-thumb {
		  cursor: pointer;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.15);
		  transition: color 0.2s ease;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgba(0, 0, 0, 0.3);
		}
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header {
	padding: 0 60px;
	margin: 20px 0 30px;
	background: #fff;
	width: 100%;
	border-color: #28890b20;
	border-width: 0 0 0px;
	position: relative;
	border-style: solid;
	text-align: center;
	height: auto;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item {
  	padding: 0 10px;
  	margin: 0 10px;
  	color: #666;
  	font-weight: 500;
  	display: block;
  	font-size: 16px;
  	line-height: 60px;
  	float: left;
  	background: none;
  	width: auto;
  	position: relative;
  	text-align: center;
  	min-width: 100px;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
  	padding: 0 10px;
  	color: #fff;
  	background: #3795c4;
  	font-weight: 600;
  	font-size: 16px;
  	line-height: 60px;
  	position: relative;
  	text-align: center;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
  	padding: 0 10px;
  	margin: 0 10px 0 0;
  	color: #fff;
  	font-weight: 600;
  	display: block;
  	font-size: 16px;
  	line-height: 60px;
  	float: left;
  	background: #3795c4;
  	width: auto;
  	position: relative;
  	text-align: center;
  	min-width: 100px;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__content {
  	padding: 0px;
  	margin: 0px 0 0;
  	background: none;
  	width: calc(100% - 20px);
  }
  .center-preview .el-tabs /deep/ .el-tabs__content .el-tab-pane {
  	width: 100%;
  }
  
  .center-preview-pv .el-form-item /deep/ .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #666;
  	font-weight: 500;
  	width: 100px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 100px;
  }
  
  .center-preview-pv .el-input /deep/ .el-input__inner {
  	padding: 0 12px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 4px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select /deep/ .el-input__inner {
  	padding: 0 12px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 4px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor /deep/ .el-input__inner {
  	padding: 0 10px 0 30px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 4px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
  
  .center-preview-pv /deep/ .avatar-uploader-icon {
  	cursor: pointer;
  	color: #666;
  	font-weight: 600;
  	font-size: 24px;
  	border-color: #eee;
  	line-height: 80px;
  	border-radius: 4px;
  	background: #fff;
  	width: 120px;
  	border-width: 0px;
  	border-style: solid;
  	text-align: center;
  	height: 80px;
  }
  
  .center-preview-pv .el-form-item.balance /deep/ .el-input__inner {
  	border-radius: 4px;
  	padding: 0 12px;
  	color: #666;
  	background: #fff;
  	display: inline-block;
  	width: auto;
  	font-size: 14px;
  	border-color: #eee;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
</style>
