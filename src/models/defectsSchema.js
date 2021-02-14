var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var defectSchema = new Schema({
  defectId: String,
  defectSummary: String,
  createdBy: String,
  createdOn: String,
  priority: String,
  status: String,
  assignedTo: String,
});

module.exports = mongoose.model('Defects', defectSchema);
