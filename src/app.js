import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// 获取当前模块的目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 获取命令行参数
const [,, framework, subDir] = process.argv;

const validFrameworks = ['node.js', 'nuxt', 'wechaty'];
if (!validFrameworks.includes(framework.toLowerCase())) {
  console.error('Invalid framework specified.');
  process.exit(1);
}

// 构造文件路径
const basePath = join(__dirname, framework);
const filePath = subDir ? join(basePath, subDir, 'index.js') : join(basePath, 'index.js');

// 执行对应目录下的代码
try {
  execSync(`node ${filePath}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Error executing the script:', error);
  process.exit(1);
}
