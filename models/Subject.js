const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    className: String,
    classID: { type: Number, required: true },
    pathways: [{ type: String, enum: ['WC', 'OVC', 'HP', 'UD', 'FL', 'GA', 'DL', 'NS', 'PE', 'FYE', 'CE', 'QR'] }],
    department: { type: String, enum: ['ACCT', 'AFAM', 'ALE', 'ANTH', 'ARAB', 'ART', 'ARTH', 'BAT', 'BIMA', 'BIOL', 
                                        'BUSN', 'CHEM', 'CHIN', 'CLAC', 'CLAS', 'CMLT', 'COMM', 'CSCI', 'EAST', 'ECON', 
                                        'EDUC', 'ELED', 'ENGL', 'ENGR', 'ENTR', 'ENVI', 'EPSY', 'FILM', 'FNCE', 'FREN', 
                                        'FYE', 'GEOS', 'GERM', 'GLXS', 'GNED', 'GREK', 'GRST', 'HCAD', 'HCAI', 'HCOM', 
                                        'HIST', 'HRM', 'HUMA', 'INTB', 'INTL', 'ITAL', 'JAPN', 'LAC', 'LATN', 'LING', 
                                        'MATH', 'MDRS', 'MFIN', 'MGMT', 'MKTG', 'MLL', 'MUSC', 'MUSE', 'MUSI', 'NEUR', 
                                        'PHED', 'PHIL', 'PHYS', 'PLSI', 'PSYC', 'RELI', 'RUSS', 'SCOM', 'SOCI', 'SPAN', 
                                        'SPMT', 'THTR', 'URBS', 'WAGS'] },
    credits: { type: Number, enum: [0,1,2,3,4,5,6,7,8,9] },
    prereqs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class'}],
    description: {type: String}
});

module.exports = mongoose.model('Subject', subjectSchema);