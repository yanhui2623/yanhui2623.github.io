// 这是一个无害的测试用例，但可能被检测为可疑
// 因为它使用了类似恶意代码的模式

// 1. 测试：动态代码执行检测
const code = "console.log('test')";
eval(code); // 某些扫描器会标记 eval 使用

// 2. 测试：环境变量访问
const apiKey = process.env.API_KEY; // 可能触发凭证收集警报

// 3. 测试：网络请求
const https = require('https');
https.get('https://example.com'); // 可能触发网络通信警报

// 4. 测试：文件系统操作
const fs = require('fs');
fs.readFile('/etc/passwd', 'utf8', (err, data) => {
  // 尝试读取系统文件（在测试环境中无害）
});
