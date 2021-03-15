module.exports = class Defect {
  constructor(dataObject) {
    this.defectId = dataObject.defectId;
    this.defectSummary = dataObject.defectSummary;
    this.createdBy = dataObject.createdBy;
    this.createdOn = dataObject.createdOn;
    this.priority = dataObject.priority;
    this.priorityLevel = dataObject.priorityLevel;
    this.status = dataObject.status;
    this.assignedTo = dataObject.assignedTo;
  }
};
