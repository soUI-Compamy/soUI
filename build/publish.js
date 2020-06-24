/**
 * @author lifenglei
 * Date: 200625
 */
require('./check-versions')();
require('shelljs/global');

var inquirer = require('inquirer');
var chalk = require('chalk');

inquirer.prompt([{
  name: 'conform',
  message: `是否需要重新构建？`,
  type: 'list',
  default: 0,
  choices: [{
    name: '是',
    value: 1
  }, {
    name: '否',
    value: 0
  }]
}, {
  name: 'message',
  message: '提交发布说明',
  type: 'input',
  default: ''
},{
    name:'branch',
    message:'推送分支名称',
    type:'input',

}]).then(function (answers) {
    console.log(answers)
  let build = answers.conform ? 'npm run build &&' : '';
  var cmd = `${build} 
  git checkout soUI-pages && 
  rm -rf index.html && 
  rm -rf static && 
  cd dist && 
  mv * ../ &&
  rm -rf ./dist && 
  cd .. &&
  git add . && 
  git commit -m '${answers.message}' &&
  git push`;
  console.log(cmd)
  exec(cmd);
  console.log();
  console.log(chalk.green(`提交成功 ) `));
  console.log();
})