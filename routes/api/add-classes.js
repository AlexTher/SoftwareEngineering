const mongoose = require('mongoose');

// Define the POST / route to add a new class
router.post('/', async (req, res) => {
    try {
        const { className, classID, schedule, pathways, department, description} = req.body;

        // Create a new Class object
        const newClass = await addClass(className, classID, schedule, pathways, department, description)

        // Return a success response
        res.redirect('/admin/dashboard')
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
// Define the addClass function to add a new class
async function addClass(className, classID, schedule, pathways, department, description) {
    try {
        // Create a new Class object
        const newClass = new Class({
            className,
            classID,
            schedule,
            pathways, 
            department, 
            description
        });

        // Save the new class to the database
        await newClass.save();

        // Return the new class object
        return newClass;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to add class');
    }
}

module.exports = router;