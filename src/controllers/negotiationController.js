const pool = require("../config/database");

const negotiationController = {
    
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

};

module.exports = negotiationController;