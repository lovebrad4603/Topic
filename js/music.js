// index的音樂
(function() {
    let target = document.querySelector('audio');
    if (target) {
        //target.volume = 0.1;音量,最大1,0靜音
        target.volume = 0.1;
        // target.currentTime = 30; 開始播放的時間,以秒為單位
        target.play();
        console.log('play!');
    }

    function musicProgress() {
        let currentTime = target.currentTime;
        console.log(currentTime);

        if (currentTime > 40) {
            target.currentTime = 30;
        }

        setTimeout(musicProgress, 1000);
    }
    //musicProgress(); 重複執行迴圈
})();