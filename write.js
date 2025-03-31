/*Project type
secara default saat ini kita membuat project node.js menggunakan commonjs 
oleh karena itu ketika kita ingin menggunakan javascript modules kita harus mengubah filenya menjadi mjs
namun kita juga bisa mengubah default project type dati commonjs menjadi js modules dengan cara menubah type di package.json
sangat di rekomendasikan sekarang menggunakan js modules di abanding commomjs karena js modules sudah menjadi standard di javascript */

import fs from "fs";

export const writeToFile = (file, content) =>{
    fs.writeFileSync(file,content);

};