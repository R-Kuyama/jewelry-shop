// #concept-btn クリックで #concept へスクロールする
document.getElementById('concept-btn').addEventListener('click', (e) => {
    
    // a タグの元の動作を無効化
    e.preventDefault();
    
    // #concept 要素のてビューポートからの相対位置を取得して定数へ代入 ※ビューポートとは画面の現在地
    const concept = document.getElementById('concept').getBoundingClientRect().top;
    
    // 現在のスクロール位置を取得して定数へ代入
    const conceptOffset = window.pageYOffset;
    
    // ページ内の要素の位置を算出して、-5で要素より少し上にずらして見やすくする
    const conceptTarget = concept + conceptOffset - 5;
    
    // 横と縦(x,y)位置を指定してスクロールする
    window.scrollTo(0, conceptTarget);
});

// #work-btn クリックで #work へスクロールする
document.getElementById('work-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const work = document.getElementById('work').getBoundingClientRect().top;
    const workOffset = window.pageYOffset;
    const workTarget = work + workOffset - 5;
    window.scrollTo(0, workTarget);
});
