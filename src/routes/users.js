const { Router } = require("express");
const { User, Role } = require("../models/index");
const { Op } = require("sequelize");
const { tokenGenerator, resetPassword, validateUser } = require("../controllers/userController");

const router = Router();

router.get("/", async (req, res, next) => {
    let Name = req.query.userName;
    if (Name) {
        try {
            let paQuery = await User.findAll({
                include: [{ model: Role }],
                where: {
                    userName: {
                        [Op.iLike]: "%" + Name + "%",
                    },
                },
            });
            if (!paQuery.length) {
                return res.status(404).json("No se encontro el usuario que estas buscando");
            } else {
                return res.json(paQuery);
            }
        } catch (error) {
            next(error);
        }
    }
    try {
        const userBD = await User.findAll({
            include: [{ model: Role }],
        });
        return res.json(userBD);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        let ap = await User.findByPk(id, {
            include: [{ model: Role }],
        });
        return res.send(ap);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    const { name, email, password } = req.body;
    if (email && password) {
        try {
            const newUser = await User.create({
                name: name,
                email: email, //aca creo un nuevo user con las propiedades que necesito
                password: password,
            });
            const rol = await Role.findOne({
                where: {
                    //aca busco en la base de datos donde uno tenga la propiedad client
                    name: "client",
                },
            });
            await newUser.setRole(rol);

            return res.send(
                await User.findByPk(newUser.id, {
                })
            ); //aca seteo a un nuevo user con el rol "cliente"
        } catch (error) {
            next(error);
        }
    } else {
        res.status(404).send({ msg: "Faltan los valores basicos" });
    }
});

router.delete("/:id", async function (req, res, next) {
    const { id } = req.params;
    try {
        let existsInDB = await User.findOne({
            where: {
                id,
            },
        });
        if (existsInDB) {
            User.destroy({
                where: {
                    id,
                },
            });
            return res.status(200).send("User has been deleted from database successfully");
        } else throw new Error("ERROR 500: User with given name does not exist in database");
    } catch (err) {
        next(err);
    }
});


//genera un token y manda un mail, pendendiendo el token case del body:
router.post("/resetPassword", tokenGenerator); // localhost/users/resetpassword

//resetea la password con el token envíado por email en tokenGerator
router.post("/resetPassword/:token", resetPassword); //localhost/users/resetpassword/token

//activa la cuenta con el token envíado por email en tokenGerator
router.post("/activateAccount/:token", validateUser); //localhost/users/resetpassword/token


module.exports = router;
