// controllers


const home = async (req, res) => {
    try{
        res.status(200).send("abhishek from controller method2")
    }catch (error) {
        console.log(error);
    }
}

module.exports = {home}