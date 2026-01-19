const codeEditor = document.getElementById('codeEditor');
const consoleOutput = document.getElementById('consoleOutput');
const status = document.getElementById('status');
const lineCount = document.getElementById('lineCount');
const lineNumbers = document.getElementById('lineNumbers');
const langBtns = document.querySelectorAll('.lang-btn');
const runBtn = document.getElementById('runBtn');
const clearBtn = document.getElementById('clearBtn');
const resetBtn = document.getElementById('resetBtn');
const langStatus = document.getElementById('langStatus');
const userInfo = document.getElementById('userInfo');

const challenges = {
    python: `numbers = [1, 2, 3, 4, 5]
sum_val = 0

for i in range(len(numbers) + 1):
    sum_val += numbers[i]

print("Sum:", sum_val)`,

    c: `#include <stdio.h>

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = 5;
    int sum = 0;
    
    for(int i = 0; i <= size; i++) {
        sum += numbers[i];
    }
    
    printf("Sum: %d\\n", sum);
    return 0;
}`,

    java: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        
        for(int i = 0; i <= numbers.length; i++) {
            sum += numbers[i];
        }
        
        System.out.println("Sum: " + sum);
    }
}`
};

let currentLang = 'python';

// Login
function login() {
    const teamId = document.getElementById('teamId').value.trim();
    const regNo = document.getElementById('regNo').value.trim();
    if (teamId && regNo) {
        userInfo.textContent = `${teamId}`;
        showTerminal(teamId, regNo);
    } else {
        alert('⚠️ Enter Team ID & Reg No!');
    }
}

function demoLogin() {
    userInfo.textContent = 'DEMO-TEAM';
    showTerminal('DEMO-001', 'DEMO-REG');
}

function showTerminal(teamId, regNo) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('terminalPage').style.display = 'flex';
    consoleOutput.innerHTML = `✅ Welcome ${teamId}! Reg: ${regNo}\n🚀 Code Debug Terminal Ready!\nChoose language → Fix array bounds bug → RUN → WIN PRIZES!\n\n`;
    resetCode();
}

// Terminal Logic
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.dataset.lang;
        langStatus.textContent = currentLang.toUpperCase();
        resetCode();
    });
});

codeEditor.addEventListener('input', updateLineNumbers);
codeEditor.addEventListener('scroll', syncScroll);

function updateLineNumbers() {
    const lines = codeEditor.value.split('\n').length;
    lineCount.textContent = `${lines} lines`;
    lineNumbers.innerHTML = Array.from({length: Math.max(lines, 18)}, (_, i) => i + 1).join('\n');
}

function syncScroll() { lineNumbers.scrollTop = codeEditor.scrollTop; }

runBtn.addEventListener('click', runCode);
clearBtn.addEventListener('click', clearConsole);
resetBtn.addEventListener('click', resetCode);

function runCode() {
    status.textContent = 'Executing...';
    consoleOutput.innerHTML += `> Running ${currentLang.toUpperCase()} code...\n`;
    
    setTimeout(() => {
        const code = codeEditor.value.toLowerCase();
        const hasCorrectLoop = checkCorrectLoop(code);
        const hasCorrectSum = code.includes('15');
        
        if (hasCorrectLoop && hasCorrectSum) {
            consoleOutput.innerHTML += `<span class="success">🎉 CHALLENGE PASSED! Sum = 15 ✓</span>\n`;
            consoleOutput.innerHTML += `<span class="success">Array bounds bug fixed perfectly!</span>\n`;
            status.textContent = `${currentLang.toUpperCase()} ✓ PASSED`;
            runBtn.textContent = '✅ SOLVED';
        } else {
            consoleOutput.innerHTML += `<span class="error">❌ FAILED - Array out of bounds error detected!</span>\n`;
            consoleOutput.innerHTML += `<span class="error">Check your loop condition</span>\n`;
            status.textContent = `${currentLang.toUpperCase()} ❌ FAILED`;
        }
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }, 1200);
}

function checkCorrectLoop(code) {
    switch(currentLang) {
        case 'python': return code.includes('range(len(numbers))') && !code.includes('range(len(numbers) +');
        case 'c': return code.includes('i < size') && !code.includes('i <= size');
        case 'java': return code.includes('i < numbers.length') && !code.includes('i <= numbers.length');
        default: return false;
    }
}

function clearConsole() { consoleOutput.innerHTML = ''; }

function resetCode() {
    codeEditor.value = challenges[currentLang];
    updateLineNumbers();
    clearConsole();
    status.textContent = `${currentLang.toUpperCase()} Reset`;
    runBtn.textContent = '▶️ RUN';
}

codeEditor.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') runCode();
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = codeEditor.selectionStart;
        const end = codeEditor.selectionEnd;
        codeEditor.value = codeEditor.value.substring(0, start) + '    ' + codeEditor.value.substring(end);
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
    }
});

updateLineNumbers();
