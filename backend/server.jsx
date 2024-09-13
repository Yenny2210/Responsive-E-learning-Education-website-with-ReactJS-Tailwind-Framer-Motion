// backend/server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json()); // Para manejar JSON

// Conectar a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Tu usuario de MySQL
    password: 'password',  // Tu contraseña de MySQL
    database: 'mi_base_de_datos', // Tu base de datos
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: 'Error en el servidor' });
        if (results.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) return res.status(401).json({ error: 'Contraseña incorrecta' });

        // Crear un token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, 'secreto', { expiresIn: '1h' });
        res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
    });
});

// Iniciar servidor
app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
