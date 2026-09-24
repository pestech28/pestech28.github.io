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
        ["index2.html#https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=11&ch_type=globalList", "https://pestech28.github.io/back/tvnet/beta/ch9.png"],
        ["index2.html#https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=12&ch_type=globalList", "https://pestech28.github.io/back/tvnet/beta/ch10.png"],
        ["index2.html#https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=81&ch_type=globalList", "https://pestech28.github.io/back/tvnet/beta/ch11.png"],
        ["index3.html#https://ebsonair.ebs.co.kr/ebs1familypc/familypc1m/playlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch12.png"],
        ["index3.html#https://ebsonair.ebs.co.kr/ebs2familypc/familypc1m/playlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch13.png"],
        ["index3.html#https://mbccbp.coreit.co.kr/cj_live/myStream.sdp/playlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch14.png"],
        ["index3.html#https://vod.ikbc.co.kr/KBCTV/tv/playlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch15.png"],
        ["index3.html#https://stream.intchoson.com/kctv/index.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch16.png"],
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
        ["KBS1", "일반 콘텐츠"],
        ["KBS2", "버라이어티 콘텐츠"],
        ["KBS24", "24시간 뉴스"],
        ["EBS1", "교육용 콘텐츠"],
        ["EBS2", "추가 교육 콘텐츠"],
        ["MBC", "드라마"],
        ["SBS", "버라이어티 콘텐츠"],
        ["KCTV", "조선의 TV"],
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
        ["https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=11&ch_type=globalList", "https://pestech28.github.io/back/tvnet/beta/ch9.png"],
        ["https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=12&ch_type=globalList", "https://pestech28.github.io/back/tvnet/beta/ch10.png"],
        ["https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=81&ch_type=globalList", "https://pestech28.github.io/back/tvnet/beta/ch11.png"],
        ["index2.html#https://ebsonair.ebs.co.kr/ebs1familypc/familypc1m/playlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch12.png"],
        ["index2.html#https://ebsonair.ebs.co.kr/ebs2familypc/familypc1m/playlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch13.png"],
        ["index2.html#https://mbccbp.coreit.co.kr/cj_live/myStream.sdp/playlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch14.png"],
        ["index2.html#https://vod.ikbc.co.kr/KBCTV/tv/playlist.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch15.png"],
        ["index2.html#https://stream.intchoson.com/kctv/index.m3u8", "https://pestech28.github.io/back/tvnet/beta/ch16.png"],
    ];
    return channeldb;
}
