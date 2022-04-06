const Favorites = require("../../models/favorites");

const addFavorite = async (req, res) => {
  if (req.body) {

    let noteId = req.body.noteId;

    const existingFavorite = await Favorites.findOne({ noteId });




    if(existingFavorite){
      
      Favorites.findOneAndUpdate({ noteId:noteId }, { $set: { favoriteStatus: !existingFavorite.favoriteStatus } }, { upsert: false }, function (err, result) {
        if (err) {
            res.send(500, body)
        }
        else {
            res.send(200, result);
        }
    });
    }
    else{
      const favorite = new Favorites(req.body);

      favorite.favoriteStatus = true;
  
      await favorite
        .save()
        .then((data) => {
          res.status(200).send({ data: data });
        })
        .catch((error) => {
          res.status(500).send({ error: error.message });
        });

    }

  }
};

module.exports = {
  addFavorite,
};
