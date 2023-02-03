import pool from './dbConnection.js';

export async function saveFile(file) {
    const { fileDescription, fileName, fileSize } = file;

    const url = "https://raghavfiles1.s3.amazonaws.com/" + fileName;
    const queryText = `
    INSERT INTO files (filename, filesize, description, url)
    VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `;
    const values = [fileName, fileSize, fileDescription, url];
    return pool.query(queryText, values, (error, results) => {
        if (error) {
            throw error
        } else if (!Array.isArray(results.rows) || results.rows.length < 1) {
            throw error
        } return results.rows[0].id;
    });
}

export async function fetchFiles() {
    const queryText = `SELECT files.*, people.firstname, people.lastname FROM files`;
    try {
        const results = await pool.query(queryText);
        return results.rows;
    }
    catch (e) {
        throw e;
    }
}
