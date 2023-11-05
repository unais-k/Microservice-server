import express from "express";
import addressController from "./../../../adapter/UserController/address";
import { userAddressDBrepository } from "../../../application/repositers/userAddressDBrepo";
import { userAddressRepoMongoDB } from "../../repositer/userAddressDBrepo";

const AddressRoute = () => {
    const router = express.Router();

    const controller = addressController(userAddressDBrepository, userAddressRepoMongoDB);

    router.post("/user-address-api");

    return router;
};

export default AddressRoute;
