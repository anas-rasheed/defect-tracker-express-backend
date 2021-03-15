const connection = require('../utilities/connection');

const addDefect = {
  generateDefectId: (priorityLevel) => {
    return connection.getDefectsCollection().then((defects) => {
      return defects
        .findOne()
        .sort({ _id: -1 })
        .limit(1)
        .then((lastDefect) => {
          const temp = lastDefect.defectId.match(/[1][0-9]{5}/g);
          const newId = Number(...temp) + 1;
          switch (priorityLevel) {
            case 'High': {
              return 'H' + String(newId);
            }
            case 'Medium': {
              return 'M' + String(newId);
            }
            case 'Low': {
              return 'L' + String(newId);
            }
          }
        });
    });
  },
  addNewDefect: (newDefectDTO) => {
    return connection.getDefectsCollection().then((defects) => {
      return this.generateDefectId(newDefectDTO.priorityLevel).then(
        (defectId) => {
          newDefectDTO.defectId = defectId;
          newDefectDTO.createdOn = new Date();
          return defects.insertMany(newDefectDTO).then((data) => {
            if (data) {
              return newDefectDTO.defectId;
            } else {
              let error = new Error('Defect Creation Failed.....');
              error.code(500);
              throw error;
            }
          });
        }
      );
    });
  },
};

module.exports = addDefect;
