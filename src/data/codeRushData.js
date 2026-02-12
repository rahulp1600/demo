/* ========= CODE RUSH QUESTION BANK ========= */

// Set 1: Beginner / 1st Year / Non-CSE
export const CODE_RUSH_SET_1 = {
    Python: [
        { id: 1, title: "Hello World", prompt: "Write code to print 'Hello World'", solution: /print\s*\(\s*['"]Hello World['"]\s*\)/ },
        { id: 2, title: "Simple Math", prompt: "Write code to add two numbers 5 and 10 and print the result", solution: /print\s*\(\s*5\s*\+\s*10\s*\)|print\s*\(\s*15\s*\)/ },
        { id: 3, title: "Variables", prompt: "Create a variable 'name' with value 'ORSA' and print it", solution: /name\s*=\s*['"]ORSA['"]\s*print\s*\(\s*name\s*\)/s },
        { id: 4, title: "Lists", prompt: "Create a list 'nums' with 1, 2, 3 and print its length", solution: /nums\s*=\s*\[\s*1,\s*2,\s*3\s*\]\s*print\s*\(\s*len\s*\(\s*nums\s*\)\s*\)/s },
        { id: 5, title: "Conditional", prompt: "Print 'Yes' if 5 > 2, else 'No'", solution: /if\s*5\s*>\s*2\s*:\s*print\s*\(\s*['"]Yes['"]\s*\)\s*else\s*:\s*print\s*\(\s*['"]No['"]\s*\)/s },
        { id: 6, title: "Loops", prompt: "Print numbers from 0 to 4 using range()", solution: /for\s+\w+\s+in\s+range\s*\(\s*5\s*\)\s*:\s*print\s*\(\s*\w+\s*\)/s },
        { id: 7, title: "Functions", prompt: "Define a function 'greet' that prints 'Hi'", solution: /def\s+greet\s*\(\s*\)\s*:\s*print\s*\(\s*['"]Hi['"]\s*\)/s },
        { id: 8, title: "String Slice", prompt: "Print the first 3 chars of 'Python'", solution: /print\s*\(\s*['"]Python['"]\s*\[\s*:\s*3\s*\]\s*\)/ },
        { id: 9, title: "Dictionary", prompt: "Create dict 'd' with key 'a':1 and print value of 'a'", solution: /d\s*=\s*\{\s*['"]a['"]\s*:\s*1\s*\}\s*print\s*\(\s*d\s*\[\s*['"]a['"]\s*\]\s*\)/s },
        { id: 10, title: "Square Root", prompt: "Import math and print sqrt(16)", solution: /import\s+math\s+print\s*\(\s*math\.sqrt\s*\(\s*16\s*\)\s*\)/s }
    ],
    C: [
        { id: 1, title: "Hello World", prompt: "Write code to print 'Hello World'", solution: /printf\s*\(\s*['"]Hello World['"]\s*\)\s*;/ },
        { id: 2, title: "Integer Math", prompt: "Print result of 5 + 10", solution: /printf\s*\(\s*['"]%d['"]\s*,\s*5\s*\+\s*10\s*\)\s*;/ },
        { id: 3, title: "Variable", prompt: "Declare int n=10 and print it", solution: /int\s+\w+\s*=\s*10\s*;\s*printf\s*\(\s*['"]%d['"]\s*,\s*\w+\s*\)\s*;/s },
        { id: 4, title: "Character", prompt: "Declare char c='A' and print it", solution: /char\s+\w+\s*=\s*'A'\s*;\s*printf\s*\(\s*['"]%c['"]\s*,\s*\w+\s*\)\s*;/s },
        { id: 5, title: "Comparison", prompt: "Use if to print 'Y' if 5 > 2", solution: /if\s*\(\s*5\s*>\s*2\s*\)\s*\{\s*printf\s*\(\s*['"]Y['"]\s*\)\s*;\s*\}/s },
        { id: 6, title: "For Loop", prompt: "Print 'X' 3 times using for loop", solution: /for\s*\(\s*int\s+\w+\s*=\s*0\s*;\s*\w+\s*<\s*3\s*;\s*\w+\+\+\s*\)\s*\{\s*printf\s*\(\s*['"]X['"]\s*\)\s*;\s*\}/s },
        { id: 7, title: "Pointers", prompt: "Declare int x=5 and int *p = &x", solution: /int\s+\w+\s*=\s*5\s*;\s*int\s*\*\s*\w+\s*=\s*&\w+\s*;/s },
        { id: 8, title: "Arrays", prompt: "Declare int arr[3] = {1, 2, 3}", solution: /int\s+\w+\s*\[\s*3\s*\]\s*=\s*\{\s*1\s*,\s*2\s*,\s*3\s*\}\s*;/ },
        { id: 9, title: "Functions", prompt: "Define void f() { printf('Hi'); }", solution: /void\s+f\s*\(\s*\)\s*\{\s*printf\s*\(\s*['"]Hi['"]\s*\)\s*;\s*\}/s },
        { id: 10, title: "Sizeof", prompt: "Print sizeof(int)", solution: /printf\s*\(\s*['"]%(lu|d)['"]\s*,\s*sizeof\s*\(\s*int\s*\)\s*\)\s*;/ }
    ],
    Java: [
        { id: 1, title: "Hello World", prompt: "Write code to print 'Hello World'", solution: /System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*['"]Hello World['"]\s*\)\s*;/ },
        { id: 2, title: "Addition", prompt: "Print 5 + 10", solution: /System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*5\s*\+\s*10\s*\)\s*;/ },
        { id: 3, title: "String", prompt: "String s = 'Hi'; print s", solution: /String\s+\w+\s*=\s*['"]Hi['"]\s*;\s*System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*\w+\s*\)\s*;/s },
        { id: 4, title: "Boolean", prompt: "Print 5 > 2", solution: /System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*5\s*>\s*2\s*\)\s*;/ },
        { id: 5, title: "If-Else", prompt: "If 5 > 2 print 'A' else 'B'", solution: /if\s*\(\s*5\s*>\s*2\s*\)\s*System\s*\.\s*out\s*\.\s*print\s*\(\s*['"]A['"]\s*\)\s*;\s*else\s*System\s*\.\s*out\s*\.\s*print\s*\(\s*['"]B['"]\s*\)\s*;/s },
        { id: 6, title: "For Loop", prompt: "Print numbers 0 to 2", solution: /for\s*\(\s*int\s+\w+\s*=\s*0\s*;\s*\w+\s*<\s*3\s*;\s*\w+\+\+\s*\)\s*\{\s*System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*\w+\s*\)\s*;\s*\}/s },
        { id: 7, title: "Array Length", prompt: "int[] a = {1, 2}; print a.length", solution: /int\s*\[\s*\]\s*\w+\s*=\s*\{\s*1\s*,\s*2\s*\}\s*;\s*System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*\w+\.length\s*\)\s*;/s },
        { id: 8, title: "Scanner", prompt: "New Scanner(System.in)", solution: /new\s+Scanner\s*\(\s*System\s*\.\s*in\s*\)/ },
        { id: 9, title: "Class", prompt: "Define class Main { }", solution: /class\s+Main\s*\{\s*\}/ },
        { id: 10, title: "Method", prompt: "void run() { print('R'); }", solution: /void\s+run\s*\(\s*\)\s*\{\s*System\s*\.\s*out\s*\.\s*print\s*\(\s*['"]R['"]\s*\)\s*;\s*\}/s }
    ]
};

// Set 2: Advanced (2nd, 3rd, 4th Year CSE/CSM/CSD)
export const CODE_RUSH_SET_2 = {
    Python: [
        { id: 1, title: "Warmup", prompt: "Print 'Code Rush 2.0'", solution: /print\s*\(\s*['"]Code Rush 2\.0['"]\s*\)/ },
        { id: 2, title: "Arithmetic", prompt: "Calculate 15 modulo 4 and print it", solution: /print\s*\(\s*15\s*%\s*4\s*\)/ },
        { id: 3, title: "String Len", prompt: "Print length of string 'Algorithm'", solution: /print\s*\(\s*len\s*\(\s*['"]Algorithm['"]\s*\)\s*\)/ },
        { id: 4, title: "Check Even", prompt: "Write if condition to check if x is even (assume x exists)", solution: /if\s*x\s*%\s*2\s*==\s*0\s*:/ },
        { id: 5, title: "Loop Range", prompt: "Loop 1 to 5 using range()", solution: /for\s+\w+\s+in\s+range\s*\(\s*1\s*,\s*6\s*\):/ },
        { id: 6, title: "Function Return", prompt: "Define func 'add(a,b)' returning a+b", solution: /def\s+add\s*\(\s*a\s*,\s*b\s*\)\s*:\s*return\s+a\s*\+\s*b/s },
        { id: 7, title: "List Append", prompt: "Append 5 to list 'lst' [assumed]", solution: /lst\.append\s*\(\s*5\s*\)/ },
        { id: 8, title: "Type Check", prompt: "Print type of variable 'x'", solution: /print\s*\(\s*type\s*\(\s*x\s*\)\s*\)/ },
        { id: 9, title: "Import", prompt: "Import random module", solution: /import\s+random/ },
        { id: 10, title: "Input", prompt: "Take input into var 's'", solution: /s\s*=\s*input\s*\(\s*\)/ }
    ],
    C: [
        { id: 1, title: "Warmup", prompt: "Print 'Code Rush 2.0'", solution: /printf\s*\(\s*['"]Code Rush 2\.0['"]\s*\)\s*;/ },
        { id: 2, title: "Arithmetic", prompt: "Print 15 % 4", solution: /printf\s*\(\s*['"]%d['"]\s*,\s*15\s*%\s*4\s*\)\s*;/ },
        { id: 3, title: "String Len", prompt: "Print length of 'Algorithm' using strlen", solution: /printf\s*\(\s*['"]%d['"]\s*,\s*strlen\s*\(\s*['"]Algorithm['"]\s*\)\s*\)\s*;/ },
        { id: 4, title: "Check Even", prompt: "If x is even print 'E'", solution: /if\s*\(\s*x\s*%\s*2\s*==\s*0\s*\)\s*printf\s*\(\s*['"]E['"]\s*\)\s*;/ },
        { id: 5, title: "While Loop", prompt: "While x > 0 decrement x", solution: /while\s*\(\s*x\s*>\s*0\s*\)\s*x--\s*;/ },
        { id: 6, title: "Function", prompt: "Int func add(int a, int b) returns sum", solution: /int\s+add\s*\(\s*int\s+a\s*,\s*int\s+b\s*\)\s*\{\s*return\s+a\s*\+\s*b\s*;\s*\}/s },
        { id: 7, title: "Array Init", prompt: "Int array numbers size 5", solution: /int\s+numbers\s*\[\s*5\s*\]\s*;/ },
        { id: 8, title: "Float Print", prompt: "Print float f=3.14 to 2 decimal places", solution: /printf\s*\(\s*['"]%.2f['"]\s*,\s*f\s*\)\s*;/ },
        { id: 9, title: "Include", prompt: "Include math.h header", solution: /#include\s*<\s*math\.h\s*>/ },
        { id: 10, title: "Scanf", prompt: "Read integer into x", solution: /scanf\s*\(\s*['"]%d['"]\s*,\s*&x\s*\)\s*;/ }
    ],
    Java: [
        { id: 1, title: "Warmup", prompt: "Print 'Code Rush 2.0'", solution: /System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*['"]Code Rush 2\.0['"]\s*\)\s*;/ },
        { id: 2, title: "Arithmetic", prompt: "Print 15 % 4", solution: /System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*15\s*%\s*4\s*\)\s*;/ },
        { id: 3, title: "String Len", prompt: "Print length of 'Algorithm'", solution: /System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*['"]Algorithm['"]\.length\s*\(\s*\)\s*\)\s*;/ },
        { id: 4, title: "Check Even", prompt: "If x even print 'E'", solution: /if\s*\(\s*x\s*%\s*2\s*==\s*0\s*\)\s*System\s*\.\s*out\s*\.\s*print(ln)?\s*\(\s*['"]E['"]\s*\)\s*;/ },
        { id: 5, title: "While Loop", prompt: "While x > 0 decrement x", solution: /while\s*\(\s*x\s*>\s*0\s*\)\s*x--\s*;/ },
        { id: 6, title: "Method", prompt: "Int method add(int a, int b) returns sum", solution: /int\s+add\s*\(\s*int\s+a\s*,\s*int\s+b\s*\)\s*\{\s*return\s+a\s*\+\s*b\s*;\s*\}/s },
        { id: 7, title: "Array Init", prompt: "Int array numbers size 5", solution: /int\s*\[\s*\]\s*numbers\s*=\s*new\s*int\s*\[\s*5\s*\]\s*;/ },
        { id: 8, title: "Static", prompt: "Declare static int count = 0", solution: /static\s+int\s+count\s*=\s*0\s*;/ },
        { id: 9, title: "Import", prompt: "Import ArrayList", solution: /import\s+java\.util\.ArrayList\s*;/ },
        { id: 10, title: "Scanner", prompt: "Read int nextInt() from scanner sc", solution: /sc\.nextInt\s*\(\s*\)\s*;/ }
    ]
};
