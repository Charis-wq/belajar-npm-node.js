/*Script
NPM memiliki fitur yang bernama script dimana kita bisa menyediakan perintah script yang nanti bisa di gunakan untuk menjalankan perintah lainnya
pengguanan script ini biasanya digunakan untuk mempermudah ketika kita menjalankan perintah yang panjang
untuk menambahakan script kita bisa menambahakannya di package.json */

/* menjalankan script
untuk menjalankan script kita bisa gunakan NPM dengan perintah npm run-script namascript(value object di script package.json ) */

/*special script
script di package.json terdapat yang sepesial atau khusus
script tersebut tidak perlu dijalankan menggunakan npm run-script namascript tapi bisa langsung di jalankan menggunakan perintah npm namascript 
contoh special script yaitu: start,stop,test,restart,uninstall,version dan lain-lain
terdapat juga script prefix pre sebagai script yang akan dijalanakan sebelumnya dan prefix post sebagai script yang dijalankan setelahnya
misal ketika kita gunakan perintah npm start maka akan menjalankan perintah script prestart,start dan poststart  */

console.log("Abdul Charis");