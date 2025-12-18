const params = {
    id: 'myid',
    type: 'mytype'
};

PokiSDK.shareableURL(params).then(url => {
    console.log(url);
    // This will return a URL like: https://poki.com/en/g/my-awesome-game?gdid=myid&gdtype=mytype
});   