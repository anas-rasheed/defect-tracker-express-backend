const { Schema } = require('mongoose');

const defectSchema = new Schema(
  {
    defectId: { type: String, required: true, unique: true },
    defectSummary: { type: String, required: true },
    createdBy: { type: String, required: true },
    createdOn: { type: Date, required: true },
    priority: { type: Number, required: true },
    priorityLevel: { type: String, required: true },
    status: { type: String, required: true },
    assignedTo: { type: String, required: true },
  },
  { collection: 'defects' }
);

module.exports = defectSchema;
