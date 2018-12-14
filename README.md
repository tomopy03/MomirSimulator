# MomirSimulator

Slackで使えるbotです。  
モミールベーシックのようなことができます。  

「momir n」(n >= 0)でマナコストがnのクリーチャーの画像を表示します。  
「jhoira s」でソーサリーのカード3枚の画像を表示します。  
「jhoira i」でインスタントのカード3枚の画像を表示します。  

だいたいそんな感じです。用法用量を守って楽しくお使いください。

## 使い方

まずはclaspを導入しましょう。この辺りの記事が参考になるはずです。

https://qiita.com/rf_p/items/7492375ddd684ba734f8

gasとしてpushした後は定数を設定しましょう。
その後、このあたりの記事を参考にしてアプリとして登録してください。

https://qiita.com/yabaiwebyasan/items/cbb9832d42dc627800fb

探せばいっぱい出てくると思います。

## 設定する定数

[ファイル] → [プロジェクトのプロパティ] → [スクリプトのプロパティ]で設定できます。  
設定する必要があるプロパティは以下。

| プロパティ名 | 値 | 備考 |
----|----|----
|MTGAPI_URL|https://api.magicthegathering.io/v1/cards|今回使用しているカードデータを取得するのAPIです|
|MOMIR_ICON_URL||アイコンとして使用するモミールの画像URLを指定してください|
|JHOIRA_ICON_URL||アイコンとして使用するモミールの画像URLを指定してください|
|VERIFY_TOKEN||Outgoing WebHookで取得できるトークンを指定してください|
|SLACK_ACCESS_TOKEN||Slackのアクセストークンを指定してください|

全て設定しないと動かないはずです。  
中身も難しいことしてないので必要に応じて色々変えてみてください。
