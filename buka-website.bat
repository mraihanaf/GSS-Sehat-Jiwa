@ECHO OFF
ECHO Program Ini Akan Menjalankan Static Server, Dikarenakan Tim Saya Menggunakan React. (Jika hanya menggunakan browser akan terjadi masalah CORS).
ECHO Tekan ENTER Untuk Memulai sever.
pause
start ./binaries/serve.exe -d ./dist -b localhost
start http://localhost:8080