require('dotenv').config();

const newBook=(req,res)=>{
    const query = `INSERT INTO db(title,author,pages,publisher,published_at) VALUES(?,?,?,?,?)`;
  const data=[req.body.title,req.body.author,req.body.pages,req.body.publisher,req.body.published_at];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json("true");
  });
}
const getAllBook=(req,res)=>{
    const query=`SELECT * FROM db`
     connection.query(query,(err,results)=>{
         if (err) throw err
         res.json(results)
     })
    
}
const getSpeceficBook=(req,res)=>{
    const query='SELECT * FROM db WHERE id = ? ';
    const data=[req.params.id];
    connection.query(query,data,(err,results)=>{
      if(err) throw err;
      res.json(results)
    });
}

const deletBookById=(req,res)=>{
    const query = `DELETE FROM db WHERE id=? `;
    const data = [req.params.id];
     connection.query(query, data, (err, results) => {
        console.log(results)
      res.json("deleted");
    });
}

module.exports={
    newBook,
    getAllBook,
    getSpeceficBook,
    deletBookById
}