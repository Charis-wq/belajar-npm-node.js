/* Export modul
main
atribut main di package.json 
atribut main adalah entry point yang akan di-load ketika kita akan me-load nodejs project/package
pada kasus ketika kita membuat aplikasi mungkin tidak terlalu berguna tapi pada kasus ketika kita membuat library yang akan di gunakan dibanyak project atribut main ini akan terlihat kegunaanya.*/

/*menggunakan modul
untuk menggunakan modul yang sudah di export kita cukup gunakan import dari nama modul yang di export tersebut namun ganti tanda .(titik) dengan mana package yang ada di package.json 
misal
"." menjadi "mbelajar-NPM"
"./write" menjadi "belajar-NPM/write" */

import { writeToFile } from "belajar-npm/write";

writeToFile("export.log", "belajar NodeJS");