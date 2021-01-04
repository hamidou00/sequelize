const { pick, includes } = require("lodash");

const { dj, Musicalgenre, DjMusicalgenre, Club } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
	getAllDjs: async () => await dj.findAll({ include : Musicalgenre }),

	getDj: async (name) => await dj.findOne({ where: {name}}),

	addDj: async (data) => {
	// const djs = await dj.create(data, {
	//   includes : [
	//     {
	//       association : DjMusicalgenre,
	//       as : " 	djmusicalgenres"
	//     }
	//   ]
	// });

	// const djs = await dj.create({
	// 	name : "f,ezfezfezfezfezcez",
	// 	musicalgenres: [{
	// 		DjMusicalgenres : {
	// 			id : 5,
	// 			// musicalgenre_id : 1,
	// 			// dj_id : dj.id,
	// 			}
	// 		}
	// 	],
	// 	biography : "feijnfdenfgeriozbfihezbhgerzubgherzubhgerbgoerznji",
	// 	club_id : 1
	// },
	// {
	// 	includes : Musicalgenre
	// })

	// const genre = await Musicalgenre.findOne({
	// 	where: { name: 'Rap' },
	// 	// include: Profile
	// });
	
	
	// console.log(djs)


	// const genre = await Musicalgenre.findOne({
	// 	where: { name: 'Rap' },
	// 	// include: Profile
	// });
	// const djs = await dj.create({
	// 	// 	name : "f,ezfezfezfezfezcez",
	// 	biography: "fnejibferubfiherbiuere",
	// 	club_id : 1,
	// 	musicalgenre: [{
	// 		name : "Rap",
	// 		DjMusicalgenres : {
	// 			id : 5
	// 		}
	// 	}]
	// 	}, {
	// 		include: Musicalgenre
	// 	});

	const allGenres = await Musicalgenre.findAll();
	const musical_genres = data.musical_genres;

	const djs = await dj.create(data);
	musical_genres.forEach( async genre => {
		allGenres.forEach( async dbGenre =>  {
			if (dbGenre.dataValues.name === genre) await djs.addMusicalgenre(dbGenre);
		})
	})

	return dj.findOne({
		where : { id : djs.id },
		include : Musicalgenre
	})
	},

	updateDj: async (name, data) => await dj.update(data, {where: {name}} ),

	deleteDj: async (name) => await dj.destroy({where: {name}})
};

module.exports = djsController;
