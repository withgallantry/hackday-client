window.getRoomProperties = () => {
    // Example decode { "room": "fynSYrvDvx0GGJK-_FPJz", "theme": "forest" , "owner": "true"}
    // https://codepen.io/redon77/pen/zNRxpJ?test=new - decoder for string
    //owner  = http://127.0.0.1:8080/?presentation=N4AgRATg9lC2YC5wDMCeA7AygTQgNwBE8APABgHFyApAaQFoB9AMQAUqAvMAGnABcALAKaxBiFFAiCAzrzAgeYKAHd0giGLC8IAV1EBfIA== 
    // none owner = http://127.0.0.1:8080/?presentation=N4AgRATg9lC2YC5wDMCeA7AygTQgNwBE8APABgHFyApAaQFoB9AMQAUqAvMAGnABcALAKaxBiFFAiCAzrzAgeYKAHd0giGLDIAhgBspogL5A
    const preloaded = 'N4AgRATg9lC2YC5wDMCeA7AygTQgNwBE8APABgHFyApAaQFoB9AMQAUqAvMAGnABcALAKaxBiFFAiCAzrzAgAvkA';
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const presentation = urlParams.get('presentation');
    const decompressed = LZString.decompressFromBase64(presentation);
    console.log(decompressed)
    const config = JSON.parse(decompressed);
    return config;
    // LZString.decompress(compressed);
}