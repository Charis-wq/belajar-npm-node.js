/*Dependency Management
salah satu fitur yang sangat berguna dalam NPM adalah dependency management 
saat kita membuat aplikasi sering sekali kita akan membutuhkan dependency ke liberary atau package pihak lain misal package open source atau package yang bisa kita buat sendiri 
NPM mendukung dependency management sehingga kita tidak perludownload package yang kita butuhkan secara manual termasuk tidak perlu melakukan update dependency secara manual ketiak ada update terbaru */

/*npmjs.com
secara default NPM akan download dependency dari website
https://www.npmjs.com/ 
kita bisa mencari open source package atau membuat open source package disana jika kita mau npm install nama depndecy@version 
atau bisa langsung di tulis di dependency di package.json */

/*Download Dependency
untuk mendoawnload dependency kita bisa gunakan perintah npm install
secara otomatis NPM akan mendoawnload package yang ada di dependency ke dalam folder node_modules
selain itu NPM juga akan membuat file package-lock.json yang berisikan inforamasi package yang di doenload ini untuk mempermudah ketika kita melakukan downlaoad ulang liberary di komputer lain. */


import _ from "lodash";

const source = "ABDUL CHARIS";
const target = _.capitalize(source);

console.log(target);