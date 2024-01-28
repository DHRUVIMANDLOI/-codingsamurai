document.addEventListener('DOMContentLoaded', function () {
    var screen = document.querySelector('#screen');
    var buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            var buttonText = button.innerText;

            if (buttonText === '×') {
                buttonText = '*';
            }

            if (buttonText === '÷') {
                buttonText = '/';
            }

            screen.value += buttonText;
        });
    });

    function trigFunction(func) {
        var radians = eval(screen.value);
        if (func === 'sin') {
            screen.value = Math.sin(radians);
        } else if (func === 'cos') {
            screen.value = Math.cos(radians);
        } else if (func === 'tan') {
            screen.value = Math.tan(radians);
        }
    }

    function pi() {
        screen.value = Math.PI;
    }

    function log() {
        screen.value = Math.log(eval(screen.value));
    }

    function sqrt() {
        screen.value = Math.sqrt(eval(screen.value));
    }

    function constant(value) {
        screen.value = Math[value];
    }

    function power() {
        screen.value = Math.pow(eval(screen.value), 2);
    }

    function fact() {
        var num = parseInt(screen.value);
        var f = 1;
        for (var i = 1; i <= num; i++) {
            f = f * i;
        }
        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }

    function clearScreen() {
        screen.value = '';
    }

    function appendOperator(operator) {
        // Check if the last character is an operator, and if true, replace it
        var lastChar = screen.value.charAt(screen.value.length - 1);
        if (isOperator(lastChar)) {
            screen.value = screen.value.slice(0, -1) + operator;
        } else {
            screen.value += operator;
        }
    }

   

    function appendDot() {
        // Check if the last character is a dot, and if true, do not append another one
        var lastChar = screen.value.charAt(screen.value.length - 1);
        if (lastChar !== '.') {
            screen.value += '.';
        }
    }

    function calculate() {
        try {
            screen.value = eval(screen.value);
        } catch (error) {
            screen.value = 'Error';
        }
    }

    // Assign functions to the global object for direct access from HTML
    window.trigFunction = trigFunction;
    window.pi = pi;
    window.log = log;
    window.sqrt = sqrt;
    window.constant = constant;
    window.power = power;
    window.fact = fact;
    window.backspc = backspc;
    window.clearScreen = clearScreen;
    window.appendOperator = appendOperator;
    window.appendDot = appendDot;
    window.calculate = calculate;
});
