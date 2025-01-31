-- Criação do banco de dados (nome da sua preferência, no caso da minha hospedagem, o nome foi esse abaixo)
CREATE DATABASE IF NOT EXISTS u244230895_apihubify;
USE u244230895_apihubify;

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS funnels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS negotiations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status ENUM('in_progress', 'lost', 'win') NOT NULL DEFAULT 'in_progress',
    contact_id INT NOT NULL,
    funnel_id INT NOT NULL,
    value DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (contact_id) REFERENCES contacts(id) ON DELETE CASCADE,
    FOREIGN KEY (funnel_id) REFERENCES funnels(id) ON DELETE CASCADE
);

INSERT INTO funnels (name) VALUES 
    ('Lead'),
    ('Reunião agendada'),
    ('Proposta enviada'),
    ('Ganho'),
    ('Perdido');