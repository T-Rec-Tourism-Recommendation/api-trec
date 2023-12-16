const axios = require('axios')
const db = require('../connection/connection.js');

const predict = async (req, res) => {
  try {
    const { text } = req.body
    const city = req.query.kota
    const apiurl = "http://127.0.0.1:4000/predict_text";
    
    // Make a POST request using Axios
    const getAnswer = await axios.post(apiurl, {
      text: text  
    });
    
    // Send the response back to the client
    const { prediction }  = getAnswer.data

    let query = `SELECT * FROM tourism_with_id  WHERE Category LIKE '%${prediction}%'`;

    if (city) {
      query += ` AND LOWER(City) LIKE LOWER('%${city}%')`;
    }

    console.log(query)

    db.query(query, (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    
      if (results.length === 0) {
        return res.status(404).json({ 
          rekomendasi: prediction,
          message: 'Data Tidak ditemukan' });
      }

      res.json({
        rekomendasi: prediction,
        destinasi: results
      });
    })

  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports=predict