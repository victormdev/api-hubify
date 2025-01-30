const pool = require("../config/database");

const negotiationController = {
    // Cria nova negociação
    async create(req, res) {
        const { title, contact_id, funnel_id, value } = req.body;
        try {
            const [result] = await pool.query(
                "INSERT INTO negotiations (title, status, contact_id, funnel_id, value) VALUES (?, ?, ?, ?, ?)",
                [title, "in_progress", contact_id, funnel_id, value]
            );
            res.status(201).json({ id: result.insertId, title, contact_id, funnel_id, value });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Listar todas as negociações
    async list(req, res) {
        try {
            const [rows] = await pool.query(`
                SELECT n.*, c.name as contact_name, f.name as funnel_name 
                FROM negotiations n 
                JOIN contacts c ON n.contact_id = c.id 
                JOIN funnels f ON n.funnel_id = f.id 
                ORDER BY n.created_at DESC
            `);
            res.json(rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

};

module.exports = negotiationController;