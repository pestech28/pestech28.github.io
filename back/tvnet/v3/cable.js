function getchannels() {
    let channeldb = [
        ["index4.html", "NULL"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch1.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch2.png"],
        ["index3.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpnHDdvr.smil/playlist.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch3.png"],
        ["index2.html#https://sic.pt/direto", "https://pestech28.github.io/back/tvnet/v3/ch4.png"],
        ["index3.html#tvi", "https://pestech28.github.io/back/tvnet/v3/ch5.png"],
        ["index3.html#tvific", "https://pestech28.github.io/back/tvnet/v3/ch6.png"],
        ["index3.html#tvirel", "https://pestech28.github.io/back/tvnet/v3/ch7.png"],
        ["index3.html#tvivps", "https://pestech28.github.io/back/tvnet/v3/ch8.png"],
        ["index2.html#https://cnnportugal.iol.pt/direto", "https://pestech28.github.io/back/tvnet/v3/ch9.png"],
        ["index2.html#https://dadinhodetapioca.fun/play/cinemax.html", "https://pestech28.github.io/back/tvnet/v3/ch10.png"],
        ["index2.html#https://v2.rdse.lat/espn?si=0", "https://pestech28.github.io/back/tvnet/v3/ch11.png"],
        ["index2.html#https://dadinhodetapioca.fun/play/cartoonnetwork.html", "https://pestech28.github.io/back/tvnet/v3/ch12.png"],
        ["index3.html#https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch13.png"],
        ["index3.html#https://6836041ea1117.streamlock.net/cverde/cverde/playlist.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch14.png"],
        ["index3.html#https://media.cdntvms.com.br/record_nacional_sat/index.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch15.png"],
        ["index3.html#https://redebrasil.nuvemplay.live/hls/stream.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch16.png"],
        ["index3.html#https://pbs.lls.cdn.pbs.org/est/index.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch17.png"],
        ["index2.html#https://www.wwlp.com/watch-live/", "https://pestech28.github.io/back/tvnet/v3/ch18.png"],
        ["index2.html#https://www.newsnationnow.com/news-nation-live/", "https://pestech28.github.io/back/tvnet/v3/ch19.png"],
        ["index2.html#https://v2.weatherscan.net/", "https://pestech28.github.io/back/tvnet/v3/ch20.png"],
        ["index2.html#https://tvnow247.top/embed-r4/comedy-central", "https://pestech28.github.io/back/tvnet/v3/ch21.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch22.png"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch23.png"],
        ["index2.html#https://pestech28.github.io/back/tvnet/v3/yt/tao.html", "https://pestech28.github.io/back/tvnet/v3/ch24.png"],
        ["index.html", "NULL"],
    ];
    tviurl = tviget(1);
    tviurl = "index3.html#" + tviurl;
    channeldb[5][0] = tviurl;
    tvificurl = tviget(2);
    tvificurl = "index3.html#" + tvificurl;
    channeldb[6][0] = tvificurl;
    tvirelurl = tviget(3);
    tvirelurl = "index3.html#" + tvirelurl;
    channeldb[7][0] = tvirelurl;
    tvivmsurl = tviget(4);
    tvivmsurl = "index3.html#" + tvivmsurl;
    channeldb[8][0] = tvivmsurl;
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["RTP 1", "Conteúdo geral"],
        ["RTP 2", "Conteúdo variado"],
        ["RTP Notícias", "Notícias 24 horas por dia, 7 dias por semana."],
        ["SIC", "Telenovelas"],
        ["TVI", "Telenovelas e programas de reality show"],
        ["TVI Ficção", "Telenovelas"],
        ["TVI Reality", "programas de reality show"],
        ["V+", "Telenovelas e programas de reality show"],
        ["TV Cultura", "Conteúdo geral"],
        ["SBT", "Telenovelas e programas de jogos"],
        ["Record TV", "Telenovelas"],
        ["Rede Brasil", "Séries de TV e filmes clássicos"],
        ["PBS", "General Content"],
        ["WWLP", "Local news"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "Weather info 24/7"],
        ["Comedy Central", "TV Shows"],
        ["TNT", "Movies TV shows and sports"],
        ["Cartoon Network", "Cartoons"],
        ["Zen Music", "Traditional Asian music 24/7"],
        
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}

function getwebchannels() {
    let channeldb = [
        ["index2.html#https://streaming-live.rtp.pt/liverepeater/rtp1HD.smil/playlist.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch1.png"],
        ["index2.html#https://streaming-live.rtp.pt/liverepeater/rtp2HD.smil/playlist.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch2.png"],
        ["index2.html#https://streaming-live.rtp.pt/livetvhlsDVR/rtpnHDdvr.smil/playlist.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch3.png"],
        ["https://sic.pt/direto", "https://pestech28.github.io/back/tvnet/v3/ch4.png"],
        ["index2.html#tvi", "https://pestech28.github.io/back/tvnet/v3/ch5.png"],
        ["index2.html#tvific", "https://pestech28.github.io/back/tvnet/v3/ch6.png"],
        ["index2.html#tvirel", "https://pestech28.github.io/back/tvnet/v3/ch7.png"],
        ["index2.html#tvivps", "https://pestech28.github.io/back/tvnet/v3/ch8.png"],
        ["https://cnnportugal.iol.pt/direto", "https://pestech28.github.io/back/tvnet/v3/ch9.png"],
        ["https://dadinhodetapioca.fun/play/cinemax.html", "https://pestech28.github.io/back/tvnet/v3/ch10.png"],
        ["https://v2.rdse.lat/espn?si=0", "https://pestech28.github.io/back/tvnet/v3/ch11.png"],
        ["https://dadinhodetapioca.fun/play/cartoonnetwork.html", "https://pestech28.github.io/back/tvnet/v3/ch12.png"],
        ["index2.html#https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch13.png"],
        ["index2.html#https://6836041ea1117.streamlock.net/cverde/cverde/playlist.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch14.png"],
        ["index2.html#https://media.cdntvms.com.br/record_nacional_sat/index.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch15.png"],
        ["index2.html#https://redebrasil.nuvemplay.live/hls/stream.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch16.png"],
        ["index2.html#https://pbs.lls.cdn.pbs.org/est/index.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch17.png"],
        ["https://www.wwlp.com/watch-live/", "https://pestech28.github.io/back/tvnet/v3/ch18.png"],
        ["https://www.newsnationnow.com/news-nation-live/", "https://pestech28.github.io/back/tvnet/v3/ch19.png"],
        ["https://v2.weatherscan.net/", "https://pestech28.github.io/back/tvnet/v3/ch20.png"],
        ["https://tvnow247.top/embed-r4/comedy-central", "https://pestech28.github.io/back/tvnet/v3/ch21.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch22.png"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://pestech28.github.io/back/tvnet/v3/ch23.png"],
        ["https://pestech28.github.io/back/tvnet/v3/yt/tao.html", "https://pestech28.github.io/back/tvnet/v3/ch24.png"],
    ];
    tviurl = tviget(1);
    tviurl = "index3.html#" + tviurl;
    channeldb[5][0] = tviurl;
    tvificurl = tviget(2);
    tvificurl = "index3.html#" + tvificurl;
    channeldb[6][0] = tvificurl;
    tvirelurl = tviget(3);
    tvirelurl = "index3.html#" + tvirelurl;
    channeldb[7][0] = tvirelurl;
    tvivmsurl = tviget(4);
    tvivmsurl = "index3.html#" + tvivmsurl;
    channeldb[8][0] = tvivmsurl;
    return channeldb;
}

function tviget(flagger) {
    let url = "";
    if (flagger == 1) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI.m3u8";
    }
    if (flagger == 2) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI_Ficcao.m3u8";
    }
    if (flagger == 3) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/TVI_Reality.m3u8";
    }
    if (flagger == 4) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/Vmais_TVI.m3u8";
    }
    if (flagger == 5) {
        url = "https://raw.githubusercontent.com/LITUATUI/M3UPT/refs/heads/main/M3U/CNN_Portugal.m3u8";
    }
    
    try {
        xhr = new XMLHttpRequest();
        xhr.open("GET", url, false); 
        xhr.send(null);

        if (xhr.status === 200) {
            match = xhr.responseText.match(/https:\/\/\S+/);
            if (match) {
                return match[0];
            }
        }
    } catch (error) {
        console.error("Failed to fetch GitHub file synchronously:", error);
    }
    
    return null;
}