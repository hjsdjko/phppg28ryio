<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231009/fb94a0e717b64fc3bcd4970c9397d98e.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"flex-end"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"minHeight":"800px","padding":"20px 2vw 0 5vw","margin":"40px 5% 40px 0","borderRadius":"0px","flexWrap":"wrap","background":"#fff","display":"flex","width":"40vw","position":"relative","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"20px auto 20px","color":"#2a8ec0","textAlign":"center","width":"90%","letterSpacing":"2px","lineHeight":"44px","fontSize":"32px","fontWeight":"600"}'>幸运舞蹈工作室管理系统设计与实现注册</p></div>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xueyuan'" prop="xueyuanzhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xueyuanzhanghao')?'required':''">学员账号：</div>
				<el-input v-model="registerForm.xueyuanzhanghao"  placeholder="请输入学员账号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xueyuan'" prop="xueyuanxingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xueyuanxingming')?'required':''">学员姓名：</div>
				<el-input v-model="registerForm.xueyuanxingming"  placeholder="请输入学员姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xueyuan'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xueyuan'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xueyuan'" prop="shoujihao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('shoujihao')?'required':''">手机号：</div>
				<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xueyuan'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in xueyuanxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xueyuan'" prop="nianling">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('nianling')?'required':''">年龄：</div>
				<el-input v-model="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xueyuan'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xueyuantouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='xueyuan'" prop="banji">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('banji')?'required':''">班级：</div>
				<el-input v-model="registerForm.banji"  placeholder="请输入班级" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='qiantai'" prop="qiantaizhanghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('qiantaizhanghao')?'required':''">前台账号：</div>
				<el-input v-model="registerForm.qiantaizhanghao"  placeholder="请输入前台账号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='qiantai'" prop="qiantaixingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('qiantaixingming')?'required':''">前台姓名：</div>
				<el-input v-model="registerForm.qiantaixingming"  placeholder="请输入前台姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='qiantai'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='qiantai'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='qiantai'" prop="shoujihao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('shoujihao')?'required':''">手机号：</div>
				<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='qiantai'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in qiantaixingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='qiantai'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="qiantaitouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshigonghao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('jiaoshigonghao')?'required':''">教师工号：</div>
				<el-input v-model="registerForm.jiaoshigonghao"  placeholder="请输入教师工号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshixingming">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('jiaoshixingming')?'required':''">教师姓名：</div>
				<el-input v-model="registerForm.jiaoshixingming"  placeholder="请输入教师姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="shoujihao">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('shoujihao')?'required':''">手机号：</div>
				<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in jiaoshixingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="xueshifeiyong">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('xueshifeiyong')?'required':''">学时费用：</div>
				<el-input v-model.number="registerForm.xueshifeiyong"  placeholder="请输入学时费用" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="zhuanyewuzhong">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('zhuanyewuzhong')?'required':''">专业舞种：</div>
				<el-input v-model="registerForm.zhuanyewuzhong"  placeholder="请输入专业舞种" />
			</el-form-item>
			<el-form-item :style='{"width":"400px","padding":"0","margin":"0 auto 10px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","background":"none","display":"inline-block","width":"150px","lineHeight":"36px","fontSize":"14px","position":"absolute"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="jiaoshitouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0 auto","color":"#fff","display":"block","outline":"none","borderRadius":"4px","background":"#3795c4","width":"400px","fontSize":"16px","height":"50px","order":"30"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 0px","margin":"0px auto","color":"#999","textAlign":"right","display":"none","outline":"none","borderRadius":"4px","background":"none","width":"400px","fontSize":"14px","height":"44px","order":"40"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 0px","margin":"12px auto 20px","color":"#3795c4","textAlign":"center","display":"block","width":"400px","lineHeight":"1","fontSize":"14px","textDecoration":"none","order":"50"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            xueyuanxingbieOptions: [],
            qiantaixingbieOptions: [],
            jiaoshixingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='xueyuan'){
				this.registerForm = {
					xueyuanzhanghao: '',
					xueyuanxingming: '',
					mima: '',
					mima2: '',
					shoujihao: '',
					xingbie: '',
					nianling: '',
					touxiang: '',
					banji: '',
				}
			}
			if(this.tableName=='qiantai'){
				this.registerForm = {
					qiantaizhanghao: '',
					qiantaixingming: '',
					mima: '',
					mima2: '',
					shoujihao: '',
					xingbie: '',
					touxiang: '',
				}
			}
			if(this.tableName=='jiaoshi'){
				this.registerForm = {
					jiaoshigonghao: '',
					jiaoshixingming: '',
					mima: '',
					mima2: '',
					shoujihao: '',
					xingbie: '',
					xueshifeiyong: '',
					zhuanyewuzhong: '',
					touxiang: '',
				}
			}
			if ('xueyuan' == this.tableName) {
				this.requiredRules.xueyuanzhanghao = [{ required: true, message: '请输入学员账号', trigger: 'blur' }]
			}
			if ('xueyuan' == this.tableName) {
				this.requiredRules.xueyuanxingming = [{ required: true, message: '请输入学员姓名', trigger: 'blur' }]
			}
			if ('xueyuan' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('xueyuan' == this.tableName) {
				this.requiredRules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }]
			}
			if ('qiantai' == this.tableName) {
				this.requiredRules.qiantaizhanghao = [{ required: true, message: '请输入前台账号', trigger: 'blur' }]
			}
			if ('qiantai' == this.tableName) {
				this.requiredRules.qiantaixingming = [{ required: true, message: '请输入前台姓名', trigger: 'blur' }]
			}
			if ('qiantai' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('qiantai' == this.tableName) {
				this.requiredRules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.requiredRules.jiaoshigonghao = [{ required: true, message: '请输入教师工号', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.requiredRules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.requiredRules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('xueyuan' == this.tableName) {
			this.rules.xueyuanzhanghao = [{ required: true, message: '请输入学员账号', trigger: 'blur' }];
		  }
		  if ('xueyuan' == this.tableName) {
			this.rules.xueyuanxingming = [{ required: true, message: '请输入学员姓名', trigger: 'blur' }];
		  }
		  if ('xueyuan' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('xueyuan' == this.tableName) {
			this.rules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }];
		  }
			this.xueyuanxingbieOptions = "男,女".split(',');
		  if ('qiantai' == this.tableName) {
			this.rules.qiantaizhanghao = [{ required: true, message: '请输入前台账号', trigger: 'blur' }];
		  }
		  if ('qiantai' == this.tableName) {
			this.rules.qiantaixingming = [{ required: true, message: '请输入前台姓名', trigger: 'blur' }];
		  }
		  if ('qiantai' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('qiantai' == this.tableName) {
			this.rules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }];
		  }
			this.qiantaixingbieOptions = "男,女".split(',');
		  if ('jiaoshi' == this.tableName) {
			this.rules.jiaoshigonghao = [{ required: true, message: '请输入教师工号', trigger: 'blur' }];
		  }
		  if ('jiaoshi' == this.tableName) {
			this.rules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }];
		  }
		  if ('jiaoshi' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('jiaoshi' == this.tableName) {
			this.rules.shoujihao = [{ required: true, message: '请输入手机号', trigger: 'blur' }];
		  }
			this.jiaoshixingbieOptions = "男,女".split(',');
		  if ('jiaoshi' == this.tableName) {
			this.rules.xueshifeiyong = [{ required: true, validator: this.$validate.isNumber, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      xueyuantouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      qiantaitouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      jiaoshitouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.xueyuanzhanghao) && `xueyuan` == this.tableName){
					this.$message.error(`学员账号不能为空`);
					return
				}
              if(`xueyuan` == this.tableName && (this.registerForm.xueyuanzhanghao).toString().length<7){
                this.$message.error('学员账号长度不能小于7');
                return
              }
              if(`xueyuan` == this.tableName && (this.registerForm.xueyuanzhanghao).toString().length>10){
                this.$message.error('学员账号长度不能大于10');
                return
              }
				if((!this.registerForm.xueyuanxingming) && `xueyuan` == this.tableName){
					this.$message.error(`学员姓名不能为空`);
					return
				}
               if(`xueyuan` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `xueyuan` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.shoujihao) && `xueyuan` == this.tableName){
					this.$message.error(`手机号不能为空`);
					return
				}
				if((!this.registerForm.qiantaizhanghao) && `qiantai` == this.tableName){
					this.$message.error(`前台账号不能为空`);
					return
				}
				if((!this.registerForm.qiantaixingming) && `qiantai` == this.tableName){
					this.$message.error(`前台姓名不能为空`);
					return
				}
               if(`qiantai` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `qiantai` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.shoujihao) && `qiantai` == this.tableName){
					this.$message.error(`手机号不能为空`);
					return
				}
				if((!this.registerForm.jiaoshigonghao) && `jiaoshi` == this.tableName){
					this.$message.error(`教师工号不能为空`);
					return
				}
				if((!this.registerForm.jiaoshixingming) && `jiaoshi` == this.tableName){
					this.$message.error(`教师姓名不能为空`);
					return
				}
               if(`jiaoshi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `jiaoshi` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.shoujihao) && `jiaoshi` == this.tableName){
					this.$message.error(`手机号不能为空`);
					return
				}
				if(`jiaoshi` == this.tableName && this.registerForm.xueshifeiyong &&(!this.$validate.isNumber2(this.registerForm.xueshifeiyong))){
					this.$message.error(`学时费用应输入数字`);
					return
				}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231009/fb94a0e717b64fc3bcd4970c9397d98e.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
						flex-wrap: wrap;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #c6c6c6;
						border-width: 2px;
						border-style: solid;
						height: 50px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #c6c6c6;
						border-width: 2px;
						border-style: solid;
						min-width: 300px;
						height: 50px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #c6c6c6;
						border-width: 2px;
						border-style: solid;
						min-width: 300px;
						height: 50px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: 400px;
						font-size: 14px;
						border-color: #c6c6c6;
						border-width: 2px;
						border-style: solid;
						min-width: 300px;
						height: 50px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  cursor: pointer;
		  		  color: #c6c6c6;
		  		  font-weight: 600;
		  		  font-size: 24px;
		  		  border-color: #c6c6c6;
		  		  line-height: 80px;
		  		  border-radius: 4px;
		  		  background: #fff;
		  		  width: 80px;
		  		  border-width: 2px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  color: #c6c6c6;
		  		  font-weight: 600;
		  		  font-size: 24px;
		  		  border-color: #c6c6c6;
		  		  line-height: 80px;
		  		  border-radius: 4px;
		  		  background: #fff;
		  		  width: 80px;
		  		  border-width: 2px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  color: #c6c6c6;
		  		  font-weight: 600;
		  		  font-size: 24px;
		  		  border-color: #c6c6c6;
		  		  line-height: 80px;
		  		  border-radius: 4px;
		  		  background: #fff;
		  		  width: 80px;
		  		  border-width: 2px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 140px;
				position: absolute;
				content: "*";
				order: 2;
			}
</style>
