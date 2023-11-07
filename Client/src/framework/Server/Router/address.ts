import express from "express";
import addressController from "./../../../adapter/UserController/address";
import { userAddressDBrepository } from "../../../application/repositers/userAddressDBrepo";
import { userAddressRepoMongoDB } from "../../repositer/userAddressDBrepo";
import { clientVerifyToken } from "../Middleware/auth";

const AddressRoute = () => {
    const router = express.Router();

    const controller = addressController(userAddressDBrepository, userAddressRepoMongoDB);

    router.post("/user-address-api", clientVerifyToken, controller.registerAddress);
    router.get("/user-edit-address-api/:id", clientVerifyToken, controller.editAddress);
    router.get("/get-user-address-api/:id", clientVerifyToken, controller.getAddress);

    return router;
};

export default AddressRoute;
