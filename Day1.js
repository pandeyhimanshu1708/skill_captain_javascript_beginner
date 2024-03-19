function replaceJavaScriptWithES6(text) {
    const regex = /javascript/ig;
    const modifiedText = text.replace(regex, `ES6`);
    return modifiedText;
}


