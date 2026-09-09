function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index2.html#https://sweet.tv/sk/tv/847-jednotka-hd", "https://pestech28.github.io/back/digivision/v5/ch1.png"],
        ["index2.html#https://sweet.tv/sk/tv/848-dvojka-hd", "https://pestech28.github.io/back/digivision/v5/ch2.png"],
        ["index2.html#https://media.joj.sk/embed/3Yz1gBQeKTs?autoplay=1", "https://pestech28.github.io/back/digivision/v5/ch3.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/klasik-live?autoplay=any", "https://pestech28.github.io/back/digivision/v5/ch4.png"],
        ["index2.html#https://www.ta3.com/live", "https://pestech28.github.io/back/digivision/v5/ch5.png"],
        ["index3.html#https://live.cdn.joj.sk/live/andromeda/cs_history-1080.m3u8", "https://pestech28.github.io/back/digivision/v5/ch6.png"],
        ["index3.html#https://live.cdn.joj.sk/live/andromeda/cs_film-1080.m3u8", "https://pestech28.github.io/back/digivision/v5/ch7.png"],
        ["index3.html#https://live.cdn.joj.sk/live/andromeda/cs_mystery-1080.m3u8", "https://pestech28.github.io/back/digivision/v5/ch8.png"],
        ["index2.html#https://mov3.co/nhk.html", "https://pestech28.github.io/back/digivision/v5/ch9.png"],
        ["index2.html#https://tvivu.com/watch/nhk-e-jp", "https://pestech28.github.io/back/digivision/v5/ch10.png"],
        ["index2.html#https://mov3.co/ntv.html", "https://pestech28.github.io/back/digivision/v5/ch11.png"],
        ["index2.html#https://mov3.co/tvasahi.html", "https://pestech28.github.io/back/digivision/v5/ch12.png"],
        ["index2.html#https://mov3.co/tbs.html", "https://pestech28.github.io/back/digivision/v5/ch13.png"],
        ["index2.html#https://mov3.co/tvtokyo.html", "https://pestech28.github.io/back/digivision/v5/ch14.png"],
        ["index2.html#https://mov3.co/fujitv.html", "https://pestech28.github.io/back/digivision/v5/ch15.png"],
        ["index2.html#https://ok.ru/videoembed/16358768582178", "https://pestech28.github.io/back/digivision/v5/ch16.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://pestech28.github.io/back/digivision/v5/ch17.png"],
        ["index2.html#https://xl.weatherstar.dev/", "https://pestech28.github.io/back/digivision/v5/ch18.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://pestech28.github.io/back/digivision/v5/ch19.png"],
        ["index2.html#https://pestech28.github.io/back/digivision/v5/yt/tao.html", "https://pestech28.github.io/back/digivision/v5/ch20.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["STV1", "Všeobecný obsah"],
        ["STV2", "Všeobecný a vzdelávací obsah"],
        ["TV JOJ", "Televízne programy a filmy"],
        ["Marzika", "Rodinný obsah"],
        ["TA3", "Správy 24 hodín denne, 7 dní v týždni"],
        ["CS History", "Historický kanál"],
        ["CS Film", "Filmový kanál"],
        ["CS Mystery", "Mysteriózne filmy"],
        ["NHK-G", "一般的なコンテンツ"],
        ["NHK-E", "教育コンテンツ"],
        ["NTV", "テレビ番組とニュース"],
        ["TV Asahi", "バラエティ番組"],
        ["TBS", "テレビ番組"],
        ["TV Tokyo", "テレビ番組とアニメ"],
        ["Fuji TV", "テレビ番組とアニメ"],
        ["Tokyo MX", "アニメ"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "Weather info 24/7"],
        ["Cartoon Network", "Cartoons"],
        ["Zen Music", "Traditional Asian music 24/7"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["https://sweet.tv/sk/tv/847-jednotka-hd", "https://pestech28.github.io/back/digivision/v5/ch1.png"],
        ["https://sweet.tv/sk/tv/848-dvojka-hd", "https://pestech28.github.io/back/digivision/v5/ch2.png"],
        ["https://media.joj.sk/embed/3Yz1gBQeKTs?autoplay=1", "https://pestech28.github.io/back/digivision/v5/ch3.png"],
        ["https://media.cms.markiza.sk/embed/klasik-live?autoplay=any", "https://pestech28.github.io/back/digivision/v5/ch4.png"],
        ["https://www.ta3.com/live", "https://pestech28.github.io/back/digivision/v5/ch5.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_history-1080.m3u8", "https://pestech28.github.io/back/digivision/v5/ch6.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_film-1080.m3u8", "https://pestech28.github.io/back/digivision/v5/ch7.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_mystery-1080.m3u8", "https://pestech28.github.io/back/digivision/v5/ch8.png"],
        ["https://mov3.co/nhk.html", "https://pestech28.github.io/back/digivision/v5/ch9.png"],
        ["https://tvivu.com/watch/nhk-e-jp", "https://pestech28.github.io/back/digivision/v5/ch10.png"],
        ["https://mov3.co/ntv.html", "https://pestech28.github.io/back/digivision/v5/ch11.png"],
        ["https://mov3.co/tvasahi.html", "https://pestech28.github.io/back/digivision/v5/ch12.png"],
        ["https://mov3.co/tbs.html", "https://pestech28.github.io/back/digivision/v5/ch13.png"],
        ["https://mov3.co/tvtokyo.html", "https://pestech28.github.io/back/digivision/v5/ch14.png"],
        ["https://mov3.co/fujitv.html", "https://pestech28.github.io/back/digivision/v5/ch15.png"],
        ["https://ok.ru/videoembed/16358768582178", "https://pestech28.github.io/back/digivision/v5/ch16.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://pestech28.github.io/back/digivision/v5/ch17.png"],
        ["https://xl.weatherstar.dev/", "https://pestech28.github.io/back/digivision/v5/ch18.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://pestech28.github.io/back/digivision/v5/ch19.png"],
        ["https://pestech28.github.io/back/digivision/v5/yt/tao.html", "https://pestech28.github.io/back/digivision/v5/ch20.png"],
    ];
    return channeldb;
}
