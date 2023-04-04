const express = require('express');
var router = express.Router();
const Timestamp = require('../../models/Timestamp');
const mongoose = require('mongoose');

router.get('/audits', async (req, res, next) => {
    try {
        const query = req.query;

        //debug
        console.log("===========QUERY==========");
        console.log(req.query);
        //end-debug

        const filter = {};
        if (query.auditType) {
            filter['description'] = query.auditType;
        }
        if (query.department) {
            filter['class.subject.department'] = query.department;
        }
        if (query.classID) {
            filter['class.subject.classID'] = query.classID;
        } 
        if (query.subject) {
            filter['class.subject.className'] = { $regex: query.subject, $options: 'i' };
        }
        if (query.startDate && query.endDate) {
            /*Dates end just after midnight the previous day
            This means searching for times between the 4th and 5th would only return
            things that happened on the 4th since anything on the 5th is going to be later in the
            day and not exactly after the previous day's midnight
            We fix this by incrementing the endDate by one day such that it now ends at the next nigth's 
            midnight; this is what endEndDate is: the end of the end date. 
            */ 
            const endDate = new Date(query.endDate)
            var endEndDate = new Date();
            endEndDate = endEndDate.setDate(endDate.getDate() + 1);
            filter['timestamp'] = { $gte: new Date(query.startDate), $lte: endEndDate };
        }
    

        // const blowMyBrainsOut = await Timestamp.find(filter);

        // for (const thing of blowMyBrainsOut) {
        //     function extractID(dummy) {
        //         const match = dummy.toString().match(/"([^"]+)"/);
        //         return match ? match[1].toString() : null;
        //     }
        //     console.log(extractID(thing));
        //     const audit = await Timestamp.findById(extractID(thing))
        //     .populate(
        //         {
        //             path: 'class',
        //             populate: { path: 'subject' }
        //         }
        //     ).exec();
        //     console.log(audit);
        //     audits.push(audit);
        // }   
        // console.log(audits);

        const audits = await Timestamp.find(filter)
            .populate({
                path: 'class',
                populate: {
                    path: 'subject',
                    model: 'Subject',
                    retainNullValues: true
                },
                retainNullValues: true
            })
            .populate('user')
            .populate('student')
            .lean()

        res.render('partials/auditEntry', {audits: audits, layout: false}, function(err,html) {
            res.send('<div id="auditEntry-wrapper">' + html + '</div>');
        });
        
    } catch (err) {
      next(err);
    }
});

module.exports = router;