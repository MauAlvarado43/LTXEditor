const lettersGeek = [
    "\\Alpha ",
    "\\Beta ",
    "\\Gamma ",
    "\\Delta ",
    "\\Epsilon ",
    "\\Zeta ",
    "\\Eta ",
    "\\Theta ",
    "\\Iota ",
    "\\Kappa ",
    "\\Lambda ",
    "\\Mu ",
    "\\Nu ",
    "\\Xi ",
    "\\Omicron ",
    "\\Pi ",
    "\\Rho ",
    "\\Sigma ",
    "\\Tau ",
    "\\Upsilon ",
    "\\Phi ",
    "\\Chi ",
    "\\Psi ",
    "\\Omega ",
    "\\varGamma ",
    "\\varDelta ",
    "\\varTheta ",
    "\\varLambda ",
    "\\varXi ",
    "\\varPi ",
    "\\varSigma ",
    "\\varUpsilon ",
    "\\varPhi ",
    "\\varPsi ",
    "\\varOmega ",
    "\\alpha ",
    "\\beta ",
    "\\gamma ",
    "\\delta ",
    "\\epsilon ",
    "\\zeta ",
    "\\eta ",
    "\\theta ",
    "\\iota ",
    "\\kappa ",
    "\\lambda ",
    "\\mu ",
    "\\nu ",
    "\\xi ",
    "\\omicron ",
    "\\pi ",
    "\\rho ",
    "\\sigma ",
    "\\tau ",
    "\\upsilon ",
    "\\phi ",
    "\\chi ",
    "\\psi ",
    "\\omega ",
    "\\varepsilon ",
    "\\varkappa ",
    "\\vartheta ",
    "\\thetasym ",
    "\\varpi ",
    "\\varrho ",
    "\\varsigma ",
    "\\varphi ",
    "\\digamma ",
    "\\imath ",
    "\\nabla ",
    "\\Reals ",
    "\\text{\\OE} ",
    "\\jmath ",
    "\\partial ",
    "\\image ",
    "\\wp ",
    "\\text{\\o} ",
    "\\aleph ",
    "\\weierp ",
    "\\text{\\O} ",
    "\\alef ",
    "\\Finv ",
    "\\N ",
    "\\Z ",
    "\\text{\\ss} ",
    "\\alefsym ",
    "\\cnums ",
    "\\text{\\aa} ",
    "\\natnums ",
    "\\text{\\i} ",
    "\\beth ",
    "\\Complex ",
    "\\R ",
    "\\text{\\AA} ",
    "\\text{\\j} ",
    "\\gimel ",
    "\\ell ",
    "\\Re ",
    "\\text{\\ae} ",
    "\\daleth ",
    "\\hbar ",
    "\\real ",
    "\\text{\\AE} ",
    "\\eth ",
    "\\hslash ",
    "\\reals ",
    "\\text{\\oe} ",
    "\\mho ",
]

const simpleSigns = [
    "\s\s\s",
    " & ",
    "\\begin{matrix}",
    "\\end{matrix}",
    "\\begin{pmatrix}",
    "\\end{pmatrix}",
    "\\begin{vmatrix}",
    "\\end{vmatrix}",
    "\\begin{bmatrix}",
    "\\end{bmatrix}",
    "\\begin{Bmatrix}",
    "\\end{Bmatrix}",
    "\\begin{Vmatrix}",
    "\\end{Vmatrix}",
    "\\begin{cases}",
    "\\end{cases}",
    " \\\\ ",
    "\\left(",
    "\\right)",
    "\\left[",
    "\\right]",
    "\\{",
    "\\}",
    "\\left⟨",
    "\\right⟩",
    "\\left|",
    "\\right|",
    "\\lt",
    "\\gt",
    "\\left⌈",
    "\\right⌉",
    "\\left⌊",
    "\\right⌋",
    "\\left⎰",
    "\\right⎱",
    "\\lBrace ",
    "\\rBrace ",
    "\\circ ",
    "\\backprime ",
    "\\colon ",
    "\\% ",
    "\\centerdot ",
    "\\bullet ",
    "\\dots ",
    "\\ddots ",
    "\\vdots ",
    "\\dotsb ",
    "\\text{\\S} ",
    "\\times ",
    "\\pm ",
    "\\measuredangle ",
    "\\bot ",
    "\\div ",
    "\\not =",
    "\\bmod",
    "\\equiv",
    "\\int ",
    "\\bigotimes ",
    "\\bigoplus ",
    "\\bigodot ",
    "\\biguplus ",
    "\\bigvee ",
    "\\bigwedge ",
    "\\bigcap ",
    "\\bigcup ",
    "\\bigsqcup ",
    "\\iint ",
    "\\iiint ",
    "\\oint ",
    "\\oiint ",
    "\\oiiint ",
    "\\leqslant ",
    "\\geqslant ",
    "\\leq ",
    "\\geq ",
    "\\gg ",
    "\\sum",
    "\\prod",
    "\\coprod",
    "\\int",
    "\\lim",
    "\\ln",
    "\\log",
    "\\ll ",
    "\\approxeq ",
    "\\approx ",
    "\\to ",
    "\\infty ",
    "\\partial ",
    "\\forall ",
    "\\exists ",
    "\\nexists ",
    "\\in ",
    "\\notin ",
    "\\complement ",
    "\\subset ",
    "\\supset ",
    "\\mid ",
    "\\lor ",
    "\\ni ",
    "\\therefore ",
    "\\because ",
    "\\mapsto ",
    "\\to ",
    "\\gets ",
    "\\leftrightarrow ",
    "\\notni ",
    "\\empty ",
    "\\varnothing ",
    "\\implies ",
    "\\impliedby ",
    "\\iff ",
    "\\lnot ",
    "\\sin ",
    "\\cos ",
    "\\tan ",
    "\\csc ",
    "\\sec ",
    "\\cot ",
    "\\arcsin ",
    "\\arccos ",
    "\\arctan ",
    "\\sinh ",
    "\\cosh ",
    "\\tanh "
]

const arrowOperators = [
    "\\circlearrowleft ",
    "\\circlearrowright ",
    "\\curvearrowleft ",
    "\\curvearrowright ",
    "\\Darr ",
    "\\dArr ",
    "\\darr ",
    "\\dashleftarrow ",
    "\\dashrightarrow ",
    "\\downarrow ",
    "\\Downarrow ",
    "\\downdownarrows ",
    "\\downharpoonleft ",
    "\\downharpoonright ",
    "\\gets ",
    "\\Harr ",
    "\\hArr ",
    "\\harr ",
    "\\hookleftarrow ",
    "\\hookrightarrow ",
    "\\iff ",
    "\\impliedby ",
    "\\implies ",
    "\\Larr ",
    "\\lArr ",
    "\\larr ",
    "\\leadsto ",
    "\\leftarrow ",
    "\\Leftarrow ",
    "\\leftarrowtail ",
    "\\leftharpoondown ",
    "\\leftharpoonup ",
    "\\leftleftarrows ",
    "\\leftrightarrow ",
    "\\Leftrightarrow ",
    "\\leftrightarrows ",
    "\\leftrightharpoons ",
    "\\leftrightsquigarrow ",
    "\\Lleftarrow ",
    "\\longleftarrow ",
    "\\Longleftarrow ",
    "\\longleftrightarrow ",
    "\\Longleftrightarrow ",
    "\\longmapsto ",
    "\\longrightarrow ",
    "\\Longrightarrow ",
    "\\looparrowleft ",
    "\\looparrowright ",
    "\\Lrarr ",
    "\\lrArr ",
    "\\lrarr ",
    "\\Lsh ",
    "\\mapsto ",
    "\\nearrow ",
    "\\nleftarrow ",
    "\\nLeftarrow ",
    "\\nleftrightarrow ",
    "\\nLeftrightarrow ",
    "\\nrightarrow ",
    "\\nRightarrow ",
    "\\nwarrow ",
    "\\Rarr ",
    "\\rArr ",
    "\\rarr ",
    "\\restriction ",   
    "\\rightarrow ",
    "\\Rightarrow ",
    "\\rightarrowtail ",
    "\\rightharpoondown ",
    "\\rightharpoonup ",
    "\\rightleftarrows ",
    "\\rightleftharpoons ",
    "\\rightrightarrows ",
    "\\rightsquigarrow ",
    "\\Rrightarrow ",
    "\\Rsh ",
    "\\searrow ",
    "\\swarrow ",
    "\\to ",
    "\\twoheadleftarrow ",
    "\\twoheadrightarrow ",
    "\\Uarr ",
    "\\uArr ",
    "\\uarr ",
    "\\uparrow ",
    "\\Uparrow ",
    "\\updownarrow ",
    "\\Updownarrow ",
    "\\upharpoonleft ",
    "\\upharpoonright ",
    "\\upuparrows ",
]


const findKatexExpressionBehind = (expression, startIndex) => {
    if(expression == katexInputString.slice(startIndex - expression.length, startIndex)) return true
    else return false
}

const findKatexExpressionFront = (expression, startIndex) => {
    if(expression == katexInputString.slice(startIndex, startIndex + expression.length)) return true
    else return false
}

const findKatexIndexHierarchyRight = (startIndex) => {

    let n = 0

    for(var i = startIndex ; i < katexInputString.length ; i++){

        if(katexInputString[i] == '{')
            n++

        if(katexInputString[i] =='}'){
            n--
            if(n == 0) return i
        }

    }

    return -1
}

const findKatexIndexHierarchyComplexLeft = (startIndex) => {

    let n = 0

    for(var i = startIndex; i >= 0; i--){

        if(katexInputString[i] == '{')
            n--

        if(katexInputString[i] == '}')
            n++

        if(katexInputString[i] =='\\'){
            if(n == 0) return i
        }

    }

    return -1

}

const findKatexIndexHierarchyLeft = (startIndex) => {

    let n = 0

    for(var i = startIndex; i >= 0; i--){

        if(katexInputString[i] == '}')
            n++

        if(katexInputString[i] =='\\'){
            n--
            if(n == 0) return i
        }

    }

    return -1

}

const findLettersGreek = (position, direction) => {
    for(var i = 0 ; i < lettersGeek.length ; i++){
        if(direction == -1){
            if(findKatexExpressionBehind(lettersGeek[i], position)) return lettersGeek[i].length
        }
        else{
            if(findKatexExpressionFront(lettersGeek[i], position)) return lettersGeek[i].length
        }
    }
    return -1
}

const findSingleOperator = (position, direction) => {
    for(var i = 0 ; i < simpleSigns.length ; i++){
        if(direction == -1){
            if(findKatexExpressionBehind(simpleSigns[i], position)) return simpleSigns[i].length
        }
        else{
            if(findKatexExpressionFront(simpleSigns[i], position)) return simpleSigns[i].length
        }
    }
    return -1
}

const findArrowOperator = (position, direction) => {
    for(var i = 0 ; i < arrowOperators.length ; i++){
        if(direction == -1){
            if(findKatexExpressionBehind(arrowOperators[i], position)) return arrowOperators[i].length
        }
        else{
            if(findKatexExpressionFront(arrowOperators[i], position)) return arrowOperators[i].length
        }
    }
    return -1
}