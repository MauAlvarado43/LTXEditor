const openKeyboard = (evt, id) => {
    var i, tabcontent, tablinks

    tabcontent = document.getElementsByClassName("tabcontent")

    for (i = 0 ; i < tabcontent.length ; i++) {
      tabcontent[i].style.display = "none"
    }

    tablinks = document.getElementsByClassName("tablinks")

    for (i = 0 ; i < tablinks.length ; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    document.getElementById(id).style.display = "block"
    evt.currentTarget.className += " active"
  }

const findNextPosition = () => {
    if(katexInputString[katexInputStringPosition] == undefined){
        katexInputStringPosition = katexInputString.length - 1
    }
    if(katexInputString[katexInputStringPosition].match(/[a-z]/) || katexInputString[katexInputStringPosition].match(/[0-9]/)){
        katexInputStringPosition += 1
    }
    else if(katexInputString[katexInputStringPosition] == '{' || katexInputString[katexInputStringPosition] == '['){
        katexInputStringPosition += 1
    }
    else if(katexInputString[katexInputStringPosition] == '\\') {
        
        for(var i = katexInputStringPosition ; i < katexInputString.length ; i++) {
            if(katexInputString[i] == '{' || katexInputString[i] == '['){
                katexInputStringPosition = i + 1
                return
            }
        }
    }
    else if(katexInputString[katexInputStringPosition] == ']' || katexInputString[katexInputStringPosition] == '}') {

        for(var i = katexInputStringPosition ; i < katexInputString.length ; i++) {
            if(katexInputString[i] == '{' || katexInputString[i] == '['){
                katexInputStringPosition = i + 1
                return
            }
            else if(katexInputString[i] == '\\'){
                for(var i = katexInputStringPosition ; i < katexInputString.length ; i++) {
                    if(katexInputString[i] == '{' || katexInputString[i] == '['){
                        katexInputStringPosition = i + 1
                    }
                }
                return 
            }
            else if (katexInputString[i].match(/[a-z]/) || katexInputString[i].match(/[0-9]/)){
                katexInputStringPosition = i
                return
            }
            else if(katexInputString[i] == '}'){

                katexInputStringPosition = i + 1

                return
            }
        }

        katexInputStringPosition += 1
    }
    else {
        katexInputStringPosition += 1
    }
}

const findLastPosition = () => {
    if(katexInputString[katexInputStringPosition - 1] == undefined || katexInputString[katexInputStringPosition - 1].match(/[a-z]/) || katexInputString[katexInputStringPosition - 1].match(/[0-9]/)){
        katexInputStringPosition -= 1
    }
    else if(katexInputString[katexInputStringPosition - 1] == '}' || katexInputString[katexInputStringPosition - 1] == ']'){
        katexInputStringPosition -= 1
    }
    else if(katexInputString[katexInputStringPosition - 1] == '{' || katexInputString[katexInputStringPosition - 1] == '[') {
        for(var i = katexInputStringPosition - 1 ; i >= 0 ; i--) {
            if(katexInputString[i] == '}' || katexInputString[i] == ']' || katexInputString[i] == '\\'){
                katexInputStringPosition = i
                return
            }
        }
        katexInputStringPosition -= 1
    }
    else if(katexInputString[katexInputStringPosition - 1] == '^'){
    }
    else {
        katexInputStringPosition -= 1
    }
}

const addPosition = () => {

    if(findKatexExpressionFront('^{', katexInputStringPosition)){
        katexInputStringPosition += 2
    }
    else if(findKatexExpressionFront('}{', katexInputStringPosition)){
        katexInputStringPosition += 2
    }
    else if(findKatexExpressionFront('}^{', katexInputStringPosition)){
        katexInputStringPosition += 3
    }
    else if(findKatexExpressionFront('}}', katexInputStringPosition)){
        katexInputStringPosition += 2
    }
    else{
        // IF A SINGLE OPERATOR WAS FOUND
        let findedSingleOperator = findSingleOperator(katexInputStringPosition, 1)
        if(findedSingleOperator != -1){
            katexInputStringPosition += findedSingleOperator
            if(katexInputString[katexInputStringPosition] == '_')
                katexInputStringPosition += 1
            if(katexInputString[katexInputStringPosition] == '{' )
                katexInputStringPosition += 1
            return 
        }

        // IF A GREEK LETTER WAS FOUND
        let findedLetter = findLettersGreek(katexInputStringPosition, 1)
        if(findedLetter != -1) {
            katexInputStringPosition += findedLetter
            return
        }
            
        // IF AN ARROW OPERATOR WAS FOUND
        let findedArrow = findArrowOperator(katexInputStringPosition, 1)
        if(findedArrow != -1) 
            katexInputStringPosition += findedArrow
        else 
            findNextPosition()
    }

    if(katexInputString[katexInputStringPosition] == '\\' && katexInputString.slice(katexInputStringPosition, katexInputStringPosition + 5) == '\\left'){
        addPosition()
    }

}

const minusPosition = () => {

    if(katexInputStringPosition != 0 && katexInputString.slice(katexInputStringPosition - 6, katexInputStringPosition - 1) == '\\left' && katexInputString[katexInputStringPosition - 7] == '}'){
        katexInputStringPosition -= 7
    }
    else if(findKatexExpressionBehind('^{', katexInputStringPosition)){
        katexInputStringPosition -= 2
        if(katexInputString[katexInputStringPosition - 1] == '}') katexInputStringPosition -= 1
    } 
    else if(findKatexExpressionBehind('}}', katexInputStringPosition)){
        katexInputStringPosition -= 2
    }
    else{
        // IF A SINGLE OPERATOR WAS FOUND
        let findedSingleOperator = findSingleOperator(katexInputStringPosition, -1)
        if(findedSingleOperator != -1){
            katexInputStringPosition -= findedSingleOperator
            return 
        }

        // IF A GREEK LETTER WAS FOUND
        let findedLetter = findLettersGreek(katexInputStringPosition, -1)
        if(findedLetter != -1){
            katexInputStringPosition -= findedLetter
            return
        }
            
        // IF AN ARROW OPERATOR WAS FOUND
        let findedArrow = findArrowOperator(katexInputStringPosition, -1)
        if(findedArrow != -1) 
            katexInputStringPosition -= findedArrow
        else 
            findLastPosition()
    }
}