# First Move

Sebelum menjalankan test case cypress jangan lupa membuat file cypress.env.json, letaknya setara dengan cypress.config.js

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