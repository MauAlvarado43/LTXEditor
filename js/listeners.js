document.addEventListener('click', (e) => {
    if(e.target.id == 'katex-input' || e.target.tagName == 'svg' || e.target.tagName == 'SPAN' || e.target.className == 'katex-input-container'){
        
        if(!inputActive)
            inputActive = true
            katexMathRenderInterval()
    }
    else if(e.target.className == 'btn-k'){

        if(e.target.className == 'btn-k') 
            inputActive = true

        if(interval) 
            clearInterval(interval)

        katex.render( katexInputString, document.getElementById('katex-input'), {
            throwOnError: false, displayMode: true
        })

    }
    else{

        inputActive = false

        if(interval) 
            clearInterval(interval)

        
        katex.render( katexInputString, document.getElementById('katex-input'), {
            throwOnError: false, displayMode: true
        })

    }
    
})

document.addEventListener('keydown', (e) => {
    if(inputActive){
        //DELETE
        if(e.keyCode == 8 && katexInputStringPosition != 0){

            if(katexInputString[katexInputStringPosition - 1] == '\\'){ return }
            
            if(katexInputString[katexInputStringPosition - 1] == '{'){
                for(var i = 0 ; i < katexInputString.length ; i++){
                    if(katexInputString[i] == '\\' && katexInputString[i + 1] == '}'){
                        katexInputString = katexInputString.slice(0, katexInputStringPosition - 2) + katexInputString.slice(katexInputStringPosition, i) + katexInputString.slice(i + 2, katexInputString.length)
                        katexInputStringPosition -= 2
                        break
                    }
                }
            }
            else if(katexInputString.slice(katexInputStringPosition - 11, katexInputStringPosition) == '\\end{cases}'){
                for(var i = katexInputStringPosition ; i >= 0 ; i--){
                    if(katexInputString.slice(i - 13, i) == '\\begin{cases}'){
                        katexInputString = katexInputString.slice(0, i - 13) + katexInputString.slice( katexInputStringPosition, katexInputString.length )
                        katexInputStringPosition = i - 13
                    }
                }
            }
            else if(katexInputString.slice(katexInputStringPosition - 12, katexInputStringPosition) == '\\end{matrix}'){
                for(var i = katexInputStringPosition ; i >= 0 ; i--){
                    if(katexInputString.slice(i - 14, i) == '\\begin{matrix}'){
                        katexInputString = katexInputString.slice(0, i - 14) + katexInputString.slice( katexInputStringPosition, katexInputString.length )
                        katexInputStringPosition = i - 14
                    }
                }
            }
            else if(katexInputString.slice(katexInputStringPosition - 13, katexInputStringPosition - 9) == '\\end'){
                let matrix = ['Vmatrix', 'vmatrix', 'Bmatrix', 'bmatrix', 'pmatrix']
                for(var i = 0 ; i < matrix.length ; i++){
                    if(katexInputString.slice(katexInputStringPosition - 8, katexInputStringPosition - 1) == matrix[i]){
                        for(var j = katexInputStringPosition ; j >= 0 ; j--){
                            if(katexInputString.slice(j - 15, j) == '\\begin{'+matrix[i]+'}'){
                                katexInputString = katexInputString.slice(0, j - 15) + katexInputString.slice( katexInputStringPosition, katexInputString.length )
                                katexInputStringPosition = j - 15
                                break
                            }
                        }
                        break
                    }       
                }
            }
            else if(katexInputString.slice(katexInputStringPosition - 16, katexInputStringPosition - 1) == '\\begin{vmatrix}'   || 
                    katexInputString.slice(katexInputStringPosition - 15, katexInputStringPosition) == '\\begin{vmatrix}'       ||
                    katexInputString.slice(katexInputStringPosition - 16, katexInputStringPosition - 1) == '\\begin{Vmatrix}'   || 
                    katexInputString.slice(katexInputStringPosition - 15, katexInputStringPosition) == '\\begin{Vmatrix}'       ||
                    katexInputString.slice(katexInputStringPosition - 16, katexInputStringPosition - 1) == '\\begin{bmatrix}'   || 
                    katexInputString.slice(katexInputStringPosition - 15, katexInputStringPosition) == '\\begin{bmatrix}'       ||
                    katexInputString.slice(katexInputStringPosition - 16, katexInputStringPosition - 1) == '\\begin{Bmatrix}'   || 
                    katexInputString.slice(katexInputStringPosition - 15, katexInputStringPosition) == '\\begin{Bmatrix}'       ||
                    katexInputString.slice(katexInputStringPosition - 16, katexInputStringPosition - 1) == '\\begin{pmatrix}'   || 
                    katexInputString.slice(katexInputStringPosition - 15, katexInputStringPosition) == '\\pegin{vmatrix}'){ return }
            else if(katexInputString[katexInputStringPosition - 1] == '}' && katexInputString[katexInputStringPosition - 2] == '\\'){
                for(var i = katexInputStringPosition - 2 ; i >= 0 ; i--){
                    if(katexInputString[i] == '{' && katexInputString[i - 1] == "\\"){
                        katexInputString = katexInputString.slice(0, i - 1) +  katexInputString.slice(katexInputStringPosition, katexInputString.length)
                        katexInputStringPosition = i - 1
                        break
                    }
                }
            }
            else if(katexInputString[katexInputStringPosition - 1] == '}') {
                let index = findKatexIndexHierarchyLeft(katexInputStringPosition - 1)
                if(index == -1) index = findKatexIndexHierarchyComplexLeft(katexInputStringPosition - 1)
                if(index == -1) index = findKatexExpressionBehind('^{', katexInputStringPosition)
                if(index == -1) index = findKatexExpressionBehind('_{', katexInputStringPosition)

                katexInputString = katexInputString.slice(0, index) + katexInputString.slice(katexInputStringPosition, katexInputString.length)
                katexInputStringPosition = index
            }
            else if(katexInputString.slice(katexInputStringPosition - 6, katexInputStringPosition - 1) == '\\left'){
                let delimitersClose = [')',']','⟩','|','⌉','⌋','⎱']
                for(var j = 0 ; j < delimitersClose.length ; j++){
                    for(var i = 0 ; i < katexInputString.length ; i++){
                        if(katexInputString.slice(i, i + 7) == "\\right" + delimitersClose[j]){
                            katexInputString = katexInputString.slice(0, katexInputStringPosition - 6) + katexInputString.slice(katexInputStringPosition, i) + katexInputString.slice(i + 7, katexInputString.length) 
                            katexInputStringPosition -= 6
                            break
                        }
                    }
                }
            }
            else if(katexInputString.slice(katexInputStringPosition - 7 , katexInputStringPosition - 1) == "\\right"){
                let delimitersOpen =  ['(','[','⟨','|','⌈','⌊','⎰']
                let delimitersClose = [')',']','⟩','|','⌉','⌋','⎱']
                for(var j = 0 ; j < delimitersClose.length ; j++){
                    if(delimitersClose[j] == katexInputString[katexInputStringPosition - 1]){
                        let n = 1   
                        for(var i = katexInputStringPosition - 2 ; i >= 0 ; i --) {
                            if(katexInputString[i] == delimitersClose[j]) 
                                n++ 
                            if(katexInputString[i] == delimitersOpen[j])
                                n--       
                            if(n == 0){
                                katexInputString = katexInputString.slice(0, i - 5) + katexInputString.slice(katexInputStringPosition, katexInputString.length) 
                                katexInputStringPosition = i - 5
                                break
                            }
                        }
                        break
                    }
                }

            }
            else if(katexInputString[katexInputStringPosition - 1] == '{' && katexInputString.slice(katexInputStringPosition - 8, katexInputStringPosition) == '\\dbinom{'){ return }
            else if(katexInputString[katexInputStringPosition - 1] == '{' && katexInputString.slice(katexInputStringPosition - 6, katexInputStringPosition) == '\\frac{'){ return }
            else if(katexInputString[katexInputStringPosition - 1] == '{' && katexInputString[katexInputStringPosition - 2] == '}'){ return }
            else if(katexInputString[katexInputStringPosition - 1] == '{' && katexInputString[katexInputStringPosition - 2] == '_'){
                let index = findKatexIndexHierarchyRight(katexInputStringPosition - 1)
                katexInputString = katexInputString.slice(0 , katexInputStringPosition - 2) + katexInputString.slice(index + 1, katexInputString.length)
                katexInputStringPosition -= 2
            }
            else if(katexInputString[katexInputStringPosition - 1] == '{' && katexInputString[katexInputStringPosition - 2] == '^'){
                let index = findKatexIndexHierarchyRight(katexInputStringPosition - 1)
                katexInputString = katexInputString.slice(0 , katexInputStringPosition - 2) + katexInputString.slice(index + 1, katexInputString.length)
                katexInputStringPosition -= 2
            }
            else if(katexInputString[katexInputStringPosition - 1] == '{'){
                let index = findKatexIndexHierarchyRight(katexInputStringPosition - 1)
                let index2 = findKatexIndexHierarchyLeft(index)
                katexInputString = katexInputString.slice(0, index2) + katexInputString.slice(katexInputStringPosition, index) + katexInputString.slice(index + 1, katexInputString.length)
                katexInputStringPosition = index2

                if(katexInputString[index2] == '^'){
                    let index = findKatexIndexHierarchyRight(index2)
                    katexInputString = katexInputString.slice(0, index2) + katexInputString.slice(index + 1, katexInputString.length)
                }
            }
            else if(katexInputString[katexInputStringPosition - 1] == '[' || katexInputString[katexInputStringPosition - 1] == ']'){}
            else{
                let findedSingleOperator = findSingleOperator(katexInputStringPosition, -1)
                if(findedSingleOperator != -1){
                    katexInputString = katexInputString.slice(0, katexInputStringPosition - findedSingleOperator) + katexInputString.slice(katexInputStringPosition, katexInputString.length)
                    katexInputStringPosition -= findedSingleOperator
                    katexMathRenderInterval()
                    return
                }
                
                let findedLetter = findLettersGreek(katexInputStringPosition, -1)
                if(findedLetter != -1) {
                    katexInputString = katexInputString.slice(0, katexInputStringPosition - findedLetter) + katexInputString.slice(katexInputStringPosition, katexInputString.length)
                    katexInputStringPosition -= findedLetter
                    katexMathRenderInterval()
                    return
                }

                let findedArrow = findArrowOperator(katexInputStringPosition, -1)
                if(findedArrow != -1) {
                    katexInputString = katexInputString.slice(0, katexInputStringPosition - findedArrow) + katexInputString.slice(katexInputStringPosition, katexInputString.length)
                    katexInputStringPosition -= findedArrow
                }
                else{
                    katexInputString = katexInputString.slice(0, katexInputStringPosition - 1) + katexInputString.slice(katexInputStringPosition, katexInputString.length)
                    minusPosition()
                }
            }
        }
        //SUPR -------- FRACTIONS WORK IN PROGRESS 
        else if(e.keyCode == 46 && katexInputStringPosition != katexInputString.length){

            let findedSingleOperator = findSingleOperator(katexInputStringPosition, 1)
            if(findedSingleOperator != -1){

                let findedSub = - 1
                
                if(katexInputString[findedSingleOperator] == '_'){

                    let n = 1

                    for(var i = findedSingleOperator + 2 ; i < katexInputString.length ; i++){

                        if(katexInputString[i] == '{')
                            n++
                        else if(katexInputString[i] == '}')
                            n--
                        
                        if(n == 0){
                            findedSub = i
                            break
                        }
                            
                    }       

                }

                if(findedSub!=-1 ){

                    if(katexInputString[findedSub + 1] != '^'){

                        katexInputString = katexInputString.slice(0, katexInputStringPosition) + katexInputString.slice(findedSub + 1, katexInputString.length)

                        katexMathRenderInterval()
                        return
                    }
                    else{
                        let n = 1

                        for(var i = findedSub + 3 ; i < katexInputString.length ; i++){

                            if(katexInputString[i] == '{')
                                n++
                            else if(katexInputString[i] == '}')
                                n--
                            
                            if(n == 0){
                                katexInputString = katexInputString.slice(0, katexInputStringPosition) + katexInputString.slice(i + 1, katexInputString.length)
                                break
                            }
                                
                        }   
                    }

                    katexMathRenderInterval()
                    return

                }

                katexInputString = katexInputString.slice(0, katexInputStringPosition) + katexInputString.slice(katexInputStringPosition + findedSingleOperator, katexInputString.length)
                katexMathRenderInterval()
                return
            }
            
            let findedLetter = findLettersGreek(katexInputStringPosition, 1)
            if(findedLetter != -1) {
                katexInputString = katexInputString.slice(0, katexInputStringPosition - findedLetter) + katexInputString.slice(katexInputStringPosition, katexInputString.length)
                katexMathRenderInterval()
                return
            }

            let findedArrow = findArrowOperator(katexInputStringPosition, 1)
            if(findedArrow != -1) {
                katexInputString = katexInputString.slice(0, katexInputStringPosition - findedArrow) + katexInputString.slice(katexInputStringPosition, katexInputString.length)
                katexMathRenderInterval()
                return
            }

            if(/[a-zA-Z]/.test(katexInputString[katexInputStringPosition]) || /[0-9]/.test(katexInputString[katexInputStringPosition])){
                katexInputString = katexInputString.slice(0, katexInputStringPosition ) + katexInputString.slice(katexInputStringPosition + 1, katexInputString.length)
                katexMathRenderInterval()
                return
            }

            if(findKatexExpressionFront('\\frac{', katexInputStringPosition)){
                return
            }
            
        }
        //NUMBERS
        else if(e.keyCode >= 48 && e.keyCode <= 57 && !e.shiftKey){
            katexInputString = katexInputString.slice(0, katexInputStringPosition) + e.key + katexInputString.slice(katexInputStringPosition, katexInputString.length)
            addPosition()
        }
        //LETTERS
        else if(e.keyCode >= 65 && e.keyCode <= 90 && !e.shiftKey){
            katexInputString = katexInputString.slice(0, katexInputStringPosition) + e.key + katexInputString.slice(katexInputStringPosition, katexInputString.length)
            addPosition()
        }
        //LEFT
        else if (e.keyCode == 37 && katexInputStringPosition > 0){
            minusPosition()
        }
        //RIGHT
        else if (e.keyCode == 39 && katexInputStringPosition < katexInputString.length){
            addPosition()
        }
        //SPACE
        else if(e.keyCode == 32){
            for(var i = 0 ; i < katexInputString.length ; i++){
                if(katexInputString.slice(i, i + 12) == '\\end{matrix}' || katexInputString.slice(i, i + 13) == '\\end{pmatrix}' || katexInputString.slice(i, i + 13) == '\\end{vmatrix}' || katexInputString.slice(i, i + 13) == '\\end{Bmatrix}' || katexInputString.slice(i, i + 13) == '\\end{bmatrix}' || katexInputString.slice(i, i + 13) == '\\end{Vmatrix}' || katexInputString.slice(i, i + 13) == '\\end{cases}'){
                    katexInputString = katexInputString.slice(0, katexInputStringPosition) + ' &  ' +katexInputString.slice(katexInputStringPosition, katexInputString.length) 
                    katexInputStringPosition += 4
                    break
                }
            }
        }
        //ENTER
        else if(e.keyCode == 13){
            for(var i = 0 ; i < katexInputString.length ; i++){
                if(katexInputString.slice(i, i + 12) == '\\end{matrix}' || katexInputString.slice(i, i + 13) == '\\end{pmatrix}' || katexInputString.slice(i, i + 13) == '\\end{vmatrix}'|| katexInputString.slice(i, i + 13) == '\\end{Bmatrix}' || katexInputString.slice(i, i + 13) == '\\end{bmatrix}' || katexInputString.slice(i, i + 13) == '\\end{Vmatrix}' || katexInputString.slice(i, i + 13) == '\\end{cases}'){
                    katexInputString = katexInputString.slice(0, katexInputStringPosition) + ' \\\\  ' +katexInputString.slice(katexInputStringPosition, katexInputString.length) 
                    katexInputStringPosition += 5
                    break
                }
            }
        }

        katexMathRenderInterval()
    }
})