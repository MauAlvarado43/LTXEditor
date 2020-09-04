var katexInputString = ''
var katexInputStringPosition = 0
var inputActive = false
var interval

const katexMathRender = (delimiter) => {
    document.getElementById('katex-input').innerHTML = ''

    let katexStringLeft = katexInputString.slice(0, katexInputStringPosition)
    let katexStringRight = katexInputString.slice(katexInputStringPosition, katexInputString.length)

    katex.render( (katexStringLeft + delimiter + katexStringRight).
    replace(/(\[\])/ig,"[\\color{blue}[?]]\\color{black}")
    .replace(/(\{\})/ig,"{\\color{blue}[?]\\color{black}}")
    .replace(/(\s\s\s)/ig,"{\\color{blue}[?]\\color{black}}")
    , document.getElementById('katex-input'), {
        throwOnError: false, displayMode: true
    })

}

const katexMathRenderInterval = () => {

    if(interval) 
        clearInterval(interval)

    katexMathRender("\\color{red}|\\color{black}")

    interval = setInterval(() => {
        katexMathRender("\\color{white}|\\color{black}")

        setTimeout(() => {
            
            katexMathRender("\\color{red}|\\color{black}")
            
        },500)

    },1000)

}

const addMathExpression = (expression, length) => {
    katexInputString = katexInputString.slice(0,katexInputStringPosition) + expression + katexInputString.slice(katexInputStringPosition, katexInputString.length)
    katexInputStringPosition += length
    katexMathRenderInterval()
}