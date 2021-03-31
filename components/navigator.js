window.getRoomProperties = () => {
    // Example decode { "room": "fynSYrvDvx0GGJK-_FPJz", "theme": "forest" , "owner": "true"}
    // https://codepen.io/redon77/pen/zNRxpJ?test=new - decoder for string
    //owner  = http://127.0.0.1:8080/?presentation=eyAicm9vbSI6ICJmeW5TWXJ2RHZ4MEdHSkstX0ZQSnoiLCAidGhlbWUiOiAiZm9yZXN0IiAsICJvd25lciI6ICJ0cnVlIn0=
    // none owner = http://127.0.0.1:8080/?presentation=eyAicm9vbSI6ICJmeW5TWXJ2RHZ4MEdHSkstX0ZQSnoiLCAidGhlbWUiOiAiZm9yZXN0IiAsICJvd25lciI6ICJmYWxzZSJ9
    const preloaded = 'N4AgRATg9lC2YC5wDMCeA7AygTQgNwBE8APABgHFyApAaQFoB9AMQAUqAvMAGnABcALAKaxBiFFAiCAzrzAgAvkA';
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const presentation = urlParams.get('presentation');
    const decompressed = atob(presentation)
    console.log(decompressed)
    const config = JSON.parse(decompressed);
    return config;
    // LZString.decompress(compressed);
}