/*
● TypeScriptとは
  ○ 「型」という概念を持ったJavaScript
    ・型の中でも最も基本的な型であるプリミティブ型について学習する。
    ・複雑な型もそれを構成する小さい要素に分解していくと、いずれはこれ以上分解できないシンプルな型となる。
      > そういった「これ以上小さくならない」、シンプルな型になったときの諸々の型をプリミティブ型という。
*/

/*
● ファイルの作成方法
  ○ 「View」タブ > 「Terminal」を開く
    > Codeはツールの中でターミナルを開くことができる。
  ○ 開いたターミナルで、以下のコードを実行する。
    > echo 'export {};' > src/boolean.ts
● 作成したファイルのコンパイル・実行方法
  ○ 「ファイルの作成方法」で開いたターミナルで、以下のコードを実行する。
    > npm run dev src/boolean.ts
    // "dev":"ts-node-dev --respawn"  // package.jsonのscripts設定でタスクを登録済み
    > これを実行すると、「src/boolean.ts」を監視状態にできる。 // 保存をすると、ファイルの変更を検知して即時コンパイル&実行
*/

/*
● boolean型
  ○ 変数の宣言
    > let 変数名: boolean = true(false);
  ○ コンソールへの出力
    > console.log({ 変数名 });
*/

/* 
● JavaScriptのコード(boolean型)
  ○ 以下のように、TypeScriptのファイルの中に、JavaScriptのコードを書くことができる。
    > TypeScriptはJavaScriptのスーパーセット

  export {};
  let isFinished = true;  // letで変数を宣言する。その変数名は"isFinished"とし、trueという状態を持たせる。
  console.log({ isFinished });  // この"isFinished"をconsole.logで出力する。
*/

/* ● TypeScriptのコード(boolean型)
      ○ TypeScriptは、JavaScriptのコードに対して型を持たせることができる言語
        ・型をつける方法
          > boolean型の場合、変数名の後ろに": boolean"を付与する。
          > let 変数名: boolean = true(false);
        ・今回の"isFinished"のように、true/falseの真偽値を管理するための型はboolean型を指定する。
        ・TypeScriptはプログラマーが意図する変数や定数の型を、コロンをつけて明示的に宣言することができる。
      ○ 「let isFinished: boolean = true(false)」のコードについて
         > "isFinished"という変数がbooleanという型(すなわちtrue/false)のみ許容する変数であるという説明を書いている。
      ○ 型注釈(型アノテーション、アノテーション)
        > 型をつける際に使用する、説明の部分(: タイプ)のこと // 「: boolean」など
        > 「この変数名はこのような意図で扱っていくよ」という意図を、コンパイラに伝える行為
      ○ boolean型の変数名に代入できる値
        ・true  : OK
        ・false : OK
        ・1     : NG
        > boolean型としてアノテーションされた変数は、trueまたはfalseを代入することはできる。
        > しかしこの変数はboolean型として作られた変数なので、boolean型以外の値を設定することはできない。 // 想定外の値が入っているため
          // JavaScript
             > 変数の値を更新するたびにその変数の型もその都度変更されるため問題ない。
             > ある変数があるときはtrue、あるときは1になっているということが許される。
      ○ 「export {};」の役割について
        ・ファイルの先頭に、「export {}」を書くことで、グローバル空間にて宣言済みの変数を使用してしまうというエラーを回避している。
        ・例えば、変数nameに対して、'TypeScript'という文字列を代入する。
          > let name = `TypeScript`;
          ■ export {};を実行していない場合(「export {};」をコメントアウトした場合)
            ・エラー発生：Cannot redeclare block-scoped variable 'name'.(ブロックスペースの変数"name"を再び宣言することはできません。)
              □ 通常、JavaScriptではモジュールシステムを導入していない場合、変数を宣言するとグローバル空間に定義される。
                > モジュールシステム：インポートやエクスポートによってファイルをモジュールにする仕組み
              □ boolean.tsというファイルではexportを実行していないため、このファイル自体がモジュールになっているわけではない。
                > グローバル空間にてすでに定義済みの変数を使ってしまう危険性がある。
                > 案の定、'name'というどこかで宣言されている変数を間違って使っているため今回のエラーが発生
              □ このエラーを回避するには、モジュールシステムを導入すればよい(このファイルをモジュール化する)。
                ・このファイルは勉強用に用意しているファイルのため、エクスポートするターゲットはなんでも良い。
                  > 空のオブジェクトをエクスポートしている。

*/

export {};

let name = `TypeScript`; // 「export {};」がないと、エラーが発生

let isFinished: boolean = true; // "isFinished"という変数はboolean型しか持たない変数
isFinished = false; // letで宣言した変数名は、再代入による上書きが可能(trueで初期化、falseで上書き)
// isFinished = 1; // コンパイルエラー：Type '1' is not assignable to type 'boolean'.('1'はboolean型に代入することはできません。)
console.log({ isFinished });
