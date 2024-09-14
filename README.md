# TODO
今後SMPのAPIとreactを利用して埋め込みフォームを作れる状態になったら、そのソースコードにレポジトリを変更する

# View pages in the local environment
## Install PHP
1. Download file: https://www.php.net/downloads.php
2. Change directory: ex.. C:\Users\{{user}}\AppData\Local\php
3. SET PATH:   
`SET PATH=%PATH%;C:\Users\{{user}}\AppData\Local\php`
4. Excute command:
`php -S 127.0.0.1:8080`
https://xn--web-oi9du9bc8tgu2a.com/php-web-server/
=>「Failed to listen on 127.0.0.1:8080 アクセス許可で禁じられた方法でソケットにアクセス しようとしました。」となる場合、ポートを変更する(ex.. $php -S 127.0.0.1:8081)
5. Access `127.0.0.1:8080` with a browser
