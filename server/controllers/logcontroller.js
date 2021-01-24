let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validateSession');
const Log = require('../db').import('../models/log');

/********
 *** CREATE A LOG**
  ************/


router.post('/', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id
    }
    Log.create(logEntry)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err }))
})


/********
 *** GET LOGS BY USER**
  ************/

 router.get('/', validateSession, (req, res) => {
    let userid = req.user.id;
    Log.findAll({
        where: { owner_id: userid }
    })
        .then(logs => res.status(200).json(logs))
        .catch(err => res.status(500).json({ error: err }))
});

/********
 * GET LOGS BY ID
 * *******/

router.get('/:id', validateSession, function (req, res) {
    let logId = req.params.id;
    let userid = req.user.id;
    Log.findAll({
        where: { owner_id: userid, id: logId }
    })
       .then(logs => res.status(200).json(logs))
       .catch(err => res.status(500).json({ error: err}))
});

 /********
 * UPDATE LOG
 * *******/

router.put('/:logId', validateSession, function(req, res) {
    const updateLogEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result
    };

    const query = { where: { id: req.params.logId, owner_id: req.user.id } };

    Log.update(updateLogEntry, query)
        .then((logs) => res.status(200).json(logs))
        .catch(err => res.status(500).json({ error: err }));
});


 /********
 * DELETE LOG
 * *******/

router.delete('/:logId', validateSession, function(req, res) {
    const query = { where: { owner_id: req.user.id, id: req.params.logId } };

    Log.destroy(query)
        .then((recordsChanged) => res.status(200).json({ message: `${recordsChanged} record(s) changed.`}),
        (err) => res.status(500).json({ error: err }))
});

module.exports = router;