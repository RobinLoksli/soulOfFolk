const
    express    = require('express'),
    controller = require('../../controllers/admin/orderController'),
    router     = express.Router();

router.all('/',           controller.actionIndex);
router.all('/view-order', controller.actionViewOrder);
router.all('/delete',     controller.actionDelete);

module.exports = router;