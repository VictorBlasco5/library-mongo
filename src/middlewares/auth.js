
import jwt from "jsonwebtoken";


export const auth = async (req, res, next) => {

    console.log("Soy el auth middleware");

    // split convierte el string en un array y me separa bearer del token porque " " para que separe arrays cada espacio que encuentre. Me coge el segundo array que es la posicion [1]


    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Unauthorized"
                }
            )
        }

        const decoded = jwt.verify( // decodificar el toquen y verificarlo, lo guardardo en una variable llamada decoded
            token,
            process.env.JWT_SECRET
        )


        console.log(decoded);

        req.tokenData = decoded

        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Jwt not valid or malformated",
            error: error
        })
    }
}
