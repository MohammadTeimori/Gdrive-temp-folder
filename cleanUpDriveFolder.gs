function deleteOldFiles() {
  var folder = DriveApp.getFolderById('<Insert your Folder ID>'); // Replace with your folder's ID
  var files = folder.getFiles();
  var timeLimit = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
  
  while (files.hasNext()) {
    var file = files.next();
    var lastUpdated = file.getLastUpdated();
    
    if ((new Date() - new Date(lastUpdated)) > timeLimit) {
      file.setTrashed(true); // This moves the file to the trash. Replace with file.deleteFile() if you want to delete permanently.
    }
  }
}
