let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let toggleIcon = document.getElementById('toggleIcon');

function generatePassword(len) {
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const char = "!+-_#$&+()/@~`%{}[]?`"

    const data = lower + upper + numeric + char

    let generator = ''; {
    for (let index = 0; index < len; index++)
        generator += data[Math.floor(Math.random() * data.length)]
    }
    return generator
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    alert('Password berhasil dibuat!')
}

function savePassword() {
    const textToCopy = password.value;
    if (textToCopy === '') {
        alert("Password belum digenerate!");
        return;
    }
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Password berhasil disalin!');
    }).catch(err => {
        console.error("Password gagal disalin.", err);
    });
}

    
