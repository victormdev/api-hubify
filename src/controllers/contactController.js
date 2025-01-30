const pool = require("../config/database");

const contactController = {
    // Criar contato
    async create(req, res) {
        const { name, email, phone } = req.body;
        try {
            const [result] = await pool.query(
                "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)",
                [name, email, phone]
            );
            res.status(201).json({ id: result.insertId, name, email, phone });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Listar todos os contatos
    async list(req, res) {
        try {
            const [rows] = await pool.query("SELECT * FROM contacts ORDER BY created_at DESC");
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Buscar contato pelo ID
    async getById(req, res) {
        const { id } = req.params;
        try {
            const [rows] = await pool.query("SELECT * FROM contacts WHERE id = ?", [id]);
            if (rows.length === 0) {
                return res.status(404).json({ message: "Contato não encontrado." });
            }
            res.json(rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = contactController;