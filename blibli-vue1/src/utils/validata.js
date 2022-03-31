export checkAgeFormat(value){
    let pattern =  new RegExp("^[a-zA-Z0-9]{6}$")
    var str = value.replace(pattern)
    return str
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