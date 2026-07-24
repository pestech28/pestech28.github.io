function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index2.html#https://sweet.tv/sk/tv/847-jednotka-hd", "https://pestech28.rf.gd/back/digivision/v2/ch1.png"],
        ["index2.html#https://sweet.tv/sk/tv/848-dvojka-hd", "https://pestech28.rf.gd/back/digivision/v2/ch2.png"],
        ["index2.html#https://media.joj.sk/embed/3Yz1gBQeKTs?autoplay=1", "https://pestech28.rf.gd/back/digivision/v2/ch3.png"],
        ["index2.html#https://media.joj.sk/embed/DKZwKhUlV3i?autoplay=1", "https://pestech28.rf.gd/back/digivision/v2/ch4.png"],
        ["index3.html#https://live.cdn.joj.sk/live/andromeda/jojko-1080.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch5.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://pestech28.rf.gd/back/digivision/v2/ch6.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://pestech28.rf.gd/back/digivision/v2/ch7.png"],
        ["index2.html#https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://pestech28.rf.gd/back/digivision/v2/ch8.png"],
        ["index3.html#https://live.cdn.joj.sk/live/andromeda/cs_history-1080.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch9.png"],
        ["index3.html#https://live.cdn.joj.sk/live/andromeda/cs_film-1080.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch10.png"],
        ["index3.html#https://live.cdn.joj.sk/live/andromeda/cs_mystery-1080.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch11.png"],
        ["index2.html#https://www.ta3.com/live", "https://pestech28.rf.gd/back/digivision/v2/ch12.png"],
        ["index3.html#https://aegis-cloudfront-1.tubi.video/bb1fc6ad-9948-42ea-aaf3-20acfcdeecac/playlist.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch13.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://pestech28.rf.gd/back/digivision/v2/ch14.png"],
        ["index2.html#http://v2.weatherscan.net/", "https://pestech28.rf.gd/back/digivision/v2/ch15.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch16.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch17.png"],
        ["index2.html#https://pestech28.rf.gd/back/digivision/v2/yt/tao.html", "https://pestech28.rf.gd/back/digivision/v2/ch18.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["Jednotka", "Všeobecný obsah"],
        ["Dvojka", "Všeobecný a vzdelávací obsah"],
        ["TV JOJ", "Televízne programy a filmy"],
        ["JOJ Plus", "Americké televízne relácie"],
        ["JOJKO", "kreslené filmy"],
        ["Marzika", "Rodinný obsah"],
        ["Doma", "Televízne relácie pre ženy"],
        ["Dajto", "Televízne relácie pre mužov"],
        ["CS History", "Historický kanál"],
        ["CS Film", "Filmový kanál"],
        ["CS Mystery", "Mysteriózne filmy"],
        ["TA3", "Správy 24 hodín denne, 7 dní v týždni"],
        ["Bob Ross", "Joy of Painting"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "Weather info 24/7"],
        ["Cartoon Network", "Cartoons"],
        ["TNT", "Movies TV shows and sports"],
        ["Zen Music", "Traditional Asian music 24/7"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["https://sweet.tv/sk/tv/847-jednotka-hd", "https://pestech28.rf.gd/back/digivision/v2/ch1.png"],
        ["https://sweet.tv/sk/tv/848-dvojka-hd", "https://pestech28.rf.gd/back/digivision/v2/ch2.png"],
        ["https://media.joj.sk/embed/3Yz1gBQeKTs?autoplay=1", "https://pestech28.rf.gd/back/digivision/v2/ch3.png"],
        ["https://media.joj.sk/embed/DKZwKhUlV3i?autoplay=1", "https://pestech28.rf.gd/back/digivision/v2/ch4.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/jojko-1080.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch5.png"],
        ["https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://pestech28.rf.gd/back/digivision/v2/ch6.png"],
        ["https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://pestech28.rf.gd/back/digivision/v2/ch7.png"],
        ["https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://pestech28.rf.gd/back/digivision/v2/ch8.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_history-1080.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch9.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_film-1080.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch10.png"],
        ["index2.html#https://live.cdn.joj.sk/live/andromeda/cs_mystery-1080.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch11.png"],
        ["https://www.ta3.com/live", "https://pestech28.rf.gd/back/digivision/v2/ch12.png"],
        ["index2.html#https://aegis-cloudfront-1.tubi.video/bb1fc6ad-9948-42ea-aaf3-20acfcdeecac/playlist.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch13.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://pestech28.rf.gd/back/digivision/v2/ch14.png"],
        ["http://v2.weatherscan.net/", "https://pestech28.rf.gd/back/digivision/v2/ch15.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch16.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://pestech28.rf.gd/back/digivision/v2/ch17.png"],
        ["https://pestech28.rf.gd/back/digivision/v2/yt/tao.html", "https://pestech28.rf.gd/back/digivision/v2/ch18.png"],
    ];
    return channeldb;
}
