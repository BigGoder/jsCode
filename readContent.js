const fs = require("fs");
const path = require("path");
const list = [];
function listFile(dir){
	const arr = fs.readdirSync(dir);
	arr.forEach(function(item){
		const fullpath = path.join(dir,item);
		const stats = fs.statSync(fullpath);
		if(stats.isDirectory()){
			listFile(fullpath);
		}else{
            if(fullpath.indexOf('.js')!=-1 || fullpath.indexOf('.vue')!=-1){
                let data = fs.readFileSync(fullpath);
                fs.writeFile('./result.txt', data.toString(), { encoding: 'utf8',flag:'a' }, err => {})
                list.push(fullpath);
            }

		}
	});
	return list;
}
 
const res = listFile("D:/project/smartPark/src");
console.log('res',res);