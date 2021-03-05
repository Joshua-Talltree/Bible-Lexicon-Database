USE BA_lexicon;

DROP TABLE IF EXISTS lexicon_table_1;

CREATE TABLE lexicon_table_1
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    lexicon_number VARCHAR(50) DEFAULT 'NONE',
    lexicon_definition LONGTEXT NOT NULL,
    PRIMARY KEY (id)
)