# 10 Life Lesson You Need to Understand - Sylvester stallone Quotes Motivation

    Success Demands 8 Things

    Hard Work
    Patience
    Sacrifice
    Consistency
    Discipline
    Self Confidence
    Positive Attitude

    https://www.youtube.com/shorts/WFB5VBTr8uI


    Js : https://www.youtube.com/watch?v=CEHAADyg9nQ&list=PLztuyNZ_ztjh_pIdtzCUUD0kIWGnUcVdc&index=8

# JavaScript Notes

                                Web Application Flow


    Front End Part (Client Side)        |       BackEnd Part (Server side)
                                        |
                                        |
    1: HTML - structure                 |       Server  |   Database
    2: CSS  - styling                   |               |
    3: Javascript   - functionality     |               |
                                        |          Javascript
                                        |
                                        |
                                        |       NodeJs - Javascript


    Mobile Application      -   JS  -   React Native
    Desktop Application     -   JS  -   Electron.js
    AI Application          -   JS  -   Langchain - js
    BlockChain              -   JS  -   Ethereum

# Questions / Answers:

    Question:   What is the Primary Language of our Computer?
    Answer:     0 or 1 is the main language code, all character convert into binary language.

    Question:   What is Language?
    Answer:     Language by which we communicate with Computer

    Question:   What is Program?
    Answer:     Program is set of instruction (A program is a sequence of instructions written to solve a problem or perform a specific task)

    Question:   What is software / Application?
    Answer:     Bunch of Program called Software or Application ( Software is a collection of programs, data, and instructions that tell a computer how to function. )

    Question:   What is Javascript?
    Answer:     Javascript is an scripting Language.

    Question:   What is Difference Between Words vs Keywords?

    Answer:     Definition of Keywords : JS main aisa words jinse kuch ho sakta hai woh sare words js ke keywords hian, Keyword asa word hota he jis sa koi matlab hota he, javascript main aasay words jin se hum kuch ker sakte hain woh JS ke keywords hain.
                Definition of Words : Js main jin words se kuch bhi kam nahi ker sakte hain to woh words hain. mean aasay words jin ka koi matlab nahi he worh words hain.

    Question:   What is Variable and why we use variable?
    Answer:     Variable hamary system ke RAM (memory) main particular location reserve karta hai and wahan data(value) store kartay hain.

    Question:   What is Function?
    Answer:     Set Or Bunch or instruction called function (A function is a self-contained, reusable block of code designed to perform a specific task.)

    Question:   what is keyword var and what pros and cons for it?
    Answer:     Definition and issue with "var"
                1: jab bhi hum "var" ko use kerte hain to "var apnay app ko "window" main add kerta hai.

                2: jab bhi hum "var" ko use kerte hain to "var" hamesha funcation scoped hota hai, mean yeah sirf funcation main use hota hai.

                3: jab bhi hum "var" ko use kerte hain to "var" ko same name se phire se re-declare ker sakte hain, and error nahi aaega.

                Example :
                var userName = "Fahim";
                var userName = "Faisal";

    Question:   What is let and what pros and cons for it?
    Answer:

    Question:   How many translator we have in computer?
    Answer:     We have Three Type of Translator in our computer
                1: Compiler
                2: Interpreter
                3: Assembler

    Question:   How Compiler Works?
    Answer:     Compiler is a translator, compiler work like if we have 1000 lines of code in our code file so Compiler always start read each and every line of code from top to bottom, and read each and every line of code first and then give output.
                Compiler work fast as compare to interpreter but droop back is that we face difficulties to find out error, because it's do not stop on error, it's compiler each and every line of code.

    Question:   How Interpreter Works?
    Answer:     Interpreter reds code line by line and it's give line by line output. it's run top to bottom , and left to right. benefit of Interpreter is that we can easily find out error in our code, because when Interpreter find out error, it stop work.

    Question:   Which translator use Javascript?
    Answer:     Javascript is an Interpreter Language, it's run from top to bottom and left to right line by line.

    Question:   How Javascript Runs?
    Answer:     Javascript run top to bottom and left to Write.

    Question:   Who developer Javascript?
    Answer:     JavaScript was created by American computer programmer Brendan Eich in May 1995 while working at Netscape Communications Corporation. The language was developed in just 10-15 days to add interactivity to the Netscape Navigator web browser.

# Definition
    ;       =========>  Semi colon (Statement Terminate)
    =       =========>  Assigning Operator
    //      =========>  Comment code (by this we can make code un-use, mean by this code will not run)
    ()      =========>  Parenthesis
    {}      =========>  Block of Statement/Curly Braces
    ""      =========>  Double Quotation
    ''      =========>  Single Quote
    ``      =========>  Back Tick/Template Literals

    ==      =========>  Equal Operator ==> data type check nhi kerta  hai.
    ===     =========>  Strict Equal ==>   data type check kerta hai.
    >       =========>  is greater than
    <       =========>  is less than
    <=      =========>  is less than or equal
    >=      =========>  is greater than or equal
    !       =========>  Not ==> Logical Operator
    !=      =========>  Not Equal  ==> data type check nhi kerta  hai.
    !==     =========>  Strict Not Equal  ==> data type check kerta hai.
    !===    =========>  

    \n      =========>  break line in Js
    Syntax  =========>  How to write a code? every language have different style to write a code, but concept can be similar,

# Difference between two language, how we can declare and initialize variable in JS and Python

    JS = var userName = "Muhammad Fahim";
    Python = userName = "Muhammad Fahim";

# What is difference between Declarations and Initializations?

    Declaration:    Declaration is a process of telling the compiler that a variable exists in the program. It includes the variable name and its data type.
    Initialization: Initialization is the process of assigning an initial value to a variable. It occurs after the declaration.

# We Have 3 types of keywords by which we can create Variables in Javascript.

    1: var
    2: let
    3: cont

# Variable Example = var

    // keyword,  parentheses,  curly bracket
    var userName = "Muhammad Fahim";

    var                 =>  keyword
    userName            =>  variable Name
    =                   =>  assigning Operator
    "Muhammad Fahim"    =>  variable Value
    ;                   =>  Semi colon (Statement Terminate)

# Variable Names Legal and Illegal

    1:  A variable name can't contain any spaces.
    2:  A variable name can contain only letters, numbers, dollar signs, and underscores.
    3:  Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
        For example, userAlert and myVar are legal.
    4:  Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a Rose.
        If you assign the string "Floribundas" to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.
    5:  I teach the camelCase naming convention. Why "camelCase"? Because there is a hump or two (or three) in the middle if the name is formed by more than one word.
        A camelCase name begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump. If you form a variable name with only one word, like response, there's no hump. It's a camel that's out of food.
        Please adopt the camelCase convention. It'll make your variable names more readable, and you'll be less likely to get variable names mixed up.
        Examples:
            userResponse
            userResponseTime
            userResponseTimeLimit
            response

# Alert Method

    alert("Hello World!"); - modal will appear with "Hello World!" message

    window.alert("Widnow.alert is also known as alert box");

# List of Javascript by default Method

    Their are few things or few method which are by default method of Javascript

    1: alter();
    2: console.log();
    3:

#   Increment / Decrement Operators in JavaScript 

    We have 2 kind on Operator in each type like:

    Increment   -->>    Plus    -->>     ++     ==>>    +1
    Decrement   -->>    Minus   -->>     --     ==>>    -1

    Pre     -->>    Pehlay
    Post    -->>    Baad
    
    PreIncrement    -->>    ++number
    PostIncrement   -->>    number++

    PreDecrement   -->>    --number
    PostDecrement   -->>    number--    

    var Number = 5

    Number = Number + 1 OR  Number++    //  Both do same things, but second method is only normal addition, this is not Increment like ++ or --

    Number++    //  6
    Number++    //  7
    Number++    //  8
    Number--    //  7

    var num = 5;
    var newNum = ++num; //  Pre Increment
    var newNum = --num; //  Pre Decrement

    var newNum = num++; //  Post Increment
    var newNum = num--; //  Post Decrement
