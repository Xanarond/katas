function domainName(url){
    let regexp = new RegExp("(.*://|)(?:www\\.|)([\\w]+)([.](.*))");
    return url.replace(regexp, '$2')
}
console.log(domainName('http://google.co.jp'))