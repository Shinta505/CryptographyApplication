// Fungsi untuk menampilkan menu sesuai nomor yang dipilih
function showMenu(menuNumber) {
    const menus = document.querySelectorAll('.menu-content'); // Mengambil semua elemen menu
    menus.forEach(menu => menu.style.display = 'none'); // Menyembunyikan semua menu
    document.getElementById('menu' + menuNumber).style.display = 'block'; // Menampilkan menu yang dipilih
}

// Caesar Cipher Encryption and Decryption
function encryptCaesarText(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 65 && char <= 90) { // Huruf besar
            result += String.fromCharCode(((char - 65 + shift) % 26) + 65);
        } else if (char >= 97 && char <= 122) { // Huruf kecil
            result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

function decryptCaesarText(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 65 && char <= 90) { // Huruf besar
            result += String.fromCharCode(((char - 65 - shift + 26) % 26) + 65);
        } else if (char >= 97 && char <= 122) { // Huruf kecil
            result += String.fromCharCode(((char - 97 - shift + 26) % 26) + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

function encryptCaesar() {
    const text = document.getElementById('caesarText').value;
    const shift = parseInt(document.getElementById('caesarKey').value);
    if (text === "" || shift === "") {
        alert("Teks dan kunci harus diisi!");
        return;
    }
    if (isNaN(shift)) {
        alert("Shift harus berupa angka!");
        return;
    }
    const encrypted = encryptCaesarText(text, shift);
    document.getElementById('caesarResult').innerText = encrypted;
}

function decryptCaesar() {
    const text = document.getElementById('caesarText').value;
    const shift = parseInt(document.getElementById('caesarKey').value);
    if (text === "" || shift === "") {
        alert("Teks dan kunci harus diisi!");
        return;
    }
    if (isNaN(shift)) {
        alert("Shift harus berupa angka!");
        return;
    }
    const decrypted = decryptCaesarText(text, shift);
    document.getElementById('caesarResult').innerText = decrypted;
}

// Vigenère Cipher Encryption and Decryption
function encryptVigenereText(text, key) {
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 65 && char <= 90) { // Huruf besar
            let shift = key.charCodeAt(keyIndex % key.length) - 65;
            result += String.fromCharCode(((char - 65 + shift) % 26) + 65);
            keyIndex++;
        } else if (char >= 97 && char <= 122) { // Huruf kecil
            let shift = key.charCodeAt(keyIndex % key.length) - 97;
            result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
            keyIndex++;
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

function decryptVigenereText(text, key) {
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 65 && char <= 90) { // Huruf besar
            let shift = key.charCodeAt(keyIndex % key.length) - 65;
            result += String.fromCharCode(((char - 65 - shift + 26) % 26) + 65);
            keyIndex++;
        } else if (char >= 97 && char <= 122) { // Huruf kecil
            let shift = key.charCodeAt(keyIndex % key.length) - 97;
            result += String.fromCharCode(((char - 97 - shift + 26) % 26) + 97);
            keyIndex++;
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

function encryptVigenere() {
    const text = document.getElementById('vigenereText').value; // Mengambil nilai dari input teks
    const key = document.getElementById('vigenereKey').value.replace(/\s+/g, ''); // Mengambil nilai dari input kunci dan menghapus spasi
    let result = ''; // Variabel untuk menyimpan hasil enkripsi

    // Validasi: Cek apakah kunci hanya mengandung huruf
    if (!/^[A-Za-z]+$/.test(key)) {
        alert("Kunci Vigenere hanya boleh mengandung huruf (A-Z, a-z)!");
        return;
    }

    if (text === "" || key === "") {
        alert("Teks dan kunci harus diisi!");
        return;
    }

    let keyIndex = 0; // Indeks untuk mengulangi kunci
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i); // Mengambil kode karakter dari teks 
        if (char >= 65 && char <= 90) { // Memeriksa apakah karakter adalah huruf besar
            result += String.fromCharCode(((char - 65 + (key.charCodeAt(keyIndex % key.length) - 65)) % 26) + 65); // Menghitung huruf yang dienkripsi dan menambahkannya ke hasil
            keyIndex++; // Mengupdate indeks kunci
        } else if (char >= 97 && char <= 122) { // Memeriksa apakah karakter adalah huruf kecil
            result += String.fromCharCode(((char - 97 + (key.charCodeAt(keyIndex % key.length) - 97)) % 26) + 97); // Menghitung huruf yang dienkripsi dan menambahkannya ke hasil
            keyIndex++; // Mengupdate indeks kunci
        } else {
            result += text.charAt(i); // Karakter non-huruf tetap sama
        }
    }
    document.getElementById('vigenereResult').innerText = result; // Menampilkan hasil enkripsi
}

function decryptVigenere() {
    const text = document.getElementById('vigenereText').value; // Mengambil nilai dari input teks
    const key = document.getElementById('vigenereKey').value.replace(/\s+/g, ''); // Mengambil nilai dari input kunci dan menghapus spasi
    let result = ''; // Variabel untuk menyimpan hasil dekripsi

    // Validasi: Cek apakah kunci hanya mengandung huruf
    if (!/^[A-Za-z]+$/.test(key)) {
        alert("Kunci Vigenere hanya boleh mengandung huruf (A-Z, a-z)!");
        return;
    }

    if (text === "" || key === "") {
        alert("Teks dan kunci harus diisi!");
        return;
    }

    let keyIndex = 0; // Indeks untuk mengulangi kunci
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i); // Mengambil kode karakter dari teks
        if (char >= 65 && char <= 90) { // Memeriksa apakah karakter adalah huruf besar
            result += String.fromCharCode(((char - 65 - (key.charCodeAt(keyIndex % key.length) - 65) + 26) % 26) + 65); // Menghitung huruf yang didekripsi dan menambahkannya ke hasil
            keyIndex++; // Mengupdate indeks kunci
        } else if (char >= 97 && char <= 122) { // Memeriksa apakah karakter adalah huruf kecil
            result += String.fromCharCode(((char - 97 - (key.charCodeAt(keyIndex % key.length) - 97) + 26) % 26) + 97); // Menghitung huruf yang didekripsi dan menambahkannya ke hasil
            keyIndex++; // Mengupdate indeks kunci
        } else {
            result += text.charAt(i); // Karakter non-huruf tetap sama
        }
    }
    document.getElementById('vigenereResult').innerText = result; // Menampilkan hasil dekripsi
}

// AES Encryption and Decryption Helpers
function strToArrayBuffer(str) {
    const encoder = new TextEncoder();
    return encoder.encode(str);
}

function arrayBufferToStr(buffer) {
    const decoder = new TextDecoder();
    return decoder.decode(buffer);
}

async function importKey(keyStr) {
    const keyBuffer = strToArrayBuffer(keyStr);
    return crypto.subtle.importKey(
        "raw",
        keyBuffer,
        { name: "AES-CBC" },
        false,
        ["encrypt", "decrypt"]
    );
}

function padKey(keyStr, length = 16) {
    return keyStr.padEnd(length, '0').slice(0, length);
}

async function encryptAESText(text, keyStr) {
    const textBuffer = strToArrayBuffer(text);
    const key = await importKey(padKey(keyStr));
    const iv = crypto.getRandomValues(new Uint8Array(16));

    try {
        const encryptedBuffer = await crypto.subtle.encrypt(
            { name: "AES-CBC", iv: iv },
            key,
            textBuffer
        );

        const encryptedArray = new Uint8Array(encryptedBuffer);
        const combinedBuffer = new Uint8Array(iv.length + encryptedArray.length);
        combinedBuffer.set(iv, 0);
        combinedBuffer.set(encryptedArray, iv.length);
        const encryptedBase64 = btoa(String.fromCharCode(...combinedBuffer));
        return encryptedBase64;
    } catch (e) {
        console.error("Error saat enkripsi AES: ", e);
        throw e;
    }
}

async function decryptAESText(encryptedBase64, keyStr) {
    const encryptedBytes = atob(encryptedBase64).split('').map(c => c.charCodeAt(0));
    const iv = new Uint8Array(encryptedBytes.slice(0, 16));
    const encryptedBuffer = new Uint8Array(encryptedBytes.slice(16)).buffer;
    const key = await importKey(padKey(keyStr));

    try {
        const decryptedBuffer = await crypto.subtle.decrypt(
            { name: "AES-CBC", iv: iv },
            key,
            encryptedBuffer
        );

        const decryptedText = arrayBufferToStr(decryptedBuffer);
        return decryptedText;
    } catch (e) {
        console.error("Error saat dekripsi AES: ", e);
        throw e;
    }
}

async function encryptAES() {
    const text = document.getElementById("aesText").value;
    const keyStr = padKey(document.getElementById("aesKey").value);

    if (text === "" || keyStr === "") {
        alert("Teks dan kunci harus diisi!");
        return;
    }

    try {
        const encryptedBase64 = await encryptAESText(text, keyStr);
        document.getElementById("aesResult").textContent = encryptedBase64;
    } catch {
        alert("Enkripsi AES gagal.");
    }
}

async function decryptAES() {
    const encryptedBase64 = document.getElementById("aesText").value;
    const keyStr = padKey(document.getElementById("aesKey").value);

    if (encryptedBase64 === "" || keyStr === "") {
        alert("Teks terenkripsi dan kunci harus diisi!");
        return;
    }

    try {
        const decryptedText = await decryptAESText(encryptedBase64, keyStr);
        document.getElementById("aesResult").textContent = decryptedText;
    } catch {
        alert("Dekripsi AES gagal! Kunci atau teks mungkin salah.");
    }
}

// XOR Encryption and Decryption with base64 encoding
function encryptXORText(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let textChar = text.charCodeAt(i);
        let keyChar = key.charCodeAt(i % key.length);
        let xorChar = textChar ^ keyChar;
        result += String.fromCharCode(xorChar);
    }
    return btoa(result);
}

function decryptXORText(base64Text, key) {
    let result = '';
    const text = atob(base64Text);
    for (let i = 0; i < text.length; i++) {
        let textChar = text.charCodeAt(i);
        let keyChar = key.charCodeAt(i % key.length);
        let xorChar = textChar ^ keyChar;
        result += String.fromCharCode(xorChar);
    }
    return result;
}

function encryptXOR() {
    const text = document.getElementById('xorText').value;
    const key = document.getElementById('xorKey').value;

    if (text === "" || key === "") {
        alert("Teks dan kunci harus diisi!");
        return;
    }

    if (key.length === 0) {
        alert("Key tidak boleh kosong!");
        return;
    }
    const encrypted = encryptXORText(text, key);
    document.getElementById('xorResult').innerText = encrypted;
}

function decryptXOR() {
    const base64Text = document.getElementById('xorText').value;
    const key = document.getElementById('xorKey').value;
    if (base64Text === "" || key === "") {
        alert("Teks dan kunci harus diisi!");
        return;
    }
    if (key.length === 0) {
        alert("Key tidak boleh kosong!");
        return;
    }
    try {
        const decrypted = decryptXORText(base64Text, key);
        document.getElementById('xorResult').innerText = decrypted;
    } catch {
        alert("Dekripsi XOR gagal! Pastikan teks terenkripsi valid dan kunci benar.");
    }
}

// Super Encryption and Decryption
async function superEncrypt() {
    const text = document.getElementById('superText').value;
    const key = document.getElementById('superKey').value.replace(/\s+/g, '');;

    if (text === "" || key === "") {
        alert("Teks dan kunci harus diisi!");
        return;
    }

    // Validasi: Cek apakah kunci hanya mengandung huruf
    if (!/^[A-Za-z]+$/.test(key)) {
        alert("Kunci hanya boleh mengandung huruf (A-Z, a-z)!");
        return;
    }

    try {
        // 1. Caesar Encryption
        const shift = key.length % 26;
        const caesarEncrypted = encryptCaesarText(text, shift);

        // 2. Vigenère Encryption
        const vigenereEncrypted = encryptVigenereText(caesarEncrypted, key);

        // 3. AES Encryption
        const aesEncrypted = await encryptAESText(vigenereEncrypted, key);

        // 4. XOR Encryption
        const xorEncrypted = encryptXORText(aesEncrypted, key);

        // Menampilkan hasil super enkripsi
        document.getElementById('superResult').innerText = xorEncrypted;
    } catch (e) {
        alert("Super Enkripsi gagal.");
        console.error("Super Enkripsi Error:", e);
    }
}

async function superDecrypt() {
    const encryptedText = document.getElementById('superText').value;
    const key = document.getElementById('superKey').value.replace(/\s+/g, '');;

    if (encryptedText === "" || key === "") {
        alert("Teks terenkripsi dan kunci harus diisi!");
        return;
    }

    // Validasi: Cek apakah kunci hanya mengandung huruf
    if (!/^[A-Za-z]+$/.test(key)) {
        alert("Kunci hanya boleh mengandung huruf (A-Z, a-z)!");
        return;
    }

    try {
        // 1. XOR Decryption
        const xorDecrypted = decryptXORText(encryptedText, key);

        // 2. AES Decryption
        const aesDecrypted = await decryptAESText(xorDecrypted, key);

        // 3. Vigenère Decryption
        const vigenereDecrypted = decryptVigenereText(aesDecrypted, key);

        // 4. Caesar Decryption
        const shift = key.length % 26;
        const caesarDecrypted = decryptCaesarText(vigenereDecrypted, shift);

        // Menampilkan hasil super dekripsi
        document.getElementById('superResult').innerText = caesarDecrypted;
    } catch (e) {
        alert("Super Dekripsi gagal! Pastikan kunci dan teks terenkripsi benar.");
        console.error("Super Dekripsi Error:", e);
    }
}