export default {
  header: 'Button',
  headerText: '`v-btn` コンポーネントは基本的な HTML におけるボタンをマテリアルデザインで置き換え、多数のオプションを提供します。 様々なカラーヘルパークラスを利用して、背景やテキストの色を変更することができます。',
  components: ['v-btn'],
  examples: [{
    usage: {
      header: '使用方法',
      desc: ''
    },
    flat: {
      header: 'フラットボタン',
      desc: 'フラットボタンは影と背景色を持ちません。ホバーした時のみに、ボタンの形状が表示されます。'
    },
    raised: {
      header: 'レイズドボタン',
      desc: 'レイズドボタンはクリックした時に広がる影を持ちます。これはデフォルトのスタイルです。'
    },
    depressed: {
      header: 'ディプレスドボタン',
      desc: 'ディプレスドボタン背景色は変化しますが、影は持ちません。'
    },
    dropdown: {
      header: 'ボタンドロップダウン',
      desc: 'ボタンドロップダウンは、付加的なスタイリングがされた一般的なセレクトボックスです。',
      uninverted: true
    },
    toggle: {
      header: 'トグルボタン',
      desc: 'トグルボタンは本質的には、選択されたプロパティに反応するスタイリングされたラジオボタン、もしくはチェックボックスです。子のコンポーネントは `v-toolbar` コンポーネントと互換性があります。'
    },
    icon: {
      header: 'アイコン',
      desc: 'アイコンをボタンの主要なコンテンツとして使用することができます。'
    },
    floating: {
      header: 'フローティングボタン',
      desc: 'フローティングボタンは丸く、多くの場合アイコンを含んでいます。'
    },
    loaders: {
      header: 'ローディング',
      desc: 'loading prop を使用すれば、処理中であることをユーザーに通知することができます。デフォルトの振る舞いには `v-progress-circular` コンポーネントが使用されますが、これはカスタマイズすることができます。'
    },
    sizing: {
      header: 'サイズ',
      desc: 'ボタンにはさまざまなシナリオに合うように、異なったサイズのオプションを設定することができます。'
    },
    outline: {
      header: 'アウトラインボタン',
      desc: 'アウトラインボタンは現在適用されている色を引き継いだ境界線を表示します。'
    },
    round: {
      header: 'ラウンドボタン',
      desc: 'ラウンドボタンは通常のボタンと同じように振る舞いますが、角が丸くなります。'
    },
    block: {
      header: 'ブロックボタン',
      desc: 'ブロックボタンは可能な限り横に広がります。'
    }
  }],
  props: {
    'v-btn': {
      block: 'ボタンを使用可能なスペースの最大限まで広げます。',
      depressed: 'ボタンの影を削除します。',
      fab: 'ボタンを丸くします。',
      flat: 'ボタンの背景色を削除します。',
      icon: 'ボタンをアイコンとして丸くフラットにします。',
      inputValue: 'ボタンの有効状態を制御します。',
      large: 'ボタンのサイズを大きくします。',
      loading: 'ローディングアニメーションを追加します。',
      outline: 'ボタンを境界線で表現します。',
      round: 'ボタンの両端が丸くなります。',
      small: 'ボタンを小さくします。',
      type: 'ボタンの属性を設定します。'
    }
  }
}
