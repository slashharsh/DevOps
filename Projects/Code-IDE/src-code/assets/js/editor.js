// Retrieve Elements
const consoleLogList = document.querySelector('.editor__console-logs');
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');
const bash = "46";
const c = "50";
const cpp = "54";
const java = "62";
const javascript = "63";
const php = "68";
const python = "71";
const BASE_URL = "http://40.80.89.241:2358/submissions";

// Setup Ace
let codeEditor = ace.edit("editorCode");
let stdinEditor = ace.edit("editorStdin")
let defaultCode = "";
let consoleMessages = [];
var lang_id = "";

let editorLib = {

    //clear Console
    clearConsoleScreen() {
        consoleMessages.length = 0;

        // Remove all elements in the log list
        while (consoleLogList.firstChild) {
            consoleLogList.removeChild(consoleLogList.firstChild);
        }
    },

    // Change Theme Dynamic
    getAndChangeTheme() {
        var value = document.getElementById("choose_theme");
        getTheme = value.options[value.selectedIndex].value;
        //console.log(getValue);
        // Theme
        codeEditor.setTheme("ace/theme/" + getTheme);
    },

    // Get Languge ID from DropDown
    getCodeLanguage() {
        var language = document.getElementById("choose_language");
        language_id = language.options[language.selectedIndex].value;
        console.log("Languge ID: " + language_id);
        lang_id = language_id;
        switch (language_id) {
            case "46":
                defaultCode = `echo "Hello World!" `
                codeEditor.setValue(defaultCode);
                codeEditor.session.setMode("ace/mode/sh")
                break;
            case "50":
                defaultCode = `#include <stdio.h>\nint main()\n{\n   printf("Hello World!");\n}`
                codeEditor.setValue(defaultCode);
                codeEditor.session.setMode("ace/mode/c_cpp")
                break;
            case "54":
                defaultCode = `#include <iostream>\nusing namespace std;\nint main()\n {\n  cout<<"Hello World!"; \n}`
                codeEditor.setValue(defaultCode);
                codeEditor.session.setMode("ace/mode/c_cpp")
                break;
            case "62":
                defaultCode = `public class Main{\npublic static void main(String args[])\n{\n  System.out.println("Hello World!");\n }\n}`
                codeEditor.setValue(defaultCode);
                codeEditor.session.setMode("ace/mode/java")
                break;
            case "63":
                defaultCode = `console.log("Hello World!");`
                codeEditor.setValue(defaultCode);
                codeEditor.session.setMode("ace/mode/javascript")
                break;
            case "68":
                defaultCode = `<?php\n echo "Hello World!";\n?>`
                codeEditor.setValue(defaultCode);
                codeEditor.session.setMode("ace/mode/php")
                break;
            case "71":
                defaultCode = `print("Hello World!")`
                codeEditor.setValue(defaultCode);
                codeEditor.session.setMode("ace/mode/python")
                break;
            default:
                defaultCode = `#include <stdio.h>\nint main()\n{\n  printf("Hello World!");\n}`
                codeEditor.setValue(defaultCode);
                codeEditor.session.setMode("ace/mode/c_cpp")

        }

    },

    // Post Request Data to Run Code
    codeRun(lang_id, userCode,stdinInput) {
        //console.log("Language Selected is: " + lang_id);
        let post_data = {
            source_code: userCode,
            language_id: lang_id,
            number_of_runs: "1",
            stdin: stdinInput,
            expected_output: null,
            cpu_time_limit: "2",
            cpu_extra_time: "0.5",
            wall_time_limit: "5",
            memory_limit: "128000",
            stack_limit: "64000",
            max_processes_and_or_threads: "60",
            enable_per_process_and_thread_time_limit: false,
            enable_per_process_and_thread_memory_limit: false,
            max_file_size: "1024",
        };
        //console.log(post_data);
        let request = $.ajax({
            url: BASE_URL,
            type: "post",
            data: post_data
        });
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        // Callback handler that will be called on success
        request.done(async function (response, textStatus, jqXHR) {
            // Log a message to the console
            //console.log("Hooray, it worked!");
            let token = response.token;
            await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec
            //console.log(3, "after 3 seconds");
            let second_request = $.ajax({
                url: BASE_URL + "/" + token,
                type: "get",
            });
            second_request.done(function (response) {
                if (response.stdout != null) {
                    //console.log("Output : ",response.stdout);
                    $("#ans").html("> Output:\n" + response.stdout);
                } else {
                    //console.log("Error : ",response.stderr);
                    $("#ans").html("> Output:\n" + response.stderr);
                }
                //console.log(response.stdout, response.stderr);
            });
        });
    },
    // Initialization
    init() {
        stdinEditor.session.setMode("ace/mode/text");
        codeEditor.session.setMode("ace/mode/javascript");
        defaultCode = `// Select a Language \n// Start writing your Code here! \n//Note: For entering Input use --> 'STD. INPUT'`
        codeEditor.setValue(defaultCode);
        codeEditor.setOptions({
            fontFamily: 'Inconsolata',
            fontSize: '17pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });
        stdinEditor.setOptions({
            fontFamily: 'Inconsolata',
            fontSize: '17pt',
        });
    }
}
editorLib.init();


// Events
executeCodeBtn.addEventListener('click', () => {
    // Clear console messages
    editorLib.clearConsoleScreen();

    // Get input from the code editor
    const userCode = codeEditor.getValue();
    // Get input from the stdin editor
    const stdinInput=stdinEditor.getValue();

    // Run the user code
    editorLib.codeRun(lang_id, userCode,stdinInput);

});

resetCodeBtn.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(defaultCode);

    // Clear console messages
    editorLib.clearConsoleScreen();
})
