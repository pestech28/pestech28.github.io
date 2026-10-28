function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index3.html#https://pbs.lls.cdn.pbs.org/est/index.m3u8", "https://pestech28.github.io/back/tvazul/ch1.png"],
        ["index2.html#https://www.wwlp.com/watch-live/", "https://pestech28.github.io/back/tvazul/ch2.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://pestech28.github.io/back/tvazul/ch3.png"],
        ["index2.html#https://v2.weatherscan.net/", "https://pestech28.github.io/back/tvazul/ch4.png"],
        ["index2.html#https://tvnow247.top/embed/e-entertainment-television", "https://pestech28.github.io/back/tvazul/ch5.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://pestech28.github.io/back/tvazul/ch6.png"],
        ["index2.html#https://tvnow247.top/embed-r4/cartoon-network", "https://pestech28.github.io/back/tvazul/ch7.png"],
        ["index3.html#https://media-tyo.hls.nhkworld.jp/hls/w/live/master.m3u8", "https://pestech28.github.io/back/tvazul/ch8.png"],
        ["index2.html#https://vod.tvp.pl/live,1/tvp-1,399697", "https://pestech28.github.io/back/tvazul/ch9.png"],
        ["index2.html#https://vod.tvp.pl/live,1/tvp-2,399698", "https://pestech28.github.io/back/tvazul/ch10.png"],
        ["index2.html#https://www.tvp.info/ogladaj-na-zywo", "https://pestech28.github.io/back/tvazul/ch11.png"],
        ["index2.html#https://vod.tvp.pl/live,1/tvp-sport,399702", "https://pestech28.github.io/back/tvazul/ch12.png"],
        ["index2.html#https://player.pl/live/tvn-hd,1908473", "https://pestech28.github.io/back/tvazul/ch13.png"],
        ["index2.html#https://player.pl/live/polsat,11046756", "https://pestech28.github.io/back/tvazul/ch14.png"],
        ["index3.html#https://cdn-s-lb2.pluscdn.pl/lv/1517830/349/hls/f03a76f3/masterlist.m3u8", "https://pestech28.github.io/back/tvazul/ch15.png"],
        ["index2.html#https://player.pl/live/tv-4,11046757", "https://pestech28.github.io/back/tvazul/ch16.png"],
        ["index2.html#https://player.pl/live/tv-puls,9353728", "https://pestech28.github.io/back/tvazul/ch17.png"],
        ["index3.html#https://stream.4fun.tv:8888/hls/4f.m3u8", "https://pestech28.github.io/back/tvazul/ch18.png"],
        ["index2.html#http://mov3.co/embednhk.html?nochat=1", "https://pestech28.github.io/back/tvazul/ch19.png"],
        ["index3.html#https://media-tyo.hls.nhkworld.jp/hls/w/live/master.m3u8", "https://pestech28.github.io/back/tvazul/ch20.png"],
        ["index2.html#http://mov3.co/embedntv.html", "https://pestech28.github.io/back/tvazul/ch21.png"],
        ["index2.html#http://mov3.co/embedtvasahi.html", "https://pestech28.github.io/back/tvazul/ch22.png"],
        ["index2.html#http://mov3.co/embedtbs.html", "https://pestech28.github.io/back/tvazul/ch23.png"],
        ["index2.html#http://mov3.co/embedtvtokyo.html", "https://pestech28.github.io/back/tvazul/ch24.png"],
        ["index2.html#http://mov3.co/embedfujitv.html", "https://pestech28.github.io/back/tvazul/ch25.png"],
        ["index2.html#https://ok.ru/videoembed/16516993981959", "https://pestech28.github.io/back/tvazul/ch26.png"],
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
        ["Comedy Central", "Comedy Shows"],
        ["TNT", "Movies TV shows and sports"],
        ["Cartoon Network", "Cartoons"],
        ["NHK World", "Content about Japan in English. 日本に関する英語のコンテンツ。"],
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
        ["NHK-G", "一般的なコンテンツ"],
        ["NHK-E", "教育コンテンツ"],
        ["NTV", "テレビ番組とニュース"],
        ["TV Asahi", "バラエティ番組"],
        ["TBS", "テレビ番組"],
        ["TV Tokyo", "テレビ番組とアニメ"],
        ["Fuji TV", "テレビ番組とアニメ"],
        ["Tokyo MX", "アニメ"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["index2.html#https://pbs.lls.cdn.pbs.org/est/index.m3u8", "https://pestech28.github.io/back/tvazul/ch1.png"],
        ["https://www.wwlp.com/watch-live/", "https://pestech28.github.io/back/tvazul/ch2.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://pestech28.github.io/back/tvazul/ch3.png"],
        ["https://v2.weatherscan.net/", "https://pestech28.github.io/back/tvazul/ch4.png"],
        ["https://tvnow247.top/embed/e-entertainment-television", "https://pestech28.github.io/back/tvazul/ch5.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://pestech28.github.io/back/tvazul/ch6.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://pestech28.github.io/back/tvazul/ch7.png"],
        ["https://tvnow247.top/embed/fox-sports-1-usa", "https://pestech28.github.io/back/tvazul/ch8.png"],
        ["index2.html#https://stream8.cinerama.uz/1448/playlist.m3u8", "https://pestech28.github.io/back/tvazul/ch9.png"],
        ["https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=11&ch_type=globalList", "https://pestech28.github.io/back/tvazul/ch10.png"],
        ["https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=12&ch_type=globalList", "https://pestech28.github.io/back/tvazul/ch11.png"],
        ["https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=81&ch_type=globalList", "https://pestech28.github.io/back/tvazul/ch12.png"],
        ["index2.html#https://ebsonair.ebs.co.kr/ebs1familypc/familypc1m/playlist.m3u8", "https://pestech28.github.io/back/tvazul/ch13.png"],
        ["index2.html#https://ebsonair.ebs.co.kr/ebs2familypc/familypc1m/playlist.m3u8", "https://pestech28.github.io/back/tvazul/ch14.png"],
        ["index2.html#http://vod.mpmbc.co.kr:1935/live/encoder-tv/playlist.m3u8", "https://pestech28.github.io/back/tvazul/ch15.png"],
        ["index2.html#https://vod.ikbc.co.kr/KBCTV/tv/playlist.m3u8", "https://pestech28.github.io/back/tvazul/ch16.png"],
    ];
    return channeldb;
}
