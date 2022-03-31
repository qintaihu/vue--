<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="(item,index) in  tabArr" :key="index" :class="{current: index == curFalg}" @click="changeCurrent(item)">
                {{item.text}}</li>
            </ul>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" size="small"
                class="login-Form">
                <el-form-item prop="userName" class="login-item">
                    <label>邮箱</label>
                    <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password" class="login-item">
                    <label>密码</label>
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" maxlength="20" minlength="6"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="login-item">
                    <label>验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="15"><el-input v-model.number="ruleForm.code" maxlength="6" minlength="6"></el-input></el-col>
                        <el-col :span="9"><el-button type="success" class="block" size="small">获取验证码</el-button></el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')" class="login-button block">提交</el-button>
                    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        var checkAge = (rule, value, callback) => {
            let reg = /^[a-zA-Z0-9]{6}$/
            if (!value) {
                return callback(new Error('验证码不能为空'));
            }else if(!reg.test(value)){
                return callback(new Error('请输入正确的验证码格式'));
            }else{
                return callback();
            }
            // setTimeout(() => {
            // if (!Number.isInteger(value)) {
            //     callback(new Error('请输入验证码'));
            // } else {
            //     if (value < 18) {
            //     callback(new Error('请输入验证码'));
            //     } else {
            //     callback();
            //     }
            // }
            // }, 1000);
        };
        var validateUserName = (rule, value, callback) => {
            let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
            if (value.trim() === '') {
                callback(new Error('请输入邮箱'));
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的邮箱'));
            }else{
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (!reg.test(value)) {
                callback(new Error('请输入6-20位的数字+字母'));
            } else {
                callback();
            }
        };
        return {
            tabArr:[
                {text: '登录', id: 0},
                {text: '注册', id: 1}
            ],
            //登录  注册样式区别
            curFalg: '',
            //表单数据
            ruleForm: {
                userName: '',
                password: '',
                code: ''
            },
            rules: {
                userName: [
                    { validator: validateUserName, trigger: ['blur','change'] }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                code: [
                    { validator: checkAge, trigger: ['blur','change'] }
                ]
                }
            }
    },
    mounted() {
        
    },
    methods: {
        changeCurrent(item){
            console.log(item),
            this.curFalg = item.id;

        },
        //表单方法
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
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
<style lang="scss" scoped>
#login {
    height: 100vh;
    background-color: #344a5f;
}
.login-wrap {
    width: 330px;
    margin: auto;
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }
    .current{
        background-color: rgba(0, 0, 0, .1);
    }
}
.login-Form{
    margin-top: 29px;
    label{
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: #fff;
    }
    .login-item{
        margin-bottom: 13px;
    }
    .block{
        display: block;
        width: 100%;
    }
    .login-button{
        margin-top: 19px;
    }
}
</style>