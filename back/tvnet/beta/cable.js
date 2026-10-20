function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index3.html#https://pbs.lls.cdn.pbs.org/est/index.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch1.png"],
        ["index2.html#https://www.wwlp.com/watch-live/", "https://pestech28.github.io/back/tvnet/beta/ch2.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://pestech28.github.io/back/tvnet/beta/ch3.png"],
        ["index2.html#https://v2.weatherscan.net/", "https://pestech28.github.io/back/tvnet/beta/ch4.png"],
        ["index2.html#https://tvnow247.top/embed/e-entertainment-television", "https://pestech28.github.io/back/tvnet/beta/ch5.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch6.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch7.png"],
        ["index2.html#https://tvnow247.top/embed/fox-sports-1-usa", "https://pestech28.github.io/back/tvnet/beta/ch8.png"],
        ["index2.html#https://vod.tvp.pl/live,1/tvp-1,399697", "https://pestech28.github.io/back/tvnet/beta/ch9.png"],
        ["index2.html#https://vod.tvp.pl/live,1/tvp-2,399698", "https://pestech28.github.io/back/tvnet/beta/ch10.png"],
        ["index2.html#https://www.tvp.info/ogladaj-na-zywo", "https://pestech28.github.io/back/tvnet/beta/ch11.png"],
        ["index2.html#https://vod.tvp.pl/live,1/tvp-sport,399702", "https://pestech28.github.io/back/tvnet/beta/ch12.png"],
        ["index2.html#https://player.pl/live/tvn-hd,1908473", "https://pestech28.github.io/back/tvnet/beta/ch13.png"],
        ["index2.html#https://player.pl/live/polsat,11046756", "https://pestech28.github.io/back/tvnet/beta/ch14.png"],
        ["index3.html#https://cdn-s-lb2.pluscdn.pl/lv/1517830/349/hls/f03a76f3/masterlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch15.png"],
        ["index2.html#https://player.pl/live/tv-4,11046757", "https://pestech28.github.io/back/tvnet/beta/ch16.png"],
        ["index2.html#https://player.pl/live/tv-puls,9353728", "https://pestech28.github.io/back/tvnet/beta/ch17.png"],
        ["index3.html#https://stream.4fun.tv:8888/hls/4f.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch18.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["PBS", "General Content"],
        ["WWLP", "Local news"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "Weather info 24/7"],
        ["E!", "TV Shows"],
        ["TNT", "Movies TV shows and sports"],
        ["Cartoon Network", "Cartoons"],
        ["FOX Sports", "Sports"],
        ["TVP1", "Treść ogólna"],
        ["TVP2", "Programy rozrywkowe"],
        ["TVP Info", "Wiadomości 24/7"],
        ["TVP Sports", "Treści sportowe"],
        ["TVN", "Seriale i filmy"],
        ["Polsat", "Seriale, programy rozrywkowe, i filmy"],
        ["Polsat News", "Wiadomości 24/7"],
        ["TV4", "Seriale i filmy"],
        ["TV Pulse", "programy rozrywkowe i filmy"],
        ["4FUN", "Teledyski"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["index2.html#https://pbs.lls.cdn.pbs.org/est/index.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch1.png"],
        ["https://www.wwlp.com/watch-live/", "https://pestech28.github.io/back/tvnet/beta/ch2.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://pestech28.github.io/back/tvnet/beta/ch3.png"],
        ["https://v2.weatherscan.net/", "https://pestech28.github.io/back/tvnet/beta/ch4.png"],
        ["https://tvnow247.top/embed/e-entertainment-television", "https://pestech28.github.io/back/tvnet/beta/ch5.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch6.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch7.png"],
        ["https://tvnow247.top/embed/fox-sports-1-usa", "https://pestech28.github.io/back/tvnet/beta/ch8.png"],
        ["https://vod.tvp.pl/live,1/tvp-1,399697", "https://pestech28.github.io/back/tvnet/beta/ch9.png"],
        ["https://vod.tvp.pl/live,1/tvp-2,399698", "https://pestech28.github.io/back/tvnet/beta/ch10.png"],
        ["https://www.tvp.info/ogladaj-na-zywo", "https://pestech28.github.io/back/tvnet/beta/ch11.png"],
        ["https://vod.tvp.pl/live,1/tvp-sport,399702", "https://pestech28.github.io/back/tvnet/beta/ch12.png"],
        ["https://player.pl/live/tvn-hd,1908473", "https://pestech28.github.io/back/tvnet/beta/ch13.png"],
        ["https://player.pl/live/polsat,11046756", "https://pestech28.github.io/back/tvnet/beta/ch14.png"],
        ["index2.html#https://cdn-s-lb2.pluscdn.pl/lv/1517830/349/hls/f03a76f3/masterlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch15.png"],
        ["https://player.pl/live/tv-4,11046757", "https://pestech28.github.io/back/tvnet/beta/ch16.png"],
        ["https://player.pl/live/tv-puls,9353728", "https://pestech28.github.io/back/tvnet/beta/ch17.png"],
        ["index2.html#https://stream.4fun.tv:8888/hls/4f.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch18.png"],
    ];
    return channeldb;
}
