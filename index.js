import xlsx from 'node-xlsx';
import { handle  } from './handle.js';
// 解析excel文件
const workSheetsFromFile=xlsx.parse('./xlsx/all.xlsx');

console.log(workSheetsFromFile[0].data);

// 将所有 id  组成新的数组
let ids=[];
for(let i=1;i<workSheetsFromFile[0].data.length;i++){
    if (!workSheetsFromFile[0].data[i].length) {
        continue;
    }
    const id = workSheetsFromFile[0].data[i][0];
    // id 为数字字符串
    if (id.length === 7 && !isNaN(id)) {
        ids.push(Number(id));
    }
}
for(let index = 0 ; index < ids.length ; index++){
    const id = ids[index];
    await handle(id);
}
// await handle(2009999);
// 2013389
  