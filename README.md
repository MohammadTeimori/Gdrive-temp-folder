# Gdrive-temp-folder

`deleteOldDriveFiles.gs` automatically deletes files older than 30 days (can be specified) from a specified Google Drive folder. It's designed to help manage file storage by routinely cleaning up old and potentially unnecessary files.

## Features
- Identifies and moves files older than 30 days to the trash in a specified Google Drive folder.
- Option to permanently delete files instead of moving them to trash (can be enabled by modifying the script).

## Setup
1. **Create a new Google Apps Script Project:**
   - Go to [Google Apps Script](https://script.google.com/home).
   - Click on `New Script` to create a new project.

2. **Copy the Script:**
   - Copy the contents of `deleteOldDriveFiles.gs`.
   - Paste it into the script editor of your new Google Apps Script project.

3. **Set your Folder ID:**
   - Find the Google Drive folder you want to apply this script to.
   - Get the folder's ID from the URL.
   - Replace `'<Insert your Folder ID>'` in the script with your folder's ID.

4. **Run the Script:**
   - In the script editor, select the `deleteOldFiles` function.
   - Click the Run button.

5. **Authorize the Script:**
   - The first time you run the script, you will need to authorize it to access your Google Drive files.

## Usage
- The script can be run manually from the Google Apps Script interface.
- For automated cleaning, you can set a trigger in the Google Apps Script editor:
  - Click on `Triggers` in the left sidebar.
  - Add a new trigger for the `deleteOldFiles` function, choosing the frequency of execution (e.g., daily).

## Important Notes
- The script currently moves files to the trash. To permanently delete files, replace `file.setTrashed(true)` with `file.deleteFile()` in the script.
- Be cautious with the permanent delete option, as it cannot be undone.
- Always test the script with a sample folder before applying it to important data.
