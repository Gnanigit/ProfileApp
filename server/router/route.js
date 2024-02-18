import { Router } from "express";
const router = Router();




// post methods
router.route('/register').post((req, res) => {
    res.json('register router')
})

router.route('/registerMail').post();
router.route('/authenticate').post();
router.route('/login').post();


// get methods
router.route('/user/:username').get()
router.route('/generateOTP').get()
router.route('/VerifyOTP').get()
router.route('/createResetSession').get()


// put methods
router.route('')
export default router;