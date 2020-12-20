const modulo = {
    prop: 'my prop',
    config: {
        language: 'en',
        cache: 'true', 
    },
    setConfig: conf => {
        modulo.config = conf
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? 'yes' : 'no')
    }
} 

console.log(modulo)