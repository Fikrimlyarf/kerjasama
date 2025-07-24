# First Move

Sebelum menjalankan test case cypress pastikan file cypress.env.json sudah dibuat, letaknya setara dengan cypress.config.js
dengan struktur isi seperti di bawah untuk mendatakan role user

## cypress.env.json

```python
{
    "kerjasama" : "", //isi dengan url website
    "listAkun": [
        {
            "id":"", //isi dengan id untuk role
            "role":"", // isi dengan role untuk login
            "username": "", // isi username role
            "password": "" // isi password role
        }
    ]
}
```
